(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkPJwg3BGAOKgZaVD9QZFA5ADcCZlFqXXsEZQQyUnZWNVlxCyQDawQhUDYGWwE4VGQGOlA1VWQHMlN1ATpbbQBjDzQIDARsDjwGOFRlUDBQNQA5AnNRI10xBGUEOFJfViBZdQttAzYEYlB1BnABKFRwBmJQOlUh","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz4JIVtkBWEHI1MPVD9RZVY\/VmFUMFdtXXsBYAYwU3cAY1tzCSYGbgMmUzUEWQY\/VGQBPQdhXm4GMQYgBD8GMFc0CTJbXwVtBzVTbVRlUTFWM1ZkVCVXJV0xAWAGOlNeAHZbdwlvBjIDZlN2BHIGL1RwAWUHbV4q","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=AGkOJltkAGQGIlAMBG8MOANqAzQCZlFrUnRWNwk\/U3cNbgwkAC8Gbg8qUjRUCQw1UGAEOFQ7XnpQOVA0VWJTYABZDj1bZAA8BmNQYwQ3DGoDcQNyAjlRMlI8VgkJK1N3DTYMZQBqBiEPLVIoVCYMOVA5BHM=","r":0.09},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UDlddQo1A2cPKwhUVj0BNVM6ATYHZAU2V3FQMQM1W39XNFpyCCcAaFF0UzUCX1BpU2MNMVQ6AzgHIVQ9ATdXYFA3XVgKOANmD2QIOFZkAWVTMAEmByAFa1c2UD4DDlt5VydaPQhiADBRN1N2AnRQeVN3DWlUPgN3","r":0.31},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=VD0OJgwzUzcFIQJeAGsGMlU8UWZWNVRnAyUKawQyASUNbl52W3QFbVJ3UzUPUlRtBjYBPQNlVWdTZQYgBD9bbVQ3DjUMCFM7BTcCPAAxBmZVNVFpVidUJgNvCmsEOAEMDXtecls9BTVSNlNgDytUcAYrAXADMVVqUyU=","r":0.33},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Vz5edgg3VDAPK1QIBm1RZQFoATYCYV5lU3VRMFBmWn5WNQwkXXJXP1VwAGYAXQQ9VGQBPVYwX2wHNlN1CDMCNFc0XmUIDFQ8Dz1UagY3UTEBZgE1AnNeLFM\/UTBQbFpXViAMIF07V2dVNgAyACQEIFR5AXBWZF9gB3E=","r":0.42}];
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