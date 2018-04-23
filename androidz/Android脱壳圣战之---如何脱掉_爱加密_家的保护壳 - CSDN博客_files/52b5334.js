(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWwNJQo1AmZVcQBcVT4BNVM6UGdYO15lUXdRMFVjWn4AYwkhCCcFbVVwVDJRDFNqUWECPlE3U2EBNwAmBzwGMAVmDTYKDgJqVWcAPlVkAWFTMVBjWCleLFE9UTBVaVpXAHYJJQhuBTVVMFRvUXVTd1F8AnNRY1NsAXc=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkAKA8wUzdTdwZaAmkDN1syBzEAZ1djU3VTMlBmU3cNbl11CCdQOFN2VDIEWQU8VWUFOQBmUGNWZwYgUGsCNABjADsPC1M7U2EGOAIzA2BbOwc1AHFXJVM\/UzJQbFNeDXtdcQhuUGBTMFRuBCAFIVV4BXQAMlBvViA=","r":0.44},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Amtbcwg3UzdRdVMPAGsHM1E4BjADZFFlUnQDYgcxVXEMbwkhCyRWPgQhVDIPUlFoBzdXa1U7UWoEIlY\/ATdUYwJlW14IOlM2UTpTYwAxB2NRMAYhAyRRP1IzA20HClV3DHwJbgthVmIEYlRxD3lReAcjVzNVP1El","r":0.42}];
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