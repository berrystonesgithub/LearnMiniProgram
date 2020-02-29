// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '正在加载',
      duration: 2000,
      icon: 'loading',
      mask: true,
      success: function() {
        console.log('展示弹窗成功')
      },
      fail: function() {
        console.log('展示弹窗失败')
      },
      complete: function() {
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是开头',
      content: '我是内容',
      success: function(res) {
        console.log(res);
        if (res.cancel) {
          console.log('用户点击了取消');
        }
        if (res.confirm) {
          console.log('用户点击了确定');
        }
      },
      cancelText: '退出',
      cancelColor: '#ff0755'
      // showCancel: false
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    setTimeout(() => {
      wx.hideLoading();
    }, 1000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照', '转发'],
      itemColor: '',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onShareAppMessage: function(options) {
    return {
      title: '你好，转发',
      path: '/pages/about/about',
      imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582993255128&di=213ed37792851cdd0f015d731e0e9e01&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw631h453%2F20180302%2Fc0d5-fwnpcnt0541937.jpg'
      //图片地址，可以是网络地址，默认为首页截图
    }
  }
})