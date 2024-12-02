const User = require('../models/userModel');

// Lấy danh sách tất cả người dùng
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm một người dùng mới
exports.createUser = async (req, res) => {
    const { name, email, age } = req.body;

    const newUser = new User({
        name,
        email,
        age
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
