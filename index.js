
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

let firstParameter, secondParameter, currentOperator

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

    
