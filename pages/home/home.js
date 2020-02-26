// pages/home/home.js
//getApp()获取APP()产生的示例对象
// const app = getApp();

// const name = app.gobalData.name;
// const age = app.gobalData.age;

//注册一个页面
//页面也有自己的生命周期函数
Page({
  //-----------------2.初始化数据
  data :{
    list:[]
  },
  handleGetUserInfo(event){
    console.log(event);
  },

  // ------- 1.监听页面的生命周期函数
  // 页面被加载出来
  onLoad(){
    console.log('onLoad');
    wx.request({
      url: '',
      success:(res)=>{
        console.log(res);
        const data = res.data.data.list;
        this.setData({
          list : data
        })
      }
    })
  },
  // 页面显示出来时
  onShow(){
    console.log('onShow');
  },
  // 页面初次渲染完成
  onReady() {
    console.log('onReady');
  },
  // 页面隐藏起来时
  onHide(){
    console.log('onHide');
  },
  // 跳转到其他界面，页面被destroy
  onUnload(){
    console.log('onUnload');
  },

  // ----------------3.监听wxml中相关的一些事件
  handleGetUserInfo(ev){
    console.log(ev);
  },

  //------------------4.监听其他事件
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj);
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  //监听下拉刷新事件
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})