(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoMJF1iUzcPKwJeAmkANARtBjIFZgQ0UXcKawM1UXUHZAoiXnFQOA8qVTMEWVRtUmIHO1E3AzNXYQAmBj1abFMwDDddWVM7Dz0CPAIyAGUEZwY2BXQEdlE9CmsDP1FcB3EKJl44UGQPalVwBHJUfVJ2B2NROwN3","r":0.15},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=UzoAKAs0VzNWcgZaA2hWYlozAzdUN1BjACZXNgQyBiIBYgoiCCdUPA8qUjQPUgA5BjZWalM2X25RZFdxAjlTZVMwADsLD1c\/VmQGOAMzVjNaOQM7VCVQIgBsVzYEOAYLAXcKJghuVGEPaVJ3D3kAKQYiVjJTOV8r","r":0.11},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=Bm8PJwk2UzcCJlMPVT4DNwBpDDhRM1NkUXcDYlRiVXEHZF52CCdQOFRxVzEAXQY\/VmYFOVM1X29WYVdxAzgHMQZlDzQJDVM7AjBTbVVlA2QAZAw\/USBTIVE9A2JUaFVYB3FecghuUGBUMVdjACQGIlZ7BXRTYV9gViA=","r":0.38},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=BG0LIwwzAWVWcgJeBm0ANFQ9DTlTMVViBCJTMlVjU3cHZA0lW3QEbAciAWdTDgI7BDQMMFUzU2FdagQiBD8GMARnCzAMCAFpVmQCPAY2AGdUMA06UyJVJwRoUzJVaVNeB3ENIVs9BDwHYwEkUyUCKwQgDGhVP1Mn","r":0.26}];
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