var Letter = require('./letter.js');

function Word(word) {
	this.word = word;
	this.storage = [];

	this.list = function () {
		for (var i = 0; i < this.word.length; i++) {
			this.storage.push(new Letter(this.word[i]));
		}
	};

	this.builder = function () {
		var sum = [];
		for (var i = 0; i < this.storage.length; i++) {
			sum.push(this.storage[i].tile());
		}
		return sum.join(" ");
	}

	this.chess = function (verify) {
		console.log(verify);
		for (var i = 0; i < this.storage.length; i++) {
			this.storage[i].checker(verify);
		}
		console.log(this.builder());
	}

}

module.exports = Word;

