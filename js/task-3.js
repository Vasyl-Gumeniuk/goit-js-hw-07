const inputEl = document.querySelector("#name-input");
const spamEl = document.querySelector("#name-output");

const changInputValue = () => {
  const inputValue = inputEl.value.trim();
  spamEl.textContent = inputValue === "" ? "Anonymous" : inputValue.trim();
};

inputEl.addEventListener("input", changInputValue);
