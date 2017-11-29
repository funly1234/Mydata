(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oKIg8wUzcGIlIOB2wFMVsyDDtZPVZtAScKa1dhUHQCYQ0lWnVTOwMmCW9VCFRtVGRWalk8ADFRZAchBzxXYQNgCjEPC1M7BjRSbAc2BWVbPgw1WShWJAFtCmtXa1BdAnQNIVo8U2YDZQksVSNUfVRwVjJZMwB0","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UThddVplUDQOKlUJUTpWYgFoBzAEYFJoASdQMVRiAiYEZ1tzDSIFbQ4rVzFRDFRtADACPgNlADBca1RyAToBN1EyXWZaXlA4DjxVa1FgVjYBZAc1BHVSIAFtUDFUaAIPBHJbdw1rBTEOa1dyUSdUfQAkAmYDaQB0","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDlacgs0DGhVcQRYVT4ANAFoDToHY1NpVnAGZwUzUXVWNVx0XnFXPwInVTNUCQ00UGAGOlg3AiYDalczAjVaaVAJWmkLNAwwVTAEN1VmAGYBcw18BzxTMFY4BlkFJ1F1Vm1cNV40V3ACIFUvVCYNOFA5BnE=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UTgAKAs0UTVRdQFdUzgANFozAjVSMVFiAScGZ1dhACRUNwoiXHMAaAUgVTNUCVFoADBWalI8BT4GIFA5BTMFMlE2AAULOVE0UToBMVNhAGRaOQIlUnVRPwFgBmhXWgAiVCQKbVw2ADAFY1VwVCJReAAkVjJSOAVx","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2pcdA4xAGQPK1UJAGsHM1U8BzAFZgc0ByFUNQI0AiYDYAkhDiFQOA4rAGYOUwY\/BjZWalE3UmBRZwQiVW5bbQNgXGcOCgBoDz1VawAxB2dVNQc\/BXQHdQdrVDUCPgIPA3UJJQ5oUGAOagAzDioGIgYrVidRY1JtUSc=","r":0.33},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD0OJgk2AWUEIFUJVj1TZwduBTJRMgM4ByEBYAE3BiIBYgAoAC8GbgUgVzEEWVRtUmINMVM1UGNSYwYgVG9TZVQ3DjUJDQFpBDZVa1ZnUzMHYAUxUSADcQdrAWABPQYLAXcALABmBjYFZldlBCBUcFJ\/DXxTYVBvUiQ=","r":0.42}];
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