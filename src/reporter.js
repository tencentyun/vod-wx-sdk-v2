const Uploader = require("./vod");
const pkg = require("../package.json");

const VodReportEvent = {
  report_prepare: "report_prepare",
  report_apply: "report_apply",
  report_cos_upload: "report_cos_upload",
  report_commit: "report_commit",
  report_done: "report_done",
};

const ReqType = {
  prepare: 10000,
  apply: 10001,
  cos_upload: 20001,
  commit: 10002,
  done: 40001,
};

exports.reportEvent = VodReportEvent;
exports.VodReporter = class {
  uploader = undefined;
  options = undefined;

  // only partial data when created
  baseReportData = {
    version: pkg.version,
    platform: 4000,
    device: (function () {
      const { brand, model, version } = wx.getSystemInfoSync();
      return `${brand}-${model}-wx${version}`;
    })(),
  };

  reportUrl = "https://vodreport.qcloud.com/ugcupload_new";

  constructor(uploader, options) {
    this.uploader = uploader;
    this.options = options;

    this.init();
  }

  init() {
    this.uploader.on(VodReportEvent.report_prepare, this.onPrepare.bind(this));
    this.uploader.on(VodReportEvent.report_apply, this.onApply.bind(this));
    this.uploader.on(
      VodReportEvent.report_cos_upload,
      this.onCosUpload.bind(this)
    );
    this.uploader.on(VodReportEvent.report_commit, this.onCommit.bind(this));
    this.uploader.on(VodReportEvent.report_done, this.onDone.bind(this));
  }

  // PrepareUpload
  onPrepare(reportObj) {
    const uploader = this.uploader;
    try {
      const customReportData = {
        appId: uploader.appId,
        reqType: ReqType.prepare,
        errCode: 0,
        vodErrCode: 0,
        errMsg: "",
        reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
        reqTime: Number(reportObj.requestStartTime),
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
  onApply(reportObj) {
    try {
      const uploader = this.uploader;
      if (!uploader.videoFileMessage) {
        return;
      }
      const file = uploader.videoFileMessage;
      Object.assign(this.baseReportData, {
        appId: uploader.appId,
        fileSize: file.size,
        fileName: file.name,
        fileType: file.type,
        vodSessionKey: uploader.vodSessionKey,
        reqKey: uploader.reqKey,
        reportId: uploader.reportId,
      });

      const customReportData = {
        reqType: ReqType.apply,
        errCode: 0,
        vodErrCode: 0,
        errMsg: "",
        reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
        reqTime: Number(reportObj.requestStartTime),
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
      console.error(`onApply`, e);
    }
  }

  // upload to cos
  onCosUpload(reportObj) {
    try {
      const customReportData = {
        reqType: ReqType.cos_upload,
        errCode: 0,
        cosErrCode: "",
        errMsg: "",
        reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
        reqTime: Number(reportObj.requestStartTime),
      };
      if (reportObj.err) {
        customReportData.errCode = 1;
        customReportData.cosErrCode = reportObj.err.error
          ? reportObj.err.error.Code
          : reportObj.err;
        if (reportObj.err && reportObj.err.error === "error") {
          customReportData.cosErrCode = "cors error";
        }
        customReportData.errMsg = JSON.stringify(reportObj.err);
      }
      this.report(customReportData);
    } catch (e) {
      console.error(`onCosUpload`, e);
    }
  }

  // CommitUploadUGC
  onCommit(reportObj) {
    try {
      const customReportData = {
        reqType: ReqType.commit,
        errCode: 0,
        vodErrCode: 0,
        errMsg: "",
        reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
        reqTime: Number(reportObj.requestStartTime),
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
      console.error(`onCommit`, e);
    }
  }

  onDone(reportObj) {
    try {
      const customReportData = {
        reqType: ReqType.done,
        errCode: reportObj.err && reportObj.err.code,
        reqTimeCost: Number(new Date()) - Number(reportObj.requestStartTime),
        reqTime: Number(reportObj.requestStartTime),
      };
      this.report(customReportData);
    } catch (e) {
      console.error(`onDone`, e);
    }
  }

  report(reportData) {
    reportData = { ...this.baseReportData, ...reportData };
    this.send(reportData);
  }

  send(reportData) {
    if (process.env.NODE_ENV === "development") {
      return console.log("上报: ", reportData);
    }
    console.log("上报: ", reportData);
    wx.request({
      method: "POST",
      url: this.reportUrl,
      data: reportData,
      dataType: "json",
      fail: (err) => {
        console.log(err);
      },
    });
  }
};
