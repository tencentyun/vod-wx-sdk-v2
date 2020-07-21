const VodUploader = require("../../lib/vod-wx-sdk-v2.js");

const app = getApp();

Page({
  data: {
    fileName: "",
    videoFile: null,
    coverFile: null,
    progress: 0,
    uploader: null,
  },
  reset() {
    this.setData({
      fileName: "",
      videoFile: null,
      coverFile: null,
      progress: 0,
      uploader: null,
    })
  },
  getSignature: function (callback) {
    wx.request({
      url: 'https://xzb.qcloud.com/get_vod_sign',
      method: 'POST',
      data: {
        Action: 'GetVodSignatureV2'
      },
      dataType: 'json',
      success: function (res) {
        if (res.data && res.data.data.signature) {
          callback(res.data.data.signature);
        } else {
          return '获取签名失败';
        }
      }
    });
  },
  inputChange: function(evt) {
    this.setData({
      fileName: evt.detail.value
    });
  },
  chooseVideo: function() {
    const self = this;
    wx.chooseVideo({
      sourceType: ["album", "camera"],
      compressed: false,
      maxDuration: 60,
      success: function(file) {
        console.log(file);
        self.setData({
          videoFile: file
        });
        console.log(`add videoFile`, file);
      }
    });
  },
  chooseCover() {
    const self = this;
    wx.chooseImage({
      sourceType: ["album", "camera"],
      count: 1,
      success: function(file) {
        console.log(file);
        self.setData({
          coverFile: file
        });
        console.log(`add coverFile`, file);
      }
    });
  },
  startUpload() {
    wx.showLoading({
      title: '处理中',
      mask: true,
    })
    const self = this;
    const uploader = VodUploader.start({
      mediaFile: self.data.videoFile, //必填，把chooseVideo回调的参数(file)传进来
      getSignature: self.getSignature, //必填，获取签名的函数

      mediaName: self.data.fileName, //选填，视频名称，强烈推荐填写(如果不填，则默认为“来自小程序”)
      coverFile: self.data.coverFile, // 选填，视频封面
      error: function(result) {
        console.log("error");
        console.log(result);
        wx.hideLoading();
        wx.showModal({
          title: "上传失败",
          content: JSON.stringify(result),
          showCancel: false
        });
      },
      progress: function(result) {
        console.log("progress");
        console.log(result);
        wx.hideLoading();
        self.setData({
          progress: parseInt(result.percent * 100)
        }) 
        // wx.showLoading({
        //   title: "上传中 " + result.percent * 100 + "%"
        // });
      },
      finish: function(result) {
        console.log("finish");
        console.log(result);
        wx.hideLoading();
        wx.showModal({
          title: "上传成功",
          content:
            "fileId:" + result.fileId + "\nvideoName:" + result.videoName,
          showCancel: false
        });
        self.reset();
      }
    });
    this.setData({
      uploader: uploader,
    })
  },
  cancelUpload() {
    this.data.uploader.cancel();
  },
  resumeUpload() {
    this.data.uploader.start();
  }
});
