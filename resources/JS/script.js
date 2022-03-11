//  indicate that the code should be executed in "strict mode"
"use strict";  
// Declares and sets the initial score of player and bot to 0
let playerScore = 0;
let botScore = 0;

// Query selector - returns the first Element within the document that matches the specified selector  
const playerScore_txt = document.querySelector(".player-score");  // links to the div with current player score
const botScore_txt = document.querySelector(".bot-score"); // links to the div with current bot score
const rock_btn = document.querySelector(".rock"); // links to the button with class rock
const paper_btn = document.querySelector(".paper"); // links to the button with class paper
const scissors_btn = document.querySelector(".scissors"); // links to the button with class scissors
const lizard_btn = document.querySelector(".lizard"); // links to the button with class lizard
const spock_btn = document.querySelector(".spock"); // links to the button with class spock
const mess = document.querySelector(".message");  // selects the div with text content MAKE YOUR MOVE
const playerImg = document.querySelector(".player-pic"); // selects the img tag with player icon
const botImg = document.querySelector(".bot-pic"); // selects the img tag with bot icon
let round = 1;
let max = 1;

playerImg.src = "user.png";
botImg.src = "bot.png";
function getCompChoice() {
  // Each choice corresponds to each option ie r - rock, p - paper ....
  const choices = ["r", "p", "s", "l", "o"]; 
  // Math.random generate a random number which is multiplied with array length and floored to get a random index
  return choices[Math.floor(Math.random() * 5)];
}

// Starting of jQuery
$(document).ready(function () {
    // Displays the modal on loading of the document 
  $("#loadModal").modal("show");
});

document.getElementById("gotit").onclick = function () {
  var radios = document.getElementsByName("test");
  for (var radio of radios) {
    if (radio.checked) {
      max = radio.value;
    }
  }
};

