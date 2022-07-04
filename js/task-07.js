
const inputFont = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const size = () => {
  inputText.style.fontSize = inputFont.value + "px";
};
inputText.style.fontSize = inputFont.value + "px";

inputFont.addEventListener("input", size)