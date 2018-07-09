import Vue from 'vue';
import Vuex from 'vuex';	
Vue.use(Vuex);

const state = {
  isLogin: false,
}

const mutations = {
  changeLogin (state, value) {
    state.isLogin = value
  }
}

const actions = {
  changeLogin ({commit}, value) {
    commit ('changeLogin', value)
  }
}

const store = new Vuex.Store({
  state,mutations,actions
})

export default store