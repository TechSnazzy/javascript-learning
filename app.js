/*
Select username and feedback elements
*/
var username = document.getElementById('username');
var feedback = document.getElementById('feedback');

/*
Create a function that checks the
length of the value of the username input
*/
function checkUsername(minLength) {
  // explaining this.value.length
  // get the value of username
  // and get the length of the value
  // this refers to the element at the beginning of the event listener which is the object at the top of the global scope
  if (username.value.length < minLength) {
    feedback.textContent =
      'Username must be ' + minLength + ' characters or more!';
  } else {
    feedback.textContent = '';
  }
}

/*
Handle the event with an event listener
*/
username.addEventListener(
  'blur',
  function () {
    checkUsername(5);
  },
  false
);

/*
Handle the event with an event handler
*/
//username.onblur = checkUsername;
