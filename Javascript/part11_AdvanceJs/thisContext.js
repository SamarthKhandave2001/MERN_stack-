const person= {
    name:"Sma",
    greet(){
        console.log(`Hi I am ${this.name}`);
    }
}

person.greet();
const greetFunction= person.greet;
person.greet()

const boundGreet = person.greet.bind({name:"sam"});
boundGreet();