<template>
  <div class="tech-list-wrap mask"> 
    <template v-if="!techList||techList.length==0">
        <no-data-tip :tipData="{typeTipe:0,titleTip:'找师傅',conTip:'暂时无法找到师傅'}"></no-data-tip>
    </template>
    <template v-else>
      <ul class="tech-list">
        <li v-for="(item,index) in techList" :class="{'border-bottom-1px':index+1!=techList.length}">
          <div class="left">
            <div class="headerImg"><img :src="item.headimg" alt="头像"/></div>
            <div class="techMsg">
              <p>{{item.nickname}}</p>
              <p>{{item.store_name}}</p>
            </div>
          </div>
          <a :href="'tel:'+item.phone">
            <img src="../../../assets/images/phoneIcon.png" class="phoneIcon"/>
          </a>
          
        </li>
      </ul>
    </template>
    
  </div>
</template>
<script>
  import noDataTip from '@/components/noDataTip'
  import {findTecherList} from '@/utils/api.js'
  export default {
    data(){
      return{
        techList: []
      }
    },
    components:{
      'no-data-tip':noDataTip
    },
    created() {
      this.init();
    },
    methods:{
      init: function(){
        findTecherList().then(res=>{
          this.techList = res;
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tech-list-wrap{
    width:100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .tech-list{
    width: 100%;
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 1rem;
      background: #fff;
      height: 1.7rem;
      width:100%;
      padding: 0 .2rem;
      padding-right: .4rem;
      box-sizing: broder-box;
      .left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .headerImg{
          width: 1rem;
          height: 1rem;
          img{
            width:100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .techMsg{
          padding-left: .4rem;
          p{
            line-height: .45rem;
          }
        }
      }
      
      .phoneIcon{
        display: flex;
        justify-content: space-between;
        align-items: end;
        width: .45rem;
      }
    }
  }
</style>