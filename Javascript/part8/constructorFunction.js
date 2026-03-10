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