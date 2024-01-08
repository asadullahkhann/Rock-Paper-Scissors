function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

/* Write a function that plays a single round of Rock Paper Scissors and either replays the round if there's a tie or returns who won*/

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return "It's a tie";
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
