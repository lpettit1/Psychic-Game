var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var losses = 0;
var attempts = 10;
var guessesMade = [];
var compGuess = letters[Math.floor(Math.random() * letters.length)];
var playerGuess = document.onkeyup;


//Capturing the players input
document.onkeyup = function (event) {

    playerGuess = event.key;
    guessesMade.push(playerGuess);
    

    //Handling correct guesses
    if (compGuess == playerGuess) {
        win++;
        attempts = 10;
        guessesMade = [];
    }

    //Handling incorrect guesses
   
    if (compGuess != playerGuess) {
        attempts--;

    }

    if (attempts == 0) {
        losses++;
        attempts = 10;
        guessesMade = [];
        

    }
    
    var html =
    '<P><strong>Wins: ' + win + '</strong></p>' +
    '<P><strong>Losses: ' + losses + '</strong></p>' +
    '<p><strong>Guesses Left: ' + attempts + '</strong><p/>' +
    '<p><strong>Your Guesses: ' + guessesMade + '</strong></p>';

    //Output to HTML
    document.getElementById("game").innerHTML = html;
    


}
