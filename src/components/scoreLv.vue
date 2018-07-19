<template>
  <div class="score-box">
    <img v-for="item in stars" class="star" src="../assets/images/star-sel-icon.png" alt="">
    <img v-for="item in (5-stars)" class="star" src="../assets/images/star-icon.png" alt="">
  </div>
</template>

<script>
  // import {	 } from '../utils/api.js'
  export default {
    name: 'scoreLv',
    data() {
      return {
        grayStars:0
      }
    },
    props: ['stars'],
    components: {

    },
    created() {
      // this.stars = this.stars - 0
      this.grayStars = 5-(this.stars-0)
    },
    methods: {

    },
  }

</script>

<style lang="scss" scoped>
  .score-box {
    img {
      width: 0.28rem;
      height: 0.28rem;
      padding: .04rem .03rem;
    }
  }

</style>
