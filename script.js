let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

//This returns the computer's selection: Rocks, paper, or scissors.
function computerPlay() {
  const play = Math.floor(Math.random() * 4);
  if (play == 1 || play == 0) {
    console.log("Computer : Rock");
    return "Rock";
  } else if (play == 2) {
    console.log("Computer : Paper");
    return "Paper";
  } else if (play == 3) {
    console.log("Computer : Scissors");
    return "Scissors";
  }
}

//This determines the winner of the round
function playRound(playerSelection, computerSelection) {
  console.log("Player: " + playerSelection);
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    console.log("It's a tie! Rock vs Rock.");
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore += 1;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    console.log("You win! Rock beats Scissors.");
    playerScore += 1;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log("You win! Paper beats Rock.");
    playerScore += 1;
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    console.log("It's a tie! Paper vs Paper.");
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    console.log("You lose! Scissors beats Paper.");
    computerScore += 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore += 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("You win! Scissors beats paper.");
    playerScore += 1;
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    console.log("It's a tie! Scissors vs Scissors.");
  }
}

//This determines the winner of the game.
function gameWinner() {
  if (playerScore == 5) {
    console.log("You've won the game!");
  } else if (computerScore == 5) {
    console.log("The computer wins this game.");
  }
}

//This is the actual game. It takes the selected choice of the player and plays a round
document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    roundNumber += 1;
    if (item.id == "rock") {
      playRound("Rock", computerPlay());
    }
    if (item.id == "paper") {
      playRound("Paper", computerPlay());
    }
    if (item.id == "scissors") {
      playRound("Scissors", computerPlay());
    }
    //Here the results are shown in the console.
    console.log("Round: " + roundNumber);
    console.log(
      "Score: Player: " + playerScore + " Computer: " + computerScore
    );
    console.log(
      "--------------------------------------------------------------"
    );
    gameWinner();
  });
});
