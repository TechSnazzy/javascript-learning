// ==================== EXAMPLE 1 =======================
// Set a fruit variable to hold new list items in an array
var fruits = ['🍎 Apples', '🍌 Banana', '🍓 Strawberry'];

// Grab the unordered list
var list = document.getElementsByClassName('items');

// Function that will change list items
function updateList() {
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = fruits[i];
  }
}

// Call the function to update the list
updateList();

// ==================== EXAMPLE 2 =======================
var appleLink = 'https://www.google.com';

// Get the apple ID
var apple = document.getElementById('apple');

// Capture the current apple content
var appleText = apple.innerHTML;

// Update the apple with this new text and markup
apple.innerHTML = `<a href="${appleLink}" target="_blank">${appleText}</a>`;
