
const inputE = document.querySelector('#validation-input');
const checkNumber = +inputEl.dataset.length;
inputE.addEventListener('blur', onFocusInput);
function onFocusInput(event) {
    if (event.currentTarget.value.length === checkNumber) {
        inputE.classList.remove('invalid');
        return inputE.classList.add('valid');
    }
    inputE.classList.remove('valid');
    return inputE.classList.add('invalid');
}
