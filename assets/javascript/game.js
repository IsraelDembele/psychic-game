
var letters =[ "a", "b", "c","d", "e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","j","w","x","y","z"]; 
//Link to element in the html
var wins = document.getElementById('wins');
var loses = document.getElementById('loses');
var guessLeft = document.getElementById('guess-left');
var yourGuess = document.getElementById('yourGuess');

var userWins = 0;
var userLoses = 0;
var attemp = 9;

// writting value into html
wins.innerHTML = userWins;
loses.innerHTML = userLoses;
guessLeft.innerHTML = attemp;

//getting letter lengh
var lengh = letters.length;

console.log("lengh value: "+lengh);

// variable for computer choice
var random = Math.floor(Math.random() * lengh); 

var computerChoice = letters[random];

console.log("computerChoice: "+computerChoice);

// User choices
var userChoice = "";

document.addEventListener("keyup", function(event){
    var val = event.key;
    userChoice = userChoice+ val +",";

    if(val == computerChoice){
        userWins = userWins + 1;

        wins.innerHTML = userWins;
    } else {
        attemp = attemp - 1;

        guessLeft.innerHTML = attemp;

        if(attemp == 0){    
        userLoses = userLoses + 1;
        attemp = 9;

        loses.innerHTML = userLoses;
        guessLeft.innerHTML = attemp;
        userChoice = "";
        }
    }
    yourGuess.innerHTML = userChoice;
});



