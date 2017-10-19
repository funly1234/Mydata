(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWhddQ8wDGhSdlAMAWoDN1E4DDQDYQcjXTxQNFJ2U2QDd1xyDD4EdgMwUg4OZVNnAWgNOVU7UXVTOgJmV2BUZwFYXW4PMAwwUjJQYQE7A3VRdQxhAzUHa10CUCBSdlM8AzRcNgxnBCMDIVIoDnxTZgFoDXo=","r":0.4},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz4IIF1iVjIGIgFdBm0DN1Q9UmoCYAQgUDFUMFVxVWJRJQEvDT9QIlZlVQkGbVZiUThQZFY4VXFQOQFlAzRXZFcOCDhdc1Y6BiABXQZxAyFUbFJuAj0EclAkVCRVIlU0URYBfg1kUBdWJVVkBkJWalFgUCVWdVUyUCIBLwMyV3ZXNQg8XShWOQY1AXYGIQNhVEZSNgIxBGtQdVRmVUFVdFE\/ATQNIVAOVmVVOwZgVllRZ1AoVl5VPlA0ASQDYldDVzQINl1rVggGOQFmBiEDYFREUmUCZAQ3UGRUclVuVWNRMgE6DQlQOFZkVWsGMlY0UT1Qd1ZxVTtQMQFvAw5XbFchCG9dNVZlBmABMgYiAydUeVIjAjAEO1Az","r":"0.0012800000"}];
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