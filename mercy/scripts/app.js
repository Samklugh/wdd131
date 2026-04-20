/* ============================================================
   APP.JS  —  KLUGH Stores · Shared Application Module
   ============================================================
   Loaded on EVERY page before any page-specific script.
   Provides globally-scoped functions so cart.js, products.js,
   and home.js can call them without imports.

   Sections
   ────────
   1. Constants
   2. Storage  ·  getCart · saveCart
   3. Cart mutations  ·  addToCart · removeFromCart · updateQuantity
                         changeQuantity · clearCart
   4. Calculations  ·  calculateSubtotal · calculateShipping
                        calculateDiscount · calculateTotal · getItemCount
   5. UI  ·  updateCartBadge · showToast
   6. Navigation  ·  initNav
   7. Auto-init
   ============================================================ */


/* ════════════════════════════════
   1. CONSTANTS
════════════════════════════════ */

/** localStorage key for the cart array. */
const CART_KEY = 'klugh_cart';

/** Spend at or above this to get free shipping (in dollars). */
const FREE_SHIPPING_THRESHOLD = 150;

/** Flat shipping rate when threshold is not met (in dollars). */
const SHIPPING_RATE = 12;

/**
 * Recognised promo codes.
 * type 'percent'  → percentage discount off subtotal
 * type 'shipping' → free shipping
 */
const PROMO_CODES = {
  KLUGH10:  { type: 'percent',  value: 10,  label: '10% off'       },
  FREESHIP: { type: 'shipping', value: 0,   label: 'Free shipping'  },
  KLUGH20:  { type: 'percent',  value: 20,  label: '20% off'        },
};


/* ════════════════════════════════
   2. STORAGE
════════════════════════════════ */

/**
 * Read the current cart from localStorage.
 * @returns {Array<{id:number, name:string, category:string,
 *                  price:number, image:string, qty:number}>}
 */
function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    /* Corrupted data — start fresh */
    localStorage.removeItem(CART_KEY);
    return [];
  }
}

/**
 * Persist the cart array to localStorage, then refresh the nav badge.
 * @param {Array} items  Full cart array to save.
 */
function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadge();
}


/* ════════════════════════════════
   3. CART MUTATIONS
════════════════════════════════ */

/**
 * Add a product to the cart.
 * · If the product already exists → increment its qty by 1.
 * · Otherwise → push a new entry with qty = 1.
 * Fires a toast notification on success.
 *
 * @param {{ id:number, name:string, category:string,
 *           price:number, image:string }} product
 */
function addToCart(product) {
  if (!product || product.id == null) return;

  const cart     = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    /* Normalise the entry shape; guard against missing fields */
    cart.push({
      id:       product.id,
      name:     product.name     || 'Unnamed product',
      category: product.category || '',
      price:    Number(product.price) || 0,
      image:    product.image    || '',
      qty:      1,
    });
  }

  saveCart(cart);
  showToast(`"${product.name}" added to cart`, 'success');
}

/**
 * Remove a product from the cart entirely by its numeric id.
 * @param {number} id
 */
function removeFromCart(id) {
  const updated = getCart().filter(item => item.id !== id);
  saveCart(updated);
}

/**
 * Set the quantity of a cart item to an explicit value.
 * · qty < 1 is clamped to 1.
 * · qty > 99 is clamped to 99.
 * @param {number} id
 * @param {number} newQty
 */
function updateQuantity(id, newQty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  const clamped = Math.max(1, Math.min(99, Math.round(newQty)));
  item.qty = clamped;
  saveCart(cart);
}

/**
 * Increment or decrement a cart item's quantity by a delta.
 * Quantity floor is 1 — use removeFromCart() to delete an item.
 * @param {number} id
 * @param {number} delta  +1 or -1 (or any integer).
 */
function changeQuantity(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}

/**
 * Remove all items from the cart and clear the promo state.
 * Triggers updateCartBadge automatically via saveCart().
 */
function clearCart() {
  saveCart([]);
}


/* ════════════════════════════════
   4. CALCULATIONS
════════════════════════════════ */

/**
 * Sum price × qty for every cart item.
 * @param {Array} cart
 * @returns {number}
 */
function calculateSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/**
 * Return the shipping cost for a given subtotal (before discounts).
 * Free if the subtotal meets FREE_SHIPPING_THRESHOLD.
 * @param {number} subtotal
 * @returns {number}  0 (free) or SHIPPING_RATE.
 */
function calculateShipping(subtotal) {
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_RATE;
}

/**
 * Calculate the discount amount for a promo code applied to a subtotal.
 * Returns 0 for unknown, 'shipping', or invalid codes.
 * @param {number} subtotal
 * @param {string|null} promoCode  Uppercase code string, or null.
 * @returns {number}  Discount amount in dollars.
 */
function calculateDiscount(subtotal, promoCode) {
  if (!promoCode) return 0;
  const promo = PROMO_CODES[promoCode.toUpperCase()];
  if (!promo || promo.type !== 'percent') return 0;
  return subtotal * (promo.value / 100);
}

