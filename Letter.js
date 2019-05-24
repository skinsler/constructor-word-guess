var Letter = function(char) {
    this.char= char;

    this.guessed = false;

    this.display = function () {
        if (this.guessed) {
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
