(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0KIgs0UzcHIwdbVD8ANARtDDgDYAU2AScEZVRiUXVXNFx0DyBWPlZzVDIEWVBpBzdSbgBlAzJRZFN1U2gBNwRnCjELD1M7BzUHOVRkAGcEZAw1A3IFdwFtBGVUaFFcVyFccA9pVmNWMFRxBHJQeQcjUjYAagN3","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj8AKAg3UTUDJ1AMBW5WYgFoUWVQMlNpXHpUNQM1ByMGZQ0lW3RTOwciVzFWC1RtUWFVaVk\/VWRdbQQiCDNXYVY1ADsIDFE5AzFQbgU1VjABZ1FoUCFTIVwwVDUDPwcKBnANIVs9U2MHYVdkVnJUcFF8VSRZa1VqXSs=","r":0.28},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz5acllmA2dVcQFdAmlRZVM6V2MCYAUyU3UCYwE3W38NbgwkW3QDawAlAGYOUwQ9ADAGOgdhUGBWYQQiU2hVY1c0WmFZXQNrVWcBPwIyUTlTN1diAnMFd1M\/AmMBPVtWDXsMIFs9AzMAZQA0DioEIAAtBncHNVBvViA=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oKIllmUTUHIwVZA2gGMlA5ATVXNVdgVnBRMFBmVHADYA0lAC9ROQ8qVzFSD1FoBzdQbFcxU2FdagchCTJXYQNgCjFZXVE5BzUFOwMzBm5QNAE2VyZXJVY6UTBQbFRZA3UNIQBmUWkPa1dyUiRReAcjUDRXPVMn","r":0.26},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkJIV1iAmYHIwdbUToNOQBpBzNSMgIxUXcCYwM1U3dRMlpyXXIBaQ8qAGZWC1BpUWEDP1cxVmZWZAosBT5RZwBjCTJdWQJqBzUHOVFhDWUAZAc3UiMCcFE9AmMDP1NeUSdadl07ATkPaQAlViBQeVF1A2dXPVYi","r":0.25}];
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