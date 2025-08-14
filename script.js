// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
      resultDisplayed = false;
      return;
    }

    if (button.id === 'equal') {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resultDisplayed && !['+', '-', '*', '/'].includes(value)) {
      currentInput = '';
      resultDisplayed = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});
