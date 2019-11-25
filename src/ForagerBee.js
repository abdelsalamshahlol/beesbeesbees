var ForagerBee = function() {
 // Invokes the constructor from Bee Class and inherits properties
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = new Array();
};

// Inherit the methods from the parent class
ForagerBee.prototype = Object.create(Grub.prototype);

// Class functions
ForagerBee.prototype.forage = function(forage) {
	if(forage){
		this.treasureChest.push(forage);
	}
}

// Constructor method that institates Object from class
ForagerBee.prototype.constructor = ForagerBee;