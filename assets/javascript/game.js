var wins = 0;
var losses = 0;
var guessLeft = 9;
var currentGuess = "";
var computerGuess = randomLetter();
console.log(computerGuess)
var userGuess = "";
var resett = reset()

function randomLetter() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function reset() {
  var guessLeft = 9;
  var currentGuess = "";
}

document.onkeyup = function(event) {
  var userGuess = event.key;
  if (computerGuess === userGuess) {
		wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins
    guessLeft = 9;
    currentGuess = []
    alert("Bah. Another one of the easy ones. Don't feel too proud, Batman.");
    
  } else {
    guessLeft--;
    document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guessLeft
    currentGuess += userGuess
    document.getElementById("currentguess").innerHTML = "Current Guess: " + currentGuess
  }
  if (guessLeft === 0) {
		losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses
		guessLeft = 9;
    console.log()
    alert("Does your head hurt Batman? Understandable. You're no match for me.");
    randomLetter()
    currentGuess = []
  }

  }
