<!--
<template>
  <div class="upkeep mask">
    <mt-navbar v-model="selected">
      <mt-tab-item @click.native="transmit(sortList,sortData)" id="1">{{sortData}}</mt-tab-item>
      <mt-tab-item @click.native="transmit(FilterList,filterData)" id="2">{{filterData}}</mt-tab-item>
    </mt-navbar>
    <select-list v-if="showSelList" @selType="selType" :selItem='selItem' :selectList='selectList'></select-list>
    <ul class="goods-list">
      <li class="clearfix">
        <img src="../../../assets/images/保养详情-主图.png" alt="" class="goods-img fl">
        <div class="goods-info fl">
          <p class="goods-name">德国顶级宝马专用波箱油（12L）</p>
          <p class="goods-price">￥2518.00</p>
          <p class="goods-pay">200人购买</p>
          <button class="pay-btn">立即购买</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {SelectList} from 'mixins'
  // import {	 } from '../utils/api.js'
  export default {
    mixins:[SelectList],
    name: '',
    data() {
      return {
        selected: '1',
        selItem: '推荐排序', //子组件默认值
        selectList: [], //子组件列表
        sortList: ['推荐排序', '附近优先', '累计安装', '评分最高'], 
        sortData: '推荐排序',
        FilterList: ['汽车美容', '常规保养'],
        filterData: '筛选',
        showSelList: false,
      }
    },
    created() {

    },
    methods: {
      transmit(list,data){
        this.selectList = list
        this.selItem = data
        this.showSelList = true
      },
      selType(item){
        if (this.selected == '1') {
          this.sortData = item
        } else {
          this.filterData = item          
        }
        this.showSelList = false
      }
    },
  }


</script>

<style lang="scss" scoped>
  .mint-navbar {
    background-color: #fff;
    border-bottom: 2px solid #eaeaea;
  }

  .mint-tab-item {
    margin: 0 .92rem;
    height: .72rem;
    padding: 12px 0;
  }

  .mint-navbar .mint-tab-item.is-selected {
    border: none;
    color: #fa9e15;
  } 
  .goods-list {
    margin-top: 0.2rem;
    background-color: #fff;
    li {
      position: relative;
      height: 2.04rem;
      border-bottom: 1px solid #eaeaea;
      .goods-img {
        width: 1.44rem;
        height: 1.44rem;
        margin: .18rem .18rem 0 .2rem;
      }
      .goods-name {
        padding-top: 0.18rem;
        font-size: 0.28rem;
        color: #262626;
      }
      .goods-price {
        padding-top: 0.18rem;
        font-size: 0.28rem;
        color: #e9252e;
      }
      .goods-pay {
        padding-top: 0.18rem;
      }
      .pay-btn {
        position: absolute;
        top: 1.16rem;
        right: 0.48rem;
        width: 1.48rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        color: #ffffff;
        background-color: #ff8003;
        border-radius: 0.04rem;
      }
    }
  }

</style>
-->
<template>
    <div class="Shopping-wrap mask">
        <router-view></router-view>
    </div>
</template>

<script>
    var jsonp = require('jsonp');       //地址跨域
    import {getShopRecommend, getShopStore, getShopBanner,getShopList} from '../../../utils/api.js'
    import {SelectList} from 'mixins'
    import baseFooter from '@/components/baseFooter'
    import ProCityArea from 'components/ProCityArea.vue'
    export default {
        name: 'Shopping',
        mixins: [SelectList],
        data() {
            return {
                selected: '1',
                selItem: '越秀区', //子组件默认值
                selectList: [], //子组件列表
                sortList: ['天河区', '海珠区', '白云区', '番禺区'],
                sortData: '推荐排序',
                FilterList: ['汽车美容', '常规保养'],
                filterData: '服务类型',
                kmData: '离我最近',
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
                popupVisible:false,
                addressname: {},
                allAddress: [],
                search: '',
                sorts:1,
                sortsText: '默认排序',
                city: '',
                // address: '',
                addressExtends:'',
                typename: '商品类型',
                project_id: '',
                shopNum: 0
            }
        },
        created: function () {
            let _this = this;
            jsonp('http://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&get_poi=0&output=jsonp', null, function (err, data) {
                let res = data.result
                let addressName = res.ad_info.city + " " + res.ad_info.district;
                _this.$set(_this.addressname, 'name', addressName)
                _this.$set(_this.addressname, 'longitude', res.location.lng)
                _this.$set(_this.addressname, 'latitude', res.location.lat)
                _this.$set(_this.addressname, 'code', res.ad_info.adcode)
                console.log(res)
            })
        },
        mounted: function () {
            this.$nextTick(function () {
                // this._getShopBanner()
                // this._getShopRecommend()
                // this._getShopStore()
            })

            // this._getIndexBanner()
        },
        components: {
          'base-footer': baseFooter,
          'pro-city-area': ProCityArea
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
                    project_id: this.project_id,
                    search: this.search,
                    sorts: this.sorts
                }).then(res => {
                    this.ShopStoreList = res.store
                    this.shopNum = res.sum
                    console.log(res.store);
                })
                // getShopList().then(res=>{

                // })
            },


            openMap: function (long, lat, dist, address) {
                window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${lat},${long};title:${dist};addr:${address};&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&referer=myapp `

            },
            changeType:function(value){
              this.currentPicker = value;
              this.popupVisible = true;
              console.log(value)
            },
            gainAllAddress: function (value) { //获取确定地址
                this.$set(this.addressname, 'name', value.area);
                this.search = value.search;
                // this.address = value.address
                console.log(this.search)
                this._getShopStore()
            },
            gainSort: function(value){
              this.sorts = value.value;
              this.sortsText = value.name;
              this._getShopStore()
            },
            gainShopProject: function(value){
              this.typename = value.name;
              this.project_id = value.value;
              this._getShopStore()
            }
            // _getIndexBanner() {
            //     getIndexBanner().then(res => {
            //         this.bannerList = res
            //         console.log(res);
            //     })
            // },
        }

    }
</script>

<style lang="scss" scoped>
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
        right: .45rem;
        position: absolute;
    }

    .section_top {
        width: 100%;
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
    .list{
      padding-bottom: 2rem;
    }

    nav {
        display: flex;
        align-items: center;
        width: 7.5rem;
        height: 0.72rem;
        background-color: #ffffff;
        font-size: 0.28rem;    
        z-index: 10000;
        img {
            width: 0.22rem;
            height: 0.12rem;
            padding-left: .1rem;
        }
        .addres,.typename {
            display: flex;
            align-items: center;
            padding-left: .2rem;
        }
        .typename{
          padding-left: 1rem;
        }
        .city {
            padding: 0 .1rem 0 .38rem;
        }
        .sort {
            position: absolute;
            right: .3rem;
        }
    }
</style>
