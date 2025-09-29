'use strict';

const secretNumber = Math.floor(Math.random() * 20 + 1);
const message = document.querySelector('.message');
let currentScore = 20;
const score = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const bodyElemetn = document.querySelector('body');
const number = document.querySelector('.number');

checkBtn.onclick = () => {
  const userGuess = Number(document.querySelector('.guess').value);
  if (userGuess > secretNumber) {
    message.textContent = 'Too High';
    currentScore--;
    score.textContent = currentScore;
  } else if (userGuess < secretNumber) {
    message.textContent = 'Too Low';
    currentScore--;
    score.textContent = currentScore;
  } else {
    message.textContent = 'Correct Number! 🥳';
    bodyElemetn.style.backgroundColor = 'green';
    number.textContent = secretNumber;
  }
};
