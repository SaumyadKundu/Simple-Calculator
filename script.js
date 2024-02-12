let inputAreaElement = document.getElementById('inputArea');
let expression = '';


document.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(event) {
    const key = event.key;

    
    if (/[0-9/*\-+.]/.test(key)) {
        appendToInput(key);
    } else if (key === 'Enter') {
        // Handles Enter key as the equal sign
        calculateResult();
    } else if (key === 'Delete') {
        // Handles Delete key as the reset button
        resetCalculator();
    }
}

function appendToInput(value) {
    expression += value;
    inputAreaElement.textContent = expression;
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        inputAreaElement.textContent = expression;
    } catch (error) {
        inputAreaElement.textContent = 'Error';
    }
}

function resetCalculator() {
    expression = '';
    inputAreaElement.textContent = '';
}
