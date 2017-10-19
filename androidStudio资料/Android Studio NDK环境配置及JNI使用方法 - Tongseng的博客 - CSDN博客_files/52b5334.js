(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj9ZcQo1UzdVcQhUBW4CNlY\/DDhUN1dnVnAFZAE3UHQHZAkhWnVTO1ZzAWcHWgQ9VWVVaVQyBTUGMAIkVW5bbVY1WWIKDlM7VWcINgU1AmdWNQw8VCVXJVY6BWQBPVBdB3EJJVo8U2dWMwEkB3EELVVxVTFUPgVx","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj9cdA4xVzNUcAVZUjlQZFsyV2MEZwAzV3FTMldhW39QMwkhW3QHbwUgUjRUCQ00UmJXawBlV2YDNgosUmlSZFY1XGcOClc\/VGYFO1JiUDdbO1duBHUAclc7UzJXa1tWUCYJJVs9BzIFY1J3VCINJFJ2VzMAalcj","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DGUNJQs0VzNTdwlVBG9WYgBpBDADYV9qBiALaldhWn5RMltzDCNXPwQhUzVWCwU8ADBSbgJkV2UHMAAmAjlVYwxvDTYLD1c\/U2EJNwQ0VjAAZgQzA3JfLQZqC2pXa1pXUSdbdwxqV2AEZFN2ViAFLAAkUjYCaFcj","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Bm9cdF5hUDQFIVcLAWoGMlE4BTFRM15kAScEZQE3V3NRMl52CSYDawciUjRTDgQ9ADAEOFA2UWJUZQIkVW4BNwZlXGdeWlA4BTdXaQExBmBRNwU9USBeLAFtBGUBPVdaUSdecglvAzQHZVJ3UyUELQAkBGBQOlEl","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoMJF5hAGQDJwVZUTpRZQBpATUHZVFmU3UEZVVjASUNbl11XXIDawQhCG4AXQw1VWVQbFI0BTVWYQosUmkBN1MwDDdeWgBoAzEFO1FhUTYAZAEyB3ZRI1M\/BGVVaQEMDXtdcV07AzMEYQg8ACQMKFV4UCFSYAU6ViA=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD1ZcVxjUTVUcFUJBm0GMlU8DTlZOwUyUnQEZQE3Wn5QMwwkW3QDawMmBmAOU1FoU2NVaVU2ADRTdQVsUmRabVQzWVxcblE0VD9VZAYzBmZVNQ0qWX4Fa1IzBGoBDFp4UCAMa1sxAzIDZQYjDnhReFN3VTFVPwB0","r":0.28}];
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