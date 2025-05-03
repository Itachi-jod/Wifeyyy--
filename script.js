document.addEventListener('click', () => {
  const bgm = document.getElementById('bgm');
  bgm.muted = false;
  bgm.play();
}, { once: true });

// Floating hearts
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}, 500);

// Sparkle effect
setInterval(() => {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.animationDuration = (1 + Math.random() * 2) + 's';
  sparkle.style.width = Math.random() * 15 + 'px';
  sparkle.style.height = sparkle.style.width;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 2000);
}, 200);
