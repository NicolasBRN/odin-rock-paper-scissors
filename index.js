// create a function that can return randomly "rock", "paper" and "scissors"
function getComputerChoice () {
    let rockPaperScissors = ["rock", "paper", "scissors"];
    return rockPaperScissors[Math.floor(Math.random() * 3)];
}

// create a function that can play a round of rock paper scissors
// this takes two parameters player selection and computer selection
function playRound (playerSelection, computerSelection) {
    
    // make player selection case insensitive
    playerSelection = playerSelection.toLowerCase();
    
    // return a string declaring the winner of the two
    // rock beats scissors, scissors beats paper, paper beats rock
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        alert ("You win, rock beats scissors");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        alert ("You win, scissors beats paper");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        alert ("You win, paper beats rock");
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        machineScore++;
        alert ("You lose, rock beats scissors");
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        machineScore++;
        alert ("You lose, scissors beats paper");
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        machineScore++;
        alert ("You lose, paper beats rock");
    } else {
        alert ("Its a Tie!");
    }
}

// add a variable that keeps score across the rounds
let playerScore = 0;
let machineScore = 0;

// create a function called game, that plays 5 rounds of the game
function game () {

    // call playRound function inside
    for (i = 0; i < 5; i++) {
        playRound(prompt("Rock, Paper or Scissors?: "), getComputerChoice())
    }

    // at the end of 5 rounds, report a winner or loser
    if (playerScore > machineScore) {
        alert("You win the game!! NICE")
    } else if (machineScore > playerScore) {
        alert("You lose the game, sorry")
    } else {
        alert("The game was a TIE.")
    }
}

game();
