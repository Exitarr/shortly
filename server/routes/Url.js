const express = require("express")
const router = express.Router()

const {handleShortIdCreation , handleRedirect} = require("../controllers/Url")

router.route("/").post(handleShortIdCreation)
router.route("/:id").get(handleRedirect)

module.exports = router