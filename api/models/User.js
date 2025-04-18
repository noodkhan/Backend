// api/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user', 'moderator'], default: 'user' },
  profilePicture: { type: String, default: 'default.jpg' },
  bio: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  status: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  address: { street: String, city: String, state: String, country: String },
  phoneNumber: { type: String, default: '' },
  preferences: { language: { type: String, default: 'en' }, theme: { type: String, default: 'light' } },
  subscription: { type: String, enum: ['free', 'premium', 'enterprise'], default: 'free' },
  location: { type: String }
});

module.exports = mongoose.model("User", userSchema);
