
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes)


function createBoxes(amount) {
  amount = Number(input.value);
  let array = [];
  function createDiv(didTimes) {
    if (didTimes !== amount) {
      const div = document.createElement('div');
      div.style.backgroundColor = getRandomHexColor();
      div.style.height = `${30 + didTimes * 10}px`;
      div.style.width = `${30 + didTimes * 10}px`;
      array.push(div);
      didTimes += 1;
      return createDiv(didTimes);
    }
  }
  createDiv(0);
  boxes.append(...array);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}