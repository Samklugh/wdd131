/* ======================
   CART.JS
   · Render cart items from localStorage
   · Quantity steppers (buttons + direct keyboard input)
   · Animated row removal
   · Order totals — subtotal, discount, shipping, grand total
   · Promo codes (delegates to app.js PROMO_CODES)
   · Free-shipping progress bar
   · Clear cart
   · Checkout confirmation modal (no backend)
   ====================== */

/* ─────────────────────────────
   STATE
───────────────────────────── */
let activePromo = null;   // { code, type, value, label } | null

/* ─────────────────────────────
   RENDER CART
───────────────────────────── */

function renderCart() {
  const cart   = getCart();
  const listEl = document.getElementById('cart-items-list');
  if (!listEl) return;

  const summaryEl  = document.getElementById('cart-summary');
  const actionsEl  = document.querySelector('.cart-actions');
  const headerEl   = document.querySelector('.cart-table-header');
  const shippingEl = document.getElementById('shipping-bar');
  const countEl    = document.getElementById('cart-item-count');
  const clearBtn   = document.getElementById('cart-clear-btn');

  /* ── Empty state ── */
  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty" role="status">
        <div class="cart-empty__icon" aria-hidden="true">&#128717;</div>
        <h2 class="cart-empty__title">Your cart is empty</h2>
        <p class="cart-empty__msg">
          Looks like you haven't added anything yet.
          Browse the collection and find your next favourite piece.
        </p>
        <a href="products.html" class="btn btn-primary">Shop the Collection</a>
      </div>
    `;
    if (summaryEl)  summaryEl.style.display  = 'none';
    if (actionsEl)  actionsEl.style.display  = 'none';
    if (headerEl)   headerEl.style.display   = 'none';
    if (shippingEl) shippingEl.style.display = 'none';
    if (countEl)    countEl.textContent      = 'Your cart is empty';
    if (clearBtn)   clearBtn.style.display   = 'none';
    return;
  }

  /* Show all sections */
  if (summaryEl)  summaryEl.style.display  = '';
  if (actionsEl)  actionsEl.style.display  = '';
  if (headerEl)   headerEl.style.display   = '';
  if (shippingEl) shippingEl.style.display = '';
  if (clearBtn)   clearBtn.style.display   = '';

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  if (countEl) {
    countEl.textContent = `${totalQty} item${totalQty !== 1 ? 's' : ''} in your cart`;
  }

  /* ── Item rows ── */
  listEl.innerHTML = cart.map(buildItemHTML).join('');
  bindItemEvents(listEl);

  /* ── Update totals + shipping bar ── */
  updateTotals(cart);
  updateShippingBar(cart);
}

/* ─────────────────────────────
   BUILD ONE CART ROW
───────────────────────────── */

function buildItemHTML(item) {
  const lineTotal = (item.price * item.qty).toFixed(2);
  return `
    <div class="cart-item" data-id="${item.id}" role="listitem">
      <!-- Product cell -->
      <div class="cart-item__product">
        <a href="products.html" tabindex="-1" aria-hidden="true">
          <img
            src="${item.image || ''}"
            alt="${item.name}"
            class="cart-item__img"
            loading="lazy"
          />
        </a>
        <div class="cart-item__info">
          <p class="cart-item__category">${item.category || ''}</p>
          <p class="cart-item__name">${item.name}</p>
          <!-- unit price (visible on mobile too) -->
          <p class="cart-item__unit-price">$${Number(item.price).toFixed(2)} each</p>
        </div>
      </div>

      <!-- Unit price (desktop column) -->
      <div class="cart-item__price" aria-label="Unit price">$${Number(item.price).toFixed(2)}</div>

      <!-- Quantity stepper -->
      <div class="qty-control" aria-label="Quantity for ${item.name}">
        <button
          class="qty-btn"
          data-delta="-1"
          aria-label="Decrease quantity of ${item.name}"
          ${item.qty <= 1 ? 'aria-disabled="true"' : ''}
        >&#8722;</button>
        <input
          type="number"
          class="qty-value"
          value="${item.qty}"
          min="1"
          max="99"
          aria-label="Quantity"
        />
        <button
          class="qty-btn"
          data-delta="1"
          aria-label="Increase quantity of ${item.name}"
        >+</button>
      </div>

      <!-- Line total -->
      <div class="cart-item__total" aria-label="Line total">$${lineTotal}</div>

      <!-- Remove -->
      <button
        class="cart-item__remove"
        aria-label="Remove ${item.name} from cart"
        title="Remove item"
      >&#10005;</button>
    </div>
  `;
}

/* ─────────────────────────────
   BIND EVENTS ON RENDERED ITEMS
───────────────────────────── */

function bindItemEvents(listEl) {
  /* ── Qty stepper buttons ── */
  listEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row   = btn.closest('.cart-item');
      const id    = parseInt(row.dataset.id, 10);
      const delta = parseInt(btn.dataset.delta, 10);
      changeQty(id, delta);
    });
  });

  /* ── Direct qty input ── */
  listEl.querySelectorAll('.qty-value').forEach(input => {
    input.addEventListener('change', () => {
      const row = input.closest('.cart-item');
      const id  = parseInt(row.dataset.id, 10);
      const val = Math.max(1, Math.min(99, parseInt(input.value, 10) || 1));
      setQty(id, val);
    });
    /* Only allow numeric keys */
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') input.blur();
    });
  });

  /* ── Remove buttons ── */
  listEl.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.cart-item');
      const id  = parseInt(row.dataset.id, 10);
      animateRemove(row, () => removeItem(id));
    });
  });
}

/* ─────────────────────────────
   MUTATIONS
───────────────────────────── */

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
  renderCart();
}

function setQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = qty;
  saveCart(cart);
  renderCart();
}

function removeItem(id) {
  saveCart(getCart().filter(i => i.id !== id));
  renderCart();
  showToast('Item removed from cart');
}

function clearCart() {
  saveCart([]);
  activePromo = null;
  renderCart();
  showToast('Cart cleared');
}

/* Slide the row up then delete */
function animateRemove(row, callback) {
  row.style.transition = 'opacity 0.25s ease, transform 0.25s ease, max-height 0.3s ease, padding 0.3s ease';
  row.style.overflow   = 'hidden';
  row.style.maxHeight  = row.offsetHeight + 'px';
  /* Force reflow, then collapse */
  void row.offsetHeight;
  row.style.opacity   = '0';
  row.style.transform = 'translateX(20px)';
  row.style.maxHeight = '0';
  row.style.padding   = '0';
  setTimeout(callback, 320);
}

/* ─────────────────────────────
   TOTALS
───────────────────────────── */

function updateTotals(cart) {
  const rawSubtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  /* Promo discount */
  let discountAmt = 0;
  if (activePromo && activePromo.type === 'percent') {
    discountAmt = rawSubtotal * (activePromo.value / 100);
  }

  const subtotalAfterDiscount = rawSubtotal - discountAmt;

  /* Shipping: free if original subtotal ≥ threshold, or promo gives free shipping */
  const freeShip = rawSubtotal >= FREE_SHIPPING_THRESHOLD
    || (activePromo && activePromo.type === 'shipping');
  const shipping = freeShip ? 0 : SHIPPING_RATE;

  const total    = subtotalAfterDiscount + shipping;
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  set('summary-item-count', `${itemCount} item${itemCount !== 1 ? 's' : ''}`);
  set('summary-subtotal',   `$${rawSubtotal.toFixed(2)}`);
  set('summary-shipping',   freeShip ? 'Free' : `$${shipping.toFixed(2)}`);
  set('summary-total',      `$${total.toFixed(2)}`);

  /* Discount row */
  const discountRow = document.getElementById('summary-discount-row');
  const discountVal = document.getElementById('summary-discount-val');
  const discountLbl = document.getElementById('summary-discount-label');
  if (discountRow) {
    if (discountAmt > 0) {
      discountRow.classList.remove('hidden');
      if (discountLbl) discountLbl.textContent = activePromo.label;
      if (discountVal) discountVal.textContent = `−$${discountAmt.toFixed(2)}`;
    } else {
      discountRow.classList.add('hidden');
    }
  }
}

/* ─────────────────────────────
   FREE-SHIPPING PROGRESS BAR
───────────────────────────── */

function updateShippingBar(cart) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const textEl   = document.getElementById('shipping-bar-text');
  const fillEl   = document.getElementById('shipping-bar-fill');
  if (!textEl || !fillEl) return;

  const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  fillEl.style.width = pct + '%';

  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    textEl.innerHTML = `&#127881; You've unlocked <strong>free shipping!</strong>`;
    fillEl.style.backgroundColor = 'var(--color-primary)';
  } else {
    const remaining = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);
    textEl.innerHTML = `Add <strong>$${remaining}</strong> more for <strong>free shipping</strong>`;
    fillEl.style.backgroundColor = 'var(--color-accent)';
  }
}

