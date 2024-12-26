// routes/communityRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get all posts
router.get('/posts', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Submit a new post (Protected)
router.post('/posts', authMiddleware, async (req, res) => {
  const { content } = req.body;
  const username = req.user.username; // Authenticated user

  try {
    const newPost = new Post({ content, username });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
});

module.exports = router;
