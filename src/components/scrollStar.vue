<template>
  <div class="set-star-inline">
      <div class="set-star-bg">
        <div class="set-star-active">
          <span class="set-star-active-width" :style="{width: this.width*0.32+'rem'}"></span>
          <div class="star-img"></div>     
        </div>
         
      </div>  
  </div>
</template>
<script>
export default {
  props:{
    width: {type: String}
  },
  data(){
    return{}
  },
  created() {
    console.log(this.width)
  },
}  
</script>
<style lang="scss">
  .set-star-inline,.set-star-bg{
    display: inline-block;
  }
  .set-star-active{
    width: 1.6rem;
    height: .32rem;
    position: relative;
    background: #fff;
    overflow: hidden;
  }
  .set-star-active-width{
    position: absolute;
    top: 0.02rem;
    left: .02rem;
    height: .27rem;
    background: #FA9E15;
  }
  .star-img{
    position: absolute;
    width: 1.6rem;
    height: .32rem;
    top:0;
    background: url('../assets/images/star-icon-while.png') repeat-x;
    background-size: .32rem .32rem;
  }
</style>
