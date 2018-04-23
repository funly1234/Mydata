(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oIIAo1UTUGIgJeB2wANFQ9AzRZPQc9XXtWNwQyBSFRMlpyCyQCagUgA2UAXQQ9BzcNMVk8VmcBNFN1BzwCNANgCDMKDlE5BjQCPAc2AGBUMQM2WSgHdV0xVjcEOAUIUSdadgttAjcFYwMmAHYELQcjDWlZM1Yi","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj8LIwwzDWkBJQBcAWpWYgZvDDgAb15kU3VXNlRiVXEDYAkhW3QCalRxCG4PUg00UmIEOFcxUWFda1RyUGsHMVY1CzAMCA1lATMAPgEwVjYGZQw6AHFeLFM\/VzZUaFVYA3UJJVs9AjJUNAg7DysNKVJ\/BHVXZVFuXSs=","r":0.44},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmtcdAA\/UTUEIAhUBm0EMFQ9BDNRMFJpBiACY1VjBSEGZVpyDCNUPA4rVDIFWFBpVmYGOlAzAjYBJwBpUGZRZgJlXFkAMlE0BG8IOAY2BGVUMQQjUXZSPAZnAmxVWAUnBnZaPQxmVGAOaFRxBXNQeVZyBmJQOgJ2","r":0.42}];
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