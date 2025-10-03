'use strict';

let currentScore = 20;
let secretNumber = Math.floor(Math.random() * 20 + 1);
let alreadyGuessed = false;
let Highscore = 0;

const message = get('.message');
const score = get('.score');
const bodyElemetn = get('body');
const number = get('.number');
const highScoreElement = get('.highscore');

const checkBtn = get('.check');

checkBtn.addEventListener('click', () => {
  runApp();
});

get('.guess').addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    runApp();
  }
});

// when the user wants to try again
const again = get('.again').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  alreadyGuessed = false;
  currentScore = 20;

  get('.guess').value = '';
  message.textContent = 'Start guessing...';
  number.style.width = '15rem';
  bodyElemetn.style.backgroundColor = '#222';
  number.textContent = '?';
  score.textContent = currentScore;
});

function runApp() {
  // check if the user already guessed the number
  if (alreadyGuessed) {
    message.textContent = 'You alerdy gussed the number 😋';
  }
  // check if the user has left chances
  else if (currentScore < 1) {
    message.textContent = 'You lost, Game over';
  } else {
    const userGuess = Number(get('.guess').value);
    // when there is no number
    if (!userGuess) {
      message.textContent = 'No Number ⛔';
    } else {
      // when the userGuess is too high
      if (userGuess > secretNumber) {
        message.textContent = 'Too High 💹';
        currentScore--;
        score.textContent = currentScore;
        // when the userGuess is to low
      } else if (userGuess < secretNumber) {
        message.textContent = 'Too Low 💹';
        currentScore--;
        score.textContent = currentScore;
      }
      // when the user wins
      else {
        currentScore > Highscore
          ? (Highscore = currentScore)
          : (Highscore = Highscore);

        highScoreElement.textContent = Highscore;
        message.textContent = 'Correct Number! 🥳';
        bodyElemetn.style.backgroundColor = 'green';
        number.textContent = secretNumber;
        number.style.width = '30rem';
        alreadyGuessed = true;
      }
    }
  }
}

function get(target) {
  return document.querySelector(target);
}
