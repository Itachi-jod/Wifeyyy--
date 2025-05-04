document.addEventListener('DOMContentLoaded', () => {
  const lockScreen = document.getElementById('lock-screen');
  const unlockBtn = document.getElementById('unlock-btn');
  const passwordInput = document.getElementById('password-input');
  const errorMsg = document.getElementById('error-msg');

  unlockBtn.addEventListener('click', () => {
    const pass = passwordInput.value.trim();
    if (pass === 'ISHMA+ASHIB') {
      lockScreen.style.display = 'none';
      startConfetti();
      const audio = document.getElementById('bgm');
      audio.muted = false;
      audio.play();
    } else {
      errorMsg.textContent = 'Incorrect password! Try again.';
    }
  });
});

function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 150,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    tilt: Math.floor(Math.random() * 10) - 10,
    tiltAngle: 0,
    tiltAngleIncrement: (Math.random() * 0.07) + 0.05
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt, p.y);
      ctx.lineTo(p.x, p.y + p.tilt + p.r);
      ctx.stroke();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.tiltAngle += p.tiltAngleIncrement;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.d);
      p.tilt = Math.sin(p.tiltAngle - i / 3) * 15;

      if (p.y > canvas.height) {
        p.x = Math.random() * canvas.width;
        p.y = -20;
      }
    }
  }

  draw();
}
