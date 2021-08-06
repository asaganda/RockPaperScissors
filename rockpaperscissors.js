let playerChoice
let playerSelection
let gameResult = document.getElementById("game-results");
// let eachRound = document.querySelector('h3');
let cScore = document.querySelector('.computerScore');
let pScore = document.querySelector('.playerScore');

// ask player user for their hand choice
// player chooses hand
const buttonOptions = document.querySelectorAll('.option');
buttonOptions.forEach(a => a.addEventListener('click', function(e){
  playerChoice = e.srcElement.innerHTML; // returns player choice

  // computer choice ready
  let computerSelection = computerPlay();
  playRound(playerChoice, computerSelection);
  gameScore()
  decideWinner(x,y)
}));

function gameScore(){
  cScore.textContent = y;
  pScore.textContent = x;
}

function computerPlay() {
  // create array with the 3 different hand options
  // find a way to pick random index
  // return computer hand output

  let hand = ["rock", "paper", "scissors"]
  let randompick = Math.floor(Math.random()*hand.length);

  return hand[randompick];
  
  // testing if the randompick variable worked
  // console.log(hand[randompick]);
}

// player and computer selection point counters to 
// keep track of who wins each round
let x = 0; // player 
let y = 0; // computer

function playRound(playerSelection, computerSelection) {
  // ask player for choice, make lower case, assign to variable
  // have computer choice ready
  // compare player and computer choices
  
  // compare players hand choice with computer below with logic of game

  //logic of game
  // we have to compare computer to player input
  //scenarios
  //1) if player has rock and computer has scissors OR player has scissors and computer has rock = Rock beats Scissors
  //2) if player has scissors and computer has paper OR player has paper and computer has scissors = Scissors beats Paper
  //3) if player has paper and computer has rock OR player has rock and computer has paper = Paper beats Rock
  //4) if (else) they have same hand = it's a draw

  // break down each if statement comparison even more 
  // so that we can track who wins each round
  // assign point value to player and computer when they win a round

  if ((playerSelection == "rock" && computerSelection == "scissors")) {
    x++;
    return gameResult.appendChild(document.createElement('h3')).innerHTML += "Rock beats Scissors, Player wins!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    y++;
    return gameResult.appendChild(document.createElement('h3')).innerHTML += "Rock beats Scissors, Computer wins!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    x++;
    return gameResult.appendChild(document.createElement('h3')).innerHTML += "Scissors beats Paper, Player wins!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    y++;
    return gameResult.appendChild(document.createElement('h3')).innerHTML += "Scissors beats Paper, Computer wins!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    x++;
    return gameResult.appendChild(document.createElement('h3')).innerHTML += "Paper beats Rock, Player wins!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    y++;
    return gameResult.appendChild(document.createElement('h3')).innerHTML += "Paper beats Rock, Computer wins!";
  } else {
    return gameResult.appendChild(document.createElement('h3')).innerHTML += "It's a draw";
  }
}

function decideWinner(x, y){
  if (x === 5){
    alert("Player wins game!");
    disableButton()
    resetGame()
    
  } else if (y === 5){
    alert("Computer wins game!");
    disableButton()
    resetGame()
  } else {
    return;
  }
}

function disableButton(){
  const choiceButtons = document.querySelectorAll('.option');
  for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = true;
  }
}

function resetGame(){
  // if (x === 5 || y === 5) {
  //   console.log("game reset");
  //   gameResult.getElementByTag(h3).innerHTML = '';
  //   "game over! <button>click here to reset!</button>";
  // }
  gameResult.innerHTML = "game over! <button class='new-game'>click here to reset game!</button>";
  let newGame = document.querySelector('.new-game');
  newGame.addEventListener('click', function(){
    x = 0;
    y = 0;
    pScore.textContent = 0;
    cScore.textContent = 0;
  });
  // gameResult.appendChild(document.createElement('h2')).innerHTML = "Results:";
}