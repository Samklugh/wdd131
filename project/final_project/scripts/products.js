/* ======================
   PRODUCTS.JS
   · 15-product catalog across 4 categories
   · Render enhanced product cards (badge · wishlist · swatches · add-btn)
   · Category filter + price-range checkbox filter + sort
   · Active-filter pills
   · Mobile filter drawer + overlay
   · View-mode toggle (grid / list - cosmetic for now)
   · URL param pre-filter (?cat=tops)
   ====================== */

/* ─────────────────────────────
   PRODUCT CATALOG — 15 items
───────────────────────────── */
const PRODUCTS = [
  /* ── TOPS (5) ── */
  {
    id: 1,
    name: 'Oversized Cotton Tee',
    category: 'tops',
    price: 69,
    original: null,
    badge: null,
    swatches: ['#F7F3EC','#1F2A30','#C8A882'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
  },
  {
    id: 2,
    name: 'Merino Knit Sweater',
    category: 'tops',
    price: 129,
    original: null,
    badge: null,
    swatches: ['#0D4B4C','#F7F3EC','#8B6F5E'],
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80',
  },
  {
    id: 3,
    name: 'Linen Overshirt',
    category: 'tops',
    price: 109,
    original: null,
    badge: 'New',
    swatches: ['#E8E3DC','#1F2A30'],
    image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=600&q=80',
  },
  {
    id: 4,
    name: 'Silk Crepe Blouse',
    category: 'tops',
    price: 189,
    original: null,
    badge: 'Bestseller',
    swatches: ['#F7F3EC','#1F2A30','#D4A574'],
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80',
  },
  {
    id: 5,
    name: 'Cashmere Turtleneck',
    category: 'tops',
    price: 219,
    original: 265,
    badge: 'Sale',
    swatches: ['#1F2A30','#C8A882','#6B6B6B'],
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
  },

  /* ── BOTTOMS (5) ── */
  {
    id: 6,
    name: 'Wide Leg Trousers',
    category: 'bottoms',
    price: 149,
    original: null,
    badge: null,
    swatches: ['#1F2A30','#E8E3DC','#8B7355'],
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80',
  },
  {
    id: 7,
    name: 'Slim Raw Denim',
    category: 'bottoms',
    price: 165,
    original: null,
    badge: null,
    swatches: ['#2C4A6E','#1F2A30'],
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
  },
  {
    id: 8,
    name: 'Pleated Midi Skirt',
    category: 'bottoms',
    price: 139,
    original: null,
    badge: 'New',
    swatches: ['#F7F3EC','#0D4B4C','#E8C4B8'],
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
  },
  {
    id: 9,
    name: 'Cargo Utility Pants',
    category: 'bottoms',
    price: 159,
    original: null,
    badge: null,
    swatches: ['#5C6B4A','#1F2A30','#8B7355'],
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80',
  },
  {
    id: 10,
    name: 'Tailored Chinos',
    category: 'bottoms',
    price: 145,
    original: 178,
    badge: 'Sale',
    swatches: ['#C8A882','#1F2A30','#F7F3EC'],
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
  },

  /* ── OUTERWEAR (3) ── */
  {
    id: 11,
    name: 'Structured Wool Coat',
    category: 'outerwear',
    price: 299,
    original: null,
    badge: 'New',
    swatches: ['#1F2A30','#8B7355','#E8E3DC'],
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
  },
  {
    id: 12,
    name: 'Tailored Blazer',
    category: 'outerwear',
    price: 245,
    original: null,
    badge: null,
    swatches: ['#1F2A30','#6B6B6B'],
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80',
  },
  {
    id: 13,
    name: 'Leather Trench Coat',
    category: 'outerwear',
    price: 599,
    original: null,
    badge: 'Limited',
    swatches: ['#1F2A30','#5C3D1E'],
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
  },

  /* ── ACCESSORIES (2) ── */
  {
    id: 14,
    name: 'Ribbed Merino Beanie',
    category: 'accessories',
    price: 49,
    original: null,
    badge: null,
    swatches: ['#1F2A30','#0D4B4C','#C8A882'],
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80',
  },
  {
    id: 15,
    name: 'Waxed Canvas Tote',
    category: 'accessories',
    price: 89,
    original: null,
    badge: 'New',
    swatches: ['#1F2A30','#8B7355'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
  },
];

/* ─────────────────────────────
   STATE
───────────────────────────── */
let activeCategory  = 'all';
let activePriceMax  = Infinity;  // 'all' | 150 | 300 | Infinity
let activeSort      = 'default';
const wishlist      = new Set();  // product ids

/* ─────────────────────────────
   CARD BUILDER
───────────────────────────── */

function buildCardHTML(product) {
  const badge = product.badge
    ? `<span class="product-card__badge${product.badge === 'Sale' ? ' product-card__badge--sale' : ''}">
         ${product.badge}
       </span>`
    : '';

  const original = product.original
    ? `<span class="product-card__original">$${product.original}</span>`
    : '';

  const swatches = (product.swatches || [])
    .map(c => `<span class="swatch" style="background-color:${c}" title="${c}"></span>`)
    .join('');

  const heartFill = wishlist.has(product.id) ? '&#x2665;' : '&#x2661;';
  const isWished  = wishlist.has(product.id) ? ' active' : '';

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
        <button
          class="product-card__wishlist${isWished}"
          data-id="${product.id}"
          aria-label="Wishlist ${product.name}"
          title="Save to wishlist"
        >${heartFill}</button>
        <button class="product-card__quick-add" data-id="${product.id}">
          + Quick Add
        </button>
      </div>

      <div class="product-card__info">
        <p class="product-card__category">${product.category}</p>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__pricing">
          <span class="product-card__price">$${product.price}</span>
          ${original}
        </div>
        <div class="product-card__swatches" aria-hidden="true">
          ${swatches}
        </div>
      </div>

      <button class="product-card__add-btn" data-id="${product.id}">
        Add to Cart
      </button>
    </article>
  `;
}

/* ─────────────────────────────
   RENDER
───────────────────────────── */

function renderProducts(list) {
  const grid     = document.querySelector('.products-grid');
  const countEl  = document.querySelector('.products-count');
  if (!grid) return;

  if (countEl) {
    countEl.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="products-empty">
        <p style="font-size:2.5rem;margin-bottom:1rem">&#128564;</p>
        <h3>No products match your filters</h3>
        <p>Try removing a filter or browsing all categories.</p>
        <button class="btn btn-outline js-clear-filters">Clear All Filters</button>
      </div>
    `;
    /* Bind the clear-filters button via event listener (no inline handler) */
    const clearBtn = grid.querySelector('.js-clear-filters');
    if (clearBtn) clearBtn.addEventListener('click', clearAllFilters);
    return;
  }

  grid.innerHTML = list.map(buildCardHTML).join('');

  /* Bind quick-add + add-btn buttons */
  grid.querySelectorAll('.product-card__quick-add, .product-card__add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id, 10);
      const product = PRODUCTS.find(p => p.id === id);
      if (product) addToCart(product);
    });
  });

  /* Bind wishlist buttons */
  grid.querySelectorAll('.product-card__wishlist').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id, 10);
      if (wishlist.has(id)) {
        wishlist.delete(id);
        btn.innerHTML = '&#x2661;';
        btn.classList.remove('active');
        showToast('Removed from wishlist');
      } else {
        wishlist.add(id);
        btn.innerHTML = '&#x2665;';
        btn.classList.add('active');
        const p = PRODUCTS.find(p => p.id === id);
        showToast(p ? `"${p.name}" saved to wishlist` : 'Saved to wishlist');
      }
    });
  });
}

