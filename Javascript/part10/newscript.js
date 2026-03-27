//example 1
document.getElementById("changeTextButton")
.addEventListener('click', function (){
    let paragraph = document.getElementById("myParagraph")
    paragraph.textContent = "The paragraph is changed"
})

//example 2

document.getElementById("highlightFirstCity")
.addEventListener('click',function(){
  let citiesList = document.getElementById("citiesList")
citiesList.firstElementChild.classList.add("highlight")
})

//example3
document.getElementById("changeOrder").addEventListener('click', function(){
  let coffeeType= document.getElementById("coffeeType");
  coffeeType.textContent = "Expresso";
  coffeeType.style.backgroundColor = "brown"
  coffeeType.style.padding = "5px";
})

//example4

document.getElementById("addNewItem").addEventListener('click', function(){
 let newItem = document.createElement('li')

newItem.textContent = "Eggs"

document.getElementById("shoppingList").appendChild(newItem);
})

//example5

document.getElementById("removeLastTask").addEventListener('click', function(){
let taskList = document.getElementById("taskList");
taskList.lastElementChild.remove();
})

//example6
document.getElementById("clickMeButton").addEventListener('click', function(){
  alert("New Code")
})

//example 7

document.getElementById("teaList").addEventListener('click', function(event){
  if(event.target && event.target.matches('.teaItem')){
    alert("You selected: " + event.target.textContent);
  }
});


//example 8

document.getElementById("feedbackForm").addEventListener('submit', function(event){
event.preventDefault();
let feedback = document.getElementById("feedbackInput").value;
console.log(feedback);

document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
});