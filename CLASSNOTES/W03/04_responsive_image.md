# W03 Learning Activity: Responsive Images

## Overview

The work of responsive image design is to support smaller page weights and deliver content based on screen size. You have already worked on basic image optimization (format, sizing, and quality). You also need to consider how images appear on different screen sizes. This activity's objective is to reduce page weight while maintaining clarity and functionality across screen sizes and viewports (the visible area of a web page).

"Serving desktop-sized images to mobile devices can use 2-4x more data than needed. Instead of a "one-size-fits-all" approach to images, serve different image sizes to different devices. How many image versions should you create? There is no single 'correct' answer to this question. However, it's common to serve 3-5 different sizes of an image. Serving more image sizes is better for performance, but will take up more space on your servers and require writing a tiny bit more HTML." – Web.dev

## Prepare

A core user experience (UX) principle is that users expect to scroll web pages vertically without needing to scroll horizontally to view content. Additionally, users should not have to zoom in or out to see page content clearly. Because viewport widths vary, you should not rely on a particular viewport width in order for the page to render properly.

This activity focuses on applying the srcset attribute with the picture and source elements. The browser parses the responsive image syntax and decides which image is the best match.

This activity assumes the following:

1. The viewport meta element has been properly applied to the document.
1. The images to be used have been optimized for the web by limiting the images' width and height (dimensions) to no more than is necessary for the page design in any view size.
1. The images are of a valid web type/format.

The images are compressed to reduce their overall file size. In many image editing software packages this is referred to as reducing the 'quality.'
1. The developer has designed and saved images for use on different screen sizes.
1. Art direction involves cropping and resizing images to focus the user's attention on a specific part of the image, ensuring that design objectives are met across different viewport sizes.

Read: 📄 Art Direction – MDN

Responsive images scale to fit any browser size. The srcset attribute allows the browser to choose the best image to display based on the device's screen size and resolution, typically with the picture and source elements.

Srcset supports targeting of different browser ranges. A different image can be rendered depending on the width of the screen. Here is an example:

```html
<picture>
  <source srcset="images/hero-large.webp" media="(min-width: 1000px)">
  <source srcset="images/hero-medium.webp" media="(min-width: 550px)">
  <img src="images/hero-small.webp" alt="Orem Utah Temple" width="400" height="200">
</picture>
```

The picture tag has a reference to three different images, two sources, and a default img tag. Which image is rendered by the browser depends on the media queries. The following is a description of the rendering process:

Is the width of the browser at least a minimum of 1000px? If so, the srcset path replaces the src from the img tag and the hero-large.webp image is displayed. If the browser view width is less than 1000px then the browser tests the next source given.

Is the width of the browser at least a minimum width of 550px? If so, the hero-medium.webp image is used.

The default is the img tag src reference to hero-small.webp.

## Activity Instructions

File and Folder Setup
1. If it does not already exist, create a folder named "week03" in the wdd131 directory.
1. Add a new file named "responsive-images.html" to the week03 folder.
1. Add the basic HTML structure to the responsive-images.html file.
1. If it does not already exist, add a "styles" folder to the week03 folder and add a new CSS file named "responsive-images.css" to the styles folder.
1. If it does not already exist, create a folder named "images" in your week03 directory.

Image Editing
1. Navigate to Temple List and click on a temple link of your choice to gain access to that temple's Media Gallery.
1. In the Media Gallery of the temple, click on one of the images and download a Large version of the image by using Save Image As... or equivalent method.
1. Using an image editor, like Pixlr E, load the downloaded image file and create three (3) different images:
1. Each image should have a different crop (art direction)
1. Save all three images in the WebP file format with a quality around 50%.
1. Create a small version named "hero-small.webp" that is 500px in width by 250px in height.
1. Create a medium version named "hero-medium.webp" that is 1000px in width by 500px in height.
1. Create a large version named "hero-large.webp" that is 1500px in width by 750px in height.
1. Note that the ratios of all these images are 2:1 for consistency.
1. Put all of these images in your images folder for week03.

HTML: Picture Element

1. In your HTML file, add a main element containing a div with the class "hero".
1. Within the div element, add a picture element.

Within the picture element, add a source element with attributes for media and srcset
Emmet Shorthand (enter syntax + tab):
main>div.hero>picture>source:media*2+img
1. Set the first srcset path to the largest image.
1. Set the media attribute to min-width: 1000px, matching the width of the large hero image.
1. If needed, duplicate the source line for the medium image and change the media query to min-width: 500px.
1. Neither of these images will render on a page. An img element with a src is needed.

1. Add the img element with a src referencing the smallest image.
1. Set the alt attribute value to a description of the image.
1. Set the width and height attributes to the dimensions of the largest image (e.g., 1500 and 750) to preserve the 2:1 aspect ratio. The browser uses these values to reserve space and prevent layout shifts.

Example

```html
<div class="hero">
  <picture>
    <source srcset="images/hero-large.webp" media="(min-width: 1000px)">
    <source srcset="images/hero-medium.webp" media="(min-width: 500px)">
    <img src="images/hero-small.webp" alt="Temple name and location" width="500" height="250">
  </picture>
</div>
```

Why are img width and height necessary?
Some of the most common causes of a layout shift or reflow during the rendering of a page are images, ads, embeds, and iframes without dimensions. "Layout shifts can be distracting to users. Imagine you've started reading an article when all of a sudden elements shift around the page, throwing you off and requiring you to find your place again. This is very common on the web, including when reading the news, or trying to click those 'Search' or 'Add to Cart' buttons. Such experiences are visually jarring and frustrating. They are often caused when visible elements are forced to move because another element was suddenly added to the page or resized."

Optimize Cumulative Layout Shift – Osmani and Pollard, web.dev
1. CSS:
1. In the style sheet, enable responsive behavior by setting the img width to 100% and height to auto (or vice-versa). This is the easiest way to maintain aspect ratio.

.hero img {

width: 100%;
height: auto;

```js
}
```

Or use object-fit with set image containers. Be mindful of art direction with responsive results.
.hero img {

width: 100%;
height: 100%;

object-fit: cover;

```js
}
```

Here is an example of this error along with a solution using CSS object-fit on CodePen ☼ object-fit

1. Another solution is to use the aspect-ratio property.
1. You want responsive images to maintain their intrinsic aspect ratio. Altering the aspect ratio by setting both width and height (including height at 100%) just to fill a space may distort and pixelate the image. Lighthouse will report major aspect ratio violations.

## Optional Resources

Working with Responsive Images | (6:49 mins, Responsive Images Transcript)
Serve Responsive Images – Katie Hempenius - dev.to
Aspect-Ratio CSS Property – Una Kravets – web.dev

<https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images>

<https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#Using_the_srcset_and_sizes_attributes>

<https://www.churchofjesuschrist.org/temples/list?lang=eng>

<https://pixlr.com/editor/>

<https://web.dev/articles/optimize-cls>

<https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/aspect-ratio>

<https://www.youtube-nocookie.com/embed/ojZRjhcR3yw?rel=0&showinfo=0>

<https://web.dev/articles/serve-responsive-images?utm_source=lighthouse&utm_medium=devtools>

<https://web.dev/articles/aspect-ratio>

<https://codepen.io/BYU-Idaho/pen/gbYmqoy>
