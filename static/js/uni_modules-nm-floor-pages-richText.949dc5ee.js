(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-nm-floor-pages-richText"],{"04bf":function(t,e,n){var o=n("53ef");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("967d").default;i("377e2e34",o,!0,{sourceMap:!1,shadowMode:!1})},"11ef":function(t,e){t.exports={getFloorList:"module/default/floor/nl/floor-info",getElderFloorList:"module/default/floor/elderly-floor-info",getNewsDetail:"module/default/news/portal/news-api/news/detail",getNewsList:"module/default/news/portal/news-api/news/nl/details",getMallFloorList:"module/default/mall/portal/page/admin/listPosition",getMallFloorDetail:"module/default/mall/portal/page/admin/onePage"}},"40db":function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("11ef")),a={data:function(){return{id:"",content:"",hookForceLogin:!1}},onLoad:function(t){var e=t.title,n=t.id;uni.setNavigationBarTitle({title:e}),this.id=n,this.getRichText()},methods:{getRichText:function(){var t=this;this.$http.get(i.default.getNewsDetail,{newsId:this.id}).then((function(e){e.success&&(t.content=e.result.content,uni.setNavigationBarTitle({title:e.result.title}))}))}}};e.default=a},"53ef":function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/**\n * 全局主题色\n *\n * 说明:style外使用，建议采用Vue.prototype.$primaryColor\n */\n/* 主题色样式 */.primary-color[data-v-369281e2]{color:#007aff}\n/* 主题背景样式 */.primary-bg[data-v-369281e2]{background:#007aff}\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.rich-text[data-v-369281e2]{padding:%?32?%}',""]),t.exports=e},"7e86":function(t,e,n){"use strict";var o=n("04bf"),i=n.n(o);i.a},d284:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={nmHtml:n("f721").default},i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"rich-text"},[e("nm-html",{attrs:{content:this.content}})],1)},a=[]},e23b:function(t,e,n){"use strict";n.r(e);var o=n("40db"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},e672:function(t,e,n){"use strict";n.r(e);var o=n("d284"),i=n("e23b");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("7e86");var r=n("828b"),l=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"369281e2",null,!1,o["a"],void 0);e["default"]=l.exports}}]);