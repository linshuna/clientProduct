<template>
    <div class="nearby-stores">

<<<<<<< HEAD
        <transition name="slideR">
          <router-view></router-view>
        </transition>
      
    </div>
</template>
=======
        <ul class="store-list">
            <li v-for="item in StoreaList">

                <div class="store-hd">
                    <p>{{item.name}}</p>
                    <img src="../assets/images/rightArrow.png" class="r-arrow" alt="">
                </div>
                <div class="store-bd clearfix">
                    <img :src="item.pic" alt=""
                         class="store-img fl">
                    <div class="store-info-box fl">
                        <p class="store-address">{{item.province}}{{item.city}}{{item.dist}}{{item.address.slice(0,5)}}...</p>
                        <div class="star-box">
                            <score-lv :stars='item.evaluateShow-0'></score-lv>

                        </div>
                        <div class="item-box">
                            <div v-if="StoreaList.state == 1" class="appointment">接受预约</div>
                            <div v-else-if="StoreaList.state == 2" class="appointment app-hot">预约火爆</div>
                            <div v-else class="appointment app-full">预约已满</div>
                            <div class="item-sum">维修丶保养</div>
                        </div>
                        <p class="store-time">{{item.storeTime}}</p>
                        <div class="store-dist">大约{{Math.round(item.distance)}}m</div>
                        <img src="../assets/images/洗车详情-定位icon.png" alt="" class="dist-icon">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    var jsonp = require('jsonp');
    import {score} from "mixins";
    import {getStoreList,getCityList,getAddress} from '../utils/api.js'
    import ProCityArea from 'components/ProCityArea.vue'
    // import { getIndexData } from '../utils/api.js'
    export default {

        mixins: [score],
        name: "NearbyStores",
        components:{
          'pro-city-area': ProCityArea
        },
        data() {
            return {
                longitude: '' ,
                latitude:'',
                StoreaList: [],
                pageData: {},
                addressValue:0,
                // addressName:'',
                checkedName:'',
                currentPicker:1,
                popupVisible: false,
                addressname:{},
                allAddress:[],
                search:'',
                sorts:1,

            };
        },
        created() {
          
        },
        mounted() {
          //获取当前位置
          let _this = this;
          jsonp('http://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&get_poi=0&output=jsonp', null, function (err, data){
            let res = data.result
            let addressName = res.ad_info.city+" "+res.ad_info.district;
            _this.$set(_this.addressname,'name',addressName)        //获取地理位置
            _this.$set(_this.addressname,'longitude',res.location.lng)
            _this.$set(_this.addressname,'latitude',res.location.lat)
            _this.$set(_this.addressname,'code',res.ad_info.adcode)
            console.log(res)
          })
        },
        watch:{     //监听data变量
          addressname: function(newVal,oldVal){
            this.longitude = newVal.longitude
            this.latitude = newVal.latitude
            this.search = newVal.code;//默认的城市code
            this._getNearbyStorea()
          }
        },
        methods: {
            _getNearbyStorea() {        //获取接口经纬度
                getStoreList({
                    longitude: this.longitude,
                    latitude: this.latitude,
                    search:this.search,
                    sorts:this.sorts
                }).then(res => {
                    this.StoreaList = res.store
                })
            },
            changeType:function(value){
              this.currentPicker = value;
              this.popupVisible = true;
            },
            onValuesChange: function(){
              let obj = document.getElementsByClassName('picker-slot-wrapper')[0];
            },
            gainAllAddress:function(value){     //点击获取address位置
              this.$set(this.addressname,'name',value.area);
              this.search = value.search;
              this._getNearbyStorea()
            },
            gainSort: function(value){
              this.sorts = value;
              this._getNearbyStorea()
            }
        }
    };

</script>
<style lang="scss">
  .v-modal{
    top: .7rem!important;
  }
  .picker-center-highlight{
    // top: 10%!important;
  }
  .picker-items .picker-slot .picker-slot-wrapper{
    // transform: translate(0px, 0px) translateZ(0px);
  }
  .picker-slot.picker-slot-divider{
    lign-items: inherit!important;
    padding-top: 7px;
  }
  .picker-toolbar{
    border-top: 1px solid #f4f4f4;
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding: 0 10px;
    box-sizing: border-box;
    color: #26a2ff;
    font-size: .32rem;
  }
</style>
<style lang="scss" scoped>
    .nearby-stores {
        min-height: 100%;
        background-color: #f5f5f5;
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
    
    .mint-popup{
      width: 100%;
      top: .73rem;
      bottom: auto;
    }
    .store-list {
        min-height: 100%;
        padding-bottom: 2rem;
        padding-top: .73rem;
        li {
            margin-top: .2rem;
            height: 3rem;
            background-color: #fff;
            padding-bottom: 2rem;
            .store-hd {
                position: relative;
                display: flex;
                align-items: center;
                height: .76rem;
                padding-left: .3rem;
                border-bottom: solid 1px #eaeaea;
            }
            .r-arrow {
                position: absolute;
                right: .42rem;
                width: 0.1rem;
                height: 0.18rem;
            }
            .store-img {
                width: 1.5rem;
                height: 1.5rem;
                margin: .2rem .22rem 0 .3rem;
                border-radius: 0.1rem;
            }
            .store-info-box {
                position: relative;
                .store-address {
                    padding-top: .2rem;
                    font-size: 0.24rem;
                }
                .item-box {
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
                    .item-sum {
                        padding-left: .2rem;
                        color: #999;
                    }
                }
                .store-time {
                    color: #999;
                }
                .store-dist {
                    position: absolute;
                    top: 1.18rem;
                    right: -2.2rem;
                    width: 1.48rem;
                    height: 0.48rem;
                    line-height: .48rem;
                    border-radius: 0.04rem;
                    border: solid 1px #ff8003;
                    font-size: 0.24rem;
                    color: #ff8004;
                    text-align: center;
                }
                .dist-icon {
                    position: absolute;
                    right: -2.2rem;
                    top: .3rem;
                    width: 0.32rem;
                    height: 0.36rem;
                }
            }
        }
    }
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6

