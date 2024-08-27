

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses : 0,
    ties: 0

};

// Reusing update score func
updateScoreElement()

/*
if (!score) {
    score = {
        wins: 0,
        losses : 0,
        ties: 0

    };
}
*/
let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {


//};

function autoPlay(){
    if (!isAutoPlaying){

        intervalId = setInterval(() =>{
            const playerMove = pickComputerMove();
            playGame(playerMove);
    
        }, 1000);   

        isAutoPlaying = true;
    }   
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

//Event listeners

document.querySelector('.js-rock-button')
            .addEventListener('click', () => {
                playGame('rock');
            });

document.querySelector('.js-paper-button')
            .addEventListener('click', () => {
                playGame('paper');
            });

document.querySelector('.js-scissors-button')
            .addEventListener('click', () => {
                playGame('scissors');
            });

document.querySelector('.js-reset-button')
            .addEventListener('click', () => {
                score.wins = 0; score.losses = 0; score.ties = 0;
                 localStorage.removeItem('score'); 
                 updateScoreElement();
            });

document.querySelector('.js-autoplay-button')
            .addEventListener('click', () => {
                autoPlay();
            });
           

//Event listeners with a keydown

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r'){
        playGame('rock');

    } else if (event.key === 'p'){
        playGame('paper');
    } else if (event.key === 's'){
        playGame('scissors')
    }
});
            
// Function 1
function playGame(playerMove) {

const computerMove = pickComputerMove();
let result = '';

if (playerMove === 'scissors'){

    if (computerMove === 'rock') {
        result = 'You lose';
    }

    else if (computerMove === 'paper'){
        result = 'You win';
    }

    else if (computerMove === 'scissors'){
        result = 'You Tie';
    }
}

else if (playerMove === 'paper'){
        if (computerMove === 'rock') {
             result = 'You win';
             }

        else if (computerMove === 'paper'){
            result = 'You Tie';
                 }

        else if (computerMove === 'scissors'){
            result = 'You lose';
                 }
}

else if (playerMove == 'rock'){
        if (computerMove === 'rock') {
                result = 'Tie';
            }

        else if (computerMove === 'paper'){
                result = 'You lose';
                }

        else if (computerMove === 'scissors'){
                 result = 'You win';
    }
}

if (result === 'You win'){
    score.wins += 1;
    }
else if (result === 'You lose'){
    score.losses += 1;
}
else if (result === 'Tie') {
    score.ties += 1;
}

// Save value/score in local storage only support strings
localStorage.setItem('score', JSON.stringify(score));

// Reusing update score func
updateScoreElement()



document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You 
<img src="img/${playerMove}-emoji.png" class="move-icon">
<img src="img/${computerMove}-emoji.png" class="move-icon"> 
Computer`;

}

//Function Update scores in html body

function updateScoreElement(){

document.querySelector('.js-score')
.innerHTML = `Wins : ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;


}

// Function 2
function pickComputerMove(){

let computerMove = '';

const randomNumber = Math.random();
                
    if (randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'rock';
    }
        
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'paper';
    }
        
    else if (randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
}
