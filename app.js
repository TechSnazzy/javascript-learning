// Create many objects contructor notation

// Create a new constructor function
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

// Create new Hotel instances
var quayHotel = new Hotel('Quay Hotel', 40, 25);
var parkHotel = new Hotel('Park Hotel', 50, 37);

// Select hotel name headers
var quayHeader = document.getElementById('quayName');
var parkHeader = document.getElementById('parkName');

// Select hotel rooms available
var quayRooms = document.getElementById('quayRooms');
var parkRooms = document.getElementById('parkRooms');

// Hotel Quay
quayHeader.textContent = quayHotel.name;
quayRooms.textContent = `There are ${quayHotel.checkAvailability()} rooms available.`;

// Hotel Park
parkHeader.textContent = parkHotel.name;
parkRooms.textContent = `There are ${parkHotel.checkAvailability()} rooms available.`;
