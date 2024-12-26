// controllers/roadmapController.js

const Resource = require('../models/resource');
const Roadmap = require('../models/Roadmap');
// Placeholder for AI/ML roadmap generation logic
const generateRoadmap = async (req, res) => {
  try {
    const { topic } = req.body;

    // Fetch relevant resources for the topic
    const resources = await Resource.findAll({ where: { topic } });

    // (AI logic here)
    // Example placeholder for roadmap generation
    const roadmap = resources.map((resource) => ({
      title: resource.title,
      url: resource.url,
      summary: resource.summary,
    }));

    res.status(200).json({ roadmap });
  } catch (error) {
    res.status(500).json({ error: 'Error generating roadmap' });
  }
};
// Get all roadmaps
const getAllRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find();
    res.status(200).json({ roadmaps });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching roadmaps' });
  }
};

// Create a new roadmap
const createRoadmap = async (req, res) => {
  try {
    const { title, summary, url } = req.body;
    const newRoadmap = new Roadmap({ title, summary, url });
    await newRoadmap.save();
    res.status(201).json({ roadmap: newRoadmap });
  } catch (error) {
    res.status(500).json({ error: 'Error creating roadmap' });
  }
};

module.exports = { generateRoadmap, getAllRoadmaps, createRoadmap };
