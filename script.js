let playerScore = 0
let compScore = 0

const rockButton = document.querySelector ('.rock')
const paperButton = document.querySelector ('.paper')
const scissorsButton = document.querySelector ('.scissors')
const resultDiv = document.querySelector ('.result')
const playerScoreSpan = document.querySelector ('.player-score')
const computerScoreSpan = document.querySelector ('.computer-score')

const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"]
  const randomNum = Math.floor(Math.random()*choices.length)
  return choices[randomNum]
}

const playRound = (playerSelection, computerSelection) =>  {
  const p = document.createElement ('p') 
    if (playerSelection === computerSelection) {
      p.innerText = "Tied"
      resultDiv.appendChild(p)
    } else if (
      (playerSelection === "rock" && computerSelection == "scissors") ||
      (playerSelection === "paper" && computerSelection == "rock") ||
      (playerSelection === "scissors" && computerSelection == "paper")
    ) {
      p.innerText = "You won"
      resultDiv.appendChild(p)
      playerScore++
    } else {
      p.innerText = "Computer won"
      resultDiv.appendChild(p)
      compScore++
    }
  }

  const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Your score ${playerScore}`
    computerScoreSpan.innerText = `Computer score ${computerScore}`
  }

rockButton.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})

  const checkForWinner = (playerScore, computerScore) => {
    const h2 = document.createElement('h2')
    if (playerScore === 5){
      h2.classList.add('player-won')
      h2.innerText = `You Won ${playerScore} to ${computerScore}`
    } 
    if (computerScore === 5) {
      h2.classList.add('computer-won')
      h2.innerText = `You lost ${playerScore} to ${computerScore}`
    }
    resultDiv.append(h2)
  }
