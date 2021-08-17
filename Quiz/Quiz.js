const quizForm = document.querySelector("#quiz-form");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

const correctAnswers = ["90°","right angled","one right angle","14, 15, 26","Equilateral triangle","85°","10°","None of these","no","45°"]

checkButton.addEventListener("click",function(){
    let index = 0;
    let score = 0;
    let formResults = new FormData(quizForm);

    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score+=1;
        }index+=1;  
    } output.innerText="The score is "+score
})