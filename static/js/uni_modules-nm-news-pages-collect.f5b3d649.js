(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-nm-news-pages-collect"],{"202d":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,"uni-page-body[data-v-7f883276]{background-color:#f6f7f8}body.?%PAGE?%[data-v-7f883276]{background-color:#f6f7f8}.scroll-v[data-v-7f883276]{flex:1;width:100%;height:100%}",""]),t.exports=e},"405b":function(t,e,n){"use strict";var i=n("9450"),a=n.n(i);a.a},"90f1":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("fd3c"),n("5c47"),n("a1c1"),n("45da"),n("c223");var a=i(n("6a10")),o=i(n("61fc")),s={data:function(){return{listTotal:0,newsList:[],param:{pageNo:1,moduleId:"",operation:"COLLECT"},operate:[{name:"取消收藏",img:"https://tip-mall.oss-cn-beijing.aliyuncs.com/temp/%E7%BC%96%E7%BB%84@2x_1644995995895.png"}]}},onLoad:function(t){this.loadNewsList()},methods:{loadNewsList:function(){var t=this;this.$http.get(a.default.getNewsCollected,this.param).then((function(e){t.listTotal=e.result.total;e.result.records.map((function(t){var e=t.newsBrief;if(e.cover&&e.cover.length>0){var n=e.cover.split(",");e.cover=n["0"]||"",e.covers=n}try{var i,a=new Date(null===(i=e.createTime)||void 0===i?void 0:i.replaceAll("-","/"));e.formatTime=o.default.beforeTime(a.getTime())}catch(s){console.log(s)}return e}));1==t.param.pageNo?t.newsList=e.result.records:t.newsList=t.newsList.concat(e.result.records)}))},onRefresh:function(){this.param.pageNo=1,this.loadNewsList()},loadMore:function(){this.newsList.length>=this.listTotal||(this.param.pageNo+=1,this.loadNewsList())},clickItem:function(t){uni.navigateTo({url:"./detail?id="+t.id})},cilckOperate:function(t){var e=this;this.$http.post(a.default.cancelCollected,{newsId:t.id},{},{formData:!0}).then((function(t){e.$toast.showToast("已取消收藏"),e.onRefresh()}))}}};e.default=s},9450:function(t,e,n){var i=n("202d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("a8762aea",i,!0,{sourceMap:!1,shadowMode:!1})},bd4c:function(t,e,n){"use strict";n.r(e);var i=n("90f1"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e265:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniSwipeAction:n("43f8").default,uniSwipeActionItem:n("44ae").default,newsListNormal:n("3bc2").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"scroll-v",attrs:{enableBackToTop:!0,"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore()}}},t._l(t.newsList,(function(e,i){return n("v-uni-view",{key:i},[n("uni-swipe-action",[n("uni-swipe-action-item",{attrs:{autoClose:!0},scopedSlots:t._u([{key:"right",fn:function(){return[n("v-uni-view",{staticClass:"flex mr-11 my-5"},t._l(t.operate,(function(i,a){return n("v-uni-view",{key:a,staticClass:"flex-col-center justify-center mx-5",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cilckOperate(e,a)}}},[n("v-uni-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:i.img,mode:""}}),n("v-uni-text",{staticClass:"fs-12 fw-400",staticStyle:{color:"#686b73"}},[t._v(t._s(i.name))])],1)})),1)]},proxy:!0}],null,!0)},[n("v-uni-view",{staticStyle:{"background-color":"#FFFFFF"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickItem(e.newsBrief)}}},[n("news-list-normal",{attrs:{item:e.newsBrief||e}})],1)],1)],1)],1)})),1)],1)},o=[]},ee60:function(t,e,n){"use strict";n.r(e);var i=n("e265"),a=n("bd4c");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("405b");var s=n("828b"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"7f883276",null,!1,i["a"],void 0);e["default"]=c.exports}}]);