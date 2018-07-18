<template>
    <div class="my-car mask">
      <template v-if="indexList&&indexList.length>0">
        <ul class="car-list" v-for="item in indexList">
            <li>
                <router-link to="/UserCenter/MyCarDetails">
                    <div class="car-hd clearfix">
                        <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2599367009,2667348798&fm=58" alt=""
                             class="car-img fl">
                        <p class="car-name fl">奔驰C级 2018款 C 180 L 动感版</p>
                        <img class="fr r-arrow" src="../../assets/images/rightArrow.png">
                    </div>
                </router-link>
                <div class="car-bd">
                    <p class="car-number car-info">
                        <img src="../../assets/images/car-number.png" alt="">{{item.carNo}}</p>
                    <p class="car-mileage car-info">
                        <img src="../../assets/images/mycar-dist.png" alt="">行驶里程
                        <span>12345</span>公里</p>
                    <div class="handle-box clearfix">
                        <label class="fl">
                            <input type="radio" name="default" @click="getPretermit">默认
                        </label>
                        <div class="del-box fl">
                            <img src="../../assets/images/我的车辆-垃圾桶icon.png" alt="" class="del-icon fl">
                            <p class="fl">删除</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      </template>
      <template v-else>
        <no-data-tip :tipData="{typeTipe:0,conTip:'暂无车辆信息'}"></no-data-tip>
      </template>
        
      <button class="add-car-btn" @click="addCar">新增车辆</button>
      <router-view></router-view>
    </div>
</template>
<script>
    import {getCarDefault} from '../../utils/api'
    import {getMyCar} from '../../utils/api'
    import noDataTip from '@/components/noDataTip'
    export default {
        name: 'App',
        data() {
            return {
                indexList: [],
                defaultList:[]
            }
        },
        components:{
          'no-data-tip': noDataTip
        },
        created: function () {
        },
        mounted: function () {
            this._getMyCar()

        },
        methods: {
            _getMyCar() {
                getMyCar().then(res => {
                    this.indexList = res
                    // console.log(this.indexList);
                })
            },
            getPretermit() {
                getCarDefault().then(res => {
                    this.defaultList = res
                    console.log(this.defaultList);
                })

            },
            addCar: function(){
              this.$router.push({path: '/UserCenter/MyCar/AddCar'})
            }
        }
    }

</script>
<style lang="scss" scoped>
    .car-list {
        li {
            margin-top: .2rem;
            background: url('../../assets/images/mycar-bg.png') no-repeat;
            background-size: 100% 100%;
        }
        .car-hd {
            line-height: .7rem;
            border-bottom: 1px solid #eaeaea;
        }
        .car-img {
            width: 0.52rem;
            height: 0.52rem;
            margin: .1rem 0.14rem 0 .38rem;
        }
        .car-name {
            font-size: 0.3rem;
        }
        .r-arrow {
            width: 0.1rem;
            height: 0.18rem;
            padding: .28rem .42rem 0 0;
        }
        .car-bd {
            position: relative;
            padding-left: .68rem;
            height: 1.8rem;
        }
        .car-info {
            font-size: 0.28rem;
            line-height: .3rem;
            img {
                width: 0.26rem;
                height: 0.26rem;
                padding-right: .1rem;
            }
        }
        .car-number {
            padding-top: .42rem;
        }
        .car-mileage {
            padding-top: .2rem;
            span {
                padding: 0 .04rem;
                font-size: 0.36rem;
                color: #ea4953;
            }
        }
        .handle-box {
            position: absolute;
            top: 1.2rem;
            right: .22rem;
            height: 0.36rem;
            line-height: .36rem;
            font-size: 0.2rem;
            .del-icon {
                width: 0.36rem;
                height: 0.36rem;
                margin: 0 .06rem 0 .1rem;
            }
        }
    }

    .add-car-btn {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0.72rem;
        font-size: 0.28rem;
        color: #ffffff;
        background-color: #fba019;
    }

    input[type="radio"] {
        -moz-appearance: button;
        /* Firefox */
        -webkit-appearance: button;
        background: url('../../assets/images/我的车辆-未选中icon.png') no-repeat;
        /* Safari 和 Chrome */
        background-size: 0.36rem 0.36rem;
        display: inline-block;
        outline: none;
        height: 0.36rem;
        width: 0.36rem;
        margin-top: -2px;
        margin-bottom: 1px;
        vertical-align: middle;
    }

    input[type="radio"]:checked {
        display: inline-block;
        background: url('../../assets/images/我的车辆-选中icon.png') no-repeat;
        background-size: 0.36rem 0.36rem;
        height: 0.36rem;
        width: 0.36rem;
        margin-top: -2px;
        margin-bottom: 1px;
        vertical-align: middle;
    }


</style>