/* ─────────────────────────────
   PROMO CODE
───────────────────────────── */

function initPromo() {
  const applyBtn = document.getElementById('promo-apply');
  const input    = document.getElementById('promo-input');
  const hint     = document.getElementById('promo-hint');
  if (!applyBtn || !input) return;

  function showHint(msg, isError) {
    if (!hint) return;
    hint.textContent = msg;
    hint.classList.remove('hidden', 'promo-hint--error', 'promo-hint--ok');
    hint.classList.add(isError ? 'promo-hint--error' : 'promo-hint--ok');
  }

  applyBtn.addEventListener('click', () => {
    /* ── Remove mode ── */
    if (activePromo) {
      activePromo          = null;
      applyBtn.textContent = 'Apply';
      input.value          = '';
      if (hint) { hint.textContent = ''; hint.classList.add('hidden'); }
      renderCart();
      return;
    }

    /* ── Apply mode ── */
    const code = input.value.trim().toUpperCase();
    if (!code) {
      showHint('Enter a promo code first.', true);
      return;
    }
    if (PROMO_CODES[code]) {
      activePromo          = { code, ...PROMO_CODES[code] };
      input.value          = '';
      applyBtn.textContent = 'Remove';
      showHint(`${activePromo.label} applied!`, false);
      renderCart();
    } else {
      showHint('Invalid code. Try KLUGH10 or FREESHIP.', true);
    }
  });

  /* Enter key in input */
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') applyBtn.click();
  });
}

