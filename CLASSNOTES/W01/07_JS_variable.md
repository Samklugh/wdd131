# W01 Learning Activity: JavaScript Variables

## Overview

Variables are used to store values. These values can be primitive, such as a number, string, Boolean, or null, or they can be objects, such as a function, class, or literal object. These stored values can be used as input to expressions, in processing, or in output to display information.

To give you a better understanding of how JavaScript works, this course covers core features and control structures of the language, including variables. These programming structures and concepts are common to all programming languages. The use cases presented here are a review of what you have already learned in prerequisite courses.

## Prepare

Answer the following questions using these resources or through your own research:

Storing the information you need — Variables – MDN
JavaScript data types and data structures – MDN
What is the difference between const and let?

## Check Your Understanding

const: Declares a variable with a constant value. This means that once you assign a value to a const variable, you cannot reassign it later in your code.

```js
const currentYear = new Date().getFullYear();
```

1. The currentYear variable is assigned the computer's current year and cannot be reassigned later.
1. You can enter lines of code into most AI systems, and they will provide a breakdown explaining the purpose and function of each part of the code.

let: Declares a variable that can be reassigned later in your code.

```js
let isLoggedIn = false;
```

Define the string data type.

## Check Your Understanding

A string data type is a collection or sequence of characters treated as a single unit. Strings can include letters, numbers, symbols, and even spaces.

What is the data type of each of the following?
Hover over each of the bulleted values to reveal the answer.

"101"

101
true
null
undefined
Want to know more about any of these examples?
Enter the following prompt into an AI system: "In JS, what is the null data type"

Which should you use to wrap strings, single quotes('), double quotes("), or backticks(`)?

## Check Your Understanding

In JavaScript, you can use single quotes ('), double quotes ("), or backticks (`) to define string literals.

The most common approach is to use single quotes.

'This is a string.'

Double quotes are also commonly used. They can help you avoid escaping single quotes.

"It's a beautiful day!"

Since HTML attributes are often enclosed in double quotes, some developers prefer to use single quotes for JavaScript strings to visually distinguish them.

Template literals use backticks and support multi-line strings naturally. They also allow embedding variables and JavaScript expressions directly.

What is a template literal and why is it used to build strings?

## Check Your Understanding

Template literals are string literals that allow embedded expressions. They are enclosed by backticks (`) instead of single or double quotes. Template literals can contain placeholders, which are indicated by a dollar sign and curly braces ${expression}.

```js
let name = 'Alicia';
let age = 25;
let message2 = `My name is ${name} and I am ${age} years old.`;
```

What are code comments and how are they written in JavaScript?

## Check Your Understanding

Code commenting is a way to annotate your code for yourself and others who may read it.
Code comments example: CodePen ☼ JavaScript Code Comments

## Activity Instructions

1. Open this CodePen ☼ JavaScript Variables.
1. You might consider creating your own free CodePen account to store code snippets if you have not done so already. CodePen provides a web-based code editor where you can write HTML, CSS, and JavaScript code and see the results in real time.

1. Read the instructions in the JavaScript panel in the CodePen window.
1. Ponder the given questions as you work through the code examples and review the output.

Demonstration Video: ▶️ JavaScript Variables Activity – [ 5:50 minutes ]

## Optional Resources

JavaScript Basics – Variables – MDN.
Test your skills: variables – MDN

<https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures>

<https://codepen.io/BYU-Idaho/pen/zYgVXXa>

<https://codepen.io/BYU-Idaho/pen/NWQmxwa>

<https://www.loom.com/share/91a41ac62cdf4369a8a51aac32bbbde4>
