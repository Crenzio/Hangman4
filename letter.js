var Letter = function(guess){
	this.guess = guess;
    this.known = false;
    this.tile = function(){
        if (this.known === true){
            return this.guess; 
        }
        else {
            return "__";
        }
	};
};

module.exports = Letter;




var answer = ["octopus", "mermaid", "varmint", "highfalutin", "sorcerer", "manticore", "grimalkin"]; 
