console.log("Hello script")
//console.log(window)
console.log(document);

//example10

document.getElementById("toggleHighLight").addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
});