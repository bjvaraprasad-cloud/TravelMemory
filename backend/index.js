// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// --- Add this root route ---
app.get('/', (req, res) => {
    res.send('TravelMemory Backend is running!');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('DB ERROR: ', err);
});

// Start server
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';   // <-- bind to all interfaces

app.listen(PORT, HOST, () => {
    console.log(`Server started at http://${HOST}:${PORT}`);
});
