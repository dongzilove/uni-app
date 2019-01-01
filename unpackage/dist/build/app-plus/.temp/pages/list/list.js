require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{30:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(31));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},31:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(33),a=i.n(s),n=i(34);var r=function(t){i(32)},o=i(0)(a.a,n.a,r,null,null);e.default=o.exports},32:function(t,e){},33:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{refreshing:!1,loadMoreText:"加载中...",lists:[],id:0,fetchPageNum:0}},onLoad:function(e){var i=this;t.setNavigationBarTitle({title:"专题："+e.type}),this.id=e.id,setTimeout(function(){i.getData()},300),t.getProvider({service:"share",success:function(t){for(var e=[],s=0;s<t.provider.length;s++)switch(t.provider[s]){case"weixin":e.push({name:"分享到微信好友",id:"weixin"}),e.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":e.push({name:"分享到QQ",id:"qq"})}i.providerList=e},fail:function(t){console.log("获取登录通道失败",t)}})},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},onReachBottom:function(){console.log("上拉加载刷新"),this.fetchPageNum>4?this.loadMoreText="没有更多了":this.getData()},methods:{getData:function(e){var i=this;t.request({url:this.$serverUrl+"/api/picture/list.php?type="+this.id,success:function(e){if(200!==e.statusCode)console.log("请求失败",e);else{if(i.refreshing&&e.data.data[0].id===i.lists[0][0].id)return t.showToast({title:"已经最新",icon:"none"}),i.refreshing=!1,void t.stopPullDownRefresh();for(var s=[],a=[],n=e.data.data,r=0,o=n.length;r<o;r++){Math.floor(r/2);s.push(n[r]),r%2==1&&(a.push(s),s=[])}console.log("list页面得到lists",a),i.refreshing?(i.refreshing=!1,t.stopPullDownRefresh(),i.lists=a,i.fetchPageNum=2):(i.lists=i.lists.concat(a),i.fetchPageNum+=1),i.fetchPageNum+=1}}})},goDetail:function(e){t.navigateTo({url:"../detail/detail?data="+JSON.stringify(e)})},share:function(e){var i=this;if(0!==this.providerList.length){var s=this.providerList.map(function(t){return t.name});t.showActionSheet({itemList:s,success:function(s){t.share({provider:i.providerList[s.tapIndex].id,scene:i.providerList[s.tapIndex].type&&"WXSenceTimeline"===i.providerList[s.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:e.title,imageUrl:e.img_src,href:"https://uniapp.dcloud.io",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(e){t.showModal({content:e.errMsg,showCancel:!1})}})}})}else t.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}}}).call(e,i(2).default)},34:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[t._l(t.lists,function(e,s){return i("block",{key:s},[i("view",{staticClass:"row"},t._l(e,function(e,a){return i("view",{key:a,staticClass:"card card-list2",attrs:{eventid:"tAm-1-"+s+"-"+a},on:{click:function(i){t.goDetail(e)}}},[i("image",{staticClass:"card-img card-list2-img",attrs:{src:e.img_src}}),i("view",{staticClass:"card-num-view card-list2-num-view"},[i("text",{staticClass:"card-num card-list2-num"},[t._v(t._s(e.img_num)+"P")])]),i("view",{staticClass:"card-bottm row"},[i("view",{staticClass:"car-title-view row"},[i("text",{staticClass:"card-title card-list2-title"},[t._v(t._s(e.title))])]),i("view",{staticClass:"card-share-view",attrs:{eventid:"y66-0-"+s+"-"+a},on:{click:function(i){i.stopPropagation(),t.share(e)}}})])])}))])}),i("text",{staticClass:"loadMore"},[t._v(t._s(t.loadMoreText))])],2)},staticRenderFns:[]};e.a=s}},[30]);