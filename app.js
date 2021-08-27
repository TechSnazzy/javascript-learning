// EXAMPLES OF CREATING OBJECTS

// Create a Cat object with a constructor function.

function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

var macy = new Cat('Macy', 4, 'gray');
var milo = new Cat('Milo', 3, 'black');

console.log(`${macy.name} and ${milo.name} are cats.`)

// Create a Dog object with literal notation

var dog = {};
dog.name = 'Snowy';
dog.age = 14;
dog.color = 'white';

console.log(`${dog.name} was ${dog.age} and ${dog.color}.`);

// Create a Car object with object constructor

var car = new Object();
car.make = 'Subaru';
car.model = 'Crosstrek';
car.year = 2017;

console.log(`${car.year} ${car.make} ${car.model}.`)
