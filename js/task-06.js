const inputEl = document.querySelector("#validation-input");

const maxLengthValue = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', event => {
    if (event.currentTarget.value.length === maxLengthValue) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

        
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');

    }
}
);