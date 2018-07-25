import axios from './axios'
// API请求方法'http://rap2api.taobao.org/app/mock/20322'
const httpUrl = ''
// const httpUrl = "http://w.hhqccar.cn"
//先判断客户是否存在
function isExistCustomer(params = {}) {
    return axios.post('/cliapi.php/Client/phone_register', params)
}

//注册
function getCode(params) {
    return axios.get('/cliapi.php/Client/sendcode', params)
}

function saveRegister(params) {
    return axios.post('/cliapi.php/Client/register', params);
}

//登录
function login(params) {
    return axios.post("/cliapi.php/Client/login", params)
}

//忘记密码
function forget(params) {
    return axios.post("/cliapi.php/Client/forget", params)
}

// 首页 轮播图
function getIndexBanner(params = {}) {
    return axios.post('/cliapi.php/Index/banner', params)
}

// 首页 商品推荐
function getRecommendList(params = {}) {
    return axios.post('/cliapi.php/Index/maintain_recommend', params)
}

// 首页 最近门店
function getNearbyStores(params = {}) {
    return axios.post('/cliapi.php/Index/store_nearest', params)
}

// 我的 我的评价
function getEvaluate(params = {}) {
    return axios.post('/cliapi.php/Client/evaluate', params)
}

// // 我的 我的预约
// function getMyAppoint(params = {}) {
//     return axios.post(httpUrl + '/cliapi.php/Client/appoint', params)
// }

// 我的 我的首页
function getIndex(params) {
    return axios.post('/cliapi.php/Client/Index', params)
}

// 我的 个人信息列表
function getMyCenter(params = {}) {
    return axios.post('/cliapi.php/Client/data', params)
}

//我的 个人信息编辑
function editorMyCenter(params = {}) { 
  return axios.post('/cliapi.php/Client/client_edit',params)
}

//上传头像
function changeHeadimg(params = {}) {
    return axios.post('/cliapi.php/Client/avatar_adds', params)
}

// 我的 帮助中心
function getHelpCenter(params = {}) {
    return axios.post('/cliapi.php/Client/help', params)
}

// 我的 帮助中心
function getHelpDetails(params = {}) {
    return axios.post('/cliapi.php/Client/help_details', params)
}

//附近
// 附近门店
function getStoreList(params = {}) {
    return axios.post('/cliapi.php/AppendixStore/index', params)
}

//筛选城市
function getCityList(params = {}) {
    return axios.get('/cliapi.php/AppendixStore/provinceAndcity', params)
}

//获取地区
function getAddress(params = {}) {
    return axios.post('/api/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&get_poi=0&output=jsonp', params)
}

//预约
// 立即预约
function getAppointShop(params = {}) {
    return axios.post('/cliapi.php/Appoint/appoint_shop', params)
}

// 我的 我的预约
function getAppointConent(params = {}) {
    return axios.post('/cliapi.php/Client/appoint', params)
}

// 首页轮播图
function getIndexBanner(params = {}) {
    return axios.post('/cliapi.php/Index/banner', params)
}

// 首页商品推荐
function getRecommendList(params = {}) {
    return axios.post('/cliapi.php/Index/maintain_recommend', params)
}

// 首页最近门店
function getNearbyStores(params = {}) {
    return axios.post('/cliapi.php/Index/store_nearest', params)
}

// 首页 特惠
function activity(params = {}) {
    return axios.post('/cliapi.php/Discount/activity', params)
}


//车辆列表
function carList(params = {}) {
    return axios.post('/cliapi.php/Car/index', params)
}

//新增车辆
function addCar(params = {}) {
    return axios.post('/cliapi.php/Car/addcar', params)
}

//删除车辆
function delCar(params = {}) {
    return axios.post('/cliapi.php/Car/delcar', params)
}

//设置默认车辆
function setCarDefault(params = {}) {
    return axios.post('/cliapi.php/Car/car_default', params)
}


//具体车辆信息/cliapi.php/Car/editcar/carvid/:carvid
function carMsg(params = {}) {
  return axios.get('/cliapi.php/Car/editcar',params)
}
//编辑保存车辆信息
function editCar(params = {}) { 
  return axios.post('/cliapi.php/Car/editcar',params)
}

//我的  特惠
function getActivity(params = {}) {
    return axios.post('/cliapi.php/Discount/activity', params)
}

//首页  车险
function getClientRiskIndex(params = {}) {
    return axios.post('/cliapi.php/ClientRisk/index', params)
}

