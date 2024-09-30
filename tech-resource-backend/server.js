// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { connectRabbitMQ } = require('./config/rabbitmq');
const roadmapRoutes = require('./routes/roadmapRoutes');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Connect to RabbitMQ
connectRabbitMQ();

// Initialize API Routes
app.use('/api', roadmapRoutes);

// Start the server
const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
  });
});
