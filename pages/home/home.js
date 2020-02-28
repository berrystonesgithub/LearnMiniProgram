// pages/home/home.js
Page({
  data: {
    counter: 0
  },
  handleIncrement(event){
    this.setData({
      counter: ++ this.data.counter
    })
    console.log(event);
  }


})