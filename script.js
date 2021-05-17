'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 2;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// document.querySelector('.number').textContent = '?';

// const message = function (msg) {
//   document.querySelector('.message').textContent = msg;
// };

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   message('Start Guessing...');
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.guess').value = ' ';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
// });

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     message('No Number !');
//   } else if (guess == secretNumber) {
//     message('Correct Number 🎉');
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (score > 1) {
//     message(guess > secretNumber ? 'Two High ❗❗' : 'Two Low ❕❕');
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     message('You lost the Game ☹');
//     document.querySelector('.score').textContent = '0';
//   }
// });

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const message = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  message('Start Guessing..');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});

document.querySelector('.check').addEventListener('click', function () {
  var guess = document.querySelector('.guess').value;

  if (guess == secretNumber) {
    message('Congratulations 🎉 You Won!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score > 1) {
    message(guess > secretNumber ? 'Too High ❗❗' : 'Too Low ❕❕');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    message('Oops ☹ You Lost');
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#ff0000';
    document.querySelector('.number').textContent = secretNumber;
  }
});
