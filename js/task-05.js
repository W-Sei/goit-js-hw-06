const userName = document.querySelector(`#name-output`);
const input = document.querySelector(`#name-input`);

input.addEventListener("input", changeName);

function changeName() {
  if ((userName.textContent = input.value)) {
    return input.value;
  }
  return (userName.textContent = "Anonymous");
}
