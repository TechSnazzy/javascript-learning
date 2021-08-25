var house = {
  totalRooms: 10, //number
  occupiedRooms: 4, //number
  roomsAvailable: function () {
    return this.totalRooms - this.occupiedRooms;
  }, //method
  isOpen: true, //boolean
  members: ['Sean', 'Stephanie', 'Emmie'], //array
  name: function (houseName) {
    return houseName;
  }, //method
};

var roomsAvailable = house.roomsAvailable();
var occupiedRooms = house.occupiedRooms;
var docMessage = document.getElementById('message');
var sean = house.members[0];
var stephanie = house.members[1];
var emmie = house.members[2];
var houseName = house.name('Morrison Manor');
var houseStatus = house.isOpen;
var button = document.getElementById('button');

if (houseStatus === true) {
  docMessage.textContent = `At ${houseName} there are ${occupiedRooms} rooms occupied out of ${house.totalRooms} total rooms leaving ${roomsAvailable} rooms available for ${sean}, ${stephanie} and ${emmie}.`;
} else {
  docMessage.textContent = `${houseName} is not open.`;
}
