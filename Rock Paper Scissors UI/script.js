let humanScore = 0;
let computerScore = 0;
let computerSelectionVar = '';

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const roundResults = document.createElement("div");
const runningScore = document.createElement("div");

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(roundResults);
document.body.appendChild(runningScore);

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
roundResults.style.border = "solid";
roundResults.textContent = "this is where the results will be";
runningScore.style.border = "solid";
runningScore.textContent = "this is where the running score will be";

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  roundResults.textContent = "rock vs " + computerSelectionVar;
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  roundResults.textContent = "paper vs " + computerSelectionVar;
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  roundResults.textContent = "scissors vs " + computerSelectionVar;
});

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;

  if(choice === 1) {
    computerSelectionVar = "rock";
    return "rock";
  }
  else if(choice === 2) {
    computerSelectionVar = "paper";
    return "paper";
  }
  else {
    computerSelectionVar = "scissors";
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
    computerScore++;
    runningScore.textContent = humanScore + " to " + computerScore;
  }
  else if(humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    runningScore.textContent = humanScore + " to " + computerScore;
  }
  else if(humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
    humanScore++;
    runningScore.textContent = humanScore + " to " + computerScore;
  }
  else if(humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    runningScore.textContent = humanScore + " to " + computerScore;
  }
  else if(humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    runningScore.textContent = humanScore + " to " + computerScore;
  }
  else if(humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    runningScore.textContent = humanScore + " to " + computerScore;
  }
  else {
    runningScore.textContent = humanScore + " to " + computerScore;
    return;
  }
}