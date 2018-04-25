
var guessesLeft;
var nintendo, sega, sony; 

nintendo = ["n", "i", "n", "t", "e", "n", "d", "o"];
sega = ["s", "e", "g", "a"];
sony = ["s", "o", "n", "y"];

var wordChoices = [nintendo, sega, sony];

var randomWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];

guessesLeft = 12;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Checks if the user's guess is in the random word.
    var checkLetter = (randomWord.indexOf(event.key));


        if  (checkLetter === -1 && guessesLeft > 0) {
            console.log("sorry, guess again");
            guessesLeft = (guessesLeft - 1);
            console.log(guessesLeft);
        }

        else if (checkLetter != -1 && guessesLeft > 0) {
            console.log("good job, you guessed right");
        }
    
        else {
            console.log("You're out of lives.")
        }
    
}


