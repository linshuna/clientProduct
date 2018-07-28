<template>
  <div id="carDetailMsgWrap" class="set-tab-default">
    <div class="carDetailMsg">
      <mt-tabbar v-model="selected" fixed>  
        <mt-tab-item id="全部">  
          全部  
        </mt-tab-item>  
        <mt-tab-item id="待结算">  
          待结算 
        </mt-tab-item>   
        <mt-tab-item id="已完成">  
          已完成  
        </mt-tab-item>  
      </mt-tabbar>  
      <div class="tabCon" v-if="getStorage" style="padding-bottom:1.5rem;">
        <mt-tab-container class="page-tabbar-container" v-model="selected">  
          <mt-tab-container-item id="全部"> 
            <template v-if="!allList||allList.length==0">
               <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无预约单记录'}"></no-data-tip>
            </template> 
            <div class="carStatelist" v-else>
              <ul>
                <li class="border-bottom-1px" v-for="(item,index) in allList" @click.stop="lookReport(item.orderNo,item.status)">
                  <img :src="item.icon" alt="" class="leftIconList">
                  <div class="rightList">
                    <p class="clearFloat">
                      <span class="fl setCarnoFont">{{item.carNo}}</span>
                      <span class="orangeColor fr setTitleFont">
                        {{(item.status==2?'待结算':(item.status==3?'已结算':(item.status==4?'已完成':'待定'))) }}</span>
                    </p>
                    <p class="clearFloat">
                      <span class="grayColor fl">{{item.uname}}</span> 
                      <span class="blueColor fr" v-if="item.status!=0">{{item.money | priceFilter}}</span>
                    </p>
                    
                    
                    <p class="clearFloat" v-if="item.status==2">
                      <span class="changeDrive fr">
                        <button>确认结算</button>
                      </span>
                    </p>
                    
                    <p v-if="item.status!=0">
                      <span class="grayColor">{{item.project | noDataTipFilter}}</span> 
                    </p>
                    
                  </div>
                </li>
              </ul>
            </div>
            
          </mt-tab-container-item>  
          <mt-tab-container-item id="待结算">
            <template v-if="!finishList||finishList.length==0">
               <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无预约单记录'}"></no-data-tip>
            </template>  
            <template v-else>
              <div class="carStatelist">
                <ul>
                  <li class="border-bottom-1px" v-for="(item,index) in finishList" @click.stop="lookReport(item.orderNo,item.status)">
                    <img :src="item.icon" alt="" class="leftIconList">
                    <div class="rightList">
                      <p class="clearFloat">
                        <span class="fl setCarnoFont">{{item.carNo}}</span>
                        <span class="orangeColor fr setTitleFont">待结算</span>
                      </p>
                      <p class="grayColor">{{item.uname}}</p>
                      <p class="clearFloat">
                        <span class="grayColor fl">{{item.project | noDataTipFilter}}</span> 
                        <p class="clearFloat">
                          <span class="changeDrive fr">
                            <button>确认结算</button>
                          </span>
                        </p>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </template>
            
          </mt-tab-container-item>  
          <mt-tab-container-item id="已完成"> 
            <template v-if="!visitList||visitList.length==0">
               <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无预约单记录'}"></no-data-tip>
            </template> 
            <template v-else>
              <div class="carStatelist">
                <ul>
                  <li class="border-bottom-1px" v-for="(item,index) in visitList" @click.stop="lookReport(item.orderNo,item.status)">
                    <img :src="item.icon" alt="" class="leftIconList">
                    <div class="rightList">
                      <p class="clearFloat">
                        <span class="fl setCarnoFont">{{item.carNo}}</span>
                        <span class="orangeColor fr setTitleFont">已完成</span>
                      </p>
                      <p class="clearFloat">
                        <span class="grayColor fl">{{item.uname}}</span> 
                        <span class="blueColor fr">{{item.money | priceFilter}}</span>
                      </p>
                      <p class="grayColor">
                        {{item.project | noDataTipFilter}}
                      </p>
                      <p class="clearFloat">
                        <span class="changeDrive fr">
                          <button @click.stop="hasEvaluate(item.orderNo,item.isRecomment)">
                            <span v-if="item.isRecomment==0">立即点评</span>
                            <span v-else>查看点评</span>
                          </button>
                          <button @click.stop="hasReport(item.orderNo)">检测报告</button>
                          <!--<button @click.stop="saveReport(item.orderNo)" v-if="item.isvisit!=1">提交回访</button>-->
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </template>
             
          </mt-tab-container-item>  
        </mt-tab-container>  
      </div>
    </div>
     
  <router-view></router-view>
  </div>
</template>

<script>
  import noDataTip from '@/components/noDataTip'
  import {carCountList} from '@/utils/api.js'
