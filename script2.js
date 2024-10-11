/*const products = {
  name: "Bella",
  price: "100",
};

products.name = "Fine Bella";
products.newProperty = "Nice";
delete products.newProperty;

console.log(products.name);
console.log(products);
console.log(products.price);
*/
const yourName = prompt("What is your Name?");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetBtn = document.getElementById("reset-btn");
const displayScore = document.querySelector(".score");
const displayResult = document.querySelector(".result");
const displayMoves = document.querySelector(".moves");

/*const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};*/ //Outside because we need it to update the scores

rockBtn.addEventListener("click", forRock);
paperBtn.addEventListener("click", forPaper);
scissorsBtn.addEventListener("click", forScissors);
resetBtn.addEventListener("click", resetScore);
let computerMove = ""; //Global Variables (can be used anywhere)
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScore();
/*
if (!score) {
  /score === null/ score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}*/
/*
function playGame(playerMove) {
  pickComputerMove();
  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You lose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissors") {
      result = "You win";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  displayResult.innerHTML = result;
  displayMoves.innerHTML = ` You
      <img src="images/${playerMove}.png" class="move-icon" />
      <img src="images/${computerMove}.png" class="move-icon" alt="move-icon" />
      Computer`;
  /*  alert(
    `You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties} `
  );*/
//}

function playGame(playerMove) {
  pickComputerMove();
  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = `${yourName} Lose`;
    } else if (computerMove === "paper") {
      // result = "You win";
      result = `${yourName} Wins`;
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = `${yourName} Wins`;
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = `${yourName} Lose`;
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = `${yourName} Lose`;
    } else if (computerMove === "scissors") {
      result = `${yourName} Wins`;
    }
  }

  if (result === `${yourName} Wins`) {
    score.wins += 1;
  } else if (result === `${yourName} Lose`) {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  displayResult.innerHTML = result;
  displayMoves.innerHTML = ` ${yourName}
      <img src="images/${playerMove}.png" class="move-icon" />
      <img src="images/${computerMove}.png" class="move-icon" alt="move-icon" />
      Computer`;
  /*  alert(
    `You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties} `
  );*/
}

function updateScore() {
  displayScore.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} 
  Ties: ${score.ties} `;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  // let computerMove = ""; //Global Variables (can be used anywhere)

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
  // console.log("Good day");
}

function forRock() {
  playGame("rock");
}

function forPaper() {
  playGame("paper");
}

function forScissors() {
  playGame("scissors");
}

function resetScore() {
  // alert("This will reset your score");
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScore();
}
