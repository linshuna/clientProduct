<template>
    <div class="insurance-wrap mask">
        <nav>
            <div class="addres" @click="changeType(1)">
                <p>{{addressname.name}}</p>
                <img src="../../../assets/images/btmArrow.png" alt="">
            </div>
            <!--<p class="sort" @click="changeType(2)">默认排序-->
            <!--<img src="../../../assets/images/btmArrow.png" alt="">-->
            <!--</p>-->
        </nav>
        <pro-city-area v-bind:current.sync="currentPicker" v-bind:popupVisible.sync="popupVisible"
                       @gainAllAddress="gainAllAddress"></pro-city-area>
<<<<<<< HEAD
        <template v-if="StoreaList&&StoreaList.length>0">              
          <ul class="insurance">
              <li v-for="item in StoreaList">

                  <div class="nav">
                      <div class="nav_left">
                          <div class="nav_left_section_img">
                              <div class="nav_left_section">
                                  <img :src="item.pic" alt="">
                                  <p>{{item.shoptime}}</p>
                              </div>
                          </div>
                      </div>
                      <div class="nav_right">
                          <div class="nav_right_section">
                              <div class="nav_right_top">
                                  <p>{{item.name}}</p>
                                  <p>{{item.province}}{{item.city}}{{item.dist}}{{item.address}}</p>
                              </div>
                              <div class="nav_right_footer">
                                  <p @click="openMap(item.longitude,item.latitude,item.name,item.address)">一键导航</p>
                                  <p><a :href="'tel:'+item.phone" class="tel">拨打电话</a></p>
                              </div>
                          </div>

                      </div>
                  </div>
              </li>
          </ul>
        </template> 
        <template v-else>
          <p style="text-align: center;margin-top: 25%;font-size:.28rem;">暂时搜索不到救援信息，更换筛选条件</p>
      </template> 
