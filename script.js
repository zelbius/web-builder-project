// Mobile menu toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Always start at top on refresh
window.addEventListener("beforeunload", () => window.scrollTo(0, 0));

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  const header = document.getElementById("navbar");
  header.classList.add("scrolled");
});

// Sticky header that becomes solid on scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 1){
    header.classList.add('header-solid');
  } else {
    header.classList.remove('header-solid');
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu after click
    if(!mobileMenu.classList.contains('hidden')){
      mobileMenu.classList.add('hidden');
    }
  });
});

// Fade-in on scroll for elements with .fade-up
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{ threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// set year in footer
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const sections = document.querySelectorAll(".fade-in");

  // Sticky header color change
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Scroll animations
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
