// var apple = document.getElementById('apple');
// apple.className = 'apple';

// note: array syntax is faster than item() method

var fruitList = document.querySelectorAll('li.items');

for (var i = 0; i < fruitList.length; i++) {
  fruitList[i].className = 'apple';
}