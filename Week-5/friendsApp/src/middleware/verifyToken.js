const jwt = require(`jsonwebtoken`)
const dotenv = require(`dotenv`)
dotenv.config()

/*
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzRlODI3YmVjNWJjYzU2MDEyNTQzMjciLCJpYXQiOjE2NjYxNzE2MjB9.NTs2Qhkcd1ht0bQnZOEUnNHGf9JWx4OSoTiyV1-8fUA
*/

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    // console.log(authHeader)
    if (!authHeader || !authHeader.startsWith(`Bearer `)) {
       res.status (401).json({
        success: false, message: `Access Denied`
       })
    }
        const token = authHeader.split(` `)[1]
        const secret = process.env.JWT_SECRET 
        try {
            const verified = jwt.verify(token, `${secret}`)
            req.user = verified

            next()
        } catch (error) {
            res.status(401)
            .json({success: false, message: `${error.message}`})
        }
    
}

module.exports = verifyToken