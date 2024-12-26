// routes/roadmapRoutes.js

const express = require('express');
// const { generateRoadmap } = require('../controllers/roadmapController');
const { getAllRoadmaps, createRoadmap } = require('../controllers/roadmapController');

const router = express.Router();

// Get all roadmaps
router.get('/roadmaps', getAllRoadmaps);

// Create a new roadmap
router.post('/roadmaps', createRoadmap);

module.exports = router;