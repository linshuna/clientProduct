import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//注册
const Register = () => import('@/pages/Register')
//登录
const Login = () => import('@/pages/Login')
//忘记秘密
const Forgetpwd = () => import('@/pages/Forgetpwd')
//首页
const Index = () => import('@/pages/Index')

//特惠
const Discounts = () => import('@/pages/Index/Discounts/DiscountsPage')
//车险
const Insurance = () => import('@/pages/Index/Insurance/Insurance')
//车险详情
const InsuranceDetails = () => import('@/pages/Index/Insurance/InsuranceDetails')
//救援
const Rescue = () => import('@/pages/Index/Rescue/Rescue')
//保养
const UpKeep = () => import('@/pages/Index/UpKeep/UpKeep')
//洗车
const CarWash = () => import('@/pages/Index/CarWash/CarWash')
//洗车详情
const CarWashDetails = () => import('@/pages/Index/CarWash/CarWashDetails')


//我的
//支付详情
const CarWashPayPage = () => import('@/pages/Index/CarWash/CarWashPayPage')

//附近门店
const NearbyStores = () => import('@/pages/NearbyStores')

//预约
const Appointment = () => import('@/pages/Appointment')
//预约详情
const NowAppoint = () => import('@/pages/Appointment/NowAppoint')
//我的
const UserCenter = () => import('@/pages/UserCenter')
//我的订单
const MyOrder = () => import('@/pages/UserCenter/MyOrder')
//我的车辆
const MyCar = () => import('@/pages/UserCenter/MyCar')
//新增车辆
const AddCar = () => import('@/pages/UserCenter/AddCar')

//我的车辆
const MyCenter = () => import('@/pages/UserCenter/MyCenter')
//设置
const Setting = () => import('@/pages/UserCenter/Setting')
//评价
const Evaluate = () => import('@/pages/UserCenter/Evaluate')
//优惠券
const Coupon = () => import('@/pages/UserCenter/Coupon')
//钱包
const Wallet = () => import('@/pages/UserCenter/Wallet')
//我的预约
const MyAppointment = () => import('@/pages/UserCenter/MyAppointment')
//帮助中心
const HelpCenter = () => import('@/pages/UserCenter/HelpCenter')
//我的车辆详情
const MyCarDetails = () => import('@/pages/UserCenter/MyCarDetails')

//立即购买
const Purchase = () => import('@/pages/Index/UpKeep/Purchase')
//立即付款
const Payment = () => import('@/pages/UserCenter/Payment')
//我的支付完成
const PaymentFinsh = () => import('@/pages/UserCenter/PaymentFinsh')
//我的帮助中心帮助
const HelpConent = () => import('@/pages/UserCenter/HelpConent')



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页'
      },
      children:[
        {
          path: '/Index/Discounts',
          component: Discounts,
          meta: {
            title: '特惠'
          },
        },
        {
          path: '/Index/UpKeep',
          component: UpKeep,
          meta: {
            title: '保养'
          },
        },
        {
          path: '/Index/CarWash',
          component: CarWash,
          meta: {
            title: '洗车'
          },
        },
        {
          path: '/Index/CarWash/CarWashDetails',
          component: CarWashDetails,
          meta: {
            title: '洗车详情'
          },
        },
        {
          path: '/Index/CarWash/CarWashPayPage',
          component: CarWashPayPage,
          meta: {
            title: '支付详情'
          },
        },
        {
          path: '/Index/Insurance',
          component: Insurance,
          meta: {
            title: '车险'
          },
        },
        {
          path: '/Index/Insurance/InsuranceDetails',
          component: InsuranceDetails,
          meta: {
            title: '车险详情'
          },
        },
        {
          path: '/Index/Rescue',
          component: Rescue,
          meta: {
            title: '救援'
          },
        },
      ]
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
      children:[
        {
          path: '/Appointment/NowAppoint',
          component: NowAppoint,
          meta: {
            title: '预约详情'
          },
        },
      ]
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
          children: [{
            path: '/UserCenter/MyCar/AddCar',
            component: AddCar,
            meta: {
              title: '新增车辆'
            }
          }]
        },
        {
          path: '/UserCenter/MyCenter',
          component: MyCenter,
          meta: {
            title: '个人中心'
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
        },
        {
          path: '/UserCenter/Coupon',
          component: Coupon,
          meta: {
            title: '优惠券'
          },
        },
        {
          path: '/UserCenter/Wallet',
          component: Wallet,
          meta: {
            title: '钱包'
          },
        },
        {
          path: '/UserCenter/MyAppointment',
          component: MyAppointment,
          meta: {
            title: '我的预约'
          },
        },
        {
          path: '/UserCenter/HelpCenter',
          component: HelpCenter,
          meta: {
            title: '帮助中心'
          },
        },
        {
          path: '/UserCenter/MyCarDetails/:carvid',
          component: MyCarDetails,
          meta: {
            title: '我的车辆'
          },
        },

        {
          path: '/Index/UpKeep/Purchase',
          component: Purchase,
          meta: {
            title: '立即购买'
          },
        },
        {
          path: '/UserCenter/Payment',
          component: Payment,
          meta: {
            title: '点击支付'
          },
        },
        {
          path: '/UserCenter/PaymentFinsh',
          component: PaymentFinsh,
          meta: {
            title: '支付成功'
          },
        },
        {
          path: '/UserCenter/HelpConent',
          component: HelpConent,
          meta: {
            title: '帮助中心内容'
          },
        },


      ]
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta:{
        title: '注册'
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/Forgetpwd',
      name: 'Forgetpwd',
      component: Forgetpwd,
      mate: {
        title: '忘记密码'
      }
    }
  ]
})
