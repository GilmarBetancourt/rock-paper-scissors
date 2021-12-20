let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let computerPick = "";
let playerPick = "";
let roundWinMessage = "";
let finalWinner = "";
let gameOver = false;

//-----------------Game Functionality----------------------

//This returns the computer's selection: Rocks, paper, or scissors.
function computerPlay() {
  const play = Math.floor(Math.random() * 4);
  if (play == 1 || play == 0) {
    computerPick = "Rock";
    return "Rock";
  } else if (play == 2) {
    computerPick = "Paper";
    return "Paper";
  } else if (play == 3) {
    computerPick = "Scissors";
    return "Scissors";
  }
}

//This determines the winner of the round
function playRound(playerSelection, computerSelection) {
  console.log("Player: " + playerSelection);
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    roundWinMessage = "It's a tie! Rock vs Rock.";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    roundWinMessage = "You lose! Paper beats Rock.";
    computerScore += 1;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    roundWinMessage = "You win! Rock beats Scissors.";
    playerScore += 1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    roundWinMessage = "You win! Paper beats Rock.";
    playerScore += 1;
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    roundWinMessage = "It's a tie! Paper vs Paper.";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    roundWinMessage = "You lose! Scissors beats Paper.";
    computerScore += 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    roundWinMessage = "You lose! Rock beats Scissors.";
    computerScore += 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    roundWinMessage = "You win! Scissors beats paper.";
    playerScore += 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    roundWinMessage = "It's a tie! Scissors vs Scissors.";
  }
}

//This determines the winner of the game after five games.
function gameWinner() {
  if (playerScore == 5) {
    finalWinner = "You've won the game!";
    gameOver = true;
  } else if (computerScore == 5) {
    finalWinner = "The computer wins this game.";
    gameOver = true;
  }
}

//This is the actual game. It takes the selected choice of the player and plays a round
document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    roundNumber += 1;
    if (item.id == "rock") {
      playerPick = "Rock";
      playRound("Rock", computerPlay());
    }
    if (item.id == "paper") {
      playerPick = "Paper";
      playRound("Paper", computerPlay());
    }
    if (item.id == "scissors") {
      playerPick = "Scissors";
      playRound("Scissors", computerPlay());
    }

    gameWinner();
    showResults();
  });
});

// - ------------- Showing Results in the DOM -----------------------

function showResults() {
  const results = document.getElementById("results");

  //Creating the elements to show
  const rounds = document.createElement("div");
  rounds.classList = "roundsBox";
  const roundNumberP = document.createElement("p");
  roundNumberP.classList = "roundNumber";
  const computerPickP = document.createElement("p");
  computerPickP.classList = "optionPicked";
  const playerPickP = document.createElement("p");
  playerPickP.classList = "optionPicked";
  const winningRoundMessageP = document.createElement("p");
  winningRoundMessageP.classList = "centeredMessages";
  const scoreMessageP = document.createElement("p");
  scoreMessageP.classList = "centeredMessages";
  const wonGameMessageP = document.createElement("p");
  wonGameMessageP.classList = "centeredMessages";

  //Assigning the content to the elements
  roundNumberP.textContent = "Round: " + roundNumber;
  computerPickP.textContent = "Computer: " + computerPick;
  playerPickP.textContent = "Player: " + playerPick;
  winningRoundMessageP.textContent = roundWinMessage;
  scoreMessageP.textContent =
    "Score: Player: " + playerScore + " --- Computer: " + computerScore;
  wonGameMessageP.textContent = finalWinner;

  //Adding the elements to the DOM
  rounds.appendChild(roundNumberP);
  rounds.appendChild(computerPickP);
  rounds.appendChild(playerPickP);
  rounds.appendChild(winningRoundMessageP);
  rounds.appendChild(scoreMessageP);
  if (gameOver == true) {
    rounds.appendChild(wonGameMessageP);
    //Resetting the game after the final round.
    gameOver = false;
    roundNumber = 0;
    playerScore = 0;
    computerScore = 0;
  }

  results.appendChild(rounds);
}
