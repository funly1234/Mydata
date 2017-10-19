(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UThacg4xUDRVcVUJB2wANFQ9AjZYO19vUXdWNwA2V3NUNwkhDyADawAlVzEGWwE4BzdWalcyADEHMlN1CTJSZFEyWmEOClA4VWdVawc3AGdUNQIzWClfLVE9VjcAPFdaVCIJJQ9pAzYAZldyBnABKAcjVjJXPQB0","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oLIw8wAGRRdQJeA2gCNlA5ATUFZwM2VHICYwk\/VnIHZA4mDyAAaFZzUjQBXFBpBzcDPwVjBTdcaldxBT5TZQNgCzAPCwBoUWMCPAMzAmRQNgE3BXQDcVQ4AmMJNVZbB3EOIg9pADdWNlJ3AXdQeQcjA2cFbwVx","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DGVedgs0UzdSdlUJUToEMFU8BDBSMFJlVnADYgcxAiYGZQoiWnUMZAEkVDIPUgI7VGQMMFcxBTVRZgYgVW5abAxvXmULD1M7UmBVa1FhBGNVMQQ3UiNSIFY6A2IHOwIPBnAKJlo8DDwBZFRgDysCJlR5DH1XZQU6USc=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UThbcws0BmJSdgJeBm1WYlE4DTkCYVdkUXcDYlBmByNTMF52DSIHb1N2B2EAXVRtUmIDP1A2Xm4HMQosBzxUYlEyW2ALDwZuUmACPAY2VjFRMQ07AnNXJVE9A2JQbAcKUyVecg1rBzNTNgciAHZUfVJ2A2dQOl4q","r":0.15}];
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