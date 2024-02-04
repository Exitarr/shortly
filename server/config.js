const mongoose = require("mongoose")

MONGO_URI = 'mongodb+srv://sourav123:2002@cluster0.ifu1nev.mongodb.net/?retryWrites=true&w=majority'

async function connectDb() {
    return mongoose.connect(MONGO_URI).then(() => console.log("Database Connected")).catch((err) => console.log(err))
}

module.exports = connectDb