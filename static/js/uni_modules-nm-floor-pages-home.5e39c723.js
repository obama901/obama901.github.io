(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-nm-floor-pages-home"],{"04d2":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={floorNewsNormal:n("16ae").default,floorNewsSlide:n("2de0").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"index-floor"},["horizontal_list"==e.floor.type?n("v-uni-view",{staticClass:"flex",staticStyle:{"flex-wrap":"wrap"}},e._l(e.floor.floor_data,(function(t,i){return n("v-uni-view",{key:i,staticClass:"col-center pt-4",staticStyle:{width:"20%"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickFloor(t)}}},[n("v-uni-image",{staticClass:"if-t4-img",attrs:{src:e.getEncodeImg(t.img_url)}}),n("v-uni-text",{staticClass:"pt-2",staticStyle:{"font-size":"14px",color:"#333"}},[e._v(e._s(t.title))])],1)})),1):e._e(),"banner"==e.floor.type?n("v-uni-view",{staticClass:"if-banner px-4"},[n("v-uni-swiper",{attrs:{circular:!0,autoplay:!0,interval:3e3,duration:1e3}},e._l(e.floor.floor_data,(function(t,i){return n("v-uni-swiper-item",{key:i,staticStyle:{width:"100%",height:"360rpx","z-index":"10","border-radius":"8px"}},[n("v-uni-view",{staticClass:"ifb-item",style:{background:"url("+e.getEncodeImg(t.img_url)+") no-repeat"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickFloor(t)}}})],1)})),1)],1):e._e(),"portrait_list"==e.floor.type?n("v-uni-view",{staticStyle:{position:"relative"},style:{"margin-left":e.floor.left+"px","margin-right":e.floor.right+"px"}},e._l(e.floor.floor_data,(function(t,i){return n("v-uni-view",{key:i,staticClass:"bg-white",style:{"border-bottom":e.floor.bottom+"px solid #fff","border-top":e.floor.top+"px solid #fff"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickFloor(t)}}},["NewsLinkOption_SINGLE"==t.innerLinkType&&t.data?n("v-uni-view",["1"==t.templateId?n("floor-news-normal",{attrs:{item:t.data}}):e._e(),"3"==t.templateId?n("floor-news-slide",{attrs:{item:t.data}}):e._e(),"4"==t.templateId?n("floor-news-normal",{attrs:{item:t.data,hideCover:!0}}):e._e()],1):e._e()],1)})),1):e._e(),"image"==e.floor.type?n("v-uni-view",{staticClass:"flex",style:{"border-left":e.floor.left+"px solid #fff","border-right":e.floor.right+"px solid #fff"}},e._l(e.floor.floor_data,(function(t,i){return n("v-uni-view",{key:i,staticClass:"filling",staticStyle:{position:"relative"},style:{"border-bottom":e.floor.bottom+"px solid #fff","border-top":e.floor.top+"px solid #fff"}},[n("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:e.getEncodeImg(t.img_url),mode:"widthFix"}}),e._l(t.zones,(function(t,i){return n("v-uni-view",{key:i,staticClass:"map-item",style:{left:100*t.zone.leftPer+"%",top:100*t.zone.topPer+"%",width:100*t.zone.widthPer+"%",height:100*t.zone.heightPer+"%"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.clickFloor(t)}}})}))],2)})),1):e._e()],1)},r=[]},"070e":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={floor:n("beb7").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{},e._l(e.list,(function(t,i){return n("v-uni-view",{key:i,style:{"margin-bottom":t.bottom+"px","margin-top":t.top+"px"}},[n("floor",{attrs:{floorObj:t},on:{clickFloor:function(t){arguments[0]=t=e.$handleEvent(t),e.clickJump.apply(void 0,arguments)}}})],1)})),1)},r=[]},"095e":function(e,t,n){"use strict";n.r(t);var i=n("070e"),o=n("7fe5");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var a=n("828b"),l=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"a74015f8",null,!1,i["a"],void 0);t["default"]=l.exports},"11ef":function(e,t){e.exports={getFloorList:"module/default/floor/nl/floor-info",getElderFloorList:"module/default/floor/elderly-floor-info",getNewsDetail:"module/default/news/portal/news-api/news/detail",getNewsList:"module/default/news/portal/news-api/news/nl/details",getMallFloorList:"module/default/mall/portal/page/admin/listPosition",getMallFloorDetail:"module/default/mall/portal/page/admin/onePage"}},"51fe":function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("2634")),r=i(n("2fdc")),a=i(n("11ef")),l=i(n("e4c2")),f={data:function(){return{list:[],positionId:null}},onLoad:function(e){this.positionId=e.positionId,this.init()},methods:{init:function(){var e=this;return(0,r.default)((0,o.default)().mark((function t(){var n;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get(a.default.getFloorList,{positionId:e.positionId},null,{showLoading:!1});case 2:n=t.sent,n.success&&(n.result.content&&(e.list=JSON.parse(n.result.content).list),uni.setNavigationBarTitle({title:n.result.title}));case 4:case"end":return t.stop()}}),t)})))()},clickJump:function(e){l.default.clickFloor(e)}}};t.default=f},"63e7":function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("2634")),r=i(n("2fdc")),a=i(n("9b1b"));n("fd3c"),n("5c47"),n("a1c1"),n("8f71"),n("bf0f"),n("2797"),n("45da");var l=i(n("11ef")),f=i(n("61fc")),d=i(n("dff3")),s={name:"floor",props:["floorObj"],components:{},data:function(){return{floor:{}}},created:function(){var e=this;this.floor=this.floorObj,this.floor.floor_data=this.floorObj.floor_data.map((function(t){return"portrait_list"==e.floorObj.type?(0,a.default)((0,a.default)({},t),{},{data:{}}):t})),this.getFloorList()},methods:{replaceHttp:function(e){return e.replace("http://","//")},getEncodeImg:function(e){return d.default.encodeImgUrl(e)},clickFloor:function(e){this.$emit("clickFloor",e)},getFloorList:function(){var e=this;return(0,r.default)((0,o.default)().mark((function t(){var n;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:"portrait_list"==e.floor.type&&(n=e.floor.floor_data.filter((function(e){return"NewsLinkOption_SINGLE"==e.innerLinkType})).map((function(e){return e.innerLinkId})),e.$http.get(l.default.getNewsList,{newsIds:n.join(",")},null,{showLoading:!1}).then((function(t){t.success&&t.result.forEach((function(t,n){var i,o=new Date(null===(i=t.createTime)||void 0===i?void 0:i.replaceAll("-","/"));t.createTime=f.default.beforeTime(o.getTime()),e.floor.floor_data[n].data=t}))})));case 1:case"end":return t.stop()}}),t)})))()},getFliterRichText:function(e){var t=this.richText;for(var n in e)t=t.replace("{{"+n+"}}",e[n]);return t}}};t.default=s},"7fe5":function(e,t,n){"use strict";n.r(t);var i=n("51fe"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"86dd":function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/**\n * 全局主题色\n *\n * 说明:style外使用，建议采用Vue.prototype.$primaryColor\n */\n/* 主题色样式 */.primary-color[data-v-00ee03f3]{color:#007aff}\n/* 主题背景样式 */.primary-bg[data-v-00ee03f3]{background:#007aff}\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index-floor .if-banner[data-v-00ee03f3]{position:relative;background-color:#fff}.index-floor .if-banner[data-v-00ee03f3]::after{content:"";display:inline-block;width:100%;height:%?190?%;position:absolute;left:0;top:0;z-index:1}.index-floor .if-banner .ifb-item[data-v-00ee03f3]{background-size:cover!important;width:100%;height:100%;background-position:50%!important}.index-floor uni-image[data-v-00ee03f3]{display:block;vertical-align:top}.index-floor .if-t4-img[data-v-00ee03f3]{width:%?100?%;height:%?100?%;border-radius:50%}.index-floor .if-irregular-img-box[data-v-00ee03f3]{height:%?334?%}.index-floor .if-slide-img[data-v-00ee03f3]{height:%?392?%;display:inline-block;box-shadow:0 0 12px 0 rgba(0,0,0,.16)}.index-floor .if-irregular-img[data-v-00ee03f3]{width:%?344?%}.index-floor .if-shadow[data-v-00ee03f3]{box-shadow:0 0 12px 0 rgba(0,0,0,.16)}.index-floor .if-goods-slide[data-v-00ee03f3]::-webkit-scrollbar{display:none}.index-floor .if-more-video[data-v-00ee03f3]{background:#f0f1f2;color:#333;width:%?280?%;height:%?80?%;line-height:%?80?%;text-align:center;border-radius:%?80?%}[data-v-00ee03f3] uni-swiper .uni-swiper-wrapper{z-index:10!important}\n/* flex布局 */.flex[data-v-00ee03f3]{display:flex;align-items:center}.flex-col[data-v-00ee03f3]{display:flex;flex-direction:column}.flex-wrap[data-v-00ee03f3]{flex-wrap:wrap}.row-center[data-v-00ee03f3]{display:flex;justify-content:center;align-items:center}.col-center[data-v-00ee03f3]{display:flex;flex-direction:column;justify-content:center;align-items:center}.justify-start[data-v-00ee03f3]{justify-content:flex-start}.justify-center[data-v-00ee03f3]{justify-content:center}.justify-around[data-v-00ee03f3]{justify-content:space-around}.filling[data-v-00ee03f3]{flex:1}.pt-2[data-v-00ee03f3]{padding-top:%?16?%}.px-4[data-v-00ee03f3]{padding-left:%?32?%;padding-right:%?32?%}.pt-4[data-v-00ee03f3]{padding-top:%?32?%}.map-item[data-v-00ee03f3]{position:absolute;\n  /* left: 20%;\n\ttop: 3.3%; */display:flex;flex-direction:column;justify-content:center;align-items:center}',""]),e.exports=t},beb7:function(e,t,n){"use strict";n.r(t);var i=n("04d2"),o=n("c216");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("e16c");var a=n("828b"),l=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"00ee03f3",null,!1,i["a"],void 0);t["default"]=l.exports},c216:function(e,t,n){"use strict";n.r(t);var i=n("63e7"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},dd64:function(e,t,n){var i=n("86dd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("967d").default;o("0b160690",i,!0,{sourceMap:!1,shadowMode:!1})},dff3:function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c9b5"),n("bf0f"),n("ab80"),n("5ef2"),n("f7a5"),n("5c47"),n("a1c1"),n("d4b5");var o=i(n("80b1")),r=i(n("efe5")),a=function(){function e(){(0,o.default)(this,e)}return(0,r.default)(e,null,[{key:"joinUrlParam",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){var n=e;if(-1!=e.indexOf("?")){var i=e.indexOf("?");n=joinUrlParam(e.slice(0,i));var o=e.slice(i)+"&";for(var r in t)o+=r+"="+t[r]+"&";n+=o.slice(0,o.length-1)}else if(t){var a="?";for(var l in t)a+=l+"="+t[l]+"&";n+=a.slice(0,a.length-1)}return n}))},{key:"getUrlParams",value:function(e){e=e||window.location.href;for(var t=e.substring(e.indexOf("?")+1),n=t.split("&"),i={},o=0,r=n.length;o<r;o++){var a=n[o].indexOf("=");if(-1!=a){var l=n[o].substring(0,a),f=window.decodeURIComponent(n[o].substring(a+1));i[l]=f}}return i}},{key:"delUrlParams",value:function(e,t){var n=e.split("?")[0]+"?",i=e.split("?")[1];if(i.indexOf(t)>-1){for(var o={},r=i.split("&"),a=0;a<r.length;a++)r[a]=r[a].split("="),o[r[a][0]]=r[a][1];delete o[t];e=n+JSON.stringify(o).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");return e}return e}},{key:"encodeImgUrl",value:function(e){var t=e.replace(/\s/g,encodeURIComponent(" "));return t}}]),e}(),l=a;t.default=l},e16c:function(e,t,n){"use strict";var i=n("dd64"),o=n.n(i);o.a}}]);