<template>
    <div class="my-order mask">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">全部</mt-tab-item>
<<<<<<< HEAD
            <mt-tab-item id="2">待付款</mt-tab-item>
=======
            <mt-tab-item id="2">代付款</mt-tab-item>
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
            <mt-tab-item id="3">已付款</mt-tab-item>
            <mt-tab-item id="4">已核销</mt-tab-item>
            <mt-tab-item id="5">已过期</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
<<<<<<< HEAD
              <template v-if="!getOrderIndexList||getOrderIndexList.length==0">
                <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无购买记录'}"></no-data-tip>
              </template>
              <template v-else>
                <ul class="order-list">
                    <li class="clearfix" v-for="item in getOrderIndexList">
                      <p class="setTitle border-bottom-1px">预约时间：{{item.addtime}}</p>
                        <div class="order-top">
                            <img :src="item.pic" alt="商品图片"
=======
                <ul class="order-list">
                    <li class="clearfix" v-for="item in getOrderIndexList">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
<<<<<<< HEAD
                            <p class="order-state_wait order-state fl">
                              {{item.state==1?'待付款':
                                (item.state==2?'已付款':
                                  (item.state==3?'已核销':
                                    (item.state==4?'已核销':
                                      (item.state==5?'已过期':'待定'))))
                              }}
                            </p>
                            <template v-if="item.state==1">
                              <button class="pay-btn order-btn fr" @click.stop="payment(item.orderNo)">付款</button>
                              <button class="delete-btn order-btn fr" @click.stop="cancel(item.orderNo)">删除订单</button>
                            </template>
                            
                        </div>
                    </li>
                </ul>
              </template>
                
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
              <template v-if="!reOrderList||reOrderList.length==0">
                <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无购买待付款记录'}"></no-data-tip>
              </template>
              <template v-else>
                <ul class="order-list">
                    <li class="clearfix" v-for="item in reOrderList">
                      <p class="setTitle border-bottom-1px">预约时间：{{item.addtime}}</p>
                        <div class="order-top">
                            <img :src="item.pic" alt="商品图片"
=======
                            <p class="order-state_wait order-state fl">待付款</p>
                            <router-link to="/UserCenter/Payment">
                                <button class="pay-btn order-btn fr">付款</button>
                            </router-link>
                            <button class="delete-btn order-btn fr">删除订单</button>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in getOrderIndexNew">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">待付款</p>
<<<<<<< HEAD
                            <button class="pay-btn order-btn fr" @click.stop="payment(item.orderNo)">付款</button>
                            <button class="delete-btn order-btn fr" @click.stop="cancel(item.orderNo)">删除订单</button>
                        </div>
                    </li>
                </ul>
              </template>
                
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <template v-if="!rePayList||rePayList.length==0">
                <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无购买已付款记录'}"></no-data-tip>
              </template>
              <template v-else>
                <ul class="order-list">
                    <li class="clearfix" v-for="item in rePayList">
                        <p class="setTitle border-bottom-1px">预约时间：{{item.addtime}}</p>
                        <div class="order-top">
                            <img :src="item.pic" alt="商品图片"
=======
                            <router-link to="/UserCenter/Payment">
                                <button class="pay-btn order-btn fr">付款</button>
                            </router-link>
                            <button class="delete-btn order-btn fr">删除订单</button>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in OrderIndexOldList">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已付款</p>
                            <!--<router-link to="/UserCenter/Payment">-->
                            <!--<button class="pay-btn order-btn fr">付款</button>-->
                            <!--</router-link>-->
                            <!--<button class="delete-btn order-btn fr">删除订单</button>-->
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in OrderIndexThree">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
<<<<<<< HEAD
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已付款</p>
                        </div>
                    </li>
                </ul>
              </template>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
              <template v-if="!reBargainList||reBargainList.length==0">
                <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无购买核销记录'}"></no-data-tip>
              </template>
              <template v-else>
                <ul class="order-list">
                    <li class="clearfix" v-for="item in reBargainList">
                        <p class="setTitle border-bottom-1px">预约时间：{{item.addtime}}</p>
                        <div class="order-top">
                            <img :src="item.pic" alt="商品图片"
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已核销</p>
                        </div>
                    </li>
                </ul>
              </template>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
              <template v-if="!reBackList||reBackList.length==0">
                <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无购买过期记录'}"></no-data-tip>
              </template>
              <template v-else>
                <ul class="order-list">
                    <li class="clearfix" v-for="item in reBackList">
                        <p class="setTitle border-bottom-1px">预约时间：{{item.addtime}}</p>
                        <div class="order-top">
                            <img :src="item.pic" alt="商品图片"
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已过期</p>
                        </div>
                    </li>
                </ul>
              </template>
            </mt-tab-container-item>
        </mt-tab-container>
        <base-footer></base-footer>
