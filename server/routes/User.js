const express =  require("express")
const router = express.Router()

const {handleSignup , handleLogin} = require("../controllers/User")

router.route("/signup").post(handleSignup)
router.route("/login").post(handleLogin)

module.exports = router