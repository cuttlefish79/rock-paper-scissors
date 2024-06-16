// create a function that returns either "rock", "paper" or "scissors"

// IF number === 0
//    return "rock"
// ELSE IF number === 1
//    return "paper"
// ELSE IF number === 2
//    return "scissors"

let randomNumber = Math.floor(Math.random() * 3);

function getComputerChoice() {
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

// create a function getHumanChoice

// IF userChoice === "rock"
//    return "rock"

function getHumanChoice() {
  let userChoice = prompt("Choose between rock, paper or scissors: ");
  return userChoice;
}

// declare human/computer score variables

let humanScore = 0;
let computerScore = 0;

// IF getComputersChoice() is "paper" but getHumanChoice() is "rock"
// ADD 1 to computerScore

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    ++computerScore;
    return console.log(`You lose! Scissors beat Rock - 0:${computerScore}`);
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    ++computerScore;
    return console.log(`You lose! Paper beats Rock - 0:${computerScore}`);
  }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