=======
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已核销</p>
                            <!--<router-link to="/UserCenter/Payment">-->
                            <!--<button class="pay-btn order-btn fr">付款</button>-->
                            <!--</router-link>-->
                            <!--<button class="delete-btn order-btn fr">删除订单</button>-->
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <ul class="order-list">
                    <li class="clearfix" v-for="item in OrderIndexFour">
                        <div class="order-top">
                            <img src="http://img4.imgtn.bdimg.com/it/u=3796003502,2383472742&fm=27&gp=0.jpg" alt=""
                                 class="fl goods-img">
                            <div class="goods-info">
                                <p class="goods-name">{{item.name}}
                                    <img class="r-arrow" src="../../assets/images/rightArrow.png" alt="">
                                </p>
                                <div class="price-box clearfix">
                                    <p class="goods-price fl">￥{{item.price}}</p>
                                    <p class="goods-total fr">x1</p>
                                    <p class="car">车牌:{{item.carNo}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="order-bottom clearfix">
                            <p class="order-state_wait order-state fl">已过期</p>
                            <!--<router-link to="/UserCenter/Payment">-->
                            <!--<button class="pay-btn order-btn fr">付款</button>-->
                            <!--</router-link>-->
                            <!--<button class="delete-btn order-btn fr">删除订单</button>-->
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
    </div>

</template>
<script>
<<<<<<< HEAD
    import {getOrderIndex,goodsCancels} from "../../utils/api";
    import {MessageBox} from 'mint-ui'
    import noDataTip from '@/components/noDataTip'
    import baseFooter from '@/components/baseFooter'
=======
    import {getOrderIndex, getOrderIndexNew, getOrderIndexOld, getOrderIndexThree,getOrderIndexFour} from "../../utils/api";
    // import { getIndexData } from '../utils/api.js'
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
    export default {
        name: "Appointment",
        data() {
            return {
<<<<<<< HEAD
                clientvid:'',
                selected: '1',
                getOrderIndexList: [],
                reOrderList:[],//1已下单
                rePayList: [],//2已付款
                reBargainList: [],//3已成交
                reBackList: [],//4已退款
                reCancelList: [],//5已取消
                reDelList: [],//6已删除
                reEvaluateList: []//7已评价
            };
        },
        created() {
          let getStorage = this.$store.getters.getStorage;
          this.clientvid = getStorage?getStorage.vid:'';
        },
        mounted() {
          this.$nextTick(function(){
            this._getOrderIndex()
          })
        },
        components:{
          'no-data-tip':noDataTip,
          'base-footer': baseFooter,
        },
        methods: {
            _getOrderIndex() {
                getOrderIndex({clientvid: this.clientvid,state:0}).then(res => {
                  //1已下单 2已付款 3已成交 4已退款 5已取消 6已删除 7已评价
                  res.map((item,index)=>{
                    if(item.state==1){
                      this.reOrderList.push(item)
                    }else if(item.state==2){
                      this.rePayList.push(item)
                    }else if(item.state==3){
                      this.reBargainList.push(item)
                    }else if(item.state==4){
                      this.reBackList.push(item)
                    }

                  })
                    this.getOrderIndexList = res
                })
            },
            payment: function(orderNo){
              this.$router.push({path: '/Index/UpKeep/Payment/'+orderNo})
            },
            cancel: function(orderNo){
              MessageBox.confirm('是否确定删除订单','').then(action => { 
                goodsCancels({orderNo: orderNo}).then(res=>{
                  if(res&&!res.errorCode){
                    this.$store.commit('showToast','删除成功')
                    this._getOrderIndex();
                  }
                })

              }).catch(()=>{})
            }
=======
                selected: '1',
                getOrderIndexList: [],
                getOrderIndexNew: [],
                OrderIndexOldList: [],
                OrderIndexThree: [],
                OrderIndexFour:[]
            };
        },
        created() {

        },
        mounted() {
            this._getOrderIndex()
            this._getOrderIndexNew()
            this._getOrderIndexOld()
            this._getOrderIndexThree()
            this._OrderIndexFour()
        },
        methods: {
            _getOrderIndex() {      //全部

                getOrderIndex().then(res => {
                    if (res && !res.errorCode) {
                        this.getOrderIndexList = res
                        console.log(res);
                    }
                })

            },
            _getOrderIndexNew() {    //待付款

                getOrderIndexNew().then(res => {
                    if (res && !res.errorCode) {
                        this.getOrderIndexNew = res
                        console.log(res);
                    }
                })

            },
            _getOrderIndexOld() {

                getOrderIndexOld().then(res => {
                    if (res && !res.errorCode) {
                        this.OrderIndexOldList = res
                        console.log(res);
                    }
                })

            },
            _getOrderIndexThree() {
                getOrderIndexThree().then(res => {
                    if (res && !res.errorCode) {
                        this.OrderIndexThree = res
                        console.log(res);
                    }
                })
            },
            _getOrderIndexFour(){
                getOrderIndexFour().then(res =>{
                    if(res && res.errorCode) {
                        this.OrderIndexFour = res
                    }
                })
            }

>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
        }
    };

