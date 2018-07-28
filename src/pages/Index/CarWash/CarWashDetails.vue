<template>
  <div class="carwash-wrap mask">
    <div class="wallet">
      <div class="nav">
        <div class="swiper-wrapper" v-if="bannerList">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
              <img class="swiper-img" :src="item" alt="门店图片">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="nav_center">
          <p>地址：{{carwashMsg.shop_name}}</p>
          <div class="star-box">
            <span class="assess">评价：</span>
            <score-lv :stars='carwashMsg.evaluateShow-0'></score-lv>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_top">
          <div class="section_top_left">
            <img src="../../../assets/images/洗车详情-定位icon.png" class="section_top_img">
            <p class="section_top_left_ptop">{{carwashMsg.city}}{{carwashMsg.dist}}{{carwashMsg.address}}</p>
          </div>
          <div class="section_top_right" @click.stop="openMap(carwashMsg.longitude,carwashMsg.latitude,carwashMsg.shop_name,carwashMsg.address)">
            <div class="section_top_right_img">
              <div class="line"></div>
              <img src="../../../assets/images/洗车详情-导航icon.png" class="section_top_right_img_img" alt="">
              <p>导航</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="setPosition">
      <mt-tabbar v-model="selected" fixed>  
        <mt-tab-item id="立即下单">  
          立即下单  
        </mt-tab-item>  
        <mt-tab-item id="项目介绍">  
          项目介绍 
        </mt-tab-item>     
      </mt-tabbar>  
      <div class="tabCon" v-if="clientvid">
        <mt-tab-container class="page-tabbar-container" v-model="selected"> 
            <mt-tab-container-item id="立即下单"> 
              <div class="footer">
                <appoint-public servertype="3" :proname="servername" :myCarList="myCarList" :shopId="shopId" :typeData="typeData" @gainReqData="gainReqData"></appoint-public>
              </div>
              <div class="appoint_footer">
                <div class="appoint_footer_p">
                  <p>实付:</p>
                  <p>¥</p>
                  <p>{{price}}</p>
                </div>
                <div @click.stop="save"> 
                  <button class="appoint_btn" >立即下单</button>
                </div>
              </div>
            </mt-tab-container-item>  
            <mt-tab-container-item id="项目介绍"> 
              <div v-html="content" class="set-content"></div>
            </mt-tab-container-item>  
        </mt-tab-container>
      
      </div>
    </div>
    
    
    

  </div>
</template>

<script>
  import {
    score
  } from "mixins";
  import {getCarwashDetail,getCarwashCarList,getCarwashList,carwashOrder,getMyCenter} from '@/utils/api.js'
  import {format} from '@/assets/js/date.js'
  import rightMtPopup from '@/components/rightMtPopup'
  import appointPublic from '@/components/appointPublic'
  export default {
    mixins: [score],
    name: "CarWashDetails",
    data(){
      return {
        clientvid: '',
        id: '',
        shopId:'',
        selected: '立即下单',
        bannerList: [],
        carwashMsg: {},
        typeData:[],
        myCarList: [],
        name:'',
        phone: '',
        project: [],
        remark: '',
        servername: '',
        price: '',
        content: ''
      }
    },
    components:{
      'right-mt-popup':rightMtPopup,
      'appoint-public':appointPublic
    },
    created() {
      let gainData = this.$route.params.gainData;
      if(gainData){
        gainData = JSON.parse(gainData)
        this.id = gainData.id;//服务id
        this.shopId = gainData.shop_id
      } 
      
      this.init();//初始化数据
      let getStorage = this.$store.getters.getStorage;
      this.clientvid = getStorage?getStorage.vid: '';
      this.initCarList();//初始化车辆列表
    },
    watch: {
      date: function(newVal,oldVal){
          // this.initDateData(newVal)
      },
      // typeData:function(newVal,oldVal){
      //     newVal.map((item,index)=>{
      //       if(item.name == this.servername){

      //       }
      //     })
      // },
      
    },
    methods:{
      init: function(){
        getCarwashDetail({id: this.id, shop_id: this.shopId}).then(res=>{
          this.carwashMsg = res.shop;
          this.bannerList = res.shop.images;
          this.price = res.shop.price;
          this.content =  this.$options.filters.unescape(res.shop.content)
          let project = res.project;
          project.map((item,index)=>{
            if(item.id == this.id){
              this.servername = item.typename
            }
            this.typeData.push({
              type:1,
              name: item.typename,
              id: item.id,
              price: item.price,
              active: this.servername == item.typename?true: false
            }) 
          })

        })
      },
      
      initCarList: function(){
        getCarwashCarList({clientvid: this.clientvid}).then(res=>{
          res.map((item,index)=>{
            this.myCarList.push({
              'name': item.carNo,
              'value': item.vid
            })
          })
        })
      },
      openMap:function (long,lat,dist,address) { //打开地图
        this.map(long,lat,dist,address)   
      },
      gainReqData: function(value){
        this.carvid = value.carvid;
        this.carNo = value.carNo;
        this.orderDay = value.orderDay;
        this.date = value.date;
        this.time = value.time;
        this.project = value.project;
        this.name = value.name;
        this.phone = value.phone;
        this.remark = value.remark;
        let servername = this.project.name;
        this.typeData.map((item,index)=>{
          if(item.name == servername){
            this.price = item.price
            return;
          }
        })

      },
      save: function(value){

        if(!this.date){
          this.$store.commit('showToast','请选择预约日期')
          return false;
        }
        if(!this.time){
          this.$store.commit('showToast','请选择预约时间')
          return false;
        }

        if(!this.carvid||!this.carNo){
        
          this.$store.commit('showToast','请选择服务车辆')
          return false;
        }
        if(!this.name){
          this.$store.commit('showToast','请输入用户姓名')
          return false;
        }
        if(!this.phone){
          this.$store.commit('showToast','请输入用户电话')
          return false;
        }else{
          let reg = /^1[3|5|8]\d{9}$/
          if(!reg.test(this.phone)){
            this.$store.commit('showToast','请输入正确的联系电话')
            return
          }
        }
        
        let reqData = {
          carvid: this.carvid,
          clientvid: this.clientvid,
          date: this.date,
          phone: this.phone,
          remark: this.remark,
          appname:this.name,
          name: this.name,
          id: this.id,//服务id
          shop_id: this.shopId//店铺id
        }
        carwashOrder(reqData).then(res=>{
          if(res&&!res.errorCode){
            this.$store.commit('delay',{url:'/Index/CarWash/CarWashPayPage/'+res.orderNo,$router: this.$router}); 
          }
        })
        
      }
    }
  }

