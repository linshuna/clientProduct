import axios from 'axios'
import Qs from 'qs'
import {
  Toast
} from 'mint-ui'
const service = axios.create()

// http request 拦截器
// service.interceptors.request.use(
//   config => {
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   })

// // http response 拦截器
// service.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return Promise.reject(error);
//   })


service.get = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: data
      })
      .then(response => {
        if (response.data.errorCode == 200) {
          resolve(response.data.data);
          return
        }
        Toast(response.data.message)
      }, err => {
        Toast('网络出错,请稍后重试')
        reject(err)
      })
  })
}

service.post = (url, data = {}, config = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, Qs.stringify(data), config)
      .then(response => {
        if (response.data.errorCode == 200) {
          resolve(response.data.data);
          return
        }
        Toast(response.data.message)
      }, err => {
        Toast('网络出错,请稍后重试')
        reject(err)
      })
  })
}

export default service
