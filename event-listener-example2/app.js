const main = document.getElementById('main');
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

main.addEventListener('click', function () {
  console.log('MAIN, bubbling.');
});

grandparent.addEventListener('click', function () {
  console.log('GRANDPARENT, capturing.');
});

parent.addEventListener('click', function () {
  console.log('PARENT, bubbling.');
});

child.addEventListener('click', function () {
  console.log('CHILD, bubbling.');
});

/*
1. Select the element.
2. Bind the event to the DOM node.
3. Call the code that will be run when the event occurs. 
*/
