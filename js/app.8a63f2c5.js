(function(t){function e(e){for(var i,r,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)r=o[d],s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"0cbe":function(t,e,n){"use strict";var i=n("40e2"),s=n.n(i);s.a},1252:function(t,e,n){"use strict";var i=n("190b"),s=n.n(i);s.a},"190b":function(t,e,n){},"40cd":function(t,e,n){},"40e2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"books",function(){return G}),n.d(i,"chapter",function(){return K}),n.d(i,"detail",function(){return Q});n("a481"),n("456d"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("034f"),n("2877")),c={},u=Object(o["a"])(c,a,r,!1,null,null,null),l=u.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("s-header",{attrs:{title:"小说列表"}}),n("s-main",[n("div",{staticClass:"s-items"},t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"s-item",on:{click:function(n){return t.gotoList(e.bid,e.title)}}},[n("div",{staticClass:"s-bd-r"},[n("p",{staticClass:"s-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"s-author"},[t._v(t._s(e.author))]),e.update?n("p",{staticClass:"s-update"},[t._v("更新："+t._s(e.update))]):t._e(),e.chapter?n("p",{staticClass:"s-chapter"},[t._v("最新："+t._s(e.chapter))]):t._e()])])}),0)])],1)},p=[],h={name:"Index",data:function(){return{list:[]}},mounted:function(){this.getList()},methods:{gotoList:function(t,e){this.$router.push({path:"/list",query:{id:t,title:e}})},getList:function(){var t=this;this.$api.books().then(function(e){0===e.code&&(t.list=e.data)})}}},v=h,m=(n("0cbe"),Object(o["a"])(v,f,p,!1,null,"0854ec24",null)),b=m.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("s-header",{attrs:{title:t.title,isBack:"",isSort:"",sort:t.sort},on:{"update:sort":function(e){t.sort=e}}}),n("s-main",t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"s-items"},[n("div",{staticClass:"s-item",on:{click:function(n){return t.gotoDetail(e.pid,e.name)}}},[n("span",{staticClass:"s-name"},[t._v(t._s(e.name))])])])}),0)],1)},w=[],g=(n("55dd"),{name:"List",data:function(){return{id:this.$route.query.id,title:this.$route.query.title,list:[],sort:"desc"}},watch:{sort:{handler:function(t){return this.getList(),t},deep:!0}},mounted:function(){document.title=this.title,this.getList()},methods:{gotoDetail:function(t,e){this.$router.push({path:"/detail",query:{bid:this.id,pid:t,title:e}})},getList:function(){var t=this,e={bid:this.id,sort:this.sort};this.$api.chapter(e).then(function(e){0===e.code&&(t.list=e.data)})}}}),y=g,k=(n("dd54"),Object(o["a"])(y,_,w,!1,null,"50eefec3",null)),x=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("s-header",{attrs:{title:t.title,isBack:""}}),n("s-main",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"content"}],staticClass:"s-detail",domProps:{innerHTML:t._s(t.content)},on:{click:t.setting}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"s-setting"})],1)},C=[],j={name:"Detail",data:function(){return{bid:this.$route.query.bid,id:this.$route.query.pid,title:this.$route.query.title,content:"",show:!1}},mounted:function(){document.title=this.title,this.getDetail()},methods:{getDetail:function(){var t=this,e={bid:this.bid,pid:this.id};this.$api.detail(e).then(function(e){0===e.code&&(t.content=e.data.content.replace(/\s+/g,"<p>"))})},setting:function(){}}},O=j,L=(n("c530"),Object(o["a"])(O,$,C,!1,null,"0f371251",null)),S=L.exports;s["a"].use(d["a"]);var P=new d["a"]({mode:"history",routes:[{path:"/",name:"Index",component:b},{path:"/list",name:"List",component:x},{path:"/detail",name:"Detail",component:S}]}),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"s-header"},[n("i",{directives:[{name:"show",rawName:"v-show",value:t.isBack,expression:"isBack"}],staticClass:"s-icon s-left",on:{click:t.back}}),n("span",{staticClass:"s-header__title"},[t._v(t._s(t.title))]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.isSort,expression:"isSort"}],staticClass:"s-icon s-sort",on:{click:t.sort}})])},B=[],E={name:"Header",props:{title:{type:String,default:""},isBack:{type:Boolean,default:!1},isSort:{type:Boolean,default:!1}},data:function(){return{status:!0,isWeixin:window.isWeixin}},methods:{back:function(){this.$router.go(-1)},sort:function(){this.status=!this.status,this.$emit("update:sort",this.status?"desc":"asc")}}},M=E,D=(n("1252"),Object(o["a"])(M,q,B,!1,null,"afe1ca86",null)),T=D.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-body"},[t._t("default")],2)},W=[],H={name:"Main",data:function(){return{isWeixin:window.isWeixin}}},I=H,J=(n("5e4e"),Object(o["a"])(I,N,W,!1,null,"0fe00e8a",null)),U=J.exports,R={Header:T,Main:U},z=n("bc3a"),A=n.n(z);A.a.defaults.baseURL="https://novel.syc.im/v1/",A.a.defaults.headers.post["Content-Type"]="application/json",A.a.defaults.timeout=1e4;var F={get:function(t,e){return new Promise(function(n,i){A()({method:"get",url:t,params:e}).then(function(t){n(t.data)}).catch(function(t){i(t)})})},post:function(t,e){return new Promise(function(n,i){A()({method:"post",url:t,data:e}).then(function(t){n(t.data)}).catch(function(t){i(t)})})}},G=function(t){return F.get("book/list",t)},K=function(t){return F.get("book/chapter/list",t)},Q=function(t){return F.get("book/detail",t)};s["a"].config.productionTip=!1,Object.keys(R).forEach(function(t){var e=t.replace(/(\w)/,function(t){return t.toUpperCase()});s["a"].component("s".concat(e),R[t])}),s["a"].prototype.$api=i,new s["a"]({router:P,render:function(t){return t(l)}}).$mount("#app")},5959:function(t,e,n){},"5e4e":function(t,e,n){"use strict";var i=n("40cd"),s=n.n(i);s.a},"64a9":function(t,e,n){},c530:function(t,e,n){"use strict";var i=n("5959"),s=n.n(i);s.a},dd54:function(t,e,n){"use strict";var i=n("f241"),s=n.n(i);s.a},f241:function(t,e,n){}});
//# sourceMappingURL=app.8a63f2c5.js.map