</script>
<style scoped>
.mint-tab-item-label{
  display: inline-block;
}
</style>
<style lang="scss" scoped>
    .mint-tab-container {
        overflow: hidden;
        position: relative;
        margin-top: .9rem;
    }
    .mint-navbar {
      padding: 0 .34rem;
      background-color: #fff;
      border-bottom: 1px solid #eaeaea;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
      width: 100%;
    }
    .mint-tab-item {
        height: .84rem;
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 2px solid #fa9e15;
        color: #fa9e15;
    }
    .mint-tab-item {
        height: .7rem!important;
        line-height: .7rem!important;
        padding: 0!important;
    }
    

    .order-list {
        li {
            margin-bottom: .2rem;
            background-color: #fff;
            .setTitle{
              line-height: .65rem;
              font-size: .28rem;
              width: 100%;
              padding-left: .2rem;
              box-sizing: border-box;
              overflow: hidden;
            }
            .order-top {
                height: 2rem;
                border-bottom: 1px solid #eaeaea;
            }
            .goods-img {
                width: 1.24rem;
                height: 1.24rem;
                padding: .38rem .16rem 0 .36rem;
            }
            .goods-name {
                position: relative;
                padding-top: .34rem;
                font-size: 0.28rem;
                line-height: .4rem;
                .r-arrow {
                    position: absolute;
                    top: .46rem;
                    right: .32rem;
                    width: 0.1rem;
                    height: 0.18rem;
                }
            }
            .price-box {
                padding-top: .16rem;
                font-size: 0.24rem;
                line-height: .34rem;
                color: #f87e81;
                position: relative;
                .goods-total {
                    padding-right: .3rem;
                    color: #4a4a4a;
                }
                .car {
                    position: absolute;
                    left: 1.8rem;
                    top: .6rem;
                    color: #4a4a4a;;
                }
            }
            .order-bottom {
                font-size: 0.28rem;
                line-height: 0.84rem;
            }
            .order-state {
                padding-left: .32rem;
            }
            .order-state_wait {
                color: #f87e81;
            }
            .order-btn {
                width: 1.6rem;
                text-align: center;
                height: 0.48rem;
                margin-top: .17rem;
                background-color: #fff;
                border-radius: 0.04rem;
            }
            .cancel-btn,
            .pay-btn {
                border: solid 2px #fa9e15;
                color: #fa9e15;
            }
            .delete-btn {
                border: solid 2px red;
                color: red
            }
            .cancel-btn {
                margin-right: .5rem;
            }
            .pay-btn,
            .delete-btn {
                margin-right: .26rem;
            }
        }
    }

</style>
