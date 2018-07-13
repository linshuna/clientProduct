<template>
  <div class="discounts mask">
    <ul class="banner-list">
      <li>
        <img src="../../../assets/images/特惠-banner1.png" alt="">
      </li>
      <li>
        <img src="../../../assets/images/特惠-banner2.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  // import {	 } from '../utils/api.js'
  export default {
    name: 'Discounts',
    data() {
      return {

      }
    },
    components: {

    },
    created() {

    },
    methods: {

    },
  }

</script>

<style lang="scss" scoped>
  .discounts {
    .banner-list {
      li {
        margin-top: .2rem;
        img {
          width: 7.5rem;
          height: 3.6rem;
        }
      }
    }
  }

</style>
