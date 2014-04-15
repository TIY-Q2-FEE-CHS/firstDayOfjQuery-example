function Person(name) {
	this.name = name;
	this.isAlive = true;
	this.killPerson = function() {
		this.isAlive = false;
	};
	this.ressurect = function() {
		this.isAlive = true;
	};
	this.bite = function(animal) {
			animal.isDangerous = true

	};

}

var robert = new Person("Robert");
var john = new Person("John");
var amber = new Person("Amber");

function Animal(name, type, age, isDangerous) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.isDangerous = isDangerous;
  this.bite = function(person) {
  	person.isAlive = false;
  }

}

var teddy = new Animal("Teddy", "golden", 15, false);
