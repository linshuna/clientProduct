<template>
  <div class="score-box">
    <img v-if="stars>0" v-for="(item,index) in stars" :key="'active'+index" class="star" src="../assets/images/star-sel-icon.png" alt="">
    <img v-if="5-stars>=0" v-for="(item,index) in (5-stars)" :key="'gray'+index" class="star" src="../assets/images/star-icon.png" alt="">
  </div>
</template>

<script>
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
      this.grayStars = 5-(this.stars-0)
    },
    methods: {

    },
  }

</script>

<style lang="scss" scoped>
  .score-box {
    display: inline-block;
    vertical-align: middle;
    img {
      width: 0.28rem;
      height: 0.28rem;
      padding: 0 .03rem;
    }
  }

</style>
