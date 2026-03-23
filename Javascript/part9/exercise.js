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

/*3
Classes, Objects, and Inheritance
Task 1: Class Inheritance

Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".



Task 2: Method Overriding in Inheritance

Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".



Task 3: Static Methods in Classes

Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.*/

// Parent Class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // Task 1: Method
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

  // Task 2: Method to be overridden
  move() {
    return "The vehicle is moving";
  }

  // Task 3: Static Method
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

// Child Class (Inheritance)
class Car extends Vehicle {
  
  // Task 1: Additional method
  startEngine() {
    return "Engine started";
  }

  // Task 2: Method Overriding
  move() {
    return "The car is driving";
  }
}

// Testing the implementation
const myCar = new Car("Toyota", "Fortuner");

console.log(myCar.getDetails());     // Make: Toyota, Model: Fortuner
console.log(myCar.startEngine());    // Engine started
console.log(myCar.move());           // The car is driving

// Static method test
console.log(Vehicle.isVehicle(myCar)); // true
console.log(Vehicle.isVehicle({}));    // false

/* 4 
Encapsulation, Polymorphism, Abstraction, and Getters/Setters
Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.



Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
*/
// =======================
// Task 1: BankAccount (Encapsulation)
// =======================
class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }

  // Getter
  get balance() {
    return this._balance;
  }

  // Setter
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }

  // Deposit
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
  }

  // Withdraw
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds"); // IMPORTANT: match test
    }
    this._balance -= amount;
  }
}

// =======================
// Task 2: Polymorphism
// =======================

// Base Class
class Shape {
  area() {
    return 0;
  }
}

// Circle Class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Rectangle Class
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// =======================
// Example Usage (Optional)
// =======================

// BankAccount Test
const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.balance); // 1300

// Shape Test
const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Shape()
];

shapes.forEach(shape => {
  console.log(shape.area());
});