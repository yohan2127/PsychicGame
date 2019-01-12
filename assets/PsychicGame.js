var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var updateGuessesLeft = function() {
 
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
 
  document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
var updateComputerPick = function() {
 
  //document.querySelector('#ComputerPick').innerHTML = "Compter Selected: " + '__';
};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
  updateComputerPick();

}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {
	
	
	//alert("COO");
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++
                document.querySelector('#Wins').innerHTML = "Wins: " + wins;
                document.querySelector('#ComputerPick').innerHTML = "You are right! Computer Pick was: " + letterToGuess;
                reset();
            }
			else {
				
				document.querySelector('#ComputerPick').innerHTML = "Compter Pick: " + '__';
			}

        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#Losses').innerHTML = "Losses: " + losses;
			document.querySelector('#ComputerPick').innerHTML = "Sorry, Computer Pick was: " + letterToGuess;
             reset();
        }
};