// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 20 x 20
function defaultGrid() {
    makeRows(20);
    makeColumns(20);
    let heightwidth = `${960 / 20}px`;
    for(let k = 0; k < cells.length; k++){
        cells[k].setAttribute('style',`height: ${heightwidth}; width: ${heightwidth}`);
    }
}

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
defaultGrid();

function onHover(){
    this.style.backgroundColor = 'black';
}

Array.from(cells).forEach(function(cell){
    cell.addEventListener('mouseover',onHover);
});