/* ─────────────────────────────
   FILTER + SORT
───────────────────────────── */

function getFiltered() {
  let result = [...PRODUCTS];

  if (activeCategory !== 'all') {
    result = result.filter(p => p.category === activeCategory);
  }

  if (activePriceMax !== Infinity) {
    result = result.filter(p => p.price <= activePriceMax);
  }

  switch (activeSort) {
    case 'price-asc':  result.sort((a, b) => a.price - b.price); break;
    case 'price-desc': result.sort((a, b) => b.price - a.price); break;
    case 'name-asc':   result.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'newest':     result.sort((a, b) => b.id - a.id); break;
    default: break;
  }

  return result;
}

/* Re-render and sync active-filter pills */
function applyFilters() {
  renderProducts(getFiltered());
  renderPills();
}

/* ─────────────────────────────
   ACTIVE FILTER PILLS
───────────────────────────── */

function renderPills() {
  const container = document.getElementById('active-filters');
  if (!container) return;

  const pills = [];

  if (activeCategory !== 'all') {
    const label = activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
    pills.push({ text: label, action: () => { activeCategory = 'all'; uncheckCategory(); applyFilters(); } });
  }

  if (activePriceMax !== Infinity) {
    pills.push({ text: `Under $${activePriceMax}`, action: () => { activePriceMax = Infinity; uncheckPrice(); applyFilters(); } });
  }

  container.innerHTML = pills.map((p, i) => `
    <button class="filter-pill" data-pill="${i}" aria-label="Remove filter: ${p.text}">
      ${p.text} <span class="filter-pill__x">&#215;</span>
    </button>
  `).join('');

  container.querySelectorAll('.filter-pill').forEach((btn, i) => {
    btn.addEventListener('click', () => pills[i].action());
  });
}

