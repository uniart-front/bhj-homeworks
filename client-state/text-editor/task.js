const card = document.querySelector(".card");
const editor = document.getElementById("editor");
const button = document.createElement("button");
button.className = "clear_text";
button.textContent = "Очистить содержимое";
card.appendChild(button);

editor.value = localStorage.getItem("textEditor");
editor.addEventListener("keyup", () => {
  localStorage.textEditor = editor.value;
});

const clearText = document.querySelector(".clear_text");
clearText.addEventListener("click", () => {
  localStorage.removeItem("textEditor");
  editor.value = "";
});
