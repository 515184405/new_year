// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str : ['就告诉老公那边','送二更不能换地方公司','代理发布到两点半那地','方了办公机构的副本呢'],
    video_module:{ //video设置模块
      controls : false,
      video_img : null,
      video_url : null,
    },
    scroll_data:{ //文字滚动设置
      autoplay : true,
      interval : 3000,
      duration : 1000,
      vertical : true,
      circular : true,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})