/* ======================
   HOME.JS
   · Hero slideshow  — random 3-5 s auto-play, pause-on-hover, prev/next, dots, progress bar
   · Product carousel — transform-based horizontal scroll, prev/next, touch + mouse drag
   · Featured products grid — 6 curated cards
   · Isometric grid — 6 3D-effect showcase tiles
   · Newsletter form  — submit feedback
   ====================== */

/* ─────────────────────────────
   PRODUCT DATA
─────────────────────────────── */
const HOME_PRODUCTS = [
  { id:1,  name:'Structured Wool Coat',  category:'outerwear', price:299, badge:'New',        image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
  { id:2,  name:'Merino Knit Sweater',   category:'tops',      price:129, badge:null,         image:'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80' },
  { id:3,  name:'Wide Leg Trousers',     category:'bottoms',   price:149, badge:null,         image:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80' },
  { id:4,  name:'Linen Overshirt',       category:'tops',      price:109, badge:null,         image:'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=600&q=80' },
  { id:5,  name:'Tailored Blazer',       category:'outerwear', price:245, badge:null,         image:'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80' },
  { id:6,  name:'Slim Raw Denim',        category:'bottoms',   price:165, badge:null,         image:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80' },
  { id:7,  name:'Silk Crepe Blouse',     category:'tops',      price:189, badge:'Bestseller', image:'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80' },
  { id:8,  name:'Cashmere Turtleneck',   category:'tops',      price:219, badge:null,         image:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80' },
  { id:9,  name:'Leather Trench Coat',   category:'outerwear', price:599, badge:'Limited',    image:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80' },
  { id:10, name:'Pleated Midi Skirt',    category:'bottoms',   price:139, badge:null,         image:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80' },
  { id:11, name:'Cotton Crew Tee',       category:'tops',      price:69,  badge:null,         image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80' },
  { id:12, name:'Cargo Utility Pants',   category:'bottoms',   price:159, badge:'New',        image:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80' },
];

/* ═══════════════════════════════════════════
   HERO SLIDESHOW
   ─ Auto-advances on a random 3–5 s interval
   ─ Pauses on hover (and when tab is hidden)
   ─ Prev / Next arrows  +  dot navigation
   ─ Thin progress bar sweeps across each slide
   ─ Touch swipe  +  keyboard left/right
═══════════════════════════════════════════ */

function initSlideshow() {
  const root = document.getElementById('slideshow');
  if (!root) return;

  const slides   = Array.from(root.querySelectorAll('.slide'));
  const dots     = Array.from(root.querySelectorAll('.dot'));
  const prevBtn  = root.querySelector('.slideshow__arrow--prev');
  const nextBtn  = root.querySelector('.slideshow__arrow--next');
  const progress = root.querySelector('.slideshow__progress');

  /* Random interval between 3 000 – 5 000 ms */
  const INTERVAL_MIN = 3000;
  const INTERVAL_MAX = 5000;
  function randomInterval() {
    return Math.floor(Math.random() * (INTERVAL_MAX - INTERVAL_MIN + 1)) + INTERVAL_MIN;
  }

  let current  = 0;
  let timer    = null;
  let interval = randomInterval(); // store current slide's interval for progress bar

  /* ── Activate a slide by index ── */
  function goTo(rawIndex) {
    const next = ((rawIndex % slides.length) + slides.length) % slides.length;

    // Deactivate current slide and dot
    slides[current].classList.remove('active');
    slides[current].setAttribute('aria-hidden', 'true');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');

    current = next;

    // Activate incoming slide and dot
    slides[current].classList.add('active');
    slides[current].setAttribute('aria-hidden', 'false');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');

    startProgress();
  }

  /* ── Sweep the progress bar across the current interval ── */
  function startProgress() {
    if (!progress) return;
    // Reset without animation, then re-trigger
    progress.style.transition = 'none';
    progress.style.width      = '0%';
    void progress.offsetWidth; // force reflow
    progress.style.transition = `width ${interval}ms linear`;
    progress.style.width      = '100%';
  }

  /* ── Schedule the next auto-advance ── */
  function scheduleNext() {
    clearTimeout(timer); // use timeout so each slide can have its own duration
    interval = randomInterval();
    startProgress();
    timer = setTimeout(() => {
      goTo(current + 1);
      scheduleNext();
    }, interval);
  }

  function play()  { scheduleNext(); }
  function pause() { clearTimeout(timer); timer = null; }

  /* ── Pause progress bar animation visually while paused ── */
  function pauseProgress() {
    if (!progress) return;
    const computed = window.getComputedStyle(progress).width;
    progress.style.transition = 'none';
    progress.style.width      = computed; // freeze at current width
  }

  /* ── Arrow buttons ── */
  if (prevBtn) prevBtn.addEventListener('click', () => { pause(); goTo(current - 1); play(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { pause(); goTo(current + 1); play(); });

  /* ── Dot navigation ── */
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { pause(); goTo(i); play(); });
  });

  /* ── Pause on hover, resume on leave ── */
  root.addEventListener('mouseenter', () => { pause(); pauseProgress(); });
  root.addEventListener('mouseleave', () => play());

  /* ── Pause when browser tab becomes hidden ── */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { pause(); pauseProgress(); }
    else play();
  });

  /* ── Touch swipe support ── */
  let touchStartX = 0;
  root.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  root.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 45) {
      pause();
      dx < 0 ? goTo(current + 1) : goTo(current - 1);
      play();
    }
  });

  /* ── Keyboard navigation (focus the section first) ── */
  root.setAttribute('tabindex', '0');
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { pause(); goTo(current - 1); play(); }
    if (e.key === 'ArrowRight') { pause(); goTo(current + 1); play(); }
  });

  play(); // start auto-play
}

