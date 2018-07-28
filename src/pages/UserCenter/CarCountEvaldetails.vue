<template>
  <div>
    <ul class="evaldetail-list">
      <li>
        <p class="title clearFloat border-bottom-1px">
          <span class="fl">
            <span>店铺服务评价</span>
          </span>
          
          <span class="grayColor fr">满意请给5星哦</span>
        </p>
        <ul class="start-list">
          <li>
            <span>服务态度</span>
            <template>
              <checked-start :checkedNum="reqData.attitudescore" type="attitudescore" @gainStart="gainStart"></checked-start>
            </template>
          </li>
          <li>
            <span>服务质量</span>
            <template>
              <checked-start :checkedNum="reqData.servicescore" type="servicescore" @gainStart="gainStart"></checked-start>
            </template>
          </li>
          <li>
            <span>技术娴熟</span>
            <template>
              <checked-start :checkedNum="reqData.techscore" type="techscore" @gainStart="gainStart"></checked-start>
            </template>
          </li>
          <li>
            <span>门店环境</span>
            <template>
              <checked-start :checkedNum="reqData.aroundscore" type="aroundscore" @gainStart="gainStart"></checked-start>
            </template>
          </li>
          <li>
            <span>价格实惠</span>
            <template>
              <checked-start ref="pricescore"  :checkedNum.sync="reqData.pricescore" type="pricescore" @gainStart="gainStart"></checked-start>
            </template>
          </li>
        </ul>
      </li>
      <li>
        <p class="title border-bottom-1px">是否会推荐好友</p>
        <mt-radio
          align="right"
          v-model="reqData.is_invite"
          :options="options" >
        </mt-radio>
      </li>
      <li>
        <p class="title border-bottom-1px">下次是否会在次光临</p>
        <mt-radio
          align="right"
          v-model="reqData.is_again"
          :options="options" >
        </mt-radio>
      </li>
      <li>
        <p class="title border-bottom-1px">您还有什么好的建议反馈？</p>
        <textarea class="remark" name="" placeholder="请输入备注，最多200字" v-model="reqData.message" maxlength="50" @change="maxFont" @keydown="maxFont" @keyup="maxFont"></textarea>
        
      </li>
    </ul>
    <button @click="save" v-if="isRecomment==0">提交点评</button>
  </div>
</template>
<script>
  import {score} from "mixins";
  import {evaldetails,evaluatestores} from '@/utils/api.js'
  import checkedStart from '@/components/checkedStart'
  export default {
    mixins: [score],
    data(){
      return {
        isRecomment:0,//1是查看点评，0是提交点评
        orderNo:'',
        reqData:{
          // orderNo: '',
          attitudescore: 5,
          servicescore: 5,
          techscore: 5,
          aroundscore: 5,
          pricescore: 5,
          is_invite: '1',
          is_again: '1',
          message: ''
        },
        options: [{
          label: '会',
          value: '1'
        },{
          label: '不一定',
          value: '2'
        },{
          label: '不会',
          value: '3'
        },]
      }
    },
    components:{
      'checked-start': checkedStart
    },
    created() {
      let gainData = this.$route.params.gainData;
      if(gainData){
          gainData = JSON.parse(gainData);
          this.orderNo = gainData.orderNo
          this.isRecomment = gainData.isRecomment;
          if(this.isRecomment==1){
            this.init();//初始化
          }else{
            this.reqData = { //点评的时候，初始化数据
              orderNo:'',
              attitudescore: 5,
              servicescore: 5,
              techscore: 5,
              aroundscore: 5,
              pricescore: 5,
              is_invite: '1',
              is_again: '1',
              message: ''
            }
          }
      } 
    },
    mounted() {
      this.$nextTick(function(){
        
        
      })
    },
    methods:{
      init: function(){
        evaldetails({orderNo: this.orderNo}).then(res=>{
          
          this.reqData = {
            attitudescore: res.attitudescore -0,
            servicescore: res.servicescore-0,
            techscore: res.techscore-0,
            aroundscore: res.aroundscore-0,
            pricescore: res.pricescore-0,
            is_invite: res.is_invite,
            is_again: res.is_again,
            message: res.message
          }

        })
      },
      maxFont: function(){
        this.reqData.message=this.reqData.message.substring(0, 200)
      },
      gainStart: function(value){
        this.reqData[value.type] = value.num
      },
      save: function(){
        this.reqData.orderNo = this.orderNo
        evaluatestores(this.reqData).then(res=>{
          if(res&&!res.errorCode){
            this.$store.commit('showToast','点评成功')
            this.$store.commit('delay',{url:'/UserCenter/CarCountList',$router:this.$router})
          }
        })
      }
    }
  } 
</script>
<style lang="scss" scoped>
  .evaldetail-list{
    width:100%;
    min-height: 100%;
    padding-bottom: 2rem;
    background: #f5f5f5;
    padding-top: .2rem;
    li{
      width: 100%;
      padding: 0 .2rem;
      box-sizing: border-box;
      font-size: .26rem;
      color: #979797;
      margin-bottom: .2rem;
      background: #fff;
    }
  }
  .grayColor{
    color: #c7c7c7;
    font-size: .24rem;
  }
  .title{
    height: .7rem;
    line-height: .7rem;
    color: #4a4a4a;
    font-size: .28rem;
  }
  .start-list{
    width: 100%;
    li{
      line-height: .7rem;
      width: 100%;
      padding: 0 .3rem;
      box-sizing: border-box;
    }
    span{
      display: inline-block;
      margin-right: .5rem;
    }
  }
  button{
    width: 100%;
    height: .7rem;
    line-height: .7rem;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #fff;
    font-size: .28rem;
    background: #fa9e15;
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
    margin: .2rem 0; 
  }  
  
</style>
<style>
.mint-radio-input:checked + .mint-radio-core{
  background-color: transparent!important;
  border-color: #fa9e15!important;
}
.mint-radio-core::after{
  background-color: #fa9e15!important;
}
.mint-cell-wrapper{
  background: transparent!important;
}
</style>