var Letter = function(char) {
    this.char= char;

    this.guessed = false;
    this.role = role;

    this.display = function () {
        if (guessed) {
            return char;
        }
        else {
            return "_";
        }
    }

    this.checkGuess = function (c) {
        if (char = c) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;

var bee = new Letter (b);

console.log (b);