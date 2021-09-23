/*
Select the button.
*/
var myBtn = document.getElementById('myBtn');
var main = document.getElementById('main');

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
Check the event object by clicking on the main div.
*/
main.addEventListener('click', function (e) {
  console.log(e);
});
