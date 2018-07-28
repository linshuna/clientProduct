<template>
    <div class="e-index">
        <div v-show="isshow">
            <div class="car-model" v-if="clientvid">
                <div class="car-nav" v-if="IndexDefaultCarList&&IndexDefaultCarList.ishave==1">
                    <img :src="IndexDefaultCarList.icon" alt="车标" class="car-img">
                    <p class="txt">{{IndexDefaultCarList.carplate}}：{{IndexDefaultCarList.carNo}}</p>
                    <img src="../assets/images/rightArrow.png" alt="箭头" class="r-arrow">
                </div>
                <router-link to="/UserCenter/MyCar/">
                    <div class="car-nav" v-if="IndexDefaultCarList&&IndexDefaultCarList.ishave==0">
                        <img src="../assets/images/jia.png" alt="车标" class="car-img">
                        <p class="ttxt">添加车辆</p>
                        <img src="../assets/images/rightArrow.png" alt="箭头" class="r-arrow">
                    </div>
                </router-link>
            </div>
            <ul class="nav-list">
                <router-link to="/Appointment" tag="li">
                    <img src="../assets/images/首页-预约icon.png" alt="预约图片" class="nav-img">
                    <p class="nav-txt">预约</p>
                </router-link>
                <router-link to="/Index/CarWash" tag="li">
                    <img src="../assets/images/首页-洗车icon.png" alt="洗车图片" class="nav-img">
                    <p class="nav-txt">洗车</p>
                </router-link>
                
                <router-link to="/Index/Rescue" tag="li">
                    <img src="../assets/images/首页-救援icon.png" alt="救援图片" class="nav-img">
                    <p class="nav-txt">救援</p>
                </router-link>
                <router-link to="/Index/UpKeep" tag="li">
                    <img src="../assets/images/shopIcon.png" alt="商城图片" class="nav-img">
                    <p class="nav-txt">商城</p>
                </router-link>
                <router-link to="/Index/Insurance" tag="li">
                    <img src="../assets/images/首页-车险icon.png" alt="车险图片" class="nav-img">
                    <p class="nav-txt">车险</p>
                </router-link>
                <router-link to="/Index/Discounts" tag="li">
                    <img src="../assets/images/首页-特惠icon.png" alt="特惠图片" class="nav-img">
                    <p class="nav-txt">特惠</p>
                </router-link>
                <router-link to="/Index/FindTecher" tag="li">
                    <img src="../assets/images/首页-找师傅icon.png" alt="导航图片" class="nav-img">
                    <p class="nav-txt">找师傅</p>
                </router-link>
                <router-link to="/Index/Recharge" tag="li">
                    <img src="../assets/images/首页-充值优惠icon.png" alt="导航图片" class="nav-img">
                    <p class="nav-txt">充值优惠</p>
                </router-link>
            </ul>
            <div class="banners">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
                        <img :src="item.pic" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="toolbar">
                <div class="recommend">
                    <h3 class="tt">为您推荐</h3>
                    <ul class="rm-list">
                        <li v-for="(item, index) in recommendList" :key="index" @click="nowBuyGoods(item.id)">
                            <img class="goods-img" :src="item.pic" alt="商品图片">
                            <p class="goods-name">{{item.name}}</p>
                            <p class="goods-price">¥{{item.price}}</p>
                        </li>
                    </ul>
                </div>
                <div class="shop">
                    <router-link to="/NearbyStores">
                        <h3 class="tt">最近门店</h3>
                    </router-link>
                    <img src="../assets/images/rightArrow.png" alt="箭头" class="r-arrow">
                    <ul class="shop-list">
                        <li class="clearfix" @click.stop="lookStoreDetail(nearbyStores.id)">
                            <img :src="nearbyStores.pic" alt="门店图片" class="shop-img fl">
                            <div class="shop-info-box fl">
                                <h3 class="shop-name">{{nearbyStores.name}}</h3>
                                <div class="star-box">
                                    <span class="assess">评价：</span>
                                    <score-lv :stars='nearbyStores.evaluateShow-0'></score-lv>
                                </div>
                                <div class="order-box">
                                    <div :class="{'app-hot':nearbyStores.state==2,'app-accept':nearbyStores.state==1,'app-full':nearbyStores.state==0||nearbyStores.state==3}">{{nearbyStores.state | serverTypeFilter}}</div>
                                    <div class="order-sum">月订单{{nearbyStores.sale}}单</div>
                                </div>
                                <p class="shop-address ellipsis fl">
                                    {{nearbyStores.city}}{{nearbyStores.dist}}{{nearbyStores.address}}</p>
                                
                            </div>
                            <div class="shop-dist">大约{{nearbyStores.distance | distanceFilter}}</div>
                            <img :src="mapIcon" class="shop-dist-img" alt="" @click.stop="openMap(nearbyStores.longitude,nearbyStores.latitude,nearbyStores.name,nearbyStores.address)">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <transition name="slideR">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script> 
    import {score} from "mixins";
    var jsonp = require('jsonp');
    import {
        getIndexBanner,
        getRecommendList,
        getNearbyStores,
        getActivity,
        IndexDefaultCar
    } from '../utils/api.js'

    export default {
        mixins: [score],
        name: "index",
        data() {
            return {
                IndexDefaultCarList:'',
                isshow: true,
                // isshownav:true,
                bannerList: [],
                recommendList: [],
                nearbyStores: {},
                latitude: 0,
                longitude: 0,
                clientvid: 0,
                pageData: {
                    shop: {
                        shopImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1128551442,917083253&fm=27&gp=0.jpg',
                        shopName: '黄埔店',
                        shopStar: 4,
                        shopOrder: 250,
                        shopAddress: '黄埔大道西又黄埔大道东',
                        shopDist: '8km'
                    }
                },
                addressname:{},
                mapIcon: require('../assets/images/洗车详情-定位icon.png')
            };
        },
        created() {
        },
        mounted() {
            this._getIndexBanner();
            this._getRecommendList();
            
            let getStorage = this.$store.getters.getStorage;
            if(getStorage){
                this.clientvid = this.$store.getters.getStorage.vid;
            }
            //获取当前位置
            let _this = this;
            jsonp('https://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&output=jsonp', null, function (err, data){
                let res = data.result
                let addressName = res.ad_info.city+" "+res.ad_info.district;
                _this.$set(_this.addressname,'name',addressName)
                _this.$set(_this.addressname,'longitude',res.location.lng)
                _this.$set(_this.addressname,'latitude',res.location.lat)
                _this.$set(_this.addressname,'code',res.ad_info.adcode)
                console.log(res)
            })
            this._IndexDefaultCar();
        },
        watch: {
            $route(to, from) {
                if (to.name == 'Index') {
                    this.isshow = true
                    return
                }
                this.isshow = false
            },
            addressname: function(newVal,oldVal){
                this.longitude = newVal.longitude
                this.latitude = newVal.latitude
                // this.search = newVal.code;//默认的城市code
                this._getNearbyStores();
            }
        },
        methods: {
            _getIndexBanner() {
                getIndexBanner().then(res => {
                    this.bannerList = res
                })
            },
            _getRecommendList() {
                getRecommendList().then(res => {
                    this.recommendList = res
                })
            },
            _getNearbyStores() {
                getNearbyStores({
                    latitude: this.latitude,
                    longitude: this.longitude,
                }).then(res => {
                    this.nearbyStores = res
                })
            },
            openMap:function (long,lat,name,address) { //预览图片
              window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${lat},${long};title:${name};addr:${address};&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&referer=myapp `        
            },
            lookStoreDetail: function(id){//查看门店详情
              this.$router.push({path: '/Index/storeDetail/'+id})
            },
            nowBuyGoods: function(id){//购买商品详情
              this.$router.push({path: '/Index/UpKeep/maintain/'+id})
            },
            // waiting: function(){
            //   this.$store.commit('showToast','敬请期待，正在开发中。。。')
            // },
             _IndexDefaultCar(){
                IndexDefaultCar({clientvid: this.clientvid}).then(res => {
                        this.IndexDefaultCarList = res
                    console.log(res);
                })
            }
        }


    };


</script>
<style lang="scss" scoped>
    .e-index {
      position: absolute;
      width: 100%;
      min-height: 100%;
      background-color: #f5f5f5;
    }

    .car-nav {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.72rem;
        margin-bottom: 0.2rem;
        background-color: #fff;
        .car-img {
            width: 0.44rem;
            height: 0.44rem;
            padding: 0 .16rem 0 .32rem;
        }
        .ttxt {
            margin-right: .1rem;
        }
        .txt {
            font-size: 0.28rem;
        }
        .r-arrow {
            position: absolute;
            right: .4rem;
            width: 0.1rem;
            height: 0.18rem;
        }
    }

    .nav-list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: .06rem;
        li {
            width: 25%;
            height: 1.78rem;
            background-color: #fff;
            text-align: center;
        }
        .nav-img {
            width: 0.88rem;
            height: 0.88rem;
            padding: .2rem 0;
        }
        .nav-txt {
            font-size: 0.24rem;
        }
    }

    .banners {
        width: 100%;
        height: 3.14rem;
        margin-bottom: 0.2rem;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .toolbar .tt {
        height: 0.7rem;
        line-height: 0.7rem;
        padding-left: 0.3rem;
        font-size: 0.28rem;
        background-color: #fff;
        border-bottom: solid 0.02rem #eaeaea;
    }

    .recommend,
    .shop {
        margin-bottom: .2rem;
    }

    .rm-list {
        display: flex;
        overflow: auto;
        background: #fff;
        li {
            padding: .2rem 0 .3rem .3rem;
        }
        .goods-img {
            width: 2rem;
            height: 2.14rem;
            margin-bottom: .16rem;
            border-radius: 0.1rem;
        }
        .goods-name {
            font-size: 0.28rem;
            padding-bottom: .1rem;
        }
        .goods-price {
            font-size: 0.28rem;
            color: #db3f40;
        }
    }

    .shop {
        position: relative;
        padding-bottom: 2rem;
        .r-arrow {
            position: absolute;
            top: .28rem;
            right: .4rem;
            width: 0.1rem;
            height: 0.18rem;
        }
        .shop-list {
            li {
                position: relative;
                height: 2.24rem;
                background-color: #fff;
            }
            .shop-img {
                width: 1.5rem;
                height: 1.5rem;
                margin: .2rem .22rem 0 .3rem;
                border-radius: 0.1rem;
            }
        }
        .shop-info-box {
            .shop-name {
                padding-top: .22rem;
                font-size: 0.3rem;
            }
            // .star-box {
            //   position: relative;
            //   img {
            //     width: 0.28rem;
            //     height: 0.28rem;
            //     padding: .04rem .03rem;
            //   }
            // }
            .order-box {
                height: .44rem;
                display: flex;
                align-items: center;
                font-size: .2rem;
                .appointment {
                    width: 0.96rem;
                    height: 0.32rem;
                    line-height: 0.32rem;
                    background-color: #8ac141;
                    color: #fff;
                    text-align: center;
                }
                .appointment.app-full {
                    background-color: #999;
                }
                .appointment.app-hot {
                    background-color: #f8241e;
                }
                .order-sum {
                    padding-left: .2rem;
                    color: #999;
                }
            }
            .shop-address {
                width: 3rem;
                font-size: 0.24rem;
            }
            
        }
        .shop-dist-img {
            width: 0.32rem;
            position: absolute;
            right: 1rem;
            top: .45rem;
        }
        .shop-dist {
            position: absolute;
            top: 1.18rem;
            right: .42rem;
            min-width: 1.48rem;
            max-width:2.5rem;
            overflow:hidden;
            height: 0.48rem;
            line-height: .48rem;
            border-radius: 0.04rem;
            border: solid 1px #ff8003;
            font-size: 0.24rem;
            color: #ff8004;
            text-align: center;
            padding: 0 .1rem;
            box-sizing: border-box;
        }
    }

</style>
<style>
    .mint-swipe-indicator {
        background: #fff !important;
        opacity: 1 !important;
    }

    .mint-swipe-indicator.is-active {
        background-color: #cc5222 !important;
    }

</style>
