<template>
    <div class="my-appointment mask">
      <router-view></router-view>
    </div>
</template>
<script>
    import {getMyAppoint} from '../../utils/api.js'
    import noDataTip from '@/components/noDataTip'
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
          'no-data-tip':noDataTip
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
            width: 100%;
            height: 100%;
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

