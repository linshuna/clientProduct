<template> 
  <div class="list">
    <div v-if="reportList&&reportList.length!=0">
      <p class="clearFloat">
        <span class="fl">项目名称</span>
        <span class="fr">检测结果</span>
      </p>
      <ul class="projectList">
        <li v-for="(checkItem,index) in reportList">
          <p class="clearFloat">
            <span class="fl">{{checkItem.name}}</span>
            <span class="fr">{{checkItem.status==0?'不良':'正常'}}</span>
          </p>
        </li>
      </ul>
      <ul class="projectList">
        <li>结论：{{remark}}</li>
      </ul>
    </div>
    
    <template v-else>
      <no-data-tip :tipData="{typeTipe:0,titleTip:'检测报告',conTip:'暂无检测报告'}"></no-data-tip>
    </template>
    
  </div>
</template>

<script>
  import noDataTip from '@/components/noDataTip'
  import {check} from '@/utils/api.js'
  export default {
    data() {
      return {
        reportList: null,
        remark: '',
        orderNo: ''
      }
    },
    mounted() {
      this.orderNo = this.$route.params.orderNo
      this.init();
    },
    components:{
      'no-data-tip':noDataTip
    },
    methods: {
      init: function(){
        check({orderNo: this.orderNo}).then(res=>{
            this.reportList = res.check;
            this.remark = res.remark;
        })
        // this.$http.get('/api.php/TechRecord/check?orderNo='+this.orderNo)
        //   .then(response=>{
        //     let res = response.data;
        //     if(res.errorCode == 200){
        //       this.reportList = res.data.check;
        //       this.remark = res.data.remark;
        //     }else{
        //       Toast(res.message)
        //     }
        //   })
        //   .catch(err=>{Toast(err)})
      }
    }
  }  
</script>

<style lang="scss" scoped>
  .list{
    width: 100%;
    font-size: .32rem;
    padding: 0 .2rem;
    box-sizing: border-box;
    padding-top: .2rem;
  }
    
  .projectList{
    width: 100%;
    color: gray;
    li{
      line-height: .7rem;
      margin-top: 0;
      padding: 0;
      .quotedMsg{
        .smallFont{
          padding:0 .1rem;
        }
        .orangeColor{
          font-size: .28rem;
          color: #FA9E15;
        }
          
      }
        
    }
      
  }

    
</style>
