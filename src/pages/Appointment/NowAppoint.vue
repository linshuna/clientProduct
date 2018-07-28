<template>
    <div class="nowappoint-wrap mask">
        <div class="wallet" v-show="appointMsg">
            <div class="nav">
                <div class="swiper-wrapper" v-if="bannerList">
                  <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                      <img class="swiper-img" :src="item" alt="门店图片">
                    </mt-swipe-item>
                  </mt-swipe>
                </div>
                <div class="nav_center">
                    <p>
                      <span>店名：</span>
                      <span>{{appointMsg.name}}</span>
                    </p>
                    <div class="star-box">
                      <span class="assess">评价：</span>
                      <score-lv :stars='appointMsg.evaluateShow - 0'></score-lv>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section_top">
                    <div class="section_top_left">
                        <img src="../../assets/images/洗车详情-定位icon.png" class="section_top_img">
                        <p class="section_top_left_ptop">{{appointMsg.city}}{{appointMsg.dist}}</p>
                        <p>{{appointMsg.address}}</p>
                    </div>
                    <div class="section_top_right" @click.stop="openMap(appointMsg.longitude,appointMsg.latitude,appointMsg.name,appointMsg.address)">
                        <div class="section_top_right_img">
                            <div class="line"></div>
                            <img src="../../assets/images/洗车详情-导航icon.png" class="section_top_right_img_img" alt="">
                            <p>导航</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">

          <appoint-public servertype="1" :myCarList="myCarList" :shopId="shopId" :typeData="typeData" @gainReqData="gainReqData"></appoint-public>

          <div class="btn-wrap">
            <router-link to="/">
              <p><img src="../../assets/images/indexIcon.png"></p>
              <p>首页</p>
            </router-link>
            <a :href="'tel:'+appointMsg.phone">
              <p><img src="../../assets/images/msgIcon.png"></p>
              <p>咨询</p>
            </a>
            <button class="appoint_btn" @click="order">立即预约</button>
          </div>

        </div>

        <mt-datetime-picker ref="picker" type="date" :startDate="startDate" year-format="{value} 年"  month-format="{value} 月" date-format="{value} 日" @confirm="handleChange">
        </mt-datetime-picker>
        <mt-popup position="bottom" v-model="popupVisibleCar">
          <div class="picker-toolbar name-picker-toolbar">  
              <span class="mint-datetime-cancel" @click="cancle">取消</span>  
              <span class="mint-datetime-confirm" @click="select">确定</span>  
          </div>  
          <mt-picker  ref='pickerObj' class="name-picker" :slots="slots" valueKey="name"></mt-picker>
        </mt-popup>

        <right-mt-popup :currentType="currentType" :title="title" :showData="initData" :popupVisible.sync="popupVisibleType" @gainData="gainData"></right-mt-popup>


    </div>
</template>

