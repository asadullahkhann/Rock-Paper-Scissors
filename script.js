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

/* Write a function that returns user's choice */

function getPlayerChoice() {
    let userChoice = prompt('Rock, Paper or Scissors?');
    return userChoice.toLowerCase();
}

