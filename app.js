const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config(); // Đọc các biến môi trường từ file .env

const app = express();
app.use(express.json()); // Middleware cho xử lý JSON

// Cấu hình phục vụ tệp tĩnh
app.use('/images', express.static(path.join(__dirname, 'resource/images')));

// MongoDB URL
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://ntp14042004:0327151165@cluster0.3uw1l.mongodb.net/?retryWrites=true&w=majority';

// Kết nối MongoDB Atlas
mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB Atlas...'))
    .catch(err => console.error('Could not connect to MongoDB Atlas...', err));

// Import routes
const tourRoutes = require('./routes/tourRoutes'); // Route quản lý tours
const userRoutes = require('./routes/userRoutes'); // Route quản lý users

// Đăng ký routes
app.use('/api/tours', tourRoutes);
app.use('/api/users', userRoutes);

// Route mặc định
app.get('/', (req, res) => {
    res.send('Welcome to Node.js App connected to MongoDB Atlas!');
});

// Khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
