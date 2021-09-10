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

// Select all list items
var listItems = document.querySelectorAll('li');

// Add a class to all list items
var i;
for (i = 0; i < listItems.length; i++) {
  listItems[i].className = 'cool';
}

// Select the h2 element
// Then store the h2 text in a variable
// Then store the list length in a variable
// Then store the new heading string in a variable
// Then add the heading html to the page
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;
