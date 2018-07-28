<template>
    <div class="payment-wrap mask">
        <div class="nav">
            <div class="nav_top">
                <div class="nav_img">
                    <img :src="orderMsg.storepic" alt="">
                </div>
                <div class="nav_p">
                    <p>{{orderMsg.storename}}</p>
                    <p>{{orderMsg.city}}{{orderMsg.dist}}{{orderMsg.address}}</p>
                </div>

            </div>
            <div class="nav_center" @click.stop="openMap(orderMsg.longitude,orderMsg.latitude,orderMsg.storename,orderMsg.address)">
                <div class="nav_center_left">
                    <img src="../../../assets/images/洗车支付-导航icon.png" alt="">
                    <p>导航去店</p>
                </div>
                <div class="nav_center_img">
                    <img src="../../../assets/images/rightArrow.png" alt="">
                </div>
            </div>

            <div class="section">
                <div class="section_top">
                    <span></span>
                    <p>服务</p>
                </div>
                <div class="section_bottom">
                    <div class="section_bottom_left">
                      <img :src="orderMsg.pic" alt="商品图片">
                      <p>{{orderMsg.name}}</p>
                    </div>
                    <div class="section_bottom_right">
                        <p>￥ {{orderMsg.amount}} x1</p>
                    </div>
                </div>
            </div>


            <div class="section_footer">
                <div class="section_footer_top">
                    <p>订单编号：{{orderMsg.orderNo}}</p>
                    <p>订单时间：{{orderMsg.addtime}}</p>
                    <p>用户名：{{orderMsg.buyname}}</p>
                    <p>电话：{{orderMsg.buymobile}}</p>
                </div>

                <div class="section_footer_msg">
                    <div class="section_footer_left">
                        <p>商品总额</p>
                    </div>
                    <div class="section_footer_right">
                        <p>&nbsp￥&nbsp{{orderMsg.amount}}</p>
                    </div>
                </div>

                

                <div class="footer_btn">
                    <div class="section_footer_footer">
                        <p>实付款:</p>
                        <p>￥{{orderMsg.amount}}</p>
                    </div>
                    <div class="footer_btn_btn">
                        <button @click.stop="cancel">取消订单</button>
                       <!--<router-link to="/UserCenter/PaymentFinsh"></router-link>-->
                       <button  @click.stop="pay">立即支付</button>
                    </div>
                </div>
            </div>
        </div>
  <!--遮罩层-->
    <div class="checked-mask" v-if="showPay"> 
      <div class="set-position">

          <template v-for="(listItem,listIndex) in options">
            <div class="set-inline-block clearFloat" :class="{'border-bottom-1px':listIndex+1!=options.length}">
            <!--:checked="listIndex==0?true:false"-->
              <input :disabled="listItem.value==3?true:false" type="radio" :name="'checked'+listIndex" :value="listItem.label" @change="check(listItem.value,listItem.label)" class="fr" :class="{'gray':listItem.value==3}">
              <label :for="'checked'+listItem.value" class="fl">{{listItem.label}}</label> 
            </div>
            
          </template> 
          <div class="delIcon" @click.stop="showPay=false"></div>
        </div>
        
      </div>
    </div>

    </div>
</template>

<script>
    //paystep
    import {MessageBox} from 'mint-ui'
    import {paystep,goodsCancels,goodsPay } from '@/utils/api.js'
    export default {
        name: "payment",
        data(){
          return {
            orderNo: '',
            orderMsg:{},
            payType:'',//支付的方式
            showPay:false,//支付的隐藏
            //支付类型1余额支付 2活动金额支付 3微信支付
            options:[{
                label: '余额支付',
                value: '1'
              },
              {
                label: '活动金额支付',
                value: '2',
                disabled: true
              },
              {
                label: '微信支付',
                value: '3',
                disabled: true
              }]
          }
        },
        created() {
          this.orderNo = this.$route.params.orderNo;
        },
        mounted() {
          this.$nextTick(function(){
            this.init()
          })
        },
        methods:{
          init: function(){
            paystep({orderNo: this.orderNo}).then(res=>{
              this.orderMsg = res;
            })
          },
          pay:function(){
            this.showPay = true
          },
          check: function(id,label){
            let _this = this;
            this.options.map((item,index)=>{
              if(item.value == id){
                this.payType = id;
                setTimeout(function(){
                  _this.showPay = false;
                },2000)
              }
            })
            MessageBox.confirm('是否确定支付订单','').then(action => {
              goodsPay({orderNo: this.orderNo,pay:this.payType}).then(res=>{
                if(res&&!res.errorCode){
                  this.$store.commit('showToast','支付成功')
                  this.$store.commit('delay',{url:'/UserCenter/MyOrder',$router:this.$router})
                }
                  
              })

            }).catch(()=>{})
            
          },
          cancel: function(){
            MessageBox.confirm('是否确定删除订单','').then(action => { 
              goodsCancels({orderNo: this.orderNo}).then(res=>{
                if(res&&!res.errorCode){
                  this.$store.commit('showToast','删除成功')
                  this.$store.commit('delay',{url:'/UserCenter/MyOrder',$router:this.$router})
                }
              })

            }).catch(()=>{})
            
          },
          openMap:function (long,lat,dist,address) { //打开地图
            this.map(long,lat,dist,address)   
          },
        }
    }
