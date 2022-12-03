function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");
const head = document.querySelector("head");

let amount;
input.addEventListener("input", numberOf);
function numberOf() {
  amount = Number(input.value);
  return amount;
}

createBtn.addEventListener("click", createBoxes);
let divArray = [];
let styleArray;
function createBoxes() {
  for (let i = 0; i < numberOf(); i += 1) {
    const div = document.createElement("div");
    div.classList.add(`div_${[i]}`);
    divArray.push(div);

    const divStyle = 30 + [i] * 10;
    styleArray = `<style>
    .div_${[i]} {
      width: ${divStyle}px;
      height: ${divStyle}px;
      background-color: ${getRandomHexColor()};
      border-radius: 5px;
      margin: 0 auto;
    }
    </style>`;

    head.insertAdjacentHTML("beforeend", styleArray);
  }
  divBoxes.append(...divArray);
}

destroyBtn.addEventListener("click", clearBoxes);
function clearBoxes() {
  divBoxes.innerHTML = "";
  divArray = [];
}
