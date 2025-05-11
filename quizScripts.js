const questions = [
    {
     question: "What is the capital of France?",
     answers: ["Berlin", "Madrid", "Paris", "Rome"],
     correct: 2
    },

    {
    question: "Which programming language is used for web development?",
    answers: ["Python", "JavaScript", "C++", "Ruby"],
    correct: 1
    }
];

let currentQuestion = 0;

// let 

const quizQuestion = document.getElementById("question");
const answerButton1 = document.getElementsByClassName("responses");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-question");


   
function displayQuestion() {
     const current = questions[currentQuestion];
     quizQuestion.textContent = current.question;

     answerButton1.forEach((button, index) => {
          button.textContent = current.answers[index];
          button.disabled = false;
          button.style.backgroundColor = "";
     });

     feedbackElement.textContent = "";
     nextButton.style.display = "none";
}
    
function handleAnswerSelection(event){
     const selectedButton = event.target;
     const selectedIndex = Array.from(answerButton1).indexOf(selectedButton);
     const isCorrect = selectedIndex === questions[currentQuestion].correct;

     feedbackElement.textContext = isCorrect ? "Correct!" : "Wrong Answer.";
     selectedButton.style.backgroundColor = isCorrect ? "cyan" : "lightcoral";

     answerButton1.forEach(button => button.disabled = true);
     nextButton.style.display = "block";
}

function nextQuestion() {
     currentQuestion++;
     if (currentQuestion < questions.length) {
          loadQuestion();
     } else {
          quizQuestion.textContext = "Quiz complete!";
          answerButton1.forEach(button => button.style.display = "none");
          feedbackElement.textContext = "Excellent!";
          nextButton.style.display = "none";
     }
}

answerButton1.forEach(button => button.addEventListener("click", handleAnswerSelection));
nextButton.addEventListener("click", nextQuestion);

console.log(displayQuestion);

displayQuestion();
handleAnswerSelection();
nextQuestion();




   