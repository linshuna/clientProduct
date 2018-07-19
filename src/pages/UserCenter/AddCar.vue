<template>
  <div class="bindNewCarWrap">
      <ul class="fieldWrap">
        <li>
          <span class="fieldName">
            车牌号
          </span>
          <div class="setCusRight">
            <input type="text" v-model="carno" @focus="isShow=true" placeholder="请输入车牌号" readonly/>
          </div>
        </li>
        <li>
          <span class="fieldName">车架号</span>
          <div class="setCusRight">
            <input type="text" placeholder="请输入17位车架号" v-model="carVin" maxlength="17"/>
          </div>
        </li>
        <li>
          <span class="fieldName">品牌车型</span>
          <div class="setCusRight">
            <input type="text" readonly unselectable="on" placeholder="请选择品牌车型" v-model="selectedBrand" @focus="popBrand=true"/>
          </div>
        </li>
        <li>
          <span class="fieldName">注册日期</span>
          <div class="setCusRight">
            <span class="inp" :class="{'blackColor':registDate!=''}"  @click="cusBirth('registPicker')">{{registDate==''?'请选择日期':registDate}}</span>
            <img :src="birthIcon" alt="" class="btmArrowIcon">
              <mt-datetime-picker
                ref="registPicker"
                type="date"
                :startDate="startDate"
                :endDate="endDate"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleChange"
              >
              </mt-datetime-picker>
          </div>
        </li>
        <li>
          <p>商业险</p>
        </li>
        <li>
          <span class="fieldName">到期日期</span>
          <div class="setCusRight">
            <span class="inp" :class="{'blackColor':bussiDate!=''}"  @click="cusBirth('bussiPicker')">{{bussiDate==''?'请选择日期':bussiDate}}</span>
            <img :src="birthIcon" alt="" class="btmArrowIcon">
              <mt-datetime-picker
                ref="bussiPicker"
                type="date"
                :startDate="startDate"
                :endDate="endDate"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleChange"
              >
              </mt-datetime-picker>
          </div>
        </li>
        <li>
          <p>交强险</p>
        </li>
        <li>
          <span class="fieldName">到期日期</span>
          <div class="setCusRight">
            <!-- <input type="text" placeholder="请选择日期" v-model="tranDate" readonly @focus="cusBirth('tranPicker')"/> -->
            <span class="inp" :class="{'blackColor':tranDate!=''}"  @click="cusBirth('tranPicker')">{{tranDate==''?'请选择日期':tranDate}}</span>
            <img :src="birthIcon" alt="" class="btmArrowIcon">
              <mt-datetime-picker
                ref="tranPicker"
                type="date"
                :startDate="startDate"
                :endDate="endDate"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleChange"
              >
              </mt-datetime-picker>
          </div>
        </li>
        <li>
          <span class="fieldName">承保公司</span>
          <div class="setCusRight">
            <span class="inp" :class="{'blackColor':companyText!=''}"  @click="companyPick()">{{companyText==''?'请选择级别':companyText}}</span>
            <img :src="btmArrowIcon" alt="" class="btmArrowIcon">
            <mt-popup v-model="popupVisible" position="bottom">
              <div class="picker-toolbar">  
                  <span class="mint-datetime-cancel" @click="cancle">取消</span>  
                  <span class="mint-datetime-confirm" @click="select">确定</span>  
              </div>  
              <mt-picker ref='pickerObj' :slots="slots" valueKey="name" ></mt-picker>
            </mt-popup>

          </div>
        </li>
        <li>
          <span class="fieldName">发动机号</span>
          <div class="setCusRight">
            <input type="text" placeholder="请输入发动机号" v-model="carEniger"/>
          </div>
        </li>
      </ul>
      <button class="saveBtn" @click="saveMsg">保存</button>
      <car-key-code v-on:transferplate="gainCarno" v-bind:isShow.sync="isShow"></car-key-code>
      <brand :popBrand.sync="popBrand" @selectedBrand="activedBrand" @closePop="closePop" @modelid="getModelid"></brand>

  </div>
</template>

<script>
  import Vue from 'vue';
  
  import { Toast,Radio,Popup ,Picker,DatetimePicker   } from 'mint-ui';
  import Vuerify from 'vuerify'
  Vue.use(Vuerify)
  Vue.component(Radio.name, Radio);
  Vue.component(Popup.name, Popup);
  Vue.component(Picker.name, Picker);
  Vue.component(DatetimePicker.name, DatetimePicker);
  import {format} from '@/assets/js/date.js'
  import carKeyCode from "@/components/carKeyCode.vue"
  import brand from "@/components/brand.vue"
  import {addCar,carMsg,editCar} from '@/utils/api.js'
