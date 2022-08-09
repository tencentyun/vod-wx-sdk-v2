(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COS = __webpack_require__(1);

var vodUtil = __webpack_require__(2);

var _require = __webpack_require__(3),
    UploaderEvent = _require.UploaderEvent;

var _require2 = __webpack_require__(4),
    EventEmitter = _require2.EventEmitter;

var COS_REGION_KEY = "COS_REGION_KEY";
var HOST = "vod2.qcloud.com";

var _require3 = __webpack_require__(5),
    VodReporter = _require3.VodReporter,
    reportEvent = _require3.reportEvent;

function raceRequest(options) {
  return new Promise(function (resolve, reject) {
    wx.request({
      method: "HEAD",
      url: "https://" + options.domain,
      success: function success(result) {
        resolve(options.region);
      },
      fail: function fail(result) {
        if (vodUtil.isFunction(self.error)) {
          self.error(result);
        }
      }
    });
  });
}

function getCosStrategy(params) {
  var sourceData = {
    FileParallelLimit: params.fileParallelLimit,
    ChunkParallelLimit: params.chunkParallelLimit || 6,
    ChunkRetryTimes: params.chunkRetryTimes,
    ChunkSize: params.chunkSize || 1048576 * 8,
    SliceSize: params.sliceSize,
    CopyChunkParallelLimit: params.copyChunkParallelLimit,
    CopyChunkSize: params.copyChunkSize,
    CopySliceSize: params.copySliceSize,
    ProgressInterval: params.progressInterval
  };
  var cosStrategy = Object.keys(sourceData).filter(function (key) {
    return sourceData[key] !== undefined;
  }).reduce(function (acc, key) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, sourceData[key]));
  }, {});
  return cosStrategy;
}

