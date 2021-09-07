// Create the apple element
// Then create the apple text
// Then add the apple text to the apple element
var appleItem = document.createElement('li');
var appleText = document.createTextNode('🍎 Apples');
appleItem.appendChild(appleText);

// Then get the list
// And all the apple item to the list
var getList = document.getElementById('list');
getList.appendChild(appleItem);

// Note: Remove an element with removeChild()