<template>
    <div class="nearby-stores">
        <nav>
            <div class="addres" @click="changeAddress(1)">
                <p>{{addressname.name}}</p>
                <img src="../assets/images/btmArrow.png" alt="">
            </div>
            <p class="sort" @click="changeAddress(2)">默认排序
                <img src="../assets/images/btmArrow.png" alt="">
            </p>
        </nav>

        <!--三级联动-->
        <mt-popup v-model="popupVisible" position="top">
          <mt-picker ref='pickerObj' :slots="slots" valueKey="name" ></mt-picker>
          <div class="picker-toolbar">  
              <span class="mint-datetime-cancel" @click="cancle">取消</span>  
              <span class="mint-datetime-confirm" @click="select">确定</span>  
          </div> 
        </mt-popup>

        <ul class="store-list">
            <li v-for="item in StoreaList">

                <div class="store-hd">
                    <p>{{item.name}}</p>
                    <img src="../assets/images/rightArrow.png" class="r-arrow" alt="">
                </div>
                <div class="store-bd clearfix">
                    <img src="http://img4.imgtn.bdimg.com/it/u=2136180122,282910574&fm=27&gp=0.jpg" alt=""
                         class="store-img fl">
                    <div class="store-info-box fl">
                        <p class="store-address">{{item.province}}{{item.city}}{{item.dist}}{{item.address}}</p>
                        <div class="star-box">
                            <score-lv :stars='3'></score-lv>

                        </div>
                        <div class="item-box">
                            <div v-if="StoreaList.state == 1" class="appointment">接受预约</div>
                            <div v-else-if="StoreaList.state == 2" class="appointment app-hot">预约火爆</div>
                            <div v-else class="appointment app-full">预约已满</div>
                            <div class="item-sum">维修丶保养</div>
                        </div>
                        <p class="store-time">{{item.storeTime}}</p>
                        <div class="store-dist">大约{{Math.round(item.distance)}}m</div>
                        <img src="../assets/images/洗车详情-定位icon.png" alt="" class="dist-icon">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    var jsonp = require('jsonp');
    import {score} from "mixins";
    import {getNearbyStorea,getCityList,getAddress} from '../utils/api.js'
    // import { getIndexData } from '../utils/api.js'
    export default {
        mixins: [score],
        name: "NearbyStores",
        data() {
            return {
                StoreaList: [],
                pageData: {},

                slots:[],
                province: [],//省
                city:[],//市
                area:[],//区
                popupVisible: false,
                addressValue:0,
                addressName:'',
                checkedName:'',
                currentPicker:1,
                checkedStatus:[
                  {name:'附近优先',value:'2'},
                  {name:'累计点评',value:'3'},
                  {name:'默认排序',value:'1'},
                  {name:'评分最高',value:'4'},
                ],
                addressname:{}
            };
        },
        created() {
          
        },
        mounted() {
          let _this = this;
          jsonp('http://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&get_poi=0&output=jsonp', null, function (err, data){
            let res = data.result
            let addressName = res.ad_info.city+" "+res.ad_info.district;
            _this.$set(_this.addressname,'name',addressName)
            console.log(11,_this.addressName)
          })
          console.log(_this.addressName)
            // this.initCurrentAddress();//获取当前位置
            this.initCity();//获取城市
            this._getNearbyStorea()
        },
        methods: {
            _getNearbyStorea() {
                getNearbyStorea({
                    longitude: 23.1464370884,
                    latitude: 113.2813811302
                }).then(res => {
                    this.StoreaList = res
                })
            },
            onValuesChange: function(){
              let obj = document.getElementsByClassName('picker-slot-wrapper')[0];
            },
            initCurrentAddress: function(){
              

            },
            initCity: function(){
              getCityList().then(res=>{
                res.map((item,index)=>{
                  this.province.push(item.province)
                  item.citylist.map((cityItem,cityIndex)=>{
                    this.city.push(cityItem.city)
   
                      cityItem.area.map((areaItem,areaIndex)=>{
                        this.area.push({name:areaItem.dist,vlaue: areaItem.areaCode})
                      })
                    
                    
                  })
                })
                this.area.push({name:'全部',value:0})

              })
            },
            changeAddress: function(value){
              this.popupVisible=true;//激活picker组件
              this.currentPicker = value;//选中的picker对象
              if(value==1){
                this.slots=[{
                      flex: 1,
                      defaultIndex: 0,    
                      values: this.province,  //省份数组
                      className: 'slot1',
                      textAlign: 'center'
                    }, {
                      divider: true,
                      content: '-',
                      className: 'slot2'
                    }, {
                      flex: 1,
                      values: this.city,
                      defaultIndex: 0, 
                      className: 'slot3',
                      textAlign: 'center'
                    },
                    {
                      divider: true,
                      content: '-',
                      className: 'slot4'
                    },
                    {
                      flex: 1,
                      defaultIndex: 2, 
                      values: this.area,
                      className: 'slot5',
                      textAlign: 'center'
                    }];
              }else{
                this.slots=[{
                    defaultIndex:2,
                    flex: 1,
                    values: this.checkedStatus,//职业类型
                    textAlign: 'left'
                }];
              }
              
            },
            cancle:function(){
              this.popupVisible=false;
            },
            select:function(){
              var pickerVal=this.$refs.pickerObj.getValues();
              if(this.currentPicker==1){//三级联动
                this.addressname.name = pickerVal[1]+" "+pickerVal[2]['name']

              }else{
                this.addressValue = pickerVal[0].value;
                this.addressName = pickerVal[0].name;
              }
              // this.sex = pickerVal[0].value;
              // this.sexText = pickerVal[0].name;
              console.log(pickerVal)
              this.popupVisible=false;
            },
        }
    };

