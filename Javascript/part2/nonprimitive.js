//Non-Primitive:
//array, functions, objects

let userName = {
    "first name": "Sam",
    lastName : "Appa",
    isLoggedin: true}; //object

console.log(typeof userName); //object
console.log(userName); //{}

console.log(userName["first name"]); //Sam

console.log(userName.lastName); //Appa

let today = new Date();
//console.log(today);


//Array
// Array is a collection of things.

let heros = ["a", "b", "c", "d"];
console.log(heros); //['a', 'b', 'c', 'd']


let anotherUser = ["hitesh","Sam", true]
console.log(anotherUser[0]);

console.log(1 + "1"); //11 because of type coercion

let isValue = true;
console.log(isValue + 1); //2 java script always consider true as 1 and false as 0 when we try to add them with number.


 