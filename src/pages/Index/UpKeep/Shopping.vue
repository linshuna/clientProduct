<template>
    <div class="Shopping-wrap mask">
        <div class="Shopping">
            <div class="nav_swipe">
                <mt-swipe :auto="0">
                    <mt-swipe-item><img
                            src="http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg"
                            alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="http://p2.gexing.com/G1/M00/14/03/rBACE1aTbCCSTsY5AAEIjDXspWQ96.jpeg"
                                        alt="">
                    </mt-swipe-item>
                    <mt-swipe-item><img src="http://img.zcool.cn/community/017fcc5535f1710000001e3101c50c.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="section">
                <div class="section_top">
                    <p>热销产品</p>
                </div>
                <div class="section_footer_ulaa">
                    <ul class="section_footer_ul">
                        <li>
                            <div class="section_footer">
                                <img src="http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg" alt="" class="section_footer_img">
                                <p>米其林轮胎</p>
                                <p>¥5040.00</p>
                            </div>
                        </li>
                        <li>
                            <div class="section_footer">
                                <img src="http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg" alt="" class="section_footer_img">
                                <p>米其林轮胎</p>
                                <p>¥5040.00</p>
                            </div>
                        </li>
                        <li>
                            <div class="section_footer">
                                <img src="http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg" alt="" class="section_footer_img">
                                <p>米其林轮胎</p>
                                <p>¥5040.00</p>
                            </div>
                        </li>
                        <li>
                            <div class="section_footer">
                                <img src="http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg" alt="" class="section_footer_img">
                                <p>米其林轮胎</p>
                                <p>¥5040.00</p>
                            </div>
                        </li>
                        <li>
                            <div class="section_footer">
                                <img src="http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg" alt="" class="section_footer_img">
                                <p>米其林轮胎</p>
                                <p>¥5040.00</p>
                            </div>
                        </li>
                        <li>
                            <div class="section_footer">
                                <img src="http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg" alt="" class="section_footer_img">
                                <p>米其林轮胎</p>
                                <p>¥5040.00</p>
                            </div>
                        </li>



                    </ul>
                </div>

            </div>
            <div class="footer">
                <div class="footer_top">
                    <button class="footer_top_button">全程246加门店</button>
                </div>
                <div class="footer_center">
                    <p>越秀区</p> <img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_a">
                    <p>服务类型</p><img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_b">
                    <p>离我最近</p><img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_c">
                </div>
            </div>
            <router-link to="/Index/UpKeep">
                <div class="footer_footer">
                    <div class="footer_footer_nav">
                        <p>NO.1 微位科技服务店 (越秀店)</p><img src="../../../assets/images/rightArrow.png" alt=""
                                                      class="rightArrow">
                    </div>

                    <div class="footer_footer_section">
                        <img src="http://img4.imgtn.bdimg.com/it/u=2136180122,282910574&fm=27&gp=0.jpg" alt=""
                             class="footer_footer_section_img">
                        <div class="footer_footer_section_right">
                            <p>主修车型: 奔驰 宝马 奥迪</p>
                            <div class="footer_fsection">
                                <div class="footer_footer_section_right_p"><p>订单</p>
                                    <p>2589</p></div>
                                <div class="footer_footer_section_right_pb"><p>已售</p>
                                    <p>11463</p></div>
                            </div>
                            <p>营业时间: 08:00-18:00</p>
                            <p>广州市越秀区环市东路400号</p>
                            <img src="../../../assets/images/navigation-icon.png" alt="" class="navigation">
                            <p class="footer_km">距离 8km</p>
                        </div>

                    </div>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'Shopping',
        data() {
            return {}
        },
        created: function () {

        },
        mounted: function () {

        },
        methods: {}
    }
</script>

<style scoped>
    .nav_swipe {
        height: 3.42rem;
    }

    .Shopping {
        overflow: hidden;

    }

    .footer_top {
        height: 1rem;
        background-color: #efefef;
    }

    .nav_swipe img {
        width: 7.5rem;
        height: 3.42rem;
    }

    .footer_center {
        height: 0.72rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .footer_center p {
        flex: 1;
        text-align: center;
    }

    .rightArrow {
        width: .12rem;
        height: .12rem;
    }

    .btmArrow_a, .btmArrow_b, .btmArrow_c {
        width: .12rem;
        height: .12rem;
        position: absolute;
    }

    .btmArrow_a {
        left: 1.88rem;
    }

    .btmArrow_b {
        left: 4.4rem;
    }

    .btmArrow_c {
        right: 0.24rem;
    }

    .section_top {
        height: 0.62rem;
        background-color: #fff;
        border-bottom: 1px solid #efefef;
        display: flex;
        align-items: center;
        padding-left: 0.3rem;
    }

    .section_footer_ul {
        display: flex;
        background-color: #fff;
        overflow: auto;
        white-space: nowrap;
    }

    .section_footer_ulaa {
        overflow: hidden;
    }

    .section_footer {
        height: 3.4rem;
        background-color: #fff;
        padding-left: 0.3rem;
        padding-top: 0.28rem;
        display: flex;
        flex-direction: column;
    }

    .section_footer p {
        width: 1.36rem;
        height: 0.4rem;
        line-height: 0.4rem;

    }

    .section_footer p:last-child {
        color: #db3f40;
    }

    .section_footer_img {
        display: inline-block;
        width: 2rem;
        height: 2.14rem;
        border-radius: 0.2rem;
        /*background-color: #ff0;*/

    }

    .footer_top {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer_top_button {
        width: 3.12rem;
        height: 0.56rem;
        background-color: #e1e1e1;
        border-radius: 2rem;
        text-align: center;
        line-height: 0.56rem;
    }

    .footer_footer {
        height: 3rem;
        margin-top: 0.2rem;
        background-color: #fff;
    }

    .footer_footer_nav {
        height: 0.7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #efefef;
        padding: 0 .3rem 0 .3rem;
    }

    .footer_footer_section {
        height: 2.24rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .footer_footer_section_img {
        width: 1.5rem;
        height: 1.5rem;
        background-color: #d7d7d7;
        border-radius: 0.2rem;
    }

    .footer_footer_section_right {
        width: 5.02rem;
        height: 1.56rem;
        display: flex;
        flex-direction: column;
        padding-left: .22rem;
        position: relative;
        line-height: 0.4rem;
    }

    .footer_footer_section_right_p, .footer_footer_section_right_pb {
        display: flex;
        line-height: 0.32rem;
    }

    .footer_footer_section_right_p p:last-child, .footer_footer_section_right_pb p:last-child {
        color: #ff8003;
    }

    .footer_footer_section_right_pb {
        margin-left: 0.1rem;
    }

    .footer_fsection {
        display: flex;
    }

    .navigation {
        width: 0.36rem;
        height: 0.36rem;
        position: absolute;
        right: 0;
        top: 0;
    }

    .footer_km {
        position: absolute;
        width: 1.48rem;
        height: 0.48rem;
        right: 0;
        bottom: 0;
        border: 1px solid #ff8003;
        border-radius: 0.04rem;
        text-align: center;
        line-height: 0.48rem;
        color: #ff8003;
    }
</style>