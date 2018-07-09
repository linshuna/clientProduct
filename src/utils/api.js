import axios from './axios'
// API请求方法
const httpUrl = 'http://rap2api.taobao.org/app/mock/20322'

// 首页
function getIndexData (params = {}) {
  return axios.get(httpUrl + '/api.php/Client/index', params)
}

export {
  getIndexData
}