//首页  洗车
function getCarwashIndex(params = {}) {
    return axios.post('/cliapi.php/Carwash/index', params)
}
//首页  救援
function getClientRescue(params = {}) {
    return axios.post('/cliapi.php/ClientRescue/index', params)
}
//我的  订单
function getOrderIndex(params = {}) {
    return axios.post('/cliapi.php/Order/index_new', params)
}
//首頁 商城廣告
function getShopBanner(params = {}) {
    return axios.post('/cliapi.php/Shop/banner', params)
}
//首頁 商城推薦
function getShopRecommend(params = {}) {
    return axios.get('/cliapi.php/Shop/recommend', params)
}
//首頁 商城门店
function getShopStore(params = {}) {
    return axios.post('/cliapi.php/Shop/shop_store', params)
}
//我的 钱包
function getWalletIndex(params = {}) {
    return axios.post('/cliapi.php/Wallet/index', params)
}
//我的 钱包消费
function getWalletAmountlog(params = {}) {
    return axios.post('/cliapi.php/Wallet/amount_log', params)
}
//我的 钱包消费
function getWalletRechargelog(params = {}) {
    return axios.post('/cliapi.php/Wallet/recharge_log', params)
}
//我的 钱包分红
function getWalletBonuslog(params = {}) {
    return axios.post('/cliapi.php/Wallet/bonus_log', params)
}
//商城 列表
function getGoodsBuy(params = {}) {
    return axios.post('/cliapi.php/Goods/goods_buy', params)
}
//我的 订单带付款
function getOrderIndexNew(params = {}) {
    return axios.post('/cliapi.php/Order/index_new?state=1', params)
}
//我的 订单已付款
function getOrderIndexOld(params = {}) {
    return axios.post('/cliapi.php/Order/index_new?state=2', params)
}
//我的 订单已核销
function getOrderIndexThree(params = {}) {
    return axios.post('/cliapi.php/Order/index_new?state=3', params)
}
//我的 订单已过期
function getOrderIndexFour(params = {}) {
    return axios.post('/cliapi.php/Order/index_new?state=4', params)
}


//车辆型号
function bandList(params = {}) {
    return axios.post('/api.php/TechCarModels/index', params)
}

function carModules(params = {}) {
    return axios.post('/api.php/TechCarModels/carmodels', params)
}

function carYearPl(params = {}) {
    return axios.post('/api.php/TechCarModels/yearPl', params)
}

export {
    // isExistCustomer,
    // getCode,
    // saveRegister,
    // login,
    // forget,
    // getIndexBanner,
    // getRecommendList,
    // getNearbyStores,
    //
    // carList,//车辆列表
    // addCar,//新增车辆
    // delCar,//删除车辆
    // setCarDefault,//设备默认车辆
    // carMsg,//具体车辆信息
    // bandList,//车辆型号
    // carModules,//车辆模型
    // carYearPl,//车系
    //
    // getEvaluate, //我的评价
    // getIndex, //我的首页
    // getMyCenter, //我的 个人中心
    // getHelpCenter,// 我的 帮助中心
    // getHelpDetails,//我的 帮助中心
    // getAppointShop,// 预约 立即预约
    // getAppointConent,// 我的 我的预约
    // getActivity,//首页  特惠
    // getClientRiskIndex,//首页 车险
    // getCarwashIndex,//首页 洗车
    //
    // changeHeadimg,//上传头像
    // getCityList,//筛选城市
    // getAddress,//获取当前位置



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
  editCar,//编辑保存车辆信息
  bandList,//车辆型号
  carModules,//车辆模型
  carYearPl,//车系

  getEvaluate, //我的评价
  getIndex, //我的首页
  getMyCenter, //我的 个人信息列表
  editorMyCenter,//我的 个人信息编辑

  getHelpCenter,// 我的 帮助中心
  getStoreList,// 附近 附近门店
  getHelpDetails,//我的 帮助中心
  getAppointShop,// 预约 立即预约
  getAppointConent,// 我的 我的预约
  getActivity,//首页  特惠
  getClientRiskIndex,//首页 车险
    getCarwashIndex,//首页 洗车
    getClientRescue,//首页 救援
    getOrderIndex,//我的 订单
    getShopBanner,//首頁 商城廣告
    getShopRecommend,//首页 商城推薦
    getShopStore,//首页 商城门店


  changeHeadimg,//上传头像
  getCityList,//筛选城市
  getAddress,//获取当前位置

    getWalletIndex,//我的 钱包
    getWalletAmountlog,//我的 钱包消费记录
    getWalletRechargelog,//我的 钱包充值
    getWalletBonuslog,//我的  钱包分红
    getGoodsBuy,//我的 列表

    getOrderIndexNew,//我的 订单代付款
    getOrderIndexOld,//我的 订单已付款
    getOrderIndexThree,//我的 订单已核销
    getOrderIndexFour,//我的 订单已过期
}