<template>
    <div class="my-order mask">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">全部</mt-tab-item>
            <mt-tab-item id="2">代付款</mt-tab-item>
            <mt-tab-item id="3">已付款</mt-tab-item>
            <mt-tab-item id="4">已核销</mt-tab-item>
            <mt-tab-item id="5">已过期</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in getOrderIndexList">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">待付款</p>
                            <router-link to="/UserCenter/Payment">
                                <button class="pay-btn order-btn fr">付款</button>
                            </router-link>
                            <button class="delete-btn order-btn fr">删除订单</button>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in getOrderIndexNew">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">待付款</p>
                            <router-link to="/UserCenter/Payment">
                                <button class="pay-btn order-btn fr">付款</button>
                            </router-link>
                            <button class="delete-btn order-btn fr">删除订单</button>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in OrderIndexOldList">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已付款</p>
                            <!--<router-link to="/UserCenter/Payment">-->
                            <!--<button class="pay-btn order-btn fr">付款</button>-->
                            <!--</router-link>-->
                            <!--<button class="delete-btn order-btn fr">删除订单</button>-->
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in OrderIndexThree">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已核销</p>
                            <!--<router-link to="/UserCenter/Payment">-->
                            <!--<button class="pay-btn order-btn fr">付款</button>-->
                            <!--</router-link>-->
                            <!--<button class="delete-btn order-btn fr">删除订单</button>-->
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in OrderIndexFour">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已过期</p>
                            <!--<router-link to="/UserCenter/Payment">-->
                            <!--<button class="pay-btn order-btn fr">付款</button>-->
                            <!--</router-link>-->
                            <!--<button class="delete-btn order-btn fr">删除订单</button>-->
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>

</template>
<script>
    import {getOrderIndex, getOrderIndexNew, getOrderIndexOld, getOrderIndexThree,getOrderIndexFour} from "../../utils/api";
    // import { getIndexData } from '../utils/api.js'
    export default {
        name: "Appointment",
        data() {
            return {
                selected: '1',
                getOrderIndexList: [],
                getOrderIndexNew: [],
                OrderIndexOldList: [],
                OrderIndexThree: [],
                OrderIndexFour:[]
            };
        },
        created() {

        },
        mounted() {
            this._getOrderIndex()
            this._getOrderIndexNew()
            this._getOrderIndexOld()
            this._getOrderIndexThree()
            this._OrderIndexFour()
        },
        methods: {
            _getOrderIndex() {      //全部

                getOrderIndex().then(res => {
                    if (res && !res.errorCode) {
                        this.getOrderIndexList = res
                        console.log(res);
                    }
                })

            },
            _getOrderIndexNew() {    //待付款

                getOrderIndexNew().then(res => {
                    if (res && !res.errorCode) {
                        this.getOrderIndexNew = res
                        console.log(res);
                    }
                })

            },
            _getOrderIndexOld() {

                getOrderIndexOld().then(res => {
                    if (res && !res.errorCode) {
                        this.OrderIndexOldList = res
                        console.log(res);
                    }
                })

            },
            _getOrderIndexThree() {
                getOrderIndexThree().then(res => {
                    if (res && !res.errorCode) {
                        this.OrderIndexThree = res
                        console.log(res);
                    }
                })
            },
            _getOrderIndexFour(){
                getOrderIndexFour().then(res =>{
                    if(res && res.errorCode) {
                        this.OrderIndexFour = res
                    }
                })
            }

        }
    };

</script>
<style lang="scss" scoped>
    .mint-navbar {
        padding: 0 .34rem;
        background-color: #fff;
        border-bottom: 1px solid #eaeaea;
    }

    .mint-tab-item {
        height: .84rem;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 2px solid #fa9e15;
        color: #fa9e15;
    }

    .order-list {
        li {
            height: 2.84rem;
            margin-bottom: .2rem;
            background-color: #fff;
            .order-top {
                height: 2rem;
                border-bottom: 1px solid #eaeaea;
            }
            .goods-img {
                width: 1.24rem;
                height: 1.24rem;
                padding: .38rem .16rem 0 .36rem;
            }
            .goods-name {
                position: relative;
                padding-top: .34rem;
                font-size: 0.28rem;
                line-height: .4rem;
                .r-arrow {
                    position: absolute;
                    top: .46rem;
                    right: .32rem;
                    width: 0.1rem;
                    height: 0.18rem;
                }
            }
            .price-box {
                padding-top: .16rem;
                font-size: 0.24rem;
                line-height: .34rem;
                color: #f87e81;
                position: relative;
                .goods-total {
                    padding-right: .3rem;
                    color: #4a4a4a;
                }
                .car {
                    position: absolute;
                    left: 1.8rem;
                    top: .6rem;
                    color: #4a4a4a;;
                }
            }
            .order-bottom {
                font-size: 0.28rem;
                line-height: 0.84rem;
            }
            .order-state {
                padding-left: .32rem;
            }
            .order-state_wait {
                color: #f87e81;
            }
            .order-btn {
                width: 1.6rem;
                text-align: center;
                height: 0.48rem;
                margin-top: .17rem;
                background-color: #fff;
                border-radius: 0.04rem;
            }
            .cancel-btn,
            .pay-btn {
                border: solid 2px #fa9e15;
                color: #fa9e15;
            }
            .delete-btn {
                border: solid 2px red;
                color: red
            }
            .cancel-btn {
                margin-right: .5rem;
            }
            .pay-btn,
            .delete-btn {
                margin-right: .26rem;
            }
        }
    }

</style>
