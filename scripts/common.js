function updateFooterDates() {
  const yearEl = document.querySelector("#year");
  const modifiedEl = document.querySelector("#last-modified");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (modifiedEl) {
    modifiedEl.textContent = document.lastModified;
  }
}

document.addEventListener("DOMContentLoaded", updateFooterDates);
