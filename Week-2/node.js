// Globals
// __dirname it helps to trace the directory to path
// __filename it traces the directory where the file exist and also include the file name
// require: The basic functionality of require is that it reads a JavaScript file, executes the file, and then proceeds to return the exports object



const path = __dirname
console.log(path)

const file = __filename 
console.log(file)

const {addNumbers, name} = require('./function')
const sayHello = () => {
    console.log(`Hello ${name}`)
}

// addNumbers(1, 4)
sayHello()
// console.log(addNumbers)