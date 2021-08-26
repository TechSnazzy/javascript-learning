// Create new object.
var hotel = new Object();

// Add properties to the object.
hotel.name = 'Morrison Manor';
hotel.price = 200;
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function () {
  return this.room - this.booked;
};
hotel['The Cats'] = 'Macy and Milo';

// Display the object.
console.log(hotel);

// Delete the hotel price property.
delete hotel.price;

// Set the hotel name to a blank string.
hotel.price = '';

// Display one property of the object using bracket notation.
var theCats = hotel['The Cats'];
console.log(theCats);
