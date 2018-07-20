<template>
  <div class="mask">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">车辆信息</mt-tab-item>
      <mt-tab-item id="2">消费记录</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="details-hd clearfix">
          <img :src="carMsg.icon" alt="" class="hd-img fl">
          <div class="hd-info fl">
            <p class="car-name">{{carMsg.carplate}} {{carMsg.carmodel}} {{carMsg.carnat}}</p>
            <p class="car-number">车架号：{{carMsg.vin | noDataFilter}}</p>
            <img src="../../assets/images/车辆信息-修改icon.png" alt="" class="edit-icon" @click.stop="editCar">
          </div>
        </div>
        <ul class="details-bd">
          <li class="cell">
            <p class="left">注册时间</p>
            <p class="right">{{carMsg.regtime | noDataFilter}}</p>
          </li>
          <!--<li class="cell">
            <p class="left">车价</p>
            <p class="right">777万</p>
          </li>-->
          <li class="cell">
            <p class="left">发动机号</p>
            <p class="right">{{carMsg.engine | noDataFilter}}</p>
          </li>
          <li class="cell">
            <p class="left">商业保险到期日</p>
            <p class="right">{{carMsg.cominsurance | noDataFilter}}</p>
          </li>
          <li class="cell">
            <p class="left">交强保险到期日</p>
            <p class="right">{{carMsg.daninsurance | noDataFilter}}</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="footer">
          
          <template v-if="consumeList&&consumeList.length>0">
            <div class="footer_top">
              <div>
                <p>详情</p>
              </div>
              <div class="footer_top_right">
                <p>查看更多账单</p>
                <span>
                  <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
                </span>
              </div>
            </div>
            <ul class="footer_footer">
              <li class="footer_footer_msg">
                <div class="footer_footer_msg_left">
                  <p>支付小保养费</p>
                </div>
                <div class="footer_footer_msg_right">
                  <p class="footer_footer_msg_right_pone">-300.00</p>
                  <p class="footer_footer_msg_right_ptwo">2018-8-31 21:14</p>
                </div>
              </li>
            </ul>
          </template>
          <template v-else>
            <no-data-tip :tipData="{typeTipe:0,conTip:'暂无消费记录'}"></no-data-tip>
          </template>
          
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import {
    carMsg
  } from '@/utils/api.js'
  import noDataTip from '@/components/noDataTip'
  export default {
    name: 'MyCarDetails',
    data() {
      return {
        selected: '1',
        carvid: null,
        carMsg: {},
        consumeList: []//这里是存消费的列表
      }
    },
    components:{
      'no-data-tip': noDataTip
    },
    mounted() {
      // this._getIndexData()
      this.carvid = this.$route.params.carvid;
      this.init() 
    },
    filters:{
      noDataFilter: function(value){
          if(!value||value=='') return '暂无';
            else return value;
      }
    },
    methods: {
      init() {
        carMsg({carvid: this.carvid}).then(res => {
          this.carMsg = res;
          console.log(res)
        })
      },
      editCar: function(){
        this.$router.push({path: '/UserCenter/MyCar/AddCar/'+this.carvid})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mint-navbar {
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
  }

  .mint-tab-item {
    margin: 0 .92rem;
    height: .84rem;
  }

  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #fa9e15;
    color: #fa9e15;
  }

  .details-hd {
    width: 7.5rem;
    height: 1.68rem;
    margin-top: 0.2rem;
    background-color: #ffffff;
    .hd-img {
      width: 1.2rem;
      height: 1.2rem;
      margin: .24rem .4rem 0 .32rem;
    }
    .hd-info {
      position: relative;
      width: 5.58rem;
    }
    .car-name {
      height: 1rem;
      font-size: 0.4rem;
      line-height: 1rem;
      border-bottom: 1px solid #efefef;
    }
    .car-number {
      height: 0.7rem;
      line-height: .7rem;
      font-size: 0.28rem;
    }
    .edit-icon {
      position: absolute;
      top: 0.24rem;
      right: 0.24rem;
      width: 0.28rem;
      height: 0.28rem;
    }
  }

  .details-bd {
    margin-top: 0.2rem;
    padding: 0 .26rem;
    background-color: #fff;
    .cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 1rem;
      font-size: 0.28rem;
      border-bottom: 1px solid #eaeaea;
      .left {
        color: #333;
      }
      .right {
        color: #999;
      }
    }
  }





  .footer {
    margin-top: 0.1rem;
  }

  .footer_top {
    height: 0.42rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0.24rem;
    padding-right: 0.5rem;
  }

  .footer_top_right {
    display: flex;
    flex-direction: row;
  }

  .footer_footer {
    background-color: #fff;
  }

  .footer_footer_msg {
    display: flex;
    justify-content: space-between;
    padding-left: 0.24rem;
    padding-right: 0.5rem;
    height: 0.96rem;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }

  .footer_footer_msg_right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .footer_footer_msg_left p {
    font-size: 0.28rem;
    color: #333
  }

  .footer_footer_msg_right_pone {
    font-size: 0.30rem;
    color: #333;
  }

  .footer_footer_msg_right_ptwo {
    color: #ccc;
  }

  .rightArrow {
    width: 0.1rem;
    height: 0.1rem;
    padding-left: 0.08rem;
  }

</style>
