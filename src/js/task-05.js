const inputName = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange)

function onInputChange(event) {
    output.textContent = event.currentTarget.value.trim();
    if (!output.textContent) output.textContent = 'Anonymous';
}