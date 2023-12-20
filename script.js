/* Write a function called getComputerChoice that randomly returns either Rock, Paper or Sicssors*/

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch(randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

/* Write a function that returns player's choice */

function getPlayerChoice() {
    let userChoice = prompt('Rock, Paper or Scissors?');
    return userChoice;
}

/* Write a function that plays a single round of Rock Paper Scissors and either replays the round if there's a tie or returns who won*/

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return playRound(getPlayerChoice(), getComputerChoice());
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    }
}

/* Write a function that plays a best of five and displays who won at the end */

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        if(playRound(getPlayerChoice(), getComputerChoice()).includes('You Win')) {
            playerScore++;
        }
        else {
            computerScore++;
        }
    }
    if(playerScore > computerScore) {
        console.log(`You Win! Your score: ${playerScore} Computer score: ${computerScore}`)
    }
    else {
        console.log(`You Lose! Your score: ${playerScore} Computer score: ${computerScore}`)
    }
}

game();