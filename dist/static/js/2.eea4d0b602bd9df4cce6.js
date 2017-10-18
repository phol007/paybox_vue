webpackJsonp([2],{143:function(t,e,n){var r=n(125)(n(186),n(206),null,null,null);t.exports=r.exports},148:function(t,e,n){"use strict";function r(t){return"[object Array]"===T.call(t)}function o(t){return"[object ArrayBuffer]"===T.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===T.call(t)}function p(t){return"[object File]"===T.call(t)}function d(t){return"[object Blob]"===T.call(t)}function h(t){return"[object Function]"===T.call(t)}function m(t){return f(t)&&h(t.pipe)}function g(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function y(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=x(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function b(t,e,n){return w(e,function(e,r){t[r]=n&&"function"==typeof e?_(e,n):e}),t}var _=n(154),C=n(177),T=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:w,merge:x,extend:b,trim:y}},149:function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(148),i=n(171),s={"Content-Type":"application/json"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(150):void 0!==e&&(t=n(150)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/json;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, */*","Content-Type":"application/json"}},o.forEach(["delete","get","head"],function(t){a.headers[t]={}}),o.forEach(["post","put","patch"],function(t){a.headers[t]=o.merge(s)}),t.exports=a}).call(e,n(178))},150:function(t,e,n){"use strict";var r=n(148),o=n(163),i=n(166),s=n(172),a=n(170),u=n(153),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(165);t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var g=t.auth.username||"",y=t.auth.password||"";p.Authorization="Basic "+c(g+":"+y)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,i),d=null}},d.onerror=function(){f(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=n(168),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?v.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},151:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},152:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},153:function(t,e,n){"use strict";var r=n(162);t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},154:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},155:function(t,e,n){t.exports={default:n(175),__esModule:!0}},156:function(t,e,n){t.exports=n(157)},157:function(t,e,n){"use strict";function r(t){var e=new s(t),n=i(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var o=n(148),i=n(154),s=n(159),a=n(149),u=r(a);u.Axios=s,u.create=function(t){return r(o.merge(a,t))},u.Cancel=n(151),u.CancelToken=n(158),u.isCancel=n(152),u.all=function(t){return Promise.all(t)},u.spread=n(173),t.exports=u,t.exports.default=u},158:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(151);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},159:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=n(149),i=n(148),s=n(160),a=n(161),u=n(169),c=n(167);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url));var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},160:function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(148);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},161:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(148),i=n(164),s=n(152),a=n(149);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},162:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},163:function(t,e,n){"use strict";var r=n(153);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},164:function(t,e,n){"use strict";var r=n(148);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},165:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),s="",a=0,u=i;o.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&e>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;e=e<<8|n}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},166:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(148);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},167:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},168:function(t,e,n){"use strict";var r=n(148);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},169:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},170:function(t,e,n){"use strict";var r=n(148);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},171:function(t,e,n){"use strict";var r=n(148);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},172:function(t,e,n){"use strict";var r=n(148);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},173:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},174:function(t,e,n){"use strict";var r=n(155),o=n.n(r),i=n(1),s=n(156),a=n.n(s),u=n(179),c=n.n(u);i.a.use(c.a,a.a),a.a.defaults.headers.post["Content-Type"]="application/json";var f="http://192.168.0.97";e.a={getMenuAX:function(t,e){i.a.axios.get(f+":8888/menu").then(function(e){t(e.data)},function(t){e(t)})},getItemAX:function(t,e,n){i.a.axios.get(f+":8888/menu/"+t+"/").then(function(t){e(t.data)},function(t){n(t)})},sendOrderAX:function(t,e,n){console.log(o()(t));i.a.axios.post("http://192.168.0.97:8888/sale",o()(t)).then(function(t){e(t.data)},function(t){n(t)})},getMoneyOnMachine:function(t,e){i.a.axios.get(f+":8888/cash").then(function(e){t(e.data)},function(t){e(t)})}}},175:function(t,e,n){var r=n(176),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},176:function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},177:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},178:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&a())}function a(){if(!m){var t=o(s);m=!0;for(var e=h.length;e;){for(d=h,h=[];++g<e;)d&&d[g].run();g=-1,e=h.length}d=null,m=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var d,h=[],m=!1,g=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new u(t,e)),1!==h.length||m||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},179:function(t,e,n){"use strict";var r,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function n(t,e){if(!n.installed){if(n.installed=!0,!e)return void console.error("You have to install axios");t.axios=e,Object.defineProperties(t.prototype,{axios:{get:function(){return e}},$http:{get:function(){return e}}})}}"object"==i(e)?t.exports=n:(r=[],void 0!==(o=function(){return n}.apply(e,r))&&(t.exports=o))}()},186:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(155),o=n.n(r),i=n(174);e.default={name:"menu",data:function(){return{title:"เมนูหลัก",menu_datas:[],menu_list:[],language:"",langID:0}},methods:{getApi:function(t){var e=this;i.a.getMenuAX(function(n){e.menu_datas=n,e.langID=t,e.selectMenu(t)},function(t){console.log(o()(t))})},selectMenu:function(t){if(this.langID=t,this.select_lang(t),this.set_lang(t),""!=this.menu_datas){this.menu_list=[];for(var e=0;e<this.menu_datas.length;e++)if(this.menu_datas[e].lang_id==t)for(var n=this.menu_datas[e],r=0;r<n.menus.length;r++)this.menu_list.push({id:r,menu_code:n.menus[r].Id,name:n.menus[r].name,img:"static/img/menu/"+n.menus[r].image})}else this.getApi(1)},sayLang:function(t,e){setTimeout(function(){responsiveVoice.setDefaultVoice(t),responsiveVoice.speak(e)},300)},select_lang:function(t){for(var e=document.getElementsByClassName("lang"),n=0;n<e.length;n++)e[n].style.backgroundColor=t-1==n?"#f00":"#fff"},set_lang:function(t){switch(t){case 1:this.sayLang("Thai Female","ภาษาไทย"),this.language="กรุณาเลือกภาษา";break;case 2:this.sayLang("UK English Female","English language"),this.language="Please select a language";break;case 3:this.sayLang("Chinese Female","中國"),this.language="选择你的语言"}},getMenuToitem:function(t){this.stopSound(),this.Soundclick(),this.$router.push({name:"items",params:{menu:t,langID:this.langID}})},Soundclick:function(){document.getElementById("audio").play()},stopSound:function(){document.getElementById("audio").currentTime=0}},beforeDestroy:function(){return{sockets:null}},mounted:function(){this.selectMenu(1),console.log("===================ready==========================")}}},190:function(t,e,n){t.exports=n.p+"static/img/China.3a20a83.png"},191:function(t,e,n){t.exports=n.p+"static/img/thaiflag.a7a86e4.png"},192:function(t,e,n){t.exports=n.p+"static/img/uk-flag.a3fc321.png"},206:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"menu"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._v(" "),r("div",{staticClass:"menu-c"},t._l(t.menu_list,function(e){return r("button",{staticClass:"bt_menu",on:{click:function(n){t.getMenuToitem(e)}}},[r("img",{attrs:{src:e.img}}),t._v(" "),r("h1",[t._v(t._s(e.name))])])})),t._v(" "),r("p",{attrs:{id:"lang_bar"}}),r("hr"),t._v(" "),r("span",[r("img",{staticClass:"lang",attrs:{src:n(191)},on:{click:function(e){t.getApi(1)}}})]),t._v("  \n\t \t"),r("span",[r("img",{staticClass:"lang",attrs:{src:n(192)},on:{click:function(e){t.getApi(2)}}})]),t._v("  \n\t \t"),r("span",[r("img",{staticClass:"lang",attrs:{src:n(190)},on:{click:function(e){t.getApi(3)}}})]),t._v(" "),r("h1",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v(" "+t._s(t.language)+" ")]),t._v(" "),r("p")])])},staticRenderFns:[]}}});
//# sourceMappingURL=2.eea4d0b602bd9df4cce6.js.map