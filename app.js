/*
1. Select the feedback and username IDs.
*/
var feedback = document.getElementById('feedback');
var username = document.getElementById('username');

/*
2. Create a function that checks the username input.
*/
function checkUsername() {
  console.log('Checking username');
}

username.addEventListener('blur', function () {
  checkUsername();
});
