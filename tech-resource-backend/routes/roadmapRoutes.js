// routes/roadmapRoutes.js

const express = require('express');
const { generateRoadmap } = require('../controllers/roadmapController');

const router = express.Router();

// POST /roadmap - Generate a roadmap
router.post('/roadmap', generateRoadmap);

module.exports = router;
