//注册一个小程序示例
App({
  //小程序初始化完成时
  onLaunch: function() {
    //获取用户信息
  },
  //小程序显示时
  onShow: function(options) {
    //1.判断小程序的进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        console.log('1001');
    }

    //2.获取用户的信息，并且获取到用户信息后，将用户的信息传递给服务器
    wx.getUserInfo({
      success : function(res){
        console.log(res);
      } 
    })
  },
  //小程序隐藏
  onHide: function() {

  },
  //小程序产生错误
  onError: function(msg) {

  },
  gobalData:{
    name: 'BerryStone',
    age: 20
  }
})