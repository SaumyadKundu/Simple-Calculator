let inputAreaElement = document.getElementById('inputArea');
let expression = '';

// Add event listener for keyboard input
document.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(event) {
    const key = event.key;

    // Check if the pressed key is a numeric key or an operator
    if (/[0-9/*\-+.]/.test(key)) {
        appendToInput(key);
    } else if (key === 'Enter') {
        // Handle Enter key as the equal sign
        calculateResult();
    } else if (key === 'Delete') {
        // Handle Delete key as the reset button
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
