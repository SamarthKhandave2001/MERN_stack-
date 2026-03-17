let car = {
    make: "Tesla",
    model: "Model S",
    year: 2020,
    start: function
    (){
        return ` ${this.make} car got started in ${this.year} `
    }
}   
console.log(car.start());
function Person(name,age){
    this.name = name;
    this.age = age;
    
}

let john = new Person("John", 30);
console.log(john.name);
console.log(john.age);

//Prototype chain learn and read 
function animal(type){
    this.type = type;

}

animal.prototype.speak = function(){ return `The ${this.type} makes a sound.`; }

Array.prototype.sam = function(){
    return `This is a custom method added to all arrays. ${this}`;

}

let myArr = [1, 2, 3];
console.log(myArr.sam());
let myNewArray = [1,2,3,4,5];
console.log(myNewArray.sam());


class Vehicle {   // class creation
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Inheritance
class Car extends Vehicle {
  driver() {
    return `${this.make}: This is an inheritance example.`;
  }
}

let myCar = new Car("Toyota", "Corolla");

console.log(myCar.start());
console.log(myCar.driver());

//Encapsulation

//Encapsulation  means restrict the access of the direct data.

class BankAccount{
  #balance = 0;

  deposit(amout){
    this.#balance += amount
    return this.#balance;
  }
  getBalance(){
    return `$ {this.#balance}`
  }
}

let  account = new BankAccount()
console.log(account.balance);