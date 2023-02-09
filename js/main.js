// Query Selectors
const inputNumber1 = document.querySelector('[name="number1"]');
const inputNumber2 = document.querySelector('[name="number2"]');
const result = document.querySelector('[id="result-box"]');
const btnPlus = document.getElementById('btn-plus');
const btnTimes = document.getElementById('btn-times');
const btnClear = document.getElementById('btn-clear');

// Clean State
removeError(inputNumber2);

// Event Listeners
inputNumber1.addEventListener('change', handleInputNumberChange);
inputNumber2.addEventListener('change', handleInputNumberChange);
// OPCIONAL: inputNumber1.addEventListener('keypress', handleInputNumberKeyPress);
// OPCIONAL: inputNumber2.addEventListener('keypress', handleInputNumberKeyPress);
btnPlus.addEventListener('click', handleBtnPlusClick);
btnTimes.addEventListener('click', handleBtnTimesClick);
btnClear.addEventListener('click', handleBtnClearClick);

// Handles

function handleInputNumberChange(event) {
    const n1 = Number(inputNumber1.value);
    const n2 = Number(inputNumber2.value);
    isNumber(n1) ? removeError(inputNumber1) : addError(inputNumber1);
    isNumber(n2) ? removeError(inputNumber2) : addError(inputNumber2);
}

/* DESAFIO OPCIONAL 
function handleInputNumberKeyPress(event) {
    let key = String.fromCharCode(event.keyCode);
    let regex = /^[0-9.]+$/;
    if(!regex.test(key)) {
        event.returnValue = false;
        if(event.preventDefault) {
            event.preventDefault();
        }
    }
}
*/

function handleBtnPlusClick(event) {
    resetResult();
    event.preventDefault();
    const plus = Number(inputNumber1.value) + Number(inputNumber2.value);
    isNumber(plus) ? result.innerHTML = plus : 0;
}

function handleBtnTimesClick(event) {
    resetResult();
    event.preventDefault();
    const times = Number(inputNumber1.value) * Number(inputNumber2.value);
    isNumber(times) ? result.innerHTML = times : 0;
}

function handleBtnClearClick(event) {
    inputNumber1.value = ' ';
    inputNumber2.value = ' ';
    resetResult();
    removeError(inputNumber1);
    removeError(inputNumber2);
}

// Auxiliar
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function resetResult() {
    result.innerHTML = 0;
}

function addError(element) {
    element.classList.add("input-error");
}

function removeError(element) {
    element.classList.remove("input-error");
}