=======
        <ul class="insurance">
            <li v-for="item in StoreaList">

                <div class="nav">
                    <div class="nav_left">
                        <div class="nav_left_section_img">
                            <div class="nav_left_section">
                                <img :src="item.pic" alt="">
                                <p>{{item.shoptime}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="nav_right">
                        <div class="nav_right_section">
                            <div class="nav_right_top">
                                <p>{{item.name}}</p>
                                <p>{{item.province}}{{item.city}}{{item.dist}}{{item.address.slice(0,5)}}...</p>
                            </div>
                            <div class="nav_right_footer">
                                <p @click="openMap(item.longitude,item.latitude,item.dist,item.address)">一键导航</p>
                                <p><a :href="'tel:'+item.phone"></a>拨打电话</p>
                            </div>
                        </div>

                    </div>
                </div>
            </li>
        </ul>
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
    </div>
</template>

<script>
    var jsonp = require('jsonp');       //地址跨域
    // import {MessageBox} from 'mint-ui';
<<<<<<< HEAD
=======
    import {score} from "mixins";
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
    import ProCityArea from 'components/ProCityArea.vue'
    import {getAddress, getClientRescue} from '../../../utils/api.js'

    export default {
<<<<<<< HEAD
=======
        mixins: [score],
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
        components: {
            'pro-city-area': ProCityArea
        },
        name: "Rescue",
        data() {
            return {
                longitude: '',
                latitude: '',
                StoreaList: [],
                addressValue: 0,
                addressName: '',
                checkedName: '',
                currentPicker: 1,
                popupVisible: false,
                addressname: {},
                allAddress: [],
                search: '',
                sorts: 1,
                city:'',
                address:'',
                addressExtends:''
            }
        },

        methods: {
            openMap: function (long, lat, dist, address) {
<<<<<<< HEAD
                this.map(long,lat,dist,address)

            },

            changeType: function (value) {
                this.currentPicker = value;
                this.popupVisible = true;
            },
            _getClientRescue() {
                getClientRescue({
                    longitude: this.longitude,
                    latitude: this.latitude,
                    city: this.city,
                    search:this.search,
                    addressExtends:this.addressExtends
                }).then(res => {
                    this.StoreaList = res
                    console.log(res);
                })
            },
            onValuesChange: function () {     //监听滚动事件
                let obj = document.getElementsByClassName('picker-slot-wrapper')[0];
            },
            gainAllAddress: function (value) { //获取确定地址
                this.$set(this.addressname, 'name', value.area);
                this.search = value.search;
                // this.address = value.address
                this._getClientRescue()
            },

        },
        created() {
            
        },
        mounted() {
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
        watch: {
            addressname: function (newVal, oldVal) {
                this.longitude = newVal.longitude
                this.latitude = newVal.latitude
                // this.search = newVal.code;//默认的城市code
=======
                window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${lat},${long};title:${dist};addr:${address};&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&referer=myapp `

            },

            changeType: function (value) {
                this.currentPicker = value;
                this.popupVisible = true;
            },
            _getClientRescue() {
                getClientRescue({
                    longitude: this.longitude,
                    latitude: this.latitude,
                    city: this.city,
                    search:this.search,
                    address:this.address
                }).then(res => {
                    this.StoreaList = res
                    console.log(res);
                })
            },
            onValuesChange: function () {     //监听滚动事件
                let obj = document.getElementsByClassName('picker-slot-wrapper')[0];
            },
            gainAllAddress: function (value) { //获取确定地址
                this.$set(this.addressname, 'name', value.area);
                this.search = value.search;
                // this.address = value.address
                this._getClientRescue()
            },
            // gainSort: function(value){//默认排序
            //     this.sorts = value;
            //     this._getNearbyStorea()
            // }

        },
        created() {
            this._getClientRescue()
        },
        mounted() {
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
        watch: {
            addressname: function (newVal, oldVal) {
                this.longitude = newVal.longitude
                this.latitude = newVal.latitude
                this.search = newVal.code;//默认的城市code

>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
                this._getClientRescue()
            }
        },
    }

</script>
<style lang="scss" scoped>
    .insurance {
        margin-top: 1rem;
<<<<<<< HEAD
        min-height: 100%;
        background-color: #efefef;
        li{
          margin-bottom: .2rem;
        }
=======
        min-height: 15rem;
        background-color: #efefef;
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
    }

    nav {
        position: fixed;
        top: 0;
        left: 0;
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
        .addres {
            display: flex;
            align-items: center;
            padding-left: .2rem;
        }
        .city {
            padding: 0 .1rem 0 .38rem;
        }
        .sort {
            position: absolute;
            right: .3rem;
        }
    }

    .nav {
        display: flex;

    }

    .nav_left {
        width: 3.32rem;
        height: 2.0rem;
        background-color: #fff;
        display: flex;
        align-items: center;
    }

    .nav_left_section {
        width: 2.64rem;
        height: 1.46rem;
        position: relative;
        display: flex;
    }

    .nav_left_section img {
        width: 100%;
        height: 100%;
    }

    .nav_left_section p {
        width: 2.64rem;
        height: 0.38rem;
        background-color: #070707;
        opacity: 0.5;
        position: absolute;
        bottom: 0;
        text-align: center;
        line-height: 0.38rem;
        color: #fff;
    }

    .nav_left_section_img {
        margin-left: 0.34rem;
    }

    .nav_right {
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #fff;
    }

    .nav_right_section {
        height: 1.46rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 0.16rem;
    }

    .nav_right_footer {
        display: flex;
<<<<<<< HEAD
        .tel{
          display: inline-block;
          width: 100%;
          height: 100%;
        }
=======
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
    }

    .nav_right_top p:first-child {
        color: #626262;
        font-size: 0.32rem;
    }

    .nav_right_top p:last-child {
<<<<<<< HEAD
        font-size: 0.26rem;
        color: #9f9f9f;
        display:-webkit-box;
        -webkit-box-orient:vertical; 
        -webkit-line-clamp:2;
        overflow: hidden;
=======
        font-size: 0.28rem;
        color: #9f9f9f;
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
    }

    .nav_right_footer p {
        width: 1.82rem;
        height: 0.48rem;
        background-color: #fff;
        border-radius: 0.06rem;
        color: #ff8003;
        text-align: center;
        line-height: 0.48rem;
        border: 1px solid #ff8003;
    }

    .nav_right_footer p:first-child {
        margin-right: 0.16rem;
    }

</style>
