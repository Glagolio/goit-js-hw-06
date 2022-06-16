const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector('#ingredients');

const listArray = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");

  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  return ingredientEl
});


listOfIngredientsEl.append(...listArray);




