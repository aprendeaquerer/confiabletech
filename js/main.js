// ========================================
// Confiable Tech — Main Script
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll animations (Intersection Observer) ---
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  animatedEls.forEach((el) => observer.observe(el));

  // --- Header scroll effect ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  });

  // --- Mobile navigation ---
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  let overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function closeNav() {
    navList.classList.remove('active');
    navToggle.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openNav() {
    navList.classList.add('active');
    navToggle.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  navToggle.addEventListener('click', () => {
    navList.classList.contains('active') ? closeNav() : openNav();
  });

  overlay.addEventListener('click', closeNav);

  // Close mobile nav on link click
  navList.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  // --- Animated counters ---
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          animateCounter(el, target);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => counterObserver.observe(el));

  function animateCounter(el, target) {
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // --- Contact form ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show success state
      const parent = form.parentElement;
      form.style.display = 'none';

      const success = document.createElement('div');
      success.className = 'form-success';
      success.innerHTML = `
        <div class="form-success-icon">&#10003;</div>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. We'll get back to you soon.</p>
      `;
      parent.insertBefore(success, form);
    });
  }
});
