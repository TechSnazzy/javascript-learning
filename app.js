var el = document.getElementById('message');
el.textContent = 'Click to Update!';

function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = 'This is an updated message!';
}

// Function that returns width and height values.
function getMultiValues(width, height) {
  var width = width;
  var height = height;
  var array = [width, height];
  return array;
}

// Call function to return width and height values.
var valWidth = getMultiValues(200, 400)[0];
var valHeight = getMultiValues(200, 400)[1];

// Display function results.
console.log(`The width is ${valWidth} inches.`);
console.log(`The height is ${valHeight} inches.`);
