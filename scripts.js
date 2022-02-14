
let slider = document.querySelector('.slider')

//Creating Grid



let container = document.createElement('div');
let sketch_box = document.querySelector('.sketch-box')
container.className = `container`;
container.style.gridTemplateColumns = `repeat( 64, 8px)`;

sketch_box.append(container)

for (let i = 0; i < 64 * 64; i++) {
    let gridSelector = document.querySelector('.container');
    let grid = document.createElement('div');
    grid.className = `grid`;
    grid.style.height = `8px`
    grid.style.width = `8px`
    gridSelector.append(grid);
}

function createGrid(e) {
    document.querySelector('.container').remove()
    let container = document.createElement('div');
    let sketch_box = document.querySelector('.sketch-box')
    let num = e.target.value
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
            square.style.backgroundColor = 'black';
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



slider.addEventListener('change', createGrid)
container.addEventListener('mousedown', onMouseDown)





