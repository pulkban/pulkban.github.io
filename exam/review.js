document.addEventListener("DOMContentLoaded", () => {
    // Ensure getQuestions function is available (from sf_pd2.js)
    if (typeof getQuestions !== "function") {
        console.error("getQuestions function not found. Make sure sf_pd2.js is loaded.");
        return;
    }

    const questions = getQuestions(); // Load your question bank

    const urlParams = new URLSearchParams(window.location.search);
    const questionIndex = parseInt(urlParams.get('index'));

    if (isNaN(questionIndex) || questionIndex < 0 || questionIndex >= questions.length) {
        document.getElementById('reviewQuestionContent').innerHTML = '<p class="text-danger">Question not found.</p>';
        return;
    }

    const questionData = questions[questionIndex];
    const reviewContentDiv = document.getElementById('reviewQuestionContent');

    // Helper to process images (copied from sf.js)
    function processQuestionTextForImages(text) {
        const imagePattern = /{{([^>]+\.(?:jpg|jpeg|png|gif))}}/gi;
        return text.replace(imagePattern, (match, filename) => {
            return `<img src="${filename}" alt="Question Image" style="max-width: 100%; height: auto; display: block; margin-top: 10px; margin-bottom: 10px;">`;
        });
    }

    let questionHTML = `
        <p class="question-text">${processQuestionTextForImages(questionData.question)}</p>
        <div class="options-list">
    `;

    Object.entries(questionData.options).forEach(([key, value]) => {
        const isCorrect = questionData.answer.includes(key);
        questionHTML += `
            <div class="option-item ${isCorrect ? 'correct-answer' : ''}">
                ${value} ${isCorrect ? ' (Correct Answer)' : ''}
            </div>
        `;
    });

    questionHTML += `</div>`;
    reviewContentDiv.innerHTML = questionHTML;
});