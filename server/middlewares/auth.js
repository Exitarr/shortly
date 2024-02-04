const {getUser} = require('../services/auth.js');

async function authMiddleware(req, res, next) {
    const token = req.cookies.uuid;
    if (!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    user = getUser(token);
    if(!user){
        return res.status(401).json({message: 'Unauthorized'});
    }
    res.user = user;
    next();
}

module.exports ={ authMiddleware };
