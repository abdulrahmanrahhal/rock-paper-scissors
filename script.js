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
    if(playerSelection === computerSelection){
        score.innerHTML = `${playerScore} : ${computerScore}`
        resultDiv.innerHTML +=  `<span style="color: var(--yellow); display: inline;">It's a tie! ${playerSelection} and ${computerSelection}</span>`;
}
    else if((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")){
        computerScore++;
        score.innerHTML = `${playerScore} : ${computerScore}`
        resultDiv.innerHTML += `<span style="color: var(--red); display: inline;">You Lose! ${computerSelection} beats ${playerSelection}</span>`;
    }
    else{
        playerScore++;
        score.innerHTML = `${playerScore} : ${computerScore}`
        resultDiv.innerHTML += `<span style="color: var(--green); display: inline;">You Win! ${playerSelection} beats ${computerSelection}</span> `;
    }
}
const resultDiv = document.querySelector('.result-pane');
const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score-div');

let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice())
        if(playerScore === 5 || computerScore === 5){
            if(playerScore === 5){
            playerScore = 0;
            computerScore = 0;
            resultDiv.innerHTML = `<br>Congratulations🎉.. You Win`;
            }
            else{
            computerScore = 0;
            playerScore = 0;
            resultDiv.innerHTML = `<br>You Lose`;
            }
        }
    })
})