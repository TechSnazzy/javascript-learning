// Select the paragraph ID
var para = document.getElementById('paragraph');

// Select the firstChild of the paragraph
// The firstChild is the text node and the nodeValue is the text
var paraText = para.firstChild.nodeValue;

// Display the text in the console
console.log(paraText)