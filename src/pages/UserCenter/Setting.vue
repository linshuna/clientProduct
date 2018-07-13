<template>
  <!--抽取-->
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
  </div>
</template>

<script>
  export default {
    name: "setting"
  }

</script>

<style scoped>
  .nav_input {
    background-color: #fff;
    position: relative;
    height: 100%;
  }

  .nav_input div {
    border-bottom: 1px solid #efeff4;
  }

  .nav_input input {
    margin: 0;
    border: none;
    height: 1.12rem;
    width: 7.5rem;
    margin-left: 5%;
  }

  .nav_input_number {
    display: flex;
    position: relative;
    align-items: center;
  }

  .nav_input_phone,
  .nav_input_number,
  .nav_input_password {
    display: flex;
    align-items: center;
  }

  .nav_input img {
    width: 0.3rem;
    height: 0.36rem;
    margin-left: 3%;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #aaa;
    font-size: 0.28rem;
  }



  .input_btn {
    width: 1.5rem;
    height: 0.48rem;
    background-color: orange;
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
    background-color: orange;
    color: #fff;
  }

</style>
