const angleOne = document.querySelector("#angleOne");
const angleTwo = document.querySelector("#angleTwo");
const angleThree = document.querySelector("#angleThree");
const checkButton = document.querySelector("#checkButton");
const output = document.querySelector("#output");

checkButton.addEventListener("click",function(){
    // console.log(angleOne.value)
    // console.log(angleTwo.value)
    // console.log(angleThree.value)
    const angleSum = Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);
    // console.log(angleSum)
    triangleCheck(angleSum); 
})

function triangleCheck(angleSum){
    if(angleSum === 180){
        return output.innerText = "Yay! these angles form a triangle"
    }else{
        return output.innerText = "Oh No! these angles do not form a triangle"
    }
}