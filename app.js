// ===========================================================
// EXAMPLE #1 Using the Browser Object Model
// Create a variable with some html code in it.
var msg = '<h2>Browser Window</h2>';

// Add to the html code with more code.
msg += '<p>The window height is:</p>' + window.innerHeight;
msg += '<p>The window width is:</p>' + window.innerWidth;
msg += '<p>The window screen width is:</p>' + window.screen.width;
msg += '<p>The window screen height is:</p>' + window.screen.height;
msg += '<p>The window history length is:</p>' + window.history.length;
msg += '<p>The window location is:</p>' + window.location;

// Select the #main ID.
var el = document.getElementById('main');

// Insert the html from the msg variable into the document.
el.innerHTML = msg;

// ===========================================================
