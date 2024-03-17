const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()
const connectDb = require("./config")


const userRouter = require("./routes/User")
const urlRouter = require("./routes/Url")
connectDb()

const { authMiddleware } = require("./middlewares/auth")

app.use(cookieParser())
app.use(express.urlencoded({ extended : false}))
app.use(express.json())

app.use(cors())

port = 8000

app.use("/auth" , userRouter)
app.use("/api/urls",authMiddleware,urlRouter)

app.listen(port , () => console.log(`Server Started A port ${port}`))