function game(userChoice) {           // game begins on player choice
  if (round <= max) {                 // if round < max number of rounds game runs
    const botChoice = getCompChoice(); // bot gets a random choice
    switch (userChoice + botChoice) {  // concatinating userchoice with bot choice

      /*
        playerImg.src    --> represent img of choice made by user
        botImg.src       --> represent img of random choice made by bot
        mess.textContent --> represent the main text area where results are displayed
        
        
        if bot wins            : botScore += 1;
        else if user wins      : playerScore += 1;
        else (in case of draw) : no score increment
      */

      // -- CASES WITH BOT AND USER PICKING DIFFERENT OPTIONS --
      // user - rock, bot - scissors
      case "rs":
        playerImg.src = "rock.png";
        botImg.src = "scissors.png";
        mess.textContent = "ROCK BEATS SCISSORS";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;

        // user - rock, bot - lizard
      case "rl":
        mess.textContent = "ROCK BEATS LIZARD";
        playerImg.src = "rock.png";
        botImg.src = "lizard.png";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
        // user - paper, bot - spock
      case "po":
        playerImg.src = "paper.png";
        botImg.src = "spock.png";
        mess.textContent = "PAPER BEATS SPOCK";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
        // user - paper, bot - rock
      case "pr":
        playerImg.src = "paper.png";
        botImg.src = "rock.png";
        mess.textContent = "PAPER BEATS ROCK";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
        // user - rock, bot - scissors
      case "sl":
        playerImg.src = "scissors.png";
        botImg.src = "lizard.png";
        mess.textContent = "SCISSORS BEATS LIZARD";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
        // user - scissors, bot - paper
      case "sp":
        playerImg.src = "scissors.png";
        botImg.src = "paper.png";
        mess.textContent = "SCISSORS BEATS PAPER";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
        // user - spock, bot - scissors
      case "os":
        playerImg.src = "spock.png";
        botImg.src = "scissors.png";
        mess.textContent = "SPOCK BEATS SCISSORS";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
        // user - spock, bot - rock
      case "or":
        playerImg.src = "spock.png";
        botImg.src = "rock.png";
        mess.textContent = "SPOCK BEATS ROCK";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
        // user - lizard, bot - spock
      case "lo":
        playerImg.src = "lizard.png";
        botImg.src = "spock.png";
        mess.textContent = "LIZARD BEATS SPOCK";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
        // user - lizard, bot - paper
      case "lp":
        playerImg.src = "lizard.png";
        botImg.src = "paper.png";
        mess.textContent = "LIZARD BEATS PAPER";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");

        // console.log("USER WINS");
        break;
        // user - scissors, bot - rock
      case "sr":
        playerImg.src = "scissors.png";
        botImg.src = "rock.png";
        mess.textContent = "ROCK BEATS SCISSORS";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - lizard, bot - rock
      case "lr":
        playerImg.src = "lizard.png";
        botImg.src = "rock.png";
        mess.textContent = "ROCK BEATS LIZARD";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - spock, bot - paper
      case "op":
        playerImg.src = "spock.png";
        botImg.src = "paper.png";
        mess.textContent = "PAPER BEATS SPOCK";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - rock, bot - paper
      case "rp":
        playerImg.src = "rock.png";
        botImg.src = "paper.png";
        mess.textContent = "PAPER BEATS ROCK";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - lizard, bot - scissors
      case "ls":
        playerImg.src = "lizard.png";
        botImg.src = "scissors.png";
        mess.textContent = "SCISSORS BEATS LIZARD";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - paper, bot - scissors
      case "ps":
        playerImg.src = "paper.png";
        botImg.src = "scissors.png";
        mess.textContent = "SCISSORS BEATS PAPER";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - scissors, bot - spock
      case "so":
        playerImg.src = "scissors.png";
        botImg.src = "spock.png";
        mess.textContent = "SPOCK BEATS SCISSORS";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - rock, bot - spock
      case "ro":
        playerImg.src = "rock.png";
        botImg.src = "spock.png";
        mess.textContent = "SPOCK BEATS ROCK";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - spock, bot - lizard
      case "ol":
        playerImg.src = "spock.png";
        botImg.src = "lizard.png";
        mess.textContent = "LIZARD BEATS SCISSORS";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
        // user - paper, bot - lizard
      case "pl":
        playerImg.src = "paper.png";
        botImg.src = "lizard.png";
        mess.textContent = "LIZARD BEATS PAPER";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;

        // -- CASES WITH BOT AND USER PICKING SAME OPTIONS --
        // user - rock, bot - rock
      case "rr":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "rock.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");

        break;
        // user - paper, bot - paper
      case "pp":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "paper.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        break;
        // user - scissors, bot - scissors
      case "ss":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "scissors.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        break;
        // user - spock, bot - spock
      case "oo":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "spock.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        break;
        // user - lizard, bot - lizard
      case "ll":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "lizard.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        break;
    }
    document.querySelector(".timer").textContent = `ROUND ${round}`;
  }

  // condition when player score is more than bot score
  if (playerScore === Math.floor(max / 2) + 1) {
    document.querySelector(".modal-body").textContent = "YOU WIN";
    document
      .querySelector(".modal-body")
      .setAttribute("style", "color:rgb(25, 235, 43);;");
    $("#secModal").modal();
  }
  //  condition when player score is less than bot score
  else if (botScore === Math.floor(max / 2) + 1) {
    document.querySelector(".modal-body").textContent = "YOU LOSE";
    document
      .querySelector(".modal-body")
      .setAttribute("style", "color:rgb(240, 6, 6);;");
    $("#secModal").modal();
  }

  // Ending game when round goes beyond maximum selected number of rounds
  if (round > max) {
    document.querySelector(".timer").textContent = "GAME OVER";
    if (playerScore === Math.floor(max / 2) + 1) {
      document.querySelector(".modal-body").textContent = "YOU WIN";
      document
        .querySelector(".modal-body")
        .setAttribute("style", "color:rgb(25, 235, 43);;");
    } else if (botScore === Math.floor(max / 2) + 1) {
      document.querySelector(".modal-body").textContent = "YOU LOSE";
      document
        .querySelector(".modal-body")
        .setAttribute("style", "color:rgb(240, 6, 6);;");
    }
    $("#secModal").modal();
  }
  document.querySelector(".right").setAttribute("style", "top: 30%;");
}

// Define user choice functionality to choose out of rock paper scissors spock and lizard 
function main() {
  rock_btn.addEventListener("click", function () {
    game("o");
  });
  paper_btn.addEventListener("click", function () {
    game("r");
  });
  scissors_btn.addEventListener("click", function () {
    game("p");
  });
  lizard_btn.addEventListener("click", function () {
    game("l");
  });
  spock_btn.addEventListener("click", function () {
    game("s");
  });
}
// Invoking main function
main();
