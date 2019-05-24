var Letter = require("./Letter");

var Word = function(word) {

    this.createLetters = function (word) {
        var arr = [];
        for (let i=0; i<word.length; i++) {
            arr.push(new Letter(word[i]));
        }

        return arr;
    };

    this.letters = this.createLetters(word);

    this.display = function () {
        var displayString = "";
        this.letters.forEach (function(l) {
            displayString = displayString + (l.display()) + " "; 
        });
        return displayString;

    }

    this.checkGuess = function (char) {
        this.letters.forEach (function(letter) {
            letter.checkGuess(char); 
        });
    };
}

module.exports = Word;