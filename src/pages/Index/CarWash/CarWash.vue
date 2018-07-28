<template>
  <div class="carappoint-wrap mask">
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
    <template v-if="CarwashList&&CarwashList.length>0">
      <ul>
          <li v-for="item in CarwashList" @click.stop="lookCarwashDetail(item.id,item.shop_id)">
            <div class="nav">
              <div class="nav_left">
                <img :src="item.pic" alt="服务图片">
              </div>
              <div class="nav_center">
                <p>{{item.shop_name}}</p>
                <div class="nav_center_center">
                  <div class="nav_center_left">
                    <p>评价</p>
                    <p>{{item.evaluateNum}}</p>
                  </div>
                  <div class="nav_center_right">
                    <p>订单</p>
                    <p>{{item.sale}}</p>
                  </div>
                </div>
                <p class="section_top_left_ptop">{{item.province}}{{item.city}}{{item.dist}}{{item.address}}</p>
              </div>
              <div class="nav_right">
                <p>¥{{item.price}}</p>
                <p>{{item.distance | distanceFilter}}</p>
              </div>
            </div>
          </li>
      </ul>
    </template>
    <template v-else>
      <p style="text-align: center;margin-top: 10%;font-size:.28rem;">暂时搜索不到店铺，更换筛选条件</p>
    </template>
    
  <pro-city-area v-bind:current.sync="currentPicker" v-bind:popupVisible.sync="popupVisible" @gainAllAddress="gainAllAddress" @gainSort="gainSort" @gainProject="gainProject"></pro-city-area>
  </div>

</template>

<script>
  var jsonp = require('jsonp');
  import {getCarwashIndex}from'../../../utils/api.js'
  import ProCityArea from 'components/ProCityArea.vue'
  export default {
    name: "CarWash",
    data() {
      return {
        selected: '1',
        CarwashList:'',
        currentPicker:1,
        popupVisible: false,
        addressname:{},
        search:'',
        sorts:1,
        sortsText: '默认排序',
        standard: '标准洗车',
        project_id: '1',
        longitude: '',
        latitude: '',
        
      }
    },
    components:{
      'pro-city-area': ProCityArea
    },
    watch:{
      addressname: function(newVal,oldVal){
        this.longitude = newVal.longitude
        this.latitude = newVal.latitude
        // this.search = newVal.code;//默认的城市code
        this._getCarwashIndex()
      }
    },
    mounted(){
      //获取当前位置
      let _this = this;
      jsonp('http://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&get_poi=0&output=jsonp', null, function (err, data){
        let res = data.result
        let name = res.ad_info.city+" "+res.ad_info.district;
        _this.$set(_this.addressname,'name',name)
        _this.$set(_this.addressname,'longitude',res.location.lng)
        _this.$set(_this.addressname,'latitude',res.location.lat)
        _this.$set(_this.addressname,'code',res.ad_info.adcode)
      })
      
    },
    methods:{
      _getCarwashIndex(){
          getCarwashIndex({
                longitude:this.longitude,
                latitude:this.latitude,
                project_id:this.project_id,
                search:this.search,
                sorts:this.sorts
            }).then(res => {
              this.CarwashList = res.store;
          })
      },
      changeType:function(value){
        this.currentPicker = value;
        this.popupVisible = true;
      },
      gainAllAddress:function(value){
        this.$set(this.addressname,'name',value.area);
        this.search = value.search;
        this._getCarwashIndex()
      },
      gainSort: function(value){
        this.sorts = value.value;
        this.sortsText = value.name;
        this._getCarwashIndex()
      },
      gainProject: function(value){//洗车项目
        console.log(value)
        this.project_id = value.value;
        this.standard = value.name;
        this._getCarwashIndex()
      },
      lookCarwashDetail: function(id,shop_id){
        let gainData = {
          id: id,
          shop_id: shop_id
        }
        this.$router.push({path:'/Index/CarWash/CarWashDetails/'+JSON.stringify(gainData)})
      }
    },
    
  }

</script>

<style lang='scss' scoped>
  .mint-navbar {
    background-color: #fff;
    z-index: 99999;
    position: relative;
  }

  .mint-tab-item {
    height: .7rem;
    line-height: .7rem;
    padding: 0!important;
  }

  .mint-navbar .mint-tab-item.is-selected {
    border: none;
    color: #fa9e15;
  }
  .nav {
    height: 1.88rem;
    background-color: #fff;
    display: flex;
    position: relative;
    padding-right: 0.18rem;
    border-top: 1px solid #ececec;
  }

  .nav_left {
    width: 1.28rem;
    height: 1.28rem;
    background-color: #d7d7d7;
    margin: 0.3rem 0.2rem 0 0.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    margin-top: 0.2rem;
  }
  .nav_left p {
    line-height: 0.3rem;
  }

  .nav_center {
    width: 50%;
    margin-top: 0.3rem;
    height: 1.28rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .nav_center p:last-child {
    color: #707070;
    font-size: 0.22rem;
  }

  .nav_center_left {
    display: flex;
    padding-right: .1rem;
    line-height: 0.3rem;
  }

  .nav_center_left p:first-child,
  .nav_center_right p:first-child {
    color: #707070;
    font-size: 0.22rem;
  }

  .nav_center_left p:last-child,
  .nav_center_right p:last-child {
    color: #ff8004;
    font-size: 0.22rem;
  }

  .nav_center_right {
    display: flex;
    line-height: 0.3rem;
  }

  .nav_center_center {
    display: flex;
  }

  .nav_right {
    padding-top: 0.3rem;
    height: 1.88rem;
    width: 0.9rem;
    position: absolute;
    right: 0.8rem;
  }

  .nav_right p:first-child {
    color: #ff8004;
    font-size: 0.32rem;
    text-align: center;
  }

  .nav_right p:last-child {
    color: #b8b8b8;
    position: absolute;
    bottom: 0.36rem;
    font-size: 0.22rem;
  }

</style>
