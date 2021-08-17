const firstSide = document.querySelector("#firstSide");
const secondSide = document.querySelector("#secondSide");
const thirdSide = document.querySelector("#thirdSide");
const checkButton = document.querySelector("#checkButton");

checkButton.addEventListener("click", function(){
    console.log(firstSide.value)
    console.log(secondSide.value)
    console.log(thirdSide.value)
})