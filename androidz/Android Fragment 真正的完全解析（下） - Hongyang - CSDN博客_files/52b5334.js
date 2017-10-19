(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQPJwg3B2MAJABcVT4GMlA5BzAEYAI5BiAKawk\/VnJXNAggDCMCag8qUzUBXAI7U2MFOVI9ACQBaFA0U2RSYQ1UDzwINwc7AGUAM1VlBmZQIgd2BD8CYQZoClUJK1ZyV2wIYQxmAiUPLVMpAXMCN1M6BXI=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Bm8NJQs0UTVSdgNfAWoMOFU8BTIDZ19lVnBTMldhW38Nblx0WXYEbAciA2UBXAE4U2MEOFcxX28HMAYgBT5TZQZlDTYLD1E5UmADPQEwDGxVMAU3A3JfLVY6UzJXa1tWDXtccFk\/BDAHYgMmAXcBKFN3BGBXPV8r","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oJIVxjBGAGIgNfAGsNOQduADdRNQU\/VXMGZ1JkUnZUNwwkWnUFbQYjBWMCXwE4VGQDP1YzVGUBNFF3V2xbbQNgCTJcWARsBjQDPQAxDW0HYgA0USAFd1U5BmdSblJfVCIMIFo8BTAGYAUgAnQBKFRwA2dWPFQg","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDkPJwwzVzMGIgFdBG8ANFE4BjEAY19sVnABYAYwACRWNQwkCiVTOwciBGIGWwI7VWUAPABuBT5RdwtiVWNXYFA3DwoMPlcyBm0BMQQ2AGRRMgYhACdfMVY3AW8GCwAiViYMawpgU2IHYQQhBnACK1VxAGQAagVx","r":0.28},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkNJVlmUDQFIQBcUjlUYFsyBzBZOgIxUXcBYAcxVXEEZw8nWXYNZVVwVTNTDlNqBDRRbQVjAzFQZldxAjkHMQBjDTZZXVA4BTcAPlJjVDRbOwc\/WSgCcFE9AWAHO1VYBHIPI1k\/DT1VMlVmU3dTdwQpUSAFNwM8UCY=","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0NJQ8wUTVVcQFdB2wMOFM6UGcCYV9kUXdTMgk\/ASUBYgsjAS5WPlF0BGJSDwE4VGRSbgJkU2ABMFRyVW5RZwRnDTYPC1E5VWcBPwc2DGxTNFBkAnNfLVE9UzIJNQEMAXcLJwFnVmZRNwQxUnYBJVR5UiMCMFNsAXc=","r":0.29}];
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