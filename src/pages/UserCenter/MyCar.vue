<template>
    <div class="my-car">
      <template v-if="indexList&&indexList.length>0">
        <ul class="car-list">
            <li v-for="item in indexList">
                <div @click.stop="showCarMsg(item.carvid)">
                    <div class="car-hd clearfix">
                        <img :src="item.icon" alt=""
                             class="car-img">
                        <span class="car-name" v-if="item.modelid!=0">{{item.carplate}}-{{item.carmodel}}-{{item.carnat}}</span>
                        <span class="car-name" v-else>暂无</span>
                        <img class="fr r-arrow" src="../../assets/images/rightArrow.png">
                    </div>
                </div>
                <div class="car-bd">
                    <p class="car-number car-info">
                        <img src="../../assets/images/car-number.png" alt="">{{item.carNo}}</p>
                    <p class="car-mileage car-info">
                        <img src="../../assets/images/mycar-dist.png" alt="">上次进店里程
                        <span>{{item.distance}}</span>公里
                    </p>
                    <div class="handle-box clearfix" >
                        <label class="defaultIcon" @click.stop="getPretermit(item.carvid)">
                            <input type="radio" :checked="item.moren==1?true:false" name="default">
                            <span>默认</span> 
                        </label>
                        <div class="del-box deleteIcon" @click.stop="delCar(item.carvid)">
                            <img src="../../assets/images/我的车辆-垃圾桶icon.png" alt="" class="del-icon">
                            <span class="">删除</span>
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
    import {carList,setCarDefault,delCar} from '../../utils/api'
    import noDataTip from '@/components/noDataTip'
    export default {
        name: 'App',
        data() {
            return {
                indexList: [],
                clientvid:0
            }
        },
        components:{
          'no-data-tip': noDataTip
        },
        created: function () {
          let getStorage = this.$store.getters.getStorage;
          this.clientvid = getStorage?getStorage.vid:0;
          this._getMyCar()
        },
        mounted: function () {
          
        },
        watch: {
          '$route' (to, from) {
            this._getMyCar()
          }
        },
        methods: {
            _getMyCar() {
                carList({clientvid: this.clientvid}).then(res => {
                    this.indexList = res
                })
            },
            showCarMsg: function(carvid){
              this.$router.push({path: '/UserCenter/MyCarDetails/'+carvid})
            },
            getPretermit(carvid) {
                setCarDefault({clientvid: this.clientvid,carvid: carvid}).then(res => {
                    this.$store.commit('showToast','更改默认成功')
                    this._getMyCar()
                })
            },
            delCar: function(carvid){
              delCar({clientvid: this.clientvid,carvid: carvid}).then(res=>{
                  this.$store.commit('showToast','删除车辆成功')
                  this._getMyCar()
              })
            },
            addCar: function(){
              this.$router.push({path: '/UserCenter/MyCar/AddCar/0'})
            }
        }
    }

</script>
<style lang="scss" scoped>
  .my-car{
    width:100%;
    min-height: 100%;
    position: absolute;
    left: 0;
    top:0;
    padding-bottom: 2rem;
    background-color: #f5f5f5;
  }
    .car-list {
        li {
            margin-top: .2rem;
            background: url('../../assets/images/mycar-bg.png') no-repeat;
            background-size: 100% 100%;
        }
        .car-hd {
            line-height: .7rem;
            border-bottom: 1px solid #eaeaea;
            width: 100%;
            padding-left: .2rem;
        }
        .car-img {
            width: 0.52rem;
            height: 0.52rem;
            vertical-align: middle;
        }
        .car-name {
            font-size: 0.3rem;
            vertical-align: middle;
            padding-left: .1rem;
            width: 85%;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .r-arrow {
            width: 0.1rem;
            height: 0.18rem;
            padding: .28rem .2rem 0 0;
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
            }
        }
    }
    .defaultIcon{
      display: inline-block;
      vertical-align: middle;
      margin-right: .15rem;
      input,span{
        vertical-align: middle;
      }
    }
    .deleteIcon{
      display: inline-block;
      vertical-align: middle;
      img,span{
        vertical-align: middle;
      }
    }
    .add-car-btn {
        position: fixed;
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
        vertical-align: middle;
    }

    input[type="radio"]:checked {
        display: inline-block;
        background: url('../../assets/images/我的车辆-选中icon.png') no-repeat;
        background-size: 0.36rem 0.36rem;
        height: 0.36rem;
        width: 0.36rem;
        vertical-align: middle;
    }


</style>
