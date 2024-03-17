const Url = require('../models/Url');
const shortid = require('shortid');


async function handleGetAllUrls(req, res) {
    const urls = await Url.find({id : req.user.id});
    res.json(urls);
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
    res.send(entry.originalUrl);
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