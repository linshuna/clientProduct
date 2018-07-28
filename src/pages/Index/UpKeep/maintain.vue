<template>
    <div class="maintain-wrap mask">
        <div class="nav">
            <div class="nav_top">
                <div class="nav_top_img">
                    <div class="swiper-wrapper" v-if="bannerList">
                      <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                          <img class="swiper-img" :src="item" alt="商品图片">
                        </mt-swipe-item>
                      </mt-swipe>
                    </div>
                </div>

                <div class="nav_center">
                    <div class="nav_center_top">
                        <p class="nav_center_top_p">{{shopMsg.name}}</p>
                    </div>

                    <div class="nav_center_footer">
                        <div class="nav_center_footer_left">
                            <p>¥{{shopMsg.price}}</p>
                            <p>市场价：{{shopMsg.marketprice}}</p>
                        </div>

                        <div class="nav_center_footer_right">
                            <p>&nbsp;销量:{{shopMsg.sale}}</p>
                        </div>
                    </div>
                </div>

                <div class="nav_footer">
                    <p>购物流程</p><img src="../../../assets/images/rightArrow.png" alt="">
                </div>
            </div>

            <div class="setPosition">
              <mt-tabbar v-model="selected" fixed>  
                <mt-tab-item id="立即购买">  
                  立即购买  
                </mt-tab-item>  
                <mt-tab-item id="商品详情">  
                  商品详情 
                </mt-tab-item>     
              </mt-tabbar>  
              <div class="tabCon">
                <mt-tab-container class="page-tabbar-container" v-model="selected"> 
                    <mt-tab-container-item id="立即购买"> 
                      <div class="footer">
                          <appoint-public servertype="0" :myCarList="myCarList" :shopId="shopId" :maintainId ="project_id" @gainReqData="gainReqData"></appoint-public>
                          <div class="btn-wrap">
                            <router-link to="/">
                              <p><img src="../../../assets/images/indexIcon.png"></p>
                              <p>首页</p>
                            </router-link>
                            <a :href="'tel:'+shopMsg.phone">
                              <p><img src="../../../assets/images/msgIcon.png"></p>
                              <p>咨询</p>
                            </a>
                            <button class="appoint_btn" @click="order">立即购买</button>
                          </div>
                      </div>
                    </mt-tab-container-item>  
                    <mt-tab-container-item id="商品详情"> 
                      <div class="desc" v-html="$options.filters.unescape(desc)"></div>
                      
                    </mt-tab-container-item>  
                </mt-tab-container>
              
              </div>
            </div>

            <!--<div class="section">
                <div class="section_top"></div>

                <div class="section_msg">
                    <img src="../../../assets/images/banner.jpg" alt="">
                </div>
            </div>-->

            
        </div>
    </div>
</template>

