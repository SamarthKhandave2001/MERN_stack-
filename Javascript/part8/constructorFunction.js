function Person(name,age){
    this.name = name
    this.age = age
}

function Car(make,model){
    this.make = make
    this.model = model
}
// If you want to crate an object then you need to use the new keyword and call the constructor function
let myCar = new Car("Tesla","Model S");
console.log(myCar);

let myNewCar = new Car("BMW","X5");
console.log(myNewCar);


function Tea(type){
    this.type = type
    this.describe = function(){
        return `This is a ${this.type} tea.`
    //If you want to access any type of property or method inside the constructor function then you need to use the this keyword
    //"This" keyword refers to the current object that is being created by the constructor function.
    }


}

let lemonTea = new Tea("Lemon");
console.log(lemonTea.describe());


function Animal(species){
    this.species = species
    this.describe = function(){
        return `This is a ${this.species}.`
    }   
    
    Animal.prototype.eat = function(){
        return `The ${this.species} is eating.`
    }
}
let dog = new Animal("Dog");
console.log(dog.describe());
console.log(dog.eat());