(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Bm8IIA8wAmYAJFMPA2gCNgNqBjFVMVRvUXdUNVdhUXUAYw0lW3QFbQQhUzUGWwI7AzMHOwVjVmYDNVF3UGtUYgZlCDMPCwJqADJTbQMyAmIDZgYwVSRUJlE9VDVXa1FcAHYNIVs9BTEEYVN2BnACKwMnB2MFb1Yi","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmtZcQk2A2cHIwhUBW5UYFY\/UmUAZFJoXXsLalJkW38GZQ0lW3QCagYjB2FSD1RtUWEMMFA1U2IDNgUjATpXYQJhWWIJDQNrBzUINgU0VDRWM1JmAHFSIF0xC2pSbltWBnANIVs9AjcGYAciUiRUfVF1DGhQOlMn","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDkNJV1iB2NTd1QIAGtTZ1E4UWYHZlRvVXMGZwI0ASUDYA4mDCNWPgYjA2UGW1duBjYGOlM1ADJdawchAjkANlAzDTZdWQdvU2FUagAxUzFRNFFiB3ZUJlU5BmcCPgEMA3UOIgxqVmYGYwM4BiJXcwYrBndTYQA\/XSs=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG1edgwzDGgHI1MPAWoBNQNqAzQFZFdsUnQDYgcxBiIMbwEpDSIHb1N2B2EFWAI7ADANMQNtBzwEIgZvBDIGMQRjXlsMPgxpB2xTYwExAWADZAMkBSJXOVIzA20HCgYkDHwBZg1nBzRTMAciBXMCKwAkDWkDaQdz","r":0.35}];
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