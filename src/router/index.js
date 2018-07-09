import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//首页
const Index = () => import('@/pages/Index')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页'
      },
    },
  ]
})
