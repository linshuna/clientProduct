<template>
  <div>
    <mt-popup class="modal-type" v-model="popupVisible" popup-transition="popup-fade" position="right" :closeOnClickModal="false">
      <div class="title">{{title}}</div>
      <div class="list" v-for="(item,index) in showData">
        <template v-if="servertype==2">
          <div class="item" @click="select(index,item)"  :class="{'active':item.active,'grayBg':!item.isNoOrder}">
            {{item.name}}
          </div>
        </template>
        <template v-else>
          <div class="item" @click="select(index,item)"  :class="{'active':item.active}">
            {{item.name}}
          </div>
        </template>
      </div>
      <div class="btn-wrapper">
        <div class="btn reset" @click="resetTime">重置</div>
        <div class="btn confirm" @click="confirmSelectTime">确定</div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
    export default {
      props:{
        'popupVisible':{type: Boolean},
        'title':{type: String},
        'showData':{type: Array},
        'initNum':{type: Number},
        'servertype': {type: String}
      },
      data(){
        return {
          checkedData: {},
          project: []
        }
      },
      created() {
      },
      watch:{
        showData: function(newVal,oldVal){
          console.log(this.servertype)
          if(this.servertype==2){//时间选择
            this.checkedData = newVal[this.initNum]
          }
        }
      },
      methods: {
        resetTime() {
          this.clear();//重置清空
        },
        confirmSelectTime() {
          if(this.servertype==2){
            this.$emit('gainData',this.checkedData)
          }else if(this.servertype==1){
            this.project = this.showData
            this.$emit('gainData',this.project)
          }else{
            
            this.$emit('gainData',this.checkedData)
          }
          this.$emit('update:popupVisible',false)
        },
        select(index,value) {         
          if(this.servertype==1){//服务类型
          console.log(this.showData)
            this.showData.map((item,index)=>{
              if(value.id==item.id){
                this.$set(this.showData[index],'active',!item.active)
              }
            })
          }else{//洗车服务和时间
            
            this.clear();//重置清空
            this.$set(this.showData[index],'active',true)
          }
          this.checkedData = value;
        },
        clear: function(){//清空
          this.showData.map((item,ind)=>{
            this.$set(this.showData[ind],'active',false)
          })
        }
      }
    }
</script>
<style lang="scss" scoped>
.grayBg{
  color: gray!important;
  background: #bdbdbd!important;
}
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
       
    .title{
      height: 1rem;
      line-height: 1rem;
      font-size: .36rem;
      text-align: center;
    }
    .item{
      width: 25%;
      height: .56rem;
      line-height: .56rem;
      float: left;
      margin: .2rem;
      font-size: .24rem;
      text-align: center;
      background: #eee;
    }     
    .active{
      color: #fff;
      background: #fa9e15;
    }
    .btn-wrapper{
      position: fixed;
      bottom: 0;
      width:100%;
      height: .8rem;
      .btn{
        width: 50%;
        height: .8rem;
        line-height: .8rem;
        float: left ;
        text-align: center;
      }
      .reset{
        color: #fff;
        background: #fbbb5b;
        left: 0;
      }
      .confirm{
        color: #fff;
        background: #fa9e15;
        right:0;
      }
    }
</style>