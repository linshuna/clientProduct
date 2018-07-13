<template>
  <div class="wrap">
    <div class="list-mask">
    </div>
    <ul class="sel-list">
    <li v-for="(item, index) in selectList" :key="index">
      <p @click="selType(item)" :class="{fc : item == type}">{{item}}</p>
    </li>
  </ul>
  </div>
</template>

<script>
  export default {
    name: 'selectList',
    data() {
      return {
        type: this.selItem,
      }
    },
    props: {
      selItem: {
        type: String,
        required: true
      },
      selectList: {
        type: Array,
        required: true
      }
    },
    components: {

    },
    mounted() {
      this.type = this.selItem
    },
    methods: {
      selType(item){
        this.type = item
        this.$emit('selType',item)
      },
    },
  }

</script>

<style lang="scss" scoped>
  .list-mask {
    background-color: rgba($color: #050505, $alpha: .4);
    position: absolute;
    top: .72rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
  }
  .sel-list {
    position: absolute;
    top: .72rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 16;
    li {
      height: 0.8rem;
      line-height: .8rem;
      padding-left: .76rem;
      font-size: 0.28rem;
      background-color: #fff;
    }
    .fc {
      color: #fa9e15;
    }
  }

</style>
