
// Define Variables
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Generates computer guess 
var computerGuess = options[Math.floor(Math.random() * options.length)];

var wins = 0;
var losses = 0;
var guesses = 10;
//Lists guesses

var guessArray = [];



// Function to be triggered on key up

document.onkeyup = function(event) {

	//Determins which key was pressed
	var userGuess = event.key;
	guessArray.push(userGuess);

	//Conditions
	if (userGuess === computerGuess) {
		wins++;
		guesses = 10;
		computerGuess = options[Math.floor(Math.random() * options.length)];
		guessArray = [];
	} 

	else {guesses--;}

	if (guesses === 0) {
		losses++;
		guesses = 10;
		computerGuess = options[Math.floor(Math.random() * options.length)];
		guessArray = [];	
	}

		// Allows me to monitor game in console
		console.log("wins: " + wins);
		console.log("losses: " + losses);
		console.log("guesses: " + guesses);
		console.log("Computer Guess: " + computerGuess);


	// Displays game results on HTML
	var updateWins = "<p>Wins: " + wins + "</p>";
    var updateLosses = "<p>Losses: " + losses + "</p>";
    var updateGuesses = "<p>Guesses left: " + guesses + "</p>";
    var yourGuesses = "<p>Your guesses so far: " + guessArray + "</p>";

    var gameDiv = document.getElementById('game');
    gameDiv.innerHTML = updateWins + updateLosses + updateGuesses + yourGuesses;


} //ends function