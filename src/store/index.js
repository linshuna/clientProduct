import Vue from 'vue';
import Vuex from 'vuex';	
Vue.use(Vuex);
import {
  login
} from '../utils/api.js'

import { Toast } from 'mint-ui'
const state = {
  key:'customerData',
  isLogin: false,
  customerData: null
}
const getters = {
  getStorage: function(state){
    let data = null;
    if(localStorage.getItem(state.key)!='undefined'){//不存在该key，也就是处于未登录状态
        data = JSON.parse(localStorage.getItem(state.key))
        if(state.key == 'customerData'){
            state.customerData = data;
        }
    }
    return data;
  },
  getReturnUrl: function(state){//获取url
    let url = window.location.href; 
    let returnUrl = '';
    if(url.indexOf("=")>-1){
      let urlArr = url.split("=");   
      returnUrl = urlArr[1]
    }else{
        returnUrl = "/index.html"
    }
    state.returnUrl = returnUrl;
    return state.returnUrl;
  }
}

const mutations = {
  changeLogin (state, value) {
    state.isLogin = value
  },
  _setName(state,value){
    state.key = value
  },
  _setStorage(state,value){
      if(state.key == 'customerData') state.customerData = value;
      localStorage.setItem(state.key,JSON.stringify(value))
  },
  _remvoeStorage(state){
      if(state.key == 'customerData'){
          state.customerData = null;
      }
      localStorage.removeItem(state.key)
  },
}

const actions = {
  changeLogin ({commit}, value) {
    commit ('changeLogin', value)
  },
  login(context,playData){
    let isTip = playData.notip;
    if(isTip){
        Vue.delete(playData,'istip');
    }
    console.log(playData)
    login(playData)
      .then(res => {
          console.log(isTip)
          if(isTip){
            Toast('登录成功')  
          }
          context.commit("_setStorage",res);//用vuex本地存储
          setTimeout(function(){
              window.location.href = '/customer'
          }, 1000)    
          
        })
        .catch(res=>{
            Toast("如有问题，请联系客户")
        })
    },
    logout(context){
        context.commit('_remvoeStorage')
        Toast("成功退出登录")
      setTimeout(function () {
        // context.getters.getReturnUrl
            window.location.href = '/customer'
        },1000)    
  },
  delToast(){
    let bodyObj = document.getElementsByTagName("body")[0];
    let toastObj = document.getElementsByClassName("mint-toast");
    let toastLen = toastObj.length;
    for(var i=0,len=toastObj.length;i < len;i++){
        if(toastObj[i]){
            bodyObj.removeChild(toastObj[i])
        }
    }    
  }
}

const store = new Vuex.Store({
  state,getters,mutations,actions
})

export default store