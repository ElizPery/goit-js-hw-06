function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



function createBoxes(amount) {
  let times = 0;
  while (times !== amount) {
    times += 1;
    let height = 30;
    let width = 30;
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.height = `${height}px`;
    div.style.width = `${width}px`;
    height += 10;
    width += 10;

    console.log(div)
  }
  
}


// Створи функцію createBoxes(amount), яка приймає один параметр
//   - число.Функція створює стільки < div >, скільки вказано в 
//   amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від
//  попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання
// кольору.