import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//首页
const Index = () => import('@/components/Index')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
  ]
})
