// Get the unordered list element
var list = document.getElementsByTagName('ul')[0];

// Create a list item
// Create a text node
// Append the text node to the list item
// Append the list item to END of the unordered list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// Create a list item
// Create a text node
// Append the text node to the list item
// Insert the list item before the first child
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);
