const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Invalid choice');
    }
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
  
    if (randomNumber === 0) return 'rock';
    else if (randomNumber === 1) return 'paper';
    else if (randomNumber === 2) return 'scissors';
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'There was a tie';
    } 
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') return 'Computer won!';
      else return 'User won';
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') return 'Computer won' 
      else return 'User won'
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'paper') return 'User won';
      else return 'Computer won'
    }
    
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();