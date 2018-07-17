<template>
  <div class="wallet-wrap mask">
    <div class="wallet">
      <div class="nav">
        <p class="nav_wallet_p">我的余额</p>
        <p class="nav_money_p">¥ 1556</p>
        <div class="section">
          <div class="section_left">
            <div class="section_left_left">
              <span>177.80</span>
              <p>消费记录</p>
            </div>
            <!--<img src="../../assets/images/rightArrow.png" alt="">-->
          </div>
          <div class="section_center">
            <div class="section_center_center">
              <span>177.80</span>
              <p>充值记录</p>
            </div>
            <!--<img src="../../assets/images/rightArrow.png" alt="">-->
          </div>
          <div class="section_right">
            <div class="section_right_right">
              <span class="section_right_span">177.80</span>
              <p>分红</p>
            </div>
            <!--<img src="../../assets/images/rightArrow.png" alt="">-->
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="footer_top">
          <div>
            <p>详情</p>
          </div>
          <div class="footer_top_right">
            <p>查看更多账单</p>
            <span>
              <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
            </span>
          </div>
        </div>

        <ul class="footer_footer">
          <li class="footer_footer_msg">
            <div class="footer_footer_msg_left">
              <p>支付小保养费</p>
            </div>
            <div class="footer_footer_msg_right">
              <p class="footer_footer_msg_right_pone">-300.00</p>
              <p class="footer_footer_msg_right_ptwo">2018-8-31 21:14</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "wallet"
  }

</script>

<style lang="scss" scoped>


  .nav {
    height: 4.96rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #020202;
    background: url("../../assets/images/Wallet_bg.png")no-repeat;
    background-size: 100% 100%;
    position: relative;
  }


  .nav_wallet_p {
    padding-top: .1rem;
    font-size: 0.28rem;
    color: #fceed9;
  }

  .nav_money_p {
    font-size: 0.6rem;
    color: #fdfdfd;
  }

  .section {
    height: 0.9rem;
    display: flex;
    flex-direction: row;
    margin-top: 0.2rem;
    position:absolute;
    bottom:0.32rem;
    color: #020202;

    width: 7.5rem;
  }
	.section>.section_left,
  .section>.section_center {
		position: relative;
	}
  /*<!--&lt;!&ndash;.section>.section_left::after,-->*/
  /*<!--.section>.section_center::after {-->*/
    /*<!--content: '';-->*/
    /*<!--@include ct;-->*/
    /*<!--right: 0;-->*/
    /*<!--width: 2px;-->*/
    /*<!--height: 1.12rem;-->*/
    /*<!--background-color: #efefef;-->*/
  /*<!--}&ndash;&gt;-->*/

  .section div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .section span {
    font-size: 0.36rem;
    color: #fefefe;

  }

  .section p {
    font-size: 0.28rem;
  }

  .section img {
    width: 0.16rem;
    height: 0.3rem;
  }

  .section_left {
    position: relative;
  }
  .section_right,.section_left,.section_center{

    font-size: 0.28rem;
    color: #fdfdfd;
  }
  .section_right p,.section_left p,.section_center p{
    font-size: 0.28rem;
    color: #fdfdfd;
  }
  .section_left img,
  .section_center img,
  .section_right img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.26rem;
  }

  .rightArrow {
    width: 0.1rem;
    height: 0.1rem;
    padding-left: 0.08rem;
  }

  .footer {
    margin-top: 0.1rem;
  }

  .footer_top {
    height: 0.42rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0.24rem;
    padding-right: 0.5rem;
  }

  .footer_top_right {
    display: flex;
    flex-direction: row;
  }

  .footer_footer {
    background-color: #fff;
  }

  .footer_footer_msg {
    display: flex;
    justify-content: space-between;
    padding-left: 0.24rem;
    padding-right: 0.5rem;
    height: 0.96rem;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }

  .footer_footer_msg_right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .footer_footer_msg_left p {
    /*font-weight: 600;*/
    font-size: 0.28rem;
    color: #000
  }

  .footer_footer_msg_right_pone {
    /*font-weight: 700;*/
    font-size: 0.30rem;
    color: #000;
  }

  .footer_footer_msg_right_ptwo {
    color: #ccc;
  }

</style>
