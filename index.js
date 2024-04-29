let randomNumber1 = Math.floor(Math.random() * 3)
let randomNumber2 = Math.floor(Math.random() * 3)

let gameChoices = ['Rock', 'Paper', 'Scissors']
let playerOne = gameChoices[randomNumber1]
let computerPlayer = gameChoices[randomNumber2]

if (playerOne === computerPlayer) {
    document.querySelector('.tag').innerHTML = 'Draw, Play Again!';
} else if (playerOne === 'Rock' && computerPlayer === 'Scissors') {
    document.querySelector('.tag').innerHTML = 'Player One Wins!';
} else if (playerOne === 'Paper' && computerPlayer === 'Rock') {
    document.querySelector('.tag').innerHTML = 'Player One Wins!'
} else if (playerOne === 'Scissors' && computerPlayer === 'Paper') {
    document.querySelector('.tag').innerHTML = 'Player One Wins!'
} else {
    document.querySelector('.tag').innerHTML = 'Computer Wins!'
}

let button = document.querySelector('button');

let pOne = document.querySelector('#p-one')
pOne.innerHTML = playerOne

let cptr = document.querySelector('#cpu')
cptr.innerHTML = computerPlayer


