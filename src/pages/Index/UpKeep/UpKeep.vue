<template>
    <div class="upkeep-wrap mask">
        <div class="upkeep">
            <mt-navbar v-model="selected">
                <mt-tab-item @click.native="transmit(sortList,sortData)" id="1">{{sortData}}</mt-tab-item>
                <mt-tab-item @click.native="transmit(FilterList,filterData)" id="2">{{filterData}}</mt-tab-item>
            </mt-navbar>
            <select-list v-if="showSelList" @selType="selType" :selItem='selItem'
                         :selectList='selectList'></select-list>
            <ul class="goods-list">
                <li class="clearfix">
                    <img src="../../../assets/images/保养详情-主图.png" alt="" class="goods-img fl">
                    <div class="goods-info fl">
                        <p class="goods-name">德国顶级宝马专用波箱油（12L）</p>
                        <p class="goods-price">￥2518.00</p>
                        <p class="goods-pay">200人购买</p>
                        <button class="pay-btn">立即购买</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {SelectList} from 'mixins'
    // import {	 } from '../utils/api.js'
    export default {
        mixins: [SelectList],
        name: '',
        data() {
            return {
                selected: '1',
                selItem: '推荐排序', //子组件默认值
                selectList: [], //子组件列表
                sortList: ['推荐排序', '附近优先', '累计安装', '评分最高'],
                sortData: '推荐排序',
                FilterList: ['汽车美容', '常规保养'],
                filterData: '筛选',
                showSelList: false,
            }
        },
        created() {

        },
        methods: {
            transmit(list, data) {
                this.selectList = list
                this.selItem = data
                this.showSelList = true
            },
            selType(item) {
                if (this.selected == '1') {
                    this.sortData = item
                } else {
                    this.filterData = item
                }
                this.showSelList = false
            }
        },
    }


</script>

<style lang="scss" scoped>
    .mint-navbar {
        background-color: #fff;
        border-bottom: 2px solid #eaeaea;
    }

    .mint-tab-item {
        margin: 0 .92rem;
        height: .72rem;
        padding: 12px 0;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border: none;
        color: #fa9e15;
    }

    .upkeep {
        min-height: 17rem;
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
