// pages/image/image.js
Page({
  data: {
    imgPath:''
  },
  handleChooseAlbum(){
    //系统API让用户在相册中选择图片或者拍照
    wx.chooseImage({
      success:res => {
        //数组=>可以选择九张图片
        //1.取出路径
        const path = res.tempFilePaths[0]
      
        //2.设置imgPath
        //this=>undefined
        this.setData({
          imgPath :path
        })
      },
    })

  },
  handleImgLoad(){
    console.log('加载完成');
  }


})