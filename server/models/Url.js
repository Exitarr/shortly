const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
    },
    originalUrl: {
        type: String,
        required: true,
    },
    viewHistory: [{
        timestamp: {
            type: Number
        },
    }],
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;