import axios from './axios'
// API请求方法
const httpUrl = 'http://rap2api.taobao.org/app/mock/20322'

// 首页 轮播图
function getIndexBanner (params = {}) {
  return axios.post(httpUrl + '/cliapi.php/Index/banner', params)
}
// 首页 商品推荐
function getRecommendList (params = {}) {
  return axios.post(httpUrl + '/cliapi.php/Index/maintain_recommend', params)
}
// 首页 最近门店
function getNearbyStores (params = {}) {
  return axios.post(httpUrl + '/cliapi.php/Index/store_nearest', params)
}
// 我的 我的评价
function getEvaluate (params = {}) {
  return axios.post(httpUrl + '/cliapi.php/Client/evaluate', params)
}
// // 我的 我的预约
// function getMyAppoint(params = {}) {
//     return axios.post(httpUrl + '/cliapi.php/Client/appoint', params)
// }

// 我的 我的首页
function getIndex(params) {
    return axios.post(httpUrl + '/cliapi.php/Client/Index', params)
}

// 我的 个人中心
function getMyCenter(params = {}) {
    return axios.post(httpUrl + '/cliapi.php/Client/data', params)
}
// 我的 我的车辆
function getMyCar(params = {}) {
    return axios.post(httpUrl + '/cliapi.php/Car/index', params)
}
// 我的 我的车辆默认
function getCarDefault(params = {}) {
    return axios.post(httpUrl + '/cliapi.php/Car/car_default', params)
}
// 我的 帮助中心
function getHelpCenter(params = {}) {
    return axios.post(httpUrl + '/cliapi.php/Client/help', params)
}
// 我的 帮助中心
function getHelpDetails(params = {}) {
    return axios.post(httpUrl + '/cliapi.php/Client/help_details', params)
}
//附近
// 附近门店
function getNearbyStorea(params = {}) {
    return axios.post(httpUrl + '/cliapi.php/Index/nearby_store', params)
}
//预约
// 立即预约
function getAppointShop(params = {}) {
    return axios.post(httpUrl + '/cliapi.php/Appoint/appoint_shop', params)
}
// 我的 我的预约
function getAppointConent(params = {}) {
    return axios.post(httpUrl + '/cliapi.php/Client/appoint', params)
}

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
    getEvaluate,
    // getMyAppoint,
    getIndex,
    getMyCenter,
    getMyCar,
    getCarDefault,
    getHelpCenter,
    getNearbyStorea,
    getHelpDetails,
    getAppointShop,
    getAppointConent


}