<template>
  <div>
    <div class="couponList">
      <div class="noDataTip">
        <img :src="typeTip==1?noneCouponTipIcon:noneOrderTipIcon" alt="">
        <p :class="{'grayColor':typeTip==1,'orangeColor':typeTip==0}">{{conTip}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props:{
    'tipData':{type: Object}
  },
  data(){
    return {
      selected: '未使用',
      searchValue:'',
      noneCouponTipIcon:require("../assets/images/noneCouponTipIcon.png"),
      noneOrderTipIcon: require("../assets/images/noData-order.png"),
      typeTip:'',
      conTip:''
    }
  },
  mounted: function(){
    this.$nextTick(function(){
      let gainTipeData = this.tipData;
      this.typeTip = gainTipeData.typeTip;
      this.conTip = gainTipeData.conTip
      
    })
  },
  methods:{

    
  }
}
</script>

<style lang="scss" scoped>
  .grayColor {
    font-size: .24rem;
    color: #bfbfbf;
  }
    
  .orangeColor{
    font-size: .24rem;  
    color: #fa9e15;
  }
    
  .couponList{
    margin-top: .9rem;
    .noDataTip{
      width: 100%;
      text-align: center;
      font-size: .28rem;
      padding-top: 1rem;
      color: #fa9e15;
      img{
        display: inline-block;
        width: 2.5rem;
      }
      p{
        margin-top: .35rem;
      }
        
    }
      
  }
    

</style>



