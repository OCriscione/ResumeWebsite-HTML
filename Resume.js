function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var stickyHeader = document.getElementById('stickyHeader');
    stickyHeader.classList.toggle("dark-mode");
}

function updateTimer() {
    const countDownDate = new Date("2024-08-09T00:00:00Z").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        document.getElementById("graduation-timer").innerHTML = "GRADUATED";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("graduation-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s left until I graduate`;
}

setInterval(updateTimer, 1000);
updateTimer();


function toggleNavMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
