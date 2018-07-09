import axios from './axios'
// API请求方法
// 示例
function fetchApi (params = {}) {
  return axios.get('/api.php/TechSysClient/clientinfo', params)
}

export {
  fetchApi
}