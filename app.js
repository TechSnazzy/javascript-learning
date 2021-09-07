// Grab the paragraph element
var paragraph = document.getElementById('paragraph');

// Then grab the text of the paragraph element
// The nodeValue property can only be used on a text element
var paragraphText = paragraph.firstChild.nodeValue;

// Example 1: Display the Text Node
console.log(paragraphText);

// Example 2: Display the text of the Containing Element
console.log(paragraph.textContent);

// Example 3: Replace the text of the Containing Element
paragraph.innerHTML = '<p>The paragraph was here</p>';
