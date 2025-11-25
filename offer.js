// OFFER PAGE JAVASCRIPT

// DARK MODE SWITCH
const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // save mode
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });
}

// Load saved dark mode
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}


// COUNTDOWN TIMER
function startTimer() {
    let timeLeft = 3600; // 1 hour offer

    const timer = setInterval(() => {
        let hours = Math.floor(timeLeft / 3600);
        let minutes = Math.floor((timeLeft % 3600) / 60);
        let seconds = timeLeft % 60;

        document.getElementById("timer").innerHTML =
            `${hours}h : ${minutes}m : ${seconds}s`;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Offer Expired";
        }
    }, 1000);
}

startTimer();


// POPUP
window.onload = function () {
    setTimeout(() => {
        document.getElementById("popup").style.display = "flex";
    }, 2000);
};

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
function activateOffer() {
    localStorage.setItem("offer50", "active");
    window.location.href = "shop.html"; // or your shop page
}


