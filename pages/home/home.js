// pages/home/home.js
import {
  getMultiData
} from '../../service/home.js'
import request from '../../service/network.js'



Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1.请求轮播图以及推荐数据
    getMultiData().then(res => {
      const banners = res.data.data.banners.list;
      const recommends = res.data.data.recommends.list;
      //将数据放进data中
      this.setData({
        banners,
        recommends
      })
    });
  }
})