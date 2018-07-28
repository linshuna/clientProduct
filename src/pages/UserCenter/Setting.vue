<template>
  <!--抽取
  <div class="setting-wrap mask">
    <div class="nav_input">
      <div class="nav_input_phone">
        <img src="../../assets/images/setting_phone.png" alt="">
        <input type="number" placeholder="输入手机号码">
      </div>
      <div class="nav_input_number">
        <img src="../../assets/images/setting_safety.png" alt="">
        <input type="number" placeholder="短信验证码">
        <div class="nav_input_number_right">
          <button class="input_btn">获取验证码</button>
        </div>
      </div>
      <div class="nav_input_password">
        <img src="../../assets/images/setting_lock.png" alt="">
        <input type="password" placeholder="请输入密码">
      </div>
      <button class="footer_btn">登录</button>
    </div>
  </div>-->
  <div class="setting">
    <ul>
      <li>
        <router-link to="/Forgetpwd" tag="li">
          <span class="lockLeft">
            <img :src="lockIcon" alt="">
            <span>修改密码</span>  
          </span>
          <div class="LockRight">
            <img :src="rightArrowIcon" alt="" class="rightArrow">
          </div>
        </router-link>
        
      </li>
    </ul>
    <div class="btnWrap" @click.stop="logout">
      <button>退出登录</button>
    </div>
    
  </div>
</template>

<script>
    export default {
        name: "setting",
        data(){
          return {
            lockIcon: require("@/assets/images/lockIcon.png"),
            rightArrowIcon: require("@/assets/images/rightArrow.png"),
          }
        },
        created(){
            this.clientvid = this.$store.getters.getStorage.vid;
        },
        methods:{
          logout(){
            console.log('触发')
            this.$store.dispatch('logout')
          }

        }
    }

</script>

<style lang="scss" scoped>
  .input_btn {
    width: 1.5rem;
    height: 0.48rem;
    background-color: #fa9e15;
    color: #fff;
    font-size: 0.05rem;
    border: none;
    border-radius: 0.1rem;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
  }

    .footer_btn {
      position: absolute;
      bottom: 0;
      border: none;
      width: 7.5rem;
      height: 0.72rem;
      background-color: #fa9e15;
      color: #fff;
    }

  .setting{
    width: 100%;
      height: 100%;
      font-size: .28rem;
      position: fixed;
      left: 0;
      top: 0;
      background: #f4f4f4!important;
      overflow: hidden;
      z-index: 100;
      padding: 0!important;
      border-radius: 0!important;
  }
    
    ul {
      width: 100%;
      background: #ffffff;
      padding-left: .2rem;
      box-sizing: border-box;
      li {
        width: 100%;
        margin-top: .36rem;
        position: relative;
        height: 1.1rem;
        line-height: 1.1rem;
        text-align: left;
        color: #333;
        font-size: 0.34rem;
      }
        
    }
      
        .lockLeft{
          img{
            display: inline-block;
            width: 0.35rem;
            vertical-align: middle;
          }
            
          span {
            vertical-align: middle;
          }
            
        }
          
        .LockRight{
          position: absolute;
          right: .2rem;
          top: 50%;
          transform: translate(0,-50%)  ;
          .grayColor{
            color: #bfbfbf;
            font-size: .24rem;
          }
            
          img{
            display: inline-block;
          }
            
          .defaultLogo{
            width: 1rem;
            height: 1rem;
            vertical-align: middle;
          }
            
          .rightArrow{
            width: .15rem;
            padding-left: .15rem ;
            vertical-align: middle;
          }  
            
        }
          
    .btnWrap{
      width: 100%;
      box-sizing: border-box;
      position: fixed;
      left: 0;
      bottom: 0;
      button {
        width: 100%;
        height: .8rem;
        border: none;
        width: 100%;
        background: #FA9E15;
        color: #ffffff;
        border-radius : 2px;
        font-size: .32rem;
      }
        
    }
      

</style>
