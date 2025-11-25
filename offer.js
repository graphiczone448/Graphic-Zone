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


// snowing

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("snow-canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas to cover the entire page
    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const snowflakes = [];
    const snowflakeShapes = ["❄", "✻", "✼", "✺"]; // Snowflake symbols

    function createSnowflakes() {
      const total = 140; // Adjust the number of snowflakes
      for (let i = 0; i < total; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 24 + 8, // Snowflake size
          speed: Math.random() * 1 + 0.5, // Snowflake speed
          shape: snowflakeShapes[Math.floor(Math.random() * snowflakeShapes.length)],
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
    }

    function drawSnowflakes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((flake) => {
        ctx.globalAlpha = flake.opacity;
        ctx.font = `${flake.size}px Arial`;
        ctx.fillStyle = "white";
        ctx.fillText(flake.shape, flake.x, flake.y);
      });
      updateSnowflakes();
    }

    function updateSnowflakes() {
      snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
      });
    }

    function animateSnowflakes() {
      drawSnowflakes();
      requestAnimationFrame(animateSnowflakes);
    }

    createSnowflakes();
    animateSnowflakes();
  });