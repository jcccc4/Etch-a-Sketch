
let slider = document.querySelector('.slider')
var defaultColor = 'black'
var blackAndWhite = true
let btn = document.querySelector(".clear")
//Creating Grid



let container = document.createElement('div');
let sketch_box = document.querySelector('.sketch-box')
let num = slider.value
container.className = `container`;
container.style.gridTemplateColumns = `repeat( ${num}, ${512 / num}px)`;

sketch_box.append(container)

for (let i = 0; i < num * num; i++) {
    let gridSelector = document.querySelector('.container');
    let grid = document.createElement('div');
    grid.className = `grid`;
    grid.style.height = `${512 / num}px`
    grid.style.width = `${512 / num}px`
    gridSelector.append(grid);
}

function createGrid() {
    document.querySelector('.container').remove()
    let container = document.createElement('div');
    let sketch_box = document.querySelector('.sketch-box')
    let num = slider.value
    container.className = `container`;
    container.style.gridTemplateColumns = `repeat( ${num}, ${512 / num}px)`;

    sketch_box.append(container)

    for (let i = 0; i < num * num; i++) {
        let gridSelector = document.querySelector('.container');
        let grid = document.createElement('div');
        grid.className = `grid`;
        grid.style.height = `${512 / num}px`
        grid.style.width = `${512 / num}px`
        gridSelector.append(grid);
    }
    container.addEventListener('mousedown', onMouseDown)
}


//Painting Grid
function gridPaint(e) {
    if (e.buttons == 1) {
        if (e.target.classList == 'grid') {
            let square = e.target;
            if (blackAndWhite) {
                square.style.backgroundColor = `${defaultColor}`
            }
            else {
                square.style.backgroundColor = `${generateRandomColor()}`;
            }
        }
    }
}

function onMouseDown(e) {
    gridPaint(e)
    if (e.buttons === 1) {
        window.addEventListener('mouseover', (e) => {
            gridPaint(e);
        })
    }
}

function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}


// const radio = document.querySelectorAll('.toggle')
const option = document.querySelector(".option")
var selectedSize;

function colorPicker(e) {
    if (e.target.value === 'bnw') {
        blackAndWhite = true
        createGrid(slider.value)

    }
    else {
        blackAndWhite = false
        createGrid(slider.value)
    }
}

btn.addEventListener('click', () => createGrid(slider.value))
option.addEventListener('change', colorPicker)
slider.addEventListener('change', createGrid)
container.addEventListener('mousedown', onMouseDown)





