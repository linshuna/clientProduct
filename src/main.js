// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/axios'
import './assets/js/flexible.min'
Vue.prototype.$http = axios
import 'babel-polyfill' // 转换es6api

import base from '@/utils/base.js'
Vue.use(base)

Vue.use(require('vue-wechat-title'))

import store from './store/index.js'
import filters from './utils/filters.js'
// 引入mint-ui 
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import { Toast} from 'mint-ui'

import './assets/css/base.scss'
import './assets/css/animations.css'
import './assets/css/border-1px.css'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})

// Vue.filter('distanceFilter', function (value) {
//   // 返回处理后的值
//   let gainKm = Math.round(value)
//   if (gainKm > 1000) {
//     return (gainKm / 1000).toFixed(2) + 'km'
//   } else { 
//     return gainKm+"m"
//   }
//   // Math.round(item.distance)<1000?Math.round(item.distance)+'m':(Math.round(item.distance)/1000).toFixed(2)+'km'
// })
for (let key in filters) { 
  Vue.filter(key,filters[key])
}