/**
 * Compute the full order total breakdown.
 * @param {Array}       cart
 * @param {string|null} promoCode  Active promo code, or null.
 * @returns {{
 *   subtotal: number,
 *   discount: number,
 *   shipping: number,
 *   total: number,
 *   freeShipping: boolean,
 *   itemCount: number
 * }}
 */
function calculateTotal(cart, promoCode = null) {
  const subtotal    = calculateSubtotal(cart);
  const discount    = calculateDiscount(subtotal, promoCode);
  const afterPromo  = subtotal - discount;

  /* Shipping is free if subtotal meets threshold OR if promo is FREESHIP */
  const promoEntry  = promoCode ? PROMO_CODES[promoCode.toUpperCase()] : null;
  const freeShip    = subtotal >= FREE_SHIPPING_THRESHOLD
                      || (promoEntry && promoEntry.type === 'shipping');
  const shipping    = freeShip ? 0 : SHIPPING_RATE;

  const total       = afterPromo + shipping;
  const itemCount   = getItemCount(cart);

  return { subtotal, discount, shipping, total, freeShipping: freeShip, itemCount };
}

/**
 * Total number of units across all cart lines (sum of all qty).
 * @param {Array} cart
 * @returns {number}
 */
function getItemCount(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

/**
 * Validate a promo code string.
 * @param {string} code
 * @returns {{ valid:boolean, promo:object|null, message:string }}
 */
function validatePromoCode(code) {
  if (!code || typeof code !== 'string') {
    return { valid: false, promo: null, message: 'Enter a promo code.' };
  }
  const key   = code.trim().toUpperCase();
  const promo = PROMO_CODES[key];
  if (!promo) {
    return { valid: false, promo: null, message: `"${code}" is not a valid code.` };
  }
  return { valid: true, promo: { code: key, ...promo }, message: `${promo.label} applied!` };
}


/* ════════════════════════════════
   5. UI HELPERS
════════════════════════════════ */

/**
 * Refresh every `.nav__cart-count` badge on the page.
 * Called automatically by saveCart(); safe to call manually.
 */
function updateCartBadge() {
  const count = getItemCount(getCart());
  document.querySelectorAll('.nav__cart-count').forEach(badge => {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  });
}

/* Alias used by legacy code in cart.js / products.js */
const updateCartCount = updateCartBadge;

/* ── Toast ───────────────────────────────────── */

let _toastTimer = null;
let _toastEl    = null;

/**
 * Show a brief toast notification at the bottom-right of the viewport.
 * Automatically dismisses after ~3 seconds.
 *
 * @param {string} message
 * @param {'success'|'error'|'info'} [type='success']
 *   'success' — green accent  (default)
 *   'error'   — red accent
 *   'info'    — neutral
 */
function showToast(message, type = 'success') {
  /* Create the element once, reuse on subsequent calls */
  if (!_toastEl) {
    _toastEl           = document.createElement('div');
    _toastEl.className = 'toast';
    _toastEl.setAttribute('role', 'status');
    _toastEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(_toastEl);
  }

  /* Update content and type modifier class */
  _toastEl.textContent = message;
  _toastEl.className   = `toast toast--${type}`;
  _toastEl.classList.add('show');

  /* Reset the auto-dismiss timer */
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => _toastEl.classList.remove('show'), 3000);
}


/* ════════════════════════════════
   6. NAVIGATION
════════════════════════════════ */

/**
 * Set up shared navigation behaviour for every page:
 * · Scroll shadow on the nav bar
 * · Hamburger / mobile menu toggle
 * · Mobile menu close on link tap or backdrop click
 * · Active link highlight based on current filename
 * · Refresh cart badge
 */
function initNav() {
  const nav       = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  /* ── Scroll shadow ── */
  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  /* ── Mobile menu ── */
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileNav.classList.toggle('open', isOpen);
      /* Prevent body scroll while menu is open */
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Close on backdrop tap */
    mobileNav.addEventListener('click', e => {
      if (e.target === mobileNav) _closeMenu(hamburger, mobileNav);
    });

    /* Close when any link inside the menu is tapped */
    mobileNav.querySelectorAll('.nav__link, .nav__cart').forEach(el => {
      el.addEventListener('click', () => _closeMenu(hamburger, mobileNav));
    });
  }

  /* ── Active link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    /* Match exact filename; treat '' as index.html */
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Badge ── */
  updateCartBadge();
}

/** Internal: collapse the mobile menu and restore scroll. */
function _closeMenu(hamburger, mobileNav) {
  if (!hamburger) return;
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav && mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}


/* ════════════════════════════════
   7. AUTO-INIT
════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  /* Always run nav setup and badge refresh on every page */
  initNav();

  /* Expose a custom event so page scripts know app.js is ready */
  document.dispatchEvent(new CustomEvent('klugh:ready'));
});
