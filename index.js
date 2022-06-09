const screen = document.getElementById('screen')
screen.innerHTML = "OKay"

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

}