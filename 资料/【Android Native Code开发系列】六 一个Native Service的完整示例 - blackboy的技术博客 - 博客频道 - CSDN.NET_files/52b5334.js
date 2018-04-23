(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkIIFplA2dTd1AMD2QANFM6BT1TMQMnVzYDZwYiUmUFcVxyDz0Nf1VmBVkDaFNnUDlXYwJsXnoEbQpuUGdQYwBZCDtaZQM\/UzNQYQ81AHZTdwVoU2UDb1cIA3MGIlI9BTJcNg9kDSpVdwV\/A3FTZlA5VyA=","r":0.4},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQMJAA\/VjIDJwhUAWoANFE4ATlYOgMnUzIDZwYiBzAAdF1zCTsDcVRnCFQFbgE1AGkANABuXnpQOVQwVWJaaQ1UDDwALlY6AyUIVAF2ACJRaQE9WGcDdVMnA3MGcQdmAEddIglgA0RUJwg5BUEBPQAxAHUAI145UCJUelVkWnsNbww4AHVWOQMwCH8BJgBiUUMBZVhrA2xTdgMxBhIHJgBuXWgJJQNdVGcIZgVjAQ4ANgB4AAheNVA0VHFVNFpODW4MMgA2VggDPAhvASYAY1FBATZYPgMwU2cDJQY9BzEAY11mCQ0Da1RmCDYFMQFjAGwAJwAnXjBQMVQ6VVhaYQ17DGsAaFZlA2UIOwElACRRfAFwWGoDPFMw","r":"0.0012800000"}];
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