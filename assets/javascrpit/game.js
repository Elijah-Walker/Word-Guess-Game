
var wordChoices = ['nintendo', 'sega', 'sony'];
var randomWord = '';
var lettersInWord = [];
var blanks = 0;
var blanksandGuessed = [];
var wrongGuessed = [];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Pick a random word and make blank spaces for it

function startGame() {
    randomWord = wordChoices[Math.floor(Math.random()*wordChoices.length)];
    lettersInWord = randomWord.split('');
    blanks = lettersInWord.length;

    guessesLeft = 10;
    wrongGuessed = [];
    blanksandGuessed = [];

    for (var i=0; i<blanks; i++) {
        blanksandGuessed.push('_');
    }

    document.getElementById('wordToGuess').innerHTML = blanksandGuessed.join(' ');
    document.getElementById('playerLives').innerHTML = guessesLeft;
    document.getElementById('playerWins').innerHTML = wins;
    document.getElementById('playerLosses').innerHTML = losses;

    console.log(randomWord);
    console.log(lettersInWord);
    console.log(blanks);

}

//Checks the letter to see if it's in the word

function checkLetter(letter) {
    
    var isInWord = false;

    for (var i=0; i<blanks; i++) {
        if(randomWord[i] == letter) {
            isInWord = true;
        }

    }

    if (isInWord) {
        for (var i=0; i<blanks; i++) {
            if(randomWord[i] == letter) {
                blanksandGuessed[i] = letter;
            }

        }
    }
        

    else {
        wrongGuessed.push(letter);
        guessesLeft = guessesLeft - 1;
    }


}

// Checks to see if you won or loss

function roundComplete() {

    document.getElementById('wordToGuess').innerHTML = blanksandGuessed.join(' ');
    document.getElementById('playerWrong').innerHTML = wrongGuessed.join(' ');
    document.getElementById('playerLives').innerHTML = guessesLeft;
    document.getElementById('playerWins').innerHTML = wins;
    document.getElementById('playerLosses').innerHTML = losses;
    

    if (lettersInWord.toString() == blanksandGuessed.toString()) {
        wins = wins + 1;
        document.getElementById('playerWins').innerHTML = wins;
        alert('Congrats! You win');

        startGame();
    }

    else if (guessesLeft == 0) {
        losses = losses + 1;
        document.getElementById('playerLosses').innerHTML = losses;

        alert('Sorry, you lost.');
        startGame();
    } 
}

startGame();

// Checks to see what key you pressed

document.onkeyup = function(event) {

    var pressedLetter = String.fromCharCode(event.keyCode).toLowerCase();
    
    checkLetter(pressedLetter);
    roundComplete();

}
