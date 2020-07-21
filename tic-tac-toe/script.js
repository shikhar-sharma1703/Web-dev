/** Game state object which defines a a gameboard array and returns a function to change it. */
const gameState = (function() {
    let gameBoard = ['','','','','','','','','']

    const storeMarker= function(id, marker){
        gameBoard[id] = marker;
        console.log(gameBoard)
    }  

    return {
        gameBoard, storeMarker
    }
})();

/** All elements associated with display board */
const displayController = (function(){
    let currentPlayer;
    
    const domElements = {
        cells: document.getElementsByClassName("cell"),
        board: document.getElementById("board") 
    }

    //Marker getter
    const getMarker = function(){
        return currentPlayer
    }

    //Change marker on turns
    const changePlayer = function(){
        if(currentPlayer == "X"){
            currentPlayer = "0"
        }
        else{
            currentPlayer = "X"
        }
        return currentPlayer
    }

    //For rendering the board
    const fillBoard = function(cell, board, id){
        cell.textContent = board[id];
    }

    return {
        domElements,
        getMarker,
        changePlayer,
        fillBoard
    }
})()

// Main function
const playGame = (function(gameState,displayControl){
    let dom = displayControl.domElements;

    const addMarkers = function(e){
        if(e.target.matches('.cell')){
            const cell = e.target;
            const board = gameState.gameBoard;
            const id = parseInt(e.target.id)

            console.log(id)
            //Get marker
            const marker = displayControl.changePlayer()

            console.log(marker)

            //STORE THE ELEMENT INSIDE THE GAMEBOARD ARRAY
            gameState.storeMarker(id, marker)

            //Fill the board
            displayControl.fillBoard(cell,board,id)
        }
    }
    
    dom.board.addEventListener('click',addMarkers)

})(gameState, displayController)

playGame

