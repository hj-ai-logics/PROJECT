const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');

themeToggle.addEventListener('click', () => {
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  contactForm.reset();
});
