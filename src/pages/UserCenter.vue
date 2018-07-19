<template>
    <div class="user-center">
        <div class="user-wrap" v-if="isshow">
            <div class="user-center-hd clearfix" @click.stop="isLogin">
              <div class="setPosition" v-if="clientvid">
                <img :src="indexList.headimg"
                     alt="" class="user-img">
                <div class="user-info">
                    <p class="user-name">{{indexList.uname}}</p>
                    <p class="user-car">{{indexList.phone}}</p>
                </div>
              </div>
              <div class="setPosition" v-else>
                <img :src="defaultIcon"
                     alt="" class="user-img">
                <div class="user-info">
                    <p class="user-name">登录/注册</p> 
                </div>
              </div>
                <!--0注册用户 1新客户 2普通 3金牌 4钻石-->
                <div class="vip" v-if="clientvid">
                {{indexList.level==0?'注册用户':(indexList.level==1?'新客户':(indexList.level==2?'普通':(indexList.level==3?'金牌':'钻石')))}}
                </div>
            </div>

            <ul class="accout-details">
              <li v-for="(item,index) in userOrderData" @click.stop="changeUrl(item.linkUrl)">
                <p>{{index==0?indexList.order:(index==1?indexList.car:indexList.coupon) | noDataFilter}}</p>
                <span>{{item.linkName}}</span>
              </li>
            </ul>
            <ul class="sub-nav">
              <li v-for="item in userMsgData" @click.stop="changeUrl(item.linkUrl)">
                <img :src="item.icon" alt="">
                <p>{{item.linkName}}</p>
              </li>
            </ul>
            <ul class="footer">
                <li v-for="(linkItem,index) in userSettingTypeData" :key="index" @click.stop="changeUrl(linkItem.linkUrl)"
                             tag="li">
                    <img class="fl cell-logo" :src="linkItem.icon" alt="">
                    <p class="fl">{{linkItem.linkName}}</p>
                    <img class="fr arrow" src="../assets/images/rightArrow.png">
                </li>
            </ul>
        </div>
        <transition name="slideR">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    // import { getIndexData } from '../utils/api.js'
    import {getIndex} from '../utils/api.js'
    import {Toast} from 'mint-ui'
    export default {
        name: "Appointment",
        data() {
            return {
                defaultIcon: require("@/assets/images/我的-我的头像icon.png"),
                clientvid: 0,
                clcararr:[],
                indexList:{},
                isshow: true,
                pageData: {},
                userSettingTypeData: [{
                    'linkUrl': '',
                    // 'linkUrl': `/user/selfCenter`,
                    'icon': require("../assets/images/我的-推荐好友icon.png"),
                    'linkName': '推荐好友'
                }, {
                    'linkUrl': '/UserCenter/MyCenter',
                    'icon': require("../assets/images/我的-个人中心icon.png"),
                    'linkName': '个人中心'
                }, {
                    'linkUrl': '/UserCenter/MyCar',
                    'icon': require("../assets/images/我的-我的车辆icon.png"),
                    'linkName': '我的车辆'
                }, {
                    'linkUrl': '/UserCenter/HelpCenter',
                    'icon': require("../assets/images/我的-帮助中心.png"),
                    'linkName': '帮助中心'
                },
                    {
                        'linkUrl': '/UserCenter/Setting',
                        'icon': require("../assets/images/我的-设置icon.png"),
                        'linkName': '设置'
                    }
                ],
                userMsgData:[{
                  linkUrl:'/UserCenter/Wallet',
                  icon:require('../assets/images/我的-钱包icon.png'),
                  linkName:'钱包'
                },{
                  linkUrl:'/UserCenter/Evaluate',
                  icon:require('../assets/images/我的-我的评价icon.png'),
                  linkName:'我的评价'
                },{
                  linkUrl:'',
                  icon:require('../assets/images/我的-客户icon.png'),
                  linkName:'客服'
                }],
                userOrderData:[{
                  linkUrl:'/UserCenter/MyOrder',
                  linkName:'订单',
                  num: '',
                },{
                  linkUrl:'/UserCenter/MyAppointment',
                  linkName:'预约',
                  num: ''
                },{
                  linkUrl:'/UserCenter/Coupon',
                  linkName:'优惠券',
                  num: ''
                },]

            };
        },
        mounted() {
          let getStorage = this.$store.getters.getStorage;
          if(getStorage){
            this.clientvid = this.$store.getters.getStorage.vid;
            this._getIndex()
          }
        },
        filters:{
          noDataFilter: function(value){
            if(!value) return 0;
              else return value;
          }
        },
        methods: {
            _getIndex() {
                getIndex({clientvid: this.clientvid}).then(res => {
                    this.indexList = res
                    console.log(this.indexList);
                })
            },
            changeUrl:function(url){
              this.$store.dispatch('delToast')
              if(this.clientvid){
                if(!url) {Toast('敬请期待，正在开发中。。。');return;}
                this.$router.push({path: url})
              }else{
                Toast('请登录')
              }
            },
            isLogin: function(){
              if(!this.clientvid){
                this.$router.push({path:'/Login'})
              }
            }
        }
    };

</script>
<style lang="scss" scoped>
    .user-center {
        min-height: 100%;
        background-color: #f5f5f5;
        padding-bottom: 2rem;
    }

    .user-center-hd {
        position: relative;
        height: 3.2rem;
        width: 100%;
        margin-bottom: .06rem;
        @include bis('../assets/images/我的-背景图标.png');
        .setPosition{
          position: absolute;
          left: 8%;
          top: 50%;
          transform: translate(0,-50%);
        }
        .user-img {
            width: 1.36rem;
            height: 1.36rem;
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
        }
        .user-info{
          padding-left: .2rem;
          display: inline-block;
          vertical-align: middle;
        }
        .user-name {
            font-size: 0.42rem;
            color: #ffffff;
        }
        .user-car {
            padding-top: .16rem;
            font-size: 0.28rem;
            color: #ffffff;
        }
        .vip {
            position: absolute;
            top: .86rem;
            right: 0;
            width: 1.52rem;
            height: 0.48rem;
            line-height: .48rem;
            text-align: center;
            background-color: #000000;
            color: #ffffff;
            border-radius: 2rem 0 0 2rem;
        }
    }

    .accout-details {
        display: flex;
        height: 1.4rem;
        margin-bottom: .2rem;
        background-color: #ffffff;
        li {
            flex: 1;
            text-align: center;
            p {
                padding-top: .16rem;
                font-size: 0.48rem;
                line-height: .66rem;
                color: #393939;
            }
            span {
                font-size: 0.24rem;
                color: #999;
            }
        }
    }

    .sub-nav {
        display: flex;
        margin-bottom: .2rem;
        background-color: #fff;
        li {
            flex: 1;
            text-align: center;
            img {
                padding-top: .2rem;
                width: 0.46rem;
                height: 0.46rem;
            }
            p {
                font-size: 0.24rem;
                line-height: .54rem;
                color: #363636;
            }
        }
    }

    .footer {
        background-color: #fff;
        li {
            height: 1rem;
            line-height: 1rem;
            border-bottom: 1px solid #e5e5e5;
            p {
                font-size: 0.3rem;
                color: #4a4a4a;
            }
        }
        li:nth-last-child(1) {
            border-bottom: none;
        }
        .cell-logo {
            padding: .3rem .2rem 0 .24rem;
            width: 0.44rem;
            height: 0.44rem;
        }
        .arrow {
            padding: .36rem .24rem 0 0;
            width: 0.14rem;
            height: 0.24rem;
        }
    }

</style>
