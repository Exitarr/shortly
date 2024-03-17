const dotenv =  require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

URL = process.env.MONGO_URI

async function connectDb() {
    return mongoose.connect(URL).then(() => console.log("Database Connected")).catch((err) => console.log(err))
}

module.exports = connectDb