function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const allQuery = {
  divBoxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

// const input = document.querySelector("input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const divBoxes = document.querySelector("#boxes");
// const head = document.querySelector("head");

// let amount;
// input.addEventListener("input", numberOf);
// function numberOf() {
//   amount = Number(input.value);
//   return amount;
// }

// createBtn.addEventListener("click", createBoxes);
// let divArray = [];
// let styleArray;
// function createBoxes() {
//   for (let i = 0; i < numberOf(); i += 1) {
//     const div = document.createElement("div");
//     div.classList.add(`div_${[i]}`);
//     divArray.push(div);

//     const divStyle = 30 + [i] * 10;
//     styleArray = `<style>
//     .div_${[i]} {
//       width: ${divStyle}px;
//       height: ${divStyle}px;
//       background-color: ${getRandomHexColor()};
//       border-radius: 5px;
//       margin: 0 auto;
//     }
//     </style>`;

//     head.insertAdjacentHTML("beforeend", styleArray);
//   }
//   divBoxes.append(...divArray);
// }

// destroyBtn.addEventListener("click", clearBoxes);
// function clearBoxes() {
//   divBoxes.innerHTML = "";
//   divArray = [];
// }

const getBoxesMarkup = (index) =>
  `<div class="color-box"
    style =
      "width: ${30 + 10 * index}px; 
      height: ${30 + 10 * index}px; 
      background-color: ${getRandomHexColor()}; 
      border-radius: 5px;
      margin: 0 auto">
  </div>`;

const getBoxListMarkup = (amount) =>
  Array(amount)
    .fill("")
    .map((_, i) => getBoxesMarkup(i))
    .join("");

function createBoxes(amount) {
  allQuery.divBoxes.insertAdjacentHTML("afterbegin", getBoxListMarkup(amount));
}

allQuery.createBtn.addEventListener("click", handleClickCreate);
allQuery.destroyBtn.addEventListener("click", handleClickDestroy);

function handleClickCreate() {
  clearBoxes();
  createBoxes(Number(allQuery.input.value));
}

function handleClickDestroy() {
  clearBoxes();
  clearInput();
}

function clearBoxes() {
  while (allQuery.divBoxes.childNodes.length > 0) {
    allQuery.divBoxes.firstChild.remove();
  }
}

function clearInput() {
  allQuery.input.value = "";
}
