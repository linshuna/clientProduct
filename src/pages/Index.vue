<template>
  <div class="e-index">
    <div v-show="isshow">
      <div class="car-model">
        <img src="../assets/images/carImg.png" alt="车标" class="car-img">
        <p class="txt">奔驰：粤A12345</p>
        <img src="../assets/images/rightArrow.png" alt="箭头" class="r-arrow">
      </div>
      <ul class="nav-list">
        <li>
          <img src="../assets/images/首页-预约icon.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
        <router-link to="/Index/UpKeep" tag="li">
          <img src="../assets/images/首页-保养icon.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">保养</p>
        </router-link>
        <router-link to="/Index/Rescue" tag="li">
          <img src="../assets/images/首页-救援icon.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">救援</p>
        </router-link>
        <router-link to="/Index/CarWash" tag="li">
          <img src="../assets/images/首页-洗车icon.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">洗车</p>
        </router-link>
        <router-link to="/Index/Insurance" tag="li">
          <img src="../assets/images/首页-车险icon.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">车险</p>
        </router-link>
        <router-link to="/Index/Discounts" tag="li">
          <img src="../assets/images/首页-特惠icon.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">特惠</p>
        </router-link>
        <li>
          <img src="../assets/images/首页-找师傅icon.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">找师傅</p>
        </li>
        <li>
          <img src="../assets/images/首页-充值优惠icon.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">充值优惠</p>
        </li>
      </ul>
      <div class="banners">
        <mt-swipe :auto="0">
          <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
            <img :src="item.pic" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="toolbar">
        <div class="recommend">
          <h3 class="tt">为您推荐</h3>
          <ul class="rm-list">
            <li v-for="(item, index) in recommendList" :key="index">
              <img class="goods-img" :src="item.pic" alt="">
              <p class="goods-name">{{item.name}}</p>
              <p class="goods-price">¥{{item.price}}</p>
            </li>
          </ul>
        </div>
        <div class="shop">
          <router-link to="/NearbyStores">
            <h3 class="tt">最近门店</h3>
          </router-link>
          <img src="../assets/images/rightArrow.png" alt="箭头" class="r-arrow">
          <ul class="shop-list">
            <li class="clearfix">
              <img :src="nearbyStores.pic" alt="" class="shop-img fl">
              <div class="shop-info-box fl">
                <h3 class="shop-name">{{nearbyStores.name}}</h3>
                <div class="star-box">
                  <score-lv :stars='nearbyStores.evaluateShow'></score-lv>
                </div>
                <div class="order-box">
                  <div v-if="nearbyStores.state == 1" class="appointment">接受预约</div>
                  <div v-else-if="nearbyStores.state == 2" class="appointment app-hot">预约火爆</div>
                  <div v-else class="appointment app-full">预约已满</div>
                  <div class="order-sum">月订单{{nearbyStores.sale}}单</div>
                </div>
<<<<<<< HEAD
                <p class="shop-address ellipsis fl">{{nearbyStores.province}}{{nearbyStores.city}}{{nearbyStores.dist}}{{nearbyStores.address}}</p>
=======
                <p class="shop-address ellipsis fl">{{nearbyStores.address}}</p>
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
                <img src="../assets/images/首页-导航icon.png" class="shop-dist-img" alt="">
              </div>
              <div class="shop-dist">距离{{Math.round(nearbyStores.distance)}}m</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <transition name="slideR">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {score} from "mixins";
  import {
    getIndexBanner,
    getRecommendList,
    getNearbyStores,
  } from '../utils/api.js'
  export default {
    mixins: [score],
    name: "index",
    data() {
      return {
        isshow: true,
        bannerList: [],
        recommendList: [],
        nearbyStores: {},
        pageData: {
          shop: {
            shopImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1128551442,917083253&fm=27&gp=0.jpg',
            shopName: '黄埔店',
            shopStar: 4,
            shopOrder: 250,
            shopAddress: '黄埔大道西又黄埔大道东',
            shopDist: '8km'
          }
        }
      };
    },
    mounted() {
      this._getIndexBanner()
      this._getRecommendList()
      this._getNearbyStores()
    },
    watch: {
      $route(to, from) {
        if (to.name == 'Index') {
          this.isshow = true
          return
        }
        this.isshow = false
      }
    },
    methods: {
      _getIndexBanner() {
        getIndexBanner().then(res => {
          this.bannerList = res
        })
      },
      _getRecommendList() {
        getRecommendList().then(res => {
          this.recommendList = res
        })
      }, 
      _getNearbyStores() {
        getNearbyStores({
          latitude: '113.2813811302',
          longitude: '23.1464370884',
        }).then(res => {
<<<<<<< HEAD
            console.log(res);
            this.nearbyStores = res
        })
      }
=======
          this.nearbyStores = res
        })
      }, 
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
    }
  };

