!function(o){"use strict";var e={};e.backToTop=function(){var e=$("#back-to-top");$(o).scroll(function(){$(o).scrollTop()>100?e.fadeIn(1e3):e.fadeOut(1e3)}),e.click(function(){$("body,html").animate({scrollTop:0})})},e.mobileNavbar=function(){var o=$("#mobile-navbar"),e=$(".mobile-navbar-icon"),t=new Slideout({panel:document.getElementById("mobile-panel"),menu:document.getElementById("mobile-menu"),padding:180,tolerance:70});t.disableTouch(),e.click(function(){t.toggle()}),t.on("beforeopen",function(){o.addClass("fixed-open"),e.addClass("icon-click").removeClass("icon-out")}),t.on("beforeclose",function(){o.removeClass("fixed-open"),e.addClass("icon-out").removeClass("icon-click")}),$("#mobile-panel").on("touchend",function(){t.isOpen()&&e.click()})},e.toc=function(){var e=$(".post-toc"),t=$(".post-footer");if(e.length){var n=20,a=e.offset().top-n,i=t.offset().top-e.height()-n,c={start:{position:"absolute",top:a},process:{position:"fixed",top:n},end:{position:"absolute",top:i}};$(o).scroll(function(){var t=$(o).scrollTop();t<a?e.css(c.start):t>i?e.css(c.end):e.css(c.process)});var s=30,l=$(".toc-link"),r=$(".headerlink"),f=$.map(r,function(o){return $(o).offset().top});$(o).scroll(function(){for(var e=$(o).scrollTop(),t=0;t<l.length;t++){var n=t+1===l.length,a=f[t]-s,i=n?1/0:f[t+1]-s;a<e&&e<=i?$(l[t]).addClass("active"):$(l[t]).removeClass("active")}})}},e.fancybox=function(){$.fancybox&&$(".post").each(function(o){$(this).find("img").each(function(){var e=this.src.indexOf("imageView2/2/w")!==-1,t=this.src,n=void 0;if(e){var a=/(imageView2\/2\/w\/)\d+/,i=[1600,1280,960,640],c=[];n="";for(var s=0;s<i.length;s++){var l=i[s],r=this.src.replace(a,"$1"+l);c.push(r),n+=r+" "+l+"w",s<i.length-1&&(n+=", ")}t=c[0]}$(this).wrap('<a href="'+t+'" data-caption="'+this.alt+'" data-type="image" data-fancybox="gallery'+o+'"'+(n?' data-srcset="'+n+'"':"")+"></a>")})})},o.Even=e}(window);