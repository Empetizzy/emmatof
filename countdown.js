const originalCountdownDuration = 10* 24* 60* 60* 1000;
let countDownDate= new Date("March 10, 2024").getTime();


    var x = setInterval(function() {
    var now = new Date().getTime();
    
    var timeleft = countDownDate - now;
    
    if (timeleft <= 0) {
        clearInterval(x);
        countDownDate = new Date().getTime() + originalCountdownDuration;
        updateCountdown(originalCountdownDuration);
        startCountdown();
    }

    updateCountdown(timeleft);
},1000);


function updateCountdown(timeleft) {
    //calculate days, hours, minutes and seconds
    var days = Math.floor(timeleft/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeleft% (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((timeleft % (1000 * 60)) / 1000);

    //display the time left 
 document.getElementById("days").innerText = days < 10 ? "0" + days : days;
 document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
 document.getElementById("mins").innerText = mins < 10 ? "0" + mins : mins;
 document.getElementById("secs").innerText = secs < 10 ? "0" + secs : secs;
}

startCountdown();