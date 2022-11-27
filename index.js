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
        
        if (machineScore === 5) {
            return;
        }
        playerScore++;
        limitScores ();
        scores.textContent = `You: ${playerScore} Rival: ${machineScore}`;
        document.getElementById(`${playerSelection}`).classList.toggle('winner-card')
        document.getElementById('rival').src = `img/${computerSelection}.png`;
        }

    else if 
       (computerSelection === "rock" && playerSelection === "scissors" ||
        computerSelection === "scissors" && playerSelection === "paper" ||
        computerSelection === "paper" && playerSelection === "rock") {

        if (playerScore === 5) {
            return;
        }
        machineScore++;
        limitScores ()
        scores.textContent = `You: ${playerScore} Rival: ${machineScore}`;
        document.getElementById(`${playerSelection}`).classList.toggle('loser-card');
        document.getElementById('rival').src = `img/${computerSelection}.png`;
        } 

    else {
        scores.textContent = `You: ${playerScore} Rival: ${machineScore}`;
        document.getElementById('rival').src = `img/${computerSelection}.png`;
    }
}

// add a variable that keeps score across the rounds
let playerScore = 0;
let machineScore = 0;

function winnerOfTheGame () {
    if (playerScore === 5 || machineScore === 5) {
        if (playerScore > machineScore) {
            scores.textContent = "";
            results.textContent = "YOU WIN";
        } else if (playerScore < machineScore) {
            scores.textContent = "";
            results.textContent = "You LOST";
        } else {
            scores.textContent = "";
            results.textContent = "TIE";
        }
    }
}

function limitScores () {
    if (playerScore >= 5) {
        playerScore = 5;
    }
    if (machineScore >= 5) {
        machineScore = 5;
    }
}

const cards = document.querySelectorAll('.player-cards');
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

const retry = document.getElementById('retry');
retry.addEventListener('click', () => {
    playerScore = 0;
    machineScore = 0;
    scores.textContent = `You: ${playerScore} Rival: ${machineScore}`;
    results.textContent = "";
    deleteCardAnimation();
    document.getElementById('rival').src = `img/back.png`;
})

const results = document.querySelector('#results');
const scores = document.querySelector('#scores');