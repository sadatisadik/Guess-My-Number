'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const valueReset = function() {
    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no input
    if (!guess) {
        displayMessage('🚫 No number!');
    //When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('.number').style.width = '30rem';
        
    //When the guess is wrong
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';

            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    valueReset();
});