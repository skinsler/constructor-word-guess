var Word = require("./Word");
var inquirer = require("inquirer");

var playing = true;
const MAX_GUESSES = 10;
var guesses;
var randomWord;
var theWord;

var dictionary = ["sludge", "unexpected", "unearths", "twirl", "thespians", "devotes",
"indulge", "spaced", "giddiness"]

function getWord() {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function startGame() {
    guesses = MAX_GUESSES;
    randomWord = getWord();
    theWord = new Word(randomWord);
    console.log(theWord);
};

function takeTurns() {
    console.log(theWord.display());
    inquirer
        .prompt([

        {   
            type: "input",
            message: "What is your name?",
            name: "username"
        }])
        .then(function(inquirerResponse) {
            // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.

              console.log("\nWelcome " + inquirerResponse.username);
              
        });
};

startGame();
takeTurns();



