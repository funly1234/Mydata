(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0IIF5hUzdVcVMPVj0HMwduV2NYOlZjV3EHZlNlWn4BYg0lWXZWPlRxAGYCXwE4BDQHO1UzVmRWYVN1VG8ANgRnCDNeWlM7VWdTbVZmB2EHYVdgWClWJFc7B2ZTb1pXAXcNIVk\/VmFUNAAlAnQBKAQgB2NVP1Yi","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQAKA0yDGgGIlMPA2hRZVE4BjJQMl9oU3UFZAQyASVRMl11WnUGbgQhBGIPUgE4ADADP1QyU2MDNAQiCTJTZQ1uADsNCQxkBjRTbQMzUTZRNQY1UCFfLVM\/BWQEOAEMUSddcVo8BjYEYQQwDysBJQAtA3JUZlNsA3U=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG1bcwo1VzMDJ1UJUTpTZwRtAjZRM1ViAyUBYAI0ByMCYV11XnFWPgQhA2VWCwU8BzcGOlk6AjYGIFQ9UmQCNQRjW14KOFcyA2hVZFFkUzMEZAIlUXZVOwNiAW8CDwclAnJdOl40VmcEYgMmViAFLAcjBmJZMwJ2","r":0.28}];
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