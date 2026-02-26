/* 1. Write a 'while' loop that calcculates the sum of all numbers from1 to 5 and stores in a variable named 'sum'.*/

let sum = 0;
let i = 0;

while (i <= 5) {
  // sum += i; another method 
  sum = sum + i;
  i++;
}
console.log(sum);