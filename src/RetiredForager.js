var RetiredForagerBee = function() {
 // Invokes the constructor from Forager Class and inherits properties
	// Grub.call(this); We shouldn't use this because its not the class parent
	ForagerBee.call(this);
	this.age = 40;
	this.job = "gamble";
	this.canFly = false;
	this.color = 'grey';
};

// Inherit the methods from the parent class
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

// Class functions defintions
RetiredForagerBee.prototype.forage = function() {
	return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function() {
	
		this.treasureChest.push(undefined);

}

RetiredForagerBee.prototype.constructor = RetiredForagerBee;