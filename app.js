/*
Select username and feedback elements
*/
var username = document.getElementById('username');
var feedback = document.getElementById('feedback');

/*
Create a function that checks the
length of the value of the username input
*/
function checkUsername() {
  if (this.value.length < 5) {
    feedback.textContent = 'Username must be 5 characters or more!';
  } else {
    feedback.textContent = '';
  }
}

/*
Handle the event with an event listener
*/
//username.addEventListener('blur', checkUsername, false);

/*
Handle the event with an event handler
*/
username.onblur = checkUsername;
