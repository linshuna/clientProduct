<template>
  <div class="appoint-wrap">
    <ul class="footer_footer">
      <template v-if="servertype==0">
        <li class="footer_footer_msg" @click.stop="showPicker" v-if="maintainId==1">
          <div class="footer_footer_msg_left">
              <p>预约日期</p>
          </div>
          <div class="footer_footer_msg_right">
            <span class="setFont">{{date}}</span>
            <img src="../assets/images/rightArrow.png" alt="" class="big_rightArrow">
          </div>
        </li>
        <li class="footer_footer_msg"  @click="changeData('到店时间',2)" v-if="maintainId==1">
          <div class="footer_footer_msg_left">
              <p>预约时间</p>
          </div>
          <div class="footer_footer_msg_right">
            <span class="setFont">{{time}}</span>
            <img src="../assets/images/rightArrow.png" alt="" class="big_rightArrow">
          </div>
        </li>  
      </template>
      <template v-else>
        <li class="footer_footer_msg" @click="changeData('服务项目',servertype)">
          <div class="footer_footer_msg_left">
              <p>选择项目</p>
          </div>
          <div class="footer_footer_msg_right">
            <span class="setFont">{{serverName}}</span>
            <img src="../assets/images/rightArrow.png" alt="" class="big_rightArrow">
          </div>
        </li>
        <li class="footer_footer_msg" @click.stop="showPicker">
          <div class="footer_footer_msg_left">
              <p>预约日期</p>
          </div>
          <div class="footer_footer_msg_right">
            <span class="setFont">{{date}}</span>
            <img src="../assets/images/rightArrow.png" alt="" class="big_rightArrow">
          </div>
        </li>
        <li class="footer_footer_msg"  @click="changeData('到店时间',2)">
          <div class="footer_footer_msg_left">
              <p>预约时间</p>
          </div>
          <div class="footer_footer_msg_right">
            <span class="setFont">{{time}}</span>
            <img src="../assets/images/rightArrow.png" alt="" class="big_rightArrow">
          </div>
        </li>  
      </template>
      
      <li class="footer_footer_msg" @click.stop="showCarPicker">
        <div class="footer_footer_msg_left">
            <p>选择车辆</p>
        </div>
        <div class="footer_footer_msg_right">
          <span class="setFont">{{carNo}}</span>
          <img src="../assets/images/rightArrow.png" alt="" class="big_rightArrow">
          
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
  
      <mt-datetime-picker ref="picker" type="date" :startDate="startDate" year-format="{value} 年"  month-format="{value} 月" date-format="{value} 日" @confirm="handleChange">
      </mt-datetime-picker>
      <mt-popup position="bottom" v-model="popupVisibleCar">
        <div class="picker-toolbar name-picker-toolbar">  
            <span class="mint-datetime-cancel" @click="cancle">取消</span>  
            <span class="mint-datetime-confirm" @click="select">确定</span>  
        </div>  
        <mt-picker  ref='pickerObj' class="name-picker" :slots="slots" valueKey="name"></mt-picker>
      </mt-popup>

      <right-mt-popup :servertype="currentType.toString()" :title="title" :showData="initData" :popupVisible.sync="popupVisibleType" @gainData="gainData"></right-mt-popup>
  </div>
</template>

