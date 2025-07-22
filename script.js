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
