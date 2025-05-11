const quizData = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    }
];

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const resultsDiv = document.getElementById('results');

function buildQuiz() {
    let quizHTML = '';
    quizData.forEach((currentQuestion, questionNumber) => {
        quizHTML += `
            <div class="question">
                <h3>${currentQuestion.question}</h3>
                <ul class="options">
        `;
        currentQuestion.options.forEach(option => {
            quizHTML += `
                <li>
                    <input type="radio" name="question${questionNumber}" value="${option}">
                    <label>${option}</label>
                </li>
            `;
        });
        quizHTML += `
                </ul>
            </div>
        `;
    });
    quizContainer.innerHTML = quizHTML;
}

function showResults() {
    let score = 0;
    quizData.forEach((currentQuestion, questionNumber) => {
        const selectedOption = document.querySelector(`input[name="question${questionNumber}"]:checked`);
        if (selectedOption && selectedOption.value === currentQuestion.correctAnswer) {
            score++;
        }
    });
    resultsDiv.textContent = `You scored ${score} out of ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);