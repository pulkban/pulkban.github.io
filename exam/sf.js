let currentQuestionIndex = 0;
let score = 0;
let totalSeconds = 0;
let timerInterval;
let incorrectAnswers = [];
let correctCount = 0;
let incorrectCount = 0;
let questions; // No need to redeclare, it's set dynamically
let markedQuestions = []; // NEW: Array to store marked question indices or questions themselves

function startQuiz() {
    if (!questions || questions.length === 0) {
        console.error("No questions loaded!");
        return;
    }
    startTimer();
    loadQuestion();
}

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

function processQuestionTextForImages(text) {
    // Regular expression to find <<filename.ext>> where ext can be jpg, jpeg, png, gif
    // The `gi` flags make it global (find all matches) and case-insensitive
    const imagePattern = /{{([^>]+\.(?:jpg|jpeg|png|gif))}}/gi;

    // Replace each found pattern with an <img> tag
    return text.replace(imagePattern, (match, filename) => {
        // You can customize the img tag with alt text, width, height, or classes
        return `<img src="${filename}" alt="Question Image" style="max-width: 100%; height: auto; display: block; margin-top: 10px; margin-bottom: 10px;">`;
    });
}

function loadQuestion() {
    document.getElementById("explanationText").style.display = "none";
    document.getElementById("explanationText").textContent = "";
    if (currentQuestionIndex >= questions.length) {
        return showFinalResults();
    }

    let questionData = questions[currentQuestionIndex];
    //document.getElementById("question").textContent = questionData.question;
	let formattedQuestion = processQuestionTextForImages(questionData.question);
    document.getElementById("question").innerHTML = formattedQuestion; // Changed to innerHTML
    
    let optionsTable = document.getElementById("options");
    optionsTable.innerHTML = "";

    let optionsArray = Object.entries(questionData.options);
    optionsArray.sort(() => Math.random() - 0.5);

    optionsArray.forEach(([key, value]) => {
        let row = optionsTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        let inputType = questionData.type === "multiple" ? "checkbox" : "radio";
        let inputElement = document.createElement("input");
        inputElement.type = inputType;
        inputElement.name = "answer";
        inputElement.value = key;
        inputElement.classList.add("option-input");

        cell1.appendChild(inputElement);
        cell1.classList.add("option-cell");
        cell2.textContent = value;

        // Allow clicking anywhere on the row to select the corresponding radio button or checkbox
        row.addEventListener("click", () => {
            if (inputType === "radio") {
                inputElement.checked = true;
            } else {
                inputElement.checked = !inputElement.checked;
            }
        });
    });	

	//Explanation
    const explanationDiv = document.getElementById("explanationText");
    if (questionData.explanation) {
        explanationDiv.textContent = questionData.explanation;
        explanationDiv.style.display = "block"; // Ensure it's visible if there's content
    } else {
        explanationDiv.textContent = ""; // Clear if no explanation
        explanationDiv.style.display = "none"; // Hide if no explanation
    }
	
    // NEW: Handle the "Mark for Review" checkbox
    const markCheckbox = document.getElementById("markQuestion");
    markCheckbox.checked = markedQuestions.includes(currentQuestionIndex); // Set its state based on whether the current question is marked
}

function validateAnswer() {
    // NEW: Check if the current question was marked before moving to the next
    const markCheckbox = document.getElementById("markQuestion");
    if (markCheckbox.checked && !markedQuestions.includes(currentQuestionIndex)) {
        markedQuestions.push(currentQuestionIndex); // Add to marked questions if checked and not already added
    } else if (!markCheckbox.checked && markedQuestions.includes(currentQuestionIndex)) {
        markedQuestions = markedQuestions.filter(index => index !== currentQuestionIndex); // Remove if unchecked
    }
	
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
        if (!isCorrect) {
            incorrectAnswers.push(questionData.question);
            incorrectCount++;
        } else {
            correctCount++;
            updateScore();
        }
        updateCounters();
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

function updateCounters() {
    document.getElementById("correctCounter").textContent = `Correct: ${correctCount}`;
    document.getElementById("incorrectCounter").textContent = `Incorrect: ${incorrectCount}`;
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

function finishQuiz() {
    // This function will directly jump to the final results screen.
    showFinalResults();
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

	const sfScriptTag = document.querySelector('script[src="sf.js"]');
	const currentQuestionBank = sfScriptTag ? sfScriptTag.dataset.questionBank : 'sf_pd2.js'; // Default if not found or for testing

    let incorrectList = document.getElementById("incorrectQuestions");
    incorrectList.innerHTML = "";
    incorrectAnswers.forEach(qText => { // qText is the question string itself
        // Find the index of this question in the original 'questions' array
        const originalIndex = questions.findIndex(q => q.question === qText);
        if (originalIndex !== -1) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = `review_question.html?index=${originalIndex}&bank=${currentQuestionBank}`;
            a.textContent = qText;
            a.target = "_blank"; // Opens in a new tab
            li.appendChild(a);
            incorrectList.appendChild(li);
        } else {
            // Fallback if question text can't be matched (e.g., if question texts aren't unique)
            let li = document.createElement("li");
            li.textContent = qText + " (Original not found)";
            incorrectList.appendChild(li);
        }
    });
	
    // NEW: Display Marked Questions
    let markedList = document.getElementById("markedQuestionsList");
    markedList.innerHTML = "";
    if (markedQuestions.length > 0) {
        document.getElementById("markedQuestionsSection").style.display = "block";
        markedQuestions.forEach(index => {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = `review_question.html?index=${index}&bank=${currentQuestionBank}`;
            a.textContent = questions[index].question; // Display the question text
            a.target = "_blank"; // Opens in a new tab
            li.appendChild(a);
            markedList.appendChild(li);
        });
    } else {
        document.getElementById("markedQuestionsSection").style.display = "none";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    totalSeconds = 0;
    incorrectAnswers = [];
    correctCount = 0;
    incorrectCount = 0;
    markedQuestions = []; // NEW: Reset marked questions on restart

    document.getElementById("score").textContent = "Score: 0";
    document.getElementById("correctCounter").textContent = "Correct: 0";
    document.getElementById("incorrectCounter").textContent = "Incorrect: 0";

    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";
    
    startTimer();
    loadQuestion();
}

// Dynamically load the question bank based on URL parameter
document.addEventListener("DOMContentLoaded", () => {
    if (typeof getQuestions === "function") {
        questions = getQuestions(); // Load questions dynamically
        startQuiz();
    } else {
        console.error("Question bank not loaded yet!");
    }
	
    // NEW: Add the Hotkey Listener here
    document.addEventListener('keydown', (event) => {
        const quizContainer = document.getElementById('quizContainer');
        const resultContainer = document.getElementById('resultContainer');

        if (quizContainer && quizContainer.style.display !== 'none' &&
            resultContainer && resultContainer.style.display === 'none') {
            const key = event.key.toLowerCase();

            if (key === 'n') {
                validateAnswer();
            } else if (key === 's') {
                showAnswer();
            } else if (key === 'f') {
                finishQuiz();
            }
        }
    });
});
