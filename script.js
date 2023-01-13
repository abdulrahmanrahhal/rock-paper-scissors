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
    console.log(playerSelection);
    if(playerSelection === computerSelection)
        return `It's a tie! ${playerSelection} and ${computerSelection}`;
    else if((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper"))
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    else
        return `You Win! ${playerSelection} beats ${computerSelection}`
}
for (let i = 0; i < 5; i++) {
    const  playerSelection = prompt("Choice Rock, Paper or Scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    // your code here!
}