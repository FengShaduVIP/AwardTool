//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad:function() {
    if (!app.globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/index/index'
      });
    }
    this.setData({
      config: app.globalData.config,
      userInfo: app.globalData.userInfo
    })
  },
  onShow: function () {
    if (app.globalData.userInfo) {
      this.setData({
        config: app.globalData.config,
        userInfo: app.globalData.userInfo
      })
    }
  }
})