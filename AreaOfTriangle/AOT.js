const firstSide = document.querySelector("#firstSide");
const secondSide = document.querySelector("#secondSide");
const thirdSide = document.querySelector("#thirdSide");
const checkButton = document.querySelector("#checkButton");
const output = document.querySelector("#output");


checkButton.addEventListener("click", function(){
    // console.log(firstSide.value)
    // console.log(secondSide.value)
    // console.log(thirdSide.value)

    const a = Number(firstSide.value)
    const b = Number(secondSide.value)
    const c = Number(thirdSide.value)

    calculateArea(a,b,c)
})

function calculateArea(a,b,c){

    const s = (a+b+c)/2
    const Area = Math.sqrt(s*(s-a)*(s-b)*(s-c))

    output.innerText = "Area of a triangle using heron's formula is "+ Area + " units"
}