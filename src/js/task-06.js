const inputSymbols = document.querySelector('#validation-input');
console.log(inputSymbols.dataset.length);

inputSymbols.addEventListener('blur', checkLength)

function checkLength(event) {
    if (inputSymbols.value.trim().length === Number(inputSymbols.dataset.length)) {
        inputSymbols.classList.remove('invalid')
        inputSymbols.classList.add('valid');
    } else inputSymbols.classList.add('invalid');
}
