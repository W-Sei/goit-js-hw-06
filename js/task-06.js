const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", checkNumberOfSymbols);

// function checkNumberOfSymbols() {
//   if (input.value.length !== Number(input.dataset.length)) {
//     input.classList.add("invalid");
//   } else input.classList.replace("invalid", "valid");
// }

function checkNumberOfSymbols() {
  if (input.value.length !== Number(input.dataset.length)) {
    return input.classList.add("invalid");
  }
  return input.classList.replace("invalid", "valid");
}
