var house = {
  totalRooms: 10,
  occupiedRooms: 4,
  roomsAvailable: function () {
    var totalRooms = this.totalRooms;
    var occupiedRooms = this.occupiedRooms;
    var roomsLeft = totalRooms - occupiedRooms;
    return roomsLeft;
  },
  isOpen: true,
  name: 'Morrison Manor',
  members: ['Sean', 'Stephanie', 'Emmie'],
};

var roomsAvailable = house.roomsAvailable();
var occupiedRooms = house.occupiedRooms;
var docMessage = document.getElementById('message');
var person1 = house.members[0];
var person2 = house.members[1];
var person3 = house.members[2];

if (house.isOpen === true) {
  docMessage.textContent = `There are ${occupiedRooms} rooms occupied out of ${house.totalRooms} total rooms leaving ${roomsAvailable} rooms available for ${person1}, ${person2} and ${person3}.`;
} else {
  docMessage.textContent = `${house.name} is not open.`;
}

function hello(a) {
  return a;
}

console.log(hello('Test'));
