(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz5bcwg3A2dTd1cLD2RTZ1A5BTEAYwQ0XXsCYwQyACRWNVpyCiVUPAAlVTMOU1NqUWENMVcyAzIBNAstADtbbVc0W2AIDANrU2FXaQ8\/UzRQMQU0AHEEdl0xAmMEOAANViBadgpsVGEAZlVwDnhTelF1DWlXPQN3","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj9acgwzVDACJghUAGtRZVozDTlUNgA1VXNQMQI0V3NUN1x0XHMFbQUgBGIDXlZvVGQDPwdhX20GMAstUGsGMFY1WmEMCFQ8AjAINgAwUTdaPA07VCUAclU5UDECPldaVCJccFw6BTIFZQQhA3VWf1RwA2cHbV8r","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWRedllmAmZVcQNfVj0MOFM6DDhRM1JlVHICYwE3ACRRMl52DSJWPlJ3BGJUCVFoATFVaVcxXm5TZFdxBj0CNA1uXmVZXQJqVWcDPVZmDGtTNww\/USBSIFQ4AmMBPQANUSdecg1rVmZSNwQwVHBRdQEsVSRXZV5hUyU=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Uzpedgs0B2MPK1MPUjkHMwRtDDhWNVVmU3VXNlRiUHQCYQggAS5UPAInAmQAXQM6UGAGOgVjBTVRZ1RyCDNTZVMwXmULDwdvDz1TbVJiB2AEZAw6VidVJ1M\/VzZUaFBdAnQIJAFnVGACZwInAHYDKlB0BmIFbwVx","r":0.15}];
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