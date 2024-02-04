const express = require("express")

const app = express()
const connectDb = require("./config")


const userRouter = require("./routes/User")
const urlRouter = require("./routes/Url")
connectDb()

const { authMiddleware } = require("./middlewares/auth")

app.use(express.urlencoded({ extended : false}))
app.use(express.json())

port = 8000

app.use("/auth" , userRouter)
app.use("/api/urls",urlRouter)

app.listen(port , () => console.log(`Server Started A port ${port}`))