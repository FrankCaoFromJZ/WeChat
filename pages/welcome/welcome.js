// pages/welcome/welcome.js
Page({
  data: {

  },
  getUser: function(e) {
    if (e.detail.rawData) {
      wx.switchTab({
        url: '../home/home',
      })
    }else{
      console.log('给老子授权')
    }
  }
})