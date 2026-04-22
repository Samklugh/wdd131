# W05 Learning Activity: JavaScript localStorage

## Overview

Non-sensitive data storage can provide a better user experience and improve site performance. The Web Storage API allows you to store information in key-value format based on a specific user agent or origin. In this activity, you will explore the purpose and scope of the localStorage mechanism through the Storage interface and use this knowledge to store and display client-specific data.

The web storage data is saved in a SQLite file in a subfolder or file in the user's profile folder.

## Prepare

Here is a comparison of cookies, localStorage, and sessionStorage:

Table 1: Local Storage Methods Comparison Chart
Cookies	localStorage	sessionStorage
Capacity	~4KB	~5MB	~5MB
Expires	Manually set	Never	On tab/windows close
Accessible from	Any window	Any window	Same tab
Each of these methods stores data with the actual user agent (browser) client and not on the server.

localStorage Advantages
1. This method is more intuitive than the older cookie approach.
1. Only stores strings in key-value pairs.
1. Data persists indefinitely without expiring and remains available even after the browser is closed and reopened.
1. To store non-string data in localStorage, use JSON.stringify() to convert the data to a string before storing, then use JSON.parse() to convert it back when retrieving. This approach allows you to store and retrieve complex data structures like objects and arrays.

localStorage Demonstration
1. Watch: localStorage Demonstration – See the corresponding CodePen example.
1. Fork (Copy) this Pen to your own CodePen account and play with the code.

What are some of the differences between session and local storage?
One main difference is that localStorage data persists even when the browser session expires, while session variables do not.

Using the Storage interface, what are some methods built into this interface object and what do they do?
The most common Storage interface methods are getItem() and setItem(), which you will use in the assignments. Other available methods include key(), removeItem(), and clear().
Storage Interface of the Web Storage API

Activity Overview
This activity revisits the favorite Book of Mormon chapters application. Currently, user entries are lost when they leave the application because the data is not persisted anywhere. In this activity, you will use localStorage to store the BOM chapter list so that user entries persist between visits.

The high level directions for this problem would be "Enhance the favorite Book of Mormon chapters application so that user entries persist between visits using the localStorage API". Think about a solution to this problem and map it out on paper.

The directed plan is to create an array of valid book and chapter entries made by the user. Store that array in localStorage as a JSON string using JSON.stringify(). Upon application load, retrieve and parse the array from localStorage using JSON.parse(), if the named localStorage item exists. Then populate the list with the stored values.

Rather than creating two functions that perform essentially the same task, you will create a single function that both appends the favorite chapter list with a delete button on initial load and when a new entry is added.

## Activity Instructions

1. Note that the given code is just an example. You may have used different variable names, etc. You should never just copy code.
1. Make a copy of your BOM application, by copying the HTML, CSS, and JavaScript from the previous learning activity into a week05 folder.
1. Open the JavaScript file. Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList (This function does not exist, yet).
1. In that same array variable declaration and assignment, add a compound OR condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing.
1. This works because the function might not return anything, so it is falsy which means it will revert to assigning the empty array to chaptersArray.

Example

```js
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
```

Code Explanations
The first three lines establish references to the DOM elements that you will be using in the program. Note that they only reference the HTML element objects, not any properties.

The array declaration initializes the chaptersArray variable with the list of chapters returned by the getChapterList() function or an empty array if the function call returns null or undefined.

Now populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter. Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter. That way each entry will be processed (i.e., appended to the list).
Example

```js
chaptersArray.forEach(chapter => {

displayList(chapter);

});
```

1. Change the button click event listener to only do the following tasks (the other tasks in that original function will be used in a separate function named displayList):
1. Check if the input is empty; if it is not empty, then ...

Call displayList with the input.value argument
Push the input.value into the chaptersArray
Update the localStorage with the new array by calling a function named setChapterList
1. Set the input.value to nothing
1. Set the focus back to the input.

Example with // code comments

```js
button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty

displayList(input.value); // call the function that outputs the submitted chapter
chaptersArray.push(input.value);  // add the chapter to the array
setChapterList(); // update the localStorage with the new array

    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }

});
```

1. Create the displayList defined function that receives one parameter named item.
1. Put all the code that builds a list item from the previous button click event listener into this new displayList function and use the item parameter as the input. A deleteChapter function will need to be called within the delete button click event to remove the chapter from the array and localStorage.
1. Example: displayList()

```js
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';

deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button

  li.append(deletebutton);
  list.append(li);
```

deletebutton.addEventListener('click', function () {

```js
    list.removeChild(li);

deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.

    input.focus(); // set the focus back to the input

});

  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}
```

1. Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
1. Example: setChapterList()

```js
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
```

1. Define the getChapterList function to retrieve the localStorage item. No parameter is needed. Since this function returns data to be assigned to an array, use JSON.parse() to convert the string back.
1. Example: getChapterList()

```js
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}
```

1. Finally, define the deleteChapter function with a parameter named chapter that does three things.
1. Reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when you called the deleteChapter function. Use string.slice() method to extract the last character.

```js
chapter = chapter.slice(0, chapter.length – 1); // this slices off the last character
```

Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.

```js
chaptersArray = chaptersArray.filter((item) => item !== chapter);
```

1. Call the setChapterList function to update the localStorage item.
1. Example: deleteChapter()

```js
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length – 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);

setChapterList();

}
```

## Testing

Test the application by adding and removing chapters. Perform a hard refresh to clear the cache and verify the chapters persist. You can also view and delete all localStorage content in the Application tab of DevTools.

## Optional Resources

Video: JavaScript Cookies vs localStorage vs Session Storage – Web Dev Simplified

A more advanced approach to this activity would be to use the Set object in JavaScript, which allows you to easily add and delete items as needed.

Reference: Web Storage API – MDN

1. The IndexedDB API is a more robust method of storing data on the client side and is more like a database.
1. The Cache API is a method of storing data that is specifically used for caching data for offline use.

<https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API>

<https://developer.mozilla.org/en-US/docs/Web/API/Storage>

<https://video.byui.edu/media/t/1_z77p3i7c>

<https://codepen.io/BYU-Idaho/pen/ZYYEaEK>

<https://developer.mozilla.org/en-US/docs/Web/API/Storage>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify>

<https://developer.mozilla.org/en-US/docs/Glossary/Falsy>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>

ADDITIONAL RESOURCES:

<https://www.youtube.com/watch?si=M_OwWHklCjK3mNfy&v=GihQAC1I39Q&feature=youtu.be>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set>

<https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API>

<https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API>

<https://developer.mozilla.org/en-US/docs/Web/API/Cache>
