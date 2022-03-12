let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".Result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const lizard_div = document.getElementById("Lizard");
const spock_div = document.getElementById("Spock");

function myfunction(){
    userScore=0;
    userScore_span.innerHTML = userScore;
    computerScore=0;
    computerScore_span.innerHTML = computerScore;

}

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l' ,'sp'];
    const randomNumber =(Math.floor(Math.random() * 5));
    return choices[randomNumber];
}

function convert(letter){
   if(letter==="r") return "Rock";
   if(letter==="p") return "Paper";
   if(letter==="s") return "Scissors";
   if(letter==="l") return "Lizard";
   if(letter==="sp") return "Spock";

}

function win (userChoice , computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_div.innerHTML = `${convert(userChoice)}(user) beats ${convert(computerChoice)}(computer).You win!!!`; 
}

function lose( userChoice , computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_div.innerHTML = `${convert(computerChoice)}(computer) beats ${convert(userChoice)}(user).You Lose`; 
}

function draw( userChoice , computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_div.innerHTML = "It's Draw"; 
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch( userChoice + computerChoice){
       case "rs":
       case "pr":
       case "sp":
       case "rl":
       case "spr":
       case "lp":
       case "psp":
       case "sps":
       case "sl":
       case "lsp":        
         win( userChoice , computerChoice);
         break;
       case "rp":
       case "ps":
       case "sr":
       case "lr":
       case "rsp":
       case "pl":
       case "spp":
       case "ssp":
       case "ls":
       case "spl":       
           lose( userChoice , computerChoice);
           break;
       case "rr":
       case "pp":
       case "ss":
       case "ll":
       case "spsp":  
           draw( userChoice , computerChoice);
           break;

   }
}


function main(){
      rock_div.addEventListener('click',function(){
       game("r");
      })

      paper_div.addEventListener('click',function(){
       game("p");
      })

      scissors_div.addEventListener('click',function(){
       game("s");
      })

      lizard_div.addEventListener('click',function(){
        game("l");
       })

       spock_div.addEventListener('click',function(){
        game("sp");
       })
}

main();