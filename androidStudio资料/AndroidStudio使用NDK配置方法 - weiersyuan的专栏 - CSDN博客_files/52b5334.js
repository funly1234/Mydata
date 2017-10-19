(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoKIg4xA2cOKgNfA2gEMARtAzcCYQU1BCIBYFdhUnYGZQggDiEFbQ8qA2VVCAI7AzMNMQdhUmJQZgosVG8HMVMwCjEOCgNrDjwDPQMzBGEEZwMzAnMFdwRoAWBXa1JfBnAIJA5oBTEPagMmVSMCKwMnDWkHbVIm","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQBKQ4xBmIOKgNfB2xQZFozVmJVNlZlV3EDYgQyV3MGZQkhDiFROQ8qAGYAXQA5BDRVaVA1Xm9caQMlADtRZw1uAToOCgZuDjwDPQc3UDdaOlZvVSRWJFc7A2IEOFdaBnAJJQ5oUWQPaQAlAHYAKQQgVTFQOl4q","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz4JIQs0AmZRdVUJUzgEMARtAzdYOgI3UHYEZVJkVHBQM1x0XnEGbgQhB2ECX1NqBzdVaVYwU2FXYAIkV2xRZ1c0CTILDwJqUWNVa1NjBGIEYgM0WCkCcFA8BGVSblRZUCZccF44BjEEZAciAnRTegcjVTFWPFMn","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWwOJg4xDWlSdgNfB2xXY1E4V2NYOgM5XHoDYgk\/VnJXNAggDCNXPwQhVTMFWFRtW2tQbAJkXm0DMlN1AzgHMQVmDjUOCg1lUmADPQc3VzFRN1dvWCkDcVwwA2IJNVZbVyEIJAxqV2AEZlVwBXNUfVt\/UDQCaF4q","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0MJF5hUDRTd1QIBm0DN1Q9AjZVN19oBCJTMlRiUnYCYQoiW3QNZVVwAGZWC1duV2cAPFA2Xm4ANwYgBzwGMARnDDdeWlA4U2FUagY2A2RUMAIxVSRfLQRoUzJUaFJfAnQKJls9DT1VMAA0VnJXc1d6AHFQYl5hAHY=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWwAKAk2BWEBJQhUDmVUYABpUWVRM19oXHoAYQYwAiYFZgsjWXYNZVVwBGJWCwU8UGAAPFY1BTFTdQVsCD5UYwViAAUJOwVgAWoIOQ47VDQAYFF2UXZfMVw9AG4GCwIgBXULbFkzDTxVMwQhViAFLFB0AGRWPAVx","r":0.28}];
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