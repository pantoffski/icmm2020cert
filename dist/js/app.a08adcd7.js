(function(t){function e(e){for(var n,s,r=e[0],c=e[1],h=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,h||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var h=0;h<r.length;h++)e(r[h]);var l=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("d3b7"),i("e260"),i("e6cf"),i("cca6"),i("a79d");var n,a,o=i("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.bibNo,expression:"bibNo"}],staticClass:"bibTxt",attrs:{type:"text",placeholder:" หมายเลข bib"},domProps:{value:t.bibNo},on:{input:function(e){e.target.composing||(t.bibNo=e.target.value)}}}),t.runnerStat?n("div",[n("div",{staticClass:"home",style:{"min-height":t.containerWidth+"px"}},[t.isShow?n("zoomer",{staticStyle:{border:"solid 1px silver"},style:t.containerStyle,attrs:{imgW:t.imgW,imgH:t.imgH,disabled:t.disabledZoom},on:{size:t.newSize}},[n("img",{attrs:{src:t.imgSrc}})]):t._e(),n("canvas",{ref:"cv",staticStyle:{"pointer-events":"none"},style:t.containerStyle,attrs:{width:"1000",height:"1000"}})],1),n("div",{staticClass:"bg4sel"},[n("div",{style:{width:100*(t.thaiRunImg.length+3)+"px"}},[n("div",{staticClass:"bg",style:{"background-image":"url('"+t.defaultImgSrc+"')"},on:{click:t.setDefaultImg}}),n("div",{staticClass:"bg",style:{"background-image":"url('"+i("a23a")+"')"},on:{click:t.browse}}),t.isLoadingThaiRunImg?n("div",{staticClass:"bg loading"},[n("hr")]):t._e(),t._l(t.thaiRunImg,(function(e,i){return n("div",{key:i,staticClass:"bg",style:{"background-image":"url('"+e.view.thumbnail.url+"')"},on:{click:function(n){return t.setImgThaiRun(e.view[t.thaiRunImgType].url,e.view[t.thaiRunImgType].size.width,e.view[t.thaiRunImgType].size.height,i+2)}}})}))],2)]),n("button",{class:{certBtn:!0,busy:t.isGenCert},on:{click:t.drawCert}},[n("hr"),t._v("download cert ")])]):t._e(),n("img",{ref:"img",staticStyle:{position:"absolute",width:"1px",height:"1px",top:"-10px"},attrs:{src:t.imgSrc}}),n("img",{ref:"img4draw",staticStyle:{position:"absolute",width:"1px",height:"1px",top:"-10px"},attrs:{src:t.img4DrawSrc}}),n("input",{ref:"inpFile",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.doUpload}})])},r=[],c=(i("99af"),i("b0c0"),i("ac1f"),i("466d"),i("1276"),i("96cf"),i("1da1")),h=(i("c19f"),i("ace4"),i("5319"),i("5cc6"),i("9a8c"),i("a975"),i("735e"),i("c1ac"),i("d139"),i("3a7b"),i("d5d6"),i("82f8"),i("e91f"),i("60bd"),i("5f96"),i("3280"),i("3fcc"),i("ca91"),i("25a1"),i("cd26"),i("3c5d"),i("2954"),i("649e"),i("219c"),i("170b"),i("b39a9"),i("72f7"),i("6f45")),l={name:"imageMixin",methods:{mxnRotateImg:function(t,e){var i,n=t.width,a=t.height;i=document.createElement("canvas"),i.width=n,i.height=a,e>4&&(i.width=a,i.height=n);var o=i.getContext("2d");if(e)switch(e){case 2:o.translate(a,0),o.scale(-1,1);break;case 3:o.translate(n,a),o.rotate(Math.PI);break;case 4:o.translate(0,a),o.scale(1,-1);break;case 5:o.rotate(.5*Math.PI),o.scale(1,-1);break;case 6:o.rotate(.5*Math.PI),o.translate(0,-a);break;case 7:o.rotate(.5*Math.PI),o.translate(n,-a),o.scale(-1,1);break;case 8:o.rotate(-.5*Math.PI),o.translate(-n,0);break}return o.drawImage(t,0,0,n,a,0,0,n,a),i.to,i},mxnImgResizeAndCrop:function(t,e,i){var n,a,o,s,r=t.width,c=t.height;return n=document.createElement("canvas"),n.width=e,n.height=i,a=n.getContext("2d"),r/c>=e/i?(o=c,s=Math.floor(c*e/i)):(s=r,o=Math.floor(r*i/e)),a.drawImage(t,Math.floor((r-s)/2),Math.floor((c-o)/2),s,o,0,0,e,i),n},mxnImgResizeNoCrop:function(t,e,i){var n,a,o=1,s=t.width,r=t.height;return n=document.createElement("canvas"),(s>e||r>i)&&(o=s/r>=e/i?e/s:i/r),e=Math.floor(s*o),i=Math.floor(r*o),n.width=e,n.height=i,a=n.getContext("2d"),s/r>=e/i?(r,Math.floor(r*e/i)):(s,Math.floor(s*i/e)),a.drawImage(t,0,0,s,r,0,0,e,i),n},mxnCanvas2Binary:function(t,e){e=e||.75;var i=t.toDataURL("image/png",e);return i=i.replace(/^data\:([^\;]+)\;base64,/gim,""),window.atob(i)},mxnImgElFromBinaryImage:function(t){return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(i){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=new Image,n.onload=function(){return i(n)},n.src="data:image/png;base64,"+window.btoa(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},mxnOrientationFromBinaryImage:function(t){return h.readFromBinaryFile(this.mxnBin2ArrayBuffer(t)).Orientation},mxnBin2ArrayBuffer:function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var e=t.length,i=new ArrayBuffer(e),n=new Uint8Array(i),a=0;a<e;a++)n[a]=t.charCodeAt(a);return i}}},u=l,d=i("2877"),m=Object(d["a"])(u,n,a,!1,null,null,null),f=m.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-zoomer",style:{backgroundColor:t.backgroundColor},on:{mousewheel:function(e){return e.preventDefault(),t.onMouseWheel(e)},DOMMouseScroll:t.onMouseWheel,mousedown:t.onMouseDown,mouseup:t.onMouseUp,mousemove:t.onMouseMove,mouseout:t.onMouseOut,touchstart:t.onTouchStart,touchend:t.onTouchEnd,touchmove:t.onTouchMove}},[i("div",{staticClass:"zoomer",style:t.wrapperStyle},[t._t("default")],2)])},g=[],v=(i("a15b"),i("90d7"),i("a9e3"),i("acd8"),i("f7fe")),w=i.n(v);i("caad"),i("159b");function b(){var t=[],e=[];function i(t,e){t.forEach((function(t){t.call(null,e)}))}this.onSingleTap=function(e){"function"!==typeof e||t.includes(e)||t.push(e)},this.onDoubleTap=function(t){"function"!==typeof t||e.includes(t)||e.push(t)},this.attach=function(t){t instanceof Element&&(t.addEventListener("touchstart",h),t.addEventListener("touchmove",u),t.addEventListener("touchend",l),t.addEventListener("mousedown",d),t.addEventListener("mouseup",m),t.addEventListener("mousemove",f))},this.detach=function(t){t.removeEventListener("touchstart",h),t.removeEventListener("touchmove",u),t.removeEventListener("touchend",l),t.removeEventListener("mousedown",d),t.removeEventListener("mouseup",m),t.removeEventListener("mousemove",f)};var n=!1,a=0,o=0,s=0,r=0,c=0;function h(t){n=!0,1===t.touches.length&&p(t.touches[0].clientX,t.touches[0].clientY)}function l(t){0===t.touches.length&&g()}function u(t){1===t.touches.length&&v(t.touches[0].clientX,t.touches[0].clientY)}function d(t){n||p(t.clientX,t.clientY)}function m(t){n||g()}function f(t){n||0===t.button&&v(t.clientX,t.clientY)}function p(t,e){r=t,c=e,s=0}function g(){var n=Date.now();s<10&&(n-a<300?o+=1:o=1,a=Date.now(),i(t,{clientX:r,clientY:c}),2===o&&(i(e,{clientX:r,clientY:c}),o=0)),s=0}function v(t,e){var i=r-t,n=c-e,a=Math.sqrt(i*i+n*n);s+=a,r=t,c=e}}var y=b,x={name:"Zoomer",props:{imgW:{type:Number,default:500},imgH:{type:Number,default:500},minScale:{type:Number,default:1},maxScale:{type:Number,default:5},zoomed:{type:Boolean,default:!1},resetTrigger:{type:Number,default:1e5},aspectRatio:{type:Number,default:1},backgroundColor:{type:String,default:"transparent"},pivot:{type:String,default:"cursor"},limitTranslation:{type:Boolean,default:!0},doubleClickToZoom:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},data:function(){return{containerWidth:1,containerHeight:1,containerLeft:0,containerTop:0,translateX:0,animTranslateX:0,translateY:0,animTranslateY:0,scale:.01,animScale:1,lastFullWheelTime:0,lastWheelTime:0,lastWheelDirection:"y",isPointerDown:!1,pointerPosX:-1,pointerPosY:-1,twoFingerInitDist:0,panLocked:!1,raf:null,tapDetector:null}},computed:{wrapperStyle:function(){var t=this.containerWidth*this.animTranslateX,e=this.containerHeight*this.animTranslateY;return{transform:["translate(".concat(t,"px, ").concat(e,"px)"),"scale(".concat(this.animScale,")")].join(" ")}}},watch:{scale:function(t){1!==t&&(this.$emit("update:zoomed",!0),this.panLocked=!1)},resetTrigger:"reset"},mounted:function(){this.tapDetector=new y,this.tapDetector.attach(this.$el),this.doubleClickToZoom&&this.tapDetector.onDoubleTap(this.onDoubleTap),window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.refreshContainerPos(),this.loop()},destroyed:function(){this.tapDetector.detach(this.$el),window.removeEventListener("resize",this.onWindowResize),window.cancelAnimationFrame(this.raf)},methods:{reset:function(){this.scale=1,this.panLocked=!1,this.translateX=0,this.translateY=0},zoomIn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;this.tryToScale(t),this.onInteractionEnd()},zoomOut:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;this.tryToScale(t),this.onInteractionEnd()},tryToScale:function(t){var e=this.scale*t;if(e<this.minScale||e>this.maxScale){var i=Math.log2(t);i*=.4,t=Math.pow(2,i),e=this.scale*t}if(t=e/this.scale,this.scale=e,"image-center"!==this.pivot){var n=(this.pointerPosX-this.containerLeft)/this.containerWidth,a=(this.pointerPosY-this.containerTop)/this.containerHeight;this.translateX=(.5+this.translateX-n)*t+n-.5,this.translateY=(.5+this.translateY-a)*t+a-.5}},setPointerPosCenter:function(){this.pointerPosX=this.containerLeft+this.containerWidth/2,this.pointerPosY=this.containerTop+this.containerHeight/2},onPointerMove:function(t,e){if(this.isPointerDown){var i=t-this.pointerPosX,n=e-this.pointerPosY;this.panLocked||(this.translateX+=i/this.containerWidth,this.translateY+=n/this.containerHeight)}this.pointerPosX=t,this.pointerPosY=e},onInteractionEnd:w()((function(){this.limit(),this.$emit("update:zoomed",!this.panLocked)}),100),limit:function(){var t=Math.max(this.containerWidth/this.imgW,this.containerHeight/this.imgH),e=this.scale<t?t:this.scale;this.scale=e;var i=(e-1)/2,n=(e-1)/2,a=1+n-this.imgW*e/this.containerWidth,o=1+i-this.imgH*e/this.containerHeight;this.translateX<a&&(this.translateX=a),this.translateY<o&&(this.translateY=o),this.translateX>n&&(this.translateX=n),this.translateY>i&&(this.translateY=i),this.$emit("size",{x:this.containerWidth*this.translateX,y:this.containerHeight*this.translateY,scale:e})},calcTranslateLimit:function(){if("y"===this.getMarginDirection()){var t=this.containerWidth/this.aspectRatio/this.containerHeight,e=(this.scale*t-1)/2;return e<0&&(e=0),{x:(this.scale-1)/2,y:e}}var i=this.containerHeight*this.aspectRatio/this.containerWidth,n=(this.scale*i-1)/2;return n<0&&(n=0),{x:n,y:(this.scale-1)/2}},getMarginDirection:function(){var t=this.containerWidth/this.containerHeight;return t>this.aspectRatio?"x":"y"},onDoubleTap:function(t){1===this.scale?(t.clientX>0&&(this.pointerPosX=t.clientX,this.pointerPosY=t.clientY),this.tryToScale(Math.min(3,this.maxScale))):this.reset(),this.onInteractionEnd()},onWindowResize:function(){var t=window.getComputedStyle(this.$el);this.containerWidth=parseFloat(t.width),this.containerHeight=parseFloat(t.height),this.setPointerPosCenter(),this.limit()},refreshContainerPos:function(){var t=this.$el.getBoundingClientRect();this.containerLeft=t.left,this.containerTop=t.top},loop:function(){this.animScale=this.gainOn(this.animScale,this.scale),this.animTranslateX=this.gainOn(this.animTranslateX,this.translateX),this.animTranslateY=this.gainOn(this.animTranslateY,this.translateY),this.raf=window.requestAnimationFrame(this.loop)},gainOn:function(t,e){var i=.3*(e-t);return Math.abs(i)>1e-5?t+i:e},onMouseWheel:function(t){if(!this.disabled){t.detail&&(t.wheelDelta=-10*t.detail);var e=Date.now();120===Math.abs(t.wheelDelta)?e-this.lastFullWheelTime>50&&(this.onMouseWheelDo(t.wheelDelta),this.lastFullWheelTime=e):(e-this.lastWheelTime>50&&"number"===typeof t.deltaX&&(this.lastWheelDirection=0==t.detail&&Math.abs(t.deltaX)>Math.abs(t.deltaY)?"x":"y","x"===this.lastWheelDirection&&this.$emit("swipe",t.deltaX>0?"left":"right")),"y"===this.lastWheelDirection&&this.onMouseWheelDo(t.wheelDelta)),this.lastWheelTime=e}},onMouseWheelDo:function(t){var e=Math.pow(1.25,t/120);this.tryToScale(e),this.onInteractionEnd()},onMouseDown:function(t){this.disabled||(this.refreshContainerPos(),this.isPointerDown=!0,this.pointerPosX=t.clientX,this.pointerPosY=t.clientY)},onMouseUp:function(t){this.disabled||(this.isPointerDown=!1,this.onInteractionEnd())},onMouseMove:function(t){this.disabled||this.onPointerMove(t.clientX,t.clientY)},onMouseOut:function(){this.disabled||(this.isPointerDown=!1,this.onInteractionEnd(),this.setPointerPosCenter())},onTouchStart:function(t){if(!this.disabled)if(1===t.touches.length)this.refreshContainerPos(),this.pointerPosX=t.touches[0].clientX,this.pointerPosY=t.touches[0].clientY,this.isPointerDown=!0;else if(2===t.touches.length){this.isPointerDown=!0,this.pointerPosX=(t.touches[0].clientX+t.touches[1].clientX)/2,this.pointerPosY=(t.touches[0].clientY+t.touches[1].clientY)/2;var e=t.touches[0].clientX-t.touches[1].clientX,i=t.touches[0].clientY-t.touches[1].clientY;this.twoFingerInitDist=Math.sqrt(e*e+i*i)}},onTouchEnd:function(t){this.disabled||(0===t.touches.length?(this.isPointerDown=!1,Math.abs(this.scale-1)<.1&&(this.scale=1),this.onInteractionEnd()):1===t.touches.length&&(this.pointerPosX=t.touches[0].clientX,this.pointerPosY=t.touches[0].clientY))},onTouchMove:function(t){if(!this.disabled)if(1===t.touches.length)this.onPointerMove(t.touches[0].clientX,t.touches[0].clientY);else if(2===t.touches.length){var e=(t.touches[0].clientX+t.touches[1].clientX)/2,i=(t.touches[0].clientY+t.touches[1].clientY)/2;this.onPointerMove(e,i),this.pointerPosX=e,this.pointerPosY=i;var n=t.touches[0].clientX-t.touches[1].clientX,a=t.touches[0].clientY-t.touches[1].clientY,o=Math.sqrt(n*n+a*a);this.tryToScale(o/this.twoFingerInitDist),this.twoFingerInitDist=o}}}},S=x,I=(i("b162"),Object(d["a"])(S,p,g,!1,null,null,null)),T=I.exports,P={name:"App",components:{Zoomer:T},mixins:[f],data:function(){return{bibNo:"",disabledZoom:!0,defaultImgSrc:i("bc98"),imgSrc:i("bc98"),img4DrawSrc:i("bc98"),imgW:1e3,imgH:1e3,imgIdx:0,x:0,y:0,scale:1,cancelSource:null,runnerStat:null,isShow:!0,isBusy:!1,isGenCert:!1,isThaiRunImg:!1,isLoadingThaiRunImg:!1,thaiRunImgType:"preview",thaiRunImg:[],downloadedImg:null,wWidth:1,wHeight:1,ox:0,oy:0,minSize:450}},methods:{browse:function(){this.$refs.inpFile.click()},doUpload:function(){var t=this;if(!this.isBusy&&this.$refs.inpFile.files[0]){var e=this.$refs.inpFile.files[0];e.name.split(".").pop().toLowerCase();if(e.name.match(/(.png|.jpeg|.jpg)$/i)){this.isBusy=!0;var i=new FileReader;i.onload=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(i){var n,a,o,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=i.target.result,a=t.mxnOrientationFromBinaryImage(n),e.next=4,t.mxnImgElFromBinaryImage(n);case 4:if(o=e.sent,s=t.mxnImgResizeNoCrop(o,1e3,1e3),r=t.mxnRotateImg(s,a),t.$refs.inpFile.value="",t.isBusy=!1,!(r.width<t.minSize||r.width<t.minSize)){e.next=11;break}return e.abrupt("return",alert("รูปเล็กเกิ๊น ".concat(t.minSize," x ").concat(t.minSize)));case 11:t.imgW=r.width,t.imgH=r.height,t.imgIdx=1,t.disabledZoom=!1,t.imgSrc=r.toDataURL("image/png"),t.img4DrawSrc=r.toDataURL("image/png"),t.refreshZoomer();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.$nextTick((function(t){i.readAsBinaryString(e)}))}}},drawCert:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,i,n,a,o,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isGenCert){t.next=2;break}return t.abrupt("return");case 2:this.isGenCert=!0,this.drawInfo(),e=document.createElement("canvas"),e.width=1e3,e.height=1e3,i=this.containerWidth,n=1e3/i,a=e.getContext("2d"),a.resetTransform(),a.clearRect(0,0,1e3,1e3),o=(1-this.scale)*i/2,a.translate((this.x+o)*n,(this.y+o)*n),a.scale(this.scale*n,this.scale*n);case 15:if(this.img4DrawSrc){t.next=20;break}return t.next=18,new Promise((function(t){return window.setTimeout(t,10)}));case 18:t.next=15;break;case 20:return a.drawImage(this.$refs.img4draw,0,0),s=this.$refs.cv,a.resetTransform(),a.drawImage(s,0,0),a.save(),t.next=27,this.$http.post("/api/?todo=imgUpload",{d:e.toDataURL("image/png")}).then((function(t){return t.data.fName})).catch((function(t){alert(t.response.data||"เกิดข้อผิดพลาดขึ้น กรุณาลองอีกครั้ง")})).finally((function(t){}));case 27:r=t.sent,this.isGenCert=!1;try{window.liff.sendMessages([{type:"image",originalContentUrl:r,previewImageUrl:r}]).then((function(){window.liff.closeWindow()})).catch((function(t){alert("เกิดข้อผิดพลาดขึ้น กรุณาลองอีกครั้ง")}))}catch(c){}case 31:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),drawInfo:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$refs.cv){t.next=5;break}return t.next=3,new Promise((function(t){return window.setTimeout(t,10)}));case 3:t.next=0;break;case 5:e=this.$refs.cv.getContext("2d"),e.clearRect(0,0,this.$refs.cv.width,this.$refs.cv.height),e.font="150px icmm",e.font,e.fillStyle="orange",e.fillText("สวัสดีคุณ ".concat(this.bibNo),10,200);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setDefaultImg:function(){0!=this.imgIdx&&(this.imgIdx=0,this.imgSrc!=this.defaultImgSrc&&(this.imgSrc=i("bc98"),this.img4DrawSrc=i("bc98"),this.imgW=1e3,this.imgH=1e3,this.disabledZoom=!0,this.isThaiRunImg=!1,this.refreshZoomer()))},setImgThaiRun:function(t,e,i,n){var a=this;this.imgIdx!=n&&(this.imgIdx=n,this.imgSrc=t,this.img4DrawSrc=null,this.imgW=e,this.imgH=i,this.disabledZoom=!1,this.isThaiRunImg=!0,this.refreshZoomer(),this.$http.post("/api/?todo=thaiRunImgProxy",{url:t}).then((function(t){a.img4DrawSrc="data:image/jpeg;base64,"+t.data})))},refreshZoomer:function(){var t=this;this.isShow=!1,this.$nextTick((function(e){t.isShow=!0}))},newSize:function(t){this.x=t.x,this.y=t.y,this.scale=t.scale},fetchRunnerStat:function(){var t=this;this.runnerStat=null,this.setDefaultImg(),this.$http.get("/api/?todo=runnerStat&id=".concat(this.bibNo)).then((function(e){var i,n;(null===(i=e.data)||void 0===i?void 0:i.runner)&&(t.runnerStat=null===(n=e.data)||void 0===n?void 0:n.runner,t.fetchThaiRunImg(),t.drawInfo())})).catch((function(t){}))},fetchThaiRunImg:function(){var t=this;this.thaiRunImg=[];this.bibNo;try{this.cancelSource.cancel()}catch(e){}this.cancelSource=this.$http.CancelToken.source(),this.isLoadingThaiRunImg=!0,this.$http.get("/api/?todo=thaiRunImg&id=".concat(this.bibNo),{cancelToken:this.cancelSource.token}).then((function(e){var i,n,a,o;t.isLoadingThaiRunImg=!1,(null===(i=e.data.data)||void 0===i?void 0:null===(n=i.searchPhotos)||void 0===n?void 0:n.items)&&(t.thaiRunImg=null===(a=e.data.data)||void 0===a?void 0:null===(o=a.searchPhotos)||void 0===o?void 0:o.items)})).catch((function(t){}))},handleResize:function(){this.wWidth=window.innerWidth,this.wHeight=window.innerHeight,this.refreshZoomer()}},computed:{containerWidth:function(){var t=this.wWidth-16;return t>this.minSize?this.minSize:t},containerStyle:function(){return{width:"".concat(this.containerWidth,"px"),height:"".concat(this.containerWidth,"px")}}},watch:{bibNo:function(){this.fetchRunnerStat()}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.addEventListener("resize",this.handleResize),this.handleResize();case 2:if(window.liff){t.next=7;break}return t.next=5,new Promise((function(t){return window.setTimeout(t,10)}));case 5:t.next=2;break;case 7:window.liff.init({liffId:"1638075301-PqWQ97b4"});case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},R=P,M=(i("5c0b"),Object(d["a"])(R,s,r,!1,null,null,null)),D=M.exports,W=i("bc3a"),X=i.n(W);X.a.defaults.baseURL="/",X.a.interceptors.request.use((function(t){return"delete"===t.method&&(t.method="post",t.headers["X-HTTP-Method-Override"]="DELETE"),t}),(function(t){return Promise.reject(t)})),o["a"].prototype.$http=X.a,o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),a=i.n(n);a.a},"9c0c":function(t,e,i){},a23a:function(t,e,i){t.exports=i.p+"img/uploadIcon.ac88a30f.png"},b162:function(t,e,i){"use strict";var n=i("b307"),a=i.n(n);a.a},b307:function(t,e,i){},bc98:function(t,e,i){t.exports=i.p+"img/cert.722b825f.png"}});