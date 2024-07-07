const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let divlistEl = [];
  let divSize = 30;
  amount = inputEl.value;
  inputEl.value = "";

  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const divBoxEl = document.createElement("div");
      divBoxEl.classList.add("div-boxes");
      divBoxEl.style.width = `${divSize}px`;
      divBoxEl.style.height = `${divSize}px`;
      divBoxEl.style.backgroundColor = getRandomHexColor();
      divSize += 10;
      divlistEl.push(divBoxEl);
    }
    boxesEl.append(...divlistEl);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
