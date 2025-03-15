let currentQuestionIndex = 0;
let score = 0;
let totalSeconds = 0;
let timerInterval;
let incorrectAnswers = [];

function startTimer() {
    timerInterval = setInterval(() => {
        totalSeconds++;
        updateTimer();
    }, 1000);
}

function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    let seconds = (totalSeconds % 60).toString().padStart(2, '0');
    document.getElementById("timer").textContent = `Time: ${minutes}:${seconds}`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        return showFinalResults();
    }

    let questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;
    
    let optionsTable = document.getElementById("options");
    optionsTable.innerHTML = "";

    let optionsArray = Object.entries(questionData.options);
    optionsArray.sort(() => Math.random() - 0.5);

    optionsArray.forEach(([key, value]) => {
        let row = optionsTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        let inputType = questionData.type === "multiple" ? "checkbox" : "radio";
        cell1.innerHTML = `<input type="${inputType}" name="answer" value="${key}" class="option-input">`;
        cell1.classList.add("option-cell"); // Fix: Maintain column width
        cell2.textContent = value;
    });
}

function validateAnswer() {
    let questionData = questions[currentQuestionIndex];
    let selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked')).map(input => input.value);
    let correctAnswers = questionData.answer;

    let isCorrect = selectedOptions.length === correctAnswers.length && selectedOptions.every(ans => correctAnswers.includes(ans));

    let optionsTable = document.getElementById("options").rows;
    for (let row of optionsTable) {
        let input = row.cells[0].querySelector("input");
        if (correctAnswers.includes(input.value)) {
            row.classList.add("highlight-green");
        } else if (input.checked) {
            row.classList.add("highlight-red");
        }
    }

    setTimeout(() => {
        for (let row of optionsTable) row.classList.remove("highlight-green", "highlight-red");
        if (!isCorrect) incorrectAnswers.push(questionData.question);
        if (isCorrect) updateScore();
        currentQuestionIndex++;
        loadQuestion();
    }, 250);
}

function updateScore() {
    score++;
    let scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}`;
    scoreElement.classList.add("highlight-green");
    setTimeout(() => scoreElement.classList.remove("highlight-green"), 500);
}

function showAnswer() {
    let questionData = questions[currentQuestionIndex];
    let correctAnswers = questionData.answer;
    let optionsTable = document.getElementById("options").rows;

    for (let row of optionsTable) {
        let input = row.cells[0].querySelector("input");
        if (correctAnswers.includes(input.value)) {
            row.classList.add("highlight-green");
        }
    }
}

function showFinalResults() {
    stopTimer();
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
    
    document.getElementById("totalQuestions").textContent = questions.length;
    document.getElementById("finalScore").textContent = score;

    let minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    let seconds = (totalSeconds % 60).toString().padStart(2, '0');
    document.getElementById("finalTime").textContent = `${minutes}:${seconds}`;

    let incorrectList = document.getElementById("incorrectQuestions");
    incorrectList.innerHTML = "";
    incorrectAnswers.forEach(q => {
        let li = document.createElement("li");
        li.textContent = q;
        incorrectList.appendChild(li);
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    totalSeconds = 0;
    incorrectAnswers = [];

    document.getElementById("score").textContent = "Score: 0";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";
    
    startTimer();
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    startTimer();
    loadQuestion();
});
