const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button') //picks all the buttons
let userChoice
let computerChoice
let result


possibleChoices.forEach(x => x.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice //on each click, the user choice inner html is updated 
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: computerChoice  = 'rock' 
        break;
        case 1: computerChoice = 'scissors' 
        break;
        case 2: computerChoice = 'paper' 
        break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = `it's a draw!`
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result =`you win!`
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result =`you lost!`
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result =`you lost!`
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result =`you win!`
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result =`you lost!`
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result =`you win!`
    }
}