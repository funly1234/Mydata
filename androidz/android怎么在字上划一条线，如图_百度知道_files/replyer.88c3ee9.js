;/*!question:widget/ask/replyer/replyer.js*/
define("question:widget/ask/replyer/replyer",function(e){function t(e){var t="1"===F.context("user").isLogin,i="1"===F.context("page").isAdopted,o=!!window.isQualityView,a="1"===F.context("newbest"),n=(F.context("page").supply,["该提问求助发自手机，请精简回答，方便查看","如最佳答案内容有误，欢迎提交正确答案。<br>让您的知识，帮到更多需要帮助的人...","提问者正在等待您的回答","请输入您的回答...","详细的问题说明，有助于回答者给出准确的答案","1.步骤类：①整体简介②所需工具/原料③方法/步骤④注意事项<br>2.常识类：①直接回答问题②详细给出具体原因/理由/介绍<br>3.原因类：①详细解释原因/理由②提供有效解决方案（构成见步骤类）<br>4.其他类型详见高质量标准（点击回答框右侧图片）"]),s="";s=a?n[1]:o?n[5]:t&&i?n[3]:n[2];var r=["fullscreen","bold","italic","paragraph","insertorderedlist","insertunorderedlist","blockquote","|","link","insertimage","insertvideo","map","template"];"74"===F.context("page").cidTop&&r.push("|","insertcode");var u=l.getEditor("answer-editor",{initialFrameWidth:"100%",initialFrameHeight:280,toolbars:[r],initialContent:e?e:s,maximumWords:9999,token:F.context("user").stoken});return u.iknowInit({isLogin:t,authcode:"new_reply",submitBtn:"提交回答",anonymouse:!0},function(e){e&&d(e).click(c)}),u}function i(){d(_.container).hasClass("iknow-editor-fullscreen")&&_&&_.submitBtn&&(_.submitBtn.style.display="none");var e=d(".layerBg"),t=d("#edui1"),i=t.width()-2,o=t.height()-2,a="height:"+o+"px;width:"+i+"px";if(e.length)e.attr("style",a).show();else{var n=d("<div style='"+a+"' class='layerBg'></div>"),s=d("<span class='loading-layer'></span>");t.append(n,s)}}function o(e,t){if(d(".loading-layer").hide(),d(".layerBg").hide(),d("."+e).length)d("."+e).show();else{var i=d("#edui1"),o=i.width()-2,a=(i.height()-2,d("<div class='tipLayer'></div>"));i.append(a);var n=d(".tipLayer");n.attr("class","tipLayer "+e).html("<span class='icon'></span><div>"+t+"</div>"),n.css("margin-left",(o-d(".tipLayer").width())/2+"px")}}function a(e){var t="",i=[],o=O.length;d(".loading-layer").hide(),d(".layerBg").hide(),o.length<=3?(d.each(O,function(e,i){t+=['<div class="visit-join-model-item">','<a target="_blank" href="/uteam/view?teamId='+i.teamId+'" class="visit-join-model-img"><img src="'+i.imgUrl+'" alt=""></a>','<h3><a target="_blank" href="/uteam/view?teamId='+i.teamId+'">'+(i.teamName.length>7?i.teamName.slice(0,7):i.teamName)+"</a></h3>","<p><span>"+i.cname+"</span>"+i.userNum+"人</p>",'<a href="javascript:void(0);" data-teamid="'+i.teamId+'" class="visit-join-model-btn">加入</a></div>'].join("")}),i.push(t)):d.each(O,function(e,a){t+=['<div class="visit-join-model-item"><a target="_blank" href="/uteam/view?teamId='+a.teamId+'" class="visit-join-model-img"><img src="'+a.imgUrl+'" alt=""></a>','<h3><a target="_blank" href="/uteam/view?teamId='+a.teamId+'">'+(a.teamName.length>7?a.teamName.slice(0,7):a.teamName)+"</a></h3>","<p><span>"+a.cname+"</span>"+a.userNum+"人</p>",'<a href="javascript:void(0);" data-teamid="'+a.teamId+'" class="visit-join-model-btn">加入</a></div>'].join(""),((e+1)%3===0&&0!==e||e===o-1)&&(i.push(t),t="")}),g.alert(j.html(),{className:"visit-join-model-wrap",title:"回答已提交",width:500,height:396,open:function(){var t,a,n=d("#visit-join-model-content");I||(I=new p({direction:"horizontal",controls:!1,activeIndex:0,items:i,interval:0}),I.render(n)),t=n.find(".visit-join-model-btn"),t.click(function(){var e=d(this);e.hasClass("visit-join-model-active")?e.removeClass("visit-join-model-active"):(t.removeClass("visit-join-model-active"),e.addClass("visit-join-model-active"))}),a=n.find(".visit-join-control"),3>=o?a.hide():a.click(function(){var e=d(this),t=e.data("action"),i=0,o=I.items.length;"left"===t?e.hasClass("visit-join-control-left-disable")||(I.prev(),i=I.getActiveIndex()-1,0>=i?e.addClass("visit-join-control-left-disable"):e.removeClass("visit-join-control-left-disable"),e.siblings().removeClass("visit-join-control-right-disable")):e.hasClass("visit-join-control-right-disable")||(I.next(),i=I.getActiveIndex()+1,i>=o-1?e.addClass("visit-join-control-right-disable"):e.removeClass("visit-join-control-right-disable"),e.siblings().removeClass("visit-join-control-left-disable"))}),d(".visit-join-model-wrap .ui-dialog-titlebar-close").click(function(){d.cookie.set("VISIT_VISIT_MODEL","show",{expires:31536e6,path:"/"}),e&&e()})},buttons:[{text:"确定",click:function(){var t,i=d("#visit-join-model-content"),o=i.find(".visit-join-model-btn"),a=d("#visit-join-warn");o.each(function(){var e=d(this);return e.hasClass("visit-join-model-active")?(t=e,!0):void 0}),t?(d.post("/uteam/submit/applyJoin",{fr:"recalert",teamId:t.data("teamid")},function(t){"string"==typeof t&&(t=d.parseJSON(t)),g.close(),0!==t.errno?g.alert(t.errmsg,{className:"visit-join-model-error",open:function(){d(".visit-join-model-error .ui-dialog-titlebar-close").click(function(){d.cookie.set("VISIT_VISIT_MODEL","show",{expires:31536e6,path:"/"}),e&&e()})},buttons:[{text:"确定",click:function(){d.cookie.set("VISIT_VISIT_MODEL","show",{expires:31536e6,path:"/"}),e&&e()}}]}):(d.cookie.set("VISIT_VISIT_MODEL","show",{expires:31536e6,path:"/"}),e&&e())}),u.send({module:"question",action:"visit-join",page:"unview",area:"join-alert"})):(a.animate({height:24}),setTimeout(function(){a.animate({height:0})},1e3))}}]}),u.send({module:"question",action:"visit-join",page:"unview",area:"alert"})}function n(e){u.send({module:"question",page:"reply-question",area:"submit",action:"submit-success",addtagsHatch:1});var t=f(d("#replyer-addtags-tmpl").html());d("body").append(t.render(e));var i=Number(w.get("showCount"))+1;w.set("showCount",i),d(".tags-box").on("click","li",function(){var e=d(this);e.hasClass("selected")?e.removeClass("selected"):e.addClass("selected")}),d(".addtags-box").on("click",".addtags-close",function(){d(".addtags-box").remove(),location.reload()}).on("click",".addtags-notip",function(){d(".addtags-box").remove(),u.send({module:"question",page:"reply-question",area:"submit",action:"submit-success",addtagsNotip:1}),w.set("addtagsHatch","notip"),location.reload()}).on("click",".addtags-sub",function(){var e=s();0===e.length?(u.send({module:"question",page:"reply-question",area:"submit",action:"submit-success",notAddtags:1}),window.open("https://zhidao.baidu.com/ihome#body"),location.reload()):(u.send({module:"question",page:"reply-question",area:"submit",action:"submit-success",hasAddtags:1}),d.ajax({url:"/submit/user",type:"post",dataType:"json",data:{cm:100522,tags:e,stoken:F.context("user").stoken}}).done(function(e){0===e.errorNo?setTimeout(function(){window.location="https://zhidao.baidu.com/ihome#body"},500):g.alert(e.errorMsg)}).fail(function(){g.alert("网络故障，请重试")}))})}function s(){var e=[];return d(".tags-box li").each(function(){var t=d(this);t.hasClass("selected")&&e.push(t.text())}),e.join("	")}function r(){u.addKey({subHatch:1});var e=f(d("#replyer-tags-tmpl").html());d("body").append(e.render()),w.set("subshowCount",Number(w.get("subshowCount"))+1),d(".tags-content").on("click",".tags-close",function(){d(".tags-box").remove(),location.reload()}).on("click",".tags-notip",function(){d(".tags-box").remove(),u.send({module:"question",page:"reply-question",area:"submit",action:"submit-success",subaddtagsNotip:1}),w.set("skipHatch","notip"),location.reload()}).on("click",".tags-sub",function(){u.send({module:"question",page:"reply-question",area:"submit",action:"submit-success",subHatchskip:1}),window.open("https://zhidao.baidu.com/ihome#body"),location.reload()})}function c(e){if(e.preventDefault(),!k){k=!0,setTimeout(function(){k=!1},1e3);var t={cm:100009,qid:F.context("page").qid,title:F.context("extra").title,answerfr:F.context("extra").answerfr,feedback:F.context("feedback"),entry:F.context("extra").entry};if(0==F.context("user").isNew&&0!=d.cookie.get("IK_FORCE_UHOME")&&d.cookie.set("IK_FORCE_UHOME","0",{expires:31536e6,path:"/"}),_.checkEditor()){var s=_.getEditorContent();t.co=s,t.cite="",t.rich=1,t.edit="new",_.authcode&&_.authcode.submitParam(t),_.anonymouse&&_.anonymouse.checked&&(t.anoy=1);var c="";t.co&&t.co.match(/<strong>/)&&t.co.match(/<em>/)?c="both":t.co&&t.co.match(/<strong>/)?c="replyBold":t.co&&t.co.match(/<em>/)&&(c="replyRed"),u.send({type:2014,page:"question",action:"answer",privilegeSubmit:c,uid:F.context("user").uid}),i(),m.fire("login.check",{isLogin:function(e){function i(){new h({params:t,hasJump:!1,syncId:"answer",jumpSubmitDelay:4500,beforeJump:function(e,t){function i(){d(".js-modal-usergrade").remove(),d(".js-usergrade-mask").remove(),w.set(s,"1"),document.body.style.overflow="initial",window.location.reload()}0==F.context("user").isNew&&0==F.context("user").isHaveCid&&d.ajax({type:"post",url:"/submit/user",data:{cm:100522,word:F.context("page").cid,stoken:F.context("user").stoken}});var s="IK_SHOW_MODAL_USERGRADE";if("1"!==w.get(s)&&+F.context("user").gradeIndex>1){var s="IK_SHOW_MODAL_USERGRADE";document.body.style.overflow="hidden",d(document.body).append(d("#js-tmpl-usergrade-reset").html()),d(".js-modal-usergrade-comform").on("click",i),d(".js-modal-usergrade-close").on("click",i)}else if(O&&O.length&&"show"!==d.cookie.get("VISIT_VISIT_MODEL"))a(function(){var e=location.href;if(e.indexOf("hideOtherAnswer")<0)if(e.indexOf("?")>0)location.href=e+="&hideOtherAnswer=true&newAnswer=1";else if(e.indexOf("#")>0){var t=e.substring(0,e.indexOf("#"));location.href=t+="?hideOtherAnswer=true&newAnswer=1"}else location.href=e+="?hideOtherAnswer=true&newAnswer=1"});else{w.get("showCount")||w.set("showCount",0),w.get("subshowCount")||w.set("subshowCount",0);var c=!F.context("user").tag&&"notip"!==w.get("addtagsHatch")&&w.get("showCount")<2,l=F.context("user").tag&&0!==F.context("user").tag.length&&"notip"!==w.get("skipHatch")&&w.get("subshowCount")<2;c&&"true"===F.context("isUnview")?d.ajax({url:"/misc/getrecommendtag",type:"post",dataType:"json",data:{qid:F.context("page").qid}}).done(function(e){0===e.error?n(e.data):g.alert(e.errorMsg)}).fail(function(){g.alert("网络故障，请重试")}):l&&"true"===F.context("isUnview")?r():(o("success-tip","您的回答已提交成功"),setTimeout(function(){var e=location.href;if(e.indexOf("hideOtherAnswer")<0)if(e.indexOf("?")>0)location.href=e+="&hideOtherAnswer=true&newAnswer=1";else if(e.indexOf("#")>0){var t=e.substring(0,e.indexOf("#"));location.href=t+="?hideOtherAnswer=true&newAnswer=1"}else location.href=e+="?hideOtherAnswer=true&newAnswer=1"},2e3))}u.send({module:"question",page:"reply-question",area:"submit",action:"submit-success",rid:t.aid,qid:F.context("page").qid})},beforeError:function(){d(".loading-layer").hide(),d(".layerBg").hide()},authcode:_.authcode||null})}({tn:"ikqb",qid:F.context("page").qid,user:F.context("user").name,referrer:encodeURIComponent(document.referrer)});localStorage.removeItem("HAS_NOT_COMMIT_ID"),localStorage.removeItem("HAS_NOT_COMMIT_CONTENT"),1===e.isRealName&&0===d("#passport-accRealName-pop").length?m.fire("login.realName",{onHide:function(){d(".loading-layer").hide(),d(".layerBg").hide()},onSubmitSuccess:function(){i()}}):1===e.isRealName&&d("#passport-accRealName-pop").length>0?(d("#passport-accRealName-pop").show(),d("body").children("div:first-child").show(),d("#passport-accRealName-pop").is(":hidden")?(d(".loading-layer").hide(),d(".layerBg").hide()):(d(".loading-layer").show(),d(".layerBg").show())):i()},noLogin:function(){d(".loading-layer").hide(),d(".layerBg").hide(),localStorage.setItem("HAS_NOT_COMMIT_ID",F.context("page").qid),localStorage.setItem("HAS_NOT_COMMIT_CONTENT",t.co),m.fire("login.log",{onLoginSuccess:function(e){e&&(F.context("user").stoken=e.stoken),1===e.isRealName?(d(".loading-layer").hide(),d(".layerBg").hide()):new h({params:t,hasJump:!1,syncId:"answer",beforeJump:function(){O&&O.length&&"show"!==d.cookie.get("VISIT_VISIT_MODEL")?a(function(){var e=location.href;if(e.indexOf("hideOtherAnswer")<0)if(e.indexOf("?")>0)location.href=e+="&hideOtherAnswer=true";else if(e.indexOf("#")>0){var t=e.substring(0,e.indexOf("#"));location.href=t+="?hideOtherAnswer=true"}else location.href=e+="?hideOtherAnswer=true"}):(o("success-tip","您的回答已提交成功"),setTimeout(function(){var e=location.href;if(e.indexOf("hideOtherAnswer")<0)if(e.indexOf("?")>0)location.href=e+="&hideOtherAnswer=true";else if(e.indexOf("#")>0){var t=e.substring(0,e.indexOf("#"));location.href=t+="?hideOtherAnswer=true"}else location.href=e+="?hideOtherAnswer=true"},2e3))},beforeError:function(){d(".loading-layer").hide(),d(".layerBg").hide()},authcode:_.authcode||null})}})}})}}}var d=e("common:widget/js/util/tangram/tangram"),l=e("common:widget/js/logic/ueditor/ueditor"),u=e("common:widget/js/util/log/log"),m=e("common:widget/js/util/event/event"),h=e("common:widget/js/logic/submit/submit"),g=e("common:widget/js/ui/dialog/dialog"),p=e("common:widget/js/ui/carousel/carousel"),f=e("common:widget/lib/juicer/juicer"),w=e("common:widget/js/util/store/store"),v=e("question:widget/ask/editor-guide/editor-guide");e("question:widget/js/app-guide/app-guide");var b=d("#answer-bar"),x=d("#answer-bar i"),y={ql:/browse(?:\/\d+(?:$|\?lm=2|\?[^lm])|$|\/$|\/\?lm=2)/i,ql_tab_hscore:/browse\/\d*\?lm\=4/,ql_tab_zero:/browse\/\d*\?lm\=8/,ql_tab_emergency:/browse\/\d*\?lm\=16/,zhuanti:/zhidao\.baidu\.com\/s\/([a-zA-Z0-9_\-]+)/,search:/zhidao\.baidu\.com\/search/};!function(){var e,t=document.referrer,i="";for(var o in y)if(e=t.match(y[o])){i=o;break}if(i&&"zhuanti"==i&&(i=e[1]),!i){var a=d.url.queryToJson(location.search||"");a&&"uc_push"==a.fr&&(i="keyword"==a.push?"uc_tab_keyword":"category"==a.push?"uc_tab_class":"uc_tab_recommand")}var n=F.context("page").isFromWap,s=i+(parseInt(n)?";wap_question_replyed":"");F.context("extra",{title:s,answerfr:s})}();var _=null;b.click(function(){var e=d(this).text();u.send({module:"question",action:"click",page:"replyer",area:"have-better-answer-btn",btn_type:e,isLogin:"1"===F.context("user").isLogin?1:0}),_=_||t(),x.hasClass("i-incline-down")?(_.expandEditor(function(e){e.style.overflow="inherit",d("#answer-editor").css({visibility:"inherit"})}),x.removeClass("i-incline-down").addClass("i-incline-up"),d(".wgt-search-relate, .search-relate").show()):(_.collapseEditor(function(e){e.style.overflow="hidden",d("#answer-editor").css({visibility:"hidden"})}),x.removeClass("i-incline-up").addClass("i-incline-down"),d(".wgt-search-relate, .search-relate").hide())}),function(){var e={home:/zhidao\.baidu\.com\/$/,browse:/zhidao\.baidu\.com\/browse/,ihome:/zhidao\.baidu\.com\/ihome(?!\/hangjia)/,qb:/zhidao\.baidu\.com\/question/,hangjia:/zhidao\.baidu\.com\/ihome\/hangjia\/index/,team:/zhidao\.baidu\.com\/team/},t=location.href,i=document.referrer,o=d.url.getQueryValue(t,"entry")||"";if(""==o){for(var a in e)if(i.match(e[a])){o="qb_"+a+"_none";break}o=""==o?"qb_none_none":o}F.context("extra").entry=o}();var I=null,O=F.context("visitJoin"),j=d("#visit-join-model-template"),k=!1;!function(){if(F.context("page").relatedKeyword)return void window.isQualityView;d("<a/>").html("<span></span>搜索相关资料").addClass("mb-5 mt-15 search-relate").attr("href","http://www.baidu.com/s?wd="+encodeURIComponent(F.context("page").title)+"&ie=utf-8").attr("target","_blank").hide().insertBefore("#answer-bar")}(),("1"!==F.context("page").isView||"1"===F.context("isForAnswerHq")||"1"===F.context("isForceAnswer")||F.context("page").qid===localStorage.getItem("HAS_NOT_COMMIT_ID")&&"1"===F.context("user").isLogin)&&d(function(){_=_||t(v.content),v(_),_.addListener("ready",function(){localStorage.getItem("HAS_NOT_COMMIT_CONTENT")&&_.setEditorContent(localStorage.getItem("HAS_NOT_COMMIT_CONTENT"))}),d(".wgt-search-relate, .search-relate").show(),b.hide()})});