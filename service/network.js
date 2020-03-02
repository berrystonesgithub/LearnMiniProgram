import {
  baseURL
} from './config.js'


export default function(options) {
  let {
    url,
    data = {},
    method = 'get'
  } = options;
  url = baseURL + url;
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      success: resolve,
      fail: reject
    })
  });
}