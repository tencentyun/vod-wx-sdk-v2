const COS = require("cos-wx-sdk-v5");
const vodUtil = require("./vod_util");
const { UploaderEvent } = require("./constants");
const { EventEmitter } = require("events");
const COS_REGION_KEY = "COS_REGION_KEY";
const { VodReporter, reportEvent } = require("./reporter");

function raceRequest(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: "HEAD",
      url: "https://" + options.domain,
      success: (result) => {
        resolve(options.region);
      },
      fail: (result) => {
        if (vodUtil.isFunction(self.error)) {
          self.error(result);
        }
      },
    });
  });
}

class Uploader extends EventEmitter {
  retryCommitNum = 3;
  retryApplyNum = 3;
  retryPrepareNum = 3;

  constructor(opts) {
    super();
    const self = this;
    if (vodUtil.getType(opts) !== "object") {
      throw new Error("opts must be a object");
    }

    self.appId = opts.appId || undefined;
    self.taskId = undefined;
    self.cos = undefined;
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
    self.fileKey = videoFile.tempFilePath.replace(/^.*?([^/]{32}\.\w+)$/, "$1");
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
      coverFile.size = coverFile.tempFiles[0].size;
      self.coverFileMessage = vodUtil.getFileMessage(coverFile, self.fileName);
      self.fileKey = coverFile.tempFilePath.replace(
        /^.*?([^/]{32}\.\w+)$/,
        "$1"
      );
    }
    self.reportId = opts.reportId || "";
    self.getSignature = opts.getSignature;
    // self.success = opts.success;
    self.error = opts.error;
    self.progress = opts.progress;
    self.finish = opts.finish;
    if (!self.getSignature) {
      throw new Error("need `getSignature` param");
    }
    if (
      !vodUtil.isFunction(self.getSignature) ||
      // !vodUtil.isFunction(self.success) ||
      !vodUtil.isFunction(self.error) ||
      !vodUtil.isFunction(self.progress) ||
      !vodUtil.isFunction(self.finish)
    ) {
      throw new Error(
        "getSignature, error, progress, finish must be a Function."
      );
    }
    // 网络状态变化时重新竞速获取最优 storeRegion
    // wx.onNetworkStatusChange((res) => {
    //   if (res.isConnected) {
    //     this.requestRegion();
    //   }
    // });
  }

  setStorage(name, val) {
    wx.setStorageSync("wp_ugc_" + name, val);
  }

  getStorage(name) {
    try {
      const val = wx.getStorageSync("wp_ugc_" + name);
      return val;
    } catch (e) {
      return "";
    }
  }

  delStorage(name) {
    wx.removeStorageSync("wp_ugc_" + name);
  }

  regionRace(cosRegionList, cb) {
    Promise.race(cosRegionList.map((item) => raceRequest(item))).then((res) => {
      wx.setStorageSync(COS_REGION_KEY, res);
      // report target region obtain from prepare
      if (cb) {
        cb(res);
      }
    });
  }
  requestRegion(callback) {
    const self = this;
    self.getSignature((signature) => {
      self.signature = signature;
      const sendParams = {
        signature: signature,
      };
      const requestStartTime = Date.now();
      wx.request({
        method: "POST",
        url: "https://vod2.qcloud.com/v3/index.php?Action=PrepareUploadUGC",
        data: sendParams,
        dataType: "json",
        success: (result) => {
          if (result.data.code === 0) {
            self.appId = self.appId || result.data.data.appId;
            self.regionRace(result.data.data.cosRegionList, function (res) {
              self.emit(reportEvent.report_prepare, {
                data: {
                  region: res,
                },
                requestStartTime: requestStartTime,
              });
              callback(res);
            });
          } else {
            // eslint-disable-next-line no-lonely-if
            if (self.retryPrepareNum > 0) {
              self.emit(reportEvent.report_prepare, {
                err: result.data,
                requestStartTime: requestStartTime,
              });
              self.retryPrepareNum -= 1;
              self.requestRegion(callback);
            } else {
              // eslint-disable-next-line no-lonely-if
              if (vodUtil.isFunction(self.error)) {
                self.error(result);
              }
            }
          }
        },
        fail: (result) => {
          if (vodUtil.isFunction(self.error)) {
            self.error(result);
          }
        },
      });
    });
  }

  getStoreRegion(callback) {
    const self = this;
    try {
      const region = wx.getStorageSync(COS_REGION_KEY);
      if (!region) {
        throw new Error("no storage");
      }
      return callback(region);
    } catch (e) {
      self.requestRegion(callback);
    }
  }

  start() {
    const self = this;
    // self.getStoreRegion((region) => {

    // });
    self.applyUpload((result) => {
      self.uploadFile(result, () => {
        self.commitUpload();
      });
    });
  }
  cancel() {
    this.cos.cancelTask(this.taskId);
  }
  pause() {
    this.cos.pauseTask(this.taskId);
  }
  restart() {
    this.cos.restartTask(this.taskId);
  }

  applyUpload(callback) {
    const self = this;
    self.getSignature((signature) => {
      self.signature = signature;
      const sessionKey = self.getStorage(self.fileKey);
      let sendParams;
      if (sessionKey) {
        sendParams = {
          signature: signature,
          vodSessionKey: sessionKey,
        };
      } else {
        sendParams = {
          signature: signature,
          videoName: self.videoFileMessage.name,
          videoType: self.videoFileMessage.type,
          // videoSize: self.videoFileMessage.size,
        };
      }
      if (self.coverFileMessage) {
        // upload video together with cover
        sendParams.coverName = self.coverFileMessage.name;
        sendParams.coverType = self.coverFileMessage.type;
        // sendParams.coverSize = self.coverFileMessage.size;
      }
      const requestStartTime = Date.now();
      wx.request({
        method: "POST",
        url: "https://vod2.qcloud.com/v3/index.php?Action=ApplyUploadUGC",
        data: sendParams,
        dataType: "json",
        success: (result) => {
          if (result.data.code === 0) {
            self.appId = self.appId || result.data.data.appId;
            self.emit(reportEvent.report_apply, {
              data: sendParams,
              requestStartTime: requestStartTime,
            });
            self.vodSessionKey = result.data.data.vodSessionKey;
            self.setStorage(self.fileKey, self.vodSessionKey);
            callback(result);
          } else {
            // eslint-disable-next-line no-lonely-if
            if (self.retryApplyNum > 0) {
              self.emit(reportEvent.report_apply, {
                err: result.data,
                requestStartTime: requestStartTime,
              });
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
        fail: (result) => {
          if (vodUtil.isFunction(self.error)) {
            self.error(result);
          }
        },
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
          StartTime: applyData.timestamp,
          ExpiredTime: applyData.tempCertificate.expiredTime,
        });
      },
    });
    cos.on("before-send", function (opt) {
      var url = opt.url;
      var u = url.match(/^(https?:\/\/([^\/]+)\/)([^\/]*\/?)(.*)$/);
      opt.url = url.replace(u[2], "vod2.qcloud.com");
      opt.headers["Vod-Forward-Cos"] = u[2];
    });
    this.cos = cos;
    const cosCommonParam = {
      bucket: `${applyData.storageBucket}-${applyData.storageAppId}`,
      region: applyData.storageRegionV5,
    };

    const uploadCosParams = [];

    if (this.videoFileMessage) {
      const cosVideoParam = {
        ...cosCommonParam,
        filePath: this.videoFileMessage.tempFilePath,
        fileSize: this.videoFileMessage.size,
        key: applyData.video.storagePath,
        onProgress: (info) => {
          if (vodUtil.isFunction(self.progress)) {
            self.progress(info);
          }
        },
        // onProgress: function onProgress(data) {
        //   self.emit(UploaderEvent.video_progress, data);
        //   self.emit(UploaderEvent.media_progress, data);
        // },
        onTaskReady: function (taskId) {
          self.taskId = taskId;
        },
      };
      uploadCosParams.push(cosVideoParam);
    }

    if (this.coverFileMessage) {
      const cosCoverParam = {
        ...cosCommonParam,
        fileSize: this.coverFileMessage.size,
        filePath: this.coverFileMessage.tempFilePath,
        key: applyData.cover.storagePath,
        onTaskReady: vodUtil.noop,
        onProgress: vodUtil.noop,
        // cover don't need progress
        // onProgress: function onProgress(data) {
        //   self.emit(UploaderEvent.cover_progress, data);
        // }
      };
      uploadCosParams.push(cosCoverParam);
    }

    const uploadPromises = uploadCosParams.map((uploadCosParam) => {
      return new Promise(function (resolve, reject) {
        const requestStartTime = Date.now();
        cos.sliceUploadFile(
          // cos.postObject(
          {
            Bucket: uploadCosParam.bucket,
            Region: uploadCosParam.region,
            Key: uploadCosParam.key,
            FilePath: uploadCosParam.filePath,
            FileSize: uploadCosParam.fileSize,
            onProgress: uploadCosParam.onProgress,
            onTaskReady: uploadCosParam.onTaskReady,
          },
          (err, data) => {
            if (err) {
              // when fails
              if (
                uploadCosParam.filePath === self.videoFileMessage.tempFilePath
              ) {
                self.emit(reportEvent.report_cos_upload, {
                  err: err,
                  requestStartTime: requestStartTime,
                });
              }
              if (vodUtil.isFunction(self.error)) {
                const { error } = err;
                const errObj =
                  error && error.Code
                    ? {
                        code: error.Code,
                        message: error.Message || error.message,
                        reqid: error.RequestId || undefined,
                      }
                    : {
                        code: err.statusCode || -2,
                        message: "cos error",
                      };
                self.error(errObj);
              }
              reject();
              return;
            }
            // when succeeds
            // if (vodUtil.isFunction(self.success)) {
            //   self.success(data);
            // }
            resolve();
          }
        );
      });
    });

    Promise.all(uploadPromises).then(function () {
      cb();
    });
  }

  commitUpload() {
    const self = this;

    const sendParam = {
      signature: this.signature,
      vodSessionKey: this.vodSessionKey,
    };
    const requestStartTime = Date.now();
    wx.request({
      method: "POST",
      url: "https://vod2.qcloud.com/v3/index.php?Action=CommitUploadUGC",
      data: sendParam,
      dataType: "json",
      success: (result) => {
        if (result.data.code === 0) {
          self.emit(reportEvent.report_commit, {
            data: result.data.data,
            requestStartTime: requestStartTime,
          });
          const res = result.data.data;
          if (vodUtil.isFunction(self.finish)) {
            self.finish({
              fileId: res.fileId,
              videoName: self.videoFileMessage.name,
              videoUrl: res.video && res.video.url,
              coverUrl: res.cover && res.cover.url,
              verify_content: res.video && res.video.verify_content,
            });
          }
          self.delStorage(self.fileKey);
        } else {
          // eslint-disable-next-line no-lonely-if
          self.emit(reportEvent.report_commit, {
            err: result.data,
            requestStartTime: requestStartTime,
          });
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
      fail: (result) => {
        if (vodUtil.isFunction(self.error)) {
          self.error(result);
        }
      },
    });
  }
}

module.exports = {
  start: (params) => {
    try {
      const uploader = new Uploader(params);
      new VodReporter(uploader);
      uploader.start();
      return uploader;
    } catch (e) {
      if (vodUtil.isFunction(params.error)) {
        params.error({
          code: -1,
          message: e.message,
        });
      } else {
        throw e;
      }
    }
  },
};
