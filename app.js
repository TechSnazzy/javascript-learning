// DOM MANIPULATION EXAMPLE
// STEP 1: Store the full list in the variable
var getList = document.getElementById('list');

// STEP 2: Then remove the first two list items
var listItems = document.getElementsByTagName('li');
getList.removeChild(listItems[0]);
getList.removeChild(listItems[1]);

// STEP 3: Create the apple element
// Then create the apple text
// Then add the apple text to the apple element
var appleItem = document.createElement('li');
var appleText = document.createTextNode('🍎 Apples');
appleItem.appendChild(appleText);

// STEP 4: Add the apple item to the list
getList.appendChild(appleItem);
