<template>
    <div class="nowappoint-wrap mask">
        <div class="wallet">
            <div class="nav">
                <div class="nav_img">
                    <img src="../../assets/images/特惠-banner1.png" alt="">
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
                        <img src="../../assets/images/洗车详情-定位icon.png" class="section_top_img">
                        <p class="section_top_left_ptop">广州市荔湾区东风中路439号</p>
                        <p>距地铁2号线纪念堂D2出口不行880m</p>
                    </div>
                    <div class="section_top_right">
                        <div class="section_top_right_img">
                            <div class="line"></div>
                            <img src="../../assets/images/洗车详情-导航icon.png" class="section_top_right_img_img" alt="">
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
                        <p>预约时间</p>
                    </div>
                    <div class="footer_footer_msg_right">
            <span>
              <img src="../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
            </span>
                    </div>
                </div>
                <div class="footer_footer_msg">
                    <div class="footer_footer_msg_left">
                        <p>选择项目</p>
                    </div>
                    <div class="footer_footer_msg_right">
            <span>
              <img src="../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
            </span>
                    </div>
                </div>
                <div class="footer_footer_msg">
                    <div class="footer_footer_msg_left">
                        <p>选择车辆</p>
                    </div>
                    <div class="footer_footer_msg_right">
            <span>
              <img src="../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
            </span>
                    </div>
                </div>
                <div class="footer_footer_msg">
                    <div class="footer_footer_msg_left">
                        <p>用户姓名</p>
                    </div>
                    <div class="footer_footer_msg_input">
                        <input type="text" placeholder="用户姓名">
                    </div>
                </div>
                <div class="footer_footer_msg">
                    <div class="footer_footer_msg_left">
                        <p>用户电话</p>
                    </div>
                    <div class="footer_footer_msg_input">
                        <input type="number" placeholder="用户电话">
                    </div>
                </div>
                <button class="appoint_btn">立即预约</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {score} from "mixins";
    import Calendar from 'vue-calendar-component'

    export default {
        mixins: [score],
        name: "nowappoin"
    }

</script>

<style lang="scss" scoped>
    .nowappoint-wrap {
        height: 14.22rem;
    }

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
        height: 0.3rem;
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
        padding-left: 0.4rem;
        height: 1.28rem;
        background-color: #fff;
    }

    .nav_center p {
        font-size: 0.28rem;
        font-weight: 600;
    }

    .nav_img {
        width: 100%;
        height: 3.54rem;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .nav {
        height: 4.4rem;
        display: flex;
        flex-direction: column;
    }

    .nav_wallet_p {
        font-size: 0.33rem;
        font-weight: 700;
        color: #000;
    }

    .nav_money_p {
        font-size: 0.9rem;
        color: #000;
        font-weight: 700;
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
        margin-top: 0.26rem;
    }

    .footer_footer {
        height: 4.8rem;
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

    .footer_footer_msg_left {
        width: 30%;
    }

    .footer_footer_msg_input {
        width: 70%;
    }
    .footer_footer_msg_input input{
        font-size: .29rem;
    }

    .footer_footer_msg_left p {
        /*font-weight: 600;*/
        font-size: 0.28rem;
        color: #000
    }

    .big_rightArrow {
        width: 0.16rem;
        height: 0.3rem;
    }

    .section_top_left_ptop {
        font-weight: 800;
    }

    .appoint_btn {
        width: 100%;
        height: 0.72rem;
        /* position: absolute; */
        bottom: 0;
        background-color: orange;
        color: #fff;
        font-size: .3rem;

    }

</style>
