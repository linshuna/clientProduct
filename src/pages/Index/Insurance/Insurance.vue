<template>
  <div class="insurance-wrap mask">
    <ul class="insurance">
      <li class="nav" v-for="item in ClientRiskIndexList" @click.stop="moveUrl(item.url)">
        <div class="nav_left">
          <div class="nav_left_section_img">
            <div class="nav_left_section">
              <img :src="item.pic" alt="">
            </div>
          </div>
        </div>
        <div class="nav_right">
          <div class="nav_right_section">
            <div class="nav_right_top">
              <p>{{item.name}}</p>
              <p class="desc">{{item.desc}}</p>
            </div>
            <div class="nav_right_footer">
              <p  v-for="(items,index) in item.labels">{{items[index]}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getClientRiskIndex} from '../../../utils/api.js'
  export default {
    name: "Insurance",
      data(){
        return{
            ClientRiskIndexList:[]
        }
      },
      mounted(){
          this._getClientRiskIndex()
      },
      methods: {
          _getClientRiskIndex() {
              getClientRiskIndex().then(res => {
                  this.ClientRiskIndexList = res
                  console.log(res.labels);
              })
          },
          moveUrl: function(url){
            window.location.href = url;
          }
      },
  }

</script>

<style scoped>
  .nav {
    display: flex;

  }
  .insurance{
    padding-bottom: 2rem;
  }
  .insurance  li{
    margin-top: 0.2rem;

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
  .desc{
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
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
    font-size: 0.25rem;
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
