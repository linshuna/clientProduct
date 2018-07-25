<template>
    <div class="wallet-wrap mask">

        <div class="wallet">
            <div class="nav">
                <p class="nav_wallet_p">我的余额</p>
                <p class="nav_money_p">¥&nbsp;{{walletIndex.amount}}</p>
                <!--<div class="section">-->
                <!--<div class="price">-->

                <!---->
                <!---->
                <!--</div>-->

                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">
                        <p class="price">{{walletlog.amount}}</p>消费记录
                    </mt-tab-item>
                    <mt-tab-item id="2">
                        <p class="price">{{walletlog.recharge}}</p>充值记录
                    </mt-tab-item>
                    <mt-tab-item id="3">
                        <p class="price">{{walletlog.bonus}}</p>分红
                    </mt-tab-item>
                </mt-navbar>

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


                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <ul class="footer_footer" v-for="item in WalletAmountlogList">
                            <li class="footer_footer_msg">
                                <div class="footer_footer_msg_left">
                                    <p>{{item.des}}</p>
                                </div>
                                <div class="footer_footer_msg_right">
                                    <p class="footer_footer_msg_right_pone">{{item.state}}{{item.price}}</p>
                                    <p class="footer_footer_msg_right_ptwo">{{item.addtime}}</p>
                                </div>
                            </li>
                        </ul>
                    </mt-tab-container-item>

                    <mt-tab-container-item id="2">
                        <ul class="footer_footer">
                            <li class="footer_footer_msg" v-for="item in WalletRechargelog">
                                <div class="footer_footer_msg_left">
                                    <p>{{item.des}}</p>
                                </div>
                                <div class="footer_footer_msg_right">
                                    <p class="footer_footer_msg_right_pone">{{item.state}}{{item.price}}</p>
                                    <p class="footer_footer_msg_right_ptwo">{{item.addtime}}</p>
                                </div>
                            </li>
                        </ul>
                    </mt-tab-container-item>

                    <mt-tab-container-item id="3">
                        <ul class="footer_footer">
                            <li class="footer_footer_msg" v-for="item in WalletBonuslog">
                                <div class="footer_footer_msg_left">
                                    <p>{{item.des}}</p>
                                </div>
                                <div class="footer_footer_msg_right">
                                    <p class="footer_footer_msg_right_pone">{{item.state}}{{item.price}}</p>
                                    <p class="footer_footer_msg_right_ptwo">{{item.addtime}}</p>
                                </div>
                            </li>
                        </ul>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>

<script>
    import {getWalletIndex} from '../../utils/api.js'
    import {getWalletAmountlog} from '../../utils/api.js'
    import {getWalletRechargelog} from '../../utils/api.js'
    import {getWalletBonuslog} from '../../utils/api.js'

    export default {
        name: "wallet",
        data() {
            return {
                walletIndex: {},
                walletlog: {},
                selected: "1",
                WalletAmountlogList: '',     //消费
                WalletRechargelog: '',       //充值
                WalletBonuslog: '',      //分红
                clientvid: 0,
            }
        },
        mounted() {
            // this._getWalletIndex()
            // this._getWalletAmountlog()
            // this._getWalletRechargelog()
            // this._getWalletBonuslog()
            let getStorage = this.$store.getters.getStorage;
            if (getStorage) {
                this.clientvid = this.$store.getters.getStorage.vid;
                this._getWalletIndex()
                this._getWalletAmountlog()
                this._getWalletRechargelog()
                this._getWalletBonuslog()
            }
        },

        created() {
            this.clientvid = this.$store.getters.getStorage.vid;
        },
        methods: {
            _getWalletIndex() {
                getWalletIndex({clientvid: this.clientvid}).then(res => {
                    this.walletIndex = res.wallet
                    this.walletlog = res.log
                    // console.log(res);
                    // console.log(this.walletIndex);
                })
            },
            _getWalletAmountlog() {      //消费
                getWalletAmountlog({clientvid: this.clientvid}).then(res => {
                    if (res&&!res.errorCode) {
                        this.WalletAmountlogList = res
                        console.log(res);
                    }
                })

            },
            _getWalletRechargelog() {        //充值
                getWalletRechargelog({clientvid: this.clientvid}).then(res => {
                    if (res&&!res.errorCode) {
                        this.WalletRechargelog = res
                    }
                    // console.log(res);
                })
            },
            _getWalletBonuslog() {       //红包
                getWalletBonuslog({clientvid: this.clientvid}).then(res => {
                    if (res&&!res.errorCode) {
                        this.WalletBonuslog = res
                    }
                    // console.log(res);
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .mint-navbar {
        padding: 0 .05rem;
        background-color: #fa9e15;
        /*border-bottom: 1px solid #eaeaea;*/
        margin-bottom: .3rem;
    }

    .mint-tab-item {
        height: 1rem;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 2px solid #fa9e15;
        color: #fff;
    }

    /*.mint-tab-item-label{*/
    /*padding-bottom: .5rem;*/
    /*}*/

    .nav {
        height: 4.96rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #020202;
        background: url("../../assets/images/Wallet_bg.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
    }

    /*.price {*/
    /*width: 100%;*/
    /*position: absolute;*/
    /*display: flex;*/
    /*bottom: 1rem;*/
    /*z-index: 5;*/
    /*}*/

    .price {
        height: 0.5rem;
        text-align: center;
    }

    .nav_wallet_p {
        padding-top: .1rem;
        font-size: 0.28rem;
        color: #fceed9;
        position: relative;
    }

    .nav_money_p {
        font-size: 0.6rem;
        color: #fdfdfd;
    }

    .mint-navbar {
        height: 0.9rem;
        display: flex;
        flex-direction: row;
        margin-top: 0.2rem;
        position: absolute;
        bottom: 0.32rem;
        color: #020202;

        width: 7.5rem;
    }

    .section > .section_left,
    .section > .section_center {
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

    .section_right, .section_left, .section_center {

        font-size: 0.28rem;
        color: #fdfdfd;
    }

    .section_right p, .section_left p, .section_center p {
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
