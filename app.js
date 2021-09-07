// ===== EXAMPLE 1 ================================
// Select the paragraph ID
var para = document.getElementById('paragraph');

// Select the firstChild of the paragraph
// The firstChild is the text node and the nodeValue is the text
var paraText = para.firstChild.nodeValue;

// Display the text in the console
console.log(paraText);

// ===== EXAMPLE 2 ================================
// Select all the whole collection of list items
var listItemOneText = document.getElementsByClassName('list-items');

// Get the content of the first list item and store it in a variable
var itemOne = listItemOneText[0].textContent;

// Display in console
console.log(itemOne);

// ===== EXAMPLE 3 ================================
// Select CSS elements
var cssListItems = document.querySelectorAll('li.list-items');
var cssItemTwo = cssListItems[1].textContent;
console.log(cssItemTwo);
