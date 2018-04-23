(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0JIQA\/UTUCJgZaDmVUYFY\/DToHZFVuVHIHZlBmByMHZAsjXXJQOAciVDJRDAQ9UmJSblQyUGJRZlB2VW4ANgRnCTIABFE5AjAGOA4\/VDRWNA05B3ZVJ1Q4B2ZQbAcKB3ELJ107UGAHYlRvUXUEIFJ\/UiNUZlBvUSc=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B25acgo1AWVTdwVZDmUANFI7ATdTNAczXXtRMFRiVXEDYAsjDSINZVJ3UzUCXwI7VGRWalk6X2tUcgBpUmRbbAdgWl8KOAFkUzgFNQ44AGFSNgEmU3QHaV08UT9UWVV3A3MLbA1nDTRSNFN2AnQCK1RwVjJZM18r","r":0.5}];
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