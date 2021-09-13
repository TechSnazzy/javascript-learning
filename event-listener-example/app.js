const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener('click', (e) => {
  console.log('Grandparent bubble');
});

grandparent.addEventListener(
  'click',
  (e) => {
    console.log('Grandparent capture');
  },
  { capture: true } // is false by default
);

parent.addEventListener('click', (e) => {
  console.log('Parent bubble');
});

parent.addEventListener(
  'click',
  (e) => {
    //e.stopPropagation(); // stop propagating
    console.log('Parent capture');
  },
  { capture: true }
);

child.addEventListener('click', (e) => {
  console.log('Child bubble');
});

document.addEventListener('click', (e) => {
  console.log('Document bubble');
});
