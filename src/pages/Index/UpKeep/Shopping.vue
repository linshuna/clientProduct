<template>
    <div class="upkeep-wrap mask">
        <div class="upkeep">
            <mt-navbar v-model="selected">
                <mt-tab-item @click.native="changeType(4)" id="1">{{sortData}}</mt-tab-item>
                <mt-tab-item @click.native="changeType(5)" id="2">{{filterData}}</mt-tab-item>
            </mt-navbar>
            <pro-city-area v-bind:current.sync="currentPicker" v-bind:popupVisible.sync="popupVisible" @gainSort="gainSort" @gainShopProject="gainShopProject" selectType="center"></pro-city-area>
            <select-list v-if="showSelList" @selType="selType" :selItem='selItem'
                         :selectList='selectList'></select-list>
            <template v-if="shopList&&shopList.length>0">             
              <ul class="goods-list">
                  <li class="clearfix" v-for="(item,index) in shopList" @click.stop="lookShopDetail(item.id)">
                      <img :src="item.pic" alt="" class="goods-img fl">
                      <div class="goods-info fl">
                          <p class="goods-name">{{item.name}}</p>
                          <p class="goods-price">￥{{item.price}}</p>
                          <p class="goods-pay">{{item.sale}}人购买</p>
                          <button class="pay-btn">立即购买</button>
                      </div>
                  </li>
              </ul>
            </template>
            <template v-else>
              <p style="text-align: center;margin-top: 10%;font-size:.28rem;">暂时搜索不到店铺，更换筛选条件</p>
            </template>
        </div>
    </div>
</template>

<script>
    import {SelectList} from 'mixins'
    import {getShopList } from '@/utils/api.js'
    import ProCityArea from 'components/ProCityArea.vue'
    export default {
        mixins: [SelectList],
        name: '',
        data() {
            return {
                shopId: '',
                selected: '1',
                selItem: '推荐排序', //子组件默认值
                selectList: [], //子组件列表
                // sortList: ['推荐排序', '附近优先', '累计安装', '评分最高'],
                sortData: '推荐排序',
                // FilterList: ['汽车美容', '常规保养'],
                filterData: '筛选',
                showSelList: false,
                shopList: [],
                currentPicker:1,
                popupVisible: false,
                sort: '',
                project_id: ''
            }
        },
        created() {
          this.shopId = this.$route.params.shopId;
        },
        mounted() {
          this.$nextTick(function(){
            this.init();
          })
        },
        components:{
          'pro-city-area': ProCityArea
        },
        methods: {
            // transmit(list, data) {
            //     this.selectList = list
            //     this.selItem = data
            //     this.showSelList = true
            // },
            // selType(item) {
            //     if (this.selected == '1') {
            //         this.sortData = item
            //     } else {
            //         this.filterData = item
            //     }
            //     this.showSelList = false
            // },
            gainSort: function(value){
              this.sort = value.value;
              this.sortData = value.name;
              this.init();
            },
            gainShopProject: function(value){//{value:'',name:''}
              this.project_id = value.value
              this.filterData = value.name;
              this.init();
            },
            changeType:function(value){
              this.currentPicker = value;
              this.popupVisible = true;
            },
            init: function(){
              getShopList({
                shop_id: this.shopId,
                project_id: this.project_id,
                sort:this.sort
              }).then(res=>{
                this.shopList = res;
              })
            },
            lookShopDetail: function(id){
              this.$router.push({path: '/Index/UpKeep/maintain/'+id})
            }
        },
    }


</script>

<style lang="scss" scoped>
    .mint-navbar {
        background-color: #fff;
        border-bottom: 2px solid #eaeaea;
        z-index: 9999;
        position: relative;
    }

    .mint-tab-item {
        margin: 0 .92rem;
        height: .7rem;
        padding: 0!important;
        line-height: .7rem;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border: none;
        color: #fa9e15;
    }

    .upkeep {
        background-color: #efefef;
    }

    .goods-list {
        margin-top: 0.2rem;
        background-color: #fff;
        li {
            position: relative;
            height: 2.04rem;
            border-bottom: 1px solid #eaeaea;
            .goods-img {
                width: 1.44rem;
                height: 1.44rem;
                margin: .18rem .18rem 0 .2rem;
            }
            .goods-name {
                padding-top: 0.18rem;
                font-size: 0.28rem;
                color: #262626;
            }
            .goods-price {
                padding-top: 0.18rem;
                font-size: 0.28rem;
                color: #e9252e;
            }
            .goods-pay {
                padding-top: 0.18rem;
            }
            .pay-btn {
                position: absolute;
                top: 1.16rem;
                right: 0.48rem;
                width: 1.48rem;
                height: 0.48rem;
                line-height: 0.48rem;
                text-align: center;
                color: #ffffff;
                background-color: #ff8003;
                border-radius: 0.04rem;
            }
        }
    }

</style>
