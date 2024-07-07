const currentColor = document.querySelector("span.color");
const changeColorBtn = document.querySelector("button.change-color");

changeColorBtn.addEventListener("click", changeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor(event) {
  const getRandomColorValue = getRandomHexColor();
  document.body.style.backgroundColor = getRandomColorValue;
  currentColor.textContent = getRandomColorValue;
}
