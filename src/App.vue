<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <div class="wrap">
      <router-view/>
    </div>
    <base-footer></base-footer>
  </div>
</template>

<script>
import baseFooter from './components/baseFooter.vue'
  export default {
    name: 'app',
    components: {
      baseFooter
    }
  }

</script>

<style scoped>
  #app {
    height: 100%;
    color: #666;
  }

  .wrap {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 1.04rem;
    overflow: auto;
  }

</style>
