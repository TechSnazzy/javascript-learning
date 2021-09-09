// Get the unordered list element
var list = document.getElementsByTagName('ul')[0];

// Create a list item
// Create a text node
// Add the text node to the list item
// Add the list item to the unordered list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);
