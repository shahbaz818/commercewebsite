const jwt = require('jsonwebtoken');
const User = require('../models/userModels'); // Adjust the path according to your file structure

// Middleware to verify if the user is authenticated
const authenticate = async(req, res, next) => {
    const token = req.headers.authorization == split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Middleware to check if the user is an admin
const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access forbidden' });
    }
    next();
};

// Middleware to check if the user is a regular user
const authorizeUser = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({ message: 'Access forbidden' });
    }
    next();
};

module.exports = {
    authenticate,
    authorizeAdmin,
    authorizeUser
};