/* 1. Write a function named 'makeTea' that takes one parameter 'typeOfTea', and returns a string like "Making green tea" when called with "green tea". Store the result in a variable named 'teaorder'.*/
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);
 
/*2. Create a function named 'orderTea' that takes one parameter, 'teaType',. Inside this function, Create another function named 'confirmOrder' that returns a message like "order confirmed for chai."
call 'confirmOrder' from within 'orderTea' and return the result*/

function orderTea(teaType){
    function confirmOrder(){
        return `order confirmed for ${teaType}`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai.");
console.log(orderConfirmation);

/*3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantitiy'. The function should return the total cost by mutiplying the 'price' and 'quantity'. Store the result in an variable named 'totalCost'.*/

const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(10, 5);
console.log(totalCost);

/*4. Write a function named 'processTeaOrder' that takes another function, 'maketea', as a parameter and cells it with the arugument 'earl grey'. Return the result of celling makeTea.*/

function processTeaOrder(makeTea){
    return makeTea("earl grey");
}   
let processedOrder = processTeaOrder(makeTea);
console.log(processedOrder);

/*5. Write a function named 'crateTeaMaker' that returns another function. The returned function should take one parameter. 'teaType', and return a message like 'Making green tea'.Store the returned function in a variable named 'teaMaker' and call it with 'green tea'.*/




