/* Write a function called getComputerChoice that randomly returns either Rock, Paper or Sicssors*/

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch(randomNumber) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
    }
    return computerChoice;
}

