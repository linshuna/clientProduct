<template>
    <div class="nowappoint-wrap mask">
        <p class="footer_footer_msg shopName">门店：{{shopName}}</p>
        <div class="footer">
          <ul class="footer_footer">
            <li class="footer_footer_msg" @click="changeData('服务项目',1)">
              <div class="footer_footer_msg_left">
                  <p>选择项目</p>
              </div>
              <div class="footer_footer_msg_right">
                <span class="setFont">{{serverName}}</span>
                <img src="../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
              </div>
            </li>
            <li class="footer_footer_msg" @click.stop="showPicker">
              <div class="footer_footer_msg_left">
                  <p>预约日期</p>
              </div>
              <div class="footer_footer_msg_right">
                <span class="setFont">{{date}}</span>
                <img src="../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
              </div>
            </li>
            <li class="footer_footer_msg"  @click="changeData('到店时间',2)">
              <div class="footer_footer_msg_left">
                  <p>预约时间</p>
              </div>
              <div class="footer_footer_msg_right">
                <span class="setFont">{{time}}</span>
                <img src="../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
              </div>
            </li>  
            <li class="footer_footer_msg" @click.stop="showCarPicker">
              <div class="footer_footer_msg_left">
                  <p>选择车辆</p>
              </div>
              <div class="footer_footer_msg_right">
                <span class="setFont">{{carNo}}</span>
                <img src="../../assets/images/rightArrow.png" alt="" class="big_rightArrow">
                
              </div>
            </li>
            <li class="footer_footer_msg">
                <div class="footer_footer_msg_left">
                    <p>用户姓名</p>
                </div>
                <div class="footer_footer_msg_input">
                    <input type="text" placeholder="请输入姓名" v-model="name">
                </div>
            </li>
            <li class="footer_footer_msg">
                <div class="footer_footer_msg_left">
                    <p>用户电话</p>
                </div>
                <div class="footer_footer_msg_input">
                    <input type="number" pattern="[0-9]*" placeholder="请输入电话" v-model="phone">
                </div>
            </li>
            <li>
              <div class="remark-wrapper">
                <p class="remarkTitle">车店备注</p>
                <textarea class="remark" name="" placeholder="请输入备注，最多50字" v-model="remark" maxlength="50" @change="maxFont" @keydown="maxFont" @keyup="maxFont"></textarea>
              </div>
            </li>
          </ul>
          <div class="btn-wrap">
            <button class="appoint_btn" @click="save">保存</button>
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

        <right-mt-popup :servertype="currentType" :initNum="selectedTimeIndex" :title="title" :showData="initData" :popupVisible.sync="popupVisibleType" @gainData="gainData"></right-mt-popup>

    </div>
</template>

<script>
    import {score} from "mixins";
    import {storeDetail,carList,serverList,orderTime,MyAppointEdit,getMyAppointDetail} from '@/utils/api.js'
    import {format} from '@/assets/js/date.js'
    import rightMtPopup from '@/components/rightMtPopup'
    export default {
        mixins: [score],
        name: "MyAppointmentEditor",
        data(){
          return {
            orderNo: '',
            clientvid: '',
            shopId:'',
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
            remark: '',
            selectedTimeIndex: -1,
            shopName: '',
            fromtype:0,//洗车类型
            servertype: 1
          }
        },
        components:{
          'right-mt-popup':rightMtPopup
        },
        created() {
          //获取orderNo
          this.orderNo = this.$route.params.orderNo;
          
          //获取客户vid
          let getStorage = this.$store.getters.getStorage
          this.clientvid = getStorage?getStorage.vid:0;

          this.init();//获取店铺的详情/
          this.initCarList();//车辆列表
        },
        watch: {
          date: function(newVal,oldVal){
              this.initDateData(newVal,this.shopId)
          },
          shopId: function(newVal,oldVal){
            this.initTypeData(newVal);//获取服务类型
          },
          typeData: function(newVal,oldVal){
            let serArr = [];
            if(this.serverName.indexOf(',')){
              serArr = this.serverName.split(',')
            }else{
              serArr.push(this.serverName)
            }
            serArr.map((aItem,aIndex)=>{
              newVal.map((item,index)=>{ 
                if(item.name==aItem){
                  this.project.push({id:item.id,name:item.name})
                  this.$set(this.typeData[index],'active',true)
                }
              })
            })

          },
          timeData: function(newVal,oldVal){
            newVal.map((item,index)=>{ 
              if(item.name==this.time){
                this.selectedTimeIndex = index
                this.$set(this.timeData[index],'active',true)
              }
            })
          }
        },
        methods:{
          init: function(){//appointDetail
            getMyAppointDetail({orderNo: this.orderNo}).then(res=>{
              let data = res[0];
              this.shopId = data.shop_id;//店铺id
              this.serverName = data.project;
              this.carvid = data.carvid;
              this.carNo = data.carNo;
              this.date = data.appDay;
              this.time = data.appTime;
              this.name = data.appname;//用户名
              this.phone = data.phone;
              this.remark = data.remark;
              this.shopName = data.name;//店铺名称
              this.fromtype = data.fromtype;//洗车类型
            })
          },
          initCarList: function(){
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
          initDateData: function(date,id){
            this.timeData = []
            orderTime({day: date,shop_id: id}).then(res=>{
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
            }else{
              if(this.fromtype!=0&&type==1){
                return;
              }
            }
            //1:服务类型
            this.initData = type==1?this.typeData:this.timeData
            this.currentType = type;//当前选中的状态
            this.popupVisibleType = true;
          },
          gainData: function(value){//回来的数据
            if(this.currentType==1){//服务类型
              let sername = ''
              value.map((item,index)=>{
                if(item.active){
                  this.project.push({id: item.id,name: item.name})
                  sername += item.name+","
                }
              })
              this.serverName = sername.substring(0,sername.length-1)
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
          save: function(){
            if(this.fromtype==0&&(!this.project||this.project.length==0)){
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
              orderNo: this.orderNo,
              carvid: this.carvid,
              clientvid: this.clientvid,
              orderDay: this.date+" "+this.time,
              phone: this.phone,
              remark: this.remark,
              appname: this.name
            }
            if(this.fromtype==0){
              reqData.project = this.project
            }
            MyAppointEdit({lists:JSON.stringify(reqData)}).then(res=>{
              this.$store.commit('showToast','成功修改预约')
              this.$store.commit('delay',{url:'/UserCenter/MyAppointment',$router:this.$router})
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
    .swiper-wrapper{
      height: 3.54rem;
      .swiper-img{
        width: 100%;
        height: 3.54rem;
      }
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
    .shopName{
      font-size: 0.28rem;
      color: #000;
    }
    .footer_footer_msg {
        display: flex;
        justify-content: space-between;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        height: 0.96rem;
        align-items: center;
        border-bottom: 1px solid #efefef;
        background: #fff;
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
        height: 0.3rem;
        vertical-align: middle;
    }

    .section_top_left_ptop {
        font-weight: 800;
    }
    .btn-wrap{
      width: 100%;
      height: 0.72rem;
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
          width: 100%;
          height: 0.72rem;
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
   
        

</style>
