const container = document.querySelector('#container');

const grid = document.createElement('div');

const SIZE = 640;
grid.style.width = `${SIZE}px`;
grid.style.height = `${SIZE}px`;
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';

for(let i = 0; i< 16*16 ; i++){
    const square = document.createElement('div');

    square.style.width = `${SIZE/16}px`;
    square.style.height = `${SIZE/16}px`;
    square.style.border = '1px solid black';
    square.style.boxSizing = 'border-box';

    grid.appendChild(square);
}


container.appendChild(grid);
