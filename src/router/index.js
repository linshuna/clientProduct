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
//首页的 主要页面
const AppIndex = () => import('@/pages/AppIndex')

//特惠
const Discounts = () => import('@/pages/Index/Discounts/DiscountsPage')
//找师傅
const FindTecher = () => import('@/pages/Index/FindTecher/FindTecher')
//充值优惠 Recharge
const Recharge = () => import('@/pages/Index/Recharge/Recharge')
//车险
const Insurance = () => import('@/pages/Index/Insurance/Insurance')
//车险详情
const InsuranceDetails = () => import('@/pages/Index/Insurance/InsuranceDetails')
//救援
const Rescue = () => import('@/pages/Index/Rescue/Rescue')
//保养
const UpKeep = () => import('@/pages/Index/UpKeep/UpKeep')
//保养首页
const UpKeepIndex = () => import('@/pages/Index/UpKeep/UpKeepIndex')
//保养 商品列表
const Shopping = () => import('@/pages/Index/UpKeep/Shopping')
//保养 商品详情
const maintain = () => import('@/pages/Index/UpKeep/maintain')
//保养 商品立即购买 立即付款
const Payment = () => import('@/pages/Index/UpKeep/Payment')


//洗车
const CarWash = () => import('@/pages/Index/CarWash/CarWash')
//洗车详情
const CarWashDetails = () => import('@/pages/Index/CarWash/CarWashDetails')


//我的
//支付详情
const CarWashPayPage = () => import('@/pages/Index/CarWash/CarWashPayPage')

//附近门店
const NearbyStores = () => import('@/pages/NearbyStores')
//附近门店首页
const NearbyStoresIndex = () => import('@/pages/NearbyStores/NearbyStoresIndex')
//门店详情
const storeDetail = () => import('@/pages/NearbyStores/storeDetail')
//预约
const Appointment = () => import('@/pages/Appointment')
//预约首页
const AppointmentIndex = () => import('@/pages/Appointment/AppointmentIndex')
//预约详情
const NowAppoint = () => import('@/pages/Appointment/NowAppoint')
//我的
const UserCenter = () => import('@/pages/UserCenter')
//我的订单
const MyOrder = () => import('@/pages/UserCenter/MyOrder')
//我的车账本
const CarCountList = () => import('@/pages/UserCenter/CarCountList')
//账本详情
const CarCountDetail = () => import('@/pages/UserCenter/CarCountDetail')
//门店点评
const CarCountEvaldetails = () => import('@/pages/UserCenter/CarCountEvaldetails')
//检测报告
const CarHasReportDetail = () => import('@/pages/UserCenter/CarHasReportDetail')
//我的车辆
const MyCar = () => import('@/pages/UserCenter/MyCar')
//新增车辆
const AddCar = () => import('@/pages/UserCenter/AddCar')
 
//我的首页 UserCenterIndex
const UserCenterIndex = () => import('@/pages/UserCenter/UserCenterIndex')
//我的车辆
const MyCenter = () => import('@/pages/UserCenter/MyCenter')
//我的 推荐好友
const SelfCenter = () => import('@/pages/UserCenter/SelfCenter')


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
//我的预约首页
const MyAppointmentIndex = () => import('@/pages/MyAppointment/MyAppointmentIndex');
//取消预约理由
const MyAppointmentReason = () => import('@/pages/MyAppointment/reason')
//编辑预约 
const MyAppointmentEditor = () => import('@/pages/MyAppointment/MyAppointmentEditor')


//帮助中心
const HelpCenter = () => import('@/pages/UserCenter/HelpCenter')
//帮助中心 首页
const HelpCenterIndex  = () => import('@/pages/UserCenter/HelpCenterIndex')
//我的车辆详情
const MyCarDetails = () => import('@/pages/UserCenter/MyCarDetails')

//立即购买
const Purchase = () => import('@/pages/Index/UpKeep/Purchase')
//立即付款
// const Payment = () => import('@/pages/UserCenter/Payment')
//我的支付完成
const PaymentFinsh = () => import('@/pages/UserCenter/PaymentFinsh')
//我的帮助中心帮助
const HelpConent = () => import('@/pages/UserCenter/HelpConent')
//我的帮助中心帮助
const Shopping = () => import('@/pages/Index/UpKeep/Shopping')
//我的 推荐好友
const selfCenter = () => import('@/pages/Index/UpKeep/selfCenter')



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: 'E店养车',
        keepActive: true
      },
      redirect: '/Index',
      children: [
        {
          path: '/Index',
          component: AppIndex,
          meta: {
            title: 'E店养车',
            keepActive: true
          },
        },
        {
          path: '/Index/Discounts',
          component: Discounts,
          meta: {
            title: '特惠'
          },
        },
        {
          path: '/Index/FindTecher',
          component: FindTecher,
          meta: {
            title: '找师傅'
          },
        },//Recharge
        {
          path: '/Index/Recharge',
          component: Recharge,
          meta: {
            title: '充值优惠'
          },
        },
        {
          path: '/Index/UpKeep', 
          component: UpKeep,
          redirect: '/Index/UpKeep/UpKeepIndex',
          children: [{
            path: '/Index/UpKeep/UpKeepIndex',
            component: UpKeepIndex,
            meta: {
              title: '商城'
            },
          },{
            path: '/Index/UpKeep/Shopping/:shopId',
            component: Shopping,
            meta: {
              title: '商品列表'
            },
          },{
            path: '/Index/UpKeep/maintain/:shopId',
            component: maintain,
            meta: {
              title: '商品详情'
            },
          },
          {//商品立即购买
            path: '/Index/UpKeep/Payment/:orderNo',
            component: Payment,
            meta: {
              title: '点击支付'
            }
          }
        ]
        },
        {
          path: '/Index/CarWash',
          component: CarWash,
          meta: {
            title: '洗车'
          },
        },
        {
          path: '/Index/CarWash/CarWashDetails/:gainData',
          component: CarWashDetails,
          meta: {
            title: '洗车详情'
          },
        },
        {
          path: '/Index/CarWash/CarWashPayPage/:orderNo',
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
        {
<<<<<<< HEAD
          path: '/Index/storeDetail/:stopId',
          component: storeDetail,
          meta: {
            title: '门店详情'
          },
        }
=======
          path: '/Index/UpKeep/selfCenter',
          component: selfCenter,
          meta: {
            title: '推荐好友'
          },
        },
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
      ]
    },
    {
      path: '/NearbyStores',
      name: 'NearbyStores',
      component: NearbyStores,
      children: [
        {
          path: '/NearbyStores/NearbyStoresIndex',
          component: NearbyStoresIndex,
          meta: {
            title: '附近门店',
            keepActive: true
          }
        },
        {
          path: '/NearbyStores/storeDetail/:stopId',
          component: storeDetail,
          meta: {
            title: '门店详情'
          },
        }
      ],
      redirect: '/NearbyStores/NearbyStoresIndex'
    },
    {
      path: '/Appointment',
      name: 'Appointment',
      component: Appointment,      
      children: [
        {
          path: '/Appointment/AppointmentIndex',
          component: AppointmentIndex,
          meta: {
            title: '预约',
            keepActive: true
          }
        },
        {
          path: '/Appointment/NowAppoint/:shopId',
          component: NowAppoint,
          meta: {
            title: '预约详情'
          },
        },
        {
          path: '/Appointment/storeDetail/:stopId',
          component: storeDetail,
          meta: {
            title: '门店详情'
          },
        }
      ],
      redirect:'/Appointment/AppointmentIndex',
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter,
      children: [{
          path: '/UserCenter/UserCenterIndex',
          name: 'UserCenterIndex',
          component: UserCenterIndex,
          meta: {
            title: '我的',
            keepActive: true
          },
        },
        {
          path: '/UserCenter/MyOrder',
          component: MyOrder,
          meta: {
            title: '我的订单'
          },
        },//CarCountList
        {
          path: '/UserCenter/CarCountList',
          component: CarCountList,
          meta: {
            title: '我的车账本',
            rush: true
          }
        },
        {
          path: '/UserCenter/CarCountDetail/:gainData',
          component: CarCountDetail,
          meta: {
            title: '预约详情',
            rush: true
          }
        },
        {
          path: '/UserCenter/CarCountEvaldetails/:gainData',
          component: CarCountEvaldetails,
          meta: {
            title: '',
            rush:true
          }
        },
        {
          path: '/UserCenter/CarHasReportDetail/:orderNo',
          component: CarHasReportDetail,
          meta: {
            title: '检测报告',
            rush: true
          }
        },
        {
          path: '/UserCenter/MyCar',
          component: MyCar,
          meta: {
            title: '我的车辆',
            rush: true
          },
          children: [{
            path: '/UserCenter/MyCar/AddCar/:carvid',
            component: AddCar,
            meta: {
              title: '新增车辆',
              rush: true
            }
          }]
        },//SelfCenter
        {
          path: '/UserCenter/SelfCenter',
          component: SelfCenter,
          meta: {
            title: '推荐好友'
          },
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
          children: [{
            path: '/UserCenter/MyAppointment/MyAppointmentIndex',
            component: MyAppointmentIndex,
            meta: {
              title: '我的预约'
            }
          }, {//MyAppointmentEditor
            path: '/UserCenter/MyAppointment/MyAppointmentEditor/:orderNo',
            component: MyAppointmentEditor,
            meta: {
              title: '编辑预约'
            }  
          }, {//MyAppointmentReason
            path: '/UserCenter/MyAppointment/MyAppointmentReason/:vid',
            component: MyAppointmentReason,
            meta: {
              title: '取消理由'
            }
          }
          ],
          redirect: '/UserCenter/MyAppointment/MyAppointmentIndex'
        },
        {
          path: '/UserCenter/HelpCenter',
          component: HelpCenter,
          meta: {
            title: '帮助中心'
          },
          redirect: '/UserCenter/HelpCenterIndex',
          children: [
            {
              path: '/UserCenter/HelpCenterIndex',
              component: HelpCenterIndex,
              meta: {
                title: '帮助中心'
              },
            },{
              path: '/UserCenter/HelpConent/:help_id',
              component: HelpConent,
              meta: {
                title: '帮助中心内容'
              },
            },    
          ]
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
        // {
        //   path: '/UserCenter/Payment',
        //   component: Payment,
        //   meta: {
        //     title: '点击支付'
        //   },
        // },
        {
          path: '/UserCenter/PaymentFinsh',
          component: PaymentFinsh,
          meta: {
            title: '支付成功'
          },
        },
        

        {
          path: '/Index/Shopping',
          component: Shopping,
          meta: {
            title: '首页/商城'
          },
        },


      ],
      redirect:'/UserCenter/UserCenterIndex',
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
