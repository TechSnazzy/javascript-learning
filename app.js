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
    feedback.textContent = "Requires 5 characters."
  } else {
    feedback.textContent = "Meets the requirements  ";
  }
}

username.addEventListener('blur', function () {
  checkUsername(5);
});
