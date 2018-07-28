<template>
  <div class="recharge-wrap mask">
    <div class="customerTitle border-bottom-1px">
      <div class="clearFloat">
        <span class="fl">{{clientMsg.uname}}</span>
        <span class="fr">{{clientMsg.phone}}</span>
      </div>
      <p>优惠</p>
    </div>
    <ul class="recharge-list">
      <li v-for="item in rechargeList" @click.stop="recharge(item)" :class="{'action':item.active}">
        <p>{{item.price}}元</p>
        <p>送{{item.numbers}}积分</p>
      </li>
    </ul>
    <div class="btn-wrap">
      <button @click.stop="pay">确认充值</button>
    </div>
  </div>
</template>
<script>
  
  import {
    recharge,//充值优惠
    payRecharge//充值接口
  } from '@/utils/api.js'
  import {MessageBox} from 'mint-ui'
  export default {
    data(){
      return {
        clientvid:'',
        clientMsg:{},
        rechargeList:[],
        activeItem: {}
      }
    },
    created() {
      let getStorage = this.$store.getters.getStorage;
      this.clientvid = getStorage?getStorage.vid:''
    },
    mounted() {
      this.$nextTick(function(){
        this.init();//获取客户信息
      })
    },
    methods:{
      init: function(){
        recharge({clientvid: this.clientvid}).then(res=>{
          this.clientMsg = res.client;
          this.rechargeList = res.wallet;
          this.rechargeList.map((item,index) => {
            this.$set(this.rechargeList[index],"active",false)
          })
        })
      },
      recharge: function(reItem){
        this.activeItem = {}
        this.rechargeList.map((item,index) => {
          this.$set(this.rechargeList[index],'active',false)
          if(reItem.price == item.price){
            this.$set(this.rechargeList[index],'active',true)
            this.activeItem = reItem;
          }
        })
      },
      pay: function(){
        if(!this.activeItem.id){
          this.$store.commit('showToast','请选择充值类型')
          return false;
        }
        MessageBox.confirm('是否确认充值','').then(action => {
          payRecharge({id: this.activeItem.id,clientvid: this.clientvid}).then(res=>{
            if(res&&!res.errorCode){
              this.$store.commit('showToast','充值成功')
              this.$store.commit('delay',{url:'/UserCenter',$router: this.$router})
            }
          })  
        }).catch(()=>{})
        
      }
    }
  }
</script>
<style lang="scss" scoped>
  .recharge-wrap{
    width: 100%;
    min-height: 100%;
    background: #fff;
    .customerTitle{
      margin-top: .4rem;
      width:100%;
      padding:0 .3rem;
      padding-bottom: .2rem;
      box-sizing: border-box;
      line-height: .45rem;
    }
    .recharge-list{
      width: 100%;
      display: flex;
      flex: 1;  
      flex-wrap: wrap; 
      li{
        width: 25%;
        margin:0 4%;
        text-align:center;
        background: #f4f4f4;
        color: gray;
        padding: .2rem 0;
        margin-top: .3rem;
      }
      .action{
        background: #fa9e15;
        color: #fff;
      }
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
      button{
        display: inline-block;
        width: 100%;
        height: 0.72rem;
        background-color: #fa9e15;
        color: #fff;
        font-size: .28rem;
        vertical-align: top;
      }
    }
  }
</style>