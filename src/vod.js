const COS = require("./cos-wx-sdk-v5.1");
const vodUtil = require("./vod_util");

class Uploader {
  constructor(opts) {
    const self = this;
    self.opts = opts;

    self.retryCommitNum = 3;
    self.retryApplyNum = 3;

    if (opts.mediaFile) {
      // alias
      self.opts.videoFile = opts.mediaFile;
    }
    if (opts.mediaName) {
      // alias
      self.opts.fileName = opts.mediaName;
    }
    if (vodUtil.getType(opts) !== "object") {
      wx.showToast({
        title: "参数必须为对象类型",
        icon: "error",
        duration: 3000
      });
      return;
    }
    if (!opts.videoFile) {
      wx.showToast({
        title: "需要videoFile字段",
        icon: "error",
        duration: 3000
      });
      return;
    }

    self.fileMessage = vodUtil.getFileMessage(opts.videoFile, opts.fileName);
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
      const sendParam = {
        signature: signature,
        videoName: self.fileMessage.name,
        videoType: self.fileMessage.type,
        videoSize: self.fileMessage.size
      };
      wx.request({
        method: "POST",
        url: "https://vod2.qcloud.com/v3/index.php?Action=ApplyUploadUGC",
        data: sendParam,
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

    const res = result.data.data;
    const cosParam = {
      bucket: `${res.storageBucket}-${res.storageAppId}`,
      region: res.storageRegionV5,
      key: res.video.storagePath,
      filePath: this.fileMessage.tempFilePath,
      secretId: res.tempCertificate.secretId,
      secretKey: res.tempCertificate.secretKey,
      token: res.tempCertificate.token,
      expiredTime: res.tempCertificate.expiredTime
    };
    const cos = new COS({
      getAuthorization: (options, callback) => {
        callback({
          TmpSecretId: cosParam.secretId,
          TmpSecretKey: cosParam.secretKey,
          XCosSecurityToken: cosParam.token,
          ExpiredTime: cosParam.expiredTime
        });
      }
    });
    cos.postObject(
      {
        Bucket: cosParam.bucket,
        Region: cosParam.region,
        Key: cosParam.key,
        FilePath: cosParam.filePath,
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
        } else {
          // 成功
          if (vodUtil.isFunction(self.opts.success)) {
            self.opts.success(data);
          }
          cb();
        }
      }
    );
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
              videoName: self.fileMessage.name,
              videoUrl: res.video && res.video.url
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
