var array = ['January', 'February', 'March', 'April', 'June', 'July', 'August'];

function clickButton() {
  for (var i = 0; i < array.length; i++) {
    var el = document.getElementById('paragraph');
    el.innerHTML = `It is ${array[i]}`;
    console.log(array[i]);
  }
}
