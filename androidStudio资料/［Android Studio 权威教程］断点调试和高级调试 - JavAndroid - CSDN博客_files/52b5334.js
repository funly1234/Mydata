(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj8NJV1iAGQEIAdbAWoHMwduAjYCYQc3V3FUNVRiByMFZlpyDCMNZQYjUDZSD1NqVGRWagBlVWQEMQUjBj0CNFY1DTZdWQBoBDYHOQExB2AHZgIzAnMHdVc7VDVUaAcKBXNadgxqDTgGYFB1UiRTelRwVjIAalUh","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oPJwwzUDQBJQlVUzgCNgRtDTlWNF5rBiABYAA2BiJUN152W3QNZVJ3BmBWCwY\/UmIEOAJkAzFcalB2UmlRZwNgDzQMCFA4ATMJN1NjAmQEYg07VideLAZqAWAAPAYLVCJecls9DTpSMgYjViAGL1J2BGACaAN3","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DGVbc1plAWVTdwVZB2xTZwFoUWVRM1JlXHoAYQM1VHANbgoiCCcMZAUgCG4HWlBpBzcHOwRiUmIEM1dxAjlSZAxvW2BaXgFpU2EFOwc3UzQBZVFiUSBSIFwwAGEDP1RZDXsKJghuDDwFYAg8ByNQdAcqB3YENlJtBHI=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQNJV5hVDACJghUVj1WYlozVWFZOl9sVnADYgI0VHBXNAoiDyACagAlBGICXwQ9UWEHO1QyUGBWYAMlVG8HMQ1uDTZeWlQ8AjAINlZmVjFaOlVjWShfLVY6A2ICPlRZVyEKJg9pAjYAZQQhAnQELVF1B2NUPlAk","r":0.15}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();