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
