(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{3259:function(t,e,n){Promise.resolve().then(n.bind(n,4156))},4156:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(7437),i=n(3667),a=n(2265),s=n(8629),o=n(7095),l=t=>{let{countNum:e,countText:n,text:i}=t;return(0,r.jsxs)("div",{className:"text-center font-primary",children:[(0,r.jsxs)("div",{className:"text-[40px] text-accent mb-4",children:[(0,r.jsx)(o.ZP,{end:e,delay:2.4,duration:6}),(0,r.jsx)("span",{children:n})]}),(0,r.jsx)("p",{className:"text-lg",children:i})]})},u=()=>{let{mouseEnterHandler:t,mouseLeaveHandler:e}=(0,a.useContext)(s.z);return(0,r.jsx)(i.E.section,{initial:{opacity:0},animate:{opacity:1,transition:{delay:2}},className:"min-h-screen flex items-center overflow-x-hidden",children:(0,r.jsx)("div",{className:"container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0",children:(0,r.jsx)("div",{className:"w-full h-full flex flex-col xl:flex-row items-center justify-between",children:(0,r.jsxs)(i.E.div,{onMouseEnter:t,onMouseLeave:e,initial:{opacity:0,x:60},animate:{opacity:1,x:0,transition:{delay:2.4,duration:.8,ease:"easeInOut"}},className:"flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0",children:[(0,r.jsx)("h2",{className:"h2 mb-6 mx-auto max-w-[540px] xl:max-w-none",children:"We are committed to bring your dream bridal look to life!"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l,{countNum:4,text:"Services"})}),(0,r.jsx)("div",{children:(0,r.jsx)(l,{countNum:1e3,text:"Happy Brides"})}),(0,r.jsx)("div",{children:(0,r.jsx)(l,{countNum:5,text:"Years of Experience"})})]})]})})})})}},8629:function(t,e,n){"use strict";n.d(e,{z:function(){return u}});var r=n(7437),i=n(2265),a=n(5282),s=n(6391),o=n(3667),l=n(2916);let u=(0,i.createContext)();e.default=t=>{let{children:e}=t,[n,c]=(0,i.useState)({size:30,background:"#473936"}),[f,p]=(0,i.useState)(!1),d=(0,l.ac)({query:"(max-width: 1200px)"}),h=(0,a.c)(0),m=(0,a.c)(0),g={damping:20,stiffness:290,mass:.45},y=(0,s.q)(h,g),v=(0,s.q)(m,g),x=t=>{d?c({size:0,background:"none"}):(h.set(t.clientX-n.size/2),m.set(t.clientY-n.size/2))};return(0,i.useEffect)(()=>(window.addEventListener("mousemove",x),()=>window.removeEventListener("mousemove",x)),[n]),(0,r.jsxs)(u.Provider,{value:{mouseEnterHandler:()=>{c({size:90,background:"#00423a"}),p(!0)},mouseLeaveHandler:()=>{c({size:30,background:"#473936"}),p(!1)}},children:[(0,r.jsx)(o.E.div,{className:"fixed z-[99] rounded-full pointer-events-none transition-all duration-300",style:{left:y,top:v,width:n.size,height:n.size,backgroundColor:n.background,mixBlendMode:f?"difference":"normal",transition:"width 0.2s ease-in-out, height 0.2s ease-in-out"}}),e]})}},7992:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a=(Math.abs(t).toFixed(i.options.decimalPlaces)+"").split(".");if(e=a[0],n=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){r="";for(var s=3,o=0,l=0,u=e.length;l<u;++l)i.options.useIndianSeparators&&4===l&&(s=2,o=1),0!==l&&o%s==0&&(r=i.options.separator+r),o++,r=e[u-l-1]+r;e=r}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),(t<0?"-":"")+i.options.prefix+e+n+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},7095:function(t,e,n){"use strict";var r=n(2265),i=n(7992);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return c(function(){e.current=t}),r.useCallback(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)},[])}var p=function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,f=e.separator,p=e.start,d=e.suffix,h=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,v=e.scrollSpyDelay,x=e.scrollSpyOnce,b=e.plugin;return new i.CountUp(t,o,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:s,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:d,plugin:b,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:v,scrollSpyOnce:x})},d=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},m=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,s,o=[],l=!0,u=!1;try{for(a=(n=n.call(t)).next;!(l=(r=a.call(n)).done)&&(o.push(r.value),2!==o.length);l=!0);}catch(t){u=!0,i=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}(t,2)||function(t,e){if(t){if("string"==typeof t)return u(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return s(s({},h),e)},[t]),i=n.ref,a=n.startOnMount,o=n.enableReinitialize,c=n.delay,m=n.onEnd,g=n.onStart,y=n.onPauseResume,v=n.onReset,x=n.onUpdate,b=l(n,d),w=r.useRef(),V=r.useRef(),E=r.useRef(!1),O=f(function(){return p("string"==typeof i?i:i.current,b)}),S=f(function(t){var e=w.current;if(e&&!t)return e;var n=O();return w.current=n,n}),j=f(function(){var t=function(){return S(!0).start(function(){null==m||m({pauseResume:F,reset:N,start:A,update:P})})};c&&c>0?V.current=setTimeout(t,1e3*c):t(),null==g||g({pauseResume:F,reset:N,update:P})}),F=f(function(){S().pauseResume(),null==y||y({reset:N,start:A,update:P})}),N=f(function(){S().el&&(V.current&&clearTimeout(V.current),S().reset(),null==v||v({pauseResume:F,start:A,update:P}))}),P=f(function(t){S().update(t),null==x||x({pauseResume:F,reset:N,start:A})}),A=f(function(){N(),j()}),R=f(function(t){a&&(t&&N(),j())});return r.useEffect(function(){E.current?o&&R(!0):(E.current=!0,R())},[o,E,R,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){N()}},[N]),{start:A,pauseResume:F,reset:N,update:P,getCountUp:S}},g=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,u=t.style,c=l(t,g),p=r.useRef(null),d=r.useRef(!1),h=m(s(s({},c),{},{ref:p,startOnMount:"function"!=typeof a||0===t.delay,enableReinitialize:!1})),y=h.start,v=h.reset,x=h.update,b=h.pauseResume,w=h.getCountUp,V=f(function(){y()}),E=f(function(e){t.preserveValue||v(),x(e)}),O=f(function(){if("function"==typeof t.children&&!(p.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}w()});r.useEffect(function(){O()},[O]),r.useEffect(function(){d.current&&E(t.end)},[t.end,E]);var S=n&&t;return(r.useEffect(function(){n&&d.current&&V()},[V,n,S]),r.useEffect(function(){!n&&d.current&&V()},[V,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect(function(){d.current=!0},[]),"function"==typeof a)?a({countUpRef:p,start:y,reset:v,update:x,pauseResume:b,getCountUp:w}):r.createElement("span",o({className:e,ref:p,style:u},i),void 0!==t.start?w().formattingFn(t.start):"")}}},function(t){t.O(0,[113,971,23,744],function(){return t(t.s=3259)}),_N_E=t.O()}]);