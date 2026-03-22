# WDD 131: Dynamic Web Fundamentals
BYU-I logo

## Navigation
- Home
- W1
- W2
- W3
- W4
- W5
- W6
- W7

# W03 Learning Activity: JavaScript Arrays

## Overview
An array is a data structure that stores multiple values in a single variable instead of declaring separate variables for each value.

## Prepare
In JavaScript, arrays can be declared like this:

```js
let scores = [100, 72, 83, 94, 88, 87];
let names = ['Nancy','Blessing','Jorge','Svetlana'];
```

Arrays are zero-indexed, meaning the first element is at index 0, the second element is at index 1, and so on.

Arrays can be accessed by an index reference:

```js
let aScore = scores[0];  // The aScore variable is assigned the value of 100
```

Array values can be modified:

```js
scores[0] = 99; // This assignment expression changed the first score in the array from 100 to 99.
```

Arrays can be iterated over using a classic for loop:

```js
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}
```

Preferred: Arrays can also be iterated using other looping structures, such as forEach:

```js
scores.forEach(function(score) {
  console.log(score);
});
```

Arrays have a length property:

```js
let numScores = scores.length; // The numScores variable is assigned the value of 6
```

## Array Methods
Arrays have several methods that can manipulate (change) them:
- `scores.push(100);` // Adds a new element to the end of the array
- `scores.pop();` // Removes the last element from the array
- `scores.shift();` // Removes the first element from the array
- `scores.unshift(100);` // Adds a new element to the beginning of the array
- `scores.slice(2,3);` // Returns a shallow copy from the start index up to, but not including, the end index
- `scores.splice(2, 1);` // Removes 1 element from the array starting at index 2
- `scores.join(', ');` // Transforms the array into a single string using a comma and space as the delimiter

Reference JavaScript Arrays Reference – MDN
This reference provides a complete list of array methods; several are used extensively in this course.

## Check Your Understanding
Given this array declaration:

```js
let names = ['Nancy','Blessing','Jorge','Svetlana'];
```

1. What is the value of the following expression?
`names[2];`
**Answer:** Jorge

2. What is the value of the following expression?
`names.length;`
**Answer:** 4

3. What is the index of the last item in the array? (Svetlana)
**Answer:** 3

4. What does the following expression do?
`names.push('Sally');`
**Answer:** Adds a new element to the end of the array

## Optional Resources
- Master JavaScript Array Methods Like a Pro

Week 03 Home
Copyright © Brigham Young University-Idaho | All rights reserved
