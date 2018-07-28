<template>
  <div class="start-wrap">
    <input type="checkbox" :class="{'start':!item.checked,'checked':item.checked}" v-for="(item,index) in startList" @click="change(item,index)" :value="index+1" v-model="serverChecked"/>
  </div>
</template>
<script>
import {score} from "mixins";
  import {evaldetails,evaluatestores} from '@/utils/api.js'
  export default {
    mixins: [score],
    props:{
      type: {type: String},
      checkedNum: {type: Number}
    },
    data(){
      return {
        serverChecked:  [],
        startList:[{
          'checked': false,
        },{
          'checked': false,
        },{
          'checked': false,
        },{
          'checked': false,
        },{
          'checked': false,
        }]
      }
    },
    watch:{
      checkedNum:function(newVal,oldVal){
        this.checkedNum = newVal;
        this.clear();
        console.log(this.checkedNum)
        this.startList.map((item,index)=>{
          
          if(index<newVal){
            this.$set(this.startList[index],'checked',true)
          }else{
            this.$set(this.startList[index],'checked',false)
          }
        })
      }
    },
    mounted() {
      
      this.clear();
      console.log(this.checkedNum)
      this.startList.map((item,index)=>{
        
        if(index<this.checkedNum){
          this.$set(this.startList[index],'checked',true)
        }else{
          this.$set(this.startList[index],'checked',false)
        }
      })
    },
    methods:{
      change: function(item,index){
        this.clear()
        for(let sIndex in this.startList){          
          this.startList[sIndex]['checked'] = true
          if(sIndex == index){
            this.$emit('gainStart',{num:index+1,type:this.type})
            return;
          }
        }
      },
      clear: function(){
        this.serverChecked = []
        for(let sIndex in this.startList){
          this.startList[sIndex]['checked'] = false;
        }
      }
    }
  } 
</script>

<style lang="scss" scoped>
  .start-wrap{
    display: inline-block;
  }
  input{
    vertical-align: middle;
    margin: 0 .08rem;
  }
  .start{
    width:.32rem;
    height: .32rem;
    background: url('../assets/images/star-icon.png') no-repeat;
    background-size: 100% 100%;
  }
  .no-checked{
    background-color: transparent;
  }
  .checked{
    width:.32rem;
    height: .32rem;
    background: url('../assets/images/star-sel-icon.png') no-repeat;
    background-size: 100% 100%;
  }
</style>