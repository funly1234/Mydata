(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0OJgs0AWUOKgFdD2RUYFY\/ATVXNAAwVHIKawE3VHBTMA0lW3QCagQhBmACX1BpW2sGOgVjAjIBN1dxU2hRZwRnDjULDwFpDjwBPw8\/VDFWNQExVyYAclQ4CmsBPVRZUyUNIVs9AjYEYQYjAnRQeVt\/BmIFbwJ2","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoLI1lmAWUOKgJeUTpXY1I7VmJXNAIxBiAEZQI0VnICYVpyAS5ROQ8qCG5TDgM6ADBQbAJnV2YDNgAmUGsFM1MwCzBZXQFpDjwCPFFhVzJSMVZuVyYCcAZqBGUCPlZbAnRadgFnUWQPaQgtUyUDKgAkUDQCaFcj","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWwOJgg3BmIPKwBcAGsFMVY\/V2MAYgI1VHIFZAUzV3MMbw8nW3RUPAInAGZTDgQ9UWFXa1UzVmYHMAstCTICNAVmDjUIDAZuDz0APgAwBWJWMldkAHECcFQ4BWQFOVdaDHoPI1s9VGQCZwA0U3cEIFF8VyZVZ1ZpB3E=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DGUOJg8wBGABJQNfVj0FMQBpBjIFZwUyVXMGZwk\/UHRUN1x0CyRROQciVzEDXgI7BjZSbgNlV2UANwstUGsANgxvDjUPCwRsATMDPVZmBWIAZAYxBXQFd1U5BmcJNVBdVCJccAttUWkHY1dyA3UCKwYiUjYDaVcj","r":0.26}];
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