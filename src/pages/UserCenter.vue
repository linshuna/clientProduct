<template>
  <div class="user-center">
    <div class="user-wrap" v-if="isshow">
      <div class="user-center-hd clearfix">
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3942989250,3371488751&fm=27&gp=0.jpg" alt="" class="user-img fl">
        <div class="user-info fl">
          <p class="user-name">刘德华</p>
          <p class="user-car">奔驰C级 2018款 C 180 L 动感版</p>
        </div>
        <div class="vip">普通会员</div>
      </div>
      <ul class="accout-details">
        <router-link to="/UserCenter/MyOrder" tag="li">
          <p>23</p>
          <span>订单</span>
        </router-link>
        <router-link to="/UserCenter/MyAppointment" tag="li">
          <p>23</p>
          <span>预约</span>
        </router-link>
        <router-link to="/UserCenter/Coupon" tag="li">
          <p>23</p>
          <span>优惠券</span>
        </router-link>
      </ul>
      <ul class="sub-nav">
        <router-link to="/UserCenter/Wallet" tag="li">
          <img src="../assets/images/我的-钱包icon.png" alt="">
          <p>钱包</p>
        </router-link>
        <router-link to="/UserCenter/Evaluate" tag="li">
          <img src="../assets/images/我的-我的评价icon.png" alt="">
          <p>我的评价</p>
        </router-link>
        <li>
          <img src="../assets/images/我的-客户icon.png" alt="">
          <p>客服</p>
        </li>
      </ul>
      <ul class="footer">
        <router-link v-for="(linkItem,index) in userSettingTypeData" :key="index" :to="linkItem.linkUrl" tag="li" @click.native="isWaitingTip(linkItem.linkUrl)">
          <img class="fl cell-logo" :src="linkItem.icon" alt="">
          <p class="fl">{{linkItem.linkName}}</p>
          <img class="fr arrow" src="../assets/images/rightArrow.png">
        </router-link>
      </ul>
    </div>
    <transition name="slideR">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  // import { getIndexData } from '../utils/api.js'
  export default {
    name: "Appointment",
    data() {
      return {
        isshow: true,
        pageData: {},
        userSettingTypeData: [{
            'linkUrl': `/user/selfCenter`,
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
      };
    },
    mounted() {},
    watch: {
      $route(to, from) {
        if (to.name == 'UserCenter') {
          this.isshow = true
          return
        }
        this.isshow = false
      }
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>
  .user-center {
    height: 100%;
    background-color: #f5f5f5;
  }

  .user-center-hd {
    position: relative;
    height: 3.2rem;
    width: 100%;
    margin-bottom: .06rem; 
    @include bis('../assets/images/我的-背景图标.png');
    .user-img {
      width: 1.36rem;
      height: 1.36rem;
      margin: .92rem .3rem 0;
      border-radius: 50%;
    }
    .user-name {
      padding-top: 1rem;
      font-size: 0.48rem;
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
