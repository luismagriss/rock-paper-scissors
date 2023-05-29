let computerPoints = 0;
let playerPoints = 0;


const resultDiv = document.querySelector('.results');
const results = document.createElement('h1');
const buttons = document.querySelectorAll('button');
const divPoints = document.createElement('div');
const bod = document.querySelector('body');
const points = document.createElement('h1');
const finalResult = document.createElement('h1')

buttons.forEach(button => button.addEventListener('click', playRound))
resultDiv.appendChild(results);
bod.appendChild(divPoints);
divPoints.appendChild(points);
divPoints.appendChild(finalResult);


function getComputerChoice() {    
    let randomNumber1to3 = Math.floor(Math.random() * 3) + 1;
    let computerChoice = undefined;
    if (randomNumber1to3 === 1) {
        computerChoice = "ROCK";
    } else if (randomNumber1to3 === 2) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }
    console.log("Computer selects " + computerChoice)
    return computerChoice;
}

function playRound(playersChoice, computerChoice) {
    playersChoice = this.textContent;
    computerChoice = getComputerChoice();
    if (playersChoice === "ROCK" && computerChoice === "SCISSORS") {
        playerPoints = playerPoints + 1;
        results.textContent = "You've won! Rock beats Scissors!";
    } else if (playersChoice === "ROCK" && computerChoice === "PAPER") {
        computerPoints = computerPoints + 1;
        results.textContent = "You've lost! Paper beats Rock!";
    } else if (playersChoice === "PAPER" && computerChoice === "ROCK") {
        playerPoints = playerPoints + 1;
        results.textContent = "You've won! Paper beats Rock!";
    } else if (playersChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerPoints = computerPoints + 1;
        results.textContent = "You've lost! Scissors beats Paper";
    } else if (playersChoice === "SCISSORS" && computerChoice === "PAPER") {
        playerPoints = playerPoints + 1;
        results.textContent = "You've won! Scissors beats Paper!";
    } else if (playersChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerPoints = computerPoints + 1;
        results.textContent = "You've lost! Rock beats Scissors!";
    } else {
        results.textContent = "It was a tie.";
    }
    points.textContent = "Player points: " + playerPoints + " // " + computerPoints + ": Computer Points";
    if (playerPoints === 5) {
        finalResult.textContent = "You've won!"
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        finalResult.textContent = "Computer wins!"
        playerPoints = 0;
        computerPoints = 0;
    }
}


function pointsCounter() {
    for (i = 0; i < 5; i ++) {
        if (playerPoints > computerPoints) {
            console.log("You've won by " + playerPoints + " to " + computerPoints)
        } else if (computerPoints > playerPoints) {
            console.log("You've lost by " + playerPoints + " to " + computerPoints)
        } else {
            console.log("The game was a draw")
        }
    }
    
}

;


 


