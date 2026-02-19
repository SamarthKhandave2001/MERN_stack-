//Number 

let balance = 100;
console.log(typeof balance); //number

let anotherBalance = new Number(120);
console.log(anotherBalance); //[Number: 120]

//boolean
let isActive = true;
let isReallyActive = new Boolean(true);


//null and undefined
let firstname
console.log(firstname); //undefined 

//eg of null
let lastname = null;
console.log(lastname); //null

//String
let myString = "hello";
let myStringOne = 'Hola';
let username = 'sam'

let oldGreet = myString + "happy"
console.log(oldGreet); //hellohappy

let greetMeassage = `hello ${username}`;


//Symbol
let sm1 = Symbol()   //define the symbol
let sm2 = Symbol()   //define another symbol        


console.log(sm1 === sm2); //false because each symbol is unique