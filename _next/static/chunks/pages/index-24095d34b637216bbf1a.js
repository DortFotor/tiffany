_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"20a2":function(e,t,n){e.exports=n("nOHt")},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n("nKUr"),o=n("q1tI"),r=n("H1WH"),i=n("ODXe"),c=n("YFqc"),s=n.n(c),l=n("20a2"),u=n("Vl3Y"),d=n("kaz8"),p=n("2/Rp"),f=n("Z6YE"),m=n("si+R"),h=n.n(m);function b(e){var t=e.onOpenWallet,n=Object(f.b)().account,o=Object(l.useRouter)(),r=u.a.useForm(),c=Object(i.a)(r,1)[0];return Object(a.jsxs)("div",{className:h.a.cardWrap,children:[Object(a.jsx)("img",{className:h.a.boxImg,src:"/assets/NFTiff_box.png",alt:"box"}),Object(a.jsxs)("div",{className:h.a.cardContent,children:[Object(a.jsx)("img",{src:"/assets/logo.svg",alt:"logo"}),Object(a.jsx)("div",{className:h.a.description,children:"Welcome to the NFTiff Gateway. Connect your wallet to mint a NFTiff Pass and begin the pendant creation process."}),Object(a.jsx)("div",{className:h.a.formWrap,children:Object(a.jsxs)(u.a,{form:c,name:"toc",onFinish:function(e){o.push("/kyc")},scrollToFirstError:!0,children:[Object(a.jsx)(u.a.Item,{className:"terms_condition_wrap",name:"agreement",valuePropName:"checked",rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject(new Error(""))}}],children:Object(a.jsxs)(d.a,{className:h.a.checkboxWrap,children:["By Using Chain NFTiffs, you agree with Chain NFTiffs ",Object(a.jsx)(s.a,{href:"/legal",children:"Terms of Service and Privacy Policies"})]})}),n?Object(a.jsx)(u.a.Item,{className:h.a.btnWrap,shouldUpdate:!0,children:function(){return Object(a.jsx)(p.a,{type:"primary",htmlType:"submit",disabled:!c.isFieldsTouched(!0)||!!c.getFieldsError().filter((function(e){return e.errors.length})).length,children:"Enter"})}}):Object(a.jsx)(u.a.Item,{className:h.a.btnWrap,children:Object(a.jsx)(p.a,{type:"primary",onClick:t,children:"Connect Your Wallet"})})]})})]})]})}var v=n("cq1P"),O=n("6Moy"),j=n("XmRy"),y=n.n(j);function x(e){var t=e.timestamp,n=e.onLive,r=Object(o.useState)(!1),i=r[0],c=r[1];return Object(a.jsx)("div",{className:"flex-all ".concat(y.a.countDownWrapper),children:Object(a.jsx)("div",{className:"flex-all",children:!i&&Object(a.jsx)(O.a,{date:1e3*+t,renderer:function(e){var t=e.days,o=e.hours,r=e.minutes,i=e.seconds;return e.completed?(c(!0),n(),Object(a.jsx)(a.Fragment,{})):Object(a.jsxs)("div",{className:"flex-center justify-between ".concat(y.a.boxWraper),children:[Object(a.jsxs)("div",{className:"flex-all ".concat(y.a.box),children:[Object(a.jsx)("div",{children:t}),Object(a.jsx)("span",{children:"DAYS"})]}),Object(a.jsx)("div",{className:y.a.divider}),Object(a.jsxs)("div",{className:"flex-all ".concat(y.a.box),children:[Object(a.jsx)("div",{children:o}),Object(a.jsx)("span",{children:"HOURS"})]}),Object(a.jsx)("div",{className:y.a.divider}),Object(a.jsxs)("div",{className:"flex-all ".concat(y.a.box),children:[Object(a.jsx)("div",{children:r}),Object(a.jsx)("span",{children:"MINUTES"})]}),Object(a.jsx)("div",{className:y.a.divider}),Object(a.jsxs)("div",{className:"flex-all ".concat(y.a.box),children:[Object(a.jsx)("div",{children:i}),Object(a.jsx)("span",{children:"SECONDS"})]})]})}})})})}var g=n("Evpv"),T=n("vRNQ"),_=n.n(T);function C(e){var t=e.state.nftInfo,n=Object(o.useState)(!0),i=n[0],c=n[1],s=Object(o.useState)(+new Date<1e3*g.d),l=s[0],u=s[1];Object(o.useEffect)((function(){+new Date<1e3*g.d?u(!0):u(!1)}));var d=Object(o.useState)(!1),p=d[0],f=d[1];return Object(a.jsxs)("section",{className:"".concat(l?_.a.presaleContent:_.a.content),children:[(+new Date<1e3*g.d||500===+t.totalSupply)&&Object(a.jsxs)("div",{className:"flex-all ".concat(_.a.presaleWrap),children:[500===+t.totalSupply?Object(a.jsx)("img",{className:_.a.presaleVideo,src:"/assets/soldout.png",alt:"soldout"}):Object(a.jsxs)("video",{id:"video",className:_.a.presaleVideo,autoPlay:!0,loop:!0,muted:i,playsInline:!0,children:[Object(a.jsx)("source",{src:"https://assets.chain.com/nftiff_cadence/NFT_Teaser_1x1.mp4",type:"video/mp4"}),"Your browser does not support HTML5 video."]}),Object(a.jsx)("div",{className:_.a.soundPlayWrap,onClick:function(){return c(!i)},children:i?Object(a.jsx)("img",{src:"/assets/soundoff.png",alt:"sound"}):Object(a.jsx)("img",{src:"/assets/sound.png",alt:"sound"})}),+new Date<1e3*g.d&&Object(a.jsx)(x,{timestamp:g.d,onLive:function(){u(!1)}}),500===+t.totalSupply&&Object(a.jsx)("div",{className:_.a.soldout,children:"SOLD OUT"})]}),!l&&+t.totalSupply<500&&Object(a.jsx)("div",{className:_.a.landingWrap,children:(!p||r.isMobile)&&Object(a.jsx)("div",{className:"".concat(_.a.tocWrap," flex-all limited"),children:Object(a.jsx)(b,{onOpenWallet:function(){f(!0)}})})}),Object(a.jsx)(v.a,{isOpen:p,onClose:function(){f(!1)}})]})}},"6Moy":function(e,t,n){"use strict";var a=n("q1tI"),o=n("17x9");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return d(this,n)}}function f(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(e);if(0===t)return n;var a=n.match(/(.*?)([0-9]+)(.*)/),o=a?a[1]:"",r=a?a[3]:"",i=a?a[2]:n,c=i.length>=t?i:(f(Array(t)).map((function(){return"0"})).join("")+i).slice(-1*t);return"".concat(o).concat(c).concat(r)}var b={daysInHours:!1,zeroPadTime:2};function v(e,t){var n=e.days,a=e.hours,o=e.minutes,r=e.seconds,i=Object.assign(Object.assign({},b),t),c=i.daysInHours,s=i.zeroPadTime,l=i.zeroPadDays,u=void 0===l?s:l,d=Math.min(2,s),p=c?h(a+24*n,s):h(a,d);return{days:c?"":h(n,u),hours:p,minutes:h(o,d),seconds:h(r,d)}}var O=function(e){s(n,e);var t=p(n);function n(){var e;return r(this,n),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return c(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(a.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(a.Component);O.propTypes={count:o.number,children:o.element,onComplete:o.func};var j=function(e){s(n,e);var t=p(n);function n(e){var o;if(r(this,n),(o=t.call(this,e)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=Object(a.createRef)(),o.tick=function(){var e=o.calcTimeDelta(),t=e.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(e,void 0,t)},o.start=function(){if(!o.isStarted()){var e=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=e?o.calcOffsetStartTimestamp()-e:0;var t=o.calcTimeDelta();o.setTimeDeltaState(t,"STARTED",o.props.onStart),o.props.controlled||t.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},o.handleOnComplete=function(e){o.props.onComplete&&o.props.onComplete(e)},e.date){var i=o.calcTimeDelta();o.state={timeDelta:i,status:i.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return c(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,a=e.precision,o=e.controlled,r=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.now,o=void 0===a?Date.now:a,r=n.precision,i=void 0===r?0:r,c=n.controlled,s=n.offsetTime,l=void 0===s?0:s,u=n.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,c||(t+=l);var d=c?t:t-o(),p=Math.min(20,Math.max(0,i)),f=Math.round(1e3*parseFloat(((u?d:Math.max(0,d))/1e3).toFixed(p))),m=Math.abs(f)/1e3;return{total:f,days:Math.floor(m/86400),hours:Math.floor(m/3600%24),minutes:Math.floor(m/60%60),seconds:Math.floor(m%60),milliseconds:Number((m%1*1e3).toFixed()),completed:f<=0}}(t,{now:n,precision:a,controlled:o,offsetTime:this.offsetTime,overtime:r})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var a=this;if(this.mounted){var o;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),o=this.handleOnComplete);return this.setState((function(n){var o=t||n.status;return e.completed&&!a.props.overtime?o="COMPLETED":t||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:e,status:o}}),(function(){n&&n(a.state.timeDelta),o&&o(a.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,n=e.zeroPadTime,a=e.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:v(o,{daysInHours:t,zeroPadTime:n,zeroPadDays:a})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,o=e.onComplete;return Object(a.createElement)(O,{ref:this.legacyCountdownRef,count:t,onComplete:o},n)}var r=this.props,i=r.className,c=r.overtime,s=r.children,l=r.renderer,u=this.getRenderProps();if(l)return l(u);if(s&&this.state.timeDelta.completed&&!c)return Object(a.cloneElement)(s,{countdown:u});var d=u.formatted,p=d.days,f=d.hours,m=d.minutes,h=d.seconds;return Object(a.createElement)("span",{className:i},u.total<0?"-":"",p,p?":":"",f,":",m,":",h)}}]),n}(a.Component);j.defaultProps=Object.assign(Object.assign({},b),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),j.propTypes={date:Object(o.oneOfType)([Object(o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},t.a=j},XmRy:function(e,t,n){e.exports={countDownWrapper:"PresaleTimeDown_countDownWrapper__3c_ko",divider:"PresaleTimeDown_divider__3np4V",boxWraper:"PresaleTimeDown_boxWraper__87zp4",box:"PresaleTimeDown_box__2_0Kl"}},kaz8:function(e,t,n){"use strict";var a=n("rePB"),o=n("wx14"),r=n("q1tI"),i=n.n(r),c=n("eHJ2"),s=n.n(c),l=n("Ff2n"),u=n("VTBJ"),d=n("1OyB"),p=n("vuIU"),f=n("Ji7U"),m=n("LK+K"),h=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,o=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),o&&o({target:Object(u.a)(Object(u.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var o="checked"in e?e.checked:e.defaultChecked;return a.state={checked:o},a}return Object(p.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,c=t.style,u=t.name,d=t.id,p=t.type,f=t.disabled,m=t.readOnly,h=t.tabIndex,b=t.onClick,v=t.onFocus,O=t.onBlur,j=t.onKeyDown,y=t.onKeyPress,x=t.onKeyUp,g=t.autoFocus,T=t.value,_=t.required,C=Object(l.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),S=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),w=this.state.checked,P=s()(n,r,(e={},Object(a.a)(e,"".concat(n,"-checked"),w),Object(a.a)(e,"".concat(n,"-disabled"),f),e));return i.a.createElement("span",{className:P,style:c},i.a.createElement("input",Object(o.a)({name:u,id:d,type:p,required:_,readOnly:m,disabled:f,tabIndex:h,className:"".concat(n,"-input"),checked:!!w,onClick:b,onFocus:v,onBlur:O,onKeyUp:x,onKeyDown:j,onKeyPress:y,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:T},S)),i.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(u.a)(Object(u.a)({},t),{},{checked:e.checked}):null}}]),n}(r.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var b=h,v=n("ihLV"),O=n("KQm4"),j=n("ODXe"),y=n("Ya77"),x=n("H84U"),g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},T=r.createContext(null),_=function(e,t){var n=e.defaultValue,i=e.children,c=e.options,l=void 0===c?[]:c,u=e.prefixCls,d=e.className,p=e.style,f=e.onChange,m=g(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),h=r.useContext(x.b),b=h.getPrefixCls,v=h.direction,_=r.useState(m.value||n||[]),C=Object(j.a)(_,2),S=C[0],w=C[1],P=r.useState([]),D=Object(j.a)(P,2),k=D[0],E=D[1];r.useEffect((function(){"value"in m&&w(m.value||[])}),[m.value]);var M=function(){return l.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},W=b("checkbox",u),I="".concat(W,"-group"),R=Object(y.a)(m,["value","disabled"]);l&&l.length>0&&(i=M().map((function(e){return r.createElement(N,{prefixCls:W,key:e.value.toString(),disabled:"disabled"in e?e.disabled:m.disabled,value:e.value,checked:-1!==S.indexOf(e.value),onChange:e.onChange,className:"".concat(I,"-item"),style:e.style},e.label)})));var F={toggleOption:function(e){var t=S.indexOf(e.value),n=Object(O.a)(S);-1===t?n.push(e.value):n.splice(t,1),"value"in m||w(n);var a=M();null===f||void 0===f||f(n.filter((function(e){return-1!==k.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:S,disabled:m.disabled,name:m.name,registerValue:function(e){E((function(t){return[].concat(Object(O.a)(t),[e])}))},cancelValue:function(e){E((function(t){return t.filter((function(t){return t!==e}))}))}},H=s()(I,Object(a.a)({},"".concat(I,"-rtl"),"rtl"===v),d);return r.createElement("div",Object(o.a)({className:H,style:p},R,{ref:t}),r.createElement(T.Provider,{value:F},i))},C=r.forwardRef(_),S=r.memo(C),w=n("uaoM"),P=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},D=function(e,t){var n,i=e.prefixCls,c=e.className,l=e.children,u=e.indeterminate,d=void 0!==u&&u,p=e.style,f=e.onMouseEnter,m=e.onMouseLeave,h=e.skipGroup,O=void 0!==h&&h,j=P(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),y=r.useContext(x.b),g=y.getPrefixCls,_=y.direction,C=r.useContext(T),S=Object(r.useContext)(v.b).isFormItemInput,D=r.useRef(j.value);r.useEffect((function(){null===C||void 0===C||C.registerValue(j.value),Object(w.a)("checked"in j||!!C||!("value"in j),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),r.useEffect((function(){if(!O)return j.value!==D.current&&(null===C||void 0===C||C.cancelValue(D.current),null===C||void 0===C||C.registerValue(j.value),D.current=j.value),function(){return null===C||void 0===C?void 0:C.cancelValue(j.value)}}),[j.value]);var k=g("checkbox",i),N=Object(o.a)({},j);C&&!O&&(N.onChange=function(){j.onChange&&j.onChange.apply(j,arguments),C.toggleOption&&C.toggleOption({label:l,value:j.value})},N.name=C.name,N.checked=-1!==C.value.indexOf(j.value),N.disabled=j.disabled||C.disabled);var E=s()((n={},Object(a.a)(n,"".concat(k,"-wrapper"),!0),Object(a.a)(n,"".concat(k,"-rtl"),"rtl"===_),Object(a.a)(n,"".concat(k,"-wrapper-checked"),N.checked),Object(a.a)(n,"".concat(k,"-wrapper-disabled"),N.disabled),Object(a.a)(n,"".concat(k,"-wrapper-in-form-item"),S),n),c),M=s()(Object(a.a)({},"".concat(k,"-indeterminate"),d)),W=d?"mixed":void 0;return r.createElement("label",{className:E,style:p,onMouseEnter:f,onMouseLeave:m},r.createElement(b,Object(o.a)({"aria-checked":W},N,{prefixCls:k,className:M,ref:t})),void 0!==l&&r.createElement("span",null,l))},k=r.forwardRef(D);k.displayName="Checkbox";var N=k,E=N;E.Group=S,E.__ANT_CHECKBOX=!0;t.a=E},"si+R":function(e,t,n){e.exports={cardWrap:"TocCard_cardWrap__1N-d2",boxImg:"TocCard_boxImg__20XqL",cardContent:"TocCard_cardContent__1bWrP",description:"TocCard_description__lDfme",formWrap:"TocCard_formWrap__3wzMK",checkboxWrap:"TocCard_checkboxWrap__3_CQ4",btnWrap:"TocCard_btnWrap__3D25P"}},vRNQ:function(e,t,n){e.exports={content:"Home_content__2fqOz",presaleContent:"Home_presaleContent___xyik",presaleWrap:"Home_presaleWrap__10MNX",presaleVideo:"Home_presaleVideo__3OeP5",soundPlayWrap:"Home_soundPlayWrap__3giOo",landingWrap:"Home_landingWrap__3tshc",bgVideo:"Home_bgVideo__hNwh2",soldout:"Home_soldout__3UBPf",mobileBg:"Home_mobileBg__1S4tR",tocWrap:"Home_tocWrap__FIhPo"}}},[["/EDR",0,1,2,3,6,9,7,11,13]]]);