document.addEventListener("DOMContentLoaded", function () {
  const lockScreen = document.getElementById("lock-screen");
  const mainContent = document.getElementById("main-content");
  const unlockBtn = document.getElementById("unlock-btn");
  const passwordInput = document.getElementById("password");

  unlockBtn.addEventListener("click", () => {
    const password = passwordInput.value.trim();
    if (password === "ISHMA+ASHIB") {
      lockScreen.classList.add("hidden");
      mainContent.classList.remove("hidden");
      document.getElementById("bgm").muted = false;
      launchConfetti();
    } else {
      alert("Wrong password! Try again.");
    }
  });

  function launchConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti(Object.assign({}, defaults, {
        particleCount: 50,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));

      confetti(Object.assign({}, defaults, {
        particleCount: 50,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);
  }
});
