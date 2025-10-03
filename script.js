'use strict';

let currentScore = 20;
let secretNumber = Math.floor(Math.random() * 20 + 1);
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const bodyElemetn = document.querySelector('body');
const number = document.querySelector('.number');

const checkBtn = document
  .querySelector('.check')
  .addEventListener('click', () => {
    const userGuess = Number(document.querySelector('.guess').value);
    if (!userGuess) {
      message.textContent = 'No Number ⛔';
    } else {
      if (userGuess > secretNumber) {
        message.textContent = 'Too High 💹';
        currentScore--;
        score.textContent = currentScore;
      } else if (userGuess < secretNumber) {
        message.textContent = 'Too Low 💹';
        currentScore--;
        score.textContent = currentScore;
      } else {
        message.textContent = 'Correct Number! 🥳';
        bodyElemetn.style.backgroundColor = 'green';
        number.textContent = secretNumber;
      }
    }
  });

const again = document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  currentScore = 20;
  bodyElemetn.style.backgroundColor = '#222';
  number.textContent = '?';
  score.textContent = currentScore;
});

// checkBtn.onclick = () => {
//   const userGuess = Number(document.querySelector('.guess').value);
//   if (userGuess > secretNumber) {
//     message.textContent = 'Too High';
//     currentScore--;
//     score.textContent = currentScore;
//   } else if (userGuess < secretNumber) {
//     message.textContent = 'Too Low';
//     currentScore--;
//     score.textContent = currentScore;
//   } else {
//     message.textContent = 'Correct Number! 🥳';
//     bodyElemetn.style.backgroundColor = 'green';
//     number.textContent = secretNumber;
//   }
// };

// again.onclick = () => {
//   message.textContent = 'Start guessing...';
//   currentScore = 20;
//   bodyElemetn.style.backgroundColor = '#222';
//   number.textContent = '';
//   score.textContent = currentScore;
// };
