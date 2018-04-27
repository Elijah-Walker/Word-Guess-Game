
var guessesLeft;
var nintendo, sega, sony; 

nintendo = ["n", "i", "n", "t", "e", "n", "d", "o"];
sega = ["s", "e", "g", "a"];
sony = ["s", "o", "n", "y"];

var guessedRight = 0;

var wordChoices = [nintendo, sega, sony];

var randomWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];

guessesLeft = 12;


var answerArray = [];
 for (var i = 0; i < randomWord.length; i++) {
 answerArray[i] = "_";
 }

 document.getElementById("rightLetters").innerHTML = answerArray;

 var guessedLetterArray = [];
 for (var j = 0; j < randomWord.length; j++) {
    guessedLetterArray[j] = "";
 }

 document.getElementById("guessedLetters").innerHTML = guessedLetterArray;

 //while there are blank spaces, run this code

//??? while (answerArray.indexOf("_")) {

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {


    // Checks if the user's guess is in the random word.
    key = (event.key);
    var checkLetter = (randomWord.indexOf(event.key));

        //??? if (answerArray.indexOf("_")) {
        //     document.getElementById("gameEnd").innerHTML = "Yay! You win!";
        //     return;
        // }

        // have repeated letters not count against score

        //???? if (guessedLetterArray.indexOf(key) || randomWord.indexOf(key)) {
        //     document.getElementById("gameEnd").innerHTML = "Already Guessed this";
        // }
    
         if  (checkLetter === -1 && guessesLeft > 0) {
            guessedLetterArray.push(key);
            document.getElementById("guessedLetters").innerHTML = guessedLetterArray; 
            guessesLeft = (guessesLeft - 1);
            document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        }

        else if (checkLetter != -1 && guessesLeft > 0) {
            answerArray.splice([randomWord.indexOf(key)], 1, key); //need to change it so all instances of letter get changed
            document.getElementById("rightLetters").innerHTML = answerArray;
        }
    
        else {
            document.getElementById("gameEnd").innerHTML = "Game Over";
        }
    
}



//have it run a winning screen once all blank spaces are gone

// else {
    // document.getElementById("gameEnd").innerHTML = "Yay! You win!";
// }
