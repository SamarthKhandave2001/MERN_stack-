function Person(name,age){
    this.name = name
    this.age = age
}

function Car(make,model){
    this.make = make
    this.model = model
}

let myCar = new Car("Tesla","Model S");
console.log(myCar);

let myNewCar = new Car("BMW","X5");
console.log(myNewCar);