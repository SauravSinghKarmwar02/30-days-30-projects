// Get reference to clock digits
var hrs = document.getElementById('hrs');
var min = document.getElementById('min');
var sec = document.getElementById('sec');

// Update time every second
setInterval(() => {
    let currentTime = new Date();
    // Format hours, minutes and seconds with leading zeros if needed
    hrs.innerHTML =
        currentTime.getHours() < 10
            ? '0' + currentTime.getHours()
            : currentTime.getHours() % 12 || 12; // Convert 24hr time into 12hr time
    min.innerHTML =
        currentTime.getMinutes() < 10
            ? '0' + currentTime.getMinutes()
            : currentTime.getMinutes();
    sec.innerHTML =
        currentTime.getSeconds() < 10
            ? '0' + currentTime.getSeconds()
            : currentTime.getSeconds();
}, 1000);
