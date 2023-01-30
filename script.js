function getComputerChoice(){
    let randomNum = Math.floor((Math.random() * 3));
    if(randomNum === 0)
        return "rock";
    else if(randomNum === 1)
        return "paper";
    else
        return "scissors";
    }
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection)
        resultDiv.innerHTML =  `<br>It's a tie! ${playerSelection} and ${computerSelection}<br> Score: ${playerScore}:${computerScore}`;
    else if((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")){
        computerScore++;
        resultDiv.innerHTML = `<br>You Lose! ${computerSelection} beats ${playerSelection}<br> Score: ${playerScore}:${computerScore}`;
    }
    else{
        playerScore++;
        resultDiv.innerHTML = `<br>You Win! ${playerSelection} beats ${computerSelection}<br> Score: ${playerScore}:${computerScore}`;
    }
}
const resultDiv = document.querySelector('div');
const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice())
        if(playerScore === 5 || computerScore === 5){
            if(playerScore === 5)
            resultDiv.innerHTML = `<br>Congratulations🎉.. You Win`;
            else
            resultDiv.innerHTML = `<br>You Lose`;
            playerScore = 0;
            computerScore = 0;
        }
    })
})
