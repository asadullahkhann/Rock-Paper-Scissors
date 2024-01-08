function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
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

function titlecase(str) {
    return str[0].toUpperCase() + str.slice(1);
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

    switch(res) {
        case 'tie':
            outputDiv.innerText = "It's a tie. Play this round again"
            break;
        case 'win':
            rounds++;
            playerScore++;
            outputDiv.innerText = `${titlecase(playerChoice)} beats ${titlecase(computerChoice)}
            Player: ${playerScore} 
            Computer: ${computerScore}`;
            break;
        case 'lose':
            rounds++;
            computerScore++;
            outputDiv.innerText = `${titlecase(computerChoice)} beats ${titlecase(playerChoice)} 
            Player: ${playerScore} 
            Computer: ${computerScore}`;
            break;
    }
    if(rounds === 5) {
        if(playerScore > computerScore) {
            outputDiv.innerText = `You Win!
            Final Score:
            Player: ${playerScore}
            Computer: ${computerScore}`;
        }
        else {
            outputDiv.innerText = `You Lose!
            Final Score:
            Player: ${playerScore}
            Computer: ${computerScore}`;
        }
        rounds = 0;
        playerScore = 0
        computerScore = 0;
        }
    });