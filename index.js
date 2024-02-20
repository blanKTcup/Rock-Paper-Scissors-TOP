const COMPUTER_CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let computerChoice = COMPUTER_CHOICES[Math.floor(Math.random() * 3)]; // Random # Gen from 0-2
  return computerChoice;
}

function getPlayerChoice() {
  let initialChoice = prompt("Choose Rock, Paper, or Scissors"); // Initial choice that user inputs, no styling
  const LOWER_CASE = (initialChoice.slice(1, initialChoice.length)).toLowerCase(); // Makes all letters except for first letter lower case
  const UPPER_1ST_CHAR = (initialChoice.charAt(0)).toUpperCase(); // Makes first letter upper case
  const PLAYER_CHOICE = UPPER_1ST_CHAR.concat(LOWER_CASE); // Combines upper case letter and rest of lower case letters into 1 string
  return PLAYER_CHOICE; // returns complete string 
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
  let result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "This round is a tie!";
  } else if (result == "Player") {
    return `You won this round! ${playerSelection} (Your Move) beats ${computerSelection} (Computer's Move)`;
  } else {
    return `You lost this round! ${computerSelection} (Computer's Move) beats ${playerSelection} (Your Move)`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  console.log("Welcome!");
  console.log("-------------------------------------------------------")
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("-------------------------------------------------------"); // indicates new round
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      computerScore++;
    } 
  }
  console.log("The game is over...")
  
  if (playerScore > computerScore) {
    console.log("Luckily, you won the game!");
  } else if (computerScore > playerScore) {
    console.log("Unfortunately, you lost the game :(");
  } else {
    console.log("Surprisingly, this game is a tie!");
  }
  
  console.log("Thanks for Playing!");
}

playGame(); // test if you can next function inside function instead of assigning it to a variable 
