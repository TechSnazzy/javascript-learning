const right = document.getElementById('right-side');
const button = document.getElementById('button');

button.addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('Button was clicked');
  right.style.backgroundColor = 'orange';
});
