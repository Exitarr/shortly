const User = require("../models/User")

const {setUser} = require("../services/auth")

async function handleSignup(req , res){
    const {userName , email , password} = req.body
    await User.create({userName , email , password})
    res.status(200).json({message : "User Created"})
}

async function handleLogin(req , res){
    const {email , password} = req.body
    const user = await User.findOne({email,password})
    if(!user){
        res.status(400).json({message : "Invalid Credentials"})
    }
    const token = setUser(user)
    res.cookie("uuid" , token)
    res.status(200).json({message : "Login Success"})
}

module.exports = {
    handleSignup,
    handleLogin
}