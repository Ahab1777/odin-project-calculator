
function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

let firstOperand = '', currentOperator = '', secondOperand = ''
const refreshDisplay = () => {
    display.textContent = `${firstOperand} ${currentOperator} ${secondOperand}`
}

function operate(operandX, operandY, operator) {
    if(operator === add){
        return add(operandX, operandY)
    } else if(operator === subtract){
        return subtract(operandX, operandY)
    } else if(operator === multiply){
        return multiply(operandX, operandY)
    } else if(operator === divide){
        return divide(operandX, operandY)
    }
}

const display = document.querySelector('.display')    

const numericDigits = document.querySelectorAll('.base-btn')

//feeds digits into variable and display
numericDigits.forEach(button => {
    const buttonContent = button.textContent
    button.addEventListener('click', function() {
        //if operator is not set yet, add digit to firstOperand
        if(currentOperator === ''){
            firstOperand += buttonContent
            refreshDisplay()
        } else if(currentOperator !== '') {
            secondOperand += buttonContent
            refreshDisplay()
        }
    })
});

//add function to operator digits
const operatorDigits = document.querySelectorAll('.operator-btn')
operatorDigits.forEach(button => {
    const operatorButtonContent = button.textContent
    button.addEventListener('click', function() {
        currentOperator.textContent = operatorButtonContent
        refreshDisplay()
    })
})


//step 5
// add digits to first operand
//when operator button is clicked, previous operand is fed into a variable 
//operator is fed into a variable
//when another digit is clicked after operator has already been chosen, a third variable will be the target of the new digits
//add function to operator digits
//clicking on '=' call the desired function based on the operator variable
