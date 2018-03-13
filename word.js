var letter = require('./letter.js');

function Word(word) {
	this.word = word;
	this.list = [];

	this.list = function() {
		for (var i=0; i < this.word.length; i++) {
			this.list.push( new Letter(this.word[i]));
		}
	};

}

module.exports = Word;