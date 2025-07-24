
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.3
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  const toggleBtn = document.getElementById('theme-toggle');
  let isNight = false;

  toggleBtn.addEventListener('click', () => {
    isNight = !isNight;
    document.body.classList.toggle('night-mode', isNight);
    toggleBtn.textContent = isNight ? '🌙 NIGHT' : '🌞 DAY';
  });

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

const aboutText = `Hi, I'm Harshit 👋
I'm a developer who loves building creative and interactive web projects.
I enjoy coding pixel-perfect UIs with a touch of Minecraft-inspired design.`;

  let i = 0;
  const speed = 35; // typing speed in ms

  function typeWriter() {
    if (i < aboutText.length) {
      document.getElementById("typewriter-text").innerHTML += aboutText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typewriter effect when page loads
  window.addEventListener("load", typeWriter);

