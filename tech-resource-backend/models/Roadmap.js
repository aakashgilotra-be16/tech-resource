const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Roadmap = mongoose.model('Roadmap', roadmapSchema);
module.exports = Roadmap;