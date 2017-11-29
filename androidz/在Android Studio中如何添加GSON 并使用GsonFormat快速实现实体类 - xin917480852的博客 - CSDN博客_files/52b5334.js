(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWxddQk2BmIOKlMPBm0CNgNqDTlTPAQ\/V3FWN1dhVHBRMg4mW3QGblRxCW8DXgU8BzcBPVA2UmFTZgchV2wGMAVmXWYJDQZuDjxTbQY3AmIDbw04UyIEdlc7VjdXa1RZUScOIls9BjZUMAk8AycFIQcqAXBQYlJtUyU=","r":0.35},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BWwAKFplAWUGIlQIVD8FMQNqAzQAZFFqVHIGZwA2VnJQM111DiFXPw4rAmQFWFBpUGAGOlM2AjNdaFN1V2xQZgVmADtaXgFpBjRUalRlBWUDZgM6AHFRI1Q4BmcAPFZbUCZdcQ5oV2IOaAInBXNQeVB0BmJTOQJ2","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B24NJQo1VDAEIFUJVT5UYAduVmFSNlRuACYFZAcxWn4FZgoiDCMHb1ZzVTMEWVduV2cBPVcxAzNTZAAmBzwBNwdkDTYKDlQ8BDZVa1VkVDQHYlZkUiNUJgBsBWQHO1pXBXMKJgxqBzNWM1VwBHJXfldzAWVXPQN3","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B24AKA8wVDAOKgBcB2wNOQFoAzQAZAM5BCIEZQQyV3MAYwAoXnFQOAMmCG5WCwM6U2MHO1A\/X3sAaQJmAzQCMQdeADMPMFRoDmsAMwc0DWsBcwNyADsDYARqBFsEJldzADsAaV40UHcDIQhyViQDNlM6B3A=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmsIIA0yVjIHIwJeVj0EMFA5ADdUN1NgU3UEZVBmUHRQM1x0WnUHb1N2AGZUCQY\/BjZQbAJsBD8HIQRtV2EFMgJlCA0NP1YzB2wCMlZkBGxQMwAnVHNTPVMyBGpQXVByUCBcO1owBzdTNQAlVCIGLwYiUDQCaARw","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQJIQ4xVDABJVUJVT4BNVM6UmVRMgM4UXcGZwcxV3MBYlpyW3QDawInCW8HWg00ADACPgVjBDdQYVF3UGtXYQ1uCTIOClQ8ATNVa1VkAWFTNFJmUSADcVE9BmcHO1daAXdadls9AzMCYQk7ByMNKQAtAnMFNwQ7UCY=","r":0.42},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B25ZcVlmUDRSdgdbB2wGMlI7ADRUO1ZsVnAEZQYwACRXNAwkCiUGbgEkUjQPUgI7V2cDP1E3BTVXYQchUGtabAdkWWJZXVA4UmAHOQc2BmZSMQA2VCVWJFY6BGUGOgANVyEMIApsBjYBYVJhDysCJld6A3JRYwU6VyE=","r":0.44}];
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