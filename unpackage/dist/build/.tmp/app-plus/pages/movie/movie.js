(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movie/movie"],{"00e6":function(t,a,e){"use strict";e.r(a);var n=e("5d9f"),i=e("95e0");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("97db");var r=e("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},"5d93":function(t,a,e){},"5d9f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},"95e0":function(t,a,e){"use strict";e.r(a);var n=e("a7b2"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a},"97db":function(t,a,e){"use strict";var n=e("5d93"),i=e.n(n);i.a},a7b2:function(t,a,e){"use strict";(function(t,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=function(){return e.e("components/lee-search/lee-search").then(e.bind(null,"793a"))},o=function(){return e.e("components/trailerStars").then(e.bind(null,"ba8f"))},r={components:{uniSearch:i,trailerStars:o},data:function(){return{iconSrc:{logo:"../../static/lee-search/icon_search.png",voice:"../../static/lee-search/icon_voice.png",scan:"../../static/lee-search/icon_scan.png",clear:"../../static/lee-search/icon_clear.png"},inputAttr:{backgroundColor:"#f2f2f2",placeholderText:"搜索影片和影人"},trailerList:[],page:1,totalPages:1}},onLoad:function(){var a=this,e=this;t.showLoading({mask:!0,title:"请稍后..."}),t.showNavigationBarLoading(),t.request({url:this.$store.state.mainUrl+"/movie/movieList?page=1",method:"GET",success:function(t){if(200==t.data.status){var n=t.data.data.result;a.totalPages=t.data.data.total,e.trailerList=n}},complete:function(){t.hideNavigationBarLoading(),t.hideLoading()}})},onReachBottom:function(){var a=this;this.page=this.page+1,this.page>this.totalPages?t.showToast({title:"没有更多的影片了",icon:"none",duration:1e3}):a.pagedTrailerList(this.page)},methods:{scan:function(t){console.log(n(t," at pages\\movie\\movie.vue:122"))},pagedTrailerList:function(a){var e=this;t.showLoading({mask:!0,title:"请稍后..."}),t.showNavigationBarLoading();e.serverUrl;t.request({url:this.$store.state.mainUrl+"/movie/movieList?page="+a,method:"GET",success:function(t){if(200==t.data.status){var i=t.data.data.result;e.trailerList=e.trailerList.concat(i),e.totalPages=t.data.data.total,console.log(n("总页数"+totalPages," at pages\\movie\\movie.vue:143")),e.page=a}},complete:function(){t.hideNavigationBarLoading(),t.hideLoading()}})}}};a.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["cfe4","common/runtime","common/vendor"]]]);