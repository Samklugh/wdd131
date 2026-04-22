# W04 Learning Activity: JavaScript Array Functions

## Overview

Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. It is a declarative programming paradigm, which means you express your program through expressions or declarations rather than statements. Array methods that support functional programming include filter(), map(), and reduce(). While there are other array methods that support functional programming, this activity focuses on these three common and useful methods.

## Course Learning Outcomes

1. Demonstrate proficiency with JavaScript language syntax.
1. Use JavaScript to respond to events and dynamically modify HTML.

## Prepare

1. array.filter()
1. The array.filter() method creates a new array containing only elements that meet a specified condition.

Reference Array.filter() – MDN
1. array.map()
1. The array.map() method transforms each element of an array using a provided function and returns a new array with the transformed elements. The original array is not modified, and the new array has the same number of elements as the original.

Reference Array.map() – MDN
1. array.reduce()
1. The array.reduce() method reduces an array to a single value by executing a reducer function on each element. The reducer function takes four arguments: accumulator, current value, current index, and source array. The function's returned value updates the accumulator, which is carried through each iteration and becomes the final result.

Reference Array.reduce() – MDN

## Check Your Understanding

For all of these exercises, use this array declaration:

```js
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
```

Using the array.filter() method, create an array named namesB with only those names from the names array that start with the character 'B'.

### Answer

```js
let namesB = names.filter(name => name.charAt(0) === 'B');
```

Using the array.map() method, create a new array named namesLength that contains the length of each name in the names array. Expected output is [5, 8, 5, 8, 3].

### Answer

```js
let nameLengths = names.map((name) => name.length);
```

Using the names.reduce() method, create an expression that returns the average string length of the names in the names array. Expected output is 5.8.

### Answer

```js
names.reduce((total, name) => total + name.length, 0) / names.length;
```

The initial value for the accumulator is set to 0. Inside the reducer function, total represents the accumulated sum of string lengths, and name represents each individual name in the array. The reducer function adds the length of each name to the total in each iteration (equivalent to total += name.length).

Practice Exercises: CodePen ☼ JavaScript Array methods

## Check Your Understanding

Example solutions: CodePen ☼ JavaScript Array Methods

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce>

<https://codepen.io/BYU-Idaho/pen/EaxworK>

<https://codepen.io/BYU-Idaho/pen/raNYBVx>
