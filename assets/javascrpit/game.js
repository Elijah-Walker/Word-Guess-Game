
var guessesLeft;
var nintendo, sega, sony; 

nintendo = ["n", "i", "n", "t", "e", "n", "d", "o"];
sega = ["s", "e", "g", "a"];
sony = ["s", "o", "n", "y"];

var guessedRight = 0;

var wordChoices = [nintendo, sega, sony];

var randomWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];

guessesLeft = 12;

// document.write(guessesLeft);

var answerArray = [];
 for (var i = 0; i < randomWord.length; i++) {
 answerArray[i] = "_";
 }

 document.write(answerArray);

 var guessedLetterArray = [];
 for (var j = 0; j < randomWord.length; j++) {
    guessedLetterArray[j] = "";
 }

 document.getElementById("guessedLetters").innerHTML = guessedLetterArray;


// while (guessedRight <= (randomWord.length - 1)) {

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {


    // Checks if the user's guess is in the random word.
    key = (event.key);
    var checkLetter = (randomWord.indexOf(event.key));

        // if (guessedRight = (randomWord.length -1)) {
        //     document.getElementById("gameEnd").innerHTML = "Yay! You win!";
        //     return;
        // }
    
        if  (checkLetter === -1 && guessesLeft > 0) {
            guessedLetterArray.push(key);
            document.getElementById("guessedLetters").innerHTML = guessedLetterArray; 
            guessesLeft = (guessesLeft - 1);
            document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        }

        else if (checkLetter != -1 && guessesLeft > 0) {
            answerArray.splice([randomWord.indexOf(key)], 1, key);
            document.getElementById("rightLetters").innerHTML = answerArray;
        }
    
        else {
            document.getElementById("gameEnd").innerHTML = "Game Over";
        }
    
}

// }

// else {
    // document.getElementById("gameEnd").innerHTML = "Yay! You win!";
// }
