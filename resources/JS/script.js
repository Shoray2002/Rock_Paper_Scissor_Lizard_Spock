"use strict";
let playerScore = 0;
let botScore = 0;
const playerScore_txt = document.querySelector(".player-score");
const botScore_txt = document.querySelector(".bot-score");
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const lizard_btn = document.querySelector(".lizard");
const spock_btn = document.querySelector(".spock");
const mess = document.querySelector(".message");
const playerImg = document.querySelector(".player-pic");
const botImg = document.querySelector(".bot-pic");
let round = 1;
let max = 1;

playerImg.src = "user.png";
botImg.src = "bot.png";
function getCompChoice() {
  const choices = ["r", "p", "s", "l", "o"];
  return choices[Math.floor(Math.random() * 5)];
}

$(document).ready(function () {
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

function game(userChoice) {
  if (round <= max) {
    const botChoice = getCompChoice();
    switch (userChoice + botChoice) {
      case "rs":
        round++;
        playerImg.src = "rock.png";
        botImg.src = "scissors.png";
        mess.textContent = "ROCK BEATS SCISSORS";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;

      case "rl":
        round++;
        mess.textContent = "ROCK BEATS LIZARD";
        playerImg.src = "rock.png";
        botImg.src = "lizard.png";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
      case "po":
        round++;
        playerImg.src = "paper.png";
        botImg.src = "spock.png";
        mess.textContent = "PAPER BEATS SPOCK";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
      case "pr":
        round++;
        playerImg.src = "paper.png";
        botImg.src = "rock.png";
        mess.textContent = "PAPER BEATS ROCK";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
      case "sl":
        round++;
        playerImg.src = "scissors.png";
        botImg.src = "lizard.png";
        mess.textContent = "SCISSORS BEATS LIZARD";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
      case "sp":
        round++;
        playerImg.src = "scissors.png";
        botImg.src = "paper.png";
        mess.textContent = "SCISSORS BEATS PAPER";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
      case "os":
        round++;
        playerImg.src = "spock.png";
        botImg.src = "scissors.png";
        mess.textContent = "SPOCK BEATS SCISSORS";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
      case "or":
        round++;
        playerImg.src = "spock.png";
        botImg.src = "rock.png";
        mess.textContent = "SPOCK BEATS ROCK";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
      case "lo":
        round++;
        playerImg.src = "lizard.png";
        botImg.src = "spock.png";
        mess.textContent = "LIZARD BEATS SPOCK";
        playerScore += 1;
        playerScore_txt.textContent = playerScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:#2cfa2c;");
        break;
      case "lp":
        round++;
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
      case "sr":
        round++;
        playerImg.src = "scissors.png";
        botImg.src = "rock.png";
        mess.textContent = "ROCK BEATS SCISSORS";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "lr":
        round++;
        playerImg.src = "lizard.png";
        botImg.src = "rock.png";
        mess.textContent = "ROCK BEATS LIZARD";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "op":
        round++;
        playerImg.src = "spock.png";
        botImg.src = "paper.png";
        mess.textContent = "PAPER BEATS SPOCK";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "rp":
        round++;
        playerImg.src = "rock.png";
        botImg.src = "paper.png";
        mess.textContent = "PAPER BEATS ROCK";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "ls":
        round++;
        playerImg.src = "lizard.png";
        botImg.src = "scissors.png";
        mess.textContent = "SCISSORS BEATS LIZARD";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "ps":
        round++;
        playerImg.src = "paper.png";
        botImg.src = "scissors.png";
        mess.textContent = "SCISSORS BEATS PAPER";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "so":
        round++;
        playerImg.src = "scissors.png";
        botImg.src = "spock.png";
        mess.textContent = "SPOCK BEATS SCISSORS";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "ro":
        round++;
        playerImg.src = "rock.png";
        botImg.src = "spock.png";
        mess.textContent = "SPOCK BEATS ROCK";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "ol":
        round++;
        playerImg.src = "spock.png";
        botImg.src = "lizard.png";
        mess.textContent = "LIZARD BEATS SCISSORS";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;
      case "pl":
        round++;
        playerImg.src = "paper.png";
        botImg.src = "lizard.png";
        mess.textContent = "LIZARD BEATS PAPER";
        botScore += 1;
        botScore_txt.textContent = botScore;
        document
          .querySelector(".message")
          .setAttribute("style", "background:red;");
        break;

      case "rr":
        round = round;
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "rock.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");

        break;
      case "pp":
        round = round;
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "paper.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        break;
      case "ss":
        round = round;
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "scissors.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        break;
      case "oo":
        round = round;
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "spock.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        break;
      case "ll":
        round = round;
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "lizard.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        break;
    }
    document.querySelector(".timer").textContent = `ROUND ${round}`;
  }
  if (playerScore === Math.floor(max / 2) + 1) {
    document.querySelector(".modal-body").textContent = "YOU WIN";
    document
      .querySelector(".modal-body")
      .setAttribute("style", "color:rgb(25, 235, 43);;");
    $("#secModal").modal();
  } else if (botScore === Math.floor(max / 2) + 1) {
    document.querySelector(".modal-body").textContent = "YOU LOSE";
    document
      .querySelector(".modal-body")
      .setAttribute("style", "color:rgb(240, 6, 6);;");
    $("#secModal").modal();
  }

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

main();
