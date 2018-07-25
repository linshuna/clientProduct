<template>
    <div class="Shopping-wrap mask">
        <div class="Shopping">
            <div class="nav_swipe">
                <mt-swipe :auto="0">
                    <!--<mt-swipe-item><img-->
                    <!--src="http://img3.redocn.com/tupian/20160108/lvsehuahuizhizhangfanyexiaoguobeijingsucai_5728265.jpg"-->
                    <!--alt=""></mt-swipe-item>-->
                    <mt-swipe-item v-for="(item,index) in bannerList " :key="index">
                        <img :src="item.pic" alt="">
                    </mt-swipe-item>
                    <!--<mt-swipe-item><img src="http://img.zcool.cn/community/017fcc5535f1710000001e3101c50c.jpg" alt="">-->
                    <!--</mt-swipe-item>-->
                </mt-swipe>
            </div>
            <div class="section">
                <div class="section_top">
                    <p>热销产品</p>
                </div>
                <div class="section_footer_ulaa">
                    <ul class="section_footer_ul">
                        <li v-for="(item,index) in RecommendList " :key="index">
                            <div class="section_footer">
                                <img :src="item.pic" alt="" class="section_footer_img">
                                <p>{{item.name}}</p>
                                <p>¥{{item.salesprice}}</p>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
            <div class="footer">
                <div class="footer_top">
                    <button class="footer_top_button">全城246家门店</button>
                </div>
                <div class="footer_center">
                    <mt-navbar v-model="selected">
                        <mt-tab-item id="1">
                            <p @click="changeType(1)">{{addressname.name}}</p>
                        </mt-tab-item>
                        <mt-tab-item id="2" >
                            <p @click="changeType(3)">{{standard}}</p>
                        </mt-tab-item>
                        <mt-tab-item id="3" @click="changeType(3)">
                            <p @click="changeType(2)">{{sortsText}}</p>
                        </mt-tab-item>
                    </mt-navbar>
                    <pro-city-area v-bind:current.sync="currentPicker" v-bind:popupVisible.sync="popupVisible" @gainAllAddress="gainAllAddress" @gainSort="gainSort" @gainProject="gainProject"></pro-city-area>

                    <!--<p>越秀区</p> <img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_a">-->
                <!--<p>服务类型</p><img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_b">-->
                <!--<p>离我最近</p><img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_c">-->
                <!--<mt-navbar v-model="selected">-->
                <!--<mt-tab-item @click.native="transmit(sortList,sortData)" id="1">{{sortData}}</mt-tab-item>-->
                <!--<mt-tab-item @click.native="transmit(FilterList,filterData)" id="2">{{filterData}}</mt-tab-item>-->
                <!--<mt-tab-item @click.native="transmit(kmList,kmData)" id="3">{{kmData}}</mt-tab-item>-->
                <!--</mt-navbar>-->
                <img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_a">
                <img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_b">
                <img src="../../../assets/images/btmArrow.png" alt="" class="btmArrow_c">
                <select-list v-if="showSelList" @selType="selType" :selItem='selItem'
                :selectList='selectList'></select-list>
                </div>
            </div>
            <router-link to="/Index/UpKeep">
                <ul>
                    <li>
                        <div class="footer_footer" v-for="item in ShopStoreList">
                            <div class="footer_footer_nav">
                                <p>{{item.name}}</p><img src="../../../assets/images/rightArrow.png" alt=""
                                                         class="rightArrow">
                            </div>

                            <div class="footer_footer_section">
                                <img src="http://img4.imgtn.bdimg.com/it/u=2136180122,282910574&fm=27&gp=0.jpg" alt=""
                                     class="footer_footer_section_img">
                                <div class="footer_footer_section_right">
                                    <p>主修车型:{{item.carname}}</p>
                                    <div class="footer_fsection">
                                        <!--<div class="footer_footer_section_right_p"><p>订单</p>-->
                                        <!--<p>2589</p>-->
                                        <!--</div>-->
                                        <div class="footer_footer_section_right_pb"><p>已售</p>
                                            <p>{{item.sale}}</p></div>
                                    </div>
                                    <p>营业时间:{{item.storeTime}}</p>
                                    <p>{{item.province}}{{item.city}}{{item.dist}}{{item.address.slice(0,3)}}...</p>
                                    <img src="../../../assets/images/navigation-icon.png" alt="" class="navigation"
                                         @click="openMap(item.longitude,item.latitude,item.dist,item.addressExtends)">
                                    <p class="footer_km">距离 {{Math.round(item.distance)}}km</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </router-link>

        </div>
    </div>
