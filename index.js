
function add(x, y) {
    return Number(x) + Number(y)
}

function subtract(x, y) {
    return Number(x) - Number(y)
}

function multiply(x, y) {
    return Number(x) * Number(y)
}

function divide(x, y) {
    return Number(x) / Number(y)
}

//variables for each digits and buttons
let firstOperand = '', currentOperator = '', secondOperand = '', result = ''
const numericDigits = document.querySelectorAll('.base-btn')
const display = document.querySelector('.display')
//operator variable for function call
let functionalOperator = '';    

//variables for test - delete later
const firstOperandDisplay = document.querySelector('.first-operand')
const operatorDisplay = document.querySelector('.operator')
const secondOperandDisplay = document.querySelector('.second-operand')
const resultDisplay = document.querySelector('.result')
const functionalOperatorDisplay = document.querySelector('.functional-operator')

//test function - delete later
const testDisplay = function(result) {
    if(result === ""){
        return "blank"
    } else return result
}


//function to be called when a new digit is clicked
const refreshDisplay = () => {

    //refresh for test display - delete later
    firstOperandDisplay.textContent = testDisplay(firstOperand)
    operatorDisplay.textContent = testDisplay(currentOperator)
    functionalOperatorDisplay.textContent = testDisplay(functionalOperator)
    secondOperandDisplay.textContent = testDisplay(secondOperand)
    resultDisplay.textContent = testDisplay(result)

    //actual refreshDisplay function
    // if( result === '') {
        display.textContent = `${firstOperand} ${currentOperator} ${secondOperand}`
    // } else if(secondOperand = ''){
    //     display.textContent = `${firstOperand} ${currentOperator}`
    // } else {
    //     display.textContent = result
    // }
}

//clear button functionality

const clearAll = function() {
    firstOperand = ''
    currentOperator = ''
    secondOperand = ''
    functionalOperator = ''
    result = ''
    refreshDisplay()
}

const clrButton = document.querySelector('.clear-btn')
clrButton.addEventListener('click', clearAll)

//equal sign functionality =
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

//equal button functionalities =
const equalButton = document.querySelector('.equal-btn')
equalButton.addEventListener('click', function() {
    if(firstOperand === 'Hey, buddy! No divisions by zero, ok?'){
        clearAll()
        return
    } else if(secondOperand === '' || currentOperator === ''){
        return
    } else {
        result = operate(firstOperand, secondOperand, functionalOperator)
        if(result === Infinity){
            result = 'Hey, buddy! No divisions by zero, ok?'
            firstOperand = result
            secondOperand = ''
            currentOperator = ''
            functionalOperator = ''
            refreshDisplay()
            return
        }

        //rounds number to 2 decimal places
        firstOperand = Math.round(Number(result) * 100) / 100
        secondOperand = ''
        currentOperator = ''
        functionalOperator = ''
        refreshDisplay()
        return
    }
})


//feeds digits into variable and display 123...
numericDigits.forEach(button => {
    const buttonContent = button.textContent
    button.addEventListener('click', function() {
        //if operator is not set yet, add digit to firstOperand
        if(firstOperand === 'Hey, buddy! No divisions by zero, ok?'){
            clearAll()
            return
        } else if(currentOperator === ''){
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
        //check if operands and operator are set and valid
        if(firstOperand === ''){
            return
        } else if(firstOperand === NaN || firstOperand === 'Hey, buddy! No divisions by zero, ok?'){
            clearAll()
            return
        } else if (firstOperand !== '' && secondOperand !== '' && currentOperator !== '') {
            result = operate(firstOperand, secondOperand, functionalOperator)
            //if result is infinity (likely due to a division by zero) provide snarky remark
            if (result === Infinity){
                result = 'Hey, buddy! No divisions by zero, ok?'
            }

            firstOperand = result
            currentOperator = operatorButtonContent
            functionalOperator = button.dataset.operation
            secondOperand = ''
            refreshDisplay()
        } else if(firstOperand !== '' && secondOperand === '' && currentOperator !== '') {
            //set operator for display
            currentOperator = operatorButtonContent
            //set operator for functional variable
            functionalOperator = button.dataset.operation
            refreshDisplay()
        } else if(firstOperand !== '' && secondOperand === '' && currentOperator === ''){
            //set operator for display
            currentOperator = operatorButtonContent
            //set operator for functional variable
            functionalOperator = button.dataset.operation
            refreshDisplay()
        }


        //set operator for display
        currentOperator = operatorButtonContent
        //set operator for functional variable
        functionalOperator = button.dataset.operation
        console.log(functionalOperator)
        refreshDisplay()
    })
})