</script>

<style lang="scss" scoped>
    .nav_top {
        height: 1.44rem;
        background-color: #fff;
        display: flex;
        align-items: center;

    }

    .nav_img {
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 0.28rem;
        img{
          width: 100%;
          height: 100%;
        }
    }

    .nav_p {
        margin-left: 0.32rem;
    }

    .nav_p :first-child {
        font-size: 0.28rem;
        color: #303030;
    }

    .nav_p:last-child {
        font-size: 0.24rem;
        color: #707070;
    }

    .nav_center {
        height: 0.94rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #efefef;
    }

    .nav_center_img img {
        width: 0.16rem;
        height: 0.3rem;
        margin-right: 0.24rem;
    }

    .nav_center_left {
        display: flex;
        margin-left: 0.3rem;

    }

    .nav_center_left img {
        width: 0.4rem;
        height: .5rem;
    }

    .nav_center_left p {
        margin-left: 0.1rem;
        color: #303030;
        line-height: .5rem;
    }

    .section_top {
        width: 100%;
        height: 0.5rem;
        background-color: #fff;
        display: flex;
        margin-top: 0.2rem;
        position: relative;
        color: #303030;
    }

    .section_top span {
        margin-left: 0.28rem;
        width: 0.06rem;
        height: 0.26rem;
        border: solid 0.04rem #f28817;
        margin-top: 0.12rem;
    }

    .section_top p {
        margin-left: 0.14rem;
        line-height: 0.5rem;
    }

    .section_bottom {
        height: 1.36rem;
        background-color: #fff;
        border-top: 1px solid #efefef;
    }

    .section_bottom_left {
        display: flex;
        align-items: center;
        margin-left: 0.18rem;
    }

    .section_bottom_left p {
        margin-left: 0.16rem;
        font-size: 0.26rem;
        color: #303030;
    }

    .section_bottom_left img {
        width: 1.26rem;
        height: 0.74rem;
    }

    .section_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .section_bottom_right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        margin-right: 0.26rem;
    }

    .section_bottom_right p:first-child {
        color: #ce4159;
        font-size: 0.26rem;
    }

    .section_bottom_right p:last-child {
        color: #393939;
    }

    .section_footer_top {
        height: 2.24rem;
        background-color: #fff;
        border-top: 1px solid #efefef;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        color: #393939;
    }

    .section_footer_top p {
        margin-left: 0.28rem;
        line-height: 0.45rem;

    }

    .section_footer_top_btn {
        position: absolute;
        background-color: #fff;
        border: 1px solid #ccc;
        margin-left: 0.28rem;
    }

    .section_footer_msg {
        height: 1.84rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding-left: 0.28rem;
        padding-right: 0.28rem;
        border-top: 1px solid #efefef;
    }

    .section_footer_right, .section_footer_left {
        height: 1.84rem;
        line-height: 0.52rem;
        color: #393939;
    }

    .section_footer_right p {
        color: #939393;
    }

    .section_footer_footer {
        background-color: #fff;
        border-top: 1px solid #efefef;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-left: .2rem;
    }

    .section_footer_footer p {
        color: #939393;
        margin-right: 0.28rem;
    }

    .section_footer_footer p:first-child {
        font-size: 0.28rem;
        color: #333333;
    }

    .section_footer_footer p:last-child {
        font-size: 0.28rem;
        color: #d52e52;
    }

    .footer_btn {
        width: 100%;
        height: 1.04rem;
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        display: flex;
    }
    .footer_btn_btn{
        position: absolute;
        right: 0.22rem;
        @include ct
    }
    .footer_btn_btn button:first-child{
        width: 1.6rem;
        height: 0.68rem;
        border-radius: 0.08rem;
        border: solid 1px #c9c9c9;
        background-color: #fff;
        margin-right: 0.38rem;
    }
    .footer_btn_btn button:last-child{
        width: 1.6rem;
        height: 0.68rem;
        border-radius: 0.08rem;
        border: solid 1px #f28817;
        background-color: #fff;
        color: #f28817;
    }

  .gray{
    background: #999!important;
  }
  input[type="radio"] {
    -moz-appearance: button;
    /* Firefox */
    -webkit-appearance: button;
    border: 1px solid #999;
    /* Safari 和 Chrome */
    display: inline-block;
    outline: none;
    height: 0.45rem;
    width: 0.45rem;
    margin-bottom: 1px;
    vertical-align: middle;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
  }

  input[type="radio"]:checked {
    display: inline-block;
    background: url('../../../assets/images/rightIcon.png')no-repeat;
    height: .45rem;
    width: 0.45rem;
    margin-bottom: 1px;
    vertical-align: middle;
    border: 1px solid #fa9e15 ;
    border-radius: 50%;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
  }  
  .checked-mask{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: rgba(0,0,0,.3);
  }
  .set-position{
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radio: 5px;
    background: #ffffff;
    padding: 0 .2rem;
  }
  .set-inline-block{
    position: relative;
    height: .7rem;
    line-height: .7rem;
  }
  .delIcon{
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translate(-50%,0);
    width: 25px !important;
    height: 25px;
    z-index: 999;
    background: rgba(0, 0, 0, 0.2) !important;
  }
  .delIcon::before,.delIcon::after{
    left: 5px;
    width: 60%!important;
  }
</style>