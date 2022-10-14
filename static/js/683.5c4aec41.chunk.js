"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[683],{683:function(n,e,r){r.r(e),r.d(e,{default:function(){return yn}});var t=r(791),a="FerrisWheel_container__XxQ8n",u="FerrisWheel_ferris__DN9zv",o="FerrisWheel_wheel__LZcpm",i="FerrisWheel_roomsArea__-DTtx",c="FerrisWheel_room__6okD+",s="FerrisWheel_bottom__nbg20",f=function(n){return n*Math.PI/180},l=function(n,e){for(var r=f(360/e),t=[],a=0;a<e;a+=1)t.push({x:n*Math.cos(r*a),y:n*Math.sin(r*a)});return t},d={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},p={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},h=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],v={CSS:{},springs:{}};function m(n,e,r){return Math.min(Math.max(n,e),r)}function g(n,e){return n.indexOf(e)>-1}function y(n,e){return n.apply(null,e)}var b={arr:function(n){return Array.isArray(n)},obj:function(n){return g(Object.prototype.toString.call(n),"Object")},pth:function(n){return b.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||b.svg(n)},str:function(n){return"string"===typeof n},fnc:function(n){return"function"===typeof n},und:function(n){return"undefined"===typeof n},nil:function(n){return b.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return b.hex(n)||b.rgb(n)||b.hsl(n)},key:function(n){return!d.hasOwnProperty(n)&&!p.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function x(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function M(n,e){var r=x(n),t=m(b.und(r[0])?1:r[0],.1,100),a=m(b.und(r[1])?100:r[1],.1,100),u=m(b.und(r[2])?10:r[2],.1,100),o=m(b.und(r[3])?0:r[3],.1,100),i=Math.sqrt(a/t),c=u/(2*Math.sqrt(a*t)),s=c<1?i*Math.sqrt(1-c*c):0,f=c<1?(c*i-o)/s:-o+i;function l(n){var r=e?e*n/1e3:n;return r=c<1?Math.exp(-r*c*i)*(1*Math.cos(s*r)+f*Math.sin(s*r)):(1+f*r)*Math.exp(-r*i),0===n||1===n?n:1-r}return e?l:function(){var e=v.springs[n];if(e)return e;for(var r=1/6,t=0,a=0;;)if(1===l(t+=r)){if(++a>=16)break}else a=0;var u=t*r*1e3;return v.springs[n]=u,u}}function w(n){return void 0===n&&(n=10),function(e){return Math.ceil(m(e,1e-6,1)*n)*(1/n)}}var k=function(){var n=.1;function e(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function t(n){return 3*n}function a(n,a,u){return((e(a,u)*n+r(a,u))*n+t(a))*n}function u(n,a,u){return 3*e(a,u)*n*n+2*r(a,u)*n+t(a)}return function(e,r,t,o){if(0<=e&&e<=1&&0<=t&&t<=1){var i=new Float32Array(11);if(e!==r||t!==o)for(var c=0;c<11;++c)i[c]=a(c*n,e,t);return function(n){return e===r&&t===o||0===n||1===n?n:a(s(n),r,o)}}function s(r){for(var o=0,c=1;10!==c&&i[c]<=r;++c)o+=n;--c;var s=o+(r-i[c])/(i[c+1]-i[c])*n,f=u(s,e,t);return f>=.001?function(n,e,r,t){for(var o=0;o<4;++o){var i=u(e,r,t);if(0===i)return e;e-=(a(e,r,t)-n)/i}return e}(r,s,e,t):0===f?s:function(n,e,r,t,u){var o,i,c=0;do{(o=a(i=e+(r-e)/2,t,u)-n)>0?r=i:e=i}while(Math.abs(o)>1e-7&&++c<10);return i}(r,o,o+n,e,t)}}}(),C=function(){var n={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,r=4;n<((e=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=m(n,1,10),t=m(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin((n-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}};return["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,r){e[n]=function(){return function(n){return Math.pow(n,r+2)}}})),Object.keys(e).forEach((function(r){var t=e[r];n["easeIn"+r]=t,n["easeOut"+r]=function(n,e){return function(r){return 1-t(n,e)(1-r)}},n["easeInOut"+r]=function(n,e){return function(r){return r<.5?t(n,e)(2*r)/2:1-t(n,e)(-2*r+2)/2}},n["easeOutIn"+r]=function(n,e){return function(r){return r<.5?(1-t(n,e)(1-2*r))/2:(t(n,e)(2*r-1)+1)/2}}})),n}();function D(n,e){if(b.fnc(n))return n;var r=n.split("(")[0],t=C[r],a=x(n);switch(r){case"spring":return M(n,e);case"cubicBezier":return y(k,a);case"steps":return y(w,a);default:return y(t,a)}}function O(n){try{return document.querySelectorAll(n)}catch(e){return}}function P(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],u=0;u<r;u++)if(u in n){var o=n[u];e.call(t,o,u,n)&&a.push(o)}return a}function I(n){return n.reduce((function(n,e){return n.concat(b.arr(e)?I(e):e)}),[])}function F(n){return b.arr(n)?n:(b.str(n)&&(n=O(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function N(n,e){return n.some((function(n){return n===e}))}function B(n){var e={};for(var r in n)e[r]=n[r];return e}function T(n,e){var r=B(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function _(n,e){var r=B(n);for(var t in e)r[t]=b.und(n[t])?e[t]:n[t];return r}function j(n){return b.rgb(n)?function(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}(n):b.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,r,t){return e+e+r+r+t+t})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",1)"}(n):b.hsl(n)?function(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),u=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+6*(e-n)*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==o)e=r=t=i;else{var f=i<.5?i*(1+o):i+o-i*o,l=2*i-f;e=s(l,f,u+1/3),r=s(l,f,u),t=s(l,f,u-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+c+")"}(n):void 0}function A(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function E(n,e){return b.fnc(n)?n(e.target,e.id,e.total):n}function S(n,e){return n.getAttribute(e)}function L(n,e,r){if(N([r,"deg","rad","turn"],A(e)))return e;var t=v.CSS[e+r];if(!b.und(t))return t;var a=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(a),a.style.position="absolute",a.style.width=100+r;var o=100/a.offsetWidth;u.removeChild(a);var i=o*parseFloat(e);return v.CSS[e+r]=i,i}function W(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?L(n,a,r):a}}function q(n,e){return b.dom(n)&&!b.inp(n)&&(!b.nil(S(n,e))||b.svg(n)&&n[e])?"attribute":b.dom(n)&&N(h,e)?"transform":b.dom(n)&&"transform"!==e&&W(n,e)?"css":null!=n[e]?"object":void 0}function H(n){if(b.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function V(n,e,r,t){var a=g(e,"scale")?1:0+function(n){return g(n,"translate")||"perspective"===n?"px":g(n,"rotate")||g(n,"skew")?"deg":void 0}(e),u=H(n).get(e)||a;return r&&(r.transforms.list.set(e,u),r.transforms.last=e),t?L(n,u,t):u}function $(n,e,r,t){switch(q(n,e)){case"transform":return V(n,e,t,r);case"css":return W(n,e,r);case"attribute":return S(n,e);default:return n[e]||0}}function X(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=A(n)||0,a=parseFloat(e),u=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+u+t;case"-":return a-u+t;case"*":return a*u+t}}function Z(n,e){if(b.col(n))return j(n);if(/\s/g.test(n))return n;var r=A(n),t=r?n.substr(0,n.length-r.length):n;return e?t+e:t}function Q(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function R(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var u=r.getItem(a);a>0&&(t+=Q(e,u)),e=u}return t}function Y(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*S(n,"r")}(n);case"rect":return function(n){return 2*S(n,"width")+2*S(n,"height")}(n);case"line":return function(n){return Q({x:S(n,"x1"),y:S(n,"y1")},{x:S(n,"x2"),y:S(n,"y2")})}(n);case"polyline":return R(n);case"polygon":return function(n){var e=n.points;return R(n)+Q(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function z(n,e){var r=e||{},t=r.el||function(n){for(var e=n.parentNode;b.svg(e)&&b.svg(e.parentNode);)e=e.parentNode;return e}(n),a=t.getBoundingClientRect(),u=S(t,"viewBox"),o=a.width,i=a.height,c=r.viewBox||(u?u.split(" "):[0,0,o,i]);return{el:t,viewBox:c,x:c[0]/1,y:c[1]/1,w:o,h:i,vW:c[2],vH:c[3]}}function G(n,e,r){function t(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var a=z(n.el,n.svg),u=t(),o=t(-1),i=t(1),c=r?1:a.w/a.vW,s=r?1:a.h/a.vH;switch(n.property){case"x":return(u.x-a.x)*c;case"y":return(u.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function J(n,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=Z(b.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:b.str(n)||e?t.split(r):[]}}function K(n){return P(n?I(b.arr(n)?n.map(F):F(n)):[],(function(n,e,r){return r.indexOf(n)===e}))}function U(n){var e=K(n);return e.map((function(n,r){return{target:n,id:r,total:e.length,transforms:{list:H(n)}}}))}function nn(n,e){var r=B(e);if(/^spring/.test(r.easing)&&(r.duration=M(r.easing)),b.arr(n)){var t=n.length;2===t&&!b.obj(n[0])?n={value:n}:b.fnc(e.duration)||(r.duration=e.duration/t)}var a=b.arr(n)?n:[n];return a.map((function(n,r){var t=b.obj(n)&&!b.pth(n)?n:{value:n};return b.und(t.delay)&&(t.delay=r?0:e.delay),b.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t})).map((function(n){return _(n,r)}))}function en(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=_(function(n){for(var e=P(I(n.map((function(n){return Object.keys(n)}))),(function(n){return b.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),r={},t=function(t){var a=e[t];r[a]=n.map((function(n){var e={};for(var r in n)b.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e}))},a=0;a<e.length;a++)t(a);return r}(t),e)),e)b.key(a)&&r.push({name:a,tweens:nn(e[a],n)});return r}function rn(n,e){var r;return n.tweens.map((function(t){var a=function(n,e){var r={};for(var t in n){var a=E(n[t],e);b.arr(a)&&1===(a=a.map((function(n){return E(n,e)}))).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(t,e),u=a.value,o=b.arr(u)?u[1]:u,i=A(o),c=$(e.target,n.name,i,e),s=r?r.to.original:c,f=b.arr(u)?u[0]:s,l=A(f)||A(c),d=i||l;return b.und(o)&&(o=s),a.from=J(f,d),a.to=J(X(o,f),d),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=D(a.easing,a.duration),a.isPath=b.pth(u),a.isPathTargetInsideSVG=a.isPath&&b.svg(e.target),a.isColor=b.col(a.from.original),a.isColor&&(a.round=1),r=a,a}))}var tn={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var u="";t.list.forEach((function(n,e){u+=e+"("+n+") "})),n.style.transform=u}}};function an(n,e){U(n).forEach((function(n){for(var r in e){var t=E(e[r],n),a=n.target,u=A(t),o=$(a,r,u,n),i=X(Z(t,u||A(o)),o),c=q(a,r);tn[c](a,r,i,n.transforms,!0)}}))}function un(n,e){return P(I(n.map((function(n){return e.map((function(e){return function(n,e){var r=q(n.target,e.name);if(r){var t=rn(e,n),a=t[t.length-1];return{type:r,property:e.name,animatable:n,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!b.und(n)}))}function on(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map((function(n){return t(n)+n.duration}))):e.duration,a.delay=r?Math.min.apply(Math,n.map((function(n){return t(n)+n.delay}))):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map((function(n){return t(n)+n.duration-n.endDelay}))):e.endDelay,a}var cn=0;var sn=[],fn=function(){var n;function e(r){for(var t=sn.length,a=0;a<t;){var u=sn[a];u.paused?(sn.splice(a,1),t--):(u.tick(r),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!==typeof document&&document.addEventListener("visibilitychange",(function(){dn.suspendWhenDocumentHidden&&(ln()?n=cancelAnimationFrame(n):(sn.forEach((function(n){return n._onDocumentVisibility()})),fn()))})),function(){n||ln()&&dn.suspendWhenDocumentHidden||!(sn.length>0)||(n=requestAnimationFrame(e))}}();function ln(){return!!document&&document.hidden}function dn(n){void 0===n&&(n={});var e,r=0,t=0,a=0,u=0,o=null;function i(n){var e=window.Promise&&new Promise((function(n){return o=n}));return n.finished=e,e}var c=function(n){var e=T(d,n),r=T(p,n),t=en(r,n),a=U(n.targets),u=un(a,t),o=on(u,r),i=cn;return cn++,_(e,{id:i,children:[],animatables:a,animations:u,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}(n);i(c);function s(){var n=c.direction;"alternate"!==n&&(c.direction="normal"!==n?"normal":"reverse"),c.reversed=!c.reversed,e.forEach((function(n){return n.reversed=c.reversed}))}function f(n){return c.reversed?c.duration-n:n}function l(){r=0,t=f(c.currentTime)*(1/dn.speed)}function h(n,e){e&&e.seek(n-e.timelineOffset)}function v(n){for(var e=0,r=c.animations,t=r.length;e<t;){var a=r[e],u=a.animatable,o=a.tweens,i=o.length-1,s=o[i];i&&(s=P(o,(function(e){return n<e.end}))[0]||s);for(var f=m(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,h=[],v=s.to.numbers.length,g=void 0,y=0;y<v;y++){var b=void 0,x=s.to.numbers[y],M=s.from.numbers[y]||0;b=s.isPath?G(s.value,l*x,s.isPathTargetInsideSVG):M+l*(x-M),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),h.push(b)}var w=d.length;if(w){g=d[0];for(var k=0;k<w;k++){d[k];var C=d[k+1],D=h[k];isNaN(D)||(g+=C?D+C:D+" ")}}else g=h[0];tn[a.type](u.target,a.property,g,u.transforms),a.currentValue=g,e++}}function g(n){c[n]&&!c.passThrough&&c[n](c)}function y(n){var l=c.duration,d=c.delay,p=l-c.endDelay,y=f(n);c.progress=m(y/l*100,0,100),c.reversePlayback=y<c.currentTime,e&&function(n){if(c.reversePlayback)for(var r=u;r--;)h(n,e[r]);else for(var t=0;t<u;t++)h(n,e[t])}(y),!c.began&&c.currentTime>0&&(c.began=!0,g("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,g("loopBegin")),y<=d&&0!==c.currentTime&&v(0),(y>=p&&c.currentTime!==l||!l)&&v(l),y>d&&y<p?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,g("changeBegin")),g("change"),v(y)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,g("changeComplete")),c.currentTime=m(y,0,l),c.began&&g("update"),n>=l&&(t=0,c.remaining&&!0!==c.remaining&&c.remaining--,c.remaining?(r=a,g("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&s()):(c.paused=!0,c.completed||(c.completed=!0,g("loopComplete"),g("complete"),!c.passThrough&&"Promise"in window&&(o(),i(c)))))}return c.reset=function(){var n=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===n,c.remaining=c.loop,e=c.children;for(var r=u=e.length;r--;)c.children[r].reset();(c.reversed&&!0!==c.loop||"alternate"===n&&1===c.loop)&&c.remaining++,v(c.reversed?c.duration:0)},c._onDocumentVisibility=l,c.set=function(n,e){return an(n,e),c},c.tick=function(n){a=n,r||(r=a),y((a+(t-r))*dn.speed)},c.seek=function(n){y(f(n))},c.pause=function(){c.paused=!0,l()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,sn.push(c),l(),fn())},c.reverse=function(){s(),c.completed=!c.reversed,l()},c.restart=function(){c.reset(),c.play()},c.remove=function(n){hn(K(n),c)},c.reset(),c.autoplay&&c.play(),c}function pn(n,e){for(var r=e.length;r--;)N(n,e[r].animatable.target)&&e.splice(r,1)}function hn(n,e){var r=e.animations,t=e.children;pn(n,r);for(var a=t.length;a--;){var u=t[a],o=u.animations;pn(n,o),o.length||u.children.length||t.splice(a,1)}r.length||t.length||e.pause()}dn.version="3.2.1",dn.speed=1,dn.suspendWhenDocumentHidden=!0,dn.running=sn,dn.remove=function(n){for(var e=K(n),r=sn.length;r--;){hn(e,sn[r])}},dn.get=$,dn.set=an,dn.convertPx=L,dn.path=function(n,e){var r=b.str(n)?O(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:z(r),totalLength:Y(r)*(t/100)}}},dn.setDashoffset=function(n){var e=Y(n);return n.setAttribute("stroke-dasharray",e),e},dn.stagger=function(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?D(e.easing):null,a=e.grid,u=e.axis,o=e.from||0,i="first"===o,c="center"===o,s="last"===o,f=b.arr(n),l=f?parseFloat(n[0]):parseFloat(n),d=f?parseFloat(n[1]):0,p=A(f?n[1]:n)||0,h=e.start||0+(f?l:0),v=[],m=0;return function(n,e,g){if(i&&(o=0),c&&(o=(g-1)/2),s&&(o=g-1),!v.length){for(var y=0;y<g;y++){if(a){var b=c?(a[0]-1)/2:o%a[0],x=c?(a[1]-1)/2:Math.floor(o/a[0]),M=b-y%a[0],w=x-Math.floor(y/a[0]),k=Math.sqrt(M*M+w*w);"x"===u&&(k=-M),"y"===u&&(k=-w),v.push(k)}else v.push(Math.abs(o-y));m=Math.max.apply(Math,v)}t&&(v=v.map((function(n){return t(n/m)*m}))),"reverse"===r&&(v=v.map((function(n){return u?n<0?-1*n:-n:Math.abs(m-n)})))}return h+(f?(d-l)/m:l)*(Math.round(100*v[e])/100)+p}},dn.timeline=function(n){void 0===n&&(n={});var e=dn(n);return e.duration=0,e.add=function(r,t){var a=sn.indexOf(e),u=e.children;function o(n){n.passThrough=!0}a>-1&&sn.splice(a,1);for(var i=0;i<u.length;i++)o(u[i]);var c=_(r,T(p,n));c.targets=c.targets||n.targets;var s=e.duration;c.autoplay=!1,c.direction=e.direction,c.timelineOffset=b.und(t)?s:X(t,s),o(e),e.seek(c.timelineOffset);var f=dn(c);o(f),u.push(f);var l=on(u,n);return e.delay=l.delay,e.endDelay=l.endDelay,e.duration=l.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},dn.easing=D,dn.penner=C,dn.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var vn=dn,mn=function(n,e){vn.timeline({easing:"linear",duration:8e3,loop:!0,autoplay:!0}).add({targets:n,rotate:360}).add({targets:e,rotate:-360},0)},gn=r(184);var yn=function(){var n=(0,t.useRef)(null);return(0,t.useEffect)((function(){var e;n.current&&mn(n.current,null===(e=n.current)||void 0===e?void 0:e.querySelectorAll(".wheelRooms"))}),[]),(0,gn.jsx)("div",{className:a,children:(0,gn.jsxs)("div",{className:u,children:[(0,gn.jsx)("div",{className:o,ref:n,children:(0,gn.jsx)("div",{className:i,children:l(101,10).map((function(n,e){return(0,gn.jsx)("div",{className:"".concat(c," wheelRooms"),style:{top:"".concat(n.y,"px"),left:"".concat(n.x-20,"px")}},e)}))})}),(0,gn.jsx)("div",{className:s})]})})}}}]);
//# sourceMappingURL=683.5c4aec41.chunk.js.map