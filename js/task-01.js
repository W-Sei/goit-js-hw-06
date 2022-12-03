const numberOfCategories = document.querySelectorAll(".item").length;
console.dir(`Number of categories: ${numberOfCategories}`);

const categories = Array.from(document.querySelectorAll(".item h2"));
const elements = Array.from(document.querySelectorAll(".item ul"));

const category = categories.map((category) => category.innerHTML);
const quantityEl = elements.map((element) => element.children.length);

for (let i = 0; i < category.length; i += 1) {
  console.dir(`Category: ${category[i]}`);
  console.dir(`Elements: ${quantityEl[i]}`);
}
