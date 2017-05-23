
// Define Variable
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 10;


// Function to be triggered on key up

document.onkeyup = function(event) {

	//Determins which key was pressed
	var userGuess = event.key;
	alert(userGuess);

	//Generates computer guess 
	var computerGuess = options[Math.floor(Math.random() * options.length)];
	alert(computerGuess);

	console.log(guesses);

	//Conditions
	if (userGuess === computerGuess) {wins++;} 
	else {guesses--;}

	// if (guesses = 0) {
	// 	losses++;
	// 	guesses = 10;
	// }

		console.log("wins: " + wins);
		console.log("losses: " + losses);
		console.log("guesses: " + guesses);
	






} //ends function