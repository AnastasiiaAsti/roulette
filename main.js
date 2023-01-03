/*----- constants -----*/

const WHEEL = document.getElementById('wheel');
const BALL_TRACK = document.getElementsByClassName('ballTrack');
const BETTING_BOARD = document.getElementById('board');
const WINNING_NUMBER = document.getElementById('wheelNumber');
const SPIN_BTN = document.getElementById('spin_btn');

/*----- app's state (variables) -----*/

let numRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let wheelnumbers = [0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32];

let betNumber = []

/*----- event listeners -----*/
BETTING_BOARD.addEventListener('click', handleClick);
SPIN_BTN.addEventListener('click', spin);

function handleClick(evt) {
    console.log(evt.target)
}

function handleSpinClick() {
    console.log('clicked')
}

/*----- functions -----*/

function spin() {
    let winningSpin = Math.floor(Math.random() * 36)
    // spinWheel(winningSpin);
    setTimeout(function () {
        console.log(winningSpin)
        WINNING_NUMBER.innerHTML = winningSpin
    }, 1000);
}