<template>
  <div class="nowappoint-wrap mask">
    <div class="wallet" v-show="storeMsg">
      <div class="nav">
        <div class="swiper-wrapper" v-if="bannerList">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
              <img class="swiper-img" :src="item" alt="门店图片">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="nav_center">
          <p>店名：{{storeMsg.name}}</p>
          <div class="star-box">
            <span class="assess">评价：</span>
            <score-lv :stars='storeMsg.evaluateShow-0'></score-lv>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_top">
          <div class="section_top_left">
            <img src="../../assets/images/洗车详情-定位icon.png" class="section_top_img">
            <p class="section_top_left_ptop">{{storeMsg.city}}{{storeMsg.dist}}{{storeMsg.address}}</p>
          </div>
          <div class="section_top_right" @click.stop="openMap(storeMsg.longitude,storeMsg.latitude,storeMsg.name,storeMsg.address)">
            <div class="section_top_right_img">
              <div class="line"></div>
              <img src="../../assets/images/洗车详情-导航icon.png" class="section_top_right_img_img" alt="">
              <p>导航</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="setPosition">
      <mt-tabbar v-model="selected" fixed>  
        <mt-tab-item id="门店详情">  
          门店详情  
        </mt-tab-item>  
        <mt-tab-item id="门店评价">  
          门店评价 
        </mt-tab-item>     
      </mt-tabbar>  
      <div class="tabCon">
        <mt-tab-container class="page-tabbar-container" v-model="selected"> 
            <mt-tab-container-item id="门店详情"> 
              <div class="footer" ref="footer">
                
                <div v-html="storeCon" class="set-content"></div>
              </div>    
            </mt-tab-container-item>  
            <mt-tab-container-item id="门店评价"> 
              <template v-if="shopevaluateList&&shopevaluateList.length>0">
                <ul class="elvate-list">
                  <li v-for="item in shopevaluateList">
                    <div class="elvate-nav">
                      <div class="nav_left">
                        <img :src="item.headimg" alt="服务图片">
                      </div>
                      <div class="nav_center">
                        <p>{{item.uname}} - {{item.carNo}}</p>
                        <div class="nav_center_center">
                          <span class="setElvate">综合评价：</span>
                          <!--<score-lv :stars='Math.round(item.evaluatenum-0)'></score-lv>-->
                          <scroll-star :width="item.evaluatenum"></scroll-star>
                        </div>
                        <p class="section_top_left_ptop">{{item.province}}{{item.city}}{{item.dist}}{{item.address}}</p>
                      </div>
                      <div class="nav_bottom">{{item.message | noDataTip}}</div>
                    </div>
                    
                  </li>
                </ul>
              </template>
              <template v-else>
                <no-data-tip :tipData="{typeTipe:0,titleTip:'门店详情',conTip:'暂无评价'}"></no-data-tip>
              </template>
              
            </mt-tab-container-item>  
        </mt-tab-container>
      
      </div>
    </div>
    
    
    <div class="btn-wrap">
      <router-link to="/">
        <p><img src="../../assets/images/indexIcon.png"></p>
        <p>首页</p>
      </router-link>
      <a :href="'tel:'+storeMsg.phone">
        <p><img src="../../assets/images/msgIcon.png"></p>
        <p>咨询</p>
      </a>
      <button class="appoint_btn" @click="order">立即预约</button>
    </div>
  </div>
</template>

