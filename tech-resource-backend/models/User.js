// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const connectDB = require('../config/mongoDB');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

// Connect to MongoDB Atlas and create collections
connectDB().then(() => {
  User.createCollection().then(() => {
    console.log('User collection created');
  }).catch(err => {
    console.error('Error creating User collection:', err);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

module.exports = User;
