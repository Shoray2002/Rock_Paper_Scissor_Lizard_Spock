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

playerImg.src = "./resources/images/user.png";
botImg.src = "./resources/images/bot.png";
playerImg.style.transform = "rotate(180deg)";
botImg.style.transform = "rotate(180deg)";
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
      round = 1;
    }
  }
};

function game(userChoice) {
  if (round <= max) {
    const botChoice = getCompChoice();
    switch (userChoice + botChoice) {
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

      case "rr":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "rock.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        round--;
        break;
      case "pp":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "paper.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        round--;
        break;
      case "ss":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "scissors.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        round--;
        break;
      case "oo":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "spock.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        round--;
        break;
      case "ll":
        mess.textContent = "DRAW";
        botImg.src = playerImg.src = "lizard.png";
        document
          .querySelector(".message")
          .setAttribute("style", "background:#ed6b20;");
        round--;
        break;
    }
    document.querySelector(".timer").textContent = `ROUND ${++round}`;
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
    game("r");
  });
  paper_btn.addEventListener("click", function () {
    game("p");
  });
  scissors_btn.addEventListener("click", function () {
    game("s");
  });
  lizard_btn.addEventListener("click", function () {
    game("l");
  });
  spock_btn.addEventListener("click", function () {
    game("o");
  });
}

main();
