var score = [0,0];
function Game(e){
    if(score[0] === 0 && score[1] === 0){
        document.getElementById('series').innerHTML = "Score 5 points to WIN series"
    }


    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        let result = "";
        let winner = "";
        if (playerSelection == "ROCK" && computerSelection == "SCISSOR"){
            score[0] += 1;
            return 'win'
        }
        else if (playerSelection == "SCISSOR" && computerSelection == "PAPER"){
            score[0] += 1;
            return 'win'
        }
        else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
            score[0] += 1;
            return 'win'
        }
        else if (computerSelection == "ROCK" && playerSelection == "SCISSOR"){
            score[1] += 1;
            return 'lose';
        }
        else if (computerSelection == "SCISSOR" && playerSelection == "PAPER"){
            winner = "Computer";
            result = `${winner} wins! ${computerSelection} beats ${playerSelection}`;
        }
        else if (computerSelection == "PAPER" && playerSelection == "ROCK"){
            winner = "Computer";
            result = `${winner} wins! ${computerSelection} beats ${playerSelection}`;
        }
        else if (playerSelection===computerSelection){
            score[0] += 1;
            score[1] += 1;
            return "draw";
        }
    }
}