function startCountDown() {
    userDate = document.getElementById("datetime").value;
    countDownDate = new Date(userDate).getTime();
    countdownInterval = document.getElementById("display");
    if (isNaN(countDownDate)) {
        document.getElementById("display").innerHTML = "Invalid date. Please try again.";
        return;
    }
    clearInterval(window.countdownInterval);
    Window.countdownInterval = setInterval(function () {
        now = new Date().getTime();
        differnce = countDownDate-now;
        days = Math.floor(differnce / (1000 * 60 * 60 * 24));
        hours = Math.floor((differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((differnce % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((differnce % (1000 * 60)) / 1000);
        document.getElementById("display").innerHTML = days+" d  "+hours+" h  "+minutes+" m  "+seconds+" s";
        
        if (differnce<0) {
            clearInterval(window.countdownInterval);
            document.getElementById("display").innerHTML = "EXPIRED DATETIME";
        }
    }, 1000);
}
