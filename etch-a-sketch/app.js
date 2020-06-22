// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let sizeOfGrid = window.prompt("Enter blocks you want on each side: ");
const reset = document.querySelector('#reset_btn');

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

// Creates a default grid sized 20 x 20
function defaultGrid(x) {
    makeRows(x);
    makeColumns(x);
    let heightwidth = `${960 / x}px`;
    for(let k = 0; k < cells.length; k++){
        cells[k].setAttribute('style',`height: ${heightwidth}; width: ${heightwidth}`);
    }
}

defaultGrid(sizeOfGrid);
reset.addEventListener('click',resetGrid);


//Clearing grid
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}


function resetGrid(){
    sizeOfGrid = window.prompt("Enter blocks you want on each side: ");
    clearGrid();
    defaultGrid(sizeOfGrid);
    function onHover(){
        this.style.backgroundColor = 'black';
    }
    
    Array.from(cells).forEach(function(cell){
        cell.addEventListener('mouseover',onHover);
    });
    
}

// Added hover functionality
function onHover(){
    this.style.backgroundColor = 'black';
}

Array.from(cells).forEach(function(cell){
    cell.addEventListener('mouseover',onHover);
});


