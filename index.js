const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

// routes
const userRoutes = require('./api/routes/userRoutes.js'); // route

// ports
const port = 3000;

// ต่อ MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas (DigitalOcean)'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// mongoDB collection name connect to route
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