</script>
<style lang="scss">
  .v-modal{
    top: .7rem!important;
  }
  .picker-center-highlight{
    // top: 10%!important;
  }
  .picker-items .picker-slot .picker-slot-wrapper{
    // transform: translate(0px, 0px) translateZ(0px);
  }
  .picker-slot.picker-slot-divider{
    lign-items: inherit!important;
    padding-top: 7px;
  }
  .picker-toolbar{
    border-top: 1px solid #f4f4f4;
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding: 0 10px;
    box-sizing: border-box;
    color: #26a2ff;
    font-size: .32rem;
  }
</style>
<style lang="scss" scoped>
    .nearby-stores {
        min-height: 100%;
        background-color: #f5f5f5;
    }

    nav {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        width: 7.5rem;
        height: 0.72rem;
        background-color: #ffffff;
        font-size: 0.28rem;    
        z-index: 10000;
        img {
            width: 0.22rem;
            height: 0.12rem;
            padding-left: .1rem;
        }
        .addres {
            display: flex;
            align-items: center;
            padding-left: .2rem;
        }
        .city {
            padding: 0 .1rem 0 .38rem;
        }
        .sort {
            position: absolute;
            right: .3rem;
        }
    }
    
    .mint-popup{
      width: 100%;
      top: .73rem;
      bottom: auto;
    }
    .store-list {
        min-height: 100%;
        padding-bottom: 2rem;
        padding-top: .73rem;
        li {
            margin-top: .2rem;
            height: 3rem;
            background-color: #fff;
            padding-bottom: 2rem;
            .store-hd {
                position: relative;
                display: flex;
                align-items: center;
                height: .76rem;
                padding-left: .3rem;
                border-bottom: solid 1px #eaeaea;
            }
            .r-arrow {
                position: absolute;
                right: .42rem;
                width: 0.1rem;
                height: 0.18rem;
            }
            .store-img {
                width: 1.5rem;
                height: 1.5rem;
                margin: .2rem .22rem 0 .3rem;
                border-radius: 0.1rem;
            }
            .store-info-box {
                position: relative;
                .store-address {
                    padding-top: .2rem;
                    font-size: 0.24rem;
                }
                .item-box {
                    height: .44rem;
                    display: flex;
                    align-items: center;
                    font-size: .2rem;
                    .appointment {
                        width: 0.96rem;
                        height: 0.32rem;
                        line-height: 0.32rem;
                        background-color: #8ac141;
                        color: #fff;
                        text-align: center;
                    }
                    .appointment.app-full {
                        background-color: #999;
                    }
                    .appointment.app-hot {
                        background-color: #f8241e;
                    }
                    .item-sum {
                        padding-left: .2rem;
                        color: #999;
                    }
                }
                .store-time {
                    color: #999;
                }
                .store-dist {
                    position: absolute;
                    top: 1.18rem;
                    right: -2.2rem;
                    width: 1.48rem;
                    height: 0.48rem;
                    line-height: .48rem;
                    border-radius: 0.04rem;
                    border: solid 1px #ff8003;
                    font-size: 0.24rem;
                    color: #ff8004;
                    text-align: center;
                }
                .dist-icon {
                    position: absolute;
                    right: -2.2rem;
                    top: .3rem;
                    width: 0.32rem;
                    height: 0.36rem;
                }
            }
        }
    }

</style>
