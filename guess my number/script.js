'use strict';
//initial values and generating a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

//often used pieces of code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const changeBackground = function (colour) {
  document.querySelector('body').style.backgroundColor = colour;
};

//--------------------------------------------
//The game itself: check window
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there's no input
  if (!guess) {
    displayMessage('write a number please');
  }

  //when player guesses(wins)
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    changeBackground('#60b347');

    //setting highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //when played doesn't guess
  else if (guess !== secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;

    if (score <= 0) {
      displayMessage('you loose!');
      changeBackground('#800000');
    } else if (guess > secretNumber) {
      displayMessage('too high');
    } else if (guess < secretNumber) {
      displayMessage('too low');
    }
  }
});

//------------------------------------
//reseting the game with Again button
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('start guessing!');
  changeBackground('#222');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
});
