# W03 Learning Activity: Image File Formats
WebP image format official logo by Google Developers.

## Overview
You have worked with various image formats, some of which are better suited for the web. Responsive image design aims to reduce page weight and deliver optimized images for different screen sizes. This activity explores the SVG (Scalable Vector Graphics) and WebP formats, which offer better compression for faster page loads.

## Prepare
- **Review:** Video ▶️ Image File Types for the Web – [ 1:54 minutes ]
- **Reference:** 📑 WebP image format – developers.google.com

Some terms that you may not know yet include:
- **Lossless Compression** – File compression that maintains the original data using sophisticated algorithms that replace redundancy.
- **Lossy Compression** – File compression that uses approximations and partial data to represent the original media source.
- **Transparency** – The image property representing how much of the background color is visible through the image.
- **Reference:** 📑 Image file type and format guide – MDN

Note the summary of the SVG and WebP file formats presented in the table.

> "The older formats like PNG, JPEG, GIF have poor performance compared to newer formats like WebP and AVIF, but enjoy broader "historical" browser support. The newer image formats are seeing increasing popularity as browsers without support become increasingly irrelevant (meaning have virtually zero market share)." – MDN

## Activity Instructions

### WebP
> "WebP is a modern image format that provides superior lossless and lossy compression for images on the web. Using WebP, webmasters and web developers can create smaller, richer images that make the web faster." – developers.google.com

1. In your browser, navigate to this large (~3900 X 2633) image: Landscape (pexels.com).

2. Click on the Free Download button in the upper right of the screen.

3. Download the original-size image to your local machine.

4. Rename the file "landscape.jpg".

5. What is the file size?

6. In your browser, navigate to the free JPG-to-WebP online file converter at cloudconvert.com.

7. In the application, select the landscape.jpg image file that you just downloaded.

8. Save the file with the .webp extension.

9. What is the file size of the WebP version?

10. What other actions could reduce the file size below 75 KB?

11. Apply the optimization techniques given in the prior step to the landscape.webp file using an image editing program of your choice. The resulting image should not exceed 87 KB.

Video Demonstration: ▶️ Converting a large jpg file into a webp file format – [ 3:09 minutes ]

### SVG
The Scalable Vector Graphics (SVG) format is a vector image format for two-dimensional graphics with support for interactivity and animation. "As such, it's a text-based, open Web standard for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards including CSS, DOM, JavaScript, and SMIL. SVG is, essentially, to graphics what HTML is to text." – MDN

Scalable Vector Graphics are represented as points on a grid. You can open an SVG file in a text editor and change the values.

1. Download this SVG file to your computer.

2. What is the file size of this SVG?

3. About 0.433 kB, so it is very small (under 1 kB).

4. Open it in a web browser. It should look like this. Notice how the image remains sharp and clear. This is because it is a vector image and not a bitmap image.

5. Now open the arrow.svg file in your text editor (VS Code).

6. What does an SVG file look like when opened in a text editor?

7. svg code for arrow down image

8. Look at the code.

9. What three shapes are referenced to create this icon?

10. circle, polyline, and line

11. What is the purpose of the viewBox attribute?

12. It defines the coordinate system for the SVG view box. The first two values are the x and y coordinates of the top-left corner of the view box. The last two values are the width and height of the view box.

13. The native width and height of this graphic is 24 pixels by 24 pixels. viewBox="0 0 24 24"

14. What is the purpose of the fill attribute?

15. It defines the color used to fill the shape. The value fill="none" means that the shape is not filled.

16. What is the purpose of the stroke attribute?

17. It defines the color used for the lines of the shape. The value stroke="#555" is a gray color.

18. What is the purpose of the stroke-width attribute?

19. It defines the thickness of the lines used to draw the shape. The value stroke-width="2" is 2 pixels.

20. What is the purpose of the stroke-linecap attribute?

21. It defines the shape of the line ends. The value stroke-linecap="round" means that the ends of the lines are rounded.

22. Try changing the color of the line to the hex value for red.

23. Save the file and open it again in a web browser, did you see the color change?

### Icon Libraries
Free and open-source CSS Frameworks like Bootstrap and icon libraries like Font Awesome and iconfinder.com make it easy to use SVG icons in your projects.

SVGs can be used in your HTML in several different ways including downloading and using the external image, using a sprite, embedding the svg code, and with class names supported by a CDN (Content Delivery Network) whenever larger sets of icons are needed.

The following example uses Bootstrap to get a download a Facebook SVG file and adds it to a project. This method is more efficient as only the necessary vector data for the icon is loaded resulting in a significantly smaller file size than using the entire framework or library.

Open the Bootstrap icon library and search for the Facebook icon.

These are just examples of the same search for free SVGs using:
- IconFinder
- Font Awesome

Select the facebook icon and choose Download SVG.

Facebook icon SVG file

This lightweight SVG, under 500 bytes (0.5 kB), can be used directly with an img tag's src attribute, allowing for scalable vector graphics at any desired width.

```html
<img src="images/facebook.svg" alt="Facebook Icon">
```

Comparing a Bootstrap icon, a Font Awesome icon, and a standalone SVG shows a remarkable file-size savings with SVG.

Icon size comparison chart

Video Demonstration: ▶️ SVG Icons – [ 9:23 minutes ]

## Optional Resources
Image Optimization: Review general principles on using web images.
