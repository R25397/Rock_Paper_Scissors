const choices = ["rock", "paper", "scissors"]
let winners = [];

function getComputerChoice() {
    return choices [Math.floor(Math.random()*choices.length)]
}

function getHumanChoice() {
    let input = prompt("Rock, Paper or Scissors");
    while (input == null) {
        input = prompt ("Rock, Paper or Scissors?");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt (
         "Write the correct letters."
        );
        while (input == null) {
            input = prompt ("Rock, Paper or Scissors?");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(choice) {
    return choices.includes(choice);
}
 
function playRound(round) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(humanSelection, computerSelection);
    winners.push(winner);
    logRound(humanSelection, computerSelection, winner, round);
}

function checkWinner(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
      return "Tied";
    } else if (
      (HumanChoice === "rock" && ComputerChoice == "scissors") ||
      (HumanChoice === "paper" && ComputerChoice == "rock") ||
      (HumanChoice === "scissors" && ComputerChoice == "paper")
    ) {
      return "You won";
    } else {
      return "Computer won";
    }
  }

function game(){
    for (let i = 1; i <= 5; i++) {
        playRound(i);
      }
      logWins();
}

function logWins() {
    let playerWins = winners.filter((item) => item == "You won").length;
    let computerWins = winners.filter((item) => item == "Computer won").length;
    let ties = winners.filter((item) => item == "Tied").length;
    console.log("Results:");
    console.log("Your Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
  }
  
  function logRound(getHumanChoice, getComputerChoice, winner, round) {
    console.log("Round:", round);
    console.log("You Chose:", getHumanChoice);
    console.log("Computer Chose:", getComputerChoice);
    console.log(winner, "the round");
    console.log("-------------------------------");
  }

  game();