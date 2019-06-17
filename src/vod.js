const COS = require("./cos-wx-sdk-v5.1");

var Util = {
  getType: function(a) {
    return null === a
      ? "null"
      : void 0 === a
      ? "undefined"
      : Object.prototype.toString
          .call(a)
          .slice(8, -1)
          .toLowerCase();
  },
  isFunction: function(para) {
    if (para && this.getType(para) != "function") {
      return false;
    } else {
      return true;
    }
  },
  getFileMessage: function(file, fileName) {
    var fileMsg = {};
    fileMsg.tempFilePath = file.tempFilePath;
    fileMsg.type = file.tempFilePath.substring(
      file.tempFilePath.lastIndexOf(".") + 1
    );
    if (typeof fileName == "string") {
      fileMsg.name = fileName;
    } else {
      fileMsg.name = "来自小程序";
    }
    fileMsg.size = file.size;
    return fileMsg;
  }
};

var _ugcUploader = {
  start: function(opts) {
    if (opts.mediaFile) {
      opts.videoFile = opts.mediaFile;
    }
    if (opts.mediaName) {
      opts.fileName = opts.mediaName;
    }
    var This = _ugcUploader;
    if (Util.getType(opts) != "object") {
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
      This.fileMessage = Util.getFileMessage(opts.videoFile, opts.fileName);
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
      !Util.isFunction(opts.getSignature) ||
      !Util.isFunction(opts.success) ||
      !Util.isFunction(opts.error) ||
      !Util.isFunction(opts.progress) ||
      !Util.isFunction(opts.finish)
    ) {
      wx.showToast({
        title:
          "getSignature必须为函数，如果有success、error、progress、finish，也必须为函数",
        icon: "error",
        duration: 3000
      });
      return;
    }

    This.opts = opts;

    if (Util.getType(This.retryStartNum) == "undefined") {
      This.retryStartNum = 3;
    }

    opts.getSignature(function(signature) {
      This.signature = signature;
      var sendParam = {
        signature: signature,
        videoName: This.fileMessage.name,
        videoType: This.fileMessage.type,
        videoSize: This.fileMessage.size
      };
      wx.request({
        method: "POST",
        url: "https://vod2.qcloud.com/v3/index.php?Action=ApplyUploadUGC",
        data: sendParam,
        dataType: "json",
        success: function(result) {
          if (result.data.code == 0) {
            This.vodSessionKey = result.data.data.vodSessionKey;
            This.uploadFile(result);
          } else {
            if (This.retryStartNum > 0) {
              This.retryStartNum--;
              This.start(opts);
            } else {
              if (typeof This.opts.error == "function") {
                This.opts.error(result);
              }
            }
          }
        },
        fail: function(result) {
          if (typeof This.opts.error == "function") {
            This.opts.error(result);
          }
        }
      });
    });
  },
  uploadFile: function(result) {
    var res = result.data.data;
    var cosParam = {
      bucket: res.storageBucket + "-" + res.storageAppId,
      region: res.storageRegionV5,
      key: res.video.storagePath,
      filePath: this.fileMessage.tempFilePath,
      secretId: res.tempCertificate.secretId,
      secretKey: res.tempCertificate.secretKey,
      token: res.tempCertificate.token,
      expiredTime: res.tempCertificate.expiredTime
    };
    var cos = new COS({
      getAuthorization: function(options, callback) {
        callback({
          TmpSecretId: cosParam.secretId,
          TmpSecretKey: cosParam.secretKey,
          XCosSecurityToken: cosParam.token,
          ExpiredTime: cosParam.expiredTime
        });
      }
    });
    var This = this;
    cos.postObject(
      {
        Bucket: cosParam.bucket,
        Region: cosParam.region,
        Key: cosParam.key,
        FilePath: cosParam.filePath,
        onProgress: function(info) {
          if (typeof This.opts.progress == "function") {
            This.opts.progress(info);
          }
        }
      },
      this.requestCallback
    );
  },
  // cos回调统一处理函数
  requestCallback: function(err, data) {
    var This = _ugcUploader;
    if (err) {
      //失败
      if (typeof This.opts.error == "function") {
        This.opts.error(err);
      }
    } else {
      //成功
      if (typeof This.opts.success == "function") {
        This.opts.success(data);
      }
      This.finishUpload();
    }
  },
  finishUpload: function() {
    var sendParam = {
      signature: this.signature,
      vodSessionKey: this.vodSessionKey
    };

    var This = this;
    if (Util.getType(This.retryFinishNum) == "undefined") {
      This.retryFinishNum = 3;
    }

    wx.request({
      method: "POST",
      url: "https://vod2.qcloud.com/v3/index.php?Action=CommitUploadUGC",
      data: sendParam,
      dataType: "json",
      success: function(result) {
        if (result.data.code == 0) {
          var res = result.data.data;
          if (typeof This.opts.finish == "function") {
            This.opts.finish({
              fileId: res.fileId,
              videoName: This.fileMessage.name,
              videoUrl: res.video && res.video.url
            });
          }
        } else {
          if (This.retryFinishNum > 0) {
            This.retryFinishNum--;
            This.finishUpload();
          } else {
            if (typeof This.opts.error == "function") {
              This.opts.error(result);
            }
          }
        }
      },
      fail: function(result) {
        if (typeof This.opts.error == "function") {
          This.opts.error(result);
        }
      }
    });
  }
};

module.exports = {
  start: _ugcUploader.start
};
