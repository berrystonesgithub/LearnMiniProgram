// pages/detail/detail.js
Page({
  onLoad: function(options){
    console.log(options)
  },
  onUnload(){
    //1.获取首页的页面对象
    //getCurrentPages当前所有活跃的页面
    const pages = getCurrentPages();
    console.log(pages);
    const home = pages[pages.length - 2];

    //2.调用页面对象的方法
    home.setData({
      title: '呵呵呵'
    })
  },
  handlBackHome(){
    wx.navigateBack({
      delta:2
    })
  }
})