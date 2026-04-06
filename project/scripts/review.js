function updateReviewCount() {
  const countEl = document.querySelector("#review-count");
  const storedCount = Number(localStorage.getItem("reviewCount")) || 0;
  const updatedCount = storedCount + 1;

  localStorage.setItem("reviewCount", String(updatedCount));

  if (countEl) {
    countEl.textContent = updatedCount;
  }
}

document.addEventListener("DOMContentLoaded", updateReviewCount);
