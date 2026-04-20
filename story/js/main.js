/**
 * js/main.js — Children's Bible Stories Website
 * Handles: mobile nav, active links, contact form, scroll reveal
 */

/* ============================================================
   1. MOBILE NAV TOGGLE
   Opens/closes the dropdown nav on small screens.
   Toggles .nav-open on the <nav> and aria-expanded on the button.
   ============================================================ */
const navbar    = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    // Determine the new open state (opposite of current)
    const isOpen = navbar.classList.toggle('nav-open');

    // Update ARIA attribute so screen readers know the state
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when any link inside it is clicked (good UX on mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================================
   2. ACTIVE NAV LINK
   Compares the current page URL to each nav link's href.
   Adds class "active" to the matching link so CSS can style it.
   ============================================================ */
(function highlightActiveLink() {
  // Get just the filename part of the current URL  (e.g. "stories.html")
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();

    // Mark as active if filenames match
    if (linkFile === currentFile) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   3. CONTACT FORM — show success message & reset
   Intercepts the submit event, validates naturally via 'required'
   attributes, then shows a friendly confirmation message.
   ============================================================ */
const contactForm    = document.getElementById('contact-form');
const formSuccess    = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Stop the browser from navigating / sending data
    e.preventDefault();

    // Show the success message
    if (formSuccess) {
      formSuccess.style.display = 'block';
    }

    // Reset all form fields
    contactForm.reset();

    // Scroll the success message into view smoothly
    formSuccess?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide the success message after 5 seconds (optional UX nicety)
    setTimeout(() => {
      if (formSuccess) formSuccess.style.display = 'none';
    }, 5000);
  });
}

/* ============================================================
   4. SCROLL REVEAL
   Uses IntersectionObserver to watch for elements with class
   "reveal". When they enter the viewport, the "visible" class
   is added, triggering a CSS fade-up animation.
   ============================================================ */
(function initScrollReveal() {
  // IntersectionObserver is not available in very old browsers;
  // bail out gracefully if it is missing.
  if (!('IntersectionObserver' in window)) {
    // Make everything visible immediately as a fallback
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stop watching once revealed — no need to re-animate
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,       // trigger when 12% of element is visible
      rootMargin: '0px 0px -40px 0px' // slight offset from bottom
    }
  );

  // Attach observer to every element marked for reveal
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
