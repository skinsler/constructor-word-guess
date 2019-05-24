var Word = require("./Word");

var dictionary = ["sludge", "unexpected", "unearths", "twirl", "thespians", "devotes",
"indulge", "spaced", "giddiness"]

function getWord() {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

var randomWord = getWord();
var randomWordLetters = randomWord.split("");
console.log(randomWordLetters);

var theWord = new Word(randomWord);

console.log(theWord);



