// A function is a box of logic that performs a specific task.

function greetings(){
    window.onload(alert("Welcome to my site"));
}

// greetings()

// to target an element in html through js, you can use .getElementById or .getElementsByClassName or .getElementsByTagName

const divBox = document.querySelector('.square');
console.log(divBox);
const newElement = document.createElement('p');
newElement.innerHTML = "This is a new paragraph added using JavaScript.";
divBox.appendChild(newElement);
// You can also change the style of an element using js

// Add a form for calculation
// How to submit a form in Javascript
// Learn about events in js
// Learn how to do arithmetic operations in js
// Combine 