/* ─────────────────────────────
   CLEAR CART BUTTON
───────────────────────────── */

function initClearBtn() {
  const btn = document.getElementById('cart-clear-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (getCart().length === 0) return;
    /* Simple inline confirmation */
    if (btn.dataset.confirm === 'pending') {
      clearCart();
      btn.textContent  = 'Clear Cart';
      btn.dataset.confirm = '';
    } else {
      btn.textContent  = 'Confirm clear?';
      btn.dataset.confirm = 'pending';
      /* Auto-reset label after 3s if user doesn't confirm */
      setTimeout(() => {
        if (btn.dataset.confirm === 'pending') {
          btn.textContent  = 'Clear Cart';
          btn.dataset.confirm = '';
        }
      }, 3000);
    }
  });
}

/* ─────────────────────────────
   CHECKOUT MODAL
───────────────────────────── */

function initCheckout() {
  const checkoutBtn  = document.getElementById('checkout-btn');
  const modal        = document.getElementById('checkout-modal');
  const closeBtn     = document.getElementById('checkout-close');
  const orderNumEl   = document.getElementById('checkout-order-num');
  if (!checkoutBtn || !modal) return;

  checkoutBtn.addEventListener('click', () => {
    if (getCart().length === 0) {
      showToast('Your cart is empty.');
      return;
    }

    /* Generate a fake order number */
    const orderNum = 'KL-' + Date.now().toString(36).toUpperCase().slice(-7);
    if (orderNumEl) orderNumEl.textContent = `Order reference: ${orderNum}`;

    /* Show modal */
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.checkout-modal__box')?.focus();
  });

  /* Close modal — restore cart (don't clear) */
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  /* Click backdrop to close */
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  /* ESC key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
}

/* ─────────────────────────────
   INIT
───────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  initPromo();
  initClearBtn();
  initCheckout();
});
