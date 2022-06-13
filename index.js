let shouldResetScreen = false
let firstOperand = ''
let secondOperand = ''

const screen = document.getElementById('screen')
const currentScreen = document.getElementById('current-screen')
const clearBtn = document.getElementById('clear-btn')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[date-operator]')

clearBtn.addEventListener('click', clear)

numberButtons.forEach((button) => {
    button.addEventListener('click', () => joinNumber(button.textContent))
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', setOperation(button.textContent))
})

function joinNumber(number) {
    if(currentScreen.textContent === '0' || shouldResetScreen) {
        resetScreen()
    }
    currentScreen.textContent += number
}

function resetScreen() {
    currentScreen.textContent = ''
    shouldResetScreen = false
}

function clear() {
    currentScreen.textContent = '0'
}

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