// Operating module

const os = require(`os`)
// console.log(os)

const userInfo = os.userInfo()
// console.log(userInfo)

const uptime = `Your system uptime is ${os.uptime()} seconds`
// console.log(uptime)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)

