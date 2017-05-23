
// Define Variable
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Generates computer guess 
var computerGuess = options[Math.floor(Math.random() * options.length)];
console.log("Computer Guess: " + computerGuess);


var wins = 0;
var losses = 0;
var guesses = 10;



// Function to be triggered on key up

document.onkeyup = function(event) {

	//Determins which key was pressed
	var userGuess = event.key;
	alert(userGuess);



	console.log(guesses);

	//Conditions
	if (userGuess === computerGuess) {
		wins++;
		var computerGuess = options[Math.floor(Math.random() * options.length)];
	} 
	else {guesses--;}

	if (guesses === 0) {
		losses++;
		guesses = 10;	
	}

		console.log("wins: " + wins);
		console.log("losses: " + losses);
		console.log("guesses: " + guesses);
		console.log("Computer Guess: " + computerGuess);
		
	






} //ends function