<template>
    <div class="selfCenter-wrap mask">
        <!--<mt-navbar v-model="selected">-->
        <!--<mt-tab-item @click.native="transmit(sortList,sortData)" id="1">{{sortData}}</mt-tab-item>-->
        <!--<mt-tab-item @click.native="transmit(FilterList,filterData)" id="2">{{filterData}}</mt-tab-item>-->
        <!--</mt-navbar>-->
        <!--<select-list v-if="showSelList" @selType="selType" :selItem='selItem'-->
        <!--:selectList='selectList'></select-list>-->
        <template v-if="!ClientTclientList||ClientTclientList.length==0">
          <no-data-tip :tipData="{typeTipe:0,titleTip:'订单',conTip:'暂无推荐好友'}"></no-data-tip>
        </template>
        <template v-else>
          <ul class="selfCenter">
              <li v-for="item in ClientTclientList">
                  <div class="selfCenter_top">
                      <img :src="item.headimg" alt="">
                      <p class="selfCenter_top_p">{{item.uname}}</p>
                      <p class="selfCenter_top_pd">{{item.updatetime}}</p>
                  </div>
              </li>
          </ul>
        </template>
        
    </div>
</template>

<script>
    import {SelectList} from "@/utils/mixins";
    import {getClientTclient} from '@/utils/api.js'
    import noDataTip from '@/components/noDataTip'
    export default {
        mixins: [SelectList],
        name: "",
        data() {
            return {
                // selected: '1',
                // selItem: '推荐排序', //子组件默认值
                // selectList: [], //子组件列表
                // sortList: ['推荐排序', '附近优先', '累计安装', '评分最高'],
                // sortData: '推荐排序',
                // FilterList: ['汽车美容', '常规保养'],
                // filterData: '筛选',
                // showSelList: false,

                ClientTclientList: [],
                clientvidL: ''
            }

        },
        created() {

        },
        mounted() {
            let getStorage = this.$store.getters.getStorage;
            if (getStorage) {
                this.clientvid = this.$store.getters.getStorage.vid;
                this._getClientTclient()
            }
        },
        components:{
          'no-data-tip':noDataTip
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
            },
            _getClientTclient() {

                getClientTclient({clientvid: this.clientvid}).then(res => {
                    if (res && !res.errorCode) {
                        this.ClientTclientList = res
                        // console.log(res);
                        console.log(this.ClientTclientList)
                        console.log(this.clientvid);
                    }
                })

            }
        }
    }

</script>

<style scoped>
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

    .selfCenter {
        margin-top: .2rem;
        min-height: 15rem;
        background-color: #fff;
    }

    .selfCenter_top {
        height: 1.04rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 0.3rem;
        position: relative;
        border-bottom: 1px solid #efefef;
    }

    .selfCenter_top img {
        display: inline-block;
        width: 0.72rem;
        height: 0.72rem;
        /*background-color: #55b625;*/
    }

    .selfCenter_top_p {
        padding-left: 0.18rem;
        height: 0.4rem;
        color: #4f5256;
    }

    .selfCenter_top_pd {
        position: absolute;
        right: 0.28rem;
        height: 0.34rem;
        font-size: 0.24rem;
        color: #ababad;
    }
</style>