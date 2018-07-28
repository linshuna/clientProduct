<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <div class="wrap">
      <router-view/>
    </div>
    <template v-if="$route.meta.keepActive">
      <base-footer></base-footer>
    </template>
    
  </div>
</template>

<script>
import baseFooter from './components/baseFooter.vue'
  export default {
    name: 'app',
    data(){
      return {
      }
    },
    components: {
      'base-footer':baseFooter,
    },
    watch:{
      $route(to, from) {
        // console.log(to.name)
        // if (to.name=='Index'||to.name=='Appointment'||to.name=='NearbyStores'||to.name=='UserCenter') {
        //   this.isshow = true; 
        //   return
        // }
        // this.isshow = false
      }
    },
    created() {
      
    },
  }

</script>

<style lang="scss" scoped>
  #app {
    min-height: 100%;
    color: #666;
  }

  .wrap {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    background-color: #f5f5f5;
  }

</style>
