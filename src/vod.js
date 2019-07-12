const COS = require("./cos-wx-sdk-v5.1");
const vodUtil = require("./vod_util");
const { UploaderEvent } = require("./constants");

class Uploader {
  constructor(opts) {
    const self = this;

    if (vodUtil.getType(opts) !== "object") {
      throw new Error("opts must be a object");
    }

    self.retryCommitNum = 3;
    self.retryApplyNum = 3;

    let videoFile;
    if (opts.mediaFile) {
      // alias
      videoFile = opts.mediaFile;
    } else {
      ({ videoFile } = opts);
    }

    if (!videoFile) {
      throw new Error("need `mediaFile` param");
    }

    if (opts.mediaName) {
      // alias
      self.fileName = opts.mediaName;
    } else {
      self.fileName = opts.fileName;
    }

    const { coverFile } = opts;

    self.videoFileMessage = vodUtil.getFileMessage(videoFile, self.fileName);
    if (coverFile) {
      coverFile.tempFilePath = coverFile.tempFilePaths[0];
      self.coverFileMessage = vodUtil.getFileMessage(coverFile, self.fileName);
    }
    self.getSignature = opts.getSignature;
    self.success = opts.success;
    self.error = opts.error;
    self.progress = opts.progress;
    self.finish = opts.finish;
    if (!self.getSignature) {
      throw new Error("need `getSignature` param");
    }
    if (
      !vodUtil.isFunction(self.getSignature) ||
      !vodUtil.isFunction(self.success) ||
      !vodUtil.isFunction(self.error) ||
      !vodUtil.isFunction(self.progress) ||
      !vodUtil.isFunction(self.finish)
    ) {
      throw new Error(
        "getSignature, success, error, progress, finish must be a Function."
      );
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
    self.getSignature(signature => {
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
              if (vodUtil.isFunction(self.error)) {
                self.error(result);
              }
            }
          }
        },
        fail: result => {
          if (vodUtil.isFunction(self.error)) {
            self.error(result);
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
        // cover don't need progress
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
              if (vodUtil.isFunction(self.progress)) {
                self.progress(info);
              }
            }
          },
          (err, data) => {
            if (err) {
              // when fails
              if (vodUtil.isFunction(self.error)) {
                self.error(err);
              }
              reject();
              return;
            }
            // when succeeds
            if (vodUtil.isFunction(self.success)) {
              self.success(data);
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
          if (vodUtil.isFunction(self.finish)) {
            self.finish({
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
            if (vodUtil.isFunction(self.error)) {
              self.error(result);
            }
          }
        }
      },
      fail: result => {
        if (vodUtil.isFunction(self.error)) {
          self.error(result);
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
