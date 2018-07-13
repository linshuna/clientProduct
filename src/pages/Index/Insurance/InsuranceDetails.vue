<template>
  <div class="maintain-wrap mask">
    <div class="nav">
      <div class="nav_top">
        <div class="nav_top_img">
          <mt-swipe :auto="0">
            <mt-swipe-item>
              <img src="../../../assets/images/保养详情-主图.png" class="nav_top_img_a">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../../../assets/images/保养详情-主图.png" class="nav_top_img_a">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../../../assets/images/保养详情-主图.png" class="nav_top_img_a">
            </mt-swipe-item>
          </mt-swipe>
        </div>

        <div class="nav_center">
          <div class="nav_center_top">
            <p class="nav_center_top_p">德国顶级宝马专用波箱油&nbsp;&nbsp;(12L)</p>
          </div>

          <div class="nav_center_footer">
            <div class="nav_center_footer_left">
              <p>¥&nbsp;&nbsp;&nbsp;2518</p>
              <p>市场价&nbsp;2518.00</p>
            </div>

            <div class="nav_center_footer_right">
              <p>库存:100</p>
              <p>&nbsp;销量:3</p>
            </div>
          </div>
        </div>

        <div class="nav_footer">
          <p>购物流程</p>
          <img src="../../../assets/images/rightArrow.png" alt="">
        </div>
      </div>

      <div class="section">
        <div class="section_top">


        </div>

        <div class="section_meg">
          <img src="../../../assets/images/banner.jpg" alt="">
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "InsuranceDetails"
  }

</script>

<style scoped>
  .nav_top_img {
    height: 7.54rem;
    background-color: #d7d7d7;
  }

  .nav_top_img_a {
    background-color: #ff0;
    height: 7.54rem;
  }

  .nav_top_img_b {
    background-color: #f00;
    height: 7.54rem;
  }

  .nav_top_img_c {
    background-color: #0ff;
    height: 7.54rem;
  }

  .nav_center {
    height: 1.94rem;
    background-color: #fff;
    overflow: hidden;
    position: relative;
  }

  .nav_center_top_p {
    height: 0.4rem;
    font-size: 0.28rem;
    color: #656565;
    line-height: 0.4rem;
    margin-top: 0.3rem;
    margin-left: 0.28rem;
  }

  .nav_center_footer {
    display: flex;
    margin-left: 0.28rem;

  }

  .nav_center_footer_left {
    display: flex;
    position: absolute;
    bottom: 0.18rem;

  }

  .nav_center_footer_right {
    display: flex;
    position: absolute;
    right: 0.2rem;
    bottom: 0.18rem;
  }

  .nav_center_footer_left p:first-child {
    color: #f06811;
    font-size: 0.32rem;
  }

  .nav_center_footer_left p:last-child {
    color: #9c9c9c;
    font-size: 0.22rem;
    margin-left: 0.12rem;
  }

  .nav_center_footer_right p {
    font-size: 0.22rem;
    color: #9c9c9c;
  }

  .nav_footer {
    height: 0.86rem;
    margin-top: 0.2rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav_footer p {
    font-size: 0.24rem;
    color: #636363;
    margin-left: 0.28rem;
  }

  .nav_footer img {
    width: 0.14rem;
    height: 0.14rem;
    margin-right: 0.3rem;
  }

  .section_top {
    height: 1.3rem;
    background-color: #ff0;
    margin-top: 0.2rem;
  }

  .section_meg {
    height: 7.88rem;
    background-color: #f00;
    overflow: hidden;
  }

  .section_meg img {
    width: 100%;
    height: 100%;
  }

</style>
