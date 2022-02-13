let container = document.createElement('div');


container.className = `container`;

container.style.gridTemplateColumns = "repeat(50 , 6.5px)";

console.log(container)
document.body.append(container)
for (let i = 0; i < 50 * 50; i++) {
    let gridSelector = document.querySelector('.container');
    let grid = document.createElement('div');
    grid.className = `grid`;
    grid.style.height = '6.5px'
    grid.style.width = '6.5px'
    gridSelector.append(grid);
}

