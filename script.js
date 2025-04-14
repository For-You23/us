function showApology() {
    document.querySelector('.heart-beat').style.display = 'none';
    document.getElementById('apologyCard').classList.remove('hidden');
  }
  
  function startGame() {
    document.getElementById('apologyCard').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
  
    let score = 0;
    const container = document.getElementById('heart-container');
  
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 90 + '%';
      heart.onclick = () => {
        score++;
        heart.remove();
        document.getElementById('score').textContent = `Hearts Collected: ${score} / 10`;
        if (score >= 10) {
          clearInterval(interval);
          document.getElementById('game').classList.add('hidden');
          document.getElementById('finalMessage').classList.remove('hidden');
        }
      };
      container.appendChild(heart);
  
      setTimeout(() => heart.remove(), 4000);
    }, 600);
  }
  
  function forgive() {
    document.getElementById('finalMessage').classList.add('hidden');
    document.getElementById('forgiven').classList.remove('hidden');
  
    // Trigger confetti and sparkles after forgiveness
    triggerConfetti();
    createSparkles();
  }
  
  function notYet() {
    alert("Okay... I'll wait. 🥺 Love you always.");
  }
  
  // Confetti Effect
  function triggerConfetti() {
    const confettiContainer = document.body;
  
    for (let i = 0; i < 100; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti');
      confettiPiece.style.left = Math.random() * 100 + '%';
      confettiPiece.style.animationDuration = `${Math.random() * 2 + 2}s`;
      confettiContainer.appendChild(confettiPiece);
    }
  }
  
  // Floating Sparkles
  function createSparkles() {
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      document.body.appendChild(sparkle);
  
      // Remove sparkles after animation is done
      setTimeout(() => sparkle.remove(), 6000);
    }
  }
  