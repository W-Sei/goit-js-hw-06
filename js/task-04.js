let counterValue = 0;

const pressBtnDecrement = document.querySelector(`[data-action = "decrement"]`);
const pressBtnIncrement = document.querySelector(`[data-action = "increment"]`);

const value = document.querySelector("#value");

pressBtnDecrement.addEventListener("click", decrementClick);
pressBtnIncrement.addEventListener("click", incrementClick);

function incrementClick() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrementClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
