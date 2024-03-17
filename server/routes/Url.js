const express = require("express")
const router = express.Router()

const { handleGetAllUrls ,handleShortIdCreation , handleRedirect} = require("../controllers/Url")

router.route("/").get(handleGetAllUrls).post(handleShortIdCreation)
router.route("/:id").get(handleRedirect)

module.exports = router