// Asynchronous nature of node
// Variables: syntax and scope
// Class, Objects and Arrays, Accessing Items (dot and bracket notation)


// ************* Asynchronous nature of node ******************
setTimeout(() => {
    console.log('Statement Number One')

}, 4000)

console.log(`Statement Number Two`)
console.log('Statement Number Three')
// **************************************************************


// ***************** Class, Objects and Arrays, Accessing Items (dot and bracket notation)*****
const animals = {
    name: `dog`,
    sound: `bark`
}

class Animals {

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
}

const newAnimal = new Animals(`pig`, `grunt`) 

// const animalCollections = [`dog`, `cow`, `peacock`]
const animalCollections = []

animalCollections.push(newAnimal)

console.log(animals)
console.log(animalCollections[0].sound)

