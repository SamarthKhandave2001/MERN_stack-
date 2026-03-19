/*Prototypes in JavaScript
Task: Prototype Chaining

Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.*/


function Animal() {
}
 
Animal.prototype.speak = function() {
  return 'Animal speaking';
};
 
function Dog() {
}
 
Dog.prototype = Object.create(Animal.prototype);
 
Dog.prototype.bark = function() {
  return 'Woof!';
};
 
Dog.prototype.constructor = Dog;

/* Functional Constructor and Errors
Task 1: Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



Task 2: Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number. */

function Person(name, age) {
    if (typeof age !== "number" || age <= 0) {
        throw new Error("Age must be a positive number");
    }

    this.name = name;
    this.age = age;

    this.greet = function () {
        return `Hello, my name is ${this.name}`;
    };
}

// ✅ Valid Example
const p1 = new Person("Samarth", 22);
console.log(p1.greet());

// ❌ Invalid Example
const p2 = new Person("John", -5); // Throws Error

/*3*/