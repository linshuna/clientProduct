webpackJsonp([48],{Bofj:function(t,e){},Cfw1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Q50t"),n=i("VsUZ"),l=i("OgEt"),a={mixins:[s.a],name:"",data:function(){return{ClientTclientList:[],clientvidL:""}},created:function(){},mounted:function(){this.$store.getters.getStorage&&(this.clientvid=this.$store.getters.getStorage.vid,this._getClientTclient())},components:{"no-data-tip":l.a},methods:{transmit:function(t,e){this.selectList=t,this.selItem=e,this.showSelList=!0},selType:function(t){"1"==this.selected?this.sortData=t:this.filterData=t,this.showSelList=!1},_getClientTclient:function(){var t=this;Object(n.I)({clientvid:this.clientvid}).then(function(e){e&&!e.errorCode&&(t.ClientTclientList=e,console.log(t.ClientTclientList),console.log(t.clientvid))})}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"selfCenter-wrap mask"},[t.ClientTclientList&&0!=t.ClientTclientList.length?[i("ul",{staticClass:"selfCenter"},t._l(t.ClientTclientList,function(e){return i("li",[i("div",{staticClass:"selfCenter_top"},[i("img",{attrs:{src:e.headimg,alt:""}}),t._v(" "),i("p",{staticClass:"selfCenter_top_p"},[t._v(t._s(e.uname))]),t._v(" "),i("p",{staticClass:"selfCenter_top_pd"},[t._v(t._s(e.updatetime))])])])}))]:[i("no-data-tip",{attrs:{tipData:{typeTipe:0,titleTip:"订单",conTip:"暂无推荐好友"}}})]],2)},staticRenderFns:[]},o=i("VU/8")(a,c,!1,function(t){i("Bofj")},"data-v-0427898f",null);e.default=o.exports}});