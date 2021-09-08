// Get the paragraph ID
// Test if the paragraph has a class
// If it does then change the class to yellow
// Else change the class to orange

function changeColor() {
  var para = document.getElementById('paragraph');
  var items = document.getElementsByClassName('items');
  if (para.hasAttribute('class')) {
    para.setAttribute('class', 'yellow');
    items[1].setAttribute('class', 'items yellow');
  } else {
    para.setAttribute('class', 'orange');
  }
}
