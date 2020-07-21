/** Game state object which defines a a gameboard array and returns a function to change it. */
const gameState = (function() {
    let gameBoard = ['','','','','','','','','']

    const storeMarker= function(id, marker){
        gameBoard[id] = marker;
        console.log(gameBoard)
    }  

    const checkWinner = function(gamePlaying){
        if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
            gamePlaying = false;
        } 
        else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
            gamePlaying = false;
        } 
        else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
            gamePlaying = false;
        } 
        else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
            gamePlaying = false;
        }
        else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
            gamePlaying = false;
        } 
        else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
            gamePlaying = false;
        } 
        else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
            gamePlaying = false;
        } 
        else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
            gamePlaying = false;
        } 
        else if (!gameBoard.includes('')) {
            gamePlaying = false;
        } 
        else {
            gamePlaying = true;
        }
        return gamePlaying;
    }

    const resetBoard = function() {
        gameBoard = ['', '', '', '', '', '', '', '','']
    }


    return {
        gameBoard, storeMarker, checkWinner , resetBoard
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
            currentPlayer = "O"
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
        fillBoard,
    }
})()

// Main function
const playGame = (function(gameState,displayControl){
    let dom = displayControl.domElements;
    let gamePlaying = true;

    const addMarkers = function(e){
        if(gamePlaying){
            if(e.target.matches('.cell')){
                const cell = e.target;
                const board = gameState.gameBoard;
                const id = parseInt(e.target.id)

                //Get marker
                const marker = displayControl.changePlayer()

                //STORE THE ELEMENT INSIDE THE GAMEBOARD ARRAY
                gameState.storeMarker(id, marker)

                //Fill the board
                displayControl.fillBoard(cell,board,id)

                //Check for a winner
                gamePlaying = gameState.checkWinner(gamePlaying);

                if(!gamePlaying){
                    gameState.resetBoard();
                    alert("Game Over")
                }
            }
        }
    }
    
    dom.board.addEventListener('click',addMarkers)

})(gameState, displayController)

playGame

