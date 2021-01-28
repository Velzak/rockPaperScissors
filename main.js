function computerPlay() {
  let random = Math.random();
  return random <= 0.33
    ? "Rock"
    : random <= 0.66
    ? "Paper"
    : random <= 1
    ? "Scissors"
    : "ERROR";
}

function playRound(playerSelection, computerSelection) {
  return (playerSelection === "rock" && computerSelection === "Paper") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
    ? `You win! ${playerSelection} beats ${computerSelection}`
    : `You Lose! ${computerSelection} beats ${playerSelection}`;
}


let playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();


console.log(playerSelection)

const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))
