const menu = document.querySelector('#menu');
const title = document.createElement('h2');
const widthLabel = document.createElement('label');
const heightLabel = document.createElement('label');
const widthInput = document.createElement('input');
const heightInput = document.createElement('input');
const labelRow = document.createElement('div');
const inputRow = document.createElement('div');
const resize = document.createElement('button');
const erase = document.createElement('button');
const color = document.createElement('input');

title.textContent = "ETCH-A-SKETCH DEMO";
title.style.cssText = "color: #000; text-align: center; width: 100%; margin: 0 0 1rem 0; font-size: 1.6rem"

widthLabel.textContent = "Enter grid width: ";
heightLabel.textContent = "Enter grid height: ";
labelRow.classList.add('widgetRow');
inputRow.classList.add('widgetRow');

widthInput.classList.add('scalar');
heightInput.classList.add('scalar');
resize.classList.add('submit');
erase.classList.add('submit');
color.setAttribute("type", "color");
color.classList.add('color');

resize.textContent = "New Grid";
erase.textContent = "Eraser";

resize.addEventListener('click', genGrid);
let toggleErase = false;
erase.addEventListener('click', eraser);

const div = document.createElement('div');
div.style.cssText = "display: flex; gap: 3rem; align-items: flex-end";

labelRow.appendChild(widthLabel);
labelRow.appendChild(heightLabel);
inputRow.appendChild(widthInput);
inputRow.appendChild(heightInput);
div.appendChild(resize);
div.appendChild(color);
div.appendChild(erase);
menu.appendChild(title);
menu.appendChild(labelRow);
menu.appendChild(inputRow);
menu.append(div);

genGrid();    

function eraseGrid() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function eraser() {
    if (toggleErase === false){
        toggleErase = true;
    }
    else{
        toggleErase = false;
    }
    let userWidth = parseInt(widthInput.value);
    let userHeight = parseInt(heightInput.value);
    let maxId = 16 ** 2;
    if (Number.isInteger(userWidth) && Number.isInteger(userHeight)){
        maxId = userWidth * userHeight;
    }
    for (i = 1; i <= maxId; i++){
        const cell = document.getElementById(i.toString());
        cell.addEventListener("mouseenter", function(e) {
            if (toggleErase && e.target.style.background != "white"){
                e.target.style.background = "white";
            }
            else {
                e.target.style.background = color.value;
            }
        })
    }
}

function genGrid() {
    eraseGrid();
    let x = 16;
    let y = 16;
    let userWidth = parseInt(widthInput.value);
    let userHeight = parseInt(heightInput.value);
    if ((Number.isInteger(userWidth) && userWidth <= 100)
    && (Number.isInteger(userHeight) && userHeight <= 100)){
        console.log('pass');
        x = widthInput.value;
        y = heightInput.value;
    }
    for (var i = 0; i < y; i++){
        let row = document.createElement('div');
        row.className = 'row';
        for (var c = 1; c <= x; c++){
            let cell = document.createElement('div');
            cell.className = "gridSquare";
            cell.addEventListener("mouseenter", function(e) {
                e.target.style.backgroundColor = color.value;
            })
            cell.setAttribute('id', (i * y) + c);
            console.log((i * y) + c);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

