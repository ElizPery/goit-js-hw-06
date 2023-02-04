
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

const arrayOfIngredients = ingredients.map(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredient.classList.add('item');
  return ingredient;
})

listOfIngredients.append(...arrayOfIngredients)
