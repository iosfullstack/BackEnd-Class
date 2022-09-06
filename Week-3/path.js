// PATH Module

const path = require(`path`)
// console.log(path)
// ********** To check the seperator ***********
// console.log(path.sep)
// ************* To join path *****************
const filePath = path.join(`/content/`, `subfolder`, `readMe.txt`)
// console.log(filePath)
// ******** To get the extension of the file ************
// console.log(path.extname(filePath))

// *********** To get basename or the last file in the folder***
const base = path.basename(filePath)
// console.log(base)

const absolute = path.resolve(__dirname, `content`, `subfolder`, `test.txt`)
console.log(absolute)

