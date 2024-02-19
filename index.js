function computerChoice() {
  let computerSelection = Math.floor(Math.random() * 3) + 1; // Random # Gen from 1-3
  if (computerSelection === 1) {
    return "rock";
  } else if (computerSelection === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerChoice) {
  let playerSelection = prompt("Rock, paper, or scissors?");
  playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerChoice === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerChoice === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerChoice === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerChoice === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerChoice === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerChoice === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else {
    return "It's a Tie!"
  }
}

function playGame() {
  for (let i = 0; i<=5; i++) {
    playRound();
  }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));