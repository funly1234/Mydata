(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWgOJgo1AGRTdwlVUjkGMlM6UGcAZAI5UnRWNwA2ACQBYltzAC8GbgQhCG4OU1RtVGRRbQNsUHRXPlQwATYAMwFYDj0KNQA8UzYJOlJiBmZTIVAhADsCYVI8VgkAIgAkATpbMgBqBiEEJghyDnxUYVQ9USY=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWwIIA8wBWFTdwNfBG9XY1I7AjUDZ1dtUXcKawcxAiYAYwsjAC9WPgciVDJWC1RtVmYBPQVgAjNUYQQiBj0CNAVmCDMPCwVtU2EDPQQ1VzdSNwI3A3JXJVE9CmsHOwIPAHYLJwBmVmMHYVRxViBUfVZyAWUFbwJ2","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj9ddQ0yBGAOKgJeVj0FMVQ9DToDYAMwBCICYwM1VHBUNw4mCCdQOAciB2FUCQA5VWVVaVA2VmZTZFdxU2hVY1Y1XWYNCQRsDjwCPFZnBWVUOA06A3IDcQRoAmMDP1RZVCIOIghuUGAHZwc8VHAAJFV4VSRQYlZpUyU=","r":0.47},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B24JIQ0yA2cAJAhUAmkNOVA5ADcEZ1ZlUXcAYQE3Wn4HZFpyCCcBaVJ3CG4AXQU8W2sDP1YwV2VUYgYgUmkHMQdkCTINCQNrADIINgIzDW1QMAA4BHVWJFE9AGEBPVpXB3FadghuATFSNgg7ACQFIVt2A3JWZFdoVCI=","r":0.33},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oIIFplUDQFIQBcUToGMgduVmEHZFRvXXtUNVdhVHBXNAAoWXYDaw4rA2VWCwI7V2cGOgVjX29XZVF3V2xbbQNgCDNaXlA4BTcAPlFgBmYHYFZgB3ZUJl0xVDVXa1RZVyEALFk\/AzMObQM0VnICJld6BncFN19gVyE=","r":0.43}];
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