export default {
  name: 'App',
  props:{
    'routeCarId': {type: String},
    'hasCarno':{
      type: String,
      default: ''
    }
  },
  data(){
    return {
      clientvid:'',
      carvid:'',
      carno:'',
      carVin:'',
      btmArrowIcon: require("../../assets/images/btmArrow.png"),
      addLinkerIcon: require("../../assets/images/blueAddIcon.png"),
      birthIcon: require("../../assets/images/birthIcon.png"),
      popupVisible:false,//picker组件显示和关闭
      slots: [{defaultIndex:0}],//picker选择框数据
      companyStyle:  ['中国人寿', '太平洋保险', '永安保险', '平安车险', '中华联合车险'],
      startDate: new Date('1970/1/1'),//开始的生日日期
      endDate: new Date(new Date().getFullYear()+5+"/12/31"),//结束的生日日期
      currentCheckedDate:'',//选中对应的日期
      registDate: '',//选中的注册日期
      bussiDate:'',//商业险日期
      tranDate:'',//交强险日期
      currentPickerId:'',//被选中公司id
      companyText:'',//保险公司
      // tranCompanyText:'',//交强险公司
      carEniger:'',//发动机号
      isShow: false,
      tips:'',
      gainCarData:null,
      popBrand: false,
      selectedBrand: '',//选中车辆类型的参数
      modelid: 0
    }
  },
  vuerify:{
    phone: {
      test: /^1[3|5|8]\d{9}$/,
      message: '请输入正确的手机号码'
    },
    password: {
      test: /^[\w!@#$%^&*.]{6,16}$/,
      message: '密码至少6位'
    },
  },
  components:{
    'car-key-code':carKeyCode,
    'brand':brand
  },
  created:function(){
      let getStorage = this.$store.getters.getStorage;
      this.clientvid = getStorage?getStorage.vid:0
      this.carvid = this.$route.params.carvid;
      let gainCarData = {};
      this.carno = this.hasCarno ||''
      gainCarData.carNo = this.carno;
      gainCarData.vin = this.carVin;
      gainCarData.modelid = this.modelid;
      gainCarData.regtime = this.registDate;
      gainCarData.insurance = this.companyText;
      gainCarData.cominsurance = this.bussiDate;
      gainCarData.daninsurance = this.tranDate;
      gainCarData.engine = this.carEniger;

      this.gainCarData = gainCarData;
      if(this.carvid!=0){//显示车辆信息
        carMsg({carvid:this.carvid}).then(res=>{
          this.carno = res.carNo;
          this.carVin = res.vin;
          this.modelid = res.modelid;
          this.registDate = res.regtime;
          this.companyText = res.insurance;
          this.bussiDate = res.cominsurance;
          this.tranDate = res.daninsurance;
          this.carEniger = res.engine;
          if(this.modelid!=0){
            this.selectedBrand = res.carplate+"-"+res.carmodel+"-"+res.carnat;
          }
          
        })
      }
  },
  computed: {
    errors () {
      return this.$vuerify.$errors
    },
    invalid () {
      return this.$vuerify.invalid
    }
  },
  methods:{
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    companyPick(id){//职业类型选择框
        this.isShow = false;
        this.popupVisible=true;//激活picker组件
        // this.currentPicker='careerName';//当前picker内容变量
        this.currentPickerId=id;//当前picker内容id变量
        this.slots=[{
              defaultIndex:0,
              flex: 1,
              values: this.companyStyle,//职业类型 
              // className: 'slot1',
              textAlign: 'center'
        }];
    },
    cancle:function(){
      this.popupVisible=false;
    },
    select:function(){
      var pickerVal=this.$refs.pickerObj.getValues();
      this.popupVisible=false;
      this.companyText = pickerVal[0];
    },
    cusBirth:function(picker){
      this.isShow = false;
      this.$refs[picker].open();//open时间选择器
      this.currentCheckedDate = picker
    },
    handleChange(value) {
        let date = value.toString();
        date = format(date,'yyyy-MM-dd')
        if(this.currentCheckedDate=='registPicker'){//注册日期
          this.registDate = date
        }else if(this.currentCheckedDate=='bussiPicker'){//商业险日期
          this.bussiDate = date
        }else{//交强险日期
          this.tranDate = date
        }
    },
    gainCarno:function(value){//子组件传给当前组件（父组件）
      this.carno = value.carno
      console.log(value)
      this.tips = value.tips
      if(this.tips&&this.tips!=''){
          Toast('').close();
          Toast(this.tips)
      }
    },
    activedBrand(brand) {
      if(brand){
        this.selectedBrand = brand;
      }
      
    },
    closePop() {
      this.popBrand = false
    },
    getModelid(modelid){
      this.modelid = modelid
    },
    saveMsg:function(){
      let reqData = {
        clientvid: this.clientvid,
        carNo: this.carno,
        vin: this.carVin,
        regtime: this.registDate,
        insurance: this.companyText,
        cominsurance: this.bussiDate,
        daninsurance: this.tranDate,
        engine: this.carEniger,
        modelid: this.modelid
      }
      if(!reqData){
        Toast("请填写资料");
        return false;
      }
      if(!this.carno){
        Toast("请输入车牌号");
        return false;
      }
      if(this.carVin.length>0&&this.carVin.length<17){
        Toast('请输入完整车架号');
        return false;
      }
      let _this = this;
      if(this.carvid==0){//新增车辆
        addCar(reqData)
        .then((res)=>{
          Toast('成功添加车辆');
          setTimeout(function(){
            _this.$router.push({path: '/UserCenter/MyCar'})
          },1500)
        })
      }else{//车辆编辑
        reqData.carvid = this.carvid
        editCar(reqData).then(res=>{
          if(res&&!res.errorCode){
            this.$store.commit('showToast','编辑成功')
            let paramData = {
              url:'/UserCenter/MyCarDetails/'+this.carvid,$router:this.$router
            }
            this.$store.commit('delay',paramData)  
          }
          
        })
      }

    },
    
    
  }
}
</script>

<style lang="scss" scoped>
  .bindNewCarWrap{
    width: 100%;
    font-size: .28rem;
    background: #ffffff;
    padding: 0 .2rem;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    min-height: 100%;
  }
    
    .logoWrap{
      width: 100%;
      text-align: center;
      padding: .2rem 0;
      .customLogo{
        display: inline-block;
        width: .8rem;
        height: .8rem;
      }
        
    }
      
    .fieldWrap{
      width: 100% ;
      font-size: 0;
      padding-bottom:.2rem;
      padding-top: .2rem;
      li{
        width: 100%;
        font-size: 0  ;
        padding: .1rem 0;
        position: relative;
        p{
          font-size: .28rem;
        }
          
        .fieldName{
          vertical-align: top;  
          font-size: .28rem;
          width: 20%;
          line-height: .7rem;
          display: inline-block;
          .redColor{
            color: red;
          }
            
        }
          
          input[type="text"],span.inp{
            display: inline-block;
            width: 100%;
            border:1px solid #f4f4f4;
            border-radius: 5px; 
            padding: .2rem 0 .2rem .1rem;
            box-sizing:border-box ;
            font-size: .28rem;
          }
          span.inp{
            color: gray ;
          }
          .blackColor{
            color: #000!important ;
          }
          .cusNameInp{
            width: 50%!important
          }
            
          .mint-popup{
            width: 100%;
            .picker-toolbar{
              width: 100%;
              padding: 15px 10px;
              box-sizing: border-box;
              color: #26a2ff;
            }
            .mint-datetime-picker .mint-datetime-action{
              line-height: 12px; 
            }
                 
          }
            
      }
      .setCusRight{
        display: inline-block;
        font-size: .28rem;
        width: 80%;
        padding-left: .32rem;
        box-sizing:border-box;
        position: relative;
        .btmArrowIcon{
          position: absolute; 
          top: 50%;
          width: .35rem;
          right: .1rem;
          transform: translate(0,-50%);
        }
          
        .isShowPicker{
          display: inline-block;
        }
            
      }
      .mint-radiolist{
        vertical-align: middle;
        display: inline-block ;  
        text-align: right;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0,-50%);
        .mint-radiolist-title{
            margin: 0;
        }
          
        .mint-cell{
          display: inline-block;  
          min-height: auto;
          .mint-radio-input:checked + .mint-radio-core{
            background-color: #fff;
            border-color: #26a2ff;
          }
            
          .mint-radio-input:checked + .mint-radio-core::after{
            background-color: #26a2ff;
          }
           
          .mint-cell-wrapper{
            background: transparent!important;
            padding-left: 10px;
            padding-right: 0;
            font-size: .24rem;
            .mint-radiolist-label{
              padding: 0;
            }
              
          }
            
        }
          
      }
        
        .mint-cell:last-child{
          background: transparent!important;
        }
          

      .remarkWrap {
        width: 100%;
        margin-top: .2rem;
        .addLinkerWrap{
          width: 100%;
          margin: .35rem 0 .2rem 0;
          span{
            vertical-align: middle;
          }
            
          img{
            display: inline-block;
            width: .35rem;
            height: .35rem;
            vertical-align: middle;
          } 
            
        }
        textarea{
          width: 100%;
          height: 1.5rem;
          border: 1px solid #f4f4f4;
          border-radius: 5px;
          padding: .1rem;
          box-sizing: border-box  ;
        }
      }      
        
      .saveBtn{
        width: 100%;
        height: .7rem;
        border: none;
        position: fixed;
        bottom:0;
        left: 0;
        width: 100%;
        background: #FA9E15;
        color: #ffffff;
        font-size: .28rem;
        }
    }
      
    .saveBtn{
      width: 100%;
      height: .8rem;
      border: none;
      position: fixed;
      bottom:0;
      left: 0;
      width: 100%;
      background: #FA9E15;
      color: #ffffff;
      font-size: .28rem;
    }
      
</style>
