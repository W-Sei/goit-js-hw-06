const numberOfCategories = document.querySelectorAll(".item");
console.dir(`Number of categories: ${numberOfCategories.length}`);

// const categories = Array.from(document.querySelectorAll(".item h2"));
// const elements = Array.from(document.querySelectorAll(".item ul"));

// const category = categories.map((category) => category.innerHTML);
// const quantityEl = elements.map((element) => element.children.length);

// for (let i = 0; i < category.length; i += 1) {
//   console.dir(`Category: ${category[i]}`);
//   console.dir(`Elements: ${quantityEl[i]}`);
// }

numberOfCategories.forEach((element) => {
  const category = element.querySelector("h2");
  console.log(`Category: ${category.textContent}`);
  const elements = element.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});
