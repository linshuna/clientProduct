<template>
  <div class="carwash-wrap mask">
    <div class="wallet">
      <div class="nav">
        <div class="nav_img">
          <img src="../../../assets/images/特惠-banner1.png" alt="">
        </div>
        <div class="nav_center">
          <p>微位科技汽车美容</p>
          <div class="star-box">
            <score-lv :stars='3'></score-lv>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_top">
          <div class="section_top_left">
            <img src="../../../assets/images/洗车详情-定位icon.png" class="section_top_img">
            <p class="section_top_left_ptop">广州市荔湾区东风中路439号</p>
            <p class="section_top_left_ptop_footer">距地铁2号线纪念堂D2出口不行880m</p>
          </div>
          <div class="section_top_right">
            <div class="section_top_right_img">
              <div class="line"></div>
              <img src="../../../assets/images/洗车详情-导航icon.png" class="section_top_right_img_img" alt="">
              <p>导航</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_footer">
        <div class="footer_footer_msg">
          <div class="footer_footer_msg_left">
            <p>选择汽车</p>
          </div>
          <div class="footer_footer_msg_right">
            <span>
              <img src="../../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
            </span>
          </div>
        </div>

        <div class="footer_footer_line"></div>
        <div class="footer_footer_msg">
          <div class="footer_footer_msg_left">
            <p>用户电话</p>
          </div>
          <div class="footer_footer_msg_input">
            <input type="text" placeholder="请输入用户电话">
          </div>
        </div>


        <div class="footer_footer_msg">
          <div class="footer_footer_msg_left">
            <p>项目选择</p>
          </div>
          <div class="footer_footer_msg_p">
            <p>标准洗车</p>
          </div>
          <span>
            <img src="../../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
          </span>
        </div>
      </div>
    </div>
    <div class="appoint_footer">
      <div class="appoint_footer_p">
        <p>实付:</p>
        <p>¥</p>
        <p>35.00</p>
      </div>
      <router-link to="/Index/CarWash/CarWashPayPage">
        <button class="appoint_btn">立即预约</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {
    score
  } from "mixins";
  export default {
    mixins: [score],
    name: "CarWashDetails"
  }

</script>

<style scoped>
  .line {
    height: 0.7rem;
    width: 0.06rem;
    border-left: 1px solid #efefef;
    position: absolute;
    left: 0;
  }

  .section_top_left {
    margin-left: 0.68rem;
  }

  .section {
    height: 1.02rem;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    position: relative;
    border-top: 1px solid #efefef;
    align-items: center;
  }

  .section_top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .section_top_img {
    width: 0.26rem;
    height: 0.32rem;
    position: absolute;
    left: 0.24rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .section_top_right {
    display: flex;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .section_top_right_img p {
    display: inline-block;
    font-size: 0.1rem;
  }

  .section_top_right_img_img {
    width: 0.32rem;
    height: 0.32rem;
  }

  .section_top_right_img {
    width: 1rem;
    height: 1rem;
    /*background-color: #f00;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  /*.section_top_right img{*/

  /*width: 0.32rem;*/

  /*height: 0.32rem;*/

  /*background-color: #f00;*/

  /*}*/

  .nav_center {
    height: 1.34rem;
    padding-left: 0.4rem;
    padding-top: 0.14rem;
    background-color: #fff;
  }

  .nav_center p {
    font-size: 0.28rem;
    line-height: .4rem;
    color: #333333;
  }

  .nav_img {
    width: 100%;
    height: 3.54rem;
  }

  .nav_img img {
    width: 100%;
    height: 100%;
  }


  .nav {
    height: 4.88rem;
    display: flex;
    flex-direction: column;
  }

  .section span {
    font-size: 0.6rem;
    color: #000;
  }

  /*.section_left img, .section_center img, .section_right img {*/

  /*position: absolute;*/

  /*top: 50%;*/

  /*transform: translateY(-50%);*/

  /*right: 0.26rem;*/

  /*}*/

  .footer {
    margin-top: 0.2rem;
  }

  .footer_footer {
    height: 3.44rem;
    background-color: #fff;
  }

  .footer_footer_msg {
    display: flex;
    justify-content: space-between;
    padding-left: 0.24rem;
    padding-right: 0.5rem;
    height: 1.08rem;
    align-items: center;
  }

  .footer_footer_msg_left {
    width: 30%;
  }

  .footer_footer_msg_input {
    width: 70%
  }

  .footer_footer_msg_p {
    font-size: 0.28rem;
    width: 70%;
  }

  .footer_footer_msg_left p {
    /*font-weight: 600;*/
    font-size: 0.28rem;
    color: #333333
  }

  .big_rightArrow {
    width: 0.16rem;
    height: 0.3rem;
  }

  .section_top_left_ptop {
    font-size: 0.28rem;
    color: #343434;
  }

  .section_top_left_ptop_footer {
    font-size: 0.22rem;
    color: #9f9f9f;
  }

  .appoint_footer {
    width: 100%;
    height: 0.96rem;
    position: absolute;
    bottom: 0;
  }

  .appoint_btn {
    width: 3.04rem;
    height: 0.96rem;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: orange;
    color: #fff;
  }

  .footer_footer_line {
    height: 0.2rem;
    background-color: #efefef;
  }

  .appoint_footer_p {
    display: flex;
    width: 4.46rem;
    height: 0.96rem;
    background-color: #fff;
    line-height: 0.96rem;
  }

  .appoint_footer_p :first-child {
    margin-left: 0.46rem;
    color: #303030;
    font-size: 0.28rem;
  }

  .appoint_footer_p :nth-child(2) {
    font-size: 0.28rem;
    color: #f28818;
    margin-left: 0.04rem;
  }

  .appoint_footer_p :last-child {
    color: #f28818;
    font-size: 0.36rem;
  }

</style>
