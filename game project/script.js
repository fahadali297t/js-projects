'use strict';

let num = document.querySelector('.number');
let score_element = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let message = document.querySelector('.message');
let score = Number(score_element.textContent);
let correctNumber = Math.floor(Math.random() * 20 + 1);

document.querySelector('.number').style.width = '30rem';

//  check button logic
let btn = document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);



   //  conditions of game
  if (score > 0) {
    if (guess === 0 || guess >20) {
      message.textContent = 'Please Choose a Number between 1 and 20 ';
      --score;
    } else if (guess === correctNumber) {
      message.textContent = 'Hurray! You Nailed it 🥳';
      document.querySelector("body").style.backgroundColor = "#60b347"; 

      num.textContent = guess;
      --score;
    } else if (guess < correctNumber) {
      message.textContent = 'Too Low';
      --score;
    } else if (guess > correctNumber) {
      message.textContent = 'Too High';
      --score;
    }
  } else {
    message.textContent = 'Game Over 😭';
    document.querySelector("body").style.backgroundColor = "#8E1616"

  }
  score_element.textContent = score;
});

document.querySelector(".again").addEventListener('click' , ()=>{
   correctNumber = Math.floor(Math.random() * 20 + 1);
   message.textContent = 'Start guessing...';
   score = 10
   score_element.textContent = score;
   document.querySelector("body").style.backgroundColor = "#222"; 
   num.textContent = "?";
   document.querySelector('.guess').value = ""
})