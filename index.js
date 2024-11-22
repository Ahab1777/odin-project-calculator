
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

//variables for each digits and buttons
let firstOperand = '', currentOperator = '', secondOperand = '', result = ''
const numericDigits = document.querySelectorAll('.base-btn')
const display = document.querySelector('.display')
//operator variable for function call
let functionalOperator = '';    

//function to be called when a new digit is clicked
const refreshDisplay = () => {
    if( result === '') {
        display.textContent = `${firstOperand} ${currentOperator} ${secondOperand}`
    } else {
        display.textContent = result
    }
}

//clear/clr button functionality
const clrButton = document.querySelector('.clear-btn')
clrButton.addEventListener('click', function() {
    firstOperand = ''
    currentOperator = ''
    secondOperand = ''
    functionalOperator = ''
    result = ''
    refreshDisplay()
})

//equal sign functionality
function operate(operandX, operandY, operator) {
    if(operator === 'add'){
        return add(operandX, operandY)
    } else if(operator === 'subtract'){
        return subtract(operandX, operandY)
    } else if(operator === 'multiply'){
        return multiply(operandX, operandY)
    } else if(operator === 'divide'){
        return divide(operandX, operandY)
    }
}

const equalButton = document.querySelector('.equal-btn')
equalButton.addEventListener('click', function() {
    console.log(firstOperand, secondOperand, functionalOperator)
    if(secondOperand === ''){
        return
    } else {
        result = operate(firstOperand, secondOperand, functionalOperator)
        refreshDisplay()
        return
    }
})


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

//allocate node of  operator buttons to an variable
const operatorDigits = document.querySelectorAll('.operator-btn')
//iterate over node of buttons
operatorDigits.forEach(button => {
    const operatorButtonContent = button.textContent
    //event listener to make click event feed function(operation) into display
    button.addEventListener('click', function() {
        //set operator for display
        currentOperator = operatorButtonContent
        //set operator for functional variable
        functionalOperator = button.dataset.operation
        console.log(functionalOperator)
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
