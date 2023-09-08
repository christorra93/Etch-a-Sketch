const container = document.querySelector('#container');
const create = document.querySelector('#gridbtn');
const rgb = document.querySelector('#rgb');
const grad = document.querySelector('#gradient');
const grid = document.createElement('div');

const SIZE = 640;
grid.style.width = `${SIZE}px`;
grid.style.height = `${SIZE}px`;
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';

for(let i = 0 ; i< 16*16 ; i++){
    const square = document.createElement('div');

    square.style.width = `${SIZE/16}px`;
    square.style.height = `${SIZE/16}px`;
    
    grid.appendChild(square);
}

container.appendChild(grid);

grid.addEventListener('mouseover',changeColor);

create.addEventListener('click',removeGrid);
create.addEventListener('click',createGrid);

rgb.addEventListener('click',addRgb);

grad.addEventListener('click',addGradient);

function addRgb(){
    const grid = document.querySelector('#container div');

    grid.removeEventListener('mouseover',changeColor);
    grid.addEventListener('mouseover',rgbColor);
}

function random(number){
    return Math.floor(Math.random() * (number + 1 ));
}

function rgbColor(e){
    e.target.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`;
}

function addGradient(){
    const grid = document.querySelector('#container div');

    const square = document.querySelectorAll('#container div div');

    square.forEach(element => {
        element.style.backgroundColor = 'black';
        element.style.opacity = '0';
    })

    grid.removeEventListener('mouseover',changeColor);
    grid.addEventListener('mouseover',gradient);
}
function gradient(e){
    let opa = +e.target.style.opacity;
    opa+=0.1;

    e.target.style.opacity = `${opa}`;
    
}
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}

function removeGrid(){
    const grid = document.querySelector('#container div');

    if(grid){
        container.removeChild(grid);
    }
}

function createGrid(){
    const MAX = 64;
    let size = +prompt('Grid size?(MAX 64)','16');

    size = (size > MAX) ? MAX : size; // if user input is>64 size takes the value of MAX

    const grid = document.createElement('div');

    const SIZE = 640;
    grid.style.width = `${SIZE}px`;
    grid.style.height = `${SIZE}px`;
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';

    for(let i = 0 ; i < size*size ; i++){
        const square = document.createElement('div');

        square.style.width = `${SIZE/size}px`;
        square.style.height = `${SIZE/size}px`;
        
        grid.appendChild(square);
    }
    
    grid.addEventListener('mouseover',changeColor);

    container.appendChild(grid);
}


