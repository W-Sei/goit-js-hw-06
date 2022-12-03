function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const docStyle = document.querySelector("style");
// const spanColor = document.querySelector(".color");
// const changeButtonColor = document.querySelector(".change-color");
// changeButtonColor.addEventListener("click", bodyColorRandomizer);

// let randomBodyColor = "";

// function bodyColorRandomizer() {
//   randomBodyColor = `body{background-color: ${getRandomHexColor()};}`;

//   docStyle.insertAdjacentHTML("beforeend", randomBodyColor);
//   spanColor.textContent = getRandomHexColor();
// }

// console.dir(docStyle);

const changeButtonColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");

changeButtonColor.addEventListener("click", () => {
  let color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
});
