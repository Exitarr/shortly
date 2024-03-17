const { getUser } = require('../services/auth.js');

async function authMiddleware(req, res, next) {
    // Assuming the token is sent in a secure HTTP-only cookie
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    try {
        const user = await getUser(token);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { authMiddleware };
