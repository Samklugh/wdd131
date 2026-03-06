document.getElementById("lastModified").innerHTML = document.lastModified;

const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("last-modified").textContent =
  "Last Modified: " + document.lastModified;