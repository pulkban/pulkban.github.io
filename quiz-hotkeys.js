// Number shortcuts follow the visible option order, including shuffled answers.
(function () {
    'use strict';
    if (window.quizNumberHotkeysInstalled) return;
    window.quizNumberHotkeysInstalled = true;

    function visible(element) {
        return element.getClientRects().length > 0 &&
            getComputedStyle(element).visibility !== 'hidden';
    }

    function options() {
        return Array.from(document.querySelectorAll(
            '#mc-options input.option-input, #options input.option-input, input[name="options"][type="radio"]'
        )).filter(visible);
    }

    function numberOptions() {
        options().forEach(function (input, index) {
            const number = index + 1;
            if (number > 9) return;
            input.setAttribute('aria-keyshortcuts', String(number));
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.defaultPrevented || event.repeat || event.isComposing ||
            event.ctrlKey || event.altKey || event.metaKey || event.shiftKey ||
            !/^[1-9]$/.test(event.key)) return;
        const target = event.target;
        if (target instanceof Element && target.closest(
            'textarea, select, [contenteditable]:not([contenteditable="false"]), input:not([type="radio"]):not([type="checkbox"]):not([type="button"]):not([type="submit"])'
        )) return;
        if (Array.from(document.querySelectorAll('.modal.show, dialog[open]')).some(visible)) return;
        const input = options()[Number(event.key) - 1];
        if (!input || input.disabled || input.closest('[inert]')) return;
        event.preventDefault();
        input.checked = input.type === 'checkbox' ? !input.checked : true;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    });

    function init() {
        numberOptions();
        new MutationObserver(numberOptions).observe(document.body, {
            childList: true, subtree: true,
            attributes: true, attributeFilter: ['style', 'hidden']
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
