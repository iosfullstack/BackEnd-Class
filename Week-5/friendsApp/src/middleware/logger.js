const sayHi =(req, res, next)=>{
    const name = `try`
    console.log(`Hi ${name}`)
    
    next()
    }
    
const logger =(req, res, next) =>{
    const method = req.method
    const url = req.url
    const date = new Date().getFullYear()
    console.log(method, url, date)
} 