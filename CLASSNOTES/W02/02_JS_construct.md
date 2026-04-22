# W02 Learning Activity: JavaScript Constructs

## Overview

Through the prerequisite programming courses, you have built a foundational understanding of common programming constructs, including operators, expressions, decision structures, loops, and functions. This activity focuses on a few core control structures.

## Associated Course Learning Outcomes

Demonstrate proficiency with JavaScript language syntax.

## Prepare

Operators
Expressions
Decisions
Loops

## Activity Instructions

Operators
In programming, operators are symbols used to perform operations on operands (variables and values) and to process expressions. Many operators perform mathematical work such as addition, subtraction, multiplication, and division. Others handle assignment, comparison, and logical operations.

Assignment Operators
Assignment operators are used to assign values to variables.

Operator
Description
Example
Same As
=
Assigns a value to a variable
x = y
x = y
+=
Adds a value to a variable
x += y
x = x + y
-=
Subtracts a value from a variable
x -= y
x = x - y
*=
Multiplies a variable by a value
x *= y
x = x * y
/=
Divides a variable by a value
x /= y
x = x / y
%=
Assigns a remainder to a variable
x %= y
x = x % y
**=
Exponentiates a variable by a value
x **= y
x = x ** y
&&=
Logical AND assignment
x &&= y
x = x && y
||=
Logical OR assignment
x ||= y
x = x || y
Example:

```js
let x = 5;
let y = 10;
```

x += y; // x is now 15 and y is still 10
You can write JavaScript code directly in the browser's console to test it. Open DevTools, switch to the Console tab, type your code, and press Enter to run it.

Video Demonstration: [ 20 seconds ]

Key Points:

The = operator assigns a value; it does not check equality
The variable name goes on the left side
The value (literal value, variable, or expression) to assign goes on the right side
After assignment, the variable stores the value and can be used throughout your program
Arithmetic Operators
Arithmetic operators are used to perform arithmetic operations.

Operator
Description
Example
Same As
+
Addition
x + y
x + y
-
Subtraction
x - y
x - y
*
Multiplication
x * y
x * y
/
Division
x / y
x / y
%
Modulus (Remainder)
x % y
x % y
**
Exponentiation
x ** y
x ** y
Example:

```js
let a = 7;
let b = 3;
let c = a + b; // c is now 10
let d = a * 100; // d is now 700
let e = a % b; // e is now 1
```

Key Points:

Arithmetic operators are used to perform mathematical calculations
They can be used with both literal values and variables
Operator precedence determines the order of operations in complex expressions
Comparison Operators
Comparison operators are used to compare two values and return a boolean value (true/false) based on the comparison.

Operator
Description
Example
Returns
==
Equal to
x == y
true if x is equal to y
===
Strict equal to
x === y
true if x is equal to y and they are of the same data type
!=
Not equal to
x != y
true if x is not equal to y
!==
Strict not equal to
x !== y
true if x is not equal to y or they are of different types
<
Less than
x < y
true if x is less than y
<=
Less than or equal to
x <= y
true if x is less than or equal to y
Example:

```js
let x = 10;
let y = 5;
let z = x + y;

console.log(z == 15); // true
console.log(z === "15"); // false
console.log(x < y); // false
```

Key Points:

Comparison operators return boolean values (true/false)
They are commonly used in conditional statements and loops to control program flow
Strict equality (===) checks both value and type, while loose equality (==) checks only value
Logical Operators
Logical operators are used to combine multiple boolean expressions and return a boolean value based on the compounded logical operation.

Operator
Description
Example
Returns
&&
Logical AND
x && y
true if both x and y are true
||
Logical OR
x || y
true if either x or y is true
!
Logical NOT
!x
true if x is false; false if x is true
Example:

```js
let a = true;
let b = false;
let c = a && b;

console.log(c); // false

let d = a || b;

console.log(d); // true

let e = !a;

console.log(e); // false
```

Key Points:

Logical operators are used to combine or invert boolean expressions
They are essential for controlling program flow in conditional statements and loops
Short-circuit evaluation with && and || stops evaluation as soon as the result is known
Back to Top
Expressions
An expression is a combination of values, variables, operators, and functions that are evaluated to produce a single value. Expressions are used to perform calculations, make decisions, and manipulate data in programming.

Types of Expressions
Arithmetic Expressions: These expressions involve arithmetic operators (such as +, -, *, /) to perform mathematical calculations.

```js
let result = (5 + 3) * 2;
```

String Expressions: These expressions involve string concatenation or manipulation using the + operator or string methods.

```js
let greeting = "Hello, " + "world!";
```

Logical Expressions: These expressions use logical operators (such as &&, ||, !) to evaluate boolean values.

```js
let isAdult = age >= 18 && hasID;
```

