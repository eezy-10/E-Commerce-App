import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from DB (excluding password)
            req.user = await User.findById(decoded.id).select('-password');
            next(); //Continue to the next route handler
        } catch (error) {
            console.error('Auth Failed',error.message);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if(!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
}

export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied, admin only' });
  }
};