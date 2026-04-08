/* 4 THIS and Binding Context
Task 1: Bind the Correct Context

Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.



Task 2: Using call() to Invoke a Function with Different Contexts

Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.



Task 3: Using apply() to Pass Arguments with Context

Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.*/
// =======================
// Task 1: bind()
// =======================

const person = {
    name: "Alice", // ✅ FIXED
    introduce: function () {
        return "Hi, my name is " + this.name;
    }
};

function execute(fn) {
    return fn();
}

// Bind correct context
const boundIntroduce = person.introduce.bind(person);


// =======================
// Task 2: call()
// =======================

function introduce() {
    return "Hi, my name is " + this.name;
}


// =======================
// Task 3: apply()
// =======================

function sum(a, b) {
    return (a + b) * this.multiplier;
}