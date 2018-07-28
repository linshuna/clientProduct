<template> 
  <div class="list">
    <ul>
      <li class="border-bottom-1px">车主</li>
      <li>姓名：{{user.uname}}</li>
      <li>联系电话：{{user.phone}}</li>
      <li>车辆：{{user.carNo}}</li>
    </ul>
    <ul class="setPadding">
      <li class="border-bottom-1px">维护技师</li>
      <li>姓名：{{tech.nickname}}</li>
      <li>联系电话：{{tech.phone}}</li>
      <li>接待时间：{{tech.gettime}}</li>
      <li>进店里程：{{tech.distance}}</li>
      <li>油量：{{tech.oid}}</li>
    </ul>
    <div class="setPadding" v-if="reck&&reck.length!=0">
      <ul>
        <li class="border-bottom-1px">服务项目</li>
        <li v-for="(item,index) in reck">
          <span>{{item.name}}</span>
        </li>
      </ul>
      
    </div>
    <div class="setPadding" v-if="science&&science.length!=0" >
      <ul> 
        <li class="border-bottom-1px">配件</li>
        <li class="clearFloat" v-for="(item,index) in science">
          <span class="fl">{{item.name}}</span>
          <span class="fr">
            <span class="orangeColor">{{item.price | priceFilter}}</span> 
            <span>{{item.num | numFilter}}</span> 
          </span>
        </li>        
      </ul>
      
    </div>
    <div class="setPadding" v-if="line&&line.length!=0" >
      <ul> 
        <li class="border-bottom-1px">线上商品</li>
        <li class="clearFloat" v-for="(item,index) in line">
          <span class="fl">{{item.name}}</span>
          <span class="fr">
            <span class="orangeColor">{{item.price | priceFilter}}</span> 
            <span>{{item.number | numFilter}}</span> 
          </span>
        </li>        
      </ul>
      
    </div>
    <ul class="setPadding">
      <li>
        结算金额：
       <span class="orangeColor">{{user.money | priceFilter}}(不含线上商品)</span>
      </li>
    </ul>
    <div class="setBtn" v-if="status" @click.stop="pay">
      <button>确认结算</button>
    </div>
    <!--遮罩层-->
    <div class="checked-mask" v-if="showPay"> 
      <div class="set-position">
        <template v-for="(listItem,listIndex) in options">
          <div class="set-inline-block clearFloat" :class="{'border-bottom-1px':listIndex+1!=options.length}">
          <!--:checked="listIndex==0?true:false"-->
            <input :disabled="listItem.value==3?true:false" type="radio" :name="'checked'+listIndex" :value="listItem.label" @change="check(listItem.value,listItem.label)" class="fr" :class="{'gray':listItem.value==3}">
            <label :for="'checked'+listItem.value" class="fl">{{listItem.label}}</label> 
          </div>
        </template>
        <div class="delIcon" @click.stop="showPay=false"></div> 
      </div>
      
    </div>
  </div>
</template>

<script>
  import {orderDetail,pays} from '@/utils/api.js'
  export default {
    data() {
      return {
        clientvid:'',
        orderNo: '',
        status:'',
        user: null,
        tech: null,
        reck: null,
        science: null,
        line:null,
        payType:'',//支付的方式
        showPay:false,//支付的隐藏
        options:[{
            label: '余额支付',
            value: '1'
          },
          {
            label: '活动金额支付',
            value: '2',
            disabled: true
          },
          {
            label: '微信支付',
            value: '3',
            disabled: true
          }]
      }
    },
    mounted() {
      let getStorage = this.$store.getters.getStorage;
      this.clientvid = getStorage?getStorage.vid:''
      let gainData = this.$route.params.gainData;
      gainData = gainData?JSON.parse(gainData):''
      this.orderNo = gainData?gainData.orderNo:'';
      this.status = gainData&&gainData.status==2?gainData.status:''
      this.init();
    },
    filters:{
      priceFilter: function(value){
        if(!value||value==0) return '￥0';
          else return '￥'+value;
      },
      numFilter: function(value){
        if(!value||value==0) return 'x0';
          else return 'x'+value;
      }
    },
    methods: {
      init: function(){
        orderDetail({orderNo: this.orderNo}).then(res=>{
          this.user = res.user;
          this.tech = res.tech;
          this.reck = res.reck;
          this.science = res.science;
          this.line = res.line;
        })
 
      },
      check: function(id,label){
        let _this = this;
        this.options.map((item,index)=>{
          if(item.value == id){
            this.payType = id;
            console.log('支付方式：'+id)
            setTimeout(function(){
              _this.showPay = false;
            },2000)
          }
        })
        pays({orderNo: this.orderNo,type:this.payType,clientvid:this.clientvid}).then(res=>{
          if(res&&!res.errorCode){
            this.$store.commit('showToast','支付成功')
            this.$store.commit('delay',{url:'/UserCenter/CarCountList',$router:this.$router})
          }
            
        })
      },
      pay:function(){
        this.showPay = true
      }
    }
  }  
</script>

<style lang="scss" scoped>  
  .gray{
    background: #999!important;
  }
  input[type="radio"] {
    -moz-appearance: button;
    /* Firefox */
    -webkit-appearance: button;
    border: 1px solid #999;
    /* Safari 和 Chrome */
    display: inline-block;
    outline: none;
    height: 0.45rem;
    width: 0.45rem;
    margin-bottom: 1px;
    vertical-align: middle;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
  }

  input[type="radio"]:checked {
    display: inline-block;
    background: url('../../assets/images/rightIcon.png')no-repeat;
    height: .45rem;
    width: 0.45rem;
    margin-bottom: 1px;
    vertical-align: middle;
    border: 1px solid #fa9e15 ;
    border-radius: 50%;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
  }
  .checked-mask{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: rgba(0,0,0,.3);
  }
  .set-position{
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radio: 5px;
    background: #ffffff;
    padding: 0 .2rem;
  }
  .set-inline-block{
    position: relative;
    height: .7rem;
    line-height: .7rem;
  }
  
  .list{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    font-size: .32rem;
    padding-top: .2rem;
    background: #f4f4f4;
    padding-bottom: 2rem;
  }
    
  .orangeColor{
    color: #fa9e15; 
    padding: 0 .1rem;  
  }
    
  .setPadding{
    margin-top: .2rem; 
  }
    
  p{
    line-height: .6rem;
  }
    
  ul{
    background: #fff; 
    width: 100%;
    padding: 0 .1rem;
    box-sizing: border-box;
    li{
      line-height: .7rem;
      margin-top: 0;
      padding: 0;
    }
      
  }
    
  .setBtn{
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: .8rem;
    line-height: .8rem;
    font-size: 0;
    button{
      width: 100%;
      display: inline-block  ; 
      font-size: .32rem;
      color: #fff;
      background: #fa9e15!important  ;
      box-sizing: border-box;
      height:100% ;
      border: none;
    }
      
  }
    
 .delIcon{
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translate(-50%,0);
    width: 25px !important;
    height: 25px;
    z-index: 999;
    background: rgba(0, 0, 0, 0.2) !important;
  }
  .delIcon::before,.delIcon::after{
    left: 5px;
    width: 60%!important;
  }   
</style>
