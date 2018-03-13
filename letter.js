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
    this.checker = function(verify) {
        if (verify == this.guess) {
            this.known = true; 
            return true; 
        }
        else {
            return false; 
        }
    }
};

module.exports = Letter;
