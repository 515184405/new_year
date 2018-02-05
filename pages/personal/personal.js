// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    action : 1, //按钮状态
    is_flicker : false, //是否显示录制icon
    timer : null, //定时器开关
    camera_show : 1, //是否开始录像
    uid : null,
    str: ['就告诉老公那边', '送二更不能换地方公司', '代理发布到两点半那地', '方了办公机构的副本呢'],
    scroll_data: { //文字滚动设置
      autoplay: true,
      interval: 3000,
      duration: 1000,
      vertical: true,
      circular: true,
    }
  },
  flicker:function(){
    var that = this;
    this.data.timer = setInterval(function(){
      that.setData({
        'is_flicker': !that.data.is_flicker
      })
    },1000)
  },
  //录制视频方法
  startRecord:function(){
    var that = this;
    this.setData({
      'camera_show': 1,
    })
    const ctx = wx.createCameraContext();
    ctx.startRecord({
       success:res => {
         that.flicker();
         that.setData({
            'action' : 2,
          })
       },
       error:res => {
          console.log(res);
       }
    })
  },
  //结束录制方法
  stopRecord:function(){
    const ctx = wx.createCameraContext();
    ctx.stopRecord({
      success:res => {
        clearInterval(this.data.timer);
        this.setData({
          'action': 3,
          'camera_show': 2,
          'is_flicker': false,
          'video_img': res.tempThumbPath,
          'video_url': res.tempVideoPath,
        })
      }
    })
  },
  // 视频播放按钮
  plays:function(){
    var video = wx.createVideoContext('myVideo');
    video.play();
    this.setData({
      'action' : 4
    })
  },
  //视频停止按钮
  pauses:function(){
    var video = wx.createVideoContext('myVideo');
    video.pause();
  },
  //返回按钮
  returnFun:function(){
    this.setData({
      'action': 3,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //如果参数带play则把状态设置成action = 5;此状态为播放状态
    if(!!options.play){

      this.setData({
        'action' : 5,
      })
    }
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我的贺岁视频',
      path: '/page/personal/personal',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})