import axios from './axios'
// API请求方法'http://rap2api.taobao.org/app/mock/20322'
const httpUrl = ''
// const httpUrl = "http://w.hhqccar.cn"
//先判断客户是否存在
function isExistCustomer(params = {}) { 
  return axios.post(httpUrl+'/cliapi.php/Client/phone_register',params)
}
//注册
function getCode(params) {
  return axios.get(httpUrl+'/cliapi.php/Client/sendcode',params)
}
function saveRegister(params) { 
  return axios.post(httpUrl + '/cliapi.php/Client/register', params);
}
//登录
function login(params) { 
  return axios.post(httpUrl+"/cliapi.php/Client/login",params)
}
//忘记密码
function forget(params) {
  return axios.post(httpUrl+"/cliapi.php/Client/forget",params)
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

//车辆列表
function carList(params = {}) { 
  return axios.post(httpUrl+'/cliapi.php/Car/index',params)
}
//新增车辆
function addCar(params = {}) {
  return axios.post(httpUrl + '/cliapi.php/Car/addcar',params)  
}
//删除车辆
function delCar(params = {}) { 
  return axios.post(httpUrl + '/cliapi.php/Car/delcar',params)
}
//设置默认车辆
function setCarDefault(params = {}) { 
  return axios.post(httpUrl+'/cliapi.php/Car/car_default',params)
}
//具体车辆信息
function carMsg(params = {}) { 
  return axios.post(httpUrl + '/cliapi.php/Car/carone',params)
}


//车辆型号
function bandList(params = {}) { 
  return axios.post(httpUrl+'/api.php/TechCarModels/index',params)
}
function carModules(params = {}) { 
  return axios.post(httpUrl+'/api.php/TechCarModels/carmodels',params)
}
function carYearPl(params = {}) { 
  return axios.post(httpUrl+'/api.php/TechCarModels/yearPl',params)
}

export {
  isExistCustomer,
  getCode,
  saveRegister,
  login,
  forget,
  getIndexBanner,
  getRecommendList,
  getNearbyStores,
  carList,//车辆列表
  addCar,//新增车辆
  delCar,//删除车辆
  setCarDefault,//设备默认车辆
  carMsg,//具体车辆信息
  bandList,//车辆型号
  carModules,//车辆模型
  carYearPl,//车系
}