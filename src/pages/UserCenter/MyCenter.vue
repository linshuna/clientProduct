<template>
    <div class="selfCenter mask">
        <ul>
            <li class="userLogo">
                <span>头像</span>
                <div class="selfRight">
                    <div class="img-box fl">
                      <img class="defaultLogo" :src="avatar" @click="setAvatar" alt="头像">
                      <input type="file" name="avatar" accept="image/*" style="display:none"  @change="changeImage($event)" ref="avatarInput">
                    </div>
                    <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
                </div>
            </li>
            <li>
                <span>用户名</span>
                <div class="selfRight">
                    <span class="grayColor">{{phone}}</span>
                    <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
                </div>
            </li>
            <li>
                <span>昵称</span>
                <div class="selfRight">
                    <input v-model="uname" class="uname" placeholder="请输入昵称"/>
                    <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
                </div>
            </li>
            <li @click.stop="changeSex">
                <span>性别</span>
                <div class="selfRight">
                    <span class="grayColor">{{sexText}}</span>
                    <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
                </div>
                <mt-popup v-model="popupVisible" position="bottom">
                  <div class="picker-toolbar">  
                      <span class="mint-datetime-cancel" @click.stop="cancle">取消</span>  
                      <span class="mint-datetime-confirm" @click.stop="select">确定</span>  
                  </div>  
                  <mt-picker ref='pickerObj' :slots="slots" valueKey="name" ></mt-picker>
                </mt-popup>
            </li>
            <li @click.stop="cusBirth('birthPicker')">
                <span>出生日期</span>
                <div class="fr setPadding">
                  <span class="inp grayColor" :class="{'blackColor':birthday!=''}"  >{{birthday==''?'请选择日期':birthday}}</span>
                  <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
                </div>
            </li>
        </ul>
        <mt-datetime-picker
          ref="birthPicker"
          type="date"
          :startDate="startDate"
          :endDate="endDate"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          @confirm="handleChange"
        >
        </mt-datetime-picker>
        <div class="btnWrap" @click="save">
          <button>保存</button>
        </div>
    </div>

</template>
<script>
    import {getMyCenter,changeHeadimg,editorMyCenter} from '../../utils/api.js'
    import {format} from '@/assets/js/date.js'
    import { Toast,MessageBox } from 'mint-ui'
    export default {
        name: 'MyCenter',
        data() {
            return {
                clientvid: 0,
                avatar: null,
                popupVisible: false,
                slots:[{defaultIndex:1}],
                uname:'',
                phone:'',
                sexStyle: [{name:'男',value:1},{name:'女',value:2}],
                sex:'',
                sexText:'',
                startDate: new Date('1960/1/1'),//开始的生日日期
                endDate: new Date(),//结束的生日日期
                birthday:''
            }
        },
        created: function () {

        },
        mounted: function () {
            this.clientvid = this.$store.getters.getStorage.vid;
            this._getMyCenter()
        },
        computed: {},
        methods: {
            _getMyCenter() {
                getMyCenter({clientvid: this.clientvid}).then(res => {
                    this.uname = res.uname;
                    this.phone = res.phone;
                    this.avatar = res.headimg;
                    this.birthday = res.birthday||''
                    this.sex = res.sex;  
                    this.sexText = res.sex==0?'保密':(res.sex==1?'男':'女')
                })
            },
            changeSex(){//职业类型选择框
              this.popupVisible=true;//激活picker组件
              this.slots=[{
                    defaultIndex:0,
                    flex: 1,
                    values: this.sexStyle,//职业类型
                    textAlign: 'center'
              }];
            },
            cancle:function(){
              this.popupVisible=false;
            },
            select:function(){
              this.popupVisible=false;
              var pickerVal=this.$refs.pickerObj.getValues();
              this.sex = pickerVal[0].value;
              this.sexText = pickerVal[0].name;
              this.popupVisible=false;
            },
            cusBirth(picker){
              this.$refs[picker].open();
            },
            handleChange(value){//选中日期
              this.birthday = format(value.toString(),"yyyy-MM-dd");
            },
            setAvatar() {
              this.$refs.avatarInput.click()
            },
            changeImage(e) {
              var file = e.target.files[0]
              var reader = new FileReader()
              var that = this;
              reader.readAsDataURL(file)
              reader.onload = function (e) {
                changeHeadimg({headimg:this.result})
                .then(res=>{
                  that.avatar = res.headimg; //改变头像
                })
                .catch(err=>{Toast(err)})                
              }
            },
            save: function(){
              let reqData = {
                clientvid: this.clientvid,
                uname: this.uname,
                sex: this.sex,
                birthday: this.birthday,
                headimg: this.avatar
              }
              MessageBox.confirm('是否确定保存信息','').then(action => { 
                editorMyCenter(reqData).then(res=>{
                  if(res&&!res.errorCode){
                    this.$store.commit("showToast",'修改成功')
                    this.$store.commit('delay',{url:'/UserCenter/UserCenterIndex',$router:this.$router})
                  }
                })
              }).catch(()=>{})
              
            }
        }
    }

</script>
<style lang="scss" scoped>
    .selfCenter {
        width: 100%;
        height: 100%;
        font-size: .28rem;
        overflow: hidden;
        ul {
            width: 100%;
            background: #ffffff;
            padding-left: .2rem;
            .userLogo {
                padding: .1rem 0 !important;
            }
            li:not(:last-child) {
                border-bottom: 1px solid #eaeaea;
            }
            li {
                width: 100%;
                position: relative;
                height: 1.1rem;
                line-height: 1.1rem;
                text-align: left;
                color: #333;
                font-size: 0.34rem;
                .selfRight {
                    position: absolute;
                    right: .2rem;
                    top: 50%;
                    transform: translate(0, -50%);
                    img {
                        display: inline-block;
                    }
                    .defaultLogo {
                        width: .8rem;
                        height: .8rem;
                        vertical-align: middle;
                        border-radius: 50%;
                    }
                    
                }
            }
        }
    }
  .grayColor {
      color: gray;
      font-size: .34rem;
  }  
  .uname{
    height: 100%;
    text-align: right;
    font-size: .32rem;
  }
  .rightArrow {
      width: .15rem;
      padding-left: .15rem;
      vertical-align: middle;
  }
  .setPadding{
    padding-right: .2rem;
  }
  .mint-popup{
    width: 100%;
    .picker-toolbar{
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      color: #26a2ff;
    }
      
    .mint-datetime-picker  .mint-datetime-action{
      line-height: 12px;
    }
             
  }
  .btnWrap{
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    button{
      width: 100%;
      height: .8rem;
      border: none;
      width: 100%;
      background: #FA9E15;
      color: #ffffff;
      border-radius : 2px;
      font-size: .32rem;
    } 
     
  }
      
</style>
