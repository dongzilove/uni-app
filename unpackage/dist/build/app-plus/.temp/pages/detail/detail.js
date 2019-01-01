require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{20:function(t,e,i){"use strict";var n=s(i(1)),a=s(i(21));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},21:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(23),a=i.n(n),s=i(24);var o=function(t){i(22)},c=i(0)(a.a,s.a,o,null,null);e.default=c.exports},22:function(t,e){},23:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{imgShow:!1,index:0,showBtn:!1,screenHeight:0,imgLength:0,providerList:[],data:[],detailDec:""}},onLoad:function(e){var i=this;"Android"===plus.os.name&&(this.showBtn=!0),this.screenHeight=t.getSystemInfoSync().windowHeight,console.log(e.data),this.detailDec=e.data;var n=JSON.parse(e.data);this.imgLength=n.img_num,this.data.push(n.img_src),this.getData(n.id),t.setNavigationBarTitle({title:"1/"+this.imgLength}),t.getProvider({service:"share",success:function(t){for(var e=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":e.push({name:"分享到微信好友",id:"weixin"}),e.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":e.push({name:"分享到QQ",id:"qq"})}i.providerList=e},fail:function(t){console.log("获取登录通道失败",t)}})},onShareAppMessage:function(){return{title:"欢迎使用uni-app看图模板",path:"/pages/detail/detail?data="+this.detailDec,imageUrl:this.data[this.index]}},onNavigationBarButtonTap:function(e){var i=this;if(1!==e.index)if(0!==this.providerList.length){var n=this.providerList.map(function(t){return t.name});t.showActionSheet({itemList:n,success:function(e){t.share({provider:i.providerList[e.tapIndex].id,scene:i.providerList[e.tapIndex].type&&"WXSenceTimeline"===i.providerList[e.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:"欢迎使用uni-app模版",imageUrl:i.data[i.index],href:"https://uniapp.dcloud.io",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(e){t.showModal({content:e.errMsg,showCancel:!1})}})}})}else t.showModal({title:"当前环境无分享渠道!",showCancel:!1});else this.collect()},methods:{download:function(){t.downloadFile({url:this.data[this.index],success:function(e){console.log(e),t.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){t.showToast({icon:"none",title:"已保存到手机相册"})},fail:function(){t.showToast({icon:"none",title:"保存到手机相册失败"})}})},fail:function(e){t.showModal({content:"下载失败，"+e.errMsg,showCancel:!1})}})},collect:function(){t.showToast({icon:"none",title:"点击收藏按钮"})},setting:function(){var e=this;t.showToast({icon:"none",title:"正在设为壁纸"}),setTimeout(function(){var i=plus.android.importClass("android.app.WallpaperManager"),n=plus.android.runtimeMainActivity(),a=i.getInstance(n);plus.android.importClass(a);var s=plus.android.importClass("android.graphics.BitmapFactory");t.downloadFile({url:e.data[e.index],success:function(e){var i=e.tempFilePath.replace("file://",""),n=s.decodeFile(i);try{a.setBitmap(n),t.showToast({icon:"none",title:"壁纸设置成功"})}catch(e){t.showToast({icon:"none",title:"壁纸设置失败"})}},fail:function(){t.showToast({icon:"none",title:"壁纸设置失败"})}})},100)},swpierChange:function(e){this.index=e.detail.current,t.setNavigationBarTitle({title:e.detail.current+1+"/"+this.imgLength})},preImg:function(e){var i=this;this.imgShow||(this.imgShow=!0,setTimeout(function(){i.imgShow=!1},1e3),setTimeout(function(){t.previewImage({current:i.data[e],urls:i.data})},150))},getData:function(e){var i=this;t.request({url:this.$serverUrl+"/api/picture/detail.php?id="+e,success:function(e){0===e.data.code?i.data=i.data.concat(e.data.data):t.showModal({content:"请求失败，失败原因："+e.data.msg,showCancel:!1})},fail:function(){t.showModal({content:"请求失败，请重试!",showCancel:!1})}})}}}}).call(e,i(2).default)},24:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index"},[i("swiper",{style:{height:t.screenHeight+"px"},attrs:{eventid:"DtI-1"},on:{change:t.swpierChange}},t._l(t.data,function(e,n){return i("swiper-item",{key:n,attrs:{eventid:"eiJ-0-"+n,mpcomid:"c7h-0-"+n},on:{click:function(e){t.preImg(n)}}},[i("image",{attrs:{src:e,mode:"widthFix"}})])})),i("view",{staticClass:"detail-btn-view"},[i("view",{staticClass:"download",attrs:{eventid:"ovf-2"},on:{click:t.download}}),t.showBtn?i("view",{staticClass:"setting",attrs:{eventid:"e0W-3"},on:{click:t.setting}},[t._v("设为壁纸")]):t._e(),i("view",{staticClass:"collect",attrs:{eventid:"qaq-4"},on:{click:t.collect}})])],1)},staticRenderFns:[]};e.a=n}},[20]);