function uncheckCategory() {
  const all = document.querySelector('.filter-option input[value="all"]');
  if (all) all.checked = true;
}
function uncheckPrice() {
  document.querySelectorAll('.filter-option input[name="price"]').forEach(el => el.checked = false);
}

function clearAllFilters() {
  activeCategory = 'all';
  activePriceMax = Infinity;
  activeSort     = 'default';
  uncheckCategory();
  uncheckPrice();
  const sortEl = document.querySelector('#sort-select');
  if (sortEl) sortEl.value = 'default';
  applyFilters();
}

/* ─────────────────────────────
   INIT
───────────────────────────── */

function initProductsPage() {
  if (!document.querySelector('.products-grid')) return;

  /* Pre-filter from URL ?cat=tops */
  const urlCat = new URLSearchParams(window.location.search).get('cat');
  if (urlCat) {
    activeCategory = urlCat;
    const radio = document.querySelector(`.filter-option input[value="${urlCat}"]`);
    if (radio) radio.checked = true;
  }

  /* Category radio change */
  document.querySelectorAll('.filter-option input[name="category"]').forEach(input => {
    input.addEventListener('change', () => {
      activeCategory = input.value;
      applyFilters();
    });
  });

  /* Price checkbox change */
  document.querySelectorAll('.filter-option input[name="price"]').forEach(input => {
    input.addEventListener('change', () => {
      if (input.checked) {
        activePriceMax = parseInt(input.value, 10);
        /* Uncheck other price checkboxes */
        document.querySelectorAll('.filter-option input[name="price"]').forEach(el => {
          if (el !== input) el.checked = false;
        });
      } else {
        activePriceMax = Infinity;
      }
      applyFilters();
    });
  });

  /* Sort select */
  const sortEl = document.querySelector('#sort-select');
  if (sortEl) {
    sortEl.addEventListener('change', () => {
      activeSort = sortEl.value;
      applyFilters();
    });
  }

  /* Clear all */
  const clearBtn = document.querySelector('.filters__clear');
  if (clearBtn) clearBtn.addEventListener('click', clearAllFilters);

  /* Mobile filter drawer */
  const toggleBtn  = document.querySelector('.filter-toggle-btn');
  const filtersEl  = document.querySelector('.filters');
  const overlay    = document.getElementById('filter-overlay');

  function openDrawer()  { filtersEl.classList.add('open');  overlay && overlay.classList.add('show'); }
  function closeDrawer() { filtersEl.classList.remove('open'); overlay && overlay.classList.remove('show'); }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (overlay)   overlay.addEventListener('click', closeDrawer);

  /* View toggle (grid / list — cosmetic only) */
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* Initial render */
  applyFilters();
}

document.addEventListener('DOMContentLoaded', initProductsPage);
