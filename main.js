function computerPlay(){
    let random = Math.random()
    return random <= 0.33 ? 'Rock' 
         : random <= 0.66 ? 'Paper'
         : random <= 1 ? 'Scissors'
         : 'ERROR'
}

