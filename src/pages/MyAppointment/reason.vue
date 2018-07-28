<template>
  <div class="cancel-wrap">
    <mt-radio align="right" title="" v-model="value" :options="options"></mt-radio>
    <div class="btn" @click="handleConfirm">确定</div>
  </div>
</template>

<script>
  import { Toast,MessageBox } from 'mint-ui'
  //cancelReason
  import {cancelReason,cancelOrder} from '@/utils/api.js'
  export default {
    name: 'App',
    data () {
      return {
        data: '',
        options: [],
        value: '',
        reasonId:'',
        vid: ''
      }
    },
    methods: {
      handleConfirm() {
        if(!this.reasonId){
          Toast('请选择取消预约原因')
          return
        }
        let _this = this;
        MessageBox.confirm('是否确定取消该订单','').then(action => { 
          cancelOrder({vid: this.vid,typeid: this.reasonId})
            .then((res)=>{
              
                Toast('取消预约成功')
                
                setTimeout(function(){
                  _this.$router.push({path:'/UserCenter/MyAppointment/MyAppointmentIndex'})
                },1000)
              
            })
            .catch((err)=>{Toast(err)})
        })
        .catch(()=>{})
        
      }
    },
    watch: {
      'value'(newVal) {
        this.data.forEach((item,index)=>{
          if(newVal ===item.reason){
            this.reasonId = item.typeid
          }
        })
      }
    },
    created() {
      this.vid = this.$route.params.vid;
      cancelReason()
      .then((res)=>{
        this.data = res
        this.data.forEach((item,index)=>{
          this.options.push(item.reason)
        })

      })

    }
  }
</script>

<style lang="scss" scoped>
  
  .cancel-wrap >>> .mint-radiolist-title{
    margin: 0;
  }
      
  .cancel-wrap >>> .mint-cell{
    background: none;
  }
      
  .cancel-wrap >>> .mint-cell-wrapper{
    background: none;
  }
      
  .cancel-wrap >>> .mint-cell-wrapper{
    border-bottom: 1px solid #e8e8e8;
  }
      

  .cancel-wrap{
    color: #2c3e50;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    .btn{
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      color: #fff;
      background: #fa9e15;
    }
      
  }
    
</style>