<script>
    import {score} from "mixins";
    import {storeDetail,carList,serverList,orderTime,reservations,getMyCenter} from '@/utils/api.js'
    import {format} from '@/assets/js/date.js'
    import rightMtPopup from '@/components/rightMtPopup'
    export default {
        mixins: [score],
        name: "appointPublic",
        props:{
          servertype:{type: String},//3是洗车
          shopId:{type: String},
          msg: {type: Object},
          typeData: {type: Array},
          myCarList: {type: Array},
          proname: {type: String},
          maintainId: {type: String} //商城 立即下单 商品id =1要显示日期和时间
        },
        data(){
          return {
            clientvid: '',
            startDate: new Date(),
            date: '',
            popupVisible: false,
            slots:[],
            timeData: [],
            time: '',
            title: '到店时间',//默认是到店时间
            popupVisibleType: false,
            initData: null,
            currentType: 1,
            serverName: '',
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
          'right-mt-popup':rightMtPopup
        },
        created() {
          let getStorage = this.$store.getters.getStorage
          this.clientvid = getStorage?getStorage.vid:'';
          this.initCustom()//初始化客户信息
          // this.initTypeData(this.shopId);//服务列表
          //this.initCarList();//车辆列表
        },
        watch: {
          maintainId: function(newVal,oldVal){ //监听商品的id
            this.maintainId = newVal;
          },
          proname: function(newVal,oldVal){
            this.serverName = newVal
            this.order()//给父组件返回数据
          },
          serverName: function(newVal,oldVal){
            this.order()//给父组件返回数据
          },
          project: function(newVal,oldVal){
            this.order()//给父组件返回数据
          },
          date: function(newVal,oldVal){
            this.initDateData(newVal)
            this.order()//给父组件返回数据
          },
          time: function(newVal,oldVal){
            this.order()//给父组件返回数据
          },
          carNo: function(newVal,oldVal){
            this.order()//给父组件返回数据
          },
          carvid: function(newVal,oldVal){
            this.order()//给父组件返回数据
          },
          name: function(newVal,oldVal){
            this.order()//给父组件返回数据
          },
          phone: function(newVal,oldVal){
            this.order()//给父组件返回数据
          },
          remark: function(newVal,oldVal){
            this.order()//给父组件返回数据
          },
        },
        methods:{
          initCustom:function(){
            //获取客户信息
            if(this.clientvid){
              getMyCenter({clientvid: this.clientvid}).then(res=>{
                this.name = res.uname;
                this.phone = res.phone;
              })  
            }
          },
          initDateData: function(date){
            this.timeData = [];
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
          showPicker() {//显示时间
            this.$refs.picker.open()
          },
          handleChange(value) {
            let date = value.toString()
            date = format(date,'yyyy-MM-dd')
            this.date = date;
          },
          changeData: function(title,type){
            this.title = title;
            if(type==2&&!this.date){
              this.$store.commit('showToast','请选择预约日期');
              return false;
            }
            //1:服务类型
            this.initData = type==2?this.timeData:this.typeData
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
            }else{
              if(this.currentType==2){
                this.time = value.name;
              }else{
                this.serverName = value.name;
                this.project = value;
              }
            }
          },
          cancle() {
            this.popupVisibleCar = false
            console.log('取消')
          },
          select() {
            this.popupVisibleCar = false;
            var pickerVal=this.$refs.pickerObj.getValues()[0];
            this.carvid= pickerVal.value;
            this.carNo = pickerVal.name;
            console.log(this.carNo)
          },
          showCarPicker: function(){
            if(!this.clientvid){
              this.$store.commit('showToast','请登录');
              this.$store.commit('delay',{url:'/Login',$router: this.$router});
              return false;
            }
            if(this.myCarList.length==0){
              this.$store.commit('showToast','您的账号下，没有车辆，即将为您跳转。。。');
              this.$store.commit('delay',{url:'/UserCenter/MyCar/AddCar/0',$router: this.$router});
            }else{
              this.popupVisibleCar=true;
              this.slots=[{
                defaultIndex:0,
                flex: 1,
                values: this.myCarList,//职业类型
                textAlign: 'center'
              }];  
            }
            
          },
          maxFont: function(){
            this.remark=this.remark.substring(0, 200)
          },
          order: function(){
            let reqData = {}
            if(this.servertype==0){
              reqData = {
                carvid: this.carvid,
                date: this.date+' '+this.time,
                buyname: this.name,
                buymobile: this.phone,
                remark: this.remark,
                time: this.time,
                orderDate: this.date
              }
            }else{
              reqData = {
                carvid: this.carvid,
                orderDay: this.date+" "+this.time,
                project: this.project,
                date: this.date,
                time: this.time,
                carNo: this.carNo,
                name: this.name,
                phone: this.phone,
                remark: this.remark
              }
            }
            this.$emit('gainReqData',reqData)
          }
        }
    }

</script>

<style lang="scss" scoped>
.appoint-wrap{
  width: 100%;
}
.big_rightArrow {
  width: 0.16rem;
  height: 0.3rem;
}
.footer {
  margin-top: 0.26rem;
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
.setFont{
  font-size: .28rem;
  vertical-align: middle;
}
.footer_footer {
  width:100%;
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