/*!!!
 * youdao ad sdk: 1.1.1
 *
 * Author: nilzh, baishm
 * Date: 2017-01-09 03:41:56
 */
!function(e){if("undefined"==typeof window||"undefined"==typeof window.document)throw new Error("yadk depends on a browser environment");"undefined"!=typeof module&&"object"==typeof module.exports?module.exports=e():"undefined"!=typeof define&&(define.amd||define.cmd)?define(function(){return e()}):window.yadk||(window.yadk=e())}(function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function r(){p||(p=d.getUniqueKey(32),c.setCookie(f,p,365,"/"))}function o(e){return e>20?20:e<=0?1:e}function i(e){var t=b,n=e?d.isString(e)?e:d.obj2UrlString(e):"";return n&&(t+=(/\?/.test(t)?"&":"?")+n),t}function a(e,t,n){if(y.id){var r={slotId:y.id,os:v.name,varaiantId:0};y.imei?r.imei=y.imei:y.udid&&(r.udid=y.udid),d.extend(r,t,{IDS:e}),d.notifyUrl(i(r),n)}}var d=n(1),c=n(2),u=n(3),s=n(4),l=e.exports={version:"1.1.1"};l.jsonp=s,l.formatString=d.formatString,l.formatDate=d.formatDate;var f="__yadk_uid",p=c.getCookie(f);r();var m="http:"===location.protocol?"http:":"https:",g=m+"//gorgon.youdao.com/gorgon/request.s",h=m+"//gorgon.youdao.com/gorgon/mimpr.s",b=m+"//conv.youdao.com/api/push/youdao",v=u(),w={reqfrom:"web",webos:v.value,nsv:l.version},y={},x={UNKNOWN:"UNKNOWN",WIFI:"WIFI","3G":"3G","4G":"4G"},k={UNKNOWN:0,WIFI:2,"3G":3,"4G":3};l.config=function(e){var t=e.nt&&e.nt.replace(/^\s+|\s+$/g,"");if(t)switch(delete e.dct,delete e.ct,delete e.nt,t=t.toUpperCase()){case x["3G"]:case x["4G"]:e.ct=k[t],e.dct="3G"===t?12:13;break;case x.WIFI:case x.UNKNOWN:e.ct=k[t],delete e.dct,delete y.dct;break;default:e.ct=k[x.UNKNOWN],delete e.dct,delete y.dct}return"brandFirst"in e&&(e.brandFirst&&(e.MAGIC_NO=0),delete e.brandFirst),"debug"in e&&e.debug===!0&&(delete e.debug,"reqUrl"in e&&(g=e.reqUrl,delete e.reqUrl),"brandShowedUrl"in e&&(h=e.brandShowedUrl,delete e.brandShowedUrl)),y=d.extend({udid:p},e,w),v.isIOS?(y.id=y.iosAdID||y.id,delete y.imei):v.isAndroid?y.id=y.andAdID||y.id:delete y.imei,y},l.fetch=function(e,t){if(y&&y.id){d.isFunction(e)&&(t=e,e=1),!d.isNumber(e)&&(e=1),e=o(e);var n=d.extend({},y,{ran:e});n.iosAdID&&delete n.iosAdID,n.andAdID&&delete n.andAdID,y.imei&&delete y.udid,s({url:g,data:n,complete:function(e,n,r){!r&&(r=[]),"length"in r||(r=[r]),d.forEach(r,function(e){"brand"===(e["X-Cost-Type"]||"").toLowerCase()?(e.isBrand=!0,delete e["X-Cost-Type"]):e.isBrand=!1}),d.isFunction(t)&&t.call(null,r)}})}},l.showed=function(e,t){function n(){++r===e.length&&d.isFunction(t)&&t()}!e&&(e=[]);var r=0;d.forEach(e,function(e){if("?"===e[0]){var t={type:"brandImpr",imptracker:[e.substr(1)+"#@$"+d.formatDate(new Date,"yyyyMMddhhmmss")]},r=d.formatString("{0}?s={1}",h,encodeURIComponent(JSON.stringify(t)));d.notifyUrl(r,n)}else d.notifyUrl(e,n)})},l.downloadStarted=function(e,t){a(0,e,t)},l.downloadEnded=function(e,t){a(1,e,t)}},function(e,t){function n(e,t){return s.call(e,t)}function r(e){return"[object Function]"===u.call(e)}function o(e){return"[object Object]"===u.call(e)}function i(e){return"[object Date]"===u.call(e)}function a(e){return function(t){var n=arguments.length;if(n<2||null==t)return t;for(var r=1;r<n;r++)for(var o=arguments[r],i=f(o),a=i.length,d=0;d<a;d++){var c=i[d];e&&void 0!==t[c]||(t[c]=o[c])}return t}}var d=[],c={},u=c.toString,s=c.hasOwnProperty;t.isFunction=r,t.isString=function(e){return"[object String]"===u.call(e)},t.isObject=o,t.isNumber=function(e){return"[object Number]"===u.call(e)},t.isDate=i;var l=d.forEach?function(e,t){e||(e=[]),e.forEach(t)}:function(e,t){e||(e=[]);for(var n=0,r=e.length;n<r;n++)t(e[n],n,e)};t.forEach=l;var f=t.keys=Object.keys||function(e){var t=[];for(var r in e)n(e,r)&&t.push(r);return t};t.formatString=function(e){var t=[].slice.call(arguments,1);return e.replace(/\{(\d+)\}/gi,function(e,n){var r=t[0|n];return void 0===r?"":r})},t.formatDate=function(e,t){if(null==e||!i(e))return e;var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t},t.getUniqueKey=function(e){for(var t,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r="",o=0;o<e;o++)t=Math.floor(Math.random()*n.length),r+=n[t];return r},t.obj2UrlString=function(e){if(!o(e))return"";var t=[];return l(f(e),function(n,r){t.push(n+"="+encodeURIComponent(e[n]))}),t.join("&")},t.extend=a(),t.notifyUrl=function(e,t){e=e+(/\?/.test(e)?"&":"?")+"t="+ +new Date;var n=new Image;n.onload=n.onerror=function(){this.onload=this.onerror=null,n=null,r(t)&&t("success")},n.src=e}},function(e,t,n){function r(e){var t=new RegExp("(?:(?:^|.*;\\s*)"+e+"\\s*=\\s*([^;]*).*$)|^.*$"),n=t.exec(document.cookie);return n[1]&&unescape(n[1])}var o=n(1).formatString;t.getCookie=r,t.setCookie=function(e,t,n,r){r||(r="/");var i;if(n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3),i=a.toGMTString()}var d=o("{0}={1};expires={2};path={3}",e,escape(t),i,r);document.cookie=d},t.delCookie=function(e){var t=r(e);if(t){var n=new Date;n.setTime(n.getTime()-1),document.cookie=o("{0}={1};expires={2}",e,escape(t),n.toGMTString())}}},function(e,t){var n;e.exports=function(){if(n)return n;var e=navigator.userAgent.toLowerCase()||"",t={iphone:0,ipad:1,mac:2,android:3,android_tablet:4,win_tablet:5,windows:6,win_phone:7,linux:8,other:9},r={};r.iphone=/iphone/.test(e),r.ipad=/ipad/.test(e),r.mac=/mac/.test(e),r.mobile=/mobile/.test(e),r.android=/android/.test(e),r.android_tablet=r.android&&!r.mobile,r.windows=/windows/.test(e),r.win_phone=r.windows&&/phone/.test(e),r.win_tablet=r.windows&&!r.win_phone&&/touch/.test(e),r.linux=/linux/.test(e);var o="";switch(!0){case r.iphone:o="iphone";break;case r.ipad:o="ipad";break;case r.mac:o="mac";break;case r.android_tablet:o="android_tablet";break;case r.android:o="android";break;case r.win_phone:o="win_phone";break;case r.win_tablet:o="win_tablet";break;case r.windows:o="windows";break;case r.linux:o="linux";break;default:o="other"}return n={name:o,value:t[o],isIOS:r.iphone||r.ipad,isAndroid:r.android||r.android_tablet}}},function(e,t,n){var r=(n(1),n(1).extend),o=n(1).isString,i=n(1).obj2UrlString,a=window,d=a.document,c=function(){function e(){}function t(e){f=[e]}function n(e,t,n){return e&&e.apply&&e.apply(t.context||t,n)}function c(e){return/\?/.test(e)?"&":"?"}function u(e){return d.createElement(e||"div")}function s(e,t){return t||(t=d),t.getElementsByTagName(e)}function l(d){function s(e){z++||(Q(),H&&(D[J]={s:[e]}),K&&(e=K.apply(d,[e])),n(W,d,[e,_,d]),n(q,d,[d,_,e]))}function l(e){z++||(Q(e),H&&e!=j&&(D[J]=e),n(R,d,[d,e]),n(q,d,[d,e]))}d=r({},F,d);var v,w,G,M,A,W=d.success,R=d.error,q=d.complete,K=d.dataFilter,$=d.jsonp,B=d.jsonpCallback+"_"+E++,L=d.cache,H=d.pageCache,X=d.charset,J=d.url,P=d.data,Y=d.timeout,z=0,Q=e;return d.abort=function(){!z++&&Q()},J=J||g,P=P?o(P)?P:i(P):g,J+=P?c(J)+P:g,J+=c(J)+$+"="+B,L||H||(J+=c(J)+"_"+(new Date).getTime()),H&&(v=D[J])?v.s?s(v.s[0]):l(v):(a[B]=t,G=u(N),G.id=B,X&&(G[m]=X),T&&T.version()<11.6?(M=u(N)).text="document.getElementById('"+G.id+"')."+x+"()":G[p]=p,O&&(G.htmlFor=G.id,G.event=y),G[k]=G[x]=G[I]=function(e){if(!G[S]||!/i/.test(G[S])){try{G[y]&&G[y]()}catch(t){}e=f,f=0,e?s(e[0]):l(h)}},G.src=J,Q=function(e){if(A&&clearTimeout(A),G[I]=G[k]=G[x]=null,C[U](G),M&&C[U](M),e!==j)a[B]=null;else{var t=setTimeout(function(){a[B]&&a[B]()},1e4);a[B]=function(){t&&clearTimeout(t),a[B]=null}}},C[b](G,w=C.firstChild),M&&C[b](M,w),A=Y>0&&setTimeout(function(){l(j)},Y)),d}var f,p="async",m="charset",g="",h="error",b="insertBefore",v="_yad_jsonp",w="on",y=w+"click",x=w+h,k=w+"load",I=w+"readystatechange",S="readyState",U="removeChild",N="script",_="success",j="timeout",C=d.head||s("head")[0],D={},E=0,F={url:location.href,cache:!1,pageCache:!1,charset:"UTF-8",jsonp:"callback",jsonpCallback:v,timeout:0},T=a.opera,O=function(){var e=u();return e.innerHTML="<!--[if IE]><i></i><![endif]-->",!!s("i",e).length}();return l}();e.exports=c}])});