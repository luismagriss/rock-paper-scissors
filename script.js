let winner = undefined;
let computerPoints = undefined;
let playerPoints = undefined;

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

function getPlayersChoice() {
    let playersInput = prompt("Type 'rock', 'paper' or 'scissors'")
    return playersInput.toUpperCase();
}

function playRound(playersChoice, computerChoice) {
    playersChoice = getPlayersChoice();
    computerChoice = getComputerChoice();
    if (playersChoice === "ROCK" && computerChoice === "SCISSORS") {
        winner = "player"
        console.log("You've won! Rock beats Scissors!");
    } else if (playersChoice === "ROCK" && computerChoice === "PAPER") {
        winner = "computer"
        console.log("You've lost! Paper beats Rock!");
    } else if (playersChoice === "PAPER" && computerChoice === "ROCK") {
        winner = "player"
        console.log("You've won! Paper beats Rock!");
    } else if (playersChoice === "PAPER" && computerChoice === "SCISSORS") {
        winner = "computer"
        console.log("You've lost! Scissors beats Paper");
    } else if (playersChoice === "SCISSORS" && computerChoice === "PAPER") {
        winner = "player"
        console.log("You've won! Scissors beats Paper!");
    } else if (playersChoice === "SCISSORS" && computerChoice === "ROCK") {
        winner = "computer"
        console.log("You've lost! Rock beats Scissors!");
    } else {
        console.log("It was a draw.")
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
        if (winner === "player") {
            playerPoints = playerPoints + 1;
        } else if (winner === "computer") {
            computerPoints = computerPoints + 1;
        }
    }
    if (playerPoints > computerPoints) {
        console.log("You've won by " + playerPoints + " to " + computerPoints)
    } else if (computerPoints > playerPoints) {
        console.log("You've lost by " + playerPoints + " to " + computerPoints)
    } else {
        console.log("It was a draw")
    }
   
}

game();