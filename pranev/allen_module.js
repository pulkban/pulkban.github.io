(function () {
    const bank = Array.isArray(window.allenQuestionBank) ? window.allenQuestionBank : [];

    const identifierSelect = document.getElementById('identifier-select');
    const styleSelect = document.getElementById('style-select');
    const goBtn = document.getElementById('go-btn');

    const mcSection = document.getElementById('mc-section');
    const fallingSection = document.getElementById('falling-section');

    const mcTimerText = document.getElementById('mc-timer-text');
    const mcCorrectText = document.getElementById('mc-correct-text');
    const mcIncorrectText = document.getElementById('mc-incorrect-text');
    const mcCompletedText = document.getElementById('mc-completed-text');
    const mcTotalText = document.getElementById('mc-total-text');
    const mcQuestionText = document.getElementById('mc-question');
    const mcOptions = document.getElementById('mc-options');
    const mcExplanation = document.getElementById('mc-explanation');
    const mcMarkQuestion = document.getElementById('mc-mark-question');
    const mcQuizContainer = document.getElementById('mc-quiz-container');
    const mcResult = document.getElementById('mc-result');
    const mcFinalScore = document.getElementById('mc-final-score');
    const mcFinalTime = document.getElementById('mc-final-time');
    const mcFinalTotal = document.getElementById('mc-final-total');
    const mcFinalDate = document.getElementById('mc-final-date');
    const mcIncorrectList = document.getElementById('mc-incorrect-list');
    const mcMarkedSection = document.getElementById('mc-marked-section');
    const mcMarkedList = document.getElementById('mc-marked-list');

    const fallingContainer = document.getElementById('falling-words-container');
    const fallingAnswerDisplay = document.getElementById('answer-display');

    let filteredQuestions = [];

    let mcIndex = 0;
    let mcScore = 0;
    let mcCorrect = 0;
    let mcIncorrect = 0;
    let mcSeconds = 0;
    let mcTimerId = null;
    let mcIncorrectQuestions = [];
    let mcMarkedIndices = [];
    let mcIsTransitioning = false;

    let isPaused = false;
    let fallDuration = 3;
    let currentFallingQuestion = null;
    let fallingRunSeq = 0;
    let answerTimerId = null;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function buildImageTag(imagePath) {
        const path = String(imagePath || '').trim();
        if (!path) {
            return '';
        }

        if (/\.(?:png|jpe?g)$/i.test(path)) {
            return '<img src="' + path + '" alt="Question Image" style="max-width: 100%; height: auto; display: block; margin-top: 10px; margin-bottom: 10px;">';
        }

        const safePath = path.replace(/"/g, '&quot;');
        return '<img src="' + safePath + '.png" alt="Question Image" style="max-width: 100%; height: auto; display: block; margin-top: 10px; margin-bottom: 10px;" onerror="if(!this.dataset.tryJpg){this.dataset.tryJpg=\'1\';this.src=\'' + safePath + '.jpg\';}else if(!this.dataset.tryJpeg){this.dataset.tryJpeg=\'1\';this.src=\'' + safePath + '.jpeg\';}else{this.style.display=\'none\';}">';
    }

    function processQuestionTextForImages(text) {
        let rendered = String(text || '');

        rendered = rendered.replace(/{{([^}]+)}}/gi, function (_, filename) {
            return buildImageTag(filename);
        });

        rendered = rendered.replace(/\/n\s*(?:>>>|&gt;&gt;&gt;)\s*([A-Za-z0-9_./-]+)/gi, function (_, filename) {
            return '<br>' + buildImageTag(filename);
        });

        rendered = rendered.replace(/(?:>>>|&gt;&gt;&gt;)\s*([A-Za-z0-9_./-]+)/gi, function (_, filename) {
            return buildImageTag(filename);
        });

        return rendered;
    }

    function getDistinctIdentifiers() {
        const identifiers = bank.map(function (q) { return q.identifier; }).filter(Boolean);
        return Array.from(new Set(identifiers));
    }

    function updateGoState() {
        goBtn.disabled = !(identifierSelect.value && styleSelect.value);
    }

    function fillIdentifierSelect() {
        const identifiers = getDistinctIdentifiers();
        identifierSelect.innerHTML = '';
        if (!identifiers.length) {
            identifierSelect.innerHTML = '<option value="">No Identifier</option>';
            return;
        }
        identifiers.forEach(function (id) {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = id;
            identifierSelect.appendChild(option);
        });
    }

    function setDefaultSelections() {
        if (identifierSelect.options.length > 0) {
            identifierSelect.selectedIndex = 0;
        }

        for (let i = 0; i < styleSelect.options.length; i++) {
            if (styleSelect.options[i].value) {
                styleSelect.selectedIndex = i;
                break;
            }
        }
    }

    function stopMcTimer() {
        if (mcTimerId) {
            clearInterval(mcTimerId);
            mcTimerId = null;
        }
    }

    function startMcTimer() {
        stopMcTimer();
        mcTimerId = setInterval(function () {
            mcSeconds++;
            const mm = String(Math.floor(mcSeconds / 60)).padStart(2, '0');
            const ss = String(mcSeconds % 60).padStart(2, '0');
            mcTimerText.textContent = mm + ':' + ss;
        }, 1000);
    }

    function resetMcStats() {
        mcIndex = 0;
        mcScore = 0;
        mcCorrect = 0;
        mcIncorrect = 0;
        mcSeconds = 0;
        mcIncorrectQuestions = [];
        mcMarkedIndices = [];
        mcIsTransitioning = false;
        mcCorrectText.textContent = '0';
        mcIncorrectText.textContent = '0';
        mcCompletedText.textContent = '0';
        mcTotalText.textContent = String(filteredQuestions.length);
        mcTimerText.textContent = '00:00';
        mcQuizContainer.style.display = 'block';
        mcResult.style.display = 'none';
        mcIncorrectList.innerHTML = '';
        mcMarkedList.innerHTML = '';
        mcMarkedSection.style.display = 'none';
        mcExplanation.style.display = 'none';
        mcExplanation.textContent = '';
        mcMarkQuestion.checked = false;
    }

    function getAnswerArray(question) {
        if (Array.isArray(question.answer)) {
            return question.answer;
        }
        if (typeof question.answer === 'string') {
            return [question.answer];
        }
        return [];
    }

    function syncMarkedState() {
        if (mcMarkQuestion.checked) {
            if (!mcMarkedIndices.includes(mcIndex)) {
                mcMarkedIndices.push(mcIndex);
            }
        } else {
            mcMarkedIndices = mcMarkedIndices.filter(function (idx) { return idx !== mcIndex; });
        }
    }

    function addIncorrectEntry(index, selected, questionText) {
        const exists = mcIncorrectQuestions.some(function (item) { return item.index === index; });
        if (exists) {
            return false;
        }
        mcIncorrectQuestions.push({
            index: index,
            selected: selected,
            question: questionText
        });
        return true;
    }

    function renderMcQuestion() {
        if (mcIndex >= filteredQuestions.length) {
            showMcFinal();
            return;
        }

        const q = filteredQuestions[mcIndex];
        mcCompletedText.textContent = String(mcIndex);
        mcTotalText.textContent = String(filteredQuestions.length);
        mcQuestionText.innerHTML = processQuestionTextForImages(q.question);
        mcOptions.innerHTML = '';

        const options = Object.entries(q.options || {});
        shuffleArray(options);

        options.forEach(function (entry) {
            const key = entry[0];
            const value = entry[1];
            const row = mcOptions.insertRow();
            const inputCell = row.insertCell(0);
            const textCell = row.insertCell(1);

            const input = document.createElement('input');
            input.type = q.type === 'multiple' ? 'checkbox' : 'radio';
            input.name = 'mc-answer';
            input.value = key;
            input.className = 'option-input';

            inputCell.className = 'option-cell';
            inputCell.appendChild(input);
            textCell.textContent = value;

            row.addEventListener('click', function () {
                if (input.type === 'radio') {
                    input.checked = true;
                } else {
                    input.checked = !input.checked;
                }
            });
        });

        if (q.explanation) {
            mcExplanation.textContent = q.explanation;
            mcExplanation.style.display = 'block';
        } else {
            mcExplanation.textContent = '';
            mcExplanation.style.display = 'none';
        }

        mcMarkQuestion.checked = mcMarkedIndices.includes(mcIndex);
    }

    function validateMcAnswer() {
        if (mcIndex >= filteredQuestions.length || mcIsTransitioning) {
            return;
        }
        mcIsTransitioning = true;

        syncMarkedState();

        const q = filteredQuestions[mcIndex];
        const selected = Array.from(document.querySelectorAll('input[name="mc-answer"]:checked')).map(function (el) { return el.value; });
        const correct = getAnswerArray(q);
        const isCorrect = selected.length === correct.length && selected.every(function (ans) { return correct.includes(ans); });

        const rows = mcOptions.rows;
        for (const row of rows) {
            const input = row.cells[0].querySelector('input');
            if (correct.includes(input.value)) {
                row.classList.add('highlight-green');
            } else if (input.checked) {
                row.classList.add('highlight-red');
            }
        }

        setTimeout(function () {
            for (const row of rows) {
                row.classList.remove('highlight-green', 'highlight-red');
            }
            if (isCorrect) {
                mcScore++;
                mcCorrect++;
            } else {
                if (addIncorrectEntry(mcIndex, selected, q.question)) {
                    mcIncorrect++;
                }
            }
            mcCorrectText.textContent = String(mcCorrect);
            mcIncorrectText.textContent = String(mcIncorrect);
            mcIndex++;
            mcIsTransitioning = false;
            renderMcQuestion();
        }, 250);
    }

    function showMcAnswer() {
        if (mcIndex >= filteredQuestions.length) {
            return;
        }
        const q = filteredQuestions[mcIndex];
        const correct = getAnswerArray(q);
        const rows = mcOptions.rows;
        for (const row of rows) {
            const input = row.cells[0].querySelector('input');
            if (correct.includes(input.value)) {
                row.classList.add('highlight-green');
            }
        }
    }

    function showMcFinal() {
        mcIsTransitioning = false;
        if (mcIndex < filteredQuestions.length) {
            syncMarkedState();
        }

        stopMcTimer();
        mcQuizContainer.style.display = 'none';
        mcFinalTotal.textContent = String(filteredQuestions.length);
        mcFinalScore.textContent = String(mcScore);
        const mm = String(Math.floor(mcSeconds / 60)).padStart(2, '0');
        const ss = String(mcSeconds % 60).padStart(2, '0');
        mcFinalTime.textContent = mm + ':' + ss;
        mcFinalDate.textContent = new Date().toLocaleDateString('en-GB');

        mcIncorrectList.innerHTML = '';
        if (typeof window.setupReviewModal === 'function') {
            const uniqueIncorrect = mcIncorrectQuestions.filter(function (item, pos, arr) {
                return arr.findIndex(function (x) { return x.index === item.index; }) === pos;
            });
            window.setupReviewModal({
                questions: filteredQuestions,
                incorrectAnswers: uniqueIncorrect,
                containerId: 'mc-incorrect-list',
                modalId: 'reviewModal',
                modalBodyId: 'reviewModalBody'
            });
        } else {
            mcIncorrectQuestions.forEach(function (item) {
                const li = document.createElement('li');
                li.textContent = item.question;
                mcIncorrectList.appendChild(li);
            });
        }

        mcMarkedList.innerHTML = '';
        if (mcMarkedIndices.length > 0) {
            mcMarkedSection.style.display = 'block';
            mcMarkedIndices.sort(function (a, b) { return a - b; }).forEach(function (idx) {
                const li = document.createElement('li');
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'btn btn-link p-0 text-start';
                btn.style.wordBreak = 'break-word';
                btn.textContent = filteredQuestions[idx] ? filteredQuestions[idx].question : 'Question ' + (idx + 1);
                btn.onclick = function () {
                    if (typeof window.showReviewModal === 'function') {
                        window.showReviewModal(idx, [], filteredQuestions, 'reviewModal', 'reviewModalBody', 'Review Question');
                    }
                };
                li.appendChild(btn);
                mcMarkedList.appendChild(li);
            });
        } else {
            mcMarkedSection.style.display = 'none';
        }

        mcCompletedText.textContent = String(filteredQuestions.length);
        mcResult.style.display = 'block';
    }

    function restartMcQuiz() {
        stopMcTimer();
        resetMcStats();
        startMcTimer();
        renderMcQuestion();
    }

    function finishMcQuiz() {
        if (mcIndex < filteredQuestions.length) {
            syncMarkedState();

            const q = filteredQuestions[mcIndex];
            const selected = Array.from(document.querySelectorAll('input[name="mc-answer"]:checked')).map(function (el) { return el.value; });
            const correct = getAnswerArray(q);
            const isCorrect = selected.length === correct.length && selected.every(function (ans) { return correct.includes(ans); });

            if (isCorrect) {
                mcScore++;
                mcCorrect++;
            } else {
                if (addIncorrectEntry(mcIndex, selected, q.question)) {
                    mcIncorrect++;
                }
            }

            mcCorrectText.textContent = String(mcCorrect);
            mcIncorrectText.textContent = String(mcIncorrect);
            mcIndex = filteredQuestions.length;
        }

        showMcFinal();
    }

    function getFallingAnswerText(questionObj) {
        const answerKeys = Array.isArray(questionObj.answer) ? questionObj.answer : [];
        const options = questionObj.options || {};
        const answerTexts = answerKeys.map(function (key) { return options[key] || key; });
        return answerTexts.join(', ');
    }

    function showAnswerAtNinetyPercent(answer, runId) {
        clearTimeout(answerTimerId);
        answerTimerId = setTimeout(function () {
            if (runId !== fallingRunSeq) {
                return;
            }
            fallingAnswerDisplay.textContent = answer;
            fallingAnswerDisplay.style.fontSize = '28px';
        }, fallDuration * 900);
    }

    function createFallingQuestion(questionObj, runId) {
        if (runId !== fallingRunSeq) {
            return Promise.resolve(false);
        }

        return new Promise(function (resolve) {
            const div = document.createElement('div');
            div.className = 'falling-item question';
            div.textContent = questionObj.question;
            fallingAnswerDisplay.textContent = '';
            div.style.animation = 'fall ' + fallDuration + 's linear forwards';
            div.style.animationPlayState = isPaused ? 'paused' : 'running';
            fallingContainer.appendChild(div);
            currentFallingQuestion = questionObj;

            showAnswerAtNinetyPercent(getFallingAnswerText(questionObj), runId);

            div.addEventListener('animationend', function () {
                if (fallingContainer.contains(div)) {
                    fallingContainer.removeChild(div);
                }
                if (runId === fallingRunSeq) {
                    fallingAnswerDisplay.textContent = '';
                }
                resolve(runId === fallingRunSeq);
            }, { once: true });
        });
    }

    async function startFallingGame() {
        if (!filteredQuestions.length) {
            return;
        }
        const runId = ++fallingRunSeq;
        const queue = filteredQuestions.slice();
        clearTimeout(answerTimerId);
        isPaused = false;
        fallingContainer.innerHTML = '';
        fallingAnswerDisplay.textContent = '';

        while (runId === fallingRunSeq) {
            shuffleArray(queue);
            for (const q of queue) {
                while (isPaused && runId === fallingRunSeq) {
                    await new Promise(function (resolve) { setTimeout(resolve, 100); });
                }
                if (runId !== fallingRunSeq || !(await createFallingQuestion(q, runId))) {
                    return;
                }
                await new Promise(function (resolve) { setTimeout(resolve, 500); });
            }
        }
    }

    function toggleFallingPause() {
        isPaused = !isPaused;
        document.querySelectorAll('.falling-item').forEach(function (item) {
            item.style.animationPlayState = isPaused ? 'paused' : 'running';
        });
    }

    function showFallingAnswer() {
        if (!currentFallingQuestion) {
            fallingAnswerDisplay.textContent = 'No question falling yet!';
            fallingAnswerDisplay.style.fontSize = '28px';
            return;
        }
        fallingAnswerDisplay.textContent = getFallingAnswerText(currentFallingQuestion);
        fallingAnswerDisplay.style.fontSize = '28px';
    }

    function changeFallingSpeed(speed) {
        fallDuration = Number(speed) || 3;
    }

    function startMultipleChoiceMode() {
        fallingRunSeq++;
        clearTimeout(answerTimerId);
        mcSection.style.display = 'block';
        fallingSection.style.display = 'none';

        resetMcStats();
        startMcTimer();
        renderMcQuestion();
    }

    function startFallingMode() {
        stopMcTimer();
        mcSection.style.display = 'none';
        fallingSection.style.display = 'block';
    }

    function onGo() {
        const selectedIdentifier = identifierSelect.value;
        const selectedStyle = styleSelect.value;
        filteredQuestions = bank.filter(function (q) { return q.identifier === selectedIdentifier; });

        if (!filteredQuestions.length) {
            alert('No questions found for selected identifier.');
            return;
        }

        identifierSelect.disabled = true;
        styleSelect.disabled = true;
        goBtn.disabled = true;

        if (selectedStyle === 'multiple') {
            startMultipleChoiceMode();
        } else {
            startFallingMode();
        }
    }

    document.getElementById('mc-next-btn').addEventListener('click', validateMcAnswer);
    document.getElementById('mc-show-answer-btn').addEventListener('click', showMcAnswer);
    document.getElementById('mc-finish-btn').addEventListener('click', finishMcQuiz);
    document.getElementById('mc-restart-btn').addEventListener('click', restartMcQuiz);

    document.getElementById('falling-start-btn').addEventListener('click', startFallingGame);
    document.getElementById('falling-show-answer-btn').addEventListener('click', showFallingAnswer);
    document.getElementById('falling-pause-btn').addEventListener('click', toggleFallingPause);
    document.getElementById('falling-speed-select').addEventListener('change', function (event) {
        changeFallingSpeed(event.target.value);
    });

    identifierSelect.addEventListener('change', updateGoState);
    styleSelect.addEventListener('change', updateGoState);
    goBtn.addEventListener('click', onGo);

    document.addEventListener('keydown', function (event) {
        if (mcSection.style.display === 'none' || mcResult.style.display === 'block') {
            return;
        }
        const key = event.key.toLowerCase();
        if (key === 'n') {
            validateMcAnswer();
        } else if (key === 's') {
            showMcAnswer();
        } else if (key === 'f') {
            finishMcQuiz();
        }
    });

    fillIdentifierSelect();
    setDefaultSelections();
    window.processQuestionTextForImages = processQuestionTextForImages;
    updateGoState();
})();