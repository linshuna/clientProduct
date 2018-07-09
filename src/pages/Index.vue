<template>
  <div class="e-index">
    <div class="wrap">
      <div class="car-model">
        <img src="../assets/images/carImg.png" alt="车标" class="car-img">
        <p class="txt">奔驰：粤A12345</p>
        <img src="../assets/images/rightArrow.png" alt="箭头" class="r-arrow">
      </div>
      <ul class="nav-list">
        <li>
          <img src="../assets/images/nav-icon-recharge.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
        <li>
          <img src="../assets/images/nav-icon-recharge.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
        <li>
          <img src="../assets/images/nav-icon-recharge.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
        <li>
          <img src="../assets/images/nav-icon-recharge.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
        <li>
          <img src="../assets/images/nav-icon-recharge.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
        <li>
          <img src="../assets/images/nav-icon-recharge.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
        <li>
          <img src="../assets/images/nav-icon-recharge.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
        <li>
          <img src="../assets/images/nav-icon-recharge.png" alt="导航图片" class="nav-img">
          <p class="nav-txt">预约</p>
        </li>
      </ul>
      <div class="banners">
        <mt-swipe :auto="0">
          <mt-swipe-item>
            <img src="../assets/images/banner.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/banner.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="toolbar">
        <div class="recommend">
          <h3 class="tt">为您推荐</h3>
          <ul class="rm-list">
            <li>
              <img class="goods-img" src="../assets/images/banner.jpg" alt="">
              <p class="goods-name">小保养</p>
              <p class="goods-price">¥399.00</p>
            </li>
          </ul>
        </div>
        <div class="shop">
          <h3 class="tt">最近门店</h3>
          <img src="../assets/images/rightArrow.png" alt="箭头" class="r-arrow">
          <ul class="shop-list">
            <li class="clearfix">
              <img src="../assets/images/banner.jpg" alt="" class="shop-img fl">
              <div class="shop-info-box fl">
                <h3 class="shop-name">NO.01 微位科技服务店（白云店）</h3>
                <div class="star-box">
                  <img v-for="(item, index) in 3" class="star" :key="index" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1157490336,1091943566&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="order-box">
                  <div class="appointment">接受预约</div>
                  <div class="order-sum">月订单253单</div>
                </div>
                <p class="shop-address">广州市白云区机场路1948号</p>
                <div class="shop-dist">距离8km</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {};
    },
    mounted() {

    },
    methods: {}
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

  .toolbar .tt{
    height: 0.7rem;
    line-height: 0.7rem;
    padding-left: 0.3rem;
    font-size: 0.28rem;
    background-color: #fff;
    border-bottom: solid 0.02rem #eaeaea;
  }
  .recommend,.shop {
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
      position: relative;
      .shop-name {
        padding-top: .22rem;
        font-size: 0.3rem;
      }
      .star-box {
        position: relative;
        img {
        	width: 0.28rem;
          height: 0.28rem;  
          padding: .04rem .03rem;          
        }
      }
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
        .order-sum {
          padding-left: .2rem;
          color: #999;
        }
      }
      .shop-address {
        font-size: 0.24rem;
      }
      .shop-dist {
        position: absolute;
        top: 1.18rem;
        right: -.6rem;
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
  }

</style>
<style>
  .mint-swipe-indicator {
    background: #fff;
    opacity: 1;
  }

  .mint-swipe-indicator.is-active {
    background-color: #cc5222;
  }

</style>
