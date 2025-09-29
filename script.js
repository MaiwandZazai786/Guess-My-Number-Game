'use strict';

const secretNumber = Math.floor(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let currentScore = 20;
const score = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
 
checkBtn.onclick = () => {
    const userGuess = Number(document.querySelector('.guess').value);
    if (userGuess > secretNumber)
    {
        message.textContent = 'Too High';
        currentScore--;
        score.textContent = currentScore;
    }
    else if (userGuess < secretNumber)
    {
        message.textContent = 'Too Low';
         currentScore--;
        score.textContent = currentScore;
    }
    else {
        message.textContent = 'Right number! you Win...🥳';
    }
}

