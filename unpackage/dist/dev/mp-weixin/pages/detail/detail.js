require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{20:function(e,t,i){"use strict";var n=s(i(1)),a=s(i(21));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(a.default))},21:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(23),a=i.n(n),s=i(24),o=!1;var c=function(e){o||i(22)},r=i(0)(a.a,s.a,c,null,null);r.options.__file="..\\..\\..\\..\\..\\..\\uni\\uni-kantu\\pages\\detail\\detail.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},22:function(e,t){},23:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imgShow:!1,index:0,showBtn:!1,screenHeight:0,imgLength:0,providerList:[],data:[],detailDec:""}},onLoad:function(t){var i=this;this.screenHeight=e.getSystemInfoSync().windowHeight,console.log(t.data),this.detailDec=t.data;var n=JSON.parse(t.data);this.imgLength=n.img_num,this.data.push(n.img_src),this.getData(n.id),e.setNavigationBarTitle({title:"1/"+this.imgLength}),e.getProvider({service:"share",success:function(e){for(var t=[],n=0;n<e.provider.length;n++)switch(e.provider[n]){case"weixin":t.push({name:"分享到微信好友",id:"weixin"}),t.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":t.push({name:"分享到QQ",id:"qq"})}i.providerList=t},fail:function(e){console.log("获取登录通道失败",e)}})},onShareAppMessage:function(){return{title:"欢迎使用uni-app看图模板",path:"/pages/detail/detail?data="+this.detailDec,imageUrl:this.data[this.index]}},onNavigationBarButtonTap:function(t){var i=this;if(1!==t.index)if(0!==this.providerList.length){var n=this.providerList.map(function(e){return e.name});e.showActionSheet({itemList:n,success:function(t){e.share({provider:i.providerList[t.tapIndex].id,scene:i.providerList[t.tapIndex].type&&"WXSenceTimeline"===i.providerList[t.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:"欢迎使用uni-app模版",imageUrl:i.data[i.index],href:"https://uniapp.dcloud.io",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(t){e.showModal({content:t.errMsg,showCancel:!1})}})}})}else e.showModal({title:"当前环境无分享渠道!",showCancel:!1});else this.collect()},methods:{download:function(){e.downloadFile({url:this.data[this.index],success:function(t){console.log(t),e.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){e.showToast({icon:"none",title:"已保存到手机相册"})},fail:function(){e.showToast({icon:"none",title:"保存到手机相册失败"})}})},fail:function(t){e.showModal({content:"下载失败，"+t.errMsg,showCancel:!1})}})},collect:function(){e.showToast({icon:"none",title:"点击收藏按钮"})},swpierChange:function(t){this.index=t.detail.current,e.setNavigationBarTitle({title:t.detail.current+1+"/"+this.imgLength})},preImg:function(t){var i=this;this.imgShow||(this.imgShow=!0,setTimeout(function(){i.imgShow=!1},1e3),setTimeout(function(){e.previewImage({current:i.data[t],urls:i.data})},150))},getData:function(t){var i=this;e.request({url:this.$serverUrl+"/api/picture/detail.php?id="+t,success:function(t){0===t.data.code?i.data=i.data.concat(t.data.data):e.showModal({content:"请求失败，失败原因："+t.data.msg,showCancel:!1})},fail:function(){e.showModal({content:"请求失败，请重试!",showCancel:!1})}})}}}}).call(t,i(2).default)},24:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"index"},[i("swiper",{style:{height:e.screenHeight+"px"},attrs:{eventid:"ULF-1"},on:{change:e.swpierChange}},e._l(e.data,function(t,n){return i("swiper-item",{key:n,attrs:{eventid:"HMF-0-"+n,mpcomid:"E4b-0-"+n},on:{click:function(t){e.preImg(n)}}},[i("image",{attrs:{src:t,mode:"widthFix"}})])})),i("view",{staticClass:"detail-btn-view"},[i("view",{staticClass:"download",attrs:{eventid:"BRP-2"},on:{click:e.download}}),i("view",{staticClass:"collect",attrs:{eventid:"qr0-3"},on:{click:e.collect}})])],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a}},[20]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map