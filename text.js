function playRound (playerSelection, computerSelection) {
    
    // make player selection case insensitive
    playerSelection = playerSelection.toLowerCase();
    
    // return a string declaring the winner of the two
    // rock beats scissors, scissors beats paper, paper beats rock
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        
        results.textContent = (`You Win! ${playerSelection} beats ${computerSelection}`);
        scores.textContent = `Jugador: ${playerScore} Maquina: ${machineScore}`;
        }
    else if 
       (computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "rock") {

        results.textContent = (`You Lost.. ${computerSelection} beats ${playerSelection}`)
        scores.textContent = `Jugador: ${playerScore} Maquina: ${machineScore}`;
        } 
    else {
        results.textContent = ("Its a Tie!");
        scores.textContent = `Jugador: ${playerScore} Maquina: ${machineScore}`;
    }
}