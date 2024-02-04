const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

function setUser(user){
    return jwt.sign({user} , process.env.JWT_SECRET)
}

function getUser(token){
    return jwt.verify(token , process.env.JWT_SECRET)
}

module.exports = {
    setUser,
    getUser
}