let shouldResetScreen = false

const screen = document.getElementById('screen')
const currentScreen = document.getElementById('current-screen')
const numberButtons = document.querySelectorAll('[data-number]')

numberButtons.forEach((button) => {
    button.addEventListener('click', () => joinNumber(button.textContent))
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

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', () => {
    screen.innerHTML = ''
})

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
        
        case '/':
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