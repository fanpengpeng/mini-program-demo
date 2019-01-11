// pages/my/my.js

const App = getApp(); // 获取小程序实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    items: [
      {
        icon: '../../assets/images/userinfo_icon/iconfont-order.png',
        text: '我的订单',
        path: '/pages/order/list/index'
      },
      {
        icon: '../../assets/images/userinfo_icon/iconfont-addr.png',
        text: '收货地址',
        path: '/pages/order/list/index'
      },
      {
        icon: '../../assets/images/userinfo_icon/iconfont-kefu.png',
        text: '联系客服',
        path: '15210569905',
      },
      {
        icon: '../../assets/images/userinfo_icon/iconfont-help.png',
        text: '常见问题',
        path: '/pages/order/list/index',
      }
    ],
    settings: [
      {
        icon: '../../assets/images/userinfo_icon/iconfont-clear.png',
        text: '清除缓存',
        path: '0.0KB'
      },
      {
        icon: '../../assets/images/userinfo_icon/iconfont-about.png',
        text: '关于我们',
        path: '/pages/about/index'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent('#dialog');
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
   * 获取用户信息
   */
  getUserInfo () {
    const userInfo = App.globalData.userInfo;

    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
    } else {
      // 重新调用接口获取用户信息
    }
  },

  /**
   * 页面跳转
   */
  navigateTo (e) {
    const index = e.currentTarget.dataset.index;
    const path = e.currentTarget.dataset.path;
    if (index === 2) {
      wx.makePhoneCall({
        phoneNumber: path
      })
    } else {
      wx.navigateTo({
        url: path,
      })
    }
  },

  /**
   * 
   */
  bindtap (e) {
    this.setData({
      title: '提示',
      content: '确定清除缓存吗？'
    })
    this.dialog.show();
  },

  confirm (e) {
    console.log(e, '组件回调')
  },

  cancel (e) {
    this.dialog.hide();
  },

  /**
   * 退出登录
   */
  logout (e) {
    console.log(e)
    const that = this
    wx.showModal({
      title: '警告',
      content: '确定定退出当前账号吗？',
      success (res) {
        if (res.confirm) {
          that.signOut()
        }
      }
    })
  },

  /**
   * 退出登录
   */
  signOut () {
    // 清除本地缓存
    wx.removeStorageSync('token')
  }
})