
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

 document.write(guessedLetterArray);

//  function renderQuestion() {
    // If there are still more questions, render the next one.
    // if (guessedRight <= (randomWord.length - 1)) {
    //   function();
    // }
//     // If there aren't, render the end game screen.
//     else {
//       document.querySelector("#question").innerHTML = "Game Over!";
//       document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
//     }
//   }

//   // Function that updates the score...
//   function updateScore() {
//     document.querySelector("#score").innerHTML = "Score: " + score;
//   }

// while (guessedRight <= (randomWord.length - 1)) {
// function playGame() {

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {


    // Checks if the user's guess is in the random word.
    key = (event.key);
    var checkLetter = (randomWord.indexOf(event.key));

        if (guessedRight === randomWord.length) {
            console.log("yay! You win");
            return;
        }
    
         if  (checkLetter === -1 && guessesLeft > 0) {
            console.log("sorry, guess again");
            guessedLetterArray.push(key);
            console.log(guessedLetterArray);
            guessesLeft = (guessesLeft - 1);
            console.log(guessesLeft);
        }

        else if (checkLetter != -1 && guessesLeft > 0) {
            console.log("good job, you guessed right");
            // answerArray.out.printIn(key);
            // console.log(answerArray);
        }
    
        else {
            console.log("You're out of lives.");
        }
    
}

// }
// }
