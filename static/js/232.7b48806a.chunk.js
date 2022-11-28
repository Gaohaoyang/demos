"use strict";(self.webpackChunkdemos=self.webpackChunkdemos||[]).push([[232],{8232:function(t,e,n){var i=n(885),r=n(136),l=n(7277),o=n(5671),a=n(3144),s=function(){function t(e,n,i,r){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"div";(0,o.Z)(this,t),this.parent=e,this.object=n,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),t.nextNameID=t.nextNameID||0,this.$name.id="lil-gui-name-".concat(++t.nextNameID),this.$widget=document.createElement(l),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}return(0,a.Z)(t,[{key:"name",value:function(t){return this._name=t,this.$name.innerHTML=t,this}},{key:"onChange",value:function(t){return this._onChange=t,this}},{key:"_callOnChange",value:function(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}},{key:"onFinishChange",value:function(t){return this._onFinishChange=t,this}},{key:"_callOnFinishChange",value:function(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}},{key:"reset",value:function(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.disable(!t)}},{key:"disable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}},{key:"show",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}},{key:"hide",value:function(){return this.show(!1)}},{key:"options",value:function(t){var e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}},{key:"min",value:function(t){return this}},{key:"max",value:function(t){return this}},{key:"step",value:function(t){return this}},{key:"decimals",value:function(t){return this}},{key:"listen",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._listening=t,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}},{key:"_listenCallback",value:function(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);var t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"setValue",value:function(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}},{key:"updateDisplay",value:function(){return this}},{key:"load",value:function(t){return this.setValue(t),this._callOnFinishChange(),this}},{key:"save",value:function(){return this.getValue()}},{key:"destroy",value:function(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}]),t}(),u=function(t){(0,r.Z)(n,t);var e=(0,l.Z)(n);function n(t,i,r){var l;return(0,o.Z)(this,n),(l=e.call(this,t,i,r,"boolean","label")).$input=document.createElement("input"),l.$input.setAttribute("type","checkbox"),l.$input.setAttribute("aria-labelledby",l.$name.id),l.$widget.appendChild(l.$input),l.$input.addEventListener("change",(function(){l.setValue(l.$input.checked),l._callOnFinishChange()})),l.$disable=l.$input,l.updateDisplay(),l}return(0,a.Z)(n,[{key:"updateDisplay",value:function(){return this.$input.checked=this.getValue(),this}}]),n}(s);function d(t){var e,n;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?n=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!n&&"#"+n}var h={isPrimitive:!0,match:function(t){return"string"===typeof t},fromHexString:d,toHexString:d},c={isPrimitive:!0,match:function(t){return"number"===typeof t},fromHexString:function(t){return parseInt(t.substring(1),16)},toHexString:function(t){return"#"+t.toString(16).padStart(6,0)}},p={isPrimitive:!1,match:Array.isArray,fromHexString:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=c.fromHexString(t);e[0]=(i>>16&255)/255*n,e[1]=(i>>8&255)/255*n,e[2]=(255&i)/255*n},toHexString:function(t){var e=(0,i.Z)(t,3),n=e[0],r=e[1],l=e[2],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=n*(o=255/o)<<16^r*o<<8^l*o<<0;return c.toHexString(a)}},g={isPrimitive:!1,match:function(t){return Object(t)===t},fromHexString:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=c.fromHexString(t);e.r=(i>>16&255)/255*n,e.g=(i>>8&255)/255*n,e.b=(255&i)/255*n},toHexString:function(t){var e=t.r,n=t.g,i=t.b,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=e*(r=255/r)<<16^n*r<<8^i*r<<0;return c.toHexString(l)}},v=[h,c,p,g];var m=function(t){(0,r.Z)(n,t);var e=(0,l.Z)(n);function n(t,i,r,l){var a,s;return(0,o.Z)(this,n),(a=e.call(this,t,i,r,"color")).$input=document.createElement("input"),a.$input.setAttribute("type","color"),a.$input.setAttribute("tabindex",-1),a.$input.setAttribute("aria-labelledby",a.$name.id),a.$text=document.createElement("input"),a.$text.setAttribute("type","text"),a.$text.setAttribute("spellcheck","false"),a.$text.setAttribute("aria-labelledby",a.$name.id),a.$display=document.createElement("div"),a.$display.classList.add("display"),a.$display.appendChild(a.$input),a.$widget.appendChild(a.$display),a.$widget.appendChild(a.$text),a._format=(s=a.initialValue,v.find((function(t){return t.match(s)}))),a._rgbScale=l,a._initialValueHexString=a.save(),a._textFocused=!1,a.$input.addEventListener("input",(function(){a._setValueFromHexString(a.$input.value)})),a.$input.addEventListener("blur",(function(){a._callOnFinishChange()})),a.$text.addEventListener("input",(function(){var t=d(a.$text.value);t&&a._setValueFromHexString(t)})),a.$text.addEventListener("focus",(function(){a._textFocused=!0,a.$text.select()})),a.$text.addEventListener("blur",(function(){a._textFocused=!1,a.updateDisplay(),a._callOnFinishChange()})),a.$disable=a.$text,a.updateDisplay(),a}return(0,a.Z)(n,[{key:"reset",value:function(){return this._setValueFromHexString(this._initialValueHexString),this}},{key:"_setValueFromHexString",value:function(t){if(this._format.isPrimitive){var e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}},{key:"save",value:function(){return this._format.toHexString(this.getValue(),this._rgbScale)}},{key:"load",value:function(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}},{key:"updateDisplay",value:function(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}]),n}(s),f=function(t){(0,r.Z)(n,t);var e=(0,l.Z)(n);function n(t,i,r){var l;return(0,o.Z)(this,n),(l=e.call(this,t,i,r,"function")).$button=document.createElement("button"),l.$button.appendChild(l.$name),l.$widget.appendChild(l.$button),l.$button.addEventListener("click",(function(t){t.preventDefault(),l.getValue().call(l.object)})),l.$button.addEventListener("touchstart",(function(){}),{passive:!0}),l.$disable=l.$button,l}return(0,a.Z)(n)}(s),b=function(t){(0,r.Z)(n,t);var e=(0,l.Z)(n);function n(t,i,r,l,a,s){var u;(0,o.Z)(this,n),(u=e.call(this,t,i,r,"number"))._initInput(),u.min(l),u.max(a);var d=void 0!==s;return u.step(d?s:u._getImplicitStep(),d),u.updateDisplay(),u}return(0,a.Z)(n,[{key:"decimals",value:function(t){return this._decimals=t,this.updateDisplay(),this}},{key:"min",value:function(t){return this._min=t,this._onUpdateMinMax(),this}},{key:"max",value:function(t){return this._max=t,this._onUpdateMinMax(),this}},{key:"step",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this._step=t,this._stepExplicit=e,this}},{key:"updateDisplay",value:function(){var t=this.getValue();if(this._hasSlider){var e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=void 0===this._decimals?t:t.toFixed(this._decimals)),this}},{key:"_initInput",value:function(){var t=this;this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;var e,n,i,r,l,o=function(e){var n=parseFloat(t.$input.value);isNaN(n)||(t._snapClampSetValue(n+e),t.$input.value=t.getValue())},a=!1,s=function(o){if(a){var s=o.clientX-e,d=o.clientY-n;Math.abs(d)>5?(o.preventDefault(),t.$input.blur(),a=!1,t._setDraggingStyle(!0,"vertical")):Math.abs(s)>5&&u()}if(!a){var h=o.clientY-i;l-=h*t._step*t._arrowKeyMultiplier(o),r+l>t._max?l=t._max-r:r+l<t._min&&(l=t._min-r),t._snapClampSetValue(r+l)}i=o.clientY},u=function e(){t._setDraggingStyle(!1,"vertical"),t._callOnFinishChange(),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",e)};this.$input.addEventListener("input",(function(){var e=parseFloat(t.$input.value);isNaN(e)||(t._stepExplicit&&(e=t._snap(e)),t.setValue(t._clamp(e)))})),this.$input.addEventListener("keydown",(function(e){"Enter"===e.code&&t.$input.blur(),"ArrowUp"===e.code&&(e.preventDefault(),o(t._step*t._arrowKeyMultiplier(e))),"ArrowDown"===e.code&&(e.preventDefault(),o(t._step*t._arrowKeyMultiplier(e)*-1))})),this.$input.addEventListener("wheel",(function(e){t._inputFocused&&(e.preventDefault(),o(t._step*t._normalizeMouseWheel(e)))}),{passive:!1}),this.$input.addEventListener("mousedown",(function(o){e=o.clientX,n=i=o.clientY,a=!0,r=t.getValue(),l=0,window.addEventListener("mousemove",s),window.addEventListener("mouseup",u)})),this.$input.addEventListener("focus",(function(){t._inputFocused=!0})),this.$input.addEventListener("blur",(function(){t._inputFocused=!1,t.updateDisplay(),t._callOnFinishChange()}))}},{key:"_initSlider",value:function(){var t=this;this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");var e,n,i,r=function(e){var n,i,r,l,o,a=t.$slider.getBoundingClientRect(),s=(n=e,i=a.left,r=a.right,l=t._min,o=t._max,(n-i)/(r-i)*(o-l)+l);t._snapClampSetValue(s)},l=function(t){r(t.clientX)},o=function e(){t._callOnFinishChange(),t._setDraggingStyle(!1),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",e)},a=!1,s=function(e){e.preventDefault(),t._setDraggingStyle(!0),r(e.touches[0].clientX),a=!1},u=function t(i){if(a){var l=i.touches[0].clientX-e,o=i.touches[0].clientY-n;Math.abs(l)>Math.abs(o)?s(i):(window.removeEventListener("touchmove",t),window.removeEventListener("touchend",d))}else i.preventDefault(),r(i.touches[0].clientX)},d=function e(){t._callOnFinishChange(),t._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",e)},h=this._callOnFinishChange.bind(this);this.$slider.addEventListener("mousedown",(function(e){t._setDraggingStyle(!0),r(e.clientX),window.addEventListener("mousemove",l),window.addEventListener("mouseup",o)})),this.$slider.addEventListener("touchstart",(function(i){i.touches.length>1||(t._hasScrollBar?(e=i.touches[0].clientX,n=i.touches[0].clientY,a=!0):s(i),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))}),{passive:!1}),this.$slider.addEventListener("wheel",(function(e){if(!(Math.abs(e.deltaX)<Math.abs(e.deltaY))||!t._hasScrollBar){e.preventDefault();var n=t._normalizeMouseWheel(e)*t._step;t._snapClampSetValue(t.getValue()+n),t.$input.value=t.getValue(),clearTimeout(i),i=setTimeout(h,400)}}),{passive:!1})}},{key:"_setDraggingStyle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"horizontal";this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-".concat(e),t)}},{key:"_getImplicitStep",value:function(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}},{key:"_onUpdateMinMax",value:function(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}},{key:"_normalizeMouseWheel",value:function(t){var e=t.deltaX,n=t.deltaY;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}},{key:"_arrowKeyMultiplier",value:function(t){var e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}},{key:"_snap",value:function(t){var e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}},{key:"_clamp",value:function(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}},{key:"_snapClampSetValue",value:function(t){this.setValue(this._clamp(this._snap(t)))}},{key:"_hasScrollBar",get:function(){var t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}},{key:"_hasMin",get:function(){return void 0!==this._min}},{key:"_hasMax",get:function(){return void 0!==this._max}}]),n}(s),A=function(t){(0,r.Z)(n,t);var e=(0,l.Z)(n);function n(t,i,r,l){var a;return(0,o.Z)(this,n),(a=e.call(this,t,i,r,"option")).$select=document.createElement("select"),a.$select.setAttribute("aria-labelledby",a.$name.id),a.$display=document.createElement("div"),a.$display.classList.add("display"),a._values=Array.isArray(l)?l:Object.values(l),a._names=Array.isArray(l)?l:Object.keys(l),a._names.forEach((function(t){var e=document.createElement("option");e.innerHTML=t,a.$select.appendChild(e)})),a.$select.addEventListener("change",(function(){a.setValue(a._values[a.$select.selectedIndex]),a._callOnFinishChange()})),a.$select.addEventListener("focus",(function(){a.$display.classList.add("focus")})),a.$select.addEventListener("blur",(function(){a.$display.classList.remove("focus")})),a.$widget.appendChild(a.$select),a.$widget.appendChild(a.$display),a.$disable=a.$select,a.updateDisplay(),a}return(0,a.Z)(n,[{key:"updateDisplay",value:function(){var t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=-1===e?t:this._names[e],this}}]),n}(s),y=function(t){(0,r.Z)(n,t);var e=(0,l.Z)(n);function n(t,i,r){var l;return(0,o.Z)(this,n),(l=e.call(this,t,i,r,"string")).$input=document.createElement("input"),l.$input.setAttribute("type","text"),l.$input.setAttribute("aria-labelledby",l.$name.id),l.$input.addEventListener("input",(function(){l.setValue(l.$input.value)})),l.$input.addEventListener("keydown",(function(t){"Enter"===t.code&&l.$input.blur()})),l.$input.addEventListener("blur",(function(){l._callOnFinishChange()})),l.$widget.appendChild(l.$input),l.$disable=l.$input,l.updateDisplay(),l}return(0,a.Z)(n,[{key:"updateDisplay",value:function(){return this.$input.value=this.getValue(),this}}]),n}(s),w='.lil-gui {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  --background-color: #1f1f1f;\n  --text-color: #ebebeb;\n  --title-background-color: #111111;\n  --title-text-color: #ebebeb;\n  --widget-color: #424242;\n  --hover-color: #4f4f4f;\n  --focus-color: #595959;\n  --number-color: #2cc9ff;\n  --string-color: #a2db3c;\n  --font-size: 11px;\n  --input-font-size: 11px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;\n  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;\n  --padding: 4px;\n  --spacing: 4px;\n  --widget-height: 20px;\n  --name-width: 45%;\n  --slider-knob-width: 2px;\n  --slider-input-width: 27%;\n  --color-input-width: 27%;\n  --slider-input-min-width: 45px;\n  --color-input-min-width: 45px;\n  --folder-indent: 7px;\n  --widget-padding: 0 0 0 3px;\n  --widget-border-radius: 2px;\n  --checkbox-size: calc(0.75 * var(--widget-height));\n  --scrollbar-width: 5px;\n}\n.lil-gui, .lil-gui * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.lil-gui.root {\n  width: var(--width, 245px);\n  display: flex;\n  flex-direction: column;\n}\n.lil-gui.root > .title {\n  background: var(--title-background-color);\n  color: var(--title-text-color);\n}\n.lil-gui.root > .children {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.lil-gui.root > .children::-webkit-scrollbar {\n  width: var(--scrollbar-width);\n  height: var(--scrollbar-width);\n  background: var(--background-color);\n}\n.lil-gui.root > .children::-webkit-scrollbar-thumb {\n  border-radius: var(--scrollbar-width);\n  background: var(--focus-color);\n}\n@media (pointer: coarse) {\n  .lil-gui.allow-touch-styles {\n    --widget-height: 28px;\n    --padding: 6px;\n    --spacing: 6px;\n    --font-size: 13px;\n    --input-font-size: 16px;\n    --folder-indent: 10px;\n    --scrollbar-width: 7px;\n    --slider-input-min-width: 50px;\n    --color-input-min-width: 65px;\n  }\n}\n.lil-gui.force-touch-styles {\n  --widget-height: 28px;\n  --padding: 6px;\n  --spacing: 6px;\n  --font-size: 13px;\n  --input-font-size: 16px;\n  --folder-indent: 10px;\n  --scrollbar-width: 7px;\n  --slider-input-min-width: 50px;\n  --color-input-min-width: 65px;\n}\n.lil-gui.autoPlace {\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  right: 15px;\n  z-index: 1001;\n}\n\n.lil-gui .controller {\n  display: flex;\n  align-items: center;\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n}\n.lil-gui .controller.disabled {\n  opacity: 0.5;\n}\n.lil-gui .controller.disabled, .lil-gui .controller.disabled * {\n  pointer-events: none !important;\n}\n.lil-gui .controller > .name {\n  min-width: var(--name-width);\n  flex-shrink: 0;\n  white-space: pre;\n  padding-right: var(--spacing);\n  line-height: var(--widget-height);\n}\n.lil-gui .controller .widget {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: var(--widget-height);\n}\n.lil-gui .controller.string input {\n  color: var(--string-color);\n}\n.lil-gui .controller.boolean .widget {\n  cursor: pointer;\n}\n.lil-gui .controller.color .display {\n  width: 100%;\n  height: var(--widget-height);\n  border-radius: var(--widget-border-radius);\n  position: relative;\n}\n@media (hover: hover) {\n  .lil-gui .controller.color .display:hover:before {\n    content: " ";\n    display: block;\n    position: absolute;\n    border-radius: var(--widget-border-radius);\n    border: 1px solid #fff9;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n.lil-gui .controller.color input[type=color] {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.lil-gui .controller.color input[type=text] {\n  margin-left: var(--spacing);\n  font-family: var(--font-family-mono);\n  min-width: var(--color-input-min-width);\n  width: var(--color-input-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.option select {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n}\n.lil-gui .controller.option .display {\n  position: relative;\n  pointer-events: none;\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  line-height: var(--widget-height);\n  max-width: 100%;\n  overflow: hidden;\n  word-break: break-all;\n  padding-left: 0.55em;\n  padding-right: 1.75em;\n  background: var(--widget-color);\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .display.focus {\n    background: var(--focus-color);\n  }\n}\n.lil-gui .controller.option .display.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.option .display:after {\n  font-family: "lil-gui";\n  content: "\u2195";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding-right: 0.375em;\n}\n.lil-gui .controller.option .widget,\n.lil-gui .controller.option select {\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .widget:hover .display {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number input {\n  color: var(--number-color);\n}\n.lil-gui .controller.number.hasSlider input {\n  margin-left: var(--spacing);\n  width: var(--slider-input-width);\n  min-width: var(--slider-input-min-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.number .slider {\n  width: 100%;\n  height: var(--widget-height);\n  background-color: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  padding-right: var(--slider-knob-width);\n  overflow: hidden;\n  cursor: ew-resize;\n  touch-action: pan-y;\n}\n@media (hover: hover) {\n  .lil-gui .controller.number .slider:hover {\n    background-color: var(--hover-color);\n  }\n}\n.lil-gui .controller.number .slider.active {\n  background-color: var(--focus-color);\n}\n.lil-gui .controller.number .slider.active .fill {\n  opacity: 0.95;\n}\n.lil-gui .controller.number .fill {\n  height: 100%;\n  border-right: var(--slider-knob-width) solid var(--number-color);\n  box-sizing: content-box;\n}\n\n.lil-gui-dragging .lil-gui {\n  --hover-color: var(--widget-color);\n}\n.lil-gui-dragging * {\n  cursor: ew-resize !important;\n}\n\n.lil-gui-dragging.lil-gui-vertical * {\n  cursor: ns-resize !important;\n}\n\n.lil-gui .title {\n  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);\n  height: var(--title-height);\n  line-height: calc(var(--title-height) - 4px);\n  font-weight: 600;\n  padding: 0 var(--padding);\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  outline: none;\n  text-decoration-skip: objects;\n}\n.lil-gui .title:before {\n  font-family: "lil-gui";\n  content: "\u25be";\n  padding-right: 2px;\n  display: inline-block;\n}\n.lil-gui .title:active {\n  background: var(--title-background-color);\n  opacity: 0.75;\n}\n@media (hover: hover) {\n  body:not(.lil-gui-dragging) .lil-gui .title:hover {\n    background: var(--title-background-color);\n    opacity: 0.85;\n  }\n  .lil-gui .title:focus {\n    text-decoration: underline var(--focus-color);\n  }\n}\n.lil-gui.root > .title:focus {\n  text-decoration: none !important;\n}\n.lil-gui.closed > .title:before {\n  content: "\u25b8";\n}\n.lil-gui.closed > .children {\n  transform: translateY(-7px);\n  opacity: 0;\n}\n.lil-gui.closed:not(.transition) > .children {\n  display: none;\n}\n.lil-gui.transition > .children {\n  transition-duration: 300ms;\n  transition-property: height, opacity, transform;\n  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);\n  overflow: hidden;\n  pointer-events: none;\n}\n.lil-gui .children:empty:before {\n  content: "Empty";\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n  display: block;\n  height: var(--widget-height);\n  font-style: italic;\n  line-height: var(--widget-height);\n  opacity: 0.5;\n}\n.lil-gui.root > .children > .lil-gui > .title {\n  border: 0 solid var(--widget-color);\n  border-width: 1px 0;\n  transition: border-color 300ms;\n}\n.lil-gui.root > .children > .lil-gui.closed > .title {\n  border-bottom-color: transparent;\n}\n.lil-gui + .controller {\n  border-top: 1px solid var(--widget-color);\n  margin-top: 0;\n  padding-top: var(--spacing);\n}\n.lil-gui .lil-gui .lil-gui > .title {\n  border: none;\n}\n.lil-gui .lil-gui .lil-gui > .children {\n  border: none;\n  margin-left: var(--folder-indent);\n  border-left: 2px solid var(--widget-color);\n}\n.lil-gui .lil-gui .controller {\n  border: none;\n}\n\n.lil-gui input {\n  -webkit-tap-highlight-color: transparent;\n  border: 0;\n  outline: none;\n  font-family: var(--font-family);\n  font-size: var(--input-font-size);\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  background: var(--widget-color);\n  color: var(--text-color);\n  width: 100%;\n}\n@media (hover: hover) {\n  .lil-gui input:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui input:active {\n    background: var(--focus-color);\n  }\n}\n.lil-gui input:disabled {\n  opacity: 1;\n}\n.lil-gui input[type=text],\n.lil-gui input[type=number] {\n  padding: var(--widget-padding);\n}\n.lil-gui input[type=text]:focus,\n.lil-gui input[type=number]:focus {\n  background: var(--focus-color);\n}\n.lil-gui input::-webkit-outer-spin-button,\n.lil-gui input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.lil-gui input[type=number] {\n  -moz-appearance: textfield;\n}\n.lil-gui input[type=checkbox] {\n  appearance: none;\n  -webkit-appearance: none;\n  height: var(--checkbox-size);\n  width: var(--checkbox-size);\n  border-radius: var(--widget-border-radius);\n  text-align: center;\n  cursor: pointer;\n}\n.lil-gui input[type=checkbox]:checked:before {\n  font-family: "lil-gui";\n  content: "\u2713";\n  font-size: var(--checkbox-size);\n  line-height: var(--checkbox-size);\n}\n@media (hover: hover) {\n  .lil-gui input[type=checkbox]:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button {\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  color: var(--text-color);\n  width: 100%;\n  height: var(--widget-height);\n  text-transform: none;\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  border: 1px solid var(--widget-color);\n  text-align: center;\n  line-height: calc(var(--widget-height) - 4px);\n}\n@media (hover: hover) {\n  .lil-gui button:hover {\n    background: var(--hover-color);\n    border-color: var(--hover-color);\n  }\n  .lil-gui button:focus {\n    border-color: var(--focus-color);\n  }\n}\n.lil-gui button:active {\n  background: var(--focus-color);\n}\n\n@font-face {\n  font-family: "lil-gui";\n  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");\n}';function _(t){var e=document.createElement("style");e.innerHTML=t;var n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(e,n):document.head.appendChild(e)}var x=!1,k=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.parent,r=n.autoPlace,l=void 0===r?void 0===i:r,a=n.container,s=n.width,u=n.title,d=void 0===u?"Controls":u,h=n.injectStyles,c=void 0===h||h,p=n.touchStyles,g=void 0===p||p;if((0,o.Z)(this,t),this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",(function(){return e.openAnimated(e._closed)})),this.$title.addEventListener("keydown",(function(t){"Enter"!==t.code&&"Space"!==t.code||(t.preventDefault(),e.$title.click())})),this.$title.addEventListener("touchstart",(function(){}),{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(d),g&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!x&&c&&(_(w),x=!0),a?a.appendChild(this.domElement):l&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",(function(t){return t.stopPropagation()})),this.domElement.addEventListener("keyup",(function(t){return t.stopPropagation()}))}return(0,a.Z)(t,[{key:"add",value:function(t,e,n,i,r){if(Object(n)===n)return new A(this,t,e,n);var l=t[e];switch(typeof l){case"number":return new b(this,t,e,n,i,r);case"boolean":return new u(this,t,e);case"string":return new y(this,t,e);case"function":return new f(this,t,e)}console.error("gui.add failed\n\tproperty:",e,"\n\tobject:",t,"\n\tvalue:",l)}},{key:"addColor",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new m(this,t,e,n)}},{key:"addFolder",value:function(e){return new t({parent:this,title:e})}},{key:"load",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.controllers&&this.controllers.forEach((function(e){e instanceof f||e._name in t.controllers&&e.load(t.controllers[e._name])})),e&&t.folders&&this.folders.forEach((function(e){e._title in t.folders&&e.load(t.folders[e._title])})),this}},{key:"save",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e={controllers:{},folders:{}};return this.controllers.forEach((function(t){if(!(t instanceof f)){if(t._name in e.controllers)throw new Error('Cannot save GUI with duplicate property "'.concat(t._name,'"'));e.controllers[t._name]=t.save()}})),t&&this.folders.forEach((function(t){if(t._title in e.folders)throw new Error('Cannot save GUI with duplicate folder "'.concat(t._title,'"'));e.folders[t._title]=t.save()})),e}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}},{key:"close",value:function(){return this.open(!1)}},{key:"show",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}},{key:"hide",value:function(){return this.show(!1)}},{key:"openAnimated",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame((function(){var n=t.$children.clientHeight;t.$children.style.height=n+"px",t.domElement.classList.add("transition");t.$children.addEventListener("transitionend",(function e(n){n.target===t.$children&&(t.$children.style.height="",t.domElement.classList.remove("transition"),t.$children.removeEventListener("transitionend",e))}));var i=e?t.$children.scrollHeight:0;t.domElement.classList.toggle("closed",!e),requestAnimationFrame((function(){t.$children.style.height=i+"px"}))})),this}},{key:"title",value:function(t){return this._title=t,this.$title.innerHTML=t,this}},{key:"reset",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=t?this.controllersRecursive():this.controllers;return e.forEach((function(t){return t.reset()})),this}},{key:"onChange",value:function(t){return this._onChange=t,this}},{key:"_callOnChange",value:function(t){this.parent&&this.parent._callOnChange(t),void 0!==this._onChange&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}},{key:"onFinishChange",value:function(t){return this._onFinishChange=t,this}},{key:"_callOnFinishChange",value:function(t){this.parent&&this.parent._callOnFinishChange(t),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}},{key:"destroy",value:function(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach((function(t){return t.destroy()}))}},{key:"controllersRecursive",value:function(){var t=Array.from(this.controllers);return this.folders.forEach((function(e){t=t.concat(e.controllersRecursive())})),t}},{key:"foldersRecursive",value:function(){var t=Array.from(this.folders);return this.folders.forEach((function(e){t=t.concat(e.foldersRecursive())})),t}}]),t}();e.ZP=k}}]);
//# sourceMappingURL=232.7b48806a.chunk.js.map