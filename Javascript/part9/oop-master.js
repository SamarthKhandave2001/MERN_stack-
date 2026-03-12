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