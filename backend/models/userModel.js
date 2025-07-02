import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
// This code defines a Mongoose schema for a User model in a Node.js application.