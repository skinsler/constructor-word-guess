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
        letters.forEach (function(l) {
            l.display(); 
        });
    }

    this.checkGuess = function (char) {
        letters.forEach (function(letter) {
            letter.checkGuess(char); 
        });
    };
}

module.exports = Word;