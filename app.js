// Select elements
const main = document.getElementById('main');
const myBtn = document.getElementById('myBtn');

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
