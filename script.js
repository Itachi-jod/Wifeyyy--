window.addEventListener('load', () => {
  const lockScreen = document.getElementById('lock-screen');
  const unlockBtn = document.getElementById('unlock-btn');
  const passwordInput = document.getElementById('password-input');
  const errorMsg = document.getElementById('error-msg');
  const bgm = document.getElementById('bgm');

  unlockBtn.addEventListener('click', () => {
    const password = passwordInput.value.trim();
    if (password === "ISHMA+ASHIB") {
      lockScreen.style.display = "none";
      bgm.muted = false;
      bgm.play();
    } else {
      errorMsg.textContent = "Wrong password. Try again!";
    }
  });

  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
      unlockBtn.click();
    }
  });
});
