

const textInput =  document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
   output.textContent = event.currentTarget.value;
  }
}