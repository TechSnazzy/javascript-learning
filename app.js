// Create many objects contructor notation

// Create a new constructor function
function Hotel(name, rooms, booked, gym) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.gym = gym;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

// Create new Hotel instances
var quayHotel = new Hotel('Quay Hotel', 40, 25, true);
var parkHotel = new Hotel('Park Hotel', 50, 37, true);
var hiltonHotel = new Hotel('Hilton Hotel', 100, 63, false);

// Select hotel name headers
var quayHeader = document.getElementById('quayName');
var parkHeader = document.getElementById('parkName');
var hiltonHeader = document.getElementById('hiltonName');

// Select hotel rooms available
var quayRooms = document.getElementById('quayRooms');
var parkRooms = document.getElementById('parkRooms');
var hiltonRooms = document.getElementById('hiltonRooms');

// Select hotel gyms
var quayGym = document.getElementById('quayGym');
var parkGym = document.getElementById('parkGym');
var hiltonGym = document.getElementById('hiltonGym');

// Hotel Quay
quayHeader.textContent = quayHotel.name;
quayRooms.textContent = `There are ${quayHotel.checkAvailability()} rooms available.`;
quayGym.textContent = "Gym: " + quayHotel.gym;

// Hotel Park
parkHeader.textContent = parkHotel.name;
parkRooms.textContent = `There are ${parkHotel.checkAvailability()} rooms available.`;
parkGym.textContent = 'Gym: ' + parkHotel.gym;

// Hotel Hilton
hiltonHeader.textContent = hiltonHotel.name;
hiltonRooms.textContent = `There are ${hiltonHotel.checkAvailability()} rooms available.`;
hiltonGym.textContent = 'Gym: ' + hiltonHotel.gym;

// Add new properties
