import axios from './axios'
// API请求方法
const httpUrl = 'http://rap2api.taobao.org/app/mock/20322'

// 首页轮播图
function getIndexBanner (params = {}) {
  return axios.post(httpUrl + '/cliapi.php/Index/banner', params)
}
// 首页商品推荐
function getRecommendList (params = {}) {
  return axios.post(httpUrl + '/cliapi.php/Index/maintain_recommend', params)
}
// 首页最近门店
function getNearbyStores (params = {}) {
  return axios.post(httpUrl + '/cliapi.php/Index/store_nearest', params)
}

export {
  getIndexBanner,
  getRecommendList,
  getNearbyStores,
}