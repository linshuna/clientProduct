webpackJsonp([32],{"6EsK":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),a=i.n(s),o=i("Q50t"),r=i("VsUZ"),n=i("I9qK"),c=i("MfrR"),p={mixins:[o.b],name:"MyAppointmentEditor",data:function(){return{orderNo:"",clientvid:"",shopId:"",startDate:new Date,date:"",popupVisible:!1,slots:[],typeData:[],timeData:[],time:"",title:"到店时间",popupVisibleType:!1,initData:null,currentType:1,serverName:"",myCarList:[],popupVisibleCar:null,name:"",phone:"",project:[],carvid:"",carNo:"",remark:"",selectedTimeIndex:-1,shopName:"",fromtype:0,servertype:1}},components:{"right-mt-popup":c.a},created:function(){this.orderNo=this.$route.params.orderNo;var t=this.$store.getters.getStorage;this.clientvid=t?t.vid:0,this.init(),this.initCarList()},watch:{date:function(t,e){this.initDateData(t,this.shopId)},shopId:function(t,e){this.initTypeData(t)},typeData:function(t,e){var i=this,s=[];this.serverName.indexOf(",")?s=this.serverName.split(","):s.push(this.serverName),s.map(function(e,s){t.map(function(t,s){t.name==e&&(i.project.push({id:t.id,name:t.name}),i.$set(i.typeData[s],"active",!0))})})},timeData:function(t,e){var i=this;t.map(function(t,e){t.name==i.time&&(i.selectedTimeIndex=e,i.$set(i.timeData[e],"active",!0))})}},methods:{init:function(){var t=this;Object(r.Q)({orderNo:this.orderNo}).then(function(e){var i=e[0];t.shopId=i.shop_id,t.serverName=i.project,t.carvid=i.carvid,t.carNo=i.carNo,t.date=i.appDay,t.time=i.appTime,t.name=i.appname,t.phone=i.phone,t.remark=i.remark,t.shopName=i.name,t.fromtype=i.fromtype})},initCarList:function(){var t=this;Object(r.i)({clientvid:this.clientvid}).then(function(e){e&&e.map(function(e,i){t.myCarList.push({name:e.carNo,value:e.carvid})})})},initDateData:function(t,e){var i=this;this.timeData=[],Object(r._10)({day:t,shop_id:e}).then(function(t){t&&t.map(function(t,e){i.timeData.push({type:2,name:t.start,isNoOrder:0!=t.place,active:!1})})})},initTypeData:function(t){var e=this;Object(r._17)({shop_id:t}).then(function(t){t&&t.map(function(t,i){e.typeData.push({type:1,name:t.name,id:t.id,active:!1})})})},showPicker:function(){this.$refs.picker.open()},handleChange:function(t){var e=t.toString();e=Object(n.a)(e,"yyyy-MM-dd"),this.date=e,console.log(t)},changeData:function(t,e){if(this.title=t,2==e&&!this.date)return this.$store.commit("showToast","请选择预约日期"),!1;0!=this.fromtype&&1==e||(this.initData=1==e?this.typeData:this.timeData,this.currentType=e,this.popupVisibleType=!0)},gainData:function(t){var e=this;if(1==this.currentType){var i="";t.map(function(t,s){t.active&&(e.project.push({id:t.id,name:t.name}),i+=t.name+",")}),this.serverName=i.substring(0,i.length-1)}else this.time=t.name},cancle:function(){this.popupVisibleCar=!1},select:function(){this.popupVisibleCar=!1;var t=this.$refs.pickerObj.getValues()[0];this.carvid=t.value,this.carNo=t.name,console.log(t)},showCarPicker:function(){this.popupVisibleCar=!0,this.slots=[{defaultIndex:0,flex:1,values:this.myCarList,textAlign:"center"}]},maxFont:function(){this.remark=this.remark.substring(0,200)},save:function(){var t=this;if(0==this.fromtype&&(!this.project||0==this.project.length))return this.$store.commit("showToast","请选择项目"),!1;if(!this.date)return this.$store.commit("showToast","请选择预约日期"),!1;if(!this.time)return this.$store.commit("showToast","请选择预约时间"),!1;if(!this.carvid||!this.carNo)return this.$store.commit("showToast","请选择服务车辆"),!1;if(!this.name)return this.$store.commit("showToast","请输入用户姓名"),!1;if(!this.phone)return this.$store.commit("showToast","请输入用户电话"),!1;if(/^1[3|5|8]\d{9}$/.test(this.phone)){var e={orderNo:this.orderNo,carvid:this.carvid,clientvid:this.clientvid,orderDay:this.date+" "+this.time,phone:this.phone,remark:this.remark,appname:this.name};0==this.fromtype&&(e.project=this.project),Object(r.b)({lists:a()(e)}).then(function(e){t.$store.commit("showToast","成功修改预约"),t.$store.commit("delay",{url:"/UserCenter/MyAppointment",$router:t.$router})})}else this.$store.commit("showToast","请输入正确的联系电话")}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nowappoint-wrap mask"},[s("p",{staticClass:"footer_footer_msg shopName"},[t._v("门店："+t._s(t.shopName))]),t._v(" "),s("div",{staticClass:"footer"},[s("ul",{staticClass:"footer_footer"},[s("li",{staticClass:"footer_footer_msg",on:{click:function(e){t.changeData("服务项目",1)}}},[t._m(0),t._v(" "),s("div",{staticClass:"footer_footer_msg_right"},[s("span",{staticClass:"setFont"},[t._v(t._s(t.serverName))]),t._v(" "),s("img",{staticClass:"big_rightArrow",attrs:{src:i("q8gq"),alt:""}})])]),t._v(" "),s("li",{staticClass:"footer_footer_msg",on:{click:function(e){e.stopPropagation(),t.showPicker(e)}}},[t._m(1),t._v(" "),s("div",{staticClass:"footer_footer_msg_right"},[s("span",{staticClass:"setFont"},[t._v(t._s(t.date))]),t._v(" "),s("img",{staticClass:"big_rightArrow",attrs:{src:i("q8gq"),alt:""}})])]),t._v(" "),s("li",{staticClass:"footer_footer_msg",on:{click:function(e){t.changeData("到店时间",2)}}},[t._m(2),t._v(" "),s("div",{staticClass:"footer_footer_msg_right"},[s("span",{staticClass:"setFont"},[t._v(t._s(t.time))]),t._v(" "),s("img",{staticClass:"big_rightArrow",attrs:{src:i("q8gq"),alt:""}})])]),t._v(" "),s("li",{staticClass:"footer_footer_msg",on:{click:function(e){e.stopPropagation(),t.showCarPicker(e)}}},[t._m(3),t._v(" "),s("div",{staticClass:"footer_footer_msg_right"},[s("span",{staticClass:"setFont"},[t._v(t._s(t.carNo))]),t._v(" "),s("img",{staticClass:"big_rightArrow",attrs:{src:i("q8gq"),alt:""}})])]),t._v(" "),s("li",{staticClass:"footer_footer_msg"},[t._m(4),t._v(" "),s("div",{staticClass:"footer_footer_msg_input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),s("li",{staticClass:"footer_footer_msg"},[t._m(5),t._v(" "),s("div",{staticClass:"footer_footer_msg_input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"number",pattern:"[0-9]*",placeholder:"请输入电话"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),t._v(" "),s("li",[s("div",{staticClass:"remark-wrapper"},[s("p",{staticClass:"remarkTitle"},[t._v("车店备注")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],staticClass:"remark",attrs:{name:"",placeholder:"请输入备注，最多50字",maxlength:"50"},domProps:{value:t.remark},on:{change:t.maxFont,keydown:t.maxFont,keyup:t.maxFont,input:function(e){e.target.composing||(t.remark=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"btn-wrap"},[s("button",{staticClass:"appoint_btn",on:{click:t.save}},[t._v("保存")])])]),t._v(" "),s("mt-datetime-picker",{ref:"picker",attrs:{type:"date",startDate:t.startDate,"year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:t.handleChange}}),t._v(" "),s("mt-popup",{attrs:{position:"bottom"},model:{value:t.popupVisibleCar,callback:function(e){t.popupVisibleCar=e},expression:"popupVisibleCar"}},[s("div",{staticClass:"picker-toolbar name-picker-toolbar"},[s("span",{staticClass:"mint-datetime-cancel",on:{click:t.cancle}},[t._v("取消")]),t._v(" "),s("span",{staticClass:"mint-datetime-confirm",on:{click:t.select}},[t._v("确定")])]),t._v(" "),s("mt-picker",{ref:"pickerObj",staticClass:"name-picker",attrs:{slots:t.slots,valueKey:"name"}})],1),t._v(" "),s("right-mt-popup",{attrs:{servertype:t.currentType,initNum:t.selectedTimeIndex,title:t.title,showData:t.initData,popupVisible:t.popupVisibleType},on:{"update:popupVisible":function(e){t.popupVisibleType=e},gainData:t.gainData}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_footer_msg_left"},[e("p",[this._v("选择项目")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_footer_msg_left"},[e("p",[this._v("预约日期")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_footer_msg_left"},[e("p",[this._v("预约时间")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_footer_msg_left"},[e("p",[this._v("选择车辆")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_footer_msg_left"},[e("p",[this._v("用户姓名")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer_footer_msg_left"},[e("p",[this._v("用户电话")])])}]},l=i("VU/8")(p,m,!1,function(t){i("rGVF")},"data-v-8a284b9c",null);e.default=l.exports},rGVF:function(t,e){}});