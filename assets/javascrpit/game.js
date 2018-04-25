
var guessesLeft;
var userGuess;
var nintendo, sega, sony; 

nintendo = ["n", "i", "n", "t", "e", "n", "d", "o"];
sega = ["s", "e", "g", "a"];
sony = ["s", "o", "n", "y"];

var wordChoices = [nintendo, sega, sony];

var randomWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

var checkLetter = (randomWord.indexOf(event.key));

if  (checkLetter === -1) {
    console.log("sorry, guess again");
}

else {
    console.log("good job, you guessed right");
}

}