/* ═══════════════════════════════════════════
   SHARED CARD BUILDER
═══════════════════════════════════════════ */

function buildCard(product) {
  const badge = product.badge
    ? `<span class="product-card__badge">${product.badge}</span>`
    : '';
  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-card__img-wrap">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-card__img"
          loading="lazy"
        />
        ${badge}
        <button class="product-card__quick-add" data-id="${product.id}">
          + Add to Cart
        </button>
      </div>
      <p class="product-card__category">${product.category}</p>
      <h3 class="product-card__name">${product.name}</h3>
      <p class="product-card__price">$${product.price}</p>
    </article>
  `;
}

/* Attach add-to-cart click listeners inside a container */
function bindAddToCart(container) {
  container.querySelectorAll('.product-card__quick-add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation(); // don't bubble into carousel drag
      const id      = parseInt(btn.dataset.id, 10);
      const product = HOME_PRODUCTS.find(p => p.id === id);
      if (product) addToCart(product);
    });
  });
}

/* ═══════════════════════════════════════════
   FEATURED PRODUCTS  (3-column grid)
═══════════════════════════════════════════ */

function initFeaturedGrid() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;

  const picks = [1, 7, 5, 3, 9, 12]
    .map(id => HOME_PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  grid.innerHTML = picks.map(buildCard).join('');
  bindAddToCart(grid);
}

/* ═══════════════════════════════════════════
   PRODUCT CAROUSEL
   ─ Transform-based horizontal scroll (no scroll overflow)
   ─ Prev / Next buttons with disabled states
   ─ Touch swipe  +  mouse click-drag on desktop
   ─ Responsive: card count adjusts per viewport width
═══════════════════════════════════════════ */

function initCarousel() {
  const track   = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track) return;

  // Build cards
  track.innerHTML = HOME_PRODUCTS.map(p =>
    `<div class="carousel-item">${buildCard(p)}</div>`
  ).join('');
  bindAddToCart(track);

  const GAP = 24; // must stay in sync with .carousel-track CSS gap
  let currentIndex = 0;

  /* How many full cards fit in the visible viewport */
  function visibleCount() {
    const w = window.innerWidth;
    if (w >= 1100) return 4;
    if (w >= 900)  return 3;
    if (w >= 600)  return 2;
    return 1;
  }

  /* Pixel width of one carousel item (measured from DOM) */
  function cardWidth() {
    const item = track.querySelector('.carousel-item');
    return item ? item.getBoundingClientRect().width : 260;
  }

  /* Furthest index we can scroll to so the last card stays fully visible */
  function maxIndex() {
    return Math.max(0, HOME_PRODUCTS.length - visibleCount());
  }

  /* Translate the track to the target index */
  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex()));
    const offset = currentIndex * (cardWidth() + GAP);
    track.style.transform = `translateX(-${offset}px)`;
    syncButtons();
  }

  /* Disable arrow buttons at the extremes */
  function syncButtons() {
    if (prevBtn) prevBtn.disabled = currentIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex();
  }

  /* ── Arrow buttons ── */
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  /* ── Touch swipe ── */
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) dx < 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
  });

  /* ── Mouse drag (desktop) ── */
  let dragStartX  = 0;
  let isDragging  = false;

  track.addEventListener('mousedown', e => {
    isDragging = true;
    dragStartX = e.clientX;
    track.style.cursor = 'grabbing';
    // Disable CSS transition while dragging for instant feedback
    track.style.transition = 'none';
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    // Live drag: offset track by the delta without snapping
    const dx     = e.clientX - dragStartX;
    const base   = currentIndex * (cardWidth() + GAP);
    track.style.transform = `translateX(${-base + dx}px)`;
  });

  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor  = '';
    track.style.transition = ''; // restore CSS transition
    const dx = e.clientX - dragStartX;
    // Snap: more than 60 px drag counts as intentional
    if (Math.abs(dx) > 60) {
      dx < 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
    } else {
      goTo(currentIndex); // snap back to current
    }
  });

  /* Prevent text selection during drag */
  track.addEventListener('dragstart', e => e.preventDefault());

  /* Re-calculate on resize (card width changes between breakpoints) */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => goTo(currentIndex), 100);
  }, { passive: true });

  syncButtons(); // initial state
}

/* =============================================
   SIX-TO-KNOW ACCORDION CARDS
   CSS handles the elastic expand; JS builds markup and binds events.
   ============================================= */

const STK_PRODUCTS = [
  /* — Row 1 — */
  { id:11, name:'Structured Wool Coat',    category:'Outerwear',   price:299, badge:'New',       image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
  { id:2,  name:'Merino Knit Sweater',     category:'Tops',        price:129, badge:null,         image:'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80' },
  { id:10, name:'Tailored Chinos',         category:'Bottoms',     price:145, badge:'Sale',       image:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80' },
  /* — Row 2 — */
  { id:7,  name:'Silk Crepe Blouse',       category:'Tops',        price:189, badge:'Bestseller', image:'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80' },
  { id:13, name:'Leather Trench Coat',     category:'Outerwear',   price:599, badge:'Limited',    image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80' },
  { id:15, name:'Waxed Canvas Tote',       category:'Accessories', price:89,  badge:'New',        image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80' },
  /* — Row 3 — */
  { id:3,  name:'Wide-Leg Linen Trousers', category:'Bottoms',     price:165, badge:null,         image:'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80' },
  { id:8,  name:'Draped Midi Dress',       category:'Dresses',     price:225, badge:'New',        image:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80' },
  { id:14, name:'Cashmere Scarf',          category:'Accessories', price:119, badge:'Sale',       image:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80' },
];

function initAccordionCards() {
  const container = document.getElementById('stk-accordion');
  if (!container) return;

  container.innerHTML = STK_PRODUCTS.map(p => {
    const badge = p.badge
      ? `<span class="stk-card__badge">${p.badge}</span>`
      : '';

    return `
      <article
        class="stk-card"
        role="listitem"
        tabindex="0"
        aria-label="${p.name}, $${p.price}"
      >
        <div class="stk-card__img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          ${badge}
        </div>
        <span class="stk-card__collapsed-label">${p.name}</span>
        <div class="stk-card__info">
          <span class="stk-card__cat">${p.category}</span>
          <h3 class="stk-card__name">${p.name}</h3>
          <p class="stk-card__price">$${p.price}</p>
          <button
            class="stk-card__btn"
            data-id="${p.id}"
            aria-label="Add ${p.name} to cart"
          >Add to Cart</button>
        </div>
      </article>
    `;
  }).join('');

  // Add-to-cart buttons
  container.querySelectorAll('.stk-card__btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const product = STK_PRODUCTS.find(p => p.id === parseInt(btn.dataset.id, 10));
      if (product) addToCart(product);
    });
  });

  // Keyboard: Enter on focused card fires the add button
  container.querySelectorAll('.stk-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') card.querySelector('.stk-card__btn')?.click();
    });
  });
}

/* ═══════════════════════════════════════════
   NEWSLETTER FORM
═══════════════════════════════════════════ */

function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn   = form.querySelector('button[type="submit"]');

    if (!input || !input.value.trim()) {
      showToast('Please enter your email address.', 'error');
      return;
    }

    btn.textContent  = 'Subscribed \u2713';
    btn.disabled     = true;
    input.disabled   = true;
    input.style.opacity = '0.6';

    showToast('Welcome to the KLUGH circle!', 'success');
  });
}

/* ═══════════════════════════════════════════
   INIT — runs once DOM is ready
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initSlideshow();
  initFeaturedGrid();
  initCarousel();
  initAccordionCards();
  initNewsletter();
});
