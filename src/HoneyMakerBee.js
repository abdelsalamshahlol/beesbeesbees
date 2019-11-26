var HoneyMakerBee = function() {
 // Invokes the constructor from Bee Class and inherits properties
	Bee.call(this);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};

//Inherit the methods from the parent class
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// Class functions
HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot--;
};

// Constructor method that institates Object from class
HoneyMakerBee.prototype.constructor = HoneyMakerBee;