</script>
<style scoped>
.mint-tab-item-label{
  display: inline-block;
}
</style>
<style lang="scss" scoped>
 
.mint-popup-right{
  width: 70%;
  height: 100%;
  .title{
    height: 1rem;
    line-height: 1rem;
    font-size: .36rem;
    text-align: center;
  }
}
.mint-popup{
  width: 100%;
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
.line {
  height: 0.7rem;
  width: 0.06rem;
  border-left: 1px solid #efefef;
  position: absolute;
  left: 0;
}
  .line {
    height: 0.7rem;
    width: 0.06rem;
    border-left: 1px solid #efefef;
    position: absolute;
    left: 0;
  }

  .section_top_left {
    margin-left: 0.68rem;
  }

  .section {
    height: 1.02rem;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    position: relative;
    border-top: 1px solid #efefef;
    align-items: center;
  }

  .section_top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .section_top_img {
    width: 0.26rem;
    height: 0.32rem;
    position: absolute;
    left: 0.24rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .section_top_right {
    display: flex;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .nav_center {
    height: 1.34rem;
    padding-left: 0.4rem;
    padding-top: 0.14rem;
    background-color: #fff;
  }

  .nav_center p {
    font-size: 0.28rem;
    line-height: .4rem;
    color: #333333;
  }

  .nav_img {
    width: 100%;
    height: 3.54rem;
  }

  .nav_img img {
    width: 100%;
    height: 100%;
  }


  .nav {
    height: 4.88rem;
    display: flex;
    flex-direction: column;
  }

  .section span {
    font-size: 0.6rem;
    color: #000;
  }


  .big_rightArrow {
    width: 0.16rem;
    height: 0.3rem;
  }
  .section_top_left_ptop {
    font-size: 0.28rem;
    color: #343434;
  }

  .section_top_left_ptop_footer {
    font-size: 0.22rem;
    color: #9f9f9f;
  }

  .appoint_footer {
    width: 100%;
    height: 0.96rem;
    position: fixed;
    bottom: 0;
  }

  .appoint_btn {
    width: 3.04rem;
    height: 0.96rem;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fa9e15;
    color: #fff;
    font-size: .28rem;
  }

  .footer_footer_line {
    height: 0.2rem;
    background-color: #efefef;
  }

  .appoint_footer_p {
    display: flex;
    width: 4.46rem;
    height: 0.96rem;
    background-color: #fff;
    line-height: 0.96rem;
    border-top: 1px solid #f5f5f5;
  }

  .appoint_footer_p :first-child {
    margin-left: 0.46rem;
    color: #303030;
    font-size: 0.28rem;
  }

  .appoint_footer_p :nth-child(2) {
    font-size: 0.28rem;
    color: #f28818;
    margin-left: 0.04rem;
  }

  .appoint_footer_p :last-child {
    color: #f28818;
    font-size: 0.36rem;
  }


.setPosition{
  position: relative;
  top: .2rem;
  .mint-tabbar{
    height: .7rem;
    line-height: .7rem!important;
    top: 0;
    backgound-image: none;
    background:#ffffff;
    border-bottom: 1px solid #efefef;
    position: absolute;
    top: 0;
    left: 0;
  }
    
  .is-selected{
    background: transparent!important;
    border-bottom: 1px solid #FA9E15;
    color: #FA9E15!important;
  }
  .mint-tab-item{
    height: .7rem;
    line-height: .7rem;
    padding: 0  ;
    .mint-tab-item-label{
      display: inline-block;
      height: .7rem!important;
      line-height: .7rem!important;
    }   
  }

  .tabCon{
    padding-top: .9rem;
  }
}
</style>
<style>
  .set-content img{
    width: 100%;
  }
</style>