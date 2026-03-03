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
