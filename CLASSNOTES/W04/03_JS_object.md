# W04 Learning Activity: JavaScript Objects

## Overview

JavaScript objects group related data and functions together. They are a core concept in JavaScript and used extensively throughout the language. In this activity, you will learn how to create and use objects effectively.

"An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects)." – MDN

## Course Learning Outcomes

1. Demonstrate proficiency with JavaScript language syntax.
1. Use JavaScript to respond to events and dynamically modify HTML.

## Prepare

Rather than storing related data in complex parallel or multi-dimensional arrays, you can use objects, which are more readable, stable, and maintainable.

1. The JavaScript object structure is similar to a Dictionary in Python. Objects in JavaScript are collections of key:value pairs.
1. The key is on the left side of the colon and the value is on the right.
1. The key is a string but does not always need to be quoted. Quotes are necessary if the key has a space in it.
1. The value can be anything that can be assigned to a variable in JavaScript: primitives, arrays, other objects, functions, etc.
1. Keys that store data are called properties, keys that store functions are called methods.
1. This is an example of a JavaScript object literal (a collection of key-value pairs) representing a person in a concise and readable format.

```js
let person = {

name: "Antonia Francesca",
age: 30,
profession: "Software Engineer",
hobbies: ["reading", "playing guitar", "hiking"],
address: {
street: "123 Camino Real",
city: "Santa Rosa",
country: "Honduras"

  },

isEmployed: true,
greet: function() {

    console.log(`Hello, my name is ${this.name}.`);
  }
};
```

1. The person object includes properties name, age, profession, hobbies, address, and isEmployed.
1. It also includes a greet method that logs a greeting message to the console using the person's name.
1. The address property is an object itself, containing nested properties: street, city, and country.
1. You can access and modify the properties and invoke the methods of the person object using bracket [] or dot notation.
1. ✓ Determine the output of the following statements given the person object defined above.

```js
console.log(person['isEmployed']);   // bracket notation
console.log(person.hobbies[0]);   // dot notation
console.log(person.age);   // dot notation
console.log(person['address'].city);   // combined notation
```

Answers
1. true
2. reading (returns the first hobby in the list)
3. 30
4. Santa Rosa
Updating a value works like you expect.

```js
person.age = 31;
```

Reference: Object Basics – MDN

## Activity Instructions

Use objects and encapsulation to create a representation of a typical college course schedule.

The following CodePen ☼ JavaScript Objects can be used to work on this activity.

Given the following object literal for a course,

```js
let aCourse = {

code: "WDD131",
title: "Dynamic Web Fundamentals",
credits: 2,

};
```

add a sections property to the object. Since the course may have more than one section, make this sections an array of at least two (2) items with the following properties:
section
enrolled
instructor

## Check Your Understanding

```js
let aCourse = {

code: "WDD131",
title: "Dynamic Web Fundamentals",
credits: 2,
sections : [
```

{ section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
{ section: "002", enrolled: 80, instructor: "Sarah Gobble" }

```js
  ]
};
```

Create a function named setCourseInformation() to display the course code and title in HTML. Pass the course object as a parameter. Use dot notation to access the properties you need and update the element with id courseName.

## Check Your Understanding

```js
function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} – ${course.title}`;
}
```

Create a function named renderSections() that displays the course sections as rows in a table with id sections.

## Check Your Understanding

```js
function renderSections(course) {
  const tbody = document.querySelector("#sections tbody");
  let rows = "";
  for (const section of course.sections) {
```

rows += `<tr>

```html
<td>${section.section}</td>
<td>${section.enrolled}</td>
<td>${section.instructor}</td>
```

</tr>`;

```js
  }
  tbody.innerHTML = rows;
}
```

Example Solution: CodePen ☼ JavaScript Objects

<https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics>

<https://codepen.io/BYU-Idaho/pen/YPKoExM>

<https://codepen.io/BYU-Idaho/pen/gbYNGYv>
