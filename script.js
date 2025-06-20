document.getElementById("unlock-btn").addEventListener("click", function () {
  const pass = document.getElementById("password").value;
  if (pass === "ISHMA+ASHIB") {
    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    showImages();
    launchConfetti();
  } else {
    alert("Wrong password, try again!");
  }
});

function showImages() {
  const imageUrls = [
    "https://i.ibb.co/1Y7FcPXQ/image.jpg",
    "https://i.ibb.co/213tWgYC/image.jpg",
    "https://i.ibb.co/6RdHqcKr/image.jpg",
    "https://i.ibb.co/9kdJvQmr/image.jpg",
    "https://i.ibb.co/bMCwfCXz/image.jpg",
    "https://i.ibb.co/844GNs39/image.jpg",
    "https://i.ibb.co/5hbPMNfm/image.jpg"
  ];

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  imageUrls.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
  });
}

function launchConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
}

// Load confetti script dynamically
const confettiScript = document.createElement('script');
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.head.appendChild(confettiScript);
