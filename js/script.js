// Create two random number variables to cycle through Pokemon
let randomNum1 = Math.floor(Math.random() * 12 + 1);
let randomNum2 = Math.floor(Math.random() * 12 + 1);


// Make the random numbers filter through images for both players
document.querySelector('.img-one').setAttribute('src', `img/pokemon${randomNum1}.png`);
document.querySelector('.img-two').setAttribute('src', `img/pokemon${randomNum2}.png`);


// Conditionals to determine which Pokemon wins based on highest random number
if (randomNum1 > randomNum2) {
    document.querySelector('#winner').innerHTML = 'Player One Wins!!';
    document.querySelector('.img-two').classList.add('grayScale');
} else if (randomNum1 < randomNum2) {
    document.querySelector('#winner').innerHTML = 'Player Two Wins!!';
    document.querySelector('.img-one').classList.add('grayScale');
} else {
    document.querySelector('#winner').innerHTML = 'What how is this possible?!, Both Pokemon have fainted.';
    document.querySelector('.img-one').classList.add('grayScale');
    document.querySelector('.img-two').classList.add('grayScale');
}

// Reload Page Button Function
function reloadPage() {
    window.location.reload();
}
