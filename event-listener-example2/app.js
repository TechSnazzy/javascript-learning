const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', function () {
  console.log('I am the GRANDPARENT who is bubbling.');
});

parent.addEventListener(
  'click',
  function () {
    console.log('I am the PARENT who is capturing.');
  },
  true
);

child.addEventListener('click', function () {
  console.log('I am the CHILD who is bubbling.');
});
