'use strict';

let highscore = 0;
let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.submit').addEventListener('click', function (event) {
  event.preventDefault();
  const guess = Number(document.querySelector('.guess-Input').value);

  if (!guess) {
    document.querySelector('.guss-bar').textContent = '⛔ No Number!';
  } else if (guess === number) {
    document.querySelector('.guss-bar').textContent = 'correct number';
    document.body.style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.guss-bar').textContent = 'Too high';
      score--;
      document.querySelector('.score span').textContent = score;
    } else {
      document.querySelector('.guss-bar').textContent = 'You failed';
      document.querySelector('.score span').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.guss-bar').textContent = 'Too small';
      score--;
      document.querySelector('.score span').textContent = score;
    } else {
      document.querySelector('.guss-bar').textContent = 'You failed';
      document.querySelector('.score span').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score span').textContent = score;
  document.querySelector('.guss-bar').textContent = 'Start guessing...';
  document.querySelector('.guess-Input').value = '';
  document.body.style.backgroundColor = '#be7f7f';
  document.querySelector('.guess-mynumber').textContent = '?';
});
