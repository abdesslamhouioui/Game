const options = document.querySelectorAll('button');
const result = document.querySelector('#result');

let playerScore = 0;
let computerScore = 0;

options.forEach(option => {
	option.addEventListener('click', () => {
		const playerChoice = option.id;
		const computerChoice = computerPlay();
		const roundResult = playRound(playerChoice, computerChoice);
		result.textContent = roundResult;
		if (roundResult.includes('You win')) {
			playerScore++;
		} else if (roundResult.includes('Computer wins')) {
			computerScore++;
		}
		updateScore();
		checkGameEnd();
	});
});

function computerPlay() {
	const choices = ['paper', 'scissors', 'rock'];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return 'It\'s a tie!';
	} else if (playerChoice === 'paper' && computerChoice === 'rock' ||
			   playerChoice === 'scissors' && computerChoice === 'paper' ||
			   playerChoice === 'rock' && computerChoice === 'scissors') {
		return `You win! ${playerChoice} beats ${computerChoice}.`;
	} else {
		return `Computer wins! ${computerChoice} beats ${playerChoice}.`;
	}
}

function updateScore() {
	const score = `Player: ${playerScore} - Computer: ${computerScore}`;
	document.title = score;
}

function checkGameEnd() {
	if (playerScore === 5) {
		result.textContent = 'Congratulations! You won the game!';
	} else if (computerScore === 5) {
		result.textContent = 'Sorry, you lost the game!';
	}
}