var Uploader = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Uploader, _EventEmitter);

  var _super = _createSuper(Uploader);

  function Uploader(opts) {
    var _this;

    _classCallCheck(this, Uploader);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "retryCommitNum", 3);

    _defineProperty(_assertThisInitialized(_this), "retryApplyNum", 3);

    _defineProperty(_assertThisInitialized(_this), "retryPrepareNum", 3);

    var self = _assertThisInitialized(_this);

    if (vodUtil.getType(opts) !== "object") {
      throw new Error("opts must be a object");
    }

    self.appId = opts.appId || undefined;
    self.taskId = undefined;
    self.cos = undefined;
    self.cosStrategy = getCosStrategy(opts);
    var videoFile;

    if (opts.mediaFile) {
      // alias
      videoFile = opts.mediaFile;
    } else {
      videoFile = opts.videoFile;
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

    var coverFile = opts.coverFile;
    self.videoFileMessage = vodUtil.getFileMessage(videoFile, self.fileName);

    if (coverFile) {
      coverFile.tempFilePath = coverFile.tempFilePaths[0];
      coverFile.size = coverFile.tempFiles[0].size;
      self.coverFileMessage = vodUtil.getFileMessage(coverFile, self.fileName);
      self.fileKey = coverFile.tempFilePath.replace(/^.*?([^/]{32}\.\w+)$/, "$1");
    }

    self.reportId = opts.reportId || "";
    self.getSignature = opts.getSignature; // self.success = opts.success;

    self.error = opts.error;
    self.progress = opts.progress;
    self.finish = opts.finish;

    if (!self.getSignature) {
      throw new Error("need `getSignature` param");
    }

    if (!vodUtil.isFunction(self.getSignature) || // !vodUtil.isFunction(self.success) ||
    !vodUtil.isFunction(self.error) || !vodUtil.isFunction(self.progress) || !vodUtil.isFunction(self.finish)) {
      throw new Error("getSignature, error, progress, finish must be a Function.");
    } // 网络状态变化时重新竞速获取最优 storeRegion
    // wx.onNetworkStatusChange((res) => {
    //   if (res.isConnected) {
    //     this.requestRegion();
    //   }
    // });


    return _this;
  }

  _createClass(Uploader, [{
    key: "setStorage",
    value: function setStorage(name, val) {
      wx.setStorageSync("wp_ugc_" + name, val);
    }
  }, {
    key: "getStorage",
    value: function getStorage(name) {
      try {
        var val = wx.getStorageSync("wp_ugc_" + name);
        return val;
      } catch (e) {
        return "";
      }
    }
  }, {
    key: "delStorage",
    value: function delStorage(name) {
      wx.removeStorageSync("wp_ugc_" + name);
    }
  }, {
    key: "regionRace",
    value: function regionRace(cosRegionList, cb) {
      Promise.race(cosRegionList.map(function (item) {
        return raceRequest(item);
      })).then(function (res) {
        wx.setStorageSync(COS_REGION_KEY, res); // report target region obtain from prepare

        if (cb) {
          cb(res);
        }
      });
    }
  }, {
    key: "requestRegion",
    value: function requestRegion(callback) {
      var self = this;
      self.getSignature(function (signature) {
        self.signature = signature;
        var sendParams = {
          signature: signature
        };
        var requestStartTime = Date.now();
        wx.request({
          method: "POST",
          url: "https://vod2.qcloud.com/v3/index.php?Action=PrepareUploadUGC",
          data: sendParams,
          dataType: "json",
          success: function success(result) {
            if (result.data.code === 0) {
              self.appId = self.appId || result.data.data.appId;
              self.regionRace(result.data.data.cosRegionList, function (res) {
                self.emit(reportEvent.report_prepare, {
                  data: {
                    region: res
                  },
                  requestStartTime: requestStartTime
                });
                callback(res);
              });
            } else {
              // eslint-disable-next-line no-lonely-if
              if (self.retryPrepareNum > 0) {
                self.emit(reportEvent.report_prepare, {
                  err: result.data,
                  requestStartTime: requestStartTime
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
          fail: function fail(result) {
            if (vodUtil.isFunction(self.error)) {
              self.error(result);
            }
          }
        });
      });
    }
  }, {
    key: "getStoreRegion",
    value: function getStoreRegion(callback) {
      var self = this;

      try {
        var region = wx.getStorageSync(COS_REGION_KEY);

        if (!region) {
          throw new Error("no storage");
        }

        return callback(region);
      } catch (e) {
        self.requestRegion(callback);
      }
    }
  }, {
    key: "start",
    value: function start() {
      var self = this; // self.getStoreRegion((region) => {
      // });

      self.applyUpload(function (result) {
        self.uploadFile(result, function () {
          self.commitUpload();
        });
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.cos.cancelTask(this.taskId);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.cos.pauseTask(this.taskId);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.cos.restartTask(this.taskId);
    }
  }, {
    key: "applyUpload",
    value: function applyUpload(callback) {
      var self = this;
      self.getSignature(function (signature) {
        self.signature = signature;
        var sessionKey = self.getStorage(self.fileKey);
        var sendParams;

        if (sessionKey) {
          sendParams = {
            signature: signature,
            vodSessionKey: sessionKey
          };
        } else {
          sendParams = {
            signature: signature,
            videoName: self.videoFileMessage.name,
            videoType: self.videoFileMessage.type // videoSize: self.videoFileMessage.size,

          };
        }

        if (self.coverFileMessage) {
          // upload video together with cover
          sendParams.coverName = self.coverFileMessage.name;
          sendParams.coverType = self.coverFileMessage.type; // sendParams.coverSize = self.coverFileMessage.size;
        }

        var requestStartTime = Date.now();
        wx.request({
          method: "POST",
          url: "https://".concat(HOST, "/v3/index.php?Action=ApplyUploadUGC"),
          data: sendParams,
          dataType: "json",
          success: function success(result) {
            if (result.data.code === 0) {
              self.appId = self.appId || result.data.data.appId;
              self.emit(reportEvent.report_apply, {
                data: sendParams,
                requestStartTime: requestStartTime
              });
              self.vodSessionKey = result.data.data.vodSessionKey;
              self.MiniProgramAccelerateHost = result.data.data.MiniProgramAccelerateHost;
              self.setStorage(self.fileKey, self.vodSessionKey);
              callback(result);
            } else {
              // eslint-disable-next-line no-lonely-if
              if (self.retryApplyNum > 0) {
                self.emit(reportEvent.report_apply, {
                  err: result.data,
                  requestStartTime: requestStartTime
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
          fail: function fail(result) {
            if (vodUtil.isFunction(self.error)) {
              self.error(result);
            }
          }
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(result, cb) {
      var self = this;
      var applyData = result.data.data;
      var cos = new COS(Object.assign({
        getAuthorization: function getAuthorization(options, callback) {
          callback({
            TmpSecretId: applyData.tempCertificate.secretId,
            TmpSecretKey: applyData.tempCertificate.secretKey,
            XCosSecurityToken: applyData.tempCertificate.token,
            StartTime: applyData.timestamp,
            ExpiredTime: applyData.tempCertificate.expiredTime
          });
        }
      }, self.cosStrategy));
      cos.on("before-send", function (opt) {
        var url = opt.url;
        console.log('url', url);
        var u = url.match(/^(https?:\/\/([^\/]+)\/)([^\/]*\/?)(.*)$/);
        opt.url = url.replace(u[2], self.MiniProgramAccelerateHost || "vod2.qcloud.com");
        opt.headers["Vod-Forward-Cos"] = u[2];
      });
      this.cos = cos;
      var cosCommonParam = {
        bucket: "".concat(applyData.storageBucket, "-").concat(applyData.storageAppId),
        region: applyData.storageRegionV5
      };
      var uploadCosParams = [];

      if (this.videoFileMessage) {
        var cosVideoParam = _objectSpread(_objectSpread({}, cosCommonParam), {}, {
          filePath: this.videoFileMessage.tempFilePath,
          fileSize: this.videoFileMessage.size,
          key: applyData.video.storagePath,
          onProgress: function onProgress(info) {
            if (vodUtil.isFunction(self.progress)) {
              self.progress(info);
            }
          },
          // onProgress: function onProgress(data) {
          //   self.emit(UploaderEvent.video_progress, data);
          //   self.emit(UploaderEvent.media_progress, data);
          // },
          onTaskReady: function onTaskReady(taskId) {
            self.taskId = taskId;
          }
        });

        uploadCosParams.push(cosVideoParam);
      }

      if (this.coverFileMessage) {
        var cosCoverParam = _objectSpread(_objectSpread({}, cosCommonParam), {}, {
          fileSize: this.coverFileMessage.size,
          filePath: this.coverFileMessage.tempFilePath,
          key: applyData.cover.storagePath,
          onTaskReady: vodUtil.noop,
          onProgress: vodUtil.noop // cover don't need progress
          // onProgress: function onProgress(data) {
          //   self.emit(UploaderEvent.cover_progress, data);
          // }

        });

        uploadCosParams.push(cosCoverParam);
      }

      var uploadPromises = uploadCosParams.map(function (uploadCosParam) {
        return new Promise(function (resolve, reject) {
          var requestStartTime = Date.now();
          cos.sliceUploadFile( // cos.postObject(
          {
            Bucket: uploadCosParam.bucket,
            Region: uploadCosParam.region,
            Key: uploadCosParam.key,
            FilePath: uploadCosParam.filePath,
            FileSize: uploadCosParam.fileSize,
            onProgress: uploadCosParam.onProgress,
            onTaskReady: uploadCosParam.onTaskReady
          }, function (err, data) {
            if (err) {
              // when fails
              if (uploadCosParam.filePath === self.videoFileMessage.tempFilePath) {
                self.emit(reportEvent.report_cos_upload, {
                  err: err,
                  requestStartTime: requestStartTime
                });
              }

              if (vodUtil.isFunction(self.error)) {
                var error = err.error;
                var errObj = error && error.Code ? {
                  code: error.Code,
                  message: error.Message || error.message,
                  reqid: error.RequestId || undefined
                } : {
                  code: err.statusCode || -2,
                  message: "cos error"
                };
                self.error(errObj);
              }

              reject();
              return;
            } // when succeeds
            // if (vodUtil.isFunction(self.success)) {
            //   self.success(data);
            // }


            resolve();
          });
        });
      });
      Promise.all(uploadPromises).then(function () {
        cb();
      });
    }
  }, {
    key: "commitUpload",
    value: function commitUpload() {
      var self = this;
      var sendParam = {
        signature: this.signature,
        vodSessionKey: this.vodSessionKey
      };
      var requestStartTime = Date.now();
      wx.request({
        method: "POST",
        url: "https://".concat(HOST, "/v3/index.php?Action=CommitUploadUGC"),
        data: sendParam,
        dataType: "json",
        success: function success(result) {
          if (result.data.code === 0) {
            self.emit(reportEvent.report_commit, {
              data: result.data.data,
              requestStartTime: requestStartTime
            });
            var res = result.data.data;

            if (vodUtil.isFunction(self.finish)) {
              self.finish({
                fileId: res.fileId,
                videoName: self.videoFileMessage.name,
                videoUrl: res.video && res.video.url,
                coverUrl: res.cover && res.cover.url,
                verify_content: res.video && res.video.verify_content
              });
            }

            self.delStorage(self.fileKey);
          } else {
            // eslint-disable-next-line no-lonely-if
            self.emit(reportEvent.report_commit, {
              err: result.data,
              requestStartTime: requestStartTime
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
        fail: function fail(result) {
          if (vodUtil.isFunction(self.error)) {
            self.error(result);
          }
        }
      });
    }
  }]);

  return Uploader;
}(EventEmitter);

module.exports = {
  start: function start(params) {
    try {
      var uploader = new Uploader(params);
      new VodReporter(uploader);
      uploader.start();
      return uploader;
    } catch (e) {
      if (vodUtil.isFunction(params.error)) {
        params.error({
          code: -1,
          message: e.message
        });
      } else {
        throw e;
      }
    }
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var a = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "D:\\code\\cos-wx-sdk-v5\\demo\\lib", t(t.s = 6);
  }([function (e, t, n) {
    "use strict";

    (function (t) {
      function i(e) {
        return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
      }

      function a(e) {
        return u(e, function (e) {
          return "object" == typeof e ? a(e) : e;
        });
      }

      function o(e, t, n) {
        return e && t in e ? e[t] : n;
      }

      function r(e, t) {
        return p(t, function (n, i) {
          e[i] = t[i];
        }), e;
      }

      function s(e) {
        return e instanceof Array;
      }

      function c(e, t) {
        for (var n = !1, i = 0; i < e.length; i++) if (t === e[i]) {
          n = !0;
          break;
        }

        return n;
      }

      function l(e) {
        return s(e) ? e : [e];
      }

      function p(e, t) {
        for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
      }

      function u(e, t) {
        var n = s(e) ? [] : {};

        for (var i in e) e.hasOwnProperty(i) && (n[i] = t(e[i], i));

        return n;
      }

      function d(e, t) {
        var n = s(e),
            i = n ? [] : {};

        for (var a in e) e.hasOwnProperty(a) && t(e[a], a) && (n ? i.push(e[a]) : i[a] = e[a]);

        return i;
      }

      var m = n(8),
          f = n(11),
          h = n(12),
          g = n(15),
          v = n(3),
          x = v.btoa,
          y = wx.getFileSystemManager(),
          C = function (e) {
        e = e || {};
        var t,
            n = e.SecretId,
            o = e.SecretKey,
            r = e.KeyTime,
            s = (e.method || e.Method || "get").toLowerCase(),
            c = a(e.Query || e.params || {}),
            l = a(e.Headers || e.headers || {}),
            p = e.Key || "";
        if (e.UseRawKey ? t = e.Pathname || e.pathname || "/" + p : (t = e.Pathname || e.pathname || p, 0 !== t.indexOf("/") && (t = "/" + t)), !n) return console.error("missing param SecretId");
        if (!o) return console.error("missing param SecretKey");

        var u = function (e, t) {
          var n = [];

          for (var a in e) e.hasOwnProperty(a) && n.push(t ? i(a).toLowerCase() : a);

          return n.sort(function (e, t) {
            return e = e.toLowerCase(), t = t.toLowerCase(), e === t ? 0 : e > t ? 1 : -1;
          });
        },
            d = function (e) {
          var t,
              n,
              a,
              o = [],
              r = u(e);

          for (t = 0; t < r.length; t++) n = r[t], a = void 0 === e[n] || null === e[n] ? "" : "" + e[n], n = i(n).toLowerCase(), a = i(a) || "", o.push(n + "=" + a);

          return o.join("&");
        },
            m = Math.round(N(e.SystemClockOffset) / 1e3) - 1,
            h = m,
            g = e.Expires || e.expires;

        h += void 0 === g ? 900 : 1 * g || 0;
        var v = n,
            x = r || m + ";" + h,
            y = r || m + ";" + h,
            C = u(l, !0).join(";").toLowerCase(),
            k = u(c, !0).join(";").toLowerCase(),
            b = f.HmacSHA1(y, o).toString(),
            S = [s, t, d(c), d(l), ""].join("\n"),
            R = ["sha1", x, f.SHA1(S).toString(), ""].join("\n");
        return ["q-sign-algorithm=sha1", "q-ak=" + v, "q-sign-time=" + x, "q-key-time=" + y, "q-header-list=" + C, "q-url-param-list=" + k, "q-signature=" + f.HmacSHA1(R, b).toString()].join("&");
      },
          k = function () {},
          b = function (e) {
        var t = {};

        for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && null !== e[n] && (t[n] = e[n]);

        return t;
      },
          S = function (e, t, n, i) {
        e ? y.readFile({
          filePath: e,
          position: t,
          length: n - t,
          success: function (e) {
            i(e.data);
          },
          fail: function () {
            i(null);
          }
        }) : i(null);
      },
          R = function (e, t, n) {
        n = n || k, e && t && t instanceof ArrayBuffer ? j.getFileMd5(t, function (e, t) {
          n(t);
        }) : n();
      },
          w = function (e, t) {
        var n = m(e);
        return t && t(n), n;
      },
          _ = function (e) {
        var t,
            n,
            i,
            a = "";

        for (t = 0, n = e.length / 2; t < n; t++) i = parseInt(e[2 * t] + e[2 * t + 1], 16), a += String.fromCharCode(i);

        return x(a);
      },
          A = function () {
        var e = function () {
          return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        };

        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
      },
          T = function (e, t) {
        var n = t.Bucket,
            i = t.Region,
            a = t.Key;

        if (e.indexOf("Bucket") > -1 || "deleteMultipleObject" === e || "multipartList" === e || "listObjectVersions" === e) {
          if (!n) return "Bucket";
          if (!i) return "Region";
        } else if (e.indexOf("Object") > -1 || e.indexOf("multipart") > -1 || "sliceUploadFile" === e || "abortUploadTask" === e) {
          if (!n) return "Bucket";
          if (!i) return "Region";
          if (!a) return "Key";
        }

        return !1;
      },
          E = function (e, t) {
        if (t = r({}, t), "getAuth" !== e && "getV4Auth" !== e && "getObjectUrl" !== e) {
          var n = t.Headers || {};

          if (t && "object" == typeof t) {
            !function () {
              for (var e in t) t.hasOwnProperty(e) && e.indexOf("x-cos-") > -1 && (n[e] = t[e]);
            }();
            var i = {
              "x-cos-mfa": "MFA",
              "Content-MD5": "ContentMD5",
              "Content-Length": "ContentLength",
              "Content-Type": "ContentType",
              Expect: "Expect",
              Expires: "Expires",
              "Cache-Control": "CacheControl",
              "Content-Disposition": "ContentDisposition",
              "Content-Encoding": "ContentEncoding",
              Range: "Range",
              "If-Modified-Since": "IfModifiedSince",
              "If-Unmodified-Since": "IfUnmodifiedSince",
              "If-Match": "IfMatch",
              "If-None-Match": "IfNoneMatch",
              "x-cos-copy-source": "CopySource",
              "x-cos-copy-source-Range": "CopySourceRange",
              "x-cos-metadata-directive": "MetadataDirective",
              "x-cos-copy-source-If-Modified-Since": "CopySourceIfModifiedSince",
              "x-cos-copy-source-If-Unmodified-Since": "CopySourceIfUnmodifiedSince",
              "x-cos-copy-source-If-Match": "CopySourceIfMatch",
              "x-cos-copy-source-If-None-Match": "CopySourceIfNoneMatch",
              "x-cos-acl": "ACL",
              "x-cos-grant-read": "GrantRead",
              "x-cos-grant-write": "GrantWrite",
              "x-cos-grant-full-control": "GrantFullControl",
              "x-cos-grant-read-acp": "GrantReadAcp",
              "x-cos-grant-write-acp": "GrantWriteAcp",
              "x-cos-storage-class": "StorageClass",
              "x-cos-server-side-encryption-customer-algorithm": "SSECustomerAlgorithm",
              "x-cos-server-side-encryption-customer-key": "SSECustomerKey",
              "x-cos-server-side-encryption-customer-key-MD5": "SSECustomerKeyMD5",
              "x-cos-server-side-encryption": "ServerSideEncryption",
              "x-cos-server-side-encryption-cos-kms-key-id": "SSEKMSKeyId",
              "x-cos-server-side-encryption-context": "SSEContext"
            };
            j.each(i, function (e, i) {
              void 0 !== t[e] && (n[i] = t[e]);
            }), t.Headers = b(n);
          }
        }

        return t;
      },
          B = function (e, n) {
        return function (i, a) {
          var o = this;
          "function" == typeof i && (a = i, i = {}), i = E(e, i);

          var r = function (e) {
            return e && e.headers && (e.headers["x-cos-version-id"] && (e.VersionId = e.headers["x-cos-version-id"]), e.headers["x-cos-delete-marker"] && (e.DeleteMarker = e.headers["x-cos-delete-marker"])), e;
          },
              s = function (e, t) {
            a && a(r(e), r(t));
          },
              c = function () {
            if ("getService" !== e && "abortUploadTask" !== e) {
              var t = T(e, i);
              if (t) return "missing param " + t;

              if (i.Region) {
                if (i.Region.indexOf("cos.") > -1) return 'param Region should not be start with "cos."';
                if (!/^([a-z\d-]+)$/.test(i.Region)) return "Region format error.";
                o.options.CompatibilityMode || -1 !== i.Region.indexOf("-") || "yfb" === i.Region || "default" === i.Region || console.warn("warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224");
              }

              if (i.Bucket) {
                if (!/^([a-z\d-]+)-(\d+)$/.test(i.Bucket)) if (i.AppId) i.Bucket = i.Bucket + "-" + i.AppId;else {
                  if (!o.options.AppId) return 'Bucket should format as "test-1250000000".';
                  i.Bucket = i.Bucket + "-" + o.options.AppId;
                }
                i.AppId && (console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).'), delete i.AppId);
              }

              i.Key && "/" === i.Key.substr(0, 1) && (i.Key = i.Key.substr(1));
            }
          }(),
              l = "getAuth" === e || "getObjectUrl" === e,
              p = t.Promise;

          if (!l && p && !a) return new p(function (e, t) {
            if (a = function (n, i) {
              n ? t(n) : e(i);
            }, c) return s({
              error: c
            });
            n.call(o, i, s);
          });
          if (c) return s({
            error: c
          });
          var u = n.call(o, i, s);
          return l ? u : void 0;
        };
      },
          O = function (e, t) {
        function n() {
          if (a = 0, t && "function" == typeof t) {
            i = Date.now();
            var n,
                o = Math.max(0, Math.round((s - r) / ((i - c) / 1e3) * 100) / 100) || 0;
            n = 0 === s && 0 === e ? 1 : Math.floor(s / e * 100) / 100 || 0, c = i, r = s;

            try {
              t({
                loaded: s,
                total: e,
                speed: o,
                percent: n
              });
            } catch (e) {}
          }
        }

        var i,
            a,
            o = this,
            r = 0,
            s = 0,
            c = Date.now();
        return function (t, i) {
          if (t && (s = t.loaded, e = t.total), i) clearTimeout(a), n();else {
            if (a) return;
            a = setTimeout(n, o.options.ProgressInterval);
          }
        };
      },
          D = function (e, t, n) {
        "postObject" === e ? n() : "putObject" === e ? void 0 !== t.Body ? (t.ContentLength = t.Body.byteLength, n(null, t.ContentLength)) : n({
          error: "missing param Body"
        }) : t.FilePath ? y.stat({
          path: t.FilePath,
          success: function (e) {
            var i = e.stats;
            t.FileStat = i, t.FileStat.FilePath = t.FilePath;
            var a = i.isDirectory() ? 0 : i.size;
            t.ContentLength = a = a || 0, n(null, a);
          },
          fail: function (e) {
            n(e);
          }
        }) : n({
          error: "missing param FilePath"
        });
      },
          N = function (e) {
        return Date.now() + (e || 0);
      },
          I = function (e, t) {
        e = e.split("."), t = t.split(".");

        for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");

        for (; t.length < n;) t.push("0");

        for (var i = 0; i < n; i++) {
          var a = parseInt(e[i]),
              o = parseInt(t[i]);
          if (a > o) return 1;
          if (a < o) return -1;
        }

        return 0;
      },
          P = function () {
        var e = wx.getSystemInfoSync(),
            t = I(e.SDKVersion, "2.10.0") >= 0,
            n = !t && "devtools" === e.platform;
        return function () {
          return n && console.warn("\u5f53\u524d\u5c0f\u7a0b\u5e8f\u7248\u672c\u5c0f\u4e8e 2.10.0\uff0c\u4e0d\u652f\u6301\u5206\u7247\u4e0a\u4f20\uff0c\u8bf7\u66f4\u65b0\u8f6f\u4ef6\u3002"), n = !1, t;
        };
      }(),
          j = {
        noop: k,
        formatParams: E,
        apiWrapper: B,
        xml2json: h,
        json2xml: g,
        md5: m,
        clearKey: b,
        fileSlice: S,
        getBodyMd5: R,
        getFileMd5: w,
        binaryBase64: _,
        extend: r,
        isArray: s,
        isInArray: c,
        makeArray: l,
        each: p,
        map: u,
        filter: d,
        clone: a,
        attr: o,
        uuid: A,
        camSafeUrlEncode: i,
        throttleOnProgress: O,
        getFileSize: D,
        getSkewTime: N,
        getAuth: C,
        compareVersion: I,
        canFileSlice: P
      };

      e.exports = j;
    }).call(t, n(1));
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t) {
    function n(e, t) {
      for (var n in e) t[n] = e[n];
    }

    function i(e, t) {
      function i() {}

      var a = e.prototype;

      if (Object.create) {
        var o = Object.create(t.prototype);
        a.__proto__ = o;
      }

      a instanceof t || (i.prototype = t.prototype, i = new i(), n(a, i), e.prototype = a = i), a.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), a.constructor = e);
    }

    function a(e, t) {
      if (t instanceof Error) var n = t;else n = this, Error.call(this, ae[e]), this.message = ae[e], Error.captureStackTrace && Error.captureStackTrace(this, a);
      return n.code = e, t && (this.message = this.message + ": " + t), n;
    }

    function o() {}

    function r(e, t) {
      this._node = e, this._refresh = t, s(this);
    }

    function s(e) {
      var t = e._node._inc || e._node.ownerDocument._inc;

      if (e._inc != t) {
        var i = e._refresh(e._node);

        L(e, "length", i.length), n(i, e), e._inc = t;
      }
    }

    function c() {}

    function l(e, t) {
      for (var n = e.length; n--;) if (e[n] === t) return n;
    }

    function p(e, t, n, i) {
      if (i ? t[l(t, i)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;
        var a = e.ownerDocument;
        a && (i && x(a, e, i), v(a, e, n));
      }
    }

    function u(e, t, n) {
      var i = l(t, n);
      if (!(i >= 0)) throw a(re, new Error(e.tagName + "@" + n));

      for (var o = t.length - 1; i < o;) t[i] = t[++i];

      if (t.length = o, e) {
        var r = e.ownerDocument;
        r && (x(r, e, n), n.ownerElement = null);
      }
    }

    function d(e) {
      if (this._features = {}, e) for (var t in e) this._features = e[t];
    }

    function m() {}

    function f(e) {
      return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
    }

    function h(e, t) {
      if (t(e)) return !0;
      if (e = e.firstChild) do {
        if (h(e, t)) return !0;
      } while (e = e.nextSibling);
    }

    function g() {}

    function v(e, t, n) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value);
    }

    function x(e, t, n, i) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
    }

    function y(e, t, n) {
      if (e && e._inc) {
        e._inc++;
        var i = t.childNodes;
        if (n) i[i.length++] = n;else {
          for (var a = t.firstChild, o = 0; a;) i[o++] = a, a = a.nextSibling;

          i.length = o;
        }
      }
    }

    function C(e, t) {
      var n = t.previousSibling,
          i = t.nextSibling;
      return n ? n.nextSibling = i : e.firstChild = i, i ? i.previousSibling = n : e.lastChild = n, y(e.ownerDocument, e), t;
    }

    function k(e, t, n) {
      var i = t.parentNode;

      if (i && i.removeChild(t), t.nodeType === te) {
        var a = t.firstChild;
        if (null == a) return t;
        var o = t.lastChild;
      } else a = o = t;

      var r = n ? n.previousSibling : e.lastChild;
      a.previousSibling = r, o.nextSibling = n, r ? r.nextSibling = a : e.firstChild = a, null == n ? e.lastChild = o : n.previousSibling = o;

      do {
        a.parentNode = e;
      } while (a !== o && (a = a.nextSibling));

      return y(e.ownerDocument || e, e), t.nodeType == te && (t.firstChild = t.lastChild = null), t;
    }

    function b(e, t) {
      var n = t.parentNode;

      if (n) {
        var i = e.lastChild;
        n.removeChild(t);
        var i = e.lastChild;
      }

      var i = e.lastChild;
      return t.parentNode = e, t.previousSibling = i, t.nextSibling = null, i ? i.nextSibling = t : e.firstChild = t, e.lastChild = t, y(e.ownerDocument, e, t), t;
    }

    function S() {
      this._nsMap = {};
    }

    function R() {}

    function w() {}

    function _() {}

    function A() {}

    function T() {}

    function E() {}

    function B() {}

    function O() {}

    function D() {}

    function N() {}

    function I() {}

    function P() {}

    function j(e, t) {
      var n = [],
          i = 9 == this.nodeType ? this.documentElement : this,
          a = i.prefix,
          o = i.namespaceURI;

      if (o && null == a) {
        var a = i.lookupPrefix(o);
        if (null == a) var r = [{
          namespace: o,
          prefix: null
        }];
      }

      return U(this, n, e, t, r), n.join("");
    }

    function M(e, t, n) {
      var i = e.prefix || "",
          a = e.namespaceURI;
      if (!i && !a) return !1;
      if ("xml" === i && "http://www.w3.org/XML/1998/namespace" === a || "http://www.w3.org/2000/xmlns/" == a) return !1;

      for (var o = n.length; o--;) {
        var r = n[o];
        if (r.prefix == i) return r.namespace != a;
      }

      return !0;
    }

    function U(e, t, n, i, a) {
      if (i) {
        if (!(e = i(e))) return;
        if ("string" == typeof e) return void t.push(e);
      }

      switch (e.nodeType) {
        case G:
          a || (a = []);
          var o = (a.length, e.attributes),
              r = o.length,
              s = e.firstChild,
              c = e.tagName;
          n = K === e.namespaceURI || n, t.push("<", c);

          for (var l = 0; l < r; l++) {
            var p = o.item(l);
            "xmlns" == p.prefix ? a.push({
              prefix: p.localName,
              namespace: p.value
            }) : "xmlns" == p.nodeName && a.push({
              prefix: "",
              namespace: p.value
            });
          }

          for (var l = 0; l < r; l++) {
            var p = o.item(l);

            if (M(p, n, a)) {
              var u = p.prefix || "",
                  d = p.namespaceURI,
                  m = u ? " xmlns:" + u : " xmlns";
              t.push(m, '="', d, '"'), a.push({
                prefix: u,
                namespace: d
              });
            }

            U(p, t, n, i, a);
          }

          if (M(e, n, a)) {
            var u = e.prefix || "",
                d = e.namespaceURI,
                m = u ? " xmlns:" + u : " xmlns";
            t.push(m, '="', d, '"'), a.push({
              prefix: u,
              namespace: d
            });
          }

          if (s || n && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
            if (t.push(">"), n && /^script$/i.test(c)) for (; s;) s.data ? t.push(s.data) : U(s, t, n, i, a), s = s.nextSibling;else for (; s;) U(s, t, n, i, a), s = s.nextSibling;
            t.push("</", c, ">");
          } else t.push("/>");

          return;

        case Z:
        case te:
          for (var s = e.firstChild; s;) U(s, t, n, i, a), s = s.nextSibling;

          return;

        case V:
          return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, f), '"');

        case X:
          return t.push(e.data.replace(/[<&]/g, f));

        case W:
          return t.push("<![CDATA[", e.data, "]]>");

        case Y:
          return t.push("\x3c!--", e.data, "--\x3e");

        case ee:
          var h = e.publicId,
              g = e.systemId;
          if (t.push("<!DOCTYPE ", e.name), h) t.push(' PUBLIC "', h), g && "." != g && t.push('" "', g), t.push('">');else if (g && "." != g) t.push(' SYSTEM "', g, '">');else {
            var v = e.internalSubset;
            v && t.push(" [", v, "]"), t.push(">");
          }
          return;

        case J:
          return t.push("<?", e.target, " ", e.data, "?>");

        case $:
          return t.push("&", e.nodeName, ";");

        default:
          t.push("??", e.nodeName);
      }
    }

    function F(e, t, n) {
      var i;

      switch (t.nodeType) {
        case G:
          i = t.cloneNode(!1), i.ownerDocument = e;

        case te:
          break;

        case V:
          n = !0;
      }

      if (i || (i = t.cloneNode(!1)), i.ownerDocument = e, i.parentNode = null, n) for (var a = t.firstChild; a;) i.appendChild(F(e, a, n)), a = a.nextSibling;
      return i;
    }

    function H(e, t, n) {
      var i = new t.constructor();

      for (var a in t) {
        var r = t[a];
        "object" != typeof r && r != i[a] && (i[a] = r);
      }

      switch (t.childNodes && (i.childNodes = new o()), i.ownerDocument = e, i.nodeType) {
        case G:
          var s = t.attributes,
              l = i.attributes = new c(),
              p = s.length;
          l._ownerElement = i;

          for (var u = 0; u < p; u++) i.setAttributeNode(H(e, s.item(u), !0));

          break;

        case V:
          n = !0;
      }

      if (n) for (var d = t.firstChild; d;) i.appendChild(H(e, d, n)), d = d.nextSibling;
      return i;
    }

    function L(e, t, n) {
      e[t] = n;
    }

    function z(e) {
      switch (e.nodeType) {
        case G:
        case te:
          var t = [];

          for (e = e.firstChild; e;) 7 !== e.nodeType && 8 !== e.nodeType && t.push(z(e)), e = e.nextSibling;

          return t.join("");

        default:
          return e.nodeValue;
      }
    }

    var K = "http://www.w3.org/1999/xhtml",
        q = {},
        G = q.ELEMENT_NODE = 1,
        V = q.ATTRIBUTE_NODE = 2,
        X = q.TEXT_NODE = 3,
        W = q.CDATA_SECTION_NODE = 4,
        $ = q.ENTITY_REFERENCE_NODE = 5,
        Q = q.ENTITY_NODE = 6,
        J = q.PROCESSING_INSTRUCTION_NODE = 7,
        Y = q.COMMENT_NODE = 8,
        Z = q.DOCUMENT_NODE = 9,
        ee = q.DOCUMENT_TYPE_NODE = 10,
        te = q.DOCUMENT_FRAGMENT_NODE = 11,
        ne = q.NOTATION_NODE = 12,
        ie = {},
        ae = {},
        oe = (ie.INDEX_SIZE_ERR = (ae[1] = "Index size error", 1), ie.DOMSTRING_SIZE_ERR = (ae[2] = "DOMString size error", 2), ie.HIERARCHY_REQUEST_ERR = (ae[3] = "Hierarchy request error", 3)),
        re = (ie.WRONG_DOCUMENT_ERR = (ae[4] = "Wrong document", 4), ie.INVALID_CHARACTER_ERR = (ae[5] = "Invalid character", 5), ie.NO_DATA_ALLOWED_ERR = (ae[6] = "No data allowed", 6), ie.NO_MODIFICATION_ALLOWED_ERR = (ae[7] = "No modification allowed", 7), ie.NOT_FOUND_ERR = (ae[8] = "Not found", 8)),
        se = (ie.NOT_SUPPORTED_ERR = (ae[9] = "Not supported", 9), ie.INUSE_ATTRIBUTE_ERR = (ae[10] = "Attribute in use", 10));
    ie.INVALID_STATE_ERR = (ae[11] = "Invalid state", 11), ie.SYNTAX_ERR = (ae[12] = "Syntax error", 12), ie.INVALID_MODIFICATION_ERR = (ae[13] = "Invalid modification", 13), ie.NAMESPACE_ERR = (ae[14] = "Invalid namespace", 14), ie.INVALID_ACCESS_ERR = (ae[15] = "Invalid access", 15);
    a.prototype = Error.prototype, n(ie, a), o.prototype = {
      length: 0,
      item: function (e) {
        return this[e] || null;
      },
      toString: function (e, t) {
        for (var n = [], i = 0; i < this.length; i++) U(this[i], n, e, t);

        return n.join("");
      }
    }, r.prototype.item = function (e) {
      return s(this), this[e];
    }, i(r, o), c.prototype = {
      length: 0,
      item: o.prototype.item,
      getNamedItem: function (e) {
        for (var t = this.length; t--;) {
          var n = this[t];
          if (n.nodeName == e) return n;
        }
      },
      setNamedItem: function (e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new a(se);
        var n = this.getNamedItem(e.nodeName);
        return p(this._ownerElement, this, e, n), n;
      },
      setNamedItemNS: function (e) {
        var t,
            n = e.ownerElement;
        if (n && n != this._ownerElement) throw new a(se);
        return t = this.getNamedItemNS(e.namespaceURI, e.localName), p(this._ownerElement, this, e, t), t;
      },
      removeNamedItem: function (e) {
        var t = this.getNamedItem(e);
        return u(this._ownerElement, this, t), t;
      },
      removeNamedItemNS: function (e, t) {
        var n = this.getNamedItemNS(e, t);
        return u(this._ownerElement, this, n), n;
      },
      getNamedItemNS: function (e, t) {
        for (var n = this.length; n--;) {
          var i = this[n];
          if (i.localName == t && i.namespaceURI == e) return i;
        }

        return null;
      }
    }, d.prototype = {
      hasFeature: function (e, t) {
        var n = this._features[e.toLowerCase()];

        return !(!n || t && !(t in n));
      },
      createDocument: function (e, t, n) {
        var i = new g();

        if (i.implementation = this, i.childNodes = new o(), i.doctype = n, n && i.appendChild(n), t) {
          var a = i.createElementNS(e, t);
          i.appendChild(a);
        }

        return i;
      },
      createDocumentType: function (e, t, n) {
        var i = new E();
        return i.name = e, i.nodeName = e, i.publicId = t, i.systemId = n, i;
      }
    }, m.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      insertBefore: function (e, t) {
        return k(this, e, t);
      },
      replaceChild: function (e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
      },
      removeChild: function (e) {
        return C(this, e);
      },
      appendChild: function (e) {
        return this.insertBefore(e, null);
      },
      hasChildNodes: function () {
        return null != this.firstChild;
      },
      cloneNode: function (e) {
        return H(this.ownerDocument || this, this, e);
      },
      normalize: function () {
        for (var e = this.firstChild; e;) {
          var t = e.nextSibling;
          t && t.nodeType == X && e.nodeType == X ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t);
        }
      },
      isSupported: function (e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
      },
      hasAttributes: function () {
        return this.attributes.length > 0;
      },
      lookupPrefix: function (e) {
        for (var t = this; t;) {
          var n = t._nsMap;
          if (n) for (var i in n) if (n[i] == e) return i;
          t = t.nodeType == V ? t.ownerDocument : t.parentNode;
        }

        return null;
      },
      lookupNamespaceURI: function (e) {
        for (var t = this; t;) {
          var n = t._nsMap;
          if (n && e in n) return n[e];
          t = t.nodeType == V ? t.ownerDocument : t.parentNode;
        }

        return null;
      },
      isDefaultNamespace: function (e) {
        return null == this.lookupPrefix(e);
      }
    }, n(q, m), n(q, m.prototype), g.prototype = {
      nodeName: "#document",
      nodeType: Z,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function (e, t) {
        if (e.nodeType == te) {
          for (var n = e.firstChild; n;) {
            var i = n.nextSibling;
            this.insertBefore(n, t), n = i;
          }

          return e;
        }

        return null == this.documentElement && e.nodeType == G && (this.documentElement = e), k(this, e, t), e.ownerDocument = this, e;
      },
      removeChild: function (e) {
        return this.documentElement == e && (this.documentElement = null), C(this, e);
      },
      importNode: function (e, t) {
        return F(this, e, t);
      },
      getElementById: function (e) {
        var t = null;
        return h(this.documentElement, function (n) {
          if (n.nodeType == G && n.getAttribute("id") == e) return t = n, !0;
        }), t;
      },
      createElement: function (e) {
        var t = new S();
        return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new o(), (t.attributes = new c())._ownerElement = t, t;
      },
      createDocumentFragment: function () {
        var e = new N();
        return e.ownerDocument = this, e.childNodes = new o(), e;
      },
      createTextNode: function (e) {
        var t = new _();
        return t.ownerDocument = this, t.appendData(e), t;
      },
      createComment: function (e) {
        var t = new A();
        return t.ownerDocument = this, t.appendData(e), t;
      },
      createCDATASection: function (e) {
        var t = new T();
        return t.ownerDocument = this, t.appendData(e), t;
      },
      createProcessingInstruction: function (e, t) {
        var n = new I();
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n;
      },
      createAttribute: function (e) {
        var t = new R();
        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t;
      },
      createEntityReference: function (e) {
        var t = new D();
        return t.ownerDocument = this, t.nodeName = e, t;
      },
      createElementNS: function (e, t) {
        var n = new S(),
            i = t.split(":"),
            a = n.attributes = new c();
        return n.childNodes = new o(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, a._ownerElement = n, n;
      },
      createAttributeNS: function (e, t) {
        var n = new R(),
            i = t.split(":");
        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = t, n;
      }
    }, i(g, m), S.prototype = {
      nodeType: G,
      hasAttribute: function (e) {
        return null != this.getAttributeNode(e);
      },
      getAttribute: function (e) {
        var t = this.getAttributeNode(e);
        return t && t.value || "";
      },
      getAttributeNode: function (e) {
        return this.attributes.getNamedItem(e);
      },
      setAttribute: function (e, t) {
        var n = this.ownerDocument.createAttribute(e);
        n.value = n.nodeValue = "" + t, this.setAttributeNode(n);
      },
      removeAttribute: function (e) {
        var t = this.getAttributeNode(e);
        t && this.removeAttributeNode(t);
      },
      appendChild: function (e) {
        return e.nodeType === te ? this.insertBefore(e, null) : b(this, e);
      },
      setAttributeNode: function (e) {
        return this.attributes.setNamedItem(e);
      },
      setAttributeNodeNS: function (e) {
        return this.attributes.setNamedItemNS(e);
      },
      removeAttributeNode: function (e) {
        return this.attributes.removeNamedItem(e.nodeName);
      },
      removeAttributeNS: function (e, t) {
        var n = this.getAttributeNodeNS(e, t);
        n && this.removeAttributeNode(n);
      },
      hasAttributeNS: function (e, t) {
        return null != this.getAttributeNodeNS(e, t);
      },
      getAttributeNS: function (e, t) {
        var n = this.getAttributeNodeNS(e, t);
        return n && n.value || "";
      },
      setAttributeNS: function (e, t, n) {
        var i = this.ownerDocument.createAttributeNS(e, t);
        i.value = i.nodeValue = "" + n, this.setAttributeNode(i);
      },
      getAttributeNodeNS: function (e, t) {
        return this.attributes.getNamedItemNS(e, t);
      },
      getElementsByTagName: function (e) {
        return new r(this, function (t) {
          var n = [];
          return h(t, function (i) {
            i === t || i.nodeType != G || "*" !== e && i.tagName != e || n.push(i);
          }), n;
        });
      },
      getElementsByTagNameNS: function (e, t) {
        return new r(this, function (n) {
          var i = [];
          return h(n, function (a) {
            a === n || a.nodeType !== G || "*" !== e && a.namespaceURI !== e || "*" !== t && a.localName != t || i.push(a);
          }), i;
        });
      }
    }, g.prototype.getElementsByTagName = S.prototype.getElementsByTagName, g.prototype.getElementsByTagNameNS = S.prototype.getElementsByTagNameNS, i(S, m), R.prototype.nodeType = V, i(R, m), w.prototype = {
      data: "",
      substringData: function (e, t) {
        return this.data.substring(e, e + t);
      },
      appendData: function (e) {
        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
      },
      insertData: function (e, t) {
        this.replaceData(e, 0, t);
      },
      appendChild: function (e) {
        throw new Error(ae[oe]);
      },
      deleteData: function (e, t) {
        this.replaceData(e, t, "");
      },
      replaceData: function (e, t, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, this.length = n.length;
      }
    }, i(w, m), _.prototype = {
      nodeName: "#text",
      nodeType: X,
      splitText: function (e) {
        var t = this.data,
            n = t.substring(e);
        t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
        var i = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i;
      }
    }, i(_, w), A.prototype = {
      nodeName: "#comment",
      nodeType: Y
    }, i(A, w), T.prototype = {
      nodeName: "#cdata-section",
      nodeType: W
    }, i(T, w), E.prototype.nodeType = ee, i(E, m), B.prototype.nodeType = ne, i(B, m), O.prototype.nodeType = Q, i(O, m), D.prototype.nodeType = $, i(D, m), N.prototype.nodeName = "#document-fragment", N.prototype.nodeType = te, i(N, m), I.prototype.nodeType = J, i(I, m), P.prototype.serializeToString = function (e, t, n) {
      return j.call(e, t, n);
    }, m.prototype.toString = j;

    try {
      Object.defineProperty && (Object.defineProperty(r.prototype, "length", {
        get: function () {
          return s(this), this.$$length;
        }
      }), Object.defineProperty(m.prototype, "textContent", {
        get: function () {
          return z(this);
        },
        set: function (e) {
          switch (this.nodeType) {
            case G:
            case te:
              for (; this.firstChild;) this.removeChild(this.firstChild);

              (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
              break;

            default:
              this.data = e, this.value = e, this.nodeValue = e;
          }
        }
      }), L = function (e, t, n) {
        e["$$" + t] = n;
      });
    } catch (e) {}

    t.DOMImplementation = d, t.XMLSerializer = P;
  }, function (e, t) {
    var n = function (e) {
      e = e || {};

      var t,
          n = e.Base64,
          i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = function (e) {
        for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;

        return t;
      }(i),
          o = String.fromCharCode,
          r = function (e) {
        if (e.length < 2) {
          var t = e.charCodeAt(0);
          return t < 128 ? e : t < 2048 ? o(192 | t >>> 6) + o(128 | 63 & t) : o(224 | t >>> 12 & 15) + o(128 | t >>> 6 & 63) + o(128 | 63 & t);
        }

        var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return o(240 | t >>> 18 & 7) + o(128 | t >>> 12 & 63) + o(128 | t >>> 6 & 63) + o(128 | 63 & t);
      },
          s = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
          c = function (e) {
        return e.replace(s, r);
      },
          l = function (e) {
        var t = [0, 2, 1][e.length % 3],
            n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
        return [i.charAt(n >>> 18), i.charAt(n >>> 12 & 63), t >= 2 ? "=" : i.charAt(n >>> 6 & 63), t >= 1 ? "=" : i.charAt(63 & n)].join("");
      },
          p = e.btoa ? function (t) {
        return e.btoa(t);
      } : function (e) {
        return e.replace(/[\s\S]{1,3}/g, l);
      },
          u = t ? function (e) {
        return (e.constructor === t.constructor ? e : new t(e)).toString("base64");
      } : function (e) {
        return p(c(e));
      },
          d = function (e, t) {
        return t ? u(String(e)).replace(/[+\/]/g, function (e) {
          return "+" == e ? "-" : "_";
        }).replace(/=/g, "") : u(String(e));
      },
          m = function (e) {
        return d(e, !0);
      },
          f = new RegExp(["[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}"].join("|"), "g"),
          h = function (e) {
        switch (e.length) {
          case 4:
            var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                n = t - 65536;
            return o(55296 + (n >>> 10)) + o(56320 + (1023 & n));

          case 3:
            return o((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

          default:
            return o((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
      },
          g = function (e) {
        return e.replace(f, h);
      },
          v = function (e) {
        var t = e.length,
            n = t % 4,
            i = (t > 0 ? a[e.charAt(0)] << 18 : 0) | (t > 1 ? a[e.charAt(1)] << 12 : 0) | (t > 2 ? a[e.charAt(2)] << 6 : 0) | (t > 3 ? a[e.charAt(3)] : 0),
            r = [o(i >>> 16), o(i >>> 8 & 255), o(255 & i)];
        return r.length -= [0, 0, 2, 1][n], r.join("");
      },
          x = e.atob ? function (t) {
        return e.atob(t);
      } : function (e) {
        return e.replace(/[\s\S]{1,4}/g, v);
      },
          y = t ? function (e) {
        return (e.constructor === t.constructor ? e : new t(e, "base64")).toString();
      } : function (e) {
        return g(x(e));
      },
          C = function (e) {
        return y(String(e).replace(/[-_]/g, function (e) {
          return "-" == e ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
      };

      return {
        VERSION: "2.1.9",
        atob: x,
        btoa: p,
        fromBase64: C,
        toBase64: d,
        utob: c,
        encode: d,
        encodeURI: m,
        btou: g,
        decode: C,
        noConflict: function () {
          var t = e.Base64;
          return e.Base64 = n, t;
        }
      };
    }();

    e.exports = n;
  }, function (e, t) {
    var n = function (e) {
      var t = {},
          n = function (e) {
        return !t[e] && (t[e] = []), t[e];
      };

      e.on = function (e, t) {
        n(e).push(t);
      }, e.off = function (e, t) {
        for (var i = n(e), a = i.length - 1; a >= 0; a--) t === i[a] && i.splice(a, 1);
      }, e.emit = function (e, t) {
        for (var i = n(e).map(function (e) {
          return e;
        }), a = 0; a < i.length; a++) i[a](t);
      };
    },
        i = function () {
      n(this);
    };

    e.exports.init = n, e.exports.EventProxy = i;
  }, function (e, t, n) {
    var i,
        a,
        o = n(0),
        r = function () {
      try {
        var e = JSON.parse(wx.getStorageSync("cos_sdk_upload_cache"));
      } catch (e) {}

      return e || (e = []), e;
    },
        s = function () {
      try {
        wx.setStorageSync("cos_sdk_upload_cache", JSON.stringify(i));
      } catch (e) {}
    },
        c = function () {
      if (!i) {
        i = r();

        for (var e = !1, t = Math.round(Date.now() / 1e3), n = i.length - 1; n >= 0; n--) {
          var a = i[n][2];
          (!a || a + 2592e3 < t) && (i.splice(n, 1), e = !0);
        }

        e && s();
      }
    },
        l = function () {
      a || (a = setTimeout(function () {
        s(), a = null;
      }, 400));
    },
        p = {
      using: {},
      setUsing: function (e) {
        p.using[e] = !0;
      },
      removeUsing: function (e) {
        delete p.using[e];
      },
      getFileId: function (e, t, n, i) {
        return e.FilePath && e.size && e.lastModifiedTime && t ? o.md5([e.FilePath].join("::")) + "-" + o.md5([e.size, e.mode, e.lastAccessedTime, e.lastModifiedTime, t, n, i].join("::")) : null;
      },
      getUploadIdList: function (e) {
        if (!e) return null;
        c();

        for (var t = [], n = 0; n < i.length; n++) i[n][0] === e && t.push(i[n][1]);

        return t.length ? t : null;
      },
      saveUploadId: function (e, t, n) {
        if (c(), e) {
          for (var a = e.substr(0, e.indexOf("-") + 1), o = i.length - 1; o >= 0; o--) {
            var r = i[o];
            r[0] === e && r[1] === t ? i.splice(o, 1) : e !== r[0] && 0 === r[0].indexOf(a) && i.splice(o, 1);
          }

          i.unshift([e, t, Math.round(Date.now() / 1e3)]), i.length > n && i.splice(n), l();
        }
      },
      removeUploadId: function (e) {
        c(), delete p.using[e];

        for (var t = i.length - 1; t >= 0; t--) i[t][1] === e && i.splice(t, 1);

        l();
      }
    };

    e.exports = p;
  }, function (e, t, n) {
    var i = n(7);
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    var i = n(0),
        a = n(4),
        o = n(16),
        r = n(17),
        s = n(23),
        c = {
      SecretId: "",
      SecretKey: "",
      XCosSecurityToken: "",
      ChunkRetryTimes: 2,
      FileParallelLimit: 3,
      ChunkParallelLimit: 3,
      ChunkSize: 1048576,
      SliceSize: 1048576,
      CopyChunkParallelLimit: 20,
      CopyChunkSize: 10485760,
      CopySliceSize: 10485760,
      MaxPartNumber: 1e4,
      ProgressInterval: 1e3,
      UploadQueueSize: 1e4,
      Domain: "",
      ServiceDomain: "",
      Protocol: "",
      CompatibilityMode: !1,
      ForcePathStyle: !1,
      Timeout: 0,
      CorrectClockSkew: !0,
      SystemClockOffset: 0,
      UploadCheckContentMd5: !1,
      UploadIdCacheLimit: 50
    },
        l = function (e) {
      this.options = i.extend(i.clone(c), e || {}), this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit), this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit), this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes), this.options.ChunkSize = Math.max(1048576, this.options.ChunkSize), this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit), this.options.CopyChunkSize = Math.max(1048576, this.options.CopyChunkSize), this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize), this.options.MaxPartNumber = Math.max(1024, Math.min(1e4, this.options.MaxPartNumber)), this.options.Timeout = Math.max(0, this.options.Timeout), this.options.AppId && console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").'), a.init(this), o.init(this);
    };

    r.init(l, o), s.init(l, o), l.getAuthorization = i.getAuth, l.version = "1.0.6", e.exports = l;
  }, function (module, exports, __webpack_require__) {
    (function (process, global) {
      var __WEBPACK_AMD_DEFINE_RESULT__;

      !function () {
        "use strict";

        function Md5(e) {
          if (e) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks, this.buffer8 = buffer8;else if (ARRAY_BUFFER) {
            var t = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(t), this.blocks = new Uint32Array(t);
          } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
        }

        var ERROR = "input is invalid type",
            WINDOW = "object" == typeof window,
            root = WINDOW ? window : {};
        root.JS_MD5_NO_WINDOW && (WINDOW = !1);
        var WEB_WORKER = !WINDOW && "object" == typeof self,
            NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
        NODE_JS ? root = global : WEB_WORKER && (root = self);

        var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports,
            AMD = __webpack_require__(10),
            ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
            HEX_CHARS = "0123456789abcdef".split(""),
            EXTRA = [128, 32768, 8388608, -2147483648],
            SHIFT = [0, 8, 16, 24],
            OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
            BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
            blocks = [],
            buffer8;

        if (ARRAY_BUFFER) {
          var buffer = new ArrayBuffer(68);
          buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer);
        }

        !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
          return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer;
        });

        var createOutputMethod = function (e) {
          return function (t) {
            return new Md5(!0).update(t)[e]();
          };
        },
            createMethod = function () {
          var e = createOutputMethod("hex");
          NODE_JS && (e = nodeWrap(e)), e.getCtx = e.create = function () {
            return new Md5();
          }, e.update = function (t) {
            return e.create().update(t);
          };

          for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
            var n = OUTPUT_TYPES[t];
            e[n] = createOutputMethod(n);
          }

          return e;
        },
            nodeWrap = function (method) {
          var crypto = eval("require('crypto')"),
              Buffer = eval("require('buffer').Buffer"),
              nodeMethod = function (e) {
            if ("string" == typeof e) return crypto.createHash("md5").update(e, "utf8").digest("hex");
            if (null === e || void 0 === e) throw ERROR;
            return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e);
          };

          return nodeMethod;
        };

        Md5.prototype.update = function (e) {
          if (!this.finalized) {
            var t,
                n = typeof e;

            if ("string" !== n) {
              if ("object" !== n) throw ERROR;
              if (null === e) throw ERROR;

              if (!ARRAY_BUFFER || e.constructor !== ArrayBuffer && "ArrayBuffer" !== e.constructor.name) {
                if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw ERROR;
              } else e = new Uint8Array(e);

              t = !0;
            }

            for (var i, a, o = 0, r = e.length, s = this.blocks, c = this.buffer8; o < r;) {
              if (this.hashed && (this.hashed = !1, s[0] = s[16], s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), t) {
                if (ARRAY_BUFFER) for (a = this.start; o < r && a < 64; ++o) c[a++] = e[o];else for (a = this.start; o < r && a < 64; ++o) s[a >> 2] |= e[o] << SHIFT[3 & a++];
              } else if (ARRAY_BUFFER) for (a = this.start; o < r && a < 64; ++o) i = e.charCodeAt(o), i < 128 ? c[a++] = i : i < 2048 ? (c[a++] = 192 | i >> 6, c[a++] = 128 | 63 & i) : i < 55296 || i >= 57344 ? (c[a++] = 224 | i >> 12, c[a++] = 128 | i >> 6 & 63, c[a++] = 128 | 63 & i) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++o)), c[a++] = 240 | i >> 18, c[a++] = 128 | i >> 12 & 63, c[a++] = 128 | i >> 6 & 63, c[a++] = 128 | 63 & i);else for (a = this.start; o < r && a < 64; ++o) i = e.charCodeAt(o), i < 128 ? s[a >> 2] |= i << SHIFT[3 & a++] : i < 2048 ? (s[a >> 2] |= (192 | i >> 6) << SHIFT[3 & a++], s[a >> 2] |= (128 | 63 & i) << SHIFT[3 & a++]) : i < 55296 || i >= 57344 ? (s[a >> 2] |= (224 | i >> 12) << SHIFT[3 & a++], s[a >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & a++], s[a >> 2] |= (128 | 63 & i) << SHIFT[3 & a++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++o)), s[a >> 2] |= (240 | i >> 18) << SHIFT[3 & a++], s[a >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & a++], s[a >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & a++], s[a >> 2] |= (128 | 63 & i) << SHIFT[3 & a++]);
              this.lastByteIndex = a, this.bytes += a - this.start, a >= 64 ? (this.start = a - 64, this.hash(), this.hashed = !0) : this.start = a;
            }

            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
          }
        }, Md5.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks,
                t = this.lastByteIndex;
            e[t >> 2] |= EXTRA[3 & t], t >= 56 && (this.hashed || this.hash(), e[0] = e[16], e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.bytes << 3, e[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
          }
        }, Md5.prototype.hash = function () {
          var e,
              t,
              n,
              i,
              a,
              o,
              r = this.blocks;
          this.first ? (e = r[0] - 680876937, e = (e << 7 | e >>> 25) - 271733879 << 0, i = (-1732584194 ^ 2004318071 & e) + r[1] - 117830708, i = (i << 12 | i >>> 20) + e << 0, n = (-271733879 ^ i & (-271733879 ^ e)) + r[2] - 1126478375, n = (n << 17 | n >>> 15) + i << 0, t = (e ^ n & (i ^ e)) + r[3] - 1316259209, t = (t << 22 | t >>> 10) + n << 0) : (e = this.h0, t = this.h1, n = this.h2, i = this.h3, e += (i ^ t & (n ^ i)) + r[0] - 680876936, e = (e << 7 | e >>> 25) + t << 0, i += (n ^ e & (t ^ n)) + r[1] - 389564586, i = (i << 12 | i >>> 20) + e << 0, n += (t ^ i & (e ^ t)) + r[2] + 606105819, n = (n << 17 | n >>> 15) + i << 0, t += (e ^ n & (i ^ e)) + r[3] - 1044525330, t = (t << 22 | t >>> 10) + n << 0), e += (i ^ t & (n ^ i)) + r[4] - 176418897, e = (e << 7 | e >>> 25) + t << 0, i += (n ^ e & (t ^ n)) + r[5] + 1200080426, i = (i << 12 | i >>> 20) + e << 0, n += (t ^ i & (e ^ t)) + r[6] - 1473231341, n = (n << 17 | n >>> 15) + i << 0, t += (e ^ n & (i ^ e)) + r[7] - 45705983, t = (t << 22 | t >>> 10) + n << 0, e += (i ^ t & (n ^ i)) + r[8] + 1770035416, e = (e << 7 | e >>> 25) + t << 0, i += (n ^ e & (t ^ n)) + r[9] - 1958414417, i = (i << 12 | i >>> 20) + e << 0, n += (t ^ i & (e ^ t)) + r[10] - 42063, n = (n << 17 | n >>> 15) + i << 0, t += (e ^ n & (i ^ e)) + r[11] - 1990404162, t = (t << 22 | t >>> 10) + n << 0, e += (i ^ t & (n ^ i)) + r[12] + 1804603682, e = (e << 7 | e >>> 25) + t << 0, i += (n ^ e & (t ^ n)) + r[13] - 40341101, i = (i << 12 | i >>> 20) + e << 0, n += (t ^ i & (e ^ t)) + r[14] - 1502002290, n = (n << 17 | n >>> 15) + i << 0, t += (e ^ n & (i ^ e)) + r[15] + 1236535329, t = (t << 22 | t >>> 10) + n << 0, e += (n ^ i & (t ^ n)) + r[1] - 165796510, e = (e << 5 | e >>> 27) + t << 0, i += (t ^ n & (e ^ t)) + r[6] - 1069501632, i = (i << 9 | i >>> 23) + e << 0, n += (e ^ t & (i ^ e)) + r[11] + 643717713, n = (n << 14 | n >>> 18) + i << 0, t += (i ^ e & (n ^ i)) + r[0] - 373897302, t = (t << 20 | t >>> 12) + n << 0, e += (n ^ i & (t ^ n)) + r[5] - 701558691, e = (e << 5 | e >>> 27) + t << 0, i += (t ^ n & (e ^ t)) + r[10] + 38016083, i = (i << 9 | i >>> 23) + e << 0, n += (e ^ t & (i ^ e)) + r[15] - 660478335, n = (n << 14 | n >>> 18) + i << 0, t += (i ^ e & (n ^ i)) + r[4] - 405537848, t = (t << 20 | t >>> 12) + n << 0, e += (n ^ i & (t ^ n)) + r[9] + 568446438, e = (e << 5 | e >>> 27) + t << 0, i += (t ^ n & (e ^ t)) + r[14] - 1019803690, i = (i << 9 | i >>> 23) + e << 0, n += (e ^ t & (i ^ e)) + r[3] - 187363961, n = (n << 14 | n >>> 18) + i << 0, t += (i ^ e & (n ^ i)) + r[8] + 1163531501, t = (t << 20 | t >>> 12) + n << 0, e += (n ^ i & (t ^ n)) + r[13] - 1444681467, e = (e << 5 | e >>> 27) + t << 0, i += (t ^ n & (e ^ t)) + r[2] - 51403784, i = (i << 9 | i >>> 23) + e << 0, n += (e ^ t & (i ^ e)) + r[7] + 1735328473, n = (n << 14 | n >>> 18) + i << 0, t += (i ^ e & (n ^ i)) + r[12] - 1926607734, t = (t << 20 | t >>> 12) + n << 0, a = t ^ n, e += (a ^ i) + r[5] - 378558, e = (e << 4 | e >>> 28) + t << 0, i += (a ^ e) + r[8] - 2022574463, i = (i << 11 | i >>> 21) + e << 0, o = i ^ e, n += (o ^ t) + r[11] + 1839030562, n = (n << 16 | n >>> 16) + i << 0, t += (o ^ n) + r[14] - 35309556, t = (t << 23 | t >>> 9) + n << 0, a = t ^ n, e += (a ^ i) + r[1] - 1530992060, e = (e << 4 | e >>> 28) + t << 0, i += (a ^ e) + r[4] + 1272893353, i = (i << 11 | i >>> 21) + e << 0, o = i ^ e, n += (o ^ t) + r[7] - 155497632, n = (n << 16 | n >>> 16) + i << 0, t += (o ^ n) + r[10] - 1094730640, t = (t << 23 | t >>> 9) + n << 0, a = t ^ n, e += (a ^ i) + r[13] + 681279174, e = (e << 4 | e >>> 28) + t << 0, i += (a ^ e) + r[0] - 358537222, i = (i << 11 | i >>> 21) + e << 0, o = i ^ e, n += (o ^ t) + r[3] - 722521979, n = (n << 16 | n >>> 16) + i << 0, t += (o ^ n) + r[6] + 76029189, t = (t << 23 | t >>> 9) + n << 0, a = t ^ n, e += (a ^ i) + r[9] - 640364487, e = (e << 4 | e >>> 28) + t << 0, i += (a ^ e) + r[12] - 421815835, i = (i << 11 | i >>> 21) + e << 0, o = i ^ e, n += (o ^ t) + r[15] + 530742520, n = (n << 16 | n >>> 16) + i << 0, t += (o ^ n) + r[2] - 995338651, t = (t << 23 | t >>> 9) + n << 0, e += (n ^ (t | ~i)) + r[0] - 198630844, e = (e << 6 | e >>> 26) + t << 0, i += (t ^ (e | ~n)) + r[7] + 1126891415, i = (i << 10 | i >>> 22) + e << 0, n += (e ^ (i | ~t)) + r[14] - 1416354905, n = (n << 15 | n >>> 17) + i << 0, t += (i ^ (n | ~e)) + r[5] - 57434055, t = (t << 21 | t >>> 11) + n << 0, e += (n ^ (t | ~i)) + r[12] + 1700485571, e = (e << 6 | e >>> 26) + t << 0, i += (t ^ (e | ~n)) + r[3] - 1894986606, i = (i << 10 | i >>> 22) + e << 0, n += (e ^ (i | ~t)) + r[10] - 1051523, n = (n << 15 | n >>> 17) + i << 0, t += (i ^ (n | ~e)) + r[1] - 2054922799, t = (t << 21 | t >>> 11) + n << 0, e += (n ^ (t | ~i)) + r[8] + 1873313359, e = (e << 6 | e >>> 26) + t << 0, i += (t ^ (e | ~n)) + r[15] - 30611744, i = (i << 10 | i >>> 22) + e << 0, n += (e ^ (i | ~t)) + r[6] - 1560198380, n = (n << 15 | n >>> 17) + i << 0, t += (i ^ (n | ~e)) + r[13] + 1309151649, t = (t << 21 | t >>> 11) + n << 0, e += (n ^ (t | ~i)) + r[4] - 145523070, e = (e << 6 | e >>> 26) + t << 0, i += (t ^ (e | ~n)) + r[11] - 1120210379, i = (i << 10 | i >>> 22) + e << 0, n += (e ^ (i | ~t)) + r[2] + 718787259, n = (n << 15 | n >>> 17) + i << 0, t += (i ^ (n | ~e)) + r[9] - 343485551, t = (t << 21 | t >>> 11) + n << 0, this.first ? (this.h0 = e + 1732584193 << 0, this.h1 = t - 271733879 << 0, this.h2 = n - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + e << 0, this.h1 = this.h1 + t << 0, this.h2 = this.h2 + n << 0, this.h3 = this.h3 + i << 0);
        }, Md5.prototype.hex = function () {
          this.finalize();
          var e = this.h0,
              t = this.h1,
              n = this.h2,
              i = this.h3;
          return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15];
        }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function () {
          this.finalize();
          var e = this.h0,
              t = this.h1,
              n = this.h2,
              i = this.h3;
          return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255];
        }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function () {
          this.finalize();
          var e = new ArrayBuffer(16),
              t = new Uint32Array(e);
          return t[0] = this.h0, t[1] = this.h1, t[2] = this.h2, t[3] = this.h3, e;
        }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function () {
          for (var e, t, n, i = "", a = this.array(), o = 0; o < 15;) e = a[o++], t = a[o++], n = a[o++], i += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | t >>> 4)] + BASE64_ENCODE_CHAR[63 & (t << 2 | n >>> 6)] + BASE64_ENCODE_CHAR[63 & n];

          return e = a[o], i += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "==";
        };
        var exports = createMethod();
        COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return exports;
        }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }();
    }).call(exports, __webpack_require__(9), __webpack_require__(1));
  }, function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }

    function i() {
      throw new Error("clearTimeout has not been defined");
    }

    function a(e) {
      if (p === setTimeout) return setTimeout(e, 0);
      if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);

      try {
        return p(e, 0);
      } catch (t) {
        try {
          return p.call(null, e, 0);
        } catch (t) {
          return p.call(this, e, 0);
        }
      }
    }

    function o(e) {
      if (u === clearTimeout) return clearTimeout(e);
      if ((u === i || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);

      try {
        return u(e);
      } catch (t) {
        try {
          return u.call(null, e);
        } catch (t) {
          return u.call(this, e);
        }
      }
    }

    function r() {
      h && m && (h = !1, m.length ? f = m.concat(f) : g = -1, f.length && s());
    }

    function s() {
      if (!h) {
        var e = a(r);
        h = !0;

        for (var t = f.length; t;) {
          for (m = f, f = []; ++g < t;) m && m[g].run();

          g = -1, t = f.length;
        }

        m = null, h = !1, o(e);
      }
    }

    function c(e, t) {
      this.fun = e, this.array = t;
    }

    function l() {}

    var p,
        u,
        d = e.exports = {};
    !function () {
      try {
        p = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        p = n;
      }

      try {
        u = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        u = i;
      }
    }();
    var m,
        f = [],
        h = !1,
        g = -1;
    d.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      f.push(new c(e, t)), 1 !== f.length || h || a(s);
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (e) {
      return [];
    }, d.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, d.cwd = function () {
      return "/";
    }, d.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, d.umask = function () {
      return 0;
    };
  }, function (e, t) {
    (function (t) {
      e.exports = t;
    }).call(t, {});
  }, function (e, t) {
    var n = n || function (e, t) {
      var n = {},
          i = n.lib = {},
          a = function () {},
          o = i.Base = {
        extend: function (e) {
          a.prototype = this;
          var t = new a();
          return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function () {
            t.$super.init.apply(this, arguments);
          }), t.init.prototype = t, t.$super = this, t;
        },
        create: function () {
          var e = this.extend();
          return e.init.apply(e, arguments), e;
        },
        init: function () {},
        mixIn: function (e) {
          for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);

          e.hasOwnProperty("toString") && (this.toString = e.toString);
        },
        clone: function () {
          return this.init.prototype.extend(this);
        }
      },
          r = i.WordArray = o.extend({
        init: function (e, t) {
          e = this.words = e || [], this.sigBytes = void 0 != t ? t : 4 * e.length;
        },
        toString: function (e) {
          return (e || c).stringify(this);
        },
        concat: function (e) {
          var t = this.words,
              n = e.words,
              i = this.sigBytes;
          if (e = e.sigBytes, this.clamp(), i % 4) for (var a = 0; a < e; a++) t[i + a >>> 2] |= (n[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 24 - (i + a) % 4 * 8;else if (65535 < n.length) for (a = 0; a < e; a += 4) t[i + a >>> 2] = n[a >>> 2];else t.push.apply(t, n);
          return this.sigBytes += e, this;
        },
        clamp: function () {
          var t = this.words,
              n = this.sigBytes;
          t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
        },
        clone: function () {
          var e = o.clone.call(this);
          return e.words = this.words.slice(0), e;
        },
        random: function (t) {
          for (var n = [], i = 0; i < t; i += 4) n.push(4294967296 * e.random() | 0);

          return new r.init(n, t);
        }
      }),
          s = n.enc = {},
          c = s.Hex = {
        stringify: function (e) {
          var t = e.words;
          e = e.sigBytes;

          for (var n = [], i = 0; i < e; i++) {
            var a = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            n.push((a >>> 4).toString(16)), n.push((15 & a).toString(16));
          }

          return n.join("");
        },
        parse: function (e) {
          for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;

          return new r.init(n, t / 2);
        }
      },
          l = s.Latin1 = {
        stringify: function (e) {
          var t = e.words;
          e = e.sigBytes;

          for (var n = [], i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));

          return n.join("");
        },
        parse: function (e) {
          for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;

          return new r.init(n, t);
        }
      },
          p = s.Utf8 = {
        stringify: function (e) {
          try {
            return decodeURIComponent(escape(l.stringify(e)));
          } catch (e) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function (e) {
          return l.parse(unescape(encodeURIComponent(e)));
        }
      },
          u = i.BufferedBlockAlgorithm = o.extend({
        reset: function () {
          this._data = new r.init(), this._nDataBytes = 0;
        },
        _append: function (e) {
          "string" == typeof e && (e = p.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
        },
        _process: function (t) {
          var n = this._data,
              i = n.words,
              a = n.sigBytes,
              o = this.blockSize,
              s = a / (4 * o),
              s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0);

          if (t = s * o, a = e.min(4 * t, a), t) {
            for (var c = 0; c < t; c += o) this._doProcessBlock(i, c);

            c = i.splice(0, t), n.sigBytes -= a;
          }

          return new r.init(c, a);
        },
        clone: function () {
          var e = o.clone.call(this);
          return e._data = this._data.clone(), e;
        },
        _minBufferSize: 0
      });

      i.Hasher = u.extend({
        cfg: o.extend(),
        init: function (e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function () {
          u.reset.call(this), this._doReset();
        },
        update: function (e) {
          return this._append(e), this._process(), this;
        },
        finalize: function (e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function (e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function (e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = n.algo = {};
      return n;
    }(Math);

    !function () {
      var e = n,
          t = e.lib,
          i = t.WordArray,
          a = t.Hasher,
          o = [],
          t = e.algo.SHA1 = a.extend({
        _doReset: function () {
          this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function (e, t) {
          for (var n = this._hash.words, i = n[0], a = n[1], r = n[2], s = n[3], c = n[4], l = 0; 80 > l; l++) {
            if (16 > l) o[l] = 0 | e[t + l];else {
              var p = o[l - 3] ^ o[l - 8] ^ o[l - 14] ^ o[l - 16];
              o[l] = p << 1 | p >>> 31;
            }
            p = (i << 5 | i >>> 27) + c + o[l], p = 20 > l ? p + (1518500249 + (a & r | ~a & s)) : 40 > l ? p + (1859775393 + (a ^ r ^ s)) : 60 > l ? p + ((a & r | a & s | r & s) - 1894007588) : p + ((a ^ r ^ s) - 899497514), c = s, s = r, r = a << 30 | a >>> 2, a = i, i = p;
          }

          n[0] = n[0] + i | 0, n[1] = n[1] + a | 0, n[2] = n[2] + r | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0;
        },
        _doFinalize: function () {
          var e = this._data,
              t = e.words,
              n = 8 * this._nDataBytes,
              i = 8 * e.sigBytes;
          return t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
        },
        clone: function () {
          var e = a.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      e.SHA1 = a._createHelper(t), e.HmacSHA1 = a._createHmacHelper(t);
    }(), function () {
      var e = n,
          t = e.enc.Utf8;
      e.algo.HMAC = e.lib.Base.extend({
        init: function (e, n) {
          e = this._hasher = new e.init(), "string" == typeof n && (n = t.parse(n));
          var i = e.blockSize,
              a = 4 * i;
          n.sigBytes > a && (n = e.finalize(n)), n.clamp();

          for (var o = this._oKey = n.clone(), r = this._iKey = n.clone(), s = o.words, c = r.words, l = 0; l < i; l++) s[l] ^= 1549556828, c[l] ^= 909522486;

          o.sigBytes = r.sigBytes = a, this.reset();
        },
        reset: function () {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function (e) {
          return this._hasher.update(e), this;
        },
        finalize: function (e) {
          var t = this._hasher;
          return e = t.finalize(e), t.reset(), t.finalize(this._oKey.clone().concat(e));
        }
      });
    }(), function () {
      var e = n,
          t = e.lib,
          i = t.WordArray,
          a = e.enc;
      a.Base64 = {
        stringify: function (e) {
          var t = e.words,
              n = e.sigBytes,
              i = this._map;
          e.clamp();

          for (var a = [], o = 0; o < n; o += 3) for (var r = t[o >>> 2] >>> 24 - o % 4 * 8 & 255, s = t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, c = t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, l = r << 16 | s << 8 | c, p = 0; p < 4 && o + .75 * p < n; p++) a.push(i.charAt(l >>> 6 * (3 - p) & 63));

          var u = i.charAt(64);
          if (u) for (; a.length % 4;) a.push(u);
          return a.join("");
        },
        parse: function (e) {
          var t = e.length,
              n = this._map,
              a = n.charAt(64);

          if (a) {
            var o = e.indexOf(a);
            -1 != o && (t = o);
          }

          for (var r = [], s = 0, c = 0; c < t; c++) if (c % 4) {
            var l = n.indexOf(e.charAt(c - 1)) << c % 4 * 2,
                p = n.indexOf(e.charAt(c)) >>> 6 - c % 4 * 2;
            r[s >>> 2] |= (l | p) << 24 - s % 4 * 8, s++;
          }

          return i.create(r, s);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), e.exports = n;
  }, function (e, t, n) {
    var i = n(13).DOMParser,
        a = function (e) {
      "use strict";

      function t(e) {
        var t = e.localName;
        return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), t;
      }

      function n(e) {
        return e.prefix;
      }

      function a(e) {
        return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e;
      }

      function o(e, t, n, i) {
        for (var a = 0; a < e.length; a++) {
          var o = e[a];

          if ("string" == typeof o) {
            if (o == i) break;
          } else if (o instanceof RegExp) {
            if (o.test(i)) break;
          } else if ("function" == typeof o && o(t, n, i)) break;
        }

        return a != e.length;
      }

      function r(t, n, i) {
        switch (e.arrayAccessForm) {
          case "property":
            t[n] instanceof Array ? t[n + "_asArray"] = t[n] : t[n + "_asArray"] = [t[n]];
        }

        !(t[n] instanceof Array) && e.arrayAccessFormPaths.length > 0 && o(e.arrayAccessFormPaths, t, n, i) && (t[n] = [t[n]]);
      }

      function s(e) {
        var t = e.split(/[-T:+Z]/g),
            n = new Date(t[0], t[1] - 1, t[2]),
            i = t[5].split(".");

        if (n.setHours(t[3], t[4], i[0]), i.length > 1 && n.setMilliseconds(i[1]), t[6] && t[7]) {
          var a = 60 * t[6] + Number(t[7]);
          a = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * a : a), n.setMinutes(n.getMinutes() - a - n.getTimezoneOffset());
        } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));

        return n;
      }

      function c(t, n, i) {
        if (e.datetimeAccessFormPaths.length > 0) {
          var a = i.split(".#")[0];
          return o(e.datetimeAccessFormPaths, t, n, a) ? s(t) : t;
        }

        return t;
      }

      function l(t, n, i, a) {
        return !(n == S.ELEMENT_NODE && e.xmlElementsFilter.length > 0) || o(e.xmlElementsFilter, t, i, a);
      }

      function p(i, a) {
        if (i.nodeType == S.DOCUMENT_NODE) {
          for (var o = new Object(), s = i.childNodes, u = 0; u < s.length; u++) {
            var d = s.item(u);

            if (d.nodeType == S.ELEMENT_NODE) {
              var m = t(d);
              o[m] = p(d, m);
            }
          }

          return o;
        }

        if (i.nodeType == S.ELEMENT_NODE) {
          var o = new Object();
          o.__cnt = 0;

          for (var s = i.childNodes, u = 0; u < s.length; u++) {
            var d = s.item(u),
                m = t(d);

            if (d.nodeType != S.COMMENT_NODE) {
              var f = a + "." + m;
              l(o, d.nodeType, m, f) && (o.__cnt++, null == o[m] ? (o[m] = p(d, f), r(o, m, f)) : (null != o[m] && (o[m] instanceof Array || (o[m] = [o[m]], r(o, m, f))), o[m][o[m].length] = p(d, f)));
            }
          }

          for (var h = 0; h < i.attributes.length; h++) {
            var g = i.attributes.item(h);
            o.__cnt++, o[e.attributePrefix + g.name] = g.value;
          }

          var v = n(i);
          return null != v && "" != v && (o.__cnt++, o.__prefix = v), null != o["#text"] && (o.__text = o["#text"], o.__text instanceof Array && (o.__text = o.__text.join("\n")), e.stripWhitespaces && (o.__text = o.__text.trim()), delete o["#text"], "property" == e.arrayAccessForm && delete o["#text_asArray"], o.__text = c(o.__text, m, a + "." + m)), null != o["#cdata-section"] && (o.__cdata = o["#cdata-section"], delete o["#cdata-section"], "property" == e.arrayAccessForm && delete o["#cdata-section_asArray"]), 0 == o.__cnt && "text" == e.emptyNodeForm ? o = "" : 1 == o.__cnt && null != o.__text ? o = o.__text : 1 != o.__cnt || null == o.__cdata || e.keepCData ? o.__cnt > 1 && null != o.__text && e.skipEmptyTextNodesForObj && (e.stripWhitespaces && "" == o.__text || "" == o.__text.trim()) && delete o.__text : o = o.__cdata, delete o.__cnt, !e.enableToStringFunc || null == o.__text && null == o.__cdata || (o.toString = function () {
            return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "");
          }), o;
        }

        if (i.nodeType == S.TEXT_NODE || i.nodeType == S.CDATA_SECTION_NODE) return i.nodeValue;
      }

      function u(t, n, i, o) {
        var r = "<" + (null != t && null != t.__prefix ? t.__prefix + ":" : "") + n;
        if (null != i) for (var s = 0; s < i.length; s++) {
          var c = i[s],
              l = t[c];
          e.escapeMode && (l = a(l)), r += " " + c.substr(e.attributePrefix.length) + "=", e.useDoubleQuotes ? r += '"' + l + '"' : r += "'" + l + "'";
        }
        return r += o ? "/>" : ">";
      }

      function d(e, t) {
        return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">";
      }

      function m(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length);
      }

      function f(t, n) {
        return !!("property" == e.arrayAccessForm && m(n.toString(), "_asArray") || 0 == n.toString().indexOf(e.attributePrefix) || 0 == n.toString().indexOf("__") || t[n] instanceof Function);
      }

      function h(e) {
        var t = 0;
        if (e instanceof Object) for (var n in e) f(e, n) || t++;
        return t;
      }

      function g(t, n, i) {
        return 0 == e.jsonPropertiesFilter.length || "" == i || o(e.jsonPropertiesFilter, t, n, i);
      }

      function v(t) {
        var n = [];
        if (t instanceof Object) for (var i in t) -1 == i.toString().indexOf("__") && 0 == i.toString().indexOf(e.attributePrefix) && n.push(i);
        return n;
      }

      function x(t) {
        var n = "";
        return null != t.__cdata && (n += "<![CDATA[" + t.__cdata + "]]>"), null != t.__text && (e.escapeMode ? n += a(t.__text) : n += t.__text), n;
      }

      function y(t) {
        var n = "";
        return t instanceof Object ? n += x(t) : null != t && (e.escapeMode ? n += a(t) : n += t), n;
      }

      function C(e, t) {
        return "" === e ? t : e + "." + t;
      }

      function k(e, t, n, i) {
        var a = "";
        if (0 == e.length) a += u(e, t, n, !0);else for (var o = 0; o < e.length; o++) a += u(e[o], t, v(e[o]), !1), a += b(e[o], C(i, t)), a += d(e[o], t);
        return a;
      }

      function b(e, t) {
        var n = "";
        if (h(e) > 0) for (var i in e) if (!f(e, i) && ("" == t || g(e, i, C(t, i)))) {
          var a = e[i],
              o = v(a);
          if (null == a || void 0 == a) n += u(a, i, o, !0);else if (a instanceof Object) {
            if (a instanceof Array) n += k(a, i, o, t);else if (a instanceof Date) n += u(a, i, o, !1), n += a.toISOString(), n += d(a, i);else {
              var r = h(a);
              r > 0 || null != a.__text || null != a.__cdata ? (n += u(a, i, o, !1), n += b(a, C(t, i)), n += d(a, i)) : n += u(a, i, o, !0);
            }
          } else n += u(a, i, o, !1), n += y(a), n += d(a, i);
        }
        return n += y(e);
      }

      e = e || {}, function () {
        void 0 === e.escapeMode && (e.escapeMode = !0), e.attributePrefix = e.attributePrefix || "_", e.arrayAccessForm = e.arrayAccessForm || "none", e.emptyNodeForm = e.emptyNodeForm || "text", void 0 === e.enableToStringFunc && (e.enableToStringFunc = !0), e.arrayAccessFormPaths = e.arrayAccessFormPaths || [], void 0 === e.skipEmptyTextNodesForObj && (e.skipEmptyTextNodesForObj = !0), void 0 === e.stripWhitespaces && (e.stripWhitespaces = !0), e.datetimeAccessFormPaths = e.datetimeAccessFormPaths || [], void 0 === e.useDoubleQuotes && (e.useDoubleQuotes = !1), e.xmlElementsFilter = e.xmlElementsFilter || [], e.jsonPropertiesFilter = e.jsonPropertiesFilter || [], void 0 === e.keepCData && (e.keepCData = !1);
      }();
      var S = {
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9
      };
      this.parseXmlString = function (e) {
        if (void 0 === e) return null;
        var t;

        if (i) {
          var n = new i(),
              a = null;

          try {
            a = n.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
          } catch (e) {
            a = null;
          }

          try {
            t = n.parseFromString(e, "text/xml"), null != a && t.getElementsByTagNameNS(a, "parsererror").length > 0 && (t = null);
          } catch (e) {
            t = null;
          }
        } else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e);

        return t;
      }, this.asArray = function (e) {
        return void 0 === e || null == e ? [] : e instanceof Array ? e : [e];
      }, this.toXmlDateTime = function (e) {
        return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null;
      }, this.asDateTime = function (e) {
        return "string" == typeof e ? s(e) : e;
      }, this.xml2json = function (e) {
        return p(e);
      }, this.xml_str2json = function (e) {
        var t = this.parseXmlString(e);
        return null != t ? this.xml2json(t) : null;
      }, this.json2xml_str = function (e) {
        return b(e, "");
      }, this.json2xml = function (e) {
        var t = this.json2xml_str(e);
        return this.parseXmlString(t);
      }, this.getVersion = function () {
        return "1.2.0";
      };
    },
        o = function (e) {
      if (!e) return null;
      var t = new i(),
          n = t.parseFromString(e, "text/xml"),
          o = new a(),
          r = o.xml2json(n);
      return r.html && r.getElementsByTagName("parsererror").length ? null : r;
    };

    e.exports = o;
  }, function (e, t, n) {
    function i(e) {
      this.options = e || {
        locator: {}
      };
    }

    function a(e, t, n) {
      function i(t) {
        var i = e[t];
        !i && r && (i = 2 == e.length ? function (n) {
          e(t, n);
        } : e), a[t] = i && function (e) {
          i("[xmldom " + t + "]\t" + e + s(n));
        } || function () {};
      }

      if (!e) {
        if (t instanceof o) return t;
        e = t;
      }

      var a = {},
          r = e instanceof Function;
      return n = n || {}, i("warning"), i("error"), i("fatalError"), a;
    }

    function o() {
      this.cdata = !1;
    }

    function r(e, t) {
      t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
    }

    function s(e) {
      if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
    }

    function c(e, t, n) {
      return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
    }

    function l(e, t) {
      e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
    }

    i.prototype.parseFromString = function (e, t) {
      var n = this.options,
          i = new p(),
          r = n.domBuilder || new o(),
          s = n.errorHandler,
          c = n.locator,
          l = n.xmlns || {},
          u = {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
      };
      return c && r.setDocumentLocator(c), i.errorHandler = a(s, r, c), i.domBuilder = n.domBuilder || r, /\/x?html?$/.test(t) && (u.nbsp = "\xa0", u.copy = "\xa9", l[""] = "http://www.w3.org/1999/xhtml"), l.xml = l.xml || "http://www.w3.org/XML/1998/namespace", e ? i.parse(e, l, u) : i.errorHandler.error("invalid doc source"), r.doc;
    }, o.prototype = {
      startDocument: function () {
        this.doc = new u().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
      },
      startElement: function (e, t, n, i) {
        var a = this.doc,
            o = a.createElementNS(e, n || t),
            s = i.length;
        l(this, o), this.currentElement = o, this.locator && r(this.locator, o);

        for (var c = 0; c < s; c++) {
          var e = i.getURI(c),
              p = i.getValue(c),
              n = i.getQName(c),
              u = a.createAttributeNS(e, n);
          this.locator && r(i.getLocator(c), u), u.value = u.nodeValue = p, o.setAttributeNode(u);
        }
      },
      endElement: function (e, t, n) {
        var i = this.currentElement;
        i.tagName;
        this.currentElement = i.parentNode;
      },
      startPrefixMapping: function (e, t) {},
      endPrefixMapping: function (e) {},
      processingInstruction: function (e, t) {
        var n = this.doc.createProcessingInstruction(e, t);
        this.locator && r(this.locator, n), l(this, n);
      },
      ignorableWhitespace: function (e, t, n) {},
      characters: function (e, t, n) {
        if (e = c.apply(this, arguments)) {
          if (this.cdata) var i = this.doc.createCDATASection(e);else var i = this.doc.createTextNode(e);
          this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(e) && this.doc.appendChild(i), this.locator && r(this.locator, i);
        }
      },
      skippedEntity: function (e) {},
      endDocument: function () {
        this.doc.normalize();
      },
      setDocumentLocator: function (e) {
        (this.locator = e) && (e.lineNumber = 0);
      },
      comment: function (e, t, n) {
        e = c.apply(this, arguments);
        var i = this.doc.createComment(e);
        this.locator && r(this.locator, i), l(this, i);
      },
      startCDATA: function () {
        this.cdata = !0;
      },
      endCDATA: function () {
        this.cdata = !1;
      },
      startDTD: function (e, t, n) {
        var i = this.doc.implementation;

        if (i && i.createDocumentType) {
          var a = i.createDocumentType(e, t, n);
          this.locator && r(this.locator, a), l(this, a);
        }
      },
      warning: function (e) {
        console.warn("[xmldom warning]\t" + e, s(this.locator));
      },
      error: function (e) {
        console.error("[xmldom error]\t" + e, s(this.locator));
      },
      fatalError: function (e) {
        throw console.error("[xmldom fatalError]\t" + e, s(this.locator)), e;
      }
    }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
      o.prototype[e] = function () {
        return null;
      };
    });
    var p = n(14).XMLReader,
        u = t.DOMImplementation = n(2).DOMImplementation;
    t.XMLSerializer = n(2).XMLSerializer, t.DOMParser = i;
  }, function (e, t) {
    function n() {}

    function i(e, t, n, i, l) {
      function m(e) {
        if (e > 65535) {
          e -= 65536;
          var t = 55296 + (e >> 10),
              n = 56320 + (1023 & e);
          return String.fromCharCode(t, n);
        }

        return String.fromCharCode(e);
      }

      function f(e) {
        var t = e.slice(1, -1);
        return t in n ? n[t] : "#" === t.charAt(0) ? m(parseInt(t.substr(1).replace("x", "0x"))) : (l.error("entity not found:" + e), e);
      }

      function h(t) {
        if (t > S) {
          var n = e.substring(S, t).replace(/&#?\w+;/g, f);
          C && g(S), i.characters(n, 0, t - S), S = t;
        }
      }

      function g(t, n) {
        for (; t >= x && (n = y.exec(e));) v = n.index, x = v + n[0].length, C.lineNumber++;

        C.columnNumber = t - v + 1;
      }

      for (var v = 0, x = 0, y = /.*(?:\r\n?|\n)|.*$/g, C = i.locator, k = [{
        currentNSMap: t
      }], b = {}, S = 0;;) {
        try {
          var R = e.indexOf("<", S);

          if (R < 0) {
            if (!e.substr(S).match(/^\s*$/)) {
              var w = i.doc,
                  _ = w.createTextNode(e.substr(S));

              w.appendChild(_), i.currentElement = _;
            }

            return;
          }

          switch (R > S && h(R), e.charAt(R + 1)) {
            case "/":
              var A = e.indexOf(">", R + 3),
                  T = e.substring(R + 2, A),
                  E = k.pop();
              A < 0 ? (T = e.substring(R + 2).replace(/[\s<].*/, ""), l.error("end tag name: " + T + " is not complete:" + E.tagName), A = R + 1 + T.length) : T.match(/\s</) && (T = T.replace(/[\s<].*/, ""), l.error("end tag name: " + T + " maybe not complete"), A = R + 1 + T.length);
              var B = E.localNSMap,
                  O = E.tagName == T;

              if (O || E.tagName && E.tagName.toLowerCase() == T.toLowerCase()) {
                if (i.endElement(E.uri, E.localName, T), B) for (var D in B) i.endPrefixMapping(D);
                O || l.fatalError("end tag name: " + T + " is not match the current start tagName:" + E.tagName);
              } else k.push(E);

              A++;
              break;

            case "?":
              C && g(R), A = u(e, R, i);
              break;

            case "!":
              C && g(R), A = p(e, R, i, l);
              break;

            default:
              C && g(R);
              var N = new d(),
                  I = k[k.length - 1].currentNSMap,
                  A = o(e, R, N, I, f, l),
                  P = N.length;

              if (!N.closed && c(e, A, N.tagName, b) && (N.closed = !0, n.nbsp || l.warning("unclosed xml attribute")), C && P) {
                for (var j = a(C, {}), M = 0; M < P; M++) {
                  var U = N[M];
                  g(U.offset), U.locator = a(C, {});
                }

                i.locator = j, r(N, i, I) && k.push(N), i.locator = C;
              } else r(N, i, I) && k.push(N);

              "http://www.w3.org/1999/xhtml" !== N.uri || N.closed ? A++ : A = s(e, A, N.tagName, f, i);
          }
        } catch (e) {
          l.error("element parse error: " + e), A = -1;
        }

        A > S ? S = A : h(Math.max(R, S) + 1);
      }
    }

    function a(e, t) {
      return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
    }

    function o(e, t, n, i, a, o) {
      for (var r, s, c = ++t, l = x;;) {
        var p = e.charAt(c);

        switch (p) {
          case "=":
            if (l === y) r = e.slice(t, c), l = k;else {
              if (l !== C) throw new Error("attribute equal must after attrName");
              l = k;
            }
            break;

          case "'":
          case '"':
            if (l === k || l === y) {
              if (l === y && (o.warning('attribute value must after "="'), r = e.slice(t, c)), t = c + 1, !((c = e.indexOf(p, t)) > 0)) throw new Error("attribute value no end '" + p + "' match");
              s = e.slice(t, c).replace(/&#?\w+;/g, a), n.add(r, s, t - 1), l = S;
            } else {
              if (l != b) throw new Error('attribute value must after "="');
              s = e.slice(t, c).replace(/&#?\w+;/g, a), n.add(r, s, t), o.warning('attribute "' + r + '" missed start quot(' + p + ")!!"), t = c + 1, l = S;
            }

            break;

          case "/":
            switch (l) {
              case x:
                n.setTagName(e.slice(t, c));

              case S:
              case R:
              case w:
                l = w, n.closed = !0;

              case b:
              case y:
              case C:
                break;

              default:
                throw new Error("attribute invalid close char('/')");
            }

            break;

          case "":
            return o.error("unexpected end of input"), l == x && n.setTagName(e.slice(t, c)), c;

          case ">":
            switch (l) {
              case x:
                n.setTagName(e.slice(t, c));

              case S:
              case R:
              case w:
                break;

              case b:
              case y:
                s = e.slice(t, c), "/" === s.slice(-1) && (n.closed = !0, s = s.slice(0, -1));

              case C:
                l === C && (s = r), l == b ? (o.warning('attribute "' + s + '" missed quot(")!!'), n.add(r, s.replace(/&#?\w+;/g, a), t)) : ("http://www.w3.org/1999/xhtml" === i[""] && s.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + s + '" missed value!! "' + s + '" instead!!'), n.add(s, s, t));
                break;

              case k:
                throw new Error("attribute value missed!!");
            }

            return c;

          case "\x80":
            p = " ";

          default:
            if (p <= " ") switch (l) {
              case x:
                n.setTagName(e.slice(t, c)), l = R;
                break;

              case y:
                r = e.slice(t, c), l = C;
                break;

              case b:
                var s = e.slice(t, c).replace(/&#?\w+;/g, a);
                o.warning('attribute "' + s + '" missed quot(")!!'), n.add(r, s, t);

              case S:
                l = R;
            } else switch (l) {
              case C:
                n.tagName;
                "http://www.w3.org/1999/xhtml" === i[""] && r.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + r + '" missed value!! "' + r + '" instead2!!'), n.add(r, r, t), t = c, l = y;
                break;

              case S:
                o.warning('attribute space is required"' + r + '"!!');

              case R:
                l = y, t = c;
                break;

              case k:
                l = b, t = c;
                break;

              case w:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
        }

        c++;
      }
    }

    function r(e, t, n) {
      for (var i = e.tagName, a = null, o = e.length; o--;) {
        var r = e[o],
            s = r.qName,
            c = r.value,
            p = s.indexOf(":");
        if (p > 0) var u = r.prefix = s.slice(0, p),
            d = s.slice(p + 1),
            m = "xmlns" === u && d;else d = s, u = null, m = "xmlns" === s && "";
        r.localName = d, !1 !== m && (null == a && (a = {}, l(n, n = {})), n[m] = a[m] = c, r.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(m, c));
      }

      for (var o = e.length; o--;) {
        r = e[o];
        var u = r.prefix;
        u && ("xml" === u && (r.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== u && (r.uri = n[u || ""]));
      }

      var p = i.indexOf(":");
      p > 0 ? (u = e.prefix = i.slice(0, p), d = e.localName = i.slice(p + 1)) : (u = null, d = e.localName = i);
      var f = e.uri = n[u || ""];
      if (t.startElement(f, d, i, e), !e.closed) return e.currentNSMap = n, e.localNSMap = a, !0;
      if (t.endElement(f, d, i), a) for (u in a) t.endPrefixMapping(u);
    }

    function s(e, t, n, i, a) {
      if (/^(?:script|textarea)$/i.test(n)) {
        var o = e.indexOf("</" + n + ">", t),
            r = e.substring(t + 1, o);
        if (/[&<]/.test(r)) return /^script$/i.test(n) ? (a.characters(r, 0, r.length), o) : (r = r.replace(/&#?\w+;/g, i), a.characters(r, 0, r.length), o);
      }

      return t + 1;
    }

    function c(e, t, n, i) {
      var a = i[n];
      return null == a && (a = e.lastIndexOf("</" + n + ">"), a < t && (a = e.lastIndexOf("</" + n)), i[n] = a), a < t;
    }

    function l(e, t) {
      for (var n in e) t[n] = e[n];
    }

    function p(e, t, n, i) {
      switch (e.charAt(t + 2)) {
        case "-":
          if ("-" === e.charAt(t + 3)) {
            var a = e.indexOf("--\x3e", t + 4);
            return a > t ? (n.comment(e, t + 4, a - t - 4), a + 3) : (i.error("Unclosed comment"), -1);
          }

          return -1;

        default:
          if ("CDATA[" == e.substr(t + 3, 6)) {
            var a = e.indexOf("]]>", t + 9);
            return n.startCDATA(), n.characters(e, t + 9, a - t - 9), n.endCDATA(), a + 3;
          }

          var o = f(e, t),
              r = o.length;

          if (r > 1 && /!doctype/i.test(o[0][0])) {
            var s = o[1][0],
                c = r > 3 && /^public$/i.test(o[2][0]) && o[3][0],
                l = r > 4 && o[4][0],
                p = o[r - 1];
            return n.startDTD(s, c && c.replace(/^(['"])(.*?)\1$/, "$2"), l && l.replace(/^(['"])(.*?)\1$/, "$2")), n.endDTD(), p.index + p[0].length;
          }

      }

      return -1;
    }

    function u(e, t, n) {
      var i = e.indexOf("?>", t);

      if (i) {
        var a = e.substring(t, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);

        if (a) {
          a[0].length;
          return n.processingInstruction(a[1], a[2]), i + 2;
        }

        return -1;
      }

      return -1;
    }

    function d(e) {}

    function m(e, t) {
      return e.__proto__ = t, e;
    }

    function f(e, t) {
      var n,
          i = [],
          a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;

      for (a.lastIndex = t, a.exec(e); n = a.exec(e);) if (i.push(n), n[1]) return i;
    }

    var h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        g = new RegExp("[\\-\\.0-9" + h.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
        v = new RegExp("^" + h.source + g.source + "*(?::" + h.source + g.source + "*)?$"),
        x = 0,
        y = 1,
        C = 2,
        k = 3,
        b = 4,
        S = 5,
        R = 6,
        w = 7;
    n.prototype = {
      parse: function (e, t, n) {
        var a = this.domBuilder;
        a.startDocument(), l(t, t = {}), i(e, t, n, a, this.errorHandler), a.endDocument();
      }
    }, d.prototype = {
      setTagName: function (e) {
        if (!v.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
      },
      add: function (e, t, n) {
        if (!v.test(e)) throw new Error("invalid attribute:" + e);
        this[this.length++] = {
          qName: e,
          value: t,
          offset: n
        };
      },
      length: 0,
      getLocalName: function (e) {
        return this[e].localName;
      },
      getLocator: function (e) {
        return this[e].locator;
      },
      getQName: function (e) {
        return this[e].qName;
      },
      getURI: function (e) {
        return this[e].uri;
      },
      getValue: function (e) {
        return this[e].value;
      }
    }, m({}, m.prototype) instanceof m || (m = function (e, t) {
      function n() {}

      n.prototype = t, n = new n();

      for (t in e) n[t] = e[t];

      return n;
    }), t.XMLReader = n;
  }, function (e, t) {
    function n(e) {
      return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(a, "");
    }

    var i = new RegExp("^([^a-zA-Z_\xc0-\xd6\xd8-\xf6\xf8-\xff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fff\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd])|^((x|X)(m|M)(l|L))|([^a-zA-Z_\xc0-\xd6\xd8-\xf6\xf8-\xff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fff\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd-.0-9\xb7\u0300-\u036f\u203f\u2040])", "g"),
        a = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,
        o = function (e) {
      var t = [];
      if (e instanceof Object) for (var n in e) e.hasOwnProperty(n) && t.push(n);
      return t;
    },
        r = function (e, t) {
      var a = function (e, n, a, o, r) {
        var s = void 0 !== t.indent ? t.indent : "\t",
            c = t.prettyPrint ? "\n" + new Array(o).join(s) : "";
        t.removeIllegalNameCharacters && (e = e.replace(i, "_"));
        var l = [c, "<", e, a || ""];
        return n && n.length > 0 ? (l.push(">"), l.push(n), r && l.push(c), l.push("</"), l.push(e), l.push(">")) : l.push("/>"), l.join("");
      };

      return function e(i, r, s) {
        var c = typeof i;

        switch ((Array.isArray ? Array.isArray(i) : i instanceof Array) ? c = "array" : i instanceof Date && (c = "date"), c) {
          case "array":
            var l = [];
            return i.map(function (t) {
              l.push(e(t, 1, s + 1));
            }), t.prettyPrint && l.push("\n"), l.join("");

          case "date":
            return i.toJSON ? i.toJSON() : i + "";

          case "object":
            var p = [];

            for (var u in i) if (i.hasOwnProperty(u)) if (i[u] instanceof Array) for (var d in i[u]) i[u].hasOwnProperty(d) && p.push(a(u, e(i[u][d], 0, s + 1), null, s + 1, o(i[u][d]).length));else p.push(a(u, e(i[u], 0, s + 1), null, s + 1));

            return t.prettyPrint && p.length > 0 && p.push("\n"), p.join("");

          case "function":
            return i();

          default:
            return t.escape ? n(i) : "" + i;
        }
      }(e, 0, 0);
    },
        s = function (e) {
      var t = ['<?xml version="1.0" encoding="UTF-8"'];
      return e && t.push(' standalone="yes"'), t.push("?>"), t.join("");
    },
        c = function (e, t) {
      if (t || (t = {
        xmlHeader: {
          standalone: !0
        },
        prettyPrint: !0,
        indent: "  "
      }), "string" == typeof e) try {
        e = JSON.parse(e.toString());
      } catch (e) {
        return !1;
      }
      var n = "",
          i = "";
      return t && ("object" == typeof t ? (t.xmlHeader && (n = s(!!t.xmlHeader.standalone)), void 0 !== t.docType && (i = "<!DOCTYPE " + t.docType + ">")) : n = s()), t = t || {}, [n, t.prettyPrint && i ? "\n" : "", i, r(e, t)].join("").replace(/\n{2,}/g, "\n").replace(/\s+$/g, "");
    };

    e.exports = c;
  }, function (e, t, n) {
    var i = n(5),
        a = n(0),
        o = {},
        r = function (e, t) {
      o[t] = e[t], e[t] = function (e, n) {
        e.SkipTask ? o[t].call(this, e, n) : this._addTask(t, e, n);
      };
    },
        s = function (e) {
      var t = [],
          n = {},
          r = 0,
          s = 0,
          c = function (e) {
        var t = {
          id: e.id,
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          FilePath: e.FilePath,
          state: e.state,
          loaded: e.loaded,
          size: e.size,
          speed: e.speed,
          percent: e.percent,
          hashPercent: e.hashPercent,
          error: e.error
        };
        return e.FilePath && (t.FilePath = e.FilePath), t;
      },
          l = function () {
        var n,
            i = function () {
          n = 0, e.emit("task-list-update", {
            list: a.map(t, c)
          }), e.emit("list-update", {
            list: a.map(t, c)
          });
        };

        return function () {
          n || (n = setTimeout(i));
        };
      }(),
          p = function () {
        if (!(t.length <= e.options.UploadQueueSize)) {
          for (var i = 0; i < s && i < t.length && t.length > e.options.UploadQueueSize;) {
            var a = "waiting" === t[i].state || "checking" === t[i].state || "uploading" === t[i].state;
            t[i] && a ? i++ : (n[t[i].id] && delete n[t[i].id], t.splice(i, 1), s--);
          }

          l();
        }
      },
          u = function () {
        if (!(r >= e.options.FileParallelLimit)) {
          for (; t[s] && "waiting" !== t[s].state;) s++;

          if (!(s >= t.length)) {
            var n = t[s];
            s++, r++, n.state = "checking", n.params.onTaskStart && n.params.onTaskStart(c(n)), !n.params.UploadData && (n.params.UploadData = {});
            var i = a.formatParams(n.api, n.params);
            o[n.api].call(e, i, function (t, i) {
              e._isRunningTask(n.id) && ("checking" !== n.state && "uploading" !== n.state || (n.state = t ? "error" : "success", t && (n.error = t), r--, l(), u(), n.callback && n.callback(t, i), "success" === n.state && (n.params && (delete n.params.UploadData, delete n.params.Body, delete n.params), delete n.callback)), p());
            }), l(), setTimeout(u);
          }
        }
      },
          d = function (t, a) {
        var o = n[t];

        if (o) {
          var s = o && "waiting" === o.state,
              c = o && ("checking" === o.state || "uploading" === o.state);

          if ("canceled" === a && "canceled" !== o.state || "paused" === a && s || "paused" === a && c) {
            if ("paused" === a && o.params.Body && "function" == typeof o.params.Body.pipe) return void console.error("stream not support pause");
            o.state = a, e.emit("inner-kill-task", {
              TaskId: t,
              toState: a
            });

            try {
              var d = o && o.params && o.params.UploadData.UploadId;
            } catch (e) {}

            "canceled" === a && d && i.removeUsing(d), l(), c && (r--, u()), "canceled" === a && (o.params && (delete o.params.UploadData, delete o.params.Body, delete o.params), delete o.callback);
          }

          p();
        }
      };

      e._addTasks = function (t) {
        a.each(t, function (t) {
          e._addTask(t.api, t.params, t.callback, !0);
        }), l();
      }, e._addTask = function (i, o, r, s) {
        "sliceUploadFile" !== i || a.canFileSlice() || (i = "postObject"), o = a.formatParams(i, o);
        var c = a.uuid();
        o.TaskId = c, o.onTaskReady && o.onTaskReady(c);
        var d = {
          params: o,
          callback: r,
          api: i,
          index: t.length,
          id: c,
          Bucket: o.Bucket,
          Region: o.Region,
          Key: o.Key,
          FilePath: o.FilePath || "",
          state: "waiting",
          loaded: 0,
          size: 0,
          speed: 0,
          percent: 0,
          hashPercent: 0,
          error: null
        },
            m = o.onHashProgress;

        o.onHashProgress = function (t) {
          e._isRunningTask(d.id) && (d.hashPercent = t.percent, m && m(t), l());
        };

        var f = o.onProgress;
        return o.onProgress = function (t) {
          e._isRunningTask(d.id) && ("checking" === d.state && (d.state = "uploading"), d.loaded = t.loaded, d.size = t.total, d.speed = t.speed, d.percent = t.percent, f && f(t), l());
        }, a.getFileSize(i, o, function (e, i) {
          if (e) return void r(e);
          n[c] = d, t.push(d), d.size = i, !s && l(), u(), p();
        }), c;
      }, e._isRunningTask = function (e) {
        var t = n[e];
        return !(!t || "checking" !== t.state && "uploading" !== t.state);
      }, e.getTaskList = function () {
        return a.map(t, c);
      }, e.cancelTask = function (e) {
        d(e, "canceled");
      }, e.pauseTask = function (e) {
        d(e, "paused");
      }, e.restartTask = function (e) {
        var t = n[e];
        !t || "paused" !== t.state && "error" !== t.state || (t.state = "waiting", l(), s = Math.min(s, t.index), u());
      }, e.isUploadRunning = function () {
        return r || s < t.length;
      };
    };

    e.exports.transferToTaskMethod = r, e.exports.init = s;
  }, function (e, t, n) {
    "use strict";

    function i(e, t) {
      "function" == typeof e && (t = e, e = {});
      var n = this.options.ServiceDomain,
          i = e.Region;
      n ? (n = n.replace(/\{\{Region\}\}/gi, i || "").replace(/\{\{.*?\}\}/gi, ""), /^[a-zA-Z]+:\/\//.test(n) || (n = "https://" + n), "/" === n.slice(-1) && (n = n.slice(0, -1))) : n = i ? "https://cos." + i + ".myqcloud.com" : "https://service.cos.myqcloud.com", be.call(this, {
        Action: "name/cos:GetService",
        url: n,
        method: "GET",
        headers: e.Headers
      }, function (e, n) {
        if (e) return t(e);
        var i = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Buckets && n.ListAllMyBucketsResult.Buckets.Bucket || [];
        i = _e.isArray(i) ? i : [i];
        var a = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Owner || {};
        t(null, {
          Buckets: i,
          Owner: a,
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function a(e, t) {
      var n = this,
          i = "";

      if (e.BucketAZConfig) {
        var a = {
          BucketAZConfig: e.BucketAZConfig
        };
        i = _e.json2xml({
          CreateBucketConfiguration: a
        });
      }

      be.call(this, {
        Action: "name/cos:PutBucket",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        body: i
      }, function (i, a) {
        if (i) return t(i);
        var o = ye({
          protocol: n.options.Protocol,
          domain: n.options.Domain,
          bucket: e.Bucket,
          region: e.Region,
          isLocation: !0
        });
        t(null, {
          Location: o,
          statusCode: a.statusCode,
          headers: a.headers
        });
      });
    }

    function o(e, t) {
      be.call(this, {
        Action: "name/cos:HeadBucket",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        method: "HEAD"
      }, function (e, n) {
        t(e, n);
      });
    }

    function r(e, t) {
      var n = {};
      n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n.marker = e.Marker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, be.call(this, {
        Action: "name/cos:GetBucket",
        ResourceKey: n.prefix,
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        qs: n
      }, function (e, n) {
        if (e) return t(e);
        var i = n.ListBucketResult || {},
            a = i.Contents || [],
            o = i.CommonPrefixes || [];
        a = _e.isArray(a) ? a : [a], o = _e.isArray(o) ? o : [o];

        var r = _e.clone(i);

        _e.extend(r, {
          Contents: a,
          CommonPrefixes: o,
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, r);
      });
    }

    function s(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucket",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        method: "DELETE"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function c(e, t) {
      var n = e.Headers,
          i = "";

      if (e.AccessControlPolicy) {
        var a = _e.clone(e.AccessControlPolicy || {}),
            o = a.Grants || a.Grant;

        o = _e.isArray(o) ? o : [o], delete a.Grant, delete a.Grants, a.AccessControlList = {
          Grant: o
        }, i = _e.json2xml({
          AccessControlPolicy: a
        }), n["Content-Type"] = "application/xml", n["Content-MD5"] = _e.binaryBase64(_e.md5(i));
      }

      _e.each(n, function (e, t) {
        0 === t.indexOf("x-cos-grant-") && (n[t] = xe(n[t]));
      }), be.call(this, {
        Action: "name/cos:PutBucketACL",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: n,
        action: "acl",
        body: i
      }, function (e, n) {
        if (e) return t(e);
        t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function l(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketACL",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "acl"
      }, function (e, n) {
        if (e) return t(e);
        var i = n.AccessControlPolicy || {},
            a = i.Owner || {},
            o = i.AccessControlList.Grant || [];
        o = _e.isArray(o) ? o : [o];
        var r = ve(i);
        n.headers && n.headers["x-cos-acl"] && (r.ACL = n.headers["x-cos-acl"]), r = _e.extend(r, {
          Owner: a,
          Grants: o,
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, r);
      });
    }

    function p(e, t) {
      var n = e.CORSConfiguration || {},
          i = n.CORSRules || e.CORSRules || [];
      i = _e.clone(_e.isArray(i) ? i : [i]), _e.each(i, function (e) {
        _e.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (t) {
          var n = t + "s",
              i = e[n] || e[t] || [];
          delete e[n], e[t] = _e.isArray(i) ? i : [i];
        });
      });

      var a = _e.json2xml({
        CORSConfiguration: {
          CORSRule: i
        }
      }),
          o = e.Headers;

      o["Content-Type"] = "application/xml", o["Content-MD5"] = _e.binaryBase64(_e.md5(a)), be.call(this, {
        Action: "name/cos:PutBucketCORS",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: a,
        action: "cors",
        headers: o
      }, function (e, n) {
        if (e) return t(e);
        t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function u(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketCORS",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "cors"
      }, function (e, n) {
        if (e) {
          if (404 === e.statusCode && e.error && "NoSuchCORSConfiguration" === e.error.Code) {
            var i = {
              CORSRules: [],
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), t(null, i);
          } else t(e);
        } else {
          var a = n.CORSConfiguration || {},
              o = a.CORSRules || a.CORSRule || [];
          o = _e.clone(_e.isArray(o) ? o : [o]), _e.each(o, function (e) {
            _e.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (t) {
              var n = t + "s",
                  i = e[n] || e[t] || [];
              delete e[t], e[n] = _e.isArray(i) ? i : [i];
            });
          }), t(null, {
            CORSRules: o,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function d(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketCORS",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "cors"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode || e.statusCode,
          headers: n.headers
        });
      });
    }

    function m(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketLocation",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "location"
      }, function (e, n) {
        if (e) return t(e);
        t(null, n);
      });
    }

    function f(e, t) {
      var n = e.Policy,
          i = n;

      try {
        "string" == typeof n ? n = JSON.parse(i) : i = JSON.stringify(n);
      } catch (e) {
        t({
          error: "Policy format error"
        });
      }

      var a = e.Headers;
      a["Content-Type"] = "application/json", a["Content-MD5"] = _e.binaryBase64(_e.md5(i)), be.call(this, {
        Action: "name/cos:PutBucketPolicy",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        action: "policy",
        body: i,
        headers: a,
        json: !0
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function h(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketPolicy",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "policy",
        rawBody: !0
      }, function (e, n) {
        if (e) return t(e.statusCode && 403 === e.statusCode ? {
          ErrorStatus: "Access Denied"
        } : e.statusCode && 405 === e.statusCode ? {
          ErrorStatus: "Method Not Allowed"
        } : e.statusCode && 404 === e.statusCode ? {
          ErrorStatus: "Policy Not Found"
        } : e);
        var i = {};

        try {
          i = JSON.parse(n.body);
        } catch (e) {}

        t(null, {
          Policy: i,
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function g(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketPolicy",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "policy"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode || e.statusCode,
          headers: n.headers
        });
      });
    }

    function v(e, t) {
      var n = e.Tagging || {},
          i = n.TagSet || n.Tags || e.Tags || [];
      i = _e.clone(_e.isArray(i) ? i : [i]);

      var a = _e.json2xml({
        Tagging: {
          TagSet: {
            Tag: i
          }
        }
      }),
          o = e.Headers;

      o["Content-Type"] = "application/xml", o["Content-MD5"] = _e.binaryBase64(_e.md5(a)), be.call(this, {
        Action: "name/cos:PutBucketTagging",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: a,
        action: "tagging",
        headers: o
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function x(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketTagging",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "tagging"
      }, function (e, n) {
        if (e) {
          if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "NoSuchTagSet" !== e.error.Code) t(e);else {
            var i = {
              Tags: [],
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), t(null, i);
          }
        } else {
          var a = [];

          try {
            a = n.Tagging.TagSet.Tag || [];
          } catch (e) {}

          a = _e.clone(_e.isArray(a) ? a : [a]), t(null, {
            Tags: a,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function y(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketTagging",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "tagging"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function C(e, t) {
      var n = e.LifecycleConfiguration || {},
          i = n.Rules || e.Rules || [];
      i = _e.clone(i);

      var a = _e.json2xml({
        LifecycleConfiguration: {
          Rule: i
        }
      }),
          o = e.Headers;

      o["Content-Type"] = "application/xml", o["Content-MD5"] = _e.binaryBase64(_e.md5(a)), be.call(this, {
        Action: "name/cos:PutBucketLifecycle",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: a,
        action: "lifecycle",
        headers: o
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function k(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketLifecycle",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "lifecycle"
      }, function (e, n) {
        if (e) {
          if (404 === e.statusCode && e.error && "NoSuchLifecycleConfiguration" === e.error.Code) {
            var i = {
              Rules: [],
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), t(null, i);
          } else t(e);
        } else {
          var a = [];

          try {
            a = n.LifecycleConfiguration.Rule || [];
          } catch (e) {}

          a = _e.clone(_e.isArray(a) ? a : [a]), t(null, {
            Rules: a,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function b(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketLifecycle",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "lifecycle"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function S(e, t) {
      if (!e.VersioningConfiguration) return void t({
        error: "missing param VersioningConfiguration"
      });

      var n = e.VersioningConfiguration || {},
          i = _e.json2xml({
        VersioningConfiguration: n
      }),
          a = e.Headers;

      a["Content-Type"] = "application/xml", a["Content-MD5"] = _e.binaryBase64(_e.md5(i)), be.call(this, {
        Action: "name/cos:PutBucketVersioning",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: i,
        action: "versioning",
        headers: a
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function R(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketVersioning",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "versioning"
      }, function (e, n) {
        e || !n.VersioningConfiguration && (n.VersioningConfiguration = {}), t(e, n);
      });
    }

    function w(e, t) {
      var n = _e.clone(e.ReplicationConfiguration),
          i = _e.json2xml({
        ReplicationConfiguration: n
      });

      i = i.replace(/<(\/?)Rules>/gi, "<$1Rule>"), i = i.replace(/<(\/?)Tags>/gi, "<$1Tag>");
      var a = e.Headers;
      a["Content-Type"] = "application/xml", a["Content-MD5"] = _e.binaryBase64(_e.md5(i)), be.call(this, {
        Action: "name/cos:PutBucketReplication",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: i,
        action: "replication",
        headers: a
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function _(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketReplication",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "replication"
      }, function (e, n) {
        if (e) {
          if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "ReplicationConfigurationnotFoundError" !== e.error.Code) t(e);else {
            var i = {
              ReplicationConfiguration: {
                Rules: []
              },
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), t(null, i);
          }
        } else e || !n.ReplicationConfiguration && (n.ReplicationConfiguration = {}), n.ReplicationConfiguration.Rule && (n.ReplicationConfiguration.Rules = n.ReplicationConfiguration.Rule, delete n.ReplicationConfiguration.Rule), t(e, n);
      });
    }

    function A(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketReplication",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "replication"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function T(e, t) {
      if (!e.WebsiteConfiguration) return void t({
        error: "missing param WebsiteConfiguration"
      });

      var n = _e.clone(e.WebsiteConfiguration || {}),
          i = n.RoutingRules || n.RoutingRule || [];

      i = _e.isArray(i) ? i : [i], delete n.RoutingRule, delete n.RoutingRules, i.length && (n.RoutingRules = {
        RoutingRule: i
      });

      var a = _e.json2xml({
        WebsiteConfiguration: n
      }),
          o = e.Headers;

      o["Content-Type"] = "application/xml", o["Content-MD5"] = _e.binaryBase64(_e.md5(a)), be.call(this, {
        Action: "name/cos:PutBucketWebsite",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: a,
        action: "website",
        headers: o
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function E(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketWebsite",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        action: "website"
      }, function (e, n) {
        if (e) {
          if (404 === e.statusCode && "NoSuchWebsiteConfiguration" === e.error.Code) {
            var i = {
              WebsiteConfiguration: {},
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), t(null, i);
          } else t(e);
        } else {
          var a = n.WebsiteConfiguration || {};

          if (a.RoutingRules) {
            var o = _e.clone(a.RoutingRules.RoutingRule || []);

            o = _e.makeArray(o), a.RoutingRules = o;
          }

          t(null, {
            WebsiteConfiguration: a,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function B(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketWebsite",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "website"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function O(e, t) {
      if (!e.RefererConfiguration) return void t({
        error: "missing param RefererConfiguration"
      });

      var n = _e.clone(e.RefererConfiguration || {}),
          i = n.DomainList || {},
          a = i.Domains || i.Domain || [];

      a = _e.isArray(a) ? a : [a], a.length && (n.DomainList = {
        Domain: a
      });

      var o = _e.json2xml({
        RefererConfiguration: n
      }),
          r = e.Headers;

      r["Content-Type"] = "application/xml", r["Content-MD5"] = _e.binaryBase64(_e.md5(o)), be.call(this, {
        Action: "name/cos:PutBucketReferer",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: o,
        action: "referer",
        headers: r
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function D(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketReferer",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        action: "referer"
      }, function (e, n) {
        if (e) {
          if (404 === e.statusCode && "NoSuchRefererConfiguration" === e.error.Code) {
            var i = {
              WebsiteConfiguration: {},
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), t(null, i);
          } else t(e);
        } else {
          var a = n.RefererConfiguration || {};

          if (a.DomainList) {
            var o = _e.clone(a.DomainList.Domain || []);

            o = _e.makeArray(o), a.DomainList = {
              Domains: o
            };
          }

          t(null, {
            RefererConfiguration: a,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function N(e, t) {
      var n = e.DomainConfiguration || {},
          i = n.DomainRule || e.DomainRule || [];
      i = _e.clone(i);

      var a = _e.json2xml({
        DomainConfiguration: {
          DomainRule: i
        }
      }),
          o = e.Headers;

      o["Content-Type"] = "application/xml", o["Content-MD5"] = _e.binaryBase64(_e.md5(a)), be.call(this, {
        Action: "name/cos:PutBucketDomain",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: a,
        action: "domain",
        headers: o
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function I(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketDomain",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "domain"
      }, function (e, n) {
        if (e) return t(e);
        var i = [];

        try {
          i = n.DomainConfiguration.DomainRule || [];
        } catch (e) {}

        i = _e.clone(_e.isArray(i) ? i : [i]), t(null, {
          DomainRule: i,
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function P(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketDomain",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "domain"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function j(e, t) {
      var n = e.OriginConfiguration || {},
          i = n.OriginRule || e.OriginRule || [];
      i = _e.clone(i);

      var a = _e.json2xml({
        OriginConfiguration: {
          OriginRule: i
        }
      }),
          o = e.Headers;

      o["Content-Type"] = "application/xml", o["Content-MD5"] = _e.binaryBase64(_e.md5(a)), be.call(this, {
        Action: "name/cos:PutBucketOrigin",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: a,
        action: "origin",
        headers: o
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function M(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketOrigin",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "origin"
      }, function (e, n) {
        if (e) return t(e);
        var i = [];

        try {
          i = n.OriginConfiguration.OriginRule || [];
        } catch (e) {}

        i = _e.clone(_e.isArray(i) ? i : [i]), t(null, {
          OriginRule: i,
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function U(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketOrigin",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "origin"
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function F(e, t) {
      var n = _e.json2xml({
        BucketLoggingStatus: e.BucketLoggingStatus || ""
      }),
          i = e.Headers;

      i["Content-Type"] = "application/xml", i["Content-MD5"] = _e.binaryBase64(_e.md5(n)), be.call(this, {
        Action: "name/cos:PutBucketLogging",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: n,
        action: "logging",
        headers: i
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function H(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketLogging",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "logging"
      }, function (e, n) {
        if (e) return t(e);
        delete n.BucketLoggingStatus._xmlns, t(null, {
          BucketLoggingStatus: n.BucketLoggingStatus,
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function L(e, t) {
      var n = _e.clone(e.InventoryConfiguration);

      if (n.OptionalFields) {
        var i = n.OptionalFields || [];
        n.OptionalFields = {
          Field: i
        };
      }

      if (n.Destination && n.Destination.COSBucketDestination && n.Destination.COSBucketDestination.Encryption) {
        var a = n.Destination.COSBucketDestination.Encryption;
        Object.keys(a).indexOf("SSECOS") > -1 && (a["SSE-COS"] = a.SSECOS, delete a.SSECOS);
      }

      var o = _e.json2xml({
        InventoryConfiguration: n
      }),
          r = e.Headers;

      r["Content-Type"] = "application/xml", r["Content-MD5"] = _e.binaryBase64(_e.md5(o)), be.call(this, {
        Action: "name/cos:PutBucketInventory",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: o,
        action: "inventory",
        qs: {
          id: e.Id
        },
        headers: r
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function z(e, t) {
      be.call(this, {
        Action: "name/cos:GetBucketInventory",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "inventory",
        qs: {
          id: e.Id
        }
      }, function (e, n) {
        if (e) return t(e);
        var i = n.InventoryConfiguration;

        if (i && i.OptionalFields && i.OptionalFields.Field) {
          var a = i.OptionalFields.Field;
          _e.isArray(a) || (a = [a]), i.OptionalFields = a;
        }

        if (i.Destination && i.Destination.COSBucketDestination && i.Destination.COSBucketDestination.Encryption) {
          var o = i.Destination.COSBucketDestination.Encryption;
          Object.keys(o).indexOf("SSE-COS") > -1 && (o.SSECOS = o["SSE-COS"], delete o["SSE-COS"]);
        }

        t(null, {
          InventoryConfiguration: i,
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function K(e, t) {
      be.call(this, {
        Action: "name/cos:ListBucketInventory",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "inventory",
        qs: {
          "continuation-token": e.ContinuationToken
        }
      }, function (e, n) {
        if (e) return t(e);
        var i = n.ListInventoryConfigurationResult,
            a = i.InventoryConfiguration || [];
        a = _e.isArray(a) ? a : [a], delete i.InventoryConfiguration, _e.each(a, function (e) {
          if (e && e.OptionalFields && e.OptionalFields.Field) {
            var t = e.OptionalFields.Field;
            _e.isArray(t) || (t = [t]), e.OptionalFields = t;
          }

          if (e.Destination && e.Destination.COSBucketDestination && e.Destination.COSBucketDestination.Encryption) {
            var n = e.Destination.COSBucketDestination.Encryption;
            Object.keys(n).indexOf("SSE-COS") > -1 && (n.SSECOS = n["SSE-COS"], delete n["SSE-COS"]);
          }
        }), i.InventoryConfigurations = a, _e.extend(i, {
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, i);
      });
    }

    function q(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteBucketInventory",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "inventory",
        qs: {
          id: e.Id
        }
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function G(e, t) {
      if (!e.AccelerateConfiguration) return void t({
        error: "missing param AccelerateConfiguration"
      });

      var n = {
        AccelerateConfiguration: e.AccelerateConfiguration || {}
      },
          i = _e.json2xml(n),
          a = {};

      a["Content-Type"] = "application/xml", a["Content-MD5"] = _e.binaryBase64(_e.md5(i)), be.call(this, {
        Interface: "putBucketAccelerate",
        Action: "name/cos:PutBucketAccelerate",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: i,
        action: "accelerate",
        headers: a
      }, function (e, n) {
        if (e) return t(e);
        t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function V(e, t) {
      be.call(this, {
        Interface: "getBucketAccelerate",
        Action: "name/cos:GetBucketAccelerate",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        action: "accelerate"
      }, function (e, n) {
        e || !n.AccelerateConfiguration && (n.AccelerateConfiguration = {}), t(e, n);
      });
    }

    function X(e, t) {
      be.call(this, {
        Action: "name/cos:HeadObject",
        method: "HEAD",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        VersionId: e.VersionId,
        headers: e.Headers
      }, function (n, i) {
        if (n) {
          var a = n.statusCode;
          return e.Headers["If-Modified-Since"] && a && 304 === a ? t(null, {
            NotModified: !0,
            statusCode: a
          }) : t(n);
        }

        i.ETag = _e.attr(i.headers, "etag", ""), t(null, i);
      });
    }

    function W(e, t) {
      var n = {};
      n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n["key-marker"] = e.KeyMarker, n["version-id-marker"] = e.VersionIdMarker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, be.call(this, {
        Action: "name/cos:GetBucketObjectVersions",
        ResourceKey: n.prefix,
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        qs: n,
        action: "versions"
      }, function (e, n) {
        if (e) return t(e);
        var i = n.ListVersionsResult || {},
            a = i.DeleteMarker || [];
        a = _e.isArray(a) ? a : [a];
        var o = i.Version || [];
        o = _e.isArray(o) ? o : [o];

        var r = _e.clone(i);

        delete r.DeleteMarker, delete r.Version, _e.extend(r, {
          DeleteMarkers: a,
          Versions: o,
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, r);
      });
    }

    function $(e, t) {
      var n = e.Query || {};
      n["response-content-type"] = e.ResponseContentType, n["response-content-language"] = e.ResponseContentLanguage, n["response-expires"] = e.ResponseExpires, n["response-cache-control"] = e.ResponseCacheControl, n["response-content-disposition"] = e.ResponseContentDisposition, n["response-content-encoding"] = e.ResponseContentEncoding, be.call(this, {
        Action: "name/cos:GetObject",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        VersionId: e.VersionId,
        headers: e.Headers,
        qs: n,
        rawBody: !0
      }, function (n, i) {
        if (n) {
          var a = n.statusCode;
          return e.Headers["If-Modified-Since"] && a && 304 === a ? t(null, {
            NotModified: !0
          }) : t(n);
        }

        t(null, {
          Body: i.body,
          ETag: _e.attr(i.headers, "etag", ""),
          statusCode: i.statusCode,
          headers: i.headers
        });
      });
    }

    function Q(e, t) {
      var n = this,
          i = e.ContentLength,
          a = _e.throttleOnProgress.call(n, i, e.onProgress),
          o = e.Headers;

      o["Cache-Control"] || o["cache-control"] || (o["Cache-Control"] = ""), o["Content-Type"] || o["content-type"] || (o["Content-Type"] = Ae.getType(e.Key) || "application/octet-stream"), _e.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function (r) {
        r && (o["Content-MD5"] = _e.binaryBase64(r)), void 0 !== e.ContentLength && (o["Content-Length"] = e.ContentLength), a(null, !0), be.call(n, {
          Action: "name/cos:PutObject",
          TaskId: e.TaskId,
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: e.Headers,
          qs: e.Query,
          body: e.Body,
          onProgress: a
        }, function (o, r) {
          if (o) return a(null, !0), t(o);
          a({
            loaded: i,
            total: i
          }, !0);
          var s = ye({
            ForcePathStyle: n.options.ForcePathStyle,
            protocol: n.options.Protocol,
            domain: n.options.Domain,
            bucket: e.Bucket,
            region: e.Region,
            object: e.Key
          });
          s = s.substr(s.indexOf("://") + 3), r.Location = s, r.ETag = _e.attr(r.headers, "etag", ""), t(null, r);
        });
      });
    }

    function J(e, t) {
      var n = this,
          i = {},
          a = e.FilePath;
      if (!a) return void t({
        error: "missing param FilePath"
      });
      i["Cache-Control"] = e.CacheControl, i["Content-Disposition"] = e.ContentDisposition, i["Content-Encoding"] = e.ContentEncoding, i["Content-MD5"] = e.ContentMD5, i["Content-Length"] = e.ContentLength, i["Content-Type"] = e.ContentType, i.Expect = e.Expect, i.Expires = e.Expires, i["x-cos-acl"] = e.ACL, i["x-cos-grant-read"] = e.GrantRead, i["x-cos-grant-write"] = e.GrantWrite, i["x-cos-grant-full-control"] = e.GrantFullControl, i["x-cos-storage-class"] = e.StorageClass, delete i["Content-Length"], delete i["content-length"];

      for (var o in e) o.indexOf("x-cos-meta-") > -1 && (i[o] = e[o]);

      var r = _e.throttleOnProgress.call(n, i["Content-Length"], e.onProgress);

      be.call(this, {
        Action: "name/cos:PostObject",
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: i,
        qs: e.Query,
        filePath: a,
        onProgress: r
      }, function (i, o) {
        if (r(null, !0), i) return t(i);

        if (o && o.headers) {
          var s = o.headers,
              c = s.etag || s.Etag || s.ETag || "",
              l = a.substr(a.lastIndexOf("/") + 1),
              p = ye({
            ForcePathStyle: n.options.ForcePathStyle,
            protocol: n.options.Protocol,
            domain: n.options.Domain,
            bucket: e.Bucket,
            region: e.Region,
            object: e.Key.replace(/\$\{filename\}/g, l),
            isLocation: !0
          });
          return t(null, {
            Location: p,
            statusCode: o.statusCode,
            headers: s,
            ETag: c
          });
        }

        t(null, o);
      });
    }

    function Y(e, t) {
      be.call(this, {
        Action: "name/cos:DeleteObject",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        VersionId: e.VersionId
      }, function (e, n) {
        if (e) {
          var i = e.statusCode;
          return i && 204 === i ? t(null, {
            statusCode: i
          }) : i && 404 === i ? t(null, {
            BucketNotFound: !0,
            statusCode: i
          }) : t(e);
        }

        t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function Z(e, t) {
      be.call(this, {
        Action: "name/cos:GetObjectACL",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        action: "acl"
      }, function (e, n) {
        if (e) return t(e);
        var i = n.AccessControlPolicy || {},
            a = i.Owner || {},
            o = i.AccessControlList && i.AccessControlList.Grant || [];
        o = _e.isArray(o) ? o : [o];
        var r = ve(i);
        n.headers && n.headers["x-cos-acl"] && (r.ACL = n.headers["x-cos-acl"]), r = _e.extend(r, {
          Owner: a,
          Grants: o,
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, r);
      });
    }

    function ee(e, t) {
      var n = e.Headers,
          i = "";

      if (e.AccessControlPolicy) {
        var a = _e.clone(e.AccessControlPolicy || {}),
            o = a.Grants || a.Grant;

        o = _e.isArray(o) ? o : [o], delete a.Grant, delete a.Grants, a.AccessControlList = {
          Grant: o
        }, i = _e.json2xml({
          AccessControlPolicy: a
        }), n["Content-Type"] = "application/xml", n["Content-MD5"] = _e.binaryBase64(_e.md5(i));
      }

      _e.each(n, function (e, t) {
        0 === t.indexOf("x-cos-grant-") && (n[t] = xe(n[t]));
      }), be.call(this, {
        Action: "name/cos:PutObjectACL",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        action: "acl",
        headers: n,
        body: i
      }, function (e, n) {
        if (e) return t(e);
        t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function te(e, t) {
      var n = e.Headers;
      n.Origin = e.Origin, n["Access-Control-Request-Method"] = e.AccessControlRequestMethod, n["Access-Control-Request-Headers"] = e.AccessControlRequestHeaders, be.call(this, {
        Action: "name/cos:OptionsObject",
        method: "OPTIONS",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: n
      }, function (e, n) {
        if (e) return e.statusCode && 403 === e.statusCode ? t(null, {
          OptionsForbidden: !0,
          statusCode: e.statusCode
        }) : t(e);
        var i = n.headers || {};
        t(null, {
          AccessControlAllowOrigin: i["access-control-allow-origin"],
          AccessControlAllowMethods: i["access-control-allow-methods"],
          AccessControlAllowHeaders: i["access-control-allow-headers"],
          AccessControlExposeHeaders: i["access-control-expose-headers"],
          AccessControlMaxAge: i["access-control-max-age"],
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function ne(e, t) {
      var n = e.Headers;
      !n["Cache-Control"] && n["cache-control"] && (n["Cache-Control"] = "");
      var i = e.CopySource || "",
          a = i.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
      if (!a) return void t({
        error: "CopySource format error"
      });
      var o = a[1],
          r = a[3],
          s = decodeURIComponent(a[4]);
      be.call(this, {
        Scope: [{
          action: "name/cos:GetObject",
          bucket: o,
          region: r,
          prefix: s
        }, {
          action: "name/cos:PutObject",
          bucket: e.Bucket,
          region: e.Region,
          prefix: e.Key
        }],
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        VersionId: e.VersionId,
        headers: e.Headers
      }, function (e, n) {
        if (e) return t(e);

        var i = _e.clone(n.CopyObjectResult || {});

        _e.extend(i, {
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, i);
      });
    }

    function ie(e, t) {
      var n = e.CopySource || "",
          i = n.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
      if (!i) return void t({
        error: "CopySource format error"
      });
      var a = i[1],
          o = i[3],
          r = decodeURIComponent(i[4]);
      be.call(this, {
        Scope: [{
          action: "name/cos:GetObject",
          bucket: a,
          region: o,
          prefix: r
        }, {
          action: "name/cos:PutObject",
          bucket: e.Bucket,
          region: e.Region,
          prefix: e.Key
        }],
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        VersionId: e.VersionId,
        qs: {
          partNumber: e.PartNumber,
          uploadId: e.UploadId
        },
        headers: e.Headers
      }, function (e, n) {
        if (e) return t(e);

        var i = _e.clone(n.CopyPartResult || {});

        _e.extend(i, {
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, i);
      });
    }

    function ae(e, t) {
      var n = e.Objects || [],
          i = e.Quiet;
      n = _e.isArray(n) ? n : [n];

      var a = _e.json2xml({
        Delete: {
          Object: n,
          Quiet: i || !1
        }
      }),
          o = e.Headers;

      o["Content-Type"] = "application/xml", o["Content-MD5"] = _e.binaryBase64(_e.md5(a));

      var r = _e.map(n, function (t) {
        return {
          action: "name/cos:DeleteObject",
          bucket: e.Bucket,
          region: e.Region,
          prefix: t.Key
        };
      });

      be.call(this, {
        Scope: r,
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        body: a,
        action: "delete",
        headers: o
      }, function (e, n) {
        if (e) return t(e);
        var i = n.DeleteResult || {},
            a = i.Deleted || [],
            o = i.Error || [];
        a = _e.isArray(a) ? a : [a], o = _e.isArray(o) ? o : [o];

        var r = _e.clone(i);

        _e.extend(r, {
          Error: o,
          Deleted: a,
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, r);
      });
    }

    function oe(e, t) {
      var n = e.Headers;
      if (!e.RestoreRequest) return void t({
        error: "missing param RestoreRequest"
      });

      var i = e.RestoreRequest || {},
          a = _e.json2xml({
        RestoreRequest: i
      });

      n["Content-Type"] = "application/xml", n["Content-MD5"] = _e.binaryBase64(_e.md5(a)), be.call(this, {
        Action: "name/cos:RestoreObject",
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        VersionId: e.VersionId,
        body: a,
        action: "restore",
        headers: n
      }, function (e, n) {
        t(e, n);
      });
    }

    function re(e, t) {
      var n = e.Tagging || {},
          i = n.TagSet || n.Tags || e.Tags || [];
      i = _e.clone(_e.isArray(i) ? i : [i]);

      var a = _e.json2xml({
        Tagging: {
          TagSet: {
            Tag: i
          }
        }
      }),
          o = e.Headers;

      o["Content-Type"] = "application/xml", o["Content-MD5"] = _e.binaryBase64(_e.md5(a)), be.call(this, {
        Interface: "putObjectTagging",
        Action: "name/cos:PutObjectTagging",
        method: "PUT",
        Bucket: e.Bucket,
        Key: e.Key,
        Region: e.Region,
        body: a,
        action: "tagging",
        headers: o,
        VersionId: e.VersionId
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function se(e, t) {
      be.call(this, {
        Interface: "getObjectTagging",
        Action: "name/cos:GetObjectTagging",
        method: "GET",
        Key: e.Key,
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "tagging",
        VersionId: e.VersionId
      }, function (e, n) {
        if (e) {
          if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "NoSuchTagSet" !== e.error.Code) t(e);else {
            var i = {
              Tags: [],
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), t(null, i);
          }
        } else {
          var a = [];

          try {
            a = n.Tagging.TagSet.Tag || [];
          } catch (e) {}

          a = _e.clone(_e.isArray(a) ? a : [a]), t(null, {
            Tags: a,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function ce(e, t) {
      be.call(this, {
        Interface: "deleteObjectTagging",
        Action: "name/cos:DeleteObjectTagging",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        action: "tagging",
        VersionId: e.VersionId
      }, function (e, n) {
        return e && 204 === e.statusCode ? t(null, {
          statusCode: e.statusCode
        }) : e ? t(e) : void t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function le(e, t) {
      var n = this,
          i = e.Headers;
      i["Cache-Control"] || i["cache-control"] || (i["Cache-Control"] = ""), i["Content-Type"] || i["content-type"] || (i["Content-Type"] = Ae.getType(e.Key) || "application/octet-stream"), be.call(n, {
        Action: "name/cos:InitiateMultipartUpload",
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        action: "uploads",
        headers: e.Headers,
        qs: e.Query
      }, function (e, n) {
        return e ? t(e) : (n = _e.clone(n || {})) && n.InitiateMultipartUploadResult ? t(null, _e.extend(n.InitiateMultipartUploadResult, {
          statusCode: n.statusCode,
          headers: n.headers
        })) : void t(null, n);
      });
    }

    function pe(e, t) {
      var n = this;

      _e.getFileSize("multipartUpload", e, function () {
        _e.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function (i) {
          i && (e.Headers["Content-MD5"] = _e.binaryBase64(i)), be.call(n, {
            Action: "name/cos:UploadPart",
            TaskId: e.TaskId,
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            qs: {
              partNumber: e.PartNumber,
              uploadId: e.UploadId
            },
            headers: e.Headers,
            onProgress: e.onProgress,
            body: e.Body || null
          }, function (e, n) {
            if (e) return t(e);
            t(null, {
              ETag: _e.attr(n.headers, "etag", {}),
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        });
      });
    }

    function ue(e, t) {
      for (var n = this, i = e.UploadId, a = e.Parts, o = 0, r = a.length; o < r; o++) 0 !== a[o].ETag.indexOf('"') && (a[o].ETag = '"' + a[o].ETag + '"');

      var s = _e.json2xml({
        CompleteMultipartUpload: {
          Part: a
        }
      }),
          c = e.Headers;

      c["Content-Type"] = "application/xml", c["Content-MD5"] = _e.binaryBase64(_e.md5(s)), be.call(this, {
        Action: "name/cos:CompleteMultipartUpload",
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        qs: {
          uploadId: i
        },
        body: s,
        headers: c
      }, function (i, a) {
        if (i) return t(i);

        var o = ye({
          ForcePathStyle: n.options.ForcePathStyle,
          protocol: n.options.Protocol,
          domain: n.options.Domain,
          bucket: e.Bucket,
          region: e.Region,
          object: e.Key,
          isLocation: !0
        }),
            r = a.CompleteMultipartUploadResult || {},
            s = _e.extend(r, {
          Location: o,
          statusCode: a.statusCode,
          headers: a.headers
        });

        t(null, s);
      });
    }

    function de(e, t) {
      var n = {};
      n.delimiter = e.Delimiter, n["encoding-type"] = e.EncodingType, n.prefix = e.Prefix || "", n["max-uploads"] = e.MaxUploads, n["key-marker"] = e.KeyMarker, n["upload-id-marker"] = e.UploadIdMarker, n = _e.clearKey(n), be.call(this, {
        Action: "name/cos:ListMultipartUploads",
        ResourceKey: n.prefix,
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        qs: n,
        action: "uploads"
      }, function (e, n) {
        if (e) return t(e);

        if (n && n.ListMultipartUploadsResult) {
          var i = n.ListMultipartUploadsResult.Upload || [],
              a = n.ListMultipartUploadsResult.CommonPrefixes || [];
          a = _e.isArray(a) ? a : [a], i = _e.isArray(i) ? i : [i], n.ListMultipartUploadsResult.Upload = i, n.ListMultipartUploadsResult.CommonPrefixes = a;
        }

        var o = _e.clone(n.ListMultipartUploadsResult || {});

        _e.extend(o, {
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, o);
      });
    }

    function me(e, t) {
      var n = {};
      n.uploadId = e.UploadId, n["encoding-type"] = e.EncodingType, n["max-parts"] = e.MaxParts, n["part-number-marker"] = e.PartNumberMarker, be.call(this, {
        Action: "name/cos:ListParts",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        qs: n
      }, function (e, n) {
        if (e) return t(e);
        var i = n.ListPartsResult || {},
            a = i.Part || [];
        a = _e.isArray(a) ? a : [a], i.Part = a;

        var o = _e.clone(i);

        _e.extend(o, {
          statusCode: n.statusCode,
          headers: n.headers
        }), t(null, o);
      });
    }

    function fe(e, t) {
      var n = {};
      n.uploadId = e.UploadId, be.call(this, {
        Action: "name/cos:AbortMultipartUpload",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        qs: n
      }, function (e, n) {
        if (e) return t(e);
        t(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function he(e) {
      var t = this;
      return _e.getAuth({
        SecretId: e.SecretId || this.options.SecretId || "",
        SecretKey: e.SecretKey || this.options.SecretKey || "",
        Method: e.Method,
        Key: e.Key,
        Query: e.Query,
        Headers: e.Headers,
        Expires: e.Expires,
        SystemClockOffset: t.options.SystemClockOffset
      });
    }

    function ge(e, t) {
      var n = this,
          i = ye({
        ForcePathStyle: n.options.ForcePathStyle,
        protocol: e.Protocol || n.options.Protocol,
        domain: e.Domain || n.options.Domain,
        bucket: e.Bucket,
        region: e.Region,
        object: e.Key
      });
      if (void 0 !== e.Sign && !e.Sign) return t(null, {
        Url: i
      }), i;
      var a = Ce.call(this, {
        Action: "PUT" === (e.Method || "").toUpperCase() ? "name/cos:PutObject" : "name/cos:GetObject",
        Bucket: e.Bucket || "",
        Region: e.Region || "",
        Method: e.Method || "get",
        Key: e.Key,
        Expires: e.Expires
      }, function (e, n) {
        if (t) {
          if (e) return void t(e);
          var a = i;
          a += "?" + (n.Authorization.indexOf("q-signature") > -1 ? n.Authorization : "sign=" + encodeURIComponent(n.Authorization)), n.XCosSecurityToken && (a += "&x-cos-security-token=" + n.XCosSecurityToken), n.ClientIP && (a += "&clientIP=" + n.ClientIP), n.ClientUA && (a += "&clientUA=" + n.ClientUA), n.Token && (a += "&token=" + n.Token), setTimeout(function () {
            t(null, {
              Url: a
            });
          });
        }
      });
      return a ? i + "?" + a.Authorization + (a.XCosSecurityToken ? "&x-cos-security-token=" + a.XCosSecurityToken : "") : i;
    }

    function ve(e) {
      var t = {
        GrantFullControl: [],
        GrantWrite: [],
        GrantRead: [],
        GrantReadAcp: [],
        GrantWriteAcp: [],
        ACL: ""
      },
          n = {
        FULL_CONTROL: "GrantFullControl",
        WRITE: "GrantWrite",
        READ: "GrantRead",
        READ_ACP: "GrantReadAcp",
        WRITE_ACP: "GrantWriteAcp"
      },
          i = e && e.AccessControlList || {},
          a = i.Grant;
      a && (a = _e.isArray(a) ? a : [a]);
      var o = {
        READ: 0,
        WRITE: 0,
        FULL_CONTROL: 0
      };
      return a && a.length && _e.each(a, function (i) {
        "qcs::cam::anyone:anyone" === i.Grantee.ID || "http://cam.qcloud.com/groups/global/AllUsers" === i.Grantee.URI ? o[i.Permission] = 1 : i.Grantee.ID !== e.Owner.ID && t[n[i.Permission]].push('id="' + i.Grantee.ID + '"');
      }), o.FULL_CONTROL || o.WRITE && o.READ ? t.ACL = "public-read-write" : o.READ ? t.ACL = "public-read" : t.ACL = "private", _e.each(n, function (e) {
        t[e] = xe(t[e].join(","));
      }), t;
    }

    function xe(e) {
      var t,
          n,
          i = e.split(","),
          a = {};

      for (t = 0; t < i.length;) n = i[t].trim(), a[n] ? i.splice(t, 1) : (a[n] = !0, i[t] = n, t++);

      return i.join(",");
    }

    function ye(e) {
      var t = e.bucket,
          n = t.substr(0, t.lastIndexOf("-")),
          i = t.substr(t.lastIndexOf("-") + 1),
          a = e.domain,
          o = e.region,
          r = e.object;
      a || (a = ["cn-south", "cn-south-2", "cn-north", "cn-east", "cn-southwest", "sg"].indexOf(o) > -1 ? "{Region}.myqcloud.com" : "cos.{Region}.myqcloud.com", e.ForcePathStyle || (a = "{Bucket}." + a)), a = a.replace(/\{\{AppId\}\}/gi, i).replace(/\{\{Bucket\}\}/gi, n).replace(/\{\{Region\}\}/gi, o).replace(/\{\{.*?\}\}/gi, ""), a = a.replace(/\{AppId\}/gi, i).replace(/\{BucketName\}/gi, n).replace(/\{Bucket\}/gi, t).replace(/\{Region\}/gi, o).replace(/\{.*?\}/gi, ""), /^[a-zA-Z]+:\/\//.test(a) || (a = "https://" + a), "/" === a.slice(-1) && (a = a.slice(0, -1));
      var s = a;
      return e.ForcePathStyle && (s += "/" + t), s += "/", r && (s += _e.camSafeUrlEncode(r).replace(/%2F/g, "/")), e.isLocation && (s = s.replace(/^https?:\/\//, "")), s;
    }

    function Ce(e, t) {
      var n = _e.clone(e.Headers);

      delete n["Content-Type"], delete n["Cache-Control"], _e.each(n, function (e, t) {
        "" === e && delete n[t];
      });

      var i = function (e) {
        var n = !1,
            i = e.Authorization;
        if (i) if (i.indexOf(" ") > -1) n = !1;else if (i.indexOf("q-sign-algorithm=") > -1 && i.indexOf("q-ak=") > -1 && i.indexOf("q-sign-time=") > -1 && i.indexOf("q-key-time=") > -1 && i.indexOf("q-url-param-list=") > -1) n = !0;else try {
          i = we.atob(i), i.indexOf("a=") > -1 && i.indexOf("k=") > -1 && i.indexOf("t=") > -1 && i.indexOf("r=") > -1 && i.indexOf("b=") > -1 && (n = !0);
        } catch (e) {}
        n ? t && t(null, e) : t && t("authorization error");
      },
          a = this,
          o = e.Bucket || "",
          r = e.Region || "",
          s = "name/cos:PostObject" !== e.Action && e.Key ? e.Key : "";

      a.options.ForcePathStyle && o && (s = o + "/" + s);
      var c = "/" + s,
          l = {},
          p = e.Scope;

      if (!p) {
        var u = e.Action || "",
            d = e.ResourceKey || e.Key || "";
        p = e.Scope || [{
          action: u,
          bucket: o,
          region: r,
          prefix: d
        }];
      }

      var m = _e.md5(JSON.stringify(p));

      a._StsCache = a._StsCache || [], function () {
        var e, t;

        for (e = a._StsCache.length - 1; e >= 0; e--) {
          t = a._StsCache[e];
          var n = Math.round(_e.getSkewTime(a.options.SystemClockOffset) / 1e3) + 30;
          if (t.StartTime && n < t.StartTime || n >= t.ExpiredTime) a._StsCache.splice(e, 1);else if (!t.ScopeLimit || t.ScopeLimit && t.ScopeKey === m) {
            l = t;
            break;
          }
        }
      }();

      var f = function () {
        var t = l.StartTime && l.ExpiredTime ? l.StartTime + ";" + l.ExpiredTime : "",
            o = _e.getAuth({
          SecretId: l.TmpSecretId,
          SecretKey: l.TmpSecretKey,
          Method: e.Method,
          Pathname: c,
          Query: e.Query,
          Headers: n,
          Expires: e.Expires,
          SystemClockOffset: a.options.SystemClockOffset,
          KeyTime: t
        }),
            r = {
          Authorization: o,
          XCosSecurityToken: l.XCosSecurityToken || "",
          Token: l.Token || "",
          ClientIP: l.ClientIP || "",
          ClientUA: l.ClientUA || ""
        };

        i(r);
      };

      if (l.ExpiredTime && l.ExpiredTime - _e.getSkewTime(a.options.SystemClockOffset) / 1e3 > 60) f();else if (a.options.getAuthorization) a.options.getAuthorization.call(a, {
        Bucket: o,
        Region: r,
        Method: e.Method,
        Key: s,
        Pathname: c,
        Query: e.Query,
        Headers: n,
        Scope: p,
        SystemClockOffset: a.options.SystemClockOffset
      }, function (e) {
        "string" == typeof e && (e = {
          Authorization: e
        }), e.TmpSecretId && e.TmpSecretKey && e.XCosSecurityToken && e.ExpiredTime ? (l = e || {}, l.Scope = p, l.ScopeKey = m, a._StsCache.push(l), f()) : i(e);
      });else {
        if (!a.options.getSTS) return function () {
          var t = _e.getAuth({
            SecretId: e.SecretId || a.options.SecretId,
            SecretKey: e.SecretKey || a.options.SecretKey,
            Method: e.Method,
            Pathname: c,
            Query: e.Query,
            Headers: n,
            Expires: e.Expires,
            SystemClockOffset: a.options.SystemClockOffset
          }),
              o = {
            Authorization: t,
            XCosSecurityToken: a.options.XCosSecurityToken
          };

          return i(o), o;
        }();
        a.options.getSTS.call(a, {
          Bucket: o,
          Region: r
        }, function (e) {
          l = e || {}, l.Scope = p, l.ScopeKey = m, l.TmpSecretId = l.SecretId, l.TmpSecretKey = l.SecretKey, a._StsCache.push(l), f();
        });
      }
      return "";
    }

    function ke(e) {
      var t = !1,
          n = !1,
          i = e.headers && (e.headers.date || e.headers.Date) || e.error && e.error.ServerTime;

      try {
        var a = e.error.Code,
            o = e.error.Message;
        ("RequestTimeTooSkewed" === a || "AccessDenied" === a && "Request has expired" === o) && (n = !0);
      } catch (e) {}

      if (e) if (n && i) {
        var r = Date.parse(i);
        this.options.CorrectClockSkew && Math.abs(_e.getSkewTime(this.options.SystemClockOffset) - r) >= 3e4 && (console.error("error: Local time is too skewed."), this.options.SystemClockOffset = r - Date.now(), t = !0);
      } else 5 === Math.floor(e.statusCode / 100) && (t = !0);
      return t;
    }

    function be(e, t) {
      var n = this;
      !e.headers && (e.headers = {}), !e.qs && (e.qs = {}), e.VersionId && (e.qs.versionId = e.VersionId), e.qs = _e.clearKey(e.qs), e.headers && (e.headers = _e.clearKey(e.headers)), e.qs && (e.qs = _e.clearKey(e.qs));

      var i = _e.clone(e.qs);

      e.action && (i[e.action] = "");

      var a = function (o) {
        var r = n.options.SystemClockOffset;
        Ce.call(n, {
          Bucket: e.Bucket || "",
          Region: e.Region || "",
          Method: e.method,
          Key: e.Key,
          Query: i,
          Headers: e.headers,
          Action: e.Action,
          ResourceKey: e.ResourceKey,
          Scope: e.Scope
        }, function (i, s) {
          if (i) return void t(i);
          e.AuthData = s, Se.call(n, e, function (i, s) {
            i && o < 2 && (r !== n.options.SystemClockOffset || ke.call(n, i)) ? (e.headers && (delete e.headers.Authorization, delete e.headers.token, delete e.headers.clientIP, delete e.headers.clientUA, delete e.headers["x-cos-security-token"]), a(o + 1)) : t(i, s);
          });
        });
      };

      a(1);
    }

    function Se(e, t) {
      var n = this,
          i = e.TaskId;

      if (!i || n._isRunningTask(i)) {
        var a = e.Bucket,
            o = e.Region,
            r = e.Key,
            s = e.method || "GET",
            c = e.url,
            l = e.body,
            p = e.json,
            u = e.rawBody;
        c = c || ye({
          ForcePathStyle: n.options.ForcePathStyle,
          protocol: n.options.Protocol,
          domain: n.options.Domain,
          bucket: a,
          region: o,
          object: r
        }), e.action && (c = c + "?" + e.action);
        var d = {
          method: s,
          url: c,
          headers: e.headers,
          qs: e.qs,
          filePath: e.filePath,
          body: l,
          json: p
        };
        d.headers.Authorization = e.AuthData.Authorization, e.AuthData.Token && (d.headers.token = e.AuthData.Token), e.AuthData.ClientIP && (d.headers.clientIP = e.AuthData.ClientIP), e.AuthData.ClientUA && (d.headers.clientUA = e.AuthData.ClientUA), e.AuthData.XCosSecurityToken && (d.headers["x-cos-security-token"] = e.AuthData.XCosSecurityToken), d.headers && (d.headers = _e.clearKey(d.headers)), d = _e.clearKey(d), e.onProgress && "function" == typeof e.onProgress && (d.onProgress = function (t) {
          if (!i || n._isRunningTask(i)) {
            var a = t ? t.loaded : 0;
            e.onProgress({
              loaded: a,
              total: t.total
            });
          }
        }), this.options.Timeout && (d.timeout = this.options.Timeout), n.options.ForcePathStyle && (d.pathStyle = n.options.ForcePathStyle), n.emit("before-send", d);

        var m = Re(d, function (e, a, o) {
          if ("abort" !== e) {
            var r,
                s = function (e, o) {
              if (i && n.off("inner-kill-task", f), !r) {
                r = !0;
                var s = {};
                a && a.statusCode && (s.statusCode = a.statusCode), a && a.headers && (s.headers = a.headers), e ? (e = _e.extend(e || {}, s), t(e, null)) : (o = _e.extend(o || {}, s), t(null, o)), m = null;
              }
            };

            if (e) return void s({
              error: e
            });
            var c;
            if (u) c = {}, c.body = o;else try {
              c = o && o.indexOf("<") > -1 && o.indexOf(">") > -1 && _e.xml2json(o) || {};
            } catch (e) {
              c = o || {};
            }
            var l = a.statusCode;
            return 2 === Math.floor(l / 100) ? c.Error ? void s({
              error: c.Error
            }) : void s(null, c) : void s({
              error: c.Error || c
            });
          }
        }),
            f = function (e) {
          e.TaskId === i && (m && m.abort && m.abort(), n.off("inner-kill-task", f));
        };

        i && n.on("inner-kill-task", f);
      }
    }

    var Re = n(18),
        we = n(3),
        _e = n(0),
        Ae = n(19),
        Te = {
      getService: i,
      putBucket: a,
      headBucket: o,
      getBucket: r,
      deleteBucket: s,
      putBucketAcl: c,
      getBucketAcl: l,
      putBucketCors: p,
      getBucketCors: u,
      deleteBucketCors: d,
      getBucketLocation: m,
      getBucketPolicy: h,
      putBucketPolicy: f,
      deleteBucketPolicy: g,
      putBucketTagging: v,
      getBucketTagging: x,
      deleteBucketTagging: y,
      putBucketLifecycle: C,
      getBucketLifecycle: k,
      deleteBucketLifecycle: b,
      putBucketVersioning: S,
      getBucketVersioning: R,
      putBucketReplication: w,
      getBucketReplication: _,
      deleteBucketReplication: A,
      putBucketWebsite: T,
      getBucketWebsite: E,
      deleteBucketWebsite: B,
      putBucketReferer: O,
      getBucketReferer: D,
      putBucketDomain: N,
      getBucketDomain: I,
      deleteBucketDomain: P,
      putBucketOrigin: j,
      getBucketOrigin: M,
      deleteBucketOrigin: U,
      putBucketLogging: F,
      getBucketLogging: H,
      putBucketInventory: L,
      getBucketInventory: z,
      listBucketInventory: K,
      deleteBucketInventory: q,
      putBucketAccelerate: G,
      getBucketAccelerate: V,
      getObject: $,
      headObject: X,
      listObjectVersions: W,
      putObject: Q,
      postObject: J,
      deleteObject: Y,
      getObjectAcl: Z,
      putObjectAcl: ee,
      optionsObject: te,
      putObjectCopy: ne,
      deleteMultipleObject: ae,
      restoreObject: oe,
      putObjectTagging: re,
      getObjectTagging: se,
      deleteObjectTagging: ce,
      uploadPartCopy: ie,
      multipartInit: le,
      multipartUpload: pe,
      multipartComplete: ue,
      multipartList: de,
      multipartListPart: me,
      multipartAbort: fe,
      getObjectUrl: ge,
      getAuth: he
    };

    e.exports.init = function (e, t) {
      t.transferToTaskMethod(Te, "postObject"), t.transferToTaskMethod(Te, "putObject"), _e.each(Te, function (t, n) {
        e.prototype[n] = _e.apiWrapper(n, t);
      });
    };
  }, function (e, t) {
    var n = function (e) {
      var t,
          n,
          i,
          a = [],
          o = Object.keys(e);

      for (t = 0; t < o.length; t++) n = o[t], i = e[n] || "", a.push(n + "=" + encodeURIComponent(i));

      return a.join("&");
    },
        i = function (e, t) {
      var i,
          a = e.filePath,
          o = e.headers || {},
          r = e.url,
          s = e.method,
          c = e.onProgress,
          l = function (e, n) {
        var i = n.header,
            a = {};
        if (i) for (var o in i) i.hasOwnProperty(o) && (a[o.toLowerCase()] = i[o]);
        t(e, {
          statusCode: n.statusCode,
          headers: a
        }, n.data);
      };

      if (a) {
        var p,
            u = r.match(/^(https?:\/\/[^\/]+\/)([^\/]*\/?)(.*)$/);
        e.pathStyle ? (p = decodeURIComponent(u[3] || ""), r = u[1] + u[2]) : (p = decodeURIComponent(u[2] + u[3] || ""), r = u[1]);
        var d = {
          key: p,
          success_action_status: 200,
          Signature: o.Authorization
        },
            m = ["Cache-Control", "Content-Type", "Content-Disposition", "Content-Encoding", "Expires", "x-cos-storage-class", "x-cos-security-token"];

        for (var f in e.headers) e.headers.hasOwnProperty(f) && (f.indexOf("x-cos-meta-") > -1 || m.indexOf(f) > -1) && (d[f] = e.headers[f]);

        o["x-cos-acl"] && (d.acl = o["x-cos-acl"]), !d["Content-Type"] && (d["Content-Type"] = ""), i = wx.uploadFile({
          url: r,
          method: s,
          name: "file",
          header: o,
          filePath: a,
          formData: d,
          timeout: e.timeout,
          success: function (e) {
            l(null, e);
          },
          fail: function (e) {
            l(e.errMsg, e);
          }
        }), i.onProgressUpdate(function (e) {
          c && c({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend,
            progress: e.progress / 100
          });
        });
      } else {
        var h = e.qs && n(e.qs) || "";
        h && (r += (r.indexOf("?") > -1 ? "&" : "?") + h), o["Content-Length"] && delete o["Content-Length"], i = wx.request({
          url: r,
          method: s,
          header: o,
          dataType: "text",
          data: e.body,
          timeout: e.timeout,
          success: function (e) {
            l(null, e);
          },
          fail: function (e) {
            l(e.errMsg, e);
          }
        });
      }

      return i;
    };

    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    var i = n(20);
    e.exports = new i(n(21), n(22));
  }, function (e, t, n) {
    "use strict";

    function i() {
      this._types = Object.create(null), this._extensions = Object.create(null);

      for (var e = 0; e < arguments.length; e++) this.define(arguments[e]);

      this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
    }

    i.prototype.define = function (e, t) {
      for (var n in e) {
        var i = e[n].map(function (e) {
          return e.toLowerCase();
        });
        n = n.toLowerCase();

        for (var a = 0; a < i.length; a++) {
          var o = i[a];

          if ("*" != o[0]) {
            if (!t && o in this._types) throw new Error('Attempt to change mapping for "' + o + '" extension from "' + this._types[o] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + o + '" from the list of extensions for "' + n + '".');
            this._types[o] = n;
          }
        }

        if (t || !this._extensions[n]) {
          var o = i[0];
          this._extensions[n] = "*" != o[0] ? o : o.substr(1);
        }
      }
    }, i.prototype.getType = function (e) {
      e = String(e);
      var t = e.replace(/^.*[\/\\]/, "").toLowerCase(),
          n = t.replace(/^.*\./, "").toLowerCase(),
          i = t.length < e.length;
      return (n.length < t.length - 1 || !i) && this._types[n] || null;
    }, i.prototype.getExtension = function (e) {
      return (e = /^\s*([^;\s]*)/.test(e) && RegExp.$1) && this._extensions[e.toLowerCase()] || null;
    }, e.exports = i;
  }, function (e, t) {
    e.exports = {
      "application/andrew-inset": ["ez"],
      "application/applixware": ["aw"],
      "application/atom+xml": ["atom"],
      "application/atomcat+xml": ["atomcat"],
      "application/atomdeleted+xml": ["atomdeleted"],
      "application/atomsvc+xml": ["atomsvc"],
      "application/atsc-dwd+xml": ["dwd"],
      "application/atsc-held+xml": ["held"],
      "application/atsc-rsat+xml": ["rsat"],
      "application/bdoc": ["bdoc"],
      "application/calendar+xml": ["xcs"],
      "application/ccxml+xml": ["ccxml"],
      "application/cdfx+xml": ["cdfx"],
      "application/cdmi-capability": ["cdmia"],
      "application/cdmi-container": ["cdmic"],
      "application/cdmi-domain": ["cdmid"],
      "application/cdmi-object": ["cdmio"],
      "application/cdmi-queue": ["cdmiq"],
      "application/cu-seeme": ["cu"],
      "application/dash+xml": ["mpd"],
      "application/davmount+xml": ["davmount"],
      "application/docbook+xml": ["dbk"],
      "application/dssc+der": ["dssc"],
      "application/dssc+xml": ["xdssc"],
      "application/ecmascript": ["ecma", "es"],
      "application/emma+xml": ["emma"],
      "application/emotionml+xml": ["emotionml"],
      "application/epub+zip": ["epub"],
      "application/exi": ["exi"],
      "application/fdt+xml": ["fdt"],
      "application/font-tdpfr": ["pfr"],
      "application/geo+json": ["geojson"],
      "application/gml+xml": ["gml"],
      "application/gpx+xml": ["gpx"],
      "application/gxf": ["gxf"],
      "application/gzip": ["gz"],
      "application/hjson": ["hjson"],
      "application/hyperstudio": ["stk"],
      "application/inkml+xml": ["ink", "inkml"],
      "application/ipfix": ["ipfix"],
      "application/its+xml": ["its"],
      "application/java-archive": ["jar", "war", "ear"],
      "application/java-serialized-object": ["ser"],
      "application/java-vm": ["class"],
      "application/javascript": ["js", "mjs"],
      "application/json": ["json", "map"],
      "application/json5": ["json5"],
      "application/jsonml+json": ["jsonml"],
      "application/ld+json": ["jsonld"],
      "application/lgr+xml": ["lgr"],
      "application/lost+xml": ["lostxml"],
      "application/mac-binhex40": ["hqx"],
      "application/mac-compactpro": ["cpt"],
      "application/mads+xml": ["mads"],
      "application/manifest+json": ["webmanifest"],
      "application/marc": ["mrc"],
      "application/marcxml+xml": ["mrcx"],
      "application/mathematica": ["ma", "nb", "mb"],
      "application/mathml+xml": ["mathml"],
      "application/mbox": ["mbox"],
      "application/mediaservercontrol+xml": ["mscml"],
      "application/metalink+xml": ["metalink"],
      "application/metalink4+xml": ["meta4"],
      "application/mets+xml": ["mets"],
      "application/mmt-aei+xml": ["maei"],
      "application/mmt-usd+xml": ["musd"],
      "application/mods+xml": ["mods"],
      "application/mp21": ["m21", "mp21"],
      "application/mp4": ["mp4s", "m4p"],
      "application/mrb-consumer+xml": ["*xdf"],
      "application/mrb-publish+xml": ["*xdf"],
      "application/msword": ["doc", "dot"],
      "application/mxf": ["mxf"],
      "application/n-quads": ["nq"],
      "application/n-triples": ["nt"],
      "application/node": ["cjs"],
      "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"],
      "application/oda": ["oda"],
      "application/oebps-package+xml": ["opf"],
      "application/ogg": ["ogx"],
      "application/omdoc+xml": ["omdoc"],
      "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
      "application/oxps": ["oxps"],
      "application/p2p-overlay+xml": ["relo"],
      "application/patch-ops-error+xml": ["*xer"],
      "application/pdf": ["pdf"],
      "application/pgp-encrypted": ["pgp"],
      "application/pgp-signature": ["asc", "sig"],
      "application/pics-rules": ["prf"],
      "application/pkcs10": ["p10"],
      "application/pkcs7-mime": ["p7m", "p7c"],
      "application/pkcs7-signature": ["p7s"],
      "application/pkcs8": ["p8"],
      "application/pkix-attr-cert": ["ac"],
      "application/pkix-cert": ["cer"],
      "application/pkix-crl": ["crl"],
      "application/pkix-pkipath": ["pkipath"],
      "application/pkixcmp": ["pki"],
      "application/pls+xml": ["pls"],
      "application/postscript": ["ai", "eps", "ps"],
      "application/provenance+xml": ["provx"],
      "application/pskc+xml": ["pskcxml"],
      "application/raml+yaml": ["raml"],
      "application/rdf+xml": ["rdf", "owl"],
      "application/reginfo+xml": ["rif"],
      "application/relax-ng-compact-syntax": ["rnc"],
      "application/resource-lists+xml": ["rl"],
      "application/resource-lists-diff+xml": ["rld"],
      "application/rls-services+xml": ["rs"],
      "application/route-apd+xml": ["rapd"],
      "application/route-s-tsid+xml": ["sls"],
      "application/route-usd+xml": ["rusd"],
      "application/rpki-ghostbusters": ["gbr"],
      "application/rpki-manifest": ["mft"],
      "application/rpki-roa": ["roa"],
      "application/rsd+xml": ["rsd"],
      "application/rss+xml": ["rss"],
      "application/rtf": ["rtf"],
      "application/sbml+xml": ["sbml"],
      "application/scvp-cv-request": ["scq"],
      "application/scvp-cv-response": ["scs"],
      "application/scvp-vp-request": ["spq"],
      "application/scvp-vp-response": ["spp"],
      "application/sdp": ["sdp"],
      "application/senml+xml": ["senmlx"],
      "application/sensml+xml": ["sensmlx"],
      "application/set-payment-initiation": ["setpay"],
      "application/set-registration-initiation": ["setreg"],
      "application/shf+xml": ["shf"],
      "application/sieve": ["siv", "sieve"],
      "application/smil+xml": ["smi", "smil"],
      "application/sparql-query": ["rq"],
      "application/sparql-results+xml": ["srx"],
      "application/srgs": ["gram"],
      "application/srgs+xml": ["grxml"],
      "application/sru+xml": ["sru"],
      "application/ssdl+xml": ["ssdl"],
      "application/ssml+xml": ["ssml"],
      "application/swid+xml": ["swidtag"],
      "application/tei+xml": ["tei", "teicorpus"],
      "application/thraud+xml": ["tfi"],
      "application/timestamped-data": ["tsd"],
      "application/toml": ["toml"],
      "application/ttml+xml": ["ttml"],
      "application/urc-ressheet+xml": ["rsheet"],
      "application/voicexml+xml": ["vxml"],
      "application/wasm": ["wasm"],
      "application/widget": ["wgt"],
      "application/winhlp": ["hlp"],
      "application/wsdl+xml": ["wsdl"],
      "application/wspolicy+xml": ["wspolicy"],
      "application/xaml+xml": ["xaml"],
      "application/xcap-att+xml": ["xav"],
      "application/xcap-caps+xml": ["xca"],
      "application/xcap-diff+xml": ["xdf"],
      "application/xcap-el+xml": ["xel"],
      "application/xcap-error+xml": ["xer"],
      "application/xcap-ns+xml": ["xns"],
      "application/xenc+xml": ["xenc"],
      "application/xhtml+xml": ["xhtml", "xht"],
      "application/xliff+xml": ["xlf"],
      "application/xml": ["xml", "xsl", "xsd", "rng"],
      "application/xml-dtd": ["dtd"],
      "application/xop+xml": ["xop"],
      "application/xproc+xml": ["xpl"],
      "application/xslt+xml": ["xslt"],
      "application/xspf+xml": ["xspf"],
      "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
      "application/yang": ["yang"],
      "application/yin+xml": ["yin"],
      "application/zip": ["zip"],
      "audio/3gpp": ["*3gpp"],
      "audio/adpcm": ["adp"],
      "audio/basic": ["au", "snd"],
      "audio/midi": ["mid", "midi", "kar", "rmi"],
      "audio/mobile-xmf": ["mxmf"],
      "audio/mp3": ["*mp3"],
      "audio/mp4": ["m4a", "mp4a"],
      "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
      "audio/ogg": ["oga", "ogg", "spx"],
      "audio/s3m": ["s3m"],
      "audio/silk": ["sil"],
      "audio/wav": ["wav"],
      "audio/wave": ["*wav"],
      "audio/webm": ["weba"],
      "audio/xm": ["xm"],
      "font/collection": ["ttc"],
      "font/otf": ["otf"],
      "font/ttf": ["ttf"],
      "font/woff": ["woff"],
      "font/woff2": ["woff2"],
      "image/aces": ["exr"],
      "image/apng": ["apng"],
      "image/bmp": ["bmp"],
      "image/cgm": ["cgm"],
      "image/dicom-rle": ["drle"],
      "image/emf": ["emf"],
      "image/fits": ["fits"],
      "image/g3fax": ["g3"],
      "image/gif": ["gif"],
      "image/heic": ["heic"],
      "image/heic-sequence": ["heics"],
      "image/heif": ["heif"],
      "image/heif-sequence": ["heifs"],
      "image/hej2k": ["hej2"],
      "image/hsj2": ["hsj2"],
      "image/ief": ["ief"],
      "image/jls": ["jls"],
      "image/jp2": ["jp2", "jpg2"],
      "image/jpeg": ["jpeg", "jpg", "jpe"],
      "image/jph": ["jph"],
      "image/jphc": ["jhc"],
      "image/jpm": ["jpm"],
      "image/jpx": ["jpx", "jpf"],
      "image/jxr": ["jxr"],
      "image/jxra": ["jxra"],
      "image/jxrs": ["jxrs"],
      "image/jxs": ["jxs"],
      "image/jxsc": ["jxsc"],
      "image/jxsi": ["jxsi"],
      "image/jxss": ["jxss"],
      "image/ktx": ["ktx"],
      "image/png": ["png"],
      "image/sgi": ["sgi"],
      "image/svg+xml": ["svg", "svgz"],
      "image/t38": ["t38"],
      "image/tiff": ["tif", "tiff"],
      "image/tiff-fx": ["tfx"],
      "image/webp": ["webp"],
      "image/wmf": ["wmf"],
      "message/disposition-notification": ["disposition-notification"],
      "message/global": ["u8msg"],
      "message/global-delivery-status": ["u8dsn"],
      "message/global-disposition-notification": ["u8mdn"],
      "message/global-headers": ["u8hdr"],
      "message/rfc822": ["eml", "mime"],
      "model/3mf": ["3mf"],
      "model/gltf+json": ["gltf"],
      "model/gltf-binary": ["glb"],
      "model/iges": ["igs", "iges"],
      "model/mesh": ["msh", "mesh", "silo"],
      "model/mtl": ["mtl"],
      "model/obj": ["obj"],
      "model/stl": ["stl"],
      "model/vrml": ["wrl", "vrml"],
      "model/x3d+binary": ["*x3db", "x3dbz"],
      "model/x3d+fastinfoset": ["x3db"],
      "model/x3d+vrml": ["*x3dv", "x3dvz"],
      "model/x3d+xml": ["x3d", "x3dz"],
      "model/x3d-vrml": ["x3dv"],
      "text/cache-manifest": ["appcache", "manifest"],
      "text/calendar": ["ics", "ifb"],
      "text/coffeescript": ["coffee", "litcoffee"],
      "text/css": ["css"],
      "text/csv": ["csv"],
      "text/html": ["html", "htm", "shtml"],
      "text/jade": ["jade"],
      "text/jsx": ["jsx"],
      "text/less": ["less"],
      "text/markdown": ["markdown", "md"],
      "text/mathml": ["mml"],
      "text/mdx": ["mdx"],
      "text/n3": ["n3"],
      "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
      "text/richtext": ["rtx"],
      "text/rtf": ["*rtf"],
      "text/sgml": ["sgml", "sgm"],
      "text/shex": ["shex"],
      "text/slim": ["slim", "slm"],
      "text/stylus": ["stylus", "styl"],
      "text/tab-separated-values": ["tsv"],
      "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
      "text/turtle": ["ttl"],
      "text/uri-list": ["uri", "uris", "urls"],
      "text/vcard": ["vcard"],
      "text/vtt": ["vtt"],
      "text/xml": ["*xml"],
      "text/yaml": ["yaml", "yml"],
      "video/3gpp": ["3gp", "3gpp"],
      "video/3gpp2": ["3g2"],
      "video/h261": ["h261"],
      "video/h263": ["h263"],
      "video/h264": ["h264"],
      "video/jpeg": ["jpgv"],
      "video/jpm": ["*jpm", "jpgm"],
      "video/mj2": ["mj2", "mjp2"],
      "video/mp2t": ["ts"],
      "video/mp4": ["mp4", "mp4v", "mpg4"],
      "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
      "video/ogg": ["ogv"],
      "video/quicktime": ["qt", "mov"],
      "video/webm": ["webm"]
    };
  }, function (e, t) {
    e.exports = {
      "application/prs.cww": ["cww"],
      "application/vnd.1000minds.decision-model+xml": ["1km"],
      "application/vnd.3gpp.pic-bw-large": ["plb"],
      "application/vnd.3gpp.pic-bw-small": ["psb"],
      "application/vnd.3gpp.pic-bw-var": ["pvb"],
      "application/vnd.3gpp2.tcap": ["tcap"],
      "application/vnd.3m.post-it-notes": ["pwn"],
      "application/vnd.accpac.simply.aso": ["aso"],
      "application/vnd.accpac.simply.imp": ["imp"],
      "application/vnd.acucobol": ["acu"],
      "application/vnd.acucorp": ["atc", "acutc"],
      "application/vnd.adobe.air-application-installer-package+zip": ["air"],
      "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
      "application/vnd.adobe.fxp": ["fxp", "fxpl"],
      "application/vnd.adobe.xdp+xml": ["xdp"],
      "application/vnd.adobe.xfdf": ["xfdf"],
      "application/vnd.ahead.space": ["ahead"],
      "application/vnd.airzip.filesecure.azf": ["azf"],
      "application/vnd.airzip.filesecure.azs": ["azs"],
      "application/vnd.amazon.ebook": ["azw"],
      "application/vnd.americandynamics.acc": ["acc"],
      "application/vnd.amiga.ami": ["ami"],
      "application/vnd.android.package-archive": ["apk"],
      "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
      "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
      "application/vnd.antix.game-component": ["atx"],
      "application/vnd.apple.installer+xml": ["mpkg"],
      "application/vnd.apple.keynote": ["keynote"],
      "application/vnd.apple.mpegurl": ["m3u8"],
      "application/vnd.apple.numbers": ["numbers"],
      "application/vnd.apple.pages": ["pages"],
      "application/vnd.apple.pkpass": ["pkpass"],
      "application/vnd.aristanetworks.swi": ["swi"],
      "application/vnd.astraea-software.iota": ["iota"],
      "application/vnd.audiograph": ["aep"],
      "application/vnd.balsamiq.bmml+xml": ["bmml"],
      "application/vnd.blueice.multipass": ["mpm"],
      "application/vnd.bmi": ["bmi"],
      "application/vnd.businessobjects": ["rep"],
      "application/vnd.chemdraw+xml": ["cdxml"],
      "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
      "application/vnd.cinderella": ["cdy"],
      "application/vnd.citationstyles.style+xml": ["csl"],
      "application/vnd.claymore": ["cla"],
      "application/vnd.cloanto.rp9": ["rp9"],
      "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
      "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
      "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
      "application/vnd.commonspace": ["csp"],
      "application/vnd.contact.cmsg": ["cdbcmsg"],
      "application/vnd.cosmocaller": ["cmc"],
      "application/vnd.crick.clicker": ["clkx"],
      "application/vnd.crick.clicker.keyboard": ["clkk"],
      "application/vnd.crick.clicker.palette": ["clkp"],
      "application/vnd.crick.clicker.template": ["clkt"],
      "application/vnd.crick.clicker.wordbank": ["clkw"],
      "application/vnd.criticaltools.wbs+xml": ["wbs"],
      "application/vnd.ctc-posml": ["pml"],
      "application/vnd.cups-ppd": ["ppd"],
      "application/vnd.curl.car": ["car"],
      "application/vnd.curl.pcurl": ["pcurl"],
      "application/vnd.dart": ["dart"],
      "application/vnd.data-vision.rdz": ["rdz"],
      "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
      "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
      "application/vnd.dece.unspecified": ["uvx", "uvvx"],
      "application/vnd.dece.zip": ["uvz", "uvvz"],
      "application/vnd.denovo.fcselayout-link": ["fe_launch"],
      "application/vnd.dna": ["dna"],
      "application/vnd.dolby.mlp": ["mlp"],
      "application/vnd.dpgraph": ["dpg"],
      "application/vnd.dreamfactory": ["dfac"],
      "application/vnd.ds-keypoint": ["kpxx"],
      "application/vnd.dvb.ait": ["ait"],
      "application/vnd.dvb.service": ["svc"],
      "application/vnd.dynageo": ["geo"],
      "application/vnd.ecowin.chart": ["mag"],
      "application/vnd.enliven": ["nml"],
      "application/vnd.epson.esf": ["esf"],
      "application/vnd.epson.msf": ["msf"],
      "application/vnd.epson.quickanime": ["qam"],
      "application/vnd.epson.salt": ["slt"],
      "application/vnd.epson.ssf": ["ssf"],
      "application/vnd.eszigno3+xml": ["es3", "et3"],
      "application/vnd.ezpix-album": ["ez2"],
      "application/vnd.ezpix-package": ["ez3"],
      "application/vnd.fdf": ["fdf"],
      "application/vnd.fdsn.mseed": ["mseed"],
      "application/vnd.fdsn.seed": ["seed", "dataless"],
      "application/vnd.flographit": ["gph"],
      "application/vnd.fluxtime.clip": ["ftc"],
      "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
      "application/vnd.frogans.fnc": ["fnc"],
      "application/vnd.frogans.ltf": ["ltf"],
      "application/vnd.fsc.weblaunch": ["fsc"],
      "application/vnd.fujitsu.oasys": ["oas"],
      "application/vnd.fujitsu.oasys2": ["oa2"],
      "application/vnd.fujitsu.oasys3": ["oa3"],
      "application/vnd.fujitsu.oasysgp": ["fg5"],
      "application/vnd.fujitsu.oasysprs": ["bh2"],
      "application/vnd.fujixerox.ddd": ["ddd"],
      "application/vnd.fujixerox.docuworks": ["xdw"],
      "application/vnd.fujixerox.docuworks.binder": ["xbd"],
      "application/vnd.fuzzysheet": ["fzs"],
      "application/vnd.genomatix.tuxedo": ["txd"],
      "application/vnd.geogebra.file": ["ggb"],
      "application/vnd.geogebra.tool": ["ggt"],
      "application/vnd.geometry-explorer": ["gex", "gre"],
      "application/vnd.geonext": ["gxt"],
      "application/vnd.geoplan": ["g2w"],
      "application/vnd.geospace": ["g3w"],
      "application/vnd.gmx": ["gmx"],
      "application/vnd.google-apps.document": ["gdoc"],
      "application/vnd.google-apps.presentation": ["gslides"],
      "application/vnd.google-apps.spreadsheet": ["gsheet"],
      "application/vnd.google-earth.kml+xml": ["kml"],
      "application/vnd.google-earth.kmz": ["kmz"],
      "application/vnd.grafeq": ["gqf", "gqs"],
      "application/vnd.groove-account": ["gac"],
      "application/vnd.groove-help": ["ghf"],
      "application/vnd.groove-identity-message": ["gim"],
      "application/vnd.groove-injector": ["grv"],
      "application/vnd.groove-tool-message": ["gtm"],
      "application/vnd.groove-tool-template": ["tpl"],
      "application/vnd.groove-vcard": ["vcg"],
      "application/vnd.hal+xml": ["hal"],
      "application/vnd.handheld-entertainment+xml": ["zmm"],
      "application/vnd.hbci": ["hbci"],
      "application/vnd.hhe.lesson-player": ["les"],
      "application/vnd.hp-hpgl": ["hpgl"],
      "application/vnd.hp-hpid": ["hpid"],
      "application/vnd.hp-hps": ["hps"],
      "application/vnd.hp-jlyt": ["jlt"],
      "application/vnd.hp-pcl": ["pcl"],
      "application/vnd.hp-pclxl": ["pclxl"],
      "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
      "application/vnd.ibm.minipay": ["mpy"],
      "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
      "application/vnd.ibm.rights-management": ["irm"],
      "application/vnd.ibm.secure-container": ["sc"],
      "application/vnd.iccprofile": ["icc", "icm"],
      "application/vnd.igloader": ["igl"],
      "application/vnd.immervision-ivp": ["ivp"],
      "application/vnd.immervision-ivu": ["ivu"],
      "application/vnd.insors.igm": ["igm"],
      "application/vnd.intercon.formnet": ["xpw", "xpx"],
      "application/vnd.intergeo": ["i2g"],
      "application/vnd.intu.qbo": ["qbo"],
      "application/vnd.intu.qfx": ["qfx"],
      "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
      "application/vnd.irepository.package+xml": ["irp"],
      "application/vnd.is-xpr": ["xpr"],
      "application/vnd.isac.fcs": ["fcs"],
      "application/vnd.jam": ["jam"],
      "application/vnd.jcp.javame.midlet-rms": ["rms"],
      "application/vnd.jisp": ["jisp"],
      "application/vnd.joost.joda-archive": ["joda"],
      "application/vnd.kahootz": ["ktz", "ktr"],
      "application/vnd.kde.karbon": ["karbon"],
      "application/vnd.kde.kchart": ["chrt"],
      "application/vnd.kde.kformula": ["kfo"],
      "application/vnd.kde.kivio": ["flw"],
      "application/vnd.kde.kontour": ["kon"],
      "application/vnd.kde.kpresenter": ["kpr", "kpt"],
      "application/vnd.kde.kspread": ["ksp"],
      "application/vnd.kde.kword": ["kwd", "kwt"],
      "application/vnd.kenameaapp": ["htke"],
      "application/vnd.kidspiration": ["kia"],
      "application/vnd.kinar": ["kne", "knp"],
      "application/vnd.koan": ["skp", "skd", "skt", "skm"],
      "application/vnd.kodak-descriptor": ["sse"],
      "application/vnd.las.las+xml": ["lasxml"],
      "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
      "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
      "application/vnd.lotus-1-2-3": ["123"],
      "application/vnd.lotus-approach": ["apr"],
      "application/vnd.lotus-freelance": ["pre"],
      "application/vnd.lotus-notes": ["nsf"],
      "application/vnd.lotus-organizer": ["org"],
      "application/vnd.lotus-screencam": ["scm"],
      "application/vnd.lotus-wordpro": ["lwp"],
      "application/vnd.macports.portpkg": ["portpkg"],
      "application/vnd.mcd": ["mcd"],
      "application/vnd.medcalcdata": ["mc1"],
      "application/vnd.mediastation.cdkey": ["cdkey"],
      "application/vnd.mfer": ["mwf"],
      "application/vnd.mfmp": ["mfm"],
      "application/vnd.micrografx.flo": ["flo"],
      "application/vnd.micrografx.igx": ["igx"],
      "application/vnd.mif": ["mif"],
      "application/vnd.mobius.daf": ["daf"],
      "application/vnd.mobius.dis": ["dis"],
      "application/vnd.mobius.mbk": ["mbk"],
      "application/vnd.mobius.mqy": ["mqy"],
      "application/vnd.mobius.msl": ["msl"],
      "application/vnd.mobius.plc": ["plc"],
      "application/vnd.mobius.txf": ["txf"],
      "application/vnd.mophun.application": ["mpn"],
      "application/vnd.mophun.certificate": ["mpc"],
      "application/vnd.mozilla.xul+xml": ["xul"],
      "application/vnd.ms-artgalry": ["cil"],
      "application/vnd.ms-cab-compressed": ["cab"],
      "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
      "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
      "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
      "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
      "application/vnd.ms-fontobject": ["eot"],
      "application/vnd.ms-htmlhelp": ["chm"],
      "application/vnd.ms-ims": ["ims"],
      "application/vnd.ms-lrm": ["lrm"],
      "application/vnd.ms-officetheme": ["thmx"],
      "application/vnd.ms-outlook": ["msg"],
      "application/vnd.ms-pki.seccat": ["cat"],
      "application/vnd.ms-pki.stl": ["*stl"],
      "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
      "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
      "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
      "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
      "application/vnd.ms-project": ["mpp", "mpt"],
      "application/vnd.ms-word.document.macroenabled.12": ["docm"],
      "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
      "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
      "application/vnd.ms-wpl": ["wpl"],
      "application/vnd.ms-xpsdocument": ["xps"],
      "application/vnd.mseq": ["mseq"],
      "application/vnd.musician": ["mus"],
      "application/vnd.muvee.style": ["msty"],
      "application/vnd.mynfc": ["taglet"],
      "application/vnd.neurolanguage.nlu": ["nlu"],
      "application/vnd.nitf": ["ntf", "nitf"],
      "application/vnd.noblenet-directory": ["nnd"],
      "application/vnd.noblenet-sealer": ["nns"],
      "application/vnd.noblenet-web": ["nnw"],
      "application/vnd.nokia.n-gage.ac+xml": ["*ac"],
      "application/vnd.nokia.n-gage.data": ["ngdat"],
      "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
      "application/vnd.nokia.radio-preset": ["rpst"],
      "application/vnd.nokia.radio-presets": ["rpss"],
      "application/vnd.novadigm.edm": ["edm"],
      "application/vnd.novadigm.edx": ["edx"],
      "application/vnd.novadigm.ext": ["ext"],
      "application/vnd.oasis.opendocument.chart": ["odc"],
      "application/vnd.oasis.opendocument.chart-template": ["otc"],
      "application/vnd.oasis.opendocument.database": ["odb"],
      "application/vnd.oasis.opendocument.formula": ["odf"],
      "application/vnd.oasis.opendocument.formula-template": ["odft"],
      "application/vnd.oasis.opendocument.graphics": ["odg"],
      "application/vnd.oasis.opendocument.graphics-template": ["otg"],
      "application/vnd.oasis.opendocument.image": ["odi"],
      "application/vnd.oasis.opendocument.image-template": ["oti"],
      "application/vnd.oasis.opendocument.presentation": ["odp"],
      "application/vnd.oasis.opendocument.presentation-template": ["otp"],
      "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
      "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
      "application/vnd.oasis.opendocument.text": ["odt"],
      "application/vnd.oasis.opendocument.text-master": ["odm"],
      "application/vnd.oasis.opendocument.text-template": ["ott"],
      "application/vnd.oasis.opendocument.text-web": ["oth"],
      "application/vnd.olpc-sugar": ["xo"],
      "application/vnd.oma.dd2+xml": ["dd2"],
      "application/vnd.openblox.game+xml": ["obgx"],
      "application/vnd.openofficeorg.extension": ["oxt"],
      "application/vnd.openstreetmap.data+xml": ["osm"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"],
      "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"],
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"],
      "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"],
      "application/vnd.osgeo.mapguide.package": ["mgp"],
      "application/vnd.osgi.dp": ["dp"],
      "application/vnd.osgi.subsystem": ["esa"],
      "application/vnd.palm": ["pdb", "pqa", "oprc"],
      "application/vnd.pawaafile": ["paw"],
      "application/vnd.pg.format": ["str"],
      "application/vnd.pg.osasli": ["ei6"],
      "application/vnd.picsel": ["efif"],
      "application/vnd.pmi.widget": ["wg"],
      "application/vnd.pocketlearn": ["plf"],
      "application/vnd.powerbuilder6": ["pbd"],
      "application/vnd.previewsystems.box": ["box"],
      "application/vnd.proteus.magazine": ["mgz"],
      "application/vnd.publishare-delta-tree": ["qps"],
      "application/vnd.pvi.ptid1": ["ptid"],
      "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
      "application/vnd.realvnc.bed": ["bed"],
      "application/vnd.recordare.musicxml": ["mxl"],
      "application/vnd.recordare.musicxml+xml": ["musicxml"],
      "application/vnd.rig.cryptonote": ["cryptonote"],
      "application/vnd.rim.cod": ["cod"],
      "application/vnd.rn-realmedia": ["rm"],
      "application/vnd.rn-realmedia-vbr": ["rmvb"],
      "application/vnd.route66.link66+xml": ["link66"],
      "application/vnd.sailingtracker.track": ["st"],
      "application/vnd.seemail": ["see"],
      "application/vnd.sema": ["sema"],
      "application/vnd.semd": ["semd"],
      "application/vnd.semf": ["semf"],
      "application/vnd.shana.informed.formdata": ["ifm"],
      "application/vnd.shana.informed.formtemplate": ["itp"],
      "application/vnd.shana.informed.interchange": ["iif"],
      "application/vnd.shana.informed.package": ["ipk"],
      "application/vnd.simtech-mindmapper": ["twd", "twds"],
      "application/vnd.smaf": ["mmf"],
      "application/vnd.smart.teacher": ["teacher"],
      "application/vnd.software602.filler.form+xml": ["fo"],
      "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
      "application/vnd.spotfire.dxp": ["dxp"],
      "application/vnd.spotfire.sfs": ["sfs"],
      "application/vnd.stardivision.calc": ["sdc"],
      "application/vnd.stardivision.draw": ["sda"],
      "application/vnd.stardivision.impress": ["sdd"],
      "application/vnd.stardivision.math": ["smf"],
      "application/vnd.stardivision.writer": ["sdw", "vor"],
      "application/vnd.stardivision.writer-global": ["sgl"],
      "application/vnd.stepmania.package": ["smzip"],
      "application/vnd.stepmania.stepchart": ["sm"],
      "application/vnd.sun.wadl+xml": ["wadl"],
      "application/vnd.sun.xml.calc": ["sxc"],
      "application/vnd.sun.xml.calc.template": ["stc"],
      "application/vnd.sun.xml.draw": ["sxd"],
      "application/vnd.sun.xml.draw.template": ["std"],
      "application/vnd.sun.xml.impress": ["sxi"],
      "application/vnd.sun.xml.impress.template": ["sti"],
      "application/vnd.sun.xml.math": ["sxm"],
      "application/vnd.sun.xml.writer": ["sxw"],
      "application/vnd.sun.xml.writer.global": ["sxg"],
      "application/vnd.sun.xml.writer.template": ["stw"],
      "application/vnd.sus-calendar": ["sus", "susp"],
      "application/vnd.svd": ["svd"],
      "application/vnd.symbian.install": ["sis", "sisx"],
      "application/vnd.syncml+xml": ["xsm"],
      "application/vnd.syncml.dm+wbxml": ["bdm"],
      "application/vnd.syncml.dm+xml": ["xdm"],
      "application/vnd.syncml.dmddf+xml": ["ddf"],
      "application/vnd.tao.intent-module-archive": ["tao"],
      "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
      "application/vnd.tmobile-livetv": ["tmo"],
      "application/vnd.trid.tpt": ["tpt"],
      "application/vnd.triscape.mxs": ["mxs"],
      "application/vnd.trueapp": ["tra"],
      "application/vnd.ufdl": ["ufd", "ufdl"],
      "application/vnd.uiq.theme": ["utz"],
      "application/vnd.umajin": ["umj"],
      "application/vnd.unity": ["unityweb"],
      "application/vnd.uoml+xml": ["uoml"],
      "application/vnd.vcx": ["vcx"],
      "application/vnd.visio": ["vsd", "vst", "vss", "vsw"],
      "application/vnd.visionary": ["vis"],
      "application/vnd.vsf": ["vsf"],
      "application/vnd.wap.wbxml": ["wbxml"],
      "application/vnd.wap.wmlc": ["wmlc"],
      "application/vnd.wap.wmlscriptc": ["wmlsc"],
      "application/vnd.webturbo": ["wtb"],
      "application/vnd.wolfram.player": ["nbp"],
      "application/vnd.wordperfect": ["wpd"],
      "application/vnd.wqd": ["wqd"],
      "application/vnd.wt.stf": ["stf"],
      "application/vnd.xara": ["xar"],
      "application/vnd.xfdl": ["xfdl"],
      "application/vnd.yamaha.hv-dic": ["hvd"],
      "application/vnd.yamaha.hv-script": ["hvs"],
      "application/vnd.yamaha.hv-voice": ["hvp"],
      "application/vnd.yamaha.openscoreformat": ["osf"],
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
      "application/vnd.yamaha.smaf-audio": ["saf"],
      "application/vnd.yamaha.smaf-phrase": ["spf"],
      "application/vnd.yellowriver-custom-menu": ["cmp"],
      "application/vnd.zul": ["zir", "zirz"],
      "application/vnd.zzazz.deck+xml": ["zaz"],
      "application/x-7z-compressed": ["7z"],
      "application/x-abiword": ["abw"],
      "application/x-ace-compressed": ["ace"],
      "application/x-apple-diskimage": ["*dmg"],
      "application/x-arj": ["arj"],
      "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
      "application/x-authorware-map": ["aam"],
      "application/x-authorware-seg": ["aas"],
      "application/x-bcpio": ["bcpio"],
      "application/x-bdoc": ["*bdoc"],
      "application/x-bittorrent": ["torrent"],
      "application/x-blorb": ["blb", "blorb"],
      "application/x-bzip": ["bz"],
      "application/x-bzip2": ["bz2", "boz"],
      "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
      "application/x-cdlink": ["vcd"],
      "application/x-cfs-compressed": ["cfs"],
      "application/x-chat": ["chat"],
      "application/x-chess-pgn": ["pgn"],
      "application/x-chrome-extension": ["crx"],
      "application/x-cocoa": ["cco"],
      "application/x-conference": ["nsc"],
      "application/x-cpio": ["cpio"],
      "application/x-csh": ["csh"],
      "application/x-debian-package": ["*deb", "udeb"],
      "application/x-dgc-compressed": ["dgc"],
      "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
      "application/x-doom": ["wad"],
      "application/x-dtbncx+xml": ["ncx"],
      "application/x-dtbook+xml": ["dtb"],
      "application/x-dtbresource+xml": ["res"],
      "application/x-dvi": ["dvi"],
      "application/x-envoy": ["evy"],
      "application/x-eva": ["eva"],
      "application/x-font-bdf": ["bdf"],
      "application/x-font-ghostscript": ["gsf"],
      "application/x-font-linux-psf": ["psf"],
      "application/x-font-pcf": ["pcf"],
      "application/x-font-snf": ["snf"],
      "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
      "application/x-freearc": ["arc"],
      "application/x-futuresplash": ["spl"],
      "application/x-gca-compressed": ["gca"],
      "application/x-glulx": ["ulx"],
      "application/x-gnumeric": ["gnumeric"],
      "application/x-gramps-xml": ["gramps"],
      "application/x-gtar": ["gtar"],
      "application/x-hdf": ["hdf"],
      "application/x-httpd-php": ["php"],
      "application/x-install-instructions": ["install"],
      "application/x-iso9660-image": ["*iso"],
      "application/x-java-archive-diff": ["jardiff"],
      "application/x-java-jnlp-file": ["jnlp"],
      "application/x-keepass2": ["kdbx"],
      "application/x-latex": ["latex"],
      "application/x-lua-bytecode": ["luac"],
      "application/x-lzh-compressed": ["lzh", "lha"],
      "application/x-makeself": ["run"],
      "application/x-mie": ["mie"],
      "application/x-mobipocket-ebook": ["prc", "mobi"],
      "application/x-ms-application": ["application"],
      "application/x-ms-shortcut": ["lnk"],
      "application/x-ms-wmd": ["wmd"],
      "application/x-ms-wmz": ["wmz"],
      "application/x-ms-xbap": ["xbap"],
      "application/x-msaccess": ["mdb"],
      "application/x-msbinder": ["obd"],
      "application/x-mscardfile": ["crd"],
      "application/x-msclip": ["clp"],
      "application/x-msdos-program": ["*exe"],
      "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
      "application/x-msmediaview": ["mvb", "m13", "m14"],
      "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
      "application/x-msmoney": ["mny"],
      "application/x-mspublisher": ["pub"],
      "application/x-msschedule": ["scd"],
      "application/x-msterminal": ["trm"],
      "application/x-mswrite": ["wri"],
      "application/x-netcdf": ["nc", "cdf"],
      "application/x-ns-proxy-autoconfig": ["pac"],
      "application/x-nzb": ["nzb"],
      "application/x-perl": ["pl", "pm"],
      "application/x-pilot": ["*prc", "*pdb"],
      "application/x-pkcs12": ["p12", "pfx"],
      "application/x-pkcs7-certificates": ["p7b", "spc"],
      "application/x-pkcs7-certreqresp": ["p7r"],
      "application/x-rar-compressed": ["rar"],
      "application/x-redhat-package-manager": ["rpm"],
      "application/x-research-info-systems": ["ris"],
      "application/x-sea": ["sea"],
      "application/x-sh": ["sh"],
      "application/x-shar": ["shar"],
      "application/x-shockwave-flash": ["swf"],
      "application/x-silverlight-app": ["xap"],
      "application/x-sql": ["sql"],
      "application/x-stuffit": ["sit"],
      "application/x-stuffitx": ["sitx"],
      "application/x-subrip": ["srt"],
      "application/x-sv4cpio": ["sv4cpio"],
      "application/x-sv4crc": ["sv4crc"],
      "application/x-t3vm-image": ["t3"],
      "application/x-tads": ["gam"],
      "application/x-tar": ["tar"],
      "application/x-tcl": ["tcl", "tk"],
      "application/x-tex": ["tex"],
      "application/x-tex-tfm": ["tfm"],
      "application/x-texinfo": ["texinfo", "texi"],
      "application/x-tgif": ["*obj"],
      "application/x-ustar": ["ustar"],
      "application/x-virtualbox-hdd": ["hdd"],
      "application/x-virtualbox-ova": ["ova"],
      "application/x-virtualbox-ovf": ["ovf"],
      "application/x-virtualbox-vbox": ["vbox"],
      "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
      "application/x-virtualbox-vdi": ["vdi"],
      "application/x-virtualbox-vhd": ["vhd"],
      "application/x-virtualbox-vmdk": ["vmdk"],
      "application/x-wais-source": ["src"],
      "application/x-web-app-manifest+json": ["webapp"],
      "application/x-x509-ca-cert": ["der", "crt", "pem"],
      "application/x-xfig": ["fig"],
      "application/x-xliff+xml": ["*xlf"],
      "application/x-xpinstall": ["xpi"],
      "application/x-xz": ["xz"],
      "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
      "audio/vnd.dece.audio": ["uva", "uvva"],
      "audio/vnd.digital-winds": ["eol"],
      "audio/vnd.dra": ["dra"],
      "audio/vnd.dts": ["dts"],
      "audio/vnd.dts.hd": ["dtshd"],
      "audio/vnd.lucent.voice": ["lvp"],
      "audio/vnd.ms-playready.media.pya": ["pya"],
      "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
      "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
      "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
      "audio/vnd.rip": ["rip"],
      "audio/x-aac": ["aac"],
      "audio/x-aiff": ["aif", "aiff", "aifc"],
      "audio/x-caf": ["caf"],
      "audio/x-flac": ["flac"],
      "audio/x-m4a": ["*m4a"],
      "audio/x-matroska": ["mka"],
      "audio/x-mpegurl": ["m3u"],
      "audio/x-ms-wax": ["wax"],
      "audio/x-ms-wma": ["wma"],
      "audio/x-pn-realaudio": ["ram", "ra"],
      "audio/x-pn-realaudio-plugin": ["rmp"],
      "audio/x-realaudio": ["*ra"],
      "audio/x-wav": ["*wav"],
      "chemical/x-cdx": ["cdx"],
      "chemical/x-cif": ["cif"],
      "chemical/x-cmdf": ["cmdf"],
      "chemical/x-cml": ["cml"],
      "chemical/x-csml": ["csml"],
      "chemical/x-xyz": ["xyz"],
      "image/prs.btif": ["btif"],
      "image/prs.pti": ["pti"],
      "image/vnd.adobe.photoshop": ["psd"],
      "image/vnd.airzip.accelerator.azv": ["azv"],
      "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
      "image/vnd.djvu": ["djvu", "djv"],
      "image/vnd.dvb.subtitle": ["*sub"],
      "image/vnd.dwg": ["dwg"],
      "image/vnd.dxf": ["dxf"],
      "image/vnd.fastbidsheet": ["fbs"],
      "image/vnd.fpx": ["fpx"],
      "image/vnd.fst": ["fst"],
      "image/vnd.fujixerox.edmics-mmr": ["mmr"],
      "image/vnd.fujixerox.edmics-rlc": ["rlc"],
      "image/vnd.microsoft.icon": ["ico"],
      "image/vnd.ms-dds": ["dds"],
      "image/vnd.ms-modi": ["mdi"],
      "image/vnd.ms-photo": ["wdp"],
      "image/vnd.net-fpx": ["npx"],
      "image/vnd.tencent.tap": ["tap"],
      "image/vnd.valve.source.texture": ["vtf"],
      "image/vnd.wap.wbmp": ["wbmp"],
      "image/vnd.xiff": ["xif"],
      "image/vnd.zbrush.pcx": ["pcx"],
      "image/x-3ds": ["3ds"],
      "image/x-cmu-raster": ["ras"],
      "image/x-cmx": ["cmx"],
      "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
      "image/x-icon": ["*ico"],
      "image/x-jng": ["jng"],
      "image/x-mrsid-image": ["sid"],
      "image/x-ms-bmp": ["*bmp"],
      "image/x-pcx": ["*pcx"],
      "image/x-pict": ["pic", "pct"],
      "image/x-portable-anymap": ["pnm"],
      "image/x-portable-bitmap": ["pbm"],
      "image/x-portable-graymap": ["pgm"],
      "image/x-portable-pixmap": ["ppm"],
      "image/x-rgb": ["rgb"],
      "image/x-tga": ["tga"],
      "image/x-xbitmap": ["xbm"],
      "image/x-xpixmap": ["xpm"],
      "image/x-xwindowdump": ["xwd"],
      "message/vnd.wfa.wsc": ["wsc"],
      "model/vnd.collada+xml": ["dae"],
      "model/vnd.dwf": ["dwf"],
      "model/vnd.gdl": ["gdl"],
      "model/vnd.gtw": ["gtw"],
      "model/vnd.mts": ["mts"],
      "model/vnd.opengex": ["ogex"],
      "model/vnd.parasolid.transmit.binary": ["x_b"],
      "model/vnd.parasolid.transmit.text": ["x_t"],
      "model/vnd.usdz+zip": ["usdz"],
      "model/vnd.valve.source.compiled-map": ["bsp"],
      "model/vnd.vtu": ["vtu"],
      "text/prs.lines.tag": ["dsc"],
      "text/vnd.curl": ["curl"],
      "text/vnd.curl.dcurl": ["dcurl"],
      "text/vnd.curl.mcurl": ["mcurl"],
      "text/vnd.curl.scurl": ["scurl"],
      "text/vnd.dvb.subtitle": ["sub"],
      "text/vnd.fly": ["fly"],
      "text/vnd.fmi.flexstor": ["flx"],
      "text/vnd.graphviz": ["gv"],
      "text/vnd.in3d.3dml": ["3dml"],
      "text/vnd.in3d.spot": ["spot"],
      "text/vnd.sun.j2me.app-descriptor": ["jad"],
      "text/vnd.wap.wml": ["wml"],
      "text/vnd.wap.wmlscript": ["wmls"],
      "text/x-asm": ["s", "asm"],
      "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
      "text/x-component": ["htc"],
      "text/x-fortran": ["f", "for", "f77", "f90"],
      "text/x-handlebars-template": ["hbs"],
      "text/x-java-source": ["java"],
      "text/x-lua": ["lua"],
      "text/x-markdown": ["mkd"],
      "text/x-nfo": ["nfo"],
      "text/x-opml": ["opml"],
      "text/x-org": ["*org"],
      "text/x-pascal": ["p", "pas"],
      "text/x-processing": ["pde"],
      "text/x-sass": ["sass"],
      "text/x-scss": ["scss"],
      "text/x-setext": ["etx"],
      "text/x-sfv": ["sfv"],
      "text/x-suse-ymp": ["ymp"],
      "text/x-uuencode": ["uu"],
      "text/x-vcalendar": ["vcs"],
      "text/x-vcard": ["vcf"],
      "video/vnd.dece.hd": ["uvh", "uvvh"],
      "video/vnd.dece.mobile": ["uvm", "uvvm"],
      "video/vnd.dece.pd": ["uvp", "uvvp"],
      "video/vnd.dece.sd": ["uvs", "uvvs"],
      "video/vnd.dece.video": ["uvv", "uvvv"],
      "video/vnd.dvb.file": ["dvb"],
      "video/vnd.fvt": ["fvt"],
      "video/vnd.mpegurl": ["mxu", "m4u"],
      "video/vnd.ms-playready.media.pyv": ["pyv"],
      "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
      "video/vnd.vivo": ["viv"],
      "video/x-f4v": ["f4v"],
      "video/x-fli": ["fli"],
      "video/x-flv": ["flv"],
      "video/x-m4v": ["m4v"],
      "video/x-matroska": ["mkv", "mk3d", "mks"],
      "video/x-mng": ["mng"],
      "video/x-ms-asf": ["asf", "asx"],
      "video/x-ms-vob": ["vob"],
      "video/x-ms-wm": ["wm"],
      "video/x-ms-wmv": ["wmv"],
      "video/x-ms-wmx": ["wmx"],
      "video/x-ms-wvx": ["wvx"],
      "video/x-msvideo": ["avi"],
      "video/x-sgi-movie": ["movie"],
      "video/x-smv": ["smv"],
      "x-conference/x-cooltalk": ["ice"]
    };
  }, function (e, t, n) {
    function i(e, t) {
      var n = this;
      if (!x.canFileSlice()) return e.SkipTask = !0, void n.postObject(e, t);
      var i,
          o,
          r = new v(),
          c = e.TaskId,
          p = e.Bucket,
          u = e.Region,
          d = e.Key,
          m = e.FilePath,
          f = e.ChunkSize || e.SliceSize || n.options.ChunkSize,
          g = e.AsyncLimit,
          y = e.StorageClass,
          C = e.ServerSideEncryption,
          k = e.onHashProgress;
      r.on("error", function (e) {
        if (n._isRunningTask(c)) return t(e);
      }), r.on("upload_complete", function (e) {
        t(null, e);
      }), r.on("upload_slice_complete", function (e) {
        l.call(n, {
          Bucket: p,
          Region: u,
          Key: d,
          UploadId: e.UploadId,
          SliceList: e.SliceList
        }, function (t, a) {
          if (n._isRunningTask(c)) {
            if (h.removeUsing(e.UploadId), t) return o(null, !0), r.emit("error", t);
            h.removeUploadId(e.UploadId), o({
              loaded: i,
              total: i
            }, !0), r.emit("upload_complete", a);
          }
        });
      }), r.on("get_upload_data_finish", function (t) {
        var a = h.getFileId(e.FileStat, e.ChunkSize, p, d);
        a && h.saveUploadId(a, t.UploadId, n.options.UploadIdCacheLimit), h.setUsing(t.UploadId), o(null, !0), s.call(n, {
          TaskId: c,
          Bucket: p,
          Region: u,
          Key: d,
          FilePath: m,
          FileSize: i,
          SliceSize: f,
          AsyncLimit: g,
          ServerSideEncryption: C,
          UploadData: t,
          onProgress: o
        }, function (e, t) {
          if (n._isRunningTask(c)) return e ? (o(null, !0), r.emit("error", e)) : void r.emit("upload_slice_complete", t);
        });
      }), r.on("get_file_size_finish", function () {
        if (o = x.throttleOnProgress.call(n, i, e.onProgress), e.UploadData.UploadId) r.emit("get_upload_data_finish", e.UploadData);else {
          var t = x.extend({
            TaskId: c,
            Bucket: p,
            Region: u,
            Key: d,
            Headers: e.Headers,
            StorageClass: y,
            FilePath: m,
            FileSize: i,
            SliceSize: f,
            onHashProgress: k
          }, e);
          a.call(n, t, function (t, i) {
            if (n._isRunningTask(c)) {
              if (t) return r.emit("error", t);
              e.UploadData.UploadId = i.UploadId, e.UploadData.PartList = i.PartList, r.emit("get_upload_data_finish", e.UploadData);
            }
          });
        }
      }), i = e.ContentLength, delete e.ContentLength, !e.Headers && (e.Headers = {}), x.each(e.Headers, function (t, n) {
        "content-length" === n.toLowerCase() && delete e.Headers[n];
      }), function () {
        for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], a = 1048576, o = 0; o < t.length && (a = 1024 * t[o] * 1024, !(i / a <= n.options.MaxPartNumber)); o++);

        e.ChunkSize = e.SliceSize = f = Math.max(f, a);
      }(), 0 === i ? (e.Body = "", e.ContentLength = 0, e.SkipTask = !0, n.putObject(e, function (e, n) {
        if (e) return t(e);
        t(null, n);
      })) : r.emit("get_file_size_finish");
    }

    function a(e, t) {
      var n = e.TaskId,
          i = e.Bucket,
          a = e.Region,
          s = e.Key,
          c = e.StorageClass,
          l = this,
          p = {},
          u = e.FileSize,
          d = e.SliceSize,
          m = Math.ceil(u / d),
          f = 0,
          y = 0,
          C = x.throttleOnProgress.call(l, u, e.onHashProgress),
          k = function (t, n) {
        var i = d * (t - 1),
            a = Math.min(i + d, u),
            o = a - i;
        p[t] ? n(null, {
          PartNumber: t,
          ETag: p[t],
          Size: o
        }) : x.fileSlice(e.FilePath, i, a, function (e) {
          try {
            var i = x.getFileMd5(e);
          } catch (e) {
            return n(e);
          }

          var a = '"' + i + '"';
          p[t] = a, f += 1, y += o, n(null, {
            PartNumber: t,
            ETag: a,
            Size: o
          }), C({
            loaded: y,
            total: u
          });
        });
      },
          b = function (e, t) {
        var n = e.length;
        if (0 === n) return t(null, !0);
        if (n > m) return t(null, !1);

        if (n > 1) {
          if (Math.max(e[0].Size, e[1].Size) !== d) return t(null, !1);
        }

        var i = function (a) {
          if (a < n) {
            var o = e[a];
            k(o.PartNumber, function (e, n) {
              n && n.ETag === o.ETag && n.Size === o.Size ? i(a + 1) : t(null, !1);
            });
          } else t(null, !0);
        };

        i(0);
      },
          S = new v();

      S.on("error", function (e) {
        if (l._isRunningTask(n)) return t(e);
      }), S.on("upload_id_available", function (e) {
        var n = {},
            i = [];
        x.each(e.PartList, function (e) {
          n[e.PartNumber] = e;
        });

        for (var a = 1; a <= m; a++) {
          var o = n[a];
          o ? (o.PartNumber = a, o.Uploaded = !0) : o = {
            PartNumber: a,
            ETag: null,
            Uploaded: !1
          }, i.push(o);
        }

        e.PartList = i, t(null, e);
      }), S.on("no_available_upload_id", function () {
        if (l._isRunningTask(n)) {
          var o = x.extend({
            Bucket: i,
            Region: a,
            Key: s,
            Headers: x.clone(e.Headers),
            Query: x.clone(e.Query),
            StorageClass: c
          }, e);
          l.multipartInit(o, function (e, i) {
            if (l._isRunningTask(n)) {
              if (e) return S.emit("error", e);
              var a = i.UploadId;
              if (!a) return t({
                Message: "no upload id"
              });
              S.emit("upload_id_available", {
                UploadId: a,
                PartList: []
              });
            }
          });
        }
      }), S.on("has_and_check_upload_id", function (e) {
        e = e.reverse(), g.eachLimit(e, 1, function (e, t) {
          if (l._isRunningTask(n)) return h.using[e] ? void t() : void r.call(l, {
            Bucket: i,
            Region: a,
            Key: s,
            UploadId: e
          }, function (i, a) {
            if (l._isRunningTask(n)) {
              if (i) return h.removeUsing(e), S.emit("error", i);
              var o = a.PartList;
              o.forEach(function (e) {
                e.PartNumber *= 1, e.Size *= 1, e.ETag = e.ETag || "";
              }), b(o, function (i, a) {
                if (l._isRunningTask(n)) return i ? S.emit("error", i) : void (a ? t({
                  UploadId: e,
                  PartList: o
                }) : t());
              });
            }
          });
        }, function (e) {
          l._isRunningTask(n) && (C(null, !0), e && e.UploadId ? S.emit("upload_id_available", e) : S.emit("no_available_upload_id"));
        });
      }), S.on("seek_local_avail_upload_id", function (t) {
        var o = h.getFileId(e.FileStat, e.ChunkSize, i, s),
            c = h.getUploadIdList(o);
        if (!o || !c) return void S.emit("has_and_check_upload_id", t);

        var p = function (e) {
          if (e >= c.length) return void S.emit("has_and_check_upload_id", t);
          var o = c[e];
          return x.isInArray(t, o) ? h.using[o] ? void p(e + 1) : void r.call(l, {
            Bucket: i,
            Region: a,
            Key: s,
            UploadId: o
          }, function (t, i) {
            l._isRunningTask(n) && (t ? (h.removeUploadId(o), p(e + 1)) : S.emit("upload_id_available", {
              UploadId: o,
              PartList: i.PartList
            }));
          }) : (h.removeUploadId(o), void p(e + 1));
        };

        p(0);
      }), S.on("get_remote_upload_id_list", function () {
        o.call(l, {
          Bucket: i,
          Region: a,
          Key: s
        }, function (t, a) {
          if (l._isRunningTask(n)) {
            if (t) return S.emit("error", t);
            var o = x.filter(a.UploadList, function (e) {
              return e.Key === s && (!c || e.StorageClass.toUpperCase() === c.toUpperCase());
            }).reverse().map(function (e) {
              return e.UploadId || e.UploadID;
            });
            if (o.length) S.emit("seek_local_avail_upload_id", o);else {
              var r,
                  p = h.getFileId(e.FileStat, e.ChunkSize, i, s);
              p && (r = h.getUploadIdList(p)) && x.each(r, function (e) {
                h.removeUploadId(e);
              }), S.emit("no_available_upload_id");
            }
          }
        });
      }), S.emit("get_remote_upload_id_list");
    }

    function o(e, t) {
      var n = this,
          i = [],
          a = {
        Bucket: e.Bucket,
        Region: e.Region,
        Prefix: e.Key
      },
          o = function () {
        n.multipartList(a, function (e, n) {
          if (e) return t(e);
          i.push.apply(i, n.Upload || []), "true" === n.IsTruncated ? (a.KeyMarker = n.NextKeyMarker, a.UploadIdMarker = n.NextUploadIdMarker, o()) : t(null, {
            UploadList: i
          });
        });
      };

      o();
    }

    function r(e, t) {
      var n = this,
          i = [],
          a = {
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        UploadId: e.UploadId
      },
          o = function () {
        n.multipartListPart(a, function (e, n) {
          if (e) return t(e);
          i.push.apply(i, n.Part || []), "true" === n.IsTruncated ? (a.PartNumberMarker = n.NextPartNumberMarker, o()) : t(null, {
            PartList: i
          });
        });
      };

      o();
    }

    function s(e, t) {
      var n = this,
          i = e.TaskId,
          a = e.Bucket,
          o = e.Region,
          r = e.Key,
          s = e.UploadData,
          l = e.FileSize,
          p = e.SliceSize,
          u = Math.min(e.AsyncLimit || n.options.ChunkParallelLimit || 1, 256),
          d = e.FilePath,
          m = Math.ceil(l / p),
          f = 0,
          h = e.ServerSideEncryption,
          v = x.filter(s.PartList, function (e) {
        return e.Uploaded && (f += e.PartNumber >= m ? l % p || p : p), !e.Uploaded;
      }),
          y = e.onProgress;
      g.eachLimit(v, u, function (e, t) {
        if (n._isRunningTask(i)) {
          var u = e.PartNumber,
              m = Math.min(l, e.PartNumber * p) - (e.PartNumber - 1) * p,
              g = 0;
          c.call(n, {
            TaskId: i,
            Bucket: a,
            Region: o,
            Key: r,
            SliceSize: p,
            FileSize: l,
            PartNumber: u,
            ServerSideEncryption: h,
            FilePath: d,
            UploadData: s,
            onProgress: function (e) {
              f += e.loaded - g, g = e.loaded, y({
                loaded: f,
                total: l
              });
            }
          }, function (a, o) {
            n._isRunningTask(i) && (a ? f -= g : (f += m - g, e.ETag = o.ETag), y({
              loaded: f,
              total: l
            }), t(a || null, o));
          });
        }
      }, function (e) {
        if (n._isRunningTask(i)) return e ? t(e) : void t(null, {
          UploadId: s.UploadId,
          SliceList: s.PartList
        });
      });
    }

    function c(e, t) {
      var n = this,
          i = e.TaskId,
          a = e.Bucket,
          o = e.Region,
          r = e.Key,
          s = e.FileSize,
          c = e.FilePath,
          l = 1 * e.PartNumber,
          p = e.SliceSize,
          u = e.ServerSideEncryption,
          d = e.UploadData,
          m = n.options.ChunkRetryTimes + 1,
          f = p * (l - 1),
          h = p,
          v = f + p;
      v > s && (v = s, h = v - f), x.fileSlice(c, f, v, function (s) {
        var c = x.getFileMd5(s),
            p = c ? x.binaryBase64(c) : null,
            f = d.PartList[l - 1];
        g.retry(m, function (t) {
          n._isRunningTask(i) && n.multipartUpload({
            TaskId: i,
            Bucket: a,
            Region: o,
            Key: r,
            ContentLength: h,
            PartNumber: l,
            UploadId: d.UploadId,
            ServerSideEncryption: u,
            Body: s,
            onProgress: e.onProgress,
            ContentMD5: p
          }, function (e, a) {
            if (n._isRunningTask(i)) return e ? t(e) : (f.Uploaded = !0, t(null, a));
          });
        }, function (e, a) {
          if (n._isRunningTask(i)) return t(e, a);
        });
      });
    }

    function l(e, t) {
      var n = e.Bucket,
          i = e.Region,
          a = e.Key,
          o = e.UploadId,
          r = e.SliceList,
          s = this,
          c = this.options.ChunkRetryTimes + 1,
          l = r.map(function (e) {
        return {
          PartNumber: e.PartNumber,
          ETag: e.ETag
        };
      });
      g.retry(c, function (e) {
        s.multipartComplete({
          Bucket: n,
          Region: i,
          Key: a,
          UploadId: o,
          Parts: l
        }, e);
      }, function (e, n) {
        t(e, n);
      });
    }

    function p(e, t) {
      var n = e.Bucket,
          i = e.Region,
          a = e.Key,
          r = e.UploadId,
          s = e.Level || "task",
          c = e.AsyncLimit,
          l = this,
          p = new v();
      if (p.on("error", function (e) {
        return t(e);
      }), p.on("get_abort_array", function (o) {
        u.call(l, {
          Bucket: n,
          Region: i,
          Key: a,
          Headers: e.Headers,
          AsyncLimit: c,
          AbortArray: o
        }, function (e, n) {
          if (e) return t(e);
          t(null, n);
        });
      }), "bucket" === s) o.call(l, {
        Bucket: n,
        Region: i
      }, function (e, n) {
        if (e) return t(e);
        p.emit("get_abort_array", n.UploadList || []);
      });else if ("file" === s) {
        if (!a) return t({
          error: "abort_upload_task_no_key"
        });
        o.call(l, {
          Bucket: n,
          Region: i,
          Key: a
        }, function (e, n) {
          if (e) return t(e);
          p.emit("get_abort_array", n.UploadList || []);
        });
      } else {
        if ("task" !== s) return t({
          error: "abort_unknown_level"
        });
        if (!r) return t({
          error: "abort_upload_task_no_id"
        });
        if (!a) return t({
          error: "abort_upload_task_no_key"
        });
        p.emit("get_abort_array", [{
          Key: a,
          UploadId: r
        }]);
      }
    }

    function u(e, t) {
      var n = e.Bucket,
          i = e.Region,
          a = e.Key,
          o = e.AbortArray,
          r = e.AsyncLimit || 1,
          s = this,
          c = 0,
          l = new Array(o.length);
      g.eachLimit(o, r, function (t, o) {
        var r = c;
        if (a && a !== t.Key) return l[r] = {
          error: {
            KeyNotMatch: !0
          }
        }, void o(null);
        var p = t.UploadId || t.UploadID;
        s.multipartAbort({
          Bucket: n,
          Region: i,
          Key: t.Key,
          Headers: e.Headers,
          UploadId: p
        }, function (e) {
          var a = {
            Bucket: n,
            Region: i,
            Key: t.Key,
            UploadId: p
          };
          l[r] = {
            error: e,
            task: a
          }, o(null);
        }), c++;
      }, function (e) {
        if (e) return t(e);

        for (var n = [], i = [], a = 0, o = l.length; a < o; a++) {
          var r = l[a];
          r.task && (r.error ? i.push(r.task) : n.push(r.task));
        }

        return t(null, {
          successList: n,
          errorList: i
        });
      });
    }

    function d(e, t) {
      var n = this,
          i = void 0 === e.SliceSize ? n.options.SliceSize : e.SliceSize,
          a = 0,
          o = 0,
          r = x.throttleOnProgress.call(n, o, e.onProgress),
          s = e.files.length,
          c = e.onFileFinish,
          l = Array(s),
          p = function (e, n, i) {
        r(null, !0), c && c(e, n, i), l[i.Index] = {
          options: i,
          error: e,
          data: n
        }, --s <= 0 && t && t(null, {
          files: l
        });
      },
          u = [];

      x.each(e.files, function (e, t) {
        var n = e.FileSize,
            s = {
          Index: t,
          TaskId: ""
        };
        a += n, x.each(e, function (e, t) {
          "object" != typeof e && "function" != typeof e && (s[t] = e);
        });
        var c = e.onTaskReady;

        e.onTaskReady = function (e) {
          s.TaskId = e, c && c(e);
        };

        var l = 0,
            d = e.onProgress;

        e.onProgress = function (e) {
          o = o - l + e.loaded, l = e.loaded, d && d(e), r({
            loaded: o,
            total: a
          });
        };

        var m = e.onFileFinish,
            f = function (e, t) {
          m && m(e, t), p && p(e, t, s);
        },
            h = n > i ? "sliceUploadFile" : "postObject";

        u.push({
          api: h,
          params: e,
          callback: f
        });
      }), n._addTasks(u);
    }

    function m(e, t) {
      var n = new v(),
          i = this,
          a = e.Bucket,
          o = e.Region,
          r = e.Key,
          s = e.CopySource,
          c = s.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
      if (!c) return void t({
        error: "CopySource format error"
      });
      var l = c[1],
          p = c[3],
          u = decodeURIComponent(c[4]),
          d = void 0 === e.CopySliceSize ? i.options.CopySliceSize : e.CopySliceSize;
      d = Math.max(0, d);
      var m,
          h,
          y = e.CopyChunkSize || this.options.CopyChunkSize,
          C = this.options.CopyChunkParallelLimit,
          k = 0;
      n.on("copy_slice_complete", function (e) {
        i.multipartComplete({
          Bucket: a,
          Region: o,
          Key: r,
          UploadId: e.UploadId,
          Parts: e.PartList
        }, function (e, n) {
          if (e) return h(null, !0), t(e);
          h({
            loaded: m,
            total: m
          }, !0), t(null, n);
        });
      }), n.on("get_copy_data_finish", function (e) {
        g.eachLimit(e.PartList, C, function (t, n) {
          var c = t.PartNumber,
              l = t.CopySourceRange,
              p = t.end - t.start,
              u = 0;
          f.call(i, {
            Bucket: a,
            Region: o,
            Key: r,
            CopySource: s,
            UploadId: e.UploadId,
            PartNumber: c,
            CopySourceRange: l,
            onProgress: function (e) {
              k += e.loaded - u, u = e.loaded, h({
                loaded: k,
                total: m
              });
            }
          }, function (e, i) {
            if (e) return n(e);
            h({
              loaded: k,
              total: m
            }), k += p - u, t.ETag = i.ETag, n(e || null, i);
          });
        }, function (i) {
          if (i) return h(null, !0), t(i);
          n.emit("copy_slice_complete", e);
        });
      }), n.on("get_file_size_finish", function (s) {
        !function () {
          for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], n = 1048576, a = 0; a < t.length && (n = 1024 * t[a] * 1024, !(m / n <= i.options.MaxPartNumber)); a++);

          e.ChunkSize = y = Math.max(y, n);

          for (var o = Math.ceil(m / y), r = [], s = 1; s <= o; s++) {
            var c = (s - 1) * y,
                l = s * y < m ? s * y - 1 : m - 1,
                p = {
              PartNumber: s,
              start: c,
              end: l,
              CopySourceRange: "bytes=" + c + "-" + l
            };
            r.push(p);
          }

          e.PartList = r;
        }();
        var c;

        if (c = "Replaced" === e.Headers["x-cos-metadata-directive"] ? e.Headers : s, c["x-cos-storage-class"] = e.Headers["x-cos-storage-class"] || s["x-cos-storage-class"], c = x.clearKey(c), "ARCHIVE" === s["x-cos-storage-class"] || "DEEP_ARCHIVE" === s["x-cos-storage-class"]) {
          var l = s["x-cos-restore"];
          if (!l || 'ongoing-request="true"' === l) return void t({
            error: "Unrestored archive object is not allowed to be copied"
          });
        }

        delete c["x-cos-copy-source"], delete c["x-cos-metadata-directive"], delete c["x-cos-copy-source-If-Modified-Since"], delete c["x-cos-copy-source-If-Unmodified-Since"], delete c["x-cos-copy-source-If-Match"], delete c["x-cos-copy-source-If-None-Match"], i.multipartInit({
          Bucket: a,
          Region: o,
          Key: r,
          Headers: c
        }, function (i, a) {
          if (i) return t(i);
          e.UploadId = a.UploadId, n.emit("get_copy_data_finish", e);
        });
      }), i.headObject({
        Bucket: l,
        Region: p,
        Key: u
      }, function (a, o) {
        if (a) return void t(a.statusCode && 404 === a.statusCode ? {
          ErrorStatus: u + " Not Exist"
        } : a);
        if (void 0 === (m = e.FileSize = o.headers["content-length"]) || !m) return void t({
          error: 'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'
        });
        if (h = x.throttleOnProgress.call(i, m, e.onProgress), m <= d) e.Headers["x-cos-metadata-directive"] || (e.Headers["x-cos-metadata-directive"] = "Copy"), i.putObjectCopy(e, function (e, n) {
          if (e) return h(null, !0), t(e);
          h({
            loaded: m,
            total: m
          }, !0), t(e, n);
        });else {
          var r = o.headers,
              s = {
            "Cache-Control": r["cache-control"],
            "Content-Disposition": r["content-disposition"],
            "Content-Encoding": r["content-encoding"],
            "Content-Type": r["content-type"],
            Expires: r.expires,
            "x-cos-storage-class": r["x-cos-storage-class"]
          };
          x.each(r, function (e, t) {
            0 === t.indexOf("x-cos-meta-") && t.length > "x-cos-meta-".length && (s[t] = e);
          }), n.emit("get_file_size_finish", s);
        }
      });
    }

    function f(e, t) {
      var n = e.TaskId,
          i = e.Bucket,
          a = e.Region,
          o = e.Key,
          r = e.CopySource,
          s = e.UploadId,
          c = 1 * e.PartNumber,
          l = e.CopySourceRange,
          p = this.options.ChunkRetryTimes + 1,
          u = this;
      g.retry(p, function (t) {
        u.uploadPartCopy({
          TaskId: n,
          Bucket: i,
          Region: a,
          Key: o,
          CopySource: r,
          UploadId: s,
          PartNumber: c,
          CopySourceRange: l,
          onProgress: e.onProgress
        }, function (e, n) {
          t(e || null, n);
        });
      }, function (e, n) {
        return t(e, n);
      });
    }

    var h = n(5),
        g = n(24),
        v = n(4).EventProxy,
        x = n(0),
        y = {
      sliceUploadFile: i,
      abortUploadTask: p,
      uploadFiles: d,
      sliceCopyFile: m
    };

    e.exports.init = function (e, t) {
      t.transferToTaskMethod(y, "sliceUploadFile"), x.each(y, function (t, n) {
        e.prototype[n] = x.apiWrapper(n, t);
      });
    };
  }, function (e, t) {
    var n = function (e, t, n, i) {
      if (i = i || function () {}, !e.length || t <= 0) return i();
      var a = 0,
          o = 0,
          r = 0;
      !function s() {
        if (a >= e.length) return i();

        for (; r < t && o < e.length;) o += 1, r += 1, n(e[o - 1], function (t) {
          t ? (i(t), i = function () {}) : (a += 1, r -= 1, a >= e.length ? i() : s());
        });
      }();
    },
        i = function (e, t, n) {
      var i = function (a) {
        t(function (t, o) {
          t && a < e ? i(a + 1) : n(t, o);
        });
      };

      e < 1 ? n() : i(1);
    },
        a = {
      eachLimit: n,
      retry: i
    };

    e.exports = a;
  }]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var vodUtil = {
  getType: function getType(a) {
    if (a === null) {
      return "null";
    }

    if (a === undefined) {
      return "undefined";
    }

    return Object.prototype.toString.call(a).slice(8, -1).toLowerCase();
  },
  isFunction: function isFunction(para) {
    if (para && this.getType(para) !== "function") {
      return false;
    }

    return true;
  },
  getFileMessage: function getFileMessage(file, fileName) {
    var fileMsg = {};
    fileMsg.tempFilePath = file.tempFilePath;
    fileMsg.type = file.tempFilePath.substring(file.tempFilePath.lastIndexOf(".") + 1);

    if (typeof fileName === "string") {
      fileMsg.name = fileName;
    } else {
      fileMsg.name = "来自小程序";
    }

    fileMsg.size = file.size;
    return fileMsg;
  },
  noop: function noop() {}
};
module.exports = vodUtil;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var UploaderEvent = {
  video_progress: "video_progress",
  media_progress: "media_progress"
};
exports.UploaderEvent = UploaderEvent;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = $getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];

  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);

  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) copy[i] = arr[i];

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Uploader = __webpack_require__(0);

var pkg = __webpack_require__(6);

var VodReportEvent = {
  report_prepare: "report_prepare",
  report_apply: "report_apply",
  report_cos_upload: "report_cos_upload",
  report_commit: "report_commit",
  report_done: "report_done"
};
var ReqType = {
  prepare: 10000,
  apply: 10001,
  cos_upload: 20001,
  commit: 10002,
  done: 40001
};
exports.reportEvent = VodReportEvent;
exports.VodReporter = (_temp = /*#__PURE__*/function () {
  // only partial data when created
  function _temp(uploader, options) {
    _classCallCheck(this, _temp);

    _defineProperty(this, "uploader", undefined);

    _defineProperty(this, "options", undefined);

    _defineProperty(this, "baseReportData", {
      version: pkg.version,
      platform: 4000,
      device: function () {
        var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
            brand = _wx$getSystemInfoSync.brand,
            model = _wx$getSystemInfoSync.model,
            version = _wx$getSystemInfoSync.version;

        return "".concat(brand, "-").concat(model, "-wx").concat(version);
      }()
    });

    _defineProperty(this, "reportUrl", "https://vodreport.qcloud.com/ugcupload_new");

    this.uploader = uploader;
    this.options = options;
    this.init();
  }

  _createClass(_temp, [{
    key: "init",
    value: function init() {
      this.uploader.on(VodReportEvent.report_prepare, this.onPrepare.bind(this));
      this.uploader.on(VodReportEvent.report_apply, this.onApply.bind(this));
      this.uploader.on(VodReportEvent.report_cos_upload, this.onCosUpload.bind(this));
      this.uploader.on(VodReportEvent.report_commit, this.onCommit.bind(this));
      this.uploader.on(VodReportEvent.report_done, this.onDone.bind(this));
    } // PrepareUpload

  }, {
    key: "onPrepare",
    value: function onPrepare(reportObj) {
      var uploader = this.uploader;

      try {
        var customReportData = {
          appId: uploader.appId,
          reqType: ReqType.prepare,
          errCode: 0,
          vodErrCode: 0,
          errMsg: "",
          reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
          reqTime: Number(reportObj.requestStartTime)
        };

        if (reportObj.err) {
          customReportData.errCode = 1;
          customReportData.vodErrCode = reportObj.err.code;
          customReportData.errMsg = reportObj.err.message;
        }

        if (reportObj.data) {
          customReportData.cosRegion = reportObj.data.region;
        }

        this.report(customReportData);
      } catch (e) {
        console.log("onPrepare", e);
      }
    } // ApplyUploadUGC

  }, {
    key: "onApply",
    value: function onApply(reportObj) {
      try {
        var uploader = this.uploader;

        if (!uploader.videoFileMessage) {
          return;
        }

        var file = uploader.videoFileMessage;
        Object.assign(this.baseReportData, {
          appId: uploader.appId,
          fileSize: file.size,
          fileName: file.name,
          fileType: file.type,
          vodSessionKey: uploader.vodSessionKey,
          reqKey: uploader.reqKey,
          reportId: uploader.reportId
        });
        var customReportData = {
          reqType: ReqType.apply,
          errCode: 0,
          vodErrCode: 0,
          errMsg: "",
          reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
          reqTime: Number(reportObj.requestStartTime)
        };

        if (reportObj.err) {
          customReportData.errCode = 1;
          customReportData.vodErrCode = reportObj.err.code;
          customReportData.errMsg = reportObj.err.message;
        }

        if (reportObj.data) {
          this.baseReportData.cosRegion = reportObj.data.storageRegion;
        }

        this.report(customReportData);
      } catch (e) {
        console.error("onApply", e);
      }
    } // upload to cos

  }, {
    key: "onCosUpload",
    value: function onCosUpload(reportObj) {
      try {
        var customReportData = {
          reqType: ReqType.cos_upload,
          errCode: 0,
          cosErrCode: "",
          errMsg: "",
          reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
          reqTime: Number(reportObj.requestStartTime)
        };

        if (reportObj.err) {
          customReportData.errCode = 1;
          customReportData.cosErrCode = reportObj.err.error ? reportObj.err.error.Code : reportObj.err;

          if (reportObj.err && reportObj.err.error === "error") {
            customReportData.cosErrCode = "cors error";
          }

          customReportData.errMsg = JSON.stringify(reportObj.err);
        }

        this.report(customReportData);
      } catch (e) {
        console.error("onCosUpload", e);
      }
    } // CommitUploadUGC

  }, {
    key: "onCommit",
    value: function onCommit(reportObj) {
      try {
        var customReportData = {
          reqType: ReqType.commit,
          errCode: 0,
          vodErrCode: 0,
          errMsg: "",
          reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
          reqTime: Number(reportObj.requestStartTime)
        };

        if (reportObj.err) {
          customReportData.errCode = 1;
          customReportData.vodErrCode = reportObj.err.code;
          customReportData.errMsg = reportObj.err.message;
        }

        if (reportObj.data) {
          this.baseReportData.fileId = reportObj.data.fileId;
        }

        this.report(customReportData);
      } catch (e) {
        console.error("onCommit", e);
      }
    }
  }, {
    key: "onDone",
    value: function onDone(reportObj) {
      try {
        var customReportData = {
          reqType: ReqType.done,
          errCode: reportObj.err && reportObj.err.code,
          reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
          reqTime: Number(reportObj.requestStartTime)
        };
        this.report(customReportData);
      } catch (e) {
        console.error("onDone", e);
      }
    }
  }, {
    key: "report",
    value: function report(reportData) {
      reportData = _objectSpread(_objectSpread({}, this.baseReportData), reportData);
      this.send(reportData);
    }
  }, {
    key: "send",
    value: function send(reportData) {
      if (false) {}

      console.log("上报: ", reportData);
      wx.request({
        method: "POST",
        url: this.reportUrl,
        data: reportData,
        dataType: "json",
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  }]);

  return _temp;
}(), _temp);

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vod-wx-sdk-v2\",\"version\":\"1.1.0\",\"description\":\"Tencent cloud vod sdk for wechat mini program\",\"main\":\"dist/vod-wx-sdk-v2.js\",\"miniprogram\":\"dist\",\"scripts\":{\"build\":\"webpack --config webpack.config.js\",\"dev\":\"webpack --config webpack.dev.js --watch\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/tencentyun/vod-wx-sdk-v2.git\"},\"keywords\":[\"vod\",\"tencentcloud\",\"qcloud\",\"wechat\"],\"author\":\"alsotang <alsotang@gmail.com>\",\"contributors\":[\"_windmill <l20122005@live.com>\"],\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/tencentyun/vod-wx-sdk-v2/issues\"},\"homepage\":\"https://github.com/tencentyun/vod-wx-sdk-v2#readme\",\"devDependencies\":{\"@babel/core\":\"^7.12.10\",\"@babel/plugin-proposal-class-properties\":\"^7.12.1\",\"@babel/preset-env\":\"^7.12.11\",\"babel-loader\":\"^8.2.2\",\"eslint\":\"^5.16.0\",\"eslint-config-airbnb-base\":\"^13.2.0\",\"eslint-config-prettier\":\"^5.1.0\",\"eslint-plugin-import\":\"^2.22.1\",\"eslint-plugin-prettier\":\"^3.3.1\",\"webpack\":\"^4.46.0\",\"webpack-cli\":\"^3.3.12\"},\"dependencies\":{\"cos-wx-sdk-v5\":\"^1.0.5\"}}");

/***/ })
/******/ ])));