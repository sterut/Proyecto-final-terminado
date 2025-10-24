// script.js: nav toggles, footer year, lazy fade
document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('footer p') || null;
  if (year) year.textContent = `© ${new Date().getFullYear()} Cultura CABA`;

  // intersection observer for fade-in
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('fade-in');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('main article, .hero, .card').forEach(el => io.observe(el));
});


