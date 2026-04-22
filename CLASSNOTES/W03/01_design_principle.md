# W03 Learning Activity: Design Principles

## Overview

Good design principles are essential for creating a positive, engaging user experience. This course aims to build a strong foundation in effective web design. Understand these principles, apply them consistently, and actively seek constructive feedback to improve.

"Effective web design and art are not the same. But many psychological and design principles apply to websites. You can design a great website by applying the relevant aspects of those laws to your layout, typography, and images. Design for the user and your business objectives." – Peep Laja – CXL

## Prepare

Typography: Use at most two or three fonts. If you need variation, use different weights or styles of the same font. Choose fonts that are easy to read and visually appealing. When using Google Fonts, include only the weights you need. For example, include Roboto regular (400) and bold (700).

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

1. Colors: Use a color scheme that is visually appealing and conveys the desired mood or message. Limit the color palette to five hues or less. Test color contrast to ensure readability for all users.
1. Clarity: Keep the design clean and uncluttered. Use ample whitespace to guide the user's focus and avoid overwhelming them with too much information at once. Avoid wordiness; use visuals to help communicate your message.
1. Consistency: Maintain a consistent visual language throughout the design. This includes using consistent typography, color schemes, and layout patterns across different pages or sections of your design.
1. Visual Hierarchy: Establish a clear hierarchy of information to help users understand the relative importance of different elements on the page. Use techniques like size, color, and typography to emphasize important content.
1. Accessibility: Ensure that your design is accessible to all users, including those with disabilities. This may involve providing alternative text for images, using sufficient color contrast, and implementing keyboard navigation. Test accessibility with tools like WAVE, Axe, or Lighthouse.
1. Feedback: Provide clear feedback to users when they interact with elements on the page. This could include visual cues such as button states or animations to indicate that an action has been successfully completed.
1. User-Centric Design: Design with your target audience's needs and preferences in mind. Conduct user research to understand their goals, behaviors, and pain points, and tailor your design accordingly.
1. Visual Appeal: Use visually appealing elements such as high-quality images, engaging animations, and attractive typography to capture the user's attention and create a memorable experience.
1. As an active learner, leverage the resources of the internet and AI to help you apply these principles in your own design and development.

## Activity Instructions

File and Folder Setup
1. Create a folder named "week03" in the wdd131 directory.
1. Add a new file named "design.html" to the week03 folder.
1. Add a "styles" folder to the week03 folder.
1. Add a new file named "design.css" to the styles folder.

HTML
1. In the design.html file, add the basic HTML structure.
1. Remember that Emmet notation built into VS Code provides shortcuts to code snippets. For example, type html5 and then the TAB key to build a basic HTML5 structure.

User-defined custom snippets can also be used: VS Code Snippets.

1. Link the external design.css file.
1. Add the given HTML content to the <body> of the document provided in this CodePen ☼ WDD Design Principles Start.

CSS
1. In the design.css file, copy over the starter CSS code provided in the CodePen.
1. Fix the padding issues on the div.callout container.
1. Left-align the <h2> heading instead of centering it.
1. Check the color contrast by using the CSS Overview tool in the browser's DevTools.

How to enable and use CSS Overview: Identify potential CSS improvements

Enter the foreground and background colors given in the div.callout container into the Contrast Ratio tool.
Using the contrast ratio tool, what is the ratio of the two colors? Is that good or bad?
The contrast ratio was 2.14 for colors #777 and #702963. This fails WCAG 2.0 and 2.1 (Web Content Accessibility Guidelines).

1. Fix the contrast issues in the div.callout and verify it passes AA and AAA levels.
1. Lay out the <main> element content in two columns for the article and list.
1. Do not add any additional HTML.
1. Use the grid-template-columns property to create the two columns.
1. The <h2> heading within this <main> container will need to span the two columns.

How do you do that?
Use the grid-column property on this <h2> to span the two columns.

1. Delete the marquee and replace it with a <div class="banner"> static area as shown in the figure.
1. Why delete the marquee? The marquee element is not supported in HTML5 and is considered deprecated (obsolete or being phased out) even though it may be rendered by most browsers. In terms of design and usability, the marquee is poor because it is unpredictable and distracting. It is also not accessible to users with disabilities.

Move the footer content to the left.

## Check Your Understanding

Example Solution: CodePen ☼ WDD Design Principles
What other improvements could be made?

<https://code.visualstudio.com/docs/editing/userdefinedsnippets>

<https://codepen.io/BYU-Idaho/pen/jENyGvm>

<https://developer.chrome.com/docs/devtools/css-overview/?utm_source=devtools>

<https://www.siegemedia.com/contrast-ratio?ref=frontendchecklist>

<https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/marquee>

<https://ux.stackexchange.com/questions/76951/what-are-arguments-against-the-usage-of-a-ticker-marquee-on-websites>

<https://codepen.io/BYU-Idaho/pen/jENyGxB>