Back to Top
Decisions
Conditional structures are used to make decisions in programming. They allow the program to execute different blocks of code based on whether a specified condition is true or false. The most common conditional structures in JavaScript are the if statement, the else statement, and the else if statement.

if statement: Executes a block of code if a specified condition is true.

```js
if (condition) {

// Code to execute if the condition is true

}
```

The condition is evaluated to a boolean value, i.e., true or false.

If the condition is true, the code block inside the if statement is executed. If it is false, the code block is skipped.

Example:

```js
let age = 20;
if (age >= 18) {
  console.log("Price: Adult — you pay full price.");
}
else statement: Provides an alternative block of code to execute if the condition in the if statement is false.
if (condition) {

// Code to execute if the condition is true
```

} else {

```js
// Code to execute if the condition is false

}

Example:

let age = 16;
if (age >= 18) {
  console.log("Price: Adult — you pay full price.");
```

} else {

```js
  console.log("Price: Child — you get a discount.");
}
else if statement: This structure allows for the checking of multiple conditions in sequence.
if (condition1) {

// Code to execute if condition1 is true
```

} else if (condition2) {

```js
// Code to execute if condition2 is true
```

} else {

```js
// Code to execute if none of the conditions are true

}

Example:

let age = 65;
if (age < 13) {
  console.log("Price: Child — you get a discount.");
```

} else if (age <= 64) {

```js
  console.log("Price: Adult — you pay full price.");
```

} else {

```js
  console.log("Price: Senior — you get a discount.");
}
```

Switch Statements: Provides a way to execute selective blocks of code based on the value of an expression.
switch (expression) {
case value1:

```js
// Code to execute if expression is equal to value1
```

break;
case value2:

```js
// Code to execute if expression is equal to value2
```

break;
1. // ... more cases ...
1. default:

```js
// Code to execute if none of the cases match

}

Example:

let day = 3;
```

switch (day) {
case 1:

```js
    console.log("Monday");
```

break;
case 2:

```js
    console.log("Tuesday");
```

break;
case 3:

```js
    console.log("Wednesday");
```

break;
default:

```js
    console.log("Another day");
}
```

Back to Top
Loops
Loops are used to repeat a block of code multiple times until a specified condition is met. The most common loop structures in JavaScript are the for loop, the while loop, and the forEach loop.

for Loop: Repeats a block of code a specified number of times.

```js
for (let i = 0; i < 10; i++) {

// Code to execute in each iteration

}

Example:

for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}
```

while Loop: Repeats a block of code as long as a specified condition is true.

```js
while (condition) {

// Code to execute while the condition is true

}

Example:

let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
```

count++;

```js
}
```

forEach Loop: Used with arrays; it iterates over each element of the array.
array.forEach(function(element) {

```js
// Code to execute for each element

});

Example:

let fruits = ["apple", "banana", "cherry"];
```

fruits.forEach(function(fruit) {

```js
  console.log("Fruit: " + fruit);

});
```

Back to Top

## Activity Instructions

Given the following variable declarations:

```js
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
```

1. Write the following programming snippets in your browser console:
1. Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
1. Repeat the previous programming snippet by using a while loop.
1. Repeat the previous programming snippet by using a forEach loop.
1. Repeat the previous programming snippet by using a for...in loop.
1. Use any type of loop to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) for the next DAYS days starting today.
1. Check Your Understanding – Example Answers
1. These answers are certainly not exhaustive.

```js
// for loop

      for (let i = 0; i < studentReport.length; i++) {
        if (studentReport[i] < LIMIT) {
          console.log(studentReport[i]);
        }
      }

// while loop

      let i = 0;
      while (i < studentReport.length) {
        if (studentReport[i] < LIMIT) {
          console.log(studentReport[i]);
        }
```

i++;

```js
      }

// forEach loop
```

studentReport.forEach(function (item) {

```js
        if (item < LIMIT) {
          console.log(item);
        }

});

// for...in loop

      for (let i in studentReport) {
        if (studentReport[i] < LIMIT) {
          console.log(studentReport[i]);
        }
      }
```

Use this CodePen to guide you in a solution to the last question. This requires you to sift through the example code to find what is applicable.

CodePen ☼ JavaScript – Get Future Days from Today
In this CodePen ⚙️ JavaScript – Get Future Days from Today, look for the loop in the JavaScript panel that generates future day names based on the current day. Fork the pen and modify the code to use a different type of loop than originally implemented (for, while, forEach, for...in).

## Optional Resources

Expressions and operators – MDN
Making decisions in your code — conditionals – MDN
Looping code – MDN
Loops and Iteration – MDN

<https://www.loom.com/share/f96e1cece9c847299efccce5b8645491>

<https://codepen.io/BYU-Idaho/pen/wBwYZpz>

<https://codepen.io/BYU-Idaho/pen/wBwYZpz>
