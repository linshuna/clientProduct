import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//首页
const Index = () => import('@/pages/Index')
//附近门店
const NearbyStores = () => import('@/pages/NearbyStores')
//预约
const Appointment = () => import('@/pages/Appointment')
//我的
const UserCenter = () => import('@/pages/UserCenter')
//我的订单
const MyOrder = () => import('@/pages/UserCenter/MyOrder')
//我的车辆
const MyCar = () => import('@/pages/UserCenter/MyCar')
//设置
const Setting = () => import('@/pages/UserCenter/Setting')
//评价
const Evaluate = () => import('@/pages/UserCenter/Evaluate')

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
    {
      path: '/NearbyStores',
      name: 'NearbyStores',
      component: NearbyStores,
      meta: {
        title: '附近门店'
      },
    },
    {
      path: '/Appointment',
      name: 'Appointment',
      component: Appointment,
      meta: {
        title: '预约'
      },
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        title: '我的'
      },
      children:[
        {
          path: '/UserCenter/MyOrder',
          component: MyOrder,
          meta: {
            title: '我的订单'
          },
        },
        {
          path: '/UserCenter/MyCar',
          component: MyCar,
          meta: {
            title: '我的车辆'
          },
        },
        {
          path: '/UserCenter/Setting',
          component: Setting,
          meta: {
            title: '设置'
          },
        },
        {
          path: '/UserCenter/Evaluate',
          component: Evaluate,
          meta: {
            title: '评价'
          },
        }
      ]
    },
  ]
})
