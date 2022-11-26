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
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        
        playerScore++;
        results.textContent = (`You Win! ${playerSelection} beats ${computerSelection}`);
        scores.textContent = `Jugador: ${playerScore} Maquina: ${machineScore}`;
        document.getElementById(`${playerSelection}`).classList.toggle('winner-card')
        }
    else if 
       (computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "rock") {

        machineScore++;
        results.textContent = (`You Lost.. ${computerSelection} beats ${playerSelection}`)
        scores.textContent = `Jugador: ${playerScore} Maquina: ${machineScore}`;
        document.getElementById(`${playerSelection}`).classList.toggle('loser-card')

        } 
    else {
        results.textContent = ("Its a Tie!");
        scores.textContent = `Jugador: ${playerScore} Maquina: ${machineScore}`;
    }
}

// add a variable that keeps score across the rounds
let playerScore = 0;
let machineScore = 0;

if (playerScore > 5) {
    playerScore = 5
}

function winnerOfTheGame () {
    if (playerScore === 5 || machineScore === 5) {
        if (playerScore > machineScore) {
            results.textContent = "Player is the WINNER";
        } else if (playerScore < machineScore) {
            results.textContent = "You are the LOSSER";
        } else {
            results.textContent = "This game was a TIE";
        }
    }
}

const cards = document.querySelectorAll('img');
cards.forEach((img) => {
    img.addEventListener('click', () => {
        deleteCardAnimation();
        playRound(img.id, getComputerChoice());
        winnerOfTheGame();
    })
})

function deleteCardAnimation () {
    cards.forEach ((img) => {
            img.classList.remove('winner-card');
            img.classList.remove('loser-card');
    
    })
}

const results = document.querySelector('#results');
const scores = document.querySelector('#scores');