<script>
  import {getShopDetail,getCarwashCarList,buyGoods } from '@/utils/api.js'
  import appointPublic from '@/components/appointPublic'
  export default {
      name: "maintain",
      data(){
        return{
          clientvid:'',
          selected: '立即购买',
          shopId: '',
          shopMsg: {},
          bannerList: null,
          myCarList: [],
          reqData: {},
          desc: '',
          project_id:''//商品的id
        }
      },
      created() {
        this.shopId = this.$route.params.shopId;
        let getStorage = this.$store.getters.getStorage;
        this.clientvid = getStorage?getStorage.vid:''
      },
      mounted() {
        this.$nextTick(function(){
          this.init();//初始化商品详情数据
          if(this.clientvid){
            this.initCarList();//初始化我的车辆
          }
        })
      },
      components:{
        'appoint-public':appointPublic
      },
      methods:{
        init: function(){
          getShopDetail({id: this.shopId}).then(res=>{
            this.shopMsg = res;
            this.bannerList = res.images;
            this.desc = res.desc;
            this.project_id = res.project_id;
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
        gainReqData: function(value){
          this.reqData = value;
        },
        order: function(){
          if(!this.clientvid){
            this.$store.commit('showToast','请登录')
            this.$store.commit('delay',{url:'/Login',$router: this.$router})
            return false;
          }
          if(!this.reqData.orderDate&&this.project_id==1){
            this.$store.commit('showToast','请选择预约日期')
            return false;
          }
          if(!this.reqData.time&&this.project_id==1){
            this.$store.commit('showToast','请选择预约时间')
            return false;
          }
          if(!this.reqData.carvid){
            this.$store.commit('showToast','请选择服务车辆')
            return false;
          }
          if(!this.reqData.buyname){
            this.$store.commit('showToast','请输入用户姓名')
            return false;
          }
          if(!this.reqData.buymobile){
            this.$store.commit('showToast','请输入用户电话')
            return false;
          }else{
            let reg = /^1[3|5|8]\d{9}$/
            if(!reg.test(this.reqData.buymobile)){
              this.$store.commit('showToast','请输入正确的联系电话')
              return
            }
          }

          this.$delete(this.reqData,'orderDate')
          this.$delete(this.reqData,'time')
          this.reqData.id = this.shopId;
          this.reqData.clientvid = this.clientvid;
          this.reqData.number = 1
          buyGoods(this.reqData).then(res=>{
            console.log(res)
            if(res&&!res.errorCode){
              let orderNo = res.orderNo;
              this.$router.push({path: '/Index/UpKeep/Payment/'+orderNo})
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
    .nav_top_img {
        height: 5.54rem;
        overflow: hidden;
        .swiper-wrapper{
          height: 5.54rem;
          .swiper-img{
            width: 100%;
            height: 5.54rem;
          }
              
        }
    }

    .nav_top_img_a {
        background-color: #ff0;
        height: 7.54rem;
    }

    .nav_top_img_b {
        background-color: #f00;
        height: 7.54rem;
    }

    .nav_top_img_c {
        background-color: #0ff;
        height: 7.54rem;
    }

    .nav_center {
        background-color: #fff;
        overflow: hidden;
        position: relative;
    }

    .nav_center_top_p {
        height: 0.4rem;
        font-size: 0.28rem;
        color: #656565;
        line-height: 0.4rem;
        margin-top: 0.3rem;
        margin-left: 0.28rem;
    }

    .nav_center_footer {
        display: flex;
        margin-left: 0.28rem;
        padding-bottom: .3rem;
        line-height: .45rem;
    }

    .nav_center_footer_left {
        display: flex;
    }

    .nav_center_footer_right {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-right: .2rem;
    }

    .nav_center_footer_left p:first-child {
        color: #f06811;
        font-size: 0.32rem;
    }

    .nav_center_footer_left p:last-child {
        color: #9c9c9c;
        font-size: 0.22rem;
        margin-left: 0.12rem;
    }

    .nav_center_footer_right p {
        font-size: 0.22rem;
        color: #9c9c9c;
    }

    .nav_footer {
        height: 0.86rem;
        margin-top: 0.2rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav_footer p {
        font-size: 0.24rem;
        color: #636363;
        margin-left: 0.28rem;
    }

    .nav_footer img {
        width: 0.14rem;
        height: 0.14rem;
        margin-right: 0.3rem;
    }

    .section_top {
        height: 1.3rem;
        background-color: #ff0;
        margin-top: 0.2rem;
    }

    .section_msg {
        height: 7.88rem;
        background-color: #f00;
        overflow: hidden;
    }

    .section_msg img {
        width: 100%;
        height: 100%;
    }

    .footer {
        width: 100%;
    }

    .footer_btn_a, .footer_btn_b {
        width: 1.06rem;
        height: 0.92rem;
        background-color: #fcfcfc;
        border: solid 1px #dedede;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .footer_btn_a img, .footer_btn_b img {
        width: 0.3rem;
        height: 0.3rem;
    }

    .footer_btn_a p, .footer_btn_b p {
        color: #696969;
        font-size: 0.26rem;
    }

    .footer_btn_c button {
        height: 0.92rem;
        background-color: #fe9a33;
        width: 5.36rem;
        color: #fff;
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
  a{
    display: inline-block;
    width: 15%;
    font-size: .28rem;
    vertical-align: top;
    background: #fff;
    border-top:1px solid #efefef;
    box-sizing:broder-box;
    border-right: 1px solid #efefef;
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
  .desc img{
    width: 100%;
  }
</style>