import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);
router.post('/login', loginUser);
// Route to get user profile (protected route)
router.get('/profile', protect, (req, res) => {
    res.json(req.user);
});

export default router;