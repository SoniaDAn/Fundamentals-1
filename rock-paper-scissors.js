const getUserChoice = userInput => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return 'Error! Please input rock, paper or scissors';
    }
};

let getComputerChoice = () => {

const randomNumber = Math.floor(Math.random() * 3);

switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    default :
    return 'Error. Please try again.';
    break; 
}
}

const determineWinner = (userChoice, computerChoice) => {
 if (userChoice === computerChoice) {
    return 'It\'s a tie! Play again';

 } if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return 'Back luck, the computer won. Try again';
 } else {
    return 'Well done! You won!';
 }
}
 if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
        return 'Back luck, the computer won. Try again';
     } else {
        return 'Well done! You won!';
     }
    }
if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
        return 'Back luck, the computer won. Try again';
     } else {
        return 'Well done! You won!';
     }
    }

};

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You threw ${userChoice}.`);
    console.log(`Computer threw ${computerChoice}.`)

console.log(determineWinner(userChoice, computerChoice))
};

playGame();

