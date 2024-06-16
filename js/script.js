// declare a function that returns either "rock", "paper" or "scissors"

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
    return "paper";
  }
}

getComputerChoice()

