function myFunction() {
    var diff = parseInt(document.getElementById("diffId").value);
    mySecondFunction(diff);
}

function mySecondFunction(diff) {
    var oldDateObj = new Date();
    var newDateObj = new Date(oldDateObj.getTime() + diff * 60000).getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = newDateObj - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (hours < 10) {
            hours = "0" + hours;
            Number(hours);
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
            Number(minutes);
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
            Number(seconds);
        }
        document.getElementById("countDownClock").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countDownClock").id = "yourTimeIsUp";
            document.getElementById("yourTimeIsUp").innerHTML = "YOUR TIME IS UP!";
        }
    }, 1000);
}