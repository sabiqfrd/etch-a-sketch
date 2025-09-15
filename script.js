const rangeInput = document.querySelector('#range-input');
const displaySize = document.querySelector('#display-size');
const size = document.createElement('span');
size.textContent = rangeInput.value;
displaySize.appendChild(size);

rangeInput.addEventListener ('input', () => {
    size.textContent = rangeInput.value;
});
