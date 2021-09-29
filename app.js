// Select elements
const main = document.getElementById('main');
const myBtn = document.getElementById('myBtn');

// Declare function
function setup() {
  var username; // Create variable
  username = document.getElementById('username'); // Get input
  username.focus(); // Give input focus
}

// When page loaded call setup()
window.addEventListener('load', setup, false);

// Add event listeners
main.addEventListener('click', function () {
  console.log('Main was clicked!');
  main.style.backgroundColor = 'cornsilk';
  main.style.color = 'black';
});

myBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('My button was clicked!');
  main.style.backgroundColor = 'orange';
});
