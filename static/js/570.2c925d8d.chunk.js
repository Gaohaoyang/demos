"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[570],{9570:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var o=i(9439),n=i(2791),r=i(5671),s=i(3144),a=function(){function t(e){(0,r.Z)(this,t),this.x=void 0,this.y=void 0,this.radius=void 0,this.vx=void 0,this.vy=void 0,this.color=void 0,this.rotation=void 0,this.scaleX=void 0,this.scaleY=void 0,this.boundary=void 0,this.x=0,this.y=0,this.boundary=12,this.vx=0,this.vy=0,this.color=e,this.rotation=0,this.scaleX=1,this.scaleY=1}return(0,s.Z)(t,[{key:"draw",value:function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.rotation),t.scale(this.scaleX,this.scaleY),t.fillStyle=this.color,t.beginPath(),t.moveTo(-6,-2.5),t.lineTo(6,-2.5),t.lineTo(10,2.5),t.lineTo(-2,2.5),t.lineTo(-6,-2.5),t.closePath(),t.fill(),t.restore()}}]),t}(),h=[],u=function(t,e){var i=e.elementsNum,o=e.colors,n=e.canvas,r=0,s=!1,u=function e(i){var o=i/1e3,a=o-r;r=o,t.clearRect(0,0,n.width,n.height);for(var u=h.length-1;u>-1;u-=1)if(h[u].vy+=160*a,h[u].x+=h[u].vx*a,h[u].y+=h[u].vy*a,h[u].rotation>0?h[u].rotation+=580*Math.random()*a*Math.PI/180:h[u].rotation+=-580*Math.random()*a*Math.PI/180,h[u].draw(t),h[u].x-h[u].boundary>n.width||h[u].x+h[u].boundary<0||h[u].y-h[u].boundary>n.height)if(s)h[u].x=n.width/2,h[u].y=n.height/2,h[u].vx=80*(2*Math.random()-1),h[u].vy=380*-Math.random();else if(h.splice(u,1),0===h.length)return;window.requestAnimationFrame(e)};document.addEventListener("partyPopperStart",(function(t){t.detail?(s=!0,function(){h=[];for(var t=0;t<i;t+=1){var e=new a(o[t%o.length]);e.x=n.width/2,e.y=n.height/2,e.vx=80*(2*Math.random()-1),e.vy=380*-Math.random(),e.rotation=360*(2*Math.random()-1)*Math.PI/180,h.push(e)}}(),u(0)):s=!1}))},l=i(184),c={width:"100vw",height:"100vh",position:"absolute",top:"0",left:"0",pointerEvents:"none"};var d=function(t){var e=t.elementsNum,i=void 0===e?80:e,o=t.colors,r=void 0===o?["#709EFF","#FFFF4E","#FFA74C","#FF5485"]:o,s=t.start,a=void 0!==s&&s,h=(0,n.useRef)(null),d=(0,n.useRef)(null);return(0,n.useEffect)((function(){if(h.current&&d.current){!function(t,e){var i=e.getBoundingClientRect();t.width=i.width,t.height=i.height}(h.current,d.current);var t=h.current.getContext("2d");t&&u(t,{elementsNum:i,colors:r,canvas:h.current})}}),[]),(0,n.useEffect)((function(){var t=new CustomEvent("partyPopperStart",{detail:a});document.dispatchEvent(t)}),[a]),(0,l.jsx)("div",{style:c,ref:d,children:(0,l.jsx)("canvas",{ref:h})})};var v=function(){var t=(0,n.useState)(!1),e=(0,o.Z)(t,2),i=e[0],r=e[1];return(0,l.jsxs)("div",{style:{width:"100vw",height:"100vh",backgroundColor:"#333",position:"absolute",top:"0",left:"0"},children:[(0,l.jsx)(d,{elementsNum:100,start:i}),(0,l.jsx)("button",{style:{position:"absolute",top:"24px",right:"24px"},onClick:function(){r(!0)},children:"start"}),(0,l.jsx)("button",{style:{position:"absolute",top:"72px",right:"24px"},onClick:function(){r(!1)},children:"stop"})]})}}}]);
//# sourceMappingURL=570.2c925d8d.chunk.js.map