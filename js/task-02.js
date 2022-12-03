const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const listofIngredients = document.querySelector("#ingredients");
// const itemArray = [];

// function createItem() {
//   for (let i = 0; i < ingredients.length; i += 1) {
//     const li = document.createElement("li");
//     li.textContent = ingredients[i];
//     li.classList.add("item");
//     itemArray.push(li);
//   }
//   listofIngredients.append(...itemArray);
// }

// createItem();

const listofIngredients = document.querySelector("#ingredients");

// const items = ingredients.map(function (ingredient) {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.className = "item";
//   return item;
// });

const items = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.className = "item";
  return item;
});

listofIngredients.append(...items);
