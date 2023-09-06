const computerChoice  = document.getElementById('computer')
const userChoice  = document.getElementById('user')
const result = document.getElementById('result')
const score = document.getElementById('score')
let statuss = false

const allButtons = document.querySelectorAll('button')

allButtons.forEach(x => x.addEventListener('click', buttonClicked))

function buttonClicked(event) {
    userChoiceDisplay(event);
    computerAnswer();
    evaluateResults();
    if (statuss) {
        score.innerText = Number(score.innerText) + 1
    }
    else {
        score.innerText = 0
    }
}

function userChoiceDisplay(e) {
    userChoice.innerText = ` ${e.target.innerText}`   
}

function computerAnswer() {
    number = Math.floor(Math.random() * 3) //0,1,2
    let string
    switch (number) {
        case 0: string = ' rock'
        break;
        case 1: string =  ' paper'
        break;
        case 2: string = ' scissors'
        break
    }
    computerChoice.innerText = string
}

function evaluateResults() {
    comp = computerChoice.innerText
    user = userChoice.innerText
    if (comp === user) {
        result.innerText = ` Tied!`
        statuss = true
    }
    else if (comp === 'rock' && user === 'paper') {
        result.innerText = ` You won!`
        statuss = true
    }
    else if (comp === 'rock' && user === 'scissors') {
        result.innerText = ` You lost!`
        statuss = false
    }
    else if (comp === 'paper' && user === 'rock') {
        result.innerText = ` You lost!`
        statuss = false
    }
    else if (comp === 'paper' && user === 'scissors') {
        result.innerText = ` You won!`
        statuss =  true
    }
    else if (comp === 'scissors' && user === 'paper') {
        result.innerText = ` You lost!`
        statuss = false
    }
    else if (comp === 'scissors' && user === 'rock') {
        result.innerText = ` You won!`
        statuss == true
    }
}

