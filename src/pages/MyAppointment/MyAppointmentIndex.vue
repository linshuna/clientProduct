<template>
    <div class="my-appointment mask">
        <!--<div class="search-box clearfix">
            <img class="fl" src="../../assets/images/search-icon.png" alt="">
            <p class="fl">日历筛选</p>
        </div>-->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">待使用</mt-tab-item>
            <mt-tab-item id="2">已使用</mt-tab-item>
            <mt-tab-item id="3">已过期</mt-tab-item>
            <mt-tab-item id="4">已取消</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
            <template v-if="!noUseList||noUseList.length==0">
               <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无预约单记录'}"></no-data-tip>
            </template>
            <template v-else>
                <ul v-for="item in noUseList">
                    <li class="nav">
                        <div class="nav_top">
                            <div>
                                <p>预约门店：{{item.name}}</p>
                            </div>
                            <img src="../../assets/images/rightArrow.png" alt="" class="nav_span">
                        </div>

                        <div class="nav_section">
                            <div class="nav_section_left">
                                <div class="nav_section_left_top">
                                    <img src="../../assets/images/time.png" alt="">
                                    <p>预约时间</p>
                                </div>
                                <div class="nav_section_left_center">
                                    <p>{{item.orderDay}}</p>
                                </div>
                                <div class="nav_section_left_footer">
                                    <img src="../../assets/images/car-number.png" alt="">
                                    <p>{{item.carNo}}</p>
                                </div>
                            </div>
                            <div class="nav_section_right">
                                <button @click.stop="editor(item.orderNo)">编辑</button>
                                <button v-if="item.status==0" @click.stop="cancel(item.vid)">取消预约</button>
                            </div>
                        </div>
                        <div class="nav_footer">
                            <p>预约项目: {{item.project}}</p>
                        </div>
                    </li>
                </ul>
            </template>
                
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <template v-if="!reUseList||reUseList.length==0">
                <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无预约单记录'}"></no-data-tip>
              </template>
              <template v-else>
                <ul v-for="item in reUseList">
                    <li class="nav">
                        <div class="nav_top">
                            <div>
                                <p>预约门店：{{item.name}}</p>
                            </div>
                            <img src="../../assets/images/rightArrow.png" alt="" class="nav_span">
                        </div>

                        <div class="nav_section">
                            <div class="nav_section_left">
                                <div class="nav_section_left_top">
                                    <img src="../../assets/images/time.png" alt="">
                                    <p>预约时间</p>
                                </div>
                                <div class="nav_section_left_center">
                                    <p>{{item.orderDay}}</p>
                                </div>
                                <div class="nav_section_left_footer">
                                    <img src="../../assets/images/car-number.png" alt="">
                                    <p>{{item.carNo}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="nav_footer">
                            <p>预约项目: {{item.project}}</p>
                        </div>
                    </li>
                </ul>
              </template>  
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="couponList couponList-used">
                  <template v-if="!overList||overList.length==0">
                    <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无预约单记录'}"></no-data-tip>
                  </template>
                  <template v-else>
                    <ul v-for="item in overList">
                      <li class="nav">
                          <div class="nav_top">
                              <div>
                                  <p>预约门店：{{item.name}}</p>
                              </div>
                              <img src="../../assets/images/rightArrow.png" alt="" class="nav_span">
                          </div>

                          <div class="nav_section">
                              <div class="nav_section_left">
                                  <div class="nav_section_left_top">
                                      <img src="../../assets/images/time.png" alt="">
                                      <p>预约时间</p>
                                  </div>
                                  <div class="nav_section_left_center">
                                      <p>{{item.orderDay}}</p>
                                  </div>
                                  <div class="nav_section_left_footer">
                                      <img src="../../assets/images/car-number.png" alt="">
                                      <p>{{item.carNo}}</p>
                                  </div>
                              </div>
                              <div class="nav_section_right">
                                <button @click.stop="editor(item.orderNo)">编辑</button>
                              </div>
                          </div>
                          <div class="nav_footer">
                              <p>预约项目: {{item.project}}</p>
                          </div>
                      </li>
                    </ul>
                  </template>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="couponList couponList-used">
                  <template v-if="!cancelList||cancelList.length==0">
                    <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无预约单记录'}"></no-data-tip>
                  </template>
                  <template v-else>
                    <ul v-for="item in cancelList">
                      <li class="nav">
                          <div class="nav_top">
                              <div>
                                  <p>预约门店：{{item.name}}</p>
                              </div>
                              <img src="../../assets/images/rightArrow.png" alt="" class="nav_span">
                          </div>

                          <div class="nav_section">
                              <div class="nav_section_left">
                                  <div class="nav_section_left_top">
                                      <img src="../../assets/images/time.png" alt="">
                                      <p>预约时间</p>
                                  </div>
                                  <div class="nav_section_left_center">
                                      <p>{{item.orderDay}}</p>
                                  </div>
                                  <div class="nav_section_left_footer">
                                      <img src="../../assets/images/car-number.png" alt="">
                                      <p>{{item.carNo}}</p>
                                  </div>
                              </div>
                          </div>
                          <div class="nav_footer">
                              <p>预约项目: {{item.project}}</p>
                          </div>
                      </li>
                    </ul>
                  </template>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <base-footer></base-footer>
    </div>
</template>
<script>
    import {getMyAppoint} from '../../utils/api.js'
    import noDataTip from '@/components/noDataTip'
    import baseFooter from '@/components/baseFooter'
    export default {
        name: 'MyAppointment',
        data() {
            return {
              clientvid:'',
              ConentList: [],
              selected: '1',
              noUseList:[],
              reUseList:[],
              cancelList:[],
              overList:[]
            }
        },
        mounted: function () {
          let getStorage = this.$store.getters.getStorage;
          this.clientvid = getStorage?getStorage.vid:''
          this.getMyAppoint()
        },
        components:{
          'no-data-tip':noDataTip,
          'base-footer': baseFooter,
        },
        methods: {
            getMyAppoint() {
              let _this = this;
                getMyAppoint({clientvid: this.clientvid}).then(res => {
                  console.log(res)
                    res.map((item,index)=>{//0未使用1已使用2已取消4已过期
                      if(item.status==0){
                        this.noUseList.push(item)
                      }else if(item.status==1){
                        this.reUseList.push(item)
                      }else if(item.status==2){
                        this.cancelList.push(item)
                      }else if(item.status==4){
                        this.overList.push(item)
                      }
                    })
                    
                })
            },
            cancel: function(vid){
              this.$router.push({path:'/UserCenter/MyAppointment/MyAppointmentReason/'+vid})
            },
            editor: function(orderNo){
              this.$router.push({path:'/UserCenter/MyAppointment/MyAppointmentEditor/'+orderNo})
            }
        }
    }

</script>
<style lang="scss" scoped>
    .search-box {
        width: 6.84rem;
        height: 0.54rem;
        line-height: .54rem;
        margin: .12rem auto;
        background-color: #ffffff;
        border-radius: 0.06rem;
        img {
            width: 0.26rem;
            height: 0.26rem;
            padding: .14rem .18rem 0;
        }
        p {
            padding-top: .02rem;
            font-size: 0.24rem;
            color: #cccccc;
        }
    }

    .mint-tab-container{
        top: .7rem;
    }
    .mint-navbar {
        background-color: #fff;
        border-bottom: 1px solid #eaeaea;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
    }

    .mint-tab-item {
        height: .7rem;
        line-height: .7rem;
        margin: 0 .45rem;
        padding: 0!important;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 2px solid #fa9e15;
        color: #fa9e15;
    }

    .nav {
        margin-top: .2rem;
        background-color: #ffffff;
    }

    .nav_top {
        display: flex;
        align-items: center;
        height: 0.7rem;
        border-bottom: 1px solid #efefef;
        font-size: 0.3rem;
        padding-left: .2rem;
    }

    .nav_top_img {
        width: 0.52rem;
        height: 0.52rem;
        margin-right: 0.14rem;
        margin-left: 0.38rem;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .nav_span {
        width: 0.15rem;
        position: absolute;
        right: 0.3rem;
    }

    .nav_section {
        display: flex;
        align-items: center;
        height: 1.68rem;
        position: relative;
    }

    .nav_section_right {
      position: absolute;
      right: .4rem;
      button {
        width: 1.48rem;
        height: 0.48rem;
        text-align: center;
        line-height: 0.48rem;
        border: 1px solid #ff8004;
        color: #ff8004;
        background-color: #fff;
      }
    }
    

    .nav_section_left {
        margin-top: 0.12rem;
        width: 2.8rem;
        height: 1.4rem;
        margin-left: 0.66rem;
    }

    .nav_section_left_top, .nav_section_left_footer {
        display: flex;
        align-items: center;
    }

    .nav_section_left_top p, .nav_section_left_footer p {
        margin-left: 0.1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.28rem;
    }

    .nav_section_left_top img, .nav_section_left_footer img {
        width: 0.26rem;
        height: 0.26rem;
        display: inline-block;
    }

    .nav_section_left_center p {
        margin-left: 0.36rem;
        line-height: 0.4rem;
        font-size: 0.32rem;
        color: #ea4953;
        width: 3rem;
        height: 0.44rem;
    }

    .nav_footer {
        width: 7.5rem;
        height: 0.56rem;
        background-color: #ff8106;
        display: flex;
        align-items: center;
    }

    .nav_footer p {
        height: 0.34rem;
        font-size: 0.24rem;
        color: #ffffff;
        line-height: 0.34rem;
        margin-left: 0.36rem;
    }
</style>

<style scoped>
  .mint-tab-item-label{
    display: inline-block;
  }
</style>