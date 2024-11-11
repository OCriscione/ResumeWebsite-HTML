function myFunction() {
   var element = document.body;
   element.classList.toggle("light-mode");
}


function toggleLightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var stickyHeader = document.getElementById('stickyHeader');
    stickyHeader.classList.toggle("light-mode");
}

function updateTimer() {
    // Set your graduation date here
    const graduationDate = new Date("2024-08-09T00:00:00Z").getTime();
    const now = new Date().getTime();
    
    // Calculate the difference in time between now and the graduation date
    const distance = now - graduationDate;

    // Check if the graduation date is in the past
    if (distance < 0) {
        document.getElementById("graduation-timer").innerHTML = "Not Graduated Yet";
        return;
    }

    // Calculate the time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the timer display
    document.getElementById("graduation-timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s since I graduated`;
}

// Update the timer every second
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
