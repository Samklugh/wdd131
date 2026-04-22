# W03 Learning Activity: CSS Pseudo-Selectors

## Overview

Pseudo-classes and pseudo-elements extend what selectors can target. A pseudo-class defines a special state of an element—for example, changing a button's color when a user hovers over it. A pseudo-element styles a specific part of an element, such as the first letter or first line of a paragraph.

Pseudo-classes target element states, while pseudo-elements style specific parts of an element. You have been using the :hover pseudo-class to select a button when a user hovers over it.

Pseudo-classes

Reference: 📑 Pseudo-classes – MDN
Reference: 📑 :root – MDN
The :root CSS pseudo-class can be useful for declaring global CSS variables – MDN.

What are the advantages of using CSS variables/custom properties?

## Check Your Understanding

CSS variables are useful because they improve maintainability by centralizing common values, meaning values can be changed in one convenient place.

What does AI say about the advantages of using CSS variables?

Open: CodePen ☼ CSS Only Floated Labels – by Nick Salloum

Can you find all the instances of CSS pseudo-classes being used in this CodePen example?

## Check Your Understanding

:root
:focus
:placeholder-shown
:not
A common design issue with color contrast is not accounting for a browser's default settings, specifically for the link and visited properties of anchor tags. These can be adjusted using pseudo-classes.

Activity Instructions: Pseudo-classes
1. Fork (copy) this CodePen ☼ CSS Pseudo-classes Activity to your own CodePen account.
1. In your copy on CodePen, add CSS pseudo-class rule(s) for the anchor tags to be navy for both active links and visited links.
1. Add a CSS pseudo-class rule for the anchor tags to change to purple for the hover effect on links.
1. Add CSS pseudo-class rule to provide borders for the div.datatable so the borders of the div.col elements do not double up (see the example screenshot below).
1. Make the last row of the data table have a darker gray background color by using the :last-child pseudo-class.
1. Set up a CSS variable for the border shorthand value in the :root pseudo-class, such as 1px solid #777;

Hints
:root { --bord: _____} then use it with var(--bord) where needed,

```js
for example, border-right: var(--bord);
```

1. Consider using the border-top versus using the CSS border property shortcut to isolate your bordering needs.
1. Use the :nth-child() and the :last-child pseudo-classes.

Screenshot of pseudo-class CodePen example
1. Check Your Understanding – Example Solution
1. CodePen ☼ CSS Pseudo-classes activity solution.

Pseudo-elements

Reference: 📑 Pseudo-elements – MDN

Most browsers accept single colons, but it is best practice to use double colons :: when selecting pseudo-elements in CSS.

## Activity Instructions

1. Fork this CodePen ☼ CSS Pseudo-elements to your own CodePen account.
1. Add a new CSS rule for the list items in the ordered list that uses a marker pseudo-element.
1. In this new rule, add 3 declarations to change the ordered list's appearance:
1. make the list item marker a checkmark using content
1. make the marker color navy
1. make the font-size 2rem

Option: Using the Emoji Picker to get a checkmark symbol
Windows: Press 🪟+. (Windows key + period) [ Windows Keyboard Tips and Tricks ]
MacOS: ⌘+ctrl+spacebar

1. Check Your Understanding – Example Solution
1. CodePen ☼ CSS Pseudo-classes activity solution.

<https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes>

<https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:root>

<https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties>

<https://codepen.io/callmenick/pen/OxpKNZ?editors=1100>

<https://codepen.io/BYU-Idaho/pen/JjgqVWa>

<https://codepen.io/BYU-Idaho/pen/ExqzJXR>

<https://codepen.io/BYU-Idaho/pen/aberJdK>

<https://support.microsoft.com/en-us/windows/windows-keyboard-tips-and-tricks-588e0b72-0fff-6d3f-aeee-6e5116097942>
