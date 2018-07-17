<template>
  <div class="couponWrap mask">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待使用</mt-tab-item>
      <mt-tab-item id="2">已使用</mt-tab-item>
      <mt-tab-item id="3">已过期</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="couponList">
          <ul class="conpon-card">
            <li class="card-item">
              <div class="item-top">
                <span>¥</span>
                <p class="number">20</p>
                <p class="type">洗车券</p>
                <button class="usebtn">使用</button>
              </div>
              <div class="item-bottom">
                <p>有效期至2018-06-09 23:59：59</p>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="couponList couponList-used">
          <ul class="conpon-card">
            <li class="card-item">
              <div class="item-top">
                <span class="">¥</span>
                <p class="number ">20</p>
                <p class="type ">洗车券</p>
                <img class="invalid-img" src="../../assets/images/优惠券-已使用.png">
              </div>
              <div class="item-bottom ">
                <p>有效期至2018-06-09 23:59：59</p>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="couponList couponList-used">
          <ul class="conpon-card">
            <li class="card-item">
              <div class="item-top">
                <span class="">¥</span>
                <p class="number ">20</p>
                <p class="type ">洗车券</p>
                <img class="invalid-img" src="../../assets/images/优惠券-已过期.png">
              </div>
              <div class="item-bottom ">
                <p>有效期至2018-06-09 23:59：59</p>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'Coupon',
    data() {
      return {
        selected: '1',
      }
    },
    created: function () {

    },
    mounted: function () {

    },
    methods: {


    },
  }

</script>

<style lang="scss" scoped>
  .mint-navbar {
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
  }

  .mint-tab-item {
    height: .84rem;
    margin: 0 .45rem;
    .mint-tab-item-label {
      font-size: 0.28rem;
    }
  }

  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #fa9e15;
    color: #fa9e15;
  }

  .couponList-used {
    color: #d8d8d8;
  }

  .couponList {
    .conpon-card {
      width: 6.94rem;
      margin: 0 auto;
      .card-item {
        position: relative;
        padding: 0 .3rem;
        margin-top: .2rem;
        background-color: #fff;
        border: 1px solid #bebebe;
        &::before {
          content: '';
          @include ct;
          right: -.1rem;
          height: .2rem;
          width: .2rem;
          background-color: #f5f5f5;
          border-radius: 50%;
          transform: rotate(45deg);
          z-index: 5;
          border-bottom: 1px solid #bebebe;
          border-left: 1px solid #bebebe;
        }
        &::after {
          content: '';
          @include ct;
          left: -.1rem;
          height: .2rem;
          width: .2rem;
          background-color: #f5f5f5;
          transform: rotate(45deg);
          border-radius: 50%;
          z-index: 5;
          border-top: 1px solid #bebebe;
          border-right: 1px solid #bebebe;
        }
        .item-top {
          height: 1.7rem;
          line-height: 1.7rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #cdcdcd;
          span {
            padding: .32rem .1rem 0 0;
            font-size: .28rem;
          }
          .number {
            padding-right: .24rem;
            font-size: .8rem;
          }
          .type {
            padding-right: 2.6rem;
            font-size: 0.34rem;
          }
          .usebtn {
            width: 1.1rem;
            height: 0.64rem;
            border-radius: 2rem;
            border: solid 2px #fa9e15;
            font-size: 0.28rem;
            color: #fa9e15;
            background-color: #fff;
          }
          .invalid-img {
            position: absolute;
            top: .26rem;
            right: .3rem;
            width: 1.38rem;
            height: 1.04rem;
          }
        }
        .item-bottom {
          height: .68rem;
          line-height: .68rem;
        }
      }
    }
  }

</style>
