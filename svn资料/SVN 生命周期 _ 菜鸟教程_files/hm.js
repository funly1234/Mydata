(function(){var h={},mt={},c={id:"8e2a116daf0104a78d601f40a45c75b4",dm:["w3cschool.cc","runoob.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:0,vdur:1800000,age:31536000000,rec:1,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,r=!0,s=null,u=!1;mt.i={};mt.i.Aa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.ya=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:q;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Ca=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,d,g){var e;g.H&&(e=new Date,e.setTime(e.getTime()+g.H));document.cookie=a+"="+d+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(e?"; expires="+e.toGMTString():"")+(g.$a?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:s};mt.o={};mt.o.T=function(a){return document.getElementById(a)};mt.o.Ta=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return s};
(mt.o.N=function(){function a(){if(!a.C){a.C=r;for(var d=0,g=e.length;d<g;d++)e[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(d,1);return}a()}var g=u,e=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,u);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!g)if(g=r,"complete"===document.readyState)a.C=r;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
k,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var e=u;try{e=window.frameElement==s}catch(n){}document.documentElement.doScroll&&e&&d()}})();return function(d){a.C?d():e.push(d)}}()).C=u;mt.event={};mt.event.c=function(a,d,g){a.attachEvent?a.attachEvent("on"+d,function(d){g.call(a,d)}):a.addEventListener&&a.addEventListener(d,g,u)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=u};mt.j={};mt.j.parse=function(){return(new Function('return (" + source + ")'))()};
mt.j.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=g[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function d(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===s)return"null";if(e instanceof Array){var g=["["],l=e.length,n,p,f;for(p=0;p<l;p++)switch(f=e[p],typeof f){case "undefined":case "function":case "unknown":break;default:n&&g.push(","),g.push(mt.j.stringify(f)),n=1}g.push("]");return g.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+d(e.getMonth()+1)+"-"+d(e.getDate())+"T"+d(e.getHours())+":"+d(e.getMinutes())+":"+d(e.getSeconds())+'"';n=["{"];p=mt.j.stringify;for(l in e)if(Object.prototype.hasOwnProperty.call(e,l))switch(f=
e[l],typeof f){case "undefined":case "unknown":case "function":break;default:g&&n.push(","),g=1,n.push(p(l)+":"+p(f))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.d=function(a,d){return"[object "+d+"]"==={}.toString.call(a)};mt.lang.Xa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.Za=function(a){return mt.lang.d(a,"String")};mt.localStorage={};
mt.localStorage.F=function(){if(!mt.localStorage.g)try{mt.localStorage.g=document.createElement("input"),mt.localStorage.g.type="hidden",mt.localStorage.g.style.display="none",mt.localStorage.g.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)}catch(a){return u}return r};
mt.localStorage.set=function(a,d,g){var e=new Date;e.setTime(e.getTime()+g||31536E6);try{window.localStorage?(d=e.getTime()+"|"+d,window.localStorage.setItem(a,d)):mt.localStorage.F()&&(mt.localStorage.g.expires=e.toUTCString(),mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.setAttribute(a,d),mt.localStorage.g.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var d=a.indexOf("|"),g=a.substring(0,d)-0;if(g&&g>(new Date).getTime())return a.substring(d+1)}}else if(mt.localStorage.F())try{return mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.getAttribute(a)}catch(e){}return s};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.F())try{mt.localStorage.g.load(document.location.hostname),mt.localStorage.g.removeAttribute(a),mt.localStorage.g.save(document.location.hostname)}catch(d){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,d){if(window.sessionStorage)try{window.sessionStorage.setItem(a,d)}catch(g){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):s};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.$={};mt.$.log=function(a,d){var g=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=g;g.onload=g.onerror=g.onabort=function(){g.onload=g.onerror=g.onabort=s;g=window[e]=s;d&&d(a)};g.src=a};mt.P={};
mt.P.ra=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(a=d.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=d.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return a};
mt.P.Sa=function(a,d,g,e,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+g+'" height="'+e+'"><param name="movie" value="'+d+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+g+'" height="'+e+'" src="'+d+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.f=function(a,d){var g=a.match(RegExp("(^|&|\\?|#)("+d+")=([^&#]*)(&|$|#)",""));return g?g[3]:s};mt.url.Va=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:s};mt.url.oa=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):s};mt.url.V=function(a){return(a=mt.url.oa(a))?a.replace(/:\d+$/,""):a};mt.url.Ua=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):s};
(function(){function a(){for(var a=u,g=document.getElementsByTagName("script"),e=g.length,e=100<e?100:e,k=0;k<e;k++){var l=g[k].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=r;break}}return a}return h.ma=a})();var A=h.ma;
h.r={Wa:"http://tongji.baidu.com/hm-web/welcome/ico",Z:"hm.baidu.com/hm.gif",da:"baidu.com",va:"hmmd",wa:"hmpl",La:"utm_medium",ua:"hmkw",Na:"utm_term",sa:"hmci",Ka:"utm_content",xa:"hmsr",Ma:"utm_source",ta:"hmcu",Ja:"utm_campaign",p:0,k:Math.round(+new Date/1E3),R:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",L:A()||"https:"===document.location.protocol?"https:":"http:",Ya:0,Pa:6E5,Qa:10,Ra:1024,Oa:1,z:2147483647,aa:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api sn ct u tt".split(" ")};
(function(){var a={m:{},c:function(a,g){this.m[a]=this.m[a]||[];this.m[a].push(g)},A:function(a,g){this.m[a]=this.m[a]||[];for(var e=this.m[a].length,k=0;k<e;k++)this.m[a][k](g)}};return h.s=a})();
(function(){function a(a,e){var k=document.createElement("script");k.charset="utf-8";d.d(e,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=s,e()}:k.onload=function(){e()});k.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(k,l)}var d=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?g.set("Hm_from_"+c.id,a):d.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?g.get("Hm_from_"+c.id):d.get("Hm_from_"+c.id))||"";return a}var d=mt.localStorage,g=mt.sessionStorage;return h.S=a})();
(function(){var a=mt.o,d=h.r,g=h.load,e=h.S;h.s.c("pv-b",function(){var k=d.protocol+"//crs.baidu.com/";c.rec&&a.N(function(){for(var l=0,n=c.rp.length;l<n;l++){var p=c.rp[l][0],f=c.rp[l][1],b=a.T("hm_t_"+p);if(f&&!(2==f&&!b||b&&""!==b.innerHTML))b="",b=Math.round(Math.random()*d.z),b=4==f?k+"hl.js?"+["siteId="+c.id,"planId="+p,"rnd="+b].join("&"):k+"t.js?"+["siteId="+c.id,"planId="+p,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+b].join("&"),
g(b)}})})})();(function(){var a=h.r,d=h.load,g=h.S;h.s.c("pv-b",function(){if(c.trust&&c.vcard){var e="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+g(),"rnd="+Math.round(Math.random()*a.z),"hm=1"].join("&");d(e)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.G.pa()+","+h.G.na();h.b.h()}}function d(){clearTimeout(y);var a;x&&(a="visible"==document[x]);z&&(a=!document[z]);p="undefined"==typeof a?r:a;if((!n||!f)&&p&&b)v=r,m=+new Date;else if(n&&f&&(!p||!b))v=u,t+=+new Date-m;n=p;f=b;y=setTimeout(d,100)}function g(b){var a=document,m="";if(b in a)m=b;else for(var d=["webkit","ms","moz","o"],t=0;t<d.length;t++){var g=d[t]+b.charAt(0).toUpperCase()+b.slice(1);if(g in a){m=
g;break}}return m}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))b="focus"==a.type||"focusin"==a.type?r:u,d()}var k=mt.event,l=h.s,n=r,p=r,f=r,b=r,w=+new Date,m=w,t=0,v=r,x=g("visibilityState"),z=g("hidden"),y;d();(function(){var b=x.replace(/[vV]isibilityState/,"visibilitychange");k.c(document,b,d);k.c(window,"pageshow",d);k.c(window,"pagehide",d);"object"==typeof document.onfocusin?(k.c(document,"focusin",e),k.c(document,"focusout",e)):(k.c(window,"focus",e),
k.c(window,"blur",e))})();h.G={pa:function(){return+new Date-w},na:function(){return v?+new Date-m+t:t}};l.c("pv-b",function(){k.c(window,"unload",a())});return h.G})();
(function(){var a=mt.lang,d=h.r,g=h.load,e={za:function(e){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var l=h.b.I();g([d.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),e)}},Ia:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.ga=e})();
(function(){function a(b,a,m,d){if(!(b===q||a===q||d===q)){if(""===b)return[a,m,d].join("*");b=String(b).split("!");for(var g,e=u,f=0;f<b.length;f++)if(g=b[f].split("*"),String(a)===g[0]){g[1]=m;g[2]=d;b[f]=g.join("*");e=r;break}e||b.push([a,m,d].join("*"));return b.join("!")}}function d(b){for(var a in b)if({}.hasOwnProperty.call(b,a)){var m=b[a];e.d(m,"Object")||e.d(m,"Array")?d(m):b[a]=String(m)}}function g(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b}var e=
mt.lang,k=mt.j,l=h.r,n=h.s,p=h.ga,f={w:[],D:0,X:u,l:{Q:"",page:""},init:function(){f.e=0;n.c("pv-b",function(){f.ha();f.ka()});n.c("pv-d",function(){f.la();f.l.page=""});n.c("stag-b",function(){h.b.a.api=f.e||f.D?f.e+"_"+f.D:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f.l.Q,f.l.page].join("!")});n.c("stag-d",function(){h.b.a.api=0;f.e=0;f.D=0})},ha:function(){var b=window._hmt||[];if(!b||e.d(b,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var b=window._hmt,a=0;a<arguments.length;a++){var d=
arguments[a];e.d(d,"Array")&&(b.cmd[b.id].push(d),"_setAccount"===d[0]&&(1<d.length&&/^[0-9a-f]{32}$/.test(d[1]))&&(d=d[1],b.id=d,b.cmd[d]=b.cmd[d]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,b)},ka:function(){var b=window._hmt;if(b&&b.cmd&&b.cmd[c.id])for(var a=b.cmd[c.id],m=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,g=a.length;d<g;d++){var e=a[d];m.test(e[0])?f.w.push(e):f.M(e)}b.cmd[c.id]={push:f.M}},la:function(){if(0<f.w.length)for(var b=0,a=f.w.length;b<a;b++)f.M(f.w[b]);
f.w=s},M:function(b){var a=b[0];if(f.hasOwnProperty(a)&&e.d(f[a],"Function"))f[a](b)},_setAccount:function(b){1<b.length&&/^[0-9a-f]{32}$/.test(b[1])&&(f.e|=1)},_setAutoPageview:function(b){if(1<b.length&&(b=b[1],u===b||r===b))f.e|=2,h.b.W=b},_trackPageview:function(b){if(1<b.length&&b[1].charAt&&"/"===b[1].charAt(0)){f.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.J?(h.b.a.nv=0,h.b.a.st=4):h.b.J=r;var a=h.b.a.u,m=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+b[1];f.X||(h.b.a.su=document.location.href);
h.b.h();h.b.a.u=a;h.b.a.su=m}},_trackEvent:function(b){2<b.length&&(f.e|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=g(b[1])+"*"+g(b[2])+(b[3]?"*"+g(b[3]):"")+(b[4]?"*"+g(b[4]):""),h.b.h())},_setCustomVar:function(b){if(!(4>b.length)){var a=b[1],m=b[4]||3;if(0<a&&6>a&&0<m&&4>m){f.D++;for(var d=(h.b.a.cv||"*").split("!"),e=d.length;e<a-1;e++)d.push("*");d[a-1]=m+"*"+g(b[2])+"*"+g(b[3]);h.b.a.cv=d.join("!");b=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==b?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(b),c.age):h.b.Ba("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var d=g(b[1]);b=g(b[2]);if(d!==q&&b!==q){var m=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),m=a(m,d,1,b);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(m),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var d=g(b[1]);b=g(b[2]);if(d!==q&&b!==q){var m=f.l.Q,m=a(m,d,2,b);f.l.Q=m}}},_setPageTag:function(b){if(!(3>b.length)){var d=g(b[1]);b=g(b[2]);if(d!==q&&b!==q){var m=f.l.page,m=a(m,d,3,b);
f.l.page=m}}},_setReferrerOverride:function(b){1<b.length&&(h.b.a.su=b[1].charAt&&"/"===b[1].charAt(0)?l.protocol+"//"+window.location.host+b[1]:b[1],f.X=r)},_trackOrder:function(b){b=b[1];e.d(b,"Object")&&(d(b),f.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=k.stringify(b),h.b.h())},_trackMobConv:function(b){if(b={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[b[1]])f.e|=32,h.b.a.et=93,h.b.a.ep=b,h.b.h()},_trackRTPageview:function(b){b=b[1];e.d(b,"Object")&&(d(b),b=k.stringify(b),512>=encodeURIComponent(b).length&&
(f.e|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.d(b,"Object")){d(b);b=encodeURIComponent(k.stringify(b));var a=function(b){var a=h.b.a.rt;f.e|=128;h.b.a.et=90;h.b.a.rt=b;h.b.h();h.b.a.rt=a},m=b.length;if(900>=m)a.call(this,b);else for(var m=Math.ceil(m/900),g="block|"+Math.round(Math.random()*l.z).toString(16)+"|"+m+"|",v=[],x=0;x<m;x++)v.push(x),v.push(b.substring(900*x,900*x+900)),a.call(this,g+v.join("|")),v=[]}},_setUserId:function(b){b=b[1];p.za();p.Ia(b)}};f.init();h.ea=f;return h.ea})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=r,this.a={},this.W=r,this.J=u,this.init())}var d=mt.url,g=mt.$,e=mt.P,k=mt.lang,l=mt.cookie,n=mt.i,p=mt.localStorage,f=mt.sessionStorage,b=h.r,w=h.s;a.prototype={K:function(b,a){b="."+b.replace(/:\d+/,"");a="."+a.replace(/:\d+/,"");var d=b.indexOf(a);return-1<d&&d+a.length===b.length},Y:function(b,a){b=b.replace(/^https?:\/\//,"");return 0===b.indexOf(a)},B:function(b){for(var a=0;a<c.dm.length;a++)if(-1<
c.dm[a].indexOf("/")){if(this.Y(b,c.dm[a]))return r}else{var g=d.V(b);if(g&&this.K(g,c.dm[a]))return r}return u},I:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.K(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},U:function(){for(var b=0,a=c.dm.length;b<a;b++){var d=c.dm[b];if(-1<d.indexOf("/")&&this.Y(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},qa:function(){if(!document.referrer)return b.k-b.p>c.vdur?1:4;var a=
u;this.B(document.referrer)&&this.B(document.location.href)?a=r:(a=d.V(document.referrer),a=this.K(a||"",document.location.hostname));return a?b.k-b.p>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||f.get(a)||p.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.I(),path:this.U(),H:d}),d?p.set(a,b,d):f.set(a,b)}catch(g){}},Ba:function(a){try{l.set(a,"",{domain:this.I(),path:this.U(),H:-1}),f.remove(a),p.remove(a)}catch(b){}},Ga:function(){var a,d,g,e,f;b.p=this.getData("Hm_lpvt_"+
c.id)||0;13===b.p.length&&(b.p=Math.round(b.p/1E3));d=this.qa();a=4!==d?1:0;if(g=this.getData("Hm_lvt_"+c.id)){e=g.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<b.k-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(b.k);4<e.length;)e.shift();g=e.join(",");e=e[e.length-1]}else g=b.k,e="",f=1;this.setData("Hm_lvt_"+c.id,g,c.age);this.setData("Hm_lpvt_"+c.id,b.k);g=b.k===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.B(document.location.href)&&
(""===document.referrer||this.B(document.referrer)))a=0,d=4;this.a.nv=a;this.a.st=d;this.a.cc=g;this.a.lt=e;this.a.lv=f},Fa:function(){for(var a=[],d=this.a.et,e=0,g=b.aa.length;e<g;e++){var f=b.aa[e],k=this.a[f];"undefined"!==typeof k&&""!==k&&("tt"!==f||"tt"===f&&0===d)&&("ct"!==f||"ct"===f&&0===d)&&a.push(f+"="+encodeURIComponent(k))}switch(d){case 0:a.push("sn="+b.R);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+b.R);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},
Ha:function(){this.Ga();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.Ca;this.a.cl=n.colorDepth+"-bit";this.a.ln=String(n.language).toLowerCase();this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=e.ra();this.a.v="1.2.16";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=d.f(a,b.va)||"";this.a.cp=d.f(a,b.wa)||d.f(a,b.La)||"";this.a.cw=d.f(a,b.ua)||d.f(a,
b.Na)||"";this.a.ci=d.f(a,b.sa)||d.f(a,b.Ka)||"";this.a.cf=d.f(a,b.xa)||d.f(a,b.Ma)||"";this.a.cu=d.f(a,b.ta)||d.f(a,b.Ja)||""},init:function(){try{this.Ha(),0===this.a.nv?this.Ea():this.O(".*"),h.b=this,this.fa(),w.A("pv-b"),this.Da()}catch(a){var d=[];d.push("si="+c.id);d.push("n="+encodeURIComponent(a.name));d.push("m="+encodeURIComponent(a.message));d.push("r="+encodeURIComponent(document.referrer));g.log(b.L+"//"+b.Z+"?"+d.join("&"))}},Da:function(){function a(){w.A("pv-d")}this.W?(this.J=r,
this.a.et=0,this.a.ep="",this.h(a)):a()},h:function(a){var d=this;d.a.rnd=Math.round(Math.random()*b.z);w.A("stag-b");var e=b.L+"//"+b.Z+"?"+d.Fa();w.A("stag-d");d.ca(e);g.log(e,function(b){d.O(b);k.d(a,"Function")&&a.call(d)})},fa:function(){var a=document.location.hash.substring(1),e=RegExp(c.id),g=-1<document.referrer.indexOf(b.da),f=d.f(a,"jn"),k=/^heatlink$|^select$/.test(f);a&&(e.test(a)&&g&&k)&&(this.a.rnd=Math.round(Math.random()*b.z),a=document.createElement("script"),a.setAttribute("type",
"text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",b.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},ca:function(a){var b=f.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");f.set("Hm_unsent_"+c.id,b)},O:function(a){var b=f.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),
a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?f.set("Hm_unsent_"+c.id,b):f.remove("Hm_unsent_"+c.id))},Ea:function(){var a=this,d=f.get("Hm_unsent_"+c.id);if(d)for(var d=d.split(","),e=function(d){g.log(b.L+"//"+decodeURIComponent(d),function(b){a.O(b)})},k=0,l=d.length;k<l;k++)e(d[k])}};return new a})();
(function(){var a=mt.o,d=mt.event,g=mt.url,e=mt.j;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var k=+new Date,l=function(a){var d=performance.timing,e=d[a+"Start"]?d[a+"Start"]:0;a=d[a+"End"]?d[a+"End"]:0;return{start:e,end:a,value:0<a-e?a-e:0}},n=s;a.N(function(){n=+new Date});var p=function(){var a,d,f;f=l("navigation");d=l("request");f={netAll:d.start-f.start,netDns:l("domainLookup").value,netTcp:l("connect").value,srv:l("response").start-d.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:l("loadEvent").end-f.start};a=document.referrer;var p=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],v=s;d=s;if("www.baidu.com"===p[2]||"m.baidu.com"===p[2])v=g.f(a,"qid"),d=g.f(a,"click_t");a=v;f.qid=a!=s?a:"";d!=s?(f.bdDom=n?n-d:0,f.bdRun=k-d,f.bdDef=l("navigation").start-d):(f.bdDom=0,f.bdRun=0,f.bdDef=0);h.b.a.et=87;h.b.a.ep=e.stringify(f);h.b.h()};d.c(window,"load",function(){setTimeout(p,500)})}}catch(f){}})();
(function(){var a=mt.i,d=mt.lang,g=mt.event,e=mt.j;if("undefined"!==typeof h.b&&(c.med||(!a.Aa||7<a.ya)&&c.cvcc)){var k,l,n,p,f=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},b=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(a,b){var f={};f.n=k;f.t="clk";f.v=a;if(b){var g=b.getAttribute("href"),l=b.getAttribute("onclick")?""+b.getAttribute("onclick"):s,m=b.getAttribute("id")||"";n.test(g)?(f.sn="mediate",
f.snv=g):d.d(l,"String")&&n.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.a.et=86;h.b.a.ep=e.stringify(f);h.b.h();for(f=+new Date;400>=+new Date-f;);};if(c.med)l="/zoosnet",k="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,p={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(e)||n.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";k="other";n=c.cvcc.q||q;var m=c.cvcc.id||q;p={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],n!==q?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),m?(d=d.getAttribute("id"),(n.test(e)||n.test(g)||m.test(d))&&
a.push(b[k])):(n.test(e)||n.test(g))&&a.push(b[k])):m!==q&&(d=d.getAttribute("id"),m.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof p&&"undefined"!==typeof n){var t;l+=/\/$/.test(l)?"":"/";var v=function(a,b){if(t===b)return w(l+a,b),u;if(d.d(b,"Array")||d.d(b,"NodeList"))for(var e=0,f=b.length;e<f;e++)if(t===b[e])return w(l+a+"/"+(e+1),b[e]),u};g.c(document,"mousedown",function(a){a=a||window.event;t=a.target||a.srcElement;var e={};for(b(p,function(a,b){e[a]=d.d(b,"Function")?b():document.getElementById(b)});t&&
t!==document&&b(e,v)!==u;)t=t.parentNode})}}})();(function(){var a=mt.o,d=mt.lang,g=mt.event,e=mt.j;if("undefined"!==typeof h.b&&d.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={ba:function(){for(var d=c.cvcf.length,e,p=0;p<d;p++)(e=a.T(decodeURIComponent(c.cvcf[p])))&&g.c(e,"click",k.ia())},ia:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=e.stringify(a);h.b.h()}}};a.N(function(){k.ba()})}})();
(function(){var a=mt.event,d=mt.j;if(c.med&&"undefined"!==typeof h.b){var g=+new Date,e={n:"anti",sb:0,kb:0,clk:0},k=function(){h.b.a.et=86;h.b.a.ep=d.stringify(e);h.b.h()};a.c(document,"click",function(){e.clk++});a.c(document,"keyup",function(){e.kb=1});a.c(window,"scroll",function(){e.sb++});a.c(window,"unload",function(){e.t=+new Date-g;k()});a.c(window,"load",function(){setTimeout(k,5E3)})}})();})();
