let shouldResetScreen = false
let firstOperand = ''
let secondOperand = ''
let currOperation = null

const currentScreen = document.getElementById('current-screen')
const lastScreen = document.getElementById('last-screen')
const clearBtn = document.getElementById('clear-btn')
const deleteBtn = document.getElementById('delete-btn')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsBtn = document.getElementById('equals-btn')

clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNumber)
equalsBtn.addEventListener('click', giveResult)

numberButtons.forEach((button) => {
    button.addEventListener('click', () => joinNumber(button.textContent))
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperation(button.textContent))
})

function joinNumber(number) {
    if(currentScreen.textContent === '0' || shouldResetScreen)
        resetScreen()
        currentScreen.textContent += number
}

function resetScreen() {
    currentScreen.textContent = ''
    shouldResetScreen = false
}

function clear() {
    currentScreen.textContent = '0'
    lastScreen.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currOperation = null
}

function deleteNumber() {
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1)
}

function setOperation(operator) {
    if(currOperation !== null) giveResult()
    firstOperand = currentScreen.textContent
    currOperation = operator
    lastScreen.textContent = `${firstOperand} ${currOperation}`
    shouldResetScreen = true
}

function giveResult() {
    return null
}

/* ============================================================================================================== */

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operator) {
        case '+':
            return add(a,b)

        case '-':
            return subtract(a,b)
        
        case 'x':
            return multiply(a,b)
        
        case '&#247':
            if(b === 0) {
                return null
            }
            else {
                return divide(a,b)
            }
        default:
            return null
    }
}