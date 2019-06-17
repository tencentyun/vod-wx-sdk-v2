const COS = require("./cos-wx-sdk-v5.1");
const vodUtil = require("./vod_util");

class Uploader {
  constructor() {}

  start(opts) {
    const self = this;

    if (opts.mediaFile) {
      opts.videoFile = opts.mediaFile;
    }
    if (opts.mediaName) {
      opts.fileName = opts.mediaName;
    }
    if (vodUtil.getType(opts) != "object") {
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
    } else {
      self.fileMessage = vodUtil.getFileMessage(opts.videoFile, opts.fileName);
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
      return;
    }

    self.opts = opts;

    if (vodUtil.getType(self.retryStartNum) == "undefined") {
      self.retryStartNum = 3;
    }

    opts.getSignature(function(signature) {
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
        success: function(result) {
          if (result.data.code == 0) {
            self.vodSessionKey = result.data.data.vodSessionKey;
            self.uploadFile(result);
          } else {
            if (self.retryStartNum > 0) {
              self.retryStartNum--;
              self.start(opts);
            } else {
              if (typeof self.opts.error == "function") {
                self.opts.error(result);
              }
            }
          }
        },
        fail: function(result) {
          if (typeof self.opts.error == "function") {
            self.opts.error(result);
          }
        }
      });
    });
  }

  uploadFile(result) {
    const self = this;

    const res = result.data.data;
    const cosParam = {
      bucket: res.storageBucket + "-" + res.storageAppId,
      region: res.storageRegionV5,
      key: res.video.storagePath,
      filePath: this.fileMessage.tempFilePath,
      secretId: res.tempCertificate.secretId,
      secretKey: res.tempCertificate.secretKey,
      token: res.tempCertificate.token,
      expiredTime: res.tempCertificate.expiredTime
    };
    const cos = new COS({
      getAuthorization: function(options, callback) {
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
        onProgress: function(info) {
          if (typeof self.opts.progress == "function") {
            self.opts.progress(info);
          }
        }
      },
      this.requestCallback.bind(this)
    );
  }

  // cos回调统一处理函数
  requestCallback(err, data) {
    const self = this;
    if (err) {
      //失败
      if (typeof self.opts.error == "function") {
        self.opts.error(err);
      }
    } else {
      //成功
      if (typeof self.opts.success == "function") {
        self.opts.success(data);
      }
      self.finishUpload();
    }
  }

  finishUpload() {
    const self = this;

    const sendParam = {
      signature: this.signature,
      vodSessionKey: this.vodSessionKey
    };

    if (vodUtil.getType(self.retryFinishNum) == "undefined") {
      self.retryFinishNum = 3;
    }

    wx.request({
      method: "POST",
      url: "https://vod2.qcloud.com/v3/index.php?Action=CommitUploadUGC",
      data: sendParam,
      dataType: "json",
      success: function(result) {
        if (result.data.code == 0) {
          const res = result.data.data;
          if (typeof self.opts.finish == "function") {
            self.opts.finish({
              fileId: res.fileId,
              videoName: self.fileMessage.name,
              videoUrl: res.video && res.video.url
            });
          }
        } else {
          if (self.retryFinishNum > 0) {
            self.retryFinishNum--;
            self.finishUpload();
          } else {
            if (typeof self.opts.error == "function") {
              self.opts.error(result);
            }
          }
        }
      },
      fail: function(result) {
        if (typeof self.opts.error == "function") {
          self.opts.error(result);
        }
      }
    });
  }
}

module.exports = {
  start: function(params) {
    const uploader = new Uploader();
    uploader.start(params);
  }
};
