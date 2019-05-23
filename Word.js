var Letter = require("./Letter");

var Word = function(letters) {

    this.letters = letters;

    this.display = function () {
        letters.forEach (function(l) {
            l.display(); 
        });
    }

    this.checkGuess = function (char) {
        letters.forEach (function(l) {
            l.checkGuess(char); 
        });
    };
}

module.exports = Word;