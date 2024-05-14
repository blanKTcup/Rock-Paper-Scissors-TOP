const headerEl = document.querySelector('.header');
const rockEl = document.querySelector('.rock');
const paperEl = document.querySelector('.paper');
const scissorsEl = document.querySelector('.scissors');
const resultsEL = document.querySelector('.results');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');

const COMPUTER_CHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
	let computerChoice = COMPUTER_CHOICES[Math.floor(Math.random() * 3)]; // Random # Gen from 0-2
	return computerChoice;
}

rockEl.addEventListener('click', () => {playRound('Rock')});
paperEl.addEventListener('click', () => {playRound('Paper')});
scissorsEl.addEventListener('click', () => {playRound('Scissors')});

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = checkWinner(playerSelection, computerSelection);
  if (result == 'Tie') {
    resultsEL.textContent = `This round is a tie! The Computer also chose ${playerSelection}`;
  } else if (result == 'Player') {
    resultsEL.textContent = `You won this round! ${playerSelection} (Your Move) beats ${computerSelection} (Computer's Move)`;
    playerScoreEl.textContent = 
  } else {
    resultsEL.textContent = `You lost this round! ${computerSelection} (Computer's Move) beats ${playerSelection} (Your Move)`;
  }
}

function playGame() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let computerSelection = getComputerChoice();
		if (checkWinner(playerSelection, computerSelection) == 'Player') {
			playerScore++;
		} else if (checkWinner(playerSelection, computerSelection) == 'Computer') {
			computerScore++;
		}
	}
}


	function checkWinner(playerSelection, computerSelection) {
		if (playerSelection == computerSelection) {
			return 'Tie';
		} else if (
			(playerSelection == 'Rock' && computerSelection == 'Scissors') ||
			(playerSelection == 'Paper' && computerSelection == 'Rock') ||
			(playerSelection == 'Scissors' && computerSelection == 'Paper')
		) {
			return 'Player';
		} else {
			return 'Computer';
		}
	}

	// if (playerScore > computerScore) {
	// 	resultsEL.textContent = 'The game is over...Luckily, you won the game! Thanks for Playing!';
	// } else if (computerScore > playerScore) {
	// 	resultsEL.textContent = 'The game is over...Unfortunately, you lost the game :( Thanks for Playing!';
	// } else {
	// 	resultsEL.textContent = 'The game is over...Surprisingly, this game is a tie! Thanks for Playing!';
	// }

// function getPlayerChoice() {
// 	let initialChoice = prompt('Choose Rock, Paper, or Scissors'); // Initial choice that user inputs, no styling
// 	const LOWER_CASE = initialChoice.slice(1, initialChoice.length).toLowerCase(); // Makes all letters except for first letter lower case
// 	const UPPER_1ST_CHAR = initialChoice.charAt(0).toUpperCase(); // Makes first letter upper case
// 	const PLAYER_CHOICE = UPPER_1ST_CHAR.concat(LOWER_CASE); // Combines upper case letter and rest of lower case letters into 1 string
// 	return PLAYER_CHOICE; // returns complete string
// }
