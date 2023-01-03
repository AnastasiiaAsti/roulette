/*----- constants -----*/

const WHEEL = document.getElementById('wheel');
const BALL_TRACK = document.getElementsByClassName('ballTrack');
const BETTING_BOARD = document.getElementById('board');
const WINNENG_NUMBER = document.getElementById('wheelNumber');

/*----- app's state (variables) -----*/

let wheelnumbers = [0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32];

let betNumber = []

/*----- event listeners -----*/
BETTING_BOARD.addEventListener('click', handleClick)

function handleClick(evt) {
    console.log(evt.target)
}

/*----- functions -----*/