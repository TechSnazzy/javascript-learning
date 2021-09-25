// Select elements
const main = document.getElementById('main');
const myBtn = document.getElementById('myBtn');

// Add event listeners
main.addEventListener('click', function () {
  console.log('Main was clicked!');
});

myBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('My button was clicked!');
});
