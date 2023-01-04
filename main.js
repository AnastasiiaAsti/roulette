/*----- constants -----*/

const WHEEL = document.getElementById('wheel');
const BALL_TRACK = document.getElementsByClassName('ballTrack');
const BETTING_BOARD = document.getElementById('board');
const WINNING_NUMBER = document.getElementById('wheelNumber');
const SPIN_BTN = document.getElementById('spin_btn');
const WHEEL_NUMS = document.querySelectorAll('.sect span')

/*----- app's state (variables) -----*/

let numRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let wheelnumbers = [0, 32, 15, 19, 5, 21, 2, 25, 17, 34, 6, 27, 14, 36, 11, 30, 8, 23, 10, 5 ,24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

let betNumber = []
let boardNumber = []

/*----- event listeners -----*/
BETTING_BOARD.addEventListener('click', handleClick);
SPIN_BTN.addEventListener('click', spin);

function handleClick(evt) {
    let cell = evt.target;
    let value = cell.getAttribute('value')
    console.log(value)
}

function handleSpinClick() {
    console.log('clicked')
}

/*----- functions -----*/

function setWheel() {
    for (i = 0; i < wheelnumbers.length; i++) {
        let a = i + 1;
        let spanClass = (wheelnumbers[i] < 10) ? 'single' : 'double';
        let sect = document.createElement('div');
        sect.setAttribute('id', 'sect'+a);
        sect.setAttribute('class', 'sect');
        let span = document.createElement('span');
        span.setAttribute('class', spanClass);
        span.innerText = wheelnumbers[i];
        sect.append(span);
        let block = document.createElement('div');
        block.setAttribute('class', 'block');
        sect.append(block);
        WHEEL.append(sect);
    }
}
setWheel()


function spin() {
    let winningSpin = Math.floor(Math.random() * 36)
    // spinWheel(winningSpin);
    setTimeout(function () {
        console.log(winningSpin)
        WINNING_NUMBER.innerHTML = winningSpin
        betNumber.push(winningSpin)
        console.log(betNumber)
    }, 1000);
}

