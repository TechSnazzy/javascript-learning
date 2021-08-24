var house = {
  totalRooms: 10,
  occupiedRooms: 4,
  roomsAvailable: function () {
    var totalRooms = this.totalRooms;
    var occupiedRooms = this.occupiedRooms;
    var roomsLeft = totalRooms - occupiedRooms;
    return roomsLeft;
  },
  isOpen: false,
  name: 'Morrison Manor',
};

var roomsAvailable = house.roomsAvailable();
var occupiedRooms = house.occupiedRooms;
var docMessage = document.getElementById('message');

if (house.isOpen === true) {
  docMessage.textContent = `There are ${occupiedRooms} rooms occupied of ${house.totalRooms} total rooms leaving ${roomsAvailable} rooms available.`;
} else {
  docMessage.textContent = `${house.name} is not open.`;
}
