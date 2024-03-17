const User = require("../models/User");
const { setUser } = require("../services/auth");

async function handleSignup(req, res) {
    const { userName, email, password } = req.body;
    await User.create({ userName, email, password });
    res.status(200).json({ message: "User Created" });
}

async function handleLogin(req, res) {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName, password });
    if (!user) {
        res.status(400).json({ message: "Invalid Credentials" });
        return; // Stop execution if user is not found
    }
    const token = setUser(user);
    res.send({data : token});
}

module.exports = {
    handleSignup,
    handleLogin
};
