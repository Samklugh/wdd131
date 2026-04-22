# W04 Learning Activity: Lazyloading Images

## Overview

In terms of site performance and search engine optimization, your goal is to load the webpage and make it ready for action within a few seconds of a user request. Webpages, however, often contain many requests and payloads, including images, that increase the load time beyond the ideal target. This activity addresses that challenge by deferring the loading of page assets until they are actually needed by the user as they scroll. You will learn the design pattern of progressive loading or 'lazy-loading' of images.

## Course Learning Outcomes

Develop responsive web pages that follow best practices and use valid HTML and CSS.
First Meaningful Paint
"It's important to deliver something meaningful to the user as soon as possible — the longer they wait for the page to load, the bigger the chance they will leave before waiting for everything to finish. We should be able to show them at least the basic view of the page they want to see, with placeholders in the places more content will eventually be loaded. This could be achieved by progressive loading ─ also known as Lazy loading. This is all about deferring loading of as many resources as possible (HTML, CSS, JavaScript), and only loading those immediately that are really needed for the very first experience." ─ MDN

## Prepare

Your objective is to load pages faster by providing only the essential content to the user as it is requested through events such as scrolling or navigation. Native browser-level lazy loading is a built-in attribute that can be applied to select elements, including images.

```html
<img src="images/anyphoto.jpg" alt="A good description of the non decorative image" loading="lazy" width="300" height="500">
```

The loading attribute has two states: eager and lazy. The default eager value instructs the browser to load the resource immediately. The lazy value defers loading of elements, such as <img> or <iframe>, until they come into view through user actions such as scrolling.

"Lazy loading is a strategy to identify resources as non-blocking (non-critical) and load these only when needed. It's a way to shorten the length of the critical rendering path, which translates into reduced page load times. Lazy loading can occur on different moments in the application, but it typically happens on some user interactions such as scrolling and navigation." – MDN

1. Test the popularity of the loading="lazy" attribute by looking at any Google Maps embed.
1. Read: Lazy Loading – MDN | Review the concepts and strategies of lazy loading in this official reference.

## Activity Instructions

Build a small webpage with multiple images stacked vertically on a single page. When testing the page in a browser, the images will load only when they come into view as the user scrolls. This effect is subtle, so carefully scroll and view the network tab in Devtools to observe the loading behavior.

Video Demonstration: ▶️ Lazy Loading Observation – [ no sound | 23 seconds ]

1. In VS Code, go to your course wdd131 repository and create a new HTML page named "lazyload.html" in a "week04" sub folder of wdd131.
1. Create an external CSS file and an external JavaScript file for this page, storing them in appropriately named sub-folders within the week04 folder.
1. Ensure the <lazyload.html> page has a standard <head>, <body>, and a <main> element.
1. The <main> element should contain a page title in an <h1> element.
1. The <main> element should contain six (6) <img> child elements.
1. Include a footer with content of your choice and display the date the document was last modified using JavaScript.
1. Set the image dimensions to 400px width by 600px or greater height (portrait layout). Use your own images or external placeholders.
1. Display the <img> elements in a single centered column regardless of screen size. (Hint: Use CSS display: block)
1. Apply the loading="lazy" attribute to all images so they load only as the user scrolls into view.
1. Create a fade-from-black animation for each image using CSS animation and opacity properties.

Video Demonstration: ▶️ Activity Walkthrough Example – [ 8:25 minutes ]

<https://en.wikipedia.org/wiki/Lazy_loading>

<https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path>

<https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading>

<https://web.dev/static/articles/browser-level-image-lazy-loading/video/web-dev-assets/native-lazy-loading/lazyload.webm>

<https://byui-cse.github.io/cse-ww-program/student/frontend-resources.html#javascript>

<https://video.byui.edu/media/t/1_zj44pwzh>
