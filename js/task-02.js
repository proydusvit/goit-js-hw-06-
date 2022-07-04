const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");
   const food = ingredients.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    return li;
    });
  ulList.append(...food);