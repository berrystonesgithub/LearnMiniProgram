// pages/home/home.js
import request from '../../utils/network.js'

Page({

  data: {

  },
  onLoad: function(options) {
    //----------------------------1.原生方式发送网络请求------------------
    this.get_dataOriginal();

    //----------------------------2.使用封装的request
    request({
      url: "http://127.0.0.1:8080/json/product.json",
    }).then(res => {
      console.log(res)
    }).catch(err=>{
      console.log(err)
    });

  },

  get_dataOriginal() {
    //发送网络请求
    //1.发送最简单的get请求
    // wx.request({
    //   url: 'http://192.168.31.237:8080/json/product.json',
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })

    //2.get请求,并且携带参数
    // wx.request({
    //   url: 'http://192.168.31.237:8080/home/data',
    //   data:{
    //     type:sel,
    //     page:1
    //   },
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })

    //3.post请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'BerryStone',
    //     age: 20
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   fail: function (err) {
    //     console.log(err);
    //   }
    // })
  }


})