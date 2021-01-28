const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

function computerPlay() {
  let random = Math.random();
  if (random < 0.33) {
    return "Rock";
  } else if (random < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(e) {
  let computerSelection = computerPlay().toLowerCase();
  let playerSelection = e.target.id;

  choice(playerSelection, computerSelection);
}

let playerWin,
  computerWin = 0;

let resultsPlayer = document.querySelector("#playWin");
let resultsComputer = document.querySelector("#compWin");

function choice(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerWin++;
  } else if (playerSelection === computerSelection) {
    console.log(`You tied!`);
  } else {
    console.log(`You Lost! ${computerSelection} beats ${playerSelection}`);
    computerWin++;
  }
}
