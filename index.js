const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerSelection = choices[Math.floor(Math.random() * 3)]; // Random # Gen from 0-2
  return computerSelection;
}

function getPlayerChoice() {
  const playerSelection = prompt("Choose rock, paper, or scissors");
  playerSelection.toLowerCase();
  return playerSelection;
}

function checkWinner(getPlayerChoice, getComputerChoice) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")
  ){
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(checkWinner) {
  if (checkWinner == "Tie") {
    return "It's a Tie!";
  } else if (checkWinner == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playGame() {
  for (let i = 0; i<=5; i++) {
    playRound();
  }
}