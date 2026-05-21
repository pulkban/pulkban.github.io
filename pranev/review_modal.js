// Shared modal review logic for Pranev quizzes
window.setupReviewModal = function({ questions, incorrectAnswers, containerId = 'incorrectQuestions', modalId = 'reviewModal', modalBodyId = 'reviewModalBody' }) {
    const incorrectList = document.getElementById(containerId);
    if (!incorrectList) return;

    incorrectList.innerHTML = '';
    incorrectAnswers.forEach(item => {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-link p-0 text-start';
        btn.style.wordBreak = 'break-word';
        btn.textContent = item.question;
        btn.onclick = function() {
            window.showReviewModal(item.index, item.selected, questions, modalId, modalBodyId);
        };
        li.appendChild(btn);
        incorrectList.appendChild(li);
    });
};

window.showReviewModal = function(qIndex, selectedArr, questions, modalId = 'reviewModal', modalBodyId = 'reviewModalBody', modalTitle = 'Review Question') {
    const q = questions[qIndex];
    const titleEl = document.getElementById('reviewModalLabel');
    if (titleEl) titleEl.textContent = modalTitle;

    // Use the same image-processing logic as the quiz if available
    let formattedQuestion = (window.processQuestionTextForImages ? window.processQuestionTextForImages(q.question) : q.question);
    let html = `<div class='mb-2'><b>Question:</b><br>${formattedQuestion}</div><div><b>Options:</b><br>`;

    if (!q.options || Object.keys(q.options).length === 0) {
        html += `<div class='text-muted'>No options available for this question.</div>`;
    } else {
        Object.entries(q.options).forEach(([key, value]) => {
            const isCorrect = Array.isArray(q.answer) ? q.answer.includes(key) : q.answer === key;
            const isSelected = selectedArr && selectedArr.includes(key);
            let label = '';

            if (isCorrect && isSelected) label = ' (Your Answer & Correct Answer)';
            else if (isCorrect) label = ' (Correct Answer)';
            else if (isSelected) label = ' (Your Answer)';

            html += `<div class='mb-1${isCorrect ? ' review-correct' : ''}${isSelected && !isCorrect ? ' review-incorrect' : ''}'>${value}${label}</div>`;
        });
    }

    html += '</div>';
    document.getElementById(modalBodyId).innerHTML = html;

    let modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();

    const escListener = (e) => {
        if (e.key === 'Escape') {
            modal.hide();
        }
    };

    document.addEventListener('keydown', escListener);
    document.getElementById(modalId).addEventListener('hidden.bs.modal', function handler() {
        document.removeEventListener('keydown', escListener);
        document.getElementById(modalId).removeEventListener('hidden.bs.modal', handler);
    });
};
