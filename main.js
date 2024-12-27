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
    let currentDisplay = document.querySelector(".display")
    let prevScreen = document.querySelector(".prev") 

    //Adds a click event listener to each number button.
    //When a number button is clicked, it retrieves the button’s text content and calls inputCreation
    numbers.forEach((number)=>{
       number.addEventListener('click', function(){
        let input = this.textContent;
        inputCreation(input);
        
       }) 
    })
    //Appends the input to currentInput and updates the display with the new currentInput
    //Length cannot be greater than 5 due to view constarints
    function inputCreation (input) {
        if (currentInput.length <= 5){
        currentInput += input;  
        }
        currentDisplay.textContent = currentInput;  
    } 
    
    //Operarors
    operators.forEach((op) => {
        op.addEventListener('click', function(){
            if (currentInput) {
                operator = this.textContent;
                previousInput = currentInput;
                currentInput = '';
                currentDisplay.textContent = operator;
                prevScreen.textContent = previousInput + " " + operator;
                currentDisplay.textContent = currentInput;
            }
        })
    })
})

