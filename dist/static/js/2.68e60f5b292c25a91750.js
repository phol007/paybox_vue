webpackJsonp([2],{144:function(t,e,n){var r=n(125)(n(187),n(286),null,null,null);t.exports=r.exports},148:function(t,e,n){"use strict";function r(t){return"[object Array]"===T.call(t)}function i(t){return"[object ArrayBuffer]"===T.call(t)}function o(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return void 0===t}function l(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===T.call(t)}function p(t){return"[object File]"===T.call(t)}function m(t){return"[object Blob]"===T.call(t)}function h(t){return"[object Function]"===T.call(t)}function d(t){return l(t)&&h(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function b(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function _(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=_(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)y(arguments[n],t);return e}function w(t,e,n){return y(e,function(e,r){t[r]=n&&"function"==typeof e?x(e,n):e}),t}var x=n(154),C=n(177),T=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:i,isBuffer:C,isFormData:o,isArrayBufferView:s,isString:a,isNumber:c,isObject:l,isUndefined:u,isDate:f,isFile:p,isBlob:m,isFunction:h,isStream:d,isURLSearchParams:v,isStandardBrowserEnv:g,forEach:y,merge:_,extend:w,trim:b}},149:function(t,e,n){"use strict";(function(e){function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var i=n(148),o=n(171),s={"Content-Type":"application/json"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(150):void 0!==e&&(t=n(150)),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/json;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, */*","Content-Type":"application/json"}},i.forEach(["delete","get","head"],function(t){a.headers[t]={}}),i.forEach(["post","put","patch"],function(t){a.headers[t]=i.merge(s)}),t.exports=a}).call(e,n(178))},150:function(t,e,n){"use strict";var r=n(148),i=n(163),o=n(166),s=n(172),a=n(170),c=n(153),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(165);t.exports=function(t){return new Promise(function(e,l){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var m=new XMLHttpRequest,h="onreadystatechange",d=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in m||a(t.url)||(m=new window.XDomainRequest,h="onload",d=!0,m.onprogress=function(){},m.ontimeout=function(){}),t.auth){var v=t.auth.username||"",b=t.auth.password||"";p.Authorization="Basic "+u(v+":"+b)}if(m.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),m.timeout=t.timeout,m[h]=function(){if(m&&(4===m.readyState||d)&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in m?s(m.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?m.response:m.responseText,o={data:r,status:1223===m.status?204:m.status,statusText:1223===m.status?"No Content":m.statusText,headers:n,config:t,request:m};i(e,l,o),m=null}},m.onerror=function(){l(c("Network Error",t,null,m)),m=null},m.ontimeout=function(){l(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",m)),m=null},r.isStandardBrowserEnv()){var g=n(168),y=(t.withCredentials||a(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;y&&(p[t.xsrfHeaderName]=y)}if("setRequestHeader"in m&&r.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:m.setRequestHeader(e,t)}),t.withCredentials&&(m.withCredentials=!0),t.responseType)try{m.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&m.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){m&&(m.abort(),l(t),m=null)}),void 0===f&&(f=null),m.send(f)})}},151:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},152:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},153:function(t,e,n){"use strict";var r=n(162);t.exports=function(t,e,n,i,o){var s=new Error(t);return r(s,e,n,i,o)}},154:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},155:function(t,e,n){t.exports={default:n(175),__esModule:!0}},156:function(t,e,n){t.exports=n(157)},157:function(t,e,n){"use strict";function r(t){var e=new s(t),n=o(s.prototype.request,e);return i.extend(n,s.prototype,e),i.extend(n,e),n}var i=n(148),o=n(154),s=n(159),a=n(149),c=r(a);c.Axios=s,c.create=function(t){return r(i.merge(a,t))},c.Cancel=n(151),c.CancelToken=n(158),c.isCancel=n(152),c.all=function(t){return Promise.all(t)},c.spread=n(173),t.exports=c,t.exports.default=c},158:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new i(t),e(n.reason))})}var i=n(151);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},159:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var i=n(149),o=n(148),s=n(160),a=n(161),c=n(169),u=n(167);r.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(i,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url));var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},160:function(t,e,n){"use strict";function r(){this.handlers=[]}var i=n(148);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){i.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},161:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var i=n(148),o=n(164),s=n(152),a=n(149);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return r(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},162:function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t}},163:function(t,e,n){"use strict";var r=n(153);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},164:function(t,e,n){"use strict";var r=n(148);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},165:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function i(t){for(var e,n,i=String(t),s="",a=0,c=o;i.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new r;e=e<<8|n}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=i},166:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var i=n(148);t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(i.isURLSearchParams(e))o=e.toString();else{var s=[];i.forEach(e,function(t,e){null!==t&&void 0!==t&&(i.isArray(t)&&(e+="[]"),i.isArray(t)||(t=[t]),i.forEach(t,function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),o=s.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},167:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},168:function(t,e,n){"use strict";var r=n(148);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},169:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},170:function(t,e,n){"use strict";var r=n(148);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(i.setAttribute("href",e),e=i.href),i.setAttribute("href",e),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");return e=t(window.location.href),function(n){var i=r.isString(n)?t(n):n;return i.protocol===e.protocol&&i.host===e.host}}():function(){return function(){return!0}}()},171:function(t,e,n){"use strict";var r=n(148);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},172:function(t,e,n){"use strict";var r=n(148);t.exports=function(t){var e,n,i,o={};return t?(r.forEach(t.split("\n"),function(t){i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e&&(o[e]=o[e]?o[e]+", "+n:n)}),o):o}},173:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},174:function(t,e,n){"use strict";var r=n(155),i=n.n(r),o=n(1),s=n(156),a=n.n(s),c=n(179),u=n.n(c);o.a.use(u.a,a.a),a.a.defaults.headers.post["Content-Type"]="application/json";var l="http://localhost";e.a={getMenuAX:function(t,e){o.a.axios.get(l+":8888/menu").then(function(e){t(e.data)},function(t){e(t)})},getItemAX:function(t,e,n){o.a.axios.get(l+":8888/menu/"+t+"/").then(function(t){e(t.data)},function(t){n(t)})},sendOrderAX:function(t,e,n){console.log(i()(t));o.a.axios.post("http://localhost:8888/sale",i()(t)).then(function(t){e(t.data)},function(t){n(t)})},getMoneyOnMachine:function(t,e){o.a.axios.get(l+":8888/cash").then(function(e){t(e.data)},function(t){e(t)})}}},175:function(t,e,n){var r=n(176),i=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},176:function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},177:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},178:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){d&&m&&(d=!1,m.length?h=m.concat(h):v=-1,h.length&&a())}function a(){if(!d){var t=i(s);d=!0;for(var e=h.length;e;){for(m=h,h=[];++v<e;)m&&m[v].run();v=-1,e=h.length}m=null,d=!1,o(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var m,h=[],d=!1,v=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new c(t,e)),1!==h.length||d||i(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},179:function(t,e,n){"use strict";var r,i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function n(t,e){if(!n.installed){if(n.installed=!0,!e)return void console.error("You have to install axios");t.axios=e,Object.defineProperties(t.prototype,{axios:{get:function(){return e}},$http:{get:function(){return e}}})}}"object"==o(e)?t.exports=n:(r=[],void 0!==(i=function(){return n}.apply(e,r))&&(t.exports=i))}()},180:function(t,e,n){var r,i;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
!function(o,s){r=s,void 0!==(i="function"==typeof r?r.call(e,n,e,t):r)&&(t.exports=i)}(0,function(){function t(t,e){this._input=t,this._value=e}var e,n,r={},i={},o={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},s={currentLocale:o.currentLocale,zeroFormat:o.zeroFormat,nullFormat:o.nullFormat,defaultFormat:o.defaultFormat,scalePercentBy100:o.scalePercentBy100};return e=function(i){var o,a,c,u;if(e.isNumeral(i))o=i.value();else if(0===i||void 0===i)o=0;else if(null===i||n.isNaN(i))o=null;else if("string"==typeof i)if(s.zeroFormat&&i===s.zeroFormat)o=0;else if(s.nullFormat&&i===s.nullFormat||!i.replace(/[^0-9]+/g,"").length)o=null;else{for(a in r)if((u="function"==typeof r[a].regexps.unformat?r[a].regexps.unformat():r[a].regexps.unformat)&&i.match(u)){c=r[a].unformat;break}c=c||e._.stringToNumber,o=c(i)}else o=Number(i)||null;return new t(i,o)},e.version="2.0.6",e.isNumeral=function(e){return e instanceof t},e._=n={numberToFormat:function(t,n,r){var o,s,a,c,u,l,f,p=i[e.options.currentLocale],m=!1,h=!1,d=0,v="",b="",g=!1;if(t=t||0,s=Math.abs(t),e._.includes(n,"(")?(m=!0,n=n.replace(/[\(|\)]/g,"")):(e._.includes(n,"+")||e._.includes(n,"-"))&&(u=e._.includes(n,"+")?n.indexOf("+"):t<0?n.indexOf("-"):-1,n=n.replace(/[\+|\-]/g,"")),e._.includes(n,"a")&&(o=n.match(/a(k|m|b|t)?/),o=!!o&&o[1],e._.includes(n," a")&&(v=" "),n=n.replace(new RegExp(v+"a[kmbt]?"),""),s>=1e12&&!o||"t"===o?(v+=p.abbreviations.trillion,t/=1e12):s<1e12&&s>=1e9&&!o||"b"===o?(v+=p.abbreviations.billion,t/=1e9):s<1e9&&s>=1e6&&!o||"m"===o?(v+=p.abbreviations.million,t/=1e6):(s<1e6&&s>=1e3&&!o||"k"===o)&&(v+=p.abbreviations.thousand,t/=1e3)),e._.includes(n,"[.]")&&(h=!0,n=n.replace("[.]",".")),a=t.toString().split(".")[0],c=n.split(".")[1],l=n.indexOf(","),d=(n.split(".")[0].split(",")[0].match(/0/g)||[]).length,c?(e._.includes(c,"[")?(c=c.replace("]",""),c=c.split("["),b=e._.toFixed(t,c[0].length+c[1].length,r,c[1].length)):b=e._.toFixed(t,c.length,r),a=b.split(".")[0],b=e._.includes(b,".")?p.delimiters.decimal+b.split(".")[1]:"",h&&0===Number(b.slice(1))&&(b="")):a=e._.toFixed(t,0,r),v&&!o&&Number(a)>=1e3&&v!==p.abbreviations.trillion)switch(a=String(Number(a)/1e3),v){case p.abbreviations.thousand:v=p.abbreviations.million;break;case p.abbreviations.million:v=p.abbreviations.billion;break;case p.abbreviations.billion:v=p.abbreviations.trillion}if(e._.includes(a,"-")&&(a=a.slice(1),g=!0),a.length<d)for(var y=d-a.length;y>0;y--)a="0"+a;return l>-1&&(a=a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+p.delimiters.thousands)),0===n.indexOf(".")&&(a=""),f=a+b+(v||""),m?f=(m&&g?"(":"")+f+(m&&g?")":""):u>=0?f=0===u?(g?"-":"+")+f:f+(g?"-":"+"):g&&(f="-"+f),f},stringToNumber:function(t){var e,n,r,o=i[s.currentLocale],a=t,c={thousand:3,million:6,billion:9,trillion:12};if(s.zeroFormat&&t===s.zeroFormat)n=0;else if(s.nullFormat&&t===s.nullFormat||!t.replace(/[^0-9]+/g,"").length)n=null;else{n=1,"."!==o.delimiters.decimal&&(t=t.replace(/\./g,"").replace(o.delimiters.decimal,"."));for(e in c)if(r=new RegExp("[^a-zA-Z]"+o.abbreviations[e]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),a.match(r)){n*=Math.pow(10,c[e]);break}n*=(t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1,t=t.replace(/[^0-9\.]+/g,""),n*=Number(t)}return n},isNaN:function(t){return"number"==typeof t&&isNaN(t)},includes:function(t,e){return-1!==t.indexOf(e)},insert:function(t,e,n){return t.slice(0,n)+e+t.slice(n)},reduce:function(t,e){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n,r=Object(t),i=r.length>>>0,o=0;if(3===arguments.length)n=arguments[2];else{for(;o<i&&!(o in r);)o++;if(o>=i)throw new TypeError("Reduce of empty array with no initial value");n=r[o++]}for(;o<i;o++)o in r&&(n=e(n,r[o],o,r));return n},multiplier:function(t){var e=t.toString().split(".");return e.length<2?1:Math.pow(10,e[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(t,e){var r=n.multiplier(e);return t>r?t:r},1)},toFixed:function(t,e,n,r){var i,o,s,a,c=t.toString().split("."),u=e-(r||0);return i=2===c.length?Math.min(Math.max(c[1].length,u),e):u,s=Math.pow(10,i),a=(n(t+"e+"+i)/s).toFixed(i),r>e-i&&(o=new RegExp("\\.?0{1,"+(r-(e-i))+"}$"),a=a.replace(o,"")),a}},e.options=s,e.formats=r,e.locales=i,e.locale=function(t){return t&&(s.currentLocale=t.toLowerCase()),s.currentLocale},e.localeData=function(t){if(!t)return i[s.currentLocale];if(t=t.toLowerCase(),!i[t])throw new Error("Unknown locale : "+t);return i[t]},e.reset=function(){for(var t in o)s[t]=o[t]},e.zeroFormat=function(t){s.zeroFormat="string"==typeof t?t:null},e.nullFormat=function(t){s.nullFormat="string"==typeof t?t:null},e.defaultFormat=function(t){s.defaultFormat="string"==typeof t?t:"0.0"},e.register=function(t,e,n){if(e=e.toLowerCase(),this[t+"s"][e])throw new TypeError(e+" "+t+" already registered.");return this[t+"s"][e]=n,n},e.validate=function(t,n){var r,i,o,s,a,c,u,l;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),t=t.trim(),t.match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(n)}catch(t){u=e.localeData(e.locale())}return o=u.currency.symbol,a=u.abbreviations,r=u.delimiters.decimal,i="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,(null===(l=t.match(/^[^\d]+/))||(t=t.substr(1),l[0]===o))&&((null===(l=t.match(/[^\d]+$/))||(t=t.slice(0,-1),l[0]===a.thousand||l[0]===a.million||l[0]===a.billion||l[0]===a.trillion))&&(c=new RegExp(i+"{2}"),!t.match(/[^\d.,]/g)&&(s=t.split(r),!(s.length>2)&&(s.length<2?!!s[0].match(/^\d+.*\d$/)&&!s[0].match(c):1===s[0].length?!!s[0].match(/^\d+$/)&&!s[0].match(c)&&!!s[1].match(/^\d+$/):!!s[0].match(/^\d+.*\d$/)&&!s[0].match(c)&&!!s[1].match(/^\d+$/)))))},e.fn=t.prototype={clone:function(){return e(this)},format:function(t,n){var i,o,a,c=this._value,u=t||s.defaultFormat;if(n=n||Math.round,0===c&&null!==s.zeroFormat)o=s.zeroFormat;else if(null===c&&null!==s.nullFormat)o=s.nullFormat;else{for(i in r)if(u.match(r[i].regexps.format)){a=r[i].format;break}a=a||e._.numberToFormat,o=a(c,u,n)}return o},value:function(){return this._value},input:function(){return this._input},set:function(t){return this._value=Number(t),this},add:function(t){function e(t,e,n,i){return t+Math.round(r*e)}var r=n.correctionFactor.call(null,this._value,t);return this._value=n.reduce([this._value,t],e,0)/r,this},subtract:function(t){function e(t,e,n,i){return t-Math.round(r*e)}var r=n.correctionFactor.call(null,this._value,t);return this._value=n.reduce([t],e,Math.round(this._value*r))/r,this},multiply:function(t){function e(t,e,r,i){var o=n.correctionFactor(t,e);return Math.round(t*o)*Math.round(e*o)/Math.round(o*o)}return this._value=n.reduce([this._value,t],e,1),this},divide:function(t){function e(t,e,r,i){var o=n.correctionFactor(t,e);return Math.round(t*o)/Math.round(e*o)}return this._value=n.reduce([this._value,t],e),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(t){var e=t%10;return 1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"},currency:{symbol:"$"}}),function(){e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,n,r){var i,o=e._.includes(n," BPS")?" ":"";return t*=1e4,n=n.replace(/\s?BPS/,""),i=e._.numberToFormat(t,n,r),e._.includes(i,")")?(i=i.split(""),i.splice(-1,0,o+"BPS"),i=i.join("")):i=i+o+"BPS",i},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}})}(),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r=t.suffixes.concat(n.suffixes.filter(function(e){return t.suffixes.indexOf(e)<0})),i=r.join("|");i="("+i.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(i)},format:function(r,i,o){var s,a,c,u=e._.includes(i,"ib")?n:t,l=e._.includes(i," b")||e._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),s=0;s<=u.suffixes.length;s++)if(a=Math.pow(u.base,s),c=Math.pow(u.base,s+1),null===r||0===r||r>=a&&r<c){l+=u.suffixes[s],a>0&&(r/=a);break}return e._.numberToFormat(r,i,o)+l},unformat:function(r){var i,o,s=e._.stringToNumber(r);if(s){for(i=t.suffixes.length-1;i>=0;i--){if(e._.includes(r,t.suffixes[i])){o=Math.pow(t.base,i);break}if(e._.includes(r,n.suffixes[i])){o=Math.pow(n.base,i);break}}s*=o||1}return s}})}(),function(){e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,n,r){var i,o,s=e.locales[e.options.currentLocale],a={before:n.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:n.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(n=n.replace(/\s?\$\s?/,""),i=e._.numberToFormat(t,n,r),t>=0?(a.before=a.before.replace(/[\-\(]/,""),a.after=a.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(a.before,"-")&&!e._.includes(a.before,"(")&&(a.before="-"+a.before),o=0;o<a.before.length;o++)switch(a.before[o]){case"$":i=e._.insert(i,s.currency.symbol,o);break;case" ":i=e._.insert(i," ",o+s.currency.symbol.length-1)}for(o=a.after.length-1;o>=0;o--)switch(a.after[o]){case"$":i=o===a.after.length-1?i+s.currency.symbol:e._.insert(i,s.currency.symbol,-(a.after.length-(1+o)));break;case" ":i=o===a.after.length-1?i+" ":e._.insert(i," ",-(a.after.length-(1+o)+s.currency.symbol.length-1))}return i}})}(),function(){e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,n,r){var i="number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential(),o=i.split("e");return n=n.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),n,r)+"e"+o[1]},unformat:function(t){function n(t,n,r,i){var o=e._.correctionFactor(t,n);return t*o*(n*o)/(o*o)}var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),i=Number(r[0]),o=Number(r[1]);return o=e._.includes(t,"e-")?o*=-1:o,e._.reduce([i,Math.pow(10,o)],n,1)}})}(),function(){e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,n,r){var i=e.locales[e.options.currentLocale],o=e._.includes(n," o")?" ":"";return n=n.replace(/\s?o/,""),o+=i.ordinal(t),e._.numberToFormat(t,n,r)+o}})}(),function(){e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,n,r){var i,o=e._.includes(n," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),n=n.replace(/\s?\%/,""),i=e._.numberToFormat(t,n,r),e._.includes(i,")")?(i=i.split(""),i.splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",i},unformat:function(t){var n=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*n:n}})}(),function(){e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(t,e,n){var r=Math.floor(t/60/60),i=Math.floor((t-60*r*60)/60),o=Math.round(t-60*r*60-60*i);return r+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(t){var e=t.split(":"),n=0;return 3===e.length?(n+=60*Number(e[0])*60,n+=60*Number(e[1]),n+=Number(e[2])):2===e.length&&(n+=60*Number(e[0]),n+=Number(e[1])),Number(n)}})}(),e})},181:function(t,e,n){t.exports=n.p+"static/img/c1.afead32.png"},182:function(t,e,n){t.exports=n.p+"static/img/c10.0cf6c3a.png"},183:function(t,e,n){t.exports=n.p+"static/img/c5.3693c5b.png"},187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(155),i=n.n(r),o=n(174),s=n(180),a=n.n(s),c=n(126),u=n.n(c);e.default={name:"payment",data:function(){return{itemname:"",itemID:0,img:"",choice:[],netAmount:0,netPayment:0,cnt:1,choice_ID:0,choice_name:"",price:0,unit:"",oldMenu:[],langID:0,PMC:"bt-cancel",payload:{},test_totalbill:0,TPsuccess:"",b50:!1,b100:!1,b500:!1,b1000:!1}},methods:{showDetail:function(t,e){this.itemname=t.name,this.itemID=t.item_code,this.img=t.img,this.unit=t.unit;for(var n=t.type_list,r=0;r<n.length;r++)switch(e){case 1:this.choice.push({id:n[r].id,name:n[r].name,price:n[r].price,isActive:!1});break;case 2:this.choice.push({id:n[r].id,name:n[r].name_en,price:n[r].price,isActive:!1});break;case 3:this.choice.push({id:n[r].id,name:n[r].name_cn,price:n[r].price,isActive:!1})}},addCNT:function(){this.stopSound(),this.Soundclick(),this.cnt+=1,this.total_bill()},rmCNT:function(){this.stopSound(),this.Soundclick(),this.cnt>1?this.cnt-=1:this.cnt=1,this.total_bill()},total_bill:function(){this.netAmount=this.cnt*this.price},select_type:function(t){for(var e=0;e<this.choice.length;e++)e==t?(this.choice[e].isActive=!0,this.price=this.choice[e].price,this.choice_name=this.choice[e].name,this.choice_ID=this.choice[e].id):this.choice[e].isActive=!1;this.total_bill()},send_payment:function(){this.stopSound(),this.Soundclick(),u()("#payment-onhand").addClass("is-active"),this.payload={total:this.netAmount,type:"coffee",sale_subs:[{line:0,item_id:this.itemID,item_name:this.itemname,qty:this.cnt,price_id:this.choice_ID,price_name:this.choice_name,price:this.price,unit:this.unit}]},o.a.sendOrderAX(this.payload,function(t){console.log(t)},function(t){console.log(i()(t)),alert("API sale error"+t)})},bill_netAmount:function(t){if(console.log("billAmount "+this.payload.total),this.netAmount=this.payload.total-t,this.netPayment=t,!(this.netAmount<=0))return this.PMC="bt-cancel disabled",console.log("เพิ่มเงิน "+this.netAmount+", netPayment "+this.netPayment),!1;this.PMC="bt-cancel disabled",this.netAmount>=0?this.TPsuccess="กรุณารอรับใบเสร็จรับเงิน":this.TPsuccess="กรุณารอรับใบเสร็จรับเงินและเงินทอน "+Math.abs(this.netAmount)+" บาท",this.show_cm(),console.log("ทอนเงิน "+Math.abs(this.netAmount)+", netPayment "+this.netPayment)},show_cm:function(){u()("#payment-onhand").removeClass("is-active"),u()("#payment-success").addClass("is-active")},test_payment:function(t){var e=Math.ceil(t.total/20),n=0,r=t.total,i=0,o=!1,s=!1,a=!1,c=!1;r>=50&&(o=!0),r>=100&&(s=!0),r>=500&&(a=!0),r>=1e3&&(c=!0),this.event_sk({command:"accepted_bill",data:{b20:!0,b50:o,b100:s,b500:a,b1000:c}});var u=setInterval(function(){n+=20,r>=50&&(o=!0),r>=100&&(s=!0),r>=500&&(a=!0),r>=1e3&&(c=!0),this.event_sk({command:"accepted_bill",data:{b20:!0,b50:o,b100:s,b500:a,b1000:c}}),e==i?(this.event_sk({command:"print",data:"success"}),clearInterval(u)):(r-=n,this.event_sk({command:"onhand",data:n})),i++}.bind(this),3e3)},payment_sucess:function(t){"success"==t&&(this.netAmount=0,this.netPayment=0,this.payload=[],u()("#payment-success").removeClass("is-active"),this.$router.push("/"))},close_modal:function(){var t={device:"host",type:"request",command:"cancel"};this.$socket.sendObj(t),u()(".modal").removeClass("is-active")},back_item:function(){this.$router.push({name:"items",params:{menu:this.oldMenu,langID:this.langID}})},Format_money:function(t){return a()(t).format("0,0")},websocket_onmessage:function(){var t=this;this.$options.sockets.onmessage=function(e){return t.event_sk(JSON.parse(e.data))}},event_sk:function(t){switch(console.log(i()(t)),t.command){case"onhand":this.bill_netAmount(t.data);break;case"accepted_bill":this.set_bil(t.data);break;case"print":this.payment_sucess(t.data)}},set_bil:function(t){t.b50&&(this.b50=!0),t.b100&&(this.b100=!0),t.b500&&(this.b500=!0),t.b1000&&(this.b1000=!0)},Soundclick:function(){document.getElementById("audio").play()},stopSound:function(){document.getElementById("audio").currentTime=0}},beforeDestroy:function(){return{sockets:null}},mounted:function(){var t=this.$route.params.items;this.langID=this.$route.params.langID,this.oldMenu=this.$route.params.oldMenu,this.websocket_onmessage(),t?(this.showDetail(t,this.langID),this.select_type(0)):this.$router.push("/")}}},272:function(t,e,n){t.exports=n.p+"static/img/b1000_false.e16e092.png"},273:function(t,e,n){t.exports=n.p+"static/img/b1000_true.0db55b6.png"},274:function(t,e,n){t.exports=n.p+"static/img/b100_false.a429efa.png"},275:function(t,e,n){t.exports=n.p+"static/img/b100_true.214778c.png"},276:function(t,e,n){t.exports=n.p+"static/img/b20_true.14ff55d.png"},277:function(t,e,n){t.exports=n.p+"static/img/b500_false.1ec869a.png"},278:function(t,e,n){t.exports=n.p+"static/img/b500_true.db0cc66.png"},279:function(t,e,n){t.exports=n.p+"static/img/b50_false.95357cd.png"},280:function(t,e,n){t.exports=n.p+"static/img/b50_true.0636b0f.png"},281:function(t,e,n){t.exports=n.p+"static/img/thankyou.9d8a755.gif"},286:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"payment"},[r("div",{staticClass:"container"},[r("div",{staticClass:"payment-top"},[r("span",[t._v(t._s(t.itemname))])]),t._v(" "),r("div",{staticClass:"payment-left"},[r("div",{staticClass:"Pimg"},[r("img",{attrs:{src:t.img}})]),t._v(" "),r("div",{staticClass:"PnetA"},[t._v("\n\t \t\t\t"+t._s(t.Format_money(t.netAmount))+" ฿\n\t \t\t")])]),t._v(" "),r("div",{staticClass:"payment-right"},[r("div",{staticClass:"PRT"},[r("div",{staticClass:"PRT-romove"},[r("a",{staticClass:"button is-large is-danger",on:{click:function(e){t.rmCNT()}}},[t._v(" - ")])]),t._v(" "),r("div",{staticClass:"PRT-cnt"},[t._v("\n\t \t\t\t\t"+t._s(t.cnt)+"\n\t \t\t\t")]),t._v(" "),r("div",{staticClass:"PRT-plus"},[r("a",{staticClass:"button is-large is-success",on:{click:function(e){t.addCNT()}}},[t._v(" + ")])])]),t._v(" "),r("div",{staticClass:"PRC"},t._l(t.choice,function(e,n){return r("a",{staticClass:"choice",class:{active:e.isActive},on:{click:function(e){t.select_type(n)}}},[t._v("\n\t \t\t\t\t"+t._s(e.name)+"\n\t \t\t\t")])})),t._v(" "),r("div",{staticClass:"PRB"},[r("button",{staticClass:"cancel",on:{click:t.back_item}},[t._v("\n\t \t\t\t\tย้อนกลับ\n\t \t\t\t")]),t._v(" "),r("button",{staticClass:"success",on:{click:t.send_payment}},[t._v("\n\t \t\t\t\tชำระเงิน\n\t \t\t\t")])])])]),t._v(" "),r("div",{staticClass:"modal",attrs:{id:"payment-onhand"}},[r("div",{staticClass:"modal-background"}),t._v(" "),r("div",{staticClass:"modal-content"},[r("div",{staticClass:"md-left"},[r("u",[t._v("ธนบัตรที่ชำระได้ ")]),t._v(" "),r("hr",{staticStyle:{margin:"2% 5% 5% 5%",width:"90%"}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:1==t.b1000,expression:"b1000==true"}],attrs:{src:n(273)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:0==t.b1000,expression:"b1000==false"}],attrs:{src:n(272)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:1==t.b500,expression:"b500==true"}],attrs:{src:n(278)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:0==t.b500,expression:"b500==false"}],attrs:{src:n(277)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:1==t.b100,expression:"b100==true"}],attrs:{src:n(275)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:0==t.b100,expression:"b100==false"}],attrs:{src:n(274)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:1==t.b50,expression:"b50==true"}],attrs:{src:n(280)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:0==t.b50,expression:"b50==false"}],attrs:{src:n(279)}}),t._v(" "),r("img",{attrs:{src:n(276)}})]),t._v(" "),r("div",{staticClass:"md-right"},[r("div",{staticClass:"netAmt"},[r("span",[t._v("ยอดค้างชำระ")]),t._v(" "),r("div",{staticClass:"mn"},[t._v("\n\t\t\t\t\t"+t._s(t.Format_money(t.netAmount))+" ฿\n\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"paymentAmt"},[r("span",[t._v("ยอดชำระ")]),t._v(" "),r("div",{staticClass:"mn"},[t._v("\n\t\t\t\t\t"+t._s(t.Format_money(t.netPayment))+" ฿\n\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"cancel"},[r("button",{class:t.PMC,attrs:{disabled:0!=t.netPayment},on:{click:t.close_modal}},[t._v("\n\t \t\t\t\tยกเลิก\n\t \t\t\t")])]),t._v(" "),t._m(0)])])]),t._v(" "),r("div",{staticClass:"modal",attrs:{id:"payment-success"}},[r("div",{staticClass:"modal-background"}),t._v(" "),r("div",{staticClass:"modal-content",staticStyle:{"text-align":"center"}},[r("img",{attrs:{src:n(281),width:"150"}}),t._v(" "),r("h1",[t._v(t._s(t.TPsuccess))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"coinuse"},[r("u",[t._v("เหรียญที่ชำระได้ ")]),t._v(" "),r("br"),t._v(" "),r("img",{staticClass:"c1",attrs:{src:n(181)}}),t._v(" "),r("img",{staticClass:"c5",attrs:{src:n(183)}}),t._v(" "),r("img",{staticClass:"c10",attrs:{src:n(182)}})])}]}}});
//# sourceMappingURL=2.68e60f5b292c25a91750.js.map