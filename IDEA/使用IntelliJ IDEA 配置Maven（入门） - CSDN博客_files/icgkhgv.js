try{!function(t){window._SF_&&window._SF_._global_&&window._SF_._global_._ssp&&(t=window._SF_._global_._ssp);try{t.loadTimer='-1';var e=window.require;e&&e('performance')&&e('performance').getTiming()&&e('performance').getTiming().MIPStart&&(t.loadTimer=parseInt(e('performance').getTiming().MIPStart,10))}catch(e){t.loadTimer='-1'}!function(){var e={name:'sojs',namespace:'',classes:{},classesCache:{},path:{},pathCache:{},noop:function(){},$sojs:function(){this.runtime='browser',this.global=t||window,this.global.sojs=this.global.sojs||this},getPath:function(t){var e=!!t&&t.split('.'),i=this.path;if(e)for(var n=0,r=e.length;n<r;n++){var o=e[n].toLowerCase();if(!i[o])break;i=i[o]}return i.pathValue},getClassPath:function(t){if(!this.pathCache[t]){this.pathCache[t]=this.getPath(t)+t.replace(/\./gi,'/')+'.js';var e=this.getPath(t),i=e.length-1;e.lastIndexOf('\\')!==i&&e.lastIndexOf('/')!==i&&(e+='/'),this.pathCache[t]=e+t.replace(/\./gi,'/')+'.js'}return this.pathCache[t]},loadDeps:function(t,e){e=e||{};var i=t.__deps,n=(t.__namespace,[]);for(var r in i)if(i.hasOwnProperty(r)&&i[r]){var o;if('string'!=typeof i[r]?(t[r]=i[r],t[r]&&t[r].__name&&(o=t[r].__full)):(o=i[r],t[r]=this.find(o)),!o||e[o])continue;e[o]=!0,t[r]?t[r].__deps&&(n=n.concat(this.loadDeps(t[r],e))):t[r]||n.push(o)}return n},fastClone:function(t){var e=function(){};return e.prototype=t,new e},proxy:function(t,e){var i=Array.prototype.slice.apply(arguments),n=i.shift(),r='function'==typeof this?this:i.shift();return function(){var t=Array.prototype.slice.apply(arguments);return r.apply(n,t.concat(i))}},find:function(t){var e=this.classesCache[t];if(!e){var i=t.split('.');e=this.classes[i[0]];for(var n=1,r=i.length;n<r;n++){if(!e||!e[i[n]]){e=null;break}e=e[i[n]]}}return e},create:function(t,e,i,n,r,o){return'string'==typeof t&&(t=this.using(t)),new t.__constructor(e,i,n,r,o)},using:function(t){return this.find(t)},define:function(t){var e,i=t.namespace;e=t.name||'__tempName',i=t.namespace||'',t.__name=e,t.__namespace=i,t.__full=i.length>1?i+'.'+e:e,t.__deps=t.deps,t.__sojs=this,t.__status=2,t.__constructor=function(t,e,i,n,r){this.__constructorSource(t,e,i,n,r)},t.__constructorSource=t[e]||this.noop,t.__staticSource=t['$'+e]||this.noop,t.__staticUpdate=function(){this.__constructor.prototype=this},t.__static=function(){this.__staticSource(),this.__staticUpdate()};for(var n,r=i.split('.'),o=r.length,a=this.classes,s=0;s<o;s++)(n=r[s])&&(a[n]=a[n]||{__status:1},a=a[n]);a[e]=a[e]||{};var c=a;if(a=a[e],!a.__name||3!==a.__status){if(!a.__status||1===a.__status)for(var l in c[e])l&&c[e].hasOwnProperty(l)&&(t[l]=c[e][l]);t.__status=3,c[e]=t,t=c[e];var d=this.loadDeps(t);if(d.length>0)throw new Error('class "'+t.name+"\" loadDeps error:"+d.join(','));t.__static()}return this.classesCache[t.___full]=t,t}};e.define(e)}();var i=t.sojs;i.define({name:'config',namespace:'djs.common',jsonpFunctionName:'___adblockplus',bfpTemplateName:'SSP_JSONP'}),i.define({name:'dom',namespace:'djs.common.utility',$dom:function(){this.win=window,this.doc=document,this.isInIframe=this.isInIframe(this.win),this.isCrossDomain=this.isCrossDomain(this.win),this.inInCrossDomainIframe=!(!this.isInIframe||!this.isCrossDomain),this.isInIframe&&!this.isCrossDomain&&(this.win=this.win.top,this.doc=this.getDocument(this.win)),this.isInMip=this.win.MP&&this.win.MP.globalConf},g:function(t,e){return'string'==typeof t&&t.length>0?(e=e||this.win,e.document.getElementById(t)):!t.nodeName||1!==t.nodeType&&9!==t.nodeType?null:t},bind:function(t,e,i){return'string'==typeof t&&(t=this.g(t)),e=e.replace(/^on/i,'').toLowerCase(),t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent('on'+e,i),t},isWindow:function(t){try{if(t&&'object'==typeof t&&t.document&&'setInterval'in t)return!0}catch(t){return!1}return!1},isInIframe:function(t){var e=!1;return this.isWindow(t)?t!=t.top&&t!=t.parent&&(e=!0):e=!0,e},isCrossDomain:function(t){var e=!1;try{e=!t.top.location.toString()}catch(t){e=!0}return e},getDocument:function(t){return 9===t.nodeType?t:t.ownerDocument||t.document},getWindow:function(t){var e=this.getDocument(t);return e.parentWindow||e.defaultView||null},getTopElement:function(t){var e=this.isWindow(t)?t.document:this.getDocument(t);return'CSS1Compat'===e.compatMode?e.documentElement:e.body}}),i.define({name:'browser',namespace:'djs.common.utility',deps:{dom:'djs.common.utility.dom'},$browser:function(){this.checkBrowser(),this.flashPlayerVersion=this.getFlashPlayerVersion()},checkBrowser:function(){var t=this.dom.win.navigator.userAgent,e=window.RegExp;/msie (\d+\.\d)/i.test(t)&&(this.ie=document.documentMode||+e.$1),/chrome\/(\d+\.\d)/i.test(t)&&(this.chrome=+e.$1),/qqbrowser|ucbrowser|ubrowser|miuibrowser|vivobrowser|oppobrowser/i.test(t)&&(this.isAdBlock=!0)},getFlashPlayerVersion:function(){var t=0,e=this.dom.win.navigator;try{var i='https:'===this.dom.win.location.protocol;if(this.chrome>=45||i)return 0;if(e.plugins&&e.mimeTypes.length){var n=e.plugins['Shockwave Flash'];n&&n.description&&(t=n.description.replace(/([a-zA-Z]|\s)+/,'').replace(/(\s)+r/,'.')+'.0')}if(0===t&&(this.dom.win.ActiveXObject||this.dom.win.hasOwnProperty('ActiveXObject')))for(var r=30;r>=2;r--)try{var o=new ActiveXObject('ShockwaveFlash.ShockwaveFlash.'+r);if(o){var a=o.GetVariable('$version');if((t=a.replace(/WIN/g,'').replace(/,/g,'.'))>0)break}}catch(t){}t=parseInt(t,10)}catch(e){t=0}return t}}),i.define({name:'style',namespace:'djs.common.utility',deps:{dom:'djs.common.utility.dom'},$style:function(){},getClientWidth:function(t){t=t||this.dom.win;try{var e=this.dom.getTopElement(t).clientWidth;if(e||0===e)return e}catch(t){}return-1},getClientHeight:function(t){t=t||this.dom.win;try{var e=this.dom.getTopElement(t).clientHeight;if(e||0===e)return e}catch(t){}return-1},getPosition:function(t){var e={top:0,left:0},i=this.dom.getDocument(t),n=i.body,r=i.documentElement;if(t.getBoundingClientRect){var o=t.getBoundingClientRect();e.left=Math.floor(o.left)+Math.max(r.scrollLeft,n.scrollLeft),e.top=Math.floor(o.top)+Math.max(r.scrollTop,n.scrollTop),e.left-=r.clientLeft,e.top-=r.clientTop;var a=this.getStyle(n,'borderLeftWidth'),s=this.getStyle(n,'borderTopWidth'),c=parseInt(a,10),l=parseInt(s,10);e.left-=isNaN(c)?2:c,e.top-=isNaN(l)?2:l}return e},getStyle:function(t,e){if(!t)return'';var i='';i=e.indexOf('-')>-1?e.replace(/[-][^-]{1}/g,function(t){return t.charAt(1).toUpperCase()}):e.replace(/[A-Z]{1}/g,function(t){return'-'+t.charAt(0).toLowerCase()});var n,r=this.dom.getWindow(t);if(r&&r.getComputedStyle){if(n=r.getComputedStyle(t,null))return n.getPropertyValue(e)||n.getPropertyValue(i)}else if(t.currentStyle)return n=t.currentStyle,n[e]||n[i];return''},getScrollWidth:function(t){t=t||this.dom.win;try{var e=this.dom.getTopElement(t).scrollWidth;if(e||0===e)return e}catch(t){}return-1},getScrollHeight:function(t){t=t||this.dom.win;try{var e=this.dom.getTopElement(t).scrollHeight;if(e||0===e)return e}catch(t){}return-1},getScrollTop:function(t){t=t||this.dom.win;var e=t.document;return t.pageYOffset||e.documentElement.scrollTop||e.body.scrollTop},getScrollLeft:function(t){var e=t||this.dom.win,i=this.dom.getTopElement(e);return e.pageXOffset||i.scrollLeft},canFixed:function(){var t=!0;return this.browser.ie&&(this.browser.ie<7||'BackCompat'===this.dom.doc.compatMode)&&(t=!1),t}}),i.define({name:'random',namespace:'djs.common.utility',getNumber:function(t,e){return t=t||0,e=e||1,Math.floor(Math.random()*(e-t+1))+t},getBool:function(t){var e=!1;return t=10*(t||50),this.getNumber(0,1e3)<t&&(e=!0),e},getString:function(t,e){for(var i='',n=this.getNumber(t,e),r=0;r<n;r++)i+=String.fromCharCode(Math.floor(26*Math.random())+97);return i},getItem:function(t){var e;if(t&&t.length>0){e=t[this.getNumber(0,t.length-1)]}return e},getStyleItem:function(){var t=['padding-left:0px;','padding-right:0px;','padding-top:0px;','padding-bottom:0px;','padding:0px;','margin-left:0px;','margin-right:0px;','margin-top:0px;','margin-bottom:0px;','margin:0px;','cursor:auto;','visibility:visible;','text-align:left;','zoom:1;'];return t[this.getNumber(0,t.length-1)]}}),i.define({name:'storage',namespace:'djs.data',data:{},$storage:function(){},get:function(t){return this.data[t]},set:function(t,e){return this.data[t]=e,this}}),i.define({name:'env',namespace:'djs.business.parameter',deps:{dom:'djs.common.utility.dom',style:'djs.common.utility.style',browser:'djs.common.utility.browser'},$env:function(){this.win=this.dom.win,this.doc=this.dom.doc,this.nav=this.win.navigator,this.screen=this.win.screen},ti:{type:2,limit:60,encode:!0,value:function(){var t=this.doc.title||'';return'string'==typeof this.dom.win.articleTitle&&(t=this.dom.win.articleTitle),t=t.replace(/\'/g,'')}},utdi:{encode:!0,value:function(){var t='';return this.doc.isInMip&&(t=this.doc.win.MP.globalConf.cuid),t}},atdi:{type:1,encode:!0,value:function(){var t='';return this.doc.isInMip&&(t=this.doc.win.MP.globalConf.nid),t}},ps:{type:1,value:function(t){var e='0x0';if(t.containerInfo.containerDom){var i=this.style.getPosition(t.containerInfo.containerDom);e=i.top+'x'+i.left}return e}},drs:{value:function(){var t={uninitialized:0,loading:1,loaded:2,interactive:3,complete:4};try{return t[this.doc.readyState]}catch(t){return-1}}},pcs:{type:1,value:function(){return[this.style.getClientWidth(this.win),this.style.getClientHeight(this.win)].join('x')}},pss:{type:1,value:function(){return[this.style.getScrollWidth(this.win),this.style.getScrollHeight(this.win)].join('x')}},cfv:{value:function(){return this.browser.flashPlayerVersion}},cpl:{value:function(){return this.nav.plugins.length||0}},chi:{value:function(){return this.win.history.length||0}},cce:{value:function(){return this.nav.cookieEnabled||0}},cec:{type:1,value:function(){return(this.doc.characterSet?this.doc.characterSet:this.doc.charset)||''}},tlm:{value:function(){return Date.parse(this.doc.lastModified)/1e3}},par:{type:1,value:function(){return[this.screen.availWidth,this.screen.availHeight].join('x')}},pis:{type:1,value:function(){var t=[-1,-1];return this.dom.isInIframe&&(t=[this.style.getClientWidth(window),this.style.getClientHeight(window)]),t.join('x')}},psr:{value:function(){return[this.screen.width,this.screen.height].join('x')}},ccd:{value:function(){return this.screen.colorDepth||0}},cja:{value:function(){return this.nav.javaEnabled().toString()}},cmi:{value:function(){return this.nav.mimeTypes.length||0}},col:{value:function(){var t=this.nav.language||this.nav.browserLanguage||this.nav.systemLanguage||'';return t=t.replace(/[^a-zA-Z0-9\-]/g,'')}},cdo:{value:function(){var t=this.win.orientation;return void 0===t&&(t=-1),t}},tcn:{value:function(){var t=+new Date;return Math.round(t/1e3)}}}),i.define({name:'query',namespace:'djs.business.parameter',deps:{config:'djs.common.config',storage:'djs.data.storage',dom:'djs.common.utility.dom',style:'djs.common.utility.style',browser:'djs.common.utility.browser'},$query:function(){this.win=this.dom.win,this.doc=this.dom.doc,this.nav=this.win.navigator,this.screen=this.win.screen},di:{type:1,value:function(t){return t.id}},dc:{type:1,value:function(t){return t.adInfo&&'ssp'===t.adInfo.platformType?3:2}},dtm:{type:1,value:function(){return'HTML_POST'}},dpt:{value:function(){return!1}},tpr:{type:1,value:function(t){if(t.adInfo&&'ssp'===t.adInfo.platformType)return null;var e=(new Date).getTime(),i=this.storage.get('pageFirstRequestTime');return i||(i=e,this.storage.set('pageFirstRequestTime',i)),i}},ari:{type:1,value:function(){return 2}},ant:{type:1,value:function(t){var e=0;return t.proxy&&(e=1),e}},exps:{type:1,value:function(t){var e=parseInt(t.deliveryInfo.exps,10)||'';return e&&t.proxy&&(this.browser.isAdBlock?e+=1:e+=2),''+e}},prot:{type:1,value:function(){return'https:'===document.location.protocol?'2':''}},dis:{type:1,value:function(t){var e=0;this.dom.isInIframe&&(e+=1),this.dom.inInCrossDomainIframe&&(e+=2);var i=this.style.getClientWidth(),n=this.style.getClientHeight();return(i<40||n<10)&&(e+=4),e}},dai:{type:1,value:function(t){return t.adInfo&&'ssp'===t.adInfo.platformType?0:t.totalCount}},dri:{type:1,value:function(t){return t.count}},ltu:{type:1,encode:!0,limit:700,value:function(t){var e;return e=this.dom.inInCrossDomainIframe?document.referrer:this.dom.win.location.href,i.global.location&&i.global.location.href&&(e=i.global.location.href),e}},liu:{type:1,encode:!0,limit:700,value:function(){var t='';return this.dom.isInIframe&&(t=window.document.URL),t}},ltr:{encode:!0,limit:300,value:function(){var t='';try{t=this.win.opener?this.win.opener.document.location.href:''}catch(t){}return t||this.doc.referrer}}}),i.define({name:'api',namespace:'djs.business.parameter',list:{clid:{key:'apdi',encode:!0},cuid:{key:'udi',encode:!0},ctkey:{key:'lcdi',encode:!0},acid:{key:'acid',encode:!0}}}),i.define({name:'cipher',namespace:'djs.business',$cipher:function(){this.mappingCache=this.mappingCache||{},this.posCache=this.posCache||{}},getKeyMapping:function(t){var e,i=t%25+1,n='key'+i;if(!(e=this.mappingCache[n])){e={};for(var r=97;r<=122;r++){var o=String.fromCharCode(r),a=r+i;a=a>122?a-26:a;var s=String.fromCharCode(a);e[o]=s}this.mappingCache[n]=e}return e},getValueMapping:function(t){var e,i=t%64+1,n='v'+i,r='abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-.';if(!(e=this.mappingCache[n])){e={};for(var o=0;o<r.length;o++){var a=r[o],s=o+i,c=s>=65?r[s-65]:r[s];e[a]=c}this.mappingCache[n]=e}return e},getUrl:function(t,e){if(t<=0)return e;e=e.replace(/\./g,'%_'),e=e.replace(/\%/g,'.');for(var i=this.getKeyMapping(t),n=this.getValueMapping(t),r=e.split('&'),o={},a=0;a<r.length;a++){var s=r[a].split('=');o[s[0]]=s[1]}var c=[];for(var l in o)if(o.hasOwnProperty(l)&&o[l]){for(var d='',h=0;h<l.length;h++){var u=l[h];d+=i[u]}d+='=';for(var p=o[l],m=0;m<p.length;m++){var f=p[m];n[f]?d+=n[f]:d+=f}c.push(d)}return c.join('&')}}),i.define({name:'log',namespace:'djs.business',$log:function(){},send:function(t){var e=new Image,i=(new Date).getDate(),n='baidu_ds_log_'+i;window[n]=e,e.onload=e.onerror=e.onabort=function(){try{delete window[n]}catch(t){window[n]=void 0}e=null},t+=t.indexOf('?')>-1?'&':'?',t+='stamp='+Math.random(),e.src=t}}),i.define({name:'material',namespace:'djs.business',$material:function(){var t=this;this.materialFactory={},this.materialFactory.text=function(e){var i="<span style=\"word-wrap:break-word;\"><a href=\"{clickUrl:string}\" target=\"{target:string}\" style=\"font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};\"{events}>{text:string}</a></span>",n=/\{events\}/;if(1===e.version)i=i.replace(n,'');else if(2===e.version){i=i.replace(n," onmouseover=\"this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';\" onmouseout=\"this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';\"");for(var r=['default','hover'],o=0;o<r.length;o++){var a=r[o],s=a+'Color',c=a+'Bold',l=a+'Italic',d=a+'Underline';e[s]='#'+e[s],e[c]=e[c]?'bold':'normal',e[l]=e[l]?'italic':'normal',e[d]=e[d]?'underline':'none'}}return t.format(i,e)},this.materialFactory.image="<a href=\"{clickUrl:string}\" target=\"{target:string}\"><img src=\"{src:string}\" title=\"{title:html}\" alt=\"{title:html}\" border=\"0\" height=\"{height:number}\" width=\"{width:number}\" /></a>",this.materialFactory.flash=function(e){var i='';return i=0===t.isFlash()&&1===e.flag?t.createImg(e):t.createFlash(e),t.format(i,e)},this.materialFactory.rich=function(t){return t.content},this.materialFactory.slide=function(e,i){for(var n=[],r=e.materials,o=0;o<r.length;o++){var a=r[o];'string'!=typeof a&&(a=t.formatMaterial(a,i,!0)),n.push(a)}e.html='<div>'+n.join('</div><div>')+'</div>';var s=i.response.placement,c=s.container;return e.width=i.width||c.width,e.height=i.height||c.height,t.format("<div id=\"bd_ec_clb_asp\" style=\"width:{width:number}px;height:{height:number}px;overflow:hidden;\">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G(\"bd_ec_clb_asp\");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = \"\"; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = \"none\";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();<\/script>",e)}},createImg:function(t){var e='<a href="'+t.clickurl+'" target="'+t.target+'"><img src="'+t.imageClickUrl+'" border="0" ';return t.imageWidth>0&&(e+=' width="'+t.imageWidth+'"'),t.imageHeight>0&&(e+=' height="'+t.imageHeight+'"'),e+' /></a>'},createFlash:function(t){var e=(new Date).getTime(),i='BAIDU_CLB_FLASH'+e,n='BAIDU_CLB_FLASH_N'+e;t.wmode=t.wmode?'opaque':'transparent',t.width<=0&&(t.width='100%'),t.height<=0&&(t.height='100%'),'none'===t.clickTAG&&(t.clickTAG=''),t.imageClickUrl=t.clickUrl,t.hasLink||(t.clickUrl='');var r="<a style=\"position:absolute;top:0;left:0;bottom:0;right:0;display:block;width:100%;height:"+t.height+'px;filter:alpha(opacity=0);opacity:0;background:#FFF;" href="'+t.clickUrl+'" target="'+t.target+'"></a>';return'<div style="font-size:0;position:relative;width:'+t.width+'px;height:'+t.height+'px;">'+(t.clickTAG?'':r)+"<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0\"  id=\""+i+'" width="'+t.width+'" height="'+t.height+"\" align=\"middle\"><param name=\"allowScriptAccess\" value=\"never\"><param name=\"quality\" value=\"high\"><param name=\"wmode\" value=\""+t.wmode+"\"><param name=\"movie\" value=\""+t.src+'">'+(t.clickTAG?'<param name="flashvars" value="'+t.clickTAG+'='+t.clickurl+'">':'')+'<embed '+(t.clickTAG?'flashvars="'+t.clickTAG+'='+t.clickurl+'" ':'')+'wmode="'+t.wmode+'" name="'+n+'" src="'+t.src+'" quality="high" width="'+t.width+'" height="'+t.height+"\" align=\"middle\" allowScriptAccess=\"never\" type=\"application/x-shockwave-flash\" pluginspage=\"//www.macromedia.com/go/getflashplayer\"></object></div>"},format:function(t,e){var i=/\{(\w+)\:(\w+)\}/g,n=this;return t.replace(i,function(t,i,r){var o=e[i];switch(r){case'number':o=+o||0;break;case'boolean':o=!!o;break;case'html':o=n.encodeHTML(o)}return o})},encodeHTML:function(t){var e={'"':'&quot;','>':'&gt;','<':'&lt;','&':'&amp;'};return t.replace(/[\"<>\&]/g,function(t){return e[t]})},isFlash:function(){var t=navigator;if(t.plugins&&t.mimeTypes.length){return!!t.plugins['Shockwave Flash']}if(window.ActiveXObject&&!window.opera)for(var e=12;e>=2;e--)try{var i=new ActiveXObject('ShockwaveFlash.ShockwaveFlash.'+e);if(i)return!0}catch(t){}return!1},formatMaterial:function(t,e,i){if('string'==typeof t)return t;if(!t.type)return'';var n=this.materialFactory[t.type];if(n){var r='string'==typeof n?this.format(n,t):n(t,e);return i?r:'<!DOCTYPE html><body>'+r}return''}}),i.define({name:'parameter',namespace:'djs.business',deps:{envParam:'djs.business.parameter.env',queryParam:'djs.business.parameter.query',apiParam:'djs.business.parameter.api'},$parameter:function(){this.mappingCache=this.mappingCache||{}},setSize:function(t){var e=t.containerInfo.sizeInfo;t.parameterInfo.url='wid='+e.width+'&'+t.parameterInfo.url,t.parameterInfo.url='hei='+e.height+'&'+t.parameterInfo.url},addForge:function(t,e){if(!e)return t;for(var i=Math.floor(Math.random()*e)%6,n=0;n<i;n++){var r=e%2==0?4:3;t+='&'+((Math.random().toString(36).substring(2,r)||'p')+Math.ceil(10*Math.random()))+'='+Math.random().toString(36).slice(8)}return t},getMapping:function(t){var e,i='x'+t;if(!(e=this.mappingCache[i])){e={};for(var n=97;n<=122;n++){var r=String.fromCharCode(n),o=n+t;o=o>122?o-26:o;var a=String.fromCharCode(o);e[r]=a}for(var s=65;s<=90;s++){var r=String.fromCharCode(s),o=s+t;o=o>90?o-26:o;var a=String.fromCharCode(o);e[r]=a}this.mappingCache[i]=e}return e},encrypt:function(t,e,i){if(t<=0)return e;for(var n='',r=this.getMapping(t),o=0;o<e.length;o++){var a=e.charAt(o),s=e.charCodeAt(o);r[a]?n+=r[a]:(i&&1===i&&s>=48&&s<=57&&(a=parseInt(a,10),a=(t+a+o)%10),n+=a)}return n},getParameter:function(t){var e=[],n={env:{},query:{},api:{},url:''},r=0;t.proxy&&(r=1);var o=t.apiInfo;if(o){var a=this.apiParam.list;for(var s in a)if(s&&a.hasOwnProperty(s)){var c=a[s];if(void 0!==o[s]){var l=c.key?c.key:s;n.api[l]=c.encode?encodeURIComponent(o[s]):o[s],e.push(l+'='+n.api[l])}}}var d=this.envParam;for(var s in d)if(s&&d.hasOwnProperty(s)){var c=d[s];if(r&&1!==c.type)continue;if('object'==typeof c&&'function'==typeof c.value){c.value=i.proxy(d,c.value);var h=c.value(t);'string'==typeof h&&(c.limit&&(h=h.substring(0,c.limit)),c.encode&&(h=encodeURIComponent(h))),(h||0===h)&&(n.env[s]=h,e.push(s+'='+h))}}var u=this.queryParam;for(var s in u)if(s&&u.hasOwnProperty(s)){var c=u[s];if(r&&1!==c.type)continue;if('object'==typeof c&&'function'==typeof c.value){c.value=i.proxy(u,c.value);var h=c.value(t);'string'==typeof h&&(c.limit&&(h=h.substring(0,c.limit)),c.encode&&(h=encodeURIComponent(h))),(h||0===h)&&(n.query[s]=h,'di'!==s&&'ltu'!==s&&e.push(s+'='+h))}}for(var p=e.length;p>0;p--){var m=Math.floor(Math.random()*p),f=e[p-1];e[p-1]=e[m],e[m]=f}return n.url='di='+n.query.di+'&ltu='+n.query.ltu+'&'+e.join('&'),n}}),i.define({name:'slot',namespace:'djs.business',deps:{dom:'djs.common.utility.dom',browser:'djs.common.utility.browser'},$slot:function(){this.counter=t.counter,this.counter=this.counter||{},this.counter.slotTotalCount=this.counter.slotTotalCount||1,this.counter.slotCountIndex=this.counter.slotCountIndex||{}},getSlotInfo:function(t){var e={},i=t.id;e.id=i,this.counter.slotCountIndex[i]=this.counter.slotCountIndex[i]||0;var n=this.counter.slotCountIndex[i];this.counter.slotCountIndex[i]++,e.totalCount=this.counter.slotTotalCount||0,this.counter.slotTotalCount++,e.count=n,e.index=i+'_'+n;var r=t.container,o=document.getElementById(r)||{};e.containerInfo={},e.containerInfo.containerId=r,e.containerInfo.containerDom=o,e.deliveryInfo=t,e.adInfo=t.adInfo,e.apiInfo=t.apiInfo||null,e.adInfo=e.adInfo||{},e.adInfo.placement=e.adInfo.placement||{},e.adInfo.placement.basic=e.adInfo.placement.basic||{},e.adInfo.placement.basic.publisherDomain=e.adInfo.placement.basic.publisherDomain||{};var a=e.adInfo.placement.basic.publisherDomain;return e.domainInfo={defaultValue:{pos:'pos.baidu.com',dup:'cpro.baidustatic.com'},proxy:{pos:a.pos,dup:a.dup}},e.domainInfo.pos=e.domainInfo.proxy.pos,e.domainInfo.dup=e.domainInfo.proxy.dup,e.domainInfo.protocol='https:'===this.dom.doc.location.protocol.toLowerCase()?'https://':'http://',e},getParameterInfo:function(t){4!==t.adInfo.placement.basic.conBackEnv&&(this.parameter=i.using('djs.business.parameter'),t.parameterInfo=this.parameter.getParameter(t))}}),i.define({name:'painterFactory',namespace:'djs.business',create:function(t){var e,n=t.adInfo||{},r=n.placement||{},o=r.basic,a=r.container;if(n.painter)switch(n.painter=parseInt(n.painter,10),n.painter){case 1:e='djs.ui.painter.mobile.inlay';break;case 2:e='djs.ui.painter.mobile.float';break;case 100:e='djs.ui.painter.app.inlay';break;default:e='djs.ui.painter.mobile.inlay'}else o&&2===o.flowType&&(e=1===o.rspFormat&&1===a.anchoredType?'djs.ui.painter.mobile.inlay':'djs.ui.painter.mobile.float');return i.using(e)}}),i.define({name:'inlay',namespace:'djs.ui.painter.mobile',deps:{dom:'djs.common.utility.dom',style:'djs.common.utility.style',browser:'djs.common.utility.browser',random:'djs.common.utility.random',log:'djs.business.log',material:'djs.business.material',parameter:'djs.business.parameter',cipher:'djs.business.cipher'},getClientWidth:function(){var t=-1;return t=Math.max(320,Math.min(this.dom.win.innerWidth,this.dom.win.innerHeight)),isNaN(t)&&(t=Math.min(this.style.getClientWidth(),this.style.getClientHeight())),t},getHiddenDom:function(){var t=['div','abbr','span','ins','em'],e=this.random.getItem(t),i='';this.random.getBool(20)&&(i=' id="'+this.random.getString(5,10)+'" ');var n='';this.random.getBool(20)&&(n=' class="'+this.random.getString(6,15)+'" ');var r=['display:none;','width:0px;height:0px;'],o=this.random.getItem(r);this.random.getBool(50)&&(o+=this.random.getStyleItem()),o=' style="'+o+'" ';return this.template("<{tagname} {idString} {classString} {styleString}></{tagname}>",{tagname:e,idString:i,classString:n,styleString:o})},getWrapDom:function(){var t='';this.random.getBool(30)&&(t=' id="'+this.random.getString(5,10)+'" ');var e='';this.random.getBool(60)&&(e=' style="'+this.random.getStyleItem()+'" ');return this.template("<div {idString} {styleString}>",{idString:t,styleString:e})},template:function(t,e){var i=/{(.*?)}/g;return t.replace(i,function(t,i,n,r){return e[i]||''})},getContainerWidth:function(t){var e,i=t.containerInfo.containerDom,n=t.adInfo.placement.container,r=n.sizeType;return e=1===r||7===r?n.width:2===r||3===r?this.getClientWidth():i.parentElement.clientWidth||window.screen.width,Math.abs(e)},getContainerHeight:function(t){var e,i=t.containerInfo.containerDom,n=t.adInfo.placement.container,r=n.sizeType;if(1===r||3===r||6===r)e=n.height;else if(7===r||8===r)e=i.parentElement.clientHeight;else{var o=this.getContainerWidth(t);e=Math.ceil(o/n.width*n.height)}return Math.abs(e)},render:function(e){var n=(this.dom.win,this.dom.doc,{width:-1,height:-1,widthScale:-1,heightScale:-1}),r=e.containerInfo.containerDom,o=(e.adInfo.placement.container,e.deliveryInfo);n.width=this.getContainerWidth(e),n.height=this.getContainerHeight(e),e.containerInfo.sizeInfo=n,this.parameter.setSize(e),this.random.getBool(30)&&(e.domainInfo.protocol='//');var a=e.domainInfo.protocol+e.domainInfo.pos;o=o||{};var s=o.mixType||0,c=o.offset,l=o.mixOffset,d=o.gldiOffset,h=e.parameterInfo.url,u=this.random.getString(4,10);e.proxy&&!this.browser.ie?2===s&&l&&l>-1?(a=a+'/'+u+'?'+this.cipher.getUrl(l,h),a=this.parameter.addForge(a,l)):a+=1!==s&&void 0!==c&&c>-1?void 0!==d&&d>-1?'/ns?'+this.parameter.encrypt(d,h,0):'/a?'+this.parameter.encrypt(c,h,0):'/s?'+e.parameterInfo.url:a+='/s?'+e.parameterInfo.url;var p={width:n.width,height:n.height,url:a},m=this.template("<iframe width=\"{width}\" frameborder=\"0\" height=\"{height}\" scrolling=\"no\" src=\"{url}\"></iframe>",p);if(this.random.getBool(20)&&(m=this.getHiddenDom()+m),this.random.getBool(20)&&(m+=this.getHiddenDom()),this.random.getBool(20)){for(var f='',g='',v=this.random.getNumber(1,3),y=0;y<v;y++)f+=this.getWrapDom(),g+='</div>';m=f+m+g}if(r.innerHTML=m,this.random.getBool(30)&&r.removeAttribute&&r.removeAttribute('id'),this.random.getBool(80)&&r.removeAttribute&&r.removeAttribute('style'),e.adInfo&&'ssp'===e.adInfo.platformType&&window.postMessage&&this.dom.bind(window,'message',i.proxy(this,this.messageHandler,e)),'112002'===e.deliveryInfo.exps||'113006'===e.deliveryInfo.exps){var w=t.loadTimer?(new Date).getTime()-t.loadTimer:'-1',b="//eclick.baidu.com/aoc.jpg?type=mip&id="+e.index+'&mes='+w+'&exps='+e.deliveryInfo.exps||'';this.log.send(b)}return!0},messageHandler:function(t,e){if(t.data){var i=(t.origin||t.originalEvent.origin,t.data),n=e.id+'_'+e.count;if(i&&i.placement&&i.placement.update&&i.queryid&&i.tuid&&n===i.tuid){var r=e.containerInfo.containerDom,o=i.pdb_deliv||{},a=i.order_deliv||{},s=i.rtb_deliv||{},c=o.deliv_des||{},l=c._html||'',d=l.type||{},h=i.placement.complement_type||0;l.height=e.containerInfo.sizeInfo.height||l.height,l.width=e.containerInfo.sizeInfo.width||l.width;var u=this.material.formatMaterial(l);if(a&&'0'!==a.deliv_id&&'0'===i.noadx);else if(s&&'0'!==s.deliv_id&&'0'===i.noadx);else if(o&&c&&l)if('rich'===d){var p=document.createElement('iframe'),m=p.contentWindow.document;r.innerHTML='',r.appendChild(p),u.indexOf('<body>')<0&&(u='<!DOCTYPE html><body>'+u),m.open(),m.write(u),m.body&&(m.body.style.backgroundColor='transparent')}else if('url'===d){var f=r.getElementsByTagName('iframe');f&&f.length>0&&(f[0].src=u)}else r.innerHTML=u;else 7===h&&(r.innerHTML='',r.style.height='0')}}}}),i.define({name:'api',namespace:'djs.ui',deps:{slot:'djs.business.slot',painterFactory:'djs.business.painterFactory',browser:'djs.common.utility.browser'},isCheckLoaded:!1,$api:function(){t.api=t.api||[];var e=t.api;t.api=this;for(var i=0,n=e.length;i<n;i++)this.push(e[i])},push:function(t){var e=this.slot.getSlotInfo(t);this.launch(e),this.check(e)},setProxy:function(t){var e=t.deliveryInfo.proxy;if(-1===e||void 0===e){var i=t.proxy;if(-1===i||void 0===i){var n=this.proxy;-1===n||void 0===n?this.browser.isAdBlock?t.proxy=1:t.proxyCheck=1:t.proxy=n}else t.proxy=i}else t.proxy=e;return t.proxy?(t.domainInfo.pos=t.domainInfo.proxy.pos,t.domainInfo.dup=t.domainInfo.proxy.dup):(t.domainInfo.pos=t.domainInfo.defaultValue.pos,t.domainInfo.dup=t.domainInfo.defaultValue.dup),t},launch:function(t){this.setProxy(t),this.slot.getParameterInfo(t),this.painterFactory.create(t).render(t)},check:function(t){if(!t.proxy&&t.proxyCheck){if(!this.isCheckLoaded){this.isCheckLoaded=!0;var e=document.createElement('script');e.type='text/javascript',e.async=!0,e.src=('https:'===document.location.protocol?'https:':'http:')+'//cpro.baidustatic.com/cpro/ui/pr.js';var n=document.getElementsByTagName('script')[0];n.parentNode.insertBefore(e,n)}setTimeout(i.proxy(this,function(t){'object'!=typeof window.__baidu_dup_jobruner?(this.proxy=1,this.launch(t)):this.proxy=0},t),800)}}})}(window.__delivery_global_=window.__delivery_global_||{})}catch(t){(new Image).src="//eclick.baidu.com/se.jpg?type=remote&date=1226&mes="+encodeURIComponent(t.stack)}