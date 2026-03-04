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

/*5 new loop 'for-in'. Use a 'for-in' loop through an object containing city populations. Stop the loop whent the population of "Berlin" is found and store all prevoius cities populations in a new object named cityPopulations".

let citiesPopulation ={
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin": 3600000
};
*/
let citiesPopulation ={
    "London": 8900000,
    "New York": 8400000,   
    "Paris": 2200000,
    "Berlin": 3600000
};
let cityPopulations = {};
for(const city in citiesPopulation){
    if(citiesPopulation[city] === 3600000){
        break;
    }    cityPopulations[city] = citiesPopulation[city];
}       
console.log(cityPopulations);

/* 6. Write a 'forEach' loop that iterates through the array ["chai","greentea","black tea"] and stop the loop when it finds "greentea". Store the other tea types in an array named 'availableTeas'.*/

let teaCollection = ["earl grey", "greentea", "black tea","oolong tea"];
let availableTeas = [];
teaCollection.forEach((tea) => {
    if (tea === "greentea") {
        return;
    }
    availableTeas.push(tea);
});
console.log(availableTeas);

/* 7. Write a 'for' loop that iterates through the array [2,5,7,9].
Skip the value '7' and multiply the reat by 2. Store the result in a new array named 'doubledNumbers'.*/

let numArray = [2,5,7,9];
let doubledNumbers = [];
for (let i = 0; i < numArray.length; i++){
    if (numArray[i] === 7){
        continue;
    }    doubledNumbers.push(numArray[i] * 2);
}           
console.log(doubledNumbers);

/*8. Use a 'for-of' loop to iterate through the array ["chai","green tea","black tea","jasmin tea","herbal tea"] and stop when the length of the current tea name is greater than 10. Store the teas iterate over in an array named 'shortNamedTeas'.*/
let teaNames = ["chai","green tea","black tea","jasmin tea","herbal tea"];
let shortNamedTeas = [];
for (let tea of teaNames){
    if (tea.length > 10){
        break;
    }    shortNamedTeas.push(tea);
}   
console.log(shortNamedTeas);