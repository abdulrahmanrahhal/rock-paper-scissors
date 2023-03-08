const gameController = (() => {
  let playerScore = 0;
  let computerScore = 0;
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return 'rock';
    else if (randomNum === 1) return 'paper';
    else return 'scissors';
  };
  const getComputerScore = () => computerScore;
  const getPlayerScore = () => playerScore;

  const checkWinner = () => {
    if (playerScore === 5) {
      displayController.displayWinner('YOU');
      playerScore = 0;
      computerScore = 0;
      return;
    } else if (computerScore === 5) {
      displayController.displayWinner('COMPUTER');
      playerScore = 0;
      computerScore = 0;
      return;
    }
  };
  const playRound = (player) => {
    const computer = getComputerChoice();
    if (
      (computer === 'rock' && player === 'paper') ||
      (computer === 'paper' && player === 'scissors') ||
      (computer === 'scissors' && player === 'rock')
    ) {
      playerScore++;
      displayController.logWin(player, computer);
    } else if (
      (computer === 'rock' && player === 'rock') ||
      (computer === 'paper' && player === 'paper') ||
      (computer === 'scissors' && player === 'scissors')
    ) {
      displayController.logTie(player, computer);
    } else {
      computerScore++;
      displayController.logLose(player, computer);
    }
    checkWinner();
  };
  return {
    getPlayerScore,
    getComputerScore,
    playRound,
  };
})();

const displayController = (() => {
  const buttons = document.querySelectorAll('.btn');
  const resultsList = document.querySelector('.results-list');
  const resultWrapper = document.querySelector('.result-wrapper');
  const score = document.querySelector('.score');
  const winnerPanel = document.querySelector('.winner');

  const cleanResults = () => {
    resultsList.textContent = '';
  };
  const changeBorder = (color) => {
    resultWrapper.style.borderColor = `var(--clr-${color})`;
  };
  const logLose = (player, computer) => {
    changeBorder('red');
    resultsList.innerHTML += `<p>You Lose: You chose ${player} and computer chose ${computer}</p>`;
  };
  const logWin = (player, computer) => {
    changeBorder('green');
    resultsList.innerHTML += `<p>You Win: You chose ${player} and computer chose ${computer}</p>`;
  };
  const logTie = (player, computer) => {
    changeBorder('yellow');
    resultsList.innerHTML += `<p>It is a tie: You chose ${player} and computer chose ${computer}</p>`;
  };
  const updateResult = () => {
    score.textContent = `${gameController.getPlayerScore()} : ${gameController.getComputerScore()}`;
  };
  const displayWinner = (winnerName) => {
    cleanResults();
    winnerPanel.classList.add('show');
    winnerPanel.innerHTML = `<p>${winnerName} IS THE WINNER.</p>`;
    setTimeout(() => {
      winnerPanel.classList.remove('show');
      winnerPanel.textContent = '';
    }, 2000);
  };
  buttons.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      const player = e.target.parentElement.value;
      gameController.playRound(player);
      updateResult();
    })
  );
  return {
    updateResult,
    logWin,
    logLose,
    logTie,
    displayWinner,
  };
})();
