<template>
  <div class="carappoint-wrap mask">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">越秀区</mt-tab-item>
      <mt-tab-item id="2">标准洗车</mt-tab-item>
      <mt-tab-item id="3">默认排序</mt-tab-item>
    </mt-navbar>
    <ul>
        <li v-for="item in CarwashList">
      <router-link to="/Index/CarWash/CarWashDetails" tag="li">
        <div class="nav">
          <div class="nav_left">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1880760143,1213047443&fm=27&gp=0.jpg" alt="">
          </div>
          <div class="nav_center">
            <p>{{item.shop_name}}</p>
            <div class="nav_center_center">
              <div class="nav_center_left">
                <p>评价</p>
                <p>{{item.evaluateNum}}</p>
              </div>
              <div class="nav_center_right">
                <p>订单</p>
                <p>{{}}</p>
              </div>
            </div>
            <p>{{item.province}}{{item.city}}{{item.dist}}{{item.address}}</p>
          </div>
          <div class="nav_right">
            <p>¥{{item.price}}</p>
            <p>{{Math.round(item.distance)}} km</p>
          </div>
        </div>
      </router-link>
        </li>
    </ul>
  </div>

</template>

<script>
  import {getCarwashIndex}from'../../../utils/api.js'
  export default {
    name: "CarWash",
    data() {
      return {
        selected: '1',
          CarwashList:''
      }
    },
      methods:{
        _getCarwashIndex(){
              getCarwashIndex().then(res => {
                  console.log(res.store);
                  this.CarwashList = res.store
              })
          }
      },
      mounted(){
          this._getCarwashIndex()
      }
  }

</script>

<style lang='scss' scoped>
  .mint-navbar {
    background-color: #fff;
  }

  .mint-tab-item {
    height: .72rem;
    padding: 12px 0;
  }

  .mint-navbar .mint-tab-item.is-selected {
    border: none;
    color: #fa9e15;
  }
  .nav {
    height: 1.88rem;
    background-color: #fff;
    display: flex;
    position: relative;
    padding-right: 0.18rem;
    border-top: 1px solid #ececec;
  }

  .nav_left {
    width: 1.28rem;
    height: 1.28rem;
    background-color: #d7d7d7;
    margin: 0.3rem 0.2rem 0 0.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    margin-top: 0.2rem;
  }
  .nav_left p {
    line-height: 0.3rem;
  }

  .nav_center {
    margin-top: 0.3rem;
    height: 1.28rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .nav_center p:last-child {
    color: #707070;
    font-size: 0.22rem;
  }

  .nav_center_left {
    display: flex;
    padding-right: .1rem;
    line-height: 0.3rem;
  }

  .nav_center_left p:first-child,
  .nav_center_right p:first-child {
    color: #707070;
    font-size: 0.22rem;
  }

  .nav_center_left p:last-child,
  .nav_center_right p:last-child {
    color: #ff8004;
    font-size: 0.22rem;
  }

  .nav_center_right {
    display: flex;
    line-height: 0.3rem;
  }

  .nav_center_center {
    display: flex;
  }

  .nav_right {
    padding-top: 0.3rem;
    height: 1.88rem;
    width: 0.9rem;
    position: absolute;
    right: 0.8rem;
  }

  .nav_right p:first-child {
    color: #ff8004;
    font-size: 0.32rem;
    text-align: center;
  }

  .nav_right p:last-child {
    color: #b8b8b8;
    position: absolute;
    bottom: 0.36rem;
    font-size: 0.22rem;
  }

</style>
