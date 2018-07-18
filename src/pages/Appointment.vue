<template>
  <div class="appointment-wrap">
    <nav>
      <div class="addres">
        <p class="city">广州市</p>
        <p class="area">越秀区</p>
        <img src="../assets/images/btmArrow.png" alt="">
      </div>
      <p class="sort">默认排序
        <img src="../assets/images/btmArrow.png" alt="">
      </p>
    </nav>
    <ul class="store-list">
      <li>
        <div class="store-hd">
          <p>NO.01 微位科技服务店（白云店）</p>
          <img src="../assets/images/rightArrow.png" class="r-arrow" alt="">
        </div>
        <div class="store-bd clearfix">
          <img src="http://img4.imgtn.bdimg.com/it/u=2136180122,282910574&fm=27&gp=0.jpg" alt="" class="store-img fl">
          <div class="store-info-box fl">
            <p class="store-address">广州市白云区机场路1948号</p>
            <p class="appointment-sum">预约数：3453次
            </p>
            <div class="item-box">
              <div class="appointment">接受预约</div>
              <!-- <div class="appointment app-full">预约已满</div>
              <div class="appointment app-hot">预约火爆</div> -->
              <div class="item-sum">维修丶保养</div>
            </div>
            <p class="store-time">营业时间：08:00-18:00</p>
            <router-link to="/Appointment/NowAppoint">
              <button class="appointment-btn">立即预约</button>
            </router-link>
            <div class="store-dist">距离</div>
          </div>
        </div>
      </li>
    </ul>
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
        pageData: {}
      };
    },
    mounted() {},
    methods: {}
  };

</script>
<style lang="scss" scoped>
  .wrap{
    min-height: 120vh;
    padding-bottom: 2rem;
    background: #f4f4f4;
  }
  .appointment-wrap {
    height: 100%;
    background-color: #f5f5f5;
  }

  nav {
    position: relative;
    display: flex;
    align-items: center;
    width: 7.5rem;
    height: 0.72rem;
    background-color: #ffffff;
    font-size: 0.28rem;
    img {
      width: 0.22rem;
      height: 0.12rem;
      padding-left: .1rem;
    }
    .addres {
      display: flex;
      align-items: center;
    }
    .city {
      padding: 0 .1rem 0 .38rem;
    }
    .sort {
      position: absolute;
      right: .3rem;
    }
  }

  .store-list {
    li {
      margin-top: .2rem;
      height: 3rem;
      background-color: #fff;
      .store-hd {
        position: relative;
        display: flex;
        align-items: center;
        height: .76rem;
        padding-left: .3rem;
        border-bottom: solid 1px #eaeaea;
      }
      .r-arrow {
        position: absolute;
        right: .42rem;
        width: 0.1rem;
        height: 0.18rem;
      }
      .store-img {
        width: 1.5rem;
        height: 1.5rem;
        margin: .2rem .22rem 0 .3rem;
        border-radius: 0.1rem;
      }
      .store-info-box {
        position: relative;
        .store-address {
          padding-top: .2rem;
          font-size: 0.24rem;
        }
        .appointment-sum {
          color: #999
        }
        .item-box {
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
          .item-sum {
            padding-left: .2rem;
            color: #999;
          }
        }
        .store-time {
          color: #999;
        }
        .appointment-btn {
          position: absolute;
          top: .54rem;
          right: -2.2rem;
          width: 1.48rem;
          height: 0.48rem;
          line-height: .48rem;
          color: #fff;
          background-color: #ff8003;
          border-radius: 0.04rem;
        }
        .store-dist {
          position: absolute;
          top: 1.18rem;
          right: -2.2rem;
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
  }

</style>
