<template>
  <div class="selfCenter mask">
    <ul>
      <li class="userLogo">
        <span>头像</span>
        <div class="selfRight">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3942989250,3371488751&fm=27&gp=0.jpg" alt="" class="defaultLogo">
          <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
        </div>
      </li>
      <li>
        <span>用户名</span>
        <div class="selfRight">
          <span class="grayColor">{{getStorage.username}}</span>
          <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
        </div>
      </li>
      <li>
        <span>昵称</span>
        <div class="selfRight">
          <span class="grayColor">{{getStorage.nickname}}</span>
          <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
        </div>
      </li>
      <li>
        <span>性别</span>
        <div class="selfRight">
          <span class="grayColor" v-if="getStorage.sex==0">保密</span>
          <span class="grayColor" v-else-if="getStorage.sex==1">男</span>
          <span class="grayColor" v-else>女</span>
          <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
        </div>
      </li>
      <li>
        <span>出生日期</span>
        <div class="selfRight">
          <span class="grayColor">{{getStorage.birthday}}</span>
          <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
  export default {
    name: 'MyCenter',
    data() {
      return {
        getStorage:{}
      }
    },
    created: function () {

    },
    mounted: function () {

    },
    computed: {},
    methods: {

    }
  }

</script>
<style lang="scss" scoped>
  .selfCenter {
    width: 100%;
    height: 100%;
    font-size: .28rem;
    overflow: hidden;
    ul {
      width: 100%;
      background: #ffffff;
      padding-left: .2rem;
      .userLogo {
        padding: .1rem 0 !important;
      }
      li:not(:last-child) {
        border-bottom: 1px solid #eaeaea;
      }
      li {
        width: 100%;
        position: relative;
        height: 1.1rem;
        line-height: 1.1rem;
        text-align: left;
        color: #333;
        font-size: 0.34rem;
        .selfRight {
          position: absolute;
          right: .2rem;
          top: 50%;
          transform: translate(0, -50%);
          .grayColor {
            color: #bfbfbf;
            font-size: .34rem;
          }
          img {
            display: inline-block;
          }
          .defaultLogo {
            width: .72rem;
            height: .72rem;
            vertical-align: middle;
          }
          .rightArrow {
            width: .15rem;
            padding-left: .15rem;
            vertical-align: middle;
          }
        }
      }
    }
  }

</style>
