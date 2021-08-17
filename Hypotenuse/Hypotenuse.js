const baseValue = document.querySelector("#baseValue");
const heightValue = document.querySelector("#heightValue");
const buttonCheck = document.querySelector("#checkButton");
const output = document.querySelector("#output");

buttonCheck.addEventListener("click",function(){
    // console.log(baseValue.value)
    // console.log(heightValue.value)

    const hypotenuseValue = Math.hypot(Number(baseValue.value),Number(heightValue.value))
    output.innerText = "The length of the hypotenuse is "+hypotenuseValue
})