(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmtacgA\/A2dRdQJeAWpRZVM6BzNYOwIyXXsHZgk\/UnZRMgwkWnUAaFZzBWNRDAQ9V2cBPQNmBzZRZAEnADsANgJhWmEABANrUWMCPAExUTZTMgc2WCkCcF0xB2YJNVJfUScMIFo8ADVWMAUgUScELVdzAWUDaQdz","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz4JIQg3AGRWclIOB2xTZ1U8DTkFZ19qACYDYgcxVHBRMlpyW3QGblJ3UDYBXFFoVGQNMQRiUGJUYgYgBD8CNFc0CTIIDABoVmRSbAc3UzVVMw07BXRfLQBsA2IHO1RZUSdadls9BjFSMlB1AXdReFRwDWkEblAk","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oKIgg3UTUEIAVZD2RRZVY\/ATVUNldgACZTMgM1W38CYQggXXIBaVRxUzUBXAU8UGAMMFk\/V2cEMwMlVW5bbQNgCjEIDFE5BDYFOw8\/UTZWMgEyVCVXJQBsUzIDP1tWAnQIJF07ATFUMVNnASUFIVB9DH1Za1doBHI=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoIIA8wB2NUcAFdBW5QZAZvBjJTMFFiVnAKa1VjUXUNbllxCiVROQUgBGIHWgU8VmZWalYwAzMGMFN1U2gFM1MwCDMPCwdvVGYBPwU1UDcGZgYwUyJRI1Y6CmtVaVFcDXtZdQpsUWUFYAQhB3EFLFZyVjJWPAN3","r":0.15}];
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