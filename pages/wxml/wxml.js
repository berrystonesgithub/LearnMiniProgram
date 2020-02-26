// pages/wxml/wxml.js
Page({

  data: {
    message: "你好小程序",
    firstname: 'Berry',
    lastname: 'Stone',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies:["星际穿越","盗梦空间","大话西游"],
    nums:[
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
      [13,14,15,16]
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleColor() {
    this.setData({
      isActive: !this.data.isActive
    });
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    if (this.data.score >= 0 && this.data.score <100) {
      console.log('aaa')
      if (this.data.score + 6 < 100){
        this.setData({
          score: this.data.score + 6
        })
      } else {
        this.setData({
          score: 100
        })}
    }
  }


})