const valueNumber = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', makeDecrement);
incrementBtn.addEventListener('click', makeIncrement)

function makeDecrement() {
    counterValue -= 1;
    return valueNumber.textContent = counterValue;
}

function makeIncrement() {
    counterValue += 1;
    return valueNumber.textContent = counterValue;
}
