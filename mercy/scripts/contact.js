/* ======================
   CONTACT.JS
   Client-side form validation and success message display.
   Depends on showToast() from app.js (loaded first via defer).
   ====================== */

document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    /* Validate all required fields */
    let valid = true;
    form.querySelectorAll('[required]').forEach((field) => {
      const empty = !field.value.trim();
      /* Use aria-invalid instead of inline style so CSS can target it */
      field.setAttribute('aria-invalid', empty ? 'true' : 'false');
      if (empty) {
        field.classList.add('field--error');
        valid = false;
      } else {
        field.classList.remove('field--error');
      }
    });

    if (!valid) {
      showToast('Please fill in all required fields.', 'error');
      /* Move focus to first invalid field */
      const first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      return;
    }

    /* Show success state */
    form.setAttribute('aria-hidden', 'true');
    form.style.display = 'none';
    if (success) {
      success.classList.add('show');
      success.removeAttribute('aria-hidden');
      /* Move focus into the success message */
      const heading = success.querySelector('h4');
      if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus(); }
    }
  });
});
