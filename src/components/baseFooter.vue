<template>
  <footer>
    <mt-navbar v-model="selected">
      <mt-tab-item id="Index">
        <router-link to="/">
          <img class="tab-img" v-if="selected == 'Index'" src="../assets/images/icon_gongzuotai.png" alt="">
          <img class="tab-img" v-else src="../assets/images/icon_gongzuotai_dis.png" alt="">
          <p class="tab-txt" :class="selected == 'Index'?'txt-is-selected':''">首页</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="Appointment">
        <router-link to="/Appointment">
          <img class="tab-img" v-if="selected == 'Appointment'" src="../assets/images/icon_gongzuotai.png" alt="">
          <img class="tab-img" v-else src="../assets/images/icon_gongzuotai_dis.png" alt="">
          <p class="tab-txt" :class="selected == 'Appointment'?'txt-is-selected':''">预约</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="NearbyStores">
        <router-link to="/NearbyStores">
          <img class="tab-img" v-if="selected == 'NearbyStores'" src="../assets/images/icon_gongzuotai.png" alt="">
          <img class="tab-img" v-else src="../assets/images/icon_gongzuotai_dis.png" alt="">
          <p class="tab-txt" :class="selected == 'NearbyStores'?'txt-is-selected':''">附近门店</p>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="UserCenter">
        <router-link to="/UserCenter">
          <img class="tab-img" v-if="selected == 'UserCenter'" src="../assets/images/icon_gongzuotai.png" alt="">
          <img class="tab-img" v-else src="../assets/images/icon_gongzuotai_dis.png" alt="">
          <p class="tab-txt" :class="selected == 'UserCenter'?'txt-is-selected':''">我的</p>
        </router-link>
      </mt-tab-item>
    </mt-navbar>
  </footer>
</template>
<script>
  export default {
    name: "baseFooter",
    data() {
      return {
        selected:'Index'
      };
    },
    mounted() {

    },
    watch: {
      $route(to,from){
        if (to.name) {
          this.selected = to.name
        }
      }
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.04rem;
    background-color: #fff;
    .tab-img {
      width: 0.44rem;
      height: 0.44rem;
    }
    .tab-txt {
      padding-top: .1rem;
      font-size: 0.24rem;
      color: #b4b4b4;
    }
    .txt-is-selected {
      color: #fa9e15;
    }
  }

  .mint-tab-item {
    padding-top: 0.18rem !important;
  }

</style>
