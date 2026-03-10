function Cd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function bd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gl={exports:{}},ji={},Hl={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),Pd=Symbol.for("react.portal"),Ed=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),Rd=Symbol.for("react.provider"),Td=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Ad=Symbol.for("react.memo"),Dd=Symbol.for("react.lazy"),Ss=Symbol.iterator;function Ld(e){return e===null||typeof e!="object"?null:(e=Ss&&e[Ss]||e["@@iterator"],typeof e=="function"?e:null)}var Kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ql=Object.assign,ql={};function _n(e,t,n){this.props=e,this.context=t,this.refs=ql,this.updater=n||Kl}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yl(){}Yl.prototype=_n.prototype;function wa(e,t,n){this.props=e,this.context=t,this.refs=ql,this.updater=n||Kl}var Sa=wa.prototype=new Yl;Sa.constructor=wa;Ql(Sa,_n.prototype);Sa.isPureReactComponent=!0;var Cs=Array.isArray,Jl=Object.prototype.hasOwnProperty,Ca={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function Zl(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Jl.call(t,r)&&!Xl.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Sr,type:e,key:o,ref:a,props:i,_owner:Ca.current}}function Md(e,t){return{$$typeof:Sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ba(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function Fd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bs=/\/+/g;function qi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fd(""+e.key):t.toString(36)}function Kr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Sr:case Pd:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+qi(a,0):r,Cs(i)?(n="",e!=null&&(n=e.replace(bs,"$&/")+"/"),Kr(i,t,n,"",function(c){return c})):i!=null&&(ba(i)&&(i=Md(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(bs,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Cs(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+qi(o,s);a+=Kr(o,t,n,l,i)}else if(l=Ld(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+qi(o,s++),a+=Kr(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Tr(e,t,n){if(e==null)return e;var r=[],i=0;return Kr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Od(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Qr={transition:null},zd={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:Ca};function eu(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!ba(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=_n;D.Fragment=Ed;D.Profiler=_d;D.PureComponent=wa;D.StrictMode=Nd;D.Suspense=Id;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zd;D.act=eu;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ql({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ca.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Jl.call(t,l)&&!Xl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Sr,type:e.type,key:i,ref:o,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:Td,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rd,_context:e},e.Consumer=e};D.createElement=Zl;D.createFactory=function(e){var t=Zl.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:jd,render:e}};D.isValidElement=ba;D.lazy=function(e){return{$$typeof:Dd,_payload:{_status:-1,_result:e},_init:Od}};D.memo=function(e,t){return{$$typeof:Ad,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=t}};D.unstable_act=eu;D.useCallback=function(e,t){return me.current.useCallback(e,t)};D.useContext=function(e){return me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return me.current.useDeferredValue(e)};D.useEffect=function(e,t){return me.current.useEffect(e,t)};D.useId=function(){return me.current.useId()};D.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return me.current.useMemo(e,t)};D.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};D.useRef=function(e){return me.current.useRef(e)};D.useState=function(e){return me.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return me.current.useTransition()};D.version="18.3.1";Hl.exports=D;var C=Hl.exports;const Bd=bd(C),Ud=Cd({__proto__:null,default:Bd},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=C,$d=Symbol.for("react.element"),Vd=Symbol.for("react.fragment"),Gd=Object.prototype.hasOwnProperty,Hd=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Gd.call(t,r)&&!Kd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$d,type:e,key:o,ref:a,props:i,_owner:Hd.current}}ji.Fragment=Vd;ji.jsx=tu;ji.jsxs=tu;Gl.exports=ji;var u=Gl.exports,nu={exports:{}},be={},ru={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var j=P.length;P.push(T);e:for(;0<j;){var M=j-1>>>1,ee=P[M];if(0<i(ee,T))P[M]=T,P[j]=ee,j=M;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var T=P[0],j=P.pop();if(j!==T){P[0]=j;e:for(var M=0,ee=P.length,_r=ee>>>1;M<_r;){var Mt=2*(M+1)-1,Qi=P[Mt],Ft=Mt+1,Rr=P[Ft];if(0>i(Qi,j))Ft<ee&&0>i(Rr,Qi)?(P[M]=Rr,P[Ft]=j,M=Ft):(P[M]=Qi,P[Mt]=j,M=Mt);else if(Ft<ee&&0>i(Rr,j))P[M]=Rr,P[Ft]=j,M=Ft;else break e}}return T}function i(P,T){var j=P.sortIndex-T.sortIndex;return j!==0?j:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],p=1,m=null,g=3,v=!1,k=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=P)r(c),T.sortIndex=T.expirationTime,t(l,T);else break;T=n(c)}}function x(P){if(y=!1,h(P),!k)if(n(l)!==null)k=!0,st(b);else{var T=n(c);T!==null&&Zt(x,T.startTime-P)}}function b(P,T){k=!1,y&&(y=!1,f(R),R=-1),v=!0;var j=g;try{for(h(T),m=n(l);m!==null&&(!(m.expirationTime>T)||P&&!ce());){var M=m.callback;if(typeof M=="function"){m.callback=null,g=m.priorityLevel;var ee=M(m.expirationTime<=T);T=e.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(l)&&r(l),h(T)}else r(l);m=n(l)}if(m!==null)var _r=!0;else{var Mt=n(c);Mt!==null&&Zt(x,Mt.startTime-T),_r=!1}return _r}finally{m=null,g=j,v=!1}}var N=!1,_=null,R=-1,B=5,A=-1;function ce(){return!(e.unstable_now()-A<B)}function F(){if(_!==null){var P=e.unstable_now();A=P;var T=!0;try{T=_(!0,P)}finally{T?at():(N=!1,_=null)}}else N=!1}var at;if(typeof d=="function")at=function(){d(F)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Nr=Lt.port2;Lt.port1.onmessage=F,at=function(){Nr.postMessage(null)}}else at=function(){S(F,0)};function st(P){_=P,N||(N=!0,at())}function Zt(P,T){R=S(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,st(b))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var j=g;g=T;try{return P()}finally{g=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=g;g=P;try{return T()}finally{g=j}},e.unstable_scheduleCallback=function(P,T,j){var M=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?M+j:M):j=M,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=j+ee,P={id:p++,callback:T,priorityLevel:P,startTime:j,expirationTime:ee,sortIndex:-1},j>M?(P.sortIndex=j,t(c,P),n(l)===null&&P===n(c)&&(y?(f(R),R=-1):y=!0,Zt(x,j-M))):(P.sortIndex=ee,t(l,P),k||v||(k=!0,st(b))),P},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(P){var T=g;return function(){var j=g;g=T;try{return P.apply(this,arguments)}finally{g=j}}}})(iu);ru.exports=iu;var Qd=ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=C,Ce=Qd;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ou=new Set,rr={};function Yt(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(rr[e]=t,e=0;e<t.length;e++)ou.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=Object.prototype.hasOwnProperty,Yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ps={},Es={};function Jd(e){return bo.call(Es,e)?!0:bo.call(Ps,e)?!1:Yd.test(e)?Es[e]=!0:(Ps[e]=!0,!1)}function Xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zd(e,t,n,r){if(t===null||typeof t>"u"||Xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pa=/[\-:]([a-z])/g;function Ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pa,Ea);oe[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pa,Ea);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pa,Ea);oe[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Na(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zd(t,n,i,r)&&(n=null),r||i===null?Jd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jr=Symbol.for("react.element"),tn=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),Po=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),su=Symbol.for("react.context"),Ra=Symbol.for("react.forward_ref"),Eo=Symbol.for("react.suspense"),No=Symbol.for("react.suspense_list"),Ta=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),lu=Symbol.for("react.offscreen"),Ns=Symbol.iterator;function Dn(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Yi;function Vn(e){if(Yi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yi=t&&t[1]||""}return`
`+Yi+e}var Ji=!1;function Xi(e,t){if(!e||Ji)return"";Ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vn(e):""}function ef(e){switch(e.tag){case 5:return Vn(e.type);case 16:return Vn("Lazy");case 13:return Vn("Suspense");case 19:return Vn("SuspenseList");case 0:case 2:case 15:return e=Xi(e.type,!1),e;case 11:return e=Xi(e.type.render,!1),e;case 1:return e=Xi(e.type,!0),e;default:return""}}function _o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nn:return"Fragment";case tn:return"Portal";case Po:return"Profiler";case _a:return"StrictMode";case Eo:return"Suspense";case No:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case su:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case Ra:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ta:return t=e.displayName||null,t!==null?t:_o(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return _o(e(t))}catch{}}return null}function tf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _o(t);case 8:return t===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nf(e){var t=uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=nf(e))}function cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ro(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _s(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function du(e,t){t=t.checked,t!=null&&Na(e,"checked",t,!1)}function To(e,t){du(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jo(e,t.type,n):t.hasOwnProperty("defaultValue")&&jo(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jo(e,t,n){(t!=="number"||oi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Io(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ts(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Gn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function fu(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function js(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rf=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){rf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function hu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function gu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var of=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(e,t){if(t){if(of[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Lo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mo=null;function ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fo=null,hn=null,gn=null;function Is(e){if(e=Pr(e)){if(typeof Fo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Mi(t),Fo(e.stateNode,e.type,t))}}function yu(e){hn?gn?gn.push(e):gn=[e]:hn=e}function vu(){if(hn){var e=hn,t=gn;if(gn=hn=null,Is(e),t)for(e=0;e<t.length;e++)Is(t[e])}}function xu(e,t){return e(t)}function ku(){}var Zi=!1;function wu(e,t,n){if(Zi)return e(t,n);Zi=!0;try{return xu(e,t,n)}finally{Zi=!1,(hn!==null||gn!==null)&&(ku(),vu())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=Mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Oo=!1;if(Ze)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Oo=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Oo=!1}function af(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var qn=!1,ai=null,si=!1,zo=null,sf={onError:function(e){qn=!0,ai=e}};function lf(e,t,n,r,i,o,a,s,l){qn=!1,ai=null,af.apply(sf,arguments)}function uf(e,t,n,r,i,o,a,s,l){if(lf.apply(this,arguments),qn){if(qn){var c=ai;qn=!1,ai=null}else throw Error(w(198));si||(si=!0,zo=c)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function As(e){if(Jt(e)!==e)throw Error(w(188))}function cf(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return As(i),e;if(o===r)return As(i),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Cu(e){return e=cf(e),e!==null?bu(e):null}function bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bu(e);if(t!==null)return t;e=e.sibling}return null}var Pu=Ce.unstable_scheduleCallback,Ds=Ce.unstable_cancelCallback,df=Ce.unstable_shouldYield,ff=Ce.unstable_requestPaint,q=Ce.unstable_now,mf=Ce.unstable_getCurrentPriorityLevel,Ia=Ce.unstable_ImmediatePriority,Eu=Ce.unstable_UserBlockingPriority,li=Ce.unstable_NormalPriority,pf=Ce.unstable_LowPriority,Nu=Ce.unstable_IdlePriority,Ii=null,Ve=null;function hf(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ii,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:vf,gf=Math.log,yf=Math.LN2;function vf(e){return e>>>=0,e===0?32:31-(gf(e)/yf|0)|0}var Dr=64,Lr=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Hn(s):(o&=a,o!==0&&(r=Hn(o)))}else a=n&~i,a!==0?r=Hn(a):o!==0&&(r=Hn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function xf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Oe(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=xf(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Bo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _u(){var e=Dr;return Dr<<=1,!(Dr&4194240)&&(Dr=64),e}function eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function wf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Aa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function Ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tu,Da,ju,Iu,Au,Uo=!1,Mr=[],xt=null,kt=null,wt=null,ar=new Map,sr=new Map,pt=[],Sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ls(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function Mn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pr(t),t!==null&&Da(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cf(e,t,n,r,i){switch(t){case"focusin":return xt=Mn(xt,e,t,n,r,i),!0;case"dragenter":return kt=Mn(kt,e,t,n,r,i),!0;case"mouseover":return wt=Mn(wt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ar.set(o,Mn(ar.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,sr.set(o,Mn(sr.get(o)||null,e,t,n,r,i)),!0}return!1}function Du(e){var t=Bt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Su(n),t!==null){e.blockedOn=t,Au(e.priority,function(){ju(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Mo=r,n.target.dispatchEvent(r),Mo=null}else return t=Pr(n),t!==null&&Da(t),e.blockedOn=n,!1;t.shift()}return!0}function Ms(e,t,n){qr(e)&&n.delete(t)}function bf(){Uo=!1,xt!==null&&qr(xt)&&(xt=null),kt!==null&&qr(kt)&&(kt=null),wt!==null&&qr(wt)&&(wt=null),ar.forEach(Ms),sr.forEach(Ms)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,Uo||(Uo=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,bf)))}function lr(e){function t(i){return Fn(i,e)}if(0<Mr.length){Fn(Mr[0],e);for(var n=1;n<Mr.length;n++){var r=Mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&Fn(xt,e),kt!==null&&Fn(kt,e),wt!==null&&Fn(wt,e),ar.forEach(t),sr.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)Du(n),n.blockedOn===null&&pt.shift()}var yn=it.ReactCurrentBatchConfig,ci=!0;function Pf(e,t,n,r){var i=O,o=yn.transition;yn.transition=null;try{O=1,La(e,t,n,r)}finally{O=i,yn.transition=o}}function Ef(e,t,n,r){var i=O,o=yn.transition;yn.transition=null;try{O=4,La(e,t,n,r)}finally{O=i,yn.transition=o}}function La(e,t,n,r){if(ci){var i=Wo(e,t,n,r);if(i===null)co(e,t,r,di,n),Ls(e,r);else if(Cf(i,e,t,n,r))r.stopPropagation();else if(Ls(e,r),t&4&&-1<Sf.indexOf(e)){for(;i!==null;){var o=Pr(i);if(o!==null&&Tu(o),o=Wo(e,t,n,r),o===null&&co(e,t,r,di,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else co(e,t,r,null,n)}}var di=null;function Wo(e,t,n,r){if(di=null,e=ja(r),e=Bt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function Lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mf()){case Ia:return 1;case Eu:return 4;case li:case pf:return 16;case Nu:return 536870912;default:return 16}default:return 16}}var gt=null,Ma=null,Yr=null;function Mu(){if(Yr)return Yr;var e,t=Ma,n=t.length,r,i="value"in gt?gt.value:gt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Yr=i.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function Fs(){return!1}function Pe(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fr:Fs,this.isPropagationStopped=Fs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Pe(Rn),br=K({},Rn,{view:0,detail:0}),Nf=Pe(br),to,no,On,Ai=K({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(to=e.screenX-On.screenX,no=e.screenY-On.screenY):no=to=0,On=e),to)},movementY:function(e){return"movementY"in e?e.movementY:no}}),Os=Pe(Ai),_f=K({},Ai,{dataTransfer:0}),Rf=Pe(_f),Tf=K({},br,{relatedTarget:0}),ro=Pe(Tf),jf=K({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),If=Pe(jf),Af=K({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Df=Pe(Af),Lf=K({},Rn,{data:0}),zs=Pe(Lf),Mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function Oa(){return zf}var Bf=K({},br,{key:function(e){if(e.key){var t=Mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oa,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uf=Pe(Bf),Wf=K({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bs=Pe(Wf),$f=K({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oa}),Vf=Pe($f),Gf=K({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hf=Pe(Gf),Kf=K({},Ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qf=Pe(Kf),qf=[9,13,27,32],za=Ze&&"CompositionEvent"in window,Yn=null;Ze&&"documentMode"in document&&(Yn=document.documentMode);var Yf=Ze&&"TextEvent"in window&&!Yn,Fu=Ze&&(!za||Yn&&8<Yn&&11>=Yn),Us=" ",Ws=!1;function Ou(e,t){switch(e){case"keyup":return qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function Jf(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Ws=!0,Us);case"textInput":return e=t.data,e===Us&&Ws?null:e;default:return null}}function Xf(e,t){if(rn)return e==="compositionend"||!za&&Ou(e,t)?(e=Mu(),Yr=Ma=gt=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fu&&t.locale!=="ko"?null:t.data;default:return null}}var Zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zf[e.type]:t==="textarea"}function Bu(e,t,n,r){yu(r),t=fi(t,"onChange"),0<t.length&&(n=new Fa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,ur=null;function em(e){Ju(e,0)}function Di(e){var t=sn(e);if(cu(t))return e}function tm(e,t){if(e==="change")return t}var Uu=!1;if(Ze){var io;if(Ze){var oo="oninput"in document;if(!oo){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),oo=typeof Vs.oninput=="function"}io=oo}else io=!1;Uu=io&&(!document.documentMode||9<document.documentMode)}function Gs(){Jn&&(Jn.detachEvent("onpropertychange",Wu),ur=Jn=null)}function Wu(e){if(e.propertyName==="value"&&Di(ur)){var t=[];Bu(t,ur,e,ja(e)),wu(em,t)}}function nm(e,t,n){e==="focusin"?(Gs(),Jn=t,ur=n,Jn.attachEvent("onpropertychange",Wu)):e==="focusout"&&Gs()}function rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(ur)}function im(e,t){if(e==="click")return Di(t)}function om(e,t){if(e==="input"||e==="change")return Di(t)}function am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:am;function cr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bo.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function Hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ks(e,t){var n=Hs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hs(n)}}function $u(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$u(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vu(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oi(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sm(e){var t=Vu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$u(n.ownerDocument.documentElement,n)){if(r!==null&&Ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ks(n,o);var a=Ks(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lm=Ze&&"documentMode"in document&&11>=document.documentMode,on=null,$o=null,Xn=null,Vo=!1;function Qs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vo||on==null||on!==oi(r)||(r=on,"selectionStart"in r&&Ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&cr(Xn,r)||(Xn=r,r=fi($o,"onSelect"),0<r.length&&(t=new Fa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=on)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var an={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionend:Or("Transition","TransitionEnd")},ao={},Gu={};Ze&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Li(e){if(ao[e])return ao[e];if(!an[e])return e;var t=an[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gu)return ao[e]=t[n];return e}var Hu=Li("animationend"),Ku=Li("animationiteration"),Qu=Li("animationstart"),qu=Li("transitionend"),Yu=new Map,qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Yu.set(e,t),Yt(t,[e])}for(var so=0;so<qs.length;so++){var lo=qs[so],um=lo.toLowerCase(),cm=lo[0].toUpperCase()+lo.slice(1);jt(um,"on"+cm)}jt(Hu,"onAnimationEnd");jt(Ku,"onAnimationIteration");jt(Qu,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(qu,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function Ys(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uf(r,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Ys(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Ys(i,s,c),o=l}}}if(si)throw e=zo,si=!1,zo=null,e}function W(e,t){var n=t[qo];n===void 0&&(n=t[qo]=new Set);var r=e+"__bubble";n.has(r)||(Xu(t,e,2,!1),n.add(r))}function uo(e,t,n){var r=0;t&&(r|=4),Xu(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[zr]){e[zr]=!0,ou.forEach(function(n){n!=="selectionchange"&&(dm.has(n)||uo(n,!1,e),uo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,uo("selectionchange",!1,t))}}function Xu(e,t,n,r){switch(Lu(t)){case 1:var i=Pf;break;case 4:i=Ef;break;default:i=La}n=i.bind(null,t,n,e),i=void 0,!Oo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function co(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Bt(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}wu(function(){var c=o,p=ja(n),m=[];e:{var g=Yu.get(e);if(g!==void 0){var v=Fa,k=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":v=Uf;break;case"focusin":k="focus",v=ro;break;case"focusout":k="blur",v=ro;break;case"beforeblur":case"afterblur":v=ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Vf;break;case Hu:case Ku:case Qu:v=If;break;case qu:v=Hf;break;case"scroll":v=Nf;break;case"wheel":v=Qf;break;case"copy":case"cut":case"paste":v=Df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Bs}var y=(t&4)!==0,S=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var d=c,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,f!==null&&(x=or(d,f),x!=null&&y.push(fr(d,x,h)))),S)break;d=d.return}0<y.length&&(g=new v(g,k,null,n,p),m.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Mo&&(k=n.relatedTarget||n.fromElement)&&(Bt(k)||k[et]))break e;if((v||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=c,k=k?Bt(k):null,k!==null&&(S=Jt(k),k!==S||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(y=Os,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Bs,x="onPointerLeave",f="onPointerEnter",d="pointer"),S=v==null?g:sn(v),h=k==null?g:sn(k),g=new y(x,d+"leave",v,n,p),g.target=S,g.relatedTarget=h,x=null,Bt(p)===c&&(y=new y(f,d+"enter",k,n,p),y.target=h,y.relatedTarget=S,x=y),S=x,v&&k)t:{for(y=v,f=k,d=0,h=y;h;h=en(h))d++;for(h=0,x=f;x;x=en(x))h++;for(;0<d-h;)y=en(y),d--;for(;0<h-d;)f=en(f),h--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=en(y),f=en(f)}y=null}else y=null;v!==null&&Js(m,g,v,y,!1),k!==null&&S!==null&&Js(m,S,k,y,!0)}}e:{if(g=c?sn(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var b=tm;else if($s(g))if(Uu)b=om;else{b=rm;var N=nm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=im);if(b&&(b=b(e,c))){Bu(m,b,n,p);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&jo(g,"number",g.value)}switch(N=c?sn(c):window,e){case"focusin":($s(N)||N.contentEditable==="true")&&(on=N,$o=c,Xn=null);break;case"focusout":Xn=$o=on=null;break;case"mousedown":Vo=!0;break;case"contextmenu":case"mouseup":case"dragend":Vo=!1,Qs(m,n,p);break;case"selectionchange":if(lm)break;case"keydown":case"keyup":Qs(m,n,p)}var _;if(za)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else rn?Ou(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Fu&&n.locale!=="ko"&&(rn||R!=="onCompositionStart"?R==="onCompositionEnd"&&rn&&(_=Mu()):(gt=p,Ma="value"in gt?gt.value:gt.textContent,rn=!0)),N=fi(c,R),0<N.length&&(R=new zs(R,e,null,n,p),m.push({event:R,listeners:N}),_?R.data=_:(_=zu(n),_!==null&&(R.data=_)))),(_=Yf?Jf(e,n):Xf(e,n))&&(c=fi(c,"onBeforeInput"),0<c.length&&(p=new zs("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=_))}Ju(m,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=or(e,n),o!=null&&r.unshift(fr(e,o,i)),o=or(e,t),o!=null&&r.push(fr(e,o,i))),e=e.return}return r}function en(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Js(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=or(n,o),l!=null&&a.unshift(fr(n,l,s))):i||(l=or(n,o),l!=null&&a.push(fr(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var fm=/\r\n?/g,mm=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(mm,"")}function Br(e,t,n){if(t=Xs(t),Xs(e)!==t&&n)throw Error(w(425))}function mi(){}var Go=null,Ho=null;function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qo=typeof setTimeout=="function"?setTimeout:void 0,pm=typeof clearTimeout=="function"?clearTimeout:void 0,Zs=typeof Promise=="function"?Promise:void 0,hm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zs<"u"?function(e){return Zs.resolve(null).then(e).catch(gm)}:Qo;function gm(e){setTimeout(function(){throw e})}function fo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);lr(t)}function St(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function el(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Tn,mr="__reactProps$"+Tn,et="__reactContainer$"+Tn,qo="__reactEvents$"+Tn,ym="__reactListeners$"+Tn,vm="__reactHandles$"+Tn;function Bt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[et]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=el(e);e!==null;){if(n=e[$e])return n;e=el(e)}return t}e=n,n=e.parentNode}return null}function Pr(e){return e=e[$e]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Mi(e){return e[mr]||null}var Yo=[],ln=-1;function It(e){return{current:e}}function $(e){0>ln||(e.current=Yo[ln],Yo[ln]=null,ln--)}function z(e,t){ln++,Yo[ln]=e.current,e.current=t}var Tt={},ue=It(Tt),ye=It(!1),Gt=Tt;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function pi(){$(ye),$(ue)}function tl(e,t,n){if(ue.current!==Tt)throw Error(w(168));z(ue,t),z(ye,n)}function Zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,tf(e)||"Unknown",i));return K({},n,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Gt=ue.current,z(ue,e),z(ye,ye.current),!0}function nl(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Zu(e,t,Gt),r.__reactInternalMemoizedMergedChildContext=e,$(ye),$(ue),z(ue,e)):$(ye),z(ye,n)}var qe=null,Fi=!1,mo=!1;function ec(e){qe===null?qe=[e]:qe.push(e)}function xm(e){Fi=!0,ec(e)}function At(){if(!mo&&qe!==null){mo=!0;var e=0,t=O;try{var n=qe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Fi=!1}catch(i){throw qe!==null&&(qe=qe.slice(e+1)),Pu(Ia,At),i}finally{O=t,mo=!1}}return null}var un=[],cn=0,gi=null,yi=0,Ee=[],Ne=0,Ht=null,Ye=1,Je="";function Ot(e,t){un[cn++]=yi,un[cn++]=gi,gi=e,yi=t}function tc(e,t,n){Ee[Ne++]=Ye,Ee[Ne++]=Je,Ee[Ne++]=Ht,Ht=e;var r=Ye;e=Je;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var o=32-Oe(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ye=1<<32-Oe(t)+i|n<<i|r,Je=o+e}else Ye=1<<o|n<<i|r,Je=e}function Ua(e){e.return!==null&&(Ot(e,1),tc(e,1,0))}function Wa(e){for(;e===gi;)gi=un[--cn],un[cn]=null,yi=un[--cn],un[cn]=null;for(;e===Ht;)Ht=Ee[--Ne],Ee[Ne]=null,Je=Ee[--Ne],Ee[Ne]=null,Ye=Ee[--Ne],Ee[Ne]=null}var Se=null,we=null,V=!1,Le=null;function nc(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function rl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,we=St(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:Ye,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,we=null,!0):!1;default:return!1}}function Jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xo(e){if(V){var t=we;if(t){var n=t;if(!rl(e,t)){if(Jo(e))throw Error(w(418));t=St(n.nextSibling);var r=Se;t&&rl(e,t)?nc(r,n):(e.flags=e.flags&-4097|2,V=!1,Se=e)}}else{if(Jo(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,Se=e}}}function il(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Ur(e){if(e!==Se)return!1;if(!V)return il(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ko(e.type,e.memoizedProps)),t&&(t=we)){if(Jo(e))throw rc(),Error(w(418));for(;t;)nc(e,t),t=St(t.nextSibling)}if(il(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=St(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=Se?St(e.stateNode.nextSibling):null;return!0}function rc(){for(var e=we;e;)e=St(e.nextSibling)}function Cn(){we=Se=null,V=!1}function $a(e){Le===null?Le=[e]:Le.push(e)}var km=it.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Wr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ol(e){var t=e._init;return t(e._payload)}function ic(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Et(f,d),f.index=0,f.sibling=null,f}function o(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,x){return d===null||d.tag!==6?(d=ko(h,f.mode,x),d.return=f,d):(d=i(d,h),d.return=f,d)}function l(f,d,h,x){var b=h.type;return b===nn?p(f,d,h.props.children,x,h.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ft&&ol(b)===d.type)?(x=i(d,h.props),x.ref=zn(f,d,h),x.return=f,x):(x=ii(h.type,h.key,h.props,null,f.mode,x),x.ref=zn(f,d,h),x.return=f,x)}function c(f,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=wo(h,f.mode,x),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function p(f,d,h,x,b){return d===null||d.tag!==7?(d=Vt(h,f.mode,x,b),d.return=f,d):(d=i(d,h),d.return=f,d)}function m(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ko(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case jr:return h=ii(d.type,d.key,d.props,null,f.mode,h),h.ref=zn(f,null,d),h.return=f,h;case tn:return d=wo(d,f.mode,h),d.return=f,d;case ft:var x=d._init;return m(f,x(d._payload),h)}if(Gn(d)||Dn(d))return d=Vt(d,f.mode,h,null),d.return=f,d;Wr(f,d)}return null}function g(f,d,h,x){var b=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return b!==null?null:s(f,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case jr:return h.key===b?l(f,d,h,x):null;case tn:return h.key===b?c(f,d,h,x):null;case ft:return b=h._init,g(f,d,b(h._payload),x)}if(Gn(h)||Dn(h))return b!==null?null:p(f,d,h,x,null);Wr(f,h)}return null}function v(f,d,h,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(h)||null,s(d,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case jr:return f=f.get(x.key===null?h:x.key)||null,l(d,f,x,b);case tn:return f=f.get(x.key===null?h:x.key)||null,c(d,f,x,b);case ft:var N=x._init;return v(f,d,h,N(x._payload),b)}if(Gn(x)||Dn(x))return f=f.get(h)||null,p(d,f,x,b,null);Wr(d,x)}return null}function k(f,d,h,x){for(var b=null,N=null,_=d,R=d=0,B=null;_!==null&&R<h.length;R++){_.index>R?(B=_,_=null):B=_.sibling;var A=g(f,_,h[R],x);if(A===null){_===null&&(_=B);break}e&&_&&A.alternate===null&&t(f,_),d=o(A,d,R),N===null?b=A:N.sibling=A,N=A,_=B}if(R===h.length)return n(f,_),V&&Ot(f,R),b;if(_===null){for(;R<h.length;R++)_=m(f,h[R],x),_!==null&&(d=o(_,d,R),N===null?b=_:N.sibling=_,N=_);return V&&Ot(f,R),b}for(_=r(f,_);R<h.length;R++)B=v(_,f,R,h[R],x),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?R:B.key),d=o(B,d,R),N===null?b=B:N.sibling=B,N=B);return e&&_.forEach(function(ce){return t(f,ce)}),V&&Ot(f,R),b}function y(f,d,h,x){var b=Dn(h);if(typeof b!="function")throw Error(w(150));if(h=b.call(h),h==null)throw Error(w(151));for(var N=b=null,_=d,R=d=0,B=null,A=h.next();_!==null&&!A.done;R++,A=h.next()){_.index>R?(B=_,_=null):B=_.sibling;var ce=g(f,_,A.value,x);if(ce===null){_===null&&(_=B);break}e&&_&&ce.alternate===null&&t(f,_),d=o(ce,d,R),N===null?b=ce:N.sibling=ce,N=ce,_=B}if(A.done)return n(f,_),V&&Ot(f,R),b;if(_===null){for(;!A.done;R++,A=h.next())A=m(f,A.value,x),A!==null&&(d=o(A,d,R),N===null?b=A:N.sibling=A,N=A);return V&&Ot(f,R),b}for(_=r(f,_);!A.done;R++,A=h.next())A=v(_,f,R,A.value,x),A!==null&&(e&&A.alternate!==null&&_.delete(A.key===null?R:A.key),d=o(A,d,R),N===null?b=A:N.sibling=A,N=A);return e&&_.forEach(function(F){return t(f,F)}),V&&Ot(f,R),b}function S(f,d,h,x){if(typeof h=="object"&&h!==null&&h.type===nn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case jr:e:{for(var b=h.key,N=d;N!==null;){if(N.key===b){if(b=h.type,b===nn){if(N.tag===7){n(f,N.sibling),d=i(N,h.props.children),d.return=f,f=d;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ft&&ol(b)===N.type){n(f,N.sibling),d=i(N,h.props),d.ref=zn(f,N,h),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}h.type===nn?(d=Vt(h.props.children,f.mode,x,h.key),d.return=f,f=d):(x=ii(h.type,h.key,h.props,null,f.mode,x),x.ref=zn(f,d,h),x.return=f,f=x)}return a(f);case tn:e:{for(N=h.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=wo(h,f.mode,x),d.return=f,f=d}return a(f);case ft:return N=h._init,S(f,d,N(h._payload),x)}if(Gn(h))return k(f,d,h,x);if(Dn(h))return y(f,d,h,x);Wr(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,h),d.return=f,f=d):(n(f,d),d=ko(h,f.mode,x),d.return=f,f=d),a(f)):n(f,d)}return S}var bn=ic(!0),oc=ic(!1),vi=It(null),xi=null,dn=null,Va=null;function Ga(){Va=dn=xi=null}function Ha(e){var t=vi.current;$(vi),e._currentValue=t}function Zo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vn(e,t){xi=e,Va=dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Va!==e)if(e={context:e,memoizedValue:t,next:null},dn===null){if(xi===null)throw Error(w(308));dn=e,xi.dependencies={lanes:0,firstContext:e}}else dn=dn.next=e;return t}var Ut=null;function Ka(e){Ut===null?Ut=[e]:Ut.push(e)}function ac(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ka(t)):(n.next=i.next,i.next=n),t.interleaved=n,tt(e,r)}function tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ka(r)):(t.next=i.next,i.next=t),r.interleaved=t,tt(e,n)}function Xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}function al(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ki(e,t,n,r){var i=e.updateQueue;mt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==a&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;a=0,p=c=l=null,s=o;do{var g=s.lane,v=s.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,y=s;switch(g=t,v=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){m=k.call(v,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,g=typeof k=="function"?k.call(v,m,g):k,g==null)break e;m=K({},m,g);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=v,l=m):p=p.next=v,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(l=m),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qt|=a,e.lanes=a,e.memoizedState=m}}function sl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Er={},Ge=It(Er),pr=It(Er),hr=It(Er);function Wt(e){if(e===Er)throw Error(w(174));return e}function qa(e,t){switch(z(hr,t),z(pr,e),z(Ge,Er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ao(t,e)}$(Ge),z(Ge,t)}function Pn(){$(Ge),$(pr),$(hr)}function lc(e){Wt(hr.current);var t=Wt(Ge.current),n=Ao(t,e.type);t!==n&&(z(pr,e),z(Ge,n))}function Ya(e){pr.current===e&&($(Ge),$(pr))}var G=It(0);function wi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=[];function Ja(){for(var e=0;e<po.length;e++)po[e]._workInProgressVersionPrimary=null;po.length=0}var Zr=it.ReactCurrentDispatcher,ho=it.ReactCurrentBatchConfig,Kt=0,H=null,X=null,te=null,Si=!1,Zn=!1,gr=0,wm=0;function ae(){throw Error(w(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Za(e,t,n,r,i,o){if(Kt=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zr.current=e===null||e.memoizedState===null?Pm:Em,e=n(r,i),Zn){o=0;do{if(Zn=!1,gr=0,25<=o)throw Error(w(301));o+=1,te=X=null,t.updateQueue=null,Zr.current=Nm,e=n(r,i)}while(Zn)}if(Zr.current=Ci,t=X!==null&&X.next!==null,Kt=0,te=X=H=null,Si=!1,t)throw Error(w(300));return e}function es(){var e=gr!==0;return gr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?H.memoizedState=te=e:te=te.next=e,te}function je(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=te===null?H.memoizedState:te.next;if(t!==null)te=t,X=e;else{if(e===null)throw Error(w(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},te===null?H.memoizedState=te=e:te=te.next=e}return te}function yr(e,t){return typeof t=="function"?t(e):t}function go(e){var t=je(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var p=c.lane;if((Kt&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=m,a=r):l=l.next=m,H.lanes|=p,Qt|=p}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,Be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Qt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yo(e){var t=je(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Be(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uc(){}function cc(e,t){var n=H,r=je(),i=t(),o=!Be(r.memoizedState,i);if(o&&(r.memoizedState=i,ge=!0),r=r.queue,ts(mc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,vr(9,fc.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(w(349));Kt&30||dc(n,t,i)}return i}function dc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fc(e,t,n,r){t.value=n,t.getSnapshot=r,pc(t)&&hc(e)}function mc(e,t,n){return n(function(){pc(t)&&hc(e)})}function pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function hc(e){var t=tt(e,1);t!==null&&ze(t,e,1,-1)}function ll(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:e},t.queue=e,e=e.dispatch=bm.bind(null,H,e),[t.memoizedState,e]}function vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gc(){return je().memoizedState}function ei(e,t,n,r){var i=We();H.flags|=e,i.memoizedState=vr(1|t,n,void 0,r===void 0?null:r)}function Oi(e,t,n,r){var i=je();r=r===void 0?null:r;var o=void 0;if(X!==null){var a=X.memoizedState;if(o=a.destroy,r!==null&&Xa(r,a.deps)){i.memoizedState=vr(t,n,o,r);return}}H.flags|=e,i.memoizedState=vr(1|t,n,o,r)}function ul(e,t){return ei(8390656,8,e,t)}function ts(e,t){return Oi(2048,8,e,t)}function yc(e,t){return Oi(4,2,e,t)}function vc(e,t){return Oi(4,4,e,t)}function xc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kc(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4,4,xc.bind(null,t,e),n)}function ns(){}function wc(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sc(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cc(e,t,n){return Kt&21?(Be(n,t)||(n=_u(),H.lanes|=n,Qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Sm(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=ho.transition;ho.transition={};try{e(!1),t()}finally{O=n,ho.transition=r}}function bc(){return je().memoizedState}function Cm(e,t,n){var r=Pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pc(e))Ec(t,n);else if(n=ac(e,t,n,r),n!==null){var i=fe();ze(n,e,r,i),Nc(n,t,r)}}function bm(e,t,n){var r=Pt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))Ec(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Be(s,a)){var l=t.interleaved;l===null?(i.next=i,Ka(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ac(e,t,i,r),n!==null&&(i=fe(),ze(n,e,r,i),Nc(n,t,r))}}function Pc(e){var t=e.alternate;return e===H||t!==null&&t===H}function Ec(e,t){Zn=Si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Aa(e,n)}}var Ci={readContext:Te,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Pm={readContext:Te,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:ul,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ei(4194308,4,xc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return ei(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cm.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:ll,useDebugValue:ns,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ll(!1),t=e[0];return e=Sm.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=We();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ne===null)throw Error(w(349));Kt&30||dc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ul(mc.bind(null,r,o,e),[e]),r.flags|=2048,vr(9,fc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=ne.identifierPrefix;if(V){var n=Je,r=Ye;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Em={readContext:Te,useCallback:wc,useContext:Te,useEffect:ts,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:vc,useMemo:Sc,useReducer:go,useRef:gc,useState:function(){return go(yr)},useDebugValue:ns,useDeferredValue:function(e){var t=je();return Cc(t,X.memoizedState,e)},useTransition:function(){var e=go(yr)[0],t=je().memoizedState;return[e,t]},useMutableSource:uc,useSyncExternalStore:cc,useId:bc,unstable_isNewReconciler:!1},Nm={readContext:Te,useCallback:wc,useContext:Te,useEffect:ts,useImperativeHandle:kc,useInsertionEffect:yc,useLayoutEffect:vc,useMemo:Sc,useReducer:yo,useRef:gc,useState:function(){return yo(yr)},useDebugValue:ns,useDeferredValue:function(e){var t=je();return X===null?t.memoizedState=e:Cc(t,X.memoizedState,e)},useTransition:function(){var e=yo(yr)[0],t=je().memoizedState;return[e,t]},useMutableSource:uc,useSyncExternalStore:cc,useId:bc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ea(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Pt(e),o=Xe(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ct(e,o,i),t!==null&&(ze(t,e,i,r),Xr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=Pt(e),o=Xe(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ct(e,o,i),t!==null&&(ze(t,e,i,r),Xr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=Pt(e),i=Xe(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ct(e,i,r),t!==null&&(ze(t,e,r,n),Xr(t,e,r))}};function cl(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!cr(n,r)||!cr(i,o):!0}function _c(e,t,n){var r=!1,i=Tt,o=t.contextType;return typeof o=="object"&&o!==null?o=Te(o):(i=ve(t)?Gt:ue.current,r=t.contextTypes,o=(r=r!=null)?Sn(e,i):Tt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function dl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zi.enqueueReplaceState(t,t.state,null)}function ta(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Qa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Te(o):(o=ve(t)?Gt:ue.current,i.context=Sn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ea(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zi.enqueueReplaceState(i,i.state,null),ki(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var n="",r=t;do n+=ef(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function vo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _m=typeof WeakMap=="function"?WeakMap:Map;function Rc(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pi||(Pi=!0,fa=r),na(e,t)},n}function Tc(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){na(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){na(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function fl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _m;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wm.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,Ct(n,t,1))),n.lanes|=1),e)}var Rm=it.ReactCurrentOwner,ge=!1;function de(e,t,n,r){t.child=e===null?oc(t,null,n,r):bn(t,e.child,n,r)}function hl(e,t,n,r,i){n=n.render;var o=t.ref;return vn(t,i),r=Za(e,t,n,r,o,i),n=es(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nt(e,t,i)):(V&&n&&Ua(t),t.flags|=1,de(e,t,r,i),t.child)}function gl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!cs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,jc(e,t,o,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:cr,n(a,r)&&e.ref===t.ref)return nt(e,t,i)}return t.flags|=1,e=Et(o,r),e.ref=t.ref,e.return=t,t.child=e}function jc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(cr(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,nt(e,t,i)}return ra(e,t,n,r,i)}function Ic(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(mn,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(mn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(mn,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(mn,ke),ke|=r;return de(e,t,i,n),t.child}function Ac(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ra(e,t,n,r,i){var o=ve(n)?Gt:ue.current;return o=Sn(t,o),vn(t,i),n=Za(e,t,n,r,o,i),r=es(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nt(e,t,i)):(V&&r&&Ua(t),t.flags|=1,de(e,t,n,i),t.child)}function yl(e,t,n,r,i){if(ve(n)){var o=!0;hi(t)}else o=!1;if(vn(t,i),t.stateNode===null)ti(e,t),_c(t,n,r),ta(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=ve(n)?Gt:ue.current,c=Sn(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&dl(t,a,r,c),mt=!1;var g=t.memoizedState;a.state=g,ki(t,r,a,i),l=t.memoizedState,s!==r||g!==l||ye.current||mt?(typeof p=="function"&&(ea(t,n,p,r),l=t.memoizedState),(s=mt||cl(t,n,s,r,g,l,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,sc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ae(t.type,s),a.props=c,m=t.pendingProps,g=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Te(l):(l=ve(n)?Gt:ue.current,l=Sn(t,l));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||g!==l)&&dl(t,a,r,l),mt=!1,g=t.memoizedState,a.state=g,ki(t,r,a,i);var k=t.memoizedState;s!==m||g!==k||ye.current||mt?(typeof v=="function"&&(ea(t,n,v,r),k=t.memoizedState),(c=mt||cl(t,n,c,r,g,k,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ia(e,t,n,r,o,i)}function ia(e,t,n,r,i,o){Ac(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&nl(t,n,!1),nt(e,t,o);r=t.stateNode,Rm.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=bn(t,e.child,null,o),t.child=bn(t,null,s,o)):de(e,t,s,o),t.memoizedState=r.state,i&&nl(t,n,!0),t.child}function Dc(e){var t=e.stateNode;t.pendingContext?tl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tl(e,t.context,!1),qa(e,t.containerInfo)}function vl(e,t,n,r,i){return Cn(),$a(i),t.flags|=256,de(e,t,n,r),t.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lc(e,t,n){var r=t.pendingProps,i=G.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(G,i&1),e===null)return Xo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Wi(a,r,0,null),e=Vt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=aa(n),t.memoizedState=oa,e):rs(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Tm(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Et(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Et(s,o):(o=Vt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?aa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=oa,r}return o=e.child,e=o.sibling,r=Et(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rs(e,t){return t=Wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $r(e,t,n,r){return r!==null&&$a(r),bn(t,e.child,null,n),e=rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tm(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=vo(Error(w(422))),$r(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Wi({mode:"visible",children:r.children},i,0,null),o=Vt(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bn(t,e.child,null,a),t.child.memoizedState=aa(a),t.memoizedState=oa,o);if(!(t.mode&1))return $r(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=vo(o,r,void 0),$r(e,t,a,r)}if(s=(a&e.childLanes)!==0,ge||s){if(r=ne,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tt(e,i),ze(r,e,i,-1))}return us(),r=vo(Error(w(421))),$r(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$m.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,we=St(i.nextSibling),Se=t,V=!0,Le=null,e!==null&&(Ee[Ne++]=Ye,Ee[Ne++]=Je,Ee[Ne++]=Ht,Ye=e.id,Je=e.overflow,Ht=t),t=rs(t,r.children),t.flags|=4096,t)}function xl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zo(e.return,t,n)}function xo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xl(e,n,t);else if(e.tag===19)xl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xo(t,!0,n,null,o);break;case"together":xo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jm(e,t,n){switch(t.tag){case 3:Dc(t),Cn();break;case 5:lc(t);break;case 1:ve(t.type)&&hi(t);break;case 4:qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(vi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Lc(e,t,n):(z(G,G.current&1),e=nt(e,t,n),e!==null?e.sibling:null);z(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,n)}return nt(e,t,n)}var Fc,sa,Oc,zc;Fc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sa=function(){};Oc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Wt(Ge.current);var o=null;switch(n){case"input":i=Ro(e,i),r=Ro(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Io(e,i),r=Io(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mi)}Do(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(rr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(rr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&W("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Im(e,t,n){var r=t.pendingProps;switch(Wa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&pi(),se(t),null;case 3:return r=t.stateNode,Pn(),$(ye),$(ue),Ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(ha(Le),Le=null))),sa(e,t),se(t),null;case 5:Ya(t);var i=Wt(hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Oc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=Wt(Ge.current),Ur(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$e]=t,r[mr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Kn.length;i++)W(Kn[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":_s(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Ts(r,o),W("invalid",r)}Do(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),i=["children",""+s]):rr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&W("scroll",r)}switch(n){case"input":Ir(r),Rs(r,o,!0);break;case"textarea":Ir(r),js(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=mi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[$e]=t,e[mr]=r,Fc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Lo(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kn.length;i++)W(Kn[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":_s(e,r),i=Ro(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ts(e,r),i=Io(e,r),W("invalid",e);break;default:i=r}Do(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?gu(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pu(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ir(e,l):typeof l=="number"&&ir(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(rr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&W("scroll",e):l!=null&&Na(e,o,l,a))}switch(n){case"input":Ir(e),Rs(e,r,!1);break;case"textarea":Ir(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?pn(e,!!r.multiple,o,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Wt(hr.current),Wt(Ge.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return se(t),null;case 13:if($(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&we!==null&&t.mode&1&&!(t.flags&128))rc(),Cn(),t.flags|=98560,o=!1;else if(o=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[$e]=t}else Cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Le!==null&&(ha(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?Z===0&&(Z=3):us())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Pn(),sa(e,t),e===null&&dr(t.stateNode.containerInfo),se(t),null;case 10:return Ha(t.type._context),se(t),null;case 17:return ve(t.type)&&pi(),se(t),null;case 19:if($(G),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Bn(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wi(e),a!==null){for(t.flags|=128,Bn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>Nn&&(t.flags|=128,r=!0,Bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=wi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!V)return se(t),null}else 2*q()-o.renderingStartTime>Nn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=G.current,z(G,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Am(e,t){switch(Wa(t),t.tag){case 1:return ve(t.type)&&pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),$(ye),$(ue),Ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ya(t),null;case 13:if($(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(G),null;case 4:return Pn(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return ls(),null;case 24:return null;default:return null}}var Vr=!1,le=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,E=null;function fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function la(e,t,n){try{n()}catch(r){Q(e,t,r)}}var kl=!1;function Lm(e,t){if(Go=ci,e=Vu(),Ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,p=0,m=e,g=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(s=a+i),m!==o||r!==0&&m.nodeType!==3||(l=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===n&&++c===i&&(s=a),g===o&&++p===r&&(l=a),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ho={focusedElem:e,selectionRange:n},ci=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,S=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ae(t.type,y),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){Q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return k=kl,kl=!1,k}function er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&la(t,n,o)}i=i.next}while(i!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ua(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bc(e){var t=e.alternate;t!==null&&(e.alternate=null,Bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[mr],delete t[qo],delete t[ym],delete t[vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uc(e){return e.tag===5||e.tag===3||e.tag===4}function wl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(ca(e,t,n),e=e.sibling;e!==null;)ca(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var re=null,De=!1;function lt(e,t,n){for(n=n.child;n!==null;)Wc(e,t,n),n=n.sibling}function Wc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ii,n)}catch{}switch(n.tag){case 5:le||fn(n,t);case 6:var r=re,i=De;re=null,lt(e,t,n),re=r,De=i,re!==null&&(De?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(De?(e=re,n=n.stateNode,e.nodeType===8?fo(e.parentNode,n):e.nodeType===1&&fo(e,n),lr(e)):fo(re,n.stateNode));break;case 4:r=re,i=De,re=n.stateNode.containerInfo,De=!0,lt(e,t,n),re=r,De=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&la(n,t,a),i=i.next}while(i!==r)}lt(e,t,n);break;case 1:if(!le&&(fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,lt(e,t,n),le=r):lt(e,t,n);break;default:lt(e,t,n)}}function Sl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dm),t.forEach(function(r){var i=Vm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,De=!1;break e;case 3:re=s.stateNode.containerInfo,De=!0;break e;case 4:re=s.stateNode.containerInfo,De=!0;break e}s=s.return}if(re===null)throw Error(w(160));Wc(o,a,i),re=null,De=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$c(t,e),t=t.sibling}function $c(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Ue(e),r&4){try{er(3,e,e.return),Bi(3,e)}catch(y){Q(e,e.return,y)}try{er(5,e,e.return)}catch(y){Q(e,e.return,y)}}break;case 1:Ie(t,e),Ue(e),r&512&&n!==null&&fn(n,n.return);break;case 5:if(Ie(t,e),Ue(e),r&512&&n!==null&&fn(n,n.return),e.flags&32){var i=e.stateNode;try{ir(i,"")}catch(y){Q(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&du(i,o),Lo(s,a);var c=Lo(s,o);for(a=0;a<l.length;a+=2){var p=l[a],m=l[a+1];p==="style"?gu(i,m):p==="dangerouslySetInnerHTML"?pu(i,m):p==="children"?ir(i,m):Na(i,p,m,c)}switch(s){case"input":To(i,o);break;case"textarea":fu(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?pn(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?pn(i,!!o.multiple,o.defaultValue,!0):pn(i,!!o.multiple,o.multiple?[]:"",!1))}i[mr]=o}catch(y){Q(e,e.return,y)}}break;case 6:if(Ie(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Q(e,e.return,y)}}break;case 3:if(Ie(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(y){Q(e,e.return,y)}break;case 4:Ie(t,e),Ue(e);break;case 13:Ie(t,e),Ue(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(as=q())),r&4&&Sl(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||p,Ie(t,e),le=c):Ie(t,e),Ue(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(E=e,p=e.child;p!==null;){for(m=E=p;E!==null;){switch(g=E,v=g.child,g.tag){case 0:case 11:case 14:case 15:er(4,g,g.return);break;case 1:fn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){Q(r,n,y)}}break;case 5:fn(g,g.return);break;case 22:if(g.memoizedState!==null){bl(m);continue}}v!==null?(v.return=g,E=v):bl(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,l=m.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=hu("display",a))}catch(y){Q(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){Q(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ie(t,e),Ue(e),r&4&&Sl(e);break;case 21:break;default:Ie(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ir(i,""),r.flags&=-33);var o=wl(e);da(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=wl(e);ca(e,s,a);break;default:throw Error(w(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mm(e,t,n){E=e,Vc(e)}function Vc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Vr;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||le;s=Vr;var c=le;if(Vr=a,(le=l)&&!c)for(E=i;E!==null;)a=E,l=a.child,a.tag===22&&a.memoizedState!==null?Pl(i):l!==null?(l.return=a,E=l):Pl(i);for(;o!==null;)E=o,Vc(o),o=o.sibling;E=i,Vr=s,le=c}Cl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,E=o):Cl(e)}}function Cl(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&sl(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sl(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&lr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&ua(t)}catch(g){Q(t,t.return,g)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function bl(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Pl(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var o=t.return;try{ua(t)}catch(l){Q(t,o,l)}break;case 5:var a=t.return;try{ua(t)}catch(l){Q(t,a,l)}}}catch(l){Q(t,t.return,l)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Fm=Math.ceil,bi=it.ReactCurrentDispatcher,is=it.ReactCurrentOwner,Re=it.ReactCurrentBatchConfig,L=0,ne=null,J=null,ie=0,ke=0,mn=It(0),Z=0,xr=null,Qt=0,Ui=0,os=0,tr=null,he=null,as=0,Nn=1/0,Qe=null,Pi=!1,fa=null,bt=null,Gr=!1,yt=null,Ei=0,nr=0,ma=null,ni=-1,ri=0;function fe(){return L&6?q():ni!==-1?ni:ni=q()}function Pt(e){return e.mode&1?L&2&&ie!==0?ie&-ie:km.transition!==null?(ri===0&&(ri=_u()),ri):(e=O,e!==0||(e=window.event,e=e===void 0?16:Lu(e.type)),e):1}function ze(e,t,n,r){if(50<nr)throw nr=0,ma=null,Error(w(185));Cr(e,n,r),(!(L&2)||e!==ne)&&(e===ne&&(!(L&2)&&(Ui|=n),Z===4&&ht(e,ie)),xe(e,r),n===1&&L===0&&!(t.mode&1)&&(Nn=q()+500,Fi&&At()))}function xe(e,t){var n=e.callbackNode;kf(e,t);var r=ui(e,e===ne?ie:0);if(r===0)n!==null&&Ds(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ds(n),t===1)e.tag===0?xm(El.bind(null,e)):ec(El.bind(null,e)),hm(function(){!(L&6)&&At()}),n=null;else{switch(Ru(r)){case 1:n=Ia;break;case 4:n=Eu;break;case 16:n=li;break;case 536870912:n=Nu;break;default:n=li}n=Xc(n,Gc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gc(e,t){if(ni=-1,ri=0,L&6)throw Error(w(327));var n=e.callbackNode;if(xn()&&e.callbackNode!==n)return null;var r=ui(e,e===ne?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ni(e,r);else{t=r;var i=L;L|=2;var o=Kc();(ne!==e||ie!==t)&&(Qe=null,Nn=q()+500,$t(e,t));do try{Bm();break}catch(s){Hc(e,s)}while(!0);Ga(),bi.current=o,L=i,J!==null?t=0:(ne=null,ie=0,t=Z)}if(t!==0){if(t===2&&(i=Bo(e),i!==0&&(r=i,t=pa(e,i))),t===1)throw n=xr,$t(e,0),ht(e,r),xe(e,q()),n;if(t===6)ht(e,r);else{if(i=e.current.alternate,!(r&30)&&!Om(i)&&(t=Ni(e,r),t===2&&(o=Bo(e),o!==0&&(r=o,t=pa(e,o))),t===1))throw n=xr,$t(e,0),ht(e,r),xe(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:zt(e,he,Qe);break;case 3:if(ht(e,r),(r&130023424)===r&&(t=as+500-q(),10<t)){if(ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qo(zt.bind(null,e,he,Qe),t);break}zt(e,he,Qe);break;case 4:if(ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Oe(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fm(r/1960))-r,10<r){e.timeoutHandle=Qo(zt.bind(null,e,he,Qe),r);break}zt(e,he,Qe);break;case 5:zt(e,he,Qe);break;default:throw Error(w(329))}}}return xe(e,q()),e.callbackNode===n?Gc.bind(null,e):null}function pa(e,t){var n=tr;return e.current.memoizedState.isDehydrated&&($t(e,t).flags|=256),e=Ni(e,t),e!==2&&(t=he,he=n,t!==null&&ha(t)),e}function ha(e){he===null?he=e:he.push.apply(he,e)}function Om(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~os,t&=~Ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function El(e){if(L&6)throw Error(w(327));xn();var t=ui(e,0);if(!(t&1))return xe(e,q()),null;var n=Ni(e,t);if(e.tag!==0&&n===2){var r=Bo(e);r!==0&&(t=r,n=pa(e,r))}if(n===1)throw n=xr,$t(e,0),ht(e,t),xe(e,q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,he,Qe),xe(e,q()),null}function ss(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Nn=q()+500,Fi&&At())}}function qt(e){yt!==null&&yt.tag===0&&!(L&6)&&xn();var t=L;L|=1;var n=Re.transition,r=O;try{if(Re.transition=null,O=1,e)return e()}finally{O=r,Re.transition=n,L=t,!(L&6)&&At()}}function ls(){ke=mn.current,$(mn)}function $t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pm(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(Wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pi();break;case 3:Pn(),$(ye),$(ue),Ja();break;case 5:Ya(r);break;case 4:Pn();break;case 13:$(G);break;case 19:$(G);break;case 10:Ha(r.type._context);break;case 22:case 23:ls()}n=n.return}if(ne=e,J=e=Et(e.current,null),ie=ke=t,Z=0,xr=null,os=Ui=Qt=0,he=tr=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Ut=null}return e}function Hc(e,t){do{var n=J;try{if(Ga(),Zr.current=Ci,Si){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Si=!1}if(Kt=0,te=X=H=null,Zn=!1,gr=0,is.current=null,n===null||n.return===null){Z=1,xr=t,J=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=ie,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=s,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=ml(a);if(v!==null){v.flags&=-257,pl(v,a,s,o,t),v.mode&1&&fl(o,c,t),t=v,l=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(l),t.updateQueue=y}else k.add(l);break e}else{if(!(t&1)){fl(o,c,t),us();break e}l=Error(w(426))}}else if(V&&s.mode&1){var S=ml(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),pl(S,a,s,o,t),$a(En(l,s));break e}}o=l=En(l,s),Z!==4&&(Z=2),tr===null?tr=[o]:tr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Rc(o,l,t);al(o,f);break e;case 1:s=l;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(bt===null||!bt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Tc(o,s,t);al(o,x);break e}}o=o.return}while(o!==null)}qc(n)}catch(b){t=b,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Kc(){var e=bi.current;return bi.current=Ci,e===null?Ci:e}function us(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(Qt&268435455)&&!(Ui&268435455)||ht(ne,ie)}function Ni(e,t){var n=L;L|=2;var r=Kc();(ne!==e||ie!==t)&&(Qe=null,$t(e,t));do try{zm();break}catch(i){Hc(e,i)}while(!0);if(Ga(),L=n,bi.current=r,J!==null)throw Error(w(261));return ne=null,ie=0,Z}function zm(){for(;J!==null;)Qc(J)}function Bm(){for(;J!==null&&!df();)Qc(J)}function Qc(e){var t=Jc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?qc(e):J=t,is.current=null}function qc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Am(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,J=null;return}}else if(n=Im(n,t,ke),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Z===0&&(Z=5)}function zt(e,t,n){var r=O,i=Re.transition;try{Re.transition=null,O=1,Um(e,t,n,r)}finally{Re.transition=i,O=r}return null}function Um(e,t,n,r){do xn();while(yt!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(wf(e,o),e===ne&&(J=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gr||(Gr=!0,Xc(li,function(){return xn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var a=O;O=1;var s=L;L|=4,is.current=null,Lm(e,n),$c(n,e),sm(Ho),ci=!!Go,Ho=Go=null,e.current=n,Mm(n),ff(),L=s,O=a,Re.transition=o}else e.current=n;if(Gr&&(Gr=!1,yt=e,Ei=i),o=e.pendingLanes,o===0&&(bt=null),hf(n.stateNode),xe(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pi)throw Pi=!1,e=fa,fa=null,e;return Ei&1&&e.tag!==0&&xn(),o=e.pendingLanes,o&1?e===ma?nr++:(nr=0,ma=e):nr=0,At(),null}function xn(){if(yt!==null){var e=Ru(Ei),t=Re.transition,n=O;try{if(Re.transition=null,O=16>e?16:e,yt===null)var r=!1;else{if(e=yt,yt=null,Ei=0,L&6)throw Error(w(331));var i=L;for(L|=4,E=e.current;E!==null;){var o=E,a=o.child;if(E.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(E=c;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:er(8,p,o)}var m=p.child;if(m!==null)m.return=p,E=m;else for(;E!==null;){p=E;var g=p.sibling,v=p.return;if(Bc(p),p===c){E=null;break}if(g!==null){g.return=v,E=g;break}E=v}}}var k=o.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}E=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,E=a;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:er(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,E=f;break e}E=o.return}}var d=e.current;for(E=d;E!==null;){a=E;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,E=h;else e:for(a=d;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bi(9,s)}}catch(b){Q(s,s.return,b)}if(s===a){E=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,E=x;break e}E=s.return}}if(L=i,At(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ii,e)}catch{}r=!0}return r}finally{O=n,Re.transition=t}}return!1}function Nl(e,t,n){t=En(n,t),t=Rc(e,t,1),e=Ct(e,t,1),t=fe(),e!==null&&(Cr(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)Nl(e,e,n);else for(;t!==null;){if(t.tag===3){Nl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=En(n,e),e=Tc(t,e,1),t=Ct(t,e,1),e=fe(),t!==null&&(Cr(t,1,e),xe(t,e));break}}t=t.return}}function Wm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ie&n)===n&&(Z===4||Z===3&&(ie&130023424)===ie&&500>q()-as?$t(e,0):os|=n),xe(e,t)}function Yc(e,t){t===0&&(e.mode&1?(t=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):t=1);var n=fe();e=tt(e,t),e!==null&&(Cr(e,t,n),xe(e,n))}function $m(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yc(e,n)}function Vm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Yc(e,n)}var Jc;Jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,jm(e,t,n);ge=!!(e.flags&131072)}else ge=!1,V&&t.flags&1048576&&tc(t,yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ti(e,t),e=t.pendingProps;var i=Sn(t,ue.current);vn(t,n),i=Za(null,t,r,e,i,n);var o=es();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,hi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qa(t),i.updater=zi,t.stateNode=i,i._reactInternals=t,ta(t,r,e,n),t=ia(null,t,r,!0,o,n)):(t.tag=0,V&&o&&Ua(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ti(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hm(r),e=Ae(r,e),i){case 0:t=ra(null,t,r,e,n);break e;case 1:t=yl(null,t,r,e,n);break e;case 11:t=hl(null,t,r,e,n);break e;case 14:t=gl(null,t,r,Ae(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),ra(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),yl(e,t,r,i,n);case 3:e:{if(Dc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sc(e,t),ki(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=En(Error(w(423)),t),t=vl(e,t,r,n,i);break e}else if(r!==i){i=En(Error(w(424)),t),t=vl(e,t,r,n,i);break e}else for(we=St(t.stateNode.containerInfo.firstChild),Se=t,V=!0,Le=null,n=oc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===i){t=nt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return lc(t),e===null&&Xo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ko(r,i)?a=null:o!==null&&Ko(r,o)&&(t.flags|=32),Ac(e,t),de(e,t,a,n),t.child;case 6:return e===null&&Xo(t),null;case 13:return Lc(e,t,n);case 4:return qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),hl(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,z(vi,r._currentValue),r._currentValue=a,o!==null)if(Be(o.value,a)){if(o.children===i.children&&!ye.current){t=nt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Xe(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zo(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(w(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Zo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vn(t,n),i=Te(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Ae(r,t.pendingProps),i=Ae(r.type,i),gl(e,t,r,i,n);case 15:return jc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),ti(e,t),t.tag=1,ve(r)?(e=!0,hi(t)):e=!1,vn(t,n),_c(t,r,i),ta(t,r,i,n),ia(null,t,r,!0,e,n);case 19:return Mc(e,t,n);case 22:return Ic(e,t,n)}throw Error(w(156,t.tag))};function Xc(e,t){return Pu(e,t)}function Gm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new Gm(e,t,n,r)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hm(e){if(typeof e=="function")return cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ra)return 11;if(e===Ta)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ii(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")cs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case nn:return Vt(n.children,i,o,t);case _a:a=8,i|=8;break;case Po:return e=_e(12,n,t,i|2),e.elementType=Po,e.lanes=o,e;case Eo:return e=_e(13,n,t,i),e.elementType=Eo,e.lanes=o,e;case No:return e=_e(19,n,t,i),e.elementType=No,e.lanes=o,e;case lu:return Wi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:a=10;break e;case su:a=9;break e;case Ra:a=11;break e;case Ta:a=14;break e;case ft:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=_e(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Wi(e,t,n,r){return e=_e(22,e,r,t),e.elementType=lu,e.lanes=n,e.stateNode={isHidden:!1},e}function ko(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function wo(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Km(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ds(e,t,n,r,i,o,a,s,l){return e=new Km(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(o),e}function Qm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zc(e){if(!e)return Tt;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return Zu(e,n,t)}return t}function ed(e,t,n,r,i,o,a,s,l){return e=ds(n,r,!0,e,i,o,a,s,l),e.context=Zc(null),n=e.current,r=fe(),i=Pt(n),o=Xe(r,i),o.callback=t??null,Ct(n,o,i),e.current.lanes=i,Cr(e,i,r),xe(e,r),e}function $i(e,t,n,r){var i=t.current,o=fe(),a=Pt(i);return n=Zc(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ct(i,t,a),e!==null&&(ze(e,i,a,o),Xr(e,i,a)),a}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _l(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fs(e,t){_l(e,t),(e=e.alternate)&&_l(e,t)}function qm(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function ms(e){this._internalRoot=e}Vi.prototype.render=ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));$i(e,t,null,null)};Vi.prototype.unmount=ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){$i(null,e,null,null)}),t[et]=null}};function Vi(e){this._internalRoot=e}Vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&Du(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rl(){}function Ym(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=_i(a);o.call(c)}}var a=ed(t,r,e,0,null,!1,!1,"",Rl);return e._reactRootContainer=a,e[et]=a.current,dr(e.nodeType===8?e.parentNode:e),qt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=_i(l);s.call(c)}}var l=ds(e,0,!1,null,null,!1,!1,"",Rl);return e._reactRootContainer=l,e[et]=l.current,dr(e.nodeType===8?e.parentNode:e),qt(function(){$i(t,l,n,r)}),l}function Hi(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=_i(a);s.call(l)}}$i(t,a,e,i)}else a=Ym(n,t,e,i,r);return _i(a)}Tu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(Aa(t,n|1),xe(t,q()),!(L&6)&&(Nn=q()+500,At()))}break;case 13:qt(function(){var r=tt(e,1);if(r!==null){var i=fe();ze(r,e,1,i)}}),fs(e,1)}};Da=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var n=fe();ze(t,e,134217728,n)}fs(e,134217728)}};ju=function(e){if(e.tag===13){var t=Pt(e),n=tt(e,t);if(n!==null){var r=fe();ze(n,e,t,r)}fs(e,t)}};Iu=function(){return O};Au=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};Fo=function(e,t,n){switch(t){case"input":if(To(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mi(r);if(!i)throw Error(w(90));cu(r),To(r,i)}}}break;case"textarea":fu(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};xu=ss;ku=qt;var Jm={usingClientEntryPoint:!1,Events:[Pr,sn,Mi,yu,vu,ss]},Un={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xm={bundleType:Un.bundleType,version:Un.version,rendererPackageName:Un.rendererPackageName,rendererConfig:Un.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cu(e),e===null?null:e.stateNode},findFiberByHostInstance:Un.findFiberByHostInstance||qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{Ii=Hr.inject(Xm),Ve=Hr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jm;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(t))throw Error(w(200));return Qm(e,t,null,n)};be.createRoot=function(e,t){if(!ps(e))throw Error(w(299));var n=!1,r="",i=td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ds(e,1,!1,null,null,n,!1,r,i),e[et]=t.current,dr(e.nodeType===8?e.parentNode:e),new ms(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Cu(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return qt(e)};be.hydrate=function(e,t,n){if(!Gi(t))throw Error(w(200));return Hi(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!ps(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=td;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ed(t,null,e,1,n??null,i,!1,o,a),e[et]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vi(t)};be.render=function(e,t,n){if(!Gi(t))throw Error(w(200));return Hi(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Gi(e))throw Error(w(40));return e._reactRootContainer?(qt(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};be.unstable_batchedUpdates=ss;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gi(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Hi(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd)}catch(e){console.error(e)}}nd(),nu.exports=be;var Zm=nu.exports,rd,Tl=Zm;rd=Tl.createRoot,Tl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kr(){return kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kr.apply(this,arguments)}var vt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vt||(vt={}));const jl="popstate";function ep(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return ga("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ri(i)}return np(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tp(){return Math.random().toString(36).substr(2,8)}function Il(e,t){return{usr:e.state,key:e.key,idx:t}}function ga(e,t,n,r){return n===void 0&&(n=null),kr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jn(t):t,{state:n,key:t&&t.key||r||tp()})}function Ri(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function np(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=vt.Pop,l=null,c=p();c==null&&(c=0,a.replaceState(kr({},a.state,{idx:c}),""));function p(){return(a.state||{idx:null}).idx}function m(){s=vt.Pop;let S=p(),f=S==null?null:S-c;c=S,l&&l({action:s,location:y.location,delta:f})}function g(S,f){s=vt.Push;let d=ga(y.location,S,f);c=p()+1;let h=Il(d,c),x=y.createHref(d);try{a.pushState(h,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(x)}o&&l&&l({action:s,location:y.location,delta:1})}function v(S,f){s=vt.Replace;let d=ga(y.location,S,f);c=p();let h=Il(d,c),x=y.createHref(d);a.replaceState(h,"",x),o&&l&&l({action:s,location:y.location,delta:0})}function k(S){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:Ri(S);return d=d.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let y={get action(){return s},get location(){return e(i,a)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jl,m),l=S,()=>{i.removeEventListener(jl,m),l=null}},createHref(S){return t(i,S)},createURL:k,encodeLocation(S){let f=k(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(S){return a.go(S)}};return y}var Al;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Al||(Al={}));function rp(e,t,n){return n===void 0&&(n="/"),ip(e,t,n)}function ip(e,t,n,r){let i=typeof t=="string"?jn(t):t,o=gs(i.pathname||"/",n);if(o==null)return null;let a=id(e);op(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let c=yp(o);s=pp(a[l],c)}return s}function id(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Nt([r,l.relativePath]),p=n.concat(l);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),id(o.children,t,p,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:fp(c,o.index),routesMeta:p})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of od(o.path))i(o,a,l)}),t}function od(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=od(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function op(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ap=/^:[\w-]+$/,sp=3,lp=2,up=1,cp=10,dp=-2,Dl=e=>e==="*";function fp(e,t){let n=e.split("/"),r=n.length;return n.some(Dl)&&(r+=dp),t&&(r+=lp),n.filter(i=>!Dl(i)).reduce((i,o)=>i+(ap.test(o)?sp:o===""?up:cp),r)}function mp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function pp(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],c=s===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",m=hp({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},p),g=l.route;if(!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:Nt([o,m.pathname]),pathnameBase:Sp(Nt([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=Nt([o,m.pathnameBase]))}return a}function hp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,p,m)=>{let{paramName:g,isOptional:v}=p;if(g==="*"){let y=s[m]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const k=s[m];return v&&!k?c[g]=void 0:c[g]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function gp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function yp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const vp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xp=e=>vp.test(e);function kp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jn(e):e,o;if(n)if(xp(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),hs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Ll(n.substring(1),"/"):o=Ll(n,t)}else o=t;return{pathname:o,search:Cp(r),hash:bp(i)}}function Ll(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function So(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ys(e,t){let n=wp(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vs(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=jn(e):(i=kr({},e),Y(!i.pathname||!i.pathname.includes("?"),So("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),So("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),So("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let m=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}s=m>=0?t[m]:"/"}let l=kp(i,s),c=a&&a!=="/"&&a.endsWith("/"),p=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||p)&&(l.pathname+="/"),l}const Nt=e=>e.join("/").replace(/\/\/+/g,"/"),Sp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ad=["post","put","patch","delete"];new Set(ad);const Ep=["get",...ad];new Set(Ep);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wr.apply(this,arguments)}const xs=C.createContext(null),Np=C.createContext(null),Dt=C.createContext(null),Ki=C.createContext(null),ot=C.createContext({outlet:null,matches:[],isDataRoute:!1}),sd=C.createContext(null);function _p(e,t){let{relative:n}=t===void 0?{}:t;In()||Y(!1);let{basename:r,navigator:i}=C.useContext(Dt),{hash:o,pathname:a,search:s}=dd(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Nt([r,a])),i.createHref({pathname:l,search:s,hash:o})}function In(){return C.useContext(Ki)!=null}function Xt(){return In()||Y(!1),C.useContext(Ki).location}function ld(e){C.useContext(Dt).static||C.useLayoutEffect(e)}function ud(){let{isDataRoute:e}=C.useContext(ot);return e?Up():Rp()}function Rp(){In()||Y(!1);let e=C.useContext(xs),{basename:t,future:n,navigator:r}=C.useContext(Dt),{matches:i}=C.useContext(ot),{pathname:o}=Xt(),a=JSON.stringify(ys(i,n.v7_relativeSplatPath)),s=C.useRef(!1);return ld(()=>{s.current=!0}),C.useCallback(function(c,p){if(p===void 0&&(p={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let m=vs(c,JSON.parse(a),o,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Nt([t,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[t,r,a,o,e])}function cd(){let{matches:e}=C.useContext(ot),t=e[e.length-1];return t?t.params:{}}function dd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Dt),{matches:i}=C.useContext(ot),{pathname:o}=Xt(),a=JSON.stringify(ys(i,r.v7_relativeSplatPath));return C.useMemo(()=>vs(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function Tp(e,t){return jp(e,t)}function jp(e,t,n,r){In()||Y(!1);let{navigator:i}=C.useContext(Dt),{matches:o}=C.useContext(ot),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Xt(),p;if(t){var m;let S=typeof t=="string"?jn(t):t;l==="/"||(m=S.pathname)!=null&&m.startsWith(l)||Y(!1),p=S}else p=c;let g=p.pathname||"/",v=g;if(l!=="/"){let S=l.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let k=rp(e,{pathname:v}),y=Mp(k&&k.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:Nt([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Nt([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&y?C.createElement(Ki.Provider,{value:{location:wr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:vt.Pop}},y):y}function Ip(){let e=Bp(),t=Pp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const Ap=C.createElement(Ip,null);class Dp extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(ot.Provider,{value:this.props.routeContext},C.createElement(sd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lp(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(xs);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(ot.Provider,{value:t},r)}function Mp(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let p=a.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);p>=0||Y(!1),a=a.slice(0,Math.min(a.length,p+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:g,errors:v}=n,k=m.route.loader&&g[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||k){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((p,m,g)=>{let v,k=!1,y=null,S=null;n&&(v=s&&m.route.id?s[m.route.id]:void 0,y=m.route.errorElement||Ap,l&&(c<0&&g===0?(Wp("route-fallback"),k=!0,S=null):c===g&&(k=!0,S=m.route.hydrateFallbackElement||null)));let f=t.concat(a.slice(0,g+1)),d=()=>{let h;return v?h=y:k?h=S:m.route.Component?h=C.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=p,C.createElement(Lp,{match:m,routeContext:{outlet:p,matches:f,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?C.createElement(Dp,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var fd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fd||{}),md=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(md||{});function Fp(e){let t=C.useContext(xs);return t||Y(!1),t}function Op(e){let t=C.useContext(Np);return t||Y(!1),t}function zp(e){let t=C.useContext(ot);return t||Y(!1),t}function pd(e){let t=zp(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Bp(){var e;let t=C.useContext(sd),n=Op(),r=pd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Up(){let{router:e}=Fp(fd.UseNavigateStable),t=pd(md.UseNavigateStable),n=C.useRef(!1);return ld(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,wr({fromRouteId:t},o)))},[e,t])}const Ml={};function Wp(e,t,n){Ml[e]||(Ml[e]=!0)}function $p(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ks(e){let{to:t,replace:n,state:r,relative:i}=e;In()||Y(!1);let{future:o,static:a}=C.useContext(Dt),{matches:s}=C.useContext(ot),{pathname:l}=Xt(),c=ud(),p=vs(t,ys(s,o.v7_relativeSplatPath),l,i==="path"),m=JSON.stringify(p);return C.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:i}),[c,m,i,n,r]),null}function dt(e){Y(!1)}function Vp(e){let{basename:t="/",children:n=null,location:r,navigationType:i=vt.Pop,navigator:o,static:a=!1,future:s}=e;In()&&Y(!1);let l=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:l,navigator:o,static:a,future:wr({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=jn(r));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:k="default"}=r,y=C.useMemo(()=>{let S=gs(p,l);return S==null?null:{location:{pathname:S,search:m,hash:g,state:v,key:k},navigationType:i}},[l,p,m,g,v,k,i]);return y==null?null:C.createElement(Dt.Provider,{value:c},C.createElement(Ki.Provider,{children:n,value:y}))}function Gp(e){let{children:t,location:n}=e;return Tp(ya(t),n)}new Promise(()=>{});function ya(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,ya(r.props.children,o));return}r.type!==dt&&Y(!1),!r.props.index||!r.props.children||Y(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ya(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}function Hp(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Kp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qp(e,t){return e.button===0&&(!t||t==="_self")&&!Kp(e)}const qp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Yp="6";try{window.__reactRouterVersion=Yp}catch{}const Jp="startTransition",Fl=Ud[Jp];function Xp(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=ep({window:i,v5Compat:!0}));let a=o.current,[s,l]=C.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},p=C.useCallback(m=>{c&&Fl?Fl(()=>l(m)):l(m)},[l,c]);return C.useLayoutEffect(()=>a.listen(p),[a,p]),C.useEffect(()=>$p(r),[r]),C.createElement(Vp,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const Zp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,He=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:c,preventScrollReset:p,viewTransition:m}=t,g=Hp(t,qp),{basename:v}=C.useContext(Dt),k,y=!1;if(typeof c=="string"&&eh.test(c)&&(k=c,Zp))try{let h=new URL(window.location.href),x=c.startsWith("//")?new URL(h.protocol+c):new URL(c),b=gs(x.pathname,v);x.origin===h.origin&&b!=null?c=b+x.search+x.hash:y=!0}catch{}let S=_p(c,{relative:i}),f=th(c,{replace:a,state:s,target:l,preventScrollReset:p,relative:i,viewTransition:m});function d(h){r&&r(h),h.defaultPrevented||f(h)}return C.createElement("a",va({},g,{href:k||S,onClick:y||o?r:d,ref:n,target:l}))});var Ol;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ol||(Ol={}));var zl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zl||(zl={}));function th(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,l=ud(),c=Xt(),p=dd(e,{relative:a});return C.useCallback(m=>{if(Qp(m,n)){m.preventDefault();let g=r!==void 0?r:Ri(c)===Ri(p);l(e,{replace:g,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[c,l,p,r,i,n,e,o,a,s])}function hd(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=hd(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function nh(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=hd(e))&&(r&&(r+=" "),r+=t);return r}const ws="-",rh=e=>{const t=oh(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{const s=a.split(ws);return s[0]===""&&s.length!==1&&s.shift(),gd(s,t)||ih(a)},getConflictingClassGroupIds:(a,s)=>{const l=n[a]||[];return s&&r[a]?[...l,...r[a]]:l}}},gd=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?gd(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(ws);return(a=t.validators.find(({validator:s})=>s(o)))==null?void 0:a.classGroupId},Bl=/^\[(.+)\]$/,ih=e=>{if(Bl.test(e)){const t=Bl.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},oh=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return sh(Object.entries(e.classGroups),n).forEach(([o,a])=>{xa(a,r,o,t)}),r},xa=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:Ul(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(ah(i)){xa(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,a])=>{xa(a,Ul(t,o),n,r)})})},Ul=(e,t)=>{let n=e;return t.split(ws).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},ah=e=>e.isThemeGetter,sh=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([a,s])=>[t+a,s])):o);return[n,i]}):e,lh=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,a)=>{n.set(o,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let a=n.get(o);if(a!==void 0)return a;if((a=r.get(o))!==void 0)return i(o,a),a},set(o,a){n.has(o)?n.set(o,a):i(o,a)}}},yd="!",uh=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,a=s=>{const l=[];let c=0,p=0,m;for(let S=0;S<s.length;S++){let f=s[S];if(c===0){if(f===i&&(r||s.slice(S,S+o)===t)){l.push(s.slice(p,S)),p=S+o;continue}if(f==="/"){m=S;continue}}f==="["?c++:f==="]"&&c--}const g=l.length===0?s:s.substring(p),v=g.startsWith(yd),k=v?g.substring(1):g,y=m&&m>p?m-p:void 0;return{modifiers:l,hasImportantModifier:v,baseClassName:k,maybePostfixModifierPosition:y}};return n?s=>n({className:s,parseClassName:a}):a},ch=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},dh=e=>({cache:lh(e.cacheSize),parseClassName:uh(e),...rh(e)}),fh=/\s+/,mh=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],a=e.trim().split(fh);let s="";for(let l=a.length-1;l>=0;l-=1){const c=a[l],{modifiers:p,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:v}=n(c);let k=!!v,y=r(k?g.substring(0,v):g);if(!y){if(!k){s=c+(s.length>0?" "+s:s);continue}if(y=r(g),!y){s=c+(s.length>0?" "+s:s);continue}k=!1}const S=ch(p).join(":"),f=m?S+yd:S,d=f+y;if(o.includes(d))continue;o.push(d);const h=i(y,k);for(let x=0;x<h.length;++x){const b=h[x];o.push(f+b)}s=c+(s.length>0?" "+s:s)}return s};function ph(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=vd(t))&&(r&&(r+=" "),r+=n);return r}const vd=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=vd(e[r]))&&(n&&(n+=" "),n+=t);return n};function hh(e,...t){let n,r,i,o=a;function a(l){const c=t.reduce((p,m)=>m(p),e());return n=dh(c),r=n.cache.get,i=n.cache.set,o=s,s(l)}function s(l){const c=r(l);if(c)return c;const p=mh(l,n);return i(l,p),p}return function(){return o(ph.apply(null,arguments))}}const U=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},xd=/^\[(?:([a-z-]+):)?(.+)\]$/i,gh=/^\d+\/\d+$/,yh=new Set(["px","full","screen"]),vh=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xh=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,kh=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,wh=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Sh=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ke=e=>kn(e)||yh.has(e)||gh.test(e),ut=e=>An(e,"length",Th),kn=e=>!!e&&!Number.isNaN(Number(e)),Co=e=>An(e,"number",kn),Wn=e=>!!e&&Number.isInteger(Number(e)),Ch=e=>e.endsWith("%")&&kn(e.slice(0,-1)),I=e=>xd.test(e),ct=e=>vh.test(e),bh=new Set(["length","size","percentage"]),Ph=e=>An(e,bh,kd),Eh=e=>An(e,"position",kd),Nh=new Set(["image","url"]),_h=e=>An(e,Nh,Ih),Rh=e=>An(e,"",jh),$n=()=>!0,An=(e,t,n)=>{const r=xd.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Th=e=>xh.test(e)&&!kh.test(e),kd=()=>!1,jh=e=>wh.test(e),Ih=e=>Sh.test(e),Ah=()=>{const e=U("colors"),t=U("spacing"),n=U("blur"),r=U("brightness"),i=U("borderColor"),o=U("borderRadius"),a=U("borderSpacing"),s=U("borderWidth"),l=U("contrast"),c=U("grayscale"),p=U("hueRotate"),m=U("invert"),g=U("gap"),v=U("gradientColorStops"),k=U("gradientColorStopPositions"),y=U("inset"),S=U("margin"),f=U("opacity"),d=U("padding"),h=U("saturate"),x=U("scale"),b=U("sepia"),N=U("skew"),_=U("space"),R=U("translate"),B=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],ce=()=>["auto",I,t],F=()=>[I,t],at=()=>["",Ke,ut],Lt=()=>["auto",kn,I],Nr=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],st=()=>["solid","dashed","dotted","double","none"],Zt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",I],j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>[kn,I];return{cacheSize:500,separator:":",theme:{colors:[$n],spacing:[Ke,ut],blur:["none","",ct,I],brightness:M(),borderColor:[e],borderRadius:["none","","full",ct,I],borderSpacing:F(),borderWidth:at(),contrast:M(),grayscale:T(),hueRotate:M(),invert:T(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[Ch,ut],inset:ce(),margin:ce(),opacity:M(),padding:F(),saturate:M(),scale:M(),sepia:T(),skew:M(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",I]}],container:["container"],columns:[{columns:[ct]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Nr(),I]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Wn,I]}],basis:[{basis:ce()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",I]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",Wn,I]}],"grid-cols":[{"grid-cols":[$n]}],"col-start-end":[{col:["auto",{span:["full",Wn,I]},I]}],"col-start":[{"col-start":Lt()}],"col-end":[{"col-end":Lt()}],"grid-rows":[{"grid-rows":[$n]}],"row-start-end":[{row:["auto",{span:[Wn,I]},I]}],"row-start":[{"row-start":Lt()}],"row-end":[{"row-end":Lt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",I]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",I]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[d]}],px:[{px:[d]}],py:[{py:[d]}],ps:[{ps:[d]}],pe:[{pe:[d]}],pt:[{pt:[d]}],pr:[{pr:[d]}],pb:[{pb:[d]}],pl:[{pl:[d]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",I,t]}],"min-w":[{"min-w":[I,t,"min","max","fit"]}],"max-w":[{"max-w":[I,t,"none","full","min","max","fit","prose",{screen:[ct]},ct]}],h:[{h:[I,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[I,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[I,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[I,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ct,ut]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Co]}],"font-family":[{font:[$n]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",I]}],"line-clamp":[{"line-clamp":["none",kn,Co]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ke,I]}],"list-image":[{"list-image":["none",I]}],"list-style-type":[{list:["none","disc","decimal",I]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...st(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ke,ut]}],"underline-offset":[{"underline-offset":["auto",Ke,I]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Nr(),Eh]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ph]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},_h]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...st(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:st()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...st()]}],"outline-offset":[{"outline-offset":[Ke,I]}],"outline-w":[{outline:[Ke,ut]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:at()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Ke,ut]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ct,Rh]}],"shadow-color":[{shadow:[$n]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...Zt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Zt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ct,I]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[m]}],saturate:[{saturate:[h]}],sepia:[{sepia:[b]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[h]}],"backdrop-sepia":[{"backdrop-sepia":[b]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",I]}],duration:[{duration:M()}],ease:[{ease:["linear","in","out","in-out",I]}],delay:[{delay:M()}],animate:[{animate:["none","spin","ping","pulse","bounce",I]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Wn,I]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",I]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",I]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",I]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ke,ut,Co]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Dh=hh(Ah);function _t(...e){return Dh(nh(e))}const Lh=()=>{const[e,t]=C.useState(()=>{const r=localStorage.getItem("theme");return r||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});return C.useEffect(()=>{const r=document.documentElement;e==="dark"?r.classList.add("dark"):r.classList.remove("dark"),localStorage.setItem("theme",e)},[e]),{theme:e,toggleTheme:()=>{t(r=>r==="light"?"dark":"light")}}},Me={name:"Abhimanyu Kumbhar",title:"Software Development Engineer",tagline:"Backend-focused engineer specializing in scalable payment and data systems",bio:"Backend-focused Software Engineer with ~3 years of experience designing and scaling payment and data systems at Razorpay and Inkle. Strong in Golang, Python, Kafka, and AWS, with hands-on experience in microservices, distributed processing, and high-throughput system reliability. Passionate about building robust, efficient systems that handle real-world scale.",resume:"https://drive.google.com/file/d/1U3YmaKLvt-iVs20sYIa59D1g9dUE76mR/view?usp=sharing"},Mh=[{platform:"GitHub",url:"https://github.com/Abhimanyu-K",icon:"github"},{platform:"LinkedIn",url:"https://linkedin.com/in/abhimanyukumbhar",icon:"linkedin"},{platform:"Email",url:"mailto:abhimanyukumbharc@gmail.com",icon:"email"}],Wl=[{name:"Home",path:"/"},{name:"Projects",path:"/projects"},{name:"Experience",path:"/experience"},{name:"Blog",path:"/blog"}],Fh=()=>{const[e,t]=C.useState(!1),n=Xt(),{theme:r,toggleTheme:i}=Lh(),o=a=>n.pathname===a;return u.jsx("header",{className:"sticky top-0 z-50 bg-background/80 dark:bg-dark-background/80 backdrop-blur-md border-b border-border dark:border-dark-border",children:u.jsxs("nav",{className:"max-w-6xl mx-auto px-6 py-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx(He,{to:"/",className:"text-xl font-bold text-foreground dark:text-dark-foreground hover:text-accent dark:hover:text-dark-accent transition-colors",children:Me.name}),u.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[Wl.map(a=>u.jsx(He,{to:a.path,className:_t("nav-link",o(a.path)&&"text-accent dark:text-dark-accent font-medium"),children:a.name},a.path)),u.jsx("button",{onClick:i,className:"p-2 rounded-lg hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-colors","aria-label":"Toggle dark mode",children:r==="light"?u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})})]}),u.jsxs("div",{className:"md:hidden flex items-center gap-4",children:[u.jsx("button",{onClick:i,className:"p-2 rounded-lg hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-colors","aria-label":"Toggle dark mode",children:r==="light"?u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})}),u.jsx("button",{onClick:()=>t(!e),className:"p-2 rounded-lg hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-colors","aria-label":"Toggle mobile menu",children:e?u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})]})]}),e&&u.jsx("div",{className:"md:hidden mt-4 py-4 border-t border-border dark:border-dark-border animate-fade-in",children:u.jsx("div",{className:"flex flex-col gap-4",children:Wl.map(a=>u.jsx(He,{to:a.path,onClick:()=>t(!1),className:_t("nav-link py-2",o(a.path)&&"text-accent dark:text-dark-accent font-medium"),children:a.name},a.path))})})]})})},Oh=({children:e,variant:t="primary",href:n,onClick:r,className:i,type:o="button",download:a=!1})=>{const l=_t("font-medium inline-flex items-center justify-center gap-2",{primary:"bg-accent dark:bg-dark-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover dark:hover:bg-dark-accent-hover transition-all duration-200 hover:-translate-y-0.5",secondary:"border border-accent dark:border-dark-accent text-accent dark:text-dark-accent px-6 py-3 rounded-lg hover:bg-accent dark:hover:bg-dark-accent hover:text-white transition-all duration-200",ghost:"text-accent dark:text-dark-accent px-6 py-3 rounded-lg hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-all duration-200"}[t],i);return n?u.jsx("a",{href:n,className:l,target:"_blank",rel:"noopener noreferrer",...a&&{download:!0},children:e}):u.jsx("button",{type:o,onClick:r,className:l,children:e})},zh=()=>{const e=new Date().getFullYear(),t=n=>{switch(n){case"github":return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",className:"w-5 h-5",children:u.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})});case"linkedin":return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",className:"w-5 h-5",children:u.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})});case"email":return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})});default:return null}};return u.jsx("footer",{className:"bg-background dark:bg-dark-background border-t border-border dark:border-dark-border",children:u.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8",children:[u.jsxs("div",{className:"text-center sm:text-left",children:[u.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground",children:Me.name}),u.jsx("p",{className:"text-muted dark:text-dark-muted text-xs sm:text-sm",children:Me.tagline})]}),u.jsxs("div",{className:"text-center sm:text-left",children:[u.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground",children:"Quick Links"}),u.jsxs("div",{className:"flex flex-col gap-1.5 sm:gap-2",children:[u.jsx("a",{href:"/",className:"text-xs sm:text-sm text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors",children:"Home"}),u.jsx("a",{href:"/projects",className:"text-xs sm:text-sm text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors",children:"Projects"}),u.jsx("a",{href:"/experience",className:"text-xs sm:text-sm text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors",children:"Experience"}),u.jsx("a",{href:"/blog",className:"text-xs sm:text-sm text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors",children:"Blog"})]})]}),u.jsxs("div",{className:"text-center sm:text-left sm:col-span-2 md:col-span-1",children:[u.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground",children:"Connect"}),u.jsx("div",{className:"flex gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center sm:justify-start",children:Mh.map(n=>u.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors","aria-label":n.platform,children:t(n.icon)},n.platform))}),u.jsx("div",{className:"flex justify-center sm:justify-start",children:u.jsxs(Oh,{href:Me.resume,variant:"secondary",target:"_blank",rel:"noopener noreferrer",className:"text-xs sm:text-sm min-h-[44px]",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})}),"Resume"]})})]})]}),u.jsx("div",{className:"pt-4 sm:pt-6 border-t border-border dark:border-dark-border text-center",children:u.jsxs("p",{className:"text-xs sm:text-sm text-muted dark:text-dark-muted",children:["© ",e," ",Me.name,". All rights reserved."]})})]})})},Bh=()=>{const{pathname:e}=Xt();C.useEffect(()=>{window.scrollTo(0,0)},[e])},Uh=({children:e})=>(Bh(),u.jsxs("div",{className:"min-h-screen flex flex-col bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground transition-colors duration-200",children:[u.jsx(Fh,{}),u.jsx("main",{className:"flex-grow",children:e}),u.jsx(zh,{})]})),Wh=()=>u.jsx("section",{className:"min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center animate-fade-in",children:[u.jsx("div",{className:"mb-6 sm:mb-8",children:u.jsx("div",{className:"w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-hover dark:from-dark-accent dark:to-dark-accent-hover p-1",children:u.jsx("div",{className:"w-full h-full rounded-full bg-background dark:bg-dark-background flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold text-accent dark:text-dark-accent",children:Me.name.charAt(0)})})}),u.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-accent dark:from-dark-foreground dark:to-dark-accent bg-clip-text text-transparent",children:Me.name}),u.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-accent dark:text-dark-accent font-medium mb-4 sm:mb-6",children:Me.title}),u.jsx("p",{className:"text-base sm:text-lg text-muted dark:text-dark-muted max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0",children:Me.tagline}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0",children:[u.jsx(He,{to:"/projects",className:"bg-accent dark:bg-dark-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover dark:hover:bg-dark-accent-hover active:bg-accent-hover transition-all duration-200 hover:-translate-y-0.5 font-medium inline-flex items-center justify-center gap-2 min-h-[44px]",children:"View Projects"}),u.jsxs("a",{href:Me.resume,target:"_blank",rel:"noopener noreferrer",className:"border border-accent dark:border-dark-accent text-accent dark:text-dark-accent px-6 py-3 rounded-lg hover:bg-accent dark:hover:bg-dark-accent hover:text-white active:bg-accent transition-all duration-200 font-medium inline-flex items-center justify-center gap-2 min-h-[44px]",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})}),"Download Resume"]})]})]})}),rt=({children:e,title:t,subtitle:n,className:r,id:i})=>u.jsxs("section",{id:i,className:_t("section-container",r),children:[(t||n)&&u.jsxs("div",{className:"mb-8 md:mb-12 text-center",children:[t&&u.jsx("h2",{className:"text-section-title mb-3",children:t}),n&&u.jsx("p",{className:"text-muted dark:text-dark-muted max-w-2xl mx-auto",children:n})]}),e]}),$h=()=>{const e=[{label:"Years Experience",value:"~3"},{label:"Projects Delivered",value:"15+"},{label:"Technologies",value:"20+"}];return u.jsx(rt,{id:"about",title:"About Me",subtitle:"Get to know me and what I do",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6",children:[u.jsx("div",{className:"mb-8 sm:mb-12 text-center",children:u.jsx("p",{className:"text-base sm:text-lg leading-relaxed text-foreground dark:text-dark-foreground max-w-3xl mx-auto",children:Me.bio})}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6",children:e.map((t,n)=>u.jsxs("div",{className:"text-center p-5 sm:p-6 rounded-lg bg-white dark:bg-dark-background border border-border dark:border-dark-border hover:border-accent dark:hover:border-dark-accent transition-all duration-200 animate-slide-up",style:{animationDelay:`${n*100}ms`},children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-bold text-accent dark:text-dark-accent mb-2",children:t.value}),u.jsx("div",{className:"text-xs sm:text-sm text-muted dark:text-dark-muted font-medium uppercase tracking-wide",children:t.label})]},n))})]})})},Fe=({label:e,variant:t="primary",className:n})=>{const r={primary:"bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent border border-accent/20 dark:border-dark-accent/20",secondary:"bg-muted/10 dark:bg-dark-muted/10 text-muted dark:text-dark-muted border border-muted/20 dark:border-dark-muted/20"};return u.jsx("span",{className:_t("inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200",r[t],n),children:e})},Vh=[{category:"Backend",skills:["Golang","Python","Django","Celery","Node.js","Express","Java"]},{category:"Databases",skills:["PostgreSQL","MongoDB","Redis","Redshift"]},{category:"Infrastructure & DevOps",skills:["Docker","Kubernetes","Kafka","CI/CD","Prometheus","Grafana"]},{category:"Cloud Platforms",skills:["AWS S3","AWS Lambda","AWS Redshift","AWS EC2","Firehose"]},{category:"Frontend",skills:["JavaScript","Angular","React","TypeScript"]},{category:"Other",skills:["Microservices","Distributed Systems","Payment Systems","UPI","Stripe"]}],Gh=()=>u.jsx(rt,{id:"skills",title:"Skills & Technologies",subtitle:"Tools and technologies I work with",children:u.jsx("div",{className:"max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6",children:Vh.map((e,t)=>u.jsxs("div",{className:"animate-slide-up",style:{animationDelay:`${t*100}ms`},children:[u.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground dark:text-dark-foreground",children:e.category}),u.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:e.skills.map(n=>u.jsx(Fe,{label:n,variant:"primary"},n))})]},e.category))})}),Hh=()=>u.jsxs("div",{className:"animate-fade-in",children:[u.jsx(Wh,{}),u.jsx($h,{}),u.jsx(Gh,{})]}),wd=({children:e,className:t,href:n,onClick:r})=>{const i="bg-white dark:bg-dark-background border border-border dark:border-dark-border rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg";return n?u.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:_t(i,"block",t),children:e}):r?u.jsx("button",{onClick:r,className:_t(i,"w-full text-left",t),children:e}):u.jsx("div",{className:_t(i,t),children:e})},$l=({project:e})=>u.jsx(He,{to:`/projects/${e.slug}`,className:"block h-full",children:u.jsxs(wd,{className:"h-full flex flex-col hover:scale-[1.02] transition-transform p-4 sm:p-6",children:[u.jsxs("div",{className:"mb-2 sm:mb-3",children:[u.jsx(Fe,{label:e.category,variant:e.featured?"primary":"secondary"}),e.featured&&u.jsx(Fe,{label:"Featured",variant:"primary",className:"ml-2"})]}),u.jsx("h3",{className:"text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground",children:e.title}),u.jsx("p",{className:"text-sm sm:text-base text-muted dark:text-dark-muted mb-3 sm:mb-4 flex-grow leading-relaxed line-clamp-3",children:e.description}),u.jsx("div",{className:"mb-3 sm:mb-4",children:u.jsxs("div",{className:"flex flex-wrap gap-1 sm:gap-1.5",children:[e.techStack.slice(0,5).map(t=>u.jsx(Fe,{label:t,variant:"secondary"},t)),e.techStack.length>5&&u.jsx(Fe,{label:`+${e.techStack.length-5}`,variant:"secondary"})]})}),u.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium text-accent dark:text-dark-accent pt-3 sm:pt-4 border-t border-border dark:border-dark-border",children:["Read full case study",u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})]})]})}),ka=[{id:"project-1",title:"UPI Payment Processing System",slug:"upi-payment-processing-system",description:"Designed and scaled high-throughput UPI payment processing system handling millions of transactions. Built end-to-end tests and monitoring for critical payment flows.",content:`
# UPI Payment Processing System

A high-throughput, reliable payment processing system built at Razorpay to handle millions of UPI transactions daily.

## Overview

The UPI Payment Processing System is the backbone of Razorpay's UPI payment infrastructure, processing over **1.5 million transactions daily** with 99.99% uptime. Built using modern microservices architecture with Golang, Kafka, and Kubernetes.

## The Challenge

UPI (Unified Payments Interface) is India's real-time payment system that processes billions of transactions monthly. Building a system that can:

- Handle **10,000+ transactions per second** during peak hours
- Maintain **sub-200ms latency** for payment confirmations
- Ensure **zero data loss** even during failures
- Scale **10x during festival seasons** (Diwali, etc.)
- Guarantee **strong consistency** for financial data

## Architecture

### System Design

\`\`\`
                    ┌─────────────┐
                    │ Customer App│
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │ API Gateway │
                    └──────┬──────┘
                           │
                           ▼
            ┌──────────────────────────┐
            │  Payment Service (Go)    │
            │  - Validate request      │
            │  - Create transaction    │
            │  - Call UPI Switch       │
            └──────┬───────────────┬───┘
                   │               │
                   │               ▼
                   │        ┌─────────────┐
                   │        │  UPI Switch │
                   │        │    (NPCI)   │
                   │        └─────────────┘
                   │
                   ▼
            ┌─────────────┐
            │ Kafka Queue │
            └──────┬──────┘
                   │
       ┌───────────┼───────────┐
       │           │           │
       ▼           ▼           ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│Reconcile │ │Analytics │ │Notifica- │
│ Service  │ │ Service  │ │   tion   │
└──────────┘ └──────────┘ └──────────┘
\`\`\`


### Key Components

**1. Payment Processing Service (Golang)**
- Handles incoming payment requests
- Validates transaction data
- Communicates with NPCI UPI Switch
- Processes callbacks and confirmations

**2. Event Streaming (Kafka)**
- Decouples payment flow from downstream services
- Guarantees at-least-once delivery
- Enables real-time analytics and monitoring

**3. Reconciliation Service**
- Matches payments with bank settlements
- Handles edge cases (timeouts, partial failures)
- Ensures financial accuracy

**4. Monitoring & Observability**
- Prometheus for metrics collection
- Grafana dashboards for visualization
- Custom alerting for anomalies

## Technical Implementation

### High-Performance Payment Handler

Built in Golang for maximum concurrency and minimal latency:

**Payment Processing Flow:**

\`\`\`
    Request → Validate → Create Txn → Call UPI Switch → Publish Event → Response
                │            │              │               │
                ▼            ▼              ▼               ▼
            [Fail Fast]  [DB Write]   [5s Timeout]    [Kafka Async]
\`\`\`
**Key Design Patterns:**
- Context-based timeouts (5s hard limit)
- Fail-fast validation before expensive operations
- Async event publishing via Kafka
- Idempotency keys for duplicate prevention
- Structured error handling with proper codes


### Kafka Event Pipeline

**Event Flow Architecture:**

\`\`\`
    Payment Service ──┐
                      │
                      ├──► Topic: payment.initiated ──► Notification Service
                      │                                  │
                      ├──► Topic: payment.confirmed ────┼──► Analytics Service
                      │                                  │
                      └──► Topic: payment.failed ───────┴──► Reconciliation Service
\`\`\`
**Guarantees:**
- At-least-once delivery (Kafka acks=all)
- Ordered processing per partition key (merchant_id)
- Consumer group for horizontal scaling
- Dead letter queue for poison messages


## End-to-End Testing

Developed comprehensive E2E tests covering all critical flows:

### Test Coverage

**Happy Path:**
- Successful payment initiation
- Callback processing
- Status updates
- Notifications

**Error Scenarios:**
- Timeout handling (5s, 10s, 30s)
- Network failures
- Insufficient funds
- Invalid VPA
- Duplicate transaction prevention

**Edge Cases:**
- Partial payments
- Split settlements
- Refund processing
- Concurrent transactions

### Sample Test Structure

**E2E Test Flow:**

\`\`\`
    Setup Test Environment
            │
            ▼
    Mock UPI Switch Responses
            │
            ▼
    Send Payment Request ──► Validate Response
            │                       │
            ▼                       ▼
    Poll for Status Updates    Check DB State
            │                       │
            ▼                       ▼
    Verify Kafka Events ────► Assert Final State
            │
            ▼
    Cleanup Test Data
\`\`\`
**Test Categories:**
- Unit tests: Business logic validation
- Integration tests: API + DB interactions
- E2E tests: Full payment flow with mocked NPCI
- Load tests: 10K TPS simulation
- Chaos tests: Random failure injection


## Monitoring & Observability

### Key Metrics Tracked

**Performance Metrics:**
- Request latency (p50, p95, p99)
- Throughput (requests/second)
- Success rate (%)
- Error rate by type

**Business Metrics:**
- Transaction volume
- Total payment value
- Success vs failure ratio
- Average transaction size

### Grafana Dashboards

Created real-time dashboards showing:
- Live transaction throughput
- Latency trends over time
- Error rate by error code
- Payment method distribution
- Geographic distribution

### Alerting Rules

**Alert Hierarchy:**

\`\`\`
    ┌─────────────────────────────────────┐
    │   CRITICAL (PagerDuty)              │
    │   - Error rate > 5%                 │
    │   - Latency p99 > 2s                │
    │   - Service down                    │
    └─────────────────────────────────────┘
                    │
    ┌─────────────────────────────────────┐
    │   WARNING (Slack)                   │
    │   - Error rate > 2%                 │
    │   - Latency p95 > 500ms             │
    │   - Queue depth > 1000              │
    └─────────────────────────────────────┘
                    │
    ┌─────────────────────────────────────┐
    │   INFO (Email)                      │
    │   - Deployment events               │
    │   - Scaling events                  │
    │   - Configuration changes           │
    └─────────────────────────────────────┘
\`\`\`
**Alert Response:**
- Auto-remediation for common issues (restart, scale)
- Runbooks linked in alert descriptions
- Escalation path defined per severity


## Canary Deployments

Implemented safe deployment strategy:

1. **Deploy to 5%** of traffic
2. **Monitor for 30 minutes**:
   - Error rates
   - Latency changes
   - Success rate
3. **Increase to 25%** if healthy
4. **Monitor for 1 hour**
5. **Full rollout** if all metrics green

This prevented a critical bug from affecting 59K transactions.

## Results & Impact

### Performance Improvements

- **Latency:** Optimized from 1.9s to **200ms** (90% reduction)
- **Throughput:** Scaled to handle **10x traffic** during peaks
- **Availability:** Achieved **99.99% uptime**
- **Cost:** Reduced per-transaction cost by **25%**

### Business Impact

- Processing **1.5M+ daily transactions**
- Supporting **10,000+ merchants**
- Handling **₹500 Cr+ monthly volume**
- Zero financial discrepancies

### Developer Experience

- **Deployment time:** 50min → 15min (70% reduction)
- **Mean time to recovery:** 45min → 10min
- **Incident rate:** Reduced by 60%

## Key Learnings

### 1. Design for Failure

Every component will fail eventually. Build retry logic, circuit breakers, and graceful degradation:

**Circuit Breaker Pattern:**

\`\`\`
    ┌─────────┐     Success     ┌─────────┐
    │  CLOSED │ ───────────────►│  CLOSED │
    │ (Normal)│                 │ (Normal)│
    └────┬────┘                 └─────────┘
         │
         │ Failure threshold reached
         │ (5 failures in 10s)
         ▼
    ┌─────────┐     Timeout     ┌──────────┐
    │  OPEN   │ ───────────────►│ HALF-OPEN│
    │(Blocked)│  (30 seconds)   │  (Test)  │
    └─────────┘                 └────┬─────┘
         ▲                           │
         │                           │ Success
         └───────────────────────────┘
\`\`\`
**Retry Strategy:**
- Exponential backoff: 100ms → 200ms → 400ms
- Max 3 retries for transient failures
- Jitter to prevent thundering herd
- Different strategies for different error types


### 2. Observability is Critical

You can't fix what you can't see. Instrument everything:
- Request/response logs
- Performance metrics
- Business metrics
- Error tracking

### 3. Test Realistic Scenarios

Load tests should mimic production:
- Same traffic patterns
- Same error rates
- Same latency distributions

### 4. Gradual Rollouts Save Lives

Canary deployments caught bugs that would have affected thousands of transactions.

### 5. Documentation Matters

Clear runbooks helped reduce MTTR significantly:
- Incident response guides
- Architecture diagrams
- API documentation
- Troubleshooting guides

## Technologies Used

- **Backend:** Golang, gRPC
- **Message Queue:** Apache Kafka
- **Database:** PostgreSQL (with read replicas)
- **Cache:** Redis
- **Orchestration:** Kubernetes
- **Monitoring:** Prometheus, Grafana
- **CI/CD:** Jenkins, ArgoCD
- **Cloud:** AWS (EC2, RDS, ElastiCache)

## Future Roadmap

1. **Multi-region deployment** for better availability
2. **ML-based fraud detection** using transaction patterns
3. **Sub-100ms latency** for instant payments
4. **Smart routing** to optimize success rates
5. **GraphQL APIs** for better developer experience

---

This project showcases the complexity and scale of building financial infrastructure that millions of Indians rely on daily.
    `,techStack:["Golang","Kafka","Microservices","Prometheus","Grafana","Docker","Kubernetes"],category:"professional",links:{},featured:!0,duration:"2024 - Present",role:"Lead Developer",team:"5 engineers",impact:["1.5M+ daily transactions processed","99.99% uptime maintained","90% latency reduction (1.9s → 200ms)","25% cost reduction per transaction"]},{id:"project-2",title:"AWS Data Pipeline Recovery",slug:"aws-data-pipeline-recovery",description:"Resolved critical AWS incident affecting 59K UPI transactions by fixing Kafka-Firehose-Lambda-Redshift pipeline. Ensured data recovery and system stability.",content:`
# AWS Data Pipeline Recovery

Critical incident response and recovery of a data pipeline failure affecting 59,000 UPI transactions.

## Incident Overview

**Date:** January 15, 2025
**Time:** 2:14 AM IST
**Duration:** 2 hours 46 minutes
**Impact:** 59,000 transactions not recorded in data warehouse
**Status:** Fully recovered with zero data loss

## The Alert

Saturday night, 2:14 AM. Pager goes off. Our data warehouse ingestion dropped to zero. What should be processing 10,000+ transactions per hour showed nothing.

## System Architecture

Our data pipeline:

\`\`\`
    ┌──────────────┐
    │Payment Service│
    └───────┬──────┘
            │ (Publish Events)
            ▼
    ┌──────────────┐
    │ Kafka Topic  │
    │ (Partitioned)│
    └───────┬──────┘
            │ (Stream)
            ▼
    ┌──────────────┐
    │   Firehose   │
    │  (Batching)  │
    └───────┬──────┘
            │ (Invoke)
            ▼
    ┌──────────────┐
    │Lambda Function│
    │ (Transform)  │
    └───────┬──────┘
            │ (Write)
            ▼
    ┌──────────────┐
    │  S3 Bucket   │
    │  (Staging)   │
    └───────┬──────┘
            │ (COPY Command)
            ▼
    ┌──────────────┐
    │   Redshift   │
    │(Data Warehouse)
    └──────────────┘
\`\`\`

**Purpose:** Real-time analytics and business intelligence

**Normal Flow:**
1. Payment events published to Kafka
2. Firehose pulls from Kafka, batches records
3. Lambda transforms data (enrich, clean, format)
4. Transformed data written to S3
5. Redshift loads from S3 for analytics

## Investigation Timeline

### 2:14 AM - Alert Triggered

Datadog alert: "Data warehouse ingestion rate dropped below threshold"

### 2:19 AM - Initial Diagnosis

**Step 1: Check Kafka**

**Health Check Flow:**

\`\`\`
    kafka-consumer-groups --list
            │
            ▼
    Check consumer lag for data-pipeline-consumer
            │
            ├──► Lag: 0 messages (Kafka is healthy ✓)
            │
            ▼
    Problem is downstream, not Kafka
\`\`\`

**Step 2: Check Firehose Metrics**

AWS Console → Kinesis Firehose → Metrics:
- Incoming records: **10,000/min** ✓
- Records delivered to S3: **0** ✗
- Lambda invocations: **100% failure rate** ✗

**Root cause located:** Lambda function timing out

### 2:24 AM - Root Cause Analysis

**CloudWatch Logs:**

**Error Pattern Detected:**

    [ERROR] Task timed out after 3.00 seconds
    [ERROR] Task timed out after 3.00 seconds
    [ERROR] Task timed out after 3.00 seconds
    ... (repeated 10,000+ times)

**Stack Trace Points To:**
\`\`\`
    → Lambda function: data-transformer-v2
    → Function: enrichUserData()
    → External API call timing out
\`\`\`

**Git Blame Investigation:**

Recent deployment added user enrichment:

**The Problematic Change:**

\`\`\`
    Old Code (Fast):
        Transform data → Write to S3
        (50ms per batch)

    New Code (Slow):
        For each record in batch:
            → Call external API to enrich user data
            → Wait for response (2-3s each)
            → Transform data
        → Write to S3
        (100 records × 2.5s = 250 seconds!)
\`\`\`
**Batch Processing Multiplier Effect:**
- Single record: 2.5s (acceptable)
- 100 records sequentially: 250s (timeout at 3s!)
- Result: Every batch guaranteed to timeout


**Why it failed:**
- Lambda timeout: **3 seconds**
- External API latency: **2-3 seconds per call**
- Firehose sends **batches of 100+ records**
- Total time needed: **100 × 2.5s = 250 seconds**
- Result: **Guaranteed timeout** ✗

## Recovery Strategy

### Phase 1: Stop the Bleeding (5 minutes)

**Goal:** Restore data ingestion immediately

**Rollback Action:**

\`\`\`
    AWS Lambda Console
        │
        ├──► Find function: data-transformer-v2
        │
        ├──► Versions → Select previous version (v1.4.2)
        │
        ├──► Update alias: PROD → v1.4.2
        │
        └──► Test with sample payload → Success ✓
\`\`\`
**Verification:**
    Monitor Firehose metrics → Records flowing to S3 ✓

**Result:** Pipeline resumed at 2:29 AM (15 minutes after incident)

### Phase 2: Recover Lost Data (2 hours)

**Challenge:** 59,000 transactions stuck in Kafka (retention: 7 days)

**Solution:** Replay messages from Kafka with exact offsets

**Step 1: Calculate Offset Range**

**Offset Calculation:**

    Failure window: 02:14 AM - 02:29 AM (15 minutes)

    Query Kafka for offset range:
        Topic: payment-events
        Partition: 0-9 (10 partitions)

    Start offset: 1,234,567 (02:14 AM timestamp)
    End offset:   1,293,567 (02:29 AM timestamp)

    Total messages: 59,000


**Step 2: Create Temporary Recovery Pipeline**

**Recovery Architecture:**

\`\`\`
    ┌────────────────┐
    │ Recovery Script│
    │   (Python)     │
    └────────┬───────┘
             │
             ├──► Read from Kafka (offset range)
             │
             ├──► Transform data (simple, no enrichment)
             │
             ├──► Write directly to S3
             │
             └──► Trigger Redshift COPY command
\`\`\`
**Advantages:**
- Bypasses Firehose (faster, direct control)
- Simple transformation (no external API calls)
- Batch writes to S3 (5000 records per file)
- Parallel processing (10 workers, one per partition)


**Step 3: Execute Recovery**

**Execution Progress:**

\`\`\`
    02:29 AM - Start recovery script
        │
        ├──► Partition 0: [========] 5,900 records
        ├──► Partition 1: [========] 5,900 records
        ├──► Partition 2: [========] 5,900 records
        ├──► Partition 3: [========] 5,900 records
        ├──► Partition 4: [========] 5,900 records
        ├──► Partition 5: [========] 5,900 records
        ├──► Partition 6: [========] 5,900 records
        ├──► Partition 7: [========] 5,900 records
        ├──► Partition 8: [========] 5,900 records
        └──► Partition 9: [========] 5,900 records
        │
    04:45 AM - Recovery complete
        └──► Total: 59,000 records processed ✓
\`\`\`

**Duration:** 2 hours (limited by Firehose throughput)

### Phase 3: Validation (30 minutes)

**Verify data integrity in Redshift:**

**Validation Queries:**

    Query 1: Count transactions in failure window
        Expected: 59,000
        Actual:   59,000  ✓

    Query 2: Check for duplicates
        Expected: 0
        Actual:   0      ✓

    Query 3: Verify transaction IDs match Kafka
        Sample: 1000 random transactions
        Match rate: 100% ✓

    Query 4: Check data completeness
        NULL values: 0   ✓
        Invalid amounts: 0 ✓

**Final Validation:** All 59,000 transactions recovered successfully with 100% data integrity


## Prevention Measures

### 1. Increased Lambda Timeout

**Configuration Change:**

    Old: 3 seconds
    New: 30 seconds

    Reasoning:
        - Handles network latency spikes
        - Buffer for batch processing
        - Still short enough to fail fast


### 2. Added Duration Monitoring

**CloudWatch Alarms:**

    Alert Thresholds:
        WARNING:  Duration > 25 seconds (approaching limit)
        CRITICAL: Duration > 28 seconds (danger zone)

    Alert Flow:
        CloudWatch Metric → SNS Topic → Slack Channel
                                      → PagerDuty (critical only)

    Metrics Tracked:
        - Average duration per invocation
        - P95, P99 duration
        - Timeout rate (failures / total invocations)

### 3. Implemented Circuit Breaker

**Circuit Breaker for External API:**

\`\`\`
    Normal State (CLOSED):
        └──► Call enrichment API

    Failure Detection:
        └──► 5 timeouts in 10 seconds
             │
             ▼
        Circuit OPENS (API calls blocked)
             │
             ▼
        Use fallback: Skip enrichment, process anyway
             │
             ▼
        Wait 60 seconds (cooldown)
             │
             ▼
        Circuit HALF-OPEN (test with 1 request)
             │
             ├──► Success → Circuit CLOSED
             └──► Failure → Circuit OPEN (60s more)
\`\`\`
**Benefits:**
- Prevents cascade failures
- Processes data even without enrichment
- Auto-recovery when API is healthy


### 4. Moved Enrichment to Batch Job

**New Architecture - Decoupled Enrichment:**

\`\`\`
    Real-time Pipeline (Lambda):
        Kafka → Firehose → Lambda (simple transform) → S3 → Redshift
        [No external API calls, fast processing]

    Batch Enrichment (Scheduled Job):
        Every 15 minutes:
            │
            ├──► Query Redshift for unenriched records
            │
            ├──► Batch API calls (100 records at once)
            │
            ├──► Update Redshift with enriched data
            │
            └──► Retry failed enrichments
\`\`\`
**Advantages:**
- Real-time pipeline stays fast and reliable
- Enrichment doesn't block critical path
- Can retry enrichment failures without data loss
- Better API rate limit management


### 5. Created Runbook

Documented complete incident response procedure:

**Runbook: Data Pipeline Failure**

1. Check Kafka health
2. Check Firehose metrics
3. Check Lambda CloudWatch logs
4. Identify failure window
5. Rollback if recent deployment
6. Calculate recovery offset range
7. Run recovery script
8. Validate data in Redshift
9. Post-mortem within 24 hours

## Incident Timeline Summary

| Time | Event | Duration |
|------|-------|----------|
| 02:14 AM | Alert triggered | - |
| 02:19 AM | Root cause identified | 5 min |
| 02:24 AM | Lambda rolled back | 10 min |
| 02:29 AM | Pipeline resumed | 15 min |
| 04:45 AM | All data recovered | 2h 31m |
| 05:00 AM | Validation complete | 2h 46m |

**Total incident duration:** 2 hours 46 minutes
**Data loss:** 0 transactions ✓

## Key Learnings

### 1. Timeouts are Not Suggestions

Design around timeout constraints:
- Know your limits (3s in our case)
- Add buffer (use 2s max if timeout is 3s)
- Monitor approaching limits

### 2. External Dependencies Kill Performance

- Cache aggressively
- Use async/batch processing
- Implement circuit breakers
- Have fallback behavior

### 3. Kafka Retention Saves Lives

Without 7-day retention, we'd have lost 59K transactions permanently.

**Recommendation:** Set retention based on recovery SLA
- 1-day retention → 1-day recovery window
- 7-day retention → 7-day recovery window
### 4. Monitoring Should Be Proactive

Don't just alert on errors, alert on:
- Duration trends (approaching timeout)
- Throughput changes (sudden drops)
- Success rate degradation

### 5. Runbooks Are Invaluable

Writing the runbook during recovery helps future incidents:
- Clear step-by-step process
- Known commands and scripts
- Validation queries
- Contact information

## Technologies Used

- **Data Pipeline:** Kafka, Kinesis Firehose, AWS Lambda, S3, Redshift
- **Monitoring:** CloudWatch, Datadog
- **Recovery:** Go, Python
- **Validation:** SQL, custom scripts

## Results

- ✅ **Zero data loss** - All 59K transactions recovered
- ✅ **Quick response** - Root cause identified in 5 minutes
- ✅ **Fast recovery** - Pipeline restored in 15 minutes
- ✅ **Complete validation** - 100% data integrity verified
- ✅ **Prevention implemented** - Multiple safeguards added

---

This incident showcases the importance of observability, quick incident response, and building resilient data pipelines.
    `,techStack:["AWS Lambda","Kafka","Firehose","Redshift","Golang","Python"],category:"professional",links:{},featured:!0,duration:"2 days (incident + recovery)",role:"Incident Commander",impact:["59,000 transactions recovered with zero data loss","Pipeline restored in 15 minutes","Implemented 5 prevention measures","Created comprehensive runbook"]},{id:"project-3",title:"CI/CD Pipeline Optimization for UPI Switch",slug:"cicd-pipeline-optimization",description:"Re-architected CI/CD pipeline for 51 deployables across 10+ microservices in mono-repo, reducing build time from 45+ minutes to 15-20 minutes and checks from 240+ to 54.",content:`
# CI/CD Pipeline Optimization for UPI Switch

Re-architected GitHub Actions CI/CD pipeline for UPI Switch mono-repo, achieving 60% faster builds and 77% fewer checks.

## The Problem

UPI Switch CI/CD pipeline was a massive bottleneck for the entire team:

**Scale of the Problem:**
- **51 deployables** across **10+ microservices** in a **mono-repo**
- **240+ GitHub Actions checks** per PR (one for each service)
- **45+ minute** total pipeline runs
- **Flaky retries** from connection drops during Docker builds
- **Maintenance nightmare**: Updating workflows required changing dozens of files

**Developer Impact:**
- Every PR was a slog waiting for 240+ checks to pass
- Slow feedback loops killed productivity
- Adding new services was extremely painful
- Connection failures caused frequent re-runs
- Teams blocked waiting for CI/CD

## Baseline Metrics

**Before optimization:**
- **Total checks:** 240+ per PR
- **Total time:** 45+ minutes
- **Deployables:** 51 services
- **Workflow files:** One per service (maintenance nightmare)
- **Flakiness:** High (connection timeouts, retries)
- **Cache hit rate:** Low (~40%)
- **Developer satisfaction:** 2/10

## Pipeline Analysis

**Original pipeline structure:**

Each of 51 deployables had its own GitHub Actions workflow, resulting in:

**Original Pipeline (Per PR):**

\`\`\`
    ┌──────────────────────────────────────────┐
    │   PR Created → 240+ Checks Triggered     │
    └─────────────────┬────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
    Service 1 Workflow          Service 2 Workflow  ... (51 total)
        │                           │
        ├─► Checkout code           ├─► Checkout code
        ├─► Install Go              ├─► Install Go
        ├─► Download deps           ├─► Download deps (same as S1!)
        ├─► Build binary            ├─► Build binary
        ├─► Build Docker            ├─► Build Docker (from scratch!)
        ├─► Run tests               ├─► Run tests
        └─► Push to registry        └─► Push to registry

    Total: 51 workflows × ~45min = Nightmare!
\`\`\`

**Problems identified:**
1. **Redundant work:** Each service rebuilt the same Go dependencies
2. **No caching:** Base Docker images built from scratch every time
3. **Serial builds:** Services built one after another
4. **Flaky connections:** Docker registry timeouts caused failures
5. **No centralized config:** Adding a service required creating new workflow file

## Solution Architecture

### The New Approach

**Key insight:** Build once, package many times.

**New Optimized Pipeline:**

\`\`\`
    PR Created → 54 Checks (77% reduction!)
        │
        ├─► Job 1: Build All Binaries (ONE JOB)
        │      │
        │      ├─► Go build -o bin/service1 ./cmd/service1
        │      ├─► Go build -o bin/service2 ./cmd/service2
        │      ├─► ... (all 51 services)
        │      │
        │      └─► Upload artifacts (all binaries)
        │            │
        │            │
        │            ▼
        ├─► Job 2-15: Package Docker (PARALLEL - 14 workers)
        │      │
        │      ├─► Worker 1: Package services 1-4
        │      ├─► Worker 2: Package services 5-8
        │      ├─► Worker 3: Package services 9-12
        │      └─► ... (parallel execution)
        │
        ├─► Job 16: E2E Tests (parallel)
        │
        └─► Job 17: Quality Gates (linting, changed files only)

    Total: ~15-20 minutes (60% faster!)
\`\`\`

## Optimization Strategy

### 1. One-Shot Binary Builds

**The Game Changer:** Build all 51 binaries in a single job

**Build Strategy:**

\`\`\`
    Single Build Job:
        │
        ├─► Download Go modules ONCE
        │   (cached, shared across all services)
        │
        ├─► Parallel compilation (16 cores)
        │   │
        │   ├─► go build -ldflags "-s -w" -o bin/api-gateway ./cmd/api-gateway
        │   ├─► go build -ldflags "-s -w" -o bin/auth-service ./cmd/auth-service
        │   ├─► go build -ldflags "-s -w" -o bin/payment-processor ./cmd/payment-processor
        │   └─► ... (48 more services in parallel)
        │
        └─► Upload all 51 binaries as artifacts
            (Downloaded by parallel Docker packaging jobs)
\`\`\`
**Compilation Flags:**
- "-s -w": Strip debugging symbols (smaller binaries)
- Static linking: No runtime dependencies
- CGO_ENABLED=0: Pure Go, portable across Linux distros


**Benefits:**
- Go modules downloaded once (not 51 times)
- Dependencies cached with ~90% hit rate
- Parallel compilation using all CPU cores
- Static linking for smaller, portable binaries

**GitHub Actions Implementation:**

**Workflow Structure:**

    name: Build All Binaries

    steps:
      1. Checkout code
      2. Setup Go (with module caching)
      3. Restore Go module cache (~90% hit rate)
      4. Build all 51 services in parallel
      5. Upload binaries as artifacts

    Optimization Details:
      - Go cache key: go.sum hash
      - Artifacts stored for 1 day
      - Compressed upload (faster transfer)
      - Parallel builds use all 16 cores


**Impact:**
- Binary builds: 45 min → 5 min (with 90% cache hits)
- Docker packaging: Parallel 14 jobs = ~5 min total

### 2. Prebuilt Base Docker Image

**Problem:** Every Docker build started from scratch

**Solution:** Create and cache base image with common dependencies

**Base Image Dockerfile:**

    FROM alpine:3.18

    # Common dependencies for all services
    RUN apk add --no-cache         ca-certificates         tzdata         curl

    # Create non-root user
    RUN addgroup -g 1000 appuser &&         adduser -D -u 1000 -G appuser appuser

    USER appuser
    WORKDIR /app

**Built Once, Used 51 Times:**

\`\`\`
    Base image: upi-switch-base:latest
        │
        ├─► Cached in Docker layer cache
        ├─► No downloads during service builds
        └─► All services extend this base
\`\`\`

**Service Dockerfile (now super fast):**

    FROM upi-switch-base:latest

    # Copy only the pre-built binary (from artifacts)
    COPY bin/api-gateway /app/service

    # Expose port
    EXPOSE 8080

    # Run the binary
    CMD ["/app/service"]

**Build Time Comparison:**

    Before (from scratch):
        Alpine download        30s
        Install dependencies   45s
        Go module download     3m
        Binary compilation     4m
        ──────────────────────
        Total:                ~8m per service

    After (with base + pre-built binary):
        Copy binary           5s
        Docker build          25s
        ──────────────────────
        Total:                ~30s per service (16x faster!)

**Impact:**
- Docker build time: 8 min → 30 seconds per service
- No repeated dependency installations
- Smaller final images (just binary + base)

### 3. Centralized Configuration

**Problem:** 51 separate workflow files to maintain

**Solution:** Single config file drives everything

**service_config.json Structure:**

    {
      "services": [
        {
          "name": "api-gateway",
          "path": "cmd/api-gateway",
          "port": 8080,
          "dependencies": ["auth-service", "payment-processor"]
        },
        {
          "name": "auth-service",
          "path": "cmd/auth-service",
          "port": 8081,
          "dependencies": []
        },
        ... (49 more services)
      ],
      "build_matrix": [
        {"worker": 1, "services": ["api-gateway", "auth-service", ...]},
        {"worker": 2, "services": ["payment-processor", ...]},
        ... (14 workers total)
      ]
    }

**Workflow reads config dynamically:**

\`\`\`
    Read service_config.json
        │
        ├─► Generate build matrix
        ├─► Determine changed services
        ├─► Skip unchanged services
        └─► Execute parallel jobs
\`\`\`

**Benefits:**
- Add new service: Just add one JSON entry
- Update all services: Change config once
- Clear service dependencies and grouping
- Easy to audit and review

### 4. Smart Retry Logic for Flaky Connections

**Problem:** Flaky Docker registry connections causing failures

**Solution:** Retry logic with exponential backoff

**Retry Strategy:**

\`\`\`
    Docker push attempt 1
        │
        ├─► Success → Done ✓
        │
        └─► Failure → Wait 2s
                │
                ├─► Retry attempt 2
                │   │
                │   ├─► Success → Done ✓
                │   │
                │   └─► Failure → Wait 4s
                │           │
                │           ├─► Retry attempt 3
                │           │   │
                │           │   ├─► Success → Done ✓
                │           │   │
                │           │   └─► Failure → Wait 8s
                │           │           │
                │           │           └─► Final attempt → Report failure ✗
\`\`\`
**Exponential Backoff:**
- Attempt 1: Immediate
- Attempt 2: 2s delay
- Attempt 3: 4s delay
- Attempt 4: 8s delay
- Max retries: 4
- Success rate: 80% improvement


**Impact:** Reduced flaky failures by 80%

### 5. Dedicated GitHub Runner

**Problem:** Shared GitHub runners had resource contention

**Solution:** Dedicated self-hosted runner for UPI Switch

**Runner Specs:**
- **16 CPU cores** for parallel Go compilation
- **32 GB RAM** for large builds
- **500 GB SSD** for Docker layer caching
- **Dedicated network** to avoid rate limits

**Benefits:**
- Consistent performance (no noisy neighbors)
- Persistent Docker layer cache
- Faster network to private registries
- No GitHub Actions minute costs



### 6. Test Only Changed Code

**Problem:** Running all tests even when only one file changed

**Solution:** Smart test selection

**Change Detection Flow:**

\`\`\`
    git diff origin/main...HEAD
        │
        ├─► Changed files: cmd/api-gateway/**, pkg/auth/**
        │
        ├─► Determine affected services:
        │   │
        │   ├─► Direct changes: api-gateway, auth library
        │   │
        │   └─► Reverse dependencies: services using pkg/auth
        │
        └─► Run tests ONLY for:
            ├─► api-gateway tests
            ├─► auth library tests
            └─► services depending on auth (5 services)
\`\`\`
**Test Execution:**

    Before (all tests):
        51 services × ~18s = 15 minutes

    After (changed only):
        7 services × ~18s = 3 minutes (80% savings for typical PR)


**Linting optimization:**

**Selective Linting:**

\`\`\`
    git diff --name-only origin/main...HEAD
        │
        ├─► Changed files:
        │   - cmd/api-gateway/main.go
        │   - pkg/auth/jwt.go
        │   - pkg/auth/jwt_test.go
        │
        └─► Run golangci-lint ONLY on these 3 files
            (instead of all 500+ files)
\`\`\`
**Lint Time:**

    Before: golangci-lint run ./...
        → All files: ~5 minutes

    After: golangci-lint run --new-from-rev=origin/main
        → Changed files only: ~30 seconds

**Impact:**
- Full test suite: 15 min → 3 min (for typical PRs)
- Linting: 5 min → 30 sec
### 5. Quality Gates (Saved: 5 minutes per failed build)

**Problem:** Wasting time on builds that will fail

**Solution:** Fast-fail checks first

**Quality Gate Pipeline:**

\`\`\`
    ┌────────────────────────────────┐
    │  Stage 1: Syntax & Formatting  │
    │  (30 seconds)                  │
    └──────────┬─────────────────────┘
               │ PASS
               ▼
    ┌────────────────────────────────┐
    │  Stage 2: Linting              │
    │  (3 minutes)                   │
    └──────────┬─────────────────────┘
               │ PASS
               ▼
    ┌────────────────────────────────┐
    │  Stage 3: Unit Tests           │
    │  (3 minutes)                   │
    └──────────┬─────────────────────┘
               │ PASS
               ▼
    ┌────────────────────────────────┐
    │  Stage 4: Build Binaries       │
    │  (10 minutes)                  │
    └──────────┬─────────────────────┘
               │ PASS
               ▼
    ┌────────────────────────────────┐
    │  Stage 5: Docker Build + E2E   │
    │  (7 minutes)                   │
    └────────────────────────────────┘
\`\`\`
**Fail Fast Benefits:**
- 60% of failures caught in first 2 minutes
- No wasted time on expensive builds
- Quick feedback to developers


**Linting Example:**

**Workflow Step:**

    name: Lint Code
    runs-on: self-hosted

    steps:
      - name: Quick syntax check
        run: gofmt -l . | tee /dev/stderr | wc -l | grep -q "^0$"
        # Fails immediately if formatting issues found

      - name: Run golangci-lint
        run: golangci-lint run --new-from-rev=origin/main

    # If either fails, entire workflow stops here
    # Saves ~15 minutes of wasted build time


**Impact:** Catch 60% of failures in first 2 minutes

### 6. Test Optimization (Saved: 4 minutes)

**Problem:** Slow database setup in tests

**Before (Slow):**

\`\`\`
    Each test:
        │
        ├─► Start Docker container (Postgres)
        ├─► Wait for healthy (5s)
        ├─► Run migrations (3s)
        ├─► Execute test (2s)
        └─► Teardown (2s)

        Total: ~12s per test × 50 tests = 10 minutes
\`\`\`

**After (Fast):**

\`\`\`
    Test suite setup (ONCE):
        │
        ├─► Start Docker container (Postgres)
        ├─► Wait for healthy (5s)
        └─► Run migrations (3s)

    Each test:
        │
        ├─► BEGIN TRANSACTION
        ├─► Execute test (2s)
        └─► ROLLBACK

        Total: 8s setup + (2s × 50 tests) = 1m 48s

    Teardown (ONCE):
        └─► Stop Docker container
\`\`\`
**Speedup:** 10 minutes → 2 minutes (5x faster!)

**Impact:** Test suite from 12 min → 8 min
### 7. Automated Manifest Generation (Saved: 2 minutes)

**Problem:** Manual Kubernetes manifest updates

**Solution:** Automated generation with Helm

**Helm Template Structure:**

\`\`\`
    templates/
        ├─► deployment.yaml (template with {{ .Values.image }})
        ├─► service.yaml
        └─► ingress.yaml

    values.yaml:
        image:
          repository: upi-switch/api-gateway
          tag: {{ .SHA }}
        replicas: 3
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
\`\`\`
**Generation Flow:**

\`\`\`
    Docker build completes
        │
        ├─► Extract image SHA: sha256:abc123...
        │
        ├─► Update values.yaml with new SHA
        │
        ├─► Run: helm template ./charts > manifests/api-gateway.yaml
        │
        └─► Commit manifests/ to GitOps repo
\`\`\`

**GitHub Actions:**

**Workflow:**

    name: Update Kubernetes Manifests

    on:
      workflow_run:
        workflows: ["Docker Build"]
        types: [completed]

    steps:
      1. Checkout GitOps repo
      2. Update image tag in values.yaml
      3. Run helm template
      4. Commit & push to GitOps repo
      5. ArgoCD auto-syncs and deploys

**Result:**
- Zero manual manifest updates
- Automated, consistent deployments
- Full audit trail in Git


## Results

### Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Total checks** | 240+ | 54 | **77% fewer** |
| **Total time** | 45+ min | 15-20 min | **60% faster** |
| **Binary builds** | 45 min | ~5 min | **89% faster** |
| **Docker packaging** | Serial | 14 parallel jobs | **~5 min** |
| **E2E tests** | Included in total | ~7 min | Parallelized |
| **Linting** | 5 min (all files) | ~3 min (changed) | 40% faster |
| **Cache hit rate** | ~40% | **~90%** | 2.25x better |
| **Flaky failures** | High | **80% reduced** | Retry logic |

### Timing Breakdown

**After optimization:**
1. **Binary builds:** ~10 minutes (with 90% cache hits)
2. **E2E tests:** ~7 minutes (parallel)
3. **Linting & quality:** ~3 minutes (changed files only)

**Total:** 15-20 minutes (depending on cache hits)

### Business Impact

**Developer Productivity:**
- **Feedback time:** 45 min → 15-20 min (**~50% faster**)
- **PR velocity:** Developers can merge faster
- **Context switching:** Less waiting means better flow
- **Developer satisfaction:** 2/10 → 9/10
**Operational Wins:**
- **MTTR reduced:** Faster debugging with 54 checks vs 240+
- **Scalability:** Adding services is now trivial (one JSON entry)
- **Reliability:** 80% reduction in flaky failures
- **Maintenance:** Centralized config vs 51 workflow files

**Cost Savings:**
- **Compute costs:** 60% reduction in CI/CD minutes
- **Developer time:** 30 min saved per PR × thousands of PRs/year
- **Infrastructure:** Dedicated runner paid for itself in 2 months

### Key Metrics

**Deployment Stats:**
- **51 deployables** across **10+ microservices**
- **3 container registries:** Harbor, APB ECR, Axis ECR
- **Thousands of builds** per month
- **Zero deployment failures** from CI issues post-optimization

## Architecture Deep Dive

### One-Shot Binary Build Process



### Parallel Packaging Strategy

14 parallel jobs, each handling ~3-4 services:



## Implementation Timeline

**Week 1-2:** Analysis and design
- Profiled existing pipeline bottlenecks
- Analyzed service dependencies
- Designed new architecture
- Created centralized config schema

**Week 3-4:** Core implementation
- Implemented one-shot binary builds
- Created prebuilt base image
- Set up dedicated runner
- Built retry logic

**Week 5:** Testing and refinement
- Tested with real PRs
- Tuned parallel job count (14 optimal)
- Optimized cache strategies
- Fixed edge cases

**Week 6:** Rollout and monitoring
- Gradual rollout to team
- Monitoring and alerting setup
- Documentation and training
- **Results:** 45 min → 15-20 min ✓
## Key Learnings

### 1. Build Once, Package Many

Don't rebuild the same code 51 times. Build all binaries in one shot, then package them in parallel.

**Impact:** Binary build time reduced from 45 min to 5 min

### 2. Cache Aggressively

With 90% cache hit rate, most builds skip compilation entirely:
- Go module cache (persistent on dedicated runner)
- Docker layer cache (local on runner)
- Binary cache between build and package stages

### 3. Centralize Configuration

One JSON file is easier to maintain than 51 YAML workflows:
- Single source of truth
- Easy to add services
- Clear dependencies
- Reviewable in one place

### 4. Fix Flakiness, Don't Accept It

Connection timeouts were killing productivity:
- Added retry logic with exponential backoff
- Dedicated runner eliminated rate limits
- Multi-registry push with fallback
- **Result:** 80% reduction in flaky failures

### 5. Measure Everything

Track metrics to prove improvements:
- Pipeline duration per stage
- Cache hit rates
- Failure rates by type
- Developer feedback

### 6. Parallelize Intelligently

Don't just run everything in parallel:
- **14 parallel packaging jobs** (optimal for our runner)
- **Sequential binary builds** (shared module cache)
- **Parallel tests** (independent services)

## Technical Details

**Static Linking for Smaller Images:**


**Multi-Registry Push Strategy:**


**Service Batching Logic:**
- Batch 1-3: Core services (payment, reconciliation)
- Batch 4-8: Supporting services (analytics, notifications)
- Batch 9-14: Auxiliary services (monitoring, tools)

## Team & Collaboration

**Contributors:**
- **Abhimanyu Kumbhar** - Architecture design, implementation lead
- **Anuj** - Testing strategy, retry logic
- **Soji Antony** - Multi-registry setup, deployment

**Cross-team impact:**
- 15+ developers benefiting daily
- 3 teams using the pipeline
- Dozens of PRs per day

## Technologies Used

- **CI/CD:** GitHub Actions (self-hosted runner)
- **Language:** Golang 1.21
- **Container Registries:** Harbor, AWS ECR (APB, Axis)
- **Build Tools:** go install, Docker
- **Caching:** GitHub Actions cache, Docker layers
- **Config:** JSON (centralized service config)
- **Scripting:** Bash

## Documentation & Resources

- **Image Build Spec:** Internal design doc
- **Overall CI Spec:** Architecture documentation
- **Service Config:** .github/service_config.json
- **Workflow Files:** .github/workflows/upi-switch-ci.yml

---

This project showcases building CI/CD infrastructure at scale for mono-repos with dozens of deployables, achieving dramatic improvements in speed, reliability, and maintainability.
    `,techStack:["GitHub Actions","Golang","Docker","Harbor","AWS ECR","Bash"],category:"professional",links:{},featured:!0,duration:"6 weeks",role:"Implementation Lead",team:"3 engineers (Abhimanyu Kumbhar, Anuj, Soji Antony)",impact:["60% faster builds (45min → 15-20min)","77% fewer checks (240+ → 54)","90% cache hit rate achieved","80% reduction in flaky failures","51 deployables across 10+ microservices"]},{id:"project-4",title:"Stripe Payment Integration",slug:"stripe-payment-integration",description:"Built comprehensive Stripe-powered bank transfer system with virtual accounts, autopay, and scheduled payments, significantly improving payment compliance and user retention.",content:`
# Stripe Payment Integration

Complete payment infrastructure built with Stripe API, handling virtual accounts, autopay, and scheduled payments.

## Project Overview

Built at Inkle to handle complex B2B payment workflows including bank transfers, automatic payments, and scheduled billing for US business compliance services.

## The Requirements

Our application needed to:
1. **Accept bank transfers** from customers
2. **Handle edge cases** - partial payments, overpayments gracefully
3. **Support autopay** using customer credits
4. **Schedule future payments** for recurring bills
5. **Track status** in real-time via webhooks
6. **Zero manual intervention** for reconciliation

## System Architecture

**Stripe Payment Flow:**

\`\`\`
    Customer Bank Account
            │
            ▼
    ┌─────────────────────┐
    │ Virtual Account     │
    │ (Stripe FinAcct)    │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Stripe Webhook      │
    │ (payment received)  │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Our Backend         │
    │ - Match payment     │
    │ - Update invoice    │
    │ - Handle credits    │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Customer Notified   │
    │ (Email + Dashboard) │
    └─────────────────────┘
\`\`\`

## Feature 1: Virtual Accounts

Virtual accounts allow customers to send bank transfers to unique account numbers that route directly to your Stripe account.

### Why Virtual Accounts?

**Traditional approach:**
- Customer sends bank transfer to company account
- Manually match transfers to invoices
- Error-prone and time-consuming

**Virtual accounts:**
- Each customer gets unique account number
- Automatic matching via Stripe
- Real-time notifications
- Zero manual reconciliation

### Implementation

**Virtual Account Setup:**

\`\`\`
    Customer Onboarding
        │
        ├──► Create Stripe Customer
        │
        ├──► Create Financial Account
        │      │
        │      └──► Get unique routing + account number
        │
        ├──► Store in database
        │
        └──► Display to customer
\`\`\`
**Customer receives:**
- Routing number: 123456789
- Account number: Unique 10-digit number
- Instructions for bank transfer


### Creating Virtual Accounts

**API Flow:**

\`\`\`
    POST /api/stripe/create-virtual-account
        │
        ├──► Stripe API: Create Customer
        │
        ├──► Stripe API: Create Financial Account
        │    └──► Response: { routing_number, account_number }
        │
        ├──► Save to DB: customer_payment_methods table
        │
        └──► Return to frontend: Account details
\`\`\`
**Database Schema:**

    customer_payment_methods:
        - customer_id (FK)
        - stripe_customer_id
        - stripe_financial_account_id
        - routing_number
        - account_number
        - status (active/inactive)
        - created_at


## Feature 2: Smart Payment Reconciliation

Handle partial payments, overpayments, and exact payments automatically.

### The Challenge

Customers don't always send exact amounts:
- **Underpayment:** Customer sends $900 for $1000 invoice
- **Exact payment:** Customer sends $1000 for $1000 invoice
- **Overpayment:** Customer sends $1100 for $1000 invoice

### Solution

**Payment Reconciliation Logic:**

\`\`\`
    Webhook: payment.received (\${amount})
        │
        ├──► Get pending invoices for customer
        │
        ├──► Compare: amount vs total_due
        │
        ├──────┬──────┬──────┐
        │      │      │      │
        ▼      ▼      ▼      ▼
    Exact  Under  Over  Multiple
        │      │      │    Invoices
        │      │      │      │
        ▼      ▼      ▼      ▼
    Mark   Apply  Apply  Apply to
    Paid   Partial Full + oldest first
           Payment Credit + update
                   balance remaining
\`\`\`
**Examples:**

    Scenario 1: Exact Payment
\`\`\`
        Invoice: $1000 | Payment: $1000
        → Invoice status: PAID ✓

    Scenario 2: Underpayment
        Invoice: $1000 | Payment: $900
        → Invoice status: PARTIAL ($100 remaining)

    Scenario 3: Overpayment
        Invoice: $1000 | Payment: $1100
        → Invoice status: PAID ✓
        → Customer credit: +$100
\`\`\`

## Feature 3: Autopay with Credits

Automatically use customer credits to pay invoices.

### Daily Autopay Job

**Autopay Workflow (runs daily at 2 AM UTC):**

\`\`\`
    Cron Job Triggered
        │
        ├──► Query: customers with autopay_enabled = true
        │
        ├──► For each customer:
        │    │
        │    ├──► Get pending invoices (due_date <= today)
        │    │
        │    ├──► Check customer credit balance
        │    │
        │    ├──────┬────────┐
        │    │      │        │
        │    ▼      ▼        ▼
        │  Credit  Credit  Insufficient
        │  >= Due  < Due   Credit
        │    │      │        │
        │    ▼      ▼        ▼
        │  Pay    Partial   Send
        │  Full   Payment   Reminder
        │    │      │        │
        │    └──────┴────────┘
        │           │
        └───────────┼────► Update invoice status
                    │
                    └────► Send notification
\`\`\`
**Credit Deduction:**

    Before: Customer credit = $500, Invoice = $300
    After:  Customer credit = $200, Invoice = PAID


## Feature 4: Scheduled Payments

Allow customers to schedule future payments.

**Scheduled Payment Flow:**

\`\`\`
    Customer Dashboard
        │
        ├──► Select invoice(s)
        │
        ├──► Choose payment date (future)
        │
        ├──► Confirm schedule
        │
        ▼
    Create scheduled_payments record:
        - invoice_id
        - customer_id
        - amount
        - scheduled_date
        - status: PENDING
\`\`\`
**Daily Processor (runs at 3 AM UTC):**

\`\`\`
    Query: scheduled_payments where scheduled_date = today
        │
        ├──► For each scheduled payment:
        │    │
        │    ├──► Check customer credit
        │    │
        │    ├─────┬─────┐
        │    │     │     │
        │    ▼     ▼     ▼
        │  Enough  Not   Process
        │  Credit  Enough Payment
        │    │      │
        │    ▼      ▼
        │  Deduct  Notify
        │  Credit  Customer
        │    │      │
        │    └──────┴────► Update status: COMPLETED/FAILED
\`\`\`

## Feature 5: Webhook Handling

Real-time event processing from Stripe.

**Webhook Processing Flow:**

\`\`\`
    Stripe Event Triggered
        │
        ▼
    POST /webhooks/stripe
        │
        ├──► Verify signature (security)
        │
        ├──► Parse event type
        │
        ├───────┬───────┬───────┬────────┐
        │       │       │       │        │
        ▼       ▼       ▼       ▼        ▼
    payment. charge. customer. payment_ financial_
    intent   failed  updated   method   account
    succeeded                 attached  updated
        │       │       │       │        │
        ▼       ▼       ▼       ▼        ▼
    Update  Notify  Update  Link to Update
    Invoice Customer Profile Customer Account
    Status                            Info
\`\`\`
**Event Types Handled:**

\`\`\`
    1. financial_account.payment.received
       → Match payment to invoice
       → Update invoice status
       → Handle credits

    2. charge.failed
       → Mark payment as failed
       → Notify customer
       → Retry logic

    3. customer.updated
       → Sync customer data

    4. payment_intent.succeeded
       → Confirm payment success
\`\`\`
**Idempotency:**

\`\`\`
    Each webhook has unique event_id
        │
        ├──► Check if already processed
        │    (lookup in processed_events table)
        │
        ├─────┬─────┐
        │     │     │
        ▼     ▼     ▼
      Found  Not   Process
            Found  Event
        │     │
        ▼     └────► Insert event_id
      Skip           into processed_events
    Processing
\`\`\`

## Results & Impact

### Adoption Metrics

- **User adoption:** **85%** of customers use bank transfers
- **Payment success rate:** **96%**
- **Autopay adoption:** **60%** enabled autopay
- **Support tickets:** **40% reduction** in payment-related queries

### Business Impact

- **Processing time:** Manual reconciliation **eliminated**
- **Overpayment handling:** **Automated**, zero manual intervention
- **Customer satisfaction:** **+25% improvement**
- **Revenue collection:** **15% faster** payment collection

### Technical Achievements

- **Zero data loss:** 100% accuracy in payment matching
- **Real-time updates:** < 1 second webhook processing
- **Scalability:** Handles 1000+ payments/day
- **Reliability:** 99.9% uptime

## Key Learnings

### 1. Idempotency is Critical

**Problem:** Webhooks can be sent multiple times

**Solution:** Idempotency keys ensure operations run only once

**Implementation:**

\`\`\`
    Webhook received with event_id: evt_123
        │
        ├──► Check: SELECT * FROM processed_events WHERE event_id = 'evt_123'
        │
        ├──────┬───────┐
        │      │       │
        ▼      ▼       ▼
      Exists Empty   Process
        │      │       │
        ▼      ▼       ▼
     Return  Insert  Execute
      200    evt_123 Business
             in DB   Logic
                      │
                      └──► Return 200
\`\`\`
**Benefits:**
- Duplicate webhooks don't cause duplicate payments
- Safe to retry failed webhooks
- Data consistency guaranteed


### 2. Handle All Edge Cases

- Partial payments
- Overpayments
- Duplicate webhooks
- Network timeouts
- Card declines

### 3. Test Thoroughly

Use Stripe's test mode extensively:

**Test Scenarios:**

\`\`\`
    1. Success Flow:
       └──► Test card: 4242 4242 4242 4242
            └──► Payment succeeds ✓

    2. Declined Card:
       └──► Test card: 4000 0000 0000 0002
            └──► Payment fails (card declined)

    3. Insufficient Funds:
       └──► Test card: 4000 0000 0000 9995
            └──► Payment fails (insufficient funds)

    4. Webhook Testing:
       └──► Stripe CLI: stripe listen --forward-to localhost:8000/webhooks
            └──► Trigger events manually
                 └──► Verify handling
\`\`\`
**Integration Tests:**

\`\`\`
    Test Suite Coverage:
        ├──► Virtual account creation
        ├──► Payment matching (exact, partial, over)
        ├──► Autopay execution
        ├──► Scheduled payments
        ├──► Webhook processing (all event types)
        └──► Idempotency checks
\`\`\`
### 4. Monitor Everything

- Payment success rates
- Webhook processing times
- Failed payment reasons
- Credit usage patterns

## Technologies Used

- **Payment Processing:** Stripe API
- **Backend:** Python, Django
- **Database:** PostgreSQL
- **Task Queue:** Celery, Redis
- **Monitoring:** Sentry, Datadog
- **Webhooks:** Stripe webhooks

---

This project showcases building production-grade payment infrastructure with complex business logic and edge case handling.
    `,techStack:["Python","Django","Stripe API","PostgreSQL","Redis","Celery"],category:"professional",links:{},duration:"6 months",role:"Backend Lead",team:"3 engineers",impact:["85% user adoption rate","96% payment success rate","40% reduction in support tickets","15% faster revenue collection"]},{id:"project-5",title:"Entity Registration Compliance App",slug:"entity-registration-compliance-app",description:"Developed app consolidating US state-specific entity registrations, automating compliance workflows and reducing manual regulatory effort by 70%.",content:`
# Entity Registration Compliance App

Automated US state-specific business entity registration system, reducing manual compliance work by 70%.

## Overview

Built at Inkle to automate the complex process of registering business entities across all 50 US states, each with unique requirements and regulations.

## The Problem

US businesses need to register in multiple states:
- **50 different states** = 50 different processes
- **Varying requirements** per state
- **Different forms** and documentation
- **Manual tracking** of deadlines and renewals
- **Hours of manual work** per registration

**Manual process:**
1. Research state requirements (2-3 hours)
2. Gather documents (1-2 hours)
3. Fill out forms (1-2 hours)
4. Submit and track (ongoing)
5. Handle renewals (annually)

**Total:** 6-8 hours per state, per registration

## Solution

Automated workflow engine that:
1. **Determines requirements** based on state and entity type
2. **Generates forms** automatically
3. **Validates data** against state rules
4. **Submits electronically** where possible
5. **Tracks deadlines** and sends reminders

## Architecture

**System Flow:**

\`\`\`
    Customer Input
        │
        ▼
    ┌────────────────────┐
    │ State Selection    │
    │ + Entity Type      │
    └─────────┬──────────┘
              │
              ▼
    ┌────────────────────┐
    │ Requirements Engine│
    │ (State-specific    │
    │  rules lookup)     │
    └─────────┬──────────┘
              │
              ▼
    ┌────────────────────┐
    │ Form Generator     │
    │ (PDF templates     │
    │  + data mapping)   │
    └─────────┬──────────┘
              │
              ▼
    ┌────────────────────┐
    │ Validation System  │
    │ (State-specific    │
    │  business rules)   │
    └─────────┬──────────┘
              │
              ▼
    ┌────────────────────┐
    │ Submission Queue   │
    │ + Tracking         │
    └────────────────────┘
\`\`\`

## Technical Implementation

### State Requirements Database

**Database Schema:**

    state_requirements:
        - state_code (CA, NY, TX, ...)
        - entity_type (LLC, Corp, S-Corp, ...)
        - required_fields (JSON array)
        - optional_fields (JSON array)
        - filing_fee
        - processing_time_days
        - renewal_period (annual, biennial)
        - submission_method (online, mail, both)

**Example for Delaware LLC:**

    {
      "state": "DE",
      "entity_type": "LLC",
      "required_fields": [
        "company_name",
        "registered_agent_name",
        "registered_agent_address",
        "member_names"
      ],
      "filing_fee": 90,
      "processing_time": "3-5 days",
      "renewal_period": "annual"
    }


### Rules Engine

**Rule Evaluation Flow:**

\`\`\`
    Input: { state: "CA", entity_type: "LLC", data: {...} }
        │
        ▼
    Load state_requirements for CA + LLC
        │
        ▼
    Apply conditional rules:
        │
        ├──► IF foreign LLC → require certificate of good standing
        ├──► IF has_employees → require EIN
        ├──► IF revenue > $1M → require financial statements
        └──► IF nonprofit → require articles of incorporation
\`\`\`
**Rule Definition (JSON):**

    {
      "rule_id": "ca_llc_001",
      "condition": "data.has_employees == true",
      "action": "require_field",
      "field": "employer_identification_number",
      "message": "EIN required for LLCs with employees in California"
    }

**Rule Processing:**

\`\`\`
    For each rule in state_requirements:
        │
        ├──► Evaluate condition
        │
        ├─────┬─────┐
        │     │     │
        ▼     ▼     ▼
      True  False Skip
        │
        ▼
    Execute action (add field, show warning, calculate fee)
\`\`\`

### Form Generator

**PDF Generation Flow:**

\`\`\`
    1. Load Template
        │
        ├──► PDF template for state/entity combo
        │    (e.g., CA_LLC_Form100.pdf)
        │
        ▼
    2. Map Data to Coordinates
        │
        ├──► Field mapping configuration:
        │    {
        │      "company_name": {"x": 120, "y": 450, "page": 1},
        │      "registered_agent": {"x": 120, "y": 380, "page": 1},
        │      ...
        │    }
        │
        ▼
    3. Fill Form Fields
        │
        ├──► Use PyPDF2 to write text at coordinates
        ├──► Apply font, size, alignment per field
        │
        ▼
    4. Generate Final PDF
        │
        └──► Save to S3, return download link
\`\`\`
**Template Management:**

\`\`\`
    templates/
        ├── CA/
        │   ├── LLC_Form100.pdf
        │   ├── Corp_Form200.pdf
        │   └── mapping.json
        ├── NY/
        │   ├── LLC_ArticlesOfOrg.pdf
        │   └── mapping.json
        └── ... (50 states)
\`\`\`

### Validation System

**Multi-Layer Validation:**

\`\`\`
    ┌─────────────────────┐
    │ Layer 1: Frontend   │
    │ - Format checking   │
    │ - Required fields   │
    │ - Real-time feedback│
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Layer 2: Backend    │
    │ - Business rules    │
    │ - State-specific    │
    │ - Cross-field logic │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Layer 3: State API  │
    │ - Name availability │
    │ - EIN verification  │
    │ - Address validation│
    └─────────────────────┘
\`\`\`
**Validation Rules (California LLC Example):**

    company_name:
        - Must end with "LLC" or "Limited Liability Company"
        - Cannot contain restricted words (Bank, Insurance, etc.)
        - Must be unique (check with CA Secretary of State API)
        - Max length: 255 characters

    registered_agent:
        - Must have physical address in CA (no PO boxes)
        - Must be 18+ years old
        - Must accept service of process

    member_names:
        - At least 1 member required
        - Full legal names (first + last)
        - No duplicate members

**Validation Flow:**

\`\`\`
    User submits form
        │
        ├──► Run validations
        │
        ├──────┬──────┬──────┐
        │      │      │      │
        ▼      ▼      ▼      ▼
      Name  Address EIN  Custom
      Check  Valid   Valid Rules
        │      │      │      │
        └──────┴──────┴──────┘
               │
               ├──► All passed → Generate PDF
               └──► Any failed → Show errors
\`\`\`

### Workflow Automation

**Registration Workflow:**

\`\`\`
    ┌────────────────┐
    │ 1. Initiated   │
    │ (form created) │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 2. Validating  │
    │ (rules engine) │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 3. Generating  │
    │ (PDF creation) │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 4. Pending     │
    │ Review         │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 5. Submitted   │
    │ (to state)     │
    └────────┬───────┘
             │
             ▼
    ┌────────────────┐
    │ 6. Processing  │
    │ (state review) │
    └────────┬───────┘
             │
             ├──────┬──────┐
             │      │      │
             ▼      ▼      ▼
        Approved Rejected Resubmit
             │      │      │
             ▼      ▼      └──► Back to step 1
    ┌────────────────┐
    │ 7. Completed   │
    └────────────────┘
\`\`\`
**Automated Actions:**

\`\`\`
    State Transition → Trigger:
        │
        ├──► Initiated → Send confirmation email
        ├──► Validating → Run background checks
        ├──► Generating → Queue PDF job (Celery)
        ├──► Pending Review → Notify admin
        ├──► Submitted → Create tracking ticket
        ├──► Processing → Poll state API daily
        └──► Completed → Email certificate + invoice
\`\`\`
**Renewal Automation:**

\`\`\`
    Daily Cron Job (3 AM):
        │
        ├──► Query registrations expiring in 30 days
        │
        ├──► For each expiring registration:
        │    │
        │    ├──► Send reminder email
        │    ├──► Pre-fill renewal form
        │    └──► Generate draft invoice
        │
        └──► Repeat at 15 days, 7 days, 1 day
\`\`\`

## Results

### Efficiency Gains

\`\`\`
- **Manual effort:** 6-8 hours → **45 minutes** (85% reduction)
- **Error rate:** 15% → **<2%**
- **Processing time:** 3-5 days → **Same day** (form generation)
- **Cost per registration:** $150 → **$45** (70% reduction)
\`\`\`
### Business Impact

- **Registrations per month:** 50 → **200** (4x increase)
- **Customer satisfaction:** **+40%**
- **Support tickets:** **-60%** reduction
- **Revenue:** **+$50K/month** from increased capacity

### Scale Achievements

- **States supported:** All **50 states**
- **Entity types:** 8 (LLC, Corp, S-Corp, etc.)
- **Forms generated:** **3,000+ per month**
- **Success rate:** **98%**

## Key Features

### 1. State Selection & Requirements
- Interactive map for state selection
- Dynamic requirement list based on entity type
- Cost calculator with breakdown

### 2. Smart Form Filling
- Pre-filled data from previous registrations
- Auto-complete for common fields
- Real-time validation

### 3. Document Management
- Upload and store required documents
- PDF generation from templates
- Electronic signature support

### 4. Compliance Dashboard
- All registrations in one view
- Upcoming deadlines and reminders
- Status tracking per state

### 5. Renewal Automation
- Automatic renewal reminders
- Pre-filled renewal forms
- Payment processing

## Technologies Used

- **Backend:** Python, Django
- **Database:** PostgreSQL
- **PDF Processing:** ReportLab, PyPDF2
- **Task Queue:** Celery, Redis
- **Storage:** AWS S3
- **Notifications:** SendGrid, Twilio

## Challenges Overcome

### 1. State-Specific Rules

**Challenge:** Each state has unique requirements

**Solution:** Flexible rules engine with JSON-based configuration

### 2. Form Complexity

**Challenge:** 200+ different forms across states

**Solution:** Template system with coordinate mapping

### 3. Data Validation

**Challenge:** Different validation rules per state

**Solution:** Pluggable validator system

### 4. Deadline Tracking

**Challenge:** Different renewal schedules

**Solution:** Automated reminder system with Celery

---

This project demonstrates building a complex compliance automation system handling real-world regulatory requirements across multiple jurisdictions.
    `,techStack:["Python","Django","JavaScript","PostgreSQL","Celery","AWS S3"],category:"professional",links:{},duration:"8 months",role:"Full Stack Developer",team:"4 engineers",impact:["70% reduction in manual effort","4x increase in monthly registrations","85% faster processing time","$50K/month revenue increase"]},{id:"project-6",title:"Scalable Invoicing Tool",slug:"scalable-invoicing-tool",description:"Engineered invoicing platform with public sharing and dynamic views, reducing invoice-related queries by 40% and improving processing time.",content:`
# Scalable Invoicing Tool

Modern invoicing platform with public sharing, dynamic views, and automated workflows.

## Overview

Built at Inkle to handle complex B2B invoicing requirements for US business compliance services, supporting thousands of monthly invoices with zero manual processing.

## The Challenge

**Previous system:**
- Manual invoice creation (15 min per invoice)
- Email attachments (hard to track)
- No payment tracking
- Customer queries (200+ per month)
- No public invoice access
- PDF generation issues

## Solution

Built a comprehensive invoicing platform with:
- **Automated invoice generation** from services
- **Public shareable links** (no login required)
- **Real-time payment tracking**
- **Dynamic PDF generation**
- **Multi-currency support**
- **Automated reminders**

## System Architecture

**Invoicing Flow:**

\`\`\`
    Service Completed
        │
        ▼
    ┌─────────────────────┐
    │ Invoice Generator   │
    │ (Celery Task)       │
    └──────────┬──────────┘
               │
               ├──► Create invoice record (DB)
               │
               ├──► Generate PDF (WeasyPrint)
               │
               ├──► Upload to S3
               │
               ├──► Create public link (UUID)
               │
               ├──► Send email notification
               │
               └──► Add to payment queue
                        │
                        ▼
    ┌─────────────────────┐
    │ Customer Receives   │
    │ - Email with link   │
    │ - Public invoice URL│
    │ - Pay Now button    │
    └──────────┬──────────┘
               │
               ├──► View invoice (public page)
               │
               ├──► Pay via Stripe
               │
               ▼
    ┌─────────────────────┐
    │ Webhook Handler     │
    │ - Mark as paid      │
    │ - Update ledger     │
    │ - Send receipt      │
    └─────────────────────┘
\`\`\`

## Key Features Implemented

### 1. Automated Invoice Generation

**Trigger Event:**

\`\`\`
    Service Order Marked Complete
        │
        ▼
    Celery Task: generate_invoice.delay(order_id)
        │
        ├──► Fetch order details from DB
        │    - Customer info
        │    - Line items
        │    - Pricing
        │    - Tax calculations
        │
        ├──► Calculate totals:
        │    - Subtotal
        │    - Tax (based on state)
        │    - Discounts
        │    - Grand total
        │
        ├──► Create invoice record:
        │    - invoice_number (auto-increment)
        │    - due_date (terms: net-30)
        │    - status: PENDING
        │    - public_uuid (for shareable link)
        │
        ├──► Generate PDF (next section)
        │
        └──► Send notification email
\`\`\`
**Invoice Number Generation:**

    Format: INV-YYYY-MM-NNNN
    Example: INV-2025-03-0042

    Atomically increment counter per month
    Ensures unique, sequential numbers


### 2. Public Invoice View

**Public URL Structure:**

    https://invoices.inkle.io/v/{uuid}

    Example: https://invoices.inkle.io/v/a1b2c3d4-e5f6-7890-abcd-ef1234567890

**Access Flow:**

\`\`\`
    Customer clicks link
        │
        ├──► No authentication required ✓
        │
        ├──► Fetch invoice by UUID
        │    (UUID is unguessable, acts as secret)
        │
        ├──► Render public view:
        │    │
        │    ├──► Invoice details
        │    ├──► Line items
        │    ├──► Payment status
        │    ├──► Download PDF button
        │    └──► Pay Now button (if unpaid)
        │
        └──► Track view event (analytics)
\`\`\`
**Security:**

    - UUID v4: 128-bit random (impossible to guess)
    - Read-only access
    - No sensitive customer data exposed
    - Rate limiting: 100 requests/hour per IP
    - No edit/delete capabilities


### 3. Dynamic PDF Generation

**PDF Generation Pipeline:**

\`\`\`
    Invoice Data (JSON)
        │
        ▼
    HTML Template (Jinja2)
        │
        ├──► Company logo
        ├──► Invoice header (number, date, due date)
        ├──► Bill To / Bill From addresses
        ├──► Line items table
        ├──► Subtotal, tax, total
        └──► Payment instructions
        │
        ▼
    CSS Styling (Tailwind)
        │
        ├──► Professional layout
        ├──► Responsive sizing
        └──► Print-optimized
        │
        ▼
    WeasyPrint Renderer
        │
        ├──► Convert HTML+CSS to PDF
        ├──► Embed fonts
        └──► Optimize file size
        │
        ▼
    Upload to S3
        │
        ├──► Bucket: invoices-production
        ├──► Path: {year}/{month}/{invoice_id}.pdf
        └──► Public URL (signed, 24h expiry)
\`\`\`
**Template Example:**

    <!DOCTYPE html>
    <html>
    <head>
        <style>
            @page { size: A4; margin: 2cm; }
            .invoice-header { font-size: 24px; }
            .line-items { width: 100%; }
        </style>
    </head>
    <body>
        <div class="invoice-header">
            Invoice #{invoice.number}
        </div>
        <!-- ... rest of invoice HTML ... -->
    </body>
    </html>

**Performance:**

    Average generation time: 2-3 seconds
    Cached template compilation: Yes
    Parallel generation: Up to 10 workers


### 4. Payment Integration

**Payment Flow:**

\`\`\`
    Customer clicks "Pay Now"
        │
        ▼
    Stripe Checkout Session
        │
        ├──► Pre-filled amount
        ├──► Customer email
        └──► Success/cancel URLs
        │
        ▼
    Customer enters payment details
        │
        ├──► Card information
        ├──► Billing address
        │
        ▼
    Stripe processes payment
        │
        ├─────┬─────┐
        │     │     │
        ▼     ▼     ▼
    Success Fail  Partial
        │     │     │
        ▼     ▼     ▼
    Webhook Webhook Webhook
    Received Received Received
        │     │     │
        ▼     ▼     ▼
    Update  Notify  Apply
    Status  Customer Partial
    = PAID  Retry   + Track
        │     │     │
        ▼     ▼     ▼
    Send   Send    Send
    Receipt Failure Partial
    Email   Email   Receipt
\`\`\`
**Partial Payment Handling:**

    Invoice total: $1,000
\`\`\`
    Payment received: $700
        │
        ├──► Create payment record: $700
        ├──► Update invoice: amount_paid = $700
        ├──► Calculate remaining: $300
        └──► Status: PARTIALLY_PAID
\`\`\`

### 5. Automated Reminders

**Reminder Schedule:**

\`\`\`
    Daily Cron Job (9 AM UTC)
        │
        ├──► Query unpaid invoices
        │
        ├─────────┬─────────┬─────────┬─────────┐
        │         │         │         │         │
        ▼         ▼         ▼         ▼         ▼
    Due in  Due in  Due    1 day   7 days
    7 days  3 days  today  overdue overdue
        │         │         │         │         │
        ▼         ▼         ▼         ▼         ▼
    Friendly Gentle Polite Firm   Final
    Reminder Reminder Notice Warning Notice
        │         │         │         │         │
        └─────────┴─────────┴─────────┴─────────┘
                            │
                            ▼
                Send email via SendGrid
                            │
                            ├──► Track send event
                            └──► Log reminder in DB
\`\`\`
**Email Templates:**

    7 days before:
        Subject: "Invoice #{number} Due Next Week"
        Tone: Friendly reminder
        CTA: "View Invoice"

    Due today:
        Subject: "Invoice #{number} Due Today"
        Tone: Polite notification
        CTA: "Pay Now"

    1 day overdue:
        Subject: "Invoice #{number} Payment Overdue"
        Tone: Firm but professional
        CTA: "Pay Now to Avoid Late Fees"

    7 days overdue:
        Subject: "Final Notice: Invoice #{number}"
        Tone: Serious, mention consequences
        CTA: "Immediate Payment Required"

**Reminder Logic:**

    - Max 1 reminder per invoice per day
    - Stop reminders after payment
    - Pause reminders if payment plan agreed
    - Escalate to collections after 30 days overdue


### 6. Invoice Analytics

**Dashboard Metrics:**

\`\`\`
    ┌─────────────────────────────────┐
    │ Revenue Overview                │
    │                                 │
    │ Total Revenue:    $150,000      │
    │ Outstanding:      $45,000       │
    │ Overdue:          $12,000       │
    │ Collected:        $105,000      │
    └─────────────────────────────────┘

    ┌─────────────────────────────────┐
    │ Payment Statistics              │
    │                                 │
    │ Avg Days to Pay:  28 days       │
    │ Payment Rate:     89%            │
    │ Partial Payments: 12%            │
    │ Late Payments:    8%             │
    └─────────────────────────────────┘

    ┌─────────────────────────────────┐
    │ Invoice Breakdown               │
    │                                 │
    │ Paid:        150 (75%)          │
    │ Pending:      40 (20%)          │
    │ Overdue:      10 (5%)           │
    │ Total:       200                │
    └─────────────────────────────────┘
\`\`\`
**Real-Time Queries:**

    SELECT
        COUNT(*) FILTER (WHERE status = 'PAID') as paid,
        COUNT(*) FILTER (WHERE status = 'PENDING') as pending,
        COUNT(*) FILTER (WHERE status = 'OVERDUE') as overdue,
        SUM(amount) FILTER (WHERE status = 'PAID') as revenue,
        SUM(amount) FILTER (WHERE status = 'PENDING') as outstanding,
        AVG(paid_at - created_at) FILTER (WHERE status = 'PAID') as avg_days
    FROM invoices
    WHERE created_at >= NOW() - INTERVAL '30 days'

**Visualizations:**

    - Revenue trend (last 12 months)
    - Payment status pie chart
    - Top 10 customers by revenue
    - Aging report (0-30, 31-60, 61-90, 90+ days)
    - Payment method breakdown

**Export Options:**

    - CSV export for accounting
    - PDF summary report
    - QuickBooks integration (future)


## Results

### Efficiency Improvements

\`\`\`
- **Invoice creation time:** 15 min → **30 seconds** (96% faster)
- **PDF generation:** Manual → **Automated** (100%)
- **Payment tracking:** Manual → **Real-time**
- **Customer queries:** 200/month → **120/month** (40% reduction)
\`\`\`
### Business Impact

\`\`\`
- **Monthly invoices processed:** 500 → **2,000** (4x increase)
- **Collection time:** 45 days → **28 days** (38% faster)
- **Payment rate:** 75% → **89%** (+14%)
\`\`\`
- **Customer satisfaction:** **+35%**

### Cost Savings

- **Manual processing:** $5,000/month → **$500/month**
- **Support costs:** Reduced **60%**
- **Late payments:** Reduced **45%**

## Key Features

✅ **Automated invoice generation** from service orders
✅ **Public shareable links** (no login required)
✅ **Professional PDF generation** with branding
✅ **Online payment** via Stripe
✅ **Automated reminders** for due/overdue invoices
✅ **Real-time analytics** dashboard
✅ **Multi-currency** support
✅ **Partial payments** tracking
✅ **Custom branding** per customer
✅ **Email notifications** for all events

## Technologies Used

- **Backend:** Python, Django
- **Database:** PostgreSQL
- **PDF Generation:** WeasyPrint
- **Payment Processing:** Stripe API
- **Storage:** AWS S3
- **Email:** SendGrid
- **Frontend:** JavaScript, Tailwind CSS
- **Task Queue:** Celery, Redis

## Lessons Learned

### 1. Public Access Increases Payment Rate

Customers are 3x more likely to pay when they can access invoices without logging in.

### 2. Automated Reminders Work

Gentle reminders at 3 days before, 1 day overdue, and 7 days overdue reduced late payments by 45%.

### 3. PDF Quality Matters

Professional-looking PDFs improve brand perception and payment willingness.

### 4. Real-Time Tracking Reduces Support

Customers can see payment status themselves, reducing "Did you receive my payment?" queries.

---

This project showcases building a production-grade invoicing system that handles complex business workflows with automation and excellent UX.
    `,techStack:["Python","Django","JavaScript","PostgreSQL","Redis","Stripe"],category:"professional",links:{},duration:"5 months",role:"Full Stack Developer",team:"3 engineers",impact:["96% faster invoice creation","40% reduction in customer queries","38% faster payment collection","4x increase in monthly invoices processed"]}],Kh=()=>{const e=ka.filter(n=>n.featured),t=ka.filter(n=>!n.featured);return u.jsxs("div",{className:"animate-fade-in",children:[e.length>0&&u.jsx(rt,{title:"Featured Projects",subtitle:"Highlighting my most impactful work",children:u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",children:e.map((n,r)=>u.jsx("div",{className:"animate-slide-up",style:{animationDelay:`${r*100}ms`},children:u.jsx($l,{project:n})},n.id))})}),u.jsx(rt,{id:"projects",title:e.length>0?"More Projects":"Projects",subtitle:"A collection of projects I've worked on",children:u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((n,r)=>u.jsx("div",{className:"animate-slide-up",style:{animationDelay:`${r*100}ms`},children:u.jsx($l,{project:n})},n.id))})})]})},Qh=()=>{const{slug:e}=cd(),t=ka.find(o=>o.slug===e),[n,r]=C.useState([]);C.useEffect(()=>{if(!t)return;const o=t.content.split(`
`),a=[];let s=0;for(;s<o.length;){const l=o[s];if(l.trim()===""){a.push(u.jsx("br",{},`br-${s}`)),s++;continue}if(l.startsWith("```")){const p=[];for(s++;s<o.length&&!o[s].startsWith("```");)p.push(o[s]),s++;a.push(u.jsx("pre",{className:"bg-stone-100 dark:bg-stone-800 p-3 sm:p-4 rounded-lg overflow-x-auto my-3 sm:my-4 text-xs sm:text-sm font-mono whitespace-pre leading-relaxed",children:u.jsx("code",{className:"font-mono",children:p.join(`
`)})},`code-${s}`)),s++;continue}if(l.startsWith("# ")){a.push(u.jsx("h1",{className:"text-4xl font-bold mt-8 mb-4",children:l.substring(2)},`h1-${s}`)),s++;continue}if(l.startsWith("## ")){a.push(u.jsx("h2",{className:"text-3xl font-bold mt-8 mb-4",children:l.substring(3)},`h2-${s}`)),s++;continue}if(l.startsWith("### ")){a.push(u.jsx("h3",{className:"text-2xl font-semibold mt-6 mb-3",children:l.substring(4)},`h3-${s}`)),s++;continue}if(l.trim()==="---"){a.push(u.jsx("hr",{className:"my-8 border-t-2 border-border dark:border-dark-border"},`hr-${s}`)),s++;continue}if(l.trim().startsWith("- ")){const p=l.substring(l.indexOf("- ")+2),m=i(p,s);a.push(u.jsx("li",{className:"ml-6 my-2",children:m},`li-${s}`)),s++;continue}if(/^\d+\./.test(l.trim())){const p=l.substring(l.indexOf(". ")+2),m=i(p,s);a.push(u.jsx("li",{className:"ml-6 my-2",children:m},`li-${s}`)),s++;continue}const c=i(l,s);a.push(u.jsx("p",{className:"my-4 leading-relaxed text-lg",children:c},`p-${s}`)),s++}r(a)},[t]);const i=(o,a)=>{const s=[];let l=0;const c=/`([^`]+)`/g;let p,m=0;for(;(p=c.exec(o))!==null;)p.index>m&&s.push(o.substring(m,p.index)),s.push(u.jsx("code",{className:"bg-stone-100 dark:bg-stone-800 px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono",children:p[1]},`code-${a}-${l++}`)),m=c.lastIndex;m<o.length&&s.push(o.substring(m));const g=[];return s.forEach((v,k)=>{if(typeof v=="string"){const y=/\*\*(.*?)\*\*/g;v.split(y).forEach((f,d)=>{d%2===1?g.push(u.jsx("strong",{children:f},`bold-${a}-${k}-${d}`)):f&&g.push(f)})}else g.push(v)}),g.length>0?g:o};return t?u.jsx("div",{className:"animate-fade-in",children:u.jsx(rt,{className:"pt-8 sm:pt-12",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6",children:[u.jsxs(He,{to:"/projects",className:"inline-flex items-center gap-2 text-sm sm:text-base text-accent dark:text-dark-accent hover:text-accent-hover dark:hover:text-dark-accent-hover mb-6 sm:mb-8 transition-colors",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 sm:w-5 sm:h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"Back to Projects"]}),u.jsxs("header",{className:"mb-6 sm:mb-8",children:[u.jsxs("div",{className:"mb-3 sm:mb-4",children:[u.jsx(Fe,{label:t.category,variant:"primary"}),t.featured&&u.jsx(Fe,{label:"Featured",variant:"primary",className:"ml-2"})]}),u.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground dark:text-dark-foreground",children:t.title}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm",children:[t.role&&u.jsxs("div",{children:[u.jsx("span",{className:"text-muted dark:text-dark-muted",children:"Role:"})," ",u.jsx("span",{className:"font-medium",children:t.role})]}),t.duration&&u.jsxs("div",{children:[u.jsx("span",{className:"text-muted dark:text-dark-muted",children:"Duration:"})," ",u.jsx("span",{className:"font-medium",children:t.duration})]}),t.team&&u.jsxs("div",{children:[u.jsx("span",{className:"text-muted dark:text-dark-muted",children:"Team:"})," ",u.jsx("span",{className:"font-medium",children:t.team})]})]}),u.jsx("div",{className:"mb-4 sm:mb-6",children:u.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:t.techStack.map(o=>u.jsx(Fe,{label:o,variant:"secondary"},o))})}),t.impact&&t.impact.length>0&&u.jsxs("div",{className:"bg-accent/5 dark:bg-dark-accent/5 border border-accent/20 dark:border-dark-accent/20 rounded-lg p-4 sm:p-6",children:[u.jsx("h3",{className:"text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground",children:"Key Impact"}),u.jsx("ul",{className:"space-y-1.5 sm:space-y-2",children:t.impact.map((o,a)=>u.jsxs("li",{className:"flex gap-2 sm:gap-3 text-xs sm:text-sm text-foreground dark:text-dark-foreground",children:[u.jsx("span",{className:"text-accent dark:text-dark-accent mt-0.5",children:"✓"}),u.jsx("span",{children:o})]},a))})]})]}),u.jsx("article",{className:"prose prose-stone dark:prose-invert max-w-none prose-sm sm:prose-base",children:u.jsx("div",{className:"project-content",children:n})}),u.jsx("footer",{className:"mt-12 pt-8 border-t border-border dark:border-dark-border",children:u.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center",children:[u.jsxs(He,{to:"/projects",className:"inline-flex items-center gap-2 text-accent dark:text-dark-accent hover:text-accent-hover dark:hover:text-dark-accent-hover transition-colors",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"Back to all projects"]}),(t.links.github||t.links.live||t.links.demo)&&u.jsxs("div",{className:"flex gap-3",children:[t.links.github&&u.jsxs("a",{href:t.links.github,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 bg-accent dark:bg-dark-accent text-white rounded-lg hover:bg-accent-hover dark:hover:bg-dark-accent-hover transition-colors text-sm",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",className:"w-4 h-4",children:u.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"View Code"]}),t.links.live&&u.jsx("a",{href:t.links.live,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 border border-accent dark:border-dark-accent text-accent dark:text-dark-accent rounded-lg hover:bg-accent dark:hover:bg-dark-accent hover:text-white transition-colors text-sm",children:"Live Demo"})]})]})})]})})}):u.jsx(ks,{to:"/projects",replace:!0})};function Ti(e,t="short"){if(e==="Present")return"Present";const n=new Date(e);return isNaN(n.getTime())?e:t==="short"?n.toLocaleDateString("en-US",{month:"short",year:"numeric"}):n.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}function Vl(e,t){const n=Ti(e,"short"),r=t==="Present"?"Present":Ti(t,"short");return`${n} - ${r}`}const qh=({experiences:e})=>u.jsx("div",{className:"max-w-5xl mx-auto px-4 sm:px-6",children:u.jsx("div",{className:"space-y-6 sm:space-y-8",children:e.map((t,n)=>u.jsxs("div",{className:"relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 animate-slide-up",style:{animationDelay:`${n*100}ms`},children:[u.jsxs("div",{className:"md:text-right md:pr-8 relative",children:[u.jsx("div",{className:"text-xs sm:text-sm font-medium text-accent dark:text-dark-accent",children:Vl(t.startDate,t.endDate)}),u.jsx("div",{className:"hidden md:block absolute right-0 top-0 translate-x-[9px] w-4 h-4 rounded-full bg-accent dark:bg-dark-accent border-4 border-background dark:border-dark-background z-10"})]}),u.jsx("div",{className:"hidden md:block absolute left-[180px] top-0 bottom-0 w-0.5 bg-accent/30 dark:bg-dark-accent/30 -translate-x-1/2"}),u.jsxs("div",{className:"relative md:pl-0 pl-6 sm:pl-8 border-l-2 md:border-l-0 border-accent/30 dark:border-dark-accent/30",children:[u.jsx("div",{className:"md:hidden absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-accent dark:bg-dark-accent border-4 border-background dark:border-dark-background"}),u.jsx("div",{className:"md:hidden text-xs sm:text-sm font-medium text-accent dark:text-dark-accent mb-2 sm:mb-3",children:Vl(t.startDate,t.endDate)}),u.jsxs("div",{className:"bg-white dark:bg-dark-background border border-border dark:border-dark-border rounded-lg p-4 sm:p-6 hover:border-accent dark:hover:border-dark-accent transition-all duration-200 hover:shadow-lg",children:[u.jsxs("div",{className:"mb-3 sm:mb-4",children:[u.jsx("h3",{className:"text-lg sm:text-xl font-semibold text-foreground dark:text-dark-foreground mb-1",children:t.position}),u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted dark:text-dark-muted",children:[u.jsx("span",{className:"font-medium text-accent dark:text-dark-accent",children:t.company}),u.jsx("span",{className:"hidden sm:inline",children:"•"}),u.jsx("span",{children:t.location})]})]}),u.jsx("ul",{className:"mb-3 sm:mb-4 space-y-1.5 sm:space-y-2",children:t.achievements.map((r,i)=>u.jsxs("li",{className:"flex gap-2 sm:gap-3 text-xs sm:text-sm text-foreground dark:text-dark-foreground leading-relaxed",children:[u.jsx("span",{className:"text-accent dark:text-dark-accent mt-1.5 flex-shrink-0",children:"•"}),u.jsx("span",{children:r})]},i))}),u.jsx("div",{className:"flex flex-wrap gap-1 sm:gap-1.5",children:t.techStack.map(r=>u.jsx(Fe,{label:r,variant:"secondary"},r))})]})]})]},t.id))})}),Yh=[{id:"exp-1",company:"Razorpay",position:"Software Development Engineer",location:"Bangalore, India",startDate:"2025-03-01",endDate:"Present",achievements:["Owned and resolved a major AWS incident that caused loss of 59K UPI transactions; identified and fixed Kafka-Firehose–Lambda–Redshift pipeline, ensuring data recovery and system stability","Optimized CI/CD for 27+ microservices, cutting deployment time from 50 mins to 15 mins by automating multi-arch builds, manifest generation, and quality gates","Developed end-to-end tests for UPI acquiring flows, ensuring reliability across critical payment paths and reducing regression failures during releases","Helped decompose a large monolith into microservices, supporting service design, configuration, and deployment workflows","Improved canary rollout monitoring by integrating metrics with Prometheus and Grafana to track latency and error trends across UPI services"],techStack:["Golang","Microservices","Kafka","AWS Lambda","Redshift","Prometheus","Grafana","Docker","Kubernetes"]},{id:"exp-2",company:"Inkle",position:"Software Engineer",location:"Bangalore, India",startDate:"2023-05-01",endDate:"2025-03-01",achievements:["Implemented a Stripe-powered bank transfer system that generated unique virtual accounts for customers, efficiently handling partial and overpayments and achieving rapid user adoption","Built features for autopay using credits and scheduled payments via Stripe, improving payment compliance and boosting customer retention","Developed an app consolidating US state-specific entity registrations, automating compliance workflows and reducing manual regulatory effort by 70%","Engineered a scalable invoicing tool with public sharing and dynamic views, reducing invoice-related queries by 40% and improving processing time","Enhanced backend performance by optimizing PostgreSQL queries and caching with Redis, improving system responsiveness"],techStack:["Python","Django","JavaScript","Stripe","PostgreSQL","Redis","Celery"]},{id:"exp-3",company:"Newgen Software",position:"Software Engineer Intern",location:"New Delhi, India",startDate:"2022-05-01",endDate:"2022-07-31",achievements:["Built a Video Extraction tool in Java using the FFmpeg library, enhancing video processing by 70%","Developed data parsing tools for JSON to XML conversion, increasing client processing efficiency"],techStack:["Java","FFmpeg"]},{id:"exp-4",company:"UExcelerate",position:"Software Developer Intern",location:"Hyderabad, India",startDate:"2022-01-01",endDate:"2022-04-30",achievements:["Implemented authorization and scheduling features for Google Meet, Zoom, MS Teams into the web app","Developed server-side components using Node.js and PostgreSQL, streamlining data flow and improving performance"],techStack:["Node.js","Angular","PostgreSQL"]}],Jh=()=>u.jsxs("div",{className:"animate-fade-in",children:[u.jsx(rt,{title:"Work Experience",subtitle:"My professional journey and achievements",children:u.jsx(qh,{experiences:Yh})}),u.jsx(rt,{title:"Education",subtitle:"Academic background",className:"pt-8",children:u.jsx("div",{className:"max-w-4xl mx-auto",children:u.jsxs("div",{className:"bg-white dark:bg-dark-background border border-border dark:border-dark-border rounded-lg p-6",children:[u.jsx("h3",{className:"text-xl font-semibold text-foreground dark:text-dark-foreground mb-2",children:"Bachelor of Technology in Computer Science and Engineering"}),u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted dark:text-dark-muted mb-3",children:[u.jsx("span",{className:"font-medium text-accent dark:text-dark-accent",children:"Indian Institute of Information Technology Kottayam"}),u.jsx("span",{className:"hidden sm:inline",children:"•"}),u.jsx("span",{children:"Kottayam, India"}),u.jsx("span",{className:"hidden sm:inline",children:"•"}),u.jsx("span",{children:"Aug 2019 - April 2023"})]}),u.jsx("p",{className:"text-sm text-foreground dark:text-dark-foreground",children:"Relevant coursework: Data Structures, Algorithms, Database Management Systems, Distributed Systems, Operating Systems"})]})})})]}),Xh=({post:e})=>u.jsxs(wd,{className:"h-full flex flex-col",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-3 text-sm text-muted dark:text-dark-muted",children:[u.jsx("time",{dateTime:e.date,children:Ti(e.date,"long")}),e.readTime&&u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"•"}),u.jsx("span",{children:e.readTime})]})]}),u.jsx("h3",{className:"text-xl font-semibold mb-3 text-foreground dark:text-dark-foreground",children:e.title}),u.jsx("p",{className:"text-muted dark:text-dark-muted mb-4 flex-grow leading-relaxed line-clamp-3",children:e.excerpt}),u.jsx("div",{className:"mb-4",children:u.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.tags.map(t=>u.jsx(Fe,{label:t,variant:"secondary"},t))})}),u.jsxs(He,{to:`/blog/${e.slug}`,className:"inline-flex items-center gap-2 text-sm font-medium text-accent dark:text-dark-accent hover:text-accent-hover dark:hover:text-dark-accent-hover transition-colors pt-4 border-t border-border dark:border-dark-border",children:["Read full article",u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})]})]}),Sd=[{id:"blog-1",title:"Scaling Payment Systems: Lessons from Razorpay",slug:"scaling-payment-systems",excerpt:"Insights into building and scaling high-throughput UPI payment systems, handling millions of transactions with reliability and performance.",content:`
# Scaling Payment Systems: Lessons from Razorpay

Working on UPI payment systems at Razorpay has taught me invaluable lessons about building systems that need to handle millions of transactions with absolute reliability. Here's what I've learned.

## The Challenge

UPI (Unified Payments Interface) is one of India's most critical payment infrastructures, processing billions of transactions monthly. At Razorpay, we handle a significant portion of this traffic, which means our systems must be:

- **Highly Available**: 99.99% uptime is the minimum acceptable
- **Low Latency**: Users expect instant payment confirmations
- **Fault Tolerant**: Failures should be graceful and recoverable
- **Scalable**: Must handle 10x traffic spikes during peak hours

## Architecture Decisions

### 1. Microservices Over Monolith

We decomposed our large monolith into focused microservices:

- **Payment Processing Service**: Handles transaction flow
- **Reconciliation Service**: Ensures data consistency
- **Notification Service**: Real-time user updates
- **Analytics Service**: Business intelligence and monitoring

Each service can scale independently based on load patterns.

### 2. Kafka for Event Streaming

Kafka became our backbone for async processing:

\`\`\`
Payment Event → Kafka Topic → Multiple Consumers
  ↓
[Processing, Reconciliation, Notifications, Analytics]
\`\`\`

This decoupling allows us to add new consumers without touching the payment flow.

### 3. Golang for Performance

We chose Golang for our core payment services:

- **Concurrency**: Goroutines handle 10,000+ concurrent requests efficiently
- **Low Memory**: Smaller footprint compared to Java/Python
- **Fast Startup**: Critical for horizontal scaling

## Lessons Learned

### 1. End-to-End Testing is Non-Negotiable

We developed comprehensive E2E tests covering:
- Happy path flows
- Timeout scenarios
- Partial payment cases
- Network failures
- Third-party API failures

These tests caught 70% of bugs before production.

### 2. Observability is Your Best Friend

We instrumented everything with Prometheus and Grafana:

- **Latency percentiles** (p50, p95, p99)
- **Error rates** by error type
- **Transaction success rates** by payment method
- **Throughput** trends over time

Dashboards helped us identify issues before customers reported them.

### 3. Canary Deployments Save Lives

We roll out changes gradually:

1. Deploy to 5% of traffic
2. Monitor for 30 minutes
3. Increase to 25%
4. Monitor for 1 hour
5. Full rollout

This caught a critical bug that would have affected 59K transactions.

## The Incident

Speaking of incidents, we once faced a major AWS pipeline failure. Our Kafka-Firehose-Lambda-Redshift pipeline stopped processing, causing 59K transactions to go unrecorded.

The recovery involved:
1. Identifying the Lambda timeout issue
2. Reprocessing messages from Kafka dead-letter queue
3. Validating data integrity in Redshift
4. Implementing better monitoring and alerting

## Key Takeaways

1. **Design for Failure**: Assume every component will fail
2. **Monitor Everything**: You can't fix what you can't see
3. **Test Realistically**: Load tests should mimic production traffic
4. **Document Incidents**: Post-mortems prevent repeat failures
5. **Automate Relentlessly**: Manual processes don't scale

## What's Next?

We're working on:
- Multi-region deployment for better availability
- ML-based fraud detection
- Sub-second payment confirmations
- Better developer experience with improved APIs

Building payment systems is challenging but incredibly rewarding. Every optimization directly impacts millions of users.

---

*Have questions about scaling payment systems? Feel free to reach out!*
    `,date:"2025-02-01",tags:["Payment Systems","Golang","Microservices","UPI","Scalability"],readTime:"10 min read",author:"Abhimanyu Kumbhar"},{id:"blog-2",title:"Debugging Production: AWS Pipeline Incident Recovery",slug:"aws-pipeline-incident-recovery",excerpt:"A deep dive into resolving a critical AWS incident affecting 59K transactions, including investigation, root cause analysis, and recovery strategies.",content:`
# Debugging Production: AWS Pipeline Incident Recovery

Every engineer's nightmare: **"We're missing 59,000 transactions in our data warehouse."**

This is the story of how we debugged and recovered from a critical AWS pipeline failure at 2 AM.

## The Alert

**Saturday, 2:14 AM**: Slack notification goes off. Our monitoring detected a significant drop in data warehouse ingestion rates. What should have been 10K transactions/hour was showing zero.

## Initial Investigation

### Step 1: Check the Basics

\`\`\`bash
# Is Kafka producing?
kafka-consumer-groups --describe --group analytics-consumer

# Result: ✅ Kafka was healthy, offset lag = 0
\`\`\`

### Step 2: Check Firehose

AWS Console → Kinesis Firehose → Delivery Stream Metrics

**Red flags:**
- Incoming records: 10K/min ✅
- Records delivered to S3: 0 ❌
- Lambda invocation failures: 100% ❌

## The Problem

Our data pipeline looked like this:

\`\`\`
Kafka → Firehose → Lambda (transformation) → S3 → Redshift
\`\`\`

Lambda was timing out on every single invocation.

## Root Cause Analysis

### CloudWatch Logs Investigation

\`\`\`json
{
  "errorMessage": "Task timed out after 3.00 seconds",
  "errorType": "TimeoutError",
  "requestId": "abc-123-def"
}
\`\`\`

### What Changed?

Git blame showed a recent deployment:

\`\`\`python
# Old code (fast)
def transform(record):
    return json.loads(record)

# New code (slow - making external API call!)
def transform(record):
    data = json.loads(record)
    # This was added without realizing the impact
    enriched = fetch_user_metadata(data['user_id'])  # 2-3s per call!
    return {**data, **enriched}
\`\`\`

The developer added user enrichment without considering:
1. Lambda timeout was 3 seconds
2. External API calls added 2-3 seconds per record
3. Firehose sends batches, not single records

## The Recovery Plan

### Phase 1: Stop the Bleeding (5 minutes)

\`\`\`bash
# Rollback the Lambda function
aws lambda update-function-code \\
  --function-name transaction-transformer \\
  --s3-bucket deployments \\
  --s3-key previous-version.zip

# Verify
aws lambda invoke --function-name transaction-transformer out.txt
# Success! Timeout fixed.
\`\`\`

### Phase 2: Recover Missing Data (2 hours)

The 59K transactions were stuck in Kafka (thank god for retention!).

1. **Create temporary Firehose delivery stream**
2. **Reprocess from Kafka offset**

\`\`\`go
// Go script to replay Kafka messages
func replayKafka(topic string, startOffset, endOffset int64) {
    consumer := kafka.NewConsumer(config)
    consumer.Assign([]kafka.TopicPartition{
        {Topic: &topic, Partition: 0, Offset: startOffset},
    })

    for offset := startOffset; offset < endOffset; offset++ {
        msg := consumer.ReadMessage(timeout)
        firehose.PutRecord(msg.Value)
    }
}
\`\`\`

3. **Validate data in Redshift**

\`\`\`sql
-- Check counts match
SELECT COUNT(*) FROM transactions
WHERE created_at BETWEEN '2025-01-15 00:00' AND '2025-01-15 06:00';

-- Expected: 59,000
-- Actual: 59,000 ✅
\`\`\`

### Phase 3: Prevent Recurrence (1 week)

1. **Increased Lambda timeout** to 30s with proper alerting
2. **Added Lambda duration metrics** to Grafana
3. **Load tested** the enrichment feature separately
4. **Created runbook** for similar incidents
5. **Implemented circuit breaker** for external API calls

## Lessons Learned

### 1. Always Consider Production Load

That "harmless" API call becomes a bottleneck at scale:

- **Dev:** 10 records/sec × 2s = fine
- **Prod:** 1000 records/sec × 2s = disaster

### 2. Monitor Lambda Duration, Not Just Errors

We had alerts for errors but not for duration increases. Now we alert when p99 latency > 50% of timeout.

### 3. Have a Rollback Strategy

Being able to rollback in 5 minutes saved us from hours of data loss.

### 4. Data Retention is Your Safety Net

Kafka's 7-day retention meant we could replay messages. Without it, those 59K transactions would be lost forever.

### 5. Document Your Pipelines

Having a clear diagram of data flow helped us isolate the issue quickly.

## The Fix That Worked

We moved the enrichment to an async batch job:

\`\`\`
Kafka → Firehose → Lambda (basic transform) → S3 → Redshift
                                                    ↓
                                          Batch Job (enrichment)
\`\`\`

This decoupled the real-time pipeline from slow external calls.

## Incident Timeline

- **2:14 AM** - Alert fired
- **2:19 AM** - Root cause identified
- **2:24 AM** - Lambda rolled back
- **2:30 AM** - Pipeline resumed
- **4:45 AM** - All 59K transactions recovered
- **5:00 AM** - Validation complete

**Total data loss:** 0 transactions ✅

## Key Takeaways

1. **Timeouts are not suggestions** - Design around them
2. **External dependencies kill performance** - Cache or async
3. **Monitoring should be proactive** - Alert on trends, not just failures
4. **Runbooks are invaluable** - Document as you fix
5. **Data retention saves lives** - Keep it long enough

---

*Debugging production is stressful, but every incident teaches you something new. Stay calm, follow the data, and always have a rollback plan.*
    `,date:"2025-01-15",tags:["AWS","Kafka","Incident Management","Debugging","DevOps"],readTime:"12 min read",author:"Abhimanyu Kumbhar"},{id:"blog-3",title:"Optimizing CI/CD: From 50 Minutes to 15 Minutes",slug:"optimizing-cicd-pipelines",excerpt:"How we cut deployment time by 70% for 27+ microservices through automation, multi-arch builds, and intelligent quality gates.",content:`
# Optimizing CI/CD: From 50 Minutes to 15 Minutes

Waiting 50 minutes for a deployment is painful. Doing it 10 times a day is torture. Here's how we cut our CI/CD time by 70%.

## The Problem

Our deployment pipeline for 27 microservices was taking **50+ minutes**, which meant:

- Slow feedback loops for developers
- Delayed production deployments
- Blocked releases waiting for CI
- Engineers context-switching while waiting

## The Baseline

Our original pipeline looked like this:

\`\`\`yaml
Pipeline Stages:
1. Checkout (2 min)
2. Unit Tests (8 min)
3. Integration Tests (12 min)
4. Build Docker Images (15 min)
5. Security Scans (7 min)
6. Deploy to Staging (4 min)
7. E2E Tests (2 min)

Total: ~50 minutes
\`\`\`

## Optimization 1: Parallelize Everything

**Before:**
\`\`\`
Tests → Build → Scan → Deploy
\`\`\`

**After:**
\`\`\`
├─ Unit Tests
├─ Integration Tests
├─ Linting
└─ Security Scans
    ↓
  Build → Deploy
\`\`\`

**Saved:** 10 minutes

## Optimization 2: Smart Caching

We weren't caching dependencies, so every build downloaded the same packages.

**Before:**
\`\`\`dockerfile
FROM golang:1.21
WORKDIR /app
COPY . .
RUN go mod download  # Downloads every time!
RUN go build
\`\`\`

**After:**
\`\`\`dockerfile
FROM golang:1.21
WORKDIR /app

# Cache dependencies separately
COPY go.mod go.sum ./
RUN go mod download  # Cached layer!

COPY . .
RUN go build
\`\`\`

**Saved:** 5 minutes

## Optimization 3: Multi-Arch Builds

We were building for AMD64 and ARM64 sequentially.

**Before (Sequential):**
\`\`\`bash
docker build --platform linux/amd64 .  # 8 min
docker build --platform linux/arm64 .  # 8 min
# Total: 16 minutes
\`\`\`

**After (Parallel):**
\`\`\`bash
docker buildx build \\
  --platform linux/amd64,linux/arm64 \\
  --cache-from type=registry \\
  --cache-to type=registry \\
  .
# Total: 9 minutes
\`\`\`

**Saved:** 7 minutes

## Optimization 4: Incremental Testing

We were running all tests for all services, even when only one service changed.

**Solution:** Dependency graph analysis

\`\`\`python
# detect_changes.py
def get_changed_services(git_diff):
    changed_files = git_diff.split('\\n')
    services = set()

    for file in changed_files:
        if file.startswith('services/'):
            service = file.split('/')[1]
            services.add(service)
            # Add dependent services
            services.update(get_dependencies(service))

    return services

# Only test changed services + dependencies
changed = get_changed_services(git.diff('origin/main'))
for service in changed:
    run_tests(service)
\`\`\`

**Saved:** 8 minutes (on average)

## Optimization 5: Quality Gates

We added fast-fail quality gates to catch issues early:

\`\`\`yaml
stages:
  - name: Fast Checks (3 min)
    steps:
      - lint
      - type-check
      - security-scan
    fail_fast: true  # Stop if these fail

  - name: Tests (parallel)
    steps:
      - unit-tests
      - integration-tests

  - name: Build & Deploy
\`\`\`

If linting fails (30 seconds), we don't waste 10 minutes running tests.

**Saved:** 5 minutes per failed build

## Optimization 6: Test Optimization

Some tests were unnecessarily slow:

**Example: Database Tests**

**Before:**
\`\`\`go
func TestUserCreation(t *testing.T) {
    db := setupDatabase()  // Slow! Creates new DB each test
    defer db.Teardown()

    user := createUser(db, "test@example.com")
    assert.NotNil(t, user)
}
\`\`\`

**After:**
\`\`\`go
var testDB *sql.DB

func TestMain(m *testing.M) {
    testDB = setupDatabase()  // Once for all tests
    code := m.Run()
    testDB.Teardown()
    os.Exit(code)
}

func TestUserCreation(t *testing.T) {
    tx := testDB.Begin()  // Use transaction
    defer tx.Rollback()   // Auto-cleanup

    user := createUser(tx, "test@example.com")
    assert.NotNil(t, user)
}
\`\`\`

**Saved:** 4 minutes

## Optimization 7: Manifest Generation Automation

We were manually updating Kubernetes manifests, which was error-prone.

**Solution:** Automated manifest generation

\`\`\`bash
# generate_manifests.sh
for service in services/*; do
    helm template $service \\
      --set image.tag=$GIT_SHA \\
      --set resources.limits.memory=512Mi \\
      > k8s/$service.yaml
done
\`\`\`

**Saved:** 2 minutes + reduced errors

## The Results

**Before:** 50 minutes
**After:** 15 minutes
**Improvement:** 70% faster ⚡

### Impact

- **Deployments per day:** 5 → 15
- **Developer satisfaction:** ↑ 80%
- **Mean time to deploy:** 50m → 15m
- **Failed build cost:** $5 → $1.50 (in CI time)

## Bonus: Cost Savings

Our CI runs on GitHub Actions:

- **Before:** 50 min × 100 builds/day × $0.008/min = $40/day
- **After:** 15 min × 100 builds/day × $0.008/min = $12/day
- **Savings:** $840/month

## Key Takeaways

1. **Measure first** - Profile your pipeline to find bottlenecks
2. **Parallelize aggressively** - Most stages can run concurrently
3. **Cache everything** - Dependencies, layers, artifacts
4. **Fail fast** - Run quick checks before expensive ones
5. **Test smart** - Only test what changed (+ dependencies)
6. **Automate painful tasks** - Manifest generation, versioning, etc.

## What's Next?

We're exploring:
- **Distributed test execution** (split tests across machines)
- **Predictive test selection** (ML to predict which tests might fail)
- **Remote caching** (Bazel/Buck for even faster builds)

## Tools We Used

- **Docker Buildx** - Multi-platform builds
- **GitHub Actions Cache** - Dependency caching
- **Helm** - Manifest templating
- **Custom Scripts** - Change detection

---

*Fast CI/CD isn't just about speed—it's about developer happiness and shipping faster. Invest in your pipelines!*
    `,date:"2024-11-20",tags:["CI/CD","DevOps","Automation","Docker","Kubernetes"],readTime:"8 min read",author:"Abhimanyu Kumbhar"},{id:"blog-4",title:"Building Payment Features with Stripe: A Developer Guide",slug:"stripe-payment-integration",excerpt:"Practical guide to implementing virtual accounts, autopay, and scheduled payments using Stripe API in Python/Django applications.",content:`
# Building Payment Features with Stripe: A Developer Guide

At Inkle, we built a comprehensive payment system using Stripe that handles bank transfers, autopay, and scheduled payments. Here's everything I learned.

## The Requirements

Our application needed to:
1. Accept bank transfers from customers
2. Handle partial and overpayments gracefully
3. Support automatic payments using credits
4. Schedule future payments
5. Track payment status in real-time

## Architecture Overview

\`\`\`
Customer → Stripe Virtual Account → Webhook → Our Backend → Database
                                        ↓
                                   Reconciliation
\`\`\`

## Feature 1: Virtual Accounts for Bank Transfers

Virtual accounts allow customers to send bank transfers to unique account numbers that route to your Stripe account.

### Implementation

\`\`\`python
# models.py
class Customer(models.Model):
    email = models.EmailField(unique=True)
    stripe_customer_id = models.CharField(max_length=255)
    virtual_account_number = models.CharField(max_length=50, null=True)

class Payment(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    stripe_payment_intent_id = models.CharField(max_length=255)
    status = models.CharField(max_length=50)  # pending, succeeded, failed
    created_at = models.DateTimeField(auto_now_add=True)
\`\`\`

### Creating Virtual Accounts

\`\`\`python
# stripe_service.py
import stripe

def create_virtual_account(customer):
    # Create Stripe customer
    stripe_customer = stripe.Customer.create(
        email=customer.email,
        metadata={'internal_id': customer.id}
    )

    # Create financial account
    financial_account = stripe.treasury.FinancialAccount.create(
        supported_currencies=['usd'],
        features={
            'inbound_transfers': {'ach': {'requested': True}}
        }
    )

    # Get account number
    account_number = financial_account.financial_addresses[0].aba.account_number

    customer.stripe_customer_id = stripe_customer.id
    customer.virtual_account_number = account_number
    customer.save()

    return account_number
\`\`\`

## Feature 2: Handling Partial and Overpayments

Customers don't always send exact amounts. We needed to handle:
- **Underpayment:** Mark invoice as partially paid
- **Overpayment:** Credit the excess to customer balance
- **Exact payment:** Mark invoice as paid

### Implementation

\`\`\`python
# payment_handler.py
def process_bank_transfer(payment_intent):
    amount_received = payment_intent.amount / 100  # Stripe uses cents
    customer = Customer.objects.get(
        stripe_customer_id=payment_intent.customer
    )

    # Find pending invoices
    invoices = Invoice.objects.filter(
        customer=customer,
        status='pending'
    ).order_by('due_date')

    remaining_amount = amount_received

    for invoice in invoices:
        amount_due = invoice.amount_due

        if remaining_amount >= amount_due:
            # Full payment
            invoice.status = 'paid'
            invoice.paid_amount = amount_due
            remaining_amount -= amount_due
        else:
            # Partial payment
            invoice.status = 'partial'
            invoice.paid_amount += remaining_amount
            invoice.amount_due -= remaining_amount
            remaining_amount = 0

        invoice.save()

        if remaining_amount == 0:
            break

    # Handle overpayment
    if remaining_amount > 0:
        CustomerCredit.objects.create(
            customer=customer,
            amount=remaining_amount,
            source='overpayment',
            payment_intent_id=payment_intent.id
        )

        # Notify customer
        send_email(
            to=customer.email,
            subject='Credit Added to Your Account',
            body=f'\${remaining_amount} has been added to your account credit.'
        )
\`\`\`

## Feature 3: Autopay with Credits

Allow customers to automatically use their credits for upcoming invoices.

### Implementation

\`\`\`python
# autopay.py
from celery import shared_task

@shared_task
def process_autopay():
    # Run daily
    customers_with_autopay = Customer.objects.filter(autopay_enabled=True)

    for customer in customers_with_autopay:
        # Get due invoices
        due_invoices = Invoice.objects.filter(
            customer=customer,
            due_date__lte=timezone.now(),
            status='pending'
        )

        # Get available credits
        credits = CustomerCredit.objects.filter(
            customer=customer,
            used=False
        ).aggregate(total=models.Sum('amount'))['total'] or 0

        if credits > 0:
            for invoice in due_invoices:
                if credits >= invoice.amount_due:
                    # Use credits
                    apply_credits_to_invoice(invoice, invoice.amount_due)
                    credits -= invoice.amount_due
                else:
                    # Partial payment with credits
                    apply_credits_to_invoice(invoice, credits)
                    credits = 0
                    break

def apply_credits_to_invoice(invoice, amount):
    # Deduct from credits
    credits = CustomerCredit.objects.filter(
        customer=invoice.customer,
        used=False
    ).order_by('created_at')

    remaining = amount
    for credit in credits:
        if credit.amount >= remaining:
            credit.amount -= remaining
            credit.save()
            remaining = 0
            break
        else:
            remaining -= credit.amount
            credit.used = True
            credit.save()

    # Update invoice
    invoice.paid_amount += amount
    if invoice.paid_amount >= invoice.total_amount:
        invoice.status = 'paid'
    else:
        invoice.status = 'partial'
    invoice.save()
\`\`\`

## Feature 4: Scheduled Payments

Schedule payments to be processed on specific dates.

### Implementation

\`\`\`python
# scheduled_payments.py
class ScheduledPayment(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    scheduled_date = models.DateTimeField()
    payment_method_id = models.CharField(max_length=255)
    status = models.CharField(max_length=50)  # scheduled, processing, completed, failed
    stripe_payment_intent_id = models.CharField(max_length=255, null=True)

# Process scheduled payments
@shared_task
def process_scheduled_payments():
    now = timezone.now()

    payments = ScheduledPayment.objects.filter(
        scheduled_date__lte=now,
        status='scheduled'
    )

    for payment in payments:
        try:
            payment.status = 'processing'
            payment.save()

            # Create payment intent
            intent = stripe.PaymentIntent.create(
                amount=int(payment.amount * 100),  # Convert to cents
                currency='usd',
                customer=payment.customer.stripe_customer_id,
                payment_method=payment.payment_method_id,
                confirm=True,
                metadata={'scheduled_payment_id': payment.id}
            )

            payment.stripe_payment_intent_id = intent.id
            payment.status = 'completed'
            payment.save()

        except stripe.error.CardError as e:
            payment.status = 'failed'
            payment.error_message = str(e)
            payment.save()

            # Notify customer
            notify_payment_failure(payment.customer, payment)
\`\`\`

## Feature 5: Webhook Handling

Real-time updates from Stripe.

### Implementation

\`\`\`python
# views.py
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import stripe

@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
        )
    except ValueError:
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError:
        return HttpResponse(status=400)

    # Handle events
    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        process_bank_transfer(payment_intent)

    elif event['type'] == 'payment_intent.payment_failed':
        payment_intent = event['data']['object']
        handle_payment_failure(payment_intent)

    elif event['type'] == 'customer.updated':
        customer = event['data']['object']
        sync_customer_data(customer)

    return HttpResponse(status=200)
\`\`\`

## Best Practices

### 1. Idempotency

Always use idempotency keys to prevent duplicate charges:

\`\`\`python
stripe.PaymentIntent.create(
    amount=5000,
    currency='usd',
    idempotency_key=f'invoice_{invoice.id}_payment'
)
\`\`\`

### 2. Error Handling

\`\`\`python
try:
    payment = stripe.PaymentIntent.create(...)
except stripe.error.CardError as e:
    # Card was declined
    logger.error(f"Card declined: {e.user_message}")
except stripe.error.RateLimitError as e:
    # Too many requests
    retry_with_backoff()
except stripe.error.APIError as e:
    # Stripe API issue
    logger.critical(f"Stripe API error: {e}")
\`\`\`

### 3. Testing

Use Stripe's test mode and test cards:

\`\`\`python
# settings.py
STRIPE_PUBLIC_KEY = os.getenv('STRIPE_PUBLIC_KEY')
STRIPE_SECRET_KEY = os.getenv('STRIPE_SECRET_KEY')

# Test cards
# 4242 4242 4242 4242 - Success
# 4000 0000 0000 9995 - Insufficient funds
# 4000 0000 0000 0002 - Declined
\`\`\`

## Results

After implementing these features:

- **User adoption:** 85% of customers used bank transfers
- **Payment success rate:** 96%
- **Overpayment handling:** Automated, reducing support queries by 40%
- **Autopay adoption:** 60% enabled autopay

## Key Takeaways

1. **Virtual accounts simplify bank transfers** - No manual reconciliation needed
2. **Handle edge cases** - Partial/overpayments happen more than you think
3. **Webhooks are critical** - Real-time updates improve UX
4. **Test thoroughly** - Use Stripe's test mode extensively
5. **Idempotency matters** - Prevent duplicate charges

---

*Stripe's API is powerful but requires careful implementation. Plan for edge cases and you'll build a robust payment system.*
    `,date:"2024-08-10",tags:["Stripe","Python","Django","Payment Integration","FinTech"],readTime:"9 min read",author:"Abhimanyu Kumbhar"}],Zh=()=>{const e=[...Sd].sort((t,n)=>new Date(n.date).getTime()-new Date(t.date).getTime());return u.jsx("div",{className:"animate-fade-in",children:u.jsx(rt,{title:"Blog & Articles",subtitle:"Thoughts, tutorials, and insights on software development",children:u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto",children:e.map((t,n)=>u.jsx("div",{className:"animate-slide-up",style:{animationDelay:`${n*100}ms`},children:u.jsx(Xh,{post:t})},t.id))})})})},eg=()=>{const{slug:e}=cd(),t=Sd.find(o=>o.slug===e),[n,r]=C.useState([]);if(C.useEffect(()=>{if(!t)return;const o=t.content.split(`
`),a=[];let s=0;for(;s<o.length;){const l=o[s];if(l.trim()===""){a.push(u.jsx("br",{},`br-${s}`)),s++;continue}if(l.startsWith("```")){const p=[];for(s++;s<o.length&&!o[s].startsWith("```");)p.push(o[s]),s++;a.push(u.jsx("pre",{className:"bg-stone-100 dark:bg-stone-800 p-3 sm:p-4 rounded-lg overflow-x-auto my-3 sm:my-4 text-xs sm:text-sm font-mono whitespace-pre leading-relaxed",children:u.jsx("code",{className:"font-mono",children:p.join(`
`)})},`code-${s}`)),s++;continue}if(l.startsWith("# ")){a.push(u.jsx("h1",{className:"text-4xl font-bold mt-8 mb-4",children:l.substring(2)},`h1-${s}`)),s++;continue}if(l.startsWith("## ")){a.push(u.jsx("h2",{className:"text-3xl font-bold mt-8 mb-4",children:l.substring(3)},`h2-${s}`)),s++;continue}if(l.startsWith("### ")){a.push(u.jsx("h3",{className:"text-2xl font-semibold mt-6 mb-3",children:l.substring(4)},`h3-${s}`)),s++;continue}if(l.trim()==="---"){a.push(u.jsx("hr",{className:"my-8 border-t-2 border-border dark:border-dark-border"},`hr-${s}`)),s++;continue}if(l.trim().startsWith("- ")){const p=l.substring(l.indexOf("- ")+2),m=i(p,s);a.push(u.jsx("li",{className:"ml-6 my-2",children:m},`li-${s}`)),s++;continue}if(/^\d+\./.test(l.trim())){const p=l.substring(l.indexOf(". ")+2),m=i(p,s);a.push(u.jsx("li",{className:"ml-6 my-2",children:m},`li-${s}`)),s++;continue}const c=i(l,s);a.push(u.jsx("p",{className:"my-4 leading-relaxed text-lg",children:c},`p-${s}`)),s++}r(a)},[t]),!t)return u.jsx(ks,{to:"/blog",replace:!0});const i=(o,a)=>{const s=[];let l=0;const c=/`([^`]+)`/g;let p,m=0;for(;(p=c.exec(o))!==null;)p.index>m&&s.push(o.substring(m,p.index)),s.push(u.jsx("code",{className:"bg-stone-100 dark:bg-stone-800 px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono",children:p[1]},`code-${a}-${l++}`)),m=c.lastIndex;m<o.length&&s.push(o.substring(m));const g=[];return s.forEach((v,k)=>{if(typeof v=="string"){const y=/\*\*(.*?)\*\*/g;v.split(y).forEach((f,d)=>{d%2===1?g.push(u.jsx("strong",{children:f},`bold-${a}-${k}-${d}`)):f&&g.push(f)})}else g.push(v)}),g.length>0?g:o};return u.jsx("div",{className:"animate-fade-in",children:u.jsx(rt,{className:"pt-8 sm:pt-12",children:u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6",children:[u.jsxs(He,{to:"/blog",className:"inline-flex items-center gap-2 text-sm sm:text-base text-accent dark:text-dark-accent hover:text-accent-hover dark:hover:text-dark-accent-hover mb-6 sm:mb-8 transition-colors",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 sm:w-5 sm:h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"Back to Blog"]}),u.jsxs("header",{className:"mb-6 sm:mb-8",children:[u.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground dark:text-dark-foreground",children:t.title}),u.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted dark:text-dark-muted mb-4 sm:mb-6",children:[t.author&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"font-medium",children:t.author}),u.jsx("span",{children:"•"})]}),u.jsx("time",{dateTime:t.date,children:Ti(t.date,"long")}),t.readTime&&u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"•"}),u.jsx("span",{children:t.readTime})]})]}),u.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:t.tags.map(o=>u.jsx(Fe,{label:o,variant:"primary"},o))})]}),u.jsx("article",{className:"prose prose-stone dark:prose-invert max-w-none prose-sm sm:prose-base",children:u.jsx("div",{className:"blog-content",children:n})}),u.jsx("footer",{className:"mt-12 pt-8 border-t border-border dark:border-dark-border",children:u.jsxs(He,{to:"/blog",className:"inline-flex items-center gap-2 text-accent dark:text-dark-accent hover:text-accent-hover dark:hover:text-dark-accent-hover transition-colors",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"Back to all posts"]})})]})})})};function tg(){return u.jsx(Xp,{basename:"/my-portfolio",children:u.jsx(Uh,{children:u.jsxs(Gp,{children:[u.jsx(dt,{path:"/",element:u.jsx(Hh,{})}),u.jsx(dt,{path:"/projects",element:u.jsx(Kh,{})}),u.jsx(dt,{path:"/projects/:slug",element:u.jsx(Qh,{})}),u.jsx(dt,{path:"/experience",element:u.jsx(Jh,{})}),u.jsx(dt,{path:"/blog",element:u.jsx(Zh,{})}),u.jsx(dt,{path:"/blog/:slug",element:u.jsx(eg,{})}),u.jsx(dt,{path:"*",element:u.jsx(ks,{to:"/",replace:!0})})]})})})}rd(document.getElementById("root")).render(u.jsx(C.StrictMode,{children:u.jsx(tg,{})}));
