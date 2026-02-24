/*
1. Declare an array named 'teaFlavours' that contanins the strings "Green Tea", "Black Tea", and "Oolong Tea".
Access the first element of the array and store it in variable named 'firstTea'.
*/

let teaFlavours = ["Green Tea", "Black Tea", "Oolong Tea"];
let firstTea = teaFlavours[0];
console.log(firstTea);

/* 2.Declare an array named 'cities' containing "London", "Paris", "New York", and "Tokyo".
Access the third element in the arrya and store it in avariable named 'favouriteCity'.*/

let cities = ["London", "Paris", "New York", "Tokyo"];
let favouriteCity = cities[2];
console.log(favouriteCity);

/*
3. You have an array named 'teaTypes' containing "Green", "Black", "Oolong", and "White".
Change the second element of the array to "Jasmine tea".*/
let teaTypes = ["Green", "Black", "Oolong", "White"];
teaTypes[1] = "Jasmine tea";
console.log(teaTypes);

/*
4. Declare an array named 'citiesVisited' contaning "Mumbai" and "Sydney" Add "Berlin" to the array using 'push' method.*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

/* 5. You have an array named 'teaOrders' with 'chai', "iced tea", and "earl grey".
Remove the last element using ht epop method and store it in a variable named 'lastOrder'.*/

let teaOrders = ['chai', "iced tea", "earl grey"];
let lastOrder = teaOrders.pop();
console.log(lastOrder);

//*6. You have an array named 'popularTeas' containing "gren tea", "oolang tea" and "chai". Create a copy of this array named 'softCopyTeas'.question 66