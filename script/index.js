const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links-mobile');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  navLinks.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  navLinks.style.display = 'none';
});

navLinks.forEach(link =>
link.addEventListener('click', () => {
  navLinks.style.display = 'none';
}));
