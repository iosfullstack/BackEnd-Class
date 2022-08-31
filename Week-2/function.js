// Functions
function addNums(a, b) {
    const total = a + b
    console.log(total)
}   
const name = 'John Doe'
module.exports = {addNums, name}
// Function Declaration
// addNums(1, 4) 

const addTotal = (a, b) => {
    const total = a + b
    console.log(total)
} 
// Function Expression
// addTotal(6, 5) 

(function addFigures (a, b) {
    const total = a + b
    console.log(total)
})(1, 7)
// IIFE (Immediately Invoked Function Expression)
