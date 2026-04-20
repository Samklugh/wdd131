/* ======================
   MAIN.JS  —  Compatibility shim
   ──────────────────────────────
   All cart logic has moved to app.js.
   This file is kept so any direct reference to main.js continues
   to work without error, but app.js is the authoritative module.

   Load order on every page:
     1. <script src="scripts/app.js"></script>   ← shared utilities
     2. <script src="scripts/<page>.js"></script> ← page-specific logic

   Functions provided by app.js (all globally scoped):
     Storage        : getCart, saveCart
     Mutations      : addToCart, removeFromCart, updateQuantity,
                      changeQuantity, clearCart
     Calculations   : calculateSubtotal, calculateShipping,
                      calculateDiscount, calculateTotal,
                      getItemCount, validatePromoCode
     UI             : updateCartBadge, updateCartCount (alias), showToast
     Navigation     : initNav
   ====================== */

/*
  If this file is accidentally loaded WITHOUT app.js, define the
  minimum no-op stubs so the page doesn't throw reference errors.
*/
if (typeof getCart          === 'undefined') console.warn('app.js not loaded — cart will not work.');
if (typeof showToast        === 'undefined') window.showToast        = (m) => console.log('[toast]', m);
if (typeof updateCartBadge  === 'undefined') window.updateCartBadge  = () => {};
if (typeof updateCartCount  === 'undefined') window.updateCartCount  = window.updateCartBadge;
