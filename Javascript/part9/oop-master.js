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

let dog = new animal("dog");
console.log(dog.speak());