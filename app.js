App({
  // 对象：小程序关闭掉后会被回收
  globalData: {
    tocken: ''
  },
  onLaunch: function() {
    //第一步，取出token，如果没有过期，就直接登录
    const token = wx.getStorageSync('token');

    //第二步，判断token是否有值
    if (token && token.length !== 0) { //已经有token，验证token是否过期
      console.log('执行检测token');
      this.check_token(token) //验证token是否过期
    } else { //没有，登录
      console.log('执行登录操作');
      this.login();
    }
  },
  check_token: (token) => {
    wx.request({
      url: 'http://127.0.0.1:8080/auth',
      header: {
        token
      },
      method: 'post',
      success: (res) => {
        if(!res.data.errorCode){
          this.globalData.token = token;
        }else{
          login();
        }
      },
      fail: (err) => {

      }
    })
  },
  login: () => {
    // 登录操作
    wx.login({
      success: (res) => {
        //1.获取code
        const code = res.code;

        //2.将code发送给服务器
        wx.request({
          url: 'http://127.0.0.1:8080/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.tocken;

            //2.将token保存在globalData中
            this.globalData.token = token;

            //3.进行本地的存储
            wx.setStorageSync('token', token);
          }
        })
      }
    })
  }
})