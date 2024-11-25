function updateClock() {
    // Get the current time
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Determine AM or PM
    var ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // Adjust 0 to display 12

    // Add leading zeros to single-digit numbers
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Find the clock element and update its content
    var clockElement = document.querySelector('.clock');
    clockElement.textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to ensure the clock starts immediately
updateClock();




