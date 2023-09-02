const computerChoice = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button') //picks all the buttons
let userChoice


possibleChoices.forEach(x => x.addEventlistener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice //on each click, the user choice inner html is updated 
}))