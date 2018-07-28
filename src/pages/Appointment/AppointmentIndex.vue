<template>
  <div class="appointment-wrap">
    <!--<template v-if="!isChangeRouter"></template> <template v-else></template>-->
      <nav>
        <div class="addres" @click="changeType(1)">
          <p class="city">{{addressname.name}}</p>
          <img src="../../assets/images/btmArrow.png" alt="">
        </div>
        <p class="sort" @click="changeType(2)">{{sortsText}}
          <img src="../../assets/images/btmArrow.png" alt="">
        </p>
      </nav>
      <pro-city-area v-bind:current.sync="currentPicker" v-bind:popupVisible.sync="popupVisible" @gainAllAddress="gainAllAddress" @gainSort="gainSort"></pro-city-area>
      <template v-if="StoreaList&&StoreaList.length>0">
        <ul class="store-list">
          <li  v-for="item in StoreaList" @click.stop="lookStoreDetail(item.id)">
            <div class="store-hd">
              <p>{{item.name}}</p>
              <img src="../../assets/images/rightArrow.png" class="r-arrow" alt="">
            </div>
            <div class="store-bd clearfix">
              <img :src="item.pic" alt=""
                  class="store-img fl">
              <div class="store-info-box fl">
                

                <p class="appointment-sum">预约数：{{item.appointment}}次
                </p>
                <div class="item-box">
                  <div :class="{'app-hot':item.state==2,'app-accept':item.state==1,'app-full':item.state==0||item.state==3}">{{item.state | serverTypeFilter}}</div>

                  <div class="item-sum">{{item.type_name}}</div>
                </div>
                <p class="store-time">预约时间：{{item.storeTime}}</p>
                <p class="store-address">地址：{{item.city}}{{item.dist}}{{item.address}}</p>
                
              </div>
              <div class="setRight">
                <button class="appointment-btn" @click.stop="order(item.id)">立即预约</button>
                <div class="store-dist">大约{{item.distance | distanceFilter}}</div>
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
    // import { getIndexData } from '../utils/api.js'
    import {score} from "mixins";
    var jsonp = require('jsonp');
    import {getStoreList,getCityList,getAddress} from '@/utils/api.js'
    import ProCityArea from '@/components/ProCityArea.vue'

    export default {
        name: "Appointment",
        mixins: [score],
        components:{
            'pro-city-area': ProCityArea
        },

        data() {
            return {
                AppointShopList:[],
                pageData: {},
                clientvid: '',
                longitude: '' ,
                latitude:'',
                StoreaList: [],
                addressValue:0,
                addressName:'',
                checkedName:'',
                currentPicker:1,
                popupVisible: false,
                addressname:{},
                allAddress:[],
                search:'',
                sorts:1,
                isChangeRouter: false,
                sortsText: '默认排序'
            };
        },
        mounted() {
          let getStorage = this.$store.getters.getStorage;
          this.clientvid = getStorage?getStorage.vid:''
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
            order: function(id){//预约
              if(!this.clientvid){//没有登录
                this.$store.commit('showToast','您未登录，即将为你跳转。。。');
                this.$store.commit('delay',{url:'/Login',$router: this.$router,time:2500});
                return false;
              }
              this.isChangeRouter = true
              this.$router.push({path: '/Appointment/NowAppoint/'+id})
            },
            lookStoreDetail: function(id){
              this.$router.push({path: '/Appointment/storeDetail/'+id})
            }
        }
    };

</script>
<style lang="scss" scoped>
  .appointment-wrap {
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
    }
    .city {
      padding: 0 .1rem 0 .38rem;
    }
    .sort {
      position: absolute;
      right: .3rem;
    }
  }

  .store-list {
    min-height: 100%;
    padding-bottom: 2rem;
    padding-top: .73rem;
    li {
      margin-top: .2rem;
      height: 3rem;
      background-color: #fff;
      /*padding-bottom: 2rem;*/
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
        padding-top: .2rem;
        width: 50%;
        p{
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .store-address {
          font-size: 0.24rem;
          color: #999;
        }
        .appointment-sum {
          color: #999;
        }
        .item-box {
          padding-top: .1rem;
          padding-bottom: .08rem;
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
        
        .store-dist {
          position: absolute;
          top: 1.18rem;
          right: -2.5rem;
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
  .appointment-btn {
    width: 1.48rem;
    height: 0.48rem;
    line-height: .48rem;
    color: #fff;
    background-color: #ff8003;
    border-radius: 0.04rem;
  }
}
</style>
