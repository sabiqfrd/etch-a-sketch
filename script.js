const rangeInput = document.querySelector('#range-input');
const displaySize = document.querySelector('#display-size');
const size = document.createElement('span');
size.textContent = rangeInput.value;
displaySize.appendChild(size);

rangeInput.addEventListener ('input', () => {
    size.textContent = rangeInput.value;
});

const reset = document.querySelector('#reset');
const sketchBox = document.querySelector('#sketch-box');

reset.addEventListener('click', () => {
    sketchBox.textContent = '';
    const gridSize = 100 / rangeInput.value;
    for (let i = 0; i < Math.pow(rangeInput.value, 2); i++) {
        const grid = document.createElement('div');
        grid.style.boxSizing = 'border-box';
        grid.style.border = 'solid 1px #e7e7e7';
        grid.style.width = `${gridSize}%`;
        grid.style.height = `${gridSize}%`;
        sketchBox.appendChild(grid);
    }
});

let isDrawing = false;
document.addEventListener('mousedown', () => {
    isDrawing = true;
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

sketchBox.addEventListener('mouseover', (e) => {
    if (isDrawing) {
        target = e.target;
        target.style.backgroundColor = 'black';
    }
});

// Block dragging globally on the sketch box
document.addEventListener("dragstart", e => e.preventDefault());
