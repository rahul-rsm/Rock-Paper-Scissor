const yourScore = document.querySelector('#your-score');
const computerScore = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('button');
const ResetBtn = document.querySelector('.reset')

let your_choice = '';
let computer_choice = '';

function computerChoice() {
  const choice = ['✊', '✋', '✌'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choice[randomChoice];
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    your_choice = button.innerText;
    computer_choice = computerChoice();
    console.log(your_choice);
    console.log(computer_choice);
    const result = findWinner();
    if(result == 'you win!!!'){
        yourScore.innerText = parseInt(yourScore.innerText) + 1;
        alert('you win!!')
    }else if (result == 'you lose!!!'){
        computerScore.innerText = parseInt(computerScore.innerText) + 1;
        alert('you lose!!')
    } else if(result == 'It is tie!!!'){
        yourScore.innerText = parseInt(yourScore.innerText) 
        computerScore.innerText = parseInt(computerScore.innerText) 
        alert('it is tie')
    }
  });
});

function findWinner() {
  let result = '';
  if (your_choice == computer_choice) {
    result = 'It is tie!!!';
  } else if (your_choice == '✊' && computer_choice == '✋') {
    result = 'you lose!!!';
  } else if (your_choice == '✊' && computer_choice == '✌') {
    result = 'you win!!!';
  } else if (your_choice == '✋' && computer_choice == '✌') {
    result = 'you lose!!!';
  } else if (your_choice == '✋' && computer_choice == '✊') {
    result = 'you win!!!';
  } else if (your_choice == '✌' && computer_choice == '✊') {
    result = 'you lose!!!';
  } else if (your_choice == '✌' && computer_choice == '✋') {
    result = 'you win!!!';
  }
  return result;
}

ResetBtn.addEventListener('click', ()=>{
    yourScore.innerText = 0;
    computerScore.innerText =0;
})