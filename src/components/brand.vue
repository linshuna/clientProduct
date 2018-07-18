<template>
  <mt-popup v-model="show" position="right" class="pop-wrapper" :closeOnClickModal=false>
    <div ref="wrapper" style="height: 100%">
      <div>
        <div class="brand-wrapper" v-for="(item,key) of brandArr" :key="key" :ref="key" v-show="brandArr">
          <div class="title border-bottom-1px">{{key}}</div>
          <ul class="item-list">
            <li class="brand border-bottom-1px" v-for="(innerItem,index) of item" :key="innerItem.carplateid" @click="selected(innerItem.carplateid,index,key,innerItem.carplate,0)">
              <img :src="innerItem.icon" class="carnoLogo"/>
              <span class="text">{{innerItem.carplate}}</span>
              <span class="iconfont selected-icon icon-xuanzhong" v-show="activeIndex===index&&activeKey===key">
                  <img :src="rightIcon" class="rightLogo"/>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="brand-wrapper" v-for="(item,key) of carmodelsList" :key="key" :ref="key" v-show="carmodelsList">
          <div class="title border-bottom-1px">{{key}}</div>
          <ul class="item-list">
            <li class="brand border-bottom-1px" v-for="(innerItem,index) of item" :key="innerItem.carnatid" @click="selected(innerItem.carnatid,index,key,innerItem.carnat,1)">
              <span class="text">{{innerItem.carnat}}</span>
              <span class="iconfont selected-icon icon-xuanzhong" v-show="activeIndex===index&&activeKey===key">
                <img :src="rightIcon" class="rightLogo"/>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div class="brand-wrapper" v-for="(item,key) of carnatList" :key="key" :ref="key" v-show="carnatList">
          <div class="title border-bottom-1px">{{key}}</div>
          <ul class="item-list">
            <li class="brand border-bottom-1px" v-for="(innerItem,index) of item" :key="innerItem.modelid" @click="selected(innerItem.modelid,index,key,innerItem.outputs,2)">
              <span class="text">{{innerItem.outputs}}</span>
              <span class="iconfont selected-icon icon-xuanzhong" v-show="activeIndex===index&&activeKey===key">
                <img :src="rightIcon" class="rightLogo"/>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="alphabet-wrapper">
      <ul class="alphabet-list">
        <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick">{{item}}</li>
      </ul>
    </div>

    <div class="btn-wrapper">
        <div class="btn reset" @click="reset">重置</div>
        <div class="btn confirm" @click="confirm">确定</div>
      </div>
  </mt-popup>
</template>
<script>
  import { Popup,Toast } from 'mint-ui';
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  Vue.component(Popup.name, Popup);
  import {
    bandList,
    carModules,
    carYearPl
  } from '@/utils/api.js'
  export default {
    props: {
      popBrand: {
        type: Boolean
      }
    },
    data() {
      return {
        rightIcon: require('../assets/images/right-icon.png'),
        popupVisible: false,
        show: false,
        currentLetter: '',
        activeKey: '',
        activeIndex: '-1',
        activeBrand: '',
        carplateid:0,
        brandArr:null,
        carmodelsList: null,
        carnatid: 0,
        carnatList: null,
        modelid: 0
      }
    },
    computed: {
      letters() {
        const letters= [];
        for(let i in this.brandArr){
          letters.push(i)
        }
        return letters;
      }
    },
    watch: {
      popBrand(newVal) {
        this.show = newVal
        if(newVal){
          this.initScroll()
          this.init();//如果是滚动就显示
        }
        console.log(newVal)
        //this.$emit('show',this.show)
      },
      currentLetter(){
        const element = this.$refs[this.currentLetter][0];
        this.scroll.scrollToElement(element);
      },
      
    },
    created: function(){
      // this.init()
    },
    methods: {
      init(){
        bandList()
        .then((res)=>{
          this.brandArr = res
        })
      },
      getCarmodels(){
        carModules({carplateid: this.carplateid})
        .then((res)=>{
          this.carmodelsList = res;
        })
      },
      getYearPl(){
        carYearPl({carnatid:this.carnatid})
        .then((res)=>{
          this.carnatList = res;
        })
      },
      initScroll() {
        this.$nextTick(() => {  
        if (!this.scroll) {  
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
          })  
          console.log(this.scroll)  
          }  
        })  
      },
      handleLetterClick(e) {
        this.currentLetter = e.target.innerText;
      },
      selected(id,index,key,brandName,type) {
        this.activeKey = key;
        this.activeIndex = index;
        this.activeBrand += (brandName+"-");
        let _this = this;
        if(type==0){
          setTimeout(function(){
            _this.brandArr = [];//设置为空
          },500)
          this.carplateid = id; 
          this.getCarmodels() 
        }else if(type==1){
          setTimeout(function(){
            _this.carmodelsList = [];//设置为空
          },500)
          this.carnatid = id;
          this.getYearPl()
        }else if(type==2){
          this.modelid = id;
        }
        
      },
      reset() {
        this.activeKey='';
        this.activeIndex= '-1';
        this.brandArr = this.carmodelsList = this.carnatList = null
        this.init()
      },
      confirm() {
        
        if(!this.activeKey){Toast('请选择车型');return false;}
        this.carnatList = [];//清空数据
        this.$emit('closePop')
        this.$emit('selectedBrand',this.activeBrand.substring(0,this.activeBrand.length-1));
        this.$emit('modelid',this.modelid)
        this.activeBrand = ''
      }
    }
  }
</script>
<style lang="scss">
  .mint-toast{
    z-index: 99999;
  }
    
</style>
<style lang="scss" scoped>
 
  .pop-wrapper{
    width: 80%;
    height: 100%;
  }
  .brand-wrapper{
    background: #fff;
    .title{
      height: .6rem;
      line-height: .6rem;
      padding: 0 .2rem;
      background: #f7f7f7;
    }
    .brand{
      font-size: 0;
      padding: 0 .2rem;
      font-size: .28rem;
      line-height: 1rem;
      img.carnoLogo{
        width: .8rem;
        height: .8rem;
        display: inline-block;
        vertical-align: middle;
      }
      img.rightLogo{
        width: .5rem;  
        display: inline-block;
        vertical-align: middle;
      }
      .text{
        display: inline-block;
        line-height: 1rem;
        vertical-align: top;
        font-size: .28rem;
      }
      .selected-icon{
        font-size: 0.3rem;
        line-height: 1rem;
        float: right;
        margin-right: .4rem ;
        color: #fa9e15;
      }
    }
      
  }
    
  .alphabet-wrapper{
    .alphabet-list{
      font-size: .24rem;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 3rem;
      right: 0;
      bottom: 0;
      width: .4rem;
      .item{
        line-height: .4rem;
        text-align: center;
        color: $golden;
      }
        
    }
      
  }
    
  .btn-wrapper{
    position: fixed;
    bottom: 0;
    width:100%;
    height: 1rem;
    line-height: 1rem;
    .btn{
      width: 50%;
      float: left ;
      text-align: center;
    }
      
    .reset{
      color: #fff;
      background: #fbbb5b;
    }
      
    .confirm{
      color: #fff;
      background: #fa9e15;
    }
       
  }
            
</style>