export default {
  name: 'CarCountList',
  data(){
    return {
      clientvid: '',
      selected: '全部',
      searchValue:'',
      // defaultIcon:require("modules/images/defaultLogo.png"),
      rightArrowIcon:require("../../assets/images/rightArrow.png"),
      techvid: null,
      allList: null,//全部
      finishList: null,//已结账
      visitList: null //回访录
    }
  },
  mounted: function(){
    this.clientvid = this.getStorage?this.getStorage.vid:''
    this.$nextTick(function(){
      let gainTecherData = this.getStorage;
      if(gainTecherData){
        this.techvid = gainTecherData.vid;
        this.init();//初始化
      }
    })
  },
  filters:{
    noDataTipFilter:function(value){
      if(!value) return '暂无';
        else return value;
    },
    priceFilter:function(value){
      if(!value||value==0) return '￥0';
        else return '￥'+value;
    }
  },
  components:{
    'no-data-tip':noDataTip
  },
  computed:{
      getStorage(){
        return this.$store.getters.getStorage;
      }
  },
  methods:{
    init:function(){
     carCountList({clientvid: this.clientvid}).then(res=>{
       this.allList = res.all;//全部
       this.finishList = res.finish;//待结算
       this.visitList = res.visit;//已完成
     })
    },
    hasOrder: function(carvid,clientvid,orderNo){//立即接车
      this.$http.post('/api.php/TechMeet/hasOrder',{carvid:carvid,clientvid:clientvid,serviceorder:orderNo,techvid:this.techvid})
          .then((response)=>{
            let res = response.data
            if(res.errorCode == 200){
              let instance = Toast(res.message)
              setTimeout(() => {
                instance.close()
                // window.location.href= `pickupOrder.html?carvid=${carvid}&clientvid=${clientvid}&orderNo=${res.data.orderNo}#/path`
              }, 2000)
              this.init()
            }else{
              Toast(res.message)
            }
          })
          .catch((err)=>{
            Toast(err)
          })
    },
    cancelOrder: function(vid){
      window.location.href = 'reason.html?vid='+vid
    },
    lookOrder: function(item){
      let url = ''
      if(item.status==0) {
        url = 'pickupInfo.html?carvid='+item.carvid+'&clientvid='+item.clientvid+'#/type3'
      }else{
        url = 'pickupOrder.html?carno='+item.carNo+'&carvid='+item.carvid+'&clientvid='+item.clientvid+'&orderNo='+item.orderNo+'#/path'
      }
      window.location.href = url
    },
    hasAccount: function(orderNo){//确认结算
      // pays().then(res=>{

      // })
    },
    hasConfirmation: function(orderNo){//确认提车
      this.$http.post('/api.php/TechService/makesure',{orderNo:orderNo})
      .then((response)=>{
        let res = response.data;
        if(res.errorCode == 200){
          Toast('已确认提车')
          this.init()
        }else{
          Toast(res.message)
        }
      })
      .catch((err)=>{Toast(err)})
    },
    hasReport: function(orderNo){//检测报告
      // window.location.href = "hasReportDetail.html?orderNo="+orderNo
      this.$router.push({path:'/UserCenter/CarHasReportDetail/'+orderNo})
    },
    hasEvaluate: function(orderNo,isRecomment){//查看点评
      let gainData = JSON.stringify({orderNo: orderNo,isRecomment: isRecomment})
      this.$router.push({path:'/UserCenter/CarCountEvaldetails/'+gainData})
    },
    saveReport: function(orderNo){
      window.location.href = "saveReportDetail.html?orderNo="+orderNo
    },
    lookReport: function(orderNo,status){
      //跳到回访页面
      // window.location.href = "lookReportDetail.html?orderNo="+orderNo
      let gainData = JSON.stringify({
        orderNo: orderNo,
        status: status
      })
      this.$router.push({path: '/UserCenter/CarCountDetail/'+gainData})
    }
    
  }
}
</script>
<style lang="scss" scoped>
.carDetailMsg{
  .mint-tab-item-label{
    line-height: .7rem!important;
  }
  .is-selected{
    border-bottom: 3px solid #FA9E15!important;
  }  
}

</style>
<style lang="scss" scoped>

  .changeDrive{
    position: absolute;
    bottom: .3rem;
    right: .4rem;
    button {
      display: inline-block;
      background: #FA9E15;
      color: #ffffff;
      border: none;
      font-size: .28rem;
      border-radius: 4px;
      line-height: 0.54rem;
      padding: 0 .2rem;
    }
  }

  .grayColor {
    font-size: .28rem;
    color: #bfbfbf  ;
  }
  .blueColor{
    font-size: .32rem;
    color: skyblue  ;
  }
    
  .setTitleFont{
    font-size: .28rem ; 
  }
    
  #carDetailMsgWrap{
    width: 100%;
    font-size: .28rem;
    position: absolute;
    left: 0;
    top: 0;
    background: #f5f5f5;
    min-height: 100%;
    .mint-tabbar{
      height: .7rem;
      top: 0;
      backgound-image: none;
      background:#ffffff;
      border-bottom: 1px solid #efefef;
    }
      
    .is-selected{
      background: transparent;
      border-bottom: 1px solid #FA9E15;
      color: #FA9E15;
    }
      
    .mint-tab-item{
      height: .7rem;
      line-height: .7rem;
      padding: 0  ;
      .mint-tab-item-label{
        display: inline-block;
        line-height: .7rem!important;
      }
        
    }
      
  }
    
    .tabCon  {
       width: 100%;
      .carStatelist{
        margin-top: .7rem;
        ul{
          width: 100%;
          padding-left: .32rem;
          box-sizing: border-box;
          background: #ffffff;
          li{
            width: 100%;
            padding: .32rem 0;
            position: relative;
            .leftIconList{
              display: inline-block;
              width: .8rem;
              height: .8rem;
              vertical-align: middle;
              padding-right: .32rem;
            }
              
            .rightList >>> .setCarnoFont{
              font-size: .32rem; 
              color: #FA9E15;
            }
              
            .rightList >>> p:nth-child(1){
              font-size: 0.32rem ; 
            }
              
            .rightList{
              display: inline-block;
              padding-right: .32rem;
              width: 80%;
              box-sizing: border-box;
              vertical-align: middle;
              p{
                 width: 100%;
                line-height: .5rem;
                text-align: left ;
                .orangeColor{
                  font-size: .32rem;
                  color: #FA9E15 ;
                }
                  
              }
               
            }
               
          }
            
        }
          
          
      }
         
        
    }
     
                


</style>



