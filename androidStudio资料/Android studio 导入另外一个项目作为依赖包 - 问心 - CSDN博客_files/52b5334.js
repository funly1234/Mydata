(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2pcdFxjBmJSdgdbVj0BNVozVmJWNVdnVHIFZFdhVXFUN111CCcBaVZzB2EBXAM6VmZWagRiBDRSZAYgAToBNwNgXGdcWAZuUmAHOVZmAWRaOVZmVidXJVQ4BWRXa1VYVCJdcQhuATVWMwciAXcDKlZyVjIEbgRw","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DGVZcQo1B2NRdQhUB2wBNQBpV2NYO1ZlV3EGZwk\/UnZRMlpyDiEEbA8qAmRTDgw1BzcDP1E0AzJUYQAmVW5QZgxvWWIKDgdvUWMINgc3AWQAY1dvWClWJFc7BmcJNVJfUSdadg5oBDEPaQInUyUMJQcjA2dROwN3","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B24PJ1xjVzNVcQNfD2RQZANqBDBSMAA3AScEZQUzAiZQMwAoDCNTOwAlAGYAXVNqVGRQbAdhBzcGMQchCDMANgdkDzRcWFc\/VWcDPQ8\/UDcDZwQ3UiMAcgFtBGUFOQIPUCYALAxqU2MAZQA0ACRTd1R5UCEHNQc4BnA=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDkNJVxjB2MOKlUJBG9WYlsyAzcAYl5pVnAKa1JkUXUHZFlxCSZTOwYjCG5SD1ZvBzcGOgdhUmBQZ1N1ADsCNFAzDTZcWAdvDjxVawQ0VjFbPwM0AHFeLFY6CmtSblFcB3FZdQlvU2sGYggtUiRWfwcjBmIHbVIm","r":0.26}];
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