</script>
<style lang="scss" scoped>
  .e-index {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    overflow: auto;
  }

  .car-model {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 0.72rem;
    margin-bottom: 0.2rem;
    background-color: #fff;
    .car-img {
      width: 0.44rem;
      height: 0.44rem;
      padding: 0 .16rem 0 .32rem;
    }
    .txt {
      font-size: 0.28rem;
    }
    .r-arrow {
      position: absolute;
      right: .4rem;
      width: 0.1rem;
      height: 0.18rem;
    }
  }

  .nav-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .06rem;
    li {
      width: 25%;
      height: 1.78rem;
      background-color: #fff;
      text-align: center;
    }
    .nav-img {
      width: 0.88rem;
      height: 0.88rem;
      padding: .2rem 0;
    }
    .nav-txt {
      font-size: 0.24rem;
    }
  }

  .banners {
    width: 100%;
    height: 3.14rem;
    margin-bottom: 0.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .toolbar .tt {
    height: 0.7rem;
    line-height: 0.7rem;
    padding-left: 0.3rem;
    font-size: 0.28rem;
    background-color: #fff;
    border-bottom: solid 0.02rem #eaeaea;
  }

  .recommend,
  .shop {
    margin-bottom: .2rem;
  }

  .rm-list {
    display: flex;
    overflow: auto;
    background: #fff;
    li {
      padding: .2rem 0 .3rem .3rem;
    }
    .goods-img {
      width: 2rem;
      height: 2.14rem;
      margin-bottom: .16rem;
      border-radius: 0.1rem;
    }
    .goods-name {
      font-size: 0.28rem;
      padding-bottom: .1rem;
    }
    .goods-price {
      font-size: 0.28rem;
      color: #db3f40;
    }
  }

  .shop {
    position: relative;
    .r-arrow {
      position: absolute;
      top: .28rem;
      right: .4rem;
      width: 0.1rem;
      height: 0.18rem;
    }
    .shop-list {
      li {
        position: relative;
        height: 2.24rem;
        background-color: #fff;
      }
      .shop-img {
        width: 1.5rem;
        height: 1.5rem;
        margin: .2rem .22rem 0 .3rem;
        border-radius: 0.1rem;
      }
    }
    .shop-info-box {
      .shop-name {
        padding-top: .22rem;
        font-size: 0.3rem;
      }
      // .star-box {
      //   position: relative;
      //   img {
      //     width: 0.28rem;
      //     height: 0.28rem;
      //     padding: .04rem .03rem;
      //   }
      // }
      .order-box {
        height: .44rem;
        display: flex;
        align-items: center;
        font-size: .2rem;
        .appointment {
          width: 0.96rem;
          height: 0.32rem;
          line-height: 0.32rem;
          background-color: #8ac141;
          color: #fff;
          text-align: center;
        }
        .appointment.app-full {
          background-color: #999;
        }
        .appointment.app-hot {
          background-color: #f8241e;
        }
        .order-sum {
          padding-left: .2rem;
          color: #999;
        }
      }
      .shop-address {
        width: 3rem;
        font-size: 0.24rem;
      }
      .shop-dist-img {
        width: 0.32rem;
        height: 0.32rem;
      }
    }
    .shop-dist {
      position: absolute;
      top: 1.18rem;
      right: .42rem;
      width: 1.48rem;
      height: 0.48rem;
      line-height: .48rem;
      border-radius: 0.04rem;
      border: solid 1px #ff8003;
      font-size: 0.24rem;
      color: #ff8004;
      text-align: center;
    }
  }

</style>
<style>
  .mint-swipe-indicator {
    background: #fff !important;
    opacity: 1 !important;
  }

  .mint-swipe-indicator.is-active {
    background-color: #cc5222 !important;
  }

</style>
