function playGame() {
  // return "rock", "paper" or "scissors" based on random number returned by randomNumber (0-2)
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

  // return user choice
  function getHumanChoice() {
    return (userChoice = prompt("Choose between rock, paper or scissors: "));
  }
  
  // human/computer score count
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // rock vs scissors/paper
    if (humanChoice === computerChoice) {
      return console.log(`Draw! ${humanScore}:${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      ++humanScore;
      return console.log(`You win! Rock beats scissors - ${humanScore}:${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      ++computerScore;
      return console.log(`You lose! Rock loses to paper - ${humanScore}:${computerScore}`);
      // paper vs rock/scissors
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      ++humanScore;
      return console.log(`You win! Paper beats rock - ${humanScore}:${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      ++computerScore;
      return console.log(`You lose! Paper loses to scissors - ${humanScore}:${computerScore}`);
      // scissors vs rock/paper
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      ++computerScore;
      return console.log(
        `You lose! Scissors lose to rock - ${humanScore}:${computerScore}`
      );
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      ++humanScore;
      return console.log(`You win! Scissors beat paper ${humanScore}:${computerScore} `);
    }
  }

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice)

}

playGame()

