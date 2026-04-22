# W03 Learning Activity: JavaScript Functions

## Overview

Functions are fundamental building blocks in JavaScript. They are reusable blocks of code you can call by name to perform specific tasks. Functions can receive input data and return output to the caller.

"Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it." – MDN

## Prepare

Read Functions – MDN
Focus on how to define and call functions:

Function declaration
Function expression
Arrow function expression
Calling functions
Quick distinctions: Declarations are hoisted and named; function expressions assign a function to a variable; arrow functions are expressions with concise syntax and lexical this (no own this or arguments).

## Check Your Understanding

Given the following code snippet:

```js
let firstName = 'Antonia';
let lastName = 'Francesca';
```

Write a function declaration (definition) named fullName with parameters first and last. It should return a single string (a full name) with a space between the values.

### Answer

```js
function fullName(first, last) {
  return `${first} ${last}`;   // string concatenation (first + ' ' + last) is an alternative
}
```

Use an anonymous function expression to do the same thing where the function is assigned to a variable named fullName.

### Answer

```js
const fullName = function (first, last) {
  return `${first} ${last}`;
}
```

Use an arrow function expression to do the same thing where the function is assigned to a variable named fullName.

### Answer

```js
const fullName = (first, last) => `${first} ${last}`;
```

Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName

### Answer

```js
document.querySelector('#fullName').textContent = fullName(firstName, lastName);
```

## Optional Resources

Functions-reusable blocks of code – MDN JavaScript Tutorial
Build your own function – MDN JavaScript Tutorial
Test Your Skills: Functions – MDN JavaScript Building Blocks

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>
