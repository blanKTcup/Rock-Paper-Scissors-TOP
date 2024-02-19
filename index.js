const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * 3)]; // Random # Gen from 0-2
  return computerChoice;
}

function getPlayerChoice() {
  const initialChoice = prompt("Choose Rock, Paper, or Scissors"); // Initial choice that user inputs, no styling
  const lowerCase = (initialChoice.slice(1, initialChoice.length)).toLowerCase(); // Makes all letters except for first letter lower case
  const upperFirstChar = initialChoice.charAt(0); // Makes first letter upper case
  const playerChoice = upperFirstChar + lowerCase; // Combines upper case letter and rest of lower case letters into 1 string
  return playerChoice; // returns complete string 
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Paper" && computerSelection == "Rock") || 
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ){
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); // test if you can next function inside function instead of assigning it to a variable 



// function playGame() {
//   for (let i = 0; i<=5; i++) {
//     playRound();
//   }
// }