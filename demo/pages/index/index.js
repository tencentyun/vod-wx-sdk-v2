const VodUploader = require('../../lib/vod-wx-sdk-v2.js');

const app = getApp()

Page({
  data: {
    fileName: '',
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
  inputChange: function (evt) {
    this.fileName = evt.detail.value;
  },
  chooseFile: function () {
    var This = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      compressed: true,
      maxDuration: 60,
      success: function (file) {
        VodUploader.start({
          mediaFile: file, //必填，把chooseVideo回调的参数(file)传进来
          mediaName: This.fileName, //选填，视频名称，强烈推荐填写(如果不填，则默认为“来自微信小程序”)
          getSignature: This.getSignature, //必填，获取签名的函数
          success: function (result) {
            console.log('success');
            console.log(result);
          },
          error: function (result) {
            console.log('error');
            console.log(result);
            wx.showModal({
              title: '上传失败',
              content: JSON.stringify(result),
              showCancel: false
            });
          },
          progress: function (result) {
            console.log('progress');
            console.log(result);
            wx.showLoading({
              title: '上传中 ' + result.percent * 100 + '%',
            });
          },
          finish: function (result) {
            console.log('finish');
            console.log(result);
            wx.hideLoading()
            wx.showModal({
              title: '上传成功',
              content: 'fileId:' + result.fileId + '\nvideoName:' + result.videoName,
              showCancel: false
            });
          }
        });
      }
    })
  }
})