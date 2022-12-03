const input = document.querySelector("#font-size-control");
const article = document.querySelector("#text");

input.addEventListener("input", changeArticlaeFontSize);

let articleFontSize = "";

function changeArticlaeFontSize() {
  articleFontSize = `<style>#text{font-size: ${input.value}px;}</style>`;
  input.insertAdjacentHTML("beforebegin", articleFontSize);
}