</template>

<script>
    var jsonp = require('jsonp');       //地址跨域
    import {getShopRecommend, getShopStore, getShopBanner} from '../../../utils/api.js'
    import {SelectList} from 'mixins'
    import ProCityArea from 'components/ProCityArea.vue'

    export default {
        name: 'Shopping',
        mixins: [SelectList],
        components:{
            'pro-city-area': ProCityArea
        },
        data() {
            return {
                selected: '1',
                // selItem: '越秀区', //子组件默认值
                // selectList: [], //子组件列表
                // sortList: ['天河区', '海珠区', '白云区', '番禺区'],

                // FilterList: ['汽车美容', '常规保养'],
                // filterData: '服务类型',
                // kmData: '离我最近',
                popupVisible: false,
                showSelList: false,
                bannerList: [],
                ShopStoreList: [],
                RecommendList: [],


                longitude: '',
                latitude: '',
                StoreaList: [],
                addressValue: 0,
                addressName: '',
                checkedName: '',
                currentPicker: 1,
                addressname: {},
                allAddress: [],
                search: '',
                sorts: 1,
                city: '',
                sortsText: '默认排序',
                standard: '商品类型',
                // address: '',
                addressExtends:''
            }
        },
        created: function () {

        },
        mounted: function () {
            let _this = this;
            jsonp('http://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&get_poi=0&output=jsonp', null, function (err, data){
                let res = data.result
                let name = res.ad_info.city+" "+res.ad_info.district;
                _this.$set(_this.addressname,'name',name)
                _this.$set(_this.addressname,'longitude',res.location.lng)
                _this.$set(_this.addressname,'latitude',res.location.lat)
                _this.$set(_this.addressname,'code',res.ad_info.adcode)
                this._getShopStore()
            })
            this.$nextTick(function () {
                this._getShopBanner()
                this._getShopRecommend()

            })

            // this._getIndexBanner()
        },
        watch: {    //监听data变量
            addressname: function (newVal, oldVal) {
                this.longitude = newVal.longitude
                this.latitude = newVal.latitude
                this.search = newVal.code;//默认的城市code

                this._getShopStore()
            }
            },
            methods: {

                transmit(list, data) {
                    this.selectList = list
                    this.selItem = data
                    this.showSelList = true
                },
                selType(item) {
                    if (this.selected == '1') {
                        this.sortData = item
                    } else {
                        this.filterData = item
                    }
                    this.showSelList = false
                },

                _getShopBanner() {
                    getShopBanner().then(res => {
                        this.bannerList = res
                        // console.log(res);
                    })
                },
                _getShopRecommend() {
                    getShopRecommend().then(res => {
                        this.RecommendList = res
                        // console.log(res);
                    })
                },

                _getShopStore() {
                    getShopStore({
                        longitude: this.longitude,
                        latitude: this.latitude,
                        city: this.city,
                        search: this.search,
                        address: this.addressExtends
                    }).then(res => {
                        this.ShopStoreList = res.store
                        console.log(res.store);
                    })
                },


                openMap: function (long, lat, dist, address) {
                    window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${lat},${long};title:${dist};addr:${address};&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&referer=myapp `

                },
                changeType:function(value){
                    this.currentPicker = value;
                    this.popupVisible = true;
                },
                gainAllAddress:function(value){
                    this.$set(this.addressname,'name',value.area);
                    this.search = value.search;
                    this._getShopStore()
                },
                gainSort: function(value){
                    this.sorts = value.value;
                    this.sortsText = value.name;
                    this._getShopStore()
                },
                gainProject: function(value){//洗车项目
                    console.log(value)
                    this.project_id = value.value;
                    this.standard = value.name;
                    this._getShopStore()
                },
            }

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
        left: 2.3rem;
    }

    .btmArrow_b {
        left: 4.4rem;
    }

    .btmArrow_c {
        right: .45rem;
        position: absolute;
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
        /*margin-left: 0.1rem;*/
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

    .mint-navbar {
        /*background-color: #ff0;*/
        border-bottom: 1px solid #eaeaea;
        width: 100%;
    }

    .mint-tab-item {
        /*margin: 0 .92rem;*/
        height: .68rem;
        padding: 12px 0;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border: none;
        color: #fa9e15;
    }
</style>