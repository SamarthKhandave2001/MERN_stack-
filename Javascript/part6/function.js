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