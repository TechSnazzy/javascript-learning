/*
Select the button.
*/
var myBtn = document.getElementById('myBtn');
var main = document.getElementById('main');
var myList = document.getElementById('myList');

/*
Check the event object by clicking on the main div.
*/
main.addEventListener('click', function (e) {
  console.log(e);
});

/*
Check the event object by clicking on the button.
*/
myBtn.addEventListener('click', function (e) {
  console.log(e);
  console.log('Bubbles are set to ' + e.bubbles);
  if (e.ctrlKey) {
    console.log('CTRL key was pressed while clicking.');
  } else {
    console.log('Nope, the CTRL key was not pressed.');
  }
});

/*
Change background of list items using event delegation
*/
myList.addEventListener('click', function (e) {
  // Select the target from the event object
  // Note that the target is the ul which is the parent of the list items
  var target = e.target;

  // Use the matches() method on target
  if (target.matches('li')) {
    target.style.backgroundColor = 'red';
  }
});
