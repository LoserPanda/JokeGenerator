function hae() {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //document.getElementById("demo").innerHTML =
                //    this.responseText;
                var teksti = this.responseText;
                var obj = JSON.parse(teksti);
                document.getElementById("demo").innerHTML =
                    obj.value[0].joke;
            }
        };
        req.open("GET", "https://api.icndb.com/jokes/random/1", true);
        req.send();
}