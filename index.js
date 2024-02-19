const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerSelection = choices[Math.floor(Math.random() * 3)]; // Random # Gen from 0-2
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  let playerSelection = prompt("Rock, paper, or scissors");
  playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));