////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove) {

        winner = 'tie';

    } else if ( playerMove == 'rock' && computerMove == 'scissors' || 
                playerMove == 'scissors' && computerMove == 'paper' || 
                playerMove == 'paper' && computerMove == 'rock') {

        winner = 'player';

    } else if ( computerMove == 'rock' && playerMove == 'scissors' ||
                computerMove == 'scissors' && playerMove == 'paper' ||
                computerMove == 'paper' && playerMove == 'rock') {

        winner = 'computer';

    } 
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    for (var rounds = 0; playerWins < 5 && computerWins < 5; rounds++) {

        var cpu_move = getComputerMove();
        var player_move = getPlayerMove();    
        var winner = getWinner(player_move,cpu_move); // Gets winner for next round!

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won X times.

        if (winner == 'player') {
           playerWins += 1;
           console.log(" Round " + rounds + " - Player won playing " + player_move + " against CPU's " + cpu_move + ". Score: Player " + playerWins + " and CPU " + computerWins);
        
        }  else if (winner == 'computer') {
            computerWins += 1;
            console.log(" Round " + rounds + " - Computer won playing " + cpu_move + " against player's " + player_move + ". Score: Player " + playerWins + " and CPU " + computerWins);
        
        } else {
            console.log("Round " + rounds + " is a tie.  Play again.")
        
        }

    }

    return [playerWins, computerWins];

}


function playTo(num) {

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    for (var rounds = 0; playerWins < num && computerWins < num; rounds++) {

    var cpu_move = getComputerMove();
    var player_move = getPlayerMove();    
    var winner = getWinner(player_move,cpu_move); // Initializes the next round!

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won X times.

        if (winner == 'player') {
            playerWins += 1;
            console.log(" Round " + rounds + " - Player won playing " + player_move + " against CPU's " + cpu_move + ". Score: Player " + playerWins + " and CPU " + computerWins);
        
        }  else if (winner == 'computer') {
            computerWins += 1;
            console.log(" Round " + rounds + " - Computer won playing " + cpu_move + " against player's " + player_move + ". Score: Player " + playerWins + " and CPU " + computerWins);
        
        } else {
            console.log("Round " + rounds + " is a tie.  Play again.")
        
        }

    }


    return [playerWins, computerWins];
}

