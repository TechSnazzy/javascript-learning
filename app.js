// First, select the input element
var elInput = document.getElementById('username');

function checkUsername() {
  // Then select the feedback element
  var elFeedbackMsg = document.getElementById('feedback');

  // Create a conditional
  if (elInput.value.length < 5) {
    elFeedbackMsg.textContent = 'Username must be 5 characters or more!!'
  } else {
    elFeedbackMsg.textContent = '';
  }
}

// Create event listener
elInput.addEventListener('blur', checkUsername, false)