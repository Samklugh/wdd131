const temperature = 32; // °C
const windSpeed = 14; // km/h

function calculateWindChill(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

function updateWindChill() {
  const tempEl = document.querySelector("#temp");
  const windEl = document.querySelector("#wind");
  const chillEl = document.querySelector("#windchill");

  if (!tempEl || !windEl || !chillEl) return;

  const temp = Number(tempEl.textContent);
  const wind = Number(windEl.textContent);

  const meetsConditions = temp <= 10 && wind > 4.8;
  chillEl.textContent = meetsConditions ? calculateWindChill(temp, wind) + "°C" : "N/A";
}

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

document.addEventListener("DOMContentLoaded", () => {
  const tempEl = document.querySelector("#temp");
  const windEl = document.querySelector("#wind");

  if (tempEl) tempEl.textContent = temperature;
  if (windEl) windEl.textContent = windSpeed;

  updateWindChill();
  updateFooterDates();
});



