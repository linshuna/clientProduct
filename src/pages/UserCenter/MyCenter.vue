<template>
  <div class="selfCenter mask">
    <ul>
      <li class="userLogo">
        <span>头像</span>
        <div class="selfRight">
<<<<<<< HEAD
            <img :src="indexList.headimg" alt="" class="defaultLogo">
=======
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3942989250,3371488751&fm=27&gp=0.jpg" alt="" class="defaultLogo">
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
          <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
        </div>
      </li>
      <li>
        <span>用户名</span>
        <div class="selfRight">
<<<<<<< HEAD
          <span class="grayColor">{{indexList.phone}}</span>
=======
          <span class="grayColor">{{getStorage.username}}</span>
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
          <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
        </div>
      </li>
      <li>
        <span>昵称</span>
        <div class="selfRight">
<<<<<<< HEAD
          <span class="grayColor">{{indexList.uname}}</span>
=======
          <span class="grayColor">{{getStorage.nickname}}</span>
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
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
<<<<<<< HEAD
          <span class="grayColor">{{indexList.birthday}}</span>
=======
          <span class="grayColor">{{getStorage.birthday}}</span>
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
          <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
<<<<<<< HEAD
    import {getMyCenter} from '../../utils/api.js'
=======
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
  export default {
    name: 'MyCenter',
    data() {
      return {
<<<<<<< HEAD
          indexList:{},
=======
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
        getStorage:{}
      }
    },
    created: function () {

    },
    mounted: function () {
<<<<<<< HEAD
        this._getMyCenter()
    },
    computed: {},
    methods: {
        _getMyCenter() {
            getMyCenter().then(res => {
                this.indexList = res
                console.log(this.indexList);
                console.log(res.headimg);
            })
        }
=======

    },
    computed: {},
    methods: {

>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
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
