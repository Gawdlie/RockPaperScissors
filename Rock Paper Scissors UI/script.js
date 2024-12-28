let humanScore = 0;
let computerScore = 0;
let computerSelectionVar = '';

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const roundResults = document.createElement("div");
const runningScore = document.createElement("div");
const container = document.createElement("div");
const buttonContainer = document.createElement("div");
const resultsContainer = document.createElement("div");

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(roundResults);
document.body.appendChild(runningScore);
document.body.appendChild(container);
document.body.appendChild(buttonContainer);
document.body.appendChild(resultsContainer);

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
roundResults.textContent = "this is where the results will be";
roundResults.style.cssText = "font-size: 30px; color: white; font-family: Arial, Helvetica, sans-serif;"
runningScore.textContent = "this is where the running score will be";
runningScore.style.cssText = "font-size: 30px; color: white; font-family: Arial, Helvetica, sans-serif;"

document.body.style.cssText = "display: flex; justify-content: center; align-items: center; background-color: maroon; margin: 0px; padding: 0px;"

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(roundResults);
container.appendChild(runningScore);
container.appendChild(buttonContainer);
container.appendChild(resultsContainer);
container.style.cssText = "margin-top: 240px;";

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);
buttonContainer.style.cssText = "display: flex; justify-content: center; align-items: center; gap: 20px; padding: 30px;";

resultsContainer.appendChild(roundResults);
resultsContainer.appendChild(runningScore);
resultsContainer.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px; padding: 30px;";

rockButton.style.cssText = "padding: 20px; border-radius: 20px; cursor: pointer;";
paperButton.style.cssText = "padding: 20px; border-radius: 20px; cursor: pointer;";
scissorsButton.style.cssText = "padding: 20px; border-radius: 20px; cursor: pointer;";


rockButton.addEventListener("click", () => {
  if(humanScore === 5) {
    roundResults.textContent = "You win!"
  }
  else if(computerScore === 5) {
    roundResults.textContent = "Computer wins!"
  }
  else {
    playRound("rock", getComputerChoice());
    roundResults.textContent = "rock vs " + computerSelectionVar;
  }
});

paperButton.addEventListener("click", () => {
  if(humanScore === 5) {
    roundResults.textContent = "You win!"
  }
  else if(computerScore === 5) {
    roundResults.textContent = "Computer wins!"
  }
  else {
    playRound("paper", getComputerChoice());
    roundResults.textContent = "paper vs " + computerSelectionVar;
  }
});

scissorsButton.addEventListener("click", () => {
  if(humanScore === 5) {
    roundResults.textContent = "You win!"
  }
  else if(computerScore === 5) {
    roundResults.textContent = "Computer wins!"
  }
  else {
    playRound("scissors", getComputerChoice());
    roundResults.textContent = "scissors vs " + computerSelectionVar;
  }
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
