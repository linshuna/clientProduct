<template>
<<<<<<< HEAD
    <div class="my-appointment mask">
        <div class="search-box clearfix">
            <img class="fl" src="../../assets/images/search-icon.png" alt="">
            <p class="fl">日历筛选</p>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">待使用</mt-tab-item>
            <mt-tab-item id="2">已使用</mt-tab-item>
            <mt-tab-item id="3">已过期</mt-tab-item>
            <mt-tab-item id="4">已取消</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul v-for="item in ConentList">
                    <li class="nav">
                        <div class="nav_top">
                            <div class="nav_top_img">
                                <img src="../../assets/images/carImg.png" alt="">
                            </div>
                            <div>
                                <p>奔驰C级 2018款 C 180 L 动感版</p>
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
                                    <p>{{item.appTime}}</p>
                                </div>
                                <div class="nav_section_left_footer">
                                    <img src="../../assets/images/car-number.png" alt="">
                                    <p>{{item.carNO}}</p>
                                </div>
                            </div>
                            <div class="nav_section_right">
                                <button>取消预约</button>
                            </div>
                        </div>
                        <div class="nav_footer">
                            <p>预约项目: 小保养,更换雨刮器...</p>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul>
                    <li class="nav">
                        <div class="nav_top">
                            <div class="nav_top_img">
                                <img src="" alt="">
                            </div>
                            <div>
                                <p>奔驰C级 2018款 C 180 L 动感版</p>
                            </div>
                            <img src="../../assets/images/rightArrow.png" alt="" class="nav_span">
                        </div>
                        <div class="nav_section">
                            <div class="nav_section_left">
                                <div class="nav_section_left_top">
                                    <img src="" alt="">
                                    <p>预约时间</p>
                                </div>
                                <div class="nav_section_left_center">
                                    <p>2018.07.10 13:00</p>
                                </div>
                                <div class="nav_section_left_footer">
                                    <img src="" alt="">
                                    <p>粤A123456</p>
                                </div>
                            </div>
                            <div class="nav_section_right">
                                <button>取消预约</button>
                            </div>
                        </div>
                        <div class="nav_footer">
                            <p>预约项目: 小保养,更换雨刮器...</p>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="couponList couponList-used">
                    <ul>
                        <li class="nav">
                            <div class="nav_top">
                                <div class="nav_top_img">
                                    <img src="" alt="">
                                </div>
                                <div>
                                    <p>奔驰C级 2018款 C 180 L 动感版</p>
                                </div>
                                <img src="../../assets/images/rightArrow.png" alt="" class="nav_span">
                            </div>
                            <div class="nav_section">
                                <div class="nav_section_left">
                                    <div class="nav_section_left_top">
                                        <img src="" alt="">
                                        <p>预约时间</p>
                                    </div>
                                    <div class="nav_section_left_center">
                                        <p>2018.07.10 13:00</p>
                                    </div>
                                    <div class="nav_section_left_footer">
                                        <img src="" alt="">
                                        <p>粤A123456</p>
                                    </div>
                                </div>
                                <div class="nav_section_right">
                                    <button>取消预约</button>
                                </div>
                            </div>
                            <div class="nav_footer">
                                <p>预约项目: 小保养,更换雨刮器...</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="couponList couponList-used">
                    <ul>
                        <li class="nav">
                            <div class="nav_top">
                                <div class="nav_top_img">
                                    <img src="" alt="">
                                </div>
                                <div>
                                    <p>奔驰C级 2018款 C 180 L 动感版</p>
                                </div>
                                <img src="../../assets/images/rightArrow.png" alt="" class="nav_span">
                            </div>
                            <div class="nav_section">
                                <div class="nav_section_left">
                                    <div class="nav_section_left_top">
                                        <img src="" alt="">
                                        <p>预约时间</p>
                                    </div>
                                    <div class="nav_section_left_center">
                                        <p>2018.07.10 13:00</p>
                                    </div>
                                    <div class="nav_section_left_footer">
                                        <img src="" alt="">
                                        <p>粤A123456</p>
                                    </div>
                                </div>
                                <div class="nav_section_right">
                                    <button>取消预约</button>
                                </div>
                            </div>
                            <div class="nav_footer">
                                <p>预约项目: 小保养,更换雨刮器...</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import {getAppointConent} from '../../utils/api.js'

    export default {
        // import{
        //
        // }from '..'
        name: 'MyAppointment',
        data() {
            return {
                ConentList: [],
                selected: '1'
            }
        },
        mounted: function () {
            this._getAppointConent()
        },
        methods: {
            _getAppointConent() {
                getAppointConent().then(res => {

                    this.ConentList = [res]
                    console.log(res);
                })
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

    .mint-navbar {
        background-color: #fff;
        border-bottom: 1px solid #eaeaea;
    }

    .mint-tab-item {
        height: .84rem;
        margin: 0 .45rem;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 2px solid #fa9e15;
        color: #fa9e15;
    }

    .nav {
=======
  <div class="my-appointment mask">
    <div class="search-box clearfix">
      <img class="fl" src="../../assets/images/search-icon.png" alt="">
      <p class="fl">日历筛选</p>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待使用</mt-tab-item>
      <mt-tab-item id="2">已使用</mt-tab-item>
      <mt-tab-item id="3">已过期</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul>
          <li class="nav">
            <div class="nav_top">
              <div class="nav_top_img">
                <img src="../../assets/images/carImg.png" alt="">
              </div>
              <div>
                <p>奔驰C级 2018款 C 180 L 动感版</p>
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
                  <p>2018.07.10 13:00</p>
                </div>
                <div class="nav_section_left_footer">
                  <img src="../../assets/images/car-number.png" alt="">
                  <p>粤A123456</p>
                </div>
              </div>
              <div class="nav_section_right">
                <button>取消预约</button>
              </div>
            </div>
            <div class="nav_footer">
              <p>预约项目: 小保养,更换雨刮器...</p>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul>
          <li class="nav">
            <div class="nav_top">
              <div class="nav_top_img">
                <img src="" alt="">
              </div>
              <div>
                <p>奔驰C级 2018款 C 180 L 动感版</p>
              </div>
              <img src="../../assets/images/rightArrow.png" alt="" class="nav_span">
            </div>
            <div class="nav_section">
              <div class="nav_section_left">
                <div class="nav_section_left_top">
                  <img src="" alt="">
                  <p>预约时间</p>
                </div>
                <div class="nav_section_left_center">
                  <p>2018.07.10 13:00</p>
                </div>
                <div class="nav_section_left_footer">
                  <img src="" alt="">
                  <p>粤A123456</p>
                </div>
              </div>
              <div class="nav_section_right">
                <button>取消预约</button>
              </div>
            </div>
            <div class="nav_footer">
              <p>预约项目: 小保养,更换雨刮器...</p>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="couponList couponList-used">
          <ul class="conpon-card">
            <li class="card-item">
              <div class="item-top">
                <span class="">¥</span>
                <p class="number ">20</p>
                <p class="type ">洗车券</p>
                <img class="invalid-img" src="alreadyIcon">
              </div>
              <div class="item-bottom ">
                <p>有效期至2018-06-09 23:59：59</p>
              </div>
            </li>
          </ul>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  export default {
    name: 'MyAppointment',
    data() {
      return {
        selected: '1'
      }
    },
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

  .mint-navbar {
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
  }

  .mint-tab-item {
    height: .84rem;
    margin: 0 .45rem;
  }

  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #fa9e15;
    color: #fa9e15;
  }
  .nav {
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
        margin-top: .2rem;
        background-color: #ffffff;
    }

    .nav_top {
        display: flex;
        align-items: center;
        height: 0.7rem;
        border-bottom: 1px solid #efefef;
        font-size: 0.3rem;
    }

    .nav_top_img {
        width: 0.52rem;
        height: 0.52rem;
        margin-right: 0.14rem;
        margin-left: 0.38rem;
        img {
<<<<<<< HEAD
            width: 100%;
            height: 100%;
=======
          width: 100%;
          height: 100%;
>>>>>>> bf5cc854ff7d8e21e5acc494e8594a4cc4a4d3b8
        }
    }

    .nav_span {
        width: 0.1rem;
        height: 0.18rem;
        position: absolute;
        right: 0.36rem;
    }

    .nav_section {
        display: flex;
        align-items: center;
        height: 1.68rem;
        position: relative;
    }

    .nav_section_right button {
        @include ct;
        width: 1.48rem;
        height: 0.48rem;
        position: absolute;
        text-align: center;
        line-height: 0.48rem;
        right: 0.42rem;
        border: 1px solid #ff8004;
        color: #ff8004;
        background-color: #fff;
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

