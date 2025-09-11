function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = '<img src="img/icon.svg" style="width:20px;height:20px;">';
  document.body.appendChild(heart);

  // Random position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Adjust frequency
// setInterval(createHeart, 1500);

// Run animation for 20 seconds only
const heartInterval = setInterval(createHeart, 1500);
setTimeout(() => {
  clearInterval(heartInterval);
}, 10000);
