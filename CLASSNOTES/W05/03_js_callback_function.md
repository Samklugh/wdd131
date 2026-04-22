# W05 Learning Activity: JavaScript Callback Functions

## Overview

Callback functions are a powerful feature of JavaScript, widely used in the language itself and in the browser. They are used to handle events, process data, and control the program's flow.

"A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action." – MDN Web Docs

## Course Learning Outcomes

1. Demonstrate proficiency with JavaScript language syntax.
1. Use JavaScript to respond to events and dynamically modify HTML.

## Prepare

Reference Callback Functions – MDN
Read this article which demonstrates the use of callback functions: Callback with built-in functions – devgenius.io

## Activity Instructions

Given these function declarations:

```js
function calculate(a, b, callback) {

callback(a + b);

}

function displayResult(result) {
  console.log('The result is: ' + result);
}
```

Call the calculate function and pass it the arguments needed to produce the console output 2 + 3. Note that you will pass three arguments total: two numbers and a callback function.

## Check Your Understanding

1. calculate(2, 3, displayResult)
1. A common use of callback functions in JavaScript is for asynchronous operations, such as handling events or making asynchronous requests. Here is a simulated example:

```js
function fetchData(callback) {

// using setTimeout to simulate fetching data from a server

  setTimeout(() => {

// This calls the 'callback' function and passes data to it.
callback('Data has been fetched');

}, 2000); // This simulates a 2-second delay from a service.

}

// function that processes the data

function processData(data) {
  console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);
```

The fetchData function simulates server data fetching using setTimeout to create a 2-second delay. After the delay, it invokes the callback function, passing 'Data has been fetched' as an argument. In this example, processData is passed as the callback, and it logs the received data to the console when invoked.

<https://developer.mozilla.org/en-US/docs/Glossary/Callback_function>

<https://developer.mozilla.org/en-US/docs/Glossary/Callback_function>

<https://blog.devgenius.io/array-callback-methods-arrow-functions-9ecbd728f63?gi=b5760b3c6658>
