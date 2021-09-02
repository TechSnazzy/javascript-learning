// var apple = document.getElementById('apple');
// apple.className = 'apple';

// note: array syntax is faster than item() method

var groceryList = document.querySelectorAll('li.items');

for (var i = 0; i < groceryList.length; i++) {
  groceryList[i].className = 'apple';
}