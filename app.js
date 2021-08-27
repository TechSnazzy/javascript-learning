// EXAMPLES OF CREATING OBJECTS

// =============================================
// Create a Cat object with a constructor function.
// Use this to create multiple objects.

// This is an object template
// It uses the this keyword
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

var macy = new Cat('Macy', 4, 'gray'); // new macy instance
var milo = new Cat('Milo', 3, 'black'); // new milo instance

console.log(`${macy.name} and ${milo.name} are cats.`);

// =============================================
// Create a Dog object with literal notation

var dog = {}; // new dog object
dog.name = 'Snowy';
dog.age = 14;
dog.color = 'white';

console.log(`${dog.name} was ${dog.age} and ${dog.color}.`);

// =============================================
// Create a Car object with object constructor

var car = new Object(); // new car object
car.make = 'Subaru';
car.model = 'Crosstrek';
car.year = 2017;

console.log(`${car.year} ${car.make} ${car.model}.`);

// =============================================
// Another example of creating a single object that includes properties and a method that uses the this keyword

var hotel = {
  name: 'Hilton Hotel',
  rooms: 40,
  booked: 20,
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

console.log(
  `The ${hotel.name} has ${hotel.checkAvailability()} rooms available.`
);

// =============================================
// This one uses a function to create an object that uses the this keyword to grab the innerWidth and innerHeight properties of the document window object.
// console.log(window) to see all the window properties.

function windowSize() {
  var width = this.innerWidth; // width of browser window
  var height = this.innerHeight; // height of browser window
  return [width, height];
}

// Create variables of the width and height
var width = windowSize()[0];
var height = windowSize()[1];

// Create a function that writes the width and height to the window object
var showWidthHeight = function () {
  document.write(`This window is ${this.width} wide.`);
  document.write(`This window is also ${height} high.`);
};

// Call the function to write the width and height
showWidthHeight();

// =============================================
// Create an object and a function and move the function into the object.

var width = 600; // Create a width variable
var shape = { width: 300 }; // Create a shape object

var showWidth = function () {
  document.write(this.width);
}; // Create a showWidth named function with the this keyword referring to width. At this point is is referring to the width variable.

shape.getWidth = showWidth; // Move the showWidth named function into the shape object and rename it to getWidth().

shape.getWidth(); // Display the shape.getWidth() method in the document's window object.
