(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz4OJgA\/VzNUcFIOB2wFMVozVmEHY1ZtU3ULagk\/VXFUN1tzCyQFbVF0CG5VCFBpVmYAPFQxVGUANQosBj1abFc0DjUABFc\/VGZSbAc2BWVaP1ZuB3ZWJFM\/C2oJNVVYVCJbdwttBTBRNwgtVSNQeVZyAGRUPlQg","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWgPJwk2AmZUcANfA2gBNVE4BzBQNAM5ByEGZwYwVnJUNwwkCiVQOAInVzECXw00W2sAPFQyAzNcawYgBD8ANgFiDzQJDQJqVGYDPQMyAWFRNAc1UCEDcQdrBmcGOlZbVCIMIApsUGQCZ1dyAnQNJFt\/AGRUPgN3","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Amtbcwo1AGRVcVAMAmkGMlE4VmJXOFJoXXsDYlVjU3cEZ111AS4AaFVwUDYAXVRtADACPlQyV2dcagYgV2wCNAJhW2AKDgBoVWdQbgIzBmZRMlZgVyZSIF0xA2JVaVNeBHJdcQFnADBVNVBjACRUcAAtAnNUZldoXCo=","r":0.44},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmsAKFlmDWkHIwRYB2xTZ1Y\/BjEHZgA7XHoFZAQyAiYBYgEpDiFQOFRxCW9VCAM6V2cAPABmXmxQZlRyADtUYgJhADtZXQ1lBzUEOgc2UzJWMQYwB3YAclwwBWQEOAIPAXcBLQ5oUGBUNgk5VXEDJ1d6AHEAMl5hUCY=","r":0.4},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmsJIVplDGhSdgVZBW5TZwZvBTJVNF9kVXNRMAM1BiJQMwAoCyRWPgYjUzVUCQE4ATEAPARqVW5SdFY\/UGZQZwJlCQxaaAxpUjkFNQU2UzAGagUiVXJfMVU0UT8DDgYkUCAAZwthVmQGYFN2VCIBKAElAGQEblUh","r":0.36}];
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