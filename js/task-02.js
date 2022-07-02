const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//   let createLi = document.createElement("li");
//   createLi.innerHTML = ingredient
//   ulList.append(createLi)
//   parent.append(...createLi)
// });
// console.log(foodIngredients);
let ulList = document.getElementById("ingredients");
const food = ingredients.forEach(ingredient => {
  let createLi = document.createElement("li");
  createLi.innerHTML = ingredient;
  ulList.append(createLi);
  createLi.classList.add("items")

});

console.log(food);