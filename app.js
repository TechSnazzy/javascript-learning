// ===========================================================
// EXAMPLE #1 Using the Browser Object Model
// Create a variable with some html code in it.
var msg = '<h2>Browser Window</h2>';

// Add to the html code with more code.
msg += '<p>The window height is:' + window.innerHeight + '</p>';
msg += '<p>The window width is:' + window.innerWidth + '</p>';
msg += '<p>The window screen width is:' + window.screen.width + '</p>';
msg += '<p>The window screen height is:' + window.screen.height + '</p>';
msg += '<p>The window history length is:' + window.history.length + '</p>';
msg += '<p>The window location is:' + window.location + '</p>';

// Select the #main ID.
var el = document.getElementById('main');

// Insert the html from the msg variable into the document.
el.innerHTML = msg;

// ===========================================================

var today = new Date();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';
