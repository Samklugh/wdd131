const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');
const delButton = document.createElement('button');
li.textContent = input.value;
delButton.textContent = "❌";
li.appendChild(delButton);
list.appendChild(li);