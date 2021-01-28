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
  console.log(playerSelection)

  choice(playerSelection, computerSelection);
  updateResults()
  
}

let playerWin = 0
  let computerWin = 0;
console.log(playerWin)


let resultsPlayer = document.querySelector("#playWin");
let resultsComputer = document.querySelector("#compWin");
let scoreHead = document.querySelector('#wonOrNot')

function updateResults(){
    resultsPlayer.innerHTML = playerWin
    resultsComputer.innerHTML = computerWin

    if (isGameOver()) setGameOver();
    
}   



function choice(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection === "scissors") ||
    (playerSelection == "paper" && computerSelection === "rock") ||
    (playerSelection == "scissors" && computerSelection === "paper")
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

function setGameOver(){
    return playerWin > computerWin ? scoreHead.textContent = `Game over, you won!` : scoreHead.textContent = `Game over, you lost!`
}

function isGameOver(){
    return playerWin === 5 || computerWin === 5
}

