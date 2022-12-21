let computerPoints = 0;
let playerPoints = 0;

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
        playerPoints = playerPoints + 1;
        console.log("You've won! Rock beats Scissors!");
    } else if (playersChoice === "ROCK" && computerChoice === "PAPER") {
        computerPoints = computerPoints + 1;
        console.log("You've lost! Paper beats Rock!");
    } else if (playersChoice === "PAPER" && computerChoice === "ROCK") {
        playerPoints = playerPoints + 1;
        console.log("You've won! Paper beats Rock!");
    } else if (playersChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerPoints = computerPoints + 1;
        console.log("You've lost! Scissors beats Paper");
    } else if (playersChoice === "SCISSORS" && computerChoice === "PAPER") {
        playerPoints = playerPoints + 1;
        console.log("You've won! Scissors beats Paper!");
    } else if (playersChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerPoints = computerPoints + 1;
        console.log("You've lost! Rock beats Scissors!");
    } else {
        console.log("It was a draw.")
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
    
   
}

game();
 console.log("Player's points: " + playerPoints)
 console.log("Computer's points: " + computerPoints)

if (playerPoints > computerPoints) {
    console.log("You've won by " + playerPoints + " to " + computerPoints)
} else if (computerPoints > playerPoints) {
    console.log("You've lost by " + playerPoints + " to " + computerPoints)
} else {
    console.log("The game is tied")
}