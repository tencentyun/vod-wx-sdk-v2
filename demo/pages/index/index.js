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
  // 1. Demo上传之前建议在本地设置中勾选不校验合法域名，https证书选项
  // 2. 如果遇到请求报某个域名不在合法域名列表， 可以参考https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html 在小程序开发者平台配置域名请求白名单
  getSignature: function (callback) {
    wx.request({
      url: 'https://demo.vod2.myqcloud.com/ugc-upload/',
      method: 'POST',
      data: {
        Action: 'GetUgcUploadSign'
      },
      dataType: 'json',
      success: function (res) {
        if (res.data && res.data.data.sign) {
          callback(res.data.data.sign);
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
    wx.chooseMedia({
      sourceType: ["album", "camera"],
      sizeType: ["original"],
      maxDuration: 60,
      success: function(res) {
        console.log(res.tempFiles);
        self.setData({
          videoFile: res.tempFiles[0]
        });
        console.log(`add videoFile`, res.tempFiles[0]);
      }
    });
  },
  chooseCover() {
    const self = this;
    wx.chooseMedia({
      sourceType: ["album", "camera"],
      sizeType: ["original"],
      count: 1,
      mediaType: ["image"],
      success: function(res) {
        console.log(res.tempFiles);
        self.setData({
          coverFile: res.tempFiles[0]
        });
        console.log(`add coverFile`, res.tempFiles[0]);
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
