(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWhedgo1VzNSdlUJA2gNOQRtBzNQPwc8BCIGZ1dhVHAFZlpyAC8MZFRxBGJSDw00VWVVaVcxVmUAMQEnVG9abAFiXmUKDlc\/UmBVawMyDW0EaAc1UCEHdQRoBmdXa1RZBXNadgBmDDxUMgQxUnYNKVV4VSRXZVZpAHY=","r":0.29},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkAKAwzB2MBJVIOUToMOFE4AzQEYAQ\/VXMHZgA2V3MGZV52AC8Hb1VwB2FTDgE4U2NRbVk2X3tTOgpuU2QHNABZADMMMwc7AWRSYVFhDGxRIwNyBD8EZ1U7B1gAIldzBj1eNwBqByBVdwd9UyEBNFM6USY=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DGVZcQs0B2NSdlcLAWoANAFoADdTN1ZsXXsHZgQyUHQCYQggDiEHbwAlBGIEWVBpATEAPFI3U2JSZwchAToFMwxvWWILDwdvUmBXaQEwAGABZAA1UyJWJF0xB2YEOFBdAnQIJA5oBzIAZgQhBHJQeQElAGRSOFMn","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWwAKA8wUDRSdgBcBW4HM1ozBjEFZlRnUXdWNwk\/UnYBYgAoCiVROVJ3CW9VCFBpVWUDPwVrUGsDJVA5UGYHMAViAAUPPVA1UjkAMAU3B2NaOQYhBSJUOlEwVjgJBFJwAXEAZwpgUWFSNAksVSNQeVVxA2cFb1Ak","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0JIV5hAWVTdwVZBW5XY1Y\/V2AFZgA7BCIHZlRiWn4NbgsjDSJQOFF0BmACXwE4ATEGOgVjVmZXZQAmUmlRZwRnCTJeWgFpU2EFOwU0VzdWMVdhBXQAcgRoB2ZUaFpXDXsLJw1rUGBRMgYxAiYBJQEsBncFN1ZpVyE=","r":0.43}];
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