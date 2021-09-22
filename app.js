/*
1. Select the feedback and username IDs.
*/
var feedback = document.getElementById('feedback');
var username = document.getElementById('username');

/*
2. Create a function that checks the username input.
*/
function checkUsername(minLength) {
  if (username.value.length < minLength) {
    feedback.textContent = 'Username requires 5 characters.';
  } else {
    feedback.textContent = 'Username meets requirements.';
  }
}

/*
3. Create an event listener that checks for focus on the input.
*/
username.addEventListener('blur', function () {
  checkUsername(5);
});
