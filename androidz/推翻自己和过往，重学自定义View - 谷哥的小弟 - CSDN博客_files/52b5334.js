(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWxddQk2DGhWcglVVT5UYAFoAjZSMQAzXHoFZFBmVnIEZwsjCCcDawQhVTNUCVduW2tVaVcyUmNRZAYgAzgBNwVmXWYJDQxkVmQJN1VlVDEBYgI6UiMAclwwBWRQbFZbBHILJwhuAzYEYlVwVCJXflt\/VTFXPVIm","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDkLI11iUTVUcFAMB2xTZ1Q9UWVXNV5rByFUNVNlVHADYF11WXZTOwUgB2FWCw00BzdWalcxAjABNgstBT4BN1AzCzBdWVE5VGZQbgc3UzVUMlFmVyZeLAdrVDVTb1RZA3VdcVk\/U2QFZQciViANJAcjVjJXPQJ2","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkKIgg3BGBUcFMPUzgDNwZvVmJUNlFrU3VRMFJkW39QMwggXnFXPwInB2EDXlduVGRSbgdhUmNRYVRyV2xRZwBjCjEIDARsVGZTbVNjA2UGYFZvVCVRI1M\/UTBSbltWUCYIJF44V2cCZAc0AydXc1R5UiMHNVJtUSc=","r":0.28}];
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