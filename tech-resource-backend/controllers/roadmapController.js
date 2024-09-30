// controllers/roadmapController.js

const Resource = require('../models/resource');

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

module.exports = { generateRoadmap };
