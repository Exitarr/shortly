const Url = require('../models/Url');
const shortid = require('shortid');


async function handleGetAllUrls(req, res) {
    console.log(req.user)
    const urls = await Url.find({id : req.user.id});
    console.log(urls);
}

async function handleRedirect(req, res) {
    const { shortId } = req.params.id;
    const entry = await Url.findOneAndUpdate({
        shortId
    },{
        $push:{
            viewHistory : {
                timestamp : Date.now()
            }
        }
    })
    res.redirect(entry.redirectId)  
}

async function handleShortIdCreation(req, res) {
    const { originalUrl } = req.body;
    const shortId = shortid.generate();
    const newUrl = await Url.create({ originalUrl, shortId  , viewHistory: [] });
    res.status(201).json(newUrl);
}

module.exports = {
    handleGetAllUrls,
    handleShortIdCreation,
    handleRedirect
}