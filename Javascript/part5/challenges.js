/* Write a 'for'loops through the array ["Greeen tea","blacck tea","chai","oolong tea""] and stops the loop when it finds "chai"".
Store all teas before "chai""in a new array named 'selectesTeas".*/
let teas = ["Green tea","black tea","chai","oolong tea"];
let selectedTeas = [];
for(let i =0; i< teas.length; i++)
    {
        if(teas[i] === "chai"){
            break;
        }
        selectedTeas.push(teas[i]);
    }
console.log(selectedTeas);
/* Write a 'for' loop that loops through the arrya ["London","New York","Paris","Berlin"] and skipes "Paris". Store the other cities in annew array named 'VistiedCities.*/

let cities = ["London","New york","Paris","Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++){
    if(cities[i] === "Paris"){
        continue;
    }   visitedCities.push(cities[i]);              
}
console.log(visitedCities);

/* 3. Use a 'for-of' loop to itearate through the array [1,2,3,4,5] and stop when the number '4' is found. Store the numbers before '4' in an array named 'small numbers'.*/

let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (let number of numbers){
    if (number === 4){
        break;
    }   smallNumbers.push(number);
}
console.log(smallNumbers);

/* 4. Use a 'for-of' loop to iterate throught the array ["chai",greentea,"black tea"] and skip "greentea". Store the other tea types in an array named 'preferredTeas'.*/

let teaTypes = ["chai","greentea","black tea"];
let preferredTeas = []; 
for (let tea of teaTypes){
    if (tea === "greentea"){
        continue;
    }    preferredTeas.push(tea);
}           
console.log(preferredTeas);