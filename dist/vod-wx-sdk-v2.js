/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 792:
/***/ ((module) => {

!function (e, t) {
   true ? module.exports = t() : 0;
}(window, function () {
  return function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var o = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
      return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/Users/chrisftian/Documents/projects/cos-sdk/cos-wx-sdk-v5/demo/lib", n(n.s = 7);
  }([function (e, t, n) {
    "use strict";

    function i(e, t) {
      var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
        }(e)) || t && e && "number" == typeof e.length) {
          n && (e = n);
          var i = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return i >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: a
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var r,
        s = !0,
        c = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return s = e.done, e;
        },
        e: function (e) {
          c = !0, r = e;
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (c) throw r;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function a() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a = function () {
        return t;
      };
      var e,
        t = {},
        n = Object.prototype,
        i = n.hasOwnProperty,
        o = Object.defineProperty || function (e, t, n) {
          e[t] = n.value;
        },
        r = "function" == typeof Symbol ? Symbol : {},
        c = r.iterator || "@@iterator",
        l = r.asyncIterator || "@@asyncIterator",
        p = r.toStringTag || "@@toStringTag";
      function u(e, t, n) {
        return Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), e[t];
      }
      try {
        u({}, "");
      } catch (e) {
        u = function (e, t, n) {
          return e[t] = n;
        };
      }
      function d(e, t, n, i) {
        var a = t && t.prototype instanceof x ? t : x,
          r = Object.create(a.prototype),
          s = new j(i || []);
        return o(r, "_invoke", {
          value: P(e, n, s)
        }), r;
      }
      function f(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }
      t.wrap = d;
      var m = "suspendedStart",
        h = "suspendedYield",
        g = "executing",
        v = "completed",
        y = {};
      function x() {}
      function k() {}
      function b() {}
      var C = {};
      u(C, c, function () {
        return this;
      });
      var S = Object.getPrototypeOf,
        w = S && S(S(I([])));
      w && w !== n && i.call(w, c) && (C = w);
      var T = b.prototype = x.prototype = Object.create(C);
      function R(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function B(e, t) {
        function n(o, a, r, c) {
          var l = f(e[o], e, a);
          if ("throw" !== l.type) {
            var p = l.arg,
              u = p.value;
            return u && "object" == s(u) && i.call(u, "__await") ? t.resolve(u.__await).then(function (e) {
              n("next", e, r, c);
            }, function (e) {
              n("throw", e, r, c);
            }) : t.resolve(u).then(function (e) {
              p.value = e, r(p);
            }, function (e) {
              return n("throw", e, r, c);
            });
          }
          c(l.arg);
        }
        var a;
        o(this, "_invoke", {
          value: function (e, i) {
            function o() {
              return new t(function (t, o) {
                n(e, i, t, o);
              });
            }
            return a = a ? a.then(o, o) : o();
          }
        });
      }
      function P(t, n, i) {
        var o = m;
        return function (a, r) {
          if (o === g) throw Error("Generator is already running");
          if (o === v) {
            if ("throw" === a) throw r;
            return {
              value: e,
              done: !0
            };
          }
          for (i.method = a, i.arg = r;;) {
            var s = i.delegate;
            if (s) {
              var c = A(s, i);
              if (c) {
                if (c === y) continue;
                return c;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;else if ("throw" === i.method) {
              if (o === m) throw o = v, i.arg;
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            o = g;
            var l = f(t, n, i);
            if ("normal" === l.type) {
              if (o = i.done ? v : h, l.arg === y) continue;
              return {
                value: l.arg,
                done: i.done
              };
            }
            "throw" === l.type && (o = v, i.method = "throw", i.arg = l.arg);
          }
        };
      }
      function A(t, n) {
        var i = n.method,
          o = t.iterator[i];
        if (o === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", n.arg = e, A(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
        var a = f(o, t.iterator, n.arg);
        if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
        var r = a.arg;
        return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y);
      }
      function E(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }
      function O(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }
      function j(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(E, this), this.reset(!0);
      }
      function I(t) {
        if (t || "" === t) {
          var n = t[c];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var o = -1,
              a = function n() {
                for (; ++o < t.length;) if (i.call(t, o)) return n.value = t[o], n.done = !1, n;
                return n.value = e, n.done = !0, n;
              };
            return a.next = a;
          }
        }
        throw new TypeError(s(t) + " is not iterable");
      }
      return k.prototype = b, o(T, "constructor", {
        value: b,
        configurable: !0
      }), o(b, "constructor", {
        value: k,
        configurable: !0
      }), k.displayName = u(b, p, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === k || "GeneratorFunction" === (t.displayName || t.name));
      }, t.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, u(e, p, "GeneratorFunction")), e.prototype = Object.create(T), e;
      }, t.awrap = function (e) {
        return {
          __await: e
        };
      }, R(B.prototype), u(B.prototype, l, function () {
        return this;
      }), t.AsyncIterator = B, t.async = function (e, n, i, o, a) {
        void 0 === a && (a = Promise);
        var r = new B(d(e, n, i, o), a);
        return t.isGeneratorFunction(n) ? r : r.next().then(function (e) {
          return e.done ? e.value : r.next();
        });
      }, R(T), u(T, p, "Generator"), u(T, c, function () {
        return this;
      }), u(T, "toString", function () {
        return "[object Generator]";
      }), t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var i in t) n.push(i);
        return n.reverse(), function e() {
          for (; n.length;) {
            var i = n.pop();
            if (i in t) return e.value = i, e.done = !1, e;
          }
          return e.done = !0, e;
        };
      }, t.values = I, j.prototype = {
        constructor: j,
        reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t) for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function o(i, o) {
            return s.type = "throw", s.arg = t, n.next = i, o && (n.method = "next", n.arg = e), !!o;
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var r = this.tryEntries[a],
              s = r.completion;
            if ("root" === r.tryLoc) return o("end");
            if (r.tryLoc <= this.prev) {
              var c = i.call(r, "catchLoc"),
                l = i.call(r, "finallyLoc");
              if (c && l) {
                if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                if (this.prev < r.finallyLoc) return o(r.finallyLoc);
              } else if (c) {
                if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
              } else {
                if (!l) throw Error("try statement without catch or finally");
                if (this.prev < r.finallyLoc) return o(r.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var a = o;
              break;
            }
          }
          a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
          var r = a ? a.completion : {};
          return r.type = e, r.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(r);
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y;
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), y;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var i = n.completion;
              if ("throw" === i.type) {
                var o = i.arg;
                O(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (t, n, i) {
          return this.delegate = {
            iterator: I(t),
            resultName: n,
            nextLoc: i
          }, "next" === this.method && (this.arg = e), y;
        }
      }, t;
    }
    function r(e, t, n, i, o, a, r) {
      try {
        var s = e[a](r),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, o);
    }
    function s(e) {
      return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, s(e);
    }
    var c = n(9),
      l = n(12),
      p = n(13),
      u = p.btoa,
      d = wx.getFileSystemManager(),
      f = n(2),
      m = n(14),
      h = m.XMLParser,
      g = m.XMLBuilder,
      v = new h({
        ignoreDeclaration: !0,
        ignoreAttributes: !0,
        parseTagValue: !1
      }),
      y = new g();
    function x(e) {
      return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
    }
    function k(e, t) {
      var n = [];
      for (var i in e) e.hasOwnProperty(i) && n.push(t ? x(i).toLowerCase() : i);
      return n.sort(function (e, t) {
        return (e = e.toLowerCase()) === (t = t.toLowerCase()) ? 0 : e > t ? 1 : -1;
      });
    }
    var b = ["cache-control", "content-disposition", "content-encoding", "content-length", "content-md5", "expect", "expires", "host", "if-match", "if-modified-since", "if-none-match", "if-unmodified-since", "origin", "range", "transfer-encoding", "pic-operations"],
      C = function () {},
      S = function (e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && null !== e[n] && (t[n] = e[n]);
        return t;
      };
    function w(e) {
      return P(e, function (e) {
        return "object" === s(e) && null !== e ? w(e) : e;
      });
    }
    function T(e, t) {
      return B(t, function (n, i) {
        e[i] = t[i];
      }), e;
    }
    function R(e) {
      return e instanceof Array;
    }
    function B(e, t) {
      for (var n in e) e.hasOwnProperty(n) && t(e[n], n);
    }
    function P(e, t) {
      var n = R(e) ? [] : {};
      for (var i in e) e.hasOwnProperty(i) && (n[i] = t(e[i], i));
      return n;
    }
    var A = function (e, t) {
        if (t = T({}, t), "getAuth" !== e && "getV4Auth" !== e && "getObjectUrl" !== e) {
          var n = t.Headers || {};
          if (t && "object" === s(t)) {
            !function () {
              for (var e in t) t.hasOwnProperty(e) && e.indexOf("x-cos-") > -1 && (n[e] = t[e]);
            }();
            N.each({
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
              "x-cos-traffic-limit": "TrafficLimit",
              "x-cos-mime-limit": "MimeLimit",
              "x-cos-forbid-overwrite": "ForbidOverwrite",
              "x-cos-server-side-encryption-customer-algorithm": "SSECustomerAlgorithm",
              "x-cos-server-side-encryption-customer-key": "SSECustomerKey",
              "x-cos-server-side-encryption-customer-key-MD5": "SSECustomerKeyMD5",
              "x-cos-server-side-encryption": "ServerSideEncryption",
              "x-cos-server-side-encryption-cos-kms-key-id": "SSEKMSKeyId",
              "x-cos-server-side-encryption-context": "SSEContext",
              "Pic-Operations": "PicOperations"
            }, function (e, i) {
              void 0 !== t[e] && (n[i] = t[e]);
            }), t.Headers = S(n);
          }
        }
        return t;
      },
      E = function (e) {
        return new Promise(function (t, n) {
          d.readFile({
            filePath: e,
            success: function (e) {
              t(e.data);
            },
            fail: function (e) {
              n((null == e ? void 0 : e.errMsg) || "");
            }
          });
        });
      },
      O = function () {
        var e,
          t = (e = a().mark(function e(t, n, i) {
            return a().wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if ("postObject" !== t) {
                    e.next = 4;
                    break;
                  }
                  i(), e.next = 21;
                  break;
                case 4:
                  if ("putObject" !== t) {
                    e.next = 20;
                    break;
                  }
                  if (void 0 !== n.Body || !n.FilePath) {
                    e.next = 17;
                    break;
                  }
                  return e.prev = 6, e.next = 9, E(n.FilePath);
                case 9:
                  n.Body = e.sent, e.next = 17;
                  break;
                case 12:
                  return e.prev = 12, e.t0 = e.catch(6), n.Body = void 0, i({
                    error: "readFile error, ".concat(e.t0)
                  }), e.abrupt("return");
                case 17:
                  void 0 !== n.Body ? (n.ContentLength = n.Body.byteLength, i(null, n.ContentLength)) : i({
                    error: "missing param Body"
                  }), e.next = 21;
                  break;
                case 20:
                  n.FilePath ? d.stat({
                    path: n.FilePath,
                    success: function (e) {
                      var t = e.stats;
                      n.FileStat = t, n.FileStat.FilePath = n.FilePath;
                      var o = t.isDirectory() ? 0 : t.size;
                      n.ContentLength = o = o || 0, i(null, o);
                    },
                    fail: function (e) {
                      i(e);
                    }
                  }) : i({
                    error: "missing param FilePath"
                  });
                case 21:
                case "end":
                  return e.stop();
              }
            }, e, null, [[6, 12]]);
          }), function () {
            var t = this,
              n = arguments;
            return new Promise(function (i, o) {
              var a = e.apply(t, n);
              function s(e) {
                r(a, i, o, s, c, "next", e);
              }
              function c(e) {
                r(a, i, o, s, c, "throw", e);
              }
              s(void 0);
            });
          });
        return function (e, n, i) {
          return t.apply(this, arguments);
        };
      }(),
      j = function (e) {
        return Date.now() + (e || 0);
      },
      I = function (e, t) {
        e = e.split("."), t = t.split(".");
        for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
        for (; t.length < n;) t.push("0");
        for (var i = 0; i < n; i++) {
          var o = parseInt(e[i]),
            a = parseInt(t[i]);
          if (o > a) return 1;
          if (o < a) return -1;
        }
        return 0;
      },
      _ = function () {
        var e = wx.getSystemInfoSync(),
          t = I(e.SDKVersion, "2.10.0") >= 0;
        !t && e.platform;
        return function () {
          return !1, t;
        };
      }(),
      N = {
        noop: C,
        formatParams: A,
        apiWrapper: function (e, t) {
          return function (n, i) {
            var o,
              a = this;
            if ("function" == typeof n && (i = n, n = {}), n = A(e, n), a.options.EnableReporter) if ("sliceUploadFile" === n.calledBySdk || "sliceCopyFile" === n.calledBySdk) o = n.tracker && n.tracker.generateSubTracker({
              apiName: e
            });else if (["uploadFile", "uploadFiles"].includes(e)) o = null;else {
              var r = 0;
              n.Body && (r = "string" == typeof n.Body ? n.Body.length : n.Body.size || n.Body.byteLength || 0);
              var s = a.options.UseAccelerate || "string" == typeof a.options.Domain && a.options.Domain.includes("accelerate.");
              o = new f({
                Beacon: a.options.BeaconReporter,
                clsReporter: a.options.ClsReporter,
                bucket: n.Bucket,
                region: n.Region,
                apiName: e,
                realApi: e,
                accelerate: s,
                fileKey: n.Key,
                fileSize: r,
                deepTracker: a.options.DeepTracker,
                customId: a.options.CustomId,
                delay: a.options.TrackerDelay
              });
            }
            n.tracker = o;
            var c = function (e) {
                return e && e.headers && (e.headers["x-cos-request-id"] && (e.RequestId = e.headers["x-cos-request-id"]), e.headers["x-ci-request-id"] && (e.RequestId = e.headers["x-ci-request-id"]), e.headers["x-cos-version-id"] && (e.VersionId = e.headers["x-cos-version-id"]), e.headers["x-cos-delete-marker"] && (e.DeleteMarker = e.headers["x-cos-delete-marker"])), e;
              },
              l = function (e, t) {
                o && o.report(e, t), i && i(c(e), c(t));
              },
              p = function () {
                if ("getService" !== e && "abortUploadTask" !== e) {
                  var t = function (e, t) {
                    var n = t.Bucket,
                      i = t.Region,
                      o = t.Key;
                    if (e.indexOf("Bucket") > -1 || "deleteMultipleObject" === e || "multipartList" === e || "listObjectVersions" === e) {
                      if (!n) return "Bucket";
                      if (!i) return "Region";
                    } else if (e.indexOf("Object") > -1 || e.indexOf("multipart") > -1 || "sliceUploadFile" === e || "abortUploadTask" === e || "uploadFile" === e) {
                      if (!n) return "Bucket";
                      if (!i) return "Region";
                      if (!o) return "Key";
                    }
                    return !1;
                  }(e, n);
                  if (t) return "missing param " + t;
                  if (n.Region) {
                    if (n.Region.indexOf("cos.") > -1) return 'param Region should not be start with "cos."';
                    if (!/^([a-z\d-]+)$/.test(n.Region)) return "Region format error.";
                    !a.options.CompatibilityMode && -1 === n.Region.indexOf("-") && "yfb" !== n.Region && "default" !== n.Region && n.Region;
                  }
                  if (n.Bucket) {
                    if (!/^([a-z\d-]+)-(\d+)$/.test(n.Bucket)) if (n.AppId) n.Bucket = n.Bucket + "-" + n.AppId;else {
                      if (!a.options.AppId) return 'Bucket should format as "test-1250000000".';
                      n.Bucket = n.Bucket + "-" + a.options.AppId;
                    }
                    n.AppId && delete n.AppId;
                  }
                  n.Key && "/" === n.Key.substr(0, 1) && (n.Key = n.Key.substr(1));
                }
              }(),
              u = ["getAuth", "getObjectUrl"].includes(e);
            if (!u && !i) return new Promise(function (e, o) {
              if (i = function (t, n) {
                t ? o(t) : e(n);
              }, p) return l({
                error: p
              });
              t.call(a, n, l);
            });
            if (p) return l({
              error: p
            });
            var d = t.call(a, n, l);
            return u ? d : void 0;
          };
        },
        xml2json: function (e) {
          return v.parse(e);
        },
        json2xml: function (e) {
          return y.build(e);
        },
        md5: c,
        clearKey: S,
        fileSlice: function (e, t, n, i) {
          e ? d.readFile({
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
        getBodyMd5: function (e, t, n) {
          n = n || C, e && t && t instanceof ArrayBuffer ? N.getFileMd5(t, function (e, t) {
            n(t);
          }) : n();
        },
        getFileMd5: function (e, t) {
          var n = c(e);
          return t && t(n), n;
        },
        binaryBase64: function (e) {
          var t,
            n,
            i,
            o = "";
          for (t = 0, n = e.length / 2; t < n; t++) i = parseInt(e[2 * t] + e[2 * t + 1], 16), o += String.fromCharCode(i);
          return u(o);
        },
        extend: T,
        isArray: R,
        isInArray: function (e, t) {
          for (var n = !1, i = 0; i < e.length; i++) if (t === e[i]) {
            n = !0;
            break;
          }
          return n;
        },
        makeArray: function (e) {
          return R(e) ? e : [e];
        },
        each: B,
        map: P,
        filter: function (e, t) {
          var n = R(e),
            i = n ? [] : {};
          for (var o in e) e.hasOwnProperty(o) && t(e[o], o) && (n ? i.push(e[o]) : i[o] = e[o]);
          return i;
        },
        clone: w,
        attr: function (e, t, n) {
          return e && t in e ? e[t] : n;
        },
        uuid: function () {
          var e = function () {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
          };
          return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
        },
        camSafeUrlEncode: x,
        throttleOnProgress: function (e, t) {
          var n,
            i,
            o = this,
            a = 0,
            r = 0,
            s = Date.now();
          function c() {
            if (i = 0, t && "function" == typeof t) {
              n = Date.now();
              var o,
                c = Math.max(0, Math.round((r - a) / ((n - s) / 1e3) * 100) / 100) || 0;
              o = 0 === r && 0 === e ? 1 : Math.floor(r / e * 100) / 100 || 0, s = n, a = r;
              try {
                t({
                  loaded: r,
                  total: e,
                  speed: c,
                  percent: o
                });
              } catch (e) {}
            }
          }
          return function (t, n) {
            if (t && (r = t.loaded, e = t.total), n) clearTimeout(i), c();else {
              if (i) return;
              i = setTimeout(c, o.options.ProgressInterval);
            }
          };
        },
        getFileSize: O,
        getFileSizeByPath: function (e) {
          return new Promise(function (t, n) {
            d.stat({
              path: e,
              success: function (e) {
                var n = e.stats,
                  i = n.isDirectory() ? 0 : n.size;
                t(i);
              },
              fail: function (e) {
                n((null == e ? void 0 : e.errMsg) || "");
              }
            });
          });
        },
        getSkewTime: j,
        obj2str: function (e, t) {
          var n,
            i,
            o,
            a = [],
            r = k(e);
          for (n = 0; n < r.length; n++) o = void 0 === e[i = r[n]] || null === e[i] ? "" : "" + e[i], i = t ? x(i).toLowerCase() : x(i), o = x(o) || "", a.push(i + "=" + o);
          return a.join("&");
        },
        getAuth: function (e) {
          var t,
            n = (e = e || {}).SecretId,
            i = e.SecretKey,
            o = e.KeyTime,
            a = (e.method || e.Method || "get").toLowerCase(),
            r = w(e.Query || e.params || {}),
            s = function (e) {
              var t = {};
              for (var n in e) {
                var i = n.toLowerCase();
                (i.indexOf("x-cos-") > -1 || b.indexOf(i) > -1) && (t[n] = e[n]);
              }
              return t;
            }(w(e.Headers || e.headers || {})),
            c = e.Key || "";
          e.UseRawKey ? t = e.Pathname || e.pathname || "/" + c : 0 !== (t = e.Pathname || e.pathname || c).indexOf("/") && (t = "/" + t);
          var p = !1 !== e.ForceSignHost;
          if (!s.Host && !s.host && e.Bucket && e.Region && p && (s.Host = e.Bucket + ".cos." + e.Region + ".myqcloud.com"), n && i) {
            var u = Math.round(j(e.SystemClockOffset) / 1e3) - 1,
              d = u,
              f = e.Expires || e.expires;
            d += void 0 === f ? 900 : 1 * f || 0;
            var m = n,
              h = o || u + ";" + d,
              g = o || u + ";" + d,
              v = k(s, !0).join(";").toLowerCase(),
              y = k(r, !0).join(";").toLowerCase(),
              x = l.HmacSHA1(g, i).toString(),
              C = [a, t, N.obj2str(r, !0), N.obj2str(s, !0), ""].join("\n"),
              S = ["sha1", h, l.SHA1(C).toString(), ""].join("\n");
            return ["q-sign-algorithm=sha1", "q-ak=" + m, "q-sign-time=" + h, "q-key-time=" + g, "q-header-list=" + v, "q-url-param-list=" + y, "q-signature=" + l.HmacSHA1(S, x).toString()].join("&");
          }
        },
        compareVersion: I,
        canFileSlice: _,
        isCIHost: function (e) {
          return /^https?:\/\/([^/]+\.)?ci\.[^/]+/.test(e);
        },
        error: function (e, t) {
          var n = e;
          return e.message = e.message || null, "string" == typeof t ? (e.error = t, e.message = t) : "object" === s(t) && null !== t && (T(e, t), (t.code || t.name) && (e.code = t.code || t.name), t.message && (e.message = t.message), t.stack && (e.stack = t.stack)), "function" == typeof Object.defineProperty && (Object.defineProperty(e, "name", {
            writable: !0,
            enumerable: !1
          }), Object.defineProperty(e, "message", {
            enumerable: !0
          })), e.name = t && t.name || e.name || e.code || "Error", e.code || (e.code = e.name), e.error || (e.error = w(n)), e;
        },
        getSourceParams: function (e) {
          var t = this.options.CopySourceParser;
          if (t) return t(e);
          var n = e.match(/^([^.]+-\d+)\.cos(v6|-cdc|-internal)?\.([^.]+)\.((myqcloud\.com)|(tencentcos\.cn))\/(.+)$/);
          return n ? {
            Bucket: n[1],
            Region: n[3],
            Key: n[7]
          } : null;
        },
        encodeBase64: function (e, t) {
          var n = p.encode(e);
          return t && (n = n.replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "")), n;
        },
        simplifyPath: function (e) {
          var t,
            n = [],
            o = i(e.split("/"));
          try {
            for (o.s(); !(t = o.n()).done;) {
              var a = t.value;
              ".." === a ? n.length && n.pop() : a.length && "." !== a && n.push(a);
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
          return "/" + n.join("/");
        },
        arrayBufferToString: function (e) {
          return new TextDecoder("utf-8").decode(e);
        },
        parseResBody: function (e) {
          var t;
          if (e && "string" == typeof e) {
            var n = e.trim(),
              i = 0 === n.indexOf("<"),
              o = 0 === n.indexOf("{");
            if (i) t = N.xml2json(e) || {};else if (o) try {
              var a = e.replace(/\n/g, " "),
                r = JSON.parse(a);
              t = "[object Object]" === Object.prototype.toString.call(r) ? r : e;
            } catch (n) {
              t = e;
            } else t = e;
          } else t = e || {};
          return t;
        }
      };
    e.exports = N;
  }, function (e, t, n) {
    "use strict";

    const i = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
      o = "[" + i + "][" + (i + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040") + "]*",
      a = new RegExp("^" + o + "$");
    t.isExist = function (e) {
      return void 0 !== e;
    }, t.isEmptyObject = function (e) {
      return 0 === Object.keys(e).length;
    }, t.merge = function (e, t, n) {
      if (t) {
        const i = Object.keys(t),
          o = i.length;
        for (let a = 0; a < o; a++) e[i[a]] = "strict" === n ? [t[i[a]]] : t[i[a]];
      }
    }, t.getValue = function (e) {
      return t.isExist(e) ? e : "";
    }, t.isName = function (e) {
      const t = a.exec(e);
      return !(null == t);
    }, t.getAllMatches = function (e, t) {
      const n = [];
      let i = t.exec(e);
      for (; i;) {
        const o = [];
        o.startIndex = t.lastIndex - i[0].length;
        const a = i.length;
        for (let e = 0; e < a; e++) o.push(i[e]);
        n.push(o), i = t.exec(e);
      }
      return n;
    }, t.nameRegexp = o;
  }, function (e, t, n) {
    function i(e) {
      return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, i(e);
    }
    function o() {
      "use strict";

      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      o = function () {
        return t;
      };
      var e,
        t = {},
        n = Object.prototype,
        a = n.hasOwnProperty,
        r = Object.defineProperty || function (e, t, n) {
          e[t] = n.value;
        },
        s = "function" == typeof Symbol ? Symbol : {},
        c = s.iterator || "@@iterator",
        l = s.asyncIterator || "@@asyncIterator",
        p = s.toStringTag || "@@toStringTag";
      function u(e, t, n) {
        return Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), e[t];
      }
      try {
        u({}, "");
      } catch (e) {
        u = function (e, t, n) {
          return e[t] = n;
        };
      }
      function d(e, t, n, i) {
        var o = t && t.prototype instanceof x ? t : x,
          a = Object.create(o.prototype),
          s = new j(i || []);
        return r(a, "_invoke", {
          value: P(e, n, s)
        }), a;
      }
      function f(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }
      t.wrap = d;
      var m = "suspendedStart",
        h = "suspendedYield",
        g = "executing",
        v = "completed",
        y = {};
      function x() {}
      function k() {}
      function b() {}
      var C = {};
      u(C, c, function () {
        return this;
      });
      var S = Object.getPrototypeOf,
        w = S && S(S(I([])));
      w && w !== n && a.call(w, c) && (C = w);
      var T = b.prototype = x.prototype = Object.create(C);
      function R(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function B(e, t) {
        function n(o, r, s, c) {
          var l = f(e[o], e, r);
          if ("throw" !== l.type) {
            var p = l.arg,
              u = p.value;
            return u && "object" == i(u) && a.call(u, "__await") ? t.resolve(u.__await).then(function (e) {
              n("next", e, s, c);
            }, function (e) {
              n("throw", e, s, c);
            }) : t.resolve(u).then(function (e) {
              p.value = e, s(p);
            }, function (e) {
              return n("throw", e, s, c);
            });
          }
          c(l.arg);
        }
        var o;
        r(this, "_invoke", {
          value: function (e, i) {
            function a() {
              return new t(function (t, o) {
                n(e, i, t, o);
              });
            }
            return o = o ? o.then(a, a) : a();
          }
        });
      }
      function P(t, n, i) {
        var o = m;
        return function (a, r) {
          if (o === g) throw Error("Generator is already running");
          if (o === v) {
            if ("throw" === a) throw r;
            return {
              value: e,
              done: !0
            };
          }
          for (i.method = a, i.arg = r;;) {
            var s = i.delegate;
            if (s) {
              var c = A(s, i);
              if (c) {
                if (c === y) continue;
                return c;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;else if ("throw" === i.method) {
              if (o === m) throw o = v, i.arg;
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            o = g;
            var l = f(t, n, i);
            if ("normal" === l.type) {
              if (o = i.done ? v : h, l.arg === y) continue;
              return {
                value: l.arg,
                done: i.done
              };
            }
            "throw" === l.type && (o = v, i.method = "throw", i.arg = l.arg);
          }
        };
      }
      function A(t, n) {
        var i = n.method,
          o = t.iterator[i];
        if (o === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", n.arg = e, A(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
        var a = f(o, t.iterator, n.arg);
        if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
        var r = a.arg;
        return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y);
      }
      function E(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }
      function O(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }
      function j(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(E, this), this.reset(!0);
      }
      function I(t) {
        if (t || "" === t) {
          var n = t[c];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var o = -1,
              r = function n() {
                for (; ++o < t.length;) if (a.call(t, o)) return n.value = t[o], n.done = !1, n;
                return n.value = e, n.done = !0, n;
              };
            return r.next = r;
          }
        }
        throw new TypeError(i(t) + " is not iterable");
      }
      return k.prototype = b, r(T, "constructor", {
        value: b,
        configurable: !0
      }), r(b, "constructor", {
        value: k,
        configurable: !0
      }), k.displayName = u(b, p, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === k || "GeneratorFunction" === (t.displayName || t.name));
      }, t.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, u(e, p, "GeneratorFunction")), e.prototype = Object.create(T), e;
      }, t.awrap = function (e) {
        return {
          __await: e
        };
      }, R(B.prototype), u(B.prototype, l, function () {
        return this;
      }), t.AsyncIterator = B, t.async = function (e, n, i, o, a) {
        void 0 === a && (a = Promise);
        var r = new B(d(e, n, i, o), a);
        return t.isGeneratorFunction(n) ? r : r.next().then(function (e) {
          return e.done ? e.value : r.next();
        });
      }, R(T), u(T, p, "Generator"), u(T, c, function () {
        return this;
      }), u(T, "toString", function () {
        return "[object Generator]";
      }), t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var i in t) n.push(i);
        return n.reverse(), function e() {
          for (; n.length;) {
            var i = n.pop();
            if (i in t) return e.value = i, e.done = !1, e;
          }
          return e.done = !0, e;
        };
      }, t.values = I, j.prototype = {
        constructor: j,
        reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t) for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function i(i, o) {
            return s.type = "throw", s.arg = t, n.next = i, o && (n.method = "next", n.arg = e), !!o;
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var r = this.tryEntries[o],
              s = r.completion;
            if ("root" === r.tryLoc) return i("end");
            if (r.tryLoc <= this.prev) {
              var c = a.call(r, "catchLoc"),
                l = a.call(r, "finallyLoc");
              if (c && l) {
                if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                if (this.prev < r.finallyLoc) return i(r.finallyLoc);
              } else if (c) {
                if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
              } else {
                if (!l) throw Error("try statement without catch or finally");
                if (this.prev < r.finallyLoc) return i(r.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];
            if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
              var o = i;
              break;
            }
          }
          o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
          var r = o ? o.completion : {};
          return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(r);
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y;
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), y;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var i = n.completion;
              if ("throw" === i.type) {
                var o = i.arg;
                O(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (t, n, i) {
          return this.delegate = {
            iterator: I(t),
            resultName: n,
            nextLoc: i
          }, "next" === this.method && (this.arg = e), y;
        }
      }, t;
    }
    function a(e, t, n, i, o, a, r) {
      try {
        var s = e[a](r),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, o);
    }
    function r(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, o) {
          var r = e.apply(t, n);
          function s(e) {
            a(r, i, o, s, c, "next", e);
          }
          function c(e) {
            a(r, i, o, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    function s(e, t, n) {
      return (t = l(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, l(i.key), i);
      }
    }
    function l(e) {
      var t = function (e, t) {
        if ("object" != i(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, t || "default");
          if ("object" != i(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }(e, "string");
      return "symbol" == i(t) ? t : t + "";
    }
    var p = n(3),
      u = null,
      d = function (e) {
        return !e || e < 0 ? 0 : (e / 1e3).toFixed(3);
      },
      f = function () {
        var e = function () {
          return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        };
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
      },
      m = function () {
        return new Promise(function (e) {
          if (wx.canIUse("getNetworkType")) try {
            wx.getNetworkType({
              success: function (t) {
                e(t.networkType);
              }
            });
          } catch (t) {
            e("can_not_get_network_type");
          } else e("can_not_get_network_type");
        });
      },
      h = {
        devicePlatform: "",
        wxVersion: "",
        wxSystem: "",
        wxSdkVersion: ""
      };
    (function () {
      var e = {
        devicePlatform: "",
        wxVersion: "",
        wxSystem: "",
        wxSdkVersion: ""
      };
      return new Promise(function (t) {
        if (wx.canIUse("getSystemInfo")) try {
          wx.getSystemInfo({
            success: function (n) {
              var i = n.platform,
                o = n.version,
                a = n.system,
                r = n.SDKVersion;
              Object.assign(e, {
                devicePlatform: i,
                wxVersion: o,
                wxSystem: a,
                wxSdkVersion: r
              }), t(e);
            }
          });
        } catch (e) {
          t({
            devicePlatform: "can_not_get_system_info",
            wxVersion: "can_not_get_system_info",
            wxSystem: "can_not_get_system_info",
            wxSdkVersion: "can_not_get_system_info"
          });
        } else t({
          devicePlatform: "can_not_get_system_info",
          wxVersion: "can_not_get_system_info",
          wxSystem: "can_not_get_system_info",
          wxSdkVersion: "can_not_get_system_info"
        });
      });
    })().then(function (e) {
      Object.assign(h, e);
    });
    function g(e) {
      return e.replace(/([A-Z])/g, "_$1").toLowerCase();
    }
    function v(e) {
      var t,
        n = {},
        i = ["sdkVersionName", "sdkVersionCode", "osName", "networkType", "requestName", "requestResult", "bucket", "region", "appid", "accelerate", "url", "host", "requestPath", "userAgent", "httpMethod", "httpSize", "httpSpeed", "httpTookTime", "httpMd5", "httpSign", "httpFullTime", "httpDomain", "partNumber", "httpRetryTimes", "customId", "traceId", "realApi"],
        o = [].concat(i, ["errorNode", "errorCode", "errorName", "errorMessage", "errorRequestId", "errorHttpCode", "errorServiceName", "errorType", "fullError"]),
        a = "Success" === e.requestResult ? i : o;
      for (var r in e) {
        if (a.includes(r)) n[g(r)] = e[r];
      }
      return n.request_name = e.realApi ? (t = e.realApi, ["putObject", "sliceUploadFile", "uploadFile", "uploadFiles"].includes(t) ? "UploadTask" : "getObject" === t ? "DownloadTask" : ["putObjectCopy", "sliceCopyFile"].includes(t) ? "CopyTask" : t) : e.requestName, n;
    }
    var y = function () {
      function e(t) {
        var n;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e);
        var i = t.parent,
          o = t.traceId,
          a = t.bucket,
          r = t.region,
          c = t.apiName,
          l = t.realApi,
          d = t.httpMethod,
          m = t.fileKey,
          g = t.fileSize,
          v = t.accelerate,
          y = t.customId,
          x = t.delay,
          k = t.deepTracker,
          b = t.Beacon,
          C = t.clsReporter,
          S = a && a.substr(a.lastIndexOf("-") + 1) || "";
        this.parent = i, this.deepTracker = k, this.delay = x, C && !this.clsReporter && (this.clsReporter = C), this.params = (s(n = {
          sdkVersionName: "cos-wx-sdk-v5",
          sdkVersionCode: p.version,
          osName: h.devicePlatform,
          networkType: "",
          requestName: c || "",
          requestResult: "",
          realApi: l,
          bucket: a,
          region: r,
          accelerate: v,
          httpMethod: d,
          url: "",
          host: "",
          httpDomain: "",
          requestPath: m || "",
          errorType: "",
          errorCode: "",
          errorName: "",
          errorMessage: "",
          errorRequestId: "",
          errorHttpCode: 0,
          errorServiceName: "",
          errorNode: "",
          httpTookTime: 0,
          httpSize: g || 0,
          httpMd5: 0,
          httpSign: 0,
          httpFullTime: 0,
          httpSpeed: 0,
          size: g || 0
        }, "httpMd5", 0), s(n, "httpSign", 0), s(n, "httpFull", 0), s(n, "name", c || ""), s(n, "tookTime", 0), s(n, "md5StartTime", 0), s(n, "md5EndTime", 0), s(n, "signStartTime", 0), s(n, "signEndTime", 0), s(n, "httpStartTime", 0), s(n, "httpEndTime", 0), s(n, "startTime", new Date().getTime()), s(n, "endTime", 0), s(n, "traceId", o || f()), s(n, "appid", S), s(n, "partNumber", 0), s(n, "httpRetryTimes", 0), s(n, "customId", y || ""), s(n, "partTime", 0), n), b && (this.beacon = function (e, t) {
          if (!u) {
            if ("function" != typeof e) throw new Error("Beacon not found");
            u = new e({
              appkey: "0WEB05PY6MHRGK0U",
              versionCode: p.version,
              channelID: "mp_sdk",
              openid: "openid",
              unionid: "unid",
              strictMode: !1,
              delay: t,
              sessionDuration: 6e4
            });
          }
          return u;
        }(b, x));
      }
      var t, n, i, a, l;
      return t = e, n = [{
        key: "formatResult",
        value: (l = r(o().mark(function e(t, n) {
          var i, a, r, s, c, l, p, u, f, h, g, v, y, x, k, b, C, S, w, T, R, B, P, A, E, O, j;
          return o().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return h = new Date().getTime(), e.next = 3, m();
              case 3:
                if (g = e.sent, v = t ? (null == t || null === (i = t.error) || void 0 === i || null === (a = i.error) || void 0 === a ? void 0 : a.Code) || "Error" : "", y = t && ((null == t || null === (r = t.error) || void 0 === r || null === (s = r.error) || void 0 === s ? void 0 : s.Message) || (null == t || null === (c = t.error) || void 0 === c ? void 0 : c.error) || (null == t ? void 0 : t.error)) || "", x = y, k = t ? null == t || null === (l = t.error) || void 0 === l ? void 0 : l.statusCode : n.statusCode, b = t ? null == t || null === (p = t.error) || void 0 === p || null === (u = p.error) || void 0 === u ? void 0 : u.Resource : "", C = t ? (null == t || null === (f = t.error) || void 0 === f ? void 0 : f.RequestId) || "" : (null == n ? void 0 : n.RequestId) || "", S = t ? C ? "Server" : "Client" : "", "getObject" === this.params.requestName && (this.params.httpSize = n ? n.headers && n.headers["content-length"] : 0), w = "sliceUploadFile" === this.params.realApi, T = "sliceCopyFile" === this.params.realApi, w || T ? (R = this.params.httpSize / 1024 / this.params.partTime, Object.assign(this.params, {
                  httpSpeed: R < 0 ? 0 : R.toFixed(3)
                })) : (B = h - this.params.startTime, P = this.params.httpEndTime - this.params.httpStartTime, A = this.params.httpSize / 1024 / (P / 1e3), E = this.params.md5EndTime - this.params.md5StartTime, O = this.params.signEndTime - this.params.signStartTime, this.parent && (this.parent.addParamValue("httpTookTime", d(P)), this.parent.addParamValue("httpFullTime", d(B)), this.parent.addParamValue("httpMd5", d(E)), this.parent.addParamValue("httpSign", d(O)), ["multipartUpload", "uploadPartCopy", "putObjectCopy"].includes(this.params.requestName) && this.parent.addParamValue("partTime", d(P))), Object.assign(this.params, {
                  httpFullTime: d(B),
                  httpMd5: d(E),
                  httpSign: d(O),
                  httpTookTime: d(P),
                  httpSpeed: A < 0 ? 0 : A.toFixed(3)
                })), Object.assign(this.params, {
                  networkType: g,
                  requestResult: t ? "Failure" : "Success",
                  errorType: S,
                  errorCode: v,
                  errorHttpCode: k,
                  errorName: x,
                  errorMessage: y,
                  errorServiceName: b,
                  errorRequestId: C
                }), !t || v && y || (this.params.fullError = t ? JSON.stringify(t) : ""), "getObject" === this.params.name && (this.params.size = n ? n.headers && n.headers["content-length"] : -1), this.params.url) {
                  try {
                    j = /^http(s)?:\/\/(.*?)\//.exec(this.params.url), this.params.host = j[2];
                  } catch (e) {
                    this.params.host = this.params.url;
                  }
                  this.params.httpDomain = this.params.host;
                }
              case 19:
              case "end":
                return e.stop();
            }
          }, e, this);
        })), function (e, t) {
          return l.apply(this, arguments);
        })
      }, {
        key: "report",
        value: (a = r(o().mark(function e(t, n) {
          var i;
          return o().wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (this.beacon || this.clsReporter) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                return e.next = 4, this.formatResult(t, n);
              case 4:
                i = v(this.params), this.beacon && this.sendEventsToBeacon(i), this.clsReporter && this.sendEventsToCLS(i);
              case 7:
              case "end":
                return e.stop();
            }
          }, e, this);
        })), function (e, t) {
          return a.apply(this, arguments);
        })
      }, {
        key: "setParams",
        value: function (e) {
          Object.assign(this.params, e);
        }
      }, {
        key: "addParamValue",
        value: function (e, t) {
          this.params[e] = (+this.params[e] + +t).toFixed(3);
        }
      }, {
        key: "sendEventsToBeacon",
        value: function (e) {
          if ("sliceUploadFile" !== this.params.requestName && "sliceUploadFile" !== this.params.realApi || this.deepTracker) {
            var t = "qcloud_track_cos_sdk";
            0 === this.delay ? this.beacon && this.beacon.onDirectUserAction(t, e) : this.beacon && this.beacon.onUserAction(t, e);
          }
        }
      }, {
        key: "sendEventsToCLS",
        value: function (e) {
          var t = !(0 !== this.delay);
          this.clsReporter.log(e, t);
        }
      }, {
        key: "generateSubTracker",
        value: function (t) {
          return Object.assign(t, {
            parent: this,
            deepTracker: this.deepTracker,
            traceId: this.params.traceId,
            bucket: this.params.bucket,
            region: this.params.region,
            accelerate: this.params.accelerate,
            fileKey: this.params.requestPath,
            customId: this.params.customId,
            delay: this.params.delay,
            clsReporter: this.clsReporter
          }), new e(t);
        }
      }], n && c(t.prototype, n), i && c(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();
    e.exports = y;
  }, function (e) {
    e.exports = JSON.parse('{"name":"cos-wx-sdk-v5","version":"1.7.2","description":"小程序 SDK for [腾讯云对象存储服务](https://cloud.tencent.com/product/cos)","main":"demo/lib/cos-wx-sdk-v5.min.js","scripts":{"prettier":"prettier --write src demo/demo-sdk.js demo/test.js demo/ciDemo","dev":"cross-env NODE_ENV=development node build.js --mode=development","build":"cross-env NODE_ENV=production node build.js --mode=production","sts.js":"node server/sts.js"},"repository":{"type":"git","url":"http://github.com/tencentyun/cos-wx-sdk-v5.git"},"author":"carsonxu","license":"ISC","dependencies":{"fast-xml-parser":"^4.4.0","mime":"^2.4.6"},"devDependencies":{"@babel/core":"7.17.9","@babel/preset-env":"7.16.11","babel-loader":"8.2.5","body-parser":"^1.18.3","cross-env":"^7.0.3","express":"^4.17.1","prettier":"^3.0.1","qcloud-cos-sts":"^3.0.2","terser-webpack-plugin":"4.2.3","webpack":"4.46.0","webpack-cli":"4.10.0"}}');
  }, function (e, t, n) {
    "use strict";

    const i = n(1),
      o = {
        allowBooleanAttributes: !1,
        unpairedTags: []
      };
    function a(e) {
      return " " === e || "\t" === e || "\n" === e || "\r" === e;
    }
    function r(e, t) {
      const n = t;
      for (; t < e.length; t++) if ("?" != e[t] && " " != e[t]) ;else {
        const i = e.substr(n, t - n);
        if (t > 5 && "xml" === i) return m("InvalidXml", "XML declaration allowed only at the start of the document.", g(e, t));
        if ("?" == e[t] && ">" == e[t + 1]) {
          t++;
          break;
        }
      }
      return t;
    }
    function s(e, t) {
      if (e.length > t + 5 && "-" === e[t + 1] && "-" === e[t + 2]) {
        for (t += 3; t < e.length; t++) if ("-" === e[t] && "-" === e[t + 1] && ">" === e[t + 2]) {
          t += 2;
          break;
        }
      } else if (e.length > t + 8 && "D" === e[t + 1] && "O" === e[t + 2] && "C" === e[t + 3] && "T" === e[t + 4] && "Y" === e[t + 5] && "P" === e[t + 6] && "E" === e[t + 7]) {
        let n = 1;
        for (t += 8; t < e.length; t++) if ("<" === e[t]) n++;else if (">" === e[t] && (n--, 0 === n)) break;
      } else if (e.length > t + 9 && "[" === e[t + 1] && "C" === e[t + 2] && "D" === e[t + 3] && "A" === e[t + 4] && "T" === e[t + 5] && "A" === e[t + 6] && "[" === e[t + 7]) for (t += 8; t < e.length; t++) if ("]" === e[t] && "]" === e[t + 1] && ">" === e[t + 2]) {
        t += 2;
        break;
      }
      return t;
    }
    t.validate = function (e, t) {
      t = Object.assign({}, o, t);
      const n = [];
      let c = !1,
        l = !1;
      "\ufeff" === e[0] && (e = e.substr(1));
      for (let o = 0; o < e.length; o++) if ("<" === e[o] && "?" === e[o + 1]) {
        if (o += 2, o = r(e, o), o.err) return o;
      } else {
        if ("<" !== e[o]) {
          if (a(e[o])) continue;
          return m("InvalidChar", "char '" + e[o] + "' is not expected.", g(e, o));
        }
        {
          let h = o;
          if (o++, "!" === e[o]) {
            o = s(e, o);
            continue;
          }
          {
            let v = !1;
            "/" === e[o] && (v = !0, o++);
            let y = "";
            for (; o < e.length && ">" !== e[o] && " " !== e[o] && "\t" !== e[o] && "\n" !== e[o] && "\r" !== e[o]; o++) y += e[o];
            if (y = y.trim(), "/" === y[y.length - 1] && (y = y.substring(0, y.length - 1), o--), u = y, !i.isName(u)) {
              let t;
              return t = 0 === y.trim().length ? "Invalid space after '<'." : "Tag '" + y + "' is an invalid name.", m("InvalidTag", t, g(e, o));
            }
            const x = p(e, o);
            if (!1 === x) return m("InvalidAttr", "Attributes for '" + y + "' have open quote.", g(e, o));
            let k = x.value;
            if (o = x.index, "/" === k[k.length - 1]) {
              const n = o - k.length;
              k = k.substring(0, k.length - 1);
              const i = d(k, t);
              if (!0 !== i) return m(i.err.code, i.err.msg, g(e, n + i.err.line));
              c = !0;
            } else if (v) {
              if (!x.tagClosed) return m("InvalidTag", "Closing tag '" + y + "' doesn't have proper closing.", g(e, o));
              if (k.trim().length > 0) return m("InvalidTag", "Closing tag '" + y + "' can't have attributes or invalid starting.", g(e, h));
              if (0 === n.length) return m("InvalidTag", "Closing tag '" + y + "' has not been opened.", g(e, h));
              {
                const t = n.pop();
                if (y !== t.tagName) {
                  let n = g(e, t.tagStartPos);
                  return m("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + y + "'.", g(e, h));
                }
                0 == n.length && (l = !0);
              }
            } else {
              const i = d(k, t);
              if (!0 !== i) return m(i.err.code, i.err.msg, g(e, o - k.length + i.err.line));
              if (!0 === l) return m("InvalidXml", "Multiple possible root nodes found.", g(e, o));
              -1 !== t.unpairedTags.indexOf(y) || n.push({
                tagName: y,
                tagStartPos: h
              }), c = !0;
            }
            for (o++; o < e.length; o++) if ("<" === e[o]) {
              if ("!" === e[o + 1]) {
                o++, o = s(e, o);
                continue;
              }
              if ("?" !== e[o + 1]) break;
              if (o = r(e, ++o), o.err) return o;
            } else if ("&" === e[o]) {
              const t = f(e, o);
              if (-1 == t) return m("InvalidChar", "char '&' is not expected.", g(e, o));
              o = t;
            } else if (!0 === l && !a(e[o])) return m("InvalidXml", "Extra text at the end", g(e, o));
            "<" === e[o] && o--;
          }
        }
      }
      var u;
      return c ? 1 == n.length ? m("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", g(e, n[0].tagStartPos)) : !(n.length > 0) || m("InvalidXml", "Invalid '" + JSON.stringify(n.map(e => e.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
        line: 1,
        col: 1
      }) : m("InvalidXml", "Start tag expected.", 1);
    };
    const c = '"',
      l = "'";
    function p(e, t) {
      let n = "",
        i = "",
        o = !1;
      for (; t < e.length; t++) {
        if (e[t] === c || e[t] === l) "" === i ? i = e[t] : i !== e[t] || (i = "");else if (">" === e[t] && "" === i) {
          o = !0;
          break;
        }
        n += e[t];
      }
      return "" === i && {
        value: n,
        index: t,
        tagClosed: o
      };
    }
    const u = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
    function d(e, t) {
      const n = i.getAllMatches(e, u),
        o = {};
      for (let e = 0; e < n.length; e++) {
        if (0 === n[e][1].length) return m("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", v(n[e]));
        if (void 0 !== n[e][3] && void 0 === n[e][4]) return m("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", v(n[e]));
        if (void 0 === n[e][3] && !t.allowBooleanAttributes) return m("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", v(n[e]));
        const i = n[e][2];
        if (!h(i)) return m("InvalidAttr", "Attribute '" + i + "' is an invalid name.", v(n[e]));
        if (o.hasOwnProperty(i)) return m("InvalidAttr", "Attribute '" + i + "' is repeated.", v(n[e]));
        o[i] = 1;
      }
      return !0;
    }
    function f(e, t) {
      if (";" === e[++t]) return -1;
      if ("#" === e[t]) return function (e, t) {
        let n = /\d/;
        for ("x" === e[t] && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
          if (";" === e[t]) return t;
          if (!e[t].match(n)) break;
        }
        return -1;
      }(e, ++t);
      let n = 0;
      for (; t < e.length; t++, n++) if (!(e[t].match(/\w/) && n < 20)) {
        if (";" === e[t]) break;
        return -1;
      }
      return t;
    }
    function m(e, t, n) {
      return {
        err: {
          code: e,
          msg: t,
          line: n.line || n,
          col: n.col
        }
      };
    }
    function h(e) {
      return i.isName(e);
    }
    function g(e, t) {
      const n = e.substring(0, t).split(/\r?\n/);
      return {
        line: n.length,
        col: n[n.length - 1].length + 1
      };
    }
    function v(e) {
      return e.startIndex + e[1].length;
    }
  }, function (e, t) {
    var n = function (e) {
      var t = {},
        n = function (e) {
          return !t[e] && (t[e] = []), t[e];
        };
      e.on = function (e, t) {
        n(e).push(t);
      }, e.off = function (e, t) {
        for (var i = n(e), o = i.length - 1; o >= 0; o--) t === i[o] && i.splice(o, 1);
      }, e.emit = function (e, t) {
        for (var i = n(e).map(function (e) {
            return e;
          }), o = 0; o < i.length; o++) i[o](t);
      };
    };
    e.exports.init = n, e.exports.EventProxy = function () {
      n(this);
    };
  }, function (e, t, n) {
    var i,
      o,
      a = n(0),
      r = "cos_sdk_upload_cache",
      s = function () {
        try {
          i.length ? wx.setStorageSync(r, JSON.stringify(i)) : wx.removeStorageSync(r);
        } catch (e) {}
      },
      c = function () {
        if (!i) {
          i = function () {
            try {
              var e = JSON.parse(wx.getStorageSync(r));
            } catch (e) {}
            return e || (e = []), e;
          }();
          for (var e = !1, t = Math.round(Date.now() / 1e3), n = i.length - 1; n >= 0; n--) {
            var o = i[n][2];
            (!o || o + 2592e3 < t) && (i.splice(n, 1), e = !0);
          }
          e && s();
        }
      },
      l = function () {
        o || (o = setTimeout(function () {
          s(), o = null;
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
          return e.FilePath && e.size && e.lastModifiedTime && t ? a.md5([e.FilePath].join("::")) + "-" + a.md5([e.size, e.mode, e.lastAccessedTime, e.lastModifiedTime, t, n, i].join("::")) : null;
        },
        getCopyFileId: function (e, t, n, i, o) {
          var r = t["content-length"],
            s = t.etag || "",
            c = t["last-modified"];
          return e && n ? a.md5([e, r, s, c, n, i, o].join("::")) : null;
        },
        getUploadIdList: function (e) {
          if (!e) return null;
          c();
          for (var t = [], n = 0; n < i.length; n++) i[n][0] === e && t.push(i[n][1]);
          return t.length ? t : null;
        },
        saveUploadId: function (e, t, n) {
          if (c(), e) {
            for (var o = e.substr(0, e.indexOf("-") + 1), a = i.length - 1; a >= 0; a--) {
              var r = i[a];
              (r[0] === e && r[1] === t || e !== r[0] && 0 === r[0].indexOf(o)) && i.splice(a, 1);
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
    var i = n(8);
    e.exports = i;
  }, function (e, t, n) {
    "use strict";

    var i = n(0),
      o = n(5),
      a = n(24),
      r = n(25),
      s = n(31),
      c = n(3),
      l = {
        SecretId: "",
        SecretKey: "",
        SecurityToken: "",
        StartTime: 0,
        ExpiredTime: 0,
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
        UploadAddMetaMd5: !1,
        UploadIdCacheLimit: 50,
        UseAccelerate: !1,
        ForceSignHost: !0,
        HttpDNSServiceId: "",
        SimpleUploadMethod: "postObject",
        AutoSwitchHost: !1,
        CopySourceParser: null,
        ObjectKeySimplifyCheck: !0,
        DeepTracker: !1,
        TrackerDelay: 5e3,
        CustomId: "",
        BeaconReporter: null,
        ClsReporter: null
      },
      p = function (e) {
        if (this.options = i.extend(i.clone(l), e || {}), this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit), this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit), this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes), this.options.ChunkSize = Math.max(1048576, this.options.ChunkSize), this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit), this.options.CopyChunkSize = Math.max(1048576, this.options.CopyChunkSize), this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize), this.options.MaxPartNumber = Math.max(1024, Math.min(1e4, this.options.MaxPartNumber)), this.options.Timeout = Math.max(0, this.options.Timeout), this.options.EnableReporter = this.options.BeaconReporter || this.options.ClsReporter, this.options.AppId, this.options.SecretId && this.options.SecretId.indexOf(" "), this.options.SecretKey && this.options.SecretKey.indexOf(" "), this.options.ForcePathStyle) throw new Error("ForcePathStyle is not supported");
        o.init(this), a.init(this);
      };
    r.init(p, a), s.init(p, a), p.util = {
      md5: i.md5,
      xml2json: i.xml2json,
      json2xml: i.json2xml,
      encodeBase64: i.encodeBase64
    }, p.getAuthorization = i.getAuth, p.version = c.version, e.exports = p;
  }, function (e, t, n) {
    (function (e) {
      var t;
      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, i(e);
      }
      !function () {
        "use strict";

        var o = "input is invalid type",
          a = "object" === ("undefined" == typeof window ? "undefined" : i(window)),
          r = a ? window : {};
        r.JS_MD5_NO_WINDOW && (a = !1), !a && "object" === ("undefined" == typeof self ? "undefined" : i(self)) && (r = self);
        var s,
          c = !r.JS_MD5_NO_COMMON_JS && "object" === i(e) && e.exports,
          l = n(11),
          p = !r.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
          u = "0123456789abcdef".split(""),
          d = [128, 32768, 8388608, -2147483648],
          f = [0, 8, 16, 24],
          m = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
          h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
          g = [];
        if (p) {
          var v = new ArrayBuffer(68);
          s = new Uint8Array(v), g = new Uint32Array(v);
        }
        !r.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        }), !p || !r.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (e) {
          return "object" === i(e) && e.buffer && e.buffer.constructor === ArrayBuffer;
        });
        var y = function (e) {
          return function (t) {
            return new x(!0).update(t)[e]();
          };
        };
        function x(e) {
          if (e) g[0] = g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0, this.blocks = g, this.buffer8 = s;else if (p) {
            var t = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(t), this.blocks = new Uint32Array(t);
          } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
        }
        x.prototype.update = function (e) {
          if (!this.finalized) {
            var t,
              n = i(e);
            if ("string" !== n) {
              if ("object" !== n) throw o;
              if (null === e) throw o;
              if (!p || e.constructor !== ArrayBuffer && "ArrayBuffer" !== e.constructor.name) {
                if (!(Array.isArray(e) || p && ArrayBuffer.isView(e))) throw o;
              } else e = new Uint8Array(e);
              t = !0;
            }
            for (var a, r, s = 0, c = e.length, l = this.blocks, u = this.buffer8; s < c;) {
              if (this.hashed && (this.hashed = !1, l[0] = l[16], l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0), t) {
                if (p) for (r = this.start; s < c && r < 64; ++s) u[r++] = e[s];else for (r = this.start; s < c && r < 64; ++s) l[r >> 2] |= e[s] << f[3 & r++];
              } else if (p) for (r = this.start; s < c && r < 64; ++s) (a = e.charCodeAt(s)) < 128 ? u[r++] = a : a < 2048 ? (u[r++] = 192 | a >> 6, u[r++] = 128 | 63 & a) : a < 55296 || a >= 57344 ? (u[r++] = 224 | a >> 12, u[r++] = 128 | a >> 6 & 63, u[r++] = 128 | 63 & a) : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++s)), u[r++] = 240 | a >> 18, u[r++] = 128 | a >> 12 & 63, u[r++] = 128 | a >> 6 & 63, u[r++] = 128 | 63 & a);else for (r = this.start; s < c && r < 64; ++s) (a = e.charCodeAt(s)) < 128 ? l[r >> 2] |= a << f[3 & r++] : a < 2048 ? (l[r >> 2] |= (192 | a >> 6) << f[3 & r++], l[r >> 2] |= (128 | 63 & a) << f[3 & r++]) : a < 55296 || a >= 57344 ? (l[r >> 2] |= (224 | a >> 12) << f[3 & r++], l[r >> 2] |= (128 | a >> 6 & 63) << f[3 & r++], l[r >> 2] |= (128 | 63 & a) << f[3 & r++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++s)), l[r >> 2] |= (240 | a >> 18) << f[3 & r++], l[r >> 2] |= (128 | a >> 12 & 63) << f[3 & r++], l[r >> 2] |= (128 | a >> 6 & 63) << f[3 & r++], l[r >> 2] |= (128 | 63 & a) << f[3 & r++]);
              this.lastByteIndex = r, this.bytes += r - this.start, r >= 64 ? (this.start = r - 64, this.hash(), this.hashed = !0) : this.start = r;
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
          }
        }, x.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks,
              t = this.lastByteIndex;
            e[t >> 2] |= d[3 & t], t >= 56 && (this.hashed || this.hash(), e[0] = e[16], e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.bytes << 3, e[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
          }
        }, x.prototype.hash = function () {
          var e,
            t,
            n,
            i,
            o,
            a,
            r = this.blocks;
          this.first ? t = ((t = ((e = ((e = r[0] - 680876937) << 7 | e >>> 25) - 271733879 << 0) ^ (n = ((n = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & e) + r[1] - 117830708) << 12 | i >>> 20) + e << 0) & (-271733879 ^ e)) + r[2] - 1126478375) << 17 | n >>> 15) + i << 0) & (i ^ e)) + r[3] - 1316259209) << 22 | t >>> 10) + n << 0 : (e = this.h0, t = this.h1, n = this.h2, t = ((t += ((e = ((e += ((i = this.h3) ^ t & (n ^ i)) + r[0] - 680876936) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (i = ((i += (n ^ e & (t ^ n)) + r[1] - 389564586) << 12 | i >>> 20) + e << 0) & (e ^ t)) + r[2] + 606105819) << 17 | n >>> 15) + i << 0) & (i ^ e)) + r[3] - 1044525330) << 22 | t >>> 10) + n << 0), t = ((t += ((e = ((e += (i ^ t & (n ^ i)) + r[4] - 176418897) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (i = ((i += (n ^ e & (t ^ n)) + r[5] + 1200080426) << 12 | i >>> 20) + e << 0) & (e ^ t)) + r[6] - 1473231341) << 17 | n >>> 15) + i << 0) & (i ^ e)) + r[7] - 45705983) << 22 | t >>> 10) + n << 0, t = ((t += ((e = ((e += (i ^ t & (n ^ i)) + r[8] + 1770035416) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (i = ((i += (n ^ e & (t ^ n)) + r[9] - 1958414417) << 12 | i >>> 20) + e << 0) & (e ^ t)) + r[10] - 42063) << 17 | n >>> 15) + i << 0) & (i ^ e)) + r[11] - 1990404162) << 22 | t >>> 10) + n << 0, t = ((t += ((e = ((e += (i ^ t & (n ^ i)) + r[12] + 1804603682) << 7 | e >>> 25) + t << 0) ^ (n = ((n += (t ^ (i = ((i += (n ^ e & (t ^ n)) + r[13] - 40341101) << 12 | i >>> 20) + e << 0) & (e ^ t)) + r[14] - 1502002290) << 17 | n >>> 15) + i << 0) & (i ^ e)) + r[15] + 1236535329) << 22 | t >>> 10) + n << 0, t = ((t += ((i = ((i += (t ^ n & ((e = ((e += (n ^ i & (t ^ n)) + r[1] - 165796510) << 5 | e >>> 27) + t << 0) ^ t)) + r[6] - 1069501632) << 9 | i >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (i ^ e)) + r[11] + 643717713) << 14 | n >>> 18) + i << 0) ^ i)) + r[0] - 373897302) << 20 | t >>> 12) + n << 0, t = ((t += ((i = ((i += (t ^ n & ((e = ((e += (n ^ i & (t ^ n)) + r[5] - 701558691) << 5 | e >>> 27) + t << 0) ^ t)) + r[10] + 38016083) << 9 | i >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (i ^ e)) + r[15] - 660478335) << 14 | n >>> 18) + i << 0) ^ i)) + r[4] - 405537848) << 20 | t >>> 12) + n << 0, t = ((t += ((i = ((i += (t ^ n & ((e = ((e += (n ^ i & (t ^ n)) + r[9] + 568446438) << 5 | e >>> 27) + t << 0) ^ t)) + r[14] - 1019803690) << 9 | i >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (i ^ e)) + r[3] - 187363961) << 14 | n >>> 18) + i << 0) ^ i)) + r[8] + 1163531501) << 20 | t >>> 12) + n << 0, t = ((t += ((i = ((i += (t ^ n & ((e = ((e += (n ^ i & (t ^ n)) + r[13] - 1444681467) << 5 | e >>> 27) + t << 0) ^ t)) + r[2] - 51403784) << 9 | i >>> 23) + e << 0) ^ e & ((n = ((n += (e ^ t & (i ^ e)) + r[7] + 1735328473) << 14 | n >>> 18) + i << 0) ^ i)) + r[12] - 1926607734) << 20 | t >>> 12) + n << 0, t = ((t += ((a = (i = ((i += ((o = t ^ n) ^ (e = ((e += (o ^ i) + r[5] - 378558) << 4 | e >>> 28) + t << 0)) + r[8] - 2022574463) << 11 | i >>> 21) + e << 0) ^ e) ^ (n = ((n += (a ^ t) + r[11] + 1839030562) << 16 | n >>> 16) + i << 0)) + r[14] - 35309556) << 23 | t >>> 9) + n << 0, t = ((t += ((a = (i = ((i += ((o = t ^ n) ^ (e = ((e += (o ^ i) + r[1] - 1530992060) << 4 | e >>> 28) + t << 0)) + r[4] + 1272893353) << 11 | i >>> 21) + e << 0) ^ e) ^ (n = ((n += (a ^ t) + r[7] - 155497632) << 16 | n >>> 16) + i << 0)) + r[10] - 1094730640) << 23 | t >>> 9) + n << 0, t = ((t += ((a = (i = ((i += ((o = t ^ n) ^ (e = ((e += (o ^ i) + r[13] + 681279174) << 4 | e >>> 28) + t << 0)) + r[0] - 358537222) << 11 | i >>> 21) + e << 0) ^ e) ^ (n = ((n += (a ^ t) + r[3] - 722521979) << 16 | n >>> 16) + i << 0)) + r[6] + 76029189) << 23 | t >>> 9) + n << 0, t = ((t += ((a = (i = ((i += ((o = t ^ n) ^ (e = ((e += (o ^ i) + r[9] - 640364487) << 4 | e >>> 28) + t << 0)) + r[12] - 421815835) << 11 | i >>> 21) + e << 0) ^ e) ^ (n = ((n += (a ^ t) + r[15] + 530742520) << 16 | n >>> 16) + i << 0)) + r[2] - 995338651) << 23 | t >>> 9) + n << 0, t = ((t += ((i = ((i += (t ^ ((e = ((e += (n ^ (t | ~i)) + r[0] - 198630844) << 6 | e >>> 26) + t << 0) | ~n)) + r[7] + 1126891415) << 10 | i >>> 22) + e << 0) ^ ((n = ((n += (e ^ (i | ~t)) + r[14] - 1416354905) << 15 | n >>> 17) + i << 0) | ~e)) + r[5] - 57434055) << 21 | t >>> 11) + n << 0, t = ((t += ((i = ((i += (t ^ ((e = ((e += (n ^ (t | ~i)) + r[12] + 1700485571) << 6 | e >>> 26) + t << 0) | ~n)) + r[3] - 1894986606) << 10 | i >>> 22) + e << 0) ^ ((n = ((n += (e ^ (i | ~t)) + r[10] - 1051523) << 15 | n >>> 17) + i << 0) | ~e)) + r[1] - 2054922799) << 21 | t >>> 11) + n << 0, t = ((t += ((i = ((i += (t ^ ((e = ((e += (n ^ (t | ~i)) + r[8] + 1873313359) << 6 | e >>> 26) + t << 0) | ~n)) + r[15] - 30611744) << 10 | i >>> 22) + e << 0) ^ ((n = ((n += (e ^ (i | ~t)) + r[6] - 1560198380) << 15 | n >>> 17) + i << 0) | ~e)) + r[13] + 1309151649) << 21 | t >>> 11) + n << 0, t = ((t += ((i = ((i += (t ^ ((e = ((e += (n ^ (t | ~i)) + r[4] - 145523070) << 6 | e >>> 26) + t << 0) | ~n)) + r[11] - 1120210379) << 10 | i >>> 22) + e << 0) ^ ((n = ((n += (e ^ (i | ~t)) + r[2] + 718787259) << 15 | n >>> 17) + i << 0) | ~e)) + r[9] - 343485551) << 21 | t >>> 11) + n << 0, this.first ? (this.h0 = e + 1732584193 << 0, this.h1 = t - 271733879 << 0, this.h2 = n - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + e << 0, this.h1 = this.h1 + t << 0, this.h2 = this.h2 + n << 0, this.h3 = this.h3 + i << 0);
        }, x.prototype.hex = function () {
          this.finalize();
          var e = this.h0,
            t = this.h1,
            n = this.h2,
            i = this.h3;
          return u[e >> 4 & 15] + u[15 & e] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 28 & 15] + u[e >> 24 & 15] + u[t >> 4 & 15] + u[15 & t] + u[t >> 12 & 15] + u[t >> 8 & 15] + u[t >> 20 & 15] + u[t >> 16 & 15] + u[t >> 28 & 15] + u[t >> 24 & 15] + u[n >> 4 & 15] + u[15 & n] + u[n >> 12 & 15] + u[n >> 8 & 15] + u[n >> 20 & 15] + u[n >> 16 & 15] + u[n >> 28 & 15] + u[n >> 24 & 15] + u[i >> 4 & 15] + u[15 & i] + u[i >> 12 & 15] + u[i >> 8 & 15] + u[i >> 20 & 15] + u[i >> 16 & 15] + u[i >> 28 & 15] + u[i >> 24 & 15];
        }, x.prototype.toString = x.prototype.hex, x.prototype.digest = function () {
          this.finalize();
          var e = this.h0,
            t = this.h1,
            n = this.h2,
            i = this.h3;
          return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255];
        }, x.prototype.array = x.prototype.digest, x.prototype.arrayBuffer = function () {
          this.finalize();
          var e = new ArrayBuffer(16),
            t = new Uint32Array(e);
          return t[0] = this.h0, t[1] = this.h1, t[2] = this.h2, t[3] = this.h3, e;
        }, x.prototype.buffer = x.prototype.arrayBuffer, x.prototype.base64 = function () {
          for (var e, t, n, i = "", o = this.array(), a = 0; a < 15;) e = o[a++], t = o[a++], n = o[a++], i += h[e >>> 2] + h[63 & (e << 4 | t >>> 4)] + h[63 & (t << 2 | n >>> 6)] + h[63 & n];
          return e = o[a], i += h[e >>> 2] + h[e << 4 & 63] + "==";
        };
        var k = function () {
          var e = y("hex");
          e.getCtx = e.create = function () {
            return new x();
          }, e.update = function (t) {
            return e.create().update(t);
          };
          for (var t = 0; t < m.length; ++t) {
            var n = m[t];
            e[n] = y(n);
          }
          return e;
        }();
        c ? e.exports = k : (r.md5 = k, l && (void 0 === (t = function () {
          return k;
        }.call(k, n, k, e)) || (e.exports = t)));
      }();
    }).call(this, n(10)(e));
  }, function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function () {
          return e.l;
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function () {
          return e.i;
        }
      }), e.webpackPolyfill = 1), e;
    };
  }, function (e, t) {
    (function (t) {
      e.exports = t;
    }).call(this, {});
  }, function (e, t) {
    var n,
      i,
      o,
      a,
      r,
      s,
      c,
      l = l || function (e, t) {
        var n = {},
          i = n.lib = {},
          o = function () {},
          a = i.Base = {
            extend: function (e) {
              o.prototype = this;
              var t = new o();
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
          r = i.WordArray = a.extend({
            init: function (e, t) {
              e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
            },
            toString: function (e) {
              return (e || c).stringify(this);
            },
            concat: function (e) {
              var t = this.words,
                n = e.words,
                i = this.sigBytes;
              if (e = e.sigBytes, this.clamp(), i % 4) for (var o = 0; o < e; o++) t[i + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (i + o) % 4 * 8;else if (65535 < n.length) for (o = 0; o < e; o += 4) t[i + o >>> 2] = n[o >>> 2];else t.push.apply(t, n);
              return this.sigBytes += e, this;
            },
            clamp: function () {
              var t = this.words,
                n = this.sigBytes;
              t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
            },
            clone: function () {
              var e = a.clone.call(this);
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
                var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
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
          u = i.BufferedBlockAlgorithm = a.extend({
            reset: function () {
              this._data = new r.init(), this._nDataBytes = 0;
            },
            _append: function (e) {
              "string" == typeof e && (e = p.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
            },
            _process: function (t) {
              var n = this._data,
                i = n.words,
                o = n.sigBytes,
                a = this.blockSize,
                s = o / (4 * a);
              if (t = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * a, o = e.min(4 * t, o), t) {
                for (var c = 0; c < t; c += a) this._doProcessBlock(i, c);
                c = i.splice(0, t), n.sigBytes -= o;
              }
              return new r.init(c, o);
            },
            clone: function () {
              var e = a.clone.call(this);
              return e._data = this._data.clone(), e;
            },
            _minBufferSize: 0
          });
        i.Hasher = u.extend({
          cfg: a.extend(),
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
    i = (r = (n = l).lib).WordArray, o = r.Hasher, a = [], r = n.algo.SHA1 = o.extend({
      _doReset: function () {
        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function (e, t) {
        for (var n = this._hash.words, i = n[0], o = n[1], r = n[2], s = n[3], c = n[4], l = 0; 80 > l; l++) {
          if (16 > l) a[l] = 0 | e[t + l];else {
            var p = a[l - 3] ^ a[l - 8] ^ a[l - 14] ^ a[l - 16];
            a[l] = p << 1 | p >>> 31;
          }
          p = (i << 5 | i >>> 27) + c + a[l], p = 20 > l ? p + (1518500249 + (o & r | ~o & s)) : 40 > l ? p + (1859775393 + (o ^ r ^ s)) : 60 > l ? p + ((o & r | o & s | r & s) - 1894007588) : p + ((o ^ r ^ s) - 899497514), c = s, s = r, r = o << 30 | o >>> 2, o = i, i = p;
        }
        n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + r | 0, n[3] = n[3] + s | 0, n[4] = n[4] + c | 0;
      },
      _doFinalize: function () {
        var e = this._data,
          t = e.words,
          n = 8 * this._nDataBytes,
          i = 8 * e.sigBytes;
        return t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
      },
      clone: function () {
        var e = o.clone.call(this);
        return e._hash = this._hash.clone(), e;
      }
    }), n.SHA1 = o._createHelper(r), n.HmacSHA1 = o._createHmacHelper(r), function () {
      var e = l,
        t = e.enc.Utf8;
      e.algo.HMAC = e.lib.Base.extend({
        init: function (e, n) {
          e = this._hasher = new e.init(), "string" == typeof n && (n = t.parse(n));
          var i = e.blockSize,
            o = 4 * i;
          n.sigBytes > o && (n = e.finalize(n)), n.clamp();
          for (var a = this._oKey = n.clone(), r = this._iKey = n.clone(), s = a.words, c = r.words, l = 0; l < i; l++) s[l] ^= 1549556828, c[l] ^= 909522486;
          a.sigBytes = r.sigBytes = o, this.reset();
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
    }(), c = (s = l).lib.WordArray, s.enc.Base64 = {
      stringify: function (e) {
        var t = e.words,
          n = e.sigBytes,
          i = this._map;
        e.clamp();
        for (var o = [], a = 0; a < n; a += 3) for (var r = (t[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; s < 4 && a + .75 * s < n; s++) o.push(i.charAt(r >>> 6 * (3 - s) & 63));
        var c = i.charAt(64);
        if (c) for (; o.length % 4;) o.push(c);
        return o.join("");
      },
      parse: function (e) {
        var t = e.length,
          n = this._map,
          i = n.charAt(64);
        if (i) {
          var o = e.indexOf(i);
          -1 != o && (t = o);
        }
        for (var a = [], r = 0, s = 0; s < t; s++) if (s % 4) {
          var l = n.indexOf(e.charAt(s - 1)) << s % 4 * 2,
            p = n.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
          a[r >>> 2] |= (l | p) << 24 - r % 4 * 8, r++;
        }
        return c.create(a, r);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, e.exports = l;
  }, function (e, t) {
    var n = function (e) {
      var t = (e = e || {}).Base64,
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = function (e) {
          for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
          return t;
        }(n),
        o = String.fromCharCode,
        a = function (e) {
          if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? o(192 | t >>> 6) + o(128 | 63 & t) : o(224 | t >>> 12 & 15) + o(128 | t >>> 6 & 63) + o(128 | 63 & t);
          var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
          return o(240 | t >>> 18 & 7) + o(128 | t >>> 12 & 63) + o(128 | t >>> 6 & 63) + o(128 | 63 & t);
        },
        r = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        s = function (e) {
          return e.replace(r, a);
        },
        c = function (e) {
          var t = [0, 2, 1][e.length % 3],
            i = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
          return [n.charAt(i >>> 18), n.charAt(i >>> 12 & 63), t >= 2 ? "=" : n.charAt(i >>> 6 & 63), t >= 1 ? "=" : n.charAt(63 & i)].join("");
        },
        l = e.btoa ? function (t) {
          return e.btoa(t);
        } : function (e) {
          return e.replace(/[\s\S]{1,3}/g, c);
        },
        p = function (e) {
          return l(s(e));
        },
        u = function (e, t) {
          return t ? p(String(e)).replace(/[+\/]/g, function (e) {
            return "+" == e ? "-" : "_";
          }).replace(/=/g, "") : p(String(e));
        },
        d = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
        f = function (e) {
          switch (e.length) {
            case 4:
              var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
              return o(55296 + (t >>> 10)) + o(56320 + (1023 & t));
            case 3:
              return o((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
            default:
              return o((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
          }
        },
        m = function (e) {
          return e.replace(d, f);
        },
        h = function (e) {
          var t = e.length,
            n = t % 4,
            a = (t > 0 ? i[e.charAt(0)] << 18 : 0) | (t > 1 ? i[e.charAt(1)] << 12 : 0) | (t > 2 ? i[e.charAt(2)] << 6 : 0) | (t > 3 ? i[e.charAt(3)] : 0),
            r = [o(a >>> 16), o(a >>> 8 & 255), o(255 & a)];
          return r.length -= [0, 0, 2, 1][n], r.join("");
        },
        g = e.atob ? function (t) {
          return e.atob(t);
        } : function (e) {
          return e.replace(/[\s\S]{1,4}/g, h);
        },
        v = function (e) {
          return m(g(e));
        },
        y = function (e) {
          return v(String(e).replace(/[-_]/g, function (e) {
            return "-" == e ? "+" : "/";
          }).replace(/[^A-Za-z0-9\+\/]/g, ""));
        };
      return {
        VERSION: "2.1.9",
        atob: g,
        btoa: l,
        fromBase64: y,
        toBase64: u,
        utob: s,
        encode: u,
        encodeURI: function (e) {
          return u(e, !0);
        },
        btou: m,
        decode: y,
        noConflict: function () {
          var n = e.Base64;
          return e.Base64 = t, n;
        }
      };
    }();
    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    const i = n(4),
      o = n(15),
      a = n(22);
    e.exports = {
      XMLParser: o,
      XMLValidator: i,
      XMLBuilder: a
    };
  }, function (e, t, n) {
    const {
        buildOptions: i
      } = n(16),
      o = n(17),
      {
        prettify: a
      } = n(21),
      r = n(4);
    e.exports = class {
      constructor(e) {
        this.externalEntities = {}, this.options = i(e);
      }
      parse(e, t) {
        if ("string" == typeof e) ;else {
          if (!e.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
          e = e.toString();
        }
        if (t) {
          !0 === t && (t = {});
          const n = r.validate(e, t);
          if (!0 !== n) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`);
        }
        const n = new o(this.options);
        n.addExternalEntities(this.externalEntities);
        const i = n.parseXml(e);
        return this.options.preserveOrder || void 0 === i ? i : a(i, this.options);
      }
      addEntity(e, t) {
        if (-1 !== t.indexOf("&")) throw new Error("Entity value can't have '&'");
        if (-1 !== e.indexOf("&") || -1 !== e.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        if ("&" === t) throw new Error("An entity with value '&' is not permitted");
        this.externalEntities[e] = t;
      }
    };
  }, function (e, t) {
    const n = {
      preserveOrder: !1,
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      removeNSPrefix: !1,
      allowBooleanAttributes: !1,
      parseTagValue: !0,
      parseAttributeValue: !1,
      trimValues: !0,
      cdataPropName: !1,
      numberParseOptions: {
        hex: !0,
        leadingZeros: !0,
        eNotation: !0
      },
      tagValueProcessor: function (e, t) {
        return t;
      },
      attributeValueProcessor: function (e, t) {
        return t;
      },
      stopNodes: [],
      alwaysCreateTextNode: !1,
      isArray: () => !1,
      commentPropName: !1,
      unpairedTags: [],
      processEntities: !0,
      htmlEntities: !1,
      ignoreDeclaration: !1,
      ignorePiTags: !1,
      transformTagName: !1,
      transformAttributeName: !1,
      updateTag: function (e, t, n) {
        return e;
      }
    };
    t.buildOptions = function (e) {
      return Object.assign({}, n, e);
    }, t.defaultOptions = n;
  }, function (e, t, n) {
    "use strict";

    const i = n(1),
      o = n(18),
      a = n(19),
      r = n(20);
    function s(e) {
      const t = Object.keys(e);
      for (let n = 0; n < t.length; n++) {
        const i = t[n];
        this.lastEntities[i] = {
          regex: new RegExp("&" + i + ";", "g"),
          val: e[i]
        };
      }
    }
    function c(e, t, n, i, o, a, r) {
      if (void 0 !== e && (this.options.trimValues && !i && (e = e.trim()), e.length > 0)) {
        r || (e = this.replaceEntitiesValue(e));
        const i = this.options.tagValueProcessor(t, e, n, o, a);
        if (null == i) return e;
        if (typeof i != typeof e || i !== e) return i;
        if (this.options.trimValues) return k(e, this.options.parseTagValue, this.options.numberParseOptions);
        return e.trim() === e ? k(e, this.options.parseTagValue, this.options.numberParseOptions) : e;
      }
    }
    function l(e) {
      if (this.options.removeNSPrefix) {
        const t = e.split(":"),
          n = "/" === e.charAt(0) ? "/" : "";
        if ("xmlns" === t[0]) return "";
        2 === t.length && (e = n + t[1]);
      }
      return e;
    }
    const p = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
    function u(e, t, n) {
      if (!this.options.ignoreAttributes && "string" == typeof e) {
        const n = i.getAllMatches(e, p),
          o = n.length,
          a = {};
        for (let e = 0; e < o; e++) {
          const i = this.resolveNameSpace(n[e][1]);
          let o = n[e][4],
            r = this.options.attributeNamePrefix + i;
          if (i.length) if (this.options.transformAttributeName && (r = this.options.transformAttributeName(r)), "__proto__" === r && (r = "#__proto__"), void 0 !== o) {
            this.options.trimValues && (o = o.trim()), o = this.replaceEntitiesValue(o);
            const e = this.options.attributeValueProcessor(i, o, t);
            a[r] = null == e ? o : typeof e != typeof o || e !== o ? e : k(o, this.options.parseAttributeValue, this.options.numberParseOptions);
          } else this.options.allowBooleanAttributes && (a[r] = !0);
        }
        if (!Object.keys(a).length) return;
        if (this.options.attributesGroupName) {
          const e = {};
          return e[this.options.attributesGroupName] = a, e;
        }
        return a;
      }
    }
    const d = function (e) {
      e = e.replace(/\r\n?/g, "\n");
      const t = new o("!xml");
      let n = t,
        i = "",
        r = "";
      for (let s = 0; s < e.length; s++) {
        if ("<" === e[s]) {
          if ("/" === e[s + 1]) {
            const t = v(e, ">", s, "Closing Tag is not closed.");
            let o = e.substring(s + 2, t).trim();
            if (this.options.removeNSPrefix) {
              const e = o.indexOf(":");
              -1 !== e && (o = o.substr(e + 1));
            }
            this.options.transformTagName && (o = this.options.transformTagName(o)), n && (i = this.saveTextToParentTag(i, n, r));
            const a = r.substring(r.lastIndexOf(".") + 1);
            if (o && -1 !== this.options.unpairedTags.indexOf(o)) throw new Error(`Unpaired tag can not be used as closing tag: </${o}>`);
            let c = 0;
            a && -1 !== this.options.unpairedTags.indexOf(a) ? (c = r.lastIndexOf(".", r.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : c = r.lastIndexOf("."), r = r.substring(0, c), n = this.tagsNodeStack.pop(), i = "", s = t;
          } else if ("?" === e[s + 1]) {
            let t = y(e, s, !1, "?>");
            if (!t) throw new Error("Pi Tag is not closed.");
            if (i = this.saveTextToParentTag(i, n, r), this.options.ignoreDeclaration && "?xml" === t.tagName || this.options.ignorePiTags) ;else {
              const e = new o(t.tagName);
              e.add(this.options.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && (e[":@"] = this.buildAttributesMap(t.tagExp, r, t.tagName)), this.addChild(n, e, r);
            }
            s = t.closeIndex + 1;
          } else if ("!--" === e.substr(s + 1, 3)) {
            const t = v(e, "--\x3e", s + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const o = e.substring(s + 4, t - 2);
              i = this.saveTextToParentTag(i, n, r), n.add(this.options.commentPropName, [{
                [this.options.textNodeName]: o
              }]);
            }
            s = t;
          } else if ("!D" === e.substr(s + 1, 2)) {
            const t = a(e, s);
            this.docTypeEntities = t.entities, s = t.i;
          } else if ("![" === e.substr(s + 1, 2)) {
            const t = v(e, "]]>", s, "CDATA is not closed.") - 2,
              o = e.substring(s + 9, t);
            i = this.saveTextToParentTag(i, n, r);
            let a = this.parseTextData(o, n.tagname, r, !0, !1, !0, !0);
            null == a && (a = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [{
              [this.options.textNodeName]: o
            }]) : n.add(this.options.textNodeName, a), s = t + 2;
          } else {
            let a = y(e, s, this.options.removeNSPrefix),
              c = a.tagName;
            const l = a.rawTagName;
            let p = a.tagExp,
              u = a.attrExpPresent,
              d = a.closeIndex;
            this.options.transformTagName && (c = this.options.transformTagName(c)), n && i && "!xml" !== n.tagname && (i = this.saveTextToParentTag(i, n, r, !1));
            const f = n;
            if (f && -1 !== this.options.unpairedTags.indexOf(f.tagname) && (n = this.tagsNodeStack.pop(), r = r.substring(0, r.lastIndexOf("."))), c !== t.tagname && (r += r ? "." + c : c), this.isItStopNode(this.options.stopNodes, r, c)) {
              let t = "";
              if (p.length > 0 && p.lastIndexOf("/") === p.length - 1) "/" === c[c.length - 1] ? (c = c.substr(0, c.length - 1), r = r.substr(0, r.length - 1), p = c) : p = p.substr(0, p.length - 1), s = a.closeIndex;else if (-1 !== this.options.unpairedTags.indexOf(c)) s = a.closeIndex;else {
                const n = this.readStopNodeData(e, l, d + 1);
                if (!n) throw new Error(`Unexpected end of ${l}`);
                s = n.i, t = n.tagContent;
              }
              const i = new o(c);
              c !== p && u && (i[":@"] = this.buildAttributesMap(p, r, c)), t && (t = this.parseTextData(t, c, r, !0, u, !0, !0)), r = r.substr(0, r.lastIndexOf(".")), i.add(this.options.textNodeName, t), this.addChild(n, i, r);
            } else {
              if (p.length > 0 && p.lastIndexOf("/") === p.length - 1) {
                "/" === c[c.length - 1] ? (c = c.substr(0, c.length - 1), r = r.substr(0, r.length - 1), p = c) : p = p.substr(0, p.length - 1), this.options.transformTagName && (c = this.options.transformTagName(c));
                const e = new o(c);
                c !== p && u && (e[":@"] = this.buildAttributesMap(p, r, c)), this.addChild(n, e, r), r = r.substr(0, r.lastIndexOf("."));
              } else {
                const e = new o(c);
                this.tagsNodeStack.push(n), c !== p && u && (e[":@"] = this.buildAttributesMap(p, r, c)), this.addChild(n, e, r), n = e;
              }
              i = "", s = d;
            }
          }
        } else i += e[s];
      }
      return t.child;
    };
    function f(e, t, n) {
      const i = this.options.updateTag(t.tagname, n, t[":@"]);
      !1 === i || ("string" == typeof i ? (t.tagname = i, e.addChild(t)) : e.addChild(t));
    }
    const m = function (e) {
      if (this.options.processEntities) {
        for (let t in this.docTypeEntities) {
          const n = this.docTypeEntities[t];
          e = e.replace(n.regx, n.val);
        }
        for (let t in this.lastEntities) {
          const n = this.lastEntities[t];
          e = e.replace(n.regex, n.val);
        }
        if (this.options.htmlEntities) for (let t in this.htmlEntities) {
          const n = this.htmlEntities[t];
          e = e.replace(n.regex, n.val);
        }
        e = e.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return e;
    };
    function h(e, t, n, i) {
      return e && (void 0 === i && (i = 0 === Object.keys(t.child).length), void 0 !== (e = this.parseTextData(e, t.tagname, n, !1, !!t[":@"] && 0 !== Object.keys(t[":@"]).length, i)) && "" !== e && t.add(this.options.textNodeName, e), e = ""), e;
    }
    function g(e, t, n) {
      const i = "*." + n;
      for (const n in e) {
        const o = e[n];
        if (i === o || t === o) return !0;
      }
      return !1;
    }
    function v(e, t, n, i) {
      const o = e.indexOf(t, n);
      if (-1 === o) throw new Error(i);
      return o + t.length - 1;
    }
    function y(e, t, n, i = ">") {
      const o = function (e, t, n = ">") {
        let i,
          o = "";
        for (let a = t; a < e.length; a++) {
          let t = e[a];
          if (i) t === i && (i = "");else if ('"' === t || "'" === t) i = t;else if (t === n[0]) {
            if (!n[1]) return {
              data: o,
              index: a
            };
            if (e[a + 1] === n[1]) return {
              data: o,
              index: a
            };
          } else "\t" === t && (t = " ");
          o += t;
        }
      }(e, t + 1, i);
      if (!o) return;
      let a = o.data;
      const r = o.index,
        s = a.search(/\s/);
      let c = a,
        l = !0;
      -1 !== s && (c = a.substring(0, s), a = a.substring(s + 1).trimStart());
      const p = c;
      if (n) {
        const e = c.indexOf(":");
        -1 !== e && (c = c.substr(e + 1), l = c !== o.data.substr(e + 1));
      }
      return {
        tagName: c,
        tagExp: a,
        closeIndex: r,
        attrExpPresent: l,
        rawTagName: p
      };
    }
    function x(e, t, n) {
      const i = n;
      let o = 1;
      for (; n < e.length; n++) if ("<" === e[n]) if ("/" === e[n + 1]) {
        const a = v(e, ">", n, `${t} is not closed`);
        if (e.substring(n + 2, a).trim() === t && (o--, 0 === o)) return {
          tagContent: e.substring(i, n),
          i: a
        };
        n = a;
      } else if ("?" === e[n + 1]) {
        n = v(e, "?>", n + 1, "StopNode is not closed.");
      } else if ("!--" === e.substr(n + 1, 3)) {
        n = v(e, "--\x3e", n + 3, "StopNode is not closed.");
      } else if ("![" === e.substr(n + 1, 2)) {
        n = v(e, "]]>", n, "StopNode is not closed.") - 2;
      } else {
        const i = y(e, n, ">");
        if (i) {
          (i && i.tagName) === t && "/" !== i.tagExp[i.tagExp.length - 1] && o++, n = i.closeIndex;
        }
      }
    }
    function k(e, t, n) {
      if (t && "string" == typeof e) {
        const t = e.trim();
        return "true" === t || "false" !== t && r(e, n);
      }
      return i.isExist(e) ? e : "";
    }
    e.exports = class {
      constructor(e) {
        this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
          apos: {
            regex: /&(apos|#39|#x27);/g,
            val: "'"
          },
          gt: {
            regex: /&(gt|#62|#x3E);/g,
            val: ">"
          },
          lt: {
            regex: /&(lt|#60|#x3C);/g,
            val: "<"
          },
          quot: {
            regex: /&(quot|#34|#x22);/g,
            val: '"'
          }
        }, this.ampEntity = {
          regex: /&(amp|#38|#x26);/g,
          val: "&"
        }, this.htmlEntities = {
          space: {
            regex: /&(nbsp|#160);/g,
            val: " "
          },
          cent: {
            regex: /&(cent|#162);/g,
            val: "¢"
          },
          pound: {
            regex: /&(pound|#163);/g,
            val: "£"
          },
          yen: {
            regex: /&(yen|#165);/g,
            val: "¥"
          },
          euro: {
            regex: /&(euro|#8364);/g,
            val: "€"
          },
          copyright: {
            regex: /&(copy|#169);/g,
            val: "©"
          },
          reg: {
            regex: /&(reg|#174);/g,
            val: "®"
          },
          inr: {
            regex: /&(inr|#8377);/g,
            val: "₹"
          },
          num_dec: {
            regex: /&#([0-9]{1,7});/g,
            val: (e, t) => String.fromCharCode(Number.parseInt(t, 10))
          },
          num_hex: {
            regex: /&#x([0-9a-fA-F]{1,6});/g,
            val: (e, t) => String.fromCharCode(Number.parseInt(t, 16))
          }
        }, this.addExternalEntities = s, this.parseXml = d, this.parseTextData = c, this.resolveNameSpace = l, this.buildAttributesMap = u, this.isItStopNode = g, this.replaceEntitiesValue = m, this.readStopNodeData = x, this.saveTextToParentTag = h, this.addChild = f;
      }
    };
  }, function (e, t, n) {
    "use strict";

    e.exports = class {
      constructor(e) {
        this.tagname = e, this.child = [], this[":@"] = {};
      }
      add(e, t) {
        "__proto__" === e && (e = "#__proto__"), this.child.push({
          [e]: t
        });
      }
      addChild(e) {
        "__proto__" === e.tagname && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
          [e.tagname]: e.child,
          ":@": e[":@"]
        }) : this.child.push({
          [e.tagname]: e.child
        });
      }
    };
  }, function (e, t, n) {
    const i = n(1);
    function o(e, t) {
      let n = "";
      for (; t < e.length && "'" !== e[t] && '"' !== e[t]; t++) n += e[t];
      if (n = n.trim(), -1 !== n.indexOf(" ")) throw new Error("External entites are not supported");
      const i = e[t++];
      let o = "";
      for (; t < e.length && e[t] !== i; t++) o += e[t];
      return [n, o, t];
    }
    function a(e, t) {
      return "!" === e[t + 1] && "-" === e[t + 2] && "-" === e[t + 3];
    }
    function r(e, t) {
      return "!" === e[t + 1] && "E" === e[t + 2] && "N" === e[t + 3] && "T" === e[t + 4] && "I" === e[t + 5] && "T" === e[t + 6] && "Y" === e[t + 7];
    }
    function s(e, t) {
      return "!" === e[t + 1] && "E" === e[t + 2] && "L" === e[t + 3] && "E" === e[t + 4] && "M" === e[t + 5] && "E" === e[t + 6] && "N" === e[t + 7] && "T" === e[t + 8];
    }
    function c(e, t) {
      return "!" === e[t + 1] && "A" === e[t + 2] && "T" === e[t + 3] && "T" === e[t + 4] && "L" === e[t + 5] && "I" === e[t + 6] && "S" === e[t + 7] && "T" === e[t + 8];
    }
    function l(e, t) {
      return "!" === e[t + 1] && "N" === e[t + 2] && "O" === e[t + 3] && "T" === e[t + 4] && "A" === e[t + 5] && "T" === e[t + 6] && "I" === e[t + 7] && "O" === e[t + 8] && "N" === e[t + 9];
    }
    function p(e) {
      if (i.isName(e)) return e;
      throw new Error(`Invalid entity name ${e}`);
    }
    e.exports = function (e, t) {
      const n = {};
      if ("O" !== e[t + 3] || "C" !== e[t + 4] || "T" !== e[t + 5] || "Y" !== e[t + 6] || "P" !== e[t + 7] || "E" !== e[t + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
      {
        t += 9;
        let i = 1,
          u = !1,
          d = !1,
          f = "";
        for (; t < e.length; t++) if ("<" !== e[t] || d) {
          if (">" === e[t]) {
            if (d ? "-" === e[t - 1] && "-" === e[t - 2] && (d = !1, i--) : i--, 0 === i) break;
          } else "[" === e[t] ? u = !0 : f += e[t];
        } else {
          if (u && r(e, t)) t += 7, [entityName, val, t] = o(e, t + 1), -1 === val.indexOf("&") && (n[p(entityName)] = {
            regx: RegExp(`&${entityName};`, "g"),
            val: val
          });else if (u && s(e, t)) t += 8;else if (u && c(e, t)) t += 8;else if (u && l(e, t)) t += 9;else {
            if (!a) throw new Error("Invalid DOCTYPE");
            d = !0;
          }
          i++, f = "";
        }
        if (0 !== i) throw new Error("Unclosed DOCTYPE");
      }
      return {
        entities: n,
        i: t
      };
    };
  }, function (e, t) {
    const n = /^[-+]?0x[a-fA-F0-9]+$/,
      i = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
    const o = {
      hex: !0,
      leadingZeros: !0,
      decimalPoint: ".",
      eNotation: !0
    };
    e.exports = function (e, t = {}) {
      if (t = Object.assign({}, o, t), !e || "string" != typeof e) return e;
      let a = e.trim();
      if (void 0 !== t.skipLike && t.skipLike.test(a)) return e;
      if (t.hex && n.test(a)) return Number.parseInt(a, 16);
      {
        const n = i.exec(a);
        if (n) {
          const i = n[1],
            o = n[2];
          let r = function (e) {
            if (e && -1 !== e.indexOf(".")) return "." === (e = e.replace(/0+$/, "")) ? e = "0" : "." === e[0] ? e = "0" + e : "." === e[e.length - 1] && (e = e.substr(0, e.length - 1)), e;
            return e;
          }(n[3]);
          const s = n[4] || n[6];
          if (!t.leadingZeros && o.length > 0 && i && "." !== a[2]) return e;
          if (!t.leadingZeros && o.length > 0 && !i && "." !== a[1]) return e;
          {
            const n = Number(a),
              c = "" + n;
            return -1 !== c.search(/[eE]/) || s ? t.eNotation ? n : e : -1 !== a.indexOf(".") ? "0" === c && "" === r || c === r || i && c === "-" + r ? n : e : o ? r === c || i + r === c ? n : e : a === c || a === i + c ? n : e;
          }
        }
        return e;
      }
    };
  }, function (e, t, n) {
    "use strict";

    function i(e, t, n) {
      let s;
      const c = {};
      for (let l = 0; l < e.length; l++) {
        const p = e[l],
          u = o(p);
        let d = "";
        if (d = void 0 === n ? u : n + "." + u, u === t.textNodeName) void 0 === s ? s = p[u] : s += "" + p[u];else {
          if (void 0 === u) continue;
          if (p[u]) {
            let e = i(p[u], t, d);
            const n = r(e, t);
            p[":@"] ? a(e, p[":@"], d, t) : 1 !== Object.keys(e).length || void 0 === e[t.textNodeName] || t.alwaysCreateTextNode ? 0 === Object.keys(e).length && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = "") : e = e[t.textNodeName], void 0 !== c[u] && c.hasOwnProperty(u) ? (Array.isArray(c[u]) || (c[u] = [c[u]]), c[u].push(e)) : t.isArray(u, d, n) ? c[u] = [e] : c[u] = e;
          }
        }
      }
      return "string" == typeof s ? s.length > 0 && (c[t.textNodeName] = s) : void 0 !== s && (c[t.textNodeName] = s), c;
    }
    function o(e) {
      const t = Object.keys(e);
      for (let e = 0; e < t.length; e++) {
        const n = t[e];
        if (":@" !== n) return n;
      }
    }
    function a(e, t, n, i) {
      if (t) {
        const o = Object.keys(t),
          a = o.length;
        for (let r = 0; r < a; r++) {
          const a = o[r];
          i.isArray(a, n + "." + a, !0, !0) ? e[a] = [t[a]] : e[a] = t[a];
        }
      }
    }
    function r(e, t) {
      const {
          textNodeName: n
        } = t,
        i = Object.keys(e).length;
      return 0 === i || !(1 !== i || !e[n] && "boolean" != typeof e[n] && 0 !== e[n]);
    }
    t.prettify = function (e, t) {
      return i(e, t);
    };
  }, function (e, t, n) {
    "use strict";

    const i = n(23),
      o = {
        attributeNamePrefix: "@_",
        attributesGroupName: !1,
        textNodeName: "#text",
        ignoreAttributes: !0,
        cdataPropName: !1,
        format: !1,
        indentBy: "  ",
        suppressEmptyNode: !1,
        suppressUnpairedNode: !0,
        suppressBooleanAttributes: !0,
        tagValueProcessor: function (e, t) {
          return t;
        },
        attributeValueProcessor: function (e, t) {
          return t;
        },
        preserveOrder: !1,
        commentPropName: !1,
        unpairedTags: [],
        entities: [{
          regex: new RegExp("&", "g"),
          val: "&amp;"
        }, {
          regex: new RegExp(">", "g"),
          val: "&gt;"
        }, {
          regex: new RegExp("<", "g"),
          val: "&lt;"
        }, {
          regex: new RegExp("'", "g"),
          val: "&apos;"
        }, {
          regex: new RegExp('"', "g"),
          val: "&quot;"
        }],
        processEntities: !0,
        stopNodes: [],
        oneListGroup: !1
      };
    function a(e) {
      this.options = Object.assign({}, o, e), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function () {
        return !1;
      } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = c), this.processTextOrObjNode = r, this.options.format ? (this.indentate = s, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function () {
        return "";
      }, this.tagEndChar = ">", this.newLine = "");
    }
    function r(e, t, n) {
      const i = this.j2x(e, n + 1);
      return void 0 !== e[this.options.textNodeName] && 1 === Object.keys(e).length ? this.buildTextValNode(e[this.options.textNodeName], t, i.attrStr, n) : this.buildObjectNode(i.val, t, i.attrStr, n);
    }
    function s(e) {
      return this.options.indentBy.repeat(e);
    }
    function c(e) {
      return !(!e.startsWith(this.options.attributeNamePrefix) || e === this.options.textNodeName) && e.substr(this.attrPrefixLen);
    }
    a.prototype.build = function (e) {
      return this.options.preserveOrder ? i(e, this.options) : (Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = {
        [this.options.arrayNodeName]: e
      }), this.j2x(e, 0).val);
    }, a.prototype.j2x = function (e, t) {
      let n = "",
        i = "";
      for (let o in e) if (Object.prototype.hasOwnProperty.call(e, o)) if (void 0 === e[o]) this.isAttribute(o) && (i += "");else if (null === e[o]) this.isAttribute(o) ? i += "" : "?" === o[0] ? i += this.indentate(t) + "<" + o + "?" + this.tagEndChar : i += this.indentate(t) + "<" + o + "/" + this.tagEndChar;else if (e[o] instanceof Date) i += this.buildTextValNode(e[o], o, "", t);else if ("object" != typeof e[o]) {
        const a = this.isAttribute(o);
        if (a) n += this.buildAttrPairStr(a, "" + e[o]);else if (o === this.options.textNodeName) {
          let t = this.options.tagValueProcessor(o, "" + e[o]);
          i += this.replaceEntitiesValue(t);
        } else i += this.buildTextValNode(e[o], o, "", t);
      } else if (Array.isArray(e[o])) {
        const n = e[o].length;
        let a = "";
        for (let r = 0; r < n; r++) {
          const n = e[o][r];
          void 0 === n || (null === n ? "?" === o[0] ? i += this.indentate(t) + "<" + o + "?" + this.tagEndChar : i += this.indentate(t) + "<" + o + "/" + this.tagEndChar : "object" == typeof n ? this.options.oneListGroup ? a += this.j2x(n, t + 1).val : a += this.processTextOrObjNode(n, o, t) : a += this.buildTextValNode(n, o, "", t));
        }
        this.options.oneListGroup && (a = this.buildObjectNode(a, o, "", t)), i += a;
      } else if (this.options.attributesGroupName && o === this.options.attributesGroupName) {
        const t = Object.keys(e[o]),
          i = t.length;
        for (let a = 0; a < i; a++) n += this.buildAttrPairStr(t[a], "" + e[o][t[a]]);
      } else i += this.processTextOrObjNode(e[o], o, t);
      return {
        attrStr: n,
        val: i
      };
    }, a.prototype.buildAttrPairStr = function (e, t) {
      return t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t), this.options.suppressBooleanAttributes && "true" === t ? " " + e : " " + e + '="' + t + '"';
    }, a.prototype.buildObjectNode = function (e, t, n, i) {
      if ("" === e) return "?" === t[0] ? this.indentate(i) + "<" + t + n + "?" + this.tagEndChar : this.indentate(i) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
      {
        let o = "</" + t + this.tagEndChar,
          a = "";
        return "?" === t[0] && (a = "?", o = ""), !n && "" !== n || -1 !== e.indexOf("<") ? !1 !== this.options.commentPropName && t === this.options.commentPropName && 0 === a.length ? this.indentate(i) + `\x3c!--${e}--\x3e` + this.newLine : this.indentate(i) + "<" + t + n + a + this.tagEndChar + e + this.indentate(i) + o : this.indentate(i) + "<" + t + n + a + ">" + e + o;
      }
    }, a.prototype.closeTag = function (e) {
      let t = "";
      return -1 !== this.options.unpairedTags.indexOf(e) ? this.options.suppressUnpairedNode || (t = "/") : t = this.options.suppressEmptyNode ? "/" : `></${e}`, t;
    }, a.prototype.buildTextValNode = function (e, t, n, i) {
      if (!1 !== this.options.cdataPropName && t === this.options.cdataPropName) return this.indentate(i) + `<![CDATA[${e}]]>` + this.newLine;
      if (!1 !== this.options.commentPropName && t === this.options.commentPropName) return this.indentate(i) + `\x3c!--${e}--\x3e` + this.newLine;
      if ("?" === t[0]) return this.indentate(i) + "<" + t + n + "?" + this.tagEndChar;
      {
        let o = this.options.tagValueProcessor(t, e);
        return o = this.replaceEntitiesValue(o), "" === o ? this.indentate(i) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(i) + "<" + t + n + ">" + o + "</" + t + this.tagEndChar;
      }
    }, a.prototype.replaceEntitiesValue = function (e) {
      if (e && e.length > 0 && this.options.processEntities) for (let t = 0; t < this.options.entities.length; t++) {
        const n = this.options.entities[t];
        e = e.replace(n.regex, n.val);
      }
      return e;
    }, e.exports = a;
  }, function (e, t) {
    function n(e, t, s, c) {
      let l = "",
        p = !1;
      for (let u = 0; u < e.length; u++) {
        const d = e[u],
          f = i(d);
        if (void 0 === f) continue;
        let m = "";
        if (m = 0 === s.length ? f : `${s}.${f}`, f === t.textNodeName) {
          let e = d[f];
          a(m, t) || (e = t.tagValueProcessor(f, e), e = r(e, t)), p && (l += c), l += e, p = !1;
          continue;
        }
        if (f === t.cdataPropName) {
          p && (l += c), l += `<![CDATA[${d[f][0][t.textNodeName]}]]>`, p = !1;
          continue;
        }
        if (f === t.commentPropName) {
          l += c + `\x3c!--${d[f][0][t.textNodeName]}--\x3e`, p = !0;
          continue;
        }
        if ("?" === f[0]) {
          const e = o(d[":@"], t),
            n = "?xml" === f ? "" : c;
          let i = d[f][0][t.textNodeName];
          i = 0 !== i.length ? " " + i : "", l += n + `<${f}${i}${e}?>`, p = !0;
          continue;
        }
        let h = c;
        "" !== h && (h += t.indentBy);
        const g = c + `<${f}${o(d[":@"], t)}`,
          v = n(d[f], t, m, h);
        -1 !== t.unpairedTags.indexOf(f) ? t.suppressUnpairedNode ? l += g + ">" : l += g + "/>" : v && 0 !== v.length || !t.suppressEmptyNode ? v && v.endsWith(">") ? l += g + `>${v}${c}</${f}>` : (l += g + ">", v && "" !== c && (v.includes("/>") || v.includes("</")) ? l += c + t.indentBy + v + c : l += v, l += `</${f}>`) : l += g + "/>", p = !0;
      }
      return l;
    }
    function i(e) {
      const t = Object.keys(e);
      for (let n = 0; n < t.length; n++) {
        const i = t[n];
        if (e.hasOwnProperty(i) && ":@" !== i) return i;
      }
    }
    function o(e, t) {
      let n = "";
      if (e && !t.ignoreAttributes) for (let i in e) {
        if (!e.hasOwnProperty(i)) continue;
        let o = t.attributeValueProcessor(i, e[i]);
        o = r(o, t), !0 === o && t.suppressBooleanAttributes ? n += ` ${i.substr(t.attributeNamePrefix.length)}` : n += ` ${i.substr(t.attributeNamePrefix.length)}="${o}"`;
      }
      return n;
    }
    function a(e, t) {
      let n = (e = e.substr(0, e.length - t.textNodeName.length - 1)).substr(e.lastIndexOf(".") + 1);
      for (let i in t.stopNodes) if (t.stopNodes[i] === e || t.stopNodes[i] === "*." + n) return !0;
      return !1;
    }
    function r(e, t) {
      if (e && e.length > 0 && t.processEntities) for (let n = 0; n < t.entities.length; n++) {
        const i = t.entities[n];
        e = e.replace(i.regex, i.val);
      }
      return e;
    }
    e.exports = function (e, t) {
      let i = "";
      return t.format && t.indentBy.length > 0 && (i = "\n"), n(e, t, "", i);
    };
  }, function (e, t, n) {
    var i = n(6),
      o = n(0),
      a = {};
    e.exports.transferToTaskMethod = function (e, t) {
      a[t] = e[t], e[t] = function (e, n) {
        e.SkipTask ? a[t].call(this, e, n) : this._addTask(t, e, n);
      };
    }, e.exports.init = function (e) {
      var t,
        n,
        r = [],
        s = {},
        c = 0,
        l = 0,
        p = function (e) {
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
        u = (n = function () {
          t = 0, e.emit("task-list-update", {
            list: o.map(r, p)
          }), e.emit("list-update", {
            list: o.map(r, p)
          });
        }, function () {
          t || (t = setTimeout(n));
        }),
        d = function () {
          if (!(r.length <= e.options.UploadQueueSize)) {
            for (var t = 0; t < l && t < r.length && r.length > e.options.UploadQueueSize;) {
              var n = "waiting" === r[t].state || "checking" === r[t].state || "uploading" === r[t].state;
              r[t] && n ? t++ : (s[r[t].id] && delete s[r[t].id], r.splice(t, 1), l--);
            }
            u();
          }
        },
        f = function t() {
          if (!(c >= e.options.FileParallelLimit)) {
            for (; r[l] && "waiting" !== r[l].state;) l++;
            if (!(l >= r.length)) {
              var n = r[l];
              l++, c++, n.state = "checking", n.params.onTaskStart && n.params.onTaskStart(p(n)), !n.params.UploadData && (n.params.UploadData = {});
              var i = o.formatParams(n.api, n.params);
              a[n.api].call(e, i, function (i, o) {
                e._isRunningTask(n.id) && ("checking" !== n.state && "uploading" !== n.state || (n.state = i ? "error" : "success", i && (n.error = i), c--, u(), t(), n.callback && n.callback(i, o), "success" === n.state && (n.params && (delete n.params.UploadData, delete n.params.Body, delete n.params), delete n.callback)), d());
              }), u(), setTimeout(t);
            }
          }
        },
        m = function (t, n) {
          var o = s[t];
          if (o) {
            var a = o && "waiting" === o.state,
              r = o && ("checking" === o.state || "uploading" === o.state);
            if ("canceled" === n && "canceled" !== o.state || "paused" === n && a || "paused" === n && r) {
              if ("paused" === n && o.params.Body && "function" == typeof o.params.Body.pipe) return;
              o.state = n, e.emit("inner-kill-task", {
                TaskId: t,
                toState: n
              });
              try {
                var l = o && o.params && o.params.UploadData.UploadId;
              } catch (e) {}
              "canceled" === n && l && i.removeUsing(l), u(), r && (c--, f()), "canceled" === n && (o.params && (delete o.params.UploadData, delete o.params.Body, delete o.params), delete o.callback);
            }
            d();
          }
        };
      e._addTasks = function (t) {
        o.each(t, function (t) {
          e._addTask(t.api, t.params, t.callback, !0);
        }), u();
      }, e._addTask = function (t, n, i, a) {
        var c = "postObject" === e.options.SimpleUploadMethod ? "postObject" : "putObject";
        "sliceUploadFile" !== t || o.canFileSlice() || (t = c), n = o.formatParams(t, n);
        var l = o.uuid();
        n.TaskId = l, n.onTaskReady && n.onTaskReady(l);
        var p = {
            params: n,
            callback: i,
            api: t,
            index: r.length,
            id: l,
            Bucket: n.Bucket,
            Region: n.Region,
            Key: n.Key,
            FilePath: n.FilePath || "",
            state: "waiting",
            loaded: 0,
            size: 0,
            speed: 0,
            percent: 0,
            hashPercent: 0,
            error: null
          },
          m = n.onHashProgress;
        n.onHashProgress = function (t) {
          e._isRunningTask(p.id) && (p.hashPercent = t.percent, m && m(t), u());
        };
        var h = n.onProgress;
        return n.onProgress = function (t) {
          e._isRunningTask(p.id) && ("checking" === p.state && (p.state = "uploading"), p.loaded = t.loaded, p.size = t.total, p.speed = t.speed, p.percent = t.percent, h && h(t), u());
        }, o.getFileSize(t, n, function (e, t) {
          e ? i(e) : (s[l] = p, r.push(p), p.size = t, !a && u(), f(), d());
        }), l;
      }, e._isRunningTask = function (e) {
        var t = s[e];
        return !(!t || "checking" !== t.state && "uploading" !== t.state);
      }, e.getTaskList = function () {
        return o.map(r, p);
      }, e.cancelTask = function (e) {
        m(e, "canceled");
      }, e.pauseTask = function (e) {
        m(e, "paused");
      }, e.restartTask = function (e) {
        var t = s[e];
        !t || "paused" !== t.state && "error" !== t.state || (t.state = "waiting", u(), l = Math.min(l, t.index), f());
      }, e.isUploadRunning = function () {
        return c || l < r.length;
      };
    };
  }, function (e, t, n) {
    "use strict";

    var i = n(26),
      o = n(0),
      a = n(27);
    function r(e) {
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
        i = (e && e.AccessControlList || {}).Grant;
      i && (i = o.isArray(i) ? i : [i]);
      var a = {
        READ: 0,
        WRITE: 0,
        FULL_CONTROL: 0
      };
      return i && i.length && o.each(i, function (i) {
        "qcs::cam::anyone:anyone" === i.Grantee.ID || "http://cam.qcloud.com/groups/global/AllUsers" === i.Grantee.URI ? a[i.Permission] = 1 : i.Grantee.ID !== e.Owner.ID && t[n[i.Permission]].push('id="' + i.Grantee.ID + '"');
      }), a.FULL_CONTROL || a.WRITE && a.READ ? t.ACL = "public-read-write" : a.READ ? t.ACL = "public-read" : t.ACL = "private", o.each(n, function (e) {
        t[e] = s(t[e].join(","));
      }), t;
    }
    function s(e) {
      var t,
        n,
        i = e.split(","),
        o = {};
      for (t = 0; t < i.length;) o[n = i[t].trim()] ? i.splice(t, 1) : (o[n] = !0, i[t] = n, t++);
      return i.join(",");
    }
    function c(e) {
      var t = e.bucket,
        n = t.substr(0, t.lastIndexOf("-")),
        i = t.substr(t.lastIndexOf("-") + 1),
        a = e.domain,
        r = e.region,
        s = e.object;
      a || (a = ["cn-south", "cn-south-2", "cn-north", "cn-east", "cn-southwest", "sg"].indexOf(r) > -1 ? "{Region}.myqcloud.com" : "cos.{Region}.myqcloud.com", e.ForcePathStyle || (a = "{Bucket}." + a)), a = (a = a.replace(/\{\{AppId\}\}/gi, i).replace(/\{\{Bucket\}\}/gi, n).replace(/\{\{Region\}\}/gi, r).replace(/\{\{.*?\}\}/gi, "")).replace(/\{AppId\}/gi, i).replace(/\{BucketName\}/gi, n).replace(/\{Bucket\}/gi, t).replace(/\{Region\}/gi, r).replace(/\{.*?\}/gi, ""), /^[a-zA-Z]+:\/\//.test(a) || (a = "https://" + a), "/" === a.slice(-1) && (a = a.slice(0, -1));
      var c = a;
      return e.ForcePathStyle && (c += "/" + t), c += "/", s && (c += o.camSafeUrlEncode(s).replace(/%2F/g, "/")), e.isLocation && (c = c.replace(/^https?:\/\//, "")), c;
    }
    var l = function (e) {
      if (!e.Bucket || !e.Region) return "";
      var t = void 0 === e.UseAccelerate ? this.options.UseAccelerate : e.UseAccelerate;
      return (e.Url || c({
        ForcePathStyle: this.options.ForcePathStyle,
        protocol: this.options.Protocol,
        domain: this.options.Domain,
        bucket: e.Bucket,
        region: t ? "accelerate" : e.Region
      })).replace(/^https?:\/\/([^/]+)(\/.*)?$/, "$1");
    };
    function p(e, t) {
      var n = o.clone(e.Headers),
        i = "";
      o.each(n, function (e, t) {
        ("" === e || ["content-type", "cache-control"].indexOf(t.toLowerCase()) > -1) && delete n[t], "host" === t.toLowerCase() && (i = e);
      });
      var a = !1 !== e.ForceSignHost;
      !i && e.SignHost && a && (n.Host = e.SignHost);
      var r = !1,
        s = function (e, n) {
          r || (r = !0, n && n.XCosSecurityToken && !n.SecurityToken && ((n = o.clone(n)).SecurityToken = n.XCosSecurityToken, delete n.XCosSecurityToken), t && t(e, n));
        },
        c = this,
        l = e.Bucket || "",
        p = e.Region || "",
        u = "name/cos:PostObject" !== e.Action && e.Key ? e.Key : "";
      c.options.ForcePathStyle && l && (u = l + "/" + u);
      var d = "/" + u,
        f = {},
        m = e.Scope;
      if (!m) {
        var h = e.Action || "",
          g = e.ResourceKey || e.Key || "";
        m = e.Scope || [{
          action: h,
          bucket: l,
          region: p,
          prefix: g
        }];
      }
      var v = o.md5(JSON.stringify(m));
      c._StsCache = c._StsCache || [], function () {
        var e, t;
        for (e = c._StsCache.length - 1; e >= 0; e--) {
          t = c._StsCache[e];
          var n = Math.round(o.getSkewTime(c.options.SystemClockOffset) / 1e3) + 30;
          if (t.StartTime && n < t.StartTime || n >= t.ExpiredTime) c._StsCache.splice(e, 1);else if (!t.ScopeLimit || t.ScopeLimit && t.ScopeKey === v) {
            f = t;
            break;
          }
        }
      }();
      var y = function () {
          var t = "";
          f.StartTime && e.Expires ? t = f.StartTime + ";" + (f.StartTime + 1 * e.Expires) : f.StartTime && f.ExpiredTime && (t = f.StartTime + ";" + f.ExpiredTime);
          var i = {
            Authorization: o.getAuth({
              SecretId: f.TmpSecretId,
              SecretKey: f.TmpSecretKey,
              Method: e.Method,
              Pathname: d,
              Query: e.Query,
              Headers: n,
              Expires: e.Expires,
              SystemClockOffset: c.options.SystemClockOffset,
              KeyTime: t,
              ForceSignHost: a
            }),
            SecurityToken: f.SecurityToken || f.XCosSecurityToken || "",
            Token: f.Token || "",
            ClientIP: f.ClientIP || "",
            ClientUA: f.ClientUA || "",
            SignFrom: "client"
          };
          s(null, i);
        },
        x = function (e) {
          if (e.Authorization) {
            var t = !1,
              n = e.Authorization;
            if (n) if (n.indexOf(" ") > -1) t = !1;else if (n.indexOf("q-sign-algorithm=") > -1 && n.indexOf("q-ak=") > -1 && n.indexOf("q-sign-time=") > -1 && n.indexOf("q-key-time=") > -1 && n.indexOf("q-url-param-list=") > -1) t = !0;else try {
              (n = atob(n)).indexOf("a=") > -1 && n.indexOf("k=") > -1 && n.indexOf("t=") > -1 && n.indexOf("r=") > -1 && n.indexOf("b=") > -1 && (t = !0);
            } catch (e) {}
            if (!t) return o.error(new Error("getAuthorization callback params format error"));
          } else {
            if (!e.TmpSecretId) return o.error(new Error('getAuthorization callback params missing "TmpSecretId"'));
            if (!e.TmpSecretKey) return o.error(new Error('getAuthorization callback params missing "TmpSecretKey"'));
            if (!e.SecurityToken && !e.XCosSecurityToken) return o.error(new Error('getAuthorization callback params missing "SecurityToken"'));
            if (!e.ExpiredTime) return o.error(new Error('getAuthorization callback params missing "ExpiredTime"'));
            if (e.ExpiredTime && 10 !== e.ExpiredTime.toString().length) return o.error(new Error('getAuthorization callback params "ExpiredTime" should be 10 digits'));
            if (e.StartTime && 10 !== e.StartTime.toString().length) return o.error(new Error('getAuthorization callback params "StartTime" should be 10 StartTime'));
          }
          return !1;
        };
      if (f.ExpiredTime && f.ExpiredTime - o.getSkewTime(c.options.SystemClockOffset) / 1e3 > 60) y();else if (c.options.getAuthorization) c.options.getAuthorization.call(c, {
        Bucket: l,
        Region: p,
        Method: e.Method,
        Key: u,
        Pathname: d,
        Query: e.Query,
        Headers: n,
        Scope: m,
        SystemClockOffset: c.options.SystemClockOffset,
        ForceSignHost: a
      }, function (e) {
        "string" == typeof e && (e = {
          Authorization: e
        });
        var t = x(e);
        if (t) return s(t);
        e.Authorization ? s(null, e) : ((f = e || {}).Scope = m, f.ScopeKey = v, c._StsCache.push(f), y());
      });else {
        if (!c.options.getSTS) return function () {
          var t = "";
          if (c.options.StartTime && e.Expires) {
            if (10 !== c.options.StartTime.toString().length) return s(o.error(new Error('params "StartTime" should be 10 digits')));
            t = c.options.StartTime + ";" + (c.options.StartTime + 1 * e.Expires);
          } else if (c.options.StartTime && c.options.ExpiredTime) {
            if (10 !== c.options.StartTime.toString().length) return s(o.error(new Error('params "StartTime" should be 10 digits')));
            if (10 !== c.options.ExpiredTime.toString().length) return s(o.error(new Error('params "ExpiredTime" should be 10 digits')));
            t = c.options.StartTime + ";" + 1 * c.options.ExpiredTime;
          }
          var i = {
            Authorization: o.getAuth({
              SecretId: e.SecretId || c.options.SecretId,
              SecretKey: e.SecretKey || c.options.SecretKey,
              Method: e.Method,
              Pathname: d,
              Query: e.Query,
              Headers: n,
              Expires: e.Expires,
              KeyTime: t,
              SystemClockOffset: c.options.SystemClockOffset,
              ForceSignHost: a
            }),
            SecurityToken: c.options.SecurityToken || c.options.XCosSecurityToken,
            SignFrom: "client"
          };
          return s(null, i), i;
        }();
        c.options.getSTS.call(c, {
          Bucket: l,
          Region: p
        }, function (e) {
          (f = e || {}).Scope = m, f.ScopeKey = v, f.TmpSecretId || (f.TmpSecretId = f.SecretId), f.TmpSecretKey || (f.TmpSecretKey = f.SecretKey);
          var t = x(f);
          if (t) return s(t);
          c._StsCache.push(f), y();
        });
      }
      return "";
    }
    function u(e) {
      var t = !1,
        n = !1,
        i = !1,
        a = e.headers && (e.headers.date || e.headers.Date) || e.error && e.error.ServerTime;
      try {
        var r = e.error.Code,
          s = e.error.Message;
        ("RequestTimeTooSkewed" === r || "AccessDenied" === r && "Request has expired" === s) && (i = !0);
      } catch (e) {}
      if (e) {
        if (i && a) {
          var c = Date.parse(a);
          this.options.CorrectClockSkew && Math.abs(o.getSkewTime(this.options.SystemClockOffset) - c) >= 3e4 && (this.options.SystemClockOffset = c - Date.now(), t = !0);
        } else 5 === Math.floor(e.statusCode / 100) && (t = !0);
        if (e.statusCode) {
          var l = Math.floor(e.statusCode / 100),
            p = (null == e ? void 0 : e.headers) && (null == e ? void 0 : e.headers["x-cos-request-id"]);
          [3, 4, 5].includes(l) && !p && (t = this.options.AutoSwitchHost, n = !0);
        } else t = this.options.AutoSwitchHost, n = !0;
      }
      return {
        canRetry: t,
        networkError: n
      };
    }
    function d(e) {
      var t = e.requestUrl,
        n = e.clientCalcSign,
        i = e.networkError;
      if (!this.options.AutoSwitchHost) return !1;
      if (!t) return !1;
      if (!n) return !1;
      if (!i) return !1;
      return /^https?:\/\/[^\/]*\.cos\.[^\/]*\.myqcloud\.com(\/.*)?$/.test(t) && !/^https?:\/\/[^\/]*\.cos\.accelerate\.myqcloud\.com(\/.*)?$/.test(t);
    }
    function f(e, t) {
      var n = this;
      !e.headers && (e.headers = {}), !e.qs && (e.qs = {}), e.VersionId && (e.qs.versionId = e.VersionId), e.qs = o.clearKey(e.qs), e.headers && (e.headers = o.clearKey(e.headers)), e.qs && (e.qs = o.clearKey(e.qs));
      var i = o.clone(e.qs);
      e.action && (i[e.action] = "");
      var a = e.url || e.Url,
        r = e.SignHost || l.call(this, {
          Bucket: e.Bucket,
          Region: e.Region,
          Url: a
        }),
        s = e.tracker;
      !function o(a) {
        var c = n.options.SystemClockOffset;
        e.SwitchHost && (r = r.replace(/myqcloud.com/, "tencentcos.cn")), s && s.setParams({
          signStartTime: new Date().getTime(),
          httpRetryTimes: a - 1
        }), p.call(n, {
          Bucket: e.Bucket || "",
          Region: e.Region || "",
          Method: e.method,
          Key: e.Key,
          Query: i,
          Headers: e.headers,
          SignHost: r,
          Action: e.Action,
          ResourceKey: e.ResourceKey,
          Scope: e.Scope,
          ForceSignHost: n.options.ForceSignHost
        }, function (i, r) {
          i ? t(i) : (s && s.setParams({
            signEndTime: new Date().getTime(),
            httpStartTime: new Date().getTime()
          }), e.AuthData = r, m.call(n, e, function (i, l) {
            var p = !1,
              f = !1;
            if (i) {
              var m = u.call(n, i);
              p = m.canRetry || c !== n.options.SystemClockOffset, f = m.networkError;
            }
            if (s && s.setParams({
              httpEndTime: new Date().getTime()
            }), i && a < 2 && p) {
              e.headers && (delete e.headers.Authorization, delete e.headers.token, delete e.headers.clientIP, delete e.headers.clientUA, e.headers["x-cos-security-token"] && delete e.headers["x-cos-security-token"], e.headers["x-ci-security-token"] && delete e.headers["x-ci-security-token"]);
              var h = d.call(n, {
                requestUrl: (null == i ? void 0 : i.url) || "",
                clientCalcSign: "client" === (null == r ? void 0 : r.SignFrom),
                networkError: f
              });
              e.SwitchHost = h, e.retry = !0, o(a + 1);
            } else t(i, l);
          }));
        });
      }(1);
    }
    function m(e, t) {
      var n = this,
        a = e.TaskId;
      if (!a || n._isRunningTask(a)) {
        var r = e.Bucket,
          s = e.Region,
          l = e.Key,
          p = e.method || "GET",
          u = e.url || e.Url,
          d = e.body,
          f = e.json,
          m = e.rawBody,
          h = e.dataType,
          g = n.options.HttpDNSServiceId;
        n.options.UseAccelerate && (s = "accelerate"), u = u || c({
          ForcePathStyle: n.options.ForcePathStyle,
          protocol: n.options.Protocol,
          domain: n.options.Domain,
          bucket: r,
          region: s,
          object: l
        }), e.SwitchHost && (u = u.replace(/myqcloud.com/, "tencentcos.cn"));
        var v = l ? u : "";
        e.action && (u = u + "?" + e.action), e.qsStr && (u = u.indexOf("?") > -1 ? u + "&" + e.qsStr : u + "?" + e.qsStr);
        var y = {
            method: p,
            url: u,
            headers: e.headers,
            qs: e.qs,
            filePath: e.filePath,
            body: d,
            json: f,
            httpDNSServiceId: g,
            dataType: h
          },
          x = "x-cos-security-token";
        o.isCIHost(u) && (x = "x-ci-security-token"), y.headers.Authorization = e.AuthData.Authorization, e.AuthData.Token && (y.headers.token = e.AuthData.Token), e.AuthData.ClientIP && (y.headers.clientIP = e.AuthData.ClientIP), e.AuthData.ClientUA && (y.headers.clientUA = e.AuthData.ClientUA), e.AuthData.SecurityToken && (y.headers[x] = e.AuthData.SecurityToken), y.headers && (y.headers = o.clearKey(y.headers)), e.retry && (y.headers["x-cos-sdk-retry"] = !0), y = o.clearKey(y), e.onProgress && "function" == typeof e.onProgress && (y.onProgress = function (t) {
          if (!a || n._isRunningTask(a)) {
            var i = t ? t.loaded : 0;
            e.onProgress({
              loaded: i,
              total: t.total
            });
          }
        }), this.options.Timeout && (y.timeout = this.options.Timeout), n.options.ForcePathStyle && (y.pathStyle = n.options.ForcePathStyle), n.emit("before-send", y);
        var k,
          b = y.url.includes("accelerate."),
          C = y.qs ? Object.keys(y.qs).map(function (e) {
            return "".concat(e, "=").concat(y.qs[e]);
          }).join("&") : "",
          S = C ? y.url + "?" + C : y.url;
        if (e.tracker) e.tracker.setParams({
          url: S,
          httpMethod: y.method,
          accelerate: b,
          httpSize: (null === (k = y.body) || void 0 === k ? void 0 : k.size) || 0
        }), e.tracker.parent && !e.tracker.parent.params.url && e.tracker.parent.setParams({
          url: v,
          accelerate: b
        });
        var w = i(y, function (e, i, r) {
            if ("abort" !== e) {
              var s,
                c = function (e, r) {
                  if (a && n.off("inner-kill-task", T), !s) {
                    s = !0;
                    var c = {};
                    i && i.statusCode && (c.statusCode = i.statusCode), i && i.headers && (c.headers = i.headers), e ? (y.url && (c.url = y.url), y.method && (c.method = y.method), e = o.extend(e || {}, c), t(e, null)) : (r = o.extend(r || {}, c), t(null, r)), w = null;
                  }
                };
              if (e) c({
                error: e
              });else {
                var l = i.statusCode,
                  p = 2 === Math.floor(l / 100);
                if (m) {
                  if (p) return c(null, {
                    body: r
                  });
                  if (r instanceof ArrayBuffer) {
                    var u = o.arrayBufferToString(r),
                      d = o.parseResBody(u);
                    return c({
                      error: d.Error || d
                    });
                  }
                }
                var f = o.parseResBody(r);
                p ? f.Error ? c({
                  error: f.Error
                }) : c(null, f) : c({
                  error: f.Error || f
                });
              }
            }
          }),
          T = function e(t) {
            t.TaskId === a && (w && w.abort && w.abort(), n.off("inner-kill-task", e));
          };
        a && n.on("inner-kill-task", T);
      }
    }
    var h = {
      getService: function (e, t) {
        "function" == typeof e && (t = e, e = {});
        var n = "https:",
          i = this.options.ServiceDomain,
          a = e.Region;
        i ? (i = i.replace(/\{\{Region\}\}/gi, a || "").replace(/\{\{.*?\}\}/gi, ""), /^[a-zA-Z]+:\/\//.test(i) || (i = n + "//" + i), "/" === i.slice(-1) && (i = i.slice(0, -1))) : i = a ? n + "//cos." + a + ".myqcloud.com" : n + "//service.cos.myqcloud.com";
        i.replace(/^https?:\/\/([^/]+)(\/.*)?$/, "$1"), f.call(this, {
          Action: "name/cos:GetService",
          url: i,
          method: "GET",
          headers: e.Headers,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Buckets && n.ListAllMyBucketsResult.Buckets.Bucket || [];
          i = o.isArray(i) ? i : [i];
          var a = n && n.ListAllMyBucketsResult && n.ListAllMyBucketsResult.Owner || {};
          t(null, {
            Buckets: i,
            Owner: a,
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucket: function (e, t) {
        var n = this,
          i = "";
        if (e.BucketAZConfig) {
          var a = {
            BucketAZConfig: e.BucketAZConfig
          };
          i = o.json2xml({
            CreateBucketConfiguration: a
          });
        }
        f.call(this, {
          Action: "name/cos:PutBucket",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          body: i,
          tracker: e.tracker
        }, function (i, o) {
          if (i) return t(i);
          var a = c({
            protocol: n.options.Protocol,
            domain: n.options.Domain,
            bucket: e.Bucket,
            region: e.Region,
            isLocation: !0
          });
          t(null, {
            Location: a,
            statusCode: o.statusCode,
            headers: o.headers
          });
        });
      },
      headBucket: function (e, t) {
        f.call(this, {
          Action: "name/cos:HeadBucket",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          method: "HEAD",
          tracker: e.tracker
        }, function (e, n) {
          t(e, n);
        });
      },
      getBucket: function (e, t) {
        var n = {};
        n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n.marker = e.Marker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, f.call(this, {
          Action: "name/cos:GetBucket",
          ResourceKey: n.prefix,
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          qs: n,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = n.ListBucketResult || {},
            a = i.Contents || [],
            r = i.CommonPrefixes || [];
          a = o.isArray(a) ? a : [a], r = o.isArray(r) ? r : [r];
          var s = o.clone(i);
          o.extend(s, {
            Contents: a,
            CommonPrefixes: r,
            statusCode: n.statusCode,
            headers: n.headers
          }), t(null, s);
        });
      },
      deleteBucket: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucket",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          method: "DELETE",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketAcl: function (e, t) {
        var n = e.Headers,
          i = "";
        if (e.AccessControlPolicy) {
          var a = o.clone(e.AccessControlPolicy || {}),
            r = a.Grants || a.Grant;
          r = o.isArray(r) ? r : [r], delete a.Grant, delete a.Grants, a.AccessControlList = {
            Grant: r
          }, i = o.json2xml({
            AccessControlPolicy: a
          }), n["Content-Type"] = "application/xml", n["Content-MD5"] = o.binaryBase64(o.md5(i));
        }
        o.each(n, function (e, t) {
          0 === t.indexOf("x-cos-grant-") && (n[t] = s(n[t]));
        }), f.call(this, {
          Action: "name/cos:PutBucketACL",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: n,
          action: "acl",
          body: i,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketAcl: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketACL",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "acl",
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = n.AccessControlPolicy || {},
            a = i.Owner || {},
            s = i.AccessControlList.Grant || [];
          s = o.isArray(s) ? s : [s];
          var c = r(i);
          n.headers && n.headers["x-cos-acl"] && (c.ACL = n.headers["x-cos-acl"]), c = o.extend(c, {
            Owner: a,
            Grants: s,
            statusCode: n.statusCode,
            headers: n.headers
          }), t(null, c);
        });
      },
      putBucketCors: function (e, t) {
        var n = (e.CORSConfiguration || {}).CORSRules || e.CORSRules || [];
        n = o.clone(o.isArray(n) ? n : [n]), o.each(n, function (e) {
          o.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (t) {
            var n = t + "s",
              i = e[n] || e[t] || [];
            delete e[n], e[t] = o.isArray(i) ? i : [i];
          });
        });
        var i = {
          CORSRule: n
        };
        e.ResponseVary && (i.ResponseVary = e.ResponseVary);
        var a = o.json2xml({
            CORSConfiguration: i
          }),
          r = e.Headers;
        r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(a)), f.call(this, {
          Action: "name/cos:PutBucketCORS",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          body: a,
          action: "cors",
          headers: r,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketCors: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketCORS",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "cors",
          tracker: e.tracker
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
              r = a.CORSRules || a.CORSRule || [];
            r = o.clone(o.isArray(r) ? r : [r]);
            var s = a.ResponseVary;
            o.each(r, function (e) {
              o.each(["AllowedOrigin", "AllowedHeader", "AllowedMethod", "ExposeHeader"], function (t) {
                var n = t + "s",
                  i = e[n] || e[t] || [];
                delete e[t], e[n] = o.isArray(i) ? i : [i];
              });
            }), t(null, {
              CORSRules: r,
              ResponseVary: s,
              statusCode: n.statusCode,
              headers: n.headers
            });
          }
        });
      },
      deleteBucketCors: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketCORS",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "cors",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode || e.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketLocation: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketLocation",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "location",
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          t(null, n);
        });
      },
      getBucketPolicy: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketPolicy",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "policy",
          rawBody: !0,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return e.statusCode && 403 === e.statusCode ? t({
            ErrorStatus: "Access Denied"
          }) : e.statusCode && 405 === e.statusCode ? t({
            ErrorStatus: "Method Not Allowed"
          }) : e.statusCode && 404 === e.statusCode ? t({
            ErrorStatus: "Policy Not Found"
          }) : t(e);
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
      },
      putBucketPolicy: function (e, t) {
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
        a["Content-Type"] = "application/json", a["Content-MD5"] = o.binaryBase64(o.md5(i)), f.call(this, {
          Action: "name/cos:PutBucketPolicy",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          action: "policy",
          body: i,
          headers: a,
          json: !0,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      deleteBucketPolicy: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketPolicy",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "policy",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode || e.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketTagging: function (e, t) {
        var n = e.Tagging || {},
          i = n.TagSet || n.Tags || e.Tags || [];
        i = o.clone(o.isArray(i) ? i : [i]);
        var a = o.json2xml({
            Tagging: {
              TagSet: {
                Tag: i
              }
            }
          }),
          r = e.Headers;
        r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(a)), f.call(this, {
          Action: "name/cos:PutBucketTagging",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          body: a,
          action: "tagging",
          headers: r,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketTagging: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketTagging",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "tagging",
          tracker: e.tracker
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
            a = o.clone(o.isArray(a) ? a : [a]), t(null, {
              Tags: a,
              statusCode: n.statusCode,
              headers: n.headers
            });
          }
        });
      },
      deleteBucketTagging: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketTagging",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "tagging",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketLifecycle: function (e, t) {
        var n = (e.LifecycleConfiguration || {}).Rules || e.Rules || [];
        n = o.clone(n);
        var i = o.json2xml({
            LifecycleConfiguration: {
              Rule: n
            }
          }),
          a = e.Headers;
        a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(i)), f.call(this, {
          Action: "name/cos:PutBucketLifecycle",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          body: i,
          action: "lifecycle",
          headers: a,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketLifecycle: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketLifecycle",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "lifecycle",
          tracker: e.tracker
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
            a = o.clone(o.isArray(a) ? a : [a]), t(null, {
              Rules: a,
              statusCode: n.statusCode,
              headers: n.headers
            });
          }
        });
      },
      deleteBucketLifecycle: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketLifecycle",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "lifecycle",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketVersioning: function (e, t) {
        if (e.VersioningConfiguration) {
          var n = e.VersioningConfiguration || {},
            i = o.json2xml({
              VersioningConfiguration: n
            }),
            a = e.Headers;
          a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(i)), f.call(this, {
            Action: "name/cos:PutBucketVersioning",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: i,
            action: "versioning",
            headers: a,
            tracker: e.tracker
          }, function (e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        } else t({
          error: "missing param VersioningConfiguration"
        });
      },
      getBucketVersioning: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketVersioning",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "versioning",
          tracker: e.tracker
        }, function (e, n) {
          e || !n.VersioningConfiguration && (n.VersioningConfiguration = {}), t(e, n);
        });
      },
      putBucketReplication: function (e, t) {
        var n = o.clone(e.ReplicationConfiguration),
          i = o.json2xml({
            ReplicationConfiguration: n
          });
        i = (i = i.replace(/<(\/?)Rules>/gi, "<$1Rule>")).replace(/<(\/?)Tags>/gi, "<$1Tag>");
        var a = e.Headers;
        a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(i)), f.call(this, {
          Action: "name/cos:PutBucketReplication",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          body: i,
          action: "replication",
          headers: a,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketReplication: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketReplication",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "replication",
          tracker: e.tracker
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
      },
      deleteBucketReplication: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketReplication",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "replication",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketWebsite: function (e, t) {
        if (e.WebsiteConfiguration) {
          var n = o.clone(e.WebsiteConfiguration || {}),
            i = n.RoutingRules || n.RoutingRule || [];
          i = o.isArray(i) ? i : [i], delete n.RoutingRule, delete n.RoutingRules, i.length && (n.RoutingRules = {
            RoutingRule: i
          });
          var a = o.json2xml({
              WebsiteConfiguration: n
            }),
            r = e.Headers;
          r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(a)), f.call(this, {
            Action: "name/cos:PutBucketWebsite",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: a,
            action: "website",
            headers: r,
            tracker: e.tracker
          }, function (e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        } else t({
          error: "missing param WebsiteConfiguration"
        });
      },
      getBucketWebsite: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketWebsite",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: e.Headers,
          action: "website",
          tracker: e.tracker
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
              var r = o.clone(a.RoutingRules.RoutingRule || []);
              r = o.makeArray(r), a.RoutingRules = r;
            }
            t(null, {
              WebsiteConfiguration: a,
              statusCode: n.statusCode,
              headers: n.headers
            });
          }
        });
      },
      deleteBucketWebsite: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketWebsite",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "website",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketReferer: function (e, t) {
        if (e.RefererConfiguration) {
          var n = o.clone(e.RefererConfiguration || {}),
            i = n.DomainList || {},
            a = i.Domains || i.Domain || [];
          (a = o.isArray(a) ? a : [a]).length && (n.DomainList = {
            Domain: a
          });
          var r = o.json2xml({
              RefererConfiguration: n
            }),
            s = e.Headers;
          s["Content-Type"] = "application/xml", s["Content-MD5"] = o.binaryBase64(o.md5(r)), f.call(this, {
            Action: "name/cos:PutBucketReferer",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: r,
            action: "referer",
            headers: s,
            tracker: e.tracker
          }, function (e, n) {
            return e && 204 === e.statusCode ? t(null, {
              statusCode: e.statusCode
            }) : e ? t(e) : void t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        } else t({
          error: "missing param RefererConfiguration"
        });
      },
      getBucketReferer: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketReferer",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: e.Headers,
          action: "referer",
          tracker: e.tracker
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
              var r = o.makeArray(a.DomainList.Domain || []);
              a.DomainList = {
                Domains: r
              };
            }
            t(null, {
              RefererConfiguration: a,
              statusCode: n.statusCode,
              headers: n.headers
            });
          }
        });
      },
      putBucketDomain: function (e, t) {
        var n = (e.DomainConfiguration || {}).DomainRule || e.DomainRule || [];
        n = o.clone(n);
        var i = o.json2xml({
            DomainConfiguration: {
              DomainRule: n
            }
          }),
          a = e.Headers;
        a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(i)), f.call(this, {
          Action: "name/cos:PutBucketDomain",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          body: i,
          action: "domain",
          headers: a,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketDomain: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketDomain",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "domain",
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = [];
          try {
            i = n.DomainConfiguration.DomainRule || [];
          } catch (e) {}
          i = o.clone(o.isArray(i) ? i : [i]), t(null, {
            DomainRule: i,
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      deleteBucketDomain: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketDomain",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "domain",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketOrigin: function (e, t) {
        var n = (e.OriginConfiguration || {}).OriginRule || e.OriginRule || [];
        n = o.clone(n);
        var i = o.json2xml({
            OriginConfiguration: {
              OriginRule: n
            }
          }),
          a = e.Headers;
        a["Content-Type"] = "application/xml", a["Content-MD5"] = o.binaryBase64(o.md5(i)), f.call(this, {
          Action: "name/cos:PutBucketOrigin",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          body: i,
          action: "origin",
          headers: a,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketOrigin: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketOrigin",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "origin",
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = [];
          try {
            i = n.OriginConfiguration.OriginRule || [];
          } catch (e) {}
          i = o.clone(o.isArray(i) ? i : [i]), t(null, {
            OriginRule: i,
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      deleteBucketOrigin: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketOrigin",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "origin",
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketLogging: function (e, t) {
        var n = o.json2xml({
            BucketLoggingStatus: e.BucketLoggingStatus || ""
          }),
          i = e.Headers;
        i["Content-Type"] = "application/xml", i["Content-MD5"] = o.binaryBase64(o.md5(n)), f.call(this, {
          Action: "name/cos:PutBucketLogging",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          body: n,
          action: "logging",
          headers: i,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketLogging: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketLogging",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "logging",
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          delete n.BucketLoggingStatus._xmlns, t(null, {
            BucketLoggingStatus: n.BucketLoggingStatus,
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketInventory: function (e, t) {
        var n = o.clone(e.InventoryConfiguration);
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
        var r = o.json2xml({
            InventoryConfiguration: n
          }),
          s = e.Headers;
        s["Content-Type"] = "application/xml", s["Content-MD5"] = o.binaryBase64(o.md5(r)), f.call(this, {
          Action: "name/cos:PutBucketInventory",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          body: r,
          action: "inventory",
          qs: {
            id: e.Id
          },
          headers: s,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getBucketInventory: function (e, t) {
        f.call(this, {
          Action: "name/cos:GetBucketInventory",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "inventory",
          qs: {
            id: e.Id
          },
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = n.InventoryConfiguration;
          if (i && i.OptionalFields && i.OptionalFields.Field) {
            var a = i.OptionalFields.Field;
            o.isArray(a) || (a = [a]), i.OptionalFields = a;
          }
          if (i.Destination && i.Destination.COSBucketDestination && i.Destination.COSBucketDestination.Encryption) {
            var r = i.Destination.COSBucketDestination.Encryption;
            Object.keys(r).indexOf("SSE-COS") > -1 && (r.SSECOS = r["SSE-COS"], delete r["SSE-COS"]);
          }
          t(null, {
            InventoryConfiguration: i,
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      listBucketInventory: function (e, t) {
        f.call(this, {
          Action: "name/cos:ListBucketInventory",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "inventory",
          qs: {
            "continuation-token": e.ContinuationToken
          },
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = n.ListInventoryConfigurationResult,
            a = i.InventoryConfiguration || [];
          a = o.isArray(a) ? a : [a], delete i.InventoryConfiguration, o.each(a, function (e) {
            if (e && e.OptionalFields && e.OptionalFields.Field) {
              var t = e.OptionalFields.Field;
              o.isArray(t) || (t = [t]), e.OptionalFields = t;
            }
            if (e.Destination && e.Destination.COSBucketDestination && e.Destination.COSBucketDestination.Encryption) {
              var n = e.Destination.COSBucketDestination.Encryption;
              Object.keys(n).indexOf("SSE-COS") > -1 && (n.SSECOS = n["SSE-COS"], delete n["SSE-COS"]);
            }
          }), i.InventoryConfigurations = a, o.extend(i, {
            statusCode: n.statusCode,
            headers: n.headers
          }), t(null, i);
        });
      },
      deleteBucketInventory: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteBucketInventory",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "inventory",
          qs: {
            id: e.Id
          },
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      putBucketAccelerate: function (e, t) {
        if (e.AccelerateConfiguration) {
          var n = {
              AccelerateConfiguration: e.AccelerateConfiguration || {}
            },
            i = o.json2xml(n),
            a = {
              "Content-Type": "application/xml"
            };
          a["Content-MD5"] = o.binaryBase64(o.md5(i)), f.call(this, {
            Interface: "putBucketAccelerate",
            Action: "name/cos:PutBucketAccelerate",
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            body: i,
            action: "accelerate",
            headers: a,
            tracker: e.tracker
          }, function (e, n) {
            if (e) return t(e);
            t(null, {
              statusCode: n.statusCode,
              headers: n.headers
            });
          });
        } else t({
          error: "missing param AccelerateConfiguration"
        });
      },
      getBucketAccelerate: function (e, t) {
        f.call(this, {
          Interface: "getBucketAccelerate",
          Action: "name/cos:GetBucketAccelerate",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          action: "accelerate",
          tracker: e.tracker
        }, function (e, n) {
          e || !n.AccelerateConfiguration && (n.AccelerateConfiguration = {}), t(e, n);
        });
      },
      getObject: function (e, t) {
        if (this.options.ObjectKeySimplifyCheck && "/" === o.simplifyPath(e.Key)) return void t(o.error(new Error("The Getobject Key is illegal")));
        var n = e.Query || {},
          i = e.QueryString || "",
          a = e.tracker;
        a && a.setParams({
          signStartTime: new Date().getTime()
        }), n["response-content-type"] = e.ResponseContentType, n["response-content-language"] = e.ResponseContentLanguage, n["response-expires"] = e.ResponseExpires, n["response-cache-control"] = e.ResponseCacheControl, n["response-content-disposition"] = e.ResponseContentDisposition, n["response-content-encoding"] = e.ResponseContentEncoding, f.call(this, {
          Action: "name/cos:GetObject",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          VersionId: e.VersionId,
          headers: e.Headers,
          qs: n,
          qsStr: i,
          rawBody: !0,
          dataType: e.DataType,
          tracker: a
        }, function (n, i) {
          if (n) {
            var a = n.statusCode;
            return e.Headers["If-Modified-Since"] && a && 304 === a ? t(null, {
              NotModified: !0
            }) : t(n);
          }
          t(null, {
            Body: i.body,
            ETag: o.attr(i.headers, "etag", ""),
            statusCode: i.statusCode,
            headers: i.headers
          });
        });
      },
      headObject: function (e, t) {
        f.call(this, {
          Action: "name/cos:HeadObject",
          method: "HEAD",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          VersionId: e.VersionId,
          headers: e.Headers,
          tracker: e.tracker
        }, function (n, i) {
          if (n) {
            var a = n.statusCode;
            return e.Headers["If-Modified-Since"] && a && 304 === a ? t(null, {
              NotModified: !0,
              statusCode: a
            }) : t(n);
          }
          i.ETag = o.attr(i.headers, "etag", ""), t(null, i);
        });
      },
      listObjectVersions: function (e, t) {
        var n = {};
        n.prefix = e.Prefix || "", n.delimiter = e.Delimiter, n["key-marker"] = e.KeyMarker, n["version-id-marker"] = e.VersionIdMarker, n["max-keys"] = e.MaxKeys, n["encoding-type"] = e.EncodingType, f.call(this, {
          Action: "name/cos:GetBucketObjectVersions",
          ResourceKey: n.prefix,
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          qs: n,
          action: "versions",
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = n.ListVersionsResult || {},
            a = i.DeleteMarker || [];
          a = o.isArray(a) ? a : [a];
          var r = i.Version || [];
          r = o.isArray(r) ? r : [r];
          var s = o.clone(i);
          delete s.DeleteMarker, delete s.Version, o.extend(s, {
            DeleteMarkers: a,
            Versions: r,
            statusCode: n.statusCode,
            headers: n.headers
          }), t(null, s);
        });
      },
      putObject: function (e, t) {
        var n = this,
          i = e.ContentLength,
          r = o.throttleOnProgress.call(n, i, e.onProgress),
          s = e.Headers;
        s["Cache-Control"] || s["cache-control"] || (s["Cache-Control"] = ""), s["Content-Type"] || s["content-type"] || (s["Content-Type"] = a.getType(e.Key) || "application/octet-stream");
        var l = e.UploadAddMetaMd5 || n.options.UploadAddMetaMd5 || n.options.UploadCheckContentMd5,
          p = e.tracker;
        l && p && p.setParams({
          md5StartTime: new Date().getTime()
        }), o.getBodyMd5(l, e.Body, function (a) {
          a && (p && p.setParams({
            md5EndTime: new Date().getTime()
          }), n.options.UploadCheckContentMd5 && (s["Content-MD5"] = o.binaryBase64(a)), (e.UploadAddMetaMd5 || n.options.UploadAddMetaMd5) && (s["x-cos-meta-md5"] = a)), void 0 !== e.ContentLength && (s["Content-Length"] = e.ContentLength), r(null, !0), f.call(n, {
            Action: "name/cos:PutObject",
            TaskId: e.TaskId,
            method: "PUT",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: e.Headers,
            qs: e.Query,
            body: e.Body,
            onProgress: r,
            tracker: p
          }, function (a, s) {
            if (a) return r(null, !0), t(a);
            r({
              loaded: i,
              total: i
            }, !0);
            var l = c({
              ForcePathStyle: n.options.ForcePathStyle,
              protocol: n.options.Protocol,
              domain: n.options.Domain,
              bucket: e.Bucket,
              region: n.options.UseAccelerate ? "accelerate" : e.Region,
              object: e.Key
            });
            l = l.substr(l.indexOf("://") + 3), s.Location = l, s.ETag = o.attr(s.headers, "etag", ""), t(null, s);
          });
        });
      },
      postObject: function (e, t) {
        var n = this,
          i = {},
          a = e.FilePath;
        if (a) {
          for (var r in i["Cache-Control"] = e.CacheControl, i["Content-Disposition"] = e.ContentDisposition, i["Content-Encoding"] = e.ContentEncoding, i["Content-MD5"] = e.ContentMD5, i["Content-Length"] = e.ContentLength, i["Content-Type"] = e.ContentType, i.Expect = e.Expect, i.Expires = e.Expires, i["x-cos-acl"] = e.ACL, i["x-cos-grant-read"] = e.GrantRead, i["x-cos-grant-write"] = e.GrantWrite, i["x-cos-grant-full-control"] = e.GrantFullControl, i["x-cos-storage-class"] = e.StorageClass, i["x-cos-mime-limit"] = e.MimeLimit, i["x-cos-traffic-limit"] = e.TrafficLimit, i["x-cos-forbid-overwrite"] = e.ForbidOverwrite, i["x-cos-server-side-encryption-customer-algorithm"] = e.SSECustomerAlgorithm, i["x-cos-server-side-encryption-customer-key"] = e.SSECustomerKey, i["x-cos-server-side-encryption-customer-key-MD5"] = e.SSECustomerKeyMD5, i["x-cos-server-side-encryption"] = e.ServerSideEncryption, i["x-cos-server-side-encryption-cos-kms-key-id"] = e.SSEKMSKeyId, i["x-cos-server-side-encryption-context"] = e.SSEContext, delete i["Content-Length"], delete i["content-length"], e) r.indexOf("x-cos-meta-") > -1 && (i[r] = e[r]);
          var s = o.throttleOnProgress.call(n, i["Content-Length"], e.onProgress);
          f.call(this, {
            Action: "name/cos:PostObject",
            method: "POST",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            headers: i,
            qs: e.Query,
            filePath: a,
            TaskId: e.TaskId,
            onProgress: s,
            tracker: e.tracker
          }, function (i, o) {
            if (s(null, !0), i) return t(i);
            if (o && o.headers) {
              var r = o.headers,
                l = r.etag || r.Etag || r.ETag || "",
                p = a.substr(a.lastIndexOf("/") + 1),
                u = c({
                  ForcePathStyle: n.options.ForcePathStyle,
                  protocol: n.options.Protocol,
                  domain: n.options.Domain,
                  bucket: e.Bucket,
                  region: e.Region,
                  object: e.Key.replace(/\$\{filename\}/g, p),
                  isLocation: !0
                });
              return t(null, {
                Location: u,
                statusCode: o.statusCode,
                headers: r,
                ETag: l
              });
            }
            t(null, o);
          });
        } else t({
          error: "missing param FilePath"
        });
      },
      deleteObject: function (e, t) {
        f.call(this, {
          Action: "name/cos:DeleteObject",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: e.Headers,
          VersionId: e.VersionId,
          tracker: e.tracker
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
      },
      getObjectAcl: function (e, t) {
        var n = {};
        e.VersionId && (n.versionId = e.VersionId), f.call(this, {
          Action: "name/cos:GetObjectACL",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: e.Headers,
          qs: n,
          action: "acl",
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = n.AccessControlPolicy || {},
            a = i.Owner || {},
            s = i.AccessControlList && i.AccessControlList.Grant || [];
          s = o.isArray(s) ? s : [s];
          var c = r(i);
          n.headers && n.headers["x-cos-acl"] && (c.ACL = n.headers["x-cos-acl"]), c = o.extend(c, {
            Owner: a,
            Grants: s,
            statusCode: n.statusCode,
            headers: n.headers
          }), t(null, c);
        });
      },
      putObjectAcl: function (e, t) {
        var n = e.Headers,
          i = "";
        if (e.AccessControlPolicy) {
          var a = o.clone(e.AccessControlPolicy || {}),
            r = a.Grants || a.Grant;
          r = o.isArray(r) ? r : [r], delete a.Grant, delete a.Grants, a.AccessControlList = {
            Grant: r
          }, i = o.json2xml({
            AccessControlPolicy: a
          }), n["Content-Type"] = "application/xml", n["Content-MD5"] = o.binaryBase64(o.md5(i));
        }
        o.each(n, function (e, t) {
          0 === t.indexOf("x-cos-grant-") && (n[t] = s(n[t]));
        }), f.call(this, {
          Action: "name/cos:PutObjectACL",
          method: "PUT",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          action: "acl",
          headers: n,
          body: i,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      optionsObject: function (e, t) {
        var n = e.Headers;
        n.Origin = e.Origin, n["Access-Control-Request-Method"] = e.AccessControlRequestMethod, n["Access-Control-Request-Headers"] = e.AccessControlRequestHeaders, f.call(this, {
          Action: "name/cos:OptionsObject",
          method: "OPTIONS",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: n,
          tracker: e.tracker
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
      },
      putObjectCopy: function (e, t) {
        var n = e.Headers;
        !n["Cache-Control"] && n["cache-control"] && (n["Cache-Control"] = "");
        var i = e.CopySource || "",
          a = o.getSourceParams.call(this, i);
        if (a) {
          var r = a.Bucket,
            s = a.Region,
            c = decodeURIComponent(a.Key);
          f.call(this, {
            Scope: [{
              action: "name/cos:GetObject",
              bucket: r,
              region: s,
              prefix: c
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
            headers: e.Headers,
            tracker: e.tracker
          }, function (e, n) {
            if (e) return t(e);
            var i = o.clone(n.CopyObjectResult || {});
            o.extend(i, {
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, i);
          });
        } else t({
          error: "CopySource format error"
        });
      },
      deleteMultipleObject: function (e, t) {
        var n = e.Objects || [],
          i = e.Quiet;
        n = o.isArray(n) ? n : [n];
        var a = o.json2xml({
            Delete: {
              Object: n,
              Quiet: i || !1
            }
          }),
          r = e.Headers;
        r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(a));
        var s = o.map(n, function (t) {
          return {
            action: "name/cos:DeleteObject",
            bucket: e.Bucket,
            region: e.Region,
            prefix: t.Key
          };
        });
        f.call(this, {
          Scope: s,
          method: "POST",
          Bucket: e.Bucket,
          Region: e.Region,
          body: a,
          action: "delete",
          headers: r,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          var i = n.DeleteResult || {},
            a = i.Deleted || [],
            r = i.Error || [];
          a = o.isArray(a) ? a : [a], r = o.isArray(r) ? r : [r];
          var s = o.clone(i);
          o.extend(s, {
            Error: r,
            Deleted: a,
            statusCode: n.statusCode,
            headers: n.headers
          }), t(null, s);
        });
      },
      restoreObject: function (e, t) {
        var n = e.Headers;
        if (e.RestoreRequest) {
          var i = e.RestoreRequest || {},
            a = o.json2xml({
              RestoreRequest: i
            });
          n["Content-Type"] = "application/xml", n["Content-MD5"] = o.binaryBase64(o.md5(a)), f.call(this, {
            Action: "name/cos:RestoreObject",
            method: "POST",
            Bucket: e.Bucket,
            Region: e.Region,
            Key: e.Key,
            VersionId: e.VersionId,
            body: a,
            action: "restore",
            headers: n,
            tracker: e.tracker
          }, function (e, n) {
            t(e, n);
          });
        } else t({
          error: "missing param RestoreRequest"
        });
      },
      putObjectTagging: function (e, t) {
        var n = e.Tagging || {},
          i = n.TagSet || n.Tags || e.Tags || [];
        i = o.clone(o.isArray(i) ? i : [i]);
        var a = o.json2xml({
            Tagging: {
              TagSet: {
                Tag: i
              }
            }
          }),
          r = e.Headers;
        r["Content-Type"] = "application/xml", r["Content-MD5"] = o.binaryBase64(o.md5(a)), f.call(this, {
          Interface: "putObjectTagging",
          Action: "name/cos:PutObjectTagging",
          method: "PUT",
          Bucket: e.Bucket,
          Key: e.Key,
          Region: e.Region,
          body: a,
          action: "tagging",
          headers: r,
          VersionId: e.VersionId,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      getObjectTagging: function (e, t) {
        f.call(this, {
          Interface: "getObjectTagging",
          Action: "name/cos:GetObjectTagging",
          method: "GET",
          Key: e.Key,
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          action: "tagging",
          VersionId: e.VersionId,
          tracker: e.tracker
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
            a = o.clone(o.isArray(a) ? a : [a]), t(null, {
              Tags: a,
              statusCode: n.statusCode,
              headers: n.headers
            });
          }
        });
      },
      deleteObjectTagging: function (e, t) {
        f.call(this, {
          Interface: "deleteObjectTagging",
          Action: "name/cos:DeleteObjectTagging",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: e.Headers,
          action: "tagging",
          VersionId: e.VersionId,
          tracker: e.tracker
        }, function (e, n) {
          return e && 204 === e.statusCode ? t(null, {
            statusCode: e.statusCode
          }) : e ? t(e) : void t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      appendObject: function (e, t) {
        f.call(this, {
          Action: "name/cos:AppendObject",
          method: "POST",
          Bucket: e.Bucket,
          Region: e.Region,
          action: "append",
          Key: e.Key,
          body: e.Body,
          qs: {
            position: e.Position
          },
          headers: e.Headers,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          t(null, n);
        });
      },
      uploadPartCopy: function (e, t) {
        var n = e.CopySource || "",
          i = o.getSourceParams.call(this, n);
        if (i) {
          var a = i.Bucket,
            r = i.Region,
            s = decodeURIComponent(i.Key);
          f.call(this, {
            Scope: [{
              action: "name/cos:GetObject",
              bucket: a,
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
            qs: {
              partNumber: e.PartNumber,
              uploadId: e.UploadId
            },
            headers: e.Headers,
            tracker: e.tracker
          }, function (e, n) {
            if (e) return t(e);
            var i = o.clone(n.CopyPartResult || {});
            o.extend(i, {
              statusCode: n.statusCode,
              headers: n.headers
            }), t(null, i);
          });
        } else t({
          error: "CopySource format error"
        });
      },
      multipartInit: function (e, t) {
        var n = e.Headers,
          i = e.tracker;
        n["Cache-Control"] || n["cache-control"] || (n["Cache-Control"] = ""), n["Content-Type"] || n["content-type"] || (n["Content-Type"] = a.getType(e.Key) || "application/octet-stream"), f.call(this, {
          Action: "name/cos:InitiateMultipartUpload",
          method: "POST",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          action: "uploads",
          headers: e.Headers,
          qs: e.Query,
          tracker: i
        }, function (e, n) {
          return e ? (i && i.parent && i.parent.setParams({
            errorNode: "multipartInit"
          }), t(e)) : (n = o.clone(n || {})) && n.InitiateMultipartUploadResult ? t(null, o.extend(n.InitiateMultipartUploadResult, {
            statusCode: n.statusCode,
            headers: n.headers
          })) : void t(null, n);
        });
      },
      multipartUpload: function (e, t) {
        var n = this;
        o.getFileSize("multipartUpload", e, function () {
          var i = e.tracker,
            a = n.options.UploadCheckContentMd5;
          a && i && i.setParams({
            md5StartTime: new Date().getTime()
          }), o.getBodyMd5(a, e.Body, function (r) {
            r && (e.Headers["Content-MD5"] = o.binaryBase64(r), a && i && i.setParams({
              md5EndTime: new Date().getTime()
            })), i && i.setParams({
              partNumber: e.PartNumber
            }), f.call(n, {
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
              body: e.Body || null,
              tracker: i
            }, function (e, n) {
              if (e) return i && i.parent && i.parent.setParams({
                errorNode: "multipartUpload"
              }), t(e);
              t(null, {
                ETag: o.attr(n.headers, "etag", {}),
                statusCode: n.statusCode,
                headers: n.headers
              });
            });
          });
        });
      },
      multipartComplete: function (e, t) {
        for (var n = this, i = e.UploadId, a = e.Parts, r = e.tracker, s = 0, l = a.length; s < l; s++) 0 !== a[s].ETag.indexOf('"') && (a[s].ETag = '"' + a[s].ETag + '"');
        var p = o.json2xml({
            CompleteMultipartUpload: {
              Part: a
            }
          }),
          u = e.Headers;
        u["Content-Type"] = "application/xml", u["Content-MD5"] = o.binaryBase64(o.md5(p)), f.call(this, {
          Action: "name/cos:CompleteMultipartUpload",
          method: "POST",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          qs: {
            uploadId: i
          },
          body: p,
          headers: u,
          tracker: r
        }, function (i, a) {
          if (i) return r && r.parent && r.parent.setParams({
            errorNode: "multipartComplete"
          }), t(i);
          var s = c({
              ForcePathStyle: n.options.ForcePathStyle,
              protocol: n.options.Protocol,
              domain: n.options.Domain,
              bucket: e.Bucket,
              region: e.Region,
              object: e.Key,
              isLocation: !0
            }),
            l = a.CompleteMultipartUploadResult || {},
            p = o.extend(l, {
              Location: s,
              statusCode: a.statusCode,
              headers: a.headers
            });
          t(null, p);
        });
      },
      multipartList: function (e, t) {
        var n = {};
        n.delimiter = e.Delimiter, n["encoding-type"] = e.EncodingType, n.prefix = e.Prefix || "", n["max-uploads"] = e.MaxUploads, n["key-marker"] = e.KeyMarker, n["upload-id-marker"] = e.UploadIdMarker, n = o.clearKey(n);
        var i = e.tracker;
        i && i.setParams({
          signStartTime: new Date().getTime()
        }), f.call(this, {
          Action: "name/cos:ListMultipartUploads",
          ResourceKey: n.prefix,
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          headers: e.Headers,
          qs: n,
          action: "uploads",
          tracker: i
        }, function (e, n) {
          if (e) return i && i.parent && i.parent.setParams({
            errorNode: "multipartList"
          }), t(e);
          if (n && n.ListMultipartUploadsResult) {
            var a = n.ListMultipartUploadsResult.Upload || [],
              r = n.ListMultipartUploadsResult.CommonPrefixes || [];
            r = o.isArray(r) ? r : [r], a = o.isArray(a) ? a : [a], n.ListMultipartUploadsResult.Upload = a, n.ListMultipartUploadsResult.CommonPrefixes = r;
          }
          var s = o.clone(n.ListMultipartUploadsResult || {});
          o.extend(s, {
            statusCode: n.statusCode,
            headers: n.headers
          }), t(null, s);
        });
      },
      multipartListPart: function (e, t) {
        var n = {},
          i = e.tracker;
        n.uploadId = e.UploadId, n["encoding-type"] = e.EncodingType, n["max-parts"] = e.MaxParts, n["part-number-marker"] = e.PartNumberMarker, f.call(this, {
          Action: "name/cos:ListParts",
          method: "GET",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: e.Headers,
          qs: n,
          tracker: i
        }, function (e, n) {
          if (e) return i && i.parent && i.parent.setParams({
            errorNode: "multipartListPart"
          }), t(e);
          var a = n.ListPartsResult || {},
            r = a.Part || [];
          r = o.isArray(r) ? r : [r], a.Part = r;
          var s = o.clone(a);
          o.extend(s, {
            statusCode: n.statusCode,
            headers: n.headers
          }), t(null, s);
        });
      },
      multipartAbort: function (e, t) {
        var n = {};
        n.uploadId = e.UploadId, f.call(this, {
          Action: "name/cos:AbortMultipartUpload",
          method: "DELETE",
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          headers: e.Headers,
          qs: n,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          t(null, {
            statusCode: n.statusCode,
            headers: n.headers
          });
        });
      },
      request: function (e, t) {
        f.call(this, {
          method: e.Method,
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          action: e.Action,
          headers: e.Headers,
          qs: e.Query,
          body: e.Body,
          Url: e.Url,
          rawBody: e.RawBody,
          dataType: e.DataType,
          tracker: e.tracker
        }, function (e, n) {
          if (e) return t(e);
          n && n.body && (n.Body = n.body, delete n.body), t(e, n);
        });
      },
      getObjectUrl: function (e, t) {
        var n = this,
          i = void 0 === e.UseAccelerate ? n.options.UseAccelerate : e.UseAccelerate,
          a = c({
            ForcePathStyle: n.options.ForcePathStyle,
            protocol: e.Protocol || n.options.Protocol,
            domain: e.Domain || n.options.Domain,
            bucket: e.Bucket,
            region: i ? "accelerate" : e.Region,
            object: e.Key
          }),
          r = "";
        e.Query && (r += o.obj2str(e.Query)), e.QueryString && (r += (r ? "&" : "") + e.QueryString);
        var s = a;
        if (void 0 !== e.Sign && !e.Sign) return r && (s += "?" + r), t(null, {
          Url: s
        }), s;
        var u = l.call(this, {
            Bucket: e.Bucket,
            Region: e.Region,
            UseAccelerate: e.UseAccelerate,
            Url: a
          }),
          d = p.call(this, {
            Action: "PUT" === (e.Method || "").toUpperCase() ? "name/cos:PutObject" : "name/cos:GetObject",
            Bucket: e.Bucket || "",
            Region: e.Region || "",
            Method: e.Method || "get",
            Key: e.Key,
            Expires: e.Expires,
            Headers: e.Headers,
            Query: e.Query,
            SignHost: u,
            ForceSignHost: !1 !== e.ForceSignHost && n.options.ForceSignHost
          }, function (e, n) {
            if (t) if (e) t(e);else {
              var i = a;
              i += "?" + (n.Authorization.indexOf("q-signature") > -1 ? function (e) {
                var t = e.match(/q-url-param-list.*?(?=&)/g)[0],
                  n = "q-url-param-list=" + encodeURIComponent(t.replace(/q-url-param-list=/, "")).toLowerCase(),
                  i = new RegExp(t, "g");
                return e.replace(i, n);
              }(n.Authorization) : "sign=" + encodeURIComponent(n.Authorization)), n.SecurityToken && (i += "&x-cos-security-token=" + n.SecurityToken), n.ClientIP && (i += "&clientIP=" + n.ClientIP), n.ClientUA && (i += "&clientUA=" + n.ClientUA), n.Token && (i += "&token=" + n.Token), r && (i += "&" + r), setTimeout(function () {
                t(null, {
                  Url: i
                });
              });
            }
          });
        return d ? (s += "?" + d.Authorization + (d.SecurityToken ? "&x-cos-security-token=" + d.SecurityToken : ""), r && (s += "&" + r)) : r && (s += "?" + r), s;
      },
      getAuth: function (e) {
        return o.getAuth({
          SecretId: e.SecretId || this.options.SecretId || "",
          SecretKey: e.SecretKey || this.options.SecretKey || "",
          Bucket: e.Bucket,
          Region: e.Region,
          Method: e.Method,
          Key: e.Key,
          Query: e.Query,
          Headers: e.Headers,
          Expires: e.Expires,
          SystemClockOffset: this.options.SystemClockOffset
        });
      }
    };
    e.exports.init = function (e, t) {
      t.transferToTaskMethod(h, "postObject"), t.transferToTaskMethod(h, "putObject"), o.each(h, function (t, n) {
        e.prototype[n] = o.apiWrapper(n, t);
      });
    };
  }, function (e, t) {
    function n(e) {
      return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
    }
    var i = function (e, t) {
      var i,
        o,
        a,
        r = [],
        s = function (e, t) {
          var i = [];
          for (var o in e) e.hasOwnProperty(o) && i.push(t ? n(o).toLowerCase() : o);
          return i.sort(function (e, t) {
            return (e = e.toLowerCase()) === (t = t.toLowerCase()) ? 0 : e > t ? 1 : -1;
          });
        }(e);
      for (i = 0; i < s.length; i++) a = void 0 === e[o = s[i]] || null === e[o] ? "" : "" + e[o], o = t ? n(o).toLowerCase() : n(o), a = n(a) || "", r.push(o + "=" + a);
      return r.join("&");
    };
    e.exports = function (e, t) {
      var n,
        o = e.filePath,
        a = e.headers || {},
        r = e.url || e.Url,
        s = e.method,
        c = e.onProgress,
        l = e.httpDNSServiceId,
        p = function (e, n) {
          var i = n.header,
            o = {};
          if (i) for (var a in i) i.hasOwnProperty(a) && (o[a.toLowerCase()] = i[a]);
          t(e, {
            statusCode: n.statusCode,
            headers: o
          }, n.data);
        };
      if (o) {
        var u,
          d = r.match(/^(https?:\/\/[^/]+\/)([^/]*\/?)(.*)$/);
        e.pathStyle ? (u = decodeURIComponent(d[3] || ""), r = d[1] + d[2]) : (u = decodeURIComponent(d[2] + d[3] || ""), r = d[1]);
        var f = {
            key: u,
            success_action_status: 200,
            Signature: a.Authorization
          },
          m = ["Cache-Control", "Content-Type", "Content-Disposition", "Content-Encoding", "Expires", "x-cos-storage-class", "x-cos-security-token", "x-ci-security-token"];
        for (var h in e.headers) e.headers.hasOwnProperty(h) && (h.indexOf("x-cos-meta-") > -1 || m.indexOf(h) > -1) && (f[h] = e.headers[h]);
        a["x-cos-acl"] && (f.acl = a["x-cos-acl"]), !f["Content-Type"] && (f["Content-Type"] = ""), (n = wx.uploadFile({
          url: r,
          method: s,
          name: "file",
          header: a,
          filePath: o,
          formData: f,
          timeout: e.timeout,
          success: function (e) {
            p(null, e);
          },
          fail: function (e) {
            p(e.errMsg, e);
          }
        })).onProgressUpdate(function (e) {
          c && c({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend,
            progress: e.progress / 100
          });
        });
      } else {
        var g = e.qs && i(e.qs) || "";
        g && (r += (r.indexOf("?") > -1 ? "&" : "?") + g), a["Content-Length"] && delete a["Content-Length"];
        var v = {
          url: r,
          method: s,
          header: a,
          dataType: "text",
          data: e.body,
          responseType: e.dataType || "text",
          timeout: e.timeout,
          redirect: "manual",
          success: function (e) {
            p(null, e);
          },
          fail: function (e) {
            p(e.errMsg, e);
          }
        };
        l && Object.assign(v, {
          enableHttpDNS: !0,
          httpDNSServiceId: l
        }), n = wx.request(v);
      }
      return n;
    };
  }, function (e, t, n) {
    "use strict";

    let i = n(28);
    e.exports = new i(n(29), n(30));
  }, function (e, t, n) {
    "use strict";

    function i() {
      this._types = Object.create(null), this._extensions = Object.create(null);
      for (let e = 0; e < arguments.length; e++) this.define(arguments[e]);
      this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
    }
    i.prototype.define = function (e, t) {
      for (let n in e) {
        let i = e[n].map(function (e) {
          return e.toLowerCase();
        });
        n = n.toLowerCase();
        for (let e = 0; e < i.length; e++) {
          const o = i[e];
          if ("*" !== o[0]) {
            if (!t && o in this._types) throw new Error('Attempt to change mapping for "' + o + '" extension from "' + this._types[o] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + o + '" from the list of extensions for "' + n + '".');
            this._types[o] = n;
          }
        }
        if (t || !this._extensions[n]) {
          const e = i[0];
          this._extensions[n] = "*" !== e[0] ? e : e.substr(1);
        }
      }
    }, i.prototype.getType = function (e) {
      let t = (e = String(e)).replace(/^.*[/\\]/, "").toLowerCase(),
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
      "application/ecmascript": ["es", "ecma"],
      "application/emma+xml": ["emma"],
      "application/emotionml+xml": ["emotionml"],
      "application/epub+zip": ["epub"],
      "application/exi": ["exi"],
      "application/express": ["exp"],
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
      "application/patch-ops-error+xml": ["xer"],
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
      "application/trig": ["trig"],
      "application/ttml+xml": ["ttml"],
      "application/ubjson": ["ubj"],
      "application/urc-ressheet+xml": ["rsheet"],
      "application/urc-targetdesc+xml": ["td"],
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
      "application/xcap-ns+xml": ["xns"],
      "application/xenc+xml": ["xenc"],
      "application/xhtml+xml": ["xhtml", "xht"],
      "application/xliff+xml": ["xlf"],
      "application/xml": ["xml", "xsl", "xsd", "rng"],
      "application/xml-dtd": ["dtd"],
      "application/xop+xml": ["xop"],
      "application/xproc+xml": ["xpl"],
      "application/xslt+xml": ["*xsl", "xslt"],
      "application/xspf+xml": ["xspf"],
      "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
      "application/yang": ["yang"],
      "application/yin+xml": ["yin"],
      "application/zip": ["zip"],
      "audio/3gpp": ["*3gpp"],
      "audio/adpcm": ["adp"],
      "audio/amr": ["amr"],
      "audio/basic": ["au", "snd"],
      "audio/midi": ["mid", "midi", "kar", "rmi"],
      "audio/mobile-xmf": ["mxmf"],
      "audio/mp3": ["*mp3"],
      "audio/mp4": ["m4a", "mp4a"],
      "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
      "audio/ogg": ["oga", "ogg", "spx", "opus"],
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
      "image/avif": ["avif"],
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
      "image/ktx2": ["ktx2"],
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
      "model/step+xml": ["stpx"],
      "model/step+zip": ["stpz"],
      "model/step-xml+zip": ["stpxz"],
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
      "text/spdx": ["spdx"],
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
      "video/iso.segment": ["m4s"],
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
      "application/vnd.apple.keynote": ["key"],
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
      "application/vnd.dbf": ["dbf"],
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
      "application/vnd.mapbox-vector-tile": ["mvt"],
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
      "application/vnd.rar": ["rar"],
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
      "application/x-iwork-keynote-sffkey": ["*key"],
      "application/x-iwork-numbers-sffnumbers": ["*numbers"],
      "application/x-iwork-pages-sffpages": ["*pages"],
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
      "application/x-rar-compressed": ["*rar"],
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
      "image/vnd.pco.b16": ["b16"],
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
      "model/vnd.sap.vds": ["vds"],
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
    function i() {
      "use strict";

      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      i = function () {
        return t;
      };
      var e,
        t = {},
        n = Object.prototype,
        a = n.hasOwnProperty,
        r = Object.defineProperty || function (e, t, n) {
          e[t] = n.value;
        },
        s = "function" == typeof Symbol ? Symbol : {},
        c = s.iterator || "@@iterator",
        l = s.asyncIterator || "@@asyncIterator",
        p = s.toStringTag || "@@toStringTag";
      function u(e, t, n) {
        return Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }), e[t];
      }
      try {
        u({}, "");
      } catch (e) {
        u = function (e, t, n) {
          return e[t] = n;
        };
      }
      function d(e, t, n, i) {
        var o = t && t.prototype instanceof x ? t : x,
          a = Object.create(o.prototype),
          s = new j(i || []);
        return r(a, "_invoke", {
          value: P(e, n, s)
        }), a;
      }
      function f(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }
      t.wrap = d;
      var m = "suspendedStart",
        h = "suspendedYield",
        g = "executing",
        v = "completed",
        y = {};
      function x() {}
      function k() {}
      function b() {}
      var C = {};
      u(C, c, function () {
        return this;
      });
      var S = Object.getPrototypeOf,
        w = S && S(S(I([])));
      w && w !== n && a.call(w, c) && (C = w);
      var T = b.prototype = x.prototype = Object.create(C);
      function R(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function B(e, t) {
        function n(i, r, s, c) {
          var l = f(e[i], e, r);
          if ("throw" !== l.type) {
            var p = l.arg,
              u = p.value;
            return u && "object" == o(u) && a.call(u, "__await") ? t.resolve(u.__await).then(function (e) {
              n("next", e, s, c);
            }, function (e) {
              n("throw", e, s, c);
            }) : t.resolve(u).then(function (e) {
              p.value = e, s(p);
            }, function (e) {
              return n("throw", e, s, c);
            });
          }
          c(l.arg);
        }
        var i;
        r(this, "_invoke", {
          value: function (e, o) {
            function a() {
              return new t(function (t, i) {
                n(e, o, t, i);
              });
            }
            return i = i ? i.then(a, a) : a();
          }
        });
      }
      function P(t, n, i) {
        var o = m;
        return function (a, r) {
          if (o === g) throw Error("Generator is already running");
          if (o === v) {
            if ("throw" === a) throw r;
            return {
              value: e,
              done: !0
            };
          }
          for (i.method = a, i.arg = r;;) {
            var s = i.delegate;
            if (s) {
              var c = A(s, i);
              if (c) {
                if (c === y) continue;
                return c;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;else if ("throw" === i.method) {
              if (o === m) throw o = v, i.arg;
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            o = g;
            var l = f(t, n, i);
            if ("normal" === l.type) {
              if (o = i.done ? v : h, l.arg === y) continue;
              return {
                value: l.arg,
                done: i.done
              };
            }
            "throw" === l.type && (o = v, i.method = "throw", i.arg = l.arg);
          }
        };
      }
      function A(t, n) {
        var i = n.method,
          o = t.iterator[i];
        if (o === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", n.arg = e, A(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
        var a = f(o, t.iterator, n.arg);
        if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
        var r = a.arg;
        return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y);
      }
      function E(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }
      function O(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }
      function j(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(E, this), this.reset(!0);
      }
      function I(t) {
        if (t || "" === t) {
          var n = t[c];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var i = -1,
              r = function n() {
                for (; ++i < t.length;) if (a.call(t, i)) return n.value = t[i], n.done = !1, n;
                return n.value = e, n.done = !0, n;
              };
            return r.next = r;
          }
        }
        throw new TypeError(o(t) + " is not iterable");
      }
      return k.prototype = b, r(T, "constructor", {
        value: b,
        configurable: !0
      }), r(b, "constructor", {
        value: k,
        configurable: !0
      }), k.displayName = u(b, p, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === k || "GeneratorFunction" === (t.displayName || t.name));
      }, t.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, u(e, p, "GeneratorFunction")), e.prototype = Object.create(T), e;
      }, t.awrap = function (e) {
        return {
          __await: e
        };
      }, R(B.prototype), u(B.prototype, l, function () {
        return this;
      }), t.AsyncIterator = B, t.async = function (e, n, i, o, a) {
        void 0 === a && (a = Promise);
        var r = new B(d(e, n, i, o), a);
        return t.isGeneratorFunction(n) ? r : r.next().then(function (e) {
          return e.done ? e.value : r.next();
        });
      }, R(T), u(T, p, "Generator"), u(T, c, function () {
        return this;
      }), u(T, "toString", function () {
        return "[object Generator]";
      }), t.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var i in t) n.push(i);
        return n.reverse(), function e() {
          for (; n.length;) {
            var i = n.pop();
            if (i in t) return e.value = i, e.done = !1, e;
          }
          return e.done = !0, e;
        };
      }, t.values = I, j.prototype = {
        constructor: j,
        reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t) for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;
          function i(i, o) {
            return s.type = "throw", s.arg = t, n.next = i, o && (n.method = "next", n.arg = e), !!o;
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var r = this.tryEntries[o],
              s = r.completion;
            if ("root" === r.tryLoc) return i("end");
            if (r.tryLoc <= this.prev) {
              var c = a.call(r, "catchLoc"),
                l = a.call(r, "finallyLoc");
              if (c && l) {
                if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                if (this.prev < r.finallyLoc) return i(r.finallyLoc);
              } else if (c) {
                if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
              } else {
                if (!l) throw Error("try statement without catch or finally");
                if (this.prev < r.finallyLoc) return i(r.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];
            if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
              var o = i;
              break;
            }
          }
          o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
          var r = o ? o.completion : {};
          return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(r);
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y;
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), y;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var i = n.completion;
              if ("throw" === i.type) {
                var o = i.arg;
                O(n);
              }
              return o;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function (t, n, i) {
          return this.delegate = {
            iterator: I(t),
            resultName: n,
            nextLoc: i
          }, "next" === this.method && (this.arg = e), y;
        }
      }, t;
    }
    function o(e) {
      return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, o(e);
    }
    function a(e, t, n, i, o, a, r) {
      try {
        var s = e[a](r),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(i, o);
    }
    function r(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (i, o) {
          var r = e.apply(t, n);
          function s(e) {
            a(r, i, o, s, c, "next", e);
          }
          function c(e) {
            a(r, i, o, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }
    var s = n(6),
      c = n(32),
      l = n(5).EventProxy,
      p = n(0),
      u = n(2);
    function d(e, t) {
      var n = e.TaskId,
        i = e.Bucket,
        o = e.Region,
        a = e.Key,
        r = e.StorageClass,
        u = this,
        d = {},
        h = e.FileSize,
        g = e.SliceSize,
        v = Math.ceil(h / g),
        y = 0,
        x = p.throttleOnProgress.call(u, h, e.onHashProgress),
        k = function (t, n) {
          var i = t.length;
          if (0 === i) return n(null, !0);
          if (i > v) return n(null, !1);
          if (i > 1 && Math.max(t[0].Size, t[1].Size) !== g) return n(null, !1);
          !function o(a) {
            if (a < i) {
              var r = t[a];
              !function (t, n) {
                var i = g * (t - 1),
                  o = Math.min(i + g, h),
                  a = o - i;
                d[t] ? n(null, {
                  PartNumber: t,
                  ETag: d[t],
                  Size: a
                }) : p.fileSlice(e.FilePath, i, o, function (e) {
                  try {
                    var i = p.getFileMd5(e);
                  } catch (e) {
                    return n(e);
                  }
                  var o = '"' + i + '"';
                  d[t] = o, 1, y += a, n(null, {
                    PartNumber: t,
                    ETag: o,
                    Size: a
                  }), x({
                    loaded: y,
                    total: h
                  });
                });
              }(r.PartNumber, function (e, t) {
                t && t.ETag === r.ETag && t.Size === r.Size ? o(a + 1) : n(null, !1);
              });
            } else n(null, !0);
          }(0);
        },
        b = new l();
      b.on("error", function (e) {
        if (u._isRunningTask(n)) return t(e);
      }), b.on("upload_id_available", function (e) {
        var n = {},
          i = [];
        p.each(e.PartList, function (e) {
          n[e.PartNumber] = e;
        });
        for (var o = 1; o <= v; o++) {
          var a = n[o];
          a ? (a.PartNumber = o, a.Uploaded = !0) : a = {
            PartNumber: o,
            ETag: null,
            Uploaded: !1
          }, i.push(a);
        }
        e.PartList = i, t(null, e);
      }), b.on("no_available_upload_id", function () {
        if (u._isRunningTask(n)) {
          var s = p.extend({
            Bucket: i,
            Region: o,
            Key: a,
            Headers: p.clone(e.Headers),
            Query: p.clone(e.Query),
            StorageClass: r,
            calledBySdk: "sliceUploadFile",
            tracker: e.tracker
          }, e);
          u.multipartInit(s, function (e, i) {
            if (u._isRunningTask(n)) {
              if (e) return b.emit("error", e);
              var o = i.UploadId;
              if (!o) return t({
                Message: "no upload id"
              });
              b.emit("upload_id_available", {
                UploadId: o,
                PartList: []
              });
            }
          });
        }
      }), b.on("has_and_check_upload_id", function (t) {
        t = t.reverse(), c.eachLimit(t, 1, function (t, r) {
          u._isRunningTask(n) && (s.using[t] ? r() : m.call(u, {
            Bucket: i,
            Region: o,
            Key: a,
            UploadId: t,
            tracker: e.tracker
          }, function (e, i) {
            if (u._isRunningTask(n)) {
              if (e) return s.removeUsing(t), b.emit("error", e);
              var o = i.PartList;
              o.forEach(function (e) {
                e.PartNumber *= 1, e.Size *= 1, e.ETag = e.ETag || "";
              }), k(o, function (e, i) {
                if (u._isRunningTask(n)) return e ? b.emit("error", e) : void (i ? r({
                  UploadId: t,
                  PartList: o
                }) : r());
              });
            }
          }));
        }, function (e) {
          u._isRunningTask(n) && (x(null, !0), e && e.UploadId ? b.emit("upload_id_available", e) : b.emit("no_available_upload_id"));
        });
      }), b.on("seek_local_avail_upload_id", function (t) {
        var r = s.getFileId(e.FileStat, e.ChunkSize, i, a),
          c = s.getUploadIdList(r);
        if (r && c) {
          !function r(l) {
            if (l >= c.length) b.emit("has_and_check_upload_id", t);else {
              var d = c[l];
              if (!p.isInArray(t, d)) return s.removeUploadId(d), void r(l + 1);
              s.using[d] ? r(l + 1) : m.call(u, {
                Bucket: i,
                Region: o,
                Key: a,
                UploadId: d,
                tracker: e.tracker
              }, function (e, t) {
                u._isRunningTask(n) && (e ? (s.removeUploadId(d), r(l + 1)) : b.emit("upload_id_available", {
                  UploadId: d,
                  PartList: t.PartList
                }));
              });
            }
          }(0);
        } else b.emit("has_and_check_upload_id", t);
      }), b.on("get_remote_upload_id_list", function () {
        f.call(u, {
          Bucket: i,
          Region: o,
          Key: a,
          tracker: e.tracker
        }, function (t, o) {
          if (u._isRunningTask(n)) {
            if (t) return b.emit("error", t);
            var c = p.filter(o.UploadList, function (e) {
              return e.Key === a && (!r || e.StorageClass.toUpperCase() === r.toUpperCase());
            }).reverse().map(function (e) {
              return e.UploadId || e.UploadID;
            });
            if (c.length) b.emit("seek_local_avail_upload_id", c);else {
              var l,
                d = s.getFileId(e.FileStat, e.ChunkSize, i, a);
              d && (l = s.getUploadIdList(d)) && p.each(l, function (e) {
                s.removeUploadId(e);
              }), b.emit("no_available_upload_id");
            }
          }
        });
      }), b.emit("get_remote_upload_id_list");
    }
    function f(e, t) {
      var n = this,
        i = [],
        o = {
          Bucket: e.Bucket,
          Region: e.Region,
          Prefix: e.Key,
          calledBySdk: e.calledBySdk || "sliceUploadFile",
          tracker: e.tracker
        };
      !function e() {
        n.multipartList(o, function (n, a) {
          if (n) return t(n);
          i.push.apply(i, a.Upload || []), "true" === a.IsTruncated ? (o.KeyMarker = a.NextKeyMarker, o.UploadIdMarker = a.NextUploadIdMarker, e()) : t(null, {
            UploadList: i
          });
        });
      }();
    }
    function m(e, t) {
      var n = this,
        i = [],
        o = {
          Bucket: e.Bucket,
          Region: e.Region,
          Key: e.Key,
          UploadId: e.UploadId,
          calledBySdk: "sliceUploadFile",
          tracker: e.tracker
        };
      !function e() {
        n.multipartListPart(o, function (n, a) {
          if (n) return t(n);
          i.push.apply(i, a.Part || []), "true" === a.IsTruncated ? (o.PartNumberMarker = a.NextPartNumberMarker, e()) : t(null, {
            PartList: i
          });
        });
      }();
    }
    function h(e, t) {
      var n = this,
        i = e.TaskId,
        o = e.Bucket,
        a = e.Region,
        r = e.Key,
        s = e.UploadData,
        l = e.FileSize,
        u = e.SliceSize,
        d = Math.min(e.AsyncLimit || n.options.ChunkParallelLimit || 1, 256),
        f = e.FilePath,
        m = Math.ceil(l / u),
        h = 0,
        v = e.ServerSideEncryption,
        y = p.filter(s.PartList, function (e) {
          return e.Uploaded && (h += e.PartNumber >= m && l % u || u), !e.Uploaded;
        }),
        x = e.onProgress;
      c.eachLimit(y, d, function (t, c) {
        if (n._isRunningTask(i)) {
          var p = t.PartNumber,
            d = Math.min(l, t.PartNumber * u) - (t.PartNumber - 1) * u,
            m = 0;
          g.call(n, {
            TaskId: i,
            Bucket: o,
            Region: a,
            Key: r,
            SliceSize: u,
            FileSize: l,
            PartNumber: p,
            ServerSideEncryption: v,
            FilePath: f,
            UploadData: s,
            onProgress: function (e) {
              h += e.loaded - m, m = e.loaded, x({
                loaded: h,
                total: l
              });
            },
            tracker: e.tracker
          }, function (e, o) {
            n._isRunningTask(i) && (e ? h -= m : (h += d - m, t.ETag = o.ETag), x({
              loaded: h,
              total: l
            }), c(e || null, o));
          });
        }
      }, function (e) {
        if (n._isRunningTask(i)) return e ? t(e) : void t(null, {
          UploadId: s.UploadId,
          SliceList: s.PartList
        });
      });
    }
    function g(e, t) {
      var n = this,
        i = e.TaskId,
        o = e.Bucket,
        a = e.Region,
        r = e.Key,
        s = e.FileSize,
        l = e.FilePath,
        u = 1 * e.PartNumber,
        d = e.SliceSize,
        f = e.ServerSideEncryption,
        m = e.UploadData,
        h = n.options.ChunkRetryTimes + 1,
        g = e.Headers || {},
        v = d * (u - 1),
        y = d,
        x = v + d;
      x > s && (y = (x = s) - v);
      var k = ["x-cos-traffic-limit", "x-cos-mime-limit"],
        b = {};
      p.each(g, function (e, t) {
        k.indexOf(t) > -1 && (b[t] = e);
      }), p.fileSlice(l, v, x, function (s) {
        var l = p.getFileMd5(s),
          d = l ? p.binaryBase64(l) : null,
          g = m.PartList[u - 1];
        c.retry(h, function (t) {
          n._isRunningTask(i) && n.multipartUpload({
            TaskId: i,
            Bucket: o,
            Region: a,
            Key: r,
            ContentLength: y,
            PartNumber: u,
            UploadId: m.UploadId,
            ServerSideEncryption: f,
            Body: s,
            Headers: b,
            onProgress: e.onProgress,
            ContentMD5: d,
            calledBySdk: "sliceUploadFile",
            tracker: e.tracker
          }, function (e, o) {
            if (n._isRunningTask(i)) return e ? t(e) : (g.Uploaded = !0, t(null, o));
          });
        }, function (e, o) {
          if (n._isRunningTask(i)) return t(e, o);
        });
      });
    }
    function v(e, t) {
      var n = e.Bucket,
        i = e.Region,
        o = e.Key,
        a = e.UploadId,
        r = e.SliceList,
        s = this,
        l = this.options.ChunkRetryTimes + 1,
        p = r.map(function (e) {
          return {
            PartNumber: e.PartNumber,
            ETag: e.ETag
          };
        });
      c.retry(l, function (t) {
        s.multipartComplete({
          Bucket: n,
          Region: i,
          Key: o,
          UploadId: a,
          Parts: p,
          calledBySdk: "sliceUploadFile",
          Headers: e.Headers || {},
          tracker: e.tracker
        }, t);
      }, function (e, n) {
        t(e, n);
      });
    }
    function y(e, t) {
      var n = e.Bucket,
        i = e.Region,
        o = e.Key,
        a = e.AbortArray,
        r = e.AsyncLimit || 1,
        s = this,
        l = 0,
        p = new Array(a.length);
      c.eachLimit(a, r, function (t, a) {
        var r = l;
        if (o && o !== t.Key) return p[r] = {
          error: {
            KeyNotMatch: !0
          }
        }, void a(null);
        var c = t.UploadId || t.UploadID;
        s.multipartAbort({
          Bucket: n,
          Region: i,
          Key: t.Key,
          Headers: e.Headers,
          UploadId: c
        }, function (e) {
          var o = {
            Bucket: n,
            Region: i,
            Key: t.Key,
            UploadId: c
          };
          p[r] = {
            error: e,
            task: o
          }, a(null);
        }), l++;
      }, function (e) {
        if (e) return t(e);
        for (var n = [], i = [], o = 0, a = p.length; o < a; o++) {
          var r = p[o];
          r.task && (r.error ? i.push(r.task) : n.push(r.task));
        }
        return t(null, {
          successList: n,
          errorList: i
        });
      });
    }
    function x() {
      return (x = r(i().mark(function e(t, n) {
        var a, r, s, c, l, d, f, m, h, g, v, y;
        return i().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return a = this, r = void 0 === t.SliceSize ? a.options.SliceSize : t.SliceSize, s = [], e.prev = 3, e.next = 6, p.getFileSizeByPath(t.FilePath);
            case 6:
              c = e.sent, e.next = 13;
              break;
            case 9:
              return e.prev = 9, e.t0 = e.catch(3), n({
                error: e.t0
              }), e.abrupt("return");
            case 13:
              l = {
                TaskId: ""
              }, a.options.EnableReporter && (d = a.options.UseAccelerate || "string" == typeof a.options.Domain && a.options.Domain.includes("accelerate."), f = c > r ? "sliceUploadFile" : "putObject", t.tracker = new u({
                Beacon: a.options.BeaconReporter,
                clsReporter: a.options.ClsReporter,
                bucket: t.Bucket,
                region: t.Region,
                apiName: "uploadFile",
                realApi: f,
                fileKey: t.Key,
                fileSize: c,
                accelerate: d,
                deepTracker: a.options.DeepTracker,
                customId: a.options.CustomId,
                delay: a.options.TrackerDelay
              })), p.each(t, function (e, t) {
                "object" !== o(e) && "function" != typeof e && (l[t] = e);
              }), m = t.onTaskReady, t.onTaskReady = function (e) {
                l.TaskId = e, m && m(e);
              }, h = t.onFileFinish, g = function (e, i) {
                t.tracker && t.tracker.report(e, i), h && h(e, i, l), n && n(e, i);
              }, v = "postObject" === a.options.SimpleUploadMethod ? "postObject" : "putObject", y = c > r ? "sliceUploadFile" : v, s.push({
                api: y,
                params: t,
                callback: g
              }), a._addTasks(s);
            case 24:
            case "end":
              return e.stop();
          }
        }, e, this, [[3, 9]]);
      }))).apply(this, arguments);
    }
    function k() {
      return k = r(i().mark(function e(t, n) {
        var a, s, c, l, d, f, m, h, g, v, y;
        return i().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return a = this, s = void 0 === t.SliceSize ? a.options.SliceSize : t.SliceSize, c = 0, l = 0, d = p.throttleOnProgress.call(a, l, t.onProgress), f = t.files.length, m = t.onFileFinish, h = Array(f), g = function (e, t, i) {
                d(null, !0), m && m(e, t, i), h[i.Index] = {
                  options: i,
                  error: e,
                  data: t
                }, --f <= 0 && n && n(null, {
                  files: h
                });
              }, v = [], y = function () {
                return t.files.map(function (e, t) {
                  return new Promise(function () {
                    var n = r(i().mark(function n(r) {
                      var f, m, h, y, x, k, b, C, S, w, T;
                      return i().wrap(function (n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return f = 0, n.prev = 1, n.next = 4, p.getFileSizeByPath(e.FilePath);
                          case 4:
                            f = n.sent, n.next = 9;
                            break;
                          case 7:
                            n.prev = 7, n.t0 = n.catch(1);
                          case 9:
                            m = {
                              Index: t,
                              TaskId: ""
                            }, c += f, a.options.EnableReporter && (h = a.options.UseAccelerate || "string" == typeof a.options.Domain && a.options.Domain.includes("accelerate."), y = f > s ? "sliceUploadFile" : "putObject", e.tracker = new u({
                              Beacon: a.options.BeaconReporter,
                              clsReporter: a.options.ClsReporter,
                              bucket: e.Bucket,
                              region: e.Region,
                              apiName: "uploadFiles",
                              realApi: y,
                              fileKey: e.Key,
                              fileSize: f,
                              accelerate: h,
                              deepTracker: a.options.DeepTracker,
                              customId: a.options.CustomId,
                              delay: a.options.TrackerDelay
                            })), p.each(e, function (e, t) {
                              "object" !== o(e) && "function" != typeof e && (m[t] = e);
                            }), x = e.onTaskReady, e.onTaskReady = function (e) {
                              m.TaskId = e, x && x(e);
                            }, k = 0, b = e.onProgress, e.onProgress = function (e) {
                              l = l - k + e.loaded, k = e.loaded, b && b(e), d({
                                loaded: l,
                                total: c
                              });
                            }, C = e.onFileFinish, S = function (t, n) {
                              e.tracker && e.tracker.report(t, n), C && C(t, n), g && g(t, n, m);
                            }, w = "postObject" === a.options.SimpleUploadMethod ? "postObject" : "putObject", T = f > s ? "sliceUploadFile" : w, v.push({
                              api: T,
                              params: e,
                              callback: S
                            }), r(!0);
                          case 24:
                          case "end":
                            return n.stop();
                        }
                      }, n, null, [[1, 7]]);
                    }));
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  }());
                });
              }, e.next = 13, Promise.all(y());
            case 13:
              a._addTasks(v);
            case 14:
            case "end":
              return e.stop();
          }
        }, e, this);
      })), k.apply(this, arguments);
    }
    function b(e, t) {
      var n = e.TaskId,
        i = e.Bucket,
        o = e.Region,
        a = e.Key,
        r = e.CopySource,
        s = e.UploadId,
        l = 1 * e.PartNumber,
        p = e.CopySourceRange,
        u = this.options.ChunkRetryTimes + 1,
        d = this;
      c.retry(u, function (t) {
        d.uploadPartCopy({
          TaskId: n,
          Bucket: i,
          Region: o,
          Key: a,
          CopySource: r,
          UploadId: s,
          PartNumber: l,
          CopySourceRange: p,
          onProgress: e.onProgress,
          tracker: e.tracker,
          calledBySdk: e.calledBySdk
        }, function (e, n) {
          t(e || null, n);
        });
      }, function (e, n) {
        return t(e, n);
      });
    }
    var C = {
      sliceUploadFile: function (e, t) {
        var n = this;
        if (!p.canFileSlice()) return e.SkipTask = !0, void ("postObject" === n.options.SimpleUploadMethod ? n.postObject(e, t) : n.putObject(e, t));
        var i,
          o,
          a = new l(),
          r = e.TaskId,
          c = e.Bucket,
          u = e.Region,
          f = e.Key,
          m = e.FilePath,
          g = e.ChunkSize || e.SliceSize || n.options.ChunkSize,
          y = e.AsyncLimit,
          x = e.StorageClass,
          k = e.ServerSideEncryption,
          b = e.onHashProgress,
          C = e.tracker;
        C && C.setParams({
          chunkSize: g
        }), a.on("error", function (i) {
          if (n._isRunningTask(r)) {
            var o = {
              UploadId: e.UploadData.UploadId || "",
              err: i,
              error: i
            };
            return t(o);
          }
        }), a.on("upload_complete", function (n) {
          var i = p.extend({
            UploadId: e.UploadData.UploadId || ""
          }, n);
          t(null, i);
        }), a.on("upload_slice_complete", function (t) {
          var l = {};
          p.each(e.Headers, function (e, t) {
            var n = t.toLowerCase();
            0 !== n.indexOf("x-cos-meta-") && "pic-operations" !== n || (l[t] = e);
          }), v.call(n, {
            Bucket: c,
            Region: u,
            Key: f,
            UploadId: t.UploadId,
            SliceList: t.SliceList,
            Headers: l,
            tracker: C
          }, function (e, c) {
            if (n._isRunningTask(r)) {
              if (s.removeUsing(t.UploadId), e) return o(null, !0), a.emit("error", e);
              s.removeUploadId(t.UploadId), o({
                loaded: i,
                total: i
              }, !0), a.emit("upload_complete", c);
            }
          });
        }), a.on("get_upload_data_finish", function (t) {
          var l = s.getFileId(e.FileStat, e.ChunkSize, c, f);
          l && s.saveUploadId(l, t.UploadId, n.options.UploadIdCacheLimit), s.setUsing(t.UploadId), o(null, !0), h.call(n, {
            TaskId: r,
            Bucket: c,
            Region: u,
            Key: f,
            FilePath: m,
            FileSize: i,
            SliceSize: g,
            AsyncLimit: y,
            ServerSideEncryption: k,
            UploadData: t,
            onProgress: o,
            tracker: C
          }, function (e, t) {
            if (n._isRunningTask(r)) return e ? (o(null, !0), a.emit("error", e)) : void a.emit("upload_slice_complete", t);
          });
        }), a.on("get_file_size_finish", function () {
          if (o = p.throttleOnProgress.call(n, i, e.onProgress), e.UploadData.UploadId) a.emit("get_upload_data_finish", e.UploadData);else {
            var t = p.extend({
              TaskId: r,
              Bucket: c,
              Region: u,
              Key: f,
              Headers: e.Headers,
              StorageClass: x,
              FilePath: m,
              FileSize: i,
              SliceSize: g,
              onHashProgress: b,
              tracker: C
            }, e);
            t.FileSize = i, d.call(n, t, function (t, i) {
              if (n._isRunningTask(r)) {
                if (t) return a.emit("error", t);
                e.UploadData.UploadId = i.UploadId, e.UploadData.PartList = i.PartList, a.emit("get_upload_data_finish", e.UploadData);
              }
            });
          }
        }), i = e.ContentLength, delete e.ContentLength, !e.Headers && (e.Headers = {}), p.each(e.Headers, function (t, n) {
          "content-length" === n.toLowerCase() && delete e.Headers[n];
        }), function () {
          for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], o = 1048576, a = 0; a < t.length && !(i / (o = 1024 * t[a] * 1024) <= n.options.MaxPartNumber); a++);
          e.ChunkSize = e.SliceSize = g = Math.max(g, o);
        }(), 0 === i ? (e.Body = "", e.ContentLength = 0, e.SkipTask = !0, n.putObject(e, function (e, n) {
          if (e) return t(e);
          t(null, n);
        })) : a.emit("get_file_size_finish");
      },
      abortUploadTask: function (e, t) {
        var n = e.Bucket,
          i = e.Region,
          o = e.Key,
          a = e.UploadId,
          r = e.Level || "task",
          s = e.AsyncLimit,
          c = this,
          p = new l();
        if (p.on("error", function (e) {
          return t(e);
        }), p.on("get_abort_array", function (a) {
          y.call(c, {
            Bucket: n,
            Region: i,
            Key: o,
            Headers: e.Headers,
            AsyncLimit: s,
            AbortArray: a
          }, function (e, n) {
            if (e) return t(e);
            t(null, n);
          });
        }), "bucket" === r) f.call(c, {
          Bucket: n,
          Region: i,
          calledBySdk: "abortUploadTask"
        }, function (e, n) {
          if (e) return t(e);
          p.emit("get_abort_array", n.UploadList || []);
        });else if ("file" === r) {
          if (!o) return t({
            error: "abort_upload_task_no_key"
          });
          f.call(c, {
            Bucket: n,
            Region: i,
            Key: o,
            calledBySdk: "abortUploadTask"
          }, function (e, n) {
            if (e) return t(e);
            p.emit("get_abort_array", n.UploadList || []);
          });
        } else {
          if ("task" !== r) return t({
            error: "abort_unknown_level"
          });
          if (!a) return t({
            error: "abort_upload_task_no_id"
          });
          if (!o) return t({
            error: "abort_upload_task_no_key"
          });
          p.emit("get_abort_array", [{
            Key: o,
            UploadId: a
          }]);
        }
      },
      uploadFile: function (e, t) {
        return x.apply(this, arguments);
      },
      uploadFiles: function (e, t) {
        return k.apply(this, arguments);
      },
      sliceCopyFile: function (e, t) {
        var n = new l(),
          i = this,
          o = e.Bucket,
          a = e.Region,
          r = e.Key,
          u = e.CopySource,
          d = p.getSourceParams.call(this, u);
        if (d) {
          var f = d.Bucket,
            h = d.Region,
            g = decodeURIComponent(d.Key),
            v = void 0 === e.CopySliceSize ? i.options.CopySliceSize : e.CopySliceSize;
          v = Math.max(0, v);
          var y,
            x,
            k = e.CopyChunkSize || this.options.CopyChunkSize,
            C = this.options.CopyChunkParallelLimit,
            S = this.options.ChunkRetryTimes + 1,
            w = 0,
            T = 0,
            R = {},
            B = {},
            P = {};
          n.on("copy_slice_complete", function (n) {
            var l = {};
            p.each(e.Headers, function (e, t) {
              0 === t.toLowerCase().indexOf("x-cos-meta-") && (l[t] = e);
            });
            var u = p.map(n.PartList, function (e) {
              return {
                PartNumber: e.PartNumber,
                ETag: e.ETag
              };
            });
            c.retry(S, function (t) {
              i.multipartComplete({
                Bucket: o,
                Region: a,
                Key: r,
                UploadId: n.UploadId,
                Parts: u,
                tracker: e.tracker,
                calledBySdk: "sliceCopyFile"
              }, t);
            }, function (e, i) {
              if (s.removeUsing(n.UploadId), e) return x(null, !0), t(e);
              s.removeUploadId(n.UploadId), x({
                loaded: y,
                total: y
              }, !0), t(null, i);
            });
          }), n.on("get_copy_data_finish", function (l) {
            var d = s.getCopyFileId(u, R, k, o, r);
            d && s.saveUploadId(d, l.UploadId, i.options.UploadIdCacheLimit), s.setUsing(l.UploadId);
            var f = p.filter(l.PartList, function (e) {
              return e.Uploaded && (T += e.PartNumber >= w && y % k || k), !e.Uploaded;
            });
            c.eachLimit(f, C, function (t, n) {
              var s = t.PartNumber,
                p = t.CopySourceRange,
                d = t.end - t.start,
                f = 0;
              c.retry(S, function (t) {
                b.call(i, {
                  Bucket: o,
                  Region: a,
                  Key: r,
                  CopySource: u,
                  UploadId: l.UploadId,
                  PartNumber: s,
                  CopySourceRange: p,
                  tracker: e.tracker,
                  calledBySdk: "sliceCopyFile",
                  onProgress: function (e) {
                    T += e.loaded - f, f = e.loaded, x({
                      loaded: T,
                      total: y
                    });
                  }
                }, t);
              }, function (e, i) {
                if (e) return n(e);
                x({
                  loaded: T,
                  total: y
                }), T += d - f, t.ETag = i.ETag, n(e || null, i);
              });
            }, function (e) {
              if (e) return s.removeUsing(l.UploadId), x(null, !0), t(e);
              n.emit("copy_slice_complete", l);
            });
          }), n.on("get_chunk_size_finish", function () {
            var c = function () {
                i.multipartInit({
                  Bucket: o,
                  Region: a,
                  Key: r,
                  Headers: P,
                  tracker: e.tracker,
                  calledBySdk: "sliceCopyFile"
                }, function (i, o) {
                  if (i) return t(i);
                  e.UploadId = o.UploadId, n.emit("get_copy_data_finish", {
                    UploadId: e.UploadId,
                    PartList: e.PartList
                  });
                });
              },
              l = s.getCopyFileId(u, R, k, o, r),
              d = s.getUploadIdList(l);
            if (!l || !d) return c();
            !function t(l) {
              if (l >= d.length) return c();
              var u = d[l];
              if (s.using[u]) return t(l + 1);
              m.call(i, {
                Bucket: o,
                Region: a,
                Key: r,
                UploadId: u,
                tracker: e.tracker,
                calledBySdk: "sliceCopyFile"
              }, function (i, o) {
                if (i) s.removeUploadId(u), t(l + 1);else {
                  if (s.using[u]) return t(l + 1);
                  var a = {},
                    r = 0;
                  p.each(o.PartList, function (e) {
                    var t = parseInt(e.Size),
                      n = r + t - 1;
                    a[e.PartNumber + "|" + r + "|" + n] = e.ETag, r += t;
                  }), p.each(e.PartList, function (e) {
                    var t = a[e.PartNumber + "|" + e.start + "|" + e.end];
                    t && (e.ETag = t, e.Uploaded = !0);
                  }), n.emit("get_copy_data_finish", {
                    UploadId: u,
                    PartList: e.PartList
                  });
                }
              });
            }(0);
          }), n.on("get_file_size_finish", function () {
            var o;
            if (function () {
              for (var t = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 5120], n = 1048576, o = 0; o < t.length && !(y / (n = 1024 * t[o] * 1024) <= i.options.MaxPartNumber); o++);
              e.ChunkSize = k = Math.max(k, n), w = Math.ceil(y / k);
              for (var a = [], r = 1; r <= w; r++) {
                var s = (r - 1) * k,
                  c = r * k < y ? r * k - 1 : y - 1,
                  l = {
                    PartNumber: r,
                    start: s,
                    end: c,
                    CopySourceRange: "bytes=" + s + "-" + c
                  };
                a.push(l);
              }
              e.PartList = a;
            }(), (o = "Replaced" === e.Headers["x-cos-metadata-directive"] ? e.Headers : B)["x-cos-storage-class"] = e.Headers["x-cos-storage-class"] || B["x-cos-storage-class"], o = p.clearKey(o), "ARCHIVE" === B["x-cos-storage-class"] || "DEEP_ARCHIVE" === B["x-cos-storage-class"]) {
              var a = B["x-cos-restore"];
              if (!a || 'ongoing-request="true"' === a) return void t({
                error: "Unrestored archive object is not allowed to be copied"
              });
            }
            delete o["x-cos-copy-source"], delete o["x-cos-metadata-directive"], delete o["x-cos-copy-source-If-Modified-Since"], delete o["x-cos-copy-source-If-Unmodified-Since"], delete o["x-cos-copy-source-If-Match"], delete o["x-cos-copy-source-If-None-Match"], n.emit("get_chunk_size_finish");
          }), i.headObject({
            Bucket: f,
            Region: h,
            Key: g,
            tracker: e.tracker,
            calledBySdk: "sliceCopyFile"
          }, function (o, a) {
            if (o) o.statusCode && 404 === o.statusCode ? t({
              ErrorStatus: g + " Not Exist"
            }) : t(o);else if (void 0 !== (y = e.FileSize = a.headers["content-length"]) && y) {
              if (e.tracker && e.tracker.setParams({
                httpSize: y
              }), x = p.throttleOnProgress.call(i, y, e.onProgress), y <= v) e.Headers["x-cos-metadata-directive"] || (e.Headers["x-cos-metadata-directive"] = "Copy"), i.putObjectCopy(Object.assign(e, {
                calledBySdk: "sliceCopyFile"
              }), function (e, n) {
                if (e) return x(null, !0), t(e);
                x({
                  loaded: y,
                  total: y
                }, !0), t(e, n);
              });else {
                var r = a.headers;
                R = r, B = {
                  "Cache-Control": r["cache-control"],
                  "Content-Disposition": r["content-disposition"],
                  "Content-Encoding": r["content-encoding"],
                  "Content-Type": r["content-type"],
                  Expires: r.expires,
                  "x-cos-storage-class": r["x-cos-storage-class"]
                }, p.each(r, function (e, t) {
                  var n = "x-cos-meta-";
                  0 === t.indexOf(n) && t.length > 11 && (B[t] = e);
                }), n.emit("get_file_size_finish");
              }
            } else t({
              error: 'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'
            });
          });
        } else t({
          error: "CopySource format error"
        });
      }
    };
    e.exports.init = function (e, t) {
      t.transferToTaskMethod(C, "sliceUploadFile"), p.each(C, function (t, n) {
        e.prototype[n] = p.apiWrapper(n, t);
      });
    };
  }, function (e, t) {
    var n = {
      eachLimit: function (e, t, n, i) {
        if (i = i || function () {}, !e.length || t <= 0) return i();
        var o = 0,
          a = 0,
          r = 0;
        !function s() {
          if (o >= e.length) return i();
          for (; r < t && a < e.length;) r += 1, n(e[(a += 1) - 1], function (t) {
            t ? (i(t), i = function () {}) : (r -= 1, (o += 1) >= e.length ? i() : s());
          });
        }();
      },
      retry: function (e, t, n) {
        e < 1 ? n() : function i(o) {
          t(function (t, a) {
            t && o < e ? i(o + 1) : n(t, a);
          });
        }(1);
      }
    };
    e.exports = n;
  }]);
});

/***/ }),

/***/ 32:
/***/ ((module) => {

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
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}
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
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};
function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
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
  checkListener(listener);
  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
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
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
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
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
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
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
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
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
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
function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }
    ;
    eventTargetAgnosticAddListener(emitter, name, resolver, {
      once: true
    });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, {
        once: true
      });
    }
  });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

/***/ }),

/***/ 832:
/***/ ((__unused_webpack_module, exports) => {

var UploaderEvent = {
  video_progress: "video_progress",
  media_progress: "media_progress"
};
exports.UploaderEvent = UploaderEvent;

/***/ }),

/***/ 532:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Uploader = __webpack_require__(940);
var pkg = __webpack_require__(330);
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
exports.VodReporter = /*#__PURE__*/function () {
  function _class(uploader, options) {
    _classCallCheck(this, _class);
    _defineProperty(this, "uploader", undefined);
    _defineProperty(this, "options", undefined);
    // only partial data when created
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
  return _createClass(_class, [{
    key: "init",
    value: function init() {
      this.uploader.on(VodReportEvent.report_prepare, this.onPrepare.bind(this));
      this.uploader.on(VodReportEvent.report_apply, this.onApply.bind(this));
      this.uploader.on(VodReportEvent.report_cos_upload, this.onCosUpload.bind(this));
      this.uploader.on(VodReportEvent.report_commit, this.onCommit.bind(this));
      this.uploader.on(VodReportEvent.report_done, this.onDone.bind(this));
    }

    // PrepareUpload
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
    }

    // ApplyUploadUGC
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
    }

    // upload to cos
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
    }

    // CommitUploadUGC
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
}();

/***/ }),

/***/ 940:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var COS = __webpack_require__(792);
var vodUtil = __webpack_require__(75);
var _require = __webpack_require__(832),
  UploaderEvent = _require.UploaderEvent;
var _require2 = __webpack_require__(32),
  EventEmitter = _require2.EventEmitter;
var COS_REGION_KEY = "COS_REGION_KEY";
var _require3 = __webpack_require__(532),
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
  function Uploader(opts) {
    var _this;
    _classCallCheck(this, Uploader);
    _this = _callSuper(this, Uploader);
    _defineProperty(_this, "retryCommitNum", 3);
    _defineProperty(_this, "retryApplyNum", 3);
    _defineProperty(_this, "retryPrepareNum", 3);
    var self = _this;
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
    self.getSignature = opts.getSignature;
    // self.success = opts.success;
    self.error = opts.error;
    self.progress = opts.progress;
    self.finish = opts.finish;
    if (!self.getSignature) {
      throw new Error("need `getSignature` param");
    }
    if (!vodUtil.isFunction(self.getSignature) ||
    // !vodUtil.isFunction(self.success) ||
    !vodUtil.isFunction(self.error) || !vodUtil.isFunction(self.progress) || !vodUtil.isFunction(self.finish)) {
      throw new Error("getSignature, error, progress, finish must be a Function.");
    }
    // 网络状态变化时重新竞速获取最优 storeRegion
    // wx.onNetworkStatusChange((res) => {
    //   if (res.isConnected) {
    //     this.requestRegion();
    //   }
    // });
    return _this;
  }
  _inherits(Uploader, _EventEmitter);
  return _createClass(Uploader, [{
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
        wx.setStorageSync(COS_REGION_KEY, res);
        // report target region obtain from prepare
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
      var self = this;
      // self.getStoreRegion((region) => {

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
            videoType: self.videoFileMessage.type
            // videoSize: self.videoFileMessage.size,
          };
        }
        if (self.coverFileMessage) {
          // upload video together with cover
          sendParams.coverName = self.coverFileMessage.name;
          sendParams.coverType = self.coverFileMessage.type;
          // sendParams.coverSize = self.coverFileMessage.size;
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
        var u = url.match(/^(https?:\/\/([^\/]+)\/)([^\/]*\/?)(.*)$/);
        opt.url = url.replace(u[2], "vod2.qcloud.com");
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
          onProgress: vodUtil.noop
          // cover don't need progress
          // onProgress: function onProgress(data) {
          //   self.emit(UploaderEvent.cover_progress, data);
          // }
        });
        uploadCosParams.push(cosCoverParam);
      }
      var uploadPromises = uploadCosParams.map(function (uploadCosParam) {
        return new Promise(function (resolve, reject) {
          var requestStartTime = Date.now();
          cos.sliceUploadFile(
          // cos.postObject(
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
            }
            // when succeeds
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

/***/ 75:
/***/ ((module) => {

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

/***/ 330:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"vod-wx-sdk-v2","version":"1.0.3","description":"Tencent cloud vod sdk for wechat mini program","main":"dist/vod-wx-sdk-v2.js","miniprogram":"dist","scripts":{"build":"webpack --config webpack.config.js","dev":"webpack --config webpack.dev.js --watch"},"repository":{"type":"git","url":"git+https://github.com/tencentyun/vod-wx-sdk-v2.git"},"keywords":["vod","tencentcloud","qcloud","wechat"],"author":"alsotang <alsotang@gmail.com>","contributors":["_windmill <l20122005@live.com>"],"license":"MIT","bugs":{"url":"https://github.com/tencentyun/vod-wx-sdk-v2/issues"},"homepage":"https://github.com/tencentyun/vod-wx-sdk-v2#readme","devDependencies":{"@babel/core":"^7.12.10","@babel/plugin-proposal-class-properties":"^7.12.1","@babel/preset-env":"^7.12.11","babel-loader":"^8.2.2","eslint":"^5.16.0","eslint-config-airbnb-base":"^13.2.0","eslint-config-prettier":"^9.1.0","eslint-plugin-import":"^2.31.0","eslint-plugin-prettier":"^5.2.1","webpack":"^5.97.1","webpack-cli":"^5.1.4"},"dependencies":{"cos-wx-sdk-v5":"^1.7.2"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(940);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;