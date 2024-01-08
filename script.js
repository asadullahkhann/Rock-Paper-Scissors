function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return "tie";
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return 'lose!';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'lose';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'lose';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    }
}
const outputDiv = document.querySelector('.output-div');

let rounds = 0;
let playerScore = 0;
let computerScore = 0;

const btnContainer = document.querySelector('.btn-container');

btnContainer.addEventListener('click', (e) => {
    let playerChoice = e.target.classList[0];
    let computerChoice = getComputerChoice();
    let res = playRound(playerChoice, computerChoice);
})