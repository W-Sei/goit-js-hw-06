function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const docStyle = document.querySelector("style");
const spanColor = document.querySelector(".color");
const changeButtonColor = document.querySelector(".change-color");
changeButtonColor.addEventListener("click", bodyColorRandomizer);

let randomBodyColor = "";

function bodyColorRandomizer() {
  randomBodyColor = `body{background-color: ${getRandomHexColor()};}`;

  docStyle.insertAdjacentHTML("beforeend", randomBodyColor);
  spanColor.textContent = getRandomHexColor();
}

console.dir(docStyle);
