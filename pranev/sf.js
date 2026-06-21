let currentQuestionIndex = 0;
let score = 0;
let totalSeconds = 0;
let timerInterval;
let incorrectAnswers = [];
let correctCount = 0;
let incorrectCount = 0;
let questions; // No need to redeclare, it's set dynamically
let markedQuestions = []; // NEW: Array to store marked question indices or questions themselves
let selectedAnswersByIndex = {}; // Keep selected answers for modal review of marked questions

function syncCurrentMarkState() {
    const markCheckbox = document.getElementById("markQuestion");
    if (!markCheckbox || currentQuestionIndex >= (questions ? questions.length : 0)) return;

    if (markCheckbox.checked && !markedQuestions.includes(currentQuestionIndex)) {
        markedQuestions.push(currentQuestionIndex);
    } else if (!markCheckbox.checked && markedQuestions.includes(currentQuestionIndex)) {
        markedQuestions = markedQuestions.filter(index => index !== currentQuestionIndex);
    }
}

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
    const timerText = document.getElementById("timerText");
    if (timerText) timerText.textContent = `${minutes}:${seconds}`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function processQuestionTextForImages(text) {
    const input = String(text || '');

    function resolveImagePath(pathLike) {
        const raw = String(pathLike || '').trim();
        if (!raw) {
            return '';
        }
        // Keep explicit folder paths (for example: images_vup_maths/foo.jpg) as-is.
        if (raw.includes('/') || raw.includes('\\')) {
            return raw;
        }
        if (/^(?:https?:|data:|\/|\.\/|\.\.\/|pics\/)/i.test(raw)) {
            return raw;
        }
        return `pics/${raw}`;
    }

    function buildCandidatePaths(imagePath) {
        const raw = String(imagePath || '').trim();
        if (!raw) {
            return [];
        }

        const candidates = [];
        const addCandidate = (candidate) => {
            if (candidate && !candidates.includes(candidate)) {
                candidates.push(candidate);
            }
        };

        const normalized = resolveImagePath(raw);
        const hasExt = /\.(?:png|jpe?g)$/i.test(normalized);

        if (hasExt) {
            addCandidate(normalized);
            return candidates;
        }

        addCandidate(`${normalized}.png`);
        addCandidate(`${normalized}.jpg`);
        addCandidate(`${normalized}.jpeg`);

        // Football images are stored in pics/football with gen_* names.
        if (/^gen_/i.test(raw)) {
            addCandidate(`pics/football/${raw}.png`);
            addCandidate(`pics/football/${raw}.jpg`);
            addCandidate(`pics/football/${raw}.jpeg`);
        }

        return candidates;
    }

    function buildImageTag(imagePath) {
        const candidates = buildCandidatePaths(imagePath);
        if (candidates.length === 0) {
            return '';
        }
        const candidatesAttr = candidates
            .map(path => path.replace(/"/g, '&quot;'))
            .join('|');
        return `<img src="${candidates[0]}" data-candidates="${candidatesAttr}" data-candidate-index="0" alt="Question Image" style="max-width: 100%; height: auto; display: block; margin-top: 10px; margin-bottom: 10px;" onerror="var arr=(this.dataset.candidates||'').split('|');var i=parseInt(this.dataset.candidateIndex||'0',10)+1;if(i<arr.length){this.dataset.candidateIndex=String(i);this.src=arr[i];}else{this.style.display='none';}">`;
    }

    let rendered = input.replace(/{{([^}]+)}}/gi, (match, filename) => buildImageTag(filename));
    rendered = rendered.replace(/\/n\s*(?:>>>|&gt;&gt;&gt;)\s*([A-Za-z0-9_./-]+)/gi, (match, filename) => `<br>${buildImageTag(filename)}`);
    rendered = rendered.replace(/(?:>>>|&gt;&gt;&gt;)\s*([A-Za-z0-9_./-]+)/gi, (match, filename) => buildImageTag(filename));
    return rendered;
}

function loadQuestion() {
    document.getElementById("explanationText").style.display = "none";
    document.getElementById("explanationText").textContent = "";
    if (currentQuestionIndex >= questions.length) {
        return showFinalResults();
    }

    // Update compact stats row
    const totalText = document.getElementById("totalText");
    const completedText = document.getElementById("completedText");
    if (totalText) totalText.textContent = questions.length;
    if (completedText) completedText.textContent = currentQuestionIndex;

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
    // Keep mark state in sync before moving ahead
    syncCurrentMarkState();

    let questionData = questions[currentQuestionIndex];
    let selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked')).map(input => input.value);
    selectedAnswersByIndex[currentQuestionIndex] = [...selectedOptions];
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
            incorrectAnswers.push({ index: currentQuestionIndex, question: questionData.question, selected: selectedOptions });
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
    score = correctCount;
}

function formatCurrentDateTime() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${day}:${month}:${year} ${hours}:${minutes}`;
}

function updateCounters() {
    const correctText = document.getElementById("correctText");
    const incorrectText = document.getElementById("incorrectText");
    if (correctText) correctText.textContent = correctCount;
    if (incorrectText) incorrectText.textContent = incorrectCount;
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
    syncCurrentMarkState();
    // If not past last question, evaluate the current selection before results.
    if (currentQuestionIndex < questions.length) {
        let questionData = questions[currentQuestionIndex];
        let selectedOptions = Array.from(document.querySelectorAll('input[name="answer"]:checked')).map(input => input.value);
        selectedAnswersByIndex[currentQuestionIndex] = [...selectedOptions];
        let correctAnswers = questionData.answer;
        let isCorrect = selectedOptions.length === correctAnswers.length && selectedOptions.every(ans => correctAnswers.includes(ans));

        if (!isCorrect) {
            if (!incorrectAnswers.some(item => item.index === currentQuestionIndex)) {
                incorrectAnswers.push({ index: currentQuestionIndex, question: questionData.question, selected: selectedOptions });
                incorrectCount++;
            }
        } else {
            if (selectedOptions.length > 0 && !incorrectAnswers.some(item => item.index === currentQuestionIndex)) {
                correctCount++;
                updateScore();
            }
        }
        updateCounters();
        currentQuestionIndex = questions.length;
    }

    showFinalResults();
}

function showFinalResults() {
    stopTimer();
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
    
    document.getElementById("totalQuestions").textContent = questions.length;
    document.getElementById("finalScore").textContent = `${correctCount}/${correctCount + incorrectCount}`;

    let minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    let seconds = (totalSeconds % 60).toString().padStart(2, '0');
    document.getElementById("finalTime").textContent = `${minutes}:${seconds}`;
    const finalDate = document.getElementById("finalDate");
    if (finalDate) finalDate.textContent = formatCurrentDateTime();

    // Use shared modal review logic
    if (typeof window.setupReviewModal === 'function') {
        window.setupReviewModal({
            questions,
            incorrectAnswers,
            containerId: 'incorrectQuestions',
            modalId: 'reviewModal',
            modalBodyId: 'reviewModalBody'
        });
    }
	
    // NEW: Display Marked Questions
    let markedList = document.getElementById("markedQuestionsList");
    markedList.innerHTML = "";
    if (markedQuestions.length > 0) {
        document.getElementById("markedQuestionsSection").style.display = "block";
        markedQuestions.forEach(index => {
            let li = document.createElement("li");
            let btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btn btn-link p-0 text-start";
            btn.style.wordBreak = "break-word";
            btn.textContent = questions[index].question;
            btn.onclick = function() {
                window.showReviewModal(
                    index,
                    selectedAnswersByIndex[index] || [],
                    questions,
                    "reviewModal",
                    "reviewModalBody",
                    "Marked for Review"
                );
            };
            li.appendChild(btn);
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
    selectedAnswersByIndex = {};

    const correctText = document.getElementById("correctText");
    const incorrectText = document.getElementById("incorrectText");
    const completedText = document.getElementById("completedText");
    const totalText = document.getElementById("totalText");
    if (correctText) correctText.textContent = 0;
    if (incorrectText) incorrectText.textContent = 0;
    if (completedText && totalText) {
        completedText.textContent = 0;
        totalText.textContent = questions ? questions.length : 0;
    }

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
