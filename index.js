
const readlineSync = require ("readline-sync");
var userInput = readlineSync.question("enter your name ")
console.log( "hi" + userInput)
quizQuestions = [{question : "what is my name",answer:"jaswanth"},{question:"where do i live",answer:"bangalore"}]
score = 0;
function play (question,answer){
    var userAnswer = readlineSync.question(quizQuestions[i].question)
    if (userAnswer === answer){
        console.log("you are correct")
        score++
    }
    else{
        console.log("you are wrong")
    }
}
for (i = 0;i <quizQuestions.length;i++){
    
    play(quizQuestions[i].question,quizQuestions[i].answer)
    console.log(" your score is ",score)
    

}
