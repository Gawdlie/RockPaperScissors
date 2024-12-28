let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;

  if(choice === 1) {
    return "rock";
  }
  else if(choice === 2) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  const pick = prompt("Please choose 'rock', 'paper', or 'scissors");
  return pick;
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
    computerScore++;
  }
  else if(humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
    humanScore++;
  }
  else if(humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
    humanScore++;
  }
  else if(humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
    computerScore++;
  }
  else if(humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    humanScore++;
  }
  else if(humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
    computerScore++;
  }
  else {
    return;
  }
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(humanScore + " to " + computerScore);
  }
}

playGame();