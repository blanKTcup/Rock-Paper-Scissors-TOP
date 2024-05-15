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

let playerScore = 0;
let computerScore = 0;

rockEl.addEventListener('click', () => {
	playRound('Rock');
});
paperEl.addEventListener('click', () => {
	playRound('Paper');
});
scissorsEl.addEventListener('click', () => {
	playRound('Scissors');
});

function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	let result = checkWinner(playerSelection, computerSelection);
	if (result == 'Tie') {
		resultsEL.textContent = `This round is a tie! The Computer also chose ${playerSelection}`;
	} else if (result == 'Player') {
		resultsEL.textContent = `You won this round! ${playerSelection} (Your Move) beats ${computerSelection} (Computer's Move)`;
    playerScore++;
	} else {
		resultsEL.textContent = `You lost this round! ${computerSelection} (Computer's Move) beats ${playerSelection} (Your Move)`;
    computerScore++;
	}
	playerScoreEl.textContent = `Player: ${playerScore}`;
	computerScoreEl.textContent = `Computer: ${computerScore}`;
  scoreChecker(playerScore, computerScore);
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

function scoreChecker(playerScore, computerScore) {
  if (playerScore === 5) {
    resultsEL.textContent = "You won the game! Refresh browser to play again";
    rockEl.disabled = true;
    paperEl.disabled = true;
    scissorsEl.disabled = true;
  } else if (computerScore === 5) {
    resultsEL.textContent = 'You lost the game! Refresh browser to play again';
    rockEl.disabled = true;
    paperEl.disabled = true;
    scissorsEl.disabled = true;
  }
}
