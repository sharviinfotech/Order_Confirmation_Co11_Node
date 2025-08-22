const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const connectDB = require('./config/db');

// Initialize App
const app = express();

// Middleware
// app.use(cors());
// for deve server
app.use(cors({
    origin: '*', // Adjust the origin to your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express.json());

// Load Routes
app.use('/api', routes);

// Database Connection
// connectDB();

// Server Initialization
// const PORT = process.env.PORT || 3000;
const BASE_SERVER_URL = 'http://localhost'
const BASE_PORT = 3000
app.listen(BASE_PORT, () => 
    // console.log(`Server running on port ${PORT}`)
 console.log(`🚀 Server running on ${BASE_SERVER_URL}:${BASE_PORT}`)
);
