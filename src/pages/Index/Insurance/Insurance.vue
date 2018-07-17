<template>
  <div class="insurance-wrap mask">
    <ul>
      <router-link to="/Index/Insurance/InsuranceDetails">
        <li class="nav">
          <div class="nav_left">
            <div class="nav_left_section_img">
              <div class="nav_left_section">
                <img src="http://img5.imgtn.bdimg.com/it/u=257481653,4212749074&fm=27&gp=0.jpg" alt="">
                <p>最高保障600万</p>
              </div>
            </div>
          </div>
          <div class="nav_right">
            <div class="nav_right_section">
              <div class="nav_right_top">
                <p>中国人民保险车险</p>
                <p>地址:&nbsp;广州市白云区白云大道南..</p>
              </div>
              <div class="nav_right_footer">
                <p>品牌优势</p>
                <p>安心理赔</p>
              </div>
            </div>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Insurance"
  }

</script>

<style scoped>
  .nav {
    display: flex;

  }

  .nav_left {
    width: 3.32rem;
    height: 2.0rem;
    background-color: #fff;
    display: flex;
    align-items: center;
  }

  .nav_left_section {
    width: 2.64rem;
    height: 1.46rem;
    position: relative;
    display: flex;
  }

  .nav_left_section img {
    width: 100%;
    height: 100%;
  }

  .nav_left_section p {
    width: 2.64rem;
    height: 0.38rem;
    background-color: #070707;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    text-align: center;
    line-height: 0.38rem;
    color: #fff;
  }

  .nav_left_section_img {
    margin-left: 0.34rem;
  }

  .nav_right {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
  }

  .nav_right_section {
    height: 1.46rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.16rem;
  }

  .nav_right_footer {
    display: flex;
  }

  .nav_right_top p:first-child {
    color: #626262;
    font-size: 0.32rem;
  }

  .nav_right_top p:last-child {
    font-size: 0.28rem;
    color: #9f9f9f;
  }

  .nav_right_footer p {
    width: 1.82rem;
    height: 0.48rem;
    background-color: #ff8003;
    border-radius: 0.06rem;
    color: #fff;
    text-align: center;
    line-height: 0.48rem;
  }

  .nav_right_footer p:first-child {
    margin-right: 0.16rem;
  }

</style>
