//Random number between 0-2 to select an item from the array
let randomNumber1 = Math.floor(Math.random() * 3)
let randomNumber2 = Math.floor(Math.random() * 3)

//The game array
let gameChoices = ['Rock', 'Paper', 'Scissors']

//Random selection of choices
let playerOne = gameChoices[randomNumber1]
let computerPlayer = gameChoices[randomNumber2]

//Game logic
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

//Selecting the button via the DOM
let button = document.querySelector('button');

//Assigning values to the main elements for choices
let pOne = document.querySelector('#p-one')
pOne.innerHTML = playerOne
let cptr = document.querySelector('#cpu')
cptr.innerHTML = computerPlayer


