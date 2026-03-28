// Sticky nav shadow
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('#mobileMenu a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// Contact form (placeholder — no backend)
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Thank you! We will get back to you soon.';
  e.target.reset();
  setTimeout(() => note.textContent = '', 4000);
}

// Scroll-reveal: fade in sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.pillar, .product-card, .trust-item, .comp-col').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