<script>
  import {score} from "mixins";
  import {storeDetail,shopevaluate} from '@/utils/api.js'
  import noDataTip from '@/components/noDataTip'
  import scrollStar from '@/components/scrollStar'
  export default {
    mixins: [score],
    name: "storedetail",
    data(){
      return {
        selected:'门店详情',
        shopId:'',
        bannerList:null,
        storeMsg: '',
        storeCon: '',
        shopevaluateList: null//点评的数据
      }
    },
    created() {
      let id = this.$route.params.stopId;
      this.shopId = id;
      this.init(id)
      this.initshopevaluate(id)
      
    },
    components:{
      'no-data-tip':noDataTip,
      'scroll-star': scrollStar
    },
    methods:{
      init: function(id){
        storeDetail({'shop_id':id}).then(res=>{
          this.storeMsg = res
          this.bannerList = res.images
          this.storeCon =  this.$options.filters.unescape(res.content)      
        })
      },
      initshopevaluate: function(id){
        shopevaluate({shop_id: id}).then(res=>{
          this.shopevaluateList = res;
        })
      },
      openMap:function (long,lat,dist,address) { 
        window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${lat},${long};title:${dist};addr:${address};&key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&referer=myapp `        

      },
      order: function(){
        this.$router.push({path:'/Appointment/NowAppoint/'+this.shopId})

      }
    }
  }

</script>

<style lang="scss" scoped>
  .nowappoint-wrap{
    overflow-x: hidden;
  }
  .swiper-wrapper{
    height: 3.54rem;
    .swiper-img{
      width: 100%;
      height: 3.54rem;
    }
        
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
    width: 92%;
  }
  .section_top_left_ptop{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    width: 80%;
  }

  .section_top_img {
    width: 0.26rem;
    height: 0.3rem;
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

  .section_top_right_img p {
    display: inline-block;
    font-size: 0.26rem;
  }

  .section_top_right_img_img {
    width: 0.4rem;
    height: 0.4rem;
  }

  .section_top_right_img {
    width: 1rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  
.wallet{
  .nav_center {
    padding: .2rem 0;
    padding-left: 0.2rem;
    background-color: #fff;
    display: inline-block;
    vertical-align: middle;
    .setElvate{
      display: inline-block;
      vertical-align: middle;
    }
    p {
      font-size: 0.28rem;
      font-weight: 600;
    }
  }
  
  .nav_img {
    width: 100%;
    height: 3.54rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav {
    display: flex;
    flex-direction: column;
  }
  .nav_wallet_p {
    font-size: 0.33rem;
    font-weight: 700;
    color: #000;
  }
  .nav_money_p {
    font-size: 0.9rem;
    color: #000;
    font-weight: 700;
  }
}
  


  .section span {
    font-size: 0.6rem;
    color: #000;
  }

  .footer {
    width: 100%;
    padding-bottom: 2rem;
  }
  .footer >>> img{
    max-width: 100%!important;
  }
  
.btn-wrap{
  width: 100%;
  height: 0.96rem;
  position: fixed;
  left: 0;
  bottom: 0;
  font-size: 0;
  text-align: center;
  color: #979797;
  z-index: 999999;
  background-color: #fff;
  a{
    display: inline-block;
    width: 15%;
    font-size: .28rem;
    vertical-align: top;
    background: #fff;
    border-top:1px solid #efefef;
    box-sizing:broder-box;
    height: 100%;
    line-height: .4rem;
    padding-top: .1rem;
  }
  a:first-child{
    border-right:1px solid #efefef;
  }
  img{
    display: inline-block;
    width: .32rem;
  }
  .appoint_btn {
      display: inline-block;
      width: 70%;
      height: 0.96rem;
      background-color: #fa9e15;
      color: #fff;
      font-size: .28rem;
      vertical-align: top;
  }  
}
.assess{
  display: inline-block;
  vertical-align: middle;
}

.setPosition{
  position: relative;
  top: .2rem;
  z-index: 10;
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

.elvate-list{
  width: 100%;
  padding-bottom: 2rem;
  
  li{
    width: 100%;  
    padding-left: .2rem;
    box-sizing: border-box; 
    background-color: #fff;
  }
  .elvate-nav {
    height: 1.88rem;
    border-top: 1px solid #ececec;
    padding: .2rem .18rem .1rem 0;
    box-sizing: border-box;
  }

  .nav_left {
    width: .8rem;
    height: .8rem;
    display: inline-block;
    vertical-align: middle;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
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
    display: inline-block;
    vertical-align: middle;
    padding-left: .2rem;
  }
  .nav_center p:first-child {
    color: #707070;
    font-weight: 600;
    font-size: 0.28rem;
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
  .nav_bottom{
    padding-top: .1rem;
    width: 100%;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
 

</style>
<style scoped>
/*转换content内容的样式 */
  .set-content img{
    width: 100%;
  }
  .mint-tab-item-label{
    display: inline-block!important;
    height: .7rem!important;
    line-height: .7rem!important;
  }   
</style>