(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoOJgk2VzMFIQBcAmlTZ1syUGRWNQMzACYAYQYwBSFTMAAoAC9XPw8qVTNSDwM6W2sAPAdiAzIANQAmAzgGMFMwDjUJDVc\/BTcAPgIyUzRbOlBhVicDcQBsAGEGOgUIUyUALABmV2IPaVVwUiQDKlt\/AGQHbQN3","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWgJIQo1AmYCJglVUzgFMVY\/BzMFZwI3V3EGZwYwASVRMlx0XXJUPAciBmBUCQI7BzdXa1QyU2JdbVF3AjlSZAFiCTIKDgJqAjAJN1NjBWNWMAczBXQCcFc7BmcGOgEMUSdccF07VGQHYQY1VHACJgcqVyZUZlNsXSs=","r":0.28},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2pZcQk2BmIHI1cLBm1RZQFoAjYHZVZhBiAKawM1Wn5TMAAoDyABaVJ3CG4FWFBpV2cAPFQ3XmoBJ1E4VGIHMANkWVwJOwZjB2xXZgY8UTEBYAIlByBWOAZnCmQDDlp4UyMAZw9lATBSNAgtBXNQeVdzAGRUPl4q","r":0.28},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDkNJQ8wAmYHI1AMA2gCNlY\/AzdTMVJlUXcHZlNlUHRTMAAoCyQMZFZzBGIPUlRtUWEGOgNlXmwEM1B2VG9WYFAzDTYPCwJqBzVQbgMzAmpWMgM0UyJSIFE9B2ZTb1BdUyUALAttDDRWMgQhD3lUfVF1BmIDaV4q","r":0.26},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkMJAA\/AWUEIAhUAGsGMgRtDTkDbVBrU3UFZAE3UnYBYgkhDyAGbgYjUzVVCFduVWUFOQBmVmVXYgstBT5VYwBjDDcABAFpBDYINgAwBmEEaA05A3JQIlM\/BWQBPVJfAXcJJQ9pBjYGZVNgVXFXc1V4BXQAMlZpVyE=","r":0.42},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWxacgo1B2MOKlMPAmlQZANqDDhVNQU2BiAHZldhVHAMb1x0W3RUPFF0A2UOUw00VmZRbQdhBDZSZFdxBT5WYAVmWmEKDgdvDjxTbQIyUDcDbgw1VSQFdwZqB2ZXa1RZDHpccFs9VGxRNQMmDngNJFZyUTUHbQRw","r":0.26}];
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