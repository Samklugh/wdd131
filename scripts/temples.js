// temples.js - Dynamic footer and hamburger navigation

// 1. Dynamic footer copyright year and last modified date
document.addEventListener('DOMContentLoaded', () => {
  // Current year
  const currentYearElement = document.getElementById('currentyear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Last modified date
  const lastModifiedElement = document.getElementById('lastModified');
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }
});

// 2. Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navigation = document.getElementById('navigation');

if (hamburgerBtn && navigation) {
  hamburgerBtn.addEventListener('click', () => {
    // Toggle navigation visibility
    const isHidden = navigation.style.display === 'none';
    navigation.style.display = isHidden ? 'flex' : 'none';
    // this will show the menu if it's hidden, and hide it if it's shown 
    
    // Change hamburger icon to X when open, ☰ when closed
    hamburgerBtn.textContent = isHidden ? '✕' : '☰';
  });
}

