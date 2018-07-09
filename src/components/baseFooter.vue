<template>
  <footer>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <img class="tab-img" v-if="selected == 1" src="../assets/images/icon_gongzuotai.png" alt="">
        <img class="tab-img" v-else src="../assets/images/icon_gongzuotai_dis.png" alt="">
        <p class="tab-txt" :class="selected == 1?'txt-is-selected':''">首页</p>
      </mt-tab-item>
      <mt-tab-item id="2">
        <img class="tab-img" v-if="selected == 2" src="../assets/images/icon_gongzuotai.png" alt="">
        <img class="tab-img" v-else src="../assets/images/icon_gongzuotai_dis.png" alt="">
        <p class="tab-txt" :class="selected == 2?'txt-is-selected':''">预约</p>
      </mt-tab-item>
      <mt-tab-item id="3">
        <img class="tab-img" v-if="selected == 3" src="../assets/images/icon_gongzuotai.png" alt="">
        <img class="tab-img" v-else src="../assets/images/icon_gongzuotai_dis.png" alt="">
        <p class="tab-txt" :class="selected == 3?'txt-is-selected':''">附近门店</p>
      </mt-tab-item>
      <mt-tab-item id="4">
        <img class="tab-img" v-if="selected == 4" src="../assets/images/icon_gongzuotai.png" alt="">
        <img class="tab-img" v-else src="../assets/images/icon_gongzuotai_dis.png" alt="">
        <p class="tab-txt" :class="selected == 4?'txt-is-selected':''">我的</p>
      </mt-tab-item>
    </mt-navbar>
  </footer>
</template>
<script>
  export default {
    name: "baseFooter",
    data() {
      return {
        selected: 1
      };
    },
    mounted() {

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
    padding-top: 0.18rem;
  }

</style>
