const grid = document.getElementById('grid')

let focusedQueue = []
let storedSet = {}

const imageArray = [
    {name: 'burger',
    source: 'memoryGameImages/burger.jpg',},
    {name: 'cake',
    source: 'memoryGameImages/cake.jpeg',},
    {name: 'chicken',
    source: 'memoryGameImages/chicken.jpg',},
    {name: 'cookie',
    source: 'memoryGameImages/cookie.jpg',},
    {name: 'egg',
    source: 'memoryGameImages/egg.jpg',},
    {name: 'hotDog',
    source: 'memoryGameImages/hotDog.webp',},
    {name: 'iceCream',
    source: 'memoryGameImages/iceCream.jpg',},
    {name: 'pancake',
    source: 'memoryGameImages/pancake.jpg',},
    {name: 'pasta',
    source: 'memoryGameImages/pasta.webp',},
    {name: 'pizza',
    source: 'memoryGameImages/pizza.jpeg',},
    {name: 'poutine',
    source: 'memoryGameImages/poutine.jpg',},
    {name: 'salad',
    source: 'memoryGameImages/salad.jpg',},
    {name: 'salmon',
    source: 'memoryGameImages/salmon.jpeg',},
    {name: 'questionMark',
    source: 'memoryGameImages/questionMark.jpeg',}

]

let counter = 0
for (let i=0; i<imageArray.length * 2; i++) {
    const imageData = document.createElement('img')
    imageData.src = 'memoryGameImages/questionMark.jpeg'
    imageData.style.width = "200px";
    imageData.style.height = "150px";
    imageData.id = `${counter}`
    counter++
    grid.appendChild(imageData)
}
let imgElements = grid.querySelectorAll('img')
imgElements.forEach(x => x.addEventListener('click', function() {
    focusedQueue.push(x.id)
    if (focusedQueue.length > 1) {
        if (storedSet[focusedQueue[0]][0] === storedSet[focusedQueue[1]][0]) {
            alert('You got a match')
            grid.removeChild(document.getElementById(focusedQueue[0]))
            grid.removeChild(document.getElementById(focusedQueue[1]))
            delete storedSet.focusedQueue[0]
            delete storedSet.focusedQueue[1]

        }
        else {
            alert('You messed up')
            focusedQueue = []
        }
        focusedQueue = []
    }

}))

function turnGrid(grid){
    let children = grid.children 
    for (element of children) {
        if (element.tagName === 'IMG') {
            element.src = 'memoryGameImages/questionMark.jpeg'
        }
    }
}

function randomSortImages() {
    randomNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
    //let storedSet = {}
    for (image of imageArray) {
        let index1 = Math.floor(Math.random() * randomNumbers.length)
        let numReturned1 = randomNumbers.splice(index1,1)
        storedSet[numReturned1] = [image.name, image.source]
        let index2 = Math.floor(Math.random() * randomNumbers.length)
        let numReturned2 = randomNumbers.splice(index2,1)
        storedSet[numReturned2] = [image.name, image.source]
    }
    return storedSet
}

function revealCards(object) {
    for (idNumber in object) {
        imageElement = document.getElementById(idNumber)
        imageElement.src = object[idNumber][1]
    }
    setTimeout(() => {
        turnGrid(grid)
    },5000)

}


let object1 = randomSortImages()

document.getElementById('reveal').addEventListener('click', function() {
    console.log(storedSet) 
    revealCards(storedSet)
})



//in the for list, add an id of 1,2,3 as i iterate through it and then randomly assign a number to the pictures 