<script>
    import {score} from "mixins";
    import {storeDetail,carList,serverList,orderTime,reservations} from '@/utils/api.js'
    import {format} from '@/assets/js/date.js'
    import rightMtPopup from '@/components/rightMtPopup'
    import appointPublic from '@/components/appointPublic'
    export default {
        mixins: [score],
        name: "NowAppoint",
        data(){
          return {
            clientvid: '',
            shopId:'',
            bannerList: [],
            appointMsg: {},
            startDate: new Date(),
            date: '',
            popupVisible: false,
            slots:[],
            typeData:[],
            timeData: [],
            time: '',
            title: '到店时间',//默认是到店时间
            popupVisibleType: false,
            initData: null,
            currentType: 1,
            serverName: '',
            myCarList: [],
            popupVisibleCar: null,
            name:'',
            phone: '',
            project: [],
            carvid: '',
            carNo: '',
            remark: ''
          }
        },
        components:{
          'right-mt-popup':rightMtPopup,
          'appoint-public':appointPublic
        },
        created() {
          let getStorage = this.$store.getters.getStorage
          this.clientvid = getStorage?getStorage.vid:0;
          let shopId = this.$route.params.shopId;//获取shopid
          this.shopId = shopId
          this.init(shopId);//获取店铺的详情
          this.initTypeData(shopId);//服务列表
          this.initCarList();//车辆列表
        },
        watch: {
          date: function(newVal,oldVal){
              this.initDateData(newVal)
          },
          $route: function(to,from){
            console.log(to)
          }
        },
        methods:{
          init: function(id){//appointDetail
            storeDetail({shop_id: id}).then(res=>{
              this.appointMsg = res;
              this.bannerList = res.images
            })
          },
          initCarList: function(){
            if(!this.clientvid){
              return;
            }
            carList({clientvid: this.clientvid}).then(res=>{
              if(!res) return;
              res.map((item,index)=>{
                this.myCarList.push({
                  'name': item.carNo,
                  'value': item.carvid
                })
              })
              
            })
          },
          initDateData: function(date){
            orderTime({day: date,shop_id: this.shopId}).then(res=>{
              if(!res) return;
              res.map((item,index)=>{
                this.timeData.push({
                  type:2,
                  name: item.start,
                  isNoOrder:item.place==0?false:true,
                  active: false
                  })
              })

            })
          },
          initTypeData:function(id){//初始化服务类型
            serverList({shop_id: id}).then(res=>{
              if(!res) return;
              res.map((item,index)=>{
                this.typeData.push({
                  type:1,
                  name: item.name,
                  id: item.id,
                  active: false
                })
              })
            })
          },
          openMap:function (long,lat,dist,address) { 
            this.map(long,lat,dist,address)   
          },
          showPicker() {//显示时间
            this.$refs.picker.open()
          },
          handleChange(value) {
            let date = value.toString()
            date = format(date,'yyyy-MM-dd')
            this.date = date;
            console.log(value)
          },
          changeData: function(title,type){
            this.title = title;
            if(type==2&&!this.date){
              this.$store.commit('showToast','请选择预约日期');
              return false;
            }
            //1:服务类型
            this.initData = type==1?this.typeData:this.timeData
            this.currentType = type;//当前选中的状态
            this.popupVisibleType = true;
          },
          gainData: function(value){//回来的数据
            console.log(value)
            if(this.currentType==1){//服务类型
              let sername = ''
              value.map((item,index)=>{
                if(item.active){
                  this.project.push({id: item.id,name: item.name})
                  sername += item.name+"，"
                }
              })
              this.serverName = sername.substring(0,sername.length-1)
              console.log(this.project)
            }else{
              this.time = value.name;
            }
          },
          cancle() {
            this.popupVisibleCar = false
          },
          select() {
            this.popupVisibleCar = false;
            var pickerVal=this.$refs.pickerObj.getValues()[0];
            this.carvid= pickerVal.value;
            this.carNo = pickerVal.name;

            console.log(pickerVal)
          },
          showCarPicker: function(){
            this.popupVisibleCar=true;
            this.slots=[{
              defaultIndex:0,
              flex: 1,
              values: this.myCarList,//职业类型
              textAlign: 'center'
            }];
          },
          maxFont: function(){
            this.remark=this.remark.substring(0, 200)
          },
          gainReqData: function(value){
            console.log(value)
            this.carvid = value.carvid;
            this.carNo = value.carNo;
            this.orderDay = value.orderDay;
            this.date = value.date;
            this.time = value.time;
            this.project = value.project;
            this.name = value.name;
            this.phone = value.phone;
            this.remark = value.remark;

          },
          order: function(){
            if(!this.clientvid){
              this.$store.commit('showToast','请登录');
              this.$store.commit('delay',{url:'/Login',$router: this.$router});
              return false;
            }
            if(!this.project||this.project.length==0){
              this.$store.commit('showToast','请选择项目')
              return false;
            }
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
              orderDay: this.date+" "+this.time,
              phone: this.phone,
              remark: this.remark,
              project: this.project,
              appname:this.name,
              name: this.name,
              shop_id: this.shopId
            }
            reservations({lists:JSON.stringify(reqData)}).then(res=>{
              if(res&&!res.errorCode){
                this.$store.commit('showToast','预约成功')
                this.$store.commit('delay',{url:'/UserCenter/MyAppointment',$router:this.$router})
              }
              
            })
          }
        }
    }

</script>

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
    
    .section_top_left {
        margin-left: 0.68rem;
    }
    .setFont{
      font-size: .28rem;
      vertical-align: middle;
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

    


    .nav_center {
        padding-left: 0.4rem;
        height: 1.28rem;
        background-color: #fff;
    }

    .nav_center p {
        font-size: 0.28rem;
        font-weight: 600;
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
        height: 4.4rem;
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

    .section span {
        font-size: 0.6rem;
        color: #000;
    }

    /*.section_left img, .section_center img, .section_right img {*/

    /*position: absolute;*/

    /*top: 50%;*/

    /*transform: translateY(-50%);*/

    /*right: 0.26rem;*/

    /*}*/

    .footer {
        margin-top: 0.26rem;
    }

    .footer_footer {
        background-color: #fff;
        padding-bottom: 2rem;
    }

    .footer_footer_msg {
        display: flex;
        justify-content: space-between;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        height: 0.96rem;
        align-items: center;
        border-bottom: 1px solid #efefef;
    }

    .footer_footer_msg_left {
        width: 30%;
    }

    .footer_footer_msg_input {
        width: 70%;
    }
    .footer_footer_msg_input input{
        width: 100%;
        font-size: .29rem;
        text-align: right;
    }

    .footer_footer_msg_left p {
        /*font-weight: 600;*/
        font-size: 0.28rem;
        color: #000
    }

    .big_rightArrow {
        width: 0.16rem;
        vertical-align: middle;
    }

    .section_top_left_ptop {
        font-weight: 800;
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
    
    .remark-wrapper{
      width: 100%;
      padding: 0 .2rem;
      box-sizing: border-box;
      .remarkTitle{
        line-height: .5rem;
        color: #000;
        font-size: 0.28rem;
      }
      .remark{
        width: 90%;
        height: 1.5rem;
        border: 1px solid #f4f4f4;
        border-radius: 5px;
        padding: .1rem;
        font-family: PingFangSC-Regular;
        font-size: .28rem;
        box-sizing: border-box;
      }  
    }
  .assess{
    vertical-align: middle;
    display: inline-block;
  }
        

</style>
