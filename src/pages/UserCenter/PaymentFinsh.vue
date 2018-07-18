<template>
    <div class="PaymentFinsh-wrap mask">
        <div class="nav">
            <div class="nav_top">
                <div class="nav_top_bgc">
                    <img src="" alt="" class="nav_top_bgc_img">
                </div>
                <div class="nav_center">
                    <p>支付成功</p>
                </div>
                <div class="nav_section">
                    <div class="nav_section_top">
                        <p>支付方式:</p>
                        <p>&nbsp微信支付</p>
                    </div>
                    <div class="nav_section_footer">
                        <p>订单金额:</p>
                        <p>&nbsp$35.00</p>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="footer_btn">
                    <button class="footer_btn_left">查看订单</button>
                    <button class="footer_btn_right">返回首页</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PaymentFinsh"
    }
</script>

<style scoped>
    .nav_top {
        height: 6.22rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /*background-color: #ff0;*/
    }

    .nav_top_bgc {
        width: 1.84rem;
        height: 1.84rem;
        background-color: #fa9e15;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav_top_bgc_img {
        display: inline-block;
        width: 1.26rem;
        height: 0.94rem;
        background-color: #ffffff;
    }

    .nav {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .nav_center p {
        font-size: 0.36rem;
        color: #333333;
        margin-top: 0.26rem;
    }

    .nav_section {
        margin-top: 0.18rem;
    }

    .nav_section_top, .nav_section_footer {
        display: flex;
        width: 2.64rem;
        justify-content: space-between;
    }

    .nav_section_top :first-child, .nav_section_footer :first-child {
        font-size: 0.28rem;
        color: #979797;
    }

    .nav_section_top :last-child, .nav_section_footer :last-child {
        font-size: 0.28rem;
        color: #e78e35;

    }
    .nav_section_footer :last-child{
        margin-top: 0.06rem;
        width: 1.21rem;
        text-align: center;
    }

    .footer_btn_left,.footer_btn_right{
        width: 1.6rem;
        height: 0.68rem;
        border-radius: 0.08rem;
    }
    .footer_btn{
        margin-left: 1.6rem;
    }
    .footer_btn_left{
        border: solid 1px #f28817;
        background-color: #fff;
        color: #f28818;
        font-size: 0.28rem;
    }
    .footer_btn_right{
        background-color: #f28817;
        color: #fff;
        margin-left:1.04rem ;
    }
</style>