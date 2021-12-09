//This returns the computer's selection: Rocks, paper, or scissors.
let playerScore = "";

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

function playRound(playerSelection, computerSelection) {
  const playerChoiceLower = playerSelection.toLowerCase().trim();
  const playerChoiceCap =
    playerChoiceLower.charAt(0).toUpperCase() + playerChoiceLower.slice(1);
  const computerChoice = computerSelection;
  console.log("Player: " + playerChoiceCap);
  if (playerChoiceCap == "Rock" && computerChoice == "Rock") {
    console.log("It's a tie! Rock vs Rock.");
    return "tie";
  } else if (playerChoiceCap == "Rock" && computerChoice == "Paper") {
    console.log("You lose! Paper beats Rock.");
    return "lose";
  } else if (playerChoiceCap == "Rock" && computerChoice == "Scissors") {
    console.log("You win! Rock beats Scissors.");
    return "win";
  } else if (playerChoiceCap == "Paper" && computerChoice == "Rock") {
    console.log("You win! Paper beats Rock.");
    return "win";
  } else if (playerChoiceCap == "Paper" && computerChoice == "Paper") {
    console.log("It's a tie! Paper vs Paper.");
    return "tie";
  } else if (playerChoiceCap == "Paper" && computerChoice == "Scissors") {
    console.log("You lose! Scissors beats Paper.");
    return "lose";
  } else if (playerChoiceCap == "Scissors" && computerChoice == "Rock") {
    console.log("You lose! Rock beats Scissors.");
    return "lose";
  } else if (playerChoiceCap == "Scissors" && computerChoice == "Paper") {
    console.log("You win! Scissors beats paper.");
    return "win";
  } else if (playerChoiceCap == "Scissors" && computerChoice == "Scissors") {
    console.log("It's a tie! Scissors vs Scissors.");
    return "tie";
  } else {
    alert("Please input a valid answer and try again.");
    return "invalid";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 1; i <= 5; i++) {
    console.log("Round: " + i);
    let round = playRound(
      window.prompt(
        "Write your choice: Rock, Paper or Scissors. Please write only one option."
      ),
      computerPlay()
    );
    if (round == "win") {
      playerScore += 1;
    } else if (round == "lose") {
      computerScore += 1;
    } else if (round == "invalid") {
      i -= 1;
    }
    console.log(
      "Score: Player: " + playerScore + " Computer: " + computerScore
    );
    console.log(
      "--------------------------------------------------------------"
    );
  }

  if (playerScore > computerScore) {
    console.log("You won!");
  } else if (computerScore > playerScore) {
    console.log("You lost!");
  } else {
    console.log("It's a tie.");
  }
}

game();
