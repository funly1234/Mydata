(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2pacgA\/B2MBJQlVVT4HMwNqUWUAb15lBiAFZAUzUHRTMAggDiEDa1N2CG5WCw00BDQBPQVjVmVQZQQiV2xVYwNgWmEABAdvATMJN1VkB2cDb1FkAHFeLAZqBWQFOVBdUyUIJA5oAzNTNwg9VnINKQQpAXAFN1ZpUCY=","r":0.35},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQLIwA\/UDQPK1UJUToHM1I7UGdXMgAyByEBYAQyBiJQMwEpAS4MZFRxCG4EWVZvVmYFOVc0AzgGIFE4AjRVYg1qCw4AMlA1D2RVZFFqB2BSNlB3V3AAbgdmAW8ECQYkUCABZgFrDDpUMggtBHJWf1ZyBWFXPQN3","r":0.47},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AWhddQs0AmYHI1UJAmkCNgFoV2ACZlJpVHIHZgI0BSEHZF52XHMHbw8qVzFWC1duVWVQbAVjBzcGMFZwBzxTZQFiXWYLDwJqBzVVawIzAmIBZFdhAnNSIFQ4B2YCPgUIB3Feclw6BzMPaldyViBXflVxUDQFbwdz","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD0PJwk2UTUBJQFdAmlUYFY\/UmVZPVdtUXcKawUzVHBUN1tzDSJXPwciVTMOUwM6BDQFOVA1AzIANQYgBT5XYVQ3DzQJDVE5ATMBPwIzVDRWM1JnWShXJVE9CmsFOVRZVCJbdw1rV2IHYVVwDngDKgQgBWFQOgN3","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AmsKIg8wDWlTdwFdUzgGMlozAjUFYQU\/BiAEZQM1BiIMb1tzCSZXP1N2CW8BXAE4VmYNMQdoAiZROANnVWIGNQJbCjkPMA0xUzYBMlNgBmBaKAJzBT4FZgZoBFsDIQYiDDdbMgljV3BTcQlzAXMBNFY\/DXo=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDlddQA\/B2NVcQBcBm1QZAZvVmEFZlJhAyUBYAUzAiYEZwggAC8EbA4rCW8BXFNqADAGOgRqBT4DJQpjCD5WYVA3XVgAMgdiVT4AMAY0UDgGZVZxBSJSPANiAW8FCAIgBHQIbwBqBDQOaAksAXdTegAkBmIEbgVx","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz4BKVlmB2MCJlQIA2gHM1A5VmEAY19sU3VUNQYwVnICYQoiCCcNZQ4rUDYHWgU8ADAMMFI0Xm4GMQEnV2xbbVc0ATpZXQdvAjBUagMyB2dQPFZhAHFfLVM\/VDUGOlZbAnQKJghuDT0OblBrByMFIQAtDH1SYF5hBnA=","r":0.47},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDkIIF5hA2cCJlQIBW5TZ1M6UWYDYAA7U3ULagcxASUCYV11AC8Daw8qUzUFWFRtUmICPgRiAzBQYQMlUmkFM1AzCDNeWgNrAjBUagU0UzNTNFFlA3IAclM\/C2oHOwEMAnRdcQBmAzMPbFNhBSFUcFJ\/AnMENgM8UCY=","r":0.42}];
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