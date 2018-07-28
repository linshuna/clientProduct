<template>
  <div>
    <mt-popup v-model="popupVisible" position="top">
      <mt-picker ref='pickerObj' :slots="slots" valueKey="name" @change="onMyAddressChange"></mt-picker>
      <div class="picker-toolbar">  
          <span class="mint-datetime-cancel" @click.stop="cancle">取消</span>  
          <span class="mint-datetime-confirm" @click.stop="select">确定</span>  
      </div> 
    </mt-popup>
  </div>
</template>
<script>
  import {getCityList,getCarwashList,shopProject} from '../utils/api.js'
  export default {
    props:{
      'popupVisible':{type: Boolean},
      'current':{type: Number},
      'selectType':{type: String}//select是方向
    },
    data(){
      return {
        slots:[],
        province: [],//省
        city:[],//市
        area:[],//区
        allAddress:[],
        checkedStatus:[
          {name:'附近优先',value:'2'},
          {name:'累计点评',value:'3'},
          {name:'默认排序',value:'1'},
          {name:'评分最高',value:'4'},
        ],
        carwashList: [],//洗车 洗车服务类型
        shopProjectList: []//商城 门店 分类
      }
    },
    created() {
      this.initCity()
      this.initWashCarList()//初始化洗车项目
      this.initporject()//初始化 商城 门店 分类
    },
    watch:{
      current: function(newVal,oldVal){
        this.changeAddress(newVal)
      }
    },
    methods: {
      initCity: function(){
        getCityList().then(res=>{
          res.map((item,index)=>{
            this.allAddress.push({name:item.province,value:index,children:[]})
            let cityArr = [];
            let cityLen = item.citylist.length;
            item.citylist.map((cityItem,cityIndex)=>{
              
              cityArr.push({name:cityItem.city,value: cityIndex,children:[]})
              this.allAddress[index]['children'] = cityArr;
              
              if(cityIndex+1==cityLen){
              }
              let arr = [];
              let areaLen = cityItem.area.length;
              cityItem.area.map((areaItem,areaIndex)=>{
                arr.push({name:areaItem.dist,value: areaItem.areaCode});
                if(areaIndex+1==areaLen){
                  arr.push({name:'全部',value:0})
                }
                this.allAddress[index]['children'][cityIndex]['children'] = arr
                
              })
              
              
            })
          })
          this.changeAddress(this.current)
        })
      },
      initWashCarList: function(){
        getCarwashList().then(res=>{
          res.map((item,index)=>{
            this.carwashList.push({
              name: item.typename,
              value: item.id
            })
          })
        })
      },
      initporject: function(){
        shopProject().then(res=>{
          res.map((item,index)=>{
            this.shopProjectList.push({
              name: item.typename,
              value: item.id
            })
          })
        })
      },
      changeAddress: function(value){
        if(value==1){
          this.slots=[{
                flex: 1,
                defaultIndex: 0,    
                values: this.allAddress,  //省份数组
                className: 'slot1',
                textAlign: 'center'
              }, {
                divider: true,
                content: '-',
                className: 'slot2'
              }, {
                flex: 1,
                values: this.allAddress[0]['children'],
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
                defaultIndex: 1, 
                values: this.allAddress[0]['children'][0]['children'],
                className: 'slot5',
                textAlign: 'center'
              }];
        }else if(value==2){
          this.slots=[{
              defaultIndex:2,
              flex: 1,
              values: this.checkedStatus,//排序
              textAlign: 'right'
          }];
        }else if(value==3){//洗车的服务类型
          this.slots=[{
              defaultIndex:2,
              flex: 1,
              values: this.carwashList,//洗车服务类型
              textAlign: 'center'
          }];
        }else if(value==4){//排序去掉  评分最高
           this.$delete(this.checkedStatus,3)
           this.slots=[{
              defaultIndex:2,
              flex: 1,
              values: this.checkedStatus,//排序
              textAlign: this.selectType||'right'
          }];
        }else if(value==5){ //商城 门店 分类
          this.slots=[{
              defaultIndex:2,
              flex: 1,
              values: this.shopProjectList,//排序
              textAlign: 'center'
          }];
        }
        
      },
      cancle:function(){
        this.$emit('update:popupVisible', false)
      },
      select:function(){
        var pickerVal=this.$refs.pickerObj.getValues();
        if(this.current==1){
          let currentSearch = '';
          if(pickerVal[2]['value']==0){//表示的是全部
            currentSearch = pickerVal[1]['name']
          }else{
            currentSearch = pickerVal[2]['value']
          }
          let area = pickerVal[1]['name']+" "+pickerVal[2]['name']
          this.$emit('gainAllAddress',{search:currentSearch,area: area})
        }else if(this.current == 2 || this.current==4){
          this.$emit('gainSort',pickerVal[0])
        }else if(this.current == 3){
          this.$emit('gainProject',pickerVal[0])
        }else if(this.current == 5){
          this.$emit('gainShopProject',pickerVal[0])
        }
        this.$emit('update:popupVisible', false)
      },
      onMyAddressChange: function(picker, values){
        if(this.current==1){
          let province = values[0]
          if(values[0]||values[1]||values[2]){
            let city = values[1]
            picker.setSlotValues(1,province.children)
            picker.setSlotValues(2,city.children);
            //每次更换的时候，都要初始化位置
            this.slots[1]['defaultIndex'] = 0
            this.slots[2]['defaultIndex'] = 0
          }  
        }

      }
    }
  }

</script>
<style>
  .picker-slot{
    font-size: 16px!important;
  }
  .picker-slot.picker-slot-right{
    width: 100%;
    padding-right: .3rem;
    box-sizing: border-box;
  }
</style>
<style lang="scss" scoped>
  .mint-popup{
    width: 100%;
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