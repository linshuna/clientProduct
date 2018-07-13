<template>
  <div class="evaluate-wrap mask">
    <div class="section">
      <div class="section_big">
        <img src="../../assets/images/个人中心-默认头像icon.png" class="section_img">
        <div class="section_top">
          <div class="section_top_top">
            <p>李老板</p>
            <p>粤A1W9J3</p>
            <p class="p_data">2018.7.11&nbsp;13:00</p>
          </div>
          <div class="section_top_center">
            <p>服务态度</p>
          </div>
          <div class="section_center">
            <span class="section_top_center_span">热情</span>
            <span class="section_top_center_span_right">专业</span>
          </div>
          <div class="section_top_footer">师傅的维修特别专业,也特别敬业,下次维修还会继续找这家,特别赞!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "evaluate"
  }

</script>

<style scoped>
  .section {
    display: flex;
    width: 7.5rem;
    height: 3.08rem;
    /*background-color: #f00;*/
    background-color: #fff;
  }

  .section_img {
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 0.28rem;
    top: 0.3rem;
    border-radius: 100%;
  }

  .section_top_top {
    display: flex;
    flex-direction: row;

  }

  .section_top {
    margin-left: 1.56rem;
  }

  .section_big {
    margin-top: 0.4rem;
    width: 7.5rem;
    padding-right: 3%;
  }

  .p_data {
    position: absolute;
    right: 3%;
  }

  .section_top_center_span,
  .section_top_center_span_right {
    display: inline-block;
    width: 1rem;
    height: 0.4rem;
    background-color: deeppink;
    color: #fff;
    border-radius: 10rem;
    text-align: center;
  }

  .section_top_center_span_right {
    margin-left: 2%;
  }

  .section_top_footer,
  .section_center,
  .section_top_center p {
    margin-top: 3%;
  }

</style>
