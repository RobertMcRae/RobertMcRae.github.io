const grid = document.getElementById('grid')

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
for (let i=0; i<imageArray.length; i++) {
    const imageData = document.createElement('img')
    imageData.src = 'memoryGameImages/questionMark.jpeg'
    imageData.style.width = "200px";
    imageData.style.height = "150px";
    imageData.id = `${counter}`
    counter++
    grid.appendChild(imageData)
}

function randomSortImages() {
    randomNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
    let storedSet = {}
    for (image of imageArray) {
        let index = Math.floor(Math.random() * randomNumbers.length)
        let numReturned = randomNumbers.splice(index,1)
        storedSet[numReturned] = [image.name, image.source]
    }
    return storedSet
}

function revealCards(object) {
    for (idNumber in object) {
        imageElement = document.getElementById(idNumber)
        console.log(object[idNumber][1])
        imageElement.src = object[idNumber][1]
    }

}

let object1 = randomSortImages()

document.getElementById('reveal').addEventListener('click', function() {
    revealCards(object1)
})

//in the for list, add an id of 1,2,3 as i iterate through it and then randomly assign a number to the pictures 