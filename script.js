// script.js
const correctPassword = "ISHMA+ASHIB";

function unlockSite() {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");
  if (input === correctPassword) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    typeMessage();
  } else {
    errorMsg.textContent = "Wrong password! Try again.";
  }
}

const message = `My dearest love 💖,\n\nThe moment we met, I knew my life would never be the same. From the very first glance, your eyes captured my heart, and your smile forever etched itself in my soul 🌟. I can’t explain the warmth I felt when I saw you for the first time — like the sun was shining just for me 🌞.\n\nYou are the song in my heart 🎶, the joy in my day 🌅, the love I never knew I was missing. With you, everything feels like magic ✨. Every moment spent with you is a treasure, and every second apart only makes my heart grow fonder 💓.\n\nYou have this incredible way of making life feel so much more beautiful, simply by being by my side 🌸. Your laugh, your voice, your touch — every little thing about you makes my heart race and my world brighter 🌈.\n\nYou’ve stood by me through everything, lifting me up when I’ve fallen, showing me that love is not just a feeling, but an action, a choice, and a commitment 👫. With every day we share, I am more certain that I am the luckiest person alive to call you my love 🥰.\n\nI promise to hold your hand through every step of this journey called life 🌍. Through the highs and the lows, the tears and the laughter, I will be here for you, forever and always 🤞. My heart is yours, entirely and completely 💖.\n\nAs we walk through life together, I want to make every day feel as special as the first day we met. I want to be your partner, your best friend, and the person you can always turn to 🫶. I will love you more with every breath I take, and cherish you beyond what words can express 🧡.\n\nYou are the love of my life, my forever and always 💍. Thank you for choosing me, for believing in us, and for making my life so incredibly beautiful 🥺. I will love you, now and always, more than you could ever imagine, until the end of time ⏳.`;

function typeMessage() {
  let i = 0;
  const speed = 20;
  const textBox = document.getElementById("typed-text");
  function type() {
    if (i < message.length) {
      textBox.innerHTML += message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
