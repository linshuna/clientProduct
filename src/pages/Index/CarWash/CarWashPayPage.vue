<template>
    <div class="payment-wrap mask">
        <div class="nav">
            <div class="nav_top">
                <div class="nav_img">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1880760143,1213047443&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="nav_p">
                    <p>微位科技汽车美容</p>
                    <p>广州市荔湾区东风中路439号</p>
                </div>

            </div>
            <div class="nav_center">
                <div class="nav_center_left">
                    <img src="../../../assets/images/洗车支付-导航icon.png" alt="">
                    <p>导航去店</p>
                </div>
                <div class="nav_center_img">
                    <img src="../../../assets/images/rightArrow.png" alt="">
                </div>
            </div>

            <div class="section">
                <div class="section_top">
                    <span></span>
                    <p>服务</p>
                </div>
                <div class="section_bottom">
                    <div class="section_bottom_left">
                        <img src="http://img2.imgtn.bdimg.com/it/u=2598268720,2590532498&fm=27&gp=0.jpg" alt="">
                        <p>五座轿车标准洗车</p>
                    </div>
                    <div class="section_bottom_right">
                        <p>¥ 35.00</p>
                        <p>x1</p>
                    </div>
                </div>
            </div>


            <div class="section_footer">
                <div class="section_footer_top">
                    <p>订单编号: TH33221297
                        <button class="section_footer_top_btn">复制</button>
                    </p>
                    <p>订单时间: 2018.07.11 16:23:00</p>
                    <p>支付方式: 线上支付</p>
                    <p>配送方式: 无需配送</p>
                </div>

                <div class="section_footer_msg">
                    <div class="section_footer_left">
                        <p>商品总额</p>
                        <p>优惠券</p>
                        <p>运费</p>
                    </div>
                    <div class="section_footer_right">
                        <p>&nbsp;¥&nbsp;35.00</p>
                        <p>- &nbsp;¥&nbsp;0.00</p>
                        <p>+&nbsp;¥&nbsp;0.00</p>
                    </div>
                </div>

                <div class="section_footer_footer">
                    <p>实付款:</p>
                    <p>¥35.00</p>
                </div>

                <div class="footer_btn">
                    <div class="footer_btn_btn">
                        <button>取消订单</button>
                        <button>微信支付</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "payment"
    }
</script>

<style lang="scss" scoped>
    .nav_top {
        height: 1.44rem;
        background-color: #fff;
        display: flex;
        align-items: center;

    }

    .nav_img {
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 0.28rem;
    }
    .nav_img img {
        width: 100%;
        height: 100%;
    }

    .nav_p {
        margin-left: 0.32rem;
    }

    .nav_p :first-child {
        font-size: 0.28rem;
        color: #303030;
    }

    .nav_p:last-child {
        font-size: 0.24rem;
        color: #707070;
    }

    .nav_center {
        height: 0.94rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #efefef;
    }

    .nav_center_img img {
        width: 0.16rem;
        height: 0.3rem;
        margin-right: 0.24rem;
    }

    .nav_center_left {
        display: flex;
        margin-left: 0.3rem;

    }

    .nav_center_left img {
        width: 0.34rem;
        height: 0.4rem;
    }

    .nav_center_left p {
        margin-left: 0.1rem;
        color: #303030;
    }

    .section_top {
        height: 0.5rem;
        background-color: #fff;
        display: flex;
        margin-top: 0.2rem;
        position: relative;
        color: #303030;
    }

    .section_top span {
        margin-left: 0.28rem;
        width: 0.06rem;
        height: 0.26rem;
        border: solid 0.04rem #f28817;
        margin-top: 0.12rem;
    }

    .section_top p {
        margin-left: 0.14rem;
        line-height: 0.5rem;
    }

    .section_bottom {
        height: 1.36rem;
        background-color: #fff;
        border-top: 1px solid #efefef;
    }

    .section_bottom_left {
        display: flex;
        align-items: center;
        margin-left: 0.18rem;
    }

    .section_bottom_left p {
        margin-left: 0.16rem;
        font-size: 0.26rem;
        color: #303030;
    }

    .section_bottom_left img {
        width: 1.26rem;
        height: 0.74rem;
    }

    .section_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .section_bottom_right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        height: 0.688rem;
        margin-right: 0.26rem;
    }

    .section_bottom_right p:first-child {
        color: #ce4159;
        font-size: 0.26rem;
    }

    .section_bottom_right p:last-child {
        color: #393939;
    }

    .section_footer_top {
        height: 2.24rem;
        background-color: #fff;
        border-top: 1px solid #efefef;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        color: #393939;
    }

    .section_footer_top p {
        margin-left: 0.28rem;
        line-height: 0.45rem;

    }

    .section_footer_top_btn {
        position: absolute;
        background-color: #fff;
        border: 1px solid #ccc;
        margin-left: 0.28rem;
    }

    .section_footer_msg {
        height: 1.84rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding-left: 0.28rem;
        padding-right: 0.28rem;
        border-top: 1px solid #efefef;
    }

    .section_footer_right, .section_footer_left {
        height: 1.84rem;
        line-height: 0.52rem;
        color: #393939;
    }

    .section_footer_right p {
        color: #939393;
    }

    .section_footer_footer {
        height: 0.98rem;
        background-color: #fff;
        border-top: 1px solid #efefef;
        display: flex;
        justify-content: flex-end;
        align-items: center;

    }

    .section_footer_footer p {
        color: #939393;
        margin-right: 0.28rem;
    }

    .section_footer_footer p:first-child {
        font-size: 0.28rem;
        color: #333333;
    }

    .section_footer_footer p:last-child {
        font-size: 0.28rem;
        color: #d52e52;
    }

    .footer_btn {
        width: 100%;
        height: 1.04rem;
        background-color: #ffffff;
        position: absolute;
        bottom: 0;
    }
    .footer_btn_btn{
        position: absolute;
        right: 0.22rem;
        @include ct
    }
    .footer_btn_btn button:first-child{
        width: 1.6rem;
        height: 0.68rem;
        border-radius: 0.08rem;
        border: solid 1px #c9c9c9;
        background-color: #fff;
        margin-right: 0.38rem;
    }
    .footer_btn_btn button:last-child{
        width: 1.6rem;
        height: 0.68rem;
        border-radius: 0.08rem;
        border: solid 1px #f28817;
        background-color: #fff;
        color: #f28817;
    }

</style>