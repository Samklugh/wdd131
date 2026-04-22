# W04 Assignment: Picture Album Enhancement

## Overview

This assignment applies the learning activities to enhance a previous assignment by adding native lazy loading and making the webpage responsive to user interaction through filtering the displayed temple data.

## Associated Course Learning Outcomes

1. Develop responsive web pages that follow best practices and use valid HTML and CSS.
1. Demonstrate proficiency with JavaScript language syntax.
1. Use JavaScript to respond to events and dynamically modify HTML.
1. Demonstrate the traits of an effective team member, including clear communication, collaboration, fulfilling assignments, and meeting deadlines.

## Task

Enhance a previous webpage assignment by adding the new required features and using provided temple data.

## Instructions

1. Make a copy of your temples.html and rename it "filtered-temples.html".
1. Copy any associated CSS and JS files, rename them appropriately, and update references so they work with your new HTML file.
1. In the HTML, delete all the temple figure/image elements from the original page (you should have at least nine).
1. We will be replacing these figures with dynamically generated HTML using JavaScript.

Copy the following code array named "temples" which consists of a sample of temple objects and place the array into your own JavaScript file.
Array of Temple Objects

```js
const temples = [
  {

templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,

imageUrl:

"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"

  },
  {

templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,

imageUrl:

"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"

  },
  {

templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,

imageUrl:

"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"

  },
  {

templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,

imageUrl:

"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"

  },
  {

templeName: "Washington D.C.",
location: "Kensington, Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,

imageUrl:

"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"

  },
  {

templeName: "Lima Perú",
location: "Lima, Perú",
dedicated: "1986, January, 10",
area: 9600,

imageUrl:

"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"

  },
  {

templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,

imageUrl:

"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"

  },

// Add more temple objects here...

];
```

Here is one resource for temple data: ChurchofJesusChristTemples.org

1. Add at least three more temple objects to your array, matching the same properties with relevant key-value pairs.
1. Loop through the array and create "temple cards" for each temple by displaying:
1. The name of the temple.
1. The location of the temple.
1. The date the temple was dedicated.
1. The total area of the temple in square feet.
1. The provided image of the temple (an absolute address), making sure to include an appropriate alt value such as the name of the temple.
1. Use native lazy loading for each temple image.

Screenshot Example of a Temple Card Design
Screenshot Example of a Temple Card Design
Respond to the main navigation menu items by filtering and displaying the temples as follows:
Old – temples built before 1900
New – temples built after 2000
Large – temples larger than 90,000 square feet
Small – temples smaller than 10,000 square feet
Home – displays all the temples stored in the array.
Video Demonstration: ▶️ Developing an Array Filter – [ 11 minutes ]

Use JavaScript to set the footer copyright year and date last modified.

## Testing

1. Continuously check your work by rendering the page locally using Live/Five Server in VS Code.
1. Use the browser's DevTools to check for JavaScript runtime errors in the console or click the red error icon in the upper right corner of DevTools.
1. Generate the browser's DevTools Lighthouse report and run diagnostics for Accessibility, Best Practices, and SEO in both the mobile and desktop views.
1. It is best to test your page in a Private or Incognito browser window when using DevTools Lighthouse.

Note: Using absolute references to images on the Church's content delivery network can lower performance scores. You may ignore this or create local optimized copies of temple images. Respect copyrights.

## Audit and Submission

1. Commit locally and push your work to your GitHub Pages–enabled wdd131 repository on GitHub.
1. Use this ✔ Page Audit Tool to check basic HTML and CSS standards and requirements.
1. Share your work by posting your URL in the course's Microsoft Teams Week 04 Forum and comment on your peers' work by providing constructive feedback.
1. Return to Canvas and submit your GitHub Pages URL. Example:

<https://your-github-username.github.io/wdd131/filtered-temples.html>

<https://www.loom.com/share/af4f1ddda0b84204b214f72b544c02b3>
