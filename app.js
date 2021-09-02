// var apple = document.getElementById('apple');
// apple.className = 'apple';

// note: array syntax is faster than item() method

var groceryList = document.getElementsByTagName('li');

for (var i = 0; i < groceryList.length; i++) {
  groceryList[i].className = 'apple'; // array syntax
  //groceryList.item(i).className = 'apple'; // item() method
}
