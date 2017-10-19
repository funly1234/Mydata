(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DGVacg0yA2cAJANfBW4GMgFoVWEFZgc0XXtUNQM1VXFQMwEpCiVUPAInA2UFWAY\/ADAFOQJnUWABNAosUGtbbQxvWmENCQNrADIDPQU1BmEBYVVsBXQHdV0xVDUDP1VYUCYBLQpsVGECZAMmBXMGLwAkBWECaFEl","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQKIgs0VzMFIVUJBm0FMVA5BjJVNwcyU3VTMgM1Wn5TMAEpCSZTO1RxBmBUCQU8BDQAPFcxADJUY1B2CTIGMA1uCjELD1c\/BTdVawY2BWNQNgYxVSQHdVM\/UzIDP1pXUyUBLQlvU2RUNAYjVCIFLAQgAGRXPQB0","r":0.18},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoAKAg3AWUDJwBcUTpTZwRtBjJTMQc9ByEEZQUzBSEMbwggCyQDa1F0UjQCXwY\/ATFWagdhAjNRYVF3AzgGMFMwADsIDAFpAzEAPlFhUzUEYgY\/UyIHdQdrBGUFOQUIDHoIJAttAzNRN1JhAiYGIgEsVicHNQI9USc=","r":0.28},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B24IIAA\/BWFTd1UJAGsGMlM6V2NRPwc8V3EFZFJkVXEMbwwkDCNTOwInCW9WC1ZvAzNRbVM1UWNVY1B2CTJSZAdkCDMABAVtU2FVawAwBmFTP1diUSAHdVc7BWRSblVYDHoMIAxqU2MCZQk6VnJWcgMuUSBTYVFuVSM=","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=B24PJwwzAmYBJQdbA2gDN1I7V2MEZAc0UHYGZwk\/BSFUNwkhWXYAaAInVTMDXgI7VGRSbgNlADAGNAUjV2wFMwdkDzQMCAJqATMHOQMzA2tSNldnBHUHdVA8BmcJNQUIVCIJJVk\/ADgCZFVwA3UCK1RwUjYDaQB0","r":0.25}];
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