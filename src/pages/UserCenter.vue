<template>
    <div class="user-center">
        
        <transition name="slideR">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    // import { getIndexData } from '../utils/api.js'
    // import {getIndex} from '../utils/api.js'
    // import {Toast} from 'mint-ui'
    // export default {
    //     name: "Appointment",
    //     data() {
    //         return {
    //             defaultIcon: require("@/assets/images/我的-我的头像icon.png"),
    //             clientvid: 0,
    //             clcararr:[],
    //             indexList:{},
    //             isshow: true,
    //             pageData: {},
    //             userSettingTypeData: [{
    //                 'linkUrl': '',
    //                 // 'linkUrl': `/user/selfCenter`,
    //                 'icon': require("../assets/images/我的-推荐好友icon.png"),
    //                 'linkName': '推荐好友'
    //             }, {
    //                 'linkUrl': '/UserCenter/MyCenter',
    //                 'icon': require("../assets/images/我的-个人中心icon.png"),
    //                 'linkName': '个人中心'
    //             },{
    //               'linkUrl':'/UserCenter/CarCountList',
    //               'icon':require("../assets/images/carCountIcon.png"),
    //               'linkName': '我的车账本'
    //             }, {
    //                 'linkUrl': '/UserCenter/MyCar',
    //                 'icon': require("../assets/images/我的-我的车辆icon.png"),
    //                 'linkName': '我的车辆'
    //             }, {
    //                 'linkUrl': '/UserCenter/HelpCenter',
    //                 'icon': require("../assets/images/我的-帮助中心.png"),
    //                 'linkName': '帮助中心'
    //             },
    //                 {
    //                     'linkUrl': '/UserCenter/Setting',
    //                     'icon': require("../assets/images/我的-设置icon.png"),
    //                     'linkName': '设置'
    //                 }
    //             ],
    //             userMsgData:[{
    //               linkUrl:'/UserCenter/Wallet',
    //               icon:require('../assets/images/我的-钱包icon.png'),
    //               linkName:'钱包'
    //             },{
    //               linkUrl:'/UserCenter/Evaluate',
    //               icon:require('../assets/images/我的-我的评价icon.png'),
    //               linkName:'我的评价'
    //             },{
    //               linkUrl:'',
    //               icon:require('../assets/images/我的-客户icon.png'),
    //               linkName:'客服'
    //             }],
    //             userOrderData:[{
    //               linkUrl:'/UserCenter/MyOrder',
    //               linkName:'订单',
    //               num: '',
    //             },{
    //               linkUrl:'/UserCenter/MyAppointment',
    //               linkName:'预约',
    //               num: ''
    //             },{
    //               linkUrl:'/UserCenter/Coupon',
    //               linkName:'优惠券',
    //               num: ''
    //             },]

    //         };
    //     },
    //     mounted() {
    //       let getStorage = this.$store.getters.getStorage;
    //       if(getStorage){
    //         this.clientvid = this.$store.getters.getStorage.vid;
    //         this._getIndex()
    //       }
    //     },
    //     filters:{
    //       noDataFilter: function(value){
    //         if(!value) return 0;
    //           else return value;
    //       }
    //     },
    //     methods: {
    //         _getIndex() {
    //             getIndex({clientvid: this.clientvid}).then(res => {
    //                 this.indexList = res
    //                 console.log(this.indexList);
    //             })
    //         },
    //         changeUrl:function(url){
    //           console.log(url)
    //           this.$store.dispatch('delToast')
    //           if(this.clientvid){
    //             if(!url) {Toast('敬请期待，正在开发中。。。');return;}
    //             this.$router.push({path: url})
    //           }else{
    //             Toast('请登录')            //如果没有登录
    //           }
    //         },
    //         isLogin: function(){
    //           if(!this.clientvid){
    //             this.$router.push({path:'/Login'})
    //           }
    //         }
    //     }
    // };

</script>
