"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[687],{4687:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(9439),a=n(2791),o={navbar:"PageGradientScroll_navbar__qjoy+",wrap:"PageGradientScroll_wrap__OyIwd",bgImage:"PageGradientScroll_bgImage__bTqO5",bgImageMask:"PageGradientScroll_bgImageMask__COTpi",tab:"PageGradientScroll_tab__4X4i8",tabItem:"PageGradientScroll_tabItem__YRTNd",tabActive:"PageGradientScroll_tabActive__EiApL",content:"PageGradientScroll_content__xhd+W",contentItem:"PageGradientScroll_contentItem__N0x8b"},c=[{name:"clouds",url:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/clouds.png"},{name:"stars",url:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/stars.png"},{name:"mountains",url:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/demos/mountains.png"}],s=["Lorem","Ipsum","Consectetur","Vitae","Maecenas","Sit","Donec","Sed"],i=n(184),l=window.innerWidth/16*9,d=Math.floor(Math.random()*c.length);var u=function(){var e=(0,a.useState)(0),t=(0,r.Z)(e,2),n=t[0],u=t[1],h=(0,a.useState)(!1),g=(0,r.Z)(h,2),m=g[0],f=g[1],b=(0,a.useState)([255,255,255]),v=(0,r.Z)(b,2),p=v[0],w=v[1],_=(0,a.useRef)(null),y=(0,a.useRef)(null),I=(0,a.useRef)(null);console.log(m);var x=function(){var e;(e=c[d].url,new Promise((function(t,n){var r=new XMLHttpRequest;r.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(r.response)},r.onerror=function(e){console.error("An error occurred while transferring the image.",e),n(e)},r.open("GET",e),r.responseType="blob",r.send()}))).then((function(e){var t=document.createElement("img");t.src=e,t.onload=function(){var e=function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var n=t.getContext("2d");if(!n)return[255,255,255];n.drawImage(e,0,0);for(var r=n.getImageData(0,0,t.width,t.height).data,a=0,o=0,c=0,s=0,i=0;i<t.height;i+=50)for(var l=0;l<t.width;l+=50){var d=4*(i*t.width+l);a+=r[d],o+=r[d+1],c+=r[d+2],s+=1}return[Math.floor(a/s),Math.floor(o/s),Math.floor(c/s)]}(t);w(e),function(e){if(!e)throw new Error("rgb is required");var t=(0,r.Z)(e,3),n=t[0],a=t[1],o=t[2];if(n<0||a<0||o<0)throw new Error("rgb values must be greater than or equal to zero");if(n>255||a>255||o>255)throw new Error("rgb values must be less than or equal to 255");return.299*n+.587*a+.114*o<180}(e)&&f(!0)}}))};return(0,a.useEffect)((function(){x(),window.addEventListener("scroll",(function(){if(y.current&&I.current){var e=l-60,t=document.documentElement.scrollTop||document.body.scrollTop;t>=e?(y.current.style.opacity="1",y.current.style.height="".concat(80,"px"),I.current.style.opacity="1"):(y.current.style.opacity="".concat(t/e),y.current.style.height="".concat(l-t,"px"),I.current.style.opacity="".concat(t/e))}}))}),[]),(0,i.jsxs)("div",{style:{backgroundColor:"rgb(".concat(p[0],", ").concat(p[1],", ").concat(p[2],")")},children:[(0,i.jsx)("div",{className:o.navbar,style:{height:60,color:m?"#fff":"#333"},ref:I,children:"Page Gradient Scroll"}),(0,i.jsx)("img",{className:o.bgImage,src:c[d].url,alt:c[d].name}),(0,i.jsx)("div",{className:o.bgImageMask,ref:y,style:{height:l,backgroundColor:"rgb(".concat(p[0],", ").concat(p[1],", ").concat(p[2],")")}}),(0,i.jsxs)("div",{className:o.wrap,children:[(0,i.jsx)("div",{className:o.bgPadding,style:{height:l-20}}),(0,i.jsx)("div",{className:o.tab,ref:_,style:{top:60},children:s.map((function(e,t){return(0,i.jsx)("button",{className:"".concat(o.tabItem," ").concat(n===t?o.tabActive:""),onClick:function(){!function(e){if(u(e),_.current){var t=window.innerWidth/2,n=_.current.children[e].offsetWidth/2,r=_.current.children[e].offsetLeft-t+n;_.current.scroll({left:r,behavior:"smooth"})}}(t)},type:"button",children:e},e)}))}),(0,i.jsx)("div",{className:o.content,children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return(0,i.jsx)("div",{className:o.contentItem,style:{backgroundColor:"rgba(".concat(p[0],", ").concat(p[1],", ").concat(p[2],", 0.3)")},children:e},e)}))})]})]})}}}]);
//# sourceMappingURL=687.199f14d9.chunk.js.map