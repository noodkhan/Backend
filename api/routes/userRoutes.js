// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // model

// POST METHOD : register
router.post('/register', async (req, res) => {
  try {
    console.log('📥 Incoming data:', req.body);
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(400).json({ error: err.message });
  }
});


// POST METHOD : login
router.post('/login', async (req, res) => {
  const { username , password } = req.body;
  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    // Check if passwords match (not hashed in this case)
    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }
    // Success - send response
    res.status(200).json({ message: 'Login successful', 
      user: {
         id: user._id, 
         name: user.name, 
         username: user.username 
        } 
    });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});


// Get METHOD : all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// POST METHOD : Testing request body and header and params
router.post('/test' , (req , res) => {
  console.log('📥 Body:', req.body);
  res.json({ received: req.body });
})



module.exports = router;


// GET : http://localhost:3000/api/users              GET all User
// POST : http://localhost:3000/api/users/register    register
// POST : http://localhost:3000/api/users/login       login

// POST : http://localhost:3000/api/users/test        test request body

