// filtered-temples.js - temple cards, filters, footer, and navigation

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-25762.jpg",
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40448.jpg",
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-3840.jpg",
  },
];

const templeCards = document.getElementById('temple-cards');
const heading = document.querySelector('main h1.heading');
const navLinks = document.querySelectorAll('#navigation a');

const getDedicationYear = (dedicated) => {
  const year = Number.parseInt(dedicated.split(',')[0], 10);
  if (!Number.isNaN(year)) {
    return year;
  }
  return new Date(dedicated).getFullYear();
};

const buildTempleCard = (temple) => {
  const card = document.createElement('article');
  card.classList.add('temple-card');

  const name = document.createElement('h2');
  name.textContent = temple.templeName;

  const details = document.createElement('p');
  details.classList.add('details');
  details.innerHTML =
    `<span>Location:</span> ${temple.location}<br>` +
    `<span>Dedicated:</span> ${temple.dedicated}<br>` +
    `<span>Size:</span> ${temple.area.toLocaleString()} sq ft`;

  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = 'lazy';

  card.appendChild(name);
  card.appendChild(details);
  card.appendChild(image);

  return card;
};

const displayTemples = (templeList) => {
  if (!templeCards) {
    return;
  }
  templeCards.innerHTML = '';
  templeList.forEach((temple) => {
    templeCards.appendChild(buildTempleCard(temple));
  });
};

const filterTemples = (filter) => {
  switch (filter) {
    case 'old':
      return temples.filter((temple) => getDedicationYear(temple.dedicated) < 1900);
    case 'new':
      return temples.filter((temple) => getDedicationYear(temple.dedicated) > 2000);
    case 'large':
      return temples.filter((temple) => temple.area > 90000);
    case 'small':
      return temples.filter((temple) => temple.area < 10000);
    default:
      return temples;
  }
};

const setActiveLink = (activeLink) => {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link === activeLink);
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const filter = link.dataset.filter || 'home';
    displayTemples(filterTemples(filter));
    if (heading) {
      heading.textContent = link.textContent;
    }
    setActiveLink(link);
  });
});

// Initial render
setActiveLink(navLinks[0]);
displayTemples(temples);

// Dynamic footer copyright year and last modified date
const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
  lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navigation = document.getElementById('navigation');

if (hamburgerBtn && navigation) {
  hamburgerBtn.addEventListener('click', () => {
    const isHidden = navigation.style.display === 'none' || !navigation.style.display;
    navigation.style.display = isHidden ? 'flex' : 'none';
    hamburgerBtn.innerHTML = isHidden ? '&times;' : '&#9776;';
    hamburgerBtn.setAttribute('aria-expanded', String(isHidden));
  });
}
