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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COS = __webpack_require__(1);

var vodUtil = __webpack_require__(3);

var _require = __webpack_require__(4),
    UploaderEvent = _require.UploaderEvent;

var _require2 = __webpack_require__(5),
    EventEmitter = _require2.EventEmitter;

var COS_REGION_KEY = "COS_REGION_KEY";

var _require3 = __webpack_require__(6),
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

    self.reportId = opts.reportId || '';
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


    wx.onNetworkStatusChange(function (res) {
      if (res.isConnected) {
        _this.requestRegion();
      }
    });
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
          url: "https://vod2.qcloud.com/v3/index.php?Action=ApplyUploadUGC",
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
      var cos = new COS({
        getAuthorization: function getAuthorization(options, callback) {
          callback({
            TmpSecretId: applyData.tempCertificate.secretId,
            TmpSecretKey: applyData.tempCertificate.secretKey,
            XCosSecurityToken: applyData.tempCertificate.token,
            StartTime: applyData.timestamp,
            ExpiredTime: applyData.tempCertificate.expiredTime
          });
        }
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
                  message: 'cos error'
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
        url: "https://vod2.qcloud.com/v3/index.php?Action=CommitUploadUGC",
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
                coverUrl: res.cover && res.cover.url
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

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, a) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = a() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    function a(i) {
      if (n[i]) return n[i].exports;
      var o = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(o.exports, o, o.exports, a), o.l = !0, o.exports;
    }

    var n = {};
    return a.m = e, a.c = n, a.i = function (e) {
      return e;
    }, a.d = function (e, n, i) {
      a.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }, a.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return a.d(n, "a", n), n;
    }, a.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }, a.p = "D:\\code\\cos-wx-sdk-v5\\demo\\lib", a(a.s = 5);
  }([function (e, a, n) {
    "use strict";

    function i(e) {
      return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
    }

    function o(e) {
      return l(e, function (e) {
        return "object" == _typeof(e) ? o(e) : e;
      });
    }

    function s(e, a) {
      return p(a, function (n, i) {
        e[i] = a[i];
      }), e;
    }

    function t(e) {
      return e instanceof Array;
    }

    function c(e, a) {
      for (var n = !1, i = 0; i < e.length; i++) {
        if (a === e[i]) {
          n = !0;
          break;
        }
      }

      return n;
    }

    function r(e) {
      return t(e) ? e : [e];
    }

    function p(e, a) {
      for (var n in e) {
        e.hasOwnProperty(n) && a(e[n], n);
      }
    }

    function l(e, a) {
      var n = t(e) ? [] : {};

      for (var i in e) {
        e.hasOwnProperty(i) && (n[i] = a(e[i], i));
      }

      return n;
    }

    function u(e, a) {
      var n = t(e),
          i = n ? [] : {};

      for (var o in e) {
        e.hasOwnProperty(o) && a(e[o], o) && (n ? i.push(e[o]) : i[o] = e[o]);
      }

      return i;
    }

    var d = n(9),
        m = n(7),
        x = n(11),
        f = n(8),
        v = n(6),
        h = v.btoa,
        g = wx.getFileSystemManager(),
        b = function b(e) {
      e = e || {};
      var a,
          n = e.SecretId,
          s = e.SecretKey,
          t = e.KeyTime,
          c = (e.method || e.Method || "get").toLowerCase(),
          r = o(e.Query || e.params || {}),
          p = o(e.Headers || e.headers || {}),
          l = e.Key || "";
      if (e.UseRawKey ? a = e.Pathname || e.pathname || "/" + l : (a = e.Pathname || e.pathname || l, 0 !== a.indexOf("/") && (a = "/" + a)), !n) return console.error("missing param SecretId");
      if (!s) return console.error("missing param SecretKey");

      var u = function u(e) {
        var a = [];

        for (var n in e) {
          e.hasOwnProperty(n) && a.push(n);
        }

        return a.sort(function (e, a) {
          return e = e.toLowerCase(), a = a.toLowerCase(), e === a ? 0 : e > a ? 1 : -1;
        });
      },
          d = function d(e) {
        var a,
            n,
            o,
            s = [],
            t = u(e);

        for (a = 0; a < t.length; a++) {
          n = t[a], o = void 0 === e[n] || null === e[n] ? "" : "" + e[n], n = n.toLowerCase(), n = i(n), o = i(o) || "", s.push(n + "=" + o);
        }

        return s.join("&");
      },
          x = Math.round(B(e.SystemClockOffset) / 1e3) - 1,
          f = x,
          v = e.Expires || e.expires;

      f += void 0 === v ? 900 : 1 * v || 0;
      var h = n,
          g = t || x + ";" + f,
          b = t || x + ";" + f,
          y = u(p).join(";").toLowerCase(),
          k = u(r).join(";").toLowerCase(),
          w = m.HmacSHA1(b, s).toString(),
          C = [c, a, d(r), d(p), ""].join("\n"),
          S = ["sha1", g, m.SHA1(C).toString(), ""].join("\n");
      return ["q-sign-algorithm=sha1", "q-ak=" + h, "q-sign-time=" + g, "q-key-time=" + b, "q-header-list=" + y, "q-url-param-list=" + k, "q-signature=" + m.HmacSHA1(S, w).toString()].join("&");
    },
        y = function y() {},
        k = function k(e) {
      var a = {};

      for (var n in e) {
        e.hasOwnProperty(n) && void 0 !== e[n] && null !== e[n] && (a[n] = e[n]);
      }

      return a;
    },
        w = function w(e, a, n, i) {
      e ? g.readFile({
        filePath: e,
        position: a,
        length: n - a,
        success: function success(e) {
          i(e.data);
        },
        fail: function fail() {
          i(null);
        }
      }) : i(null);
    },
        C = function C(e, a, n) {
      n = n || y, e && a && a instanceof ArrayBuffer ? I.getFileMd5(a, function (e, a) {
        n(a);
      }, onProgress) : n();
    },
        S = function S(e) {
      var a,
          n = e.byteLength,
          i = d.getCtx();

      for (a = 0; a < n; a += 1024) {
        var o = e.slice(a, a + 1024),
            s = function (e) {
          var a,
              n = new Uint8Array(e),
              i = n.length,
              o = "";

          for (a = 0; a < i; a++) {
            o += String.fromCharCode(n[a]);
          }

          return o;
        }(o),
            t = function (e) {
          var a;

          try {
            return decodeURIComponent(escape(e));
          } catch (n) {
            if ((a = n) instanceof URIError) return e;
            throw a;
          }
        }(s);

        i.update(t, !0);
      }

      return i.digest("hex");
    },
        T = function T(e) {
      return e instanceof ArrayBuffer ? S(e) : d.getCtx().update(e, !0).digest("hex");
    },
        _ = function _(e) {
      var a,
          n,
          i,
          o = "";

      for (a = 0, n = e.length / 2; a < n; a++) {
        i = parseInt(e[2 * a] + e[2 * a + 1], 16), o += String.fromCharCode(i);
      }

      return h(o);
    },
        A = function A() {
      var e = function e() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      };

      return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
    },
        j = function j(e, a) {
      var n = a.Bucket,
          i = a.Region,
          o = a.Key;

      if (e.indexOf("Bucket") > -1 || "deleteMultipleObject" === e || "multipartList" === e || "listObjectVersions" === e) {
        if (!n) return "Bucket";
        if (!i) return "Region";
      } else if (e.indexOf("Object") > -1 || e.indexOf("multipart") > -1 || "sliceUploadFile" === e || "abortUploadTask" === e) {
        if (!n) return "Bucket";
        if (!i) return "Region";
        if (!o) return "Key";
      }

      return !1;
    },
        R = function R(e, a) {
      if (a = s({}, a), "getAuth" !== e && "getV4Auth" !== e && "getObjectUrl" !== e) {
        var n = a.Headers || {};

        if (a && "object" == _typeof(a)) {
          !function () {
            for (var e in a) {
              a.hasOwnProperty(e) && e.indexOf("x-cos-") > -1 && (n[e] = a[e]);
            }
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
          I.each(i, function (e, i) {
            void 0 !== a[e] && (n[i] = a[e]);
          }), a.Headers = k(n);
        }
      }

      return a;
    },
        E = function E(e, a) {
      return function (n, i) {
        "function" == typeof n && (i = n, n = {}), n = R(e, n);

        var o = function o(e) {
          return e && e.headers && (e.headers["x-cos-version-id"] && (e.VersionId = e.headers["x-cos-version-id"]), e.headers["x-cos-delete-marker"] && (e.DeleteMarker = e.headers["x-cos-delete-marker"])), e;
        },
            s = function s(e, a) {
          i && i(o(e), o(a));
        };

        if ("getService" !== e && "abortUploadTask" !== e) {
          var t;
          if (t = j(e, n)) return void s({
            error: "missing param " + t
          });

          if (n.Region) {
            if (n.Region.indexOf("cos.") > -1) return void s({
              error: 'param Region should not be start with "cos."'
            });
            if (!/^([a-z\d-]+)$/.test(n.Region)) return void s({
              error: "Region format error."
            });
            this.options.CompatibilityMode || -1 !== n.Region.indexOf("-") || "yfb" === n.Region || "default" === n.Region || console.warn("warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224");
          }

          if (n.Bucket) {
            if (!/^([a-z\d-]+)-(\d+)$/.test(n.Bucket)) if (n.AppId) n.Bucket = n.Bucket + "-" + n.AppId;else {
              if (!this.options.AppId) return void s({
                error: 'Bucket should format as "test-1250000000".'
              });
              n.Bucket = n.Bucket + "-" + this.options.AppId;
            }
            n.AppId && (console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).'), delete n.AppId);
          }

          n.Key && "/" === n.Key.substr(0, 1) && (n.Key = n.Key.substr(1));
        }

        var c = a.call(this, n, s);
        if ("getAuth" === e || "getObjectUrl" === e) return c;
      };
    },
        N = function N(e, a) {
      function n() {
        if (o = 0, a && "function" == typeof a) {
          i = Date.now();
          var n,
              s = Math.max(0, Math.round((c - t) / ((i - r) / 1e3) * 100) / 100);
          n = 0 === c && 0 === e ? 1 : Math.round(c / e * 100) / 100 || 0, r = i, t = c;

          try {
            a({
              loaded: c,
              total: e,
              speed: s,
              percent: n
            });
          } catch (e) {}
        }
      }

      var i,
          o,
          s = this,
          t = 0,
          c = 0,
          r = Date.now();
      return function (a, i) {
        if (a && (c = a.loaded, e = a.total), i) clearTimeout(o), n();else {
          if (o) return;
          o = setTimeout(n, s.options.ProgressInterval);
        }
      };
    },
        P = function P(e, a, n) {
      return "postObject" === e ? void n() : a.FilePath ? void g.stat({
        path: a.FilePath,
        success: function success(e) {
          var i = e.stats;
          a.FileStat = i, a.FileStat.FilePath = a.FilePath;
          var o = i.isDirectory() ? 0 : i.size;
          a.ContentLength = o = o || 0, n(null, o);
        },
        fail: function fail(e) {
          n(e);
        }
      }) : void n({
        error: "missing param FilePath"
      });
    },
        B = function B(e) {
      return Date.now() + (e || 0);
    },
        I = {
      noop: y,
      formatParams: R,
      apiWrapper: E,
      xml2json: x,
      json2xml: f,
      md5: d,
      clearKey: k,
      fileSlice: w,
      getFileMd5: T,
      getBodyMd5: C,
      binaryBase64: _,
      extend: s,
      isArray: t,
      isInArray: c,
      makeArray: r,
      each: p,
      map: l,
      filter: u,
      clone: o,
      uuid: A,
      camSafeUrlEncode: i,
      throttleOnProgress: N,
      getFileSize: P,
      getSkewTime: B,
      getAuth: b,
      isBrowser: !0
    };

    e.exports = I;
  }, function (e, a) {
    function n(e, a) {
      for (var n in e) {
        a[n] = e[n];
      }
    }

    function i(e, a) {
      function i() {}

      var o = e.prototype;

      if (Object.create) {
        var s = Object.create(a.prototype);
        o.__proto__ = s;
      }

      o instanceof a || (i.prototype = a.prototype, i = new i(), n(o, i), e.prototype = o = i), o.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), o.constructor = e);
    }

    function o(e, a) {
      if (a instanceof Error) var n = a;else n = this, Error.call(this, oe[e]), this.message = oe[e], Error.captureStackTrace && Error.captureStackTrace(this, o);
      return n.code = e, a && (this.message = this.message + ": " + a), n;
    }

    function s() {}

    function t(e, a) {
      this._node = e, this._refresh = a, c(this);
    }

    function c(e) {
      var a = e._node._inc || e._node.ownerDocument._inc;

      if (e._inc != a) {
        var i = e._refresh(e._node);

        L(e, "length", i.length), n(i, e), e._inc = a;
      }
    }

    function r() {}

    function p(e, a) {
      for (var n = e.length; n--;) {
        if (e[n] === a) return n;
      }
    }

    function l(e, a, n, i) {
      if (i ? a[p(a, i)] = n : a[a.length++] = n, e) {
        n.ownerElement = e;
        var o = e.ownerDocument;
        o && (i && g(o, e, i), h(o, e, n));
      }
    }

    function u(e, a, n) {
      var i = p(a, n);
      if (!(i >= 0)) throw o(te, new Error(e.tagName + "@" + n));

      for (var s = a.length - 1; i < s;) {
        a[i] = a[++i];
      }

      if (a.length = s, e) {
        var t = e.ownerDocument;
        t && (g(t, e, n), n.ownerElement = null);
      }
    }

    function d(e) {
      if (this._features = {}, e) for (var a in e) {
        this._features = e[a];
      }
    }

    function m() {}

    function x(e) {
      return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
    }

    function f(e, a) {
      if (a(e)) return !0;
      if (e = e.firstChild) do {
        if (f(e, a)) return !0;
      } while (e = e.nextSibling);
    }

    function v() {}

    function h(e, a, n) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (a._nsMap[n.prefix ? n.localName : ""] = n.value);
    }

    function g(e, a, n, i) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete a._nsMap[n.prefix ? n.localName : ""];
    }

    function b(e, a, n) {
      if (e && e._inc) {
        e._inc++;
        var i = a.childNodes;
        if (n) i[i.length++] = n;else {
          for (var o = a.firstChild, s = 0; o;) {
            i[s++] = o, o = o.nextSibling;
          }

          i.length = s;
        }
      }
    }

    function y(e, a) {
      var n = a.previousSibling,
          i = a.nextSibling;
      return n ? n.nextSibling = i : e.firstChild = i, i ? i.previousSibling = n : e.lastChild = n, b(e.ownerDocument, e), a;
    }

    function k(e, a, n) {
      var i = a.parentNode;

      if (i && i.removeChild(a), a.nodeType === ae) {
        var o = a.firstChild;
        if (null == o) return a;
        var s = a.lastChild;
      } else o = s = a;

      var t = n ? n.previousSibling : e.lastChild;
      o.previousSibling = t, s.nextSibling = n, t ? t.nextSibling = o : e.firstChild = o, null == n ? e.lastChild = s : n.previousSibling = s;

      do {
        o.parentNode = e;
      } while (o !== s && (o = o.nextSibling));

      return b(e.ownerDocument || e, e), a.nodeType == ae && (a.firstChild = a.lastChild = null), a;
    }

    function w(e, a) {
      var n = a.parentNode;

      if (n) {
        var i = e.lastChild;
        n.removeChild(a);
        var i = e.lastChild;
      }

      var i = e.lastChild;
      return a.parentNode = e, a.previousSibling = i, a.nextSibling = null, i ? i.nextSibling = a : e.firstChild = a, e.lastChild = a, b(e.ownerDocument, e, a), a;
    }

    function C() {
      this._nsMap = {};
    }

    function S() {}

    function T() {}

    function _() {}

    function A() {}

    function j() {}

    function R() {}

    function E() {}

    function N() {}

    function P() {}

    function B() {}

    function I() {}

    function D() {}

    function O(e, a) {
      var n = [],
          i = 9 == this.nodeType ? this.documentElement : this,
          o = i.prefix,
          s = i.namespaceURI;

      if (s && null == o) {
        var o = i.lookupPrefix(s);
        if (null == o) var t = [{
          namespace: s,
          prefix: null
        }];
      }

      return z(this, n, e, a, t), n.join("");
    }

    function U(e, a, n) {
      var i = e.prefix || "",
          o = e.namespaceURI;
      if (!i && !o) return !1;
      if ("xml" === i && "http://www.w3.org/XML/1998/namespace" === o || "http://www.w3.org/2000/xmlns/" == o) return !1;

      for (var s = n.length; s--;) {
        var t = n[s];
        if (t.prefix == i) return t.namespace != o;
      }

      return !0;
    }

    function z(e, a, n, i, o) {
      if (i) {
        if (!(e = i(e))) return;
        if ("string" == typeof e) return void a.push(e);
      }

      switch (e.nodeType) {
        case G:
          o || (o = []);
          var s = (o.length, e.attributes),
              t = s.length,
              c = e.firstChild,
              r = e.tagName;
          n = K === e.namespaceURI || n, a.push("<", r);

          for (var p = 0; p < t; p++) {
            var l = s.item(p);
            "xmlns" == l.prefix ? o.push({
              prefix: l.localName,
              namespace: l.value
            }) : "xmlns" == l.nodeName && o.push({
              prefix: "",
              namespace: l.value
            });
          }

          for (var p = 0; p < t; p++) {
            var l = s.item(p);

            if (U(l, n, o)) {
              var u = l.prefix || "",
                  d = l.namespaceURI,
                  m = u ? " xmlns:" + u : " xmlns";
              a.push(m, '="', d, '"'), o.push({
                prefix: u,
                namespace: d
              });
            }

            z(l, a, n, i, o);
          }

          if (U(e, n, o)) {
            var u = e.prefix || "",
                d = e.namespaceURI,
                m = u ? " xmlns:" + u : " xmlns";
            a.push(m, '="', d, '"'), o.push({
              prefix: u,
              namespace: d
            });
          }

          if (c || n && !/^(?:meta|link|img|br|hr|input)$/i.test(r)) {
            if (a.push(">"), n && /^script$/i.test(r)) for (; c;) {
              c.data ? a.push(c.data) : z(c, a, n, i, o), c = c.nextSibling;
            } else for (; c;) {
              z(c, a, n, i, o), c = c.nextSibling;
            }
            a.push("</", r, ">");
          } else a.push("/>");

          return;

        case Y:
        case ae:
          for (var c = e.firstChild; c;) {
            z(c, a, n, i, o), c = c.nextSibling;
          }

          return;

        case V:
          return a.push(" ", e.name, '="', e.value.replace(/[<&"]/g, x), '"');

        case X:
          return a.push(e.data.replace(/[<&]/g, x));

        case $:
          return a.push("<![CDATA[", e.data, "]]>");

        case J:
          return a.push("\x3c!--", e.data, "--\x3e");

        case ee:
          var f = e.publicId,
              v = e.systemId;
          if (a.push("<!DOCTYPE ", e.name), f) a.push(' PUBLIC "', f), v && "." != v && a.push('" "', v), a.push('">');else if (v && "." != v) a.push(' SYSTEM "', v, '">');else {
            var h = e.internalSubset;
            h && a.push(" [", h, "]"), a.push(">");
          }
          return;

        case Z:
          return a.push("<?", e.target, " ", e.data, "?>");

        case W:
          return a.push("&", e.nodeName, ";");

        default:
          a.push("??", e.nodeName);
      }
    }

    function M(e, a, n) {
      var i;

      switch (a.nodeType) {
        case G:
          i = a.cloneNode(!1), i.ownerDocument = e;

        case ae:
          break;

        case V:
          n = !0;
      }

      if (i || (i = a.cloneNode(!1)), i.ownerDocument = e, i.parentNode = null, n) for (var o = a.firstChild; o;) {
        i.appendChild(M(e, o, n)), o = o.nextSibling;
      }
      return i;
    }

    function F(e, a, n) {
      var i = new a.constructor();

      for (var o in a) {
        var t = a[o];
        "object" != _typeof(t) && t != i[o] && (i[o] = t);
      }

      switch (a.childNodes && (i.childNodes = new s()), i.ownerDocument = e, i.nodeType) {
        case G:
          var c = a.attributes,
              p = i.attributes = new r(),
              l = c.length;
          p._ownerElement = i;

          for (var u = 0; u < l; u++) {
            i.setAttributeNode(F(e, c.item(u), !0));
          }

          break;

        case V:
          n = !0;
      }

      if (n) for (var d = a.firstChild; d;) {
        i.appendChild(F(e, d, n)), d = d.nextSibling;
      }
      return i;
    }

    function L(e, a, n) {
      e[a] = n;
    }

    function q(e) {
      switch (e.nodeType) {
        case G:
        case ae:
          var a = [];

          for (e = e.firstChild; e;) {
            7 !== e.nodeType && 8 !== e.nodeType && a.push(q(e)), e = e.nextSibling;
          }

          return a.join("");

        default:
          return e.nodeValue;
      }
    }

    var K = "http://www.w3.org/1999/xhtml",
        H = {},
        G = H.ELEMENT_NODE = 1,
        V = H.ATTRIBUTE_NODE = 2,
        X = H.TEXT_NODE = 3,
        $ = H.CDATA_SECTION_NODE = 4,
        W = H.ENTITY_REFERENCE_NODE = 5,
        Q = H.ENTITY_NODE = 6,
        Z = H.PROCESSING_INSTRUCTION_NODE = 7,
        J = H.COMMENT_NODE = 8,
        Y = H.DOCUMENT_NODE = 9,
        ee = H.DOCUMENT_TYPE_NODE = 10,
        ae = H.DOCUMENT_FRAGMENT_NODE = 11,
        ne = H.NOTATION_NODE = 12,
        ie = {},
        oe = {},
        se = (ie.INDEX_SIZE_ERR = (oe[1] = "Index size error", 1), ie.DOMSTRING_SIZE_ERR = (oe[2] = "DOMString size error", 2), ie.HIERARCHY_REQUEST_ERR = (oe[3] = "Hierarchy request error", 3)),
        te = (ie.WRONG_DOCUMENT_ERR = (oe[4] = "Wrong document", 4), ie.INVALID_CHARACTER_ERR = (oe[5] = "Invalid character", 5), ie.NO_DATA_ALLOWED_ERR = (oe[6] = "No data allowed", 6), ie.NO_MODIFICATION_ALLOWED_ERR = (oe[7] = "No modification allowed", 7), ie.NOT_FOUND_ERR = (oe[8] = "Not found", 8)),
        ce = (ie.NOT_SUPPORTED_ERR = (oe[9] = "Not supported", 9), ie.INUSE_ATTRIBUTE_ERR = (oe[10] = "Attribute in use", 10));
    ie.INVALID_STATE_ERR = (oe[11] = "Invalid state", 11), ie.SYNTAX_ERR = (oe[12] = "Syntax error", 12), ie.INVALID_MODIFICATION_ERR = (oe[13] = "Invalid modification", 13), ie.NAMESPACE_ERR = (oe[14] = "Invalid namespace", 14), ie.INVALID_ACCESS_ERR = (oe[15] = "Invalid access", 15);
    o.prototype = Error.prototype, n(ie, o), s.prototype = {
      length: 0,
      item: function item(e) {
        return this[e] || null;
      },
      toString: function toString(e, a) {
        for (var n = [], i = 0; i < this.length; i++) {
          z(this[i], n, e, a);
        }

        return n.join("");
      }
    }, t.prototype.item = function (e) {
      return c(this), this[e];
    }, i(t, s), r.prototype = {
      length: 0,
      item: s.prototype.item,
      getNamedItem: function getNamedItem(e) {
        for (var a = this.length; a--;) {
          var n = this[a];
          if (n.nodeName == e) return n;
        }
      },
      setNamedItem: function setNamedItem(e) {
        var a = e.ownerElement;
        if (a && a != this._ownerElement) throw new o(ce);
        var n = this.getNamedItem(e.nodeName);
        return l(this._ownerElement, this, e, n), n;
      },
      setNamedItemNS: function setNamedItemNS(e) {
        var a,
            n = e.ownerElement;
        if (n && n != this._ownerElement) throw new o(ce);
        return a = this.getNamedItemNS(e.namespaceURI, e.localName), l(this._ownerElement, this, e, a), a;
      },
      removeNamedItem: function removeNamedItem(e) {
        var a = this.getNamedItem(e);
        return u(this._ownerElement, this, a), a;
      },
      removeNamedItemNS: function removeNamedItemNS(e, a) {
        var n = this.getNamedItemNS(e, a);
        return u(this._ownerElement, this, n), n;
      },
      getNamedItemNS: function getNamedItemNS(e, a) {
        for (var n = this.length; n--;) {
          var i = this[n];
          if (i.localName == a && i.namespaceURI == e) return i;
        }

        return null;
      }
    }, d.prototype = {
      hasFeature: function hasFeature(e, a) {
        var n = this._features[e.toLowerCase()];

        return !(!n || a && !(a in n));
      },
      createDocument: function createDocument(e, a, n) {
        var i = new v();

        if (i.implementation = this, i.childNodes = new s(), i.doctype = n, n && i.appendChild(n), a) {
          var o = i.createElementNS(e, a);
          i.appendChild(o);
        }

        return i;
      },
      createDocumentType: function createDocumentType(e, a, n) {
        var i = new R();
        return i.name = e, i.nodeName = e, i.publicId = a, i.systemId = n, i;
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
      insertBefore: function insertBefore(e, a) {
        return k(this, e, a);
      },
      replaceChild: function replaceChild(e, a) {
        this.insertBefore(e, a), a && this.removeChild(a);
      },
      removeChild: function removeChild(e) {
        return y(this, e);
      },
      appendChild: function appendChild(e) {
        return this.insertBefore(e, null);
      },
      hasChildNodes: function hasChildNodes() {
        return null != this.firstChild;
      },
      cloneNode: function cloneNode(e) {
        return F(this.ownerDocument || this, this, e);
      },
      normalize: function normalize() {
        for (var e = this.firstChild; e;) {
          var a = e.nextSibling;
          a && a.nodeType == X && e.nodeType == X ? (this.removeChild(a), e.appendData(a.data)) : (e.normalize(), e = a);
        }
      },
      isSupported: function isSupported(e, a) {
        return this.ownerDocument.implementation.hasFeature(e, a);
      },
      hasAttributes: function hasAttributes() {
        return this.attributes.length > 0;
      },
      lookupPrefix: function lookupPrefix(e) {
        for (var a = this; a;) {
          var n = a._nsMap;
          if (n) for (var i in n) {
            if (n[i] == e) return i;
          }
          a = a.nodeType == V ? a.ownerDocument : a.parentNode;
        }

        return null;
      },
      lookupNamespaceURI: function lookupNamespaceURI(e) {
        for (var a = this; a;) {
          var n = a._nsMap;
          if (n && e in n) return n[e];
          a = a.nodeType == V ? a.ownerDocument : a.parentNode;
        }

        return null;
      },
      isDefaultNamespace: function isDefaultNamespace(e) {
        return null == this.lookupPrefix(e);
      }
    }, n(H, m), n(H, m.prototype), v.prototype = {
      nodeName: "#document",
      nodeType: Y,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function insertBefore(e, a) {
        if (e.nodeType == ae) {
          for (var n = e.firstChild; n;) {
            var i = n.nextSibling;
            this.insertBefore(n, a), n = i;
          }

          return e;
        }

        return null == this.documentElement && e.nodeType == G && (this.documentElement = e), k(this, e, a), e.ownerDocument = this, e;
      },
      removeChild: function removeChild(e) {
        return this.documentElement == e && (this.documentElement = null), y(this, e);
      },
      importNode: function importNode(e, a) {
        return M(this, e, a);
      },
      getElementById: function getElementById(e) {
        var a = null;
        return f(this.documentElement, function (n) {
          if (n.nodeType == G && n.getAttribute("id") == e) return a = n, !0;
        }), a;
      },
      createElement: function createElement(e) {
        var a = new C();
        return a.ownerDocument = this, a.nodeName = e, a.tagName = e, a.childNodes = new s(), (a.attributes = new r())._ownerElement = a, a;
      },
      createDocumentFragment: function createDocumentFragment() {
        var e = new B();
        return e.ownerDocument = this, e.childNodes = new s(), e;
      },
      createTextNode: function createTextNode(e) {
        var a = new _();
        return a.ownerDocument = this, a.appendData(e), a;
      },
      createComment: function createComment(e) {
        var a = new A();
        return a.ownerDocument = this, a.appendData(e), a;
      },
      createCDATASection: function createCDATASection(e) {
        var a = new j();
        return a.ownerDocument = this, a.appendData(e), a;
      },
      createProcessingInstruction: function createProcessingInstruction(e, a) {
        var n = new I();
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = a, n;
      },
      createAttribute: function createAttribute(e) {
        var a = new S();
        return a.ownerDocument = this, a.name = e, a.nodeName = e, a.localName = e, a.specified = !0, a;
      },
      createEntityReference: function createEntityReference(e) {
        var a = new P();
        return a.ownerDocument = this, a.nodeName = e, a;
      },
      createElementNS: function createElementNS(e, a) {
        var n = new C(),
            i = a.split(":"),
            o = n.attributes = new r();
        return n.childNodes = new s(), n.ownerDocument = this, n.nodeName = a, n.tagName = a, n.namespaceURI = e, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = a, o._ownerElement = n, n;
      },
      createAttributeNS: function createAttributeNS(e, a) {
        var n = new S(),
            i = a.split(":");
        return n.ownerDocument = this, n.nodeName = a, n.name = a, n.namespaceURI = e, n.specified = !0, 2 == i.length ? (n.prefix = i[0], n.localName = i[1]) : n.localName = a, n;
      }
    }, i(v, m), C.prototype = {
      nodeType: G,
      hasAttribute: function hasAttribute(e) {
        return null != this.getAttributeNode(e);
      },
      getAttribute: function getAttribute(e) {
        var a = this.getAttributeNode(e);
        return a && a.value || "";
      },
      getAttributeNode: function getAttributeNode(e) {
        return this.attributes.getNamedItem(e);
      },
      setAttribute: function setAttribute(e, a) {
        var n = this.ownerDocument.createAttribute(e);
        n.value = n.nodeValue = "" + a, this.setAttributeNode(n);
      },
      removeAttribute: function removeAttribute(e) {
        var a = this.getAttributeNode(e);
        a && this.removeAttributeNode(a);
      },
      appendChild: function appendChild(e) {
        return e.nodeType === ae ? this.insertBefore(e, null) : w(this, e);
      },
      setAttributeNode: function setAttributeNode(e) {
        return this.attributes.setNamedItem(e);
      },
      setAttributeNodeNS: function setAttributeNodeNS(e) {
        return this.attributes.setNamedItemNS(e);
      },
      removeAttributeNode: function removeAttributeNode(e) {
        return this.attributes.removeNamedItem(e.nodeName);
      },
      removeAttributeNS: function removeAttributeNS(e, a) {
        var n = this.getAttributeNodeNS(e, a);
        n && this.removeAttributeNode(n);
      },
      hasAttributeNS: function hasAttributeNS(e, a) {
        return null != this.getAttributeNodeNS(e, a);
      },
      getAttributeNS: function getAttributeNS(e, a) {
        var n = this.getAttributeNodeNS(e, a);
        return n && n.value || "";
      },
      setAttributeNS: function setAttributeNS(e, a, n) {
        var i = this.ownerDocument.createAttributeNS(e, a);
        i.value = i.nodeValue = "" + n, this.setAttributeNode(i);
      },
      getAttributeNodeNS: function getAttributeNodeNS(e, a) {
        return this.attributes.getNamedItemNS(e, a);
      },
      getElementsByTagName: function getElementsByTagName(e) {
        return new t(this, function (a) {
          var n = [];
          return f(a, function (i) {
            i === a || i.nodeType != G || "*" !== e && i.tagName != e || n.push(i);
          }), n;
        });
      },
      getElementsByTagNameNS: function getElementsByTagNameNS(e, a) {
        return new t(this, function (n) {
          var i = [];
          return f(n, function (o) {
            o === n || o.nodeType !== G || "*" !== e && o.namespaceURI !== e || "*" !== a && o.localName != a || i.push(o);
          }), i;
        });
      }
    }, v.prototype.getElementsByTagName = C.prototype.getElementsByTagName, v.prototype.getElementsByTagNameNS = C.prototype.getElementsByTagNameNS, i(C, m), S.prototype.nodeType = V, i(S, m), T.prototype = {
      data: "",
      substringData: function substringData(e, a) {
        return this.data.substring(e, e + a);
      },
      appendData: function appendData(e) {
        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
      },
      insertData: function insertData(e, a) {
        this.replaceData(e, 0, a);
      },
      appendChild: function appendChild(e) {
        throw new Error(oe[se]);
      },
      deleteData: function deleteData(e, a) {
        this.replaceData(e, a, "");
      },
      replaceData: function replaceData(e, a, n) {
        n = this.data.substring(0, e) + n + this.data.substring(e + a), this.nodeValue = this.data = n, this.length = n.length;
      }
    }, i(T, m), _.prototype = {
      nodeName: "#text",
      nodeType: X,
      splitText: function splitText(e) {
        var a = this.data,
            n = a.substring(e);
        a = a.substring(0, e), this.data = this.nodeValue = a, this.length = a.length;
        var i = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i;
      }
    }, i(_, T), A.prototype = {
      nodeName: "#comment",
      nodeType: J
    }, i(A, T), j.prototype = {
      nodeName: "#cdata-section",
      nodeType: $
    }, i(j, T), R.prototype.nodeType = ee, i(R, m), E.prototype.nodeType = ne, i(E, m), N.prototype.nodeType = Q, i(N, m), P.prototype.nodeType = W, i(P, m), B.prototype.nodeName = "#document-fragment", B.prototype.nodeType = ae, i(B, m), I.prototype.nodeType = Z, i(I, m), D.prototype.serializeToString = function (e, a, n) {
      return O.call(e, a, n);
    }, m.prototype.toString = O;

    try {
      Object.defineProperty && (Object.defineProperty(t.prototype, "length", {
        get: function get() {
          return c(this), this.$$length;
        }
      }), Object.defineProperty(m.prototype, "textContent", {
        get: function get() {
          return q(this);
        },
        set: function set(e) {
          switch (this.nodeType) {
            case G:
            case ae:
              for (; this.firstChild;) {
                this.removeChild(this.firstChild);
              }

              (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
              break;

            default:
              this.data = e, this.value = e, this.nodeValue = e;
          }
        }
      }), L = function L(e, a, n) {
        e["$$" + a] = n;
      });
    } catch (e) {}

    a.DOMImplementation = d, a.XMLSerializer = D;
  }, function (e, a) {
    var n = function n(e) {
      var a = {},
          n = function n(e) {
        return !a[e] && (a[e] = []), a[e];
      };

      e.on = function (e, a) {
        n(e).push(a);
      }, e.off = function (e, a) {
        for (var i = n(e), o = i.length - 1; o >= 0; o--) {
          a === i[o] && i.splice(o, 1);
        }
      }, e.emit = function (e, a) {
        for (var i = n(e).map(function (e) {
          return e;
        }), o = 0; o < i.length; o++) {
          i[o](a);
        }
      };
    },
        i = function i() {
      n(this);
    };

    e.exports.init = n, e.exports.EventProxy = i;
  }, function (e, a, n) {
    var i,
        o,
        s = n(0),
        t = function t(e) {
      try {
        wx.setStorageSync("cos_sdk_upload_cache", JSON.stringify(e));
      } catch (e) {}
    },
        c = function c() {
      if (!i) {
        try {
          i = JSON.parse(wx.getStorageSync("cos_sdk_upload_cache") || "[]") || [];
        } catch (e) {}

        for (var e = !1, a = Math.round(Date.now() / 1e3), n = i.length - 1; n >= 0; n--) {
          var o = i[n][2];
          (!o || o + 2592e3 < a) && (i.splice(n, 1), e = !0);
        }

        e && t(i);
      }
    },
        r = function r() {
      o || (o = setTimeout(function () {
        t(i), o = null;
      }, 400));
    },
        p = {
      using: {},
      setUsing: function setUsing(e) {
        p.using[e] = !0;
      },
      removeUsing: function removeUsing(e) {
        delete p.using[e];
      },
      getFileId: function getFileId(e, a, n, i) {
        return e.FilePath && e.size && e.lastModifiedTime && a ? s.md5([e.FilePath].join("::")) + "-" + s.md5([e.size, e.mode, e.lastAccessedTime, e.lastModifiedTime, a, n, i].join("::")) : null;
      },
      getUploadIdList: function getUploadIdList(e) {
        if (!e) return null;
        c();

        for (var a = [], n = 0; n < i.length; n++) {
          i[n][0] === e && a.push(i[n][1]);
        }

        return a.length ? a : null;
      },
      saveUploadId: function saveUploadId(e, a, n) {
        if (c(), e) {
          for (var o = e.substr(0, e.indexOf("-") + 1), s = i.length - 1; s >= 0; s--) {
            var t = i[s];
            t[0] === e && t[1] === a ? i.splice(s, 1) : e !== t[0] && 0 === t[0].indexOf(o) && i.splice(s, 1);
          }

          i.unshift([e, a, Math.round(Date.now() / 1e3)]), i.length > n && i.splice(n), r();
        }
      },
      removeUploadId: function removeUploadId(e) {
        c(), delete p.using[e];

        for (var a = i.length - 1; a >= 0; a--) {
          i[a][1] === e && i.splice(a, 1);
        }

        r();
      }
    };

    e.exports = p;
  }, function (e, a, n) {
    "use strict";

    var i = n(0),
        o = n(2),
        s = n(22),
        t = n(21),
        c = n(19),
        r = {
      SecretId: "",
      SecretKey: "",
      XCosSecurityToken: "",
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
      CorrectClockSkew: !0,
      SystemClockOffset: 0
    },
        p = function p(e) {
      this.options = i.extend(i.clone(r), e || {}), this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit), this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit), this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes), this.options.ChunkSize = Math.max(1048576, this.options.ChunkSize), this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit), this.options.CopyChunkSize = Math.max(1048576, this.options.CopyChunkSize), this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize), this.options.MaxPartNumber = Math.max(1024, Math.min(1e4, this.options.MaxPartNumber)), this.options.Timeout = Math.max(0, this.options.Timeout), this.options.AppId && console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").'), o.init(this), s.init(this);
    };

    t.init(p, s), c.init(p, s), p.getAuthorization = i.getAuth, p.version = "0.8.0", e.exports = p;
  }, function (e, a, n) {
    var i = n(4);
    e.exports = i;
  }, function (e, a) {
    var n = function (e) {
      e = e || {};

      var a,
          n = e.Base64,
          i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          o = function (e) {
        for (var a = {}, n = 0, i = e.length; n < i; n++) {
          a[e.charAt(n)] = n;
        }

        return a;
      }(i),
          s = String.fromCharCode,
          t = function t(e) {
        if (e.length < 2) {
          var a = e.charCodeAt(0);
          return a < 128 ? e : a < 2048 ? s(192 | a >>> 6) + s(128 | 63 & a) : s(224 | a >>> 12 & 15) + s(128 | a >>> 6 & 63) + s(128 | 63 & a);
        }

        var a = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return s(240 | a >>> 18 & 7) + s(128 | a >>> 12 & 63) + s(128 | a >>> 6 & 63) + s(128 | 63 & a);
      },
          c = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
          r = function r(e) {
        return e.replace(c, t);
      },
          p = function p(e) {
        var a = [0, 2, 1][e.length % 3],
            n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
        return [i.charAt(n >>> 18), i.charAt(n >>> 12 & 63), a >= 2 ? "=" : i.charAt(n >>> 6 & 63), a >= 1 ? "=" : i.charAt(63 & n)].join("");
      },
          l = e.btoa ? function (a) {
        return e.btoa(a);
      } : function (e) {
        return e.replace(/[\s\S]{1,3}/g, p);
      },
          u = a ? function (e) {
        return (e.constructor === a.constructor ? e : new a(e)).toString("base64");
      } : function (e) {
        return l(r(e));
      },
          d = function d(e, a) {
        return a ? u(String(e)).replace(/[+\/]/g, function (e) {
          return "+" == e ? "-" : "_";
        }).replace(/=/g, "") : u(String(e));
      },
          m = function m(e) {
        return d(e, !0);
      },
          x = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
          f = function f(e) {
        switch (e.length) {
          case 4:
            var a = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3),
                n = a - 65536;
            return s(55296 + (n >>> 10)) + s(56320 + (1023 & n));

          case 3:
            return s((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

          default:
            return s((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
        }
      },
          v = function v(e) {
        return e.replace(x, f);
      },
          h = function h(e) {
        var a = e.length,
            n = a % 4,
            i = (a > 0 ? o[e.charAt(0)] << 18 : 0) | (a > 1 ? o[e.charAt(1)] << 12 : 0) | (a > 2 ? o[e.charAt(2)] << 6 : 0) | (a > 3 ? o[e.charAt(3)] : 0),
            t = [s(i >>> 16), s(i >>> 8 & 255), s(255 & i)];
        return t.length -= [0, 0, 2, 1][n], t.join("");
      },
          g = e.atob ? function (a) {
        return e.atob(a);
      } : function (e) {
        return e.replace(/[\s\S]{1,4}/g, h);
      },
          b = a ? function (e) {
        return (e.constructor === a.constructor ? e : new a(e, "base64")).toString();
      } : function (e) {
        return v(g(e));
      },
          y = function y(e) {
        return b(String(e).replace(/[-_]/g, function (e) {
          return "-" == e ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, ""));
      };

      return {
        VERSION: "2.1.9",
        atob: g,
        btoa: l,
        fromBase64: y,
        toBase64: d,
        utob: r,
        encode: d,
        encodeURI: m,
        btou: v,
        decode: y,
        noConflict: function noConflict() {
          var a = e.Base64;
          return e.Base64 = n, a;
        }
      };
    }();

    e.exports = n;
  }, function (e, a) {
    var n = n || function (e, a) {
      var n = {},
          i = n.lib = {},
          o = function o() {},
          s = i.Base = {
        extend: function extend(e) {
          o.prototype = this;
          var a = new o();
          return e && a.mixIn(e), a.hasOwnProperty("init") || (a.init = function () {
            a.$super.init.apply(this, arguments);
          }), a.init.prototype = a, a.$super = this, a;
        },
        create: function create() {
          var e = this.extend();
          return e.init.apply(e, arguments), e;
        },
        init: function init() {},
        mixIn: function mixIn(e) {
          for (var a in e) {
            e.hasOwnProperty(a) && (this[a] = e[a]);
          }

          e.hasOwnProperty("toString") && (this.toString = e.toString);
        },
        clone: function clone() {
          return this.init.prototype.extend(this);
        }
      },
          t = i.WordArray = s.extend({
        init: function init(e, a) {
          e = this.words = e || [], this.sigBytes = void 0 != a ? a : 4 * e.length;
        },
        toString: function toString(e) {
          return (e || r).stringify(this);
        },
        concat: function concat(e) {
          var a = this.words,
              n = e.words,
              i = this.sigBytes;
          if (e = e.sigBytes, this.clamp(), i % 4) for (var o = 0; o < e; o++) {
            a[i + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (i + o) % 4 * 8;
          } else if (65535 < n.length) for (o = 0; o < e; o += 4) {
            a[i + o >>> 2] = n[o >>> 2];
          } else a.push.apply(a, n);
          return this.sigBytes += e, this;
        },
        clamp: function clamp() {
          var a = this.words,
              n = this.sigBytes;
          a[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, a.length = e.ceil(n / 4);
        },
        clone: function clone() {
          var e = s.clone.call(this);
          return e.words = this.words.slice(0), e;
        },
        random: function random(a) {
          for (var n = [], i = 0; i < a; i += 4) {
            n.push(4294967296 * e.random() | 0);
          }

          return new t.init(n, a);
        }
      }),
          c = n.enc = {},
          r = c.Hex = {
        stringify: function stringify(e) {
          var a = e.words;
          e = e.sigBytes;

          for (var n = [], i = 0; i < e; i++) {
            var o = a[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
          }

          return n.join("");
        },
        parse: function parse(e) {
          for (var a = e.length, n = [], i = 0; i < a; i += 2) {
            n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
          }

          return new t.init(n, a / 2);
        }
      },
          p = c.Latin1 = {
        stringify: function stringify(e) {
          var a = e.words;
          e = e.sigBytes;

          for (var n = [], i = 0; i < e; i++) {
            n.push(String.fromCharCode(a[i >>> 2] >>> 24 - i % 4 * 8 & 255));
          }

          return n.join("");
        },
        parse: function parse(e) {
          for (var a = e.length, n = [], i = 0; i < a; i++) {
            n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
          }

          return new t.init(n, a);
        }
      },
          l = c.Utf8 = {
        stringify: function stringify(e) {
          try {
            return decodeURIComponent(escape(p.stringify(e)));
          } catch (e) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function parse(e) {
          return p.parse(unescape(encodeURIComponent(e)));
        }
      },
          u = i.BufferedBlockAlgorithm = s.extend({
        reset: function reset() {
          this._data = new t.init(), this._nDataBytes = 0;
        },
        _append: function _append(e) {
          "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
        },
        _process: function _process(a) {
          var n = this._data,
              i = n.words,
              o = n.sigBytes,
              s = this.blockSize,
              c = o / (4 * s),
              c = a ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0);

          if (a = c * s, o = e.min(4 * a, o), a) {
            for (var r = 0; r < a; r += s) {
              this._doProcessBlock(i, r);
            }

            r = i.splice(0, a), n.sigBytes -= o;
          }

          return new t.init(r, o);
        },
        clone: function clone() {
          var e = s.clone.call(this);
          return e._data = this._data.clone(), e;
        },
        _minBufferSize: 0
      });

      i.Hasher = u.extend({
        cfg: s.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          u.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (a, n) {
            return new e.init(n).finalize(a);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (a, n) {
            return new d.HMAC.init(e, n).finalize(a);
          };
        }
      });
      var d = n.algo = {};
      return n;
    }(Math);

    !function () {
      var e = n,
          a = e.lib,
          i = a.WordArray,
          o = a.Hasher,
          s = [],
          a = e.algo.SHA1 = o.extend({
        _doReset: function _doReset() {
          this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function _doProcessBlock(e, a) {
          for (var n = this._hash.words, i = n[0], o = n[1], t = n[2], c = n[3], r = n[4], p = 0; 80 > p; p++) {
            if (16 > p) s[p] = 0 | e[a + p];else {
              var l = s[p - 3] ^ s[p - 8] ^ s[p - 14] ^ s[p - 16];
              s[p] = l << 1 | l >>> 31;
            }
            l = (i << 5 | i >>> 27) + r + s[p], l = 20 > p ? l + (1518500249 + (o & t | ~o & c)) : 40 > p ? l + (1859775393 + (o ^ t ^ c)) : 60 > p ? l + ((o & t | o & c | t & c) - 1894007588) : l + ((o ^ t ^ c) - 899497514), r = c, c = t, t = o << 30 | o >>> 2, o = i, i = l;
          }

          n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + t | 0, n[3] = n[3] + c | 0, n[4] = n[4] + r | 0;
        },
        _doFinalize: function _doFinalize() {
          var e = this._data,
              a = e.words,
              n = 8 * this._nDataBytes,
              i = 8 * e.sigBytes;
          return a[i >>> 5] |= 128 << 24 - i % 32, a[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), a[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * a.length, this._process(), this._hash;
        },
        clone: function clone() {
          var e = o.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      e.SHA1 = o._createHelper(a), e.HmacSHA1 = o._createHmacHelper(a);
    }(), function () {
      var e = n,
          a = e.enc.Utf8;
      e.algo.HMAC = e.lib.Base.extend({
        init: function init(e, n) {
          e = this._hasher = new e.init(), "string" == typeof n && (n = a.parse(n));
          var i = e.blockSize,
              o = 4 * i;
          n.sigBytes > o && (n = e.finalize(n)), n.clamp();

          for (var s = this._oKey = n.clone(), t = this._iKey = n.clone(), c = s.words, r = t.words, p = 0; p < i; p++) {
            c[p] ^= 1549556828, r[p] ^= 909522486;
          }

          s.sigBytes = t.sigBytes = o, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var a = this._hasher;
          return e = a.finalize(e), a.reset(), a.finalize(this._oKey.clone().concat(e));
        }
      });
    }(), function () {
      var e = n,
          a = e.lib,
          i = a.WordArray,
          o = e.enc;
      o.Base64 = {
        stringify: function stringify(e) {
          var a = e.words,
              n = e.sigBytes,
              i = this._map;
          e.clamp();

          for (var o = [], s = 0; s < n; s += 3) {
            for (var t = a[s >>> 2] >>> 24 - s % 4 * 8 & 255, c = a[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255, r = a[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, p = t << 16 | c << 8 | r, l = 0; l < 4 && s + 0.75 * l < n; l++) {
              o.push(i.charAt(p >>> 6 * (3 - l) & 63));
            }
          }

          var u = i.charAt(64);
          if (u) for (; o.length % 4;) {
            o.push(u);
          }
          return o.join("");
        },
        parse: function parse(e) {
          var a = e.length,
              n = this._map,
              o = n.charAt(64);

          if (o) {
            var s = e.indexOf(o);
            -1 != s && (a = s);
          }

          for (var t = [], c = 0, r = 0; r < a; r++) {
            if (r % 4) {
              var p = n.indexOf(e.charAt(r - 1)) << r % 4 * 2,
                  l = n.indexOf(e.charAt(r)) >>> 6 - r % 4 * 2;
              t[c >>> 2] |= (p | l) << 24 - c % 4 * 8, c++;
            }
          }

          return i.create(t, c);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), e.exports = n;
  }, function (e, a) {
    function n(e) {
      return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(o, "");
    }

    var i = new RegExp("^([^a-zA-Z_À-ÖØ-öø-ÿͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�])|^((x|X)(m|M)(l|L))|([^a-zA-Z_À-ÖØ-öø-ÿͰ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿿、-퟿豈-﷏ﷰ-�-.0-9·̀-ͯ‿⁀])", "g"),
        o = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,
        s = function s(e) {
      var a = [];
      if (e instanceof Object) for (var n in e) {
        e.hasOwnProperty(n) && a.push(n);
      }
      return a;
    },
        t = function t(e, a) {
      var o = function o(e, n, _o, s, t) {
        var c = void 0 !== a.indent ? a.indent : "\t",
            r = a.prettyPrint ? "\n" + new Array(s).join(c) : "";
        a.removeIllegalNameCharacters && (e = e.replace(i, "_"));
        var p = [r, "<", e, _o || ""];
        return n && n.length > 0 ? (p.push(">"), p.push(n), t && p.push(r), p.push("</"), p.push(e), p.push(">")) : p.push("/>"), p.join("");
      };

      return function e(i, t, c) {
        var r = _typeof(i);

        switch ((Array.isArray ? Array.isArray(i) : i instanceof Array) ? r = "array" : i instanceof Date && (r = "date"), r) {
          case "array":
            var p = [];
            return i.map(function (a) {
              p.push(e(a, 1, c + 1));
            }), a.prettyPrint && p.push("\n"), p.join("");

          case "date":
            return i.toJSON ? i.toJSON() : i + "";

          case "object":
            var l = [];

            for (var u in i) {
              if (i[u] instanceof Array) for (var d in i[u]) {
                l.push(o(u, e(i[u][d], 0, c + 1), null, c + 1, s(i[u][d]).length));
              } else l.push(o(u, e(i[u], 0, c + 1), null, c + 1));
            }

            return a.prettyPrint && l.length > 0 && l.push("\n"), l.join("");

          case "function":
            return i();

          default:
            return a.escape ? n(i) : "" + i;
        }
      }(e, 0, 0);
    },
        c = function c(e) {
      var a = ['<?xml version="1.0" encoding="UTF-8"'];
      return e && a.push(' standalone="yes"'), a.push("?>"), a.join("");
    },
        r = function r(e, a) {
      if (a || (a = {
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
      return a && ("object" == _typeof(a) ? (a.xmlHeader && (n = c(!!a.xmlHeader.standalone)), void 0 !== a.docType && (i = "<!DOCTYPE " + a.docType + ">")) : n = c()), a = a || {}, [n, a.prettyPrint && i ? "\n" : "", i, t(e, a)].join("").replace(/\n{2,}/g, "\n").replace(/\s+$/g, "");
    };

    e.exports = r;
  }, function (e, a) {
    function n(e, a) {
      var n = e[0],
          i = e[1],
          r = e[2],
          p = e[3];
      n = o(n, i, r, p, a[0], 7, -680876936), p = o(p, n, i, r, a[1], 12, -389564586), r = o(r, p, n, i, a[2], 17, 606105819), i = o(i, r, p, n, a[3], 22, -1044525330), n = o(n, i, r, p, a[4], 7, -176418897), p = o(p, n, i, r, a[5], 12, 1200080426), r = o(r, p, n, i, a[6], 17, -1473231341), i = o(i, r, p, n, a[7], 22, -45705983), n = o(n, i, r, p, a[8], 7, 1770035416), p = o(p, n, i, r, a[9], 12, -1958414417), r = o(r, p, n, i, a[10], 17, -42063), i = o(i, r, p, n, a[11], 22, -1990404162), n = o(n, i, r, p, a[12], 7, 1804603682), p = o(p, n, i, r, a[13], 12, -40341101), r = o(r, p, n, i, a[14], 17, -1502002290), i = o(i, r, p, n, a[15], 22, 1236535329), n = s(n, i, r, p, a[1], 5, -165796510), p = s(p, n, i, r, a[6], 9, -1069501632), r = s(r, p, n, i, a[11], 14, 643717713), i = s(i, r, p, n, a[0], 20, -373897302), n = s(n, i, r, p, a[5], 5, -701558691), p = s(p, n, i, r, a[10], 9, 38016083), r = s(r, p, n, i, a[15], 14, -660478335), i = s(i, r, p, n, a[4], 20, -405537848), n = s(n, i, r, p, a[9], 5, 568446438), p = s(p, n, i, r, a[14], 9, -1019803690), r = s(r, p, n, i, a[3], 14, -187363961), i = s(i, r, p, n, a[8], 20, 1163531501), n = s(n, i, r, p, a[13], 5, -1444681467), p = s(p, n, i, r, a[2], 9, -51403784), r = s(r, p, n, i, a[7], 14, 1735328473), i = s(i, r, p, n, a[12], 20, -1926607734), n = t(n, i, r, p, a[5], 4, -378558), p = t(p, n, i, r, a[8], 11, -2022574463), r = t(r, p, n, i, a[11], 16, 1839030562), i = t(i, r, p, n, a[14], 23, -35309556), n = t(n, i, r, p, a[1], 4, -1530992060), p = t(p, n, i, r, a[4], 11, 1272893353), r = t(r, p, n, i, a[7], 16, -155497632), i = t(i, r, p, n, a[10], 23, -1094730640), n = t(n, i, r, p, a[13], 4, 681279174), p = t(p, n, i, r, a[0], 11, -358537222), r = t(r, p, n, i, a[3], 16, -722521979), i = t(i, r, p, n, a[6], 23, 76029189), n = t(n, i, r, p, a[9], 4, -640364487), p = t(p, n, i, r, a[12], 11, -421815835), r = t(r, p, n, i, a[15], 16, 530742520), i = t(i, r, p, n, a[2], 23, -995338651), n = c(n, i, r, p, a[0], 6, -198630844), p = c(p, n, i, r, a[7], 10, 1126891415), r = c(r, p, n, i, a[14], 15, -1416354905), i = c(i, r, p, n, a[5], 21, -57434055), n = c(n, i, r, p, a[12], 6, 1700485571), p = c(p, n, i, r, a[3], 10, -1894986606), r = c(r, p, n, i, a[10], 15, -1051523), i = c(i, r, p, n, a[1], 21, -2054922799), n = c(n, i, r, p, a[8], 6, 1873313359), p = c(p, n, i, r, a[15], 10, -30611744), r = c(r, p, n, i, a[6], 15, -1560198380), i = c(i, r, p, n, a[13], 21, 1309151649), n = c(n, i, r, p, a[4], 6, -145523070), p = c(p, n, i, r, a[11], 10, -1120210379), r = c(r, p, n, i, a[2], 15, 718787259), i = c(i, r, p, n, a[9], 21, -343485551), e[0] = h(n, e[0]), e[1] = h(i, e[1]), e[2] = h(r, e[2]), e[3] = h(p, e[3]);
    }

    function i(e, a, n, i, o, s) {
      return a = h(h(a, e), h(i, s)), h(a << o | a >>> 32 - o, n);
    }

    function o(e, a, n, o, s, t, c) {
      return i(a & n | ~a & o, e, a, s, t, c);
    }

    function s(e, a, n, o, s, t, c) {
      return i(a & o | n & ~o, e, a, s, t, c);
    }

    function t(e, a, n, o, s, t, c) {
      return i(a ^ n ^ o, e, a, s, t, c);
    }

    function c(e, a, n, o, s, t, c) {
      return i(n ^ (a | ~o), e, a, s, t, c);
    }

    function r(e) {
      var a,
          i = e.length,
          o = [1732584193, -271733879, -1732584194, 271733878];

      for (a = 64; a <= e.length; a += 64) {
        n(o, l(e.substring(a - 64, a)));
      }

      e = e.substring(a - 64);
      var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (a = 0; a < e.length; a++) {
        s[a >> 2] |= e.charCodeAt(a) << (a % 4 << 3);
      }

      if (s[a >> 2] |= 128 << (a % 4 << 3), a > 55) for (n(o, s), a = 0; a < 16; a++) {
        s[a] = 0;
      }
      return s[14] = 8 * i, n(o, s), o;
    }

    function p() {
      var e = {};
      return e.state = [1732584193, -271733879, -1732584194, 271733878], e.tail = "", e.size = 0, e.update = function (a, i) {
        i || (a = m(a)), e.size += a.length, a = e.tail + a;
        var o,
            s = e.state;

        for (o = 64; o <= a.length; o += 64) {
          n(s, l(a.substring(o - 64, o)));
        }

        return e.tail = a.substring(o - 64), e;
      }, e.digest = function (a) {
        var i,
            o = e.size,
            s = e.state,
            t = e.tail,
            c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < t.length; i++) {
          c[i >> 2] |= t.charCodeAt(i) << (i % 4 << 3);
        }

        if (c[i >> 2] |= 128 << (i % 4 << 3), i > 55) for (n(s, c), i = 0; i < 16; i++) {
          c[i] = 0;
        }
        return c[14] = 8 * o, n(s, c), "hex" === a ? d(s) : "base64" === a ? f(d(s)) : s;
      }, e;
    }

    function l(e) {
      var a,
          n = [];

      for (a = 0; a < 64; a += 4) {
        n[a >> 2] = e.charCodeAt(a) + (e.charCodeAt(a + 1) << 8) + (e.charCodeAt(a + 2) << 16) + (e.charCodeAt(a + 3) << 24);
      }

      return n;
    }

    function u(e) {
      for (var a = "", n = 0; n < 4; n++) {
        a += v[e >> 8 * n + 4 & 15] + v[e >> 8 * n & 15];
      }

      return a;
    }

    function d(e) {
      for (var a = 0; a < e.length; a++) {
        e[a] = u(e[a]);
      }

      return e.join("");
    }

    function m(e) {
      e = e.replace(/\r\n/g, "\n");

      for (var a = "", n = 0; n < e.length; n++) {
        var i = e.charCodeAt(n);
        i < 128 ? a += String.fromCharCode(i) : i > 127 && i < 2048 ? (a += String.fromCharCode(i >> 6 | 192), a += String.fromCharCode(63 & i | 128)) : (a += String.fromCharCode(i >> 12 | 224), a += String.fromCharCode(i >> 6 & 63 | 128), a += String.fromCharCode(63 & i | 128));
      }

      return a;
    }

    function x(e, a) {
      return a || (e = m(e)), d(r(e));
    }

    var f = function f(e) {
      var a,
          n,
          i,
          o = "";

      for (a = 0, n = e.length / 2; a < n; a++) {
        i = parseInt(e[2 * a] + e[2 * a + 1], 16), o += String.fromCharCode(i);
      }

      return btoa(o);
    },
        v = "0123456789abcdef".split(""),
        h = function h(e, a) {
      return e + a & 4294967295;
    };

    "5d41402abc4b2a76b9719d911017c592" != x("hello") && (h = function h(e, a) {
      var n = (65535 & e) + (65535 & a);
      return (e >> 16) + (a >> 16) + (n >> 16) << 16 | 65535 & n;
    }), x.getCtx = p, e.exports = x;
  }, function (e, a) {
    var n = function n(e) {
      var a,
          n,
          i,
          o = [],
          s = Object.keys(e);

      for (a = 0; a < s.length; a++) {
        n = s[a], i = e[n] || "", o.push(n + "=" + encodeURIComponent(i));
      }

      return o.join("&");
    },
        i = function i(e, a) {
      var i,
          o = e.filePath,
          s = e.headers || {},
          t = e.url,
          c = e.method,
          r = e.onProgress,
          p = function p(e, n) {
        a(e, {
          statusCode: n.statusCode,
          headers: n.header
        }, n.data);
      };

      if (o) {
        var l,
            u = t.match(/^(https?:\/\/[^\/]+\/)([^\/]*\/?)(.*)$/);
        e.pathStyle ? (l = decodeURIComponent(u[3] || ""), t = u[1] + u[2]) : (l = decodeURIComponent(u[2] + u[3] || ""), t = u[1]);
        var f = u[2].substring(0, u[2].indexOf('/'));
        var d = {
          key: l,
          success_action_status: 200,
          Signature: s.Authorization
        },
            m = ["Cache-Control", "Content-Type", "Content-Disposition", "Content-Encoding", "Expires", "x-cos-storage-class", "x-cos-security-token"];

        for (var x in e.headers) {
          e.headers.hasOwnProperty(x) && (x.indexOf("x-cos-meta-") > -1 || m.indexOf(x) > -1) && (d[x] = e.headers[x]);
        }

        s["x-cos-acl"] && (d.acl = s["x-cos-acl"]), !d["Content-Type"] && (d["Content-Type"] = ""), i = wx.uploadFile({
          url: t,
          method: c,
          name: "file",
          filePath: o,
          formData: d,
          header: {
            "Vod-Forward-Cos": f
          },
          success: function success(e) {
            p(null, e);
          },
          fail: function fail(e) {
            p(e.errMsg, e);
          }
        });
      } else {
        var f = e.qs && n(e.qs) || "";
        f && (t += (t.indexOf("?") > -1 ? "&" : "?") + f), s["Content-Length"] && delete s["Content-Length"], u = t.match(/^(https?:\/\/[^\/]+\/)([^\/]*\/?)(.*)$/), t = u[1] + u[3], f = u[2].substring(0, u[2].indexOf('/')), s["Vod-Forward-Cos"] = f, i = wx.request({
          url: t,
          method: c,
          header: s,
          dataType: "text",
          data: e.body,
          success: function success(e) {
            p(null, e);
          },
          fail: function fail(e) {
            p(e.errMsg, e);
          }
        });
      }

      return i.onProgressUpdate(function (e) {
        r && r({
          loaded: e.totalBytesSent,
          total: e.totalBytesExpectedToSend,
          progress: e.progress / 100
        });
      }), i;
    };

    e.exports = i;
  }, function (e, a, n) {
    var i = n(17).DOMParser,
        o = function o(e) {
      "use strict";

      function a(e) {
        var a = e.localName;
        return null == a && (a = e.baseName), null != a && "" != a || (a = e.nodeName), a;
      }

      function n(e) {
        return e.prefix;
      }

      function o(e) {
        return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e;
      }

      function s(e, a, n, i) {
        for (var o = 0; o < e.length; o++) {
          var s = e[o];

          if ("string" == typeof s) {
            if (s == i) break;
          } else if (s instanceof RegExp) {
            if (s.test(i)) break;
          } else if ("function" == typeof s && s(a, n, i)) break;
        }

        return o != e.length;
      }

      function t(a, n, i) {
        switch (e.arrayAccessForm) {
          case "property":
            a[n] instanceof Array ? a[n + "_asArray"] = a[n] : a[n + "_asArray"] = [a[n]];
        }

        !(a[n] instanceof Array) && e.arrayAccessFormPaths.length > 0 && s(e.arrayAccessFormPaths, a, n, i) && (a[n] = [a[n]]);
      }

      function c(e) {
        var a = e.split(/[-T:+Z]/g),
            n = new Date(a[0], a[1] - 1, a[2]),
            i = a[5].split(".");

        if (n.setHours(a[3], a[4], i[0]), i.length > 1 && n.setMilliseconds(i[1]), a[6] && a[7]) {
          var o = 60 * a[6] + Number(a[7]);
          o = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * o : o), n.setMinutes(n.getMinutes() - o - n.getTimezoneOffset());
        } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));

        return n;
      }

      function r(a, n, i) {
        if (e.datetimeAccessFormPaths.length > 0) {
          var o = i.split(".#")[0];
          return s(e.datetimeAccessFormPaths, a, n, o) ? c(a) : a;
        }

        return a;
      }

      function p(a, n, i, o) {
        return !(n == C.ELEMENT_NODE && e.xmlElementsFilter.length > 0) || s(e.xmlElementsFilter, a, i, o);
      }

      function l(i, o) {
        if (i.nodeType == C.DOCUMENT_NODE) {
          for (var s = new Object(), c = i.childNodes, u = 0; u < c.length; u++) {
            var d = c.item(u);

            if (d.nodeType == C.ELEMENT_NODE) {
              var m = a(d);
              s[m] = l(d, m);
            }
          }

          return s;
        }

        if (i.nodeType == C.ELEMENT_NODE) {
          var s = new Object();
          s.__cnt = 0;

          for (var c = i.childNodes, u = 0; u < c.length; u++) {
            var d = c.item(u),
                m = a(d);

            if (d.nodeType != C.COMMENT_NODE) {
              var x = o + "." + m;
              p(s, d.nodeType, m, x) && (s.__cnt++, null == s[m] ? (s[m] = l(d, x), t(s, m, x)) : (null != s[m] && (s[m] instanceof Array || (s[m] = [s[m]], t(s, m, x))), s[m][s[m].length] = l(d, x)));
            }
          }

          for (var f = 0; f < i.attributes.length; f++) {
            var v = i.attributes.item(f);
            s.__cnt++, s[e.attributePrefix + v.name] = v.value;
          }

          var h = n(i);
          return null != h && "" != h && (s.__cnt++, s.__prefix = h), null != s["#text"] && (s.__text = s["#text"], s.__text instanceof Array && (s.__text = s.__text.join("\n")), e.stripWhitespaces && (s.__text = s.__text.trim()), delete s["#text"], "property" == e.arrayAccessForm && delete s["#text_asArray"], s.__text = r(s.__text, m, o + "." + m)), null != s["#cdata-section"] && (s.__cdata = s["#cdata-section"], delete s["#cdata-section"], "property" == e.arrayAccessForm && delete s["#cdata-section_asArray"]), 0 == s.__cnt && "text" == e.emptyNodeForm ? s = "" : 1 == s.__cnt && null != s.__text ? s = s.__text : 1 != s.__cnt || null == s.__cdata || e.keepCData ? s.__cnt > 1 && null != s.__text && e.skipEmptyTextNodesForObj && (e.stripWhitespaces && "" == s.__text || "" == s.__text.trim()) && delete s.__text : s = s.__cdata, delete s.__cnt, !e.enableToStringFunc || null == s.__text && null == s.__cdata || (s.toString = function () {
            return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "");
          }), s;
        }

        if (i.nodeType == C.TEXT_NODE || i.nodeType == C.CDATA_SECTION_NODE) return i.nodeValue;
      }

      function u(a, n, i, s) {
        var t = "<" + (null != a && null != a.__prefix ? a.__prefix + ":" : "") + n;
        if (null != i) for (var c = 0; c < i.length; c++) {
          var r = i[c],
              p = a[r];
          e.escapeMode && (p = o(p)), t += " " + r.substr(e.attributePrefix.length) + "=", e.useDoubleQuotes ? t += '"' + p + '"' : t += "'" + p + "'";
        }
        return t += s ? "/>" : ">";
      }

      function d(e, a) {
        return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + a + ">";
      }

      function m(e, a) {
        return -1 !== e.indexOf(a, e.length - a.length);
      }

      function x(a, n) {
        return !!("property" == e.arrayAccessForm && m(n.toString(), "_asArray") || 0 == n.toString().indexOf(e.attributePrefix) || 0 == n.toString().indexOf("__") || a[n] instanceof Function);
      }

      function f(e) {
        var a = 0;
        if (e instanceof Object) for (var n in e) {
          x(e, n) || a++;
        }
        return a;
      }

      function v(a, n, i) {
        return 0 == e.jsonPropertiesFilter.length || "" == i || s(e.jsonPropertiesFilter, a, n, i);
      }

      function h(a) {
        var n = [];
        if (a instanceof Object) for (var i in a) {
          -1 == i.toString().indexOf("__") && 0 == i.toString().indexOf(e.attributePrefix) && n.push(i);
        }
        return n;
      }

      function g(a) {
        var n = "";
        return null != a.__cdata && (n += "<![CDATA[" + a.__cdata + "]]>"), null != a.__text && (e.escapeMode ? n += o(a.__text) : n += a.__text), n;
      }

      function b(a) {
        var n = "";
        return a instanceof Object ? n += g(a) : null != a && (e.escapeMode ? n += o(a) : n += a), n;
      }

      function y(e, a) {
        return "" === e ? a : e + "." + a;
      }

      function k(e, a, n, i) {
        var o = "";
        if (0 == e.length) o += u(e, a, n, !0);else for (var s = 0; s < e.length; s++) {
          o += u(e[s], a, h(e[s]), !1), o += w(e[s], y(i, a)), o += d(e[s], a);
        }
        return o;
      }

      function w(e, a) {
        var n = "";
        if (f(e) > 0) for (var i in e) {
          if (!x(e, i) && ("" == a || v(e, i, y(a, i)))) {
            var o = e[i],
                s = h(o);
            if (null == o || void 0 == o) n += u(o, i, s, !0);else if (o instanceof Object) {
              if (o instanceof Array) n += k(o, i, s, a);else if (o instanceof Date) n += u(o, i, s, !1), n += o.toISOString(), n += d(o, i);else {
                var t = f(o);
                t > 0 || null != o.__text || null != o.__cdata ? (n += u(o, i, s, !1), n += w(o, y(a, i)), n += d(o, i)) : n += u(o, i, s, !0);
              }
            } else n += u(o, i, s, !1), n += b(o), n += d(o, i);
          }
        }
        return n += b(e);
      }

      e = e || {}, function () {
        void 0 === e.escapeMode && (e.escapeMode = !0), e.attributePrefix = e.attributePrefix || "_", e.arrayAccessForm = e.arrayAccessForm || "none", e.emptyNodeForm = e.emptyNodeForm || "text", void 0 === e.enableToStringFunc && (e.enableToStringFunc = !0), e.arrayAccessFormPaths = e.arrayAccessFormPaths || [], void 0 === e.skipEmptyTextNodesForObj && (e.skipEmptyTextNodesForObj = !0), void 0 === e.stripWhitespaces && (e.stripWhitespaces = !0), e.datetimeAccessFormPaths = e.datetimeAccessFormPaths || [], void 0 === e.useDoubleQuotes && (e.useDoubleQuotes = !1), e.xmlElementsFilter = e.xmlElementsFilter || [], e.jsonPropertiesFilter = e.jsonPropertiesFilter || [], void 0 === e.keepCData && (e.keepCData = !1);
      }();
      var C = {
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9
      };
      this.parseXmlString = function (e) {
        if (void 0 === e) return null;
        var a;

        if (i) {
          var n = new i(),
              o = null;

          try {
            o = n.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0].namespaceURI;
          } catch (e) {
            o = null;
          }

          try {
            a = n.parseFromString(e, "text/xml"), null != o && a.getElementsByTagNameNS(o, "parsererror").length > 0 && (a = null);
          } catch (e) {
            a = null;
          }
        } else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(e);

        return a;
      }, this.asArray = function (e) {
        return void 0 === e || null == e ? [] : e instanceof Array ? e : [e];
      }, this.toXmlDateTime = function (e) {
        return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null;
      }, this.asDateTime = function (e) {
        return "string" == typeof e ? c(e) : e;
      }, this.xml2json = function (e) {
        return l(e);
      }, this.xml_str2json = function (e) {
        var a = this.parseXmlString(e);
        return null != a ? this.xml2json(a) : null;
      }, this.json2xml_str = function (e) {
        return w(e, "");
      }, this.json2xml = function (e) {
        var a = this.json2xml_str(e);
        return this.parseXmlString(a);
      }, this.getVersion = function () {
        return "1.2.0";
      };
    },
        s = function s(e) {
      if (!e) return null;
      var a = new i(),
          n = a.parseFromString(e, "text/xml"),
          s = new o(),
          t = s.xml2json(n);
      return t.html && t.getElementsByTagName("parsererror").length ? null : t;
    };

    e.exports = s;
  }, function (e, a) {
    e.exports = {
      "application/1d-interleaved-parityfec": {
        source: "iana"
      },
      "application/3gpdash-qoe-report+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/3gpp-ims+xml": {
        source: "iana",
        compressible: !0
      },
      "application/a2l": {
        source: "iana"
      },
      "application/activemessage": {
        source: "iana"
      },
      "application/activity+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-costmap+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-costmapfilter+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-directory+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-endpointcost+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-endpointcostparams+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-endpointprop+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-endpointpropparams+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-error+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-networkmap+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-networkmapfilter+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-updatestreamcontrol+json": {
        source: "iana",
        compressible: !0
      },
      "application/alto-updatestreamparams+json": {
        source: "iana",
        compressible: !0
      },
      "application/aml": {
        source: "iana"
      },
      "application/andrew-inset": {
        source: "iana",
        extensions: ["ez"]
      },
      "application/applefile": {
        source: "iana"
      },
      "application/applixware": {
        source: "apache",
        extensions: ["aw"]
      },
      "application/atf": {
        source: "iana"
      },
      "application/atfx": {
        source: "iana"
      },
      "application/atom+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["atom"]
      },
      "application/atomcat+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["atomcat"]
      },
      "application/atomdeleted+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["atomdeleted"]
      },
      "application/atomicmail": {
        source: "iana"
      },
      "application/atomsvc+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["atomsvc"]
      },
      "application/atsc-dwd+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["dwd"]
      },
      "application/atsc-dynamic-event-message": {
        source: "iana"
      },
      "application/atsc-held+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["held"]
      },
      "application/atsc-rdt+json": {
        source: "iana",
        compressible: !0
      },
      "application/atsc-rsat+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rsat"]
      },
      "application/atxml": {
        source: "iana"
      },
      "application/auth-policy+xml": {
        source: "iana",
        compressible: !0
      },
      "application/bacnet-xdd+zip": {
        source: "iana",
        compressible: !1
      },
      "application/batch-smtp": {
        source: "iana"
      },
      "application/bdoc": {
        compressible: !1,
        extensions: ["bdoc"]
      },
      "application/beep+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/calendar+json": {
        source: "iana",
        compressible: !0
      },
      "application/calendar+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xcs"]
      },
      "application/call-completion": {
        source: "iana"
      },
      "application/cals-1840": {
        source: "iana"
      },
      "application/cap+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/cbor": {
        source: "iana"
      },
      "application/cbor-seq": {
        source: "iana"
      },
      "application/cccex": {
        source: "iana"
      },
      "application/ccmp+xml": {
        source: "iana",
        compressible: !0
      },
      "application/ccxml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["ccxml"]
      },
      "application/cdfx+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["cdfx"]
      },
      "application/cdmi-capability": {
        source: "iana",
        extensions: ["cdmia"]
      },
      "application/cdmi-container": {
        source: "iana",
        extensions: ["cdmic"]
      },
      "application/cdmi-domain": {
        source: "iana",
        extensions: ["cdmid"]
      },
      "application/cdmi-object": {
        source: "iana",
        extensions: ["cdmio"]
      },
      "application/cdmi-queue": {
        source: "iana",
        extensions: ["cdmiq"]
      },
      "application/cdni": {
        source: "iana"
      },
      "application/cea": {
        source: "iana"
      },
      "application/cea-2018+xml": {
        source: "iana",
        compressible: !0
      },
      "application/cellml+xml": {
        source: "iana",
        compressible: !0
      },
      "application/cfw": {
        source: "iana"
      },
      "application/clue+xml": {
        source: "iana",
        compressible: !0
      },
      "application/clue_info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/cms": {
        source: "iana"
      },
      "application/cnrp+xml": {
        source: "iana",
        compressible: !0
      },
      "application/coap-group+json": {
        source: "iana",
        compressible: !0
      },
      "application/coap-payload": {
        source: "iana"
      },
      "application/commonground": {
        source: "iana"
      },
      "application/conference-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/cose": {
        source: "iana"
      },
      "application/cose-key": {
        source: "iana"
      },
      "application/cose-key-set": {
        source: "iana"
      },
      "application/cpl+xml": {
        source: "iana",
        compressible: !0
      },
      "application/csrattrs": {
        source: "iana"
      },
      "application/csta+xml": {
        source: "iana",
        compressible: !0
      },
      "application/cstadata+xml": {
        source: "iana",
        compressible: !0
      },
      "application/csvm+json": {
        source: "iana",
        compressible: !0
      },
      "application/cu-seeme": {
        source: "apache",
        extensions: ["cu"]
      },
      "application/cwt": {
        source: "iana"
      },
      "application/cybercash": {
        source: "iana"
      },
      "application/dart": {
        compressible: !0
      },
      "application/dash+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mpd"]
      },
      "application/dashdelta": {
        source: "iana"
      },
      "application/davmount+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["davmount"]
      },
      "application/dca-rft": {
        source: "iana"
      },
      "application/dcd": {
        source: "iana"
      },
      "application/dec-dx": {
        source: "iana"
      },
      "application/dialog-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/dicom": {
        source: "iana"
      },
      "application/dicom+json": {
        source: "iana",
        compressible: !0
      },
      "application/dicom+xml": {
        source: "iana",
        compressible: !0
      },
      "application/dii": {
        source: "iana"
      },
      "application/dit": {
        source: "iana"
      },
      "application/dns": {
        source: "iana"
      },
      "application/dns+json": {
        source: "iana",
        compressible: !0
      },
      "application/dns-message": {
        source: "iana"
      },
      "application/docbook+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["dbk"]
      },
      "application/dots+cbor": {
        source: "iana"
      },
      "application/dskpp+xml": {
        source: "iana",
        compressible: !0
      },
      "application/dssc+der": {
        source: "iana",
        extensions: ["dssc"]
      },
      "application/dssc+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xdssc"]
      },
      "application/dvcs": {
        source: "iana"
      },
      "application/ecmascript": {
        source: "iana",
        compressible: !0,
        extensions: ["ecma", "es"]
      },
      "application/edi-consent": {
        source: "iana"
      },
      "application/edi-x12": {
        source: "iana",
        compressible: !1
      },
      "application/edifact": {
        source: "iana",
        compressible: !1
      },
      "application/efi": {
        source: "iana"
      },
      "application/emergencycalldata.comment+xml": {
        source: "iana",
        compressible: !0
      },
      "application/emergencycalldata.control+xml": {
        source: "iana",
        compressible: !0
      },
      "application/emergencycalldata.deviceinfo+xml": {
        source: "iana",
        compressible: !0
      },
      "application/emergencycalldata.ecall.msd": {
        source: "iana"
      },
      "application/emergencycalldata.providerinfo+xml": {
        source: "iana",
        compressible: !0
      },
      "application/emergencycalldata.serviceinfo+xml": {
        source: "iana",
        compressible: !0
      },
      "application/emergencycalldata.subscriberinfo+xml": {
        source: "iana",
        compressible: !0
      },
      "application/emergencycalldata.veds+xml": {
        source: "iana",
        compressible: !0
      },
      "application/emma+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["emma"]
      },
      "application/emotionml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["emotionml"]
      },
      "application/encaprtp": {
        source: "iana"
      },
      "application/epp+xml": {
        source: "iana",
        compressible: !0
      },
      "application/epub+zip": {
        source: "iana",
        compressible: !1,
        extensions: ["epub"]
      },
      "application/eshop": {
        source: "iana"
      },
      "application/exi": {
        source: "iana",
        extensions: ["exi"]
      },
      "application/expect-ct-report+json": {
        source: "iana",
        compressible: !0
      },
      "application/fastinfoset": {
        source: "iana"
      },
      "application/fastsoap": {
        source: "iana"
      },
      "application/fdt+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["fdt"]
      },
      "application/fhir+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/fhir+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/fido.trusted-apps+json": {
        compressible: !0
      },
      "application/fits": {
        source: "iana"
      },
      "application/flexfec": {
        source: "iana"
      },
      "application/font-sfnt": {
        source: "iana"
      },
      "application/font-tdpfr": {
        source: "iana",
        extensions: ["pfr"]
      },
      "application/font-woff": {
        source: "iana",
        compressible: !1
      },
      "application/framework-attributes+xml": {
        source: "iana",
        compressible: !0
      },
      "application/geo+json": {
        source: "iana",
        compressible: !0,
        extensions: ["geojson"]
      },
      "application/geo+json-seq": {
        source: "iana"
      },
      "application/geopackage+sqlite3": {
        source: "iana"
      },
      "application/geoxacml+xml": {
        source: "iana",
        compressible: !0
      },
      "application/gltf-buffer": {
        source: "iana"
      },
      "application/gml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["gml"]
      },
      "application/gpx+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["gpx"]
      },
      "application/gxf": {
        source: "apache",
        extensions: ["gxf"]
      },
      "application/gzip": {
        source: "iana",
        compressible: !1,
        extensions: ["gz"]
      },
      "application/h224": {
        source: "iana"
      },
      "application/held+xml": {
        source: "iana",
        compressible: !0
      },
      "application/hjson": {
        extensions: ["hjson"]
      },
      "application/http": {
        source: "iana"
      },
      "application/hyperstudio": {
        source: "iana",
        extensions: ["stk"]
      },
      "application/ibe-key-request+xml": {
        source: "iana",
        compressible: !0
      },
      "application/ibe-pkg-reply+xml": {
        source: "iana",
        compressible: !0
      },
      "application/ibe-pp-data": {
        source: "iana"
      },
      "application/iges": {
        source: "iana"
      },
      "application/im-iscomposing+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/index": {
        source: "iana"
      },
      "application/index.cmd": {
        source: "iana"
      },
      "application/index.obj": {
        source: "iana"
      },
      "application/index.response": {
        source: "iana"
      },
      "application/index.vnd": {
        source: "iana"
      },
      "application/inkml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["ink", "inkml"]
      },
      "application/iotp": {
        source: "iana"
      },
      "application/ipfix": {
        source: "iana",
        extensions: ["ipfix"]
      },
      "application/ipp": {
        source: "iana"
      },
      "application/isup": {
        source: "iana"
      },
      "application/its+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["its"]
      },
      "application/java-archive": {
        source: "apache",
        compressible: !1,
        extensions: ["jar", "war", "ear"]
      },
      "application/java-serialized-object": {
        source: "apache",
        compressible: !1,
        extensions: ["ser"]
      },
      "application/java-vm": {
        source: "apache",
        compressible: !1,
        extensions: ["class"]
      },
      "application/javascript": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0,
        extensions: ["js", "mjs"]
      },
      "application/jf2feed+json": {
        source: "iana",
        compressible: !0
      },
      "application/jose": {
        source: "iana"
      },
      "application/jose+json": {
        source: "iana",
        compressible: !0
      },
      "application/jrd+json": {
        source: "iana",
        compressible: !0
      },
      "application/json": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0,
        extensions: ["json", "map"]
      },
      "application/json-patch+json": {
        source: "iana",
        compressible: !0
      },
      "application/json-seq": {
        source: "iana"
      },
      "application/json5": {
        extensions: ["json5"]
      },
      "application/jsonml+json": {
        source: "apache",
        compressible: !0,
        extensions: ["jsonml"]
      },
      "application/jwk+json": {
        source: "iana",
        compressible: !0
      },
      "application/jwk-set+json": {
        source: "iana",
        compressible: !0
      },
      "application/jwt": {
        source: "iana"
      },
      "application/kpml-request+xml": {
        source: "iana",
        compressible: !0
      },
      "application/kpml-response+xml": {
        source: "iana",
        compressible: !0
      },
      "application/ld+json": {
        source: "iana",
        compressible: !0,
        extensions: ["jsonld"]
      },
      "application/lgr+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["lgr"]
      },
      "application/link-format": {
        source: "iana"
      },
      "application/load-control+xml": {
        source: "iana",
        compressible: !0
      },
      "application/lost+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["lostxml"]
      },
      "application/lostsync+xml": {
        source: "iana",
        compressible: !0
      },
      "application/lpf+zip": {
        source: "iana",
        compressible: !1
      },
      "application/lxf": {
        source: "iana"
      },
      "application/mac-binhex40": {
        source: "iana",
        extensions: ["hqx"]
      },
      "application/mac-compactpro": {
        source: "apache",
        extensions: ["cpt"]
      },
      "application/macwriteii": {
        source: "iana"
      },
      "application/mads+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mads"]
      },
      "application/manifest+json": {
        charset: "UTF-8",
        compressible: !0,
        extensions: ["webmanifest"]
      },
      "application/marc": {
        source: "iana",
        extensions: ["mrc"]
      },
      "application/marcxml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mrcx"]
      },
      "application/mathematica": {
        source: "iana",
        extensions: ["ma", "nb", "mb"]
      },
      "application/mathml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mathml"]
      },
      "application/mathml-content+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mathml-presentation+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-associated-procedure-description+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-deregister+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-envelope+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-msk+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-msk-response+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-protection-description+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-reception-report+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-register+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-register-response+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-schedule+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbms-user-service-description+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mbox": {
        source: "iana",
        extensions: ["mbox"]
      },
      "application/media-policy-dataset+xml": {
        source: "iana",
        compressible: !0
      },
      "application/media_control+xml": {
        source: "iana",
        compressible: !0
      },
      "application/mediaservercontrol+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mscml"]
      },
      "application/merge-patch+json": {
        source: "iana",
        compressible: !0
      },
      "application/metalink+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["metalink"]
      },
      "application/metalink4+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["meta4"]
      },
      "application/mets+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mets"]
      },
      "application/mf4": {
        source: "iana"
      },
      "application/mikey": {
        source: "iana"
      },
      "application/mipc": {
        source: "iana"
      },
      "application/mmt-aei+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["maei"]
      },
      "application/mmt-usd+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["musd"]
      },
      "application/mods+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mods"]
      },
      "application/moss-keys": {
        source: "iana"
      },
      "application/moss-signature": {
        source: "iana"
      },
      "application/mosskey-data": {
        source: "iana"
      },
      "application/mosskey-request": {
        source: "iana"
      },
      "application/mp21": {
        source: "iana",
        extensions: ["m21", "mp21"]
      },
      "application/mp4": {
        source: "iana",
        extensions: ["mp4s", "m4p"]
      },
      "application/mpeg4-generic": {
        source: "iana"
      },
      "application/mpeg4-iod": {
        source: "iana"
      },
      "application/mpeg4-iod-xmt": {
        source: "iana"
      },
      "application/mrb-consumer+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xdf"]
      },
      "application/mrb-publish+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xdf"]
      },
      "application/msc-ivr+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/msc-mixer+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/msword": {
        source: "iana",
        compressible: !1,
        extensions: ["doc", "dot"]
      },
      "application/mud+json": {
        source: "iana",
        compressible: !0
      },
      "application/multipart-core": {
        source: "iana"
      },
      "application/mxf": {
        source: "iana",
        extensions: ["mxf"]
      },
      "application/n-quads": {
        source: "iana",
        extensions: ["nq"]
      },
      "application/n-triples": {
        source: "iana",
        extensions: ["nt"]
      },
      "application/nasdata": {
        source: "iana"
      },
      "application/news-checkgroups": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-groupinfo": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-transmission": {
        source: "iana"
      },
      "application/nlsml+xml": {
        source: "iana",
        compressible: !0
      },
      "application/node": {
        source: "iana",
        extensions: ["cjs"]
      },
      "application/nss": {
        source: "iana"
      },
      "application/ocsp-request": {
        source: "iana"
      },
      "application/ocsp-response": {
        source: "iana"
      },
      "application/octet-stream": {
        source: "iana",
        compressible: !1,
        extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
      },
      "application/oda": {
        source: "iana",
        extensions: ["oda"]
      },
      "application/odm+xml": {
        source: "iana",
        compressible: !0
      },
      "application/odx": {
        source: "iana"
      },
      "application/oebps-package+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["opf"]
      },
      "application/ogg": {
        source: "iana",
        compressible: !1,
        extensions: ["ogx"]
      },
      "application/omdoc+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["omdoc"]
      },
      "application/onenote": {
        source: "apache",
        extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
      },
      "application/oscore": {
        source: "iana"
      },
      "application/oxps": {
        source: "iana",
        extensions: ["oxps"]
      },
      "application/p2p-overlay+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["relo"]
      },
      "application/parityfec": {
        source: "iana"
      },
      "application/passport": {
        source: "iana"
      },
      "application/patch-ops-error+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xer"]
      },
      "application/pdf": {
        source: "iana",
        compressible: !1,
        extensions: ["pdf"]
      },
      "application/pdx": {
        source: "iana"
      },
      "application/pem-certificate-chain": {
        source: "iana"
      },
      "application/pgp-encrypted": {
        source: "iana",
        compressible: !1,
        extensions: ["pgp"]
      },
      "application/pgp-keys": {
        source: "iana"
      },
      "application/pgp-signature": {
        source: "iana",
        extensions: ["asc", "sig"]
      },
      "application/pics-rules": {
        source: "apache",
        extensions: ["prf"]
      },
      "application/pidf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/pidf-diff+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/pkcs10": {
        source: "iana",
        extensions: ["p10"]
      },
      "application/pkcs12": {
        source: "iana"
      },
      "application/pkcs7-mime": {
        source: "iana",
        extensions: ["p7m", "p7c"]
      },
      "application/pkcs7-signature": {
        source: "iana",
        extensions: ["p7s"]
      },
      "application/pkcs8": {
        source: "iana",
        extensions: ["p8"]
      },
      "application/pkcs8-encrypted": {
        source: "iana"
      },
      "application/pkix-attr-cert": {
        source: "iana",
        extensions: ["ac"]
      },
      "application/pkix-cert": {
        source: "iana",
        extensions: ["cer"]
      },
      "application/pkix-crl": {
        source: "iana",
        extensions: ["crl"]
      },
      "application/pkix-pkipath": {
        source: "iana",
        extensions: ["pkipath"]
      },
      "application/pkixcmp": {
        source: "iana",
        extensions: ["pki"]
      },
      "application/pls+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["pls"]
      },
      "application/poc-settings+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/postscript": {
        source: "iana",
        compressible: !0,
        extensions: ["ai", "eps", "ps"]
      },
      "application/ppsp-tracker+json": {
        source: "iana",
        compressible: !0
      },
      "application/problem+json": {
        source: "iana",
        compressible: !0
      },
      "application/problem+xml": {
        source: "iana",
        compressible: !0
      },
      "application/provenance+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["provx"]
      },
      "application/prs.alvestrand.titrax-sheet": {
        source: "iana"
      },
      "application/prs.cww": {
        source: "iana",
        extensions: ["cww"]
      },
      "application/prs.hpub+zip": {
        source: "iana",
        compressible: !1
      },
      "application/prs.nprend": {
        source: "iana"
      },
      "application/prs.plucker": {
        source: "iana"
      },
      "application/prs.rdf-xml-crypt": {
        source: "iana"
      },
      "application/prs.xsf+xml": {
        source: "iana",
        compressible: !0
      },
      "application/pskc+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["pskcxml"]
      },
      "application/pvd+json": {
        source: "iana",
        compressible: !0
      },
      "application/qsig": {
        source: "iana"
      },
      "application/raml+yaml": {
        compressible: !0,
        extensions: ["raml"]
      },
      "application/raptorfec": {
        source: "iana"
      },
      "application/rdap+json": {
        source: "iana",
        compressible: !0
      },
      "application/rdf+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rdf", "owl"]
      },
      "application/reginfo+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rif"]
      },
      "application/relax-ng-compact-syntax": {
        source: "iana",
        extensions: ["rnc"]
      },
      "application/remote-printing": {
        source: "iana"
      },
      "application/reputon+json": {
        source: "iana",
        compressible: !0
      },
      "application/resource-lists+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rl"]
      },
      "application/resource-lists-diff+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rld"]
      },
      "application/rfc+xml": {
        source: "iana",
        compressible: !0
      },
      "application/riscos": {
        source: "iana"
      },
      "application/rlmi+xml": {
        source: "iana",
        compressible: !0
      },
      "application/rls-services+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rs"]
      },
      "application/route-apd+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rapd"]
      },
      "application/route-s-tsid+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["sls"]
      },
      "application/route-usd+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rusd"]
      },
      "application/rpki-ghostbusters": {
        source: "iana",
        extensions: ["gbr"]
      },
      "application/rpki-manifest": {
        source: "iana",
        extensions: ["mft"]
      },
      "application/rpki-publication": {
        source: "iana"
      },
      "application/rpki-roa": {
        source: "iana",
        extensions: ["roa"]
      },
      "application/rpki-updown": {
        source: "iana"
      },
      "application/rsd+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["rsd"]
      },
      "application/rss+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["rss"]
      },
      "application/rtf": {
        source: "iana",
        compressible: !0,
        extensions: ["rtf"]
      },
      "application/rtploopback": {
        source: "iana"
      },
      "application/rtx": {
        source: "iana"
      },
      "application/samlassertion+xml": {
        source: "iana",
        compressible: !0
      },
      "application/samlmetadata+xml": {
        source: "iana",
        compressible: !0
      },
      "application/sbe": {
        source: "iana"
      },
      "application/sbml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["sbml"]
      },
      "application/scaip+xml": {
        source: "iana",
        compressible: !0
      },
      "application/scim+json": {
        source: "iana",
        compressible: !0
      },
      "application/scvp-cv-request": {
        source: "iana",
        extensions: ["scq"]
      },
      "application/scvp-cv-response": {
        source: "iana",
        extensions: ["scs"]
      },
      "application/scvp-vp-request": {
        source: "iana",
        extensions: ["spq"]
      },
      "application/scvp-vp-response": {
        source: "iana",
        extensions: ["spp"]
      },
      "application/sdp": {
        source: "iana",
        extensions: ["sdp"]
      },
      "application/secevent+jwt": {
        source: "iana"
      },
      "application/senml+cbor": {
        source: "iana"
      },
      "application/senml+json": {
        source: "iana",
        compressible: !0
      },
      "application/senml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["senmlx"]
      },
      "application/senml-etch+cbor": {
        source: "iana"
      },
      "application/senml-etch+json": {
        source: "iana",
        compressible: !0
      },
      "application/senml-exi": {
        source: "iana"
      },
      "application/sensml+cbor": {
        source: "iana"
      },
      "application/sensml+json": {
        source: "iana",
        compressible: !0
      },
      "application/sensml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["sensmlx"]
      },
      "application/sensml-exi": {
        source: "iana"
      },
      "application/sep+xml": {
        source: "iana",
        compressible: !0
      },
      "application/sep-exi": {
        source: "iana"
      },
      "application/session-info": {
        source: "iana"
      },
      "application/set-payment": {
        source: "iana"
      },
      "application/set-payment-initiation": {
        source: "iana",
        extensions: ["setpay"]
      },
      "application/set-registration": {
        source: "iana"
      },
      "application/set-registration-initiation": {
        source: "iana",
        extensions: ["setreg"]
      },
      "application/sgml": {
        source: "iana"
      },
      "application/sgml-open-catalog": {
        source: "iana"
      },
      "application/shf+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["shf"]
      },
      "application/sieve": {
        source: "iana",
        extensions: ["siv", "sieve"]
      },
      "application/simple-filter+xml": {
        source: "iana",
        compressible: !0
      },
      "application/simple-message-summary": {
        source: "iana"
      },
      "application/simplesymbolcontainer": {
        source: "iana"
      },
      "application/sipc": {
        source: "iana"
      },
      "application/slate": {
        source: "iana"
      },
      "application/smil": {
        source: "iana"
      },
      "application/smil+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["smi", "smil"]
      },
      "application/smpte336m": {
        source: "iana"
      },
      "application/soap+fastinfoset": {
        source: "iana"
      },
      "application/soap+xml": {
        source: "iana",
        compressible: !0
      },
      "application/sparql-query": {
        source: "iana",
        extensions: ["rq"]
      },
      "application/sparql-results+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["srx"]
      },
      "application/spirits-event+xml": {
        source: "iana",
        compressible: !0
      },
      "application/sql": {
        source: "iana"
      },
      "application/srgs": {
        source: "iana",
        extensions: ["gram"]
      },
      "application/srgs+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["grxml"]
      },
      "application/sru+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["sru"]
      },
      "application/ssdl+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["ssdl"]
      },
      "application/ssml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["ssml"]
      },
      "application/stix+json": {
        source: "iana",
        compressible: !0
      },
      "application/swid+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["swidtag"]
      },
      "application/tamp-apex-update": {
        source: "iana"
      },
      "application/tamp-apex-update-confirm": {
        source: "iana"
      },
      "application/tamp-community-update": {
        source: "iana"
      },
      "application/tamp-community-update-confirm": {
        source: "iana"
      },
      "application/tamp-error": {
        source: "iana"
      },
      "application/tamp-sequence-adjust": {
        source: "iana"
      },
      "application/tamp-sequence-adjust-confirm": {
        source: "iana"
      },
      "application/tamp-status-query": {
        source: "iana"
      },
      "application/tamp-status-response": {
        source: "iana"
      },
      "application/tamp-update": {
        source: "iana"
      },
      "application/tamp-update-confirm": {
        source: "iana"
      },
      "application/tar": {
        compressible: !0
      },
      "application/taxii+json": {
        source: "iana",
        compressible: !0
      },
      "application/td+json": {
        source: "iana",
        compressible: !0
      },
      "application/tei+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["tei", "teicorpus"]
      },
      "application/tetra_isi": {
        source: "iana"
      },
      "application/thraud+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["tfi"]
      },
      "application/timestamp-query": {
        source: "iana"
      },
      "application/timestamp-reply": {
        source: "iana"
      },
      "application/timestamped-data": {
        source: "iana",
        extensions: ["tsd"]
      },
      "application/tlsrpt+gzip": {
        source: "iana"
      },
      "application/tlsrpt+json": {
        source: "iana",
        compressible: !0
      },
      "application/tnauthlist": {
        source: "iana"
      },
      "application/toml": {
        compressible: !0,
        extensions: ["toml"]
      },
      "application/trickle-ice-sdpfrag": {
        source: "iana"
      },
      "application/trig": {
        source: "iana"
      },
      "application/ttml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["ttml"]
      },
      "application/tve-trigger": {
        source: "iana"
      },
      "application/tzif": {
        source: "iana"
      },
      "application/tzif-leap": {
        source: "iana"
      },
      "application/ulpfec": {
        source: "iana"
      },
      "application/urc-grpsheet+xml": {
        source: "iana",
        compressible: !0
      },
      "application/urc-ressheet+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["rsheet"]
      },
      "application/urc-targetdesc+xml": {
        source: "iana",
        compressible: !0
      },
      "application/urc-uisocketdesc+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vcard+json": {
        source: "iana",
        compressible: !0
      },
      "application/vcard+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vemmi": {
        source: "iana"
      },
      "application/vividence.scriptfile": {
        source: "apache"
      },
      "application/vnd.1000minds.decision-model+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["1km"]
      },
      "application/vnd.3gpp-prose+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp-prose-pc3ch+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp-v2x-local-service-information": {
        source: "iana"
      },
      "application/vnd.3gpp.access-transfer-events+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.bsf+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.gmop+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mc-signalling-ear": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-affiliation-command+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcdata-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcdata-payload": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-service-config+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcdata-signalling": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-ue-config+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcdata-user-profile+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-affiliation-command+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-floor-request+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-location-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-service-config+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-signed+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-ue-config+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-ue-init-config+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcptt-user-profile+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-location-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-service-config+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-transmission-request+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-ue-config+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mcvideo-user-profile+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.mid-call+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.pic-bw-large": {
        source: "iana",
        extensions: ["plb"]
      },
      "application/vnd.3gpp.pic-bw-small": {
        source: "iana",
        extensions: ["psb"]
      },
      "application/vnd.3gpp.pic-bw-var": {
        source: "iana",
        extensions: ["pvb"]
      },
      "application/vnd.3gpp.sms": {
        source: "iana"
      },
      "application/vnd.3gpp.sms+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.srvcc-ext+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.srvcc-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.state-and-event-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp.ussd+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp2.bcmcsinfo+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.3gpp2.sms": {
        source: "iana"
      },
      "application/vnd.3gpp2.tcap": {
        source: "iana",
        extensions: ["tcap"]
      },
      "application/vnd.3lightssoftware.imagescal": {
        source: "iana"
      },
      "application/vnd.3m.post-it-notes": {
        source: "iana",
        extensions: ["pwn"]
      },
      "application/vnd.accpac.simply.aso": {
        source: "iana",
        extensions: ["aso"]
      },
      "application/vnd.accpac.simply.imp": {
        source: "iana",
        extensions: ["imp"]
      },
      "application/vnd.acucobol": {
        source: "iana",
        extensions: ["acu"]
      },
      "application/vnd.acucorp": {
        source: "iana",
        extensions: ["atc", "acutc"]
      },
      "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: !1,
        extensions: ["air"]
      },
      "application/vnd.adobe.flash.movie": {
        source: "iana"
      },
      "application/vnd.adobe.formscentral.fcdt": {
        source: "iana",
        extensions: ["fcdt"]
      },
      "application/vnd.adobe.fxp": {
        source: "iana",
        extensions: ["fxp", "fxpl"]
      },
      "application/vnd.adobe.partial-upload": {
        source: "iana"
      },
      "application/vnd.adobe.xdp+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xdp"]
      },
      "application/vnd.adobe.xfdf": {
        source: "iana",
        extensions: ["xfdf"]
      },
      "application/vnd.aether.imp": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata-pagedef": {
        source: "iana"
      },
      "application/vnd.afpc.foca-charset": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codedfont": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codepage": {
        source: "iana"
      },
      "application/vnd.afpc.modca": {
        source: "iana"
      },
      "application/vnd.afpc.modca-formdef": {
        source: "iana"
      },
      "application/vnd.afpc.modca-mediummap": {
        source: "iana"
      },
      "application/vnd.afpc.modca-objectcontainer": {
        source: "iana"
      },
      "application/vnd.afpc.modca-overlay": {
        source: "iana"
      },
      "application/vnd.afpc.modca-pagesegment": {
        source: "iana"
      },
      "application/vnd.ah-barcode": {
        source: "iana"
      },
      "application/vnd.ahead.space": {
        source: "iana",
        extensions: ["ahead"]
      },
      "application/vnd.airzip.filesecure.azf": {
        source: "iana",
        extensions: ["azf"]
      },
      "application/vnd.airzip.filesecure.azs": {
        source: "iana",
        extensions: ["azs"]
      },
      "application/vnd.amadeus+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.amazon.ebook": {
        source: "apache",
        extensions: ["azw"]
      },
      "application/vnd.amazon.mobi8-ebook": {
        source: "iana"
      },
      "application/vnd.americandynamics.acc": {
        source: "iana",
        extensions: ["acc"]
      },
      "application/vnd.amiga.ami": {
        source: "iana",
        extensions: ["ami"]
      },
      "application/vnd.amundsen.maze+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.android.ota": {
        source: "iana"
      },
      "application/vnd.android.package-archive": {
        source: "apache",
        compressible: !1,
        extensions: ["apk"]
      },
      "application/vnd.anki": {
        source: "iana"
      },
      "application/vnd.anser-web-certificate-issue-initiation": {
        source: "iana",
        extensions: ["cii"]
      },
      "application/vnd.anser-web-funds-transfer-initiation": {
        source: "apache",
        extensions: ["fti"]
      },
      "application/vnd.antix.game-component": {
        source: "iana",
        extensions: ["atx"]
      },
      "application/vnd.apache.thrift.binary": {
        source: "iana"
      },
      "application/vnd.apache.thrift.compact": {
        source: "iana"
      },
      "application/vnd.apache.thrift.json": {
        source: "iana"
      },
      "application/vnd.api+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.aplextor.warrp+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.apothekende.reservation+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.apple.installer+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mpkg"]
      },
      "application/vnd.apple.keynote": {
        source: "iana",
        extensions: ["keynote"]
      },
      "application/vnd.apple.mpegurl": {
        source: "iana",
        extensions: ["m3u8"]
      },
      "application/vnd.apple.numbers": {
        source: "iana",
        extensions: ["numbers"]
      },
      "application/vnd.apple.pages": {
        source: "iana",
        extensions: ["pages"]
      },
      "application/vnd.apple.pkpass": {
        compressible: !1,
        extensions: ["pkpass"]
      },
      "application/vnd.arastra.swi": {
        source: "iana"
      },
      "application/vnd.aristanetworks.swi": {
        source: "iana",
        extensions: ["swi"]
      },
      "application/vnd.artisan+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.artsquare": {
        source: "iana"
      },
      "application/vnd.astraea-software.iota": {
        source: "iana",
        extensions: ["iota"]
      },
      "application/vnd.audiograph": {
        source: "iana",
        extensions: ["aep"]
      },
      "application/vnd.autopackage": {
        source: "iana"
      },
      "application/vnd.avalon+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.avistar+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.balsamiq.bmml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["bmml"]
      },
      "application/vnd.balsamiq.bmpr": {
        source: "iana"
      },
      "application/vnd.banana-accounting": {
        source: "iana"
      },
      "application/vnd.bbf.usp.error": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.bekitzur-stech+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.bint.med-content": {
        source: "iana"
      },
      "application/vnd.biopax.rdf+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.blink-idb-value-wrapper": {
        source: "iana"
      },
      "application/vnd.blueice.multipass": {
        source: "iana",
        extensions: ["mpm"]
      },
      "application/vnd.bluetooth.ep.oob": {
        source: "iana"
      },
      "application/vnd.bluetooth.le.oob": {
        source: "iana"
      },
      "application/vnd.bmi": {
        source: "iana",
        extensions: ["bmi"]
      },
      "application/vnd.bpf": {
        source: "iana"
      },
      "application/vnd.bpf3": {
        source: "iana"
      },
      "application/vnd.businessobjects": {
        source: "iana",
        extensions: ["rep"]
      },
      "application/vnd.byu.uapi+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.cab-jscript": {
        source: "iana"
      },
      "application/vnd.canon-cpdl": {
        source: "iana"
      },
      "application/vnd.canon-lips": {
        source: "iana"
      },
      "application/vnd.capasystems-pg+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.cendio.thinlinc.clientconf": {
        source: "iana"
      },
      "application/vnd.century-systems.tcp_stream": {
        source: "iana"
      },
      "application/vnd.chemdraw+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["cdxml"]
      },
      "application/vnd.chess-pgn": {
        source: "iana"
      },
      "application/vnd.chipnuts.karaoke-mmd": {
        source: "iana",
        extensions: ["mmd"]
      },
      "application/vnd.ciedi": {
        source: "iana"
      },
      "application/vnd.cinderella": {
        source: "iana",
        extensions: ["cdy"]
      },
      "application/vnd.cirpack.isdn-ext": {
        source: "iana"
      },
      "application/vnd.citationstyles.style+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["csl"]
      },
      "application/vnd.claymore": {
        source: "iana",
        extensions: ["cla"]
      },
      "application/vnd.cloanto.rp9": {
        source: "iana",
        extensions: ["rp9"]
      },
      "application/vnd.clonk.c4group": {
        source: "iana",
        extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
      },
      "application/vnd.cluetrust.cartomobile-config": {
        source: "iana",
        extensions: ["c11amc"]
      },
      "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: "iana",
        extensions: ["c11amz"]
      },
      "application/vnd.coffeescript": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet-template": {
        source: "iana"
      },
      "application/vnd.collection+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.collection.doc+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.collection.next+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.comicbook+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.comicbook-rar": {
        source: "iana"
      },
      "application/vnd.commerce-battelle": {
        source: "iana"
      },
      "application/vnd.commonspace": {
        source: "iana",
        extensions: ["csp"]
      },
      "application/vnd.contact.cmsg": {
        source: "iana",
        extensions: ["cdbcmsg"]
      },
      "application/vnd.coreos.ignition+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.cosmocaller": {
        source: "iana",
        extensions: ["cmc"]
      },
      "application/vnd.crick.clicker": {
        source: "iana",
        extensions: ["clkx"]
      },
      "application/vnd.crick.clicker.keyboard": {
        source: "iana",
        extensions: ["clkk"]
      },
      "application/vnd.crick.clicker.palette": {
        source: "iana",
        extensions: ["clkp"]
      },
      "application/vnd.crick.clicker.template": {
        source: "iana",
        extensions: ["clkt"]
      },
      "application/vnd.crick.clicker.wordbank": {
        source: "iana",
        extensions: ["clkw"]
      },
      "application/vnd.criticaltools.wbs+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["wbs"]
      },
      "application/vnd.cryptii.pipe+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.crypto-shade-file": {
        source: "iana"
      },
      "application/vnd.ctc-posml": {
        source: "iana",
        extensions: ["pml"]
      },
      "application/vnd.ctct.ws+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.cups-pdf": {
        source: "iana"
      },
      "application/vnd.cups-postscript": {
        source: "iana"
      },
      "application/vnd.cups-ppd": {
        source: "iana",
        extensions: ["ppd"]
      },
      "application/vnd.cups-raster": {
        source: "iana"
      },
      "application/vnd.cups-raw": {
        source: "iana"
      },
      "application/vnd.curl": {
        source: "iana"
      },
      "application/vnd.curl.car": {
        source: "apache",
        extensions: ["car"]
      },
      "application/vnd.curl.pcurl": {
        source: "apache",
        extensions: ["pcurl"]
      },
      "application/vnd.cyan.dean.root+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.cybank": {
        source: "iana"
      },
      "application/vnd.d2l.coursepackage1p0+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.dart": {
        source: "iana",
        compressible: !0,
        extensions: ["dart"]
      },
      "application/vnd.data-vision.rdz": {
        source: "iana",
        extensions: ["rdz"]
      },
      "application/vnd.datapackage+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dataresource+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dbf": {
        source: "iana"
      },
      "application/vnd.debian.binary-package": {
        source: "iana"
      },
      "application/vnd.dece.data": {
        source: "iana",
        extensions: ["uvf", "uvvf", "uvd", "uvvd"]
      },
      "application/vnd.dece.ttml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["uvt", "uvvt"]
      },
      "application/vnd.dece.unspecified": {
        source: "iana",
        extensions: ["uvx", "uvvx"]
      },
      "application/vnd.dece.zip": {
        source: "iana",
        extensions: ["uvz", "uvvz"]
      },
      "application/vnd.denovo.fcselayout-link": {
        source: "iana",
        extensions: ["fe_launch"]
      },
      "application/vnd.desmume.movie": {
        source: "iana"
      },
      "application/vnd.dir-bi.plate-dl-nosuffix": {
        source: "iana"
      },
      "application/vnd.dm.delegation+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dna": {
        source: "iana",
        extensions: ["dna"]
      },
      "application/vnd.document+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dolby.mlp": {
        source: "apache",
        extensions: ["mlp"]
      },
      "application/vnd.dolby.mobile.1": {
        source: "iana"
      },
      "application/vnd.dolby.mobile.2": {
        source: "iana"
      },
      "application/vnd.doremir.scorecloud-binary-document": {
        source: "iana"
      },
      "application/vnd.dpgraph": {
        source: "iana",
        extensions: ["dpg"]
      },
      "application/vnd.dreamfactory": {
        source: "iana",
        extensions: ["dfac"]
      },
      "application/vnd.drive+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ds-keypoint": {
        source: "apache",
        extensions: ["kpxx"]
      },
      "application/vnd.dtg.local": {
        source: "iana"
      },
      "application/vnd.dtg.local.flash": {
        source: "iana"
      },
      "application/vnd.dtg.local.html": {
        source: "iana"
      },
      "application/vnd.dvb.ait": {
        source: "iana",
        extensions: ["ait"]
      },
      "application/vnd.dvb.dvbisl+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dvb.dvbj": {
        source: "iana"
      },
      "application/vnd.dvb.esgcontainer": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcdftnotifaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess2": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgpdd": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcroaming": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-base": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-enhancement": {
        source: "iana"
      },
      "application/vnd.dvb.notif-aggregate-root+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dvb.notif-container+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dvb.notif-generic+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dvb.notif-ia-msglist+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dvb.notif-ia-registration-request+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dvb.notif-ia-registration-response+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dvb.notif-init+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.dvb.pfr": {
        source: "iana"
      },
      "application/vnd.dvb.service": {
        source: "iana",
        extensions: ["svc"]
      },
      "application/vnd.dxr": {
        source: "iana"
      },
      "application/vnd.dynageo": {
        source: "iana",
        extensions: ["geo"]
      },
      "application/vnd.dzr": {
        source: "iana"
      },
      "application/vnd.easykaraoke.cdgdownload": {
        source: "iana"
      },
      "application/vnd.ecdis-update": {
        source: "iana"
      },
      "application/vnd.ecip.rlp": {
        source: "iana"
      },
      "application/vnd.ecowin.chart": {
        source: "iana",
        extensions: ["mag"]
      },
      "application/vnd.ecowin.filerequest": {
        source: "iana"
      },
      "application/vnd.ecowin.fileupdate": {
        source: "iana"
      },
      "application/vnd.ecowin.series": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesrequest": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesupdate": {
        source: "iana"
      },
      "application/vnd.efi.img": {
        source: "iana"
      },
      "application/vnd.efi.iso": {
        source: "iana"
      },
      "application/vnd.emclient.accessrequest+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.enliven": {
        source: "iana",
        extensions: ["nml"]
      },
      "application/vnd.enphase.envoy": {
        source: "iana"
      },
      "application/vnd.eprints.data+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.epson.esf": {
        source: "iana",
        extensions: ["esf"]
      },
      "application/vnd.epson.msf": {
        source: "iana",
        extensions: ["msf"]
      },
      "application/vnd.epson.quickanime": {
        source: "iana",
        extensions: ["qam"]
      },
      "application/vnd.epson.salt": {
        source: "iana",
        extensions: ["slt"]
      },
      "application/vnd.epson.ssf": {
        source: "iana",
        extensions: ["ssf"]
      },
      "application/vnd.ericsson.quickcall": {
        source: "iana"
      },
      "application/vnd.espass-espass+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.eszigno3+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["es3", "et3"]
      },
      "application/vnd.etsi.aoc+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.asic-e+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.etsi.asic-s+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.etsi.cug+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvcommand+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvdiscovery+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvprofile+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvsad-bc+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvsad-cod+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvsad-npvr+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvservice+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvsync+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.iptvueprofile+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.mcid+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.mheg5": {
        source: "iana"
      },
      "application/vnd.etsi.overload-control-policy-dataset+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.pstn+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.sci+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.simservs+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.timestamp-token": {
        source: "iana"
      },
      "application/vnd.etsi.tsl+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.etsi.tsl.der": {
        source: "iana"
      },
      "application/vnd.eudora.data": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.profile": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.settings": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.theme": {
        source: "iana"
      },
      "application/vnd.exstream-empower+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.exstream-package": {
        source: "iana"
      },
      "application/vnd.ezpix-album": {
        source: "iana",
        extensions: ["ez2"]
      },
      "application/vnd.ezpix-package": {
        source: "iana",
        extensions: ["ez3"]
      },
      "application/vnd.f-secure.mobile": {
        source: "iana"
      },
      "application/vnd.fastcopy-disk-image": {
        source: "iana"
      },
      "application/vnd.fdf": {
        source: "iana",
        extensions: ["fdf"]
      },
      "application/vnd.fdsn.mseed": {
        source: "iana",
        extensions: ["mseed"]
      },
      "application/vnd.fdsn.seed": {
        source: "iana",
        extensions: ["seed", "dataless"]
      },
      "application/vnd.ffsns": {
        source: "iana"
      },
      "application/vnd.ficlab.flb+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.filmit.zfc": {
        source: "iana"
      },
      "application/vnd.fints": {
        source: "iana"
      },
      "application/vnd.firemonkeys.cloudcell": {
        source: "iana"
      },
      "application/vnd.flographit": {
        source: "iana",
        extensions: ["gph"]
      },
      "application/vnd.fluxtime.clip": {
        source: "iana",
        extensions: ["ftc"]
      },
      "application/vnd.font-fontforge-sfd": {
        source: "iana"
      },
      "application/vnd.framemaker": {
        source: "iana",
        extensions: ["fm", "frame", "maker", "book"]
      },
      "application/vnd.frogans.fnc": {
        source: "iana",
        extensions: ["fnc"]
      },
      "application/vnd.frogans.ltf": {
        source: "iana",
        extensions: ["ltf"]
      },
      "application/vnd.fsc.weblaunch": {
        source: "iana",
        extensions: ["fsc"]
      },
      "application/vnd.fujitsu.oasys": {
        source: "iana",
        extensions: ["oas"]
      },
      "application/vnd.fujitsu.oasys2": {
        source: "iana",
        extensions: ["oa2"]
      },
      "application/vnd.fujitsu.oasys3": {
        source: "iana",
        extensions: ["oa3"]
      },
      "application/vnd.fujitsu.oasysgp": {
        source: "iana",
        extensions: ["fg5"]
      },
      "application/vnd.fujitsu.oasysprs": {
        source: "iana",
        extensions: ["bh2"]
      },
      "application/vnd.fujixerox.art-ex": {
        source: "iana"
      },
      "application/vnd.fujixerox.art4": {
        source: "iana"
      },
      "application/vnd.fujixerox.ddd": {
        source: "iana",
        extensions: ["ddd"]
      },
      "application/vnd.fujixerox.docuworks": {
        source: "iana",
        extensions: ["xdw"]
      },
      "application/vnd.fujixerox.docuworks.binder": {
        source: "iana",
        extensions: ["xbd"]
      },
      "application/vnd.fujixerox.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujixerox.hbpl": {
        source: "iana"
      },
      "application/vnd.fut-misnet": {
        source: "iana"
      },
      "application/vnd.futoin+cbor": {
        source: "iana"
      },
      "application/vnd.futoin+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.fuzzysheet": {
        source: "iana",
        extensions: ["fzs"]
      },
      "application/vnd.genomatix.tuxedo": {
        source: "iana",
        extensions: ["txd"]
      },
      "application/vnd.gentics.grd+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.geo+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.geocube+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.geogebra.file": {
        source: "iana",
        extensions: ["ggb"]
      },
      "application/vnd.geogebra.tool": {
        source: "iana",
        extensions: ["ggt"]
      },
      "application/vnd.geometry-explorer": {
        source: "iana",
        extensions: ["gex", "gre"]
      },
      "application/vnd.geonext": {
        source: "iana",
        extensions: ["gxt"]
      },
      "application/vnd.geoplan": {
        source: "iana",
        extensions: ["g2w"]
      },
      "application/vnd.geospace": {
        source: "iana",
        extensions: ["g3w"]
      },
      "application/vnd.gerber": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt-response": {
        source: "iana"
      },
      "application/vnd.gmx": {
        source: "iana",
        extensions: ["gmx"]
      },
      "application/vnd.google-apps.document": {
        compressible: !1,
        extensions: ["gdoc"]
      },
      "application/vnd.google-apps.presentation": {
        compressible: !1,
        extensions: ["gslides"]
      },
      "application/vnd.google-apps.spreadsheet": {
        compressible: !1,
        extensions: ["gsheet"]
      },
      "application/vnd.google-earth.kml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["kml"]
      },
      "application/vnd.google-earth.kmz": {
        source: "iana",
        compressible: !1,
        extensions: ["kmz"]
      },
      "application/vnd.gov.sk.e-form+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.gov.sk.e-form+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.gov.sk.xmldatacontainer+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.grafeq": {
        source: "iana",
        extensions: ["gqf", "gqs"]
      },
      "application/vnd.gridmp": {
        source: "iana"
      },
      "application/vnd.groove-account": {
        source: "iana",
        extensions: ["gac"]
      },
      "application/vnd.groove-help": {
        source: "iana",
        extensions: ["ghf"]
      },
      "application/vnd.groove-identity-message": {
        source: "iana",
        extensions: ["gim"]
      },
      "application/vnd.groove-injector": {
        source: "iana",
        extensions: ["grv"]
      },
      "application/vnd.groove-tool-message": {
        source: "iana",
        extensions: ["gtm"]
      },
      "application/vnd.groove-tool-template": {
        source: "iana",
        extensions: ["tpl"]
      },
      "application/vnd.groove-vcard": {
        source: "iana",
        extensions: ["vcg"]
      },
      "application/vnd.hal+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.hal+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["hal"]
      },
      "application/vnd.handheld-entertainment+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["zmm"]
      },
      "application/vnd.hbci": {
        source: "iana",
        extensions: ["hbci"]
      },
      "application/vnd.hc+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.hcl-bireports": {
        source: "iana"
      },
      "application/vnd.hdt": {
        source: "iana"
      },
      "application/vnd.heroku+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.hhe.lesson-player": {
        source: "iana",
        extensions: ["les"]
      },
      "application/vnd.hp-hpgl": {
        source: "iana",
        extensions: ["hpgl"]
      },
      "application/vnd.hp-hpid": {
        source: "iana",
        extensions: ["hpid"]
      },
      "application/vnd.hp-hps": {
        source: "iana",
        extensions: ["hps"]
      },
      "application/vnd.hp-jlyt": {
        source: "iana",
        extensions: ["jlt"]
      },
      "application/vnd.hp-pcl": {
        source: "iana",
        extensions: ["pcl"]
      },
      "application/vnd.hp-pclxl": {
        source: "iana",
        extensions: ["pclxl"]
      },
      "application/vnd.httphone": {
        source: "iana"
      },
      "application/vnd.hydrostatix.sof-data": {
        source: "iana",
        extensions: ["sfd-hdstx"]
      },
      "application/vnd.hyper+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.hyper-item+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.hyperdrive+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.hzn-3d-crossword": {
        source: "iana"
      },
      "application/vnd.ibm.afplinedata": {
        source: "iana"
      },
      "application/vnd.ibm.electronic-media": {
        source: "iana"
      },
      "application/vnd.ibm.minipay": {
        source: "iana",
        extensions: ["mpy"]
      },
      "application/vnd.ibm.modcap": {
        source: "iana",
        extensions: ["afp", "listafp", "list3820"]
      },
      "application/vnd.ibm.rights-management": {
        source: "iana",
        extensions: ["irm"]
      },
      "application/vnd.ibm.secure-container": {
        source: "iana",
        extensions: ["sc"]
      },
      "application/vnd.iccprofile": {
        source: "iana",
        extensions: ["icc", "icm"]
      },
      "application/vnd.ieee.1905": {
        source: "iana"
      },
      "application/vnd.igloader": {
        source: "iana",
        extensions: ["igl"]
      },
      "application/vnd.imagemeter.folder+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.imagemeter.image+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.immervision-ivp": {
        source: "iana",
        extensions: ["ivp"]
      },
      "application/vnd.immervision-ivu": {
        source: "iana",
        extensions: ["ivu"]
      },
      "application/vnd.ims.imsccv1p1": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p2": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p3": {
        source: "iana"
      },
      "application/vnd.ims.lis.v2.result+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ims.lti.v2.toolproxy+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ims.lti.v2.toolproxy.id+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ims.lti.v2.toolsettings+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.informedcontrol.rms+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.informix-visionary": {
        source: "iana"
      },
      "application/vnd.infotech.project": {
        source: "iana"
      },
      "application/vnd.infotech.project+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.innopath.wamp.notification": {
        source: "iana"
      },
      "application/vnd.insors.igm": {
        source: "iana",
        extensions: ["igm"]
      },
      "application/vnd.intercon.formnet": {
        source: "iana",
        extensions: ["xpw", "xpx"]
      },
      "application/vnd.intergeo": {
        source: "iana",
        extensions: ["i2g"]
      },
      "application/vnd.intertrust.digibox": {
        source: "iana"
      },
      "application/vnd.intertrust.nncp": {
        source: "iana"
      },
      "application/vnd.intu.qbo": {
        source: "iana",
        extensions: ["qbo"]
      },
      "application/vnd.intu.qfx": {
        source: "iana",
        extensions: ["qfx"]
      },
      "application/vnd.iptc.g2.catalogitem+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.iptc.g2.conceptitem+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.iptc.g2.knowledgeitem+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.iptc.g2.newsitem+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.iptc.g2.newsmessage+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.iptc.g2.packageitem+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.iptc.g2.planningitem+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ipunplugged.rcprofile": {
        source: "iana",
        extensions: ["rcprofile"]
      },
      "application/vnd.irepository.package+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["irp"]
      },
      "application/vnd.is-xpr": {
        source: "iana",
        extensions: ["xpr"]
      },
      "application/vnd.isac.fcs": {
        source: "iana",
        extensions: ["fcs"]
      },
      "application/vnd.iso11783-10+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.jam": {
        source: "iana",
        extensions: ["jam"]
      },
      "application/vnd.japannet-directory-service": {
        source: "iana"
      },
      "application/vnd.japannet-jpnstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-payment-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-registration": {
        source: "iana"
      },
      "application/vnd.japannet-registration-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-setstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-verification": {
        source: "iana"
      },
      "application/vnd.japannet-verification-wakeup": {
        source: "iana"
      },
      "application/vnd.jcp.javame.midlet-rms": {
        source: "iana",
        extensions: ["rms"]
      },
      "application/vnd.jisp": {
        source: "iana",
        extensions: ["jisp"]
      },
      "application/vnd.joost.joda-archive": {
        source: "iana",
        extensions: ["joda"]
      },
      "application/vnd.jsk.isdn-ngn": {
        source: "iana"
      },
      "application/vnd.kahootz": {
        source: "iana",
        extensions: ["ktz", "ktr"]
      },
      "application/vnd.kde.karbon": {
        source: "iana",
        extensions: ["karbon"]
      },
      "application/vnd.kde.kchart": {
        source: "iana",
        extensions: ["chrt"]
      },
      "application/vnd.kde.kformula": {
        source: "iana",
        extensions: ["kfo"]
      },
      "application/vnd.kde.kivio": {
        source: "iana",
        extensions: ["flw"]
      },
      "application/vnd.kde.kontour": {
        source: "iana",
        extensions: ["kon"]
      },
      "application/vnd.kde.kpresenter": {
        source: "iana",
        extensions: ["kpr", "kpt"]
      },
      "application/vnd.kde.kspread": {
        source: "iana",
        extensions: ["ksp"]
      },
      "application/vnd.kde.kword": {
        source: "iana",
        extensions: ["kwd", "kwt"]
      },
      "application/vnd.kenameaapp": {
        source: "iana",
        extensions: ["htke"]
      },
      "application/vnd.kidspiration": {
        source: "iana",
        extensions: ["kia"]
      },
      "application/vnd.kinar": {
        source: "iana",
        extensions: ["kne", "knp"]
      },
      "application/vnd.koan": {
        source: "iana",
        extensions: ["skp", "skd", "skt", "skm"]
      },
      "application/vnd.kodak-descriptor": {
        source: "iana",
        extensions: ["sse"]
      },
      "application/vnd.las": {
        source: "iana"
      },
      "application/vnd.las.las+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.las.las+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["lasxml"]
      },
      "application/vnd.laszip": {
        source: "iana"
      },
      "application/vnd.leap+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.liberty-request+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.llamagraphics.life-balance.desktop": {
        source: "iana",
        extensions: ["lbd"]
      },
      "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["lbe"]
      },
      "application/vnd.logipipe.circuit+zip": {
        source: "iana",
        compressible: !1
      },
      "application/vnd.loom": {
        source: "iana"
      },
      "application/vnd.lotus-1-2-3": {
        source: "iana",
        extensions: ["123"]
      },
      "application/vnd.lotus-approach": {
        source: "iana",
        extensions: ["apr"]
      },
      "application/vnd.lotus-freelance": {
        source: "iana",
        extensions: ["pre"]
      },
      "application/vnd.lotus-notes": {
        source: "iana",
        extensions: ["nsf"]
      },
      "application/vnd.lotus-organizer": {
        source: "iana",
        extensions: ["org"]
      },
      "application/vnd.lotus-screencam": {
        source: "iana",
        extensions: ["scm"]
      },
      "application/vnd.lotus-wordpro": {
        source: "iana",
        extensions: ["lwp"]
      },
      "application/vnd.macports.portpkg": {
        source: "iana",
        extensions: ["portpkg"]
      },
      "application/vnd.mapbox-vector-tile": {
        source: "iana"
      },
      "application/vnd.marlin.drm.actiontoken+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.marlin.drm.conftoken+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.marlin.drm.license+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.marlin.drm.mdcf": {
        source: "iana"
      },
      "application/vnd.mason+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.maxmind.maxmind-db": {
        source: "iana"
      },
      "application/vnd.mcd": {
        source: "iana",
        extensions: ["mcd"]
      },
      "application/vnd.medcalcdata": {
        source: "iana",
        extensions: ["mc1"]
      },
      "application/vnd.mediastation.cdkey": {
        source: "iana",
        extensions: ["cdkey"]
      },
      "application/vnd.meridian-slingshot": {
        source: "iana"
      },
      "application/vnd.mfer": {
        source: "iana",
        extensions: ["mwf"]
      },
      "application/vnd.mfmp": {
        source: "iana",
        extensions: ["mfm"]
      },
      "application/vnd.micro+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.micrografx.flo": {
        source: "iana",
        extensions: ["flo"]
      },
      "application/vnd.micrografx.igx": {
        source: "iana",
        extensions: ["igx"]
      },
      "application/vnd.microsoft.portable-executable": {
        source: "iana"
      },
      "application/vnd.microsoft.windows.thumbnail-cache": {
        source: "iana"
      },
      "application/vnd.miele+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.mif": {
        source: "iana",
        extensions: ["mif"]
      },
      "application/vnd.minisoft-hp3000-save": {
        source: "iana"
      },
      "application/vnd.mitsubishi.misty-guard.trustweb": {
        source: "iana"
      },
      "application/vnd.mobius.daf": {
        source: "iana",
        extensions: ["daf"]
      },
      "application/vnd.mobius.dis": {
        source: "iana",
        extensions: ["dis"]
      },
      "application/vnd.mobius.mbk": {
        source: "iana",
        extensions: ["mbk"]
      },
      "application/vnd.mobius.mqy": {
        source: "iana",
        extensions: ["mqy"]
      },
      "application/vnd.mobius.msl": {
        source: "iana",
        extensions: ["msl"]
      },
      "application/vnd.mobius.plc": {
        source: "iana",
        extensions: ["plc"]
      },
      "application/vnd.mobius.txf": {
        source: "iana",
        extensions: ["txf"]
      },
      "application/vnd.mophun.application": {
        source: "iana",
        extensions: ["mpn"]
      },
      "application/vnd.mophun.certificate": {
        source: "iana",
        extensions: ["mpc"]
      },
      "application/vnd.motorola.flexsuite": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.adsi": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.fis": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.gotap": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.kmr": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.ttc": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.wem": {
        source: "iana"
      },
      "application/vnd.motorola.iprm": {
        source: "iana"
      },
      "application/vnd.mozilla.xul+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xul"]
      },
      "application/vnd.ms-3mfdocument": {
        source: "iana"
      },
      "application/vnd.ms-artgalry": {
        source: "iana",
        extensions: ["cil"]
      },
      "application/vnd.ms-asf": {
        source: "iana"
      },
      "application/vnd.ms-cab-compressed": {
        source: "iana",
        extensions: ["cab"]
      },
      "application/vnd.ms-color.iccprofile": {
        source: "apache"
      },
      "application/vnd.ms-excel": {
        source: "iana",
        compressible: !1,
        extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
      },
      "application/vnd.ms-excel.addin.macroenabled.12": {
        source: "iana",
        extensions: ["xlam"]
      },
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: "iana",
        extensions: ["xlsb"]
      },
      "application/vnd.ms-excel.sheet.macroenabled.12": {
        source: "iana",
        extensions: ["xlsm"]
      },
      "application/vnd.ms-excel.template.macroenabled.12": {
        source: "iana",
        extensions: ["xltm"]
      },
      "application/vnd.ms-fontobject": {
        source: "iana",
        compressible: !0,
        extensions: ["eot"]
      },
      "application/vnd.ms-htmlhelp": {
        source: "iana",
        extensions: ["chm"]
      },
      "application/vnd.ms-ims": {
        source: "iana",
        extensions: ["ims"]
      },
      "application/vnd.ms-lrm": {
        source: "iana",
        extensions: ["lrm"]
      },
      "application/vnd.ms-office.activex+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ms-officetheme": {
        source: "iana",
        extensions: ["thmx"]
      },
      "application/vnd.ms-opentype": {
        source: "apache",
        compressible: !0
      },
      "application/vnd.ms-outlook": {
        compressible: !1,
        extensions: ["msg"]
      },
      "application/vnd.ms-package.obfuscated-opentype": {
        source: "apache"
      },
      "application/vnd.ms-pki.seccat": {
        source: "apache",
        extensions: ["cat"]
      },
      "application/vnd.ms-pki.stl": {
        source: "apache",
        extensions: ["stl"]
      },
      "application/vnd.ms-playready.initiator+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ms-powerpoint": {
        source: "iana",
        compressible: !1,
        extensions: ["ppt", "pps", "pot"]
      },
      "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: "iana",
        extensions: ["ppam"]
      },
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: "iana",
        extensions: ["pptm"]
      },
      "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: "iana",
        extensions: ["sldm"]
      },
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: "iana",
        extensions: ["ppsm"]
      },
      "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: "iana",
        extensions: ["potm"]
      },
      "application/vnd.ms-printdevicecapabilities+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ms-printing.printticket+xml": {
        source: "apache",
        compressible: !0
      },
      "application/vnd.ms-printschematicket+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.ms-project": {
        source: "iana",
        extensions: ["mpp", "mpt"]
      },
      "application/vnd.ms-tnef": {
        source: "iana"
      },
      "application/vnd.ms-windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.nwprinting.oob": {
        source: "iana"
      },
      "application/vnd.ms-windows.printerpairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.wsd.oob": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-resp": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-resp": {
        source: "iana"
      },
      "application/vnd.ms-word.document.macroenabled.12": {
        source: "iana",
        extensions: ["docm"]
      },
      "application/vnd.ms-word.template.macroenabled.12": {
        source: "iana",
        extensions: ["dotm"]
      },
      "application/vnd.ms-works": {
        source: "iana",
        extensions: ["wps", "wks", "wcm", "wdb"]
      },
      "application/vnd.ms-wpl": {
        source: "iana",
        extensions: ["wpl"]
      },
      "application/vnd.ms-xpsdocument": {
        source: "iana",
        compressible: !1,
        extensions: ["xps"]
      },
      "application/vnd.msa-disk-image": {
        source: "iana"
      },
      "application/vnd.mseq": {
        source: "iana",
        extensions: ["mseq"]
      },
      "application/vnd.msign": {
        source: "iana"
      },
      "application/vnd.multiad.creator": {
        source: "iana"
      },
      "application/vnd.multiad.creator.cif": {
        source: "iana"
      },
      "application/vnd.music-niff": {
        source: "iana"
      },
      "application/vnd.musician": {
        source: "iana",
        extensions: ["mus"]
      },
      "application/vnd.muvee.style": {
        source: "iana",
        extensions: ["msty"]
      },
      "application/vnd.mynfc": {
        source: "iana",
        extensions: ["taglet"]
      },
      "application/vnd.ncd.control": {
        source: "iana"
      },
      "application/vnd.ncd.reference": {
        source: "iana"
      },
      "application/vnd.nearst.inv+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.nervana": {
        source: "iana"
      },
      "application/vnd.netfpx": {
        source: "iana"
      },
      "application/vnd.neurolanguage.nlu": {
        source: "iana",
        extensions: ["nlu"]
      },
      "application/vnd.nimn": {
        source: "iana"
      },
      "application/vnd.nintendo.nitro.rom": {
        source: "iana"
      },
      "application/vnd.nintendo.snes.rom": {
        source: "iana"
      },
      "application/vnd.nitf": {
        source: "iana",
        extensions: ["ntf", "nitf"]
      },
      "application/vnd.noblenet-directory": {
        source: "iana",
        extensions: ["nnd"]
      },
      "application/vnd.noblenet-sealer": {
        source: "iana",
        extensions: ["nns"]
      },
      "application/vnd.noblenet-web": {
        source: "iana",
        extensions: ["nnw"]
      },
      "application/vnd.nokia.catalogs": {
        source: "iana"
      },
      "application/vnd.nokia.conml+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.conml+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.nokia.iptv.config+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.nokia.isds-radio-presets": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.nokia.landmarkcollection+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.nokia.n-gage.ac+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["ac"]
      },
      "application/vnd.nokia.n-gage.data": {
        source: "iana",
        extensions: ["ngdat"]
      },
      "application/vnd.nokia.n-gage.symbian.install": {
        source: "iana",
        extensions: ["n-gage"]
      },
      "application/vnd.nokia.ncd": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.nokia.radio-preset": {
        source: "iana",
        extensions: ["rpst"]
      },
      "application/vnd.nokia.radio-presets": {
        source: "iana",
        extensions: ["rpss"]
      },
      "application/vnd.novadigm.edm": {
        source: "iana",
        extensions: ["edm"]
      },
      "application/vnd.novadigm.edx": {
        source: "iana",
        extensions: ["edx"]
      },
      "application/vnd.novadigm.ext": {
        source: "iana",
        extensions: ["ext"]
      },
      "application/vnd.ntt-local.content-share": {
        source: "iana"
      },
      "application/vnd.ntt-local.file-transfer": {
        source: "iana"
      },
      "application/vnd.ntt-local.ogw_remote-access": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_remote": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_tcp_stream": {
        source: "iana"
      },
      "application/vnd.oasis.opendocument.chart": {
        source: "iana",
        extensions: ["odc"]
      },
      "application/vnd.oasis.opendocument.chart-template": {
        source: "iana",
        extensions: ["otc"]
      },
      "application/vnd.oasis.opendocument.database": {
        source: "iana",
        extensions: ["odb"]
      },
      "application/vnd.oasis.opendocument.formula": {
        source: "iana",
        extensions: ["odf"]
      },
      "application/vnd.oasis.opendocument.formula-template": {
        source: "iana",
        extensions: ["odft"]
      },
      "application/vnd.oasis.opendocument.graphics": {
        source: "iana",
        compressible: !1,
        extensions: ["odg"]
      },
      "application/vnd.oasis.opendocument.graphics-template": {
        source: "iana",
        extensions: ["otg"]
      },
      "application/vnd.oasis.opendocument.image": {
        source: "iana",
        extensions: ["odi"]
      },
      "application/vnd.oasis.opendocument.image-template": {
        source: "iana",
        extensions: ["oti"]
      },
      "application/vnd.oasis.opendocument.presentation": {
        source: "iana",
        compressible: !1,
        extensions: ["odp"]
      },
      "application/vnd.oasis.opendocument.presentation-template": {
        source: "iana",
        extensions: ["otp"]
      },
      "application/vnd.oasis.opendocument.spreadsheet": {
        source: "iana",
        compressible: !1,
        extensions: ["ods"]
      },
      "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: "iana",
        extensions: ["ots"]
      },
      "application/vnd.oasis.opendocument.text": {
        source: "iana",
        compressible: !1,
        extensions: ["odt"]
      },
      "application/vnd.oasis.opendocument.text-master": {
        source: "iana",
        extensions: ["odm"]
      },
      "application/vnd.oasis.opendocument.text-template": {
        source: "iana",
        extensions: ["ott"]
      },
      "application/vnd.oasis.opendocument.text-web": {
        source: "iana",
        extensions: ["oth"]
      },
      "application/vnd.obn": {
        source: "iana"
      },
      "application/vnd.ocf+cbor": {
        source: "iana"
      },
      "application/vnd.oci.image.manifest.v1+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oftn.l10n+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.contentaccessdownload+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.contentaccessstreaming+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.cspg-hexbinary": {
        source: "iana"
      },
      "application/vnd.oipf.dae.svg+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.dae.xhtml+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.mippvcontrolmessage+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.pae.gem": {
        source: "iana"
      },
      "application/vnd.oipf.spdiscovery+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.spdlist+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.ueprofile+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oipf.userprofile+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.olpc-sugar": {
        source: "iana",
        extensions: ["xo"]
      },
      "application/vnd.oma-scws-config": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-request": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-response": {
        source: "iana"
      },
      "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.bcast.drm-trigger+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.bcast.imd+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.bcast.ltkm": {
        source: "iana"
      },
      "application/vnd.oma.bcast.notification+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.bcast.provisioningtrigger": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgboot": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgdd+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.bcast.sgdu": {
        source: "iana"
      },
      "application/vnd.oma.bcast.simple-symbol-container": {
        source: "iana"
      },
      "application/vnd.oma.bcast.smartcard-trigger+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.bcast.sprov+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.bcast.stkm": {
        source: "iana"
      },
      "application/vnd.oma.cab-address-book+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.cab-feature-handler+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.cab-pcc+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.cab-subs-invite+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.cab-user-prefs+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.dcd": {
        source: "iana"
      },
      "application/vnd.oma.dcdc": {
        source: "iana"
      },
      "application/vnd.oma.dd2+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["dd2"]
      },
      "application/vnd.oma.drm.risd+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.group-usage-list+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.lwm2m+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.lwm2m+tlv": {
        source: "iana"
      },
      "application/vnd.oma.pal+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.poc.detailed-progress-report+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.poc.final-report+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.poc.groups+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.poc.invocation-descriptor+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.poc.optimized-progress-report+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.push": {
        source: "iana"
      },
      "application/vnd.oma.scidm.messages+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oma.xcap-directory+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.omads-email+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/vnd.omads-file+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/vnd.omads-folder+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/vnd.omaloc-supl-init": {
        source: "iana"
      },
      "application/vnd.onepager": {
        source: "iana"
      },
      "application/vnd.onepagertamp": {
        source: "iana"
      },
      "application/vnd.onepagertamx": {
        source: "iana"
      },
      "application/vnd.onepagertat": {
        source: "iana"
      },
      "application/vnd.onepagertatp": {
        source: "iana"
      },
      "application/vnd.onepagertatx": {
        source: "iana"
      },
      "application/vnd.openblox.game+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["obgx"]
      },
      "application/vnd.openblox.game-binary": {
        source: "iana"
      },
      "application/vnd.openeye.oeb": {
        source: "iana"
      },
      "application/vnd.openofficeorg.extension": {
        source: "apache",
        extensions: ["oxt"]
      },
      "application/vnd.openstreetmap.data+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["osm"]
      },
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.drawing+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: !1,
        extensions: ["pptx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: "iana",
        extensions: ["sldx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: "iana",
        extensions: ["ppsx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: "iana",
        extensions: ["potx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: !1,
        extensions: ["xlsx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: "iana",
        extensions: ["xltx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.theme+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.vmldrawing": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: !1,
        extensions: ["docx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: "iana",
        extensions: ["dotx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-package.core-properties+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.openxmlformats-package.relationships+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oracle.resource+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.orange.indata": {
        source: "iana"
      },
      "application/vnd.osa.netdeploy": {
        source: "iana"
      },
      "application/vnd.osgeo.mapguide.package": {
        source: "iana",
        extensions: ["mgp"]
      },
      "application/vnd.osgi.bundle": {
        source: "iana"
      },
      "application/vnd.osgi.dp": {
        source: "iana",
        extensions: ["dp"]
      },
      "application/vnd.osgi.subsystem": {
        source: "iana",
        extensions: ["esa"]
      },
      "application/vnd.otps.ct-kip+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.oxli.countgraph": {
        source: "iana"
      },
      "application/vnd.pagerduty+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.palm": {
        source: "iana",
        extensions: ["pdb", "pqa", "oprc"]
      },
      "application/vnd.panoply": {
        source: "iana"
      },
      "application/vnd.paos.xml": {
        source: "iana"
      },
      "application/vnd.patentdive": {
        source: "iana"
      },
      "application/vnd.patientecommsdoc": {
        source: "iana"
      },
      "application/vnd.pawaafile": {
        source: "iana",
        extensions: ["paw"]
      },
      "application/vnd.pcos": {
        source: "iana"
      },
      "application/vnd.pg.format": {
        source: "iana",
        extensions: ["str"]
      },
      "application/vnd.pg.osasli": {
        source: "iana",
        extensions: ["ei6"]
      },
      "application/vnd.piaccess.application-licence": {
        source: "iana"
      },
      "application/vnd.picsel": {
        source: "iana",
        extensions: ["efif"]
      },
      "application/vnd.pmi.widget": {
        source: "iana",
        extensions: ["wg"]
      },
      "application/vnd.poc.group-advertisement+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.pocketlearn": {
        source: "iana",
        extensions: ["plf"]
      },
      "application/vnd.powerbuilder6": {
        source: "iana",
        extensions: ["pbd"]
      },
      "application/vnd.powerbuilder6-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder7": {
        source: "iana"
      },
      "application/vnd.powerbuilder7-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder75": {
        source: "iana"
      },
      "application/vnd.powerbuilder75-s": {
        source: "iana"
      },
      "application/vnd.preminet": {
        source: "iana"
      },
      "application/vnd.previewsystems.box": {
        source: "iana",
        extensions: ["box"]
      },
      "application/vnd.proteus.magazine": {
        source: "iana",
        extensions: ["mgz"]
      },
      "application/vnd.psfs": {
        source: "iana"
      },
      "application/vnd.publishare-delta-tree": {
        source: "iana",
        extensions: ["qps"]
      },
      "application/vnd.pvi.ptid1": {
        source: "iana",
        extensions: ["ptid"]
      },
      "application/vnd.pwg-multiplexed": {
        source: "iana"
      },
      "application/vnd.pwg-xhtml-print+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.qualcomm.brew-app-res": {
        source: "iana"
      },
      "application/vnd.quarantainenet": {
        source: "iana"
      },
      "application/vnd.quark.quarkxpress": {
        source: "iana",
        extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
      },
      "application/vnd.quobject-quoxdocument": {
        source: "iana"
      },
      "application/vnd.radisys.moml+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-audit+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-audit-conf+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-audit-conn+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-audit-dialog+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-audit-stream+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-conf+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-dialog+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-dialog-base+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-dialog-group+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-dialog-speech+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.radisys.msml-dialog-transform+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.rainstor.data": {
        source: "iana"
      },
      "application/vnd.rapid": {
        source: "iana"
      },
      "application/vnd.rar": {
        source: "iana"
      },
      "application/vnd.realvnc.bed": {
        source: "iana",
        extensions: ["bed"]
      },
      "application/vnd.recordare.musicxml": {
        source: "iana",
        extensions: ["mxl"]
      },
      "application/vnd.recordare.musicxml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["musicxml"]
      },
      "application/vnd.renlearn.rlprint": {
        source: "iana"
      },
      "application/vnd.restful+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.rig.cryptonote": {
        source: "iana",
        extensions: ["cryptonote"]
      },
      "application/vnd.rim.cod": {
        source: "apache",
        extensions: ["cod"]
      },
      "application/vnd.rn-realmedia": {
        source: "apache",
        extensions: ["rm"]
      },
      "application/vnd.rn-realmedia-vbr": {
        source: "apache",
        extensions: ["rmvb"]
      },
      "application/vnd.route66.link66+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["link66"]
      },
      "application/vnd.rs-274x": {
        source: "iana"
      },
      "application/vnd.ruckus.download": {
        source: "iana"
      },
      "application/vnd.s3sms": {
        source: "iana"
      },
      "application/vnd.sailingtracker.track": {
        source: "iana",
        extensions: ["st"]
      },
      "application/vnd.sar": {
        source: "iana"
      },
      "application/vnd.sbm.cid": {
        source: "iana"
      },
      "application/vnd.sbm.mid2": {
        source: "iana"
      },
      "application/vnd.scribus": {
        source: "iana"
      },
      "application/vnd.sealed.3df": {
        source: "iana"
      },
      "application/vnd.sealed.csf": {
        source: "iana"
      },
      "application/vnd.sealed.doc": {
        source: "iana"
      },
      "application/vnd.sealed.eml": {
        source: "iana"
      },
      "application/vnd.sealed.mht": {
        source: "iana"
      },
      "application/vnd.sealed.net": {
        source: "iana"
      },
      "application/vnd.sealed.ppt": {
        source: "iana"
      },
      "application/vnd.sealed.tiff": {
        source: "iana"
      },
      "application/vnd.sealed.xls": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.html": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.pdf": {
        source: "iana"
      },
      "application/vnd.seemail": {
        source: "iana",
        extensions: ["see"]
      },
      "application/vnd.sema": {
        source: "iana",
        extensions: ["sema"]
      },
      "application/vnd.semd": {
        source: "iana",
        extensions: ["semd"]
      },
      "application/vnd.semf": {
        source: "iana",
        extensions: ["semf"]
      },
      "application/vnd.shade-save-file": {
        source: "iana"
      },
      "application/vnd.shana.informed.formdata": {
        source: "iana",
        extensions: ["ifm"]
      },
      "application/vnd.shana.informed.formtemplate": {
        source: "iana",
        extensions: ["itp"]
      },
      "application/vnd.shana.informed.interchange": {
        source: "iana",
        extensions: ["iif"]
      },
      "application/vnd.shana.informed.package": {
        source: "iana",
        extensions: ["ipk"]
      },
      "application/vnd.shootproof+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.shopkick+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.shp": {
        source: "iana"
      },
      "application/vnd.shx": {
        source: "iana"
      },
      "application/vnd.sigrok.session": {
        source: "iana"
      },
      "application/vnd.simtech-mindmapper": {
        source: "iana",
        extensions: ["twd", "twds"]
      },
      "application/vnd.siren+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.smaf": {
        source: "iana",
        extensions: ["mmf"]
      },
      "application/vnd.smart.notebook": {
        source: "iana"
      },
      "application/vnd.smart.teacher": {
        source: "iana",
        extensions: ["teacher"]
      },
      "application/vnd.snesdev-page-table": {
        source: "iana"
      },
      "application/vnd.software602.filler.form+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["fo"]
      },
      "application/vnd.software602.filler.form-xml-zip": {
        source: "iana"
      },
      "application/vnd.solent.sdkm+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["sdkm", "sdkd"]
      },
      "application/vnd.spotfire.dxp": {
        source: "iana",
        extensions: ["dxp"]
      },
      "application/vnd.spotfire.sfs": {
        source: "iana",
        extensions: ["sfs"]
      },
      "application/vnd.sqlite3": {
        source: "iana"
      },
      "application/vnd.sss-cod": {
        source: "iana"
      },
      "application/vnd.sss-dtf": {
        source: "iana"
      },
      "application/vnd.sss-ntf": {
        source: "iana"
      },
      "application/vnd.stardivision.calc": {
        source: "apache",
        extensions: ["sdc"]
      },
      "application/vnd.stardivision.draw": {
        source: "apache",
        extensions: ["sda"]
      },
      "application/vnd.stardivision.impress": {
        source: "apache",
        extensions: ["sdd"]
      },
      "application/vnd.stardivision.math": {
        source: "apache",
        extensions: ["smf"]
      },
      "application/vnd.stardivision.writer": {
        source: "apache",
        extensions: ["sdw", "vor"]
      },
      "application/vnd.stardivision.writer-global": {
        source: "apache",
        extensions: ["sgl"]
      },
      "application/vnd.stepmania.package": {
        source: "iana",
        extensions: ["smzip"]
      },
      "application/vnd.stepmania.stepchart": {
        source: "iana",
        extensions: ["sm"]
      },
      "application/vnd.street-stream": {
        source: "iana"
      },
      "application/vnd.sun.wadl+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["wadl"]
      },
      "application/vnd.sun.xml.calc": {
        source: "apache",
        extensions: ["sxc"]
      },
      "application/vnd.sun.xml.calc.template": {
        source: "apache",
        extensions: ["stc"]
      },
      "application/vnd.sun.xml.draw": {
        source: "apache",
        extensions: ["sxd"]
      },
      "application/vnd.sun.xml.draw.template": {
        source: "apache",
        extensions: ["std"]
      },
      "application/vnd.sun.xml.impress": {
        source: "apache",
        extensions: ["sxi"]
      },
      "application/vnd.sun.xml.impress.template": {
        source: "apache",
        extensions: ["sti"]
      },
      "application/vnd.sun.xml.math": {
        source: "apache",
        extensions: ["sxm"]
      },
      "application/vnd.sun.xml.writer": {
        source: "apache",
        extensions: ["sxw"]
      },
      "application/vnd.sun.xml.writer.global": {
        source: "apache",
        extensions: ["sxg"]
      },
      "application/vnd.sun.xml.writer.template": {
        source: "apache",
        extensions: ["stw"]
      },
      "application/vnd.sus-calendar": {
        source: "iana",
        extensions: ["sus", "susp"]
      },
      "application/vnd.svd": {
        source: "iana",
        extensions: ["svd"]
      },
      "application/vnd.swiftview-ics": {
        source: "iana"
      },
      "application/vnd.symbian.install": {
        source: "apache",
        extensions: ["sis", "sisx"]
      },
      "application/vnd.syncml+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0,
        extensions: ["xsm"]
      },
      "application/vnd.syncml.dm+wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["bdm"]
      },
      "application/vnd.syncml.dm+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0,
        extensions: ["xdm"]
      },
      "application/vnd.syncml.dm.notification": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0,
        extensions: ["ddf"]
      },
      "application/vnd.syncml.dmtnds+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmtnds+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0
      },
      "application/vnd.syncml.ds.notification": {
        source: "iana"
      },
      "application/vnd.tableschema+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.tao.intent-module-archive": {
        source: "iana",
        extensions: ["tao"]
      },
      "application/vnd.tcpdump.pcap": {
        source: "iana",
        extensions: ["pcap", "cap", "dmp"]
      },
      "application/vnd.think-cell.ppttc+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.tmd.mediaflex.api+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.tml": {
        source: "iana"
      },
      "application/vnd.tmobile-livetv": {
        source: "iana",
        extensions: ["tmo"]
      },
      "application/vnd.tri.onesource": {
        source: "iana"
      },
      "application/vnd.trid.tpt": {
        source: "iana",
        extensions: ["tpt"]
      },
      "application/vnd.triscape.mxs": {
        source: "iana",
        extensions: ["mxs"]
      },
      "application/vnd.trueapp": {
        source: "iana",
        extensions: ["tra"]
      },
      "application/vnd.truedoc": {
        source: "iana"
      },
      "application/vnd.ubisoft.webplayer": {
        source: "iana"
      },
      "application/vnd.ufdl": {
        source: "iana",
        extensions: ["ufd", "ufdl"]
      },
      "application/vnd.uiq.theme": {
        source: "iana",
        extensions: ["utz"]
      },
      "application/vnd.umajin": {
        source: "iana",
        extensions: ["umj"]
      },
      "application/vnd.unity": {
        source: "iana",
        extensions: ["unityweb"]
      },
      "application/vnd.uoml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["uoml"]
      },
      "application/vnd.uplanet.alert": {
        source: "iana"
      },
      "application/vnd.uplanet.alert-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.channel": {
        source: "iana"
      },
      "application/vnd.uplanet.channel-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.list": {
        source: "iana"
      },
      "application/vnd.uplanet.list-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.signal": {
        source: "iana"
      },
      "application/vnd.uri-map": {
        source: "iana"
      },
      "application/vnd.valve.source.material": {
        source: "iana"
      },
      "application/vnd.vcx": {
        source: "iana",
        extensions: ["vcx"]
      },
      "application/vnd.vd-study": {
        source: "iana"
      },
      "application/vnd.vectorworks": {
        source: "iana"
      },
      "application/vnd.vel+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.verimatrix.vcas": {
        source: "iana"
      },
      "application/vnd.veryant.thin": {
        source: "iana"
      },
      "application/vnd.ves.encrypted": {
        source: "iana"
      },
      "application/vnd.vidsoft.vidconference": {
        source: "iana"
      },
      "application/vnd.visio": {
        source: "iana",
        extensions: ["vsd", "vst", "vss", "vsw"]
      },
      "application/vnd.visionary": {
        source: "iana",
        extensions: ["vis"]
      },
      "application/vnd.vividence.scriptfile": {
        source: "iana"
      },
      "application/vnd.vsf": {
        source: "iana",
        extensions: ["vsf"]
      },
      "application/vnd.wap.sic": {
        source: "iana"
      },
      "application/vnd.wap.slc": {
        source: "iana"
      },
      "application/vnd.wap.wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["wbxml"]
      },
      "application/vnd.wap.wmlc": {
        source: "iana",
        extensions: ["wmlc"]
      },
      "application/vnd.wap.wmlscriptc": {
        source: "iana",
        extensions: ["wmlsc"]
      },
      "application/vnd.webturbo": {
        source: "iana",
        extensions: ["wtb"]
      },
      "application/vnd.wfa.p2p": {
        source: "iana"
      },
      "application/vnd.wfa.wsc": {
        source: "iana"
      },
      "application/vnd.windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.wmc": {
        source: "iana"
      },
      "application/vnd.wmf.bootstrap": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica.package": {
        source: "iana"
      },
      "application/vnd.wolfram.player": {
        source: "iana",
        extensions: ["nbp"]
      },
      "application/vnd.wordperfect": {
        source: "iana",
        extensions: ["wpd"]
      },
      "application/vnd.wqd": {
        source: "iana",
        extensions: ["wqd"]
      },
      "application/vnd.wrq-hp3000-labelled": {
        source: "iana"
      },
      "application/vnd.wt.stf": {
        source: "iana",
        extensions: ["stf"]
      },
      "application/vnd.wv.csp+wbxml": {
        source: "iana"
      },
      "application/vnd.wv.csp+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.wv.ssp+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.xacml+json": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.xara": {
        source: "iana",
        extensions: ["xar"]
      },
      "application/vnd.xfdl": {
        source: "iana",
        extensions: ["xfdl"]
      },
      "application/vnd.xfdl.webform": {
        source: "iana"
      },
      "application/vnd.xmi+xml": {
        source: "iana",
        compressible: !0
      },
      "application/vnd.xmpie.cpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.dpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.plan": {
        source: "iana"
      },
      "application/vnd.xmpie.ppkg": {
        source: "iana"
      },
      "application/vnd.xmpie.xlim": {
        source: "iana"
      },
      "application/vnd.yamaha.hv-dic": {
        source: "iana",
        extensions: ["hvd"]
      },
      "application/vnd.yamaha.hv-script": {
        source: "iana",
        extensions: ["hvs"]
      },
      "application/vnd.yamaha.hv-voice": {
        source: "iana",
        extensions: ["hvp"]
      },
      "application/vnd.yamaha.openscoreformat": {
        source: "iana",
        extensions: ["osf"]
      },
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["osfpvg"]
      },
      "application/vnd.yamaha.remote-setup": {
        source: "iana"
      },
      "application/vnd.yamaha.smaf-audio": {
        source: "iana",
        extensions: ["saf"]
      },
      "application/vnd.yamaha.smaf-phrase": {
        source: "iana",
        extensions: ["spf"]
      },
      "application/vnd.yamaha.through-ngn": {
        source: "iana"
      },
      "application/vnd.yamaha.tunnel-udpencap": {
        source: "iana"
      },
      "application/vnd.yaoweme": {
        source: "iana"
      },
      "application/vnd.yellowriver-custom-menu": {
        source: "iana",
        extensions: ["cmp"]
      },
      "application/vnd.youtube.yt": {
        source: "iana"
      },
      "application/vnd.zul": {
        source: "iana",
        extensions: ["zir", "zirz"]
      },
      "application/vnd.zzazz.deck+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["zaz"]
      },
      "application/voicexml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["vxml"]
      },
      "application/voucher-cms+json": {
        source: "iana",
        compressible: !0
      },
      "application/vq-rtcpxr": {
        source: "iana"
      },
      "application/wasm": {
        compressible: !0,
        extensions: ["wasm"]
      },
      "application/watcherinfo+xml": {
        source: "iana",
        compressible: !0
      },
      "application/webpush-options+json": {
        source: "iana",
        compressible: !0
      },
      "application/whoispp-query": {
        source: "iana"
      },
      "application/whoispp-response": {
        source: "iana"
      },
      "application/widget": {
        source: "iana",
        extensions: ["wgt"]
      },
      "application/winhlp": {
        source: "apache",
        extensions: ["hlp"]
      },
      "application/wita": {
        source: "iana"
      },
      "application/wordperfect5.1": {
        source: "iana"
      },
      "application/wsdl+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["wsdl"]
      },
      "application/wspolicy+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["wspolicy"]
      },
      "application/x-7z-compressed": {
        source: "apache",
        compressible: !1,
        extensions: ["7z"]
      },
      "application/x-abiword": {
        source: "apache",
        extensions: ["abw"]
      },
      "application/x-ace-compressed": {
        source: "apache",
        extensions: ["ace"]
      },
      "application/x-amf": {
        source: "apache"
      },
      "application/x-apple-diskimage": {
        source: "apache",
        extensions: ["dmg"]
      },
      "application/x-arj": {
        compressible: !1,
        extensions: ["arj"]
      },
      "application/x-authorware-bin": {
        source: "apache",
        extensions: ["aab", "x32", "u32", "vox"]
      },
      "application/x-authorware-map": {
        source: "apache",
        extensions: ["aam"]
      },
      "application/x-authorware-seg": {
        source: "apache",
        extensions: ["aas"]
      },
      "application/x-bcpio": {
        source: "apache",
        extensions: ["bcpio"]
      },
      "application/x-bdoc": {
        compressible: !1,
        extensions: ["bdoc"]
      },
      "application/x-bittorrent": {
        source: "apache",
        extensions: ["torrent"]
      },
      "application/x-blorb": {
        source: "apache",
        extensions: ["blb", "blorb"]
      },
      "application/x-bzip": {
        source: "apache",
        compressible: !1,
        extensions: ["bz"]
      },
      "application/x-bzip2": {
        source: "apache",
        compressible: !1,
        extensions: ["bz2", "boz"]
      },
      "application/x-cbr": {
        source: "apache",
        extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
      },
      "application/x-cdlink": {
        source: "apache",
        extensions: ["vcd"]
      },
      "application/x-cfs-compressed": {
        source: "apache",
        extensions: ["cfs"]
      },
      "application/x-chat": {
        source: "apache",
        extensions: ["chat"]
      },
      "application/x-chess-pgn": {
        source: "apache",
        extensions: ["pgn"]
      },
      "application/x-chrome-extension": {
        extensions: ["crx"]
      },
      "application/x-cocoa": {
        source: "nginx",
        extensions: ["cco"]
      },
      "application/x-compress": {
        source: "apache"
      },
      "application/x-conference": {
        source: "apache",
        extensions: ["nsc"]
      },
      "application/x-cpio": {
        source: "apache",
        extensions: ["cpio"]
      },
      "application/x-csh": {
        source: "apache",
        extensions: ["csh"]
      },
      "application/x-deb": {
        compressible: !1
      },
      "application/x-debian-package": {
        source: "apache",
        extensions: ["deb", "udeb"]
      },
      "application/x-dgc-compressed": {
        source: "apache",
        extensions: ["dgc"]
      },
      "application/x-director": {
        source: "apache",
        extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
      },
      "application/x-doom": {
        source: "apache",
        extensions: ["wad"]
      },
      "application/x-dtbncx+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["ncx"]
      },
      "application/x-dtbook+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["dtb"]
      },
      "application/x-dtbresource+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["res"]
      },
      "application/x-dvi": {
        source: "apache",
        compressible: !1,
        extensions: ["dvi"]
      },
      "application/x-envoy": {
        source: "apache",
        extensions: ["evy"]
      },
      "application/x-eva": {
        source: "apache",
        extensions: ["eva"]
      },
      "application/x-font-bdf": {
        source: "apache",
        extensions: ["bdf"]
      },
      "application/x-font-dos": {
        source: "apache"
      },
      "application/x-font-framemaker": {
        source: "apache"
      },
      "application/x-font-ghostscript": {
        source: "apache",
        extensions: ["gsf"]
      },
      "application/x-font-libgrx": {
        source: "apache"
      },
      "application/x-font-linux-psf": {
        source: "apache",
        extensions: ["psf"]
      },
      "application/x-font-pcf": {
        source: "apache",
        extensions: ["pcf"]
      },
      "application/x-font-snf": {
        source: "apache",
        extensions: ["snf"]
      },
      "application/x-font-speedo": {
        source: "apache"
      },
      "application/x-font-sunos-news": {
        source: "apache"
      },
      "application/x-font-type1": {
        source: "apache",
        extensions: ["pfa", "pfb", "pfm", "afm"]
      },
      "application/x-font-vfont": {
        source: "apache"
      },
      "application/x-freearc": {
        source: "apache",
        extensions: ["arc"]
      },
      "application/x-futuresplash": {
        source: "apache",
        extensions: ["spl"]
      },
      "application/x-gca-compressed": {
        source: "apache",
        extensions: ["gca"]
      },
      "application/x-glulx": {
        source: "apache",
        extensions: ["ulx"]
      },
      "application/x-gnumeric": {
        source: "apache",
        extensions: ["gnumeric"]
      },
      "application/x-gramps-xml": {
        source: "apache",
        extensions: ["gramps"]
      },
      "application/x-gtar": {
        source: "apache",
        extensions: ["gtar"]
      },
      "application/x-gzip": {
        source: "apache"
      },
      "application/x-hdf": {
        source: "apache",
        extensions: ["hdf"]
      },
      "application/x-httpd-php": {
        compressible: !0,
        extensions: ["php"]
      },
      "application/x-install-instructions": {
        source: "apache",
        extensions: ["install"]
      },
      "application/x-iso9660-image": {
        source: "apache",
        extensions: ["iso"]
      },
      "application/x-java-archive-diff": {
        source: "nginx",
        extensions: ["jardiff"]
      },
      "application/x-java-jnlp-file": {
        source: "apache",
        compressible: !1,
        extensions: ["jnlp"]
      },
      "application/x-javascript": {
        compressible: !0
      },
      "application/x-keepass2": {
        extensions: ["kdbx"]
      },
      "application/x-latex": {
        source: "apache",
        compressible: !1,
        extensions: ["latex"]
      },
      "application/x-lua-bytecode": {
        extensions: ["luac"]
      },
      "application/x-lzh-compressed": {
        source: "apache",
        extensions: ["lzh", "lha"]
      },
      "application/x-makeself": {
        source: "nginx",
        extensions: ["run"]
      },
      "application/x-mie": {
        source: "apache",
        extensions: ["mie"]
      },
      "application/x-mobipocket-ebook": {
        source: "apache",
        extensions: ["prc", "mobi"]
      },
      "application/x-mpegurl": {
        compressible: !1
      },
      "application/x-ms-application": {
        source: "apache",
        extensions: ["application"]
      },
      "application/x-ms-shortcut": {
        source: "apache",
        extensions: ["lnk"]
      },
      "application/x-ms-wmd": {
        source: "apache",
        extensions: ["wmd"]
      },
      "application/x-ms-wmz": {
        source: "apache",
        extensions: ["wmz"]
      },
      "application/x-ms-xbap": {
        source: "apache",
        extensions: ["xbap"]
      },
      "application/x-msaccess": {
        source: "apache",
        extensions: ["mdb"]
      },
      "application/x-msbinder": {
        source: "apache",
        extensions: ["obd"]
      },
      "application/x-mscardfile": {
        source: "apache",
        extensions: ["crd"]
      },
      "application/x-msclip": {
        source: "apache",
        extensions: ["clp"]
      },
      "application/x-msdos-program": {
        extensions: ["exe"]
      },
      "application/x-msdownload": {
        source: "apache",
        extensions: ["exe", "dll", "com", "bat", "msi"]
      },
      "application/x-msmediaview": {
        source: "apache",
        extensions: ["mvb", "m13", "m14"]
      },
      "application/x-msmetafile": {
        source: "apache",
        extensions: ["wmf", "wmz", "emf", "emz"]
      },
      "application/x-msmoney": {
        source: "apache",
        extensions: ["mny"]
      },
      "application/x-mspublisher": {
        source: "apache",
        extensions: ["pub"]
      },
      "application/x-msschedule": {
        source: "apache",
        extensions: ["scd"]
      },
      "application/x-msterminal": {
        source: "apache",
        extensions: ["trm"]
      },
      "application/x-mswrite": {
        source: "apache",
        extensions: ["wri"]
      },
      "application/x-netcdf": {
        source: "apache",
        extensions: ["nc", "cdf"]
      },
      "application/x-ns-proxy-autoconfig": {
        compressible: !0,
        extensions: ["pac"]
      },
      "application/x-nzb": {
        source: "apache",
        extensions: ["nzb"]
      },
      "application/x-perl": {
        source: "nginx",
        extensions: ["pl", "pm"]
      },
      "application/x-pilot": {
        source: "nginx",
        extensions: ["prc", "pdb"]
      },
      "application/x-pkcs12": {
        source: "apache",
        compressible: !1,
        extensions: ["p12", "pfx"]
      },
      "application/x-pkcs7-certificates": {
        source: "apache",
        extensions: ["p7b", "spc"]
      },
      "application/x-pkcs7-certreqresp": {
        source: "apache",
        extensions: ["p7r"]
      },
      "application/x-pki-message": {
        source: "iana"
      },
      "application/x-rar-compressed": {
        source: "apache",
        compressible: !1,
        extensions: ["rar"]
      },
      "application/x-redhat-package-manager": {
        source: "nginx",
        extensions: ["rpm"]
      },
      "application/x-research-info-systems": {
        source: "apache",
        extensions: ["ris"]
      },
      "application/x-sea": {
        source: "nginx",
        extensions: ["sea"]
      },
      "application/x-sh": {
        source: "apache",
        compressible: !0,
        extensions: ["sh"]
      },
      "application/x-shar": {
        source: "apache",
        extensions: ["shar"]
      },
      "application/x-shockwave-flash": {
        source: "apache",
        compressible: !1,
        extensions: ["swf"]
      },
      "application/x-silverlight-app": {
        source: "apache",
        extensions: ["xap"]
      },
      "application/x-sql": {
        source: "apache",
        extensions: ["sql"]
      },
      "application/x-stuffit": {
        source: "apache",
        compressible: !1,
        extensions: ["sit"]
      },
      "application/x-stuffitx": {
        source: "apache",
        extensions: ["sitx"]
      },
      "application/x-subrip": {
        source: "apache",
        extensions: ["srt"]
      },
      "application/x-sv4cpio": {
        source: "apache",
        extensions: ["sv4cpio"]
      },
      "application/x-sv4crc": {
        source: "apache",
        extensions: ["sv4crc"]
      },
      "application/x-t3vm-image": {
        source: "apache",
        extensions: ["t3"]
      },
      "application/x-tads": {
        source: "apache",
        extensions: ["gam"]
      },
      "application/x-tar": {
        source: "apache",
        compressible: !0,
        extensions: ["tar"]
      },
      "application/x-tcl": {
        source: "apache",
        extensions: ["tcl", "tk"]
      },
      "application/x-tex": {
        source: "apache",
        extensions: ["tex"]
      },
      "application/x-tex-tfm": {
        source: "apache",
        extensions: ["tfm"]
      },
      "application/x-texinfo": {
        source: "apache",
        extensions: ["texinfo", "texi"]
      },
      "application/x-tgif": {
        source: "apache",
        extensions: ["obj"]
      },
      "application/x-ustar": {
        source: "apache",
        extensions: ["ustar"]
      },
      "application/x-virtualbox-hdd": {
        compressible: !0,
        extensions: ["hdd"]
      },
      "application/x-virtualbox-ova": {
        compressible: !0,
        extensions: ["ova"]
      },
      "application/x-virtualbox-ovf": {
        compressible: !0,
        extensions: ["ovf"]
      },
      "application/x-virtualbox-vbox": {
        compressible: !0,
        extensions: ["vbox"]
      },
      "application/x-virtualbox-vbox-extpack": {
        compressible: !1,
        extensions: ["vbox-extpack"]
      },
      "application/x-virtualbox-vdi": {
        compressible: !0,
        extensions: ["vdi"]
      },
      "application/x-virtualbox-vhd": {
        compressible: !0,
        extensions: ["vhd"]
      },
      "application/x-virtualbox-vmdk": {
        compressible: !0,
        extensions: ["vmdk"]
      },
      "application/x-wais-source": {
        source: "apache",
        extensions: ["src"]
      },
      "application/x-web-app-manifest+json": {
        compressible: !0,
        extensions: ["webapp"]
      },
      "application/x-www-form-urlencoded": {
        source: "iana",
        compressible: !0
      },
      "application/x-x509-ca-cert": {
        source: "iana",
        extensions: ["der", "crt", "pem"]
      },
      "application/x-x509-ca-ra-cert": {
        source: "iana"
      },
      "application/x-x509-next-ca-cert": {
        source: "iana"
      },
      "application/x-xfig": {
        source: "apache",
        extensions: ["fig"]
      },
      "application/x-xliff+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["xlf"]
      },
      "application/x-xpinstall": {
        source: "apache",
        compressible: !1,
        extensions: ["xpi"]
      },
      "application/x-xz": {
        source: "apache",
        extensions: ["xz"]
      },
      "application/x-zmachine": {
        source: "apache",
        extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
      },
      "application/x400-bp": {
        source: "iana"
      },
      "application/xacml+xml": {
        source: "iana",
        compressible: !0
      },
      "application/xaml+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["xaml"]
      },
      "application/xcap-att+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xav"]
      },
      "application/xcap-caps+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xca"]
      },
      "application/xcap-diff+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xdf"]
      },
      "application/xcap-el+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xel"]
      },
      "application/xcap-error+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xer"]
      },
      "application/xcap-ns+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xns"]
      },
      "application/xcon-conference-info+xml": {
        source: "iana",
        compressible: !0
      },
      "application/xcon-conference-info-diff+xml": {
        source: "iana",
        compressible: !0
      },
      "application/xenc+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xenc"]
      },
      "application/xhtml+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xhtml", "xht"]
      },
      "application/xhtml-voice+xml": {
        source: "apache",
        compressible: !0
      },
      "application/xliff+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xlf"]
      },
      "application/xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xml", "xsl", "xsd", "rng"]
      },
      "application/xml-dtd": {
        source: "iana",
        compressible: !0,
        extensions: ["dtd"]
      },
      "application/xml-external-parsed-entity": {
        source: "iana"
      },
      "application/xml-patch+xml": {
        source: "iana",
        compressible: !0
      },
      "application/xmpp+xml": {
        source: "iana",
        compressible: !0
      },
      "application/xop+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xop"]
      },
      "application/xproc+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["xpl"]
      },
      "application/xslt+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xslt"]
      },
      "application/xspf+xml": {
        source: "apache",
        compressible: !0,
        extensions: ["xspf"]
      },
      "application/xv+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["mxml", "xhvml", "xvml", "xvm"]
      },
      "application/yang": {
        source: "iana",
        extensions: ["yang"]
      },
      "application/yang-data+json": {
        source: "iana",
        compressible: !0
      },
      "application/yang-data+xml": {
        source: "iana",
        compressible: !0
      },
      "application/yang-patch+json": {
        source: "iana",
        compressible: !0
      },
      "application/yang-patch+xml": {
        source: "iana",
        compressible: !0
      },
      "application/yin+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["yin"]
      },
      "application/zip": {
        source: "iana",
        compressible: !1,
        extensions: ["zip"]
      },
      "application/zlib": {
        source: "iana"
      },
      "application/zstd": {
        source: "iana"
      },
      "audio/1d-interleaved-parityfec": {
        source: "iana"
      },
      "audio/32kadpcm": {
        source: "iana"
      },
      "audio/3gpp": {
        source: "iana",
        compressible: !1,
        extensions: ["3gpp"]
      },
      "audio/3gpp2": {
        source: "iana"
      },
      "audio/aac": {
        source: "iana"
      },
      "audio/ac3": {
        source: "iana"
      },
      "audio/adpcm": {
        source: "apache",
        extensions: ["adp"]
      },
      "audio/amr": {
        source: "iana"
      },
      "audio/amr-wb": {
        source: "iana"
      },
      "audio/amr-wb+": {
        source: "iana"
      },
      "audio/aptx": {
        source: "iana"
      },
      "audio/asc": {
        source: "iana"
      },
      "audio/atrac-advanced-lossless": {
        source: "iana"
      },
      "audio/atrac-x": {
        source: "iana"
      },
      "audio/atrac3": {
        source: "iana"
      },
      "audio/basic": {
        source: "iana",
        compressible: !1,
        extensions: ["au", "snd"]
      },
      "audio/bv16": {
        source: "iana"
      },
      "audio/bv32": {
        source: "iana"
      },
      "audio/clearmode": {
        source: "iana"
      },
      "audio/cn": {
        source: "iana"
      },
      "audio/dat12": {
        source: "iana"
      },
      "audio/dls": {
        source: "iana"
      },
      "audio/dsr-es201108": {
        source: "iana"
      },
      "audio/dsr-es202050": {
        source: "iana"
      },
      "audio/dsr-es202211": {
        source: "iana"
      },
      "audio/dsr-es202212": {
        source: "iana"
      },
      "audio/dv": {
        source: "iana"
      },
      "audio/dvi4": {
        source: "iana"
      },
      "audio/eac3": {
        source: "iana"
      },
      "audio/encaprtp": {
        source: "iana"
      },
      "audio/evrc": {
        source: "iana"
      },
      "audio/evrc-qcp": {
        source: "iana"
      },
      "audio/evrc0": {
        source: "iana"
      },
      "audio/evrc1": {
        source: "iana"
      },
      "audio/evrcb": {
        source: "iana"
      },
      "audio/evrcb0": {
        source: "iana"
      },
      "audio/evrcb1": {
        source: "iana"
      },
      "audio/evrcnw": {
        source: "iana"
      },
      "audio/evrcnw0": {
        source: "iana"
      },
      "audio/evrcnw1": {
        source: "iana"
      },
      "audio/evrcwb": {
        source: "iana"
      },
      "audio/evrcwb0": {
        source: "iana"
      },
      "audio/evrcwb1": {
        source: "iana"
      },
      "audio/evs": {
        source: "iana"
      },
      "audio/flexfec": {
        source: "iana"
      },
      "audio/fwdred": {
        source: "iana"
      },
      "audio/g711-0": {
        source: "iana"
      },
      "audio/g719": {
        source: "iana"
      },
      "audio/g722": {
        source: "iana"
      },
      "audio/g7221": {
        source: "iana"
      },
      "audio/g723": {
        source: "iana"
      },
      "audio/g726-16": {
        source: "iana"
      },
      "audio/g726-24": {
        source: "iana"
      },
      "audio/g726-32": {
        source: "iana"
      },
      "audio/g726-40": {
        source: "iana"
      },
      "audio/g728": {
        source: "iana"
      },
      "audio/g729": {
        source: "iana"
      },
      "audio/g7291": {
        source: "iana"
      },
      "audio/g729d": {
        source: "iana"
      },
      "audio/g729e": {
        source: "iana"
      },
      "audio/gsm": {
        source: "iana"
      },
      "audio/gsm-efr": {
        source: "iana"
      },
      "audio/gsm-hr-08": {
        source: "iana"
      },
      "audio/ilbc": {
        source: "iana"
      },
      "audio/ip-mr_v2.5": {
        source: "iana"
      },
      "audio/isac": {
        source: "apache"
      },
      "audio/l16": {
        source: "iana"
      },
      "audio/l20": {
        source: "iana"
      },
      "audio/l24": {
        source: "iana",
        compressible: !1
      },
      "audio/l8": {
        source: "iana"
      },
      "audio/lpc": {
        source: "iana"
      },
      "audio/melp": {
        source: "iana"
      },
      "audio/melp1200": {
        source: "iana"
      },
      "audio/melp2400": {
        source: "iana"
      },
      "audio/melp600": {
        source: "iana"
      },
      "audio/mhas": {
        source: "iana"
      },
      "audio/midi": {
        source: "apache",
        extensions: ["mid", "midi", "kar", "rmi"]
      },
      "audio/mobile-xmf": {
        source: "iana",
        extensions: ["mxmf"]
      },
      "audio/mp3": {
        compressible: !1,
        extensions: ["mp3"]
      },
      "audio/mp4": {
        source: "iana",
        compressible: !1,
        extensions: ["m4a", "mp4a"]
      },
      "audio/mp4a-latm": {
        source: "iana"
      },
      "audio/mpa": {
        source: "iana"
      },
      "audio/mpa-robust": {
        source: "iana"
      },
      "audio/mpeg": {
        source: "iana",
        compressible: !1,
        extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
      },
      "audio/mpeg4-generic": {
        source: "iana"
      },
      "audio/musepack": {
        source: "apache"
      },
      "audio/ogg": {
        source: "iana",
        compressible: !1,
        extensions: ["oga", "ogg", "spx"]
      },
      "audio/opus": {
        source: "iana"
      },
      "audio/parityfec": {
        source: "iana"
      },
      "audio/pcma": {
        source: "iana"
      },
      "audio/pcma-wb": {
        source: "iana"
      },
      "audio/pcmu": {
        source: "iana"
      },
      "audio/pcmu-wb": {
        source: "iana"
      },
      "audio/prs.sid": {
        source: "iana"
      },
      "audio/qcelp": {
        source: "iana"
      },
      "audio/raptorfec": {
        source: "iana"
      },
      "audio/red": {
        source: "iana"
      },
      "audio/rtp-enc-aescm128": {
        source: "iana"
      },
      "audio/rtp-midi": {
        source: "iana"
      },
      "audio/rtploopback": {
        source: "iana"
      },
      "audio/rtx": {
        source: "iana"
      },
      "audio/s3m": {
        source: "apache",
        extensions: ["s3m"]
      },
      "audio/silk": {
        source: "apache",
        extensions: ["sil"]
      },
      "audio/smv": {
        source: "iana"
      },
      "audio/smv-qcp": {
        source: "iana"
      },
      "audio/smv0": {
        source: "iana"
      },
      "audio/sp-midi": {
        source: "iana"
      },
      "audio/speex": {
        source: "iana"
      },
      "audio/t140c": {
        source: "iana"
      },
      "audio/t38": {
        source: "iana"
      },
      "audio/telephone-event": {
        source: "iana"
      },
      "audio/tetra_acelp": {
        source: "iana"
      },
      "audio/tetra_acelp_bb": {
        source: "iana"
      },
      "audio/tone": {
        source: "iana"
      },
      "audio/uemclip": {
        source: "iana"
      },
      "audio/ulpfec": {
        source: "iana"
      },
      "audio/usac": {
        source: "iana"
      },
      "audio/vdvi": {
        source: "iana"
      },
      "audio/vmr-wb": {
        source: "iana"
      },
      "audio/vnd.3gpp.iufp": {
        source: "iana"
      },
      "audio/vnd.4sb": {
        source: "iana"
      },
      "audio/vnd.audiokoz": {
        source: "iana"
      },
      "audio/vnd.celp": {
        source: "iana"
      },
      "audio/vnd.cisco.nse": {
        source: "iana"
      },
      "audio/vnd.cmles.radio-events": {
        source: "iana"
      },
      "audio/vnd.cns.anp1": {
        source: "iana"
      },
      "audio/vnd.cns.inf1": {
        source: "iana"
      },
      "audio/vnd.dece.audio": {
        source: "iana",
        extensions: ["uva", "uvva"]
      },
      "audio/vnd.digital-winds": {
        source: "iana",
        extensions: ["eol"]
      },
      "audio/vnd.dlna.adts": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.1": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.2": {
        source: "iana"
      },
      "audio/vnd.dolby.mlp": {
        source: "iana"
      },
      "audio/vnd.dolby.mps": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2x": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2z": {
        source: "iana"
      },
      "audio/vnd.dolby.pulse.1": {
        source: "iana"
      },
      "audio/vnd.dra": {
        source: "iana",
        extensions: ["dra"]
      },
      "audio/vnd.dts": {
        source: "iana",
        extensions: ["dts"]
      },
      "audio/vnd.dts.hd": {
        source: "iana",
        extensions: ["dtshd"]
      },
      "audio/vnd.dts.uhd": {
        source: "iana"
      },
      "audio/vnd.dvb.file": {
        source: "iana"
      },
      "audio/vnd.everad.plj": {
        source: "iana"
      },
      "audio/vnd.hns.audio": {
        source: "iana"
      },
      "audio/vnd.lucent.voice": {
        source: "iana",
        extensions: ["lvp"]
      },
      "audio/vnd.ms-playready.media.pya": {
        source: "iana",
        extensions: ["pya"]
      },
      "audio/vnd.nokia.mobile-xmf": {
        source: "iana"
      },
      "audio/vnd.nortel.vbk": {
        source: "iana"
      },
      "audio/vnd.nuera.ecelp4800": {
        source: "iana",
        extensions: ["ecelp4800"]
      },
      "audio/vnd.nuera.ecelp7470": {
        source: "iana",
        extensions: ["ecelp7470"]
      },
      "audio/vnd.nuera.ecelp9600": {
        source: "iana",
        extensions: ["ecelp9600"]
      },
      "audio/vnd.octel.sbc": {
        source: "iana"
      },
      "audio/vnd.presonus.multitrack": {
        source: "iana"
      },
      "audio/vnd.qcelp": {
        source: "iana"
      },
      "audio/vnd.rhetorex.32kadpcm": {
        source: "iana"
      },
      "audio/vnd.rip": {
        source: "iana",
        extensions: ["rip"]
      },
      "audio/vnd.rn-realaudio": {
        compressible: !1
      },
      "audio/vnd.sealedmedia.softseal.mpeg": {
        source: "iana"
      },
      "audio/vnd.vmx.cvsd": {
        source: "iana"
      },
      "audio/vnd.wave": {
        compressible: !1
      },
      "audio/vorbis": {
        source: "iana",
        compressible: !1
      },
      "audio/vorbis-config": {
        source: "iana"
      },
      "audio/wav": {
        compressible: !1,
        extensions: ["wav"]
      },
      "audio/wave": {
        compressible: !1,
        extensions: ["wav"]
      },
      "audio/webm": {
        source: "apache",
        compressible: !1,
        extensions: ["weba"]
      },
      "audio/x-aac": {
        source: "apache",
        compressible: !1,
        extensions: ["aac"]
      },
      "audio/x-aiff": {
        source: "apache",
        extensions: ["aif", "aiff", "aifc"]
      },
      "audio/x-caf": {
        source: "apache",
        compressible: !1,
        extensions: ["caf"]
      },
      "audio/x-flac": {
        source: "apache",
        extensions: ["flac"]
      },
      "audio/x-m4a": {
        source: "nginx",
        extensions: ["m4a"]
      },
      "audio/x-matroska": {
        source: "apache",
        extensions: ["mka"]
      },
      "audio/x-mpegurl": {
        source: "apache",
        extensions: ["m3u"]
      },
      "audio/x-ms-wax": {
        source: "apache",
        extensions: ["wax"]
      },
      "audio/x-ms-wma": {
        source: "apache",
        extensions: ["wma"]
      },
      "audio/x-pn-realaudio": {
        source: "apache",
        extensions: ["ram", "ra"]
      },
      "audio/x-pn-realaudio-plugin": {
        source: "apache",
        extensions: ["rmp"]
      },
      "audio/x-realaudio": {
        source: "nginx",
        extensions: ["ra"]
      },
      "audio/x-tta": {
        source: "apache"
      },
      "audio/x-wav": {
        source: "apache",
        extensions: ["wav"]
      },
      "audio/xm": {
        source: "apache",
        extensions: ["xm"]
      },
      "chemical/x-cdx": {
        source: "apache",
        extensions: ["cdx"]
      },
      "chemical/x-cif": {
        source: "apache",
        extensions: ["cif"]
      },
      "chemical/x-cmdf": {
        source: "apache",
        extensions: ["cmdf"]
      },
      "chemical/x-cml": {
        source: "apache",
        extensions: ["cml"]
      },
      "chemical/x-csml": {
        source: "apache",
        extensions: ["csml"]
      },
      "chemical/x-pdb": {
        source: "apache"
      },
      "chemical/x-xyz": {
        source: "apache",
        extensions: ["xyz"]
      },
      "font/collection": {
        source: "iana",
        extensions: ["ttc"]
      },
      "font/otf": {
        source: "iana",
        compressible: !0,
        extensions: ["otf"]
      },
      "font/sfnt": {
        source: "iana"
      },
      "font/ttf": {
        source: "iana",
        compressible: !0,
        extensions: ["ttf"]
      },
      "font/woff": {
        source: "iana",
        extensions: ["woff"]
      },
      "font/woff2": {
        source: "iana",
        extensions: ["woff2"]
      },
      "image/aces": {
        source: "iana",
        extensions: ["exr"]
      },
      "image/apng": {
        compressible: !1,
        extensions: ["apng"]
      },
      "image/avci": {
        source: "iana"
      },
      "image/avcs": {
        source: "iana"
      },
      "image/bmp": {
        source: "iana",
        compressible: !0,
        extensions: ["bmp"]
      },
      "image/cgm": {
        source: "iana",
        extensions: ["cgm"]
      },
      "image/dicom-rle": {
        source: "iana",
        extensions: ["drle"]
      },
      "image/emf": {
        source: "iana",
        extensions: ["emf"]
      },
      "image/fits": {
        source: "iana",
        extensions: ["fits"]
      },
      "image/g3fax": {
        source: "iana",
        extensions: ["g3"]
      },
      "image/gif": {
        source: "iana",
        compressible: !1,
        extensions: ["gif"]
      },
      "image/heic": {
        source: "iana",
        extensions: ["heic"]
      },
      "image/heic-sequence": {
        source: "iana",
        extensions: ["heics"]
      },
      "image/heif": {
        source: "iana",
        extensions: ["heif"]
      },
      "image/heif-sequence": {
        source: "iana",
        extensions: ["heifs"]
      },
      "image/hej2k": {
        source: "iana",
        extensions: ["hej2"]
      },
      "image/hsj2": {
        source: "iana",
        extensions: ["hsj2"]
      },
      "image/ief": {
        source: "iana",
        extensions: ["ief"]
      },
      "image/jls": {
        source: "iana",
        extensions: ["jls"]
      },
      "image/jp2": {
        source: "iana",
        compressible: !1,
        extensions: ["jp2", "jpg2"]
      },
      "image/jpeg": {
        source: "iana",
        compressible: !1,
        extensions: ["jpeg", "jpg", "jpe"]
      },
      "image/jph": {
        source: "iana",
        extensions: ["jph"]
      },
      "image/jphc": {
        source: "iana",
        extensions: ["jhc"]
      },
      "image/jpm": {
        source: "iana",
        compressible: !1,
        extensions: ["jpm"]
      },
      "image/jpx": {
        source: "iana",
        compressible: !1,
        extensions: ["jpx", "jpf"]
      },
      "image/jxr": {
        source: "iana",
        extensions: ["jxr"]
      },
      "image/jxra": {
        source: "iana",
        extensions: ["jxra"]
      },
      "image/jxrs": {
        source: "iana",
        extensions: ["jxrs"]
      },
      "image/jxs": {
        source: "iana",
        extensions: ["jxs"]
      },
      "image/jxsc": {
        source: "iana",
        extensions: ["jxsc"]
      },
      "image/jxsi": {
        source: "iana",
        extensions: ["jxsi"]
      },
      "image/jxss": {
        source: "iana",
        extensions: ["jxss"]
      },
      "image/ktx": {
        source: "iana",
        extensions: ["ktx"]
      },
      "image/naplps": {
        source: "iana"
      },
      "image/pjpeg": {
        compressible: !1
      },
      "image/png": {
        source: "iana",
        compressible: !1,
        extensions: ["png"]
      },
      "image/prs.btif": {
        source: "iana",
        extensions: ["btif"]
      },
      "image/prs.pti": {
        source: "iana",
        extensions: ["pti"]
      },
      "image/pwg-raster": {
        source: "iana"
      },
      "image/sgi": {
        source: "apache",
        extensions: ["sgi"]
      },
      "image/svg+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["svg", "svgz"]
      },
      "image/t38": {
        source: "iana",
        extensions: ["t38"]
      },
      "image/tiff": {
        source: "iana",
        compressible: !1,
        extensions: ["tif", "tiff"]
      },
      "image/tiff-fx": {
        source: "iana",
        extensions: ["tfx"]
      },
      "image/vnd.adobe.photoshop": {
        source: "iana",
        compressible: !0,
        extensions: ["psd"]
      },
      "image/vnd.airzip.accelerator.azv": {
        source: "iana",
        extensions: ["azv"]
      },
      "image/vnd.cns.inf2": {
        source: "iana"
      },
      "image/vnd.dece.graphic": {
        source: "iana",
        extensions: ["uvi", "uvvi", "uvg", "uvvg"]
      },
      "image/vnd.djvu": {
        source: "iana",
        extensions: ["djvu", "djv"]
      },
      "image/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "image/vnd.dwg": {
        source: "iana",
        extensions: ["dwg"]
      },
      "image/vnd.dxf": {
        source: "iana",
        extensions: ["dxf"]
      },
      "image/vnd.fastbidsheet": {
        source: "iana",
        extensions: ["fbs"]
      },
      "image/vnd.fpx": {
        source: "iana",
        extensions: ["fpx"]
      },
      "image/vnd.fst": {
        source: "iana",
        extensions: ["fst"]
      },
      "image/vnd.fujixerox.edmics-mmr": {
        source: "iana",
        extensions: ["mmr"]
      },
      "image/vnd.fujixerox.edmics-rlc": {
        source: "iana",
        extensions: ["rlc"]
      },
      "image/vnd.globalgraphics.pgb": {
        source: "iana"
      },
      "image/vnd.microsoft.icon": {
        source: "iana",
        extensions: ["ico"]
      },
      "image/vnd.mix": {
        source: "iana"
      },
      "image/vnd.mozilla.apng": {
        source: "iana"
      },
      "image/vnd.ms-dds": {
        extensions: ["dds"]
      },
      "image/vnd.ms-modi": {
        source: "iana",
        extensions: ["mdi"]
      },
      "image/vnd.ms-photo": {
        source: "apache",
        extensions: ["wdp"]
      },
      "image/vnd.net-fpx": {
        source: "iana",
        extensions: ["npx"]
      },
      "image/vnd.radiance": {
        source: "iana"
      },
      "image/vnd.sealed.png": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.gif": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.jpg": {
        source: "iana"
      },
      "image/vnd.svf": {
        source: "iana"
      },
      "image/vnd.tencent.tap": {
        source: "iana",
        extensions: ["tap"]
      },
      "image/vnd.valve.source.texture": {
        source: "iana",
        extensions: ["vtf"]
      },
      "image/vnd.wap.wbmp": {
        source: "iana",
        extensions: ["wbmp"]
      },
      "image/vnd.xiff": {
        source: "iana",
        extensions: ["xif"]
      },
      "image/vnd.zbrush.pcx": {
        source: "iana",
        extensions: ["pcx"]
      },
      "image/webp": {
        source: "apache",
        extensions: ["webp"]
      },
      "image/wmf": {
        source: "iana",
        extensions: ["wmf"]
      },
      "image/x-3ds": {
        source: "apache",
        extensions: ["3ds"]
      },
      "image/x-cmu-raster": {
        source: "apache",
        extensions: ["ras"]
      },
      "image/x-cmx": {
        source: "apache",
        extensions: ["cmx"]
      },
      "image/x-freehand": {
        source: "apache",
        extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
      },
      "image/x-icon": {
        source: "apache",
        compressible: !0,
        extensions: ["ico"]
      },
      "image/x-jng": {
        source: "nginx",
        extensions: ["jng"]
      },
      "image/x-mrsid-image": {
        source: "apache",
        extensions: ["sid"]
      },
      "image/x-ms-bmp": {
        source: "nginx",
        compressible: !0,
        extensions: ["bmp"]
      },
      "image/x-pcx": {
        source: "apache",
        extensions: ["pcx"]
      },
      "image/x-pict": {
        source: "apache",
        extensions: ["pic", "pct"]
      },
      "image/x-portable-anymap": {
        source: "apache",
        extensions: ["pnm"]
      },
      "image/x-portable-bitmap": {
        source: "apache",
        extensions: ["pbm"]
      },
      "image/x-portable-graymap": {
        source: "apache",
        extensions: ["pgm"]
      },
      "image/x-portable-pixmap": {
        source: "apache",
        extensions: ["ppm"]
      },
      "image/x-rgb": {
        source: "apache",
        extensions: ["rgb"]
      },
      "image/x-tga": {
        source: "apache",
        extensions: ["tga"]
      },
      "image/x-xbitmap": {
        source: "apache",
        extensions: ["xbm"]
      },
      "image/x-xcf": {
        compressible: !1
      },
      "image/x-xpixmap": {
        source: "apache",
        extensions: ["xpm"]
      },
      "image/x-xwindowdump": {
        source: "apache",
        extensions: ["xwd"]
      },
      "message/cpim": {
        source: "iana"
      },
      "message/delivery-status": {
        source: "iana"
      },
      "message/disposition-notification": {
        source: "iana",
        extensions: ["disposition-notification"]
      },
      "message/external-body": {
        source: "iana"
      },
      "message/feedback-report": {
        source: "iana"
      },
      "message/global": {
        source: "iana",
        extensions: ["u8msg"]
      },
      "message/global-delivery-status": {
        source: "iana",
        extensions: ["u8dsn"]
      },
      "message/global-disposition-notification": {
        source: "iana",
        extensions: ["u8mdn"]
      },
      "message/global-headers": {
        source: "iana",
        extensions: ["u8hdr"]
      },
      "message/http": {
        source: "iana",
        compressible: !1
      },
      "message/imdn+xml": {
        source: "iana",
        compressible: !0
      },
      "message/news": {
        source: "iana"
      },
      "message/partial": {
        source: "iana",
        compressible: !1
      },
      "message/rfc822": {
        source: "iana",
        compressible: !0,
        extensions: ["eml", "mime"]
      },
      "message/s-http": {
        source: "iana"
      },
      "message/sip": {
        source: "iana"
      },
      "message/sipfrag": {
        source: "iana"
      },
      "message/tracking-status": {
        source: "iana"
      },
      "message/vnd.si.simp": {
        source: "iana"
      },
      "message/vnd.wfa.wsc": {
        source: "iana",
        extensions: ["wsc"]
      },
      "model/3mf": {
        source: "iana",
        extensions: ["3mf"]
      },
      "model/gltf+json": {
        source: "iana",
        compressible: !0,
        extensions: ["gltf"]
      },
      "model/gltf-binary": {
        source: "iana",
        compressible: !0,
        extensions: ["glb"]
      },
      "model/iges": {
        source: "iana",
        compressible: !1,
        extensions: ["igs", "iges"]
      },
      "model/mesh": {
        source: "iana",
        compressible: !1,
        extensions: ["msh", "mesh", "silo"]
      },
      "model/mtl": {
        source: "iana",
        extensions: ["mtl"]
      },
      "model/obj": {
        source: "iana",
        extensions: ["obj"]
      },
      "model/stl": {
        source: "iana",
        extensions: ["stl"]
      },
      "model/vnd.collada+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["dae"]
      },
      "model/vnd.dwf": {
        source: "iana",
        extensions: ["dwf"]
      },
      "model/vnd.flatland.3dml": {
        source: "iana"
      },
      "model/vnd.gdl": {
        source: "iana",
        extensions: ["gdl"]
      },
      "model/vnd.gs-gdl": {
        source: "apache"
      },
      "model/vnd.gs.gdl": {
        source: "iana"
      },
      "model/vnd.gtw": {
        source: "iana",
        extensions: ["gtw"]
      },
      "model/vnd.moml+xml": {
        source: "iana",
        compressible: !0
      },
      "model/vnd.mts": {
        source: "iana",
        extensions: ["mts"]
      },
      "model/vnd.opengex": {
        source: "iana",
        extensions: ["ogex"]
      },
      "model/vnd.parasolid.transmit.binary": {
        source: "iana",
        extensions: ["x_b"]
      },
      "model/vnd.parasolid.transmit.text": {
        source: "iana",
        extensions: ["x_t"]
      },
      "model/vnd.rosette.annotated-data-model": {
        source: "iana"
      },
      "model/vnd.usdz+zip": {
        source: "iana",
        compressible: !1,
        extensions: ["usdz"]
      },
      "model/vnd.valve.source.compiled-map": {
        source: "iana",
        extensions: ["bsp"]
      },
      "model/vnd.vtu": {
        source: "iana",
        extensions: ["vtu"]
      },
      "model/vrml": {
        source: "iana",
        compressible: !1,
        extensions: ["wrl", "vrml"]
      },
      "model/x3d+binary": {
        source: "apache",
        compressible: !1,
        extensions: ["x3db", "x3dbz"]
      },
      "model/x3d+fastinfoset": {
        source: "iana",
        extensions: ["x3db"]
      },
      "model/x3d+vrml": {
        source: "apache",
        compressible: !1,
        extensions: ["x3dv", "x3dvz"]
      },
      "model/x3d+xml": {
        source: "iana",
        compressible: !0,
        extensions: ["x3d", "x3dz"]
      },
      "model/x3d-vrml": {
        source: "iana",
        extensions: ["x3dv"]
      },
      "multipart/alternative": {
        source: "iana",
        compressible: !1
      },
      "multipart/appledouble": {
        source: "iana"
      },
      "multipart/byteranges": {
        source: "iana"
      },
      "multipart/digest": {
        source: "iana"
      },
      "multipart/encrypted": {
        source: "iana",
        compressible: !1
      },
      "multipart/form-data": {
        source: "iana",
        compressible: !1
      },
      "multipart/header-set": {
        source: "iana"
      },
      "multipart/mixed": {
        source: "iana"
      },
      "multipart/multilingual": {
        source: "iana"
      },
      "multipart/parallel": {
        source: "iana"
      },
      "multipart/related": {
        source: "iana",
        compressible: !1
      },
      "multipart/report": {
        source: "iana"
      },
      "multipart/signed": {
        source: "iana",
        compressible: !1
      },
      "multipart/vnd.bint.med-plus": {
        source: "iana"
      },
      "multipart/voice-message": {
        source: "iana"
      },
      "multipart/x-mixed-replace": {
        source: "iana"
      },
      "text/1d-interleaved-parityfec": {
        source: "iana"
      },
      "text/cache-manifest": {
        source: "iana",
        compressible: !0,
        extensions: ["appcache", "manifest"]
      },
      "text/calendar": {
        source: "iana",
        extensions: ["ics", "ifb"]
      },
      "text/calender": {
        compressible: !0
      },
      "text/cmd": {
        compressible: !0
      },
      "text/coffeescript": {
        extensions: ["coffee", "litcoffee"]
      },
      "text/css": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0,
        extensions: ["css"]
      },
      "text/csv": {
        source: "iana",
        compressible: !0,
        extensions: ["csv"]
      },
      "text/csv-schema": {
        source: "iana"
      },
      "text/directory": {
        source: "iana"
      },
      "text/dns": {
        source: "iana"
      },
      "text/ecmascript": {
        source: "iana"
      },
      "text/encaprtp": {
        source: "iana"
      },
      "text/enriched": {
        source: "iana"
      },
      "text/flexfec": {
        source: "iana"
      },
      "text/fwdred": {
        source: "iana"
      },
      "text/grammar-ref-list": {
        source: "iana"
      },
      "text/html": {
        source: "iana",
        compressible: !0,
        extensions: ["html", "htm", "shtml"]
      },
      "text/jade": {
        extensions: ["jade"]
      },
      "text/javascript": {
        source: "iana",
        compressible: !0
      },
      "text/jcr-cnd": {
        source: "iana"
      },
      "text/jsx": {
        compressible: !0,
        extensions: ["jsx"]
      },
      "text/less": {
        compressible: !0,
        extensions: ["less"]
      },
      "text/markdown": {
        source: "iana",
        compressible: !0,
        extensions: ["markdown", "md"]
      },
      "text/mathml": {
        source: "nginx",
        extensions: ["mml"]
      },
      "text/mdx": {
        compressible: !0,
        extensions: ["mdx"]
      },
      "text/mizar": {
        source: "iana"
      },
      "text/n3": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0,
        extensions: ["n3"]
      },
      "text/parameters": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/parityfec": {
        source: "iana"
      },
      "text/plain": {
        source: "iana",
        compressible: !0,
        extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
      },
      "text/provenance-notation": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/prs.fallenstein.rst": {
        source: "iana"
      },
      "text/prs.lines.tag": {
        source: "iana",
        extensions: ["dsc"]
      },
      "text/prs.prop.logic": {
        source: "iana"
      },
      "text/raptorfec": {
        source: "iana"
      },
      "text/red": {
        source: "iana"
      },
      "text/rfc822-headers": {
        source: "iana"
      },
      "text/richtext": {
        source: "iana",
        compressible: !0,
        extensions: ["rtx"]
      },
      "text/rtf": {
        source: "iana",
        compressible: !0,
        extensions: ["rtf"]
      },
      "text/rtp-enc-aescm128": {
        source: "iana"
      },
      "text/rtploopback": {
        source: "iana"
      },
      "text/rtx": {
        source: "iana"
      },
      "text/sgml": {
        source: "iana",
        extensions: ["sgml", "sgm"]
      },
      "text/shex": {
        extensions: ["shex"]
      },
      "text/slim": {
        extensions: ["slim", "slm"]
      },
      "text/strings": {
        source: "iana"
      },
      "text/stylus": {
        extensions: ["stylus", "styl"]
      },
      "text/t140": {
        source: "iana"
      },
      "text/tab-separated-values": {
        source: "iana",
        compressible: !0,
        extensions: ["tsv"]
      },
      "text/troff": {
        source: "iana",
        extensions: ["t", "tr", "roff", "man", "me", "ms"]
      },
      "text/turtle": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["ttl"]
      },
      "text/ulpfec": {
        source: "iana"
      },
      "text/uri-list": {
        source: "iana",
        compressible: !0,
        extensions: ["uri", "uris", "urls"]
      },
      "text/vcard": {
        source: "iana",
        compressible: !0,
        extensions: ["vcard"]
      },
      "text/vnd.a": {
        source: "iana"
      },
      "text/vnd.abc": {
        source: "iana"
      },
      "text/vnd.ascii-art": {
        source: "iana"
      },
      "text/vnd.curl": {
        source: "iana",
        extensions: ["curl"]
      },
      "text/vnd.curl.dcurl": {
        source: "apache",
        extensions: ["dcurl"]
      },
      "text/vnd.curl.mcurl": {
        source: "apache",
        extensions: ["mcurl"]
      },
      "text/vnd.curl.scurl": {
        source: "apache",
        extensions: ["scurl"]
      },
      "text/vnd.debian.copyright": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.dmclientscript": {
        source: "iana"
      },
      "text/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "text/vnd.esmertec.theme-descriptor": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.ficlab.flt": {
        source: "iana"
      },
      "text/vnd.fly": {
        source: "iana",
        extensions: ["fly"]
      },
      "text/vnd.fmi.flexstor": {
        source: "iana",
        extensions: ["flx"]
      },
      "text/vnd.gml": {
        source: "iana"
      },
      "text/vnd.graphviz": {
        source: "iana",
        extensions: ["gv"]
      },
      "text/vnd.hgl": {
        source: "iana"
      },
      "text/vnd.in3d.3dml": {
        source: "iana",
        extensions: ["3dml"]
      },
      "text/vnd.in3d.spot": {
        source: "iana",
        extensions: ["spot"]
      },
      "text/vnd.iptc.newsml": {
        source: "iana"
      },
      "text/vnd.iptc.nitf": {
        source: "iana"
      },
      "text/vnd.latex-z": {
        source: "iana"
      },
      "text/vnd.motorola.reflex": {
        source: "iana"
      },
      "text/vnd.ms-mediapackage": {
        source: "iana"
      },
      "text/vnd.net2phone.commcenter.command": {
        source: "iana"
      },
      "text/vnd.radisys.msml-basic-layout": {
        source: "iana"
      },
      "text/vnd.senx.warpscript": {
        source: "iana"
      },
      "text/vnd.si.uricatalogue": {
        source: "iana"
      },
      "text/vnd.sosi": {
        source: "iana"
      },
      "text/vnd.sun.j2me.app-descriptor": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["jad"]
      },
      "text/vnd.trolltech.linguist": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.wap.si": {
        source: "iana"
      },
      "text/vnd.wap.sl": {
        source: "iana"
      },
      "text/vnd.wap.wml": {
        source: "iana",
        extensions: ["wml"]
      },
      "text/vnd.wap.wmlscript": {
        source: "iana",
        extensions: ["wmls"]
      },
      "text/vtt": {
        source: "iana",
        charset: "UTF-8",
        compressible: !0,
        extensions: ["vtt"]
      },
      "text/x-asm": {
        source: "apache",
        extensions: ["s", "asm"]
      },
      "text/x-c": {
        source: "apache",
        extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
      },
      "text/x-component": {
        source: "nginx",
        extensions: ["htc"]
      },
      "text/x-fortran": {
        source: "apache",
        extensions: ["f", "for", "f77", "f90"]
      },
      "text/x-gwt-rpc": {
        compressible: !0
      },
      "text/x-handlebars-template": {
        extensions: ["hbs"]
      },
      "text/x-java-source": {
        source: "apache",
        extensions: ["java"]
      },
      "text/x-jquery-tmpl": {
        compressible: !0
      },
      "text/x-lua": {
        extensions: ["lua"]
      },
      "text/x-markdown": {
        compressible: !0,
        extensions: ["mkd"]
      },
      "text/x-nfo": {
        source: "apache",
        extensions: ["nfo"]
      },
      "text/x-opml": {
        source: "apache",
        extensions: ["opml"]
      },
      "text/x-org": {
        compressible: !0,
        extensions: ["org"]
      },
      "text/x-pascal": {
        source: "apache",
        extensions: ["p", "pas"]
      },
      "text/x-processing": {
        compressible: !0,
        extensions: ["pde"]
      },
      "text/x-sass": {
        extensions: ["sass"]
      },
      "text/x-scss": {
        extensions: ["scss"]
      },
      "text/x-setext": {
        source: "apache",
        extensions: ["etx"]
      },
      "text/x-sfv": {
        source: "apache",
        extensions: ["sfv"]
      },
      "text/x-suse-ymp": {
        compressible: !0,
        extensions: ["ymp"]
      },
      "text/x-uuencode": {
        source: "apache",
        extensions: ["uu"]
      },
      "text/x-vcalendar": {
        source: "apache",
        extensions: ["vcs"]
      },
      "text/x-vcard": {
        source: "apache",
        extensions: ["vcf"]
      },
      "text/xml": {
        source: "iana",
        compressible: !0,
        extensions: ["xml"]
      },
      "text/xml-external-parsed-entity": {
        source: "iana"
      },
      "text/yaml": {
        extensions: ["yaml", "yml"]
      },
      "video/1d-interleaved-parityfec": {
        source: "iana"
      },
      "video/3gpp": {
        source: "iana",
        extensions: ["3gp", "3gpp"]
      },
      "video/3gpp-tt": {
        source: "iana"
      },
      "video/3gpp2": {
        source: "iana",
        extensions: ["3g2"]
      },
      "video/bmpeg": {
        source: "iana"
      },
      "video/bt656": {
        source: "iana"
      },
      "video/celb": {
        source: "iana"
      },
      "video/dv": {
        source: "iana"
      },
      "video/encaprtp": {
        source: "iana"
      },
      "video/flexfec": {
        source: "iana"
      },
      "video/h261": {
        source: "iana",
        extensions: ["h261"]
      },
      "video/h263": {
        source: "iana",
        extensions: ["h263"]
      },
      "video/h263-1998": {
        source: "iana"
      },
      "video/h263-2000": {
        source: "iana"
      },
      "video/h264": {
        source: "iana",
        extensions: ["h264"]
      },
      "video/h264-rcdo": {
        source: "iana"
      },
      "video/h264-svc": {
        source: "iana"
      },
      "video/h265": {
        source: "iana"
      },
      "video/iso.segment": {
        source: "iana"
      },
      "video/jpeg": {
        source: "iana",
        extensions: ["jpgv"]
      },
      "video/jpeg2000": {
        source: "iana"
      },
      "video/jpm": {
        source: "apache",
        extensions: ["jpm", "jpgm"]
      },
      "video/mj2": {
        source: "iana",
        extensions: ["mj2", "mjp2"]
      },
      "video/mp1s": {
        source: "iana"
      },
      "video/mp2p": {
        source: "iana"
      },
      "video/mp2t": {
        source: "iana",
        extensions: ["ts"]
      },
      "video/mp4": {
        source: "iana",
        compressible: !1,
        extensions: ["mp4", "mp4v", "mpg4"]
      },
      "video/mp4v-es": {
        source: "iana"
      },
      "video/mpeg": {
        source: "iana",
        compressible: !1,
        extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
      },
      "video/mpeg4-generic": {
        source: "iana"
      },
      "video/mpv": {
        source: "iana"
      },
      "video/nv": {
        source: "iana"
      },
      "video/ogg": {
        source: "iana",
        compressible: !1,
        extensions: ["ogv"]
      },
      "video/parityfec": {
        source: "iana"
      },
      "video/pointer": {
        source: "iana"
      },
      "video/quicktime": {
        source: "iana",
        compressible: !1,
        extensions: ["qt", "mov"]
      },
      "video/raptorfec": {
        source: "iana"
      },
      "video/raw": {
        source: "iana"
      },
      "video/rtp-enc-aescm128": {
        source: "iana"
      },
      "video/rtploopback": {
        source: "iana"
      },
      "video/rtx": {
        source: "iana"
      },
      "video/smpte291": {
        source: "iana"
      },
      "video/smpte292m": {
        source: "iana"
      },
      "video/ulpfec": {
        source: "iana"
      },
      "video/vc1": {
        source: "iana"
      },
      "video/vc2": {
        source: "iana"
      },
      "video/vnd.cctv": {
        source: "iana"
      },
      "video/vnd.dece.hd": {
        source: "iana",
        extensions: ["uvh", "uvvh"]
      },
      "video/vnd.dece.mobile": {
        source: "iana",
        extensions: ["uvm", "uvvm"]
      },
      "video/vnd.dece.mp4": {
        source: "iana"
      },
      "video/vnd.dece.pd": {
        source: "iana",
        extensions: ["uvp", "uvvp"]
      },
      "video/vnd.dece.sd": {
        source: "iana",
        extensions: ["uvs", "uvvs"]
      },
      "video/vnd.dece.video": {
        source: "iana",
        extensions: ["uvv", "uvvv"]
      },
      "video/vnd.directv.mpeg": {
        source: "iana"
      },
      "video/vnd.directv.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dlna.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dvb.file": {
        source: "iana",
        extensions: ["dvb"]
      },
      "video/vnd.fvt": {
        source: "iana",
        extensions: ["fvt"]
      },
      "video/vnd.hns.video": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsavc": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsmpeg2": {
        source: "iana"
      },
      "video/vnd.motorola.video": {
        source: "iana"
      },
      "video/vnd.motorola.videop": {
        source: "iana"
      },
      "video/vnd.mpegurl": {
        source: "iana",
        extensions: ["mxu", "m4u"]
      },
      "video/vnd.ms-playready.media.pyv": {
        source: "iana",
        extensions: ["pyv"]
      },
      "video/vnd.nokia.interleaved-multimedia": {
        source: "iana"
      },
      "video/vnd.nokia.mp4vr": {
        source: "iana"
      },
      "video/vnd.nokia.videovoip": {
        source: "iana"
      },
      "video/vnd.objectvideo": {
        source: "iana"
      },
      "video/vnd.radgamettools.bink": {
        source: "iana"
      },
      "video/vnd.radgamettools.smacker": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg1": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg4": {
        source: "iana"
      },
      "video/vnd.sealed.swf": {
        source: "iana"
      },
      "video/vnd.sealedmedia.softseal.mov": {
        source: "iana"
      },
      "video/vnd.uvvu.mp4": {
        source: "iana",
        extensions: ["uvu", "uvvu"]
      },
      "video/vnd.vivo": {
        source: "iana",
        extensions: ["viv"]
      },
      "video/vnd.youtube.yt": {
        source: "iana"
      },
      "video/vp8": {
        source: "iana"
      },
      "video/webm": {
        source: "apache",
        compressible: !1,
        extensions: ["webm"]
      },
      "video/x-f4v": {
        source: "apache",
        extensions: ["f4v"]
      },
      "video/x-fli": {
        source: "apache",
        extensions: ["fli"]
      },
      "video/x-flv": {
        source: "apache",
        compressible: !1,
        extensions: ["flv"]
      },
      "video/x-m4v": {
        source: "apache",
        extensions: ["m4v"]
      },
      "video/x-matroska": {
        source: "apache",
        compressible: !1,
        extensions: ["mkv", "mk3d", "mks"]
      },
      "video/x-mng": {
        source: "apache",
        extensions: ["mng"]
      },
      "video/x-ms-asf": {
        source: "apache",
        extensions: ["asf", "asx"]
      },
      "video/x-ms-vob": {
        source: "apache",
        extensions: ["vob"]
      },
      "video/x-ms-wm": {
        source: "apache",
        extensions: ["wm"]
      },
      "video/x-ms-wmv": {
        source: "apache",
        compressible: !1,
        extensions: ["wmv"]
      },
      "video/x-ms-wmx": {
        source: "apache",
        extensions: ["wmx"]
      },
      "video/x-ms-wvx": {
        source: "apache",
        extensions: ["wvx"]
      },
      "video/x-msvideo": {
        source: "apache",
        extensions: ["avi"]
      },
      "video/x-sgi-movie": {
        source: "apache",
        extensions: ["movie"]
      },
      "video/x-smv": {
        source: "apache",
        extensions: ["smv"]
      },
      "x-conference/x-cooltalk": {
        source: "apache",
        extensions: ["ice"]
      },
      "x-shader/x-fragment": {
        compressible: !0
      },
      "x-shader/x-vertex": {
        compressible: !0
      }
    };
  }, function (e, a, n) {
    /*!
     * mime-db
     * Copyright(c) 2014 Jonathan Ong
     * MIT Licensed
     */
    e.exports = n(12);
  }, function (e, a, n) {
    "use strict";

    function i(e) {
      if (!e || "string" != typeof e) return !1;
      var a = p.exec(e),
          n = a && c[a[1].toLowerCase()];
      return n && n.charset ? n.charset : !(!a || !l.test(a[1])) && "UTF-8";
    }

    function o(e) {
      if (!e || "string" != typeof e) return !1;
      var n = -1 === e.indexOf("/") ? a.lookup(e) : e;
      if (!n) return !1;

      if (-1 === n.indexOf("charset")) {
        var i = a.charset(n);
        i && (n += "; charset=" + i.toLowerCase());
      }

      return n;
    }

    function s(e) {
      if (!e || "string" != typeof e) return !1;
      var n = p.exec(e),
          i = n && a.extensions[n[1].toLowerCase()];
      return !(!i || !i.length) && i[0];
    }

    function t(e) {
      if (!e || "string" != typeof e) return !1;
      var n = r("x." + e).toLowerCase().substr(1);
      return !!n && (a.types[n] || !1);
    }
    /*!
     * mime-types
     * Copyright(c) 2014 Jonathan Ong
     * Copyright(c) 2015 Douglas Christopher Wilson
     * MIT Licensed
     */


    var c = n(13),
        r = n(15).extname,
        p = /^\s*([^;\s]*)(?:;|\s|$)/,
        l = /^text\//i;
    a.charset = i, a.charsets = {
      lookup: i
    }, a.contentType = o, a.extension = s, a.extensions = Object.create(null), a.lookup = t, a.types = Object.create(null), function (e, a) {
      var n = ["nginx", "apache", void 0, "iana"];
      Object.keys(c).forEach(function (i) {
        var o = c[i],
            s = o.extensions;

        if (s && s.length) {
          e[i] = s;

          for (var t = 0; t < s.length; t++) {
            var r = s[t];

            if (a[r]) {
              var p = n.indexOf(c[a[r]].source),
                  l = n.indexOf(o.source);
              if ("application/octet-stream" !== a[r] && (p > l || p === l && "application/" === a[r].substr(0, 12))) continue;
            }

            a[r] = i;
          }
        }
      });
    }(a.extensions, a.types);
  }, function (e, a, n) {
    (function (e) {
      function n(e, a) {
        for (var n = 0, i = e.length - 1; i >= 0; i--) {
          var o = e[i];
          "." === o ? e.splice(i, 1) : ".." === o ? (e.splice(i, 1), n++) : n && (e.splice(i, 1), n--);
        }

        if (a) for (; n--; n) {
          e.unshift("..");
        }
        return e;
      }

      function i(e, a) {
        if (e.filter) return e.filter(a);

        for (var n = [], i = 0; i < e.length; i++) {
          a(e[i], i, e) && n.push(e[i]);
        }

        return n;
      }

      var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
          s = function s(e) {
        return o.exec(e).slice(1);
      };

      a.resolve = function () {
        for (var a = "", o = !1, s = arguments.length - 1; s >= -1 && !o; s--) {
          var t = s >= 0 ? arguments[s] : e.cwd();
          if ("string" != typeof t) throw new TypeError("Arguments to path.resolve must be strings");
          t && (a = t + "/" + a, o = "/" === t.charAt(0));
        }

        return a = n(i(a.split("/"), function (e) {
          return !!e;
        }), !o).join("/"), (o ? "/" : "") + a || ".";
      }, a.normalize = function (e) {
        var o = a.isAbsolute(e),
            s = "/" === t(e, -1);
        return e = n(i(e.split("/"), function (e) {
          return !!e;
        }), !o).join("/"), e || o || (e = "."), e && s && (e += "/"), (o ? "/" : "") + e;
      }, a.isAbsolute = function (e) {
        return "/" === e.charAt(0);
      }, a.join = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return a.normalize(i(e, function (e, a) {
          if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
          return e;
        }).join("/"));
      }, a.relative = function (e, n) {
        function i(e) {
          for (var a = 0; a < e.length && "" === e[a]; a++) {
            ;
          }

          for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) {
            ;
          }

          return a > n ? [] : e.slice(a, n - a + 1);
        }

        e = a.resolve(e).substr(1), n = a.resolve(n).substr(1);

        for (var o = i(e.split("/")), s = i(n.split("/")), t = Math.min(o.length, s.length), c = t, r = 0; r < t; r++) {
          if (o[r] !== s[r]) {
            c = r;
            break;
          }
        }

        for (var p = [], r = c; r < o.length; r++) {
          p.push("..");
        }

        return p = p.concat(s.slice(c)), p.join("/");
      }, a.sep = "/", a.delimiter = ":", a.dirname = function (e) {
        var a = s(e),
            n = a[0],
            i = a[1];
        return n || i ? (i && (i = i.substr(0, i.length - 1)), n + i) : ".";
      }, a.basename = function (e, a) {
        var n = s(e)[2];
        return a && n.substr(-1 * a.length) === a && (n = n.substr(0, n.length - a.length)), n;
      }, a.extname = function (e) {
        return s(e)[3];
      };
      var t = "b" === "ab".substr(-1) ? function (e, a, n) {
        return e.substr(a, n);
      } : function (e, a, n) {
        return a < 0 && (a = e.length + a), e.substr(a, n);
      };
    }).call(a, n(16));
  }, function (e, a) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }

    function i() {
      throw new Error("clearTimeout has not been defined");
    }

    function o(e) {
      if (l === setTimeout) return setTimeout(e, 0);
      if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);

      try {
        return l(e, 0);
      } catch (a) {
        try {
          return l.call(null, e, 0);
        } catch (a) {
          return l.call(this, e, 0);
        }
      }
    }

    function s(e) {
      if (u === clearTimeout) return clearTimeout(e);
      if ((u === i || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);

      try {
        return u(e);
      } catch (a) {
        try {
          return u.call(null, e);
        } catch (a) {
          return u.call(this, e);
        }
      }
    }

    function t() {
      f && m && (f = !1, m.length ? x = m.concat(x) : v = -1, x.length && c());
    }

    function c() {
      if (!f) {
        var e = o(t);
        f = !0;

        for (var a = x.length; a;) {
          for (m = x, x = []; ++v < a;) {
            m && m[v].run();
          }

          v = -1, a = x.length;
        }

        m = null, f = !1, s(e);
      }
    }

    function r(e, a) {
      this.fun = e, this.array = a;
    }

    function p() {}

    var l,
        u,
        d = e.exports = {};
    !function () {
      try {
        l = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        l = n;
      }

      try {
        u = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        u = i;
      }
    }();
    var m,
        x = [],
        f = !1,
        v = -1;
    d.nextTick = function (e) {
      var a = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        a[n - 1] = arguments[n];
      }
      x.push(new r(e, a)), 1 !== x.length || f || o(c);
    }, r.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = p, d.addListener = p, d.once = p, d.off = p, d.removeListener = p, d.removeAllListeners = p, d.emit = p, d.prependListener = p, d.prependOnceListener = p, d.listeners = function (e) {
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
  }, function (e, a, n) {
    function i(e) {
      this.options = e || {
        locator: {}
      };
    }

    function o(e, a, n) {
      function i(a) {
        var i = e[a];
        !i && t && (i = 2 == e.length ? function (n) {
          e(a, n);
        } : e), o[a] = i && function (e) {
          i("[xmldom " + a + "]\t" + e + c(n));
        } || function () {};
      }

      if (!e) {
        if (a instanceof s) return a;
        e = a;
      }

      var o = {},
          t = e instanceof Function;
      return n = n || {}, i("warning"), i("error"), i("fatalError"), o;
    }

    function s() {
      this.cdata = !1;
    }

    function t(e, a) {
      a.lineNumber = e.lineNumber, a.columnNumber = e.columnNumber;
    }

    function c(e) {
      if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
    }

    function r(e, a, n) {
      return "string" == typeof e ? e.substr(a, n) : e.length >= a + n || a ? new java.lang.String(e, a, n) + "" : e;
    }

    function p(e, a) {
      e.currentElement ? e.currentElement.appendChild(a) : e.doc.appendChild(a);
    }

    i.prototype.parseFromString = function (e, a) {
      var n = this.options,
          i = new l(),
          t = n.domBuilder || new s(),
          c = n.errorHandler,
          r = n.locator,
          p = n.xmlns || {},
          u = {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
      };
      return r && t.setDocumentLocator(r), i.errorHandler = o(c, t, r), i.domBuilder = n.domBuilder || t, /\/x?html?$/.test(a) && (u.nbsp = " ", u.copy = "©", p[""] = "http://www.w3.org/1999/xhtml"), p.xml = p.xml || "http://www.w3.org/XML/1998/namespace", e ? i.parse(e, p, u) : i.errorHandler.error("invalid doc source"), t.doc;
    }, s.prototype = {
      startDocument: function startDocument() {
        this.doc = new u().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
      },
      startElement: function startElement(e, a, n, i) {
        var o = this.doc,
            s = o.createElementNS(e, n || a),
            c = i.length;
        p(this, s), this.currentElement = s, this.locator && t(this.locator, s);

        for (var r = 0; r < c; r++) {
          var e = i.getURI(r),
              l = i.getValue(r),
              n = i.getQName(r),
              u = o.createAttributeNS(e, n);
          this.locator && t(i.getLocator(r), u), u.value = u.nodeValue = l, s.setAttributeNode(u);
        }
      },
      endElement: function endElement(e, a, n) {
        var i = this.currentElement;
        i.tagName;
        this.currentElement = i.parentNode;
      },
      startPrefixMapping: function startPrefixMapping(e, a) {},
      endPrefixMapping: function endPrefixMapping(e) {},
      processingInstruction: function processingInstruction(e, a) {
        var n = this.doc.createProcessingInstruction(e, a);
        this.locator && t(this.locator, n), p(this, n);
      },
      ignorableWhitespace: function ignorableWhitespace(e, a, n) {},
      characters: function characters(e, a, n) {
        if (e = r.apply(this, arguments)) {
          if (this.cdata) var i = this.doc.createCDATASection(e);else var i = this.doc.createTextNode(e);
          this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(e) && this.doc.appendChild(i), this.locator && t(this.locator, i);
        }
      },
      skippedEntity: function skippedEntity(e) {},
      endDocument: function endDocument() {
        this.doc.normalize();
      },
      setDocumentLocator: function setDocumentLocator(e) {
        (this.locator = e) && (e.lineNumber = 0);
      },
      comment: function comment(e, a, n) {
        e = r.apply(this, arguments);
        var i = this.doc.createComment(e);
        this.locator && t(this.locator, i), p(this, i);
      },
      startCDATA: function startCDATA() {
        this.cdata = !0;
      },
      endCDATA: function endCDATA() {
        this.cdata = !1;
      },
      startDTD: function startDTD(e, a, n) {
        var i = this.doc.implementation;

        if (i && i.createDocumentType) {
          var o = i.createDocumentType(e, a, n);
          this.locator && t(this.locator, o), p(this, o);
        }
      },
      warning: function warning(e) {
        console.warn("[xmldom warning]\t" + e, c(this.locator));
      },
      error: function error(e) {
        console.error("[xmldom error]\t" + e, c(this.locator));
      },
      fatalError: function fatalError(e) {
        throw console.error("[xmldom fatalError]\t" + e, c(this.locator)), e;
      }
    }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
      s.prototype[e] = function () {
        return null;
      };
    });
    var l = n(18).XMLReader,
        u = a.DOMImplementation = n(1).DOMImplementation;
    a.XMLSerializer = n(1).XMLSerializer, a.DOMParser = i;
  }, function (e, a) {
    function n() {}

    function i(e, a, n, i, p) {
      function m(e) {
        if (e > 65535) {
          e -= 65536;
          var a = 55296 + (e >> 10),
              n = 56320 + (1023 & e);
          return String.fromCharCode(a, n);
        }

        return String.fromCharCode(e);
      }

      function x(e) {
        var a = e.slice(1, -1);
        return a in n ? n[a] : "#" === a.charAt(0) ? m(parseInt(a.substr(1).replace("x", "0x"))) : (p.error("entity not found:" + e), e);
      }

      function f(a) {
        if (a > C) {
          var n = e.substring(C, a).replace(/&#?\w+;/g, x);
          y && v(C), i.characters(n, 0, a - C), C = a;
        }
      }

      function v(a, n) {
        for (; a >= g && (n = b.exec(e));) {
          h = n.index, g = h + n[0].length, y.lineNumber++;
        }

        y.columnNumber = a - h + 1;
      }

      for (var h = 0, g = 0, b = /.*(?:\r\n?|\n)|.*$/g, y = i.locator, k = [{
        currentNSMap: a
      }], w = {}, C = 0;;) {
        try {
          var S = e.indexOf("<", C);

          if (S < 0) {
            if (!e.substr(C).match(/^\s*$/)) {
              var T = i.doc,
                  _ = T.createTextNode(e.substr(C));

              T.appendChild(_), i.currentElement = _;
            }

            return;
          }

          switch (S > C && f(S), e.charAt(S + 1)) {
            case "/":
              var A = e.indexOf(">", S + 3),
                  j = e.substring(S + 2, A),
                  R = k.pop();
              A < 0 ? (j = e.substring(S + 2).replace(/[\s<].*/, ""), p.error("end tag name: " + j + " is not complete:" + R.tagName), A = S + 1 + j.length) : j.match(/\s</) && (j = j.replace(/[\s<].*/, ""), p.error("end tag name: " + j + " maybe not complete"), A = S + 1 + j.length);
              var E = R.localNSMap,
                  N = R.tagName == j;

              if (N || R.tagName && R.tagName.toLowerCase() == j.toLowerCase()) {
                if (i.endElement(R.uri, R.localName, j), E) for (var P in E) {
                  i.endPrefixMapping(P);
                }
                N || p.fatalError("end tag name: " + j + " is not match the current start tagName:" + R.tagName);
              } else k.push(R);

              A++;
              break;

            case "?":
              y && v(S), A = u(e, S, i);
              break;

            case "!":
              y && v(S), A = l(e, S, i, p);
              break;

            default:
              y && v(S);
              var B = new d(),
                  I = k[k.length - 1].currentNSMap,
                  A = s(e, S, B, I, x, p),
                  D = B.length;

              if (!B.closed && r(e, A, B.tagName, w) && (B.closed = !0, n.nbsp || p.warning("unclosed xml attribute")), y && D) {
                for (var O = o(y, {}), U = 0; U < D; U++) {
                  var z = B[U];
                  v(z.offset), z.locator = o(y, {});
                }

                i.locator = O, t(B, i, I) && k.push(B), i.locator = y;
              } else t(B, i, I) && k.push(B);

              "http://www.w3.org/1999/xhtml" !== B.uri || B.closed ? A++ : A = c(e, A, B.tagName, x, i);
          }
        } catch (e) {
          p.error("element parse error: " + e), A = -1;
        }

        A > C ? C = A : f(Math.max(S, C) + 1);
      }
    }

    function o(e, a) {
      return a.lineNumber = e.lineNumber, a.columnNumber = e.columnNumber, a;
    }

    function s(e, a, n, i, o, s) {
      for (var t, c, r = ++a, p = g;;) {
        var l = e.charAt(r);

        switch (l) {
          case "=":
            if (p === b) t = e.slice(a, r), p = k;else {
              if (p !== y) throw new Error("attribute equal must after attrName");
              p = k;
            }
            break;

          case "'":
          case '"':
            if (p === k || p === b) {
              if (p === b && (s.warning('attribute value must after "="'), t = e.slice(a, r)), a = r + 1, !((r = e.indexOf(l, a)) > 0)) throw new Error("attribute value no end '" + l + "' match");
              c = e.slice(a, r).replace(/&#?\w+;/g, o), n.add(t, c, a - 1), p = C;
            } else {
              if (p != w) throw new Error('attribute value must after "="');
              c = e.slice(a, r).replace(/&#?\w+;/g, o), n.add(t, c, a), s.warning('attribute "' + t + '" missed start quot(' + l + ")!!"), a = r + 1, p = C;
            }

            break;

          case "/":
            switch (p) {
              case g:
                n.setTagName(e.slice(a, r));

              case C:
              case S:
              case T:
                p = T, n.closed = !0;

              case w:
              case b:
              case y:
                break;

              default:
                throw new Error("attribute invalid close char('/')");
            }

            break;

          case "":
            return s.error("unexpected end of input"), p == g && n.setTagName(e.slice(a, r)), r;

          case ">":
            switch (p) {
              case g:
                n.setTagName(e.slice(a, r));

              case C:
              case S:
              case T:
                break;

              case w:
              case b:
                c = e.slice(a, r), "/" === c.slice(-1) && (n.closed = !0, c = c.slice(0, -1));

              case y:
                p === y && (c = t), p == w ? (s.warning('attribute "' + c + '" missed quot(")!!'), n.add(t, c.replace(/&#?\w+;/g, o), a)) : ("http://www.w3.org/1999/xhtml" === i[""] && c.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + c + '" missed value!! "' + c + '" instead!!'), n.add(c, c, a));
                break;

              case k:
                throw new Error("attribute value missed!!");
            }

            return r;

          case "":
            l = " ";

          default:
            if (l <= " ") switch (p) {
              case g:
                n.setTagName(e.slice(a, r)), p = S;
                break;

              case b:
                t = e.slice(a, r), p = y;
                break;

              case w:
                var c = e.slice(a, r).replace(/&#?\w+;/g, o);
                s.warning('attribute "' + c + '" missed quot(")!!'), n.add(t, c, a);

              case C:
                p = S;
            } else switch (p) {
              case y:
                n.tagName;
                "http://www.w3.org/1999/xhtml" === i[""] && t.match(/^(?:disabled|checked|selected)$/i) || s.warning('attribute "' + t + '" missed value!! "' + t + '" instead2!!'), n.add(t, t, a), a = r, p = b;
                break;

              case C:
                s.warning('attribute space is required"' + t + '"!!');

              case S:
                p = b, a = r;
                break;

              case k:
                p = w, a = r;
                break;

              case T:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
        }

        r++;
      }
    }

    function t(e, a, n) {
      for (var i = e.tagName, o = null, s = e.length; s--;) {
        var t = e[s],
            c = t.qName,
            r = t.value,
            l = c.indexOf(":");
        if (l > 0) var u = t.prefix = c.slice(0, l),
            d = c.slice(l + 1),
            m = "xmlns" === u && d;else d = c, u = null, m = "xmlns" === c && "";
        t.localName = d, !1 !== m && (null == o && (o = {}, p(n, n = {})), n[m] = o[m] = r, t.uri = "http://www.w3.org/2000/xmlns/", a.startPrefixMapping(m, r));
      }

      for (var s = e.length; s--;) {
        t = e[s];
        var u = t.prefix;
        u && ("xml" === u && (t.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== u && (t.uri = n[u || ""]));
      }

      var l = i.indexOf(":");
      l > 0 ? (u = e.prefix = i.slice(0, l), d = e.localName = i.slice(l + 1)) : (u = null, d = e.localName = i);
      var x = e.uri = n[u || ""];
      if (a.startElement(x, d, i, e), !e.closed) return e.currentNSMap = n, e.localNSMap = o, !0;
      if (a.endElement(x, d, i), o) for (u in o) {
        a.endPrefixMapping(u);
      }
    }

    function c(e, a, n, i, o) {
      if (/^(?:script|textarea)$/i.test(n)) {
        var s = e.indexOf("</" + n + ">", a),
            t = e.substring(a + 1, s);
        if (/[&<]/.test(t)) return /^script$/i.test(n) ? (o.characters(t, 0, t.length), s) : (t = t.replace(/&#?\w+;/g, i), o.characters(t, 0, t.length), s);
      }

      return a + 1;
    }

    function r(e, a, n, i) {
      var o = i[n];
      return null == o && (o = e.lastIndexOf("</" + n + ">"), o < a && (o = e.lastIndexOf("</" + n)), i[n] = o), o < a;
    }

    function p(e, a) {
      for (var n in e) {
        a[n] = e[n];
      }
    }

    function l(e, a, n, i) {
      switch (e.charAt(a + 2)) {
        case "-":
          if ("-" === e.charAt(a + 3)) {
            var o = e.indexOf("--\x3e", a + 4);
            return o > a ? (n.comment(e, a + 4, o - a - 4), o + 3) : (i.error("Unclosed comment"), -1);
          }

          return -1;

        default:
          if ("CDATA[" == e.substr(a + 3, 6)) {
            var o = e.indexOf("]]>", a + 9);
            return n.startCDATA(), n.characters(e, a + 9, o - a - 9), n.endCDATA(), o + 3;
          }

          var s = x(e, a),
              t = s.length;

          if (t > 1 && /!doctype/i.test(s[0][0])) {
            var c = s[1][0],
                r = t > 3 && /^public$/i.test(s[2][0]) && s[3][0],
                p = t > 4 && s[4][0],
                l = s[t - 1];
            return n.startDTD(c, r && r.replace(/^(['"])(.*?)\1$/, "$2"), p && p.replace(/^(['"])(.*?)\1$/, "$2")), n.endDTD(), l.index + l[0].length;
          }

      }

      return -1;
    }

    function u(e, a, n) {
      var i = e.indexOf("?>", a);

      if (i) {
        var o = e.substring(a, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);

        if (o) {
          o[0].length;
          return n.processingInstruction(o[1], o[2]), i + 2;
        }

        return -1;
      }

      return -1;
    }

    function d(e) {}

    function m(e, a) {
      return e.__proto__ = a, e;
    }

    function x(e, a) {
      var n,
          i = [],
          o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;

      for (o.lastIndex = a, o.exec(e); n = o.exec(e);) {
        if (i.push(n), n[1]) return i;
      }
    }

    var f = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        v = new RegExp("[\\-\\.0-9" + f.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
        h = new RegExp("^" + f.source + v.source + "*(?::" + f.source + v.source + "*)?$"),
        g = 0,
        b = 1,
        y = 2,
        k = 3,
        w = 4,
        C = 5,
        S = 6,
        T = 7;
    n.prototype = {
      parse: function parse(e, a, n) {
        var o = this.domBuilder;
        o.startDocument(), p(a, a = {}), i(e, a, n, o, this.errorHandler), o.endDocument();
      }
    }, d.prototype = {
      setTagName: function setTagName(e) {
        if (!h.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
      },
      add: function add(e, a, n) {
        if (!h.test(e)) throw new Error("invalid attribute:" + e);
        this[this.length++] = {
          qName: e,
          value: a,
          offset: n
        };
      },
      length: 0,
      getLocalName: function getLocalName(e) {
        return this[e].localName;
      },
      getLocator: function getLocator(e) {
        return this[e].locator;
      },
      getQName: function getQName(e) {
        return this[e].qName;
      },
      getURI: function getURI(e) {
        return this[e].uri;
      },
      getValue: function getValue(e) {
        return this[e].value;
      }
    }, m({}, m.prototype) instanceof m || (m = function m(e, a) {
      function n() {}

      n.prototype = a, n = new n();

      for (a in e) {
        n[a] = e[a];
      }

      return n;
    }), a.XMLReader = n;
  }, function (e, a, n) {
    function i(e, a) {
      var n,
          i,
          s = this,
          t = new h(),
          r = e.TaskId,
          l = e.Bucket,
          u = e.Region,
          d = e.Key,
          m = e.FilePath,
          x = e.ChunkSize || e.SliceSize || s.options.ChunkSize,
          v = e.AsyncLimit,
          b = e.StorageClass,
          y = e.ServerSideEncryption,
          k = e.onHashProgress;
      t.on("error", function (e) {
        if (s._isRunningTask(r)) return a(e);
      }), t.on("upload_complete", function (e) {
        a(null, e);
      }), t.on("upload_slice_complete", function (e) {
        p.call(s, {
          Bucket: l,
          Region: u,
          Key: d,
          UploadId: e.UploadId,
          SliceList: e.SliceList
        }, function (a, o) {
          if (s._isRunningTask(r)) {
            if (f.removeUsing(e.UploadId), a) return i(null, !0), t.emit("error", a);
            f.removeUploadId(e.UploadId), i({
              loaded: n,
              total: n
            }, !0), t.emit("upload_complete", o);
          }
        });
      }), t.on("get_upload_data_finish", function (a) {
        var o = f.getFileId(e.FileStat, e.ChunkSize, l, d);
        o && f.saveUploadId(o, a.UploadId, s.options.UploadIdCacheLimit), f.setUsing(a.UploadId), i(null, !0), c.call(s, {
          TaskId: r,
          Bucket: l,
          Region: u,
          Key: d,
          FilePath: m,
          FileSize: n,
          SliceSize: x,
          AsyncLimit: v,
          ServerSideEncryption: y,
          UploadData: a,
          onProgress: i
        }, function (e, a) {
          if (s._isRunningTask(r)) return e ? (i(null, !0), t.emit("error", e)) : void t.emit("upload_slice_complete", a);
        });
      }), t.on("get_file_size_finish", function () {
        if (i = g.throttleOnProgress.call(s, n, e.onProgress), e.UploadData.UploadId) t.emit("get_upload_data_finish", e.UploadData);else {
          var a = g.extend({
            TaskId: r,
            Bucket: l,
            Region: u,
            Key: d,
            Headers: e.Headers,
            StorageClass: b,
            FilePath: m,
            FileSize: n,
            SliceSize: x,
            onHashProgress: k
          }, e);
          o.call(s, a, function (a, n) {
            if (s._isRunningTask(r)) {
              if (a) return t.emit("error", a);
              e.UploadData.UploadId = n.UploadId, e.UploadData.PartList = n.PartList, t.emit("get_upload_data_finish", e.UploadData);
            }
          });
        }
      }), n = e.ContentLength, delete e.ContentLength, !e.Headers && (e.Headers = {}), g.each(e.Headers, function (a, n) {
        "content-length" === n.toLowerCase() && delete e.Headers[n];
      }), function () {
        for (var a = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], i = 1048576, o = 0; o < a.length && (i = 1024 * a[o] * 1024, !(n / i <= s.options.MaxPartNumber)); o++) {
          ;
        }

        e.ChunkSize = e.SliceSize = x = Math.max(x, i);
      }(), 0 === n ? (e.Body = "", e.ContentLength = 0, e.SkipTask = !0, s.putObject(e, function (e, n) {
        if (e) return a(e);
        a(null, n);
      })) : t.emit("get_file_size_finish");
    }

    function o(e, a) {
      var n = e.TaskId,
          i = e.Bucket,
          o = e.Region,
          c = e.Key,
          r = e.StorageClass,
          p = this,
          l = {},
          u = e.FileSize,
          d = e.SliceSize,
          m = Math.ceil(u / d),
          x = 0,
          b = 0,
          y = g.throttleOnProgress.call(p, u, e.onHashProgress),
          k = function k(a, n) {
        var i = d * (a - 1),
            o = Math.min(i + d, u),
            s = o - i;
        l[a] ? n(null, {
          PartNumber: a,
          ETag: l[a],
          Size: s
        }) : g.fileSlice(e.FilePath, i, o, function (e) {
          try {
            var i = g.getFileMd5(e);
          } catch (e) {
            return n(e);
          }

          var o = '"' + i + '"';
          l[a] = o, x += 1, b += s, n(null, {
            PartNumber: a,
            ETag: o,
            Size: s
          }), y({
            loaded: b,
            total: u
          });
        });
      },
          w = function w(e, a) {
        var n = e.length;
        if (0 === n) return a(null, !0);
        if (n > m) return a(null, !1);

        if (n > 1) {
          if (Math.max(e[0].Size, e[1].Size) !== d) return a(null, !1);
        }

        var i = function i(o) {
          if (o < n) {
            var s = e[o];
            k(s.PartNumber, function (e, n) {
              n && n.ETag === s.ETag && n.Size === s.Size ? i(o + 1) : a(null, !1);
            });
          } else a(null, !0);
        };

        i(0);
      },
          C = new h();

      C.on("error", function (e) {
        if (p._isRunningTask(n)) return a(e);
      }), C.on("upload_id_available", function (e) {
        var n = {},
            i = [];
        g.each(e.PartList, function (e) {
          n[e.PartNumber] = e;
        });

        for (var o = 1; o <= m; o++) {
          var s = n[o];
          s ? (s.PartNumber = o, s.Uploaded = !0) : s = {
            PartNumber: o,
            ETag: null,
            Uploaded: !1
          }, i.push(s);
        }

        e.PartList = i, a(null, e);
      }), C.on("no_available_upload_id", function () {
        if (p._isRunningTask(n)) {
          var s = g.extend({
            Bucket: i,
            Region: o,
            Key: c,
            Headers: g.clone(e.Headers),
            StorageClass: r
          }, e);
          p.multipartInit(s, function (e, i) {
            if (p._isRunningTask(n)) {
              if (e) return C.emit("error", e);
              var o = i.UploadId;
              if (!o) return a({
                Message: "no upload id"
              });
              C.emit("upload_id_available", {
                UploadId: o,
                PartList: []
              });
            }
          });
        }
      }), C.on("has_and_check_upload_id", function (e) {
        e = e.reverse(), v.eachLimit(e, 1, function (e, a) {
          if (p._isRunningTask(n)) return f.using[e] ? void a() : void t.call(p, {
            Bucket: i,
            Region: o,
            Key: c,
            UploadId: e
          }, function (i, o) {
            if (p._isRunningTask(n)) {
              if (i) return f.removeUsing(e), C.emit("error", i);
              var s = o.PartList;
              s.forEach(function (e) {
                e.PartNumber *= 1, e.Size *= 1, e.ETag = e.ETag || "";
              }), w(s, function (i, o) {
                if (p._isRunningTask(n)) return i ? C.emit("error", i) : void (o ? a({
                  UploadId: e,
                  PartList: s
                }) : a());
              });
            }
          });
        }, function (e) {
          p._isRunningTask(n) && (y(null, !0), e && e.UploadId ? C.emit("upload_id_available", e) : C.emit("no_available_upload_id"));
        });
      }), C.on("seek_local_avail_upload_id", function (a) {
        var s = f.getFileId(e.FileStat, e.ChunkSize, i, c),
            r = f.getUploadIdList(s);
        if (!s || !r) return void C.emit("has_and_check_upload_id", a);

        var l = function l(e) {
          if (e >= r.length) return void C.emit("has_and_check_upload_id", a);
          var s = r[e];
          return g.isInArray(a, s) ? f.using[s] ? void l(e + 1) : void t.call(p, {
            Bucket: i,
            Region: o,
            Key: c,
            UploadId: s
          }, function (a, i) {
            p._isRunningTask(n) && (a ? (f.removeUploadId(s), l(e + 1)) : C.emit("upload_id_available", {
              UploadId: s,
              PartList: i.PartList
            }));
          }) : (f.removeUploadId(s), void l(e + 1));
        };

        l(0);
      }), C.on("get_remote_upload_id_list", function (a) {
        s.call(p, {
          Bucket: i,
          Region: o,
          Key: c
        }, function (a, o) {
          if (p._isRunningTask(n)) {
            if (a) return C.emit("error", a);
            var s = g.filter(o.UploadList, function (e) {
              return e.Key === c && (!r || e.StorageClass.toUpperCase() === r.toUpperCase());
            }).reverse().map(function (e) {
              return e.UploadId || e.UploadID;
            });
            if (s.length) C.emit("seek_local_avail_upload_id", s);else {
              var t,
                  l = f.getFileId(e.FileStat, e.ChunkSize, i, c);
              l && (t = f.getUploadIdList(l)) && g.each(t, function (e) {
                f.removeUploadId(e);
              }), C.emit("no_available_upload_id");
            }
          }
        });
      }), C.emit("get_remote_upload_id_list");
    }

    function s(e, a) {
      var n = this,
          i = [],
          o = {
        Bucket: e.Bucket,
        Region: e.Region,
        Prefix: e.Key
      },
          s = function s() {
        n.multipartList(o, function (e, n) {
          if (e) return a(e);
          i.push.apply(i, n.Upload || []), "true" === n.IsTruncated ? (o.KeyMarker = n.NextKeyMarker, o.UploadIdMarker = n.NextUploadIdMarker, s()) : a(null, {
            UploadList: i
          });
        });
      };

      s();
    }

    function t(e, a) {
      var n = this,
          i = [],
          o = {
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        UploadId: e.UploadId
      },
          s = function s() {
        n.multipartListPart(o, function (e, n) {
          if (e) return a(e);
          i.push.apply(i, n.Part || []), "true" === n.IsTruncated ? (o.PartNumberMarker = n.NextPartNumberMarker, s()) : a(null, {
            PartList: i
          });
        });
      };

      s();
    }

    function c(e, a) {
      var n = this,
          i = e.TaskId,
          o = e.Bucket,
          s = e.Region,
          t = e.Key,
          c = e.UploadData,
          p = e.FileSize,
          l = e.SliceSize,
          u = Math.min(e.AsyncLimit || n.options.ChunkParallelLimit || 1, 256),
          d = e.FilePath,
          m = Math.ceil(p / l),
          x = 0,
          f = e.ServerSideEncryption,
          h = g.filter(c.PartList, function (e) {
        return e.Uploaded && (x += e.PartNumber >= m ? p % l || l : l), !e.Uploaded;
      }),
          b = e.onProgress;
      v.eachLimit(h, u, function (e, a) {
        if (n._isRunningTask(i)) {
          var u = e.PartNumber,
              m = Math.min(p, e.PartNumber * l) - (e.PartNumber - 1) * l,
              v = 0;
          r.call(n, {
            TaskId: i,
            Bucket: o,
            Region: s,
            Key: t,
            SliceSize: l,
            FileSize: p,
            PartNumber: u,
            ServerSideEncryption: f,
            FilePath: d,
            UploadData: c,
            onProgress: function onProgress(e) {
              x += e.loaded - v, v = e.loaded, b({
                loaded: x,
                total: p
              });
            }
          }, function (o, s) {
            n._isRunningTask(i) && (!g.isBrowser || o || s.ETag || (o = 'get ETag error, please add "ETag" to CORS ExposeHeader setting.'), o ? x -= v : (x += m - v, e.ETag = s.ETag), b({
              loaded: x,
              total: p
            }), a(o || null, s));
          });
        }
      }, function (e) {
        if (n._isRunningTask(i)) return e ? a(e) : void a(null, {
          UploadId: c.UploadId,
          SliceList: c.PartList
        });
      });
    }

    function r(e, a) {
      var n = this,
          i = e.TaskId,
          o = e.Bucket,
          s = e.Region,
          t = e.Key,
          c = e.FileSize,
          r = e.FilePath,
          p = 1 * e.PartNumber,
          l = e.SliceSize,
          u = e.ServerSideEncryption,
          d = e.UploadData,
          m = n.options.ChunkRetryTimes + 1,
          x = l * (p - 1),
          f = l,
          h = x + l;
      h > c && (h = c, f = h - x), g.fileSlice(r, x, h, function (c) {
        var r = g.getFileMd5(c),
            l = r ? g.binaryBase64(r) : "",
            x = d.PartList[p - 1];
        v.retry(m, function (a) {
          n._isRunningTask(i) && n.multipartUpload({
            TaskId: i,
            Bucket: o,
            Region: s,
            Key: t,
            ContentLength: f,
            PartNumber: p,
            UploadId: d.UploadId,
            ServerSideEncryption: u,
            Body: c,
            onProgress: e.onProgress,
            ContentMD5: l
          }, function (e, o) {
            if (n._isRunningTask(i)) return e ? a(e) : (x.Uploaded = !0, a(null, o));
          });
        }, function (e, o) {
          if (n._isRunningTask(i)) return a(e, o);
        });
      });
    }

    function p(e, a) {
      var n = e.Bucket,
          i = e.Region,
          o = e.Key,
          s = e.UploadId,
          t = e.SliceList,
          c = this,
          r = this.options.ChunkRetryTimes + 1,
          p = t.map(function (e) {
        return {
          PartNumber: e.PartNumber,
          ETag: e.ETag
        };
      });
      v.retry(r, function (e) {
        c.multipartComplete({
          Bucket: n,
          Region: i,
          Key: o,
          UploadId: s,
          Parts: p
        }, e);
      }, function (e, n) {
        a(e, n);
      });
    }

    function l(e, a) {
      var n = e.Bucket,
          i = e.Region,
          o = e.Key,
          t = e.UploadId,
          c = e.Level || "task",
          r = e.AsyncLimit,
          p = this,
          l = new h();
      if (l.on("error", function (e) {
        return a(e);
      }), l.on("get_abort_array", function (s) {
        u.call(p, {
          Bucket: n,
          Region: i,
          Key: o,
          Headers: e.Headers,
          AsyncLimit: r,
          AbortArray: s
        }, function (e, n) {
          if (e) return a(e);
          a(null, n);
        });
      }), "bucket" === c) s.call(p, {
        Bucket: n,
        Region: i
      }, function (e, n) {
        if (e) return a(e);
        l.emit("get_abort_array", n.UploadList || []);
      });else if ("file" === c) {
        if (!o) return a({
          error: "abort_upload_task_no_key"
        });
        s.call(p, {
          Bucket: n,
          Region: i,
          Key: o
        }, function (e, n) {
          if (e) return a(e);
          l.emit("get_abort_array", n.UploadList || []);
        });
      } else {
        if ("task" !== c) return a({
          error: "abort_unknown_level"
        });
        if (!t) return a({
          error: "abort_upload_task_no_id"
        });
        if (!o) return a({
          error: "abort_upload_task_no_key"
        });
        l.emit("get_abort_array", [{
          Key: o,
          UploadId: t
        }]);
      }
    }

    function u(e, a) {
      var n = e.Bucket,
          i = e.Region,
          o = e.Key,
          s = e.AbortArray,
          t = e.AsyncLimit || 1,
          c = this,
          r = 0,
          p = new Array(s.length);
      v.eachLimit(s, t, function (a, s) {
        var t = r;
        if (o && o !== a.Key) return p[t] = {
          error: {
            KeyNotMatch: !0
          }
        }, void s(null);
        var l = a.UploadId || a.UploadID;
        c.multipartAbort({
          Bucket: n,
          Region: i,
          Key: a.Key,
          Headers: e.Headers,
          UploadId: l
        }, function (e, o) {
          var c = {
            Bucket: n,
            Region: i,
            Key: a.Key,
            UploadId: l
          };
          p[t] = {
            error: e,
            task: c
          }, s(null);
        }), r++;
      }, function (e) {
        if (e) return a(e);

        for (var n = [], i = [], o = 0, s = p.length; o < s; o++) {
          var t = p[o];
          t.task && (t.error ? i.push(t.task) : n.push(t.task));
        }

        return a(null, {
          successList: n,
          errorList: i
        });
      });
    }

    function d(e, a) {
      var n = this,
          i = void 0 === e.SliceSize ? n.options.SliceSize : e.SliceSize,
          o = 0,
          s = 0,
          t = g.throttleOnProgress.call(n, s, e.onProgress),
          c = e.files.length,
          r = e.onFileFinish,
          p = Array(c),
          l = function l(e, n, i) {
        t(null, !0), r && r(e, n, i), p[i.Index] = {
          options: i,
          error: e,
          data: n
        }, --c <= 0 && a && a(null, {
          files: p
        });
      },
          u = [];

      g.each(e.files, function (e, a) {
        var n = e.FileSize,
            c = {
          Index: a,
          TaskId: ""
        };
        o += n, g.each(e, function (e, a) {
          "object" != _typeof(e) && "function" != typeof e && (c[a] = e);
        });

        var r = e.onTaskReady,
            p = function p(e) {
          c.TaskId = e, r && r(e);
        };

        e.onTaskReady = p;

        var d = 0,
            m = e.onProgress,
            x = function x(e) {
          s = s - d + e.loaded, d = e.loaded, m && m(e), t({
            loaded: s,
            total: o
          });
        };

        e.onProgress = x;

        var f = e.onFileFinish,
            v = function v(e, a) {
          f && f(e, a), l && l(e, a, c);
        },
            h = n > i ? "sliceUploadFile" : "postObject";

        u.push({
          api: h,
          params: e,
          callback: v
        });
      }), n._addTasks(u);
    }

    function m(e, a) {
      var n = new h(),
          i = this,
          o = e.Bucket,
          s = e.Region,
          t = e.Key,
          c = e.CopySource,
          r = c.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
      if (!r) return void a({
        error: "CopySource format error"
      });
      var p = r[1],
          l = r[3],
          u = decodeURIComponent(r[4]),
          d = void 0 === e.CopySliceSize ? i.options.CopySliceSize : e.CopySliceSize;
      d = Math.max(0, d);
      var m,
          f,
          b = e.CopyChunkSize || this.options.CopyChunkSize,
          y = this.options.CopyChunkParallelLimit,
          k = 0;
      n.on("copy_slice_complete", function (e) {
        i.multipartComplete({
          Bucket: o,
          Region: s,
          Key: t,
          UploadId: e.UploadId,
          Parts: e.PartList
        }, function (e, n) {
          if (e) return f(null, !0), a(e);
          f({
            loaded: m,
            total: m
          }, !0), a(null, n);
        });
      }), n.on("get_copy_data_finish", function (e) {
        v.eachLimit(e.PartList, y, function (a, n) {
          var r = a.PartNumber,
              p = a.CopySourceRange,
              l = a.end - a.start,
              u = 0;
          x.call(i, {
            Bucket: o,
            Region: s,
            Key: t,
            CopySource: c,
            UploadId: e.UploadId,
            PartNumber: r,
            CopySourceRange: p,
            onProgress: function onProgress(e) {
              k += e.loaded - u, u = e.loaded, f({
                loaded: k,
                total: m
              });
            }
          }, function (e, i) {
            if (e) return n(e);
            f({
              loaded: k,
              total: m
            }), k += l - u, a.ETag = i.ETag, n(e || null, i);
          });
        }, function (i) {
          if (i) return f(null, !0), a(i);
          n.emit("copy_slice_complete", e);
        });
      }), n.on("get_file_size_finish", function (c) {
        !function () {
          for (var a = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], n = 1048576, o = 0; o < a.length && (n = 1024 * a[o] * 1024, !(m / n <= i.options.MaxPartNumber)); o++) {
            ;
          }

          e.ChunkSize = b = Math.max(b, n);

          for (var s = Math.ceil(m / b), t = [], c = 1; c <= s; c++) {
            var r = (c - 1) * b,
                p = c * b < m ? c * b - 1 : m - 1,
                l = {
              PartNumber: c,
              start: r,
              end: p,
              CopySourceRange: "bytes=" + r + "-" + p
            };
            t.push(l);
          }

          e.PartList = t;
        }();
        var r;

        if (r = "Replaced" === e.Headers["x-cos-metadata-directive"] ? e.Headers : c, r["x-cos-storage-class"] = e.Headers["x-cos-storage-class"] || c["x-cos-storage-class"], r = g.clearKey(r), "ARCHIVE" === c["x-cos-storage-class"]) {
          var p = c["x-cos-restore"];
          if (!p || 'ongoing-request="true"' === p) return void a({
            error: "Unrestored archive object is not allowed to be copied"
          });
        }

        delete r["x-cos-copy-source"], delete r["x-cos-metadata-directive"], delete r["x-cos-copy-source-If-Modified-Since"], delete r["x-cos-copy-source-If-Unmodified-Since"], delete r["x-cos-copy-source-If-Match"], delete r["x-cos-copy-source-If-None-Match"], i.multipartInit({
          Bucket: o,
          Region: s,
          Key: t,
          Headers: r
        }, function (i, o) {
          if (i) return a(i);
          e.UploadId = o.UploadId, n.emit("get_copy_data_finish", e);
        });
      }), i.headObject({
        Bucket: p,
        Region: l,
        Key: u
      }, function (o, s) {
        if (o) return void a(o.statusCode && 404 === o.statusCode ? {
          ErrorStatus: u + " Not Exist"
        } : o);
        if (void 0 === (m = e.FileSize = s.headers["content-length"]) || !m) return void a({
          error: 'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'
        });
        if (f = g.throttleOnProgress.call(i, m, e.onProgress), m <= d) e.Headers["x-cos-metadata-directive"] || (e.Headers["x-cos-metadata-directive"] = "Copy"), i.putObjectCopy(e, function (e, n) {
          if (e) return f(null, !0), a(e);
          f({
            loaded: m,
            total: m
          }, !0), a(e, n);
        });else {
          var t = s.headers,
              c = {
            "Cache-Control": t["cache-control"],
            "Content-Disposition": t["content-disposition"],
            "Content-Encoding": t["content-encoding"],
            "Content-Type": t["content-type"],
            Expires: t.expires,
            "x-cos-storage-class": t["x-cos-storage-class"]
          };
          g.each(t, function (e, a) {
            0 === a.indexOf("x-cos-meta-") && a.length > "x-cos-meta-".length && (c[a] = e);
          }), n.emit("get_file_size_finish", c);
        }
      });
    }

    function x(e, a) {
      var n = e.TaskId,
          i = e.Bucket,
          o = e.Region,
          s = e.Key,
          t = e.CopySource,
          c = e.UploadId,
          r = 1 * e.PartNumber,
          p = e.CopySourceRange,
          l = this.options.ChunkRetryTimes + 1,
          u = this;
      v.retry(l, function (a) {
        u.uploadPartCopy({
          TaskId: n,
          Bucket: i,
          Region: o,
          Key: s,
          CopySource: t,
          UploadId: c,
          PartNumber: r,
          CopySourceRange: p,
          onProgress: e.onProgress
        }, function (e, n) {
          a(e || null, n);
        });
      }, function (e, n) {
        return a(e, n);
      });
    }

    var f = n(3),
        v = n(20),
        h = n(2).EventProxy,
        g = n(0),
        b = {
      sliceUploadFile: i,
      abortUploadTask: l,
      uploadFiles: d,
      sliceCopyFile: m
    };

    e.exports.init = function (e, a) {
      a.transferToTaskMethod(b, "sliceUploadFile"), g.each(b, function (a, n) {
        e.prototype[n] = g.apiWrapper(n, a);
      });
    };
  }, function (e, a) {
    var n = function n(e, a, _n, i) {
      if (i = i || function () {}, !e.length || a <= 0) return i();
      var o = 0,
          s = 0,
          t = 0;
      !function c() {
        if (o >= e.length) return i();

        for (; t < a && s < e.length;) {
          s += 1, t += 1, _n(e[s - 1], function (a) {
            a ? (i(a), i = function i() {}) : (o += 1, t -= 1, o >= e.length ? i() : c());
          });
        }
      }();
    },
        i = function i(e, a, n) {
      var i = function i(o) {
        a(function (a, s) {
          a && o < e ? i(o + 1) : n(a, s);
        });
      };

      e < 1 ? n() : i(1);
    },
        o = {
      eachLimit: n,
      retry: i
    };

    e.exports = o;
  }, function (e, a, n) {
    "use strict";

    function i(e, a) {
      "function" == typeof e && (a = e, e = {});
      var n = this.options.ServiceDomain,
          i = e.AppId || this.options.appId;
      n ? (n = n.replace(/\{\{AppId\}\}/gi, i || "").replace(/\{\{.*?\}\}/gi, ""), /^[a-zA-Z]+:\/\//.test(n) || (n = "https://" + n), "/" === n.slice(-1) && (n = n.slice(0, -1))) : n = "https://service.cos.myqcloud.com", ee.call(this, {
        Action: "name/cos:GetService",
        url: n + "/",
        method: "GET"
      }, function (e, n) {
        if (e) return a(e);
        var i = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Buckets && n.ListAllMyBucketsResult.Buckets.Bucket || [];
        i = ie.isArray(i) ? i : [i], a(null, {
          Buckets: i,
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function o(e, a) {
      ee.call(this, {
        Action: "name/cos:HeadBucket",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        method: "HEAD"
      }, function (e, n) {
        a(e, n);
      });
    }

    function s(e, a) {
      var n = {};
      n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n.marker = e.Marker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, ee.call(this, {
        Action: "name/cos:GetBucket",
        ResourceKey: n.prefix,
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        qs: n
      }, function (e, n) {
        if (e) return a(e);
        var i = n.ListBucketResult || {},
            o = i.Contents || [],
            s = i.CommonPrefixes || [];
        o = ie.isArray(o) ? o : [o], s = ie.isArray(s) ? s : [s];
        var t = ie.clone(i);
        ie.extend(t, {
          Contents: o,
          CommonPrefixes: s,
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, t);
      });
    }

    function t(e, a) {
      var n = this,
          i = {};
      i["x-cos-acl"] = e.ACL, i["x-cos-grant-read"] = e.GrantRead, i["x-cos-grant-write"] = e.GrantWrite, i["x-cos-grant-read-acp"] = e.GrantReadAcp, i["x-cos-grant-write-acp"] = e.GrantWriteAcp, i["x-cos-grant-full-control"] = e.GrantFullControl, ee.call(this, {
        Action: "name/cos:PutBucket",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: i
      }, function (i, o) {
        if (i) return a(i);
        var s = Z({
          domain: n.options.Domain,
          bucket: e.Bucket,
          region: e.Region,
          isLocation: !0
        });
        a(null, {
          Location: s,
          statusCode: o.statusCode,
          headers: o.headers
        });
      });
    }

    function c(e, a) {
      ee.call(this, {
        Action: "name/cos:DeleteBucket",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        method: "DELETE"
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function r(e, a) {
      ee.call(this, {
        Action: "name/cos:GetBucketACL",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "acl"
      }, function (e, n) {
        if (e) return a(e);
        var i = n.AccessControlPolicy || {},
            o = i.Owner || {},
            s = i.AccessControlList.Grant || [];
        s = ie.isArray(s) ? s : [s];
        var t = W(i);
        n.headers && n.headers["x-cos-acl"] && (t.ACL = n.headers["x-cos-acl"]), t = ie.extend(t, {
          Owner: o,
          Grants: s,
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, t);
      });
    }

    function p(e, a) {
      var n = e.Headers,
          i = "";

      if (e.AccessControlPolicy) {
        var o = ie.clone(e.AccessControlPolicy || {}),
            s = o.Grants || o.Grant;
        s = ie.isArray(s) ? s : [s], delete o.Grant, delete o.Grants, o.AccessControlList = {
          Grant: s
        }, i = ie.json2xml({
          AccessControlPolicy: o
        }), n["Content-Type"] = "application/xml", n["Content-MD5"] = ie.binaryBase64(ie.md5(i));
      }

      ie.each(n, function (e, a) {
        0 === a.indexOf("x-cos-grant-") && (n[a] = Q(n[a]));
      }), ee.call(this, {
        Action: "name/cos:PutBucketACL",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: n,
        action: "acl",
        body: i
      }, function (e, n) {
        if (e) return a(e);
        a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function l(e, a) {
      ee.call(this, {
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
            e.headers && (i.headers = e.headers), a(null, i);
          } else a(e);
        } else {
          var o = n.CORSConfiguration || {},
              s = o.CORSRules || o.CORSRule || [];
          s = ie.clone(ie.isArray(s) ? s : [s]), ie.each(s, function (e) {
            ie.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (a, n) {
              var i = a + "s",
                  o = e[i] || e[a] || [];
              delete e[a], e[i] = ie.isArray(o) ? o : [o];
            });
          }), a(null, {
            CORSRules: s,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function u(e, a) {
      var n = e.CORSConfiguration || {},
          i = n.CORSRules || e.CORSRules || [];
      i = ie.clone(ie.isArray(i) ? i : [i]), ie.each(i, function (e) {
        ie.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (a, n) {
          var i = a + "s",
              o = e[i] || e[a] || [];
          delete e[i], e[a] = ie.isArray(o) ? o : [o];
        });
      });
      var o = ie.json2xml({
        CORSConfiguration: {
          CORSRule: i
        }
      }),
          s = e.Headers;
      s["Content-Type"] = "application/xml", s["Content-MD5"] = ie.binaryBase64(ie.md5(o)), ee.call(this, {
        Action: "name/cos:PutBucketCORS",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: o,
        action: "cors",
        headers: s
      }, function (e, n) {
        if (e) return a(e);
        a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function d(e, a) {
      ee.call(this, {
        Action: "name/cos:DeleteBucketCORS",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "cors"
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode || e.statusCode,
          headers: n.headers
        });
      });
    }

    function m(e, a) {
      var n = e.Policy,
          i = n;

      try {
        "string" == typeof n ? n = JSON.parse(i) : i = JSON.stringify(n);
      } catch (e) {
        a({
          error: "Policy format error"
        });
      }

      var o = e.Headers;
      o["Content-Type"] = "application/json", o["Content-MD5"] = ie.binaryBase64(ie.md5(i)), ee.call(this, {
        Action: "name/cos:PutBucketPolicy",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        action: "policy",
        body: ie.isBrowser ? i : n,
        headers: o,
        json: !0
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function x(e, a) {
      ee.call(this, {
        Action: "name/cos:DeleteBucketPolicy",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "policy"
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode || e.statusCode,
          headers: n.headers
        });
      });
    }

    function f(e, a) {
      ee.call(this, {
        Action: "name/cos:GetBucketLocation",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "location"
      }, function (e, n) {
        if (e) return a(e);
        a(null, n);
      });
    }

    function v(e, a) {
      ee.call(this, {
        Action: "name/cos:GetBucketPolicy",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "policy",
        rawBody: !0
      }, function (e, n) {
        if (e) return a(e.statusCode && 403 === e.statusCode ? {
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

        a(null, {
          Policy: i,
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function h(e, a) {
      ee.call(this, {
        Action: "name/cos:GetBucketTagging",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "tagging"
      }, function (e, n) {
        if (e) {
          if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "NoSuchTagSet" !== e.error.Code) a(e);else {
            var i = {
              Tags: [],
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), a(null, i);
          }
        } else {
          var o = [];

          try {
            o = n.Tagging.TagSet.Tag || [];
          } catch (e) {}

          o = ie.clone(ie.isArray(o) ? o : [o]), a(null, {
            Tags: o,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function g(e, a) {
      var n = e.Tagging || {},
          i = n.TagSet || n.Tags || e.Tags || [];
      i = ie.clone(ie.isArray(i) ? i : [i]);
      var o = ie.json2xml({
        Tagging: {
          TagSet: {
            Tag: i
          }
        }
      }),
          s = e.Headers;
      s["Content-Type"] = "application/xml", s["Content-MD5"] = ie.binaryBase64(ie.md5(o)), ee.call(this, {
        Action: "name/cos:PutBucketTagging",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: o,
        action: "tagging",
        headers: s
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function b(e, a) {
      ee.call(this, {
        Action: "name/cos:DeleteBucketTagging",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "tagging"
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function y(e, a) {
      var n = e.LifecycleConfiguration || {},
          i = n.Rules || [];
      i = ie.clone(i);
      var o = ie.json2xml({
        LifecycleConfiguration: {
          Rule: i
        }
      }),
          s = e.Headers;
      s["Content-Type"] = "application/xml", s["Content-MD5"] = ie.binaryBase64(ie.md5(o)), ee.call(this, {
        Action: "name/cos:PutBucketLifecycle",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: o,
        action: "lifecycle",
        headers: s
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function k(e, a) {
      ee.call(this, {
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
            e.headers && (i.headers = e.headers), a(null, i);
          } else a(e);
        } else {
          var o = [];

          try {
            o = n.LifecycleConfiguration.Rule || [];
          } catch (e) {}

          o = ie.clone(ie.isArray(o) ? o : [o]), a(null, {
            Rules: o,
            statusCode: n.statusCode,
            headers: n.headers
          });
        }
      });
    }

    function w(e, a) {
      ee.call(this, {
        Action: "name/cos:DeleteBucketLifecycle",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "lifecycle"
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function C(e, a) {
      if (!e.VersioningConfiguration) return void a({
        error: "missing param VersioningConfiguration"
      });
      var n = e.VersioningConfiguration || {},
          i = ie.json2xml({
        VersioningConfiguration: n
      }),
          o = e.Headers;
      o["Content-Type"] = "application/xml", o["Content-MD5"] = ie.binaryBase64(ie.md5(i)), ee.call(this, {
        Action: "name/cos:PutBucketVersioning",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: i,
        action: "versioning",
        headers: o
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function S(e, a) {
      ee.call(this, {
        Action: "name/cos:GetBucketVersioning",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "versioning"
      }, function (e, n) {
        e || !n.VersioningConfiguration && (n.VersioningConfiguration = {}), a(e, n);
      });
    }

    function T(e, a) {
      var n = ie.clone(e.ReplicationConfiguration),
          i = ie.json2xml({
        ReplicationConfiguration: n
      });
      i = i.replace(/<(\/?)Rules>/gi, "<$1Rule>"), i = i.replace(/<(\/?)Tags>/gi, "<$1Tag>");
      var o = e.Headers;
      o["Content-Type"] = "application/xml", o["Content-MD5"] = ie.binaryBase64(ie.md5(i)), ee.call(this, {
        Action: "name/cos:PutBucketReplication",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        body: i,
        action: "replication",
        headers: o
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function _(e, a) {
      ee.call(this, {
        Action: "name/cos:GetBucketReplication",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "replication"
      }, function (e, n) {
        if (e) {
          if (404 !== e.statusCode || !e.error || "Not Found" !== e.error && "ReplicationConfigurationnotFoundError" !== e.error.Code) a(e);else {
            var i = {
              ReplicationConfiguration: {
                Rules: []
              },
              statusCode: e.statusCode
            };
            e.headers && (i.headers = e.headers), a(null, i);
          }
        } else e || !n.ReplicationConfiguration && (n.ReplicationConfiguration = {}), n.ReplicationConfiguration.Rule && (n.ReplicationConfiguration.Rules = n.ReplicationConfiguration.Rule, delete n.ReplicationConfiguration.Rule), a(e, n);
      });
    }

    function A(e, a) {
      ee.call(this, {
        Action: "name/cos:DeleteBucketReplication",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        action: "replication"
      }, function (e, n) {
        return e && 204 === e.statusCode ? a(null, {
          statusCode: e.statusCode
        }) : e ? a(e) : void a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function j(e, a) {
      ee.call(this, {
        Action: "name/cos:HeadObject",
        method: "HEAD",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        VersionId: e.VersionId,
        headers: e.Headers
      }, function (n, i) {
        if (n) {
          var o = n.statusCode;
          return e.Headers["If-Modified-Since"] && o && 304 === o ? a(null, {
            NotModified: !0,
            statusCode: o
          }) : a(n);
        }

        i.headers && i.headers.etag && (i.ETag = i.headers && i.headers.etag), a(null, i);
      });
    }

    function R(e, a) {
      var n = {};
      n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n["key-marker"] = e.KeyMarker, n["version-id-marker"] = e.VersionIdMarker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, ee.call(this, {
        Action: "name/cos:GetBucketObjectVersions",
        ResourceKey: n.prefix,
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        qs: n,
        action: "versions"
      }, function (e, n) {
        if (e) return a(e);
        var i = n.ListVersionsResult || {},
            o = i.DeleteMarker || [];
        o = ie.isArray(o) ? o : [o];
        var s = i.Version || [];
        s = ie.isArray(s) ? s : [s];
        var t = ie.clone(i);
        delete t.DeleteMarker, delete t.Version, ie.extend(t, {
          DeleteMarkers: o,
          Versions: s,
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, t);
      });
    }

    function E(e, a) {
      var n = {};
      n["response-content-type"] = e.ResponseContentType, n["response-content-language"] = e.ResponseContentLanguage, n["response-expires"] = e.ResponseExpires, n["response-cache-control"] = e.ResponseCacheControl, n["response-content-disposition"] = e.ResponseContentDisposition, n["response-content-encoding"] = e.ResponseContentEncoding, ee.call(this, {
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
          var o = n.statusCode;
          return e.Headers["If-Modified-Since"] && o && 304 === o ? a(null, {
            NotModified: !0
          }) : a(n);
        }

        var s = {};
        s.Body = i.body, i.headers && i.headers.etag && (s.ETag = i.headers && i.headers.etag), ie.extend(s, {
          statusCode: i.statusCode,
          headers: i.headers
        }), a(null, s);
      });
    }

    function N(e, a) {
      var n = this,
          i = e.ContentLength,
          o = ie.throttleOnProgress.call(n, i, e.onProgress),
          s = e.Headers;
      ie.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function (t) {
        t && (s["Content-MD5"] = ie.binaryBase64(t)), void 0 !== e.ContentLength && (s["Content-Length"] = e.ContentLength), s["Content-Type"] || s["content-type"] || (s["Content-Type"] = "application/octet-stream"), s["Cache-Control"] || s["cache-control"] || (s["Cache-Control"] = ""), ee.call(n, {
          Action: "name/cos:PutObject",
          TaskId: e.TaskId,
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: s,
          body: e.Body,
          onProgress: o
        }, function (s, t) {
          if (s) return o(null, !0), a(s);

          if (o({
            loaded: i,
            total: i
          }, !0), t && t.headers && t.headers.etag) {
            var c = Z({
              ForcePathStyle: n.options.ForcePathStyle,
              protocol: n.options.Protocol,
              domain: n.options.Domain,
              bucket: e.Bucket,
              region: e.Region,
              object: e.Key
            });
            return c = c.substr(c.indexOf("://") + 3), a(null, {
              Location: c,
              ETag: t.headers.etag,
              statusCode: t.statusCode,
              headers: t.headers
            });
          }

          a(null, t);
        });
      });
    }

    function P(e, a) {
      var n = this,
          i = {};
      i["Cache-Control"] = e.CacheControl, i["Content-Disposition"] = e.ContentDisposition, i["Content-Encoding"] = e.ContentEncoding, i["Content-MD5"] = e.ContentMD5, i["Content-Length"] = e.ContentLength, i["Content-Type"] = e.ContentType, i.Expect = e.Expect, i.Expires = e.Expires, i["x-cos-acl"] = e.ACL, i["x-cos-grant-read"] = e.GrantRead, i["x-cos-grant-write"] = e.GrantWrite, i["x-cos-grant-full-control"] = e.GrantFullControl, i["x-cos-storage-class"] = e.StorageClass;
      var o = e.FilePath;

      for (var s in e) {
        (s.indexOf("x-cos-meta-") > -1 || s.indexOf("Vod-Forward-Cos") > -1) && (i[s] = e[s]);
      }

      var t = ie.throttleOnProgress.call(n, i["Content-Length"], e.onProgress);
      ee.call(this, {
        Action: "name/cos:PostObject",
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: i,
        filePath: o,
        onProgress: t
      }, function (i, o) {
        if (t(null, !0), i) return a(i);

        if (o) {
          var s = Z({
            ForcePathStyle: n.options.ForcePathStyle,
            protocol: n.options.Protocol,
            domain: n.options.Domain,
            bucket: e.Bucket,
            region: e.Region,
            object: e.Key,
            isLocation: !0
          });
          return a(null, {
            Location: s,
            statusCode: o.statusCode
          });
        }

        a(null, o);
      });
    }

    function B(e, a) {
      ee.call(this, {
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
          return i && 204 === i ? a(null, {
            statusCode: i
          }) : i && 404 === i ? a(null, {
            BucketNotFound: !0,
            statusCode: i
          }) : a(e);
        }

        a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function I(e, a) {
      ee.call(this, {
        Action: "name/cos:GetObjectACL",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        action: "acl"
      }, function (e, n) {
        if (e) return a(e);
        var i = n.AccessControlPolicy || {},
            o = i.Owner || {},
            s = i.AccessControlList && i.AccessControlList.Grant || [];
        s = ie.isArray(s) ? s : [s];
        var t = W(i);
        n.headers && n.headers["x-cos-acl"] && (t.ACL = n.headers["x-cos-acl"]), t = ie.extend(t, {
          Owner: o,
          Grants: s,
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, t);
      });
    }

    function D(e, a) {
      var n = e.Headers,
          i = "";

      if (e.AccessControlPolicy) {
        var o = ie.clone(e.AccessControlPolicy || {}),
            s = o.Grants || o.Grant;
        s = ie.isArray(s) ? s : [s], delete o.Grant, delete o.Grants, o.AccessControlList = {
          Grant: s
        }, i = ie.json2xml({
          AccessControlPolicy: o
        }), n["Content-Type"] = "application/xml", n["Content-MD5"] = ie.binaryBase64(ie.md5(i));
      }

      ie.each(n, function (e, a) {
        0 === a.indexOf("x-cos-grant-") && (n[a] = Q(n[a]));
      }), ee.call(this, {
        Action: "name/cos:PutObjectACL",
        method: "PUT",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        action: "acl",
        headers: n,
        body: i
      }, function (e, n) {
        if (e) return a(e);
        a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function O(e, a) {
      var n = e.Headers;
      n.Origin = e.Origin, n["Access-Control-Request-Method"] = e.AccessControlRequestMethod, n["Access-Control-Request-Headers"] = e.AccessControlRequestHeaders, ee.call(this, {
        Action: "name/cos:OptionsObject",
        method: "OPTIONS",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: n
      }, function (e, n) {
        if (e) return e.statusCode && 403 === e.statusCode ? a(null, {
          OptionsForbidden: !0,
          statusCode: e.statusCode
        }) : a(e);
        var i = n.headers || {};
        a(null, {
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

    function U(e, a) {
      var n = e.CopySource || "",
          i = n.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
      if (!i) return void a({
        error: "CopySource format error"
      });
      var o = i[1],
          s = i[3],
          t = decodeURIComponent(i[4]);
      ee.call(this, {
        Scope: [{
          action: "name/cos:GetObject",
          bucket: o,
          region: s,
          prefix: t
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
        if (e) return a(e);
        var i = ie.clone(n.CopyObjectResult || {});
        ie.extend(i, {
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, i);
      });
    }

    function z(e, a) {
      var n = e.CopySource || "",
          i = n.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^\/]+\/(.+)$/);
      if (!i) return void a({
        error: "CopySource format error"
      });
      var o = i[1],
          s = i[3],
          t = decodeURIComponent(i[4]);
      ee.call(this, {
        Scope: [{
          action: "name/cos:GetObject",
          bucket: o,
          region: s,
          prefix: t
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
        if (e) return a(e);
        var i = ie.clone(n.CopyPartResult || {});
        ie.extend(i, {
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, i);
      });
    }

    function M(e, a) {
      var n = e.Objects || [],
          i = e.Quiet;
      n = ie.isArray(n) ? n : [n];
      var o = ie.json2xml({
        Delete: {
          Object: n,
          Quiet: i || !1
        }
      }),
          s = e.Headers;
      s["Content-Type"] = "application/xml", s["Content-MD5"] = ie.binaryBase64(ie.md5(o));
      var t = ie.map(n, function (a) {
        return {
          action: "name/cos:DeleteObject",
          bucket: e.Bucket,
          region: e.Region,
          prefix: a.Key
        };
      });
      ee.call(this, {
        Scope: t,
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        body: o,
        action: "delete",
        headers: s
      }, function (e, n) {
        if (e) return a(e);
        var i = n.DeleteResult || {},
            o = i.Deleted || [],
            s = i.Error || [];
        o = ie.isArray(o) ? o : [o], s = ie.isArray(s) ? s : [s];
        var t = ie.clone(i);
        ie.extend(t, {
          Error: s,
          Deleted: o,
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, t);
      });
    }

    function F(e, a) {
      var n = e.Headers;
      if (!e.RestoreRequest) return void a({
        error: "missing param RestoreRequest"
      });
      var i = e.RestoreRequest || {},
          o = ie.json2xml({
        RestoreRequest: i
      });
      n["Content-Type"] = "application/xml", n["Content-MD5"] = ie.binaryBase64(ie.md5(o)), ee.call(this, {
        Action: "name/cos:RestoreObject",
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        VersionId: e.VersionId,
        body: o,
        action: "restore",
        headers: n
      }, function (e, n) {
        a(e, n);
      });
    }

    function L(e, a) {
      var n = e.Headers;
      n["Content-Type"] || n["content-type"] || (n["Content-Type"] = "application/octet-stream"), n["Cache-Control"] || n["cache-control"] || (n["Cache-Control"] = ""), ee.call(this, {
        Action: "name/cos:InitiateMultipartUpload",
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        action: "uploads",
        headers: e.Headers
      }, function (e, n) {
        return e ? a(e) : (n = ie.clone(n || {})) && n.InitiateMultipartUploadResult ? a(null, ie.extend(n.InitiateMultipartUploadResult, {
          statusCode: n.statusCode,
          headers: n.headers
        })) : void a(null, n);
      });
    }

    function q(e, a) {
      var n = this;
      ie.getFileSize("multipartUpload", e, function () {
        ie.getBodyMd5(n.options.UploadCheckContentMd5, e.Body, function (i) {
          i && (e.Headers["Content-MD5"] = ie.binaryBase64(i)), ee.call(n, {
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
            if (e) return a(e);
            n.headers = n.headers || {}, a(null, {
              ETag: n.headers.etag || "",
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        });
      });
    }

    function K(e, a) {
      for (var n = this, i = e.UploadId, o = e.Parts, s = 0, t = o.length; s < t; s++) {
        0 !== o[s].ETag.indexOf('"') && (o[s].ETag = '"' + o[s].ETag + '"');
      }

      var c = ie.json2xml({
        CompleteMultipartUpload: {
          Part: o
        }
      }),
          r = e.Headers;
      r["Content-Type"] = "application/xml", r["Content-MD5"] = ie.binaryBase64(ie.md5(c)), ee.call(this, {
        Action: "name/cos:CompleteMultipartUpload",
        method: "POST",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        qs: {
          uploadId: i
        },
        body: c,
        headers: r
      }, function (i, o) {
        if (i) return a(i);
        var s = Z({
          ForcePathStyle: n.options.ForcePathStyle,
          protocol: n.options.Protocol,
          domain: n.options.Domain,
          bucket: e.Bucket,
          region: e.Region,
          object: e.Key,
          isLocation: !0
        }),
            t = o.CompleteMultipartUploadResult || {},
            c = ie.extend(t, {
          Location: s,
          statusCode: o.statusCode,
          headers: o.headers
        });
        a(null, c);
      });
    }

    function H(e, a) {
      var n = {};
      n.delimiter = e.Delimiter, n["encoding-type"] = e.EncodingType, n.prefix = e.Prefix || "", n["max-uploads"] = e.MaxUploads, n["key-marker"] = e.KeyMarker, n["upload-id-marker"] = e.UploadIdMarker, n = ie.clearKey(n), ee.call(this, {
        Action: "name/cos:ListMultipartUploads",
        ResourceKey: n.prefix,
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        headers: e.Headers,
        qs: n,
        action: "uploads"
      }, function (e, n) {
        if (e) return a(e);

        if (n && n.ListMultipartUploadsResult) {
          var i = n.ListMultipartUploadsResult.Upload || [],
              o = n.ListMultipartUploadsResult.CommonPrefixes || [];
          o = ie.isArray(o) ? o : [o], i = ie.isArray(i) ? i : [i], n.ListMultipartUploadsResult.Upload = i, n.ListMultipartUploadsResult.CommonPrefixes = o;
        }

        var s = ie.clone(n.ListMultipartUploadsResult || {});
        ie.extend(s, {
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, s);
      });
    }

    function G(e, a) {
      var n = {};
      n.uploadId = e.UploadId, n["encoding-type"] = e.EncodingType, n["max-parts"] = e.MaxParts, n["part-number-marker"] = e.PartNumberMarker, ee.call(this, {
        Action: "name/cos:ListParts",
        method: "GET",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        qs: n
      }, function (e, n) {
        if (e) return a(e);
        var i = n.ListPartsResult || {},
            o = i.Part || [];
        o = ie.isArray(o) ? o : [o], i.Part = o;
        var s = ie.clone(i);
        ie.extend(s, {
          statusCode: n.statusCode,
          headers: n.headers
        }), a(null, s);
      });
    }

    function V(e, a) {
      var n = {};
      n.uploadId = e.UploadId, ee.call(this, {
        Action: "name/cos:AbortMultipartUpload",
        method: "DELETE",
        Bucket: e.Bucket,
        Region: e.Region,
        Key: e.Key,
        headers: e.Headers,
        qs: n
      }, function (e, n) {
        if (e) return a(e);
        a(null, {
          statusCode: n.statusCode,
          headers: n.headers
        });
      });
    }

    function X(e) {
      var a = this;
      return ie.getAuth({
        SecretId: e.SecretId || this.options.SecretId || "",
        SecretKey: e.SecretKey || this.options.SecretKey || "",
        Method: e.Method,
        Key: e.Key,
        Query: e.Query,
        Headers: e.Headers,
        Expires: e.Expires,
        SystemClockOffset: a.options.SystemClockOffset
      });
    }

    function $(e, a) {
      var n = this,
          i = Z({
        ForcePathStyle: n.options.ForcePathStyle,
        protocol: e.Protocol || n.options.Protocol,
        domain: n.options.Domain,
        bucket: e.Bucket,
        region: e.Region,
        object: e.Key
      });
      if (void 0 !== e.Sign && !e.Sign) return a(null, {
        Url: i
      }), i;
      var o = J.call(this, {
        Action: "PUT" === (e.Method || "").toUpperCase() ? "name/cos:PutObject" : "name/cos:GetObject",
        Bucket: e.Bucket || "",
        Region: e.Region || "",
        Method: e.Method || "get",
        Key: e.Key,
        Expires: e.Expires
      }, function (e, n) {
        if (a) {
          if (e) return void a(e);
          var o = i;
          o += "?" + (n.Authorization.indexOf("q-signature") > -1 ? n.Authorization : "sign=" + encodeURIComponent(n.Authorization)), n.XCosSecurityToken && (o += "&x-cos-security-token=" + n.XCosSecurityToken), n.ClientIP && (o += "&clientIP=" + n.ClientIP), n.ClientUA && (o += "&clientUA=" + n.ClientUA), n.Token && (o += "&token=" + n.Token), setTimeout(function () {
            a(null, {
              Url: o
            });
          });
        }
      });
      return o ? i + "?" + o.Authorization + (o.XCosSecurityToken ? "&x-cos-security-token=" + o.XCosSecurityToken : "") : i;
    }

    function W(e) {
      var a = {
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
          i = e.AccessControlList.Grant;
      i && (i = ie.isArray(i) ? i : [i]);
      var o = {
        READ: 0,
        WRITE: 0,
        FULL_CONTROL: 0
      };
      return i.length && ie.each(i, function (i) {
        "qcs::cam::anyone:anyone" === i.Grantee.ID || "http://cam.qcloud.com/groups/global/AllUsers" === i.Grantee.URI ? o[i.Permission] = 1 : i.Grantee.ID !== e.Owner.ID && a[n[i.Permission]].push('id="' + i.Grantee.ID + '"');
      }), o.FULL_CONTROL || o.WRITE && o.READ ? a.ACL = "public-read-write" : o.READ ? a.ACL = "public-read" : a.ACL = "private", ie.each(n, function (e) {
        a[e] = Q(a[e].join(","));
      }), a;
    }

    function Q(e) {
      var a,
          n,
          i = e.split(","),
          o = {};

      for (a = 0; a < i.length;) {
        n = i[a].trim(), o[n] ? i.splice(a, 1) : (o[n] = !0, i[a] = n, a++);
      }

      return i.join(",");
    }

    function Z(e) {
      var a = e.bucket,
          n = a.substr(0, a.lastIndexOf("-")),
          i = a.substr(a.lastIndexOf("-") + 1),
          o = e.domain,
          s = e.region,
          t = e.object;
      o || (o = ["cn-south", "cn-south-2", "cn-north", "cn-east", "cn-southwest", "sg"].indexOf(s) > -1 ? "{Region}.myqcloud.com" : "cos.{Region}.myqcloud.com", e.ForcePathStyle || (o = "{Bucket}." + o)), o = o.replace(/\{\{AppId\}\}/gi, i).replace(/\{\{Bucket\}\}/gi, n).replace(/\{\{Region\}\}/gi, s).replace(/\{\{.*?\}\}/gi, ""), o = o.replace(/\{AppId\}/gi, i).replace(/\{BucketName\}/gi, n).replace(/\{Bucket\}/gi, a).replace(/\{Region\}/gi, s).replace(/\{.*?\}/gi, ""), /^[a-zA-Z]+:\/\//.test(o) || (o = "https://" + "vod2.qcloud.com/" + o), "/" === o.slice(-1) && (o = o.slice(0, -1));
      var c = o;
      return e.ForcePathStyle && (c += "/" + a), c += "/", t && (c += ie.camSafeUrlEncode(t).replace(/%2F/g, "/")), e.isLocation && (c = c.replace(/^https?:\/\//, "")), c;
    }

    function J(e, a) {
      var n = ie.clone(e.Headers);
      delete n["Content-Type"], delete n["Cache-Control"], ie.each(n, function (e, a) {
        "" === e && delete n[a];
      });

      var i = function i(e) {
        var n = !1,
            i = e.Authorization;
        if (i) if (i.indexOf(" ") > -1) n = !1;else if (i.indexOf("q-sign-algorithm=") > -1 && i.indexOf("q-ak=") > -1 && i.indexOf("q-sign-time=") > -1 && i.indexOf("q-key-time=") > -1 && i.indexOf("q-url-param-list=") > -1) n = !0;else try {
          i = atob(i), i.indexOf("a=") > -1 && i.indexOf("k=") > -1 && i.indexOf("t=") > -1 && i.indexOf("r=") > -1 && i.indexOf("b=") > -1 && (n = !0);
        } catch (e) {}
        n ? a && a(null, e) : a && a("authorization error");
      },
          o = this,
          s = e.Bucket || "",
          t = e.Region || "",
          c = "name/cos:PostObject" !== e.Action && e.Key ? e.Key : "";

      o.options.ForcePathStyle && s && (c = s + "/" + c);
      var r = "/" + c,
          p = {},
          l = e.Scope;

      if (!l) {
        var u = e.Action || "",
            d = e.ResourceKey || e.Key || "";
        l = e.Scope || [{
          action: u,
          bucket: s,
          region: t,
          prefix: d
        }];
      }

      var m = ie.md5(JSON.stringify(l));
      o._StsCache = o._StsCache || [], function () {
        var e, a;

        for (e = o._StsCache.length - 1; e >= 0; e--) {
          a = o._StsCache[e];
          var n = Math.round(ie.getSkewTime(o.options.SystemClockOffset) / 1e3) + 30;
          if (a.StartTime && n < a.StartTime || n >= a.ExpiredTime) o._StsCache.splice(e, 1);else if (!a.ScopeLimit || a.ScopeLimit && a.ScopeKey === m) {
            p = a;
            break;
          }
        }
      }();

      var x = function x() {
        var a = ie.getAuth({
          SecretId: p.TmpSecretId,
          SecretKey: p.TmpSecretKey,
          Method: e.Method,
          Pathname: r,
          Query: e.Query,
          Headers: n,
          Expires: e.Expires,
          SystemClockOffset: o.options.SystemClockOffset
        }),
            s = {
          Authorization: a,
          XCosSecurityToken: p.XCosSecurityToken || "",
          Token: p.Token || "",
          ClientIP: p.ClientIP || "",
          ClientUA: p.ClientUA || ""
        };
        i(s);
      };

      if (p.ExpiredTime && p.ExpiredTime - ie.getSkewTime(o.options.SystemClockOffset) / 1e3 > 60) x();else if (o.options.getAuthorization) o.options.getAuthorization.call(o, {
        Bucket: s,
        Region: t,
        Method: e.Method,
        Key: c,
        Pathname: r,
        Query: e.Query,
        Headers: n,
        Scope: l
      }, function (e) {
        "string" == typeof e && (e = {
          Authorization: e
        }), e.TmpSecretId && e.TmpSecretKey && e.XCosSecurityToken && e.ExpiredTime ? (p = e || {}, p.Scope = l, p.ScopeKey = m, o._StsCache.push(p), x()) : i(e);
      });else {
        if (!o.options.getSTS) return function () {
          var a = ie.getAuth({
            SecretId: e.SecretId || o.options.SecretId,
            SecretKey: e.SecretKey || o.options.SecretKey,
            Method: e.Method,
            Pathname: r,
            Query: e.Query,
            Headers: n,
            Expires: e.Expires,
            SystemClockOffset: o.options.SystemClockOffset
          }),
              s = {
            Authorization: a,
            XCosSecurityToken: o.options.XCosSecurityToken
          };
          return i(s), s;
        }();
        o.options.getSTS.call(o, {
          Bucket: s,
          Region: t
        }, function (e) {
          p = e || {}, p.Scope = l, p.ScopeKey = m, p.TmpSecretId = p.SecretId, p.TmpSecretKey = p.SecretKey, o._StsCache.push(p), x();
        });
      }
      return "";
    }

    function Y(e) {
      var a = !1,
          n = !1,
          i = e.headers && (e.headers.date || e.headers.Date) || "";

      try {
        var o = e.error.Code,
            s = e.error.Message;
        ("RequestTimeTooSkewed" === o || "AccessDenied" === o && "Request has expired" === s) && (n = !0);
      } catch (e) {}

      if (e) if (n && i) {
        var t = Date.parse(i);
        this.options.CorrectClockSkew && Math.abs(ie.getSkewTime(this.options.SystemClockOffset) - t) >= 3e4 && (console.error("error: Local time is too skewed."), this.options.SystemClockOffset = t - Date.now(), a = !0);
      } else 5 === Math.round(e.statusCode / 100) && (a = !0);
      return a;
    }

    function ee(e, a) {
      var n = this;
      !e.headers && (e.headers = {}), !e.qs && (e.qs = {}), e.VersionId && (e.qs.versionId = e.VersionId), e.qs = ie.clearKey(e.qs), e.headers && (e.headers = ie.clearKey(e.headers)), e.qs && (e.qs = ie.clearKey(e.qs));
      var i = ie.clone(e.qs);
      e.action && (i[e.action] = "");

      var o = function o(s) {
        var t = n.options.SystemClockOffset;
        J.call(n, {
          Bucket: e.Bucket || "",
          Region: e.Region || "",
          Method: e.method,
          Key: e.Key,
          Query: i,
          Headers: e.headers,
          Action: e.Action,
          ResourceKey: e.ResourceKey,
          Scope: e.Scope
        }, function (i, c) {
          e.AuthData = c, ae.call(n, e, function (i, c) {
            i && s < 2 && (t !== n.options.SystemClockOffset || Y.call(n, i)) ? (e.headers && (delete e.headers.Authorization, delete e.headers.token, delete e.headers.clientIP, delete e.headers.clientUA, delete e.headers["x-cos-security-token"]), o(s + 1)) : a(i, c);
          });
        });
      };

      o(0);
    }

    function ae(e, a) {
      var n = this,
          i = e.TaskId;

      if (!i || n._isRunningTask(i)) {
        var o = e.Bucket,
            s = e.Region,
            t = e.Key,
            c = e.method || "GET",
            r = e.url,
            p = e.body,
            l = e.json,
            u = e.rawBody;
        r = r || Z({
          ForcePathStyle: n.options.ForcePathStyle,
          protocol: n.options.Protocol,
          domain: n.options.Domain,
          bucket: o,
          region: s,
          object: t
        }), e.action && (r = r + "?" + e.action);
        var d = {
          method: c,
          url: r,
          headers: e.headers,
          qs: e.qs,
          filePath: e.filePath,
          body: p,
          json: l
        };
        d.headers.Authorization = e.AuthData.Authorization, e.AuthData.Token && (d.headers.token = e.AuthData.Token), e.AuthData.ClientIP && (d.headers.clientIP = e.AuthData.ClientIP), e.AuthData.ClientUA && (d.headers.clientUA = e.AuthData.ClientUA), e.AuthData.XCosSecurityToken && (d.headers["x-cos-security-token"] = e.AuthData.XCosSecurityToken), d.headers && (d.headers = ie.clearKey(d.headers)), d = ie.clearKey(d), e.onProgress && "function" == typeof e.onProgress && (d.onProgress = function (a) {
          if (!i || n._isRunningTask(i)) {
            var o = a ? a.loaded : 0;
            e.onProgress({
              loaded: o,
              total: a.total
            });
          }
        }), n.options.ForcePathStyle && (d.pathStyle = n.options.ForcePathStyle);

        var m = ne(d, function (e, o, s) {
          var t,
              c = function c(e, s) {
            if (i && n.off("inner-kill-task", x), !t) {
              t = !0;
              var c = {};
              o && o.statusCode && (c.statusCode = o.statusCode), o && o.headers && (c.headers = {}, ie.each(o.headers, function (e, a) {
                c.headers[a.toLowerCase()] = e;
              })), e ? (e = ie.extend(e || {}, c), a(e, null)) : (s = ie.extend(s || {}, c), a(null, s));
            }
          };

          if (e) return void c({
            error: e
          });
          var r;

          try {
            r = ie.xml2json(s) || {};
          } catch (e) {
            r = s || {};
          }

          var p = o.statusCode;
          return 2 !== Math.floor(p / 100) ? void c({
            error: r.Error || r
          }) : (u && (r = {}, r.body = s), r.Error ? void c({
            error: r.Error
          }) : void c(null, r));
        }),
            x = function x(e) {
          e.TaskId === i && (m && m.abort && m.abort(), n.off("inner-kill-task", x));
        };

        i && n.on("inner-kill-task", x);
      }
    }

    var ne = n(10),
        ie = n(0),
        oe = (n(14), {
      getService: i,
      putBucket: t,
      getBucket: s,
      headBucket: o,
      deleteBucket: c,
      getBucketAcl: r,
      putBucketAcl: p,
      getBucketCors: l,
      putBucketCors: u,
      deleteBucketCors: d,
      getBucketLocation: f,
      putBucketTagging: g,
      getBucketTagging: h,
      deleteBucketTagging: b,
      getBucketPolicy: v,
      putBucketPolicy: m,
      deleteBucketPolicy: x,
      getBucketLifecycle: k,
      putBucketLifecycle: y,
      deleteBucketLifecycle: w,
      putBucketVersioning: C,
      getBucketVersioning: S,
      putBucketReplication: T,
      getBucketReplication: _,
      deleteBucketReplication: A,
      getObject: E,
      headObject: j,
      listObjectVersions: R,
      putObject: N,
      postObject: P,
      deleteObject: B,
      getObjectAcl: I,
      putObjectAcl: D,
      optionsObject: O,
      putObjectCopy: U,
      deleteMultipleObject: M,
      restoreObject: F,
      uploadPartCopy: z,
      multipartInit: L,
      multipartUpload: q,
      multipartComplete: K,
      multipartList: H,
      multipartListPart: G,
      multipartAbort: V,
      getObjectUrl: $,
      getAuth: X
    });

    e.exports.init = function (e, a) {
      a.transferToTaskMethod(oe, "postObject"), ie.each(oe, function (a, n) {
        e.prototype[n] = ie.apiWrapper(n, a);
      });
    };
  }, function (e, a, n) {
    var i = n(3),
        o = n(0),
        s = {},
        t = function t(e, a) {
      s[a] = e[a], e[a] = function (e, n) {
        e.SkipTask ? s[a].call(this, e, n) : this._addTask(a, e, n);
      };
    },
        c = function c(e) {
      var a = [],
          n = {},
          t = 0,
          c = 0,
          r = function r(e) {
        var a = {
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
        return e.FilePath && (a.FilePath = e.FilePath), a;
      },
          p = function () {
        var n,
            i = function i() {
          n = 0, e.emit("task-list-update", {
            list: o.map(a, r)
          }), e.emit("list-update", {
            list: o.map(a, r)
          });
        };

        return function () {
          n || (n = setTimeout(i));
        };
      }(),
          l = function l() {
        if (!(a.length <= e.options.UploadQueueSize)) {
          for (var i = 0; i < c && i < a.length && a.length > e.options.UploadQueueSize;) {
            var o = "waiting" === a[i].state || "checking" === a[i].state || "uploading" === a[i].state;
            a[i] && o ? i++ : (n[a[i].id] && delete n[a[i].id], a.splice(i, 1), c--);
          }

          p();
        }
      },
          u = function u() {
        if (!(t >= e.options.FileParallelLimit)) {
          for (; a[c] && "waiting" !== a[c].state;) {
            c++;
          }

          if (!(c >= a.length)) {
            var n = a[c];
            c++, t++, n.state = "checking", n.params.onTaskStart && n.params.onTaskStart(r(n)), !n.params.UploadData && (n.params.UploadData = {});
            var i = o.formatParams(n.api, n.params);
            s[n.api].call(e, i, function (a, i) {
              e._isRunningTask(n.id) && ("checking" !== n.state && "uploading" !== n.state || (n.state = a ? "error" : "success", a && (n.error = a), t--, p(), u(), n.callback && n.callback(a, i), "success" === n.state && (n.params && (delete n.params.UploadData, delete n.params.Body, delete n.params), delete n.callback)), l());
            }), p(), setTimeout(u);
          }
        }
      },
          d = function d(a, o) {
        var s = n[a];

        if (s) {
          var c = s && "waiting" === s.state,
              r = s && ("checking" === s.state || "uploading" === s.state);

          if ("canceled" === o && "canceled" !== s.state || "paused" === o && c || "paused" === o && r) {
            if ("paused" === o && s.params.Body && "function" == typeof s.params.Body.pipe) return void console.error("stream not support pause");
            s.state = o, e.emit("inner-kill-task", {
              TaskId: a,
              toState: o
            });

            try {
              var d = s && s.params && s.params.UploadData.UploadId;
            } catch (e) {}

            "canceled" === o && d && i.removeUsing(d), p(), r && (t--, u()), "canceled" === o && (s.params && (delete s.params.UploadData, delete s.params.Body, delete s.params), delete s.callback);
          }

          l();
        }
      };

      e._addTasks = function (a) {
        o.each(a, function (a) {
          e._addTask(a.api, a.params, a.callback, !0);
        }), p();
      };

      e._addTask = function (i, s, t, c) {
        s = o.formatParams(i, s);
        var r = o.uuid();
        s.TaskId = r, s.onTaskReady && s.onTaskReady(r);
        var d = {
          params: s,
          callback: t,
          api: i,
          index: a.length,
          id: r,
          Bucket: s.Bucket,
          Region: s.Region,
          Key: s.Key,
          FilePath: s.FilePath || "",
          state: "waiting",
          loaded: 0,
          size: 0,
          speed: 0,
          percent: 0,
          hashPercent: 0,
          error: null
        },
            m = s.onHashProgress;

        s.onHashProgress = function (a) {
          e._isRunningTask(d.id) && (d.hashPercent = a.percent, m && m(a), p());
        };

        var x = s.onProgress;
        return s.onProgress = function (a) {
          e._isRunningTask(d.id) && ("checking" === d.state && (d.state = "uploading"), d.loaded = a.loaded, d.size = a.total, d.speed = a.speed, d.percent = a.percent, x && x(a), p());
        }, o.getFileSize(i, s, function (e, i) {
          if (e) return void t(e);
          n[r] = d, a.push(d), d.size = i, !c && p(), u(), l();
        }), r;
      }, e._isRunningTask = function (e) {
        var a = n[e];
        return !(!a || "checking" !== a.state && "uploading" !== a.state);
      }, e.getTaskList = function () {
        return o.map(a, r);
      }, e.cancelTask = function (e) {
        d(e, "canceled");
      }, e.pauseTask = function (e) {
        d(e, "paused");
      }, e.restartTask = function (e) {
        var a = n[e];
        !a || "paused" !== a.state && "error" !== a.state || (a.state = "waiting", p(), c = Math.min(c, a.index), u());
      }, e.isUploadRunning = function () {
        return t || c < a.length;
      };
    };

    e.exports.transferToTaskMethod = t, e.exports.init = c;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

var UploaderEvent = {
  video_progress: "video_progress",
  media_progress: "media_progress"
};
exports.UploaderEvent = UploaderEvent;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Uploader = __webpack_require__(0);

var pkg = __webpack_require__(7);

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
        console.log('onPrepare', e);
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
      console.log('上报: ', reportData); // wx.request({
      //   method: "POST",
      //   url: this.reportUrl,
      //   data: reportData,
      //   dataType: "json",
      //   fail: (err) => {
      //     console.log(err);
      //   },
      // })
    }
  }]);

  return _temp;
}(), _temp);

/***/ }),
/* 7 */
/***/ (function(module) {

module.exports = {"name":"vod-wx-sdk-v2","version":"1.1.0","description":"Tencent cloud vod sdk for wechat mini program","main":"dist/vod-wx-sdk-v2.js","miniprogram":"dist","scripts":{"build":"webpack --config webpack.config.js","dev":"webpack --config webpack.config.js --watch"},"repository":{"type":"git","url":"git+https://github.com/tencentyun/vod-wx-sdk-v2.git"},"keywords":["vod","tencentcloud","qcloud","wechat"],"author":"alsotang <alsotang@gmail.com>","contributors":["_windmill <l20122005@live.com>"],"license":"MIT","bugs":{"url":"https://github.com/tencentyun/vod-wx-sdk-v2/issues"},"homepage":"https://github.com/tencentyun/vod-wx-sdk-v2#readme","devDependencies":{"@babel/core":"^7.10.2","@babel/plugin-proposal-class-properties":"^7.10.1","@babel/preset-env":"^7.10.2","babel-loader":"^8.1.0","eslint":"^5.3.0","eslint-config-airbnb-base":"^13.1.0","eslint-config-prettier":"^5.0.0","eslint-plugin-import":"^2.17.3","eslint-plugin-prettier":"^3.1.0","webpack":"^4.34.0","webpack-cli":"^3.3.4"}};

/***/ })
/******/ ])));