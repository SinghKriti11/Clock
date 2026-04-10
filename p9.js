let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");
let date = document.getElementById("date");

function updateClock(){
    let currentTime = new Date();

    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();

    let period = h >= 12 ? "PM" : "AM";

    h = h % 12;
    h = h ? h : 12;

    hrs.innerHTML = (h < 10 ? "0" : "") + h;
    min.innerHTML = (m < 10 ? "0" : "") + m;
    sec.innerHTML = (s < 10 ? "0" : "") + s;
    ampm.innerHTML = period;

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    date.innerHTML = currentTime.toLocaleDateString('en-US', options);
}

updateClock();
setInterval(updateClock, 1000);