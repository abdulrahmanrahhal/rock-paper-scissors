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
        resultDiv.textContent =  `It's a tie! ${playerSelection} and ${computerSelection}`;
    else if((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper"))
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    else
        resultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
}
const resultDiv = document.querySelector('div');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice())
    })
})