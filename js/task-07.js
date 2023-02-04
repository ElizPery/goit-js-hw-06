const inputSizeControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text');

inputSizeControl.addEventListener('input', changeSizeText)

function changeSizeText(event) {
    text.style.fontSize = `${Number(event.currentTarget.value)}px`;
}