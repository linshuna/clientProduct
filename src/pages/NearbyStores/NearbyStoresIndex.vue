<template>
    <div class="nearby-stores">
      <nav>
        <div class="addres" @click="changeType(1)">
            <p>{{addressname.name}}</p>
            <img src="../../assets/images/btmArrow.png" alt="">
        </div>
        <p class="sort" @click="changeType(2)">{{sortsText}}
            <img src="../../assets/images/btmArrow.png" alt="">
        </p>
      </nav>
      <pro-city-area v-bind:current.sync="currentPicker" v-bind:popupVisible.sync="popupVisible" @gainAllAddress="gainAllAddress" @gainSort="gainSort"></pro-city-area>
      <template v-if="StoreaList&&StoreaList.length>0">
        <ul class="store-list">
            <li v-for="item in StoreaList" @click.stop="lookStoreDetail(item.id)">

                <div class="store-hd" @click="lookStoreDetail(item.id)">
                    <p>{{item.name}}</p>
                    <img src="../../assets/images/rightArrow.png" class="r-arrow" alt="">
                </div>
                <div class="store-bd clearfix">
                    <img :src="item.pic" alt=""
                          class="store-img fl">
                    <div class="store-info-box fl">
                      <div class="star-box">
                        <span class="assess">评价：</span>
                        <score-lv :stars='item.evaluateShow-0'></score-lv>
                      </div>
                      <div class="item-box">
                          <div :class="{'app-hot':item.state==2,'app-accept':item.state==1,'app-full':item.state==0||item.state==3}">{{item.state | serverTypeFilter}}</div>
                          <div class="item-sum">{{item.type_name}}</div>
                      </div>
                      <p class="store-time">服务时间：{{item.storeTime}}</p>
                      <p class="store-address">地址：{{item.city}}{{item.dist}}{{item.address}}</p>
                    </div>
                    <div class="setRight">
                      <div>
                        <img :src="mapIcon" alt="" class="dist-icon" @click.stop="openMap(item.longitude,item.latitude,item.name,item.address)">
                      </div>
                      <div class="store-dist">
                        大约
                        {{item.distance | distanceFilter}}
                      </div>
                    </div>

                </div>
            </li>
        </ul>
      </template>
      <template v-else>
        <p style="text-align: center;margin-top: 10%;font-size:.28rem;">暂时搜索不到店铺，更换筛选条件</p>
      </template> 

    </div>
</template>
<script>
    var jsonp = require('jsonp');
    import {score} from "mixins";
    import {getStoreList,getCityList,getAddress} from '@/utils/api.js'
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
                addressName:'',
                checkedName:'',
                currentPicker:1,
                popupVisible: false,
                addressname:{},
                allAddress:[],
                search:'',
                sorts:1,
                sortsText: '默认排序',
                isOpen: false,
                isChangeRouter: false,
                mapIcon: require('../../assets/images/洗车详情-定位icon.png')
            };
        },
        created() {
          
        },
        mounted() {
          //获取当前位置
          let _this = this;
          //https://apis.map.qq.com/ws/location/v1/ip?ip=&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&output=jsonp
          jsonp('https://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&output=jsonp', null, function (err, data){
            let res = data.result
            let addressName = res.ad_info.city+" "+res.ad_info.district;
            _this.$set(_this.addressname,'name',addressName)
            _this.$set(_this.addressname,'longitude',res.location.lng)
            _this.$set(_this.addressname,'latitude',res.location.lat)
            _this.$set(_this.addressname,'code',res.ad_info.adcode)
          })

          window.addEventListener("popstate", function (e) { // 添加返回事件监听
            _this.isChangeRouter = false;
          }, false)

        },
        watch:{
          addressname: function(newVal,oldVal){
            this.longitude = newVal.longitude
            this.latitude = newVal.latitude
            // this.search = newVal.code;//默认的城市code
            this._getNearbyStorea()
          }
        },
        methods: {
            _getNearbyStorea() {
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
            gainAllAddress:function(value){
              this.$set(this.addressname,'name',value.area);
              this.search = value.search;
              this._getNearbyStorea()
            },
            gainSort: function(value){
              this.sorts = value.value;
              this.sortsText = value.name;
              this._getNearbyStorea()
            },
            openMap:function (long,lat,dist,address) { 
              window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${lat},${long};title:${dist};addr:${address};&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&referer=myapp `        

            },
            lookStoreDetail: function(id){
              this.isChangeRouter = true;
              this.$router.push({path: '/NearbyStores/storeDetail/'+id})
            }
        }
    };

</script>
<style lang="scss">
#map{
  width: 100%;
  height: 100%;
  position: fixed!important;
  top: 0;
  bottom: 0;
  z-index:99999;
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
                width: 50%;
                p{
                  width: 100%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .star-box{
                  margin-top: .2rem;
                }
                .assess{
                  display: inline-block;
                  vertical-align: middle;
                }
                .store-address {
                    font-size: 0.24rem;
                    color: #999;
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
                    .item-sum {
                        padding-left: .2rem;
                        color: #999;
                        width: 50%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                .store-time {
                    color: #999;
                }
                
            }
        }
    }
.store-bd{
  position: relative;
}
.setRight{
  position: absolute;
  top: .3rem;
  right: .2rem;
  div:first-child{
    text-align: right;
  }
  .store-dist {
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
    margin-top: .3rem;
  }
  .dist-icon {
    display: inline-block;
      width: 0.32rem;
      height: 0.36rem;
  }
}
</style>
