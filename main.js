const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.addEventListener('click', playRound)
paper.addEventListener('click', playRound)
scissors.addEventListener('click', playRound)



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

function playRound(e){
    let computerSelection = computerPlay();
    let playerSelection = e.target.id

    let playerWin, computerWin = 0

    if((playerSelection === 'rock' && computerSelection === 'Scissors') || (playerSelection === 'paper' && computerSelection === 'Rock') || (playerSelection === 'scissors' && computerSelection === 'Paper')){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        playerWin++
    } else {
        computerWin++
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
    return playerWin, computerWin
}

let resultsPlayer = document.querySelector('#playWin').innerText = playerWin
let resultsComputer = document.querySelector('#compWin').innerText = computerWin
