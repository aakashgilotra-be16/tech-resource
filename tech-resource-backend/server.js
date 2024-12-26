// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { connectRabbitMQ } = require('./config/rabbitmq');
const roadmapRoutes = require('./routes/roadmapRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/mongoDB');
require('dotenv').config();
const cors = require('cors')
const app = express();
app.use(bodyParser.json());

app.use(cors());
// Connect to RabbitMQ
// connectRabbitMQ();

// Connect to MongoDB
connectDB();

// Initialize API Routes
app.use('/api', roadmapRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
