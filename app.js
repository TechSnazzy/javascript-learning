var score1 = 220;
var score2 = 140;
var scoreTotal = score1 + score2;

var highScore1 = 540;
var highScore2 = 75;
var highScoreTotal = highScore1 + highScore2;

var comparison = score1 + score2 > highScore1 + highScore2;
var el = document.getElementById('main');

if (comparison === true) {
  el.innerHTML = '<p>New Score Total: ' + scoreTotal + '</p>';
  el.innerHTML += '<p>High Score Total: ' + highScoreTotal + '</p>';
  el.innerHTML += '<h2>High Score has been beaten!</h2>';
} else {
  el.innerHTML = '<h2>High Score of ' + highScoreTotal + ' Remains!</h2>';
}
