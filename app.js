/*
Click an HTML button to append
an Apple list item to the list.
*/

var fruitList = document.querySelectorAll('li.items');

for (var i = 0; i < fruitList.length - 1; i++) {
  fruitList[i].className = 'apple';
}

var firstItem = document.getElementById('apple');
firstItem.textContent = '🫐 Blueberry';

function addApple() {
  // Create an li node
  var apple = document.createElement('li');

  // Create a text node
  var textnode = document.createTextNode('🍎 Apple');

  // Append the text node to the li node
  apple.appendChild(textnode);

  // Add a class to the lie
  apple.className = 'apple';

  // Select the myList ul
  document.getElementById('myList');

  // Append the apple list item to the list
  myList.appendChild(apple);
}
