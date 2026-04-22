# 02 Learning Activity: JavaScript Debugging

## Overview

Debugging is the process of finding and fixing errors in your code. This is an essential skill for any developer. In this activity, you will learn how to use the browser's DevTools to debug your JavaScript code.

## Prepare

Types of Errors
There are three types of errors that you will encounter when writing JavaScript code:

1. Syntax Errors – These errors occur when you write code that does not follow the rules of the JavaScript language. These errors are caught by the browser and will prevent your code from running.
1. Runtime Errors – These errors occur while your code is running. They can be caused by a variety of issues, such as trying to access a property of an object that does not exist or calling a function that does not exist.
1. Logical Errors – These errors occur when your code does not produce the expected result. These errors can be difficult to find because they do not cause the browser to throw an error.

## Activity Instructions

This activity focuses on debugging techniques for the browser.

Setup Files
1. In your week02 subfolder, add a file named "debugging.html".
1. In the debugging.html file, type ! and then press the tab key on your keyboard. This action will automatically add the basic components of an HTML document.
1. Add a subfolder named "scripts" to the week02 folder, and add a file named "debugging.js".
1. In debugging.html file, add a script reference to the debugging.js JavaScript file.

## Check Your Understanding

```html
<script src="scripts/debugging.js" defer></script>
```

HTML
Add the following elements to the HTML body of your debugging.html page:

```html
<h1>JavaScript Debugging using DevTools</h1>
<p>Area of circle with radius <span id="radius"></span>: <span id="area"></span></p>
```

JavaScript
Add the following JavaScript statements to your debugging.js file:

```js
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('area');

let area = 0;
const PI == 3.14159;

const radius = 10;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;

radius = 20;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;
```

Debugging
Video Demonstration: ▶️ Debugging JavaScript using DevTools Activity Walkthrough – [ 5.56 minutes ]

Using Live/Five Server, open your debugging.html file in a browser.
Open the browser's DevTools and open the Console tab.Screenshot of DevTools JS error icon in menu
DevTools Console
1. Note any errors highlighted in red in the DevTools Console tab and outlined in the Console window. These are syntax or runtime errors. These errors will stop your code from running until they are fixed.
1. Fix the first error identified in the debugging.js file. The image below indicates that the error is on line 6 (debugging.js:6).

Screenshot of DevTools console with syntax error
The comparison operator == is confusing the compiler. In VS Code, remove the extra equal sign.

```js
const PI = 3.14159;
```

In your localhost browser session, refresh the page and check the console for the next error.
Screenshot of DevTools console with syntax error
This error refers to the issue of trying to assign a value to an HTML element reference. This might be confusing given the error message says "Assignment to constant variable". Change the lines of code for both elements to use the textContent property.

```js
radiusOutput.textContent = radius;
areaOutput.textContent = area;
```

In your localhost browser session, refresh the page and check the console for the next error.
Screenshot of DevTools console with syntax error
This error message is accurate. The code is attempting to assign a new value to the radius variable, which was declared as a constant. Change the variable declaration from const to let.

```js
let radius = 10;
```

1. Fix any other errors found in the console.
1. After you get output to the page that appears correct, open the Sources panel in DevTools.
1. Practice "step debugging" through the JavaScript code by setting a breakpoint—click on the line number where you want to pause program execution.
1. Refresh the page to trigger the code to run again. The page will be grayed out and display the message "Paused in debugger".

Screenshot of DevTools Paused in debugger
Use the Step →• button to move through the code line by line.
Screenshot of DevTools debugger step button
1. At any time, you can hover your mouse over a variable to view its current value.
1. Continue to step through the code until you have a good understanding of how the code is executing.

<https://www.loom.com/share/2b6aa47d5d204d18ba16619200ed6d46>
