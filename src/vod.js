const COS = require("./cos-wx-sdk-v5.1");
const vodUtil = require("./vod_util");
const { UploaderEvent } = require("./constants");

class Uploader {
  constructor(opts) {
    const self = this;
    self.opts = opts;

    self.retryCommitNum = 3;
    self.retryApplyNum = 3;

    let videoFile;
    if (opts.mediaFile) {
      // alias
      videoFile = opts.mediaFile;
    } else {
      ({ videoFile } = opts);
    }
    if (opts.mediaName) {
      // alias
      self.fileName = opts.mediaName;
    } else {
      self.fileName = opts.fileName;
    }

    const { coverFile } = opts;

    if (vodUtil.getType(opts) !== "object") {
      wx.showToast({
        title: "参数必须为对象类型",
        icon: "error",
        duration: 3000
      });
      return;
    }
    if (!videoFile) {
      wx.showToast({
        title: "需要mediaFile字段",
        icon: "error",
        duration: 3000
      });
      return;
    }

    self.videoFileMessage = vodUtil.getFileMessage(videoFile, self.fileName);
    if (coverFile) {
      coverFile.tempFilePath = coverFile.tempFilePaths[0];
      self.coverFileMessage = vodUtil.getFileMessage(coverFile, self.fileName);
    }
    if (!opts.getSignature) {
      wx.showToast({
        title: "需要getSignature字段",
        icon: "error",
        duration: 3000
      });
      return;
    }
    if (
      !vodUtil.isFunction(opts.getSignature) ||
      !vodUtil.isFunction(opts.success) ||
      !vodUtil.isFunction(opts.error) ||
      !vodUtil.isFunction(opts.progress) ||
      !vodUtil.isFunction(opts.finish)
    ) {
      wx.showToast({
        title:
          "getSignature必须为函数，如果有success、error、progress、finish，也必须为函数",
        icon: "error",
        duration: 3000
      });
    }
  }

  start() {
    const self = this;

    self.applyUpload(result => {
      self.uploadFile(result, () => {
        self.commitUpload();
      });
    });
  }

  applyUpload(callback) {
    const self = this;
    self.opts.getSignature(signature => {
      self.signature = signature;
      const sendParams = {
        signature: signature,
        videoName: self.videoFileMessage.name,
        videoType: self.videoFileMessage.type,
        videoSize: self.videoFileMessage.size
      };
      if (self.coverFileMessage) {
        // upload video together with cover
        sendParams.coverName = self.coverFileMessage.name;
        sendParams.coverType = self.coverFileMessage.type;
        sendParams.coverSize = self.coverFileMessage.size;
      }
      wx.request({
        method: "POST",
        url: "https://vod2.qcloud.com/v3/index.php?Action=ApplyUploadUGC",
        data: sendParams,
        dataType: "json",
        success: result => {
          if (result.data.code === 0) {
            self.vodSessionKey = result.data.data.vodSessionKey;
            callback(result);
          } else {
            // eslint-disable-next-line no-lonely-if
            if (self.retryApplyNum > 0) {
              self.retryApplyNum -= 1;
              self.applyUpload(callback);
            } else {
              // eslint-disable-next-line no-lonely-if
              if (vodUtil.isFunction(self.opts.error)) {
                self.opts.error(result);
              }
            }
          }
        },
        fail: result => {
          if (vodUtil.isFunction(self.opts.error)) {
            self.opts.error(result);
          }
        }
      });
    });
  }

  uploadFile(result, cb) {
    const self = this;

    const applyData = result.data.data;

    const cos = new COS({
      getAuthorization: (options, callback) => {
        callback({
          TmpSecretId: applyData.tempCertificate.secretId,
          TmpSecretKey: applyData.tempCertificate.secretKey,
          XCosSecurityToken: applyData.tempCertificate.token,
          ExpiredTime: applyData.tempCertificate.expiredTime
        });
      }
    });

    const cosCommonParam = {
      bucket: `${applyData.storageBucket}-${applyData.storageAppId}`,
      region: applyData.storageRegionV5
    };

    const uploadCosParams = [];

    if (this.videoFileMessage) {
      const cosVideoParam = {
        ...cosCommonParam,
        filePath: this.videoFileMessage.tempFilePath,
        key: applyData.video.storagePath,
        onProgress: function onProgress(data) {
          self.emit(UploaderEvent.video_progress, data);
          self.emit(UploaderEvent.media_progress, data);
        }
      };
      uploadCosParams.push(cosVideoParam);
    }

    if (this.coverFileMessage) {
      const cosCoverParam = {
        ...cosCommonParam,
        filePath: this.coverFileMessage.tempFilePath,
        key: applyData.cover.storagePath
        // onProgress: function onProgress(data) {
        //   self.emit(UploaderEvent.cover_progress, data);
        // }
      };
      uploadCosParams.push(cosCoverParam);
    }

    const uploadPromises = uploadCosParams.map(uploadCosParam => {
      return new Promise(function(resolve, reject) {
        cos.postObject(
          {
            Bucket: uploadCosParam.bucket,
            Region: uploadCosParam.region,
            Key: uploadCosParam.key,
            FilePath: uploadCosParam.filePath,
            onProgress: info => {
              if (vodUtil.isFunction(self.opts.progress)) {
                self.opts.progress(info);
              }
            }
          },
          (err, data) => {
            if (err) {
              // 失败
              if (vodUtil.isFunction(self.opts.error)) {
                self.opts.error(err);
              }
              reject();
              return;
            }
            // 成功
            if (vodUtil.isFunction(self.opts.success)) {
              self.opts.success(data);
            }
            resolve();
          }
        );
      });
    });

    Promise.all(uploadPromises).then(function() {
      cb();
    });
  }

  commitUpload() {
    const self = this;

    const sendParam = {
      signature: this.signature,
      vodSessionKey: this.vodSessionKey
    };

    wx.request({
      method: "POST",
      url: "https://vod2.qcloud.com/v3/index.php?Action=CommitUploadUGC",
      data: sendParam,
      dataType: "json",
      success: result => {
        if (result.data.code === 0) {
          const res = result.data.data;
          if (vodUtil.isFunction(self.opts.finish)) {
            self.opts.finish({
              fileId: res.fileId,
              videoName: self.videoFileMessage.name,
              videoUrl: res.video && res.video.url,
              coverUrl: res.cover && res.cover.url
            });
          }
        } else {
          // eslint-disable-next-line no-lonely-if
          if (self.retryCommitNum > 0) {
            self.retryCommitNum -= 1;
            self.commitUpload();
          } else {
            // eslint-disable-next-line no-lonely-if
            if (vodUtil.isFunction(self.opts.error)) {
              self.opts.error(result);
            }
          }
        }
      },
      fail: result => {
        if (vodUtil.isFunction(self.opts.error)) {
          self.opts.error(result);
        }
      }
    });
  }
}

module.exports = {
  start: params => {
    const uploader = new Uploader(params);
    uploader.start();
  }
};
