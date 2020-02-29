// export default function request(options){
//   return new Promise((resolve,reject)=>{
//     let { url, data = {}, method = 'get' } = options;
//     wx.request({
//       url,
//       method,
//       data,
//       success: function (res) {
//         resolve(res)
//       },
//       fail: function (err) {
//         reject(err)
//       }
//     })
//   })
// }

export default function request(options) {
  return new Promise((resolve, reject) => {
    let { url, data = {}, method = 'get' } = options;
    wx.request({
      url,
      method,
      data,
      success: resolve,
      fail: reject
    })
  })
}