let operator = '';
let previousInput = '';
let currentInput = '';

document.addEventListener('DOMContentLoaded', function(){
    let numbers = document.querySelectorAll(".number");
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");
    let backspace = document.querySelector(".backspace");
    let operators = document.querySelectorAll(".operation");
    let currentDisplay = document.querySelector(".display");
    let prevScreen = document.querySelector(".prev");

    // Adds a click event listener to each number button.
    // When a number button is clicked, it retrieves the button’s text content and calls inputCreation
    numbers.forEach((number) => {
        number.addEventListener('click', function(){
            let input = this.textContent;
            inputCreation(input);
        });
    });

    // Appends the input to currentInput and updates the display with the new currentInput
    // Length cannot be greater than 5 due to view constraints
    function inputCreation(input) {
        if (currentInput.length <= 5) {
            currentInput += input;
        }
        currentDisplay.textContent = previousInput + " " + operator + " " + currentInput;
    }

    // Adds a click event listener to each operator button.
    // When an operator button is clicked, it sets the operator and moves the current input to previous input
    operators.forEach((op) => {
        op.addEventListener('click', function(){
            if (currentInput) {
                operator = this.textContent;
                previousInput = currentInput;
                currentInput = '';
                currentDisplay.textContent = previousInput + " " + operator;
            }
        });
    });

    // Adds a click event listener to the clear button.
    // When the clear button is clicked, it resets all inputs and the display
    clear.addEventListener('click', function(){
        previousInput = '';
        currentInput = '';
        operator = '';
        prevScreen.textContent = '';
        currentDisplay.textContent = '';
    });

    // Adds a click event listener to the equal button.
    // When the equal button is clicked, it performs the calculation and updates the display
    equal.addEventListener('click', function(){
        operatorCalculation();
        prevScreen.textContent = '';
        currentDisplay.textContent = previousInput;
    });

    // Performs the calculation based on the operator and updates the previous input
    function operatorCalculation() {
        previousInput = Number(previousInput);
        currentInput = Number(currentInput);

        if (operator === "+") {
            previousInput += currentInput;
        } else if (operator === "-") {
            previousInput -= currentInput;
        } else if (operator === "/") {
            previousInput /= currentInput;
        } else if (operator === "X") {
            previousInput *= currentInput;
        }
        previousInput = parseFloat(parseFloat(previousInput).toFixed(5)).toString();
        currentInput = previousInput.toString();
        currentDisplay.textContent = previousInput;
        console.log(previousInput);
    }

    // Adds a click event listener to the decimal button.
    // When the decimal button is clicked, it adds a decimal point to the current input if it doesn't already contain one
    decimal.addEventListener('click', function() {
        decimalAddition();
    });

    // Adds a decimal point to the current input if it doesn't already contain one
    function decimalAddition() {
        if (!currentInput.includes('.')) {
            if (currentInput === '') {
                currentInput = '0.';
            } else {
                currentInput += '.';
            }
            currentDisplay.textContent = previousInput + " " + operator + " " + currentInput;
        }
    }

    // Adds a click event listener to the backspace button.
    // When the backspace button is clicked, it removes the last character from the current input
    backspace.addEventListener('click', function(){
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1); // Remove the last character
            currentDisplay.textContent = previousInput + " " + operator + " " + currentInput;
        }
    });
});
