/*
Select the button.
*/
var myBtn = document.getElementById('myBtn');

/*
Check the event object.
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
