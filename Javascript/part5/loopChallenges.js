/* 1. Write a 'while' loop that calcculates the sum of all numbers from1 to 5 and stores in a variable named 'sum'.*/

let sum = 0;
let i = 1;

while (i <= 5) {
  // sum += i; another method 
  sum = sum + i;
  i++;
}
console.log(sum);

/*2 write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'*/
let countdown = [];
let j = 5;
while (j >0){
  countdown.push(j);
  j--;

}
console.log(countdown);

/*3. Write a 'do while' loop that prompts a user to enter their favourite tea type until they enter 'stop'. store each tea type in an array named 'teaCollection'.*/

/*let teaCollection = []
let tea
do{
  tea =prompt(`Enter your favourite tea (type "stop" to finish):`);
  if(tea !== "stop"){
    teaCollection.push(tea);
  }
} while (tea !== "stop");

Code will work in browser environment, but not in node.js environment.*/

/*4. Write a 'do while' loop that adds numbers from1 to 3 and stores the resukt in the variable 'total'.*/

let total =0;
let k =1;
do{
total +=k;
k++;
}
while (k <= 3){
}
console.log(total);

/* 5. Write a 'for' loop that multiplies each elelemt in the array '[2,4,6]' by 2 and stores the result in a new array named 'multipliedNumberes'.*/