const baseValue = document.querySelector("#baseValue");
const heightValue = document.querySelector("#heightValue");
const buttonCheck = document.querySelector("#checkButton");

buttonCheck.addEventListener("click",function(){
    console.log(baseValue.value)
    console.log(heightValue.value)
})