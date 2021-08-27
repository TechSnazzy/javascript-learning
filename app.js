// ===========================================================
// EXAMPLE #1 Using the Browser Object Model
// Create a variable with some html code in it.
var msg = '<h2>Browser Window</h2>';

// Add to the html code with more code.
msg += '<p>This is a paragraph.</p>';
msg += '<p>This is another paragraph.</p>'

// Select the #main ID.
var el = document.getElementById('main');

// Insert the html from the msg variable into the document.
el.innerHTML